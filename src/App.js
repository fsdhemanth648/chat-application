import './style.scss';
import SignUp from './Pages/SignUp';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Home from './Pages/Home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path='dashboard' element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>}/>
          <Route path='login' element={<Login/>}/>
          <Route path="register" element={<SignUp/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
