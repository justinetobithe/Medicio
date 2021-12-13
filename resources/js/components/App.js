import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { LoadingOverlay } from '../functions/Elements'
import reducer from '../functions/reducer'
import { AppContext, initialState } from '../functions/store'
import GuestRoute from './GuestRoute'
import Home from './pages/Home'


export default function app() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <LoadingOverlay loading={state.loading} />
            <Router>
                <Switch>
                    <GuestRoute exact path="/" component={Home} />
                </Switch>
            </Router>
        </AppContext.Provider>
    )
}
