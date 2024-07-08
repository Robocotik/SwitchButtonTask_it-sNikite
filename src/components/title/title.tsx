import React from "react";
import './title.css'
const Title = ({ text = "empty" }: { text: string }) => {
    return (
        <div>
            <p className="App__title">{text}</p>
        </div>
    );
}

export default Title;