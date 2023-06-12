import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUpPage';
import SignIn from './pages/SignInPage';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignIn/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
