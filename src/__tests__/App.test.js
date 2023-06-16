import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('App', () => {
	test('renders Form component', () => {
		render(<App />)

		const formElement = screen.getByText('Personal info')
		expect(formElement).toBeInTheDocument()

		const fullNameInput = screen.getByLabelText('Name')
		expect(fullNameInput).toBeInTheDocument()

		const emailInput = screen.getByLabelText('Email Address')
		expect(emailInput).toBeInTheDocument()

		const phoneInput = screen.getByLabelText('Phone Number')
		expect(phoneInput).toBeInTheDocument()

		const nextButton = screen.getByRole('button', { name: 'Next Step' })
		expect(nextButton).toBeInTheDocument()
	})
})
