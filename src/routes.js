import React from "react";
import { 
    Routes, 
    Route,
    Navigate
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

export default function AppRoutes() {
  const user = () => {
   const user = sessionStorage.getItem('user');
   if(user && user !== ''){
     return true
   }
   return false;
  } 
  return (
        <Routes>
          <Route path='/' element={user() ? <Home/> : <Navigate to ='/login'/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Home' element={user() ? <Home/> : <Navigate to ='/login'/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
  );
}