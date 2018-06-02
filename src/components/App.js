import React from 'react'
import Article from './Article'
import fixtures from '../fixtures'

function App () {
	return (
			<div>
				<h1>App name</h1>
				<Article article={fixtures[0]} />
				<Article article={fixtures[1]} />
			</div>
		) 
}

export default App