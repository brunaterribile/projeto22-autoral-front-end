import { styled } from "styled-components"
import perfil from '../assets/icons/profile-pic.png'
import mural from '../assets/icons/mural.png'
import mais from '../assets/icons/mais.png'
import vizinhanca from '../assets/icons/vizinhanca.png'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function SideBar(){
    const navigate = useNavigate()
    const { setShowSideBar } = useContext(UserContext)

    return (
        <SideBarContainer>
            <div onClick={() => {navigate('/my-profile'), setShowSideBar(false)}}>
                <img src={perfil}/>
                <p>Nome do usuário</p>
            </div>
            <div onClick={() => {navigate('/my-neighbors'), setShowSideBar(false)}}>
                <img src={vizinhanca}/>
                <p>Meus Vizinhos</p>
            </div>
            <div onClick={() => {navigate('/feed'), setShowSideBar(false)}}>
                <img src={mural}/>
                <p>Mural</p>
            </div>
            <div onClick={() => {navigate('/publish'), setShowSideBar(false)}}>
                <img src={mais}/>
                <p>Publicar</p>
            </div>
        </SideBarContainer>
    )
}

const SideBarContainer = styled.div`
    position: absolute;
    width: 15vw;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #2A3F66;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        padding: 12px 20px;
        display: flex;
        align-items: center;
        gap: 20px;

        img {
            height: 50px;
            width: 50px;
        }

        p {
            font-size: 20px;
            font-weight: 400;
            color: white;
            text-align: center;
        }
    }
`