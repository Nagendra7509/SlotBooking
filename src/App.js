import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { routesOfSignInAndSignUp } from './Authentication/routes'
import { adminPageRoutes } from './Admin/routes'
import { slotsBookingRoute } from './SlotsBooking/routes'
import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import './App.css'
import Stores from './Common/stores/index'
const App = () => {
   return (
      <Provider {...Stores}>
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               <Route exact path='/page-1'>
                  <Page1 />
               </Route>
               {adminPageRoutes}

               {routesOfSignInAndSignUp}
               {slotsBookingRoute}

               <Route path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      </Provider>
   )
}

export default App
