import { Star, StarBorder } from '@mui/icons-material'
import { Box, Checkbox, ListItem, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '../routes/routes'
import { API_URLS } from '../services/api.urls';
import useApi from '../hooks/useApi'

const Wrapper = styled(ListItem)({
  padding: '0 0 0 10px',
  background: '#f2f6fc',
  alignItems: 'center',

  '& > div': {
    display: 'flex',
    width: '100%',

    '& > div > p': {
      fontSize: '14px',
    }
  }
})

const Indicator = styled(Typography)({
  fontSize: '12px !Important',
  background: '#ddd',
  color: '#222',
  borderRadius: '4px',
  marginRight: '6px',
  padding: '0 4px'
})

const Date = styled(Typography)({
  marginLeft: 'auto',
  marginRight: 20,
  fontSize: 12,
  color: '#5F6368'
})

export default function Email({ email, selectedEmails , setSelectedEmails}) {

  const navigate = new useNavigate();
  const setToggleStarred = useApi(API_URLS.toggleStarredEmail);

  const handleToggleStarredEmail = (e) => {
    setToggleStarred.call({ id: email._id, value: !email.starred });
    window.location.reload();
  }

  const handleSelect = () => {
    if(selectedEmails.includes(email._id)){
       setSelectedEmails(prevState => prevState.filter(id => id != email._id));
    } else{
      setSelectedEmails(prevState => [...prevState , email._id]);
    }
    console.log(selectedEmails);
  }

  return (
    <Wrapper>
      <Checkbox size='small'
        checked={selectedEmails.includes(email._id)}
        onChange = {() => handleSelect()}
      />
      {
        email.starred ?
          <Star fontSize='small' style={{ marginRight: '10px' , color: 'yellow' }} onClick={() => handleToggleStarredEmail()} />
          :
          <StarBorder fontSize='small' style={{ marginRight: '10px' }} onClick={() => handleToggleStarredEmail()} />
      }





      <Box style={{ cursor: "pointer" }} onClick={() => navigate(routes.view.path, { state: { email: email } })}>

        <Typography style={{ width: '200px' }}>{email.name}</Typography>
        <Indicator>Inbox</Indicator>
        {/* <Typography>{email.subject} {email.body && '-'} {email.body}</Typography> */}
        <Typography>{email.subject} </Typography>
        <Date>
          {(new window.Date(email.date)).getDate() + " "}
          {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}
        </Date>
      </Box>
    </Wrapper>
  )
}
