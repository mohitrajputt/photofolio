import styles from "../AlbumCollection/AlbumCollection.module.css";
import Photos from "../ImageCollection/ImageCollection";

const Album = ({imageFormStatus, handleImageForm, handleSwitchRender, albumId}) => {
    return(
        <section className={styles.albumSection}  >
            <div className={styles.albumContent} >
                <div className={styles.albumHeader} >
                    <div className={styles.backButton} onClick={handleSwitchRender} >
                        <img src="back.png" alt="X" width="30px" />
                    </div>
                    <div className={styles.albumHeading} >Your Images</div>
                    <div className={styles.AlbumButton} onClick={handleImageForm} id={imageFormStatus? "red" : "blue"} >{imageFormStatus? "cancel":"Add image"}</div>
                </div>
                <Photos albumId={albumId} />
            </div>
        </section>
    )
}

export default Album;