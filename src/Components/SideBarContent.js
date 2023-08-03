import { Box, Button, styled , List , ListItem } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { CreateOutlined } from '@mui/icons-material'
import { SIDEBAR_DATA } from '../config/SideBar.config'
import ComposeMail from './ComposeMail'

const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    width: "150px",
    padding: "15px",
    borderRadius: "16px",
    minWidth: "140px",
    textTransform: "none",
    fontWeight:550,

})

const Container =  styled(Box)({
    padding: "8px",
    '& > ul' : {
        padding : '10px 0 0 5px',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer'
    },
    '& > ul > li > svg': {
        marginRight: 20,
       
    }
})

export default function SideBarContent() {
  const [showComposeMail, setShowComposeMail] = useState(false);

  function handleComposeMail(){
    setShowComposeMail(true);
  }

    return (
        <Container>
            <Box>
                <ComposeButton onClick={handleComposeMail}>
                    <CreateOutlined style={{marginRight: '8px'}}/> Compose
                </ComposeButton>
            </Box>

            <List>
                {
                  SIDEBAR_DATA.map(data =>(
                    <ListItem>
                       <data.icon/> {data.title}
                    </ListItem>

                  ))
                }
            </List>
            <ComposeMail  showComposeMail={showComposeMail } setShowComposeMail = {setShowComposeMail}/>
        </Container>
    )
}
