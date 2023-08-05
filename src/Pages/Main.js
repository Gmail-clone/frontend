import React, { Suspense, useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import SuspenseLoader from '../common/SuspenseLoader'

export default function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
  }
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Box>
        <SideBar openDrawer={openDrawer} />
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{openDrawer}} />

        </Suspense>
      </Box>

    </>
  )
}
