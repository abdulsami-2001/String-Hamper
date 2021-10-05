import React,{useState} from 'react'
import Hamper from './Components/Hamper/Hamper.component'
import Navbar from './Components/Navbar/Navbar.component'
const App = () => {

    const [TextAreaValue, setTextAreaValue] = useState({text:"Enter Your String To Hamper"})

    const onChangeTextAreaValue = (e) => {

        setTextAreaValue({
            [e.target.name]: e.target.value
        })
    }

    const toUpperCase = () =>{
        setTextAreaValue({
            text: TextAreaValue.text.toUpperCase()
        })
    }

    const toLowerCase = () =>{
        setTextAreaValue({
            text: TextAreaValue.text.toLowerCase()
        })
    }

    const duplicate = () =>{
        setTextAreaValue({
            text: `${TextAreaValue.text}  ${TextAreaValue.text}`
        })
    }

    return (
        <>
            <Navbar/>
            <Hamper duplicate={duplicate} toLowerCase={toLowerCase} toUpperCase={toUpperCase} TextAreaValue={TextAreaValue} onChangeTextAreaValue={onChangeTextAreaValue} />
        </>
    )
}

export default App
