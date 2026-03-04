import type {ReactNode} from 'react'
import styles from './Btn.module.css';

interface Props {
    onClick: () => void;
    children?: ReactNode;
    type?: 'button' | 'submit';
    classBtn: string
}

function Btn({onClick, children, type, classBtn}: Props) {
    return (
        <button className={styles[classBtn]} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Btn