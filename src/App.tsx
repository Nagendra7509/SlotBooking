import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import { routesOfSignInAndSignUp } from './Authentication/routes'
import { adminPageRoutes } from './Admin/routes'
import { slotsBookingRoute } from './SlotsBooking/routes'
import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import './App.css'
import Stores from './Common/stores/index'
import i18n from './Common/i18n'

const App = () => {
   return (
      <Provider {...Stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div />}>
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
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
}

export default App
