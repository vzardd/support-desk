import customerSupportGirl from "../../../assets/customerSupportGirl.png";
import OutlinedButton from "../../../components/Buttons";

export default function RaiseTicketSection() {
    return (
        <div className="section raise-ticket" id="raise-a-ticket">
            <h3 className="sub white-title">Welcome to</h3>
            <h1 className="main white-title">SupportDesk.</h1>
            <p className="tagline white-title">Get the help you need, every step of the way. Get your queries resolved instantly!</p>
            <OutlinedButton className="raise-ticket-button outlined-button" text={
                <em>
                    Raise a ticket <span className="arrow">↗</span>
                </em>
            }/>
            <img src={customerSupportGirl} className="support-girl"></img>
        </div>
    );
}