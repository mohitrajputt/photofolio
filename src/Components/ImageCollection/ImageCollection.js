import { useEffect, useState } from "react";
import styles from "./ImageCollection.module.css";
import {db} from "../../FirebaseConfig";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import ImageViewer from "../Image Viewer/ImageViewer";
import deleteIcon from "../../assets/delete.png";


const Photos = ({currentAlbum}) => {

    const [photos,setPhotos] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageViewStatus, setImageViewStatus] = useState(false);

    console.log(currentAlbum);

    // useEffect(() => {
    //     const photosRef = collection(db, "albums", albumId, "photos");
    //     onSnapshot(photosRef, (snapShot) => {
    //       const photosData = snapShot.docs.map((doc) => {
    //         return {
    //           id: doc.id,
    //           ...doc.data()
    //         }
    //       })
    //       setPhotos(photosData);
    //     })
    // },[albumId])

    async function handleDelete(photoId) {
      //  await deleteDoc(doc(db, "albums", albumId, "photos", photoId));
       toast.warning("Admin can only use this function");
    }

    function handleImageView(index) {
      setCurrentImageIndex(index);
      setImageViewStatus(!imageViewStatus);
    }

    function handleNextImage() {
      setCurrentImageIndex(currentImageIndex === currentAlbum.albumData.length - 1 ?  0 : currentImageIndex + 1 );
    }

    function handlePrevImage() {
      setCurrentImageIndex(currentImageIndex === 0 ? currentAlbum.albumData.length - 1 : currentImageIndex - 1);
    }

    return (
        <div className={styles.photoSection} >
            {currentAlbum.albumData.map((photo,id) => (
              <div className={styles.photoContainer} key={id} onClick={() => handleImageView(id)} >
                    <div className={styles.buttons} >
                      <div><img src={deleteIcon} alt="dlt" onClick={(e) => { e.stopPropagation(); handleDelete(photo.id)}} /></div>
                      {/* <div><img src="edit.png" alt="edit" onClick={(e) => { e.stopPropagation(); handleUpdate(photo.id)}} /></div> */}
                    </div>
                    {photo.url ?<>
                    <img src={photo.url} width="100%" height="100%" alt="img-thumbnail" />
                    <p className={styles.imageLabel} >{photo.name}</p></> : null }
              </div>
            ))}
            {currentAlbum.albumData.length === 0 ? <p  >😒 No item!, Add new images</p> : <p className={styles.imageCount} > Total Images ({currentAlbum.albumData.length}) </p> }
            {/* Image Viewer */}
            {imageViewStatus? 
            <ImageViewer 
            imageUrl={currentAlbum.albumData[currentImageIndex].url} 
            handleImageView={handleImageView} 
            handleNextImage={handleNextImage}
            handlePrevImage={handlePrevImage} /> : null }
        </div>
    )
}

export default Photos;