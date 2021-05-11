import React,{useState} from "react"
import API from "../utils/API";

function Invite() {
  const [formObject, setFormObject] = useState({})

  const handleInvite = () => {
    const data = {
      subject: "Invited to Nights In!",
      name: formObject.name,
      email: formObject.email,
      body: "You are invited to Nights In: https://nights-in.herokuapp.com/"
    }

    API.sendInvite(data);
    alert("message sent!");
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


  return (

      <div>
        <input placeholder="Name" name="name" onChange={handleInputChange}></input>
        <input placeholder="Email" name="email" onChange={handleInputChange}></input>
         <button className="btn btn-success" onClick={handleInvite}>Invite</button>
      </div>

    );
}

export default Invite;