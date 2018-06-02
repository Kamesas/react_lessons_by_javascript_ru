import React, {Component} from 'react'

class Article extends Component {

	// constructor(props) {
	//     super(props);
	// 	    this.state = {isOpen: true, };	    	    
	// 	   	this.handleClick = handleClick.bind(this) //<button onClick={this.handleClick} >close</button>
 //  };
  //or simlple
  state = {
  	isOpen: true
  }

  handleClick = () => {
		console.log('---', 'clicked')
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {

		const {article} = this.props 
	 	const body = this.state.isOpen && <section>{article.text}</section>
		return(

	    	<div>
      		<h2>{article.title}</h2>
      		<button onClick={this.handleClick} >{this.state.isOpen ? 'close' : 'open'}</button>
      		<hr/>
					{body}
					<h3>creation date: {(new Date(article.date)).toDateString()}</h3>
      	</div>

	    )		
	}

}

// function handleClick () {
// 	console.log('---', 'clicked')
// }

export default Article
