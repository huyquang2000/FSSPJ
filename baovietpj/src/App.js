import React from 'react';
import Home from './components/HomeComponents/Home';
import Login from './components/LoginForm/Login';
import { Routes ,Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login/>}  />
                <Route  path="/Home" element={<Home/>} />
            </Routes>
        </>
    );
}

export default App;