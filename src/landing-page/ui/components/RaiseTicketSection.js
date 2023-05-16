import customerSupportGirl from "../../../assets/customerSupportGirl.png";
import {OutlinedButton} from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";

export default function RaiseTicketSection() {
    const navigate = useNavigate();
    return (
        <div className="section raise-ticket" id="raise-a-ticket">
            <h3 className="sub white-title">Welcome to</h3>
            <h1 className="main white-title">SupportDesk.</h1>
            <p className="tagline white-title">Get the help you need, every step of the way. Get your queries resolved instantly!</p>
            <OutlinedButton className="raise-ticket-button outlined-button" text={
                <em>
                    Raise a ticket <span className="arrow">↗</span>
                </em>
            } onClick = {() => {navigate("/raise-ticket");}}/>
            <img src={customerSupportGirl} className="support-girl" alt="customer support girl"></img>
        </div>
    );
}