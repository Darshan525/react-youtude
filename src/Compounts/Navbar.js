import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  const [text,setText]=useState('enter');
 
  
  return (
    <div>
     <p>hello i am {props.title}</p>
     <button className={`btn btn-${props.mode}`}>show</button>
     <button>darshan</button>
     <div className={`form-check form-switch `} style={{color:props.mode==='light'?'black':'white'}}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default {text} switch checkbox input</label>
</div>
     
    </div>
  )
}
//Navbar.propTypes ={title:PropTypes.string.isRequired};//it show error ,if props is not given
//isrequired is not mention in code ,then it will not shw the error
/*Navbar.defaultProps={
  title:'darshan'
};*/
