import { useState } from 'react';
import LoginForm from './LoginForm';
import Logged from './Logged'
import {users} from './Userdata'

function Login() {


    const [user, setUser] = useState({
        usernumber: "",
        password: ""
    });

    const [error, setError] = useState("");

    function Login(details) {
        // const checkuser = users.map(user => {
        //     if () {
        //         return true;
        //     }
        //     else {
        //         return false;
        //     }
        // })
        if (users.find(user => (user.usernumber === details.usernumber && user.password === details.password))) {
            console.log("Logged in");
            setUser({
                usernumber: details.usernumber,
                password: details.password
            });
        } else {
            console.log("Logged fail");
            setError("Fail")
        }
    }

    const Logout = () => {
        setUser({
            usernumber: "",
            password: ""
        })
    }

    return (
        <div className="Login" > {
            (user.usernumber != "") ? (<div>
                <Logged />
                <button className='log-out-btn btn-inp' onClick={Logout}>Log out</button>
            </div>) : (< LoginForm Login={Login} error={error} />)
        }
        </div>
    );
}

export default Login;