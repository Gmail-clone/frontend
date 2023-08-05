import { Suspense } from 'react';
import React from 'react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import routes from './routes/routes'
import SuspenseLoader from './common/SuspenseLoader';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} />
        <Route path={routes.view.path} element={<routes.view.element />} />

      </Route>
   
  <Route path={routes.invalid.path} element={<Navigate to={`${routes.main.path}/inbox`} />}/>
    </Route>
  )
)


function App() {
  return (
    <Suspense fallback = {<SuspenseLoader/>}>
    <RouterProvider router={router} />

    </Suspense>
  );
}

export default App; // Export the component as the default export



