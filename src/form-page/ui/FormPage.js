import { useState } from 'react';
import { BasicButton } from '../../components/Buttons';
import Form from '../../components/Form';
import './formpage.css';

export default function FormPage({type}) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = (name, email, subject, msg, type) => {
        setIsLoading(true);

        const url = "http://localhost:8000/userform";
        const form = {
            "name": name,
            "email": email,
            "subject":subject,
            "message": msg,
            "type": type
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
                <form className='form-style'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id="email" className='input'></input>
                    <label htmlFor="pwd" className='label'>Password</label>
                    <input type="password" id="pwd" className='input'></input>
                    <BasicButton text="Submit"/>
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