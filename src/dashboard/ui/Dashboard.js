import "./dashboard.css";
import useFetch from "../../useFetch";
import CustomSelect from "../../components/CustomSelect";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const {data, fetchData} = useFetch("http://localhost:8000/userform");
    const navigate = useNavigate();
    const tickets = data?.filter(
        (t) => {
            return t.type==="raise-ticket";
        }
    );
    const requests = data?.filter(
        (t) => {
            return t.type==="request-feature";
        }
    );
    const feedbacks = data?.filter(
        (t) => {
            return t.type==="feedback";
        }
    );

    const onSelect = (ticket, status, id) => {
        const newTicket = {
            "name": ticket.name,
            "email": ticket.email,
            "subject": ticket.subject,
            "message": ticket.message,
            "type": ticket.type,
            "status": status
        }
        const d = JSON.stringify(newTicket);

        const url = `http://localhost:8000/userform/${ticket.id}`;

        fetch(url, {method:"PUT", headers:{"Content-Type": "application/json"},body: d}).then(
            fetchData()
        )

    }

    return (
        <div className="dashboard-section">
            <div className="dashboard-header">
                <h1 className="dash-title">Dashboard</h1>
                <span className="logout" onClick = { () => navigate("/login")} >LOG OUT</span>
            </div>
            { data && <div className="dashboard-body">
                <div className="tickets-container">
                    <h2 className="black-title">Tickets</h2>
                    { (tickets===null || tickets.length === 0) && <p className="no-data">No data available</p>}
                    {
                        tickets.map( (ticket) =>  <Ticket key={`${ticket.type}-${ticket.id}`} ticket={ticket} onSelect={ (status, id) => onSelect(ticket, status, id)}/>)
                    }
                </div>
                <div className="requests-container">
                    <h2 className="black-title">Requests</h2>
                    { (requests===null || requests.length === 0) && <p className="no-data">No data available</p>}
                    {
                        requests.map( (ticket) =>  <Ticket key={`${ticket.type}-${ticket.id}`} ticket={ticket} onSelect={ (status, id) => onSelect(ticket, status, id)}/>)
                    }
                </div>
                <div className="feedback-container">
                    <h2 className="black-title">Feedbacks</h2>
                    { (feedbacks===null || feedbacks.length === 0) && <p className="no-data">No data available</p>}
                    {
                        feedbacks.map( (ticket) =>  <Ticket key={`${ticket.type}-${ticket.id}`} ticket={ticket} onSelect={ (status, id) => onSelect(ticket, status, id)}/>)
                    }
                </div>
            </div>}
        </div>
    );
}

const Ticket = ({ticket: {id,subject, message, status}, onSelect}) => {
    return (
        <div className="ticket">
            <div className="ticket-row">
                <h3 className="ticket-title" >{subject}</h3>
                <CustomSelect option={status} onSelect={(tStatus) => {onSelect(tStatus, id)}}/>
            </div>
            <p className="ticket-message">{message}</p>
        </div>
    );
}