import React from 'react';
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => console.log(result)).catch((error) => console.log(error));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={require('./assets/images/Phoenix.png').default} alt="Phoenix Logo" />
                <div className="login__text">
                    <h1>Sign in to Phoenix</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
