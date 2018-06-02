import React from 'react'
import Article from './Article'

export default function ArticlesList ({articles}) {
	
	const articleElements = articles.map(article => <li><Article article = {article} /></li>)

	return(	

		<ul>
			<li>{articleElements}</li>
		</ul>

	)	
}