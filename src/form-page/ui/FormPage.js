import { BasicButton } from '../../components/Buttons';
import './formpage.css';

export default function FormPage() {
    return (
        <div className="form-page-section">
            <h1 className='title'>Agent Login</h1>
            <form className='login'>
                <label htmlFor="email" className='label'>Email</label>
                <input type="email" id="email" className='input'></input>
                <label htmlFor="pwd" className='label'>Password</label>
                <input type="password" id="pwd" className='input'></input>
                <BasicButton text="Submit"/>
            </form>
        </div>
    );
}