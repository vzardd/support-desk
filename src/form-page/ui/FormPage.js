import { BasicButton } from '../../components/Buttons';
import Form from '../../components/Form';
import './formpage.css';

export default function FormPage({type}) {

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
                <Form width="min(80vw,80vh)"/>
            </div>
        );
    }
    else if(type==="request-feature"){
        return (
            <div className="form-page-section">
                <h1 className='title'>Request feature</h1>
                <Form width="min(80vw,80vh)"/>
            </div>
        );
    }
}