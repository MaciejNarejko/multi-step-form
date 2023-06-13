import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContext } from '../../contexts/FormContext'

const addonsData = {
	online_service: {
		title: 'Online service',
		details: 'Access to multiplayer games',
		monthly: '+$1/mo',
		yearly: '+$10/yr',
	},
	larger_storage: {
		title: 'Larger storage',
		details: 'Extra 1TB of cloud save',
		monthly: '+$2/mo',
		yearly: '+$20/yr',
	},
	customizable_profile: {
		title: 'Customizable profile',
		details: 'Custom theme on your profile',
		monthly: '+$2/mo',
		yearly: '+$20/yr',
	},
}

const FormAddons = () => {
	const { formData, updateFormData } = useContext(FormContext)
	const navigate = useNavigate()
	useEffect(() => {
		if (!formData.fullName || !formData.email || !formData.phone) {
			navigate('/')
		}
	}, [formData.fullName, formData.email, formData.phone, navigate])

	const handleInputChange = event => {
		const { name, value, checked } = event.target
		const { title, monthly, yearly } = addonsData[value]
		const price = formData.type === 'monthly' ? monthly : yearly

		if (checked) {
			const updatedAddOns = { ...formData.addOns, [title]: price }
			updateFormData({ [name]: updatedAddOns })
		} else {
			const { [title]: _, ...updatedAddOns } = formData.addOns
			updateFormData({ [name]: updatedAddOns })
		}
	}

	return (
		<>
			<div className='form__header'>
				<h1 className='form__title'>Pick add-ons</h1>
				<p className='form__description'>Add-ons help enhance your gaming experience.</p>
			</div>
			<form className='form__body'>
				<div className='addons'>
					{Object.keys(addonsData).map(key => {
						const addon = addonsData[key]
						return (
							<label
								htmlFor={key}
								className={`addon${formData.addOns && formData.addOns[addon.title] ? ' checked' : ''}`}
								key={key}>
								<input
									type='checkbox'
									id={key}
									className='addons__checkbox'
									name='addOns'
									value={key}
									onChange={handleInputChange}
									checked={formData.addOns?.hasOwnProperty(addon.title)}
								/>
								<div className='addons__text'>
									<h2 className='addons__title'>{addon.title}</h2>
									<p className='addons__details'>{addon.details}</p>
								</div>
								<p className='addons__price'>{formData.type === 'monthly' ? addon.monthly : addon.yearly}</p>
							</label>
						)
					})}
				</div>
			</form>
			<div className='form__footer'>
				<Link className='form__prev-page' to={'/plan'}>
					Go Back
				</Link>
				<div className='form__spacer'></div>
				<Link to='/summary'>
					<button className='form__next-page'>Next Step</button>
				</Link>
			</div>
		</>
	)
}

export default FormAddons
