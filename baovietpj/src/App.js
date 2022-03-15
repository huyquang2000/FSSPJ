import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
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