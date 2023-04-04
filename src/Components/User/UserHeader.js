import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";
function UserHeader() {
    const [title, setTitle] = React.useState(null);
    const location = useLocation();

    React.useEffect(() => {
        const {pathname} = location;
        let newTitle = pathname.split("/").filter(e => e !== "conta").join('');
        if(newTitle === "") newTitle = " Minha Conta";
        else newTitle = newTitle[0].toUpperCase() + newTitle.substring(1)
        

        setTitle(newTitle);
    }, [location])
    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    );
}

export default UserHeader;
