import React from 'react'
import Article from './Article'

export default function ArticlesList ({articles}) {
	return(

		<ul>
			<li><Article article = {articles[0]} /></li>
			<li><Article article = {articles[1]} /></li>
			<li><Article article = {articles[2]} /></li>
		</ul>

	)	
}