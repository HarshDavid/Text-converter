import React from 'react'
import Form from './Form'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="data:image/png;base64,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" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> Text Converter                    </a>
                </div>
            </nav>
            <div className="container">
                <Form heading='Enter the text to Analyse Below' />
            </div>
        </div>
    )
}
