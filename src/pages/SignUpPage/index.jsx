import { FormBar, SignUpContainer } from '../SignUpPage/styled'
import logo from '../../assets/images/logo1.png'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <SignUpContainer>
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
                        <input
                            name="username"
                            type="name"
                            placeholder="username"
                            required
                        />
                        <button type='submit'>Cadastrar</button>
                    </form>
                    <Link to="/">
                        <p>Já faz parte? Entre por aqui!</p>
                    </Link>
                </div>
            </FormBar>
        </SignUpContainer>
    )
}

