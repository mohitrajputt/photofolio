import Photos from "./Photos";
import styles from "./AlbumList.module.css"

const SubAlbumList = ({handleImage, buttonStatus, handleImageView, albumId}) => {
    return(
        <section className={styles.albumSection}  >
            <div className={styles.albumContent} >
                {/* Album header  */}
                <div className={styles.albumHeader} >
                    <div className={styles.backButton} onClick={handleImageView} >
                        <img src="back.png" alt="X" width="30px" />
                    </div>
                    <div className={styles.albumHeading} >Your Images</div>
                    <div className={styles.AlbumButton} onClick={handleImage} id={buttonStatus? "red" : "blue"} >{buttonStatus? "cancel":"Add image"}</div>
                </div>
                {/* Album Main */}
                <Photos albumId={albumId} />
            </div>
        </section>
    )
}

export default SubAlbumList;