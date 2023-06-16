import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import FormInfo from '../pages/FormInfo/FormInfo'
import FormPlan from '../pages/FormPlan/FormPlan'
import FormAddons from '../pages/FormAddons/FormAddons'
import FormSummary from '../pages/FormSummary/FormSummary'
import FormThanks from '../pages/FormThanks/FormThanks'
import { FormContextProvider } from '../contexts/FormContext'

describe('Proper completion and submission of the form', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<FormContextProvider>
					<FormInfo />
					<FormPlan />
					<FormAddons />
					<FormSummary />
					<FormThanks />
				</FormContextProvider>
			</MemoryRouter>
		)
	})

	const fillFormInfo = () => {
		const fullNameInput = screen.getByLabelText('Full Name')
		const emailInput = screen.getByLabelText('Email')
		const phoneInput = screen.getByLabelText('Phone number')

		fireEvent.change(fullNameInput, { target: { value: 'John Doe' } })
		fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
		fireEvent.change(phoneInput, { target: { value: '1234567890' } })
	}

	const proceedToNextStep = () => {
		const nextStepButton = screen.queryAllByText('Next Step')
		fireEvent.click(nextStepButton[0])
	}

	const selectPlan = () => {
		expect(screen.getByText('Select your plan')).toBeInTheDocument()

		expect(screen.getByText('Arcade')).toBeInTheDocument()
		const advancedRadio = screen.getByText('Advanced')
		fireEvent.click(advancedRadio)

		const yearlySwitch = screen.getByTestId('yearly-switch')
		fireEvent.click(yearlySwitch)

		proceedToNextStep()
	}

	const selectAddons = () => {
		expect(screen.getByText('Pick add-ons')).toBeInTheDocument()

		const addonCheckbox = screen.getByRole('checkbox', { name: /Online service/i })
		fireEvent.click(addonCheckbox)

		proceedToNextStep()
	}

	const reviewSummary = () => {
		expect(screen.getByText('Finishing up')).toBeInTheDocument()
		expect(screen.getByText('Advanced (Yearly)')).toBeInTheDocument()
		expect(screen.getByText('$130/yr')).toBeInTheDocument()
	}

	const submitForm = () => {
		const confirmButton = screen.getByRole('button', { name: 'Confirm' })
		fireEvent.click(confirmButton)
		expect(
			screen.getByText(
				'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'
			)
		).toBeInTheDocument()
	}

	it('should complete and submit the form', () => {
		fillFormInfo()
		proceedToNextStep()
		selectPlan()
		selectAddons()
		reviewSummary()
		submitForm()
	})
})
