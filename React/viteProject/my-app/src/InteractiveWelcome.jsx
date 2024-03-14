// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.
import { useState } from "react"
import { Welcome} from "./Welcome.jsx"


export function InteractiveWelcome() {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

  return (  
    <>
        <input value={name} onChange={handleChange}/>
        <Welcome  name={name}/>
    </>
    )
}