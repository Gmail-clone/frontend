import { Dialog, Box, styled, InputBase, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { Close, DeleteOutline } from '@mui/icons-material/';
import emailjs from '@emailjs/browser';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';



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

    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmail);
    

    const [data, setData] = useState({
        Recipent: "",
        Subject: "",
        Message: "",
    });


    const closeComposeMail = (e) => {
        e.preventDefault();
       
        const payload = {
            to: data.Recipent,
            from: 'hariompatel127@gmail.com',
            subject: data.Subject,
            body: data.Message,
            date: new Date(),
            image: '',
            name: 'Hariom Patel',
            starred: false,
            type: 'drafts'
        }

        saveDraftService.call(payload);

        if (!saveDraftService.error) {
            setShowComposeMail(false);
            setData({});
        } else {

        }
    }


    const handleSendMail = async (e) => {
        e.preventDefault();

        console.log(data);

        emailjs.send('service_8xx5zzk', 'template_wzhu49d', data, 'qot5PS4fnGz0LEtvM')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });


        const payload = {
            to: data.Recipent,
            from: 'hariompatel127@gmail.com',
            subject: data.Subject,
            body: data.Message,
            date: new Date(),
            image: '',
            name: 'Hariom Patel',
            starred: false,
            type: 'sent'
        }
        console.log(payload, 'payload');
        sentEmailService.call(payload);

        if (!sentEmailService.error) {
            setShowComposeMail(false);
            setData({});
        } else {

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
                <InputBase placeholder='Recipents' name='Recipent' onChange={(e) => setData({ ...data, Recipent: e.target.value })} />
                <InputBase placeholder='Subject' name='Rubject' onChange={(e) => setData({ ...data, Subject: e.target.value })} />
            </RecipentsWrapper>

            <TextField
                multiline
                rows={15}
                sx={{ '& .MuiOutlinedInput-notchedOutline ': { border: 'none' } }}
                name='Message' onChange={(e) => setData({ ...data, Message: e.target.value })}
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
