import React from 'react'
import { AppBar, Toolbar, styled, Box, InputBase } from "@mui/material"
import { Menu as MenuIcon, Search, Tune, HelpOutline, SettingsOutlined, AppsOutlined, AccountCircleOutlined } from '@mui/icons-material';



import { gmailLogo } from '../constants/Constants';


const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
})
const SearchWrapper = styled(Box)({
    marginLeft: "80px",
    background: '#EAF1FB',
    borderRadius: "150px",
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",

    '& > div': {
        width: '100%',
        padding: '0 10px'
    }

})

const OptionsWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& svg': {
        marginLeft: '20px'
    }
   
})

export default function header({toggleDrawer }) {
    return (
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon color='action' onClick = {toggleDrawer}  />
                <img src={gmailLogo} alt="Logo" style={{ width: "110px", marginLeft: "15px" }} />
                <SearchWrapper>
                    <Search color='action' />
                    <InputBase placeholder='Search mail' />
                    <Tune color='action' />
                </SearchWrapper>

                <OptionsWrapper>
                    <HelpOutline color='action' />
                    <SettingsOutlined color='action' />
                    <AppsOutlined color='action' />
                    <AccountCircleOutlined color='action' />
                </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}
