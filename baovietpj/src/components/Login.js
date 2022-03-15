import { useState } from 'react';
import LoginForm from './LoginForm';
import Logged from './Logged'
import { users } from './Userdata'
import { Link } from 'react-router-dom';

function Login() {

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
            </div>) : (
                <div>
                    {/* <Link to="/Home" className='home-page'>
                        <h1 >Trang chủ</h1>
                    </Link> */}
                    < LoginForm Login={Login} error={error} />
                </div>)
        }

        </div>
    );
}

export default Login;