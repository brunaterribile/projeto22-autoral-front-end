import { styled } from "styled-components"
import smallLogo from '../assets/images/logo2.png'
import logOut from '../assets/icons/sair.png'
import options from '../assets/icons/opções.png'

export default function Header(){
    return (
        <Head>
            <img className="icon" src={options} alt="options"/>
            <img src={smallLogo} alt="logo"/>
            <img className="icon" src={logOut} alt="logout"/>
        </Head>
    )
}

const Head = styled.div`
    position: absolute;
    width: 100vw;
    height: 70px;
    top: 0px;
    background: #5B7AB3;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;

    .icon {
        height: 45px;
        width: 45px;
        margin-top: 10px;
    }
`