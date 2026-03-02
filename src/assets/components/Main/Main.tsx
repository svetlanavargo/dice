import { useState } from 'react';
import Field from '../UI/Field/Field.tsx';
import DiceItem from '../UI/DiceItem/DiceItem.tsx';
import styles from './Main.module.css';

const dices: number[] = [2, 4, 6, 8, 10, 12, 20, 100]

function Main() {
    const [total, setTotal] = useState(0)

    const handleRoll = (value:number) => {
        setTotal(prev => prev + value)
    }

    return (
        <div className={styles.main}>
            <Field total={total}/>
            <div className={styles.wrapper}>
                <div className={styles.containerDices}>
                    {dices.map((dice:number, id:number) => (
                        <DiceItem key={id} magnitude={dice} onRoll={handleRoll} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main