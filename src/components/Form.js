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
        }
    }
) {

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
            <input type="text" style={inputStyle} id="name" placeholder="James Bond"></input>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" style={inputStyle} id="email" placeholder="example@xyz.com"></input>
            <label htmlFor="sub" style={labelStyle}>Subject</label>
            <input type="text" style={inputStyle} id="sub" placeholder="Title"></input>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea style={inputStyle} id="message" rows="4" cols="50" placeholder="Type your message here...">

            </textarea>
            <BasicButton backgroundColor={themeColor} borderColor={themeColor} text="Submit"/>
        </form>
    );
}