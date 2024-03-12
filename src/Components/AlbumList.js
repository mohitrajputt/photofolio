import AlbumItem from "./AlbumItem";
import styles from "./AlbumList.module.css"

const AlbumList = ({albums,handleAlbum,buttonStatus,handleImage}) => {
    return(
        <section className={styles.albumSection} >
            <div className={styles.albumContent} >
                {/* Album header  */}
                <div className={styles.albumHeader} >
                    <div className={styles.albumHeading} >Your albums</div>
                    <div className={styles.AlbumButton} onClick={handleAlbum} id={buttonStatus? "red" : "blue"} >{buttonStatus? "cancel":"Add album"}</div>
                </div>
                {/* Album Main */}
                <AlbumItem album={albums} handleImage={handleAlbum} />
            </div>
        </section>
    )
}

export default AlbumList;