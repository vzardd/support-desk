import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="header">
            <a className="header-link" href="#raise-a-ticket">Home</a>
            <a className="header-link" href="#request-feature">Request Feature</a>
            <a className="header-link" href="#faq">FAQ</a>
            <Link className="header-link" to="/login">Sign In</Link>
        </nav>
    );
}