import './Loading.css'

interface Props {
    color: string
}

const WakingUp: React.FC<Props> = (props) => {

    return (
        <div className="waking-up" style={{zIndex: 100000}}>
            <div className="loading-icon">
                <div style={{borderTop: '5px solid ' + props.color}} className="first-circle"></div>
            </div>
            <p style={{color: props.color}}>Loading...</p>
        </div>
    )
}

export default WakingUp