import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import { FormContext } from '../../contexts/FormContext'

const prices = {
	Arcade: {
		monthly: '9/mo',
		yearly: '90/yr',
		image: arcade,
	},
	Advanced: {
		monthly: '12/mo',
		yearly: '120/yr',
		image: advanced,
	},
	Pro: {
		monthly: '15/mo',
		yearly: '150/yr',
		image: pro,
	},
}

const FormPlan = () => {
	const { formData, updateFormData } = useContext(FormContext)
	const navigate = useNavigate()
	useEffect(() => {
		if (!formData.fullName || !formData.email || !formData.phone) {
			navigate('/')
		}
	}, [formData.fullName, formData.email, formData.phone, navigate])

	useEffect(() => {
		const selectedLabel = document.querySelector(`label[for="${formData.plan.toLowerCase()}"]`)
		selectedLabel.classList.add('selected')

		const planLabels = document.querySelectorAll('.plan__container')
		planLabels.forEach(label => {
			if (label !== selectedLabel) {
				label.classList.remove('selected')
			}
		})
	}, [formData.plan])

	const handleInputChange = event => {
		const { name, value } = event.target
		const { type } = formData
		const price = prices[value][type]
		updateFormData({ ...formData, [name]: value, price })
	}

	const handleToggle = () => {
		const { plan, type } = formData
		const newType = type === 'monthly' ? 'yearly' : 'monthly'
		const price = prices[plan][newType]
		updateFormData({ ...formData, type: newType, price, addOns: {} })
	}

	return (
		<>
			<div className='form__header'>
				<h1 className='form__title'>Select your plan</h1>
				<p className='form__description'>You have the option of monthly or yearly billing.</p>
			</div>
			<form className='form__body'>
				<div className='plan'>
					{Object.keys(prices).map(plan => (
						<label htmlFor={plan.toLowerCase()} className='plan__container' key={plan}>
							<input
								type='radio'
								id={plan.toLowerCase()}
								className='plan__radios'
								name='plan'
								value={plan}
								onChange={handleInputChange}
							/>
							<img
								className='plan__icon'
								id={`${plan.toLowerCase()}Img`}
								alt={`${plan} Icon`}
								src={prices[plan].image}
							/>
							<div className='plan__text'>
								<h2 className='plan__title'>{plan}</h2>
								{formData.type === 'monthly' ? (
									<p className='plan__price'>{prices[plan].monthly}</p>
								) : (
									<p className='plan__price'>{prices[plan].yearly}</p>
								)}
								{formData.type === 'yearly' && <p className='plan__bonus'>2 months free</p>}
							</div>
						</label>
					))}
				</div>
				<div className='plan__period'>
					<p className={`plan__period-monthly ${formData.type === 'monthly' ? 'selectedLabel' : ''}`}>Monthly</p>
					<label className='plan__switch'>
						<input
							type='checkbox'
							id='plan-checkbox'
							name='years'
							className='plan__switch-checkbox'
							data-testid='yearly-switch'
							onChange={handleToggle}
							checked={formData.type === 'monthly' ? false : true}
						/>
						<span className='plan__switch-slider'></span>
					</label>
					<p className={`plan__period-yearly ${formData.type === 'yearly' ? 'selectedLabel' : ''}`}>Yearly</p>
				</div>
			</form>
			<div className='form__footer'>
				<Link className='form__prev-page' to={'/'}>
					Go Back
				</Link>
				<div className='form__spacer'></div>
				<Link to={'/addons'}>
					<button className='form__next-page'>Next Step</button>
				</Link>
			</div>
		</>
	)
}

export default FormPlan
