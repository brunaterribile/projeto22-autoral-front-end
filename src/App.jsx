import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUpPage';
import SignIn from './pages/SignInPage';
import Feed from './pages/Feed';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignIn/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
          <Route path='/feed' exact element={<Feed />}/>
          <Route path='/my-profile' exact/>
          <Route path='/my-neighbors' exact/>
          <Route path='/my-neighbors/:id' exact/>
          <Route path='/publish' exact/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
