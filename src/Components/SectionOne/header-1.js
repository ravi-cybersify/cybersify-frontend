import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Headejquery() {
  const location = useLocation()
  return (

        <>
        <div className='header-jquery'>
            <div className='logo'>
            <Link className="navbar-brand logo_png" to="/"><img src="../images/serivce_logo.png" alt="BigCo Inc. logo" /></Link>
            <button type='button' className='togglebtn'>
                <span></span>
            </button>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button type='button' className='btnjquery'>Contact</button>
            
        </div>
         
          
        </>
        

  )
}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>


export default Headejquery

