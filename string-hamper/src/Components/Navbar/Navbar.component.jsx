import React from 'react'

const Navbar = (props) => {
    let {toggleName,updateToggleValue,Mode} =  props
    return (
        <div>
           <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                    </li>
                </ul>
                    <div className="form-check form-switch">
                        <input type="checkbox" onClick={updateToggleValue} className="form-check-input" id="customSwitch1"/>
                        <label className="form-check-label" style={{color: Mode === "light" ? "black" :  "white"}}  htmlFor="customSwitch1">{toggleName}</label>
                    </div>
                </div>
            </div>
            </nav> 
        </div>
    )
}

export default Navbar
