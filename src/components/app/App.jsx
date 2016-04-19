// modules/App.js
import React from 'react'
import { Link } from 'react-router'
import Header from './header/header'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <article>
          <h1>{this.props.children}</h1>
        </article>
      </div>
    )
  }
})