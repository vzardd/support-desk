import { useEffect } from "react";
import "./dashboard.css";
import useFetch from "../../useFetch";

export default function Dashboard(){
    const {data, isLoading, error} = useFetch("http://localhost:8000/userform");
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

    return (
        <div className="dashboard-section">
            <div className="dashboard-header">
                <h1 className="dash-title">Dashboard</h1>
                <span className="logout">LOG OUT</span>
            </div>
            { tickets && <div className="dashboard-body">
                <div className="tickets-container">
                    <h2 className="black-title">Tickets</h2>
                    {
                        tickets.map( (ticket) =>  <Ticket ticket={ticket}/>)
                    }
                </div>
                <div className="requests-container">
                    <h2 className="black-title">Requests</h2>
                    {
                        requests.map( (ticket) =>  <Ticket ticket={ticket}/>)
                    }
                </div>
                <div className="feedback-container">
                    <h2 className="black-title">Feedbacks</h2>
                    {
                        feedbacks.map( (ticket) =>  <Ticket ticket={ticket}/>)
                    }
                </div>
            </div>}
        </div>
    );
}

const Ticket = ({ticket: {id,subject, message, status, type}}) => {
    return (
        <div className="ticket" key={`${type}-${id}`}>
            <h3 className="ticket-title" ><div className={`status-icon status-${status}`}></div>{subject}</h3>
            <p className="ticket-message">{message}</p>
        </div>
    );
}