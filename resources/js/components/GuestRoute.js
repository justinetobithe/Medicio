import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AppContext } from '../functions/store'
import Layout from './Layout'

export default function GuestRoute({ component: Component, ...rest }) {
    const { state } = useContext(AppContext)

    return (
        <Route
            {...rest}
            render={(props) =>
                <Layout>
                    <Component {...props} />
                </Layout>
            }
        />
    )
}
