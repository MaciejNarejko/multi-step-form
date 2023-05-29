import { Link } from 'react-router-dom'

const FormAddons = () => {
	return (
		<>
			<div className='form__header'>
				<h1 className='form__title'>Pick add-ons</h1>
				<p className='form__description'>Add-ons help enhance your gaming experience.</p>
			</div>
			<form className='form__body'>
				<div className='addons'>
					<label htmlFor='online_service' className='addons__online addon'>
						<input type='checkbox' id='online_service' className='addons__checkbox' name='online_service'></input>
						<div className='addons__text'>
							<h2 className='addons__title'>Online service</h2>
							<p className='addons__details'>Access to multiplayer games</p>
						</div>
						<p className='addons__price'>+$1/mo</p>
					</label>
					<label htmlFor='larger_storage' className='addons__storage addon'>
						<input type='checkbox' id='larger_storage' className='addons__checkbox' name='larger_storage'></input>
						<div className='addons__text'>
							<h2 className='addons__title'>Larger storage</h2>
							<p className='addons__details'>Extra 1TB of cloud save</p>
						</div>
						<p className='addons__price'>+$2/mo</p>
					</label>
					<label htmlFor='customizable_profile' className='addons__profile addon'>
						<input
							type='checkbox'
							id='customizable_profile'
							className='addons__checkbox'
							name='customizable_profile'></input>
						<div className='addons__text'>
							<h2 className='addons__title'>Customizable profile</h2>
							<p className='addons__details'>Custom theme on your profile</p>
						</div>
						<p className='addons__price'>+$2/mo</p>
					</label>
				</div>
			</form>
			<div className='form__footer'>
				<Link className='form__prev-page' to={'/plan'}>
					Go Back
				</Link>
				<div className='form__spacer'></div>
				<Link className='form__next-page' to={'/summary'}>
					Next Step
				</Link>
			</div>
		</>
	)
}

export default FormAddons
