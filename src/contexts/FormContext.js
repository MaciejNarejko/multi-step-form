import React, { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		plan: 'Arcade',
		price: '$9/mo',
		type: 'monthly',
		addOns: {},
	})

	const updateFormData = newData => {
		setFormData(prevData => ({ ...prevData, ...newData }))
	}
	return <FormContext.Provider value={{ formData, updateFormData }}>{children}</FormContext.Provider>
}
