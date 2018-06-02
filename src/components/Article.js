import React from 'react'

function Article (props) { //все данные приходят в props

	const {article} = props //дуструктуризация см. ниже
 	const body = <section>{article.text}</section>

	return(
    	<div>
      		<h2>{article.title}</h2>
					{body}
					<h3>creation date: {(new Date(article.date)).toDateString()}</h3>
      	</div>
    )

}

export default Article

//позволяет пирсвоить объект или массив сразу нескольким переменным, разбив его на части https://learn.javascript.ru/destructuring
// let options = {
//   title: "Меню",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

//alert(title);  // Меню
//alert(width);  // 100
//alert(height); // 200
