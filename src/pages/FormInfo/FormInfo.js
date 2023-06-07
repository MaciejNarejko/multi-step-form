import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

const FormInfo = () => {
	const { formData, updateFormData } = useContext(FormContext)

	const handleInputChange = event => {
		const { name, value } = event.target
		updateFormData({ [name]: value })
	}

	return (
		<>
			<div className='form__header'>
				<h1 className='form__title'>Personal info</h1>
				<p className='form__description'>Please provide your name, email address, and phone number.</p>
			</div>
			<form className='form__body'>
				<div className='form-info'>
					<label htmlFor='fullName' className='form-info__label'>
						Name
					</label>
					<input
						type='text'
						id='fullName'
						className='form-info__input'
						name='fullName'
						placeholder='e.g. Stephen King'
						value={formData.fullName || ''}
						onChange={handleInputChange}
						aria-label='Full Name'
						required
					/>
					<label htmlFor='email' className='form-info__label'>
						Email Address
					</label>
					<input
						type='email'
						id='email'
						className='form-info__input'
						name='email'
						placeholder='e.g. stephenking@lorem.com'
						value={formData.email || ''}
						onChange={handleInputChange}
						aria-label='Email'
						required
					/>
					<label htmlFor='phone' className='form-info__label'>
						Phone Number
					</label>
					<input
						type='tel'
						id='phone'
						className='form-info__input'
						name='phone'
						placeholder='e.g. +1 234 567 890'
						value={formData.phone || ''}
						onChange={handleInputChange}
						aria-label='Phone number'
						required
					/>
				</div>
			</form>
			<div className='form__footer'>
				<div className='form__spacer'></div>
				<Link className='form__next-page' to={'/plan'}>
					Next Step
				</Link>
			</div>
		</>
	)
}

export default FormInfo
