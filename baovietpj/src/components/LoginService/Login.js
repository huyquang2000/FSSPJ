import { useState } from 'react';
import LoginForm from './LoginForm';
import { users } from '../../serverAPI/Userdata';
import {useNavigate  } from 'react-router-dom';
import './Login.css';
function Login() {
    const navigate  = useNavigate();
    const handledStory = () => {
        navigate('/Home')
    }
    const [user, setUser] = useState({
        usernumber: "",
        password: ""
    });

    const [error, setError] = useState("");

    function Login(details) {
        const checkuser = users.find(user => (user.usernumber === details.usernumber && user.password === details.password));
        if (checkuser) {

            console.log("Logged in");
            setUser({
                usernumber: details.usernumber,
                password: details.password
            });
            handledStory();
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
                <button className='log-out-btn btn-inp' onClick={Logout}>Log out</button>
            </div>) : (
                <div>
                    < LoginForm Login={Login} error={error} />
                </div>)
        }

        </div>
    );
}

export default Login;