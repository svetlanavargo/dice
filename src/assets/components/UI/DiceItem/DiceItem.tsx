import styles from './DiceItem.module.css'

interface Props {
    magnitude: number,
    onRoll: (value: number) => void
}

function DiceItem({ magnitude, onRoll }: Props)  {
    const shapeClass = styles[`d${magnitude}`]

    const rollDice = (magnitude: number) => {
        onRoll(Math.floor(Math.random() * magnitude + 1))
    }

    return (
        <div className={styles.diceContainer}>
            <div className={`${styles.dice} ${shapeClass}`} onClick={() => rollDice(magnitude)}>
                <span>{magnitude}</span>
            </div>
        </div>
    )
}

export default DiceItem