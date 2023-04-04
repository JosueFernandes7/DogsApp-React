import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../UserContext";
import NaoEncontrada from "../NaoEncontrada";
import Head from "../Helper/Head";

function User() {
    const {data} = React.useContext(UserContext)
    return <section className="container">
        <Head title={data.username}/>
    <UserHeader/>
    <Routes>
        <Route path="/" element={<Feed user={data.id}/>}/>
        <Route path="/postar" element={<UserPhotoPost/>}/>
        <Route path="/estatisticas" element={<UserStats/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
    </Routes>
    </section>;
}

export default User;
