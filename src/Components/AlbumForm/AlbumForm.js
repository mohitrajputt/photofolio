import { useRef } from "react";
import styles from "./AlbumForm.module.css";

const AlbumForm = ({CreateAlbum}) => {
    let albumRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();

        CreateAlbum(albumRef.current.value);
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

export default AlbumForm;