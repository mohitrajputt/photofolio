import AlbumForm from "./Components/AlbumForm/AlbumForm";
import AlbumCollection from "./Components/AlbumCollection/AlbumCollection";
import Album from "./Components/Album/Album";
import ImageForm from "./Components/ImageForm/ImageForm";
import logo from "../src/assets/logo.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react"
import {db} from "./FirebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

import {albumOfflineData} from "./OfflineData";

function App() {

  const [albumFormStatus,setAlbumFormStatus] = useState(false);
  const [imageFormStatus,setImageFormStatus] = useState(false);
  // Album
  const [album,setAlbum] = useState(albumOfflineData);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [albumData, setAlbumData] = useState(currentAlbum);

  const [switchRendering,setSwitchRendering] = useState(true);
  // const [album,setAlbum] = useState([]);

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
    // await addDoc(collection(db, "albums"), {
    //   album: albumName
    // });
    // setAlbum(albumName);
    setAlbum([...album,{albumName: albumName}]);
    toast.success("New Album Created !");
  }

  // Render Album Data
  // useEffect(() => {
  //   onSnapshot(collection(db, "albums"), (snapShot) => {
  //     const albums = snapShot.docs.map((doc) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //     })
  //     setAlbum(albums);
  //   })
  // },[]);

  // Handle Switching Actually i button to open album data
  function handleSwitchRender(C_Album) {
    setSwitchRendering(!switchRendering);
    setCurrentAlbum(C_Album);
  }

  // Add Image
  async function AddPhoto(photoData) {
    // const photoRef = collection(db, "albums", album.id, "photos");
    // await addDoc(photoRef, photoData);
    // setAlbum([...album,{album}]);
    toast.warning("Something Went Wrong !");
  }

  return (
    <>
    <ToastContainer />
      {/* Navbar Component */}
      <nav>
        <div className="navbar-content" >
          <img className="logo" src={logo} width="90px" alt="logo" />
        </div>
      </nav>

      {
        switchRendering ?
          // Album Component
          <>
          {albumFormStatus ? <AlbumForm CreateAlbum={CreateAlbum} /> : null }
          <AlbumCollection 
            albumFormStatus={albumFormStatus} handleAlbumForm={handleAlbumForm} 
            album={album}
            handleSwitchRender={handleSwitchRender} /> 
          </>
        :
          // Image Component
          <>
          {imageFormStatus ? <ImageForm AddPhoto={AddPhoto} /> : null}
          <Album
          handleSwitchRender={handleSwitchRender}
          handleImageForm={handleImageForm} imageFormStatus={imageFormStatus}
          currentAlbum={currentAlbum} />
          </>
      }
    </>
  );
}

export default App;
