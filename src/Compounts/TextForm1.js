import React,{ useState } from 'react'

export default function TextForm1(props) {
    const [count,setCount] = useState("enter  the text");
    const handleUP=()=>
      {
        let newlower=count.toLowerCase();
        setCount(newlower);
      }

     
    const handleUPclick=()=>
        {
            let newText=count.toUpperCase();
            setCount(newText);
        }

        function reverseString(str) {
          return str.split('').reverse().join('');
        }


        const reverseString1=()=>
          {
            var newstr=reverseString(count);
          /*  for(;j<=0;j--)
              {
                  newstr[i]=count[j];
                  i++;
              }*/
              setCount(newstr);
          }

         const handlecopy=()=>
          {
            console.log(" i am copy");
            var text=document.getElementById("exampleFormControlTextarea1");
            text.select();
            navigator.clipboard.writeText(text.value);//copy the text in the textarea

            let url=navigator.platform; //navigator is windows object
            console.log(url);
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else {
              document.getElementById("demo").innerHTML =
              "Geolocation is not supported by this browser.";
            }
            function showPosition(position) {
              document.getElementById("posi").innerHTML =
              "Latitude: " + position.coords.latitude +
              " Longitude: " + position.coords.longitude;
            }
          }


          const removeExtra=()=>
            {
            
             let newText= count.split(/[ ]+/);
              setCount(newText.join(' '));
            }
        const handleUPClear=()=>
          {
              let newText='';
              setCount(newText);
          }
        const handleOnChange=(event)=>
            {
                setCount(event.target.value);
            }
  return (
    <>
<div className='container'>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={count} rows="3"></textarea>
{/*on charge is use to change the value, it also helps in upadate of text*/}
</div>
<div className='container my-3'>
<button className="btn btn-primary mx-3" onClick={handleUPclick} >CONVERT TO UPPER</button></div>
<div className='container my-3'>
<button className="btn btn-primary" onClick={handleUP} >CONVERT TO lower</button></div>
<div className='container my-3'>
<button className="btn btn-primary" onClick={handleUPClear} >CLEAR</button></div>
<div className='container my-3'>
<button className="btn btn-primary" onClick={reverseString1} >reverse string</button></div>
<div className='container my-3'>
<button className="btn btn-primary" onClick={handlecopy} >copy the text</button></div>
<div><button onClick={removeExtra}> remove the space</button></div>

</div>
<div id="posi"></div>
<div className="container my-5">
<h1>your text summary</h1>
<p>{count.split(" ").length} words ,{count.length} characters</p>
<p> {0.008*count.split(" ").length} minutes to read words</p>
<p> count of digit is</p>
<h2>preview</h2>
<p>{count.toLowerCase()} </p>


</div>
</>

  )
}
