import { useState } from "react";
import upArrow from "../assets/upArrow.png";

export default function CustomSelect ({option, onSelect}) {
    const [type, setType] = useState("close");
    const toggle = () => {
        if(type==="open"){
            setType("close");
        }
        else{
            setType("open");
        }
    }
    return (
        <div className="custom-select">
            <div className="selected" onClick = { toggle }>
                <div className={`status-icon status-${option}`}></div>
                <span className="status-text">{option.charAt(0).toUpperCase()+option.substring(1)}</span>
                <img className={"open-arrow " + type} src={upArrow} alt="drop-down arrow"></img>
            </div>
            { type==="open" && <ul className="status-list">
                <li onClick={() => {onSelect("open"); toggle();}}>
                    <div className="status-icon status-open"></div>
                    <span className="status-text">Open</span>
                </li>
                <li onClick={() => {onSelect("hold"); toggle();}}>
                    <div className="status-icon status-hold"></div>
                    <span className="status-text">Hold</span>
                </li>
                <li onClick={() => {onSelect("closed"); toggle();}}>
                    <div className="status-icon status-closed"></div>
                    <span className="status-text">Closed</span>
                </li>
            </ul>}
        </div>
    );
}