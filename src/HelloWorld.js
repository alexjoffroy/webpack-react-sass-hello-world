import React from 'react';
import './HelloWorld.scss';

export default React.createClass({

	displayName: 'HelloWorld',

	getInitialState() {
		return {
			name: ''
		};
	},

	sayHello() {
		const name = this.state.name.length ? this.state.name : 'World';
		alert('Hello ' + name + ' !');
	},

	onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	},

	render() {
		return (
			<section className="HelloWorld">
				<h1 className="HelloWorld__Title">Hello world with Webpack, React and Sass</h1>
				<div className="HelloWorld__Field">
					<input onChange={this.onChangeName} placholder="What's your name ?"/>
					<button onClick={this.sayHello}>Say hello</button>
				</div>
			</section>
		);
	}

});