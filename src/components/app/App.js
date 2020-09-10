import React from 'react'
import {Provider} from "react-redux"
import store from '../../store/store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "../header"
import Footer from "../footer"
import DeveloperPage from "../../pages/developerPage"
import DesignPage from "../../pages/designPage/DesignPage"

import './css/reset.css'
import './css/variables.scss'
import './css/general.scss'
import s from './css/App.module.scss'
import WorkPage from "../../pages/workPage"



function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className={s['main-part']}>
                    <Header />
                    <Switch>
                        <Route path='/' exact>
                            <WorkPage pageType='develop' />
                            {/*<DeveloperPage />*/}
                        </Route>
                        <Route path='/design' exact>
                            <WorkPage pageType='design' />
                            {/*<DesignPage />*/}
                        </Route>
                    </Switch>
                </div>
                <footer className={s['bottom-part']}>
                    <Footer />
                </footer>
            </Router>
        </Provider>
    )
}

export default App
