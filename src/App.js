import AlbumForm from "./Components/AlbumForm/AlbumForm";
import AlbumCollection from "./Components/AlbumCollection/AlbumCollection";
import Album from "./Components/Album/Album";
import ImageForm from "./Components/ImageForm/ImageForm";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react"
import {db} from "./FirebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

function App() {

  const [albumFormStatus,setAlbumFormStatus] = useState(false);
  const [imageFormStatus,setImageFormStatus] = useState(false);
  const [albumData,setAlbumData] = useState([]);
  const [switchRendering,setSwitchRendering] = useState(true);
  const [album,setAlbum] = useState([]);

  // Handle Album Form Component
  function handleAlbumForm() {
    setAlbumFormStatus(!albumFormStatus);
  }

  // Handle Image Form Component
  function handleImageForm() {
    setImageFormStatus(!imageFormStatus);
  }

  // Handle Album Creation
  async function CreateAlbum(albumName) {
    await addDoc(collection(db, "albums"), {
      album: albumName
    });
    toast.success("New Album Created !");
  }

  // Render Album Data
  useEffect(() => {
    onSnapshot(collection(db, "albums"), (snapShot) => {
      const albums = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setAlbumData(albums);
    })
  },[]);

  // Handle Switching 
  function handleSwitchRender(album) {
    setSwitchRendering(!switchRendering);
    setAlbum(album)
  }

  // Add Image
  async function AddPhoto(photoData) {
    const photoRef = collection(db, "albums", album.id, "photos");
    await addDoc(photoRef, photoData);
    toast.success("New Image Added !");
  }

  return (
    <>
    <ToastContainer />
      {/* Navbar Component */}
      <nav>
        <div className="navbar-content" >
          <img className="logo" src="logo.png" width="90px" alt="logo" />
        </div>
      </nav>

      {
        switchRendering ?
          // Album Component
          <>
          {albumFormStatus ? <AlbumForm CreateAlbum={CreateAlbum} /> : null }
          <AlbumCollection 
            albumFormStatus={albumFormStatus} handleAlbumForm={handleAlbumForm} 
            albumData={albumData}
            handleSwitchRender={handleSwitchRender} /> 
          </>
        :
          // Image Component
          <>
          {imageFormStatus ? <ImageForm AddPhoto={AddPhoto} /> : null}
          <Album
          handleSwitchRender={handleSwitchRender}
          handleImageForm={handleImageForm} imageFormStatus={imageFormStatus}
          album={album} />
          </>
      }
    </>
  );
}

export default App;
