import { useEffect, useState } from "react";
import styles from "./ImageCollection.module.css";
import {db} from "../../FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Photos = ({albumId}) => {

    const [photos,setPhotos] = useState([]);

    useEffect(() => {
        const photosRef = collection(db, "albums", albumId, "photos");
        console.log(photosRef)
        onSnapshot(photosRef, (snapShot) => {
          const photosData = snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setPhotos(photosData);
        })
    },[albumId])

    return (
        <div className={styles.photoSection} >
            {photos.map((photo,id) => (
                <div className={styles.photoContainer} key={id} >
                    {photo.url ?<img src={photo.url} width="100%" height="100%" alt="img-thumbnail" /> : null }
                </div>
            ))}
        </div>
    )
}

export default Photos;