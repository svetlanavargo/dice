import type {ReactNode} from 'react'
import styles from './ResetBtn.module.css';

interface Props {
    onClick: () => void;
    children?: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    classBtn: string
}

function ResetBtn({onClick, children, type, classBtn}: Props) {
    return (
        <button className={styles[classBtn]} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default ResetBtn