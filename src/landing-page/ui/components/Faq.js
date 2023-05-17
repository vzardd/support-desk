import { useState } from "react";
import upArrow from "../../../assets/upArrow.png";
import Form from "../../../components/Form";

export default function Faq () {

    const [questions, setQuestions] = useState([
        {
            question: "Q: How can I contact customer support?",
            answer: "A: You can contact customer support via email, or by raising a ticket.",
            type: "close"
        },
        {
            question: "Q: What are your business hours?",
            answer: "A: Our business hours are from 9:00 am to 5:00 pm, Monday through Friday. We are closed on weekends and major holidays.",
            type: "close"
        },
        {
            question: "Q: How do I track my ticket status?",
            answer: "You will receive an email about the status of your ticket, when updated.",
            type: "close"
        },
        {
            question: "Q: How can I request for a new feature.",
            answer: "A: You can request for a new feature via email, or by navigating to Request feature section.",
            type: "close"
        },
        {
            question: "Q: How can I submit a feedback?",
            answer: "A: You can give your feedback about our product by submitting the feedback form on your right.",
            type: "close"
        }
    ]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleQuestionClick = (index) => {
        let temp = [];
        questions.forEach(
            q => {
                temp.push(q);
            }
        );
        if(questions[index].type==="open"){
            temp[index].type = "close";
        }
        else{
            for(let i=0; i<questions.length;++i){
                if(i!==index){
                    temp[i].type = "close";
                }
                else{
                    temp[i].type = "open";
                }
            }
        }
        setQuestions(temp);
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
            "status": "open"
        }

        fetch(url, {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(form)})
        .then( res => {
            if(!res.ok){
                throw Error("Something went wrong!");
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

    return (
        <div className="section faq" id="faq">
            <div className="questions">
                <h1 className="white-title faq-title">FAQ</h1>
                {
                    questions.map(
                        (obj,i) => (
                            <Question question={obj.question} answer={obj.answer} type={obj.type} index={i} handleQuestionClick={handleQuestionClick} key={i}/>
                        )
                    )
                }
            </div>
            <div className="feedback-section">
                <h1 className="white-title feedback-title">Feedback</h1>
                <Form width="min(80%,80vw)" onSubmit={ (name, email, subject, msg) => { onSubmit(name, email, subject, msg, "feedback")}} isLoading={isLoading} error={error}/>
            </div>
        </div>
    );
}

const Question = ({question, answer, type, index, handleQuestionClick}) => {
    return (
        <div className="qn-container" onClick={() => handleQuestionClick(index)} key={index}>
            <div className="qn black-title">{question}<img className={"up-arrow " + type} src={upArrow} alt="drop-down arrow"></img></div>
            <p className={`ans black-title ${type}-ans`}>{answer}</p>
        </div>
    );
}