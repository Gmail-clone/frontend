import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { API_URLS } from '../services/api.urls';
import useApi from '../hooks/useApi'
import { CheckBox, DeleteOutline } from '@mui/icons-material';
import { Box, Checkbox, List } from '@mui/material';
import Email from './Email';


export default function Emails() {
    
    const { openDrawer } = useOutletContext();
    const { type } = useParams();
    const getEmailsService = useApi(API_URLS.getEmailFromType);

    useEffect(() => {
        getEmailsService.call({}, type)
     
    }, [type])


    return (
        <>
            <Box style={openDrawer ? { marginLeft: '250px', width: 'calc(100% - 250px)' } : { width: '100%' }}>
                <Box style={{padding: '2px 10px 0 10px' , display: 'flex' , alignItems:'center'}}>
                   <Checkbox style={{size: 'small'}}/>
                   <DeleteOutline style={{size:'small'}}/>
                </Box>
                 <List>
                    {
                       getEmailsService?.response?.map(email =>(
                        <Email
                        key = {email._id}
                        email = {email}
                        />
                       ))
                    }

                 </List>
            </Box>
        </>
    )
}
