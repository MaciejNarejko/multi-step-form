import { Link } from 'react-router-dom'

const FormSummary = () => {
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
								<p className='summary__plan-selected-name'>Arcade (Yearly)</p>
								<Link className='summary__plan-selected-change' to='/plan'>
									Change
								</Link>
							</div>
							<p className='summary__plan-price'>$90/yr</p>
						</div>
						<div className='summary__services'>
							<div className='summary__service'>
								<p className='summary__service-name'>Online service</p>
								<p className='summary__service-price'>+$10/yr</p>
							</div>
							<div className='summary__service'>
								<p className='summary__service-name'>Larger storage</p>
								<p className='summary__service-price'>+$20/yr</p>
							</div>
						</div>
					</div>

					<div className='summary__total'>
						<p className='summary__total-title'>Total (per year)</p>
						<p className='summary__total-value'>$120/yr</p>
					</div>
				</div>
			</form>
			<div className='form__footer'>
				<Link className='form__prev-page' to={'/addons'}>
					Go Back
				</Link>
				<div className='form__spacer'></div>
				<Link className='form__next-page' to={'/thanks'}>
					Confirm
				</Link>
			</div>
		</>
	)
}

export default FormSummary
