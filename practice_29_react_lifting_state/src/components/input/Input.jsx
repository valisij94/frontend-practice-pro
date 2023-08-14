import s from './Input.module.css';

export default function Input( props ) {
    return (
        <input
            type={props.type || 'text'}
            onChange={props.onChange}
            placeholder={props.placeholder || ''}
            className={`${s.input} ${props.classes}`}
            onFocus={props.onFocus}
            value={props.value}
        />
    )
}