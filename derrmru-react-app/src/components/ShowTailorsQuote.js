import { useEffect, useState } from 'react'
import $ from 'jquery'
import Loading from './Loading'
import style from './ShowTailorsQuote.module.css'

const ShowBunionQuote = ({ fields, navigate, color }) => {
    //show loading icon while awaiting response for quote
    const [load, setLoad] = useState(true);
    const [result, setResult] = useState({});

    const uniBi = fields.one_or_both_feet !== 'Both Feet' ? 'one foot' : 'both feet';

    useEffect(() => {
        $.post(process.env.REACT_APP_GET_QUOTE,
            {procedure: 'tailors ' + uniBi},
            async (res) => {
                let result = await JSON.parse(res);
                console.log(result)
                setResult(result)
                setLoad(false)
            });
    }, [uniBi])

    console.log(fields)

    return (
        <div>
            {
                load ?
                    <Loading color={color} /> :
                    <div className={style.quoteContain} style={{zIndex: 100000}}>
                        <div className={style.quoteContainer + ' fade-in'}>
                        <h2 style={color ? {color: color} : {}}>Your Price Guide</h2>
                        <h3 style={color ? {color: color} : {}}>You have selected 5th metatarsal osteotom{uniBi === 'both feet' ? 'ies' : 'y'} for {uniBi}.</h3>
                        <p>Please see the below price guide for this procedure.</p>
                        <hr style={{border: 'none', height: '1px', backgroundColor: color, width: '100%'}} />
                        <p>For your selected surgery the total price will depend on the type of anesthetic being used.</p>
                        <p>Your surgeon will discuss what is most appropriate with you during your consultation.</p>
                        <p>The below prices are for each type of anesthetic.</p>
                        {Object.keys(result).map((price, i) => {
                            return <div 
                                key={'price' + i}
                                className={style.priceContainer}
                                >
                                    <div 
                                        className={style.price}
                                        style={color ? {border: '2px solid ' + color} : {}}
                                        >
                                        {
                                            price === 'LA' ? 'Local Anesthetic: ' :
                                                price === 'GA' ? 'General Anesthetic: ' :
                                                    'Sedation: '
                                        }£{result[price].toFixed(0)}
                                    </div>
                            </div>
                        })}
                        <hr style={{border: 'none', height: '1px', backgroundColor: color}} />
                        <p><strong>Prices vary depending on a number of factors and this is an illustration only.</strong></p>
                        <p><strong>We will provide a definitive quote following a consultation to allow you to make an informed decision on how to proceed.</strong></p>
                        <hr style={{border: 'none', height: '1px', backgroundColor: color, width: '100%'}} />
                        <h3 style={color ? {color: color, width: '100%'} : {width: '100%'}}>Next Steps</h3>
                        <div className={style.stepsContainer}>
                            <a 
                                href='https://bookonline.londonfootandanklesurgery.co.uk'
                                className={style.bookButton}
                                style={color ? {backgroundColor: color} : {}}
                                >
                                Book An Appointment
                            </a>
                            <a 
                                href='https://londonfootandanklesurgery.co.uk/contact-us'
                                className={style.bookButton}
                                style={color ? {backgroundColor: color} : {}}
                                >
                                Get In Touch
                            </a>
                            <button
                                className={style.nextButton + ' fade-in'}
                                style={color ? {backgroundColor: color, color: 'white'} : {color: 'white'}}
                                onClick={() => navigate('')}
                            >
                                Back To The Start
                            </button>
                        </div>
                    </div>
                    </div>
            }
        </div>
    )
}

export default ShowBunionQuote