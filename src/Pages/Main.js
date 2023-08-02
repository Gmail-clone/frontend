import React, { useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'

export default function Main() {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
       setOpenDrawer(prevState => !prevState );
    }
  return (
    <>
    <Header toggleDrawer = {toggleDrawer}/>
    <SideBar openDrawer = {openDrawer}/>
    <div>Display Mail</div>
    </>
  )
}
