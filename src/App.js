import './App.css';
import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Components/Login/Login';
import {AuthContext, FirebaseContext} from './store/Context'


function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[]);
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={< Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
 