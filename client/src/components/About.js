import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import NOT_FOUND from '../images/not-found.jpg';

export default function About() {

  const history = useNavigate();
  const [userData, setUserData] = useState('');

  const callAboutPage = async ()=>{
    try {
      const res = await fetch('/about', {
        method:"GET",
        headers:{
          Accept:'application/json',
          "Content-Type": "application/json"
        },
        credentials:'include'
      });

      const data = await res.json();


      if (res.status === 200) {
        // User is logged in, set user data
        setUserData(data);
      } else {
        // User is not logged in, redirect to login page
        throw new Error('User not authenticated');
      }


    } catch (error) {
      console.log("error1");
      history("/login");
    }
  }

  useEffect(()=>{
    callAboutPage();
  }, []);

  return (
    <>

<div className='profile-page' style={{color: 'white !important'}} >
<form method='GET'>
<div className="page-header header-filter" data-parallax="true" style={{backgroundImage:`url('https://images.unsplash.com/photo-1608408843596-b3119736057c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80')`, filter: 'brightness(0.7)'}}></div>
  <div className="main main-raised">
    <div className="profile-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="profile">
              <div className="avatar">
                <img src= {userData.profileImg ? userData.profileImg : NOT_FOUND}  alt="Circle Image" className="img-raised rounded-circle img-fluid" />
              </div>
              <div className="name">
                <h3 className="title">{userData.name}</h3>
                <h6>{userData.work}</h6>
                <a href="#" className="btn btn-just-icon btn-link btn-insta"><i className="fa fa-instagram"></i></a>
                <a href="#" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div>
            <p className='text-justify mb-4' > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        

        

      </div>
    </div>
  </div>
  </form>
  </div>
      </>
  )
}
