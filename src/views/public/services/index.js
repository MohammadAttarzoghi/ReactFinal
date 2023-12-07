import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, Outlet } from 'react-router-dom'

export const Services = () => {
  return (
    <>

      <Helmet>
        <title>Service</title>
      </Helmet>
      <div>Service</div>
      <p>
        helmet is fully backwarded and compatible with previous helmet releases, so you can go
      </p>
      <ul>
        <li><Link to="/my-services/ServiceA">Service A</Link></li>
        <li><Link to="/my-services/ServiceB">Service B</Link></li>
        <li><Link to="/my-services/ServiceC">Service C</Link></li>
      </ul> 
      <hr/>
      <Outlet/>
    </>
  )
}
 