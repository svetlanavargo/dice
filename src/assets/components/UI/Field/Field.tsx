import Btn from '../Btn/Btn.tsx';
import styles from './Field.module.css';
import plusImg from '/src/assets/img/plus.svg';
import minusImg from '/src/assets/img/minus.svg';
import d2Img from '/src/assets/img/d2.svg';
import d4Img from '/src/assets/img/d6.svg';
import d6Img from '/src/assets/img/plus.svg';
import d8Img from '/src/assets/img/minus.svg';
import d10Img from '/src/assets/img/d2.svg';
import d12Img from '/src/assets/img/d6.svg';
import d20Img from '/src/assets/img/d6.svg';

const images: Record<string, string> = {
    plus: plusImg,
    minus: minusImg,
    d2: d2Img,
    d4: d4Img,
    d6: d6Img,
    d8: d8Img,
    d10: d10Img,
    d12: d12Img,
    d20: d20Img,
    d100: d10Img
}

interface Roll {
    value: number
    magnitude: number | 'manual',
    type?: 'plus' | 'minus'
}

interface Props {
    total: number,
    history: Roll[],
    onReset: () => void,
    onInc: () => void,
    onDec: () => void
}

function Field({total, history, onReset, onInc, onDec}: Props) {
    const hasTotal = total > 0;

    return (
        <div className={styles.container}>
            <div className={styles.history}>
                {history.slice().reverse().map((roll, index) => {
                    let imgSrc

                    if (roll.magnitude === 'manual') {
                        imgSrc = roll.type === 'plus' ? images.plus : images.minus
                    } else {
                        imgSrc = images[`d${roll.magnitude}`]
                    }

                    return (
                        <div key={index} className={styles.historyWrapper}>
                            <img className={styles.historyImg} src={imgSrc} alt=''/>
                            <span className={styles.historyRollValue}>{roll.value}</span>
                        </div>
                    )
                })}
            </div>
            <div className={styles.totalHandler}>
                {hasTotal && <Btn onClick={onDec} classBtn='minus'/>}
                <div className={styles.total}>
                    <span>{total}</span>
                </div>
                {hasTotal && <Btn onClick={onInc} classBtn='plus'/>}
            </div>

            {hasTotal && <Btn onClick={onReset} classBtn='reset'/>}
        </div>
    )
}

export default Field