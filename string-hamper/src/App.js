import React,{useState} from 'react'
import Hamper from './Components/Hamper/Hamper.component'
import Navbar from './Components/Navbar/Navbar.component'
const App = () => {
    const [Mode, setMode] = useState('light')
    const [TextAreaValue, setTextAreaValue] = useState({text:"Enter Your String To Hamper"})
    const [toggleName, settoggleName] = useState("Enable Dark Mode")

    const updateToggleValue = () => {

        if(toggleName === "Enable Dark Mode"){
            settoggleName("Disable Dark Mode")
            setMode("dark")
        }else{
            settoggleName("Enable Dark Mode")
            setMode("light")
        }

    }

    let myStyle = {
        backgroundColor: "#333"
    }

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
            text: `${TextAreaValue.text} ${TextAreaValue.text}`
        })
    }

    return (
        <div style={{...myStyle, minHeight:"100vh"}}>
            <Navbar Mode={Mode} setMode={setMode}  updateToggleValue={updateToggleValue} toggleName={toggleName} />
            <Hamper duplicate={duplicate} toLowerCase={toLowerCase} toUpperCase={toUpperCase} TextAreaValue={TextAreaValue} onChangeTextAreaValue={onChangeTextAreaValue} />
        </div>
    )
}

export default App
