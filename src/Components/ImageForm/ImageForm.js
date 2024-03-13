import { useRef } from "react";
import styles from "./ImageForm.module.css";

const AddImages = ({AddPhoto}) => {
    let titleRef = useRef(null);
    let urlRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();

        const photoData = {
            title: titleRef.current.value,
            url: urlRef.current.value
        }

        AddPhoto(photoData);

        titleRef.current.value = "";
        urlRef.current.value = "";
    }
    return(
        <form className={styles.addImageForm} onSubmit={handleSubmit} >
            <p className={styles.FormLabel} >Add Images </p>
            <div className={styles.container} >
                <input placeholder="Title" ref={titleRef} />
                <input placeholder="Image URL" ref={urlRef} />
                <div className={styles.buttonContainer} > 
                    <button className={styles.resetButton} type="reset" >Clear</button>
                    <button className={styles.submitButton} type="submit" >Create</button>
                </div>
            </div>
        </form>
    )
}

export default AddImages;