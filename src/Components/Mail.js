import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';

export default function Mail(props) {
 
  const navigate = useNavigate();
  function handleViewMail(){
    navigate('/mailView');
   console.log(props)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <div onClick={handleViewMail}>
          {props.name} {props.subject}-{props.message}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
