import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import styles from "./PhotoContent.module.css";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image";

const PhotoContent = ({ data, single }) => {
    const user = React.useContext(UserContext);
    const { photo, comments } = data;
    if (data === null) return null;
    return (
        <div className={`${styles.photo} ${single ? styles.single : ""}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title}/>
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data && user.data.username === photo.author ? (
                            <PhotoDelete id={photo.id} />
                        ) : (
                            <Link to={`/perfil/${photo.author}`}>
                                @{photo.author}
                            </Link>
                        )}

                        <span className={styles.visualizacoes}>
                            {photo.acessos}
                        </span>
                    </p>
                    <h1 className="title">
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>{photo.peso} kg</li>
                        <li>
                            {photo.idade} {photo.idade === 1 ? "ano" : "anos"}
                        </li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} comments={comments} single={single}/>
        </div>
    );
};

export default PhotoContent;