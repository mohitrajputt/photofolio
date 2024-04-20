import styles from "./ImageViewer.module.css";

function ImageViewer({imageUrl,handleImageView, handleNextImage, handlePrevImage}) {
    return(
        <section className={styles.ImageViewSection} >
            <div className={styles.ImageController} >
                <div className={styles.prevButton} onClick={handlePrevImage} >&#10094;</div>
                <div className={styles.ImageView} >
                    <img src={imageUrl} alt="" />
                </div>
                <div className={styles.nextButton} onClick={handleNextImage} >&#10095;</div>
            </div>
            <div className={styles.exitButton} onClick={handleImageView} >X</div>
        </section>
    )
}

export default ImageViewer;