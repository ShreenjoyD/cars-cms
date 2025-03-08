import "./../styles/Contact.css";
import { useState } from "react";
import axios from "axios";

function Cform() {

    const [inputs, setInputs] = useState({});
    const [sm,setsm] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        setsm("");
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        setsm("Thank You !!!");
        const resp=axios.post('http://localhost:8000/contacts', inputs);
        if(resp.status===200)
            console.log("Queries Saved");
        else
            console.log("Data Missing");
      }

    return (
        <div className="cfd">
            <form onSubmit={handleSubmit}>
                <p className="cfh">Contact Form</p>
                <p>Have a question or concern? Want to open a commercial account? Send our team a message and we'll get back to you promptly!</p>
                <div><input type="text" name="fname" value={inputs.fname || ""} onChange={handleChange} placeholder="First Name"/>
                <input type="text" name="lname" value={inputs.lname || ""} onChange={handleChange} placeholder="Last Name"/></div>
                <div><input type="email" name="mail" value={inputs.mail || ""} onChange={handleChange} placeholder="Email"/>
                <input type="number" name="pnumber" value={inputs.pnumber || ""} onChange={handleChange} placeholder="Phone"/></div>
                <textarea className="tafd" name="comment" value={inputs.comment || ""} onChange={handleChange} placeholder="Message"></textarea>
                <button onClick={handleSubmit} className="cfb">Submit</button>
                <div className="smdiv">{sm}</div>
            </form>
        </div>
    );
}

export default Cform;