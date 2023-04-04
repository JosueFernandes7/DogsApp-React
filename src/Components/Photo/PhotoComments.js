import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from './PhotoComments.module.css'
const PhotoComments = ({ id, comments,single }) => {
    const [comentarios, setComentarios] = React.useState(() => comments);

    const { login } = React.useContext(UserContext);

    return (
        <>
            <ul className={`${styles.comment} ${single ? styles.single : ''}`}>
                {comentarios.map((comment) => (
                    <li key={comment.comment_ID}>
                        <strong>{comment.comment_author}</strong>: {" "}
                          <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {login && <PhotoCommentsForm id={id} setComentarios ={setComentarios} single={single}/>}
        </>
    );
};

export default PhotoComments;
