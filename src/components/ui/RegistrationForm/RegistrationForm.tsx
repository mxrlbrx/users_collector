import { useForm } from 'react-hook-form';
import { UniversalInput } from '../FormInputs/UniversalInput/UniversalInput';
import './_registrationForm.scss';

type RegistrationFormValue = {
	email: string;
	login: string;
	phone: number;
};

export function RegistrationForm() {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm<RegistrationFormValue>({
		mode: 'onBlur',
	});

	const onSubmit = (data: RegistrationFormValue) => {
		alert(JSON.stringify(data));
		reset();
	};

	return (
		<div className="registration-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<UniversalInput
					label="Login"
					error={errors.login}
					{...register('login', {
						required: 'Fill this field',
						minLength: { value: 3, message: 'Minimum 3 characters' },
						maxLength: { value: 20, message: 'Maximum 20 characters' },
					})}
				/>

				<div className="registration-form__error">{errors?.login && errors?.login.message}</div>

				<UniversalInput
					label="Email"
					type="email"
					error={errors.email}
					{...register('email', {
						required: 'Fill this field',
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: 'Invalid email',
						},
					})}
				/>

				<div className="registration-form__error">{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>

				<UniversalInput
					label="Phone"
					type="tel"
					inputMode="tel"
					placeholder="+7 (999) 888 22-11"
					error={errors.phone}
					{...register('phone', {
						required: 'Fill this field',
						pattern: {
							value: /^\+?[1-9]\d{10,14}$/,
							message: 'Format +7 (999) 888 22-11',
						},
					})}
				/>

				<div className="registration-form__error">{errors?.phone && <p>{errors?.phone.message}</p>}</div>

				<input type="submit" className="registration-form__submit" disabled={!isValid} />
			</form>
		</div>
	);
}
