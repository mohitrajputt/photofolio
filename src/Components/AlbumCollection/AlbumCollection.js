import styles from "./AlbumCollection.module.css"

const AlbumCollection = ({handleAlbumForm,albumFormStatus,albumData,handleSwitchRender}) => {
    return(
        <section className={styles.albumSection} >
            <div className={styles.albumContent} >
                <div className={styles.albumHeader} >
                    <div className={styles.albumHeading} >Albums</div>
                    <div className={styles.AlbumButton} onClick={handleAlbumForm} id={albumFormStatus? "red" : "blue"} >{albumFormStatus? "cancel":"Add album"}</div>
                </div>
                <div className={styles.albumContentContainer} >
                    {albumData.map((album,id) => (
                        <div key={id} className={styles.album} onClick={ () => handleSwitchRender(album)} >
                            <img src="image-thumb.png" width="80%" alt="img-thumbnail" />
                            <p>{album.album}</p>
                        </div>
                    ))}
                    {albumData.length === 0 ? <p>😒 No item!, Add new album</p> : null}
                </div>
            </div>
        </section>
    )
}

export default AlbumCollection;