import { useEffect, useState } from "react";
import styles from "./Photos.module.css";
import {db} from "../FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Photos = ({albumId}) => {

    const [photos,setPhotos] = useState({});

    useEffect(() => {
        console.log("id",albumId);
        // onSnapshot(collection(db, albumId), (snapShot) => {
        //   const photosData = snapShot.docs.map((doc) => {
        //     return {
        //       id: doc.id,
        //       ...doc.data()
        //     }
        //   })
        //   setPhotos(photosData);
        // })
    },[])

    return (
        <div className={styles.photoSection} >
            <div className={styles.photoContainer} >
                <img src="image-thumb.png" width="100%" height="100%" alt="img-thumbnail" />
            </div>
            <div className={styles.photoContainer} >
                <img src="image-thumb.png" width="100%" height="100%" alt="img-thumbnail" />
            </div>
        </div>
    )
}

export default Photos;