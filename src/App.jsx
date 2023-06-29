import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUpPage';
import SignIn from './pages/SignInPage';
import Feed from './pages/Feed';
import { Context } from './contexts/UserContext';

function App() {
  return (
    <>
      <ToastContainer />

        <BrowserRouter>
          <Context>
            <Routes>
              <Route path='/' exact element={<SignIn/>} />
              <Route path='/sign-up' exact element={<SignUp/>} />
              <Route path='/feed' exact element={<Feed />}/>
              <Route path='/my-profile' exact/>
              <Route path='/my-neighbors' exact/>
              <Route path='/my-neighbors/:id' exact/>
              <Route path='/publish' exact/>
            </Routes>
          </Context>
        </BrowserRouter>
    </>
  )
}

export default App
