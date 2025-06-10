import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header()
{
  return <>
  <h1> React + Vite + DZ</h1>
  </>
}

function MyProfilePhoto()
{
  return <>
  <div className="myPhoto"> <img src="https://github.com/hmel1990/ProfilePhoto/blob/main/photo_2020-05-11_19-27-07.jpg?raw=true" alt="ProfilePhoto" /></div>
  </>
}
function MyFIO()
{
  return <>
  <h3> Khmelenko Maksym</h3>
  </>
}

function MyEtcInfo()
{
  return <>
  <div className="myInfo">
  <p> Phone number: +3-8088-987-34-42</p>
  <p>E-mail: hmel@step.org.ua</p>
  </div>
  </>
}



function App() {
  

  return <>
  <div className = "wrapper">
     <Header/>
     <MyProfilePhoto/>
     <MyFIO/>
     <MyEtcInfo/>
  </div>
    </>

}

export default App
