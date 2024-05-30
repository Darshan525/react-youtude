import React from 'react'
/*import { Link } from 'react-router-dom'*/

export default function Different(props) {

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div class="container-fluid" style={props.mode}>
    <a class="navbar-brand"  href="#" style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" style={{color:props.mode.backgroundColor==='white'?'black':'white'}} aria-current="page"  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#" style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#" style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>
            Dropdown link
          </a>
          <ul class="dropdown-menu" style={props.mode} >
            <li><a class="dropdown-item"  href="#" style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>Action</a></li>
            <li><a class="dropdown-item"  href="#" style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>Another action</a></li>
            <li><a class="dropdown-item"  href="#" style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
