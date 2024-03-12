import { useRef } from "react";
import styles from "./CreateAlbum.module.css";

const CreateAlbum = ({handleAlbumName}) => {
    let albumRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        // call a props to store input value
        handleAlbumName(albumRef.current.value);
        console.log(albumRef.current.value);
        albumRef.current.value = "";
    }

    return(
        <form className={styles.CreateAlbumForm} onSubmit={handleSubmit} >
            <p className={styles.FormLabel} >Create an album</p>
            <div className={styles.container} >
                <input placeholder="Album Name" ref={albumRef} />
                <div className={styles.buttonContainer} > 
                    <button className={styles.resetButton} type="reset" >Clear</button>
                    <button className={styles.submitButton} type="submit" >Create</button>
                </div>
            </div>
        </form>
    )
}

export default CreateAlbum;