
import styles from './Field.module.css';

interface Props {
    total: number
}

function Field({total}: Props) {
    return (
        <div className={styles.container}>
            <span className={styles.total}>{total}</span>
        </div>
    )
}

export default Field