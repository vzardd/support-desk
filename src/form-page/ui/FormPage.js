import { useState } from 'react';
import { BasicButton } from '../../components/Buttons';
import Form from '../../components/Form';
import './formpage.css';
import { sha256 } from 'js-sha256';
import { useNavigate } from 'react-router-dom';

export default function FormPage({type}) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const navigate = useNavigate();

    const validateLogin = (e) => {
        e.preventDefault();
        if(loginEmail.length===0 || loginPass.length===0){
            return;
        }
        let token = sha256(loginEmail+"+"+loginPass);
        console.log(token);
        //admin@supportdesk.com+admin*123
        if(token === "570ede1e537342ca5cdbd61b916a094decdb54401777d4d0e4e6b3c1542edf49"){
            navigate("/dashboard");
        }
    }

    const onSubmit = (name, email, subject, msg, type) => {
        setIsLoading(true);

        const url = "http://localhost:8000/userform";
        const form = {
            "name": name,
            "email": email,
            "subject":subject,
            "message": msg,
            "type": type,
            "status":"open"
        }

        fetch(url, {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(form)})
        .then( res => {
            if(!res.ok){
                throw Error("Mission failed");
            }
            return res.json();
        })
        .then(
            data => {
                setError(null);
                setIsLoading(false);
            }
        )
        .catch(
            err => {
                setIsLoading(false);
                setError(err.message);
            }
        )
    }

    if(type==="login"){
        return (
            <div className="form-page-section">
                <h1 className='title'>Agent Login</h1>
                <form className='form-style' onSubmit = {(e) => validateLogin(e)}>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id="email" value = {loginEmail} onChange = { lem => setLoginEmail(lem.target.value)} className='input'></input>
                    <label htmlFor="pwd" className='label'>Password</label>
                    <input type="password" id="pwd" value = {loginPass} onChange = { pwd => setLoginPass(pwd.target.value)}className='input'></input>
                    <BasicButton type="submit" text="Submit"/>
                </form>
            </div>
        );
    }
    else if(type==="raise-ticket"){
        return (
            <div className="form-page-section">
                <h1 className='title'>Raise ticket</h1>
                <Form width="min(80vw,80vh)" onSubmit={ (name, email, subject, msg) => { onSubmit(name, email, subject, msg, "raise-ticket")}} isLoading={isLoading} error={error}/>
            </div>
        );
    }
    else if(type==="request-feature"){
        return (
            <div className="form-page-section">
                <h1 className='title'>Request feature</h1>
                <Form width="min(80vw,80vh)" onSubmit={ (name, email, subject, msg) => { onSubmit(name, email, subject, msg, "request-feature")}} isLoading={isLoading} error={error}/>
            </div>
        );
    }
}