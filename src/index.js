import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

ReactDOM.render(
	<App />,
	document.getElementById('content')
)

if (module.hot) {
	module.hot.accept()
}