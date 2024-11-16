/* Shamelessly copied from https://omarelhawary.me/blog/file-based-routing-with-react-router/ */
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

const ROUTES = import.meta.glob('/pages/**/[a-z[]*.{js,jsx}', { eager: true })
const routes = Object.keys(ROUTES).map((route) => {
    const path = route
        .replace(/|pages|index|\.jsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1')

    return { path, component: ROUTES[route].default }
})

export const Router = () => {
    console.log(ROUTES)
    console.log(routes)
    return (
        <Routes>
            {routes.map(({ path, component: Component = Fragment }) => (
                <Route key={path} path={path} component={Component} exact={true} />
            ))}
        </Routes>
    )
}
