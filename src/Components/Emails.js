import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function Emails() {

    const {openDrawer} = useOutletContext();
    return (
        <>
        <div style={openDrawer ? { marginLeft: '250px', width: '100%' } : { width: '100%' }}>
            Emails
        </div>
        </>
    )
}
