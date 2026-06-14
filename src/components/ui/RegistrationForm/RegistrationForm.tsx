import { useForm } from 'react-hook-form';
import { UniversalInput } from '../FormInputs/UniversalInput/UniversalInput';
import './_registrationForm.scss';

type RegistrationFormValue = {
	email: string;
};

export function RegistrationForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<RegistrationFormValue>();

	const onSubmit = (data: RegistrationFormValue) => {
		alert(JSON.stringify(data));
	};

	return (
		<div className="registration-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<UniversalInput
					label="Email"
					type="email"
					{...register('email', {
						required: 'Поле обязательно к заполнению',
					})}
				/>

				<div style={{ height: 40 }}>
					{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
				</div>
				
				<input type="submit" name="" id="" className="registration-form__submit" />
			</form>
		</div>
	);
}
