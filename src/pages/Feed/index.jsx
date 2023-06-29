import { useContext } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { UserContext } from "../../contexts/UserContext";

export default function Feed(){
    const { showSideBar } = useContext(UserContext)

    return (
        <>
            <Header></Header>
            {showSideBar? <SideBar /> : <></>}
        </>
    )
}