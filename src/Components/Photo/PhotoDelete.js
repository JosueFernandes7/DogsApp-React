import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    const handleDelete = async () => {
        const confirm = window.confirm("Are you sure you want to delete this?");
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    };
    return (
        <>
            {loading ? (
                <button className={styles.delete} disabled>
                    Deletar
                </button>
            ) : (
                <button onClick={handleDelete} className={styles.delete}>
                    Deletar
                </button>
            )}
        </>
    );
};

export default PhotoDelete;
