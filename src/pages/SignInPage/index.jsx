import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo1.png'
import { FormBar, SignInContainer } from './styled'

export default function SignIn() {
    return (
        <SignInContainer>
            <div className='logo'>
                <img src={logo} alt='logo'/>
                <h1>VizinhApp</h1>
            </div>
            <FormBar>
                <h2>Seja bem-vindo ao melhor aplicativo da vizinhança!</h2>
                <div className='form'>
                    <form >
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            required
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            required
                        />
                        <button type='submit'>Entrar</button>
                    </form>
                    <Link to="/sign-up">
                        <p>Ainda não é cadastrado? Crie uma conta!</p>
                    </Link>
                </div>
            </FormBar>
        </SignInContainer>
    )
}