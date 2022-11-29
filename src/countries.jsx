import React ,{useState} from "react"
import Axios from "axios"
var Countries =(props)=>{
 const [check,setCheck]=useState(false)
 var del = (id)=>{
  Axios.delete(`http://localhost:3000/country/${id}`)
  .then((res)=>{
    console.log("oh you deleted me ")
  })
  .catch(err=>{
    console.log(err)
  })
 }
    return (
        <div>
      {props.countries.map((element) => {
        return (
          <div key={element.id}>
            <ul>
             {check===false ? <li onClick={()=>{
                console.log(element.id)
                setCheck(!check)
             }}>{element.name}</li> :
             (
                <div>
                <li onClick={()=>{
                    setCheck(!check)
                }}>{element.name}</li>
                <li>{element.description} <span onClick={()=>{
                    return del(element.id)
                }}>❌</span> </li>

                </div>
             )}

            </ul>
          </div>
        );
      })}
        </div>
    )
}

export default Countries