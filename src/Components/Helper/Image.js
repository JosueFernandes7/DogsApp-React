import React from "react";
import styles from "./Image.module.css";

const Image = ({ alt, ...props }) => {
    const [skeleton, setSkeleton] = React.useState(true)

    function handleImageLoad({ target }) {
        target.style.opacity = 1;
        setSkeleton(false)
    }
    return (
        <div className={styles.wrapper}>
            {skeleton && <div className={styles.skeleton}></div>}
            <img
                onLoad={handleImageLoad}
                className={styles.img}
                alt={alt}
                {...props}
            ></img>
        </div>
    );
};

export default Image;
