import { Dialog, Box, styled, InputBase, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { Close, DeleteOutline } from '@mui/icons-material/';


const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0 '
}

const ComposeHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: '14px',
        fontWeight: 550,
    },

    maxHeight: '100%',
})

const RecipentsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: '14px',
        fontWeight: 500,
        borderBottom: '1px solid #f5f5f5',
        MarginTop: "10px",

    }
})

const Footer = styled(Box)({
    display: ' flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    alignItems: 'center'
})
const SendButton = styled(Button)({

    width: "100px",
    padding: "5px",
    borderRadius: "18px",
    textTransform: "none",
    fontWeight: 500,
    background: '#0b57d0',
    color: '#fff'
})

export default function ComposeMail({ showComposeMail, setShowComposeMail }) {
    const config = {
        // Host: "smtp.elasticemail.com",
        // Username: "hariompatel127@gmail.com",
        // Password: "8010ECF93E554179A7B1AE2EFE4CA14606AD",
        // Port: 2525,
        Port: 2525,
        Host: "smtp.elasticemail.com",
        Username: "hariompatel@yopmail.com",
        Password: "56BFDC1F8562EF4EE8598A970B95134BE028",
      
    }
    const closeComposeMail = (e) => {
        e.preventDefault();
        setShowComposeMail(false);
    }
    const handleSendMail = (e) => {
        e.preventDefault();

        if (window.Email) {
            console.log(window.Email);
            window.Email.send({
                ...config,
                To: 'hariompatel127@gmail.com',
                From: "hariompatel127@gmail.com",
                Subject: "This is the subject",
                Body: "And this is the body"  
            }).then(
                message => alert(message)
            );
        }
        setShowComposeMail(false);
    }
    const handleDeleteMail = (e) => {
        e.preventDefault();

        setShowComposeMail(false);
    }
    return (
        <Dialog open={showComposeMail}
            PaperProps={{ sx: dialogStyle }}
        >
            <ComposeHeader>
                <Typography> New Message </Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
            </ComposeHeader>

            <RecipentsWrapper>
                <InputBase placeholder='Recipents' />
                <InputBase placeholder='Subject' />
            </RecipentsWrapper>

            <TextField
                multiline
                rows={15}
                sx={{ '& .MuiOutlinedInput-notchedOutline ': { border: 'none' } }}
            />
            <Footer>
                <SendButton variant='contained' onClick={(e) => handleSendMail(e)}>
                    Send
                </SendButton>
                <DeleteOutline onClick={(e) => handleDeleteMail(e)} />
            </Footer>

        </Dialog>
    )
}
