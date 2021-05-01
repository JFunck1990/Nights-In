import React, {useState, useEffect} from "react"
import API from "../utils/calApi";
const Nylas = require('nylas');




function Calender (){
// const [calenderState, setCalenderState] = useState({

// });


useEffect(() => {
    API.search().then((res)=> {
        console.log("I Hope the Api data pops up: " + res);
    });


  }, []);

return (
<div>
    <p>Calender</p>
</div>


)

}

export default Calender;