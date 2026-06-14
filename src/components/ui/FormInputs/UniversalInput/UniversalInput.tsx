import type { InputHTMLAttributes } from 'react';
import './_universalInput.scss';
import type { FieldError } from 'react-hook-form';

type UniversalInputProps = {
	label?: string;
	error?: FieldError ;
} & InputHTMLAttributes<HTMLInputElement>;

export function UniversalInput({ label, id, error, name, ...props }: UniversalInputProps) {
	const inputId = id || name;

	return (
		<div className="input">
			{label && (
				<label htmlFor={inputId} className="input__label">
					{label}
				</label>
			)}

			<input id={inputId} name={name} {...props} className={`input__field ${error ? 'input__field_error' : ''}`} />
		</div>
	);
}
