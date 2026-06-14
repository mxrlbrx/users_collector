import type { InputHTMLAttributes } from 'react';
import './_universalInput.scss';

type UniversalInputProps = {
	label?: string;
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function UniversalInput({ label, id, name, ...props }: UniversalInputProps) {
	const inputId = id || name;

	return (
		<div className="input">
			{label && (
				<label htmlFor={inputId} className="input__label">
					{label}
				</label>
			)}

			<input id={inputId} name={name} {...props} className='input__field'/>

		</div>
	);
}
