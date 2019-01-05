import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import SignUpForm from './components/SignUpForm.js'
import SignInForm from './components/SignInForm.js'
import { NavBar } from './components/NavBar.js'
import { Home } from './components/Home'
import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <NavBar />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
            <Route exact path="/" component={Home} />
          </>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
