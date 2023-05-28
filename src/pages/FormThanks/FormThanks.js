import StepNavigator from '../../components/StepNavigator/StepNavigator'
import completion from '../../assets/images/icon-thank-you.svg'

const FormThanks = () => {
	return (
		<section className='form'>
			<StepNavigator />
			<div className='form__body'>
				<div className='gratitude'>
					<img className='gratitude__icon' id='completionImg' src={completion} alt='Order placed' aria-hidden='true' />
					<h2 className='gratitude__title'>Thank you!</h2>
					<p className='gratitude__text'>
						Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
						please feel free to email us at support@loremgaming.com.
					</p>
				</div>
			</div>
		</section>
	)
}

export default FormThanks
