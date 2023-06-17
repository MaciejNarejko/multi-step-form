import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Form from './pages/Form/Form'

function App() {
	return (
		<div className='App'>
			<Router>
				<Form />
			</Router>
		</div>
	)
}

export default App
