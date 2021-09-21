import style from './Disclaimer.module.css'

const Disclaimer = ({
    pricing
}) => {
    return (
        <div className={style.disclaimer}>
            <h3>Please Note</h3>
            <p>These quotes are purely illustrative and should not be taken as a final price.</p>
            {
                pricing.length > 1 && <>
                    <p>You have selected multiple surgeries, the above outlines the fee for each type of surgery.</p>
                    <p>However, the cost will likely be different when several types of procedure are combined.</p>
                </>
            }
            <p>We will provide a definitive quote following your assessment and prior to your surgery.</p>
            <p>Please contact the clinic for further information.</p>
        </div>
    )
}

export default Disclaimer