const StepNavigator = () => {
	return (
		<aside className='progress-bar'>
			<div className='progress-bar__steps'>
				<div className='progress-bar__step'>
					<div className='progress-bar__step-index'>1</div>
					<div className='progress-bar__step-content'>
						<p className='progress-bar__step-number'>STEP 1</p>
						<h2 className='progress-bar__step-title'>YOUR INFO</h2>
					</div>
				</div>
				<div className='progress-bar__step'>
					<div className='progress-bar__step-index'>2</div>
					<div className='progress-bar__step-content'>
						<p className='progress-bar__step-number'>STEP 2</p>
						<h2 className='progress-bar__step-title'>SELECT PLAN</h2>
					</div>
				</div>
				<div className='progress-bar__step'>
					<div className='progress-bar__step-index'>3</div>
					<div className='progress-bar__step-content'>
						<p className='progress-bar__step-number'>STEP 3</p>
						<h2 className='progress-bar__step-title'>ADD-ONS</h2>
					</div>
				</div>
				<div className='progress-bar__step'>
					<div className='progress-bar__step-index'>4</div>
					<div className='progress-bar__step-content'>
						<p className='progress-bar__step-number'>STEP 4</p>
						<h2 className='progress-bar__step-title'>SUMMARY</h2>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default StepNavigator
