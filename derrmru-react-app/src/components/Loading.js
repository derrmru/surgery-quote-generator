import style from './Loading.module.css'

const WakingUp = (props) => {

    return (
        <div className={style.wakingUP} style={{ zIndex: 100000 }}>
            <div className={style.loadingIcon}>
                <div style={{ borderTop: '5px solid ' + props.color }} className={style.firstCircle}></div>
            </div>
            <p style={{ color: props.color }}>Loading...</p>
        </div>
    )
}

export default WakingUp