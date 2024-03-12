import { useEffect, useState } from "react"
import CreateAlbum from "./Components/CreateAlbum";
import AlbumList from "./Components/AlbumList";
import {db} from "./FirebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import SubAlbumList from "./Components/SubAlbumList";
import AddImages from "./Components/AddImages";

function App() {

  const [addAlbum,setAddAlbum] = useState(false);
  const [viewImages,setViewImages] = useState(false);
  const [addImage,setaddImage] = useState(false);
  const [albumName,setAlbumName] = useState([]);
  const [tempId,setTempId] = useState("");

  // handle Add Album Section
  function handleAlbum(id) {
    // setAddAlbum(!addAlbum);
    // setTempId(id);
    console.log("here",id);
  }
  
  // handle Add Image Section
  function handleImage() {
    setaddImage(!addImage);
  }

  // handle Image section view
  function handleImage() {
    setViewImages(!viewImages);
  }

  // render data from firebase
  useEffect(() => {
    onSnapshot(collection(db, "albums"), (snapShot) => {
      const albums = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setAlbumName(albums);
    })
  })

  async function handleAlbumName(album) {
    // store data into firebase
    const albums = await addDoc(collection(db, "albums"), {
      album: album
    });
    // create empty collection for photos
    await addDoc(collection(albums, "photos"), {});
  }

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="navbar-content" >
          <img className="logo" src="logo.png" width="90px" />
        </div>
      </nav>

      {viewImages? 
        <> 
          {/* Component for add images  */}
          {addImage ? <AddImages  /> : <></>}
          <SubAlbumList handleImage={handleImage} buttonStatus={addImage} albumId={tempId}  />
        </> :
        <> 
          {/* component for Create an Album */}
          {addAlbum ? <CreateAlbum handleAlbumName={handleAlbumName} /> : <></> }
          {/* Component for Album */}
          <AlbumList albums={albumName} handleAlbum={handleAlbum} buttonStatus={addAlbum} handleImage={handleImage} />
        </>
      }
    </>
  );
}

export default App;
