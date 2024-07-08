import React from "react";
import { useState } from "react";

import "./button.css";


const Button = ({ text = "empty", isFill = true }: { text: string, isFill: boolean }) => {
    // const fillFlag = isFill ? 'isFill' : 'isTransparent';
    const [fillState, setFill] = useState(isFill)

    const switchFill = () => {
        setFill(!fillState);
    }

    return (
        <div>
            <button className={`App__button ${fillState? 'App__button_fulled' : ''}`} onClick={switchFill}>{text}</button>
        </div >
    );


}

export default Button;
