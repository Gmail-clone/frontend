import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { API_URLS } from '../services/api.urls';
import useApi from '../hooks/useApi'
import {  DeleteOutline } from '@mui/icons-material';
import { Box, Checkbox, List } from '@mui/material';
import Email from './Email';
import NoMails from '../common/NoMails';
import { EMPTY_TABS } from '../constants/Constants';


export default function Emails() {
    const [selectedEmails, setSelectedEmails] = useState([]);
    
    const { openDrawer } = useOutletContext();
    const { type } = useParams();
    const getEmailsService = useApi(API_URLS.getEmailFromType);
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
    const deleteEmailService = useApi(API_URLS.deleteEmail);

    useEffect(() => {
        getEmailsService.call({}, type)
    }, [type])



    const handleSelectEmails = (e) => {
        if (e.target.checked) {
            const emails = getEmailsService?.response?.map(email => email._id);
            setSelectedEmails(emails);
        } else {
            setSelectedEmails([]);
        }
    }

    const handleDeleteSelectedEmails = () => {
        if (type === 'bin') {
           deleteEmailService.call(selectedEmails);
        } else {
            moveEmailsToBinService.call(selectedEmails);
        }
        window.location.reload();

    }


    return (
        <>
            <Box style={openDrawer ? { marginLeft: '250px', width: 'calc(100% - 250px)' } : { width: '100%' }}>
                <Box style={{ padding: '2px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
                    <Checkbox size='small'  onClick={(e) => handleSelectEmails(e)} />
                    <DeleteOutline size='small' onClick={(e) => handleDeleteSelectedEmails(e)} />
                </Box>
                <List>
                    {
                        getEmailsService?.response?.map(email => (
                            <Email
                                key={email._id}
                                email={email}
                                selectedEmails={selectedEmails}
                                setSelectedEmails = {setSelectedEmails}
                                
                            />
                        ))
                    }

                </List>
                {
                    getEmailsService?.response?.length === 0 &&
                    <NoMails message = {EMPTY_TABS[type]}/>
                }
            </Box>
        </>
    )
}
