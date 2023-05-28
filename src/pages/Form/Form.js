import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FormInfo from '../FormInfo/FormInfo'
import FormPlan from '../FormPlan/FormPlan'
import FormAddons from '../FormAddons/FormAddons'
import FormSummary from '../FormSummary/FormSummary'
import FormThanks from '../FormThanks/FormThanks'
import Form404 from '../Form404/Form404'

const Form = () => {
	return (
		<Routes>
			<Route path='/' element={<FormInfo />} />
			<Route path='/plan' element={<FormPlan />} />
			<Route path='/addons' element={<FormAddons />} />
			<Route path='/summary' element={<FormSummary />} />
			<Route path='/thanks' element={<FormThanks />} />
			<Route path='/404' element={<Form404 />} />
			<Route path='*' element={<Navigate to='/404' />} />
		</Routes>
	)
}

export default Form
