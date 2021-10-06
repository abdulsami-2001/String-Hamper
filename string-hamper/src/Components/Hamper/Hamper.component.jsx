import React from 'react'

const Hamper = (props) => {

    const {onChangeTextAreaValue,TextAreaValue,toUpperCase,toLowerCase,duplicate}= props

    

    return (
        <div >
            <div className="form-floating my-4 container" style={{width:"50vw", height:"40vh"}} >
                <textarea style={{color:"white",backgroundColor:"rgb(105,105,105)",height:"40vh"}} name="text" value={TextAreaValue.text} onChange={(e)=>onChangeTextAreaValue(e)}  className="form-control" id="floatingTextarea"></textarea>
                <button type="button" className="btn btn-primary mx-1 my-2 " onClick={()=>toUpperCase()}>Upper Case</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={()=>toLowerCase()} >Lower Case</button>
                <button type="button" className="btn btn-primary mx-1 my-2"onClick={()=>duplicate()}  >Duplicate</button>
                <hr />
                <div className="container">
                    <h1>Your Text:</h1>
                    <p>Your Text Contains  { TextAreaValue.text.length !== 0 ?  TextAreaValue.text.split(" ").length : 0 } Words & {TextAreaValue.text.length} Characters</p>
                    <p>{(TextAreaValue.text.length*(0.00666666666)).toFixed(2)} Minute Read</p>
                    <h4>{TextAreaValue.text === "Enter Your String To Hamper" ? "" : TextAreaValue.text }</h4>
                </div>
            </div>
        </div>
    )
}

export default Hamper
