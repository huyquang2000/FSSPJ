import { useState } from 'react';
import LoginForm from './LoginForm';
import Logged from './Logged'

function Login() {
    const adminUser = {
        usernumber: "001C",
        password: "1234"
    }


    const [user, setUser] = useState({
        usernumber: "",
        password: ""
    });

    const [error, setError] = useState("");

    function Login(details) {
        console.log(details);
        if (details.usernumber == adminUser.usernumber && details.password == adminUser.password) {
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
                <Logged/>
                <button className='log-out-btn btn-inp' onClick={Logout}>Log out</button>
            </div>) :(< LoginForm Login={Login} error={error} />)
        }
        </div>
    );
}

export default Login;