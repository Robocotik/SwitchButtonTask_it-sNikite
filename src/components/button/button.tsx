import React from "react";
import "./button.css";


const Button = ({ text = "empty", isFill = true }: { text: string, isFill: boolean }) => {
    const fillFlag = isFill ? 'isFill' : 'isTransparent';

    const switchFill = (e) => {
        e.preventDefault();
        let obj = e.target;
        console.log('Была нажата ссылка.');
        if (obj?.classList.contains("isFill")) {
            obj.classList.remove("isFill");
            obj.classList.add("isTransparent");
        }
        else {
            obj?.classList.remove("isTransparent");
            obj?.classList.add("isFill");
        }
    }

    return (
        <div>
            <button className={`App__button App_textStyleBase ${fillFlag}`} onClick={switchFill}>{text}</button>
        </div >
    );


}

export default Button;
