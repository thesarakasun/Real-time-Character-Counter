import './AddTk.css'
import { useState } from 'react'


export default function AddTk() {

  const [chan, setChan] = useState("");

  const handleChange = (event) => {
    setChan(event.target.value);
  }

  return (
    <section className="addtask">
      <h1 className="header">Real-time character counter</h1>
      <form>
        <input onChange={handleChange} className="textbox" type="text" placeholder="Enter your text"></input>
        
      </form>
      <p className="digit">{chan.length} character(s)</p>
    </section>
  )
}
