/** @format */

import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import LOGO from '../gifs/logo.gif';



export default function Navbar() {

	const [logout, setLogout] = useState(false);


	const callAboutPage = async ()=>{
		try {
		  const res = await fetch('/getData', {
			method:"GET",
			headers:{
			  Accept:'application/json',
			  "Content-Type": "application/json"
			},
			credentials:'include'
		  });
	
	
	
	
		  if (res.status === 200) {
			// User is logged in, set user data
			setLogout(true);
		  } else {
			setLogout(false);
			// User is not logged in, redirect to login page
			throw new Error('User not authenticated');
		  }

		  
	
		} catch (error) {
			setLogout(false);

		  	console.log(error);
		}
	  }
	
		callAboutPage();
		

	const RenderNavbar =()=>{
		if(logout){
			return (
				<>
					<li className='nav-item'>
						<NavLink
							className='nav-link '
							aria-current='page'
							to='/' >
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/about' >
							About
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/contact' >
							Contact
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/logout' >
							Logout
						</NavLink>
					</li>
							
				</>
			)
		}
		else{
			return (
				<>
					<li className='nav-item'>
								<NavLink
									className='nav-link '
									aria-current='page'
									to='/' >
									Home
                                    </NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/about' >
									About
                                    </NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/contact' >
									Contact
                                    </NavLink>
							</li>
                            <li className='nav-item'>
								<NavLink className='nav-link' to='/login' >
									Login
                                    </NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/register' >
									Register
                                    </NavLink>
							</li>
				</>
			)
		}
	}

	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<NavLink className='navbar-brand' to='#' />
						<img src={LOGO}  alt='logo' style={{width:'50px'}}/>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<RenderNavbar />
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
