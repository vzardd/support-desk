import idea from "../../../assets/idea.png";
import {OutlinedButton} from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";

export default function RequestFeature () {
    const navigate = useNavigate();
    return (
        <div className="section request-feature" id="request-feature">
            <img src={idea} className="request-feature-image" alt="idea"></img>
            <h1 className="request-title black-title">Request a feature.</h1>
            <p className="request-tagline black-title">Got an idea? Let's make it happen. Request a feature today.</p>
            <OutlinedButton className="request-button outlined-button" borderColor="var(--primary)" color="var(--primary)" text={
                <em>
                    Request Feature <span className="arrow">↗</span>
                </em>
            } onClick = {() => {navigate("/request-feature");}}/>
            <div className="blur-gradient"></div>
        </div>
    );
}