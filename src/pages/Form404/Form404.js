import { Link } from 'react-router-dom'
import StepNavigator from '../../components/StepNavigator/StepNavigator'

const Form404 = () => {
	return (
		<section className='form'>
			<StepNavigator />
			<div className='form__body'>
				<div className='failed'>
					<h2 className='failed__title'>Oops! Something went wrong.</h2>
					<p className='failed__text'>
						We apologize, but an error occurred during the submission of your multi-step form. Please try again later or
						contact our support team for assistance.
					</p>
					<Link className='failed__link' to={'/'}>
						Go back
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Form404
