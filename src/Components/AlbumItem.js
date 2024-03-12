import styles from "./AlbumItem.module.css"

const AlbumItem = ({album,handleImage}) => {
    return(
        <div className={styles.albumContentContainer} >
            {album.map((item,id) => (
                <div key={id} className={styles.album} onClick={ () => handleImage(item.id)} >
                    <img src="image-thumb.png" width="80%" alt="img-thumbnail" />
                    <p>{item.album}</p>
                </div>
            ))}
        </div>
    )
}

export default AlbumItem;