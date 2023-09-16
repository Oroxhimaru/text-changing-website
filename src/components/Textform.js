import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleCopy= () => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
      }

    // Define the toTitleCase function
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    const handleTitlecaseClick = () => {
        let newText = toTitleCase(text);
        setText(newText);
    };


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here")
    //   setText("PLEASE ENTER TEXT HERE"); a way of updating a state in functional components
    //
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const characterCount = words.join("").length;

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary ms-2" onClick={handleLowClick} >Convert to Lowercase</button>
                <button className="btn btn-primary ms-2" onClick={handleClearClick} >Clear</button>
                <button className="btn btn-primary ms-2" onClick={handleTitlecaseClick} >Convert to Titlecase</button>
                <button className="btn btn-primary ms-2" onClick={handleCopy}>Copy Text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>  
                <button className="btn btn-primary ms-2" onClick={handleExtraSpaces}>Remove Extra Space</button>


            </div>
            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>{wordCount} words, and {characterCount} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
