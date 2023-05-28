import { Link } from 'react-router-dom'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import StepNavigator from '../../components/StepNavigator/StepNavigator'
const FormPlan = () => {
	return (
		<section className='form'>
			<StepNavigator />
			<div className='form__header'>
				<h1 className='form__title'>Select your plan</h1>
				<p className='form__description'>You have the option of monthly or yearly billing.</p>
			</div>
			<form className='form__body'>
				<div className='plan'>
					<label htmlFor='arcade' className='plan__container'>
						<input type='radio' id='arcade' className='plan__radios' name='plan-radios'></input>
						<img className='plan__icon' id='arcadeImg' alt='Arcade Icon' src={arcade} />
						<div className='plan__text'>
							<h2 className='plan__title'>Arcade</h2>
							<p className='plan__price'>$9/mo</p>
							<p className='plan__bonus'>2 months free</p>
						</div>
					</label>
					<label htmlFor='advanced' className='plan__container'>
						<input type='radio' id='advanced' className='plan__radios' name='plan-radios'></input>
						<img className='plan__icon' id='advancedImg' alt='Advanced Icon' src={advanced} />
						<div className='plan__text'>
							<h2 className='plan__title'>Advanced</h2>
							<p className='plan__price'>$12/mo</p>
							<p className='plan__bonus'>2 months free</p>
						</div>
					</label>
					<label htmlFor='pro' className='plan__container'>
						<input type='radio' id='pro' className='plan__radios' name='plan-radios'></input>
						<img className='plan__icon' id='proImg' alt='Pro Icon' src={pro} />
						<div className='plan__text'>
							<h2 className='plan__title'>Pro</h2>
							<p className='plan__price'>$15/mo</p>
							<p className='plan__bonus'>2 months free</p>
						</div>
					</label>
				</div>
				<div className='plan__period'>
					<p className='plan__monthly'>Monthly</p>
					<div className='plan__switch'>
						<div className='plan__checkbox'></div>
					</div>
					<p className='plan__yearly'>Years</p>
				</div>
			</form>
			<div className='form__footer'>
				<Link className='form__prev-page' to={'/'}>
					Go Back
				</Link>
				<div className='form__spacer'></div>
				<Link className='form__next-page' to={'/addons'}>
					Next Step
				</Link>
			</div>
		</section>
	)
}

export default FormPlan
