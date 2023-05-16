import { useState } from "react";
import { BasicButton } from "./Buttons";

export default function Form(
    {
        backgroundColor="white",
        boxShadow="2px 2px 5px black",
        borderRadius="7px",
        padding="10px",
        width="50%",
        labelStyle = {
            color:"black",
            fontFamily: "Monsterrat"
        },
        themeColor = "var(--primary)",
        inputStyle = {
            padding:"5px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "3px",
            resize: "none",
            borderColor:"black",
            outlineColor: themeColor
        },
        onSubmit,
        isLoading
    }
) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    let buttonName = "Submit";
    if(isLoading===true){
        buttonName = "Loading...";
    }
    else{
        buttonName = "Submit";
    }

    const validate = (e) => {
        if(name.length!==0 && email.length>4 && email.includes("@") && email.includes(".") && subject.length!==0 && message.length!==0){
            e.preventDefault();
            onSubmit(name, email, subject, message);
        }
    }

    return (
        <form style={{
            backgroundColor:backgroundColor,
            boxShadow:boxShadow,
            borderRadius:borderRadius,
            display:"flex",
            flexDirection:"column",
            padding:padding,
            width:width,
            gap:"5px"
        }}>
            <label htmlFor="name" style={labelStyle}>Full Name</label>
            <input type="text" style={inputStyle} id="name" placeholder="James Bond" value = {name} onChange = { e => setName(e.target.value)} required></input>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" style={inputStyle} id="email" placeholder="example@xyz.com" value = {email} onChange = { e => setEmail(e.target.value)} required></input>
            <label htmlFor="sub" style={labelStyle}>Subject</label>
            <input type="text" style={inputStyle} id="sub" placeholder="Title" value = {subject} onChange = { e => setSubject(e.target.value)} required></input>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea style={inputStyle} id="message" rows="4" cols="50" placeholder="Type your message here..." value = {message} onChange = { e => setMessage(e.target.value)} required/>
            <BasicButton backgroundColor={themeColor} borderColor={themeColor} text={buttonName} onClick = { e => {validate(e)}}/>
        </form>
    );
}