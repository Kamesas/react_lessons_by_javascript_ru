import React from 'react'
import ArticleList from './ArticleList.js'
import articles from '../articles'

function App () {
	return (
			<div>
				<h1>App name</h1>
				<ArticleList articles = {articles} />
			</div>
		) 
}

export default App