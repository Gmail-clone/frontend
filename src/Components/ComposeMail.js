import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function ComposeMail() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [senderEmail, setSenderEmail] = useState('');
  const accessToken = localStorage.getItem('token');
  
 

  const handleSubmit = async (e) => {
     setSenderEmail("mahimapatel123@gmai.com");
     const name = "hardevi";
    e.preventDefault();
    
    try {
      const response = await axios.post(
        'http://localhost:5000/api/sendMail',
        {
          name,
          senderEmail,
          subject,
          message,
          email
        },
        {
          headers: {
            authorization: `${accessToken}`,
          },
        }
      );
      
      
      // Clear form fields after successful signup
      setSubject('');
      setMessage('');
      setEmail('');
      setSenderEmail('');
    } catch (error) {
      console.error('Error signing up:', error); // Handle error response
    }
    // handleClose()
  };







  return (
    <>
   <Button variant="primary" onClick={handleShow}>
        Compose
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control as="textarea" value = {subject} onChange = {(e) => setSubject(e.target.value)}/>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mail</Form.Label>
              <Form.Control as="textarea" rows={3} value = {message}  onChange = {(e) => setMessage(e.target.value)}/>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
           Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
