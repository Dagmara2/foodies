'use client';

import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.click();
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);


    }

    return <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
            <div className={styles.preview}>
                {!pickedImage ?
                    <p>No image selected</p>
                    : <Image src={pickedImage} alt='preview' fill />
                }
            </div>
            <input className={styles.input} type='file' id={name} accept='image/png, image/jpeg' name={name} ref={inputRef} onChange={handleImageChange} required />
            <button className={styles.button} type='button' onClick={handleClick}>Pick an Image</button>
        </div>
    </div>
}