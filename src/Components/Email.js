import { StarBorder } from '@mui/icons-material'
import { Box, Checkbox, ListItem, Typography , styled} from '@mui/material'
import React from 'react'


const Wrapper = styled(ListItem)({
    padding: '0 0 0 10px',
    background: '#f2f6fc',
    alignItems: 'center',
   
    '& > div': {
        display: 'flex',
        width: '100%',
        
      '& > div > p' :{
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

export default function Email({email}) {

  return (
    <Wrapper>
        <Checkbox size='small'/>
        <StarBorder fontSize= 'small' style={{marginRight: '10px'}}/>
        <Typography style={{width:'200px'}}>{email.name}</Typography>
        <Indicator>Inbox</Indicator>
        <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
        <Date>
            {(new window.Date(email.date)).getDate() + " "}
            {(new window.Date(email.date)).toLocaleString('default',{month: 'long'})}
        </Date>

    </Wrapper>
  )
}
