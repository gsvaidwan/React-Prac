import React from 'react'
import "../custom.css";

function About(props) {
 // console.log(p.name)
  //const st={color:"yellow",backgroundColor:"grey"} 
 // style={st}  ---define in p tag to call through variable
  return (
    <>
     <h1>About Us {props.name} {props.age}</h1>
     <p id='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis eos incidunt cum nemo totam adipisci tempore odio natus id, quaerat nam sequi tenetur possimus. Minus obcaecati architecto fugit sit.</p>
    </>
  )
}

export default About