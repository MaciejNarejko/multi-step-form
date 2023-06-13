import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { FormContext } from '../../contexts/FormContext'

const FormSummary = () => {
	const { formData } = useContext(FormContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (!formData.fullName || !formData.email || !formData.phone) {
			navigate('/')
		}
	}, [formData.fullName, formData.email, formData.phone, navigate])

	const handleValidationForm = () => {
		const { fullName, email, phone, plan, price, type } = formData
		const isFormValid = fullName && email && phone && plan && price && type
		if (isFormValid) {
			navigate('/thanks')
		}
	}

	const addonPrices = Object.values(formData.addOns)
	const total = addonPrices.reduce((sum, price) => {
		const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''))
		return sum + numericPrice
	}, 0)

	const totalPrice = parseFloat(formData.price.replace(/[^\d.-]/g, ''))
	const grandTotal = total + totalPrice
	const durationLabel = formData.type === 'monthly' ? '/mo' : '/yr'
	const plusLabel = formData.type === 'monthly' ? '+' : ''

	return (
		<>
			<div className='form__header'>
				<h1 className='form__title'>Finishing up</h1>
				<p className='form__description'>Double-check everything looks OK before confirming.</p>
			</div>
			<form className='form__body'>
				<div className='summary'>
					<div className='summary__selected'>
						<div className='summary__plan'>
							<div className='summary__plan-selected'>
								<p className='summary__plan-selected-name'>
									{formData.plan} ({formData.type.charAt(0).toUpperCase() + formData.type.slice(1)})
								</p>
								<Link className='summary__plan-selected-change' to='/plan'>
									Change
								</Link>
							</div>
							<p className='summary__plan-price'>{formData.price}</p>
						</div>
						<div className='summary__services'>
							{Object.entries(formData.addOns).map(([addOnName, addOnPrice], index) => (
								<div className='summary__service' key={index}>
									<p className='summary__service-name'>{addOnName}</p>
									<p className='summary__service-price'>{addOnPrice}</p>
								</div>
							))}
						</div>
					</div>

					<div className='summary__total'>
						<p className='summary__total-title'>{`Total (${
							formData.type === 'monthly' ? 'per month' : 'per year'
						})`}</p>
						<p className='summary__total-value'>{`${plusLabel}$${grandTotal}${durationLabel}`}</p>
					</div>
				</div>
			</form>
			<div className='form__footer'>
				<Link className='form__prev-page' to={'/addons'}>
					Go Back
				</Link>
				<div className='form__spacer'></div>
				<button className='form__next-page confirm' onClick={handleValidationForm}>
					Confirm
				</button>
			</div>
		</>
	)
}

export default FormSummary
