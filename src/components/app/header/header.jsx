// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import NavLink from './navlink'

export default React.createClass({
  render() {
    return (
		<div>
			<header>
				<ul role="nav">
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/repos">Repos</NavLink></li>
				</ul>
				{/* add this */}
			</header>
		</div>
    )
  }
})