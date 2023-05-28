import { Link } from 'react-router-dom'
import StepNavigator from '../../components/StepNavigator/StepNavigator'

const FormInfo = () => {
	return (
		<section className='form'>
			<StepNavigator />
			<div className='form__header'>
				<h1 className='form__title'>Personal info</h1>
				<p className='form__description'>Please provide your name, email address, and phone number.</p>
			</div>
			<form className='form__body'>
				<div className='form-info'>
					<label htmlFor='name' className='form-info__label'>
						Name
					</label>
					<input type='text' id='name' className='form-info__input' name='name' placeholder='e.g. Stephen King' />
					<label htmlFor='email' className='form-info__label'>
						Email Address
					</label>
					<input
						type='email'
						id='email'
						className='form-info__input'
						name='email'
						placeholder='e.g. stephenking@lorem.com'
					/>
					<label htmlFor='phone' className='form-info__label'>
						Phone Number
					</label>
					<input type='tel' id='phone' className='form-info__input' name='phone' placeholder='e.g. +1 234 567 890' />
				</div>
			</form>
			<div className='form__footer'>
				<div className='form__spacer'></div>
				<Link className='form__next-page' to={'/plan'}>
					Next Step
				</Link>
			</div>
		</section>
	)
}

export default FormInfo
