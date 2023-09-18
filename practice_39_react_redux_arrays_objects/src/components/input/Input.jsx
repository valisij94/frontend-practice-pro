import { useContext } from 'react';
import s from './Input.module.css';
import { ThemeContext } from '../../context/context';


export default function Input( props ) {

    const {theme} = useContext(ThemeContext);
    return (
        <input
            type={props.type || 'text'}
            onChange={props.onChange}
            placeholder={props.placeholder || ''}
            className={`
                ${s.input}
                ${props.classes || ''}
                ${theme === 'dark' ? s.inputDark : s.inputLight}
            `}
            onFocus={props.onFocus}
            value={props.value}
        />
    )
}