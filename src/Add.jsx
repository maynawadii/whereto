
import React ,{useState} from "react";
import Axios from "axios";

var Add =()=>{
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")

    var add =() =>{
        Axios.post("http://localhost:3000/country",{countryname:name,countrydescription:description})
        .then((res)=>{
            console.log("updated")
        })
    }

    return(
        <div>
        <input  placeholder="type the country"  onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <input placeholder="type the description"  onChange={(e)=>{
            setDescription(e.target.value)
        }} />
         <button  onClick={()=>{
            return add();
         }} >Add country</button>
        </div>
    )
}


export default Add