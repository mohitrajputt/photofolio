import styles from "./AlbumCollection.module.css";
import thumbnail from "../../assets/image-thumb.png";

const AlbumCollection = ({handleAlbumForm,albumFormStatus,album,handleSwitchRender}) => {
    return(
        <section className={styles.albumSection} >
            <div className={styles.albumContent} >
                <div className={styles.albumHeader} >
                    <div className={styles.albumHeading} >Albums</div>
                    <div className={styles.AlbumButton} onClick={handleAlbumForm} id={albumFormStatus? "red" : "blue"} >{albumFormStatus? "cancel":"Add album"}</div>
                </div>
                <div className={styles.albumContentContainer} >
                    {album.map((albumData,id) => (
                        <div key={id} className={styles.album} onClick={ () => handleSwitchRender(albumData)} >
                            <img src={thumbnail} width="80%" alt="img-thumbnail" />
                            <p>{albumData.albumName}</p>
                        </div>
                    ))}
                    {album.length === 0 ? <p>😒 No item!, Add new album</p> : null}
                </div>
            </div>
        </section>
    )
}

export default AlbumCollection;