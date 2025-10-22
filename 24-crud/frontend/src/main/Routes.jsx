import React from 'react'
// import { Switch, Route, Redirect } from 'react-router'
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default function Routes() {
  return (
    <Switch>      
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Switch>
    // <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/users" component={UserCrud} />
    //     <Redirect from='*' to="/" />
    // </Switch>
  )
}
