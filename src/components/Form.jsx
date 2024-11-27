import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState("");  // Initialize with empty string

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Calculate word count
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <>
            <div className='my-4'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className='form-control'
                        value={text}
                        onChange={handleOnChange}
                        id='mybox'
                        rows='8'
                    ></textarea>
                </div>
                <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary' onClick={handleLoClick}>Convert to LowerCase</button>
            </div>

            <div className="my-3">
                <h2>Your Text Summary</h2>
                <p>{wordCount} words and {text.length} characters</p>
            </div>
        </>
    )
}
