import React from 'react'

const Hamper = (props) => {

    const {onChangeTextAreaValue,TextAreaValue,toUpperCase,toLowerCase,duplicate}= props

    return (
        <div>
            <div className="form-floating my-4 container" style={{width:"50vw", height:"40vh"}} >
                <textarea placeholder="ase " name="text" value={TextAreaValue.text} onChange={(e)=>onChangeTextAreaValue(e)} style={{height:"40vh"}} className="form-control" id="floatingTextarea"></textarea>
                <button type="button" className="btn btn-primary mx-1 my-2 " onClick={()=>toUpperCase()}>Upper Case</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={()=>toLowerCase()} >Lower Case</button>
                <button type="button" className="btn btn-primary mx-1 my-2"onClick={()=>duplicate()}  >Duplicate</button>
                <hr />
                <div className="container">
                    <h1>Your Text:</h1>
                    <h4>{TextAreaValue.text === "Enter Your String To Hamper" ? "" : TextAreaValue.text }</h4>
                </div>
            </div>
        </div>
    )
}

export default Hamper
