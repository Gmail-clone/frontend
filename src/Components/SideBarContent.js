import { Box, Button, styled , List , ListItem } from '@mui/material'
import React from 'react'
import { CreateOutlined } from '@mui/icons-material'
import { SIDEBAR_DATA } from '../config/SideBar.config'

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
  

    return (
        <Container>
            <Box>
                <ComposeButton>
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

        </Container>
    )
}
