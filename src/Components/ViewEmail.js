import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function ViewEmail() {

    const {openDrawer} = useOutletContext();
    return (
        <>
        <div style={openDrawer ? { marginLeft: '250px', width: '100%' } : { width: '100%' }}>
            ViewEmail
        </div>
        </>
    )
}