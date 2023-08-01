import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Mail from '../Components/Mail';
import ComposeMail from '../Components/ComposeMail';





export default function Home() {

 const [mails, setmails] = useState([]);


  const accessToken = localStorage.getItem('token');
  useEffect(() => {
    getMails();
  }, [])

  function getMails() {
    axios.get('http://localhost:5000/api/getMails', {
      headers: {
        authorization: `${accessToken}`,
      },
    })
      .then(function (response) {
        // handle success
        console.log(response.data);
        setmails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }
  return (
    <>
    <ComposeMail></ComposeMail>
   <h1>Inbox
   </h1>
     {mails.map((e)=>{
       return (
       <Mail name={e.name} subject ={e.subject} message = {e.message}/>
     );})}

    </>

  )
}
