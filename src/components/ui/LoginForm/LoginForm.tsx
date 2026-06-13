import React, { useState } from 'react';
import './_loginForm.scss';

export function LoginForm() {
	const [isChecked, setIsChecked] = useState(false);

	const [email, setEmail] = useState<string>('');
	const [pass, setPass] = useState<string>('');

	const [emailError, setEmailError] = useState<string>('');
	const [passError, setPassError] = useState<string>('');

	const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	const fillEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		const emailValue = e.target.value;
		setEmail(emailValue);
		validateEmail(emailValue);
	};

	function validateEmail(emailValue: string) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(emailValue)) {
			setEmailError('Invalid email');
		} else {
			setEmailError('');
		}
	}

	const fillPass = (e: React.ChangeEvent<HTMLInputElement>) => {
		const passValue = e.target.value;

		setPass(passValue);
		validatePass(passValue);
	};

	function validatePass(passValue: string) {
		if (passValue.length < 6) {
			setPassError('Too short');
		} else {
			setPassError('');
		}
	}

	return (
		<div className="login-form">
			<label htmlFor="email">Email</label>
			<input type="email" value={email} onChange={fillEmail} />
			{emailError ? <p style={{ color: 'red' }}>{emailError}</p> : <p style={{ color: 'green' }}>{email}</p>}
			<label htmlFor="password">Password</label>
			<input type="password" value={pass} onChange={fillPass} />
			{passError ? <p style={{ color: 'red' }}>{passError}</p> : <p style={{ color: 'blue' }}>{pass}</p>}
			<input type="checkbox" name="check" id="" checked={isChecked} onChange={onCheck} />
		</div>
	);
}
