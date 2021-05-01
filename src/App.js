import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { Post } from './components/Post'
import Word from './components/Word'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:id" exact component={Post} />
                <Route
                    path="/:word/:textColor/:backgroundColor"
                    exact
                    component={Word}
                />
                <Route
                    path="/"
                    render={() => (
                        <div style={{ 'text-align': 'center' }}>404</div>
                    )}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
