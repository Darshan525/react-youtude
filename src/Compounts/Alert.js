import React,{useState} from 'react'

export default function Alert(props) {
 const capt=(word)=>
    {
      var lower=word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);

    }
  return (
     props.mess && <div><div className="alert alert-warning alert-dismissible fade show" role="alert">
  {capt(props.mess.typ)}: {props.mess.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  {/*it is become alert msg is null to avoid the error */}
</div></div>

  )
}
