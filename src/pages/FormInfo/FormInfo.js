import { useNavigate } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

const FormInfo = () => {
	const { formData, updateFormData } = useContext(FormContext)
	const navigate = useNavigate()

	const [errors, setErrors] = useState({
		fullName: '',
		email: '',
		phone: '',
	})

	const handleInputChange = event => {
		const { name, value } = event.target
		updateFormData({ [name]: value })
		setErrors(prevErrors => ({ ...prevErrors, [name]: validateField(name, value) }))
	}

	const validateField = (name, value) => {
		if (!value) {
			return 'This field is required'
		}
		if (name === 'fullName' && value.length <= 2) {
			return 'Name must contain at least 3 letters'
		}
		if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
			return 'Please enter a valid email address'
		}
		if (name === 'phone' && !/^(\+)?\d{7,15}$/.test(value)) {
			return 'Please enter a valid phone number'
		}
		return ''
	}

	const validateFormInfo = () => {
		const { fullName, email, phone } = formData
		const newErrors = {
			fullName: validateField('fullName', fullName),
			email: validateField('email', email),
			phone: validateField('phone', phone),
		}

		setErrors(newErrors)
		return Object.values(newErrors).some(error => error !== '')
	}

	const handleNextPage = () => {
		const hasErrors = validateFormInfo()
		if (!hasErrors) {
			navigate('/plan')
		}
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
						{errors.fullName && <div className='error-message'>{errors.fullName}</div>}
					</label>
					<input
						type='text'
						id='fullName'
						className={`form-info__input ${errors.fullName ? 'error' : ''}`}
						name='fullName'
						placeholder='e.g. Stephen King'
						value={formData.fullName || ''}
						onChange={handleInputChange}
						aria-label='Full Name'
						required
					/>

					<label htmlFor='email' className='form-info__label'>
						Email Address
						{errors.email && <div className='error-message'>{errors.email}</div>}
					</label>
					<input
						type='email'
						id='email'
						className={`form-info__input ${errors.email ? 'error' : ''}`}
						name='email'
						placeholder='e.g. stephenking@lorem.com'
						value={formData.email || ''}
						onChange={handleInputChange}
						aria-label='Email'
						required
					/>

					<label htmlFor='phone' className='form-info__label'>
						Phone Number
						{errors.phone && <div className='error-message'>{errors.phone}</div>}
					</label>
					<input
						type='tel'
						id='phone'
						className={`form-info__input ${errors.phone ? 'error' : ''}`}
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
				<button className='form__next-page' onClick={handleNextPage}>
					Next Step
				</button>
			</div>
		</>
	)
}

export default FormInfo
