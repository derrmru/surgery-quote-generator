import { useState, useEffect } from 'react'
import { countIssues } from '../functions/countIssues'
import { getHammered } from '../functions/getHammered'
import { getBunioned } from '../functions/getBunioned'
import { getTailors } from '../functions/getTailors'
import { getCheilectomy } from '../functions/getCheilectomy'
import { getBrachymetatarsia } from '../functions/getBrachymetatarsia'
import { getCorns } from '../functions/getCorns'
import { getNailAvulsion } from '../functions/getNailAvulsion'
import { getDetails } from '../functions/getDetails'
import Disclaimer from './Disclaimer'
import $ from 'jquery'
import Loading from './Loading'
import style from './showGeneralQuote.module.css'

const ShowGeneralQuote = ({
    color,
    issues
}) => {
    const [load, setLoad] = useState(true);

    //reduce issues to price query data, this will be passed to google web app to determine pricing below
    const areas = countIssues(issues)

    //received pricing state
    const [pricing, setPricing] = useState([]);
    console.log('pricing', pricing)
    const [result, setResult] = useState([]);
    console.log('result', result)

    //post data and receive pricing
    useEffect(() => {

        const data = {
            hammertoeInfo: getHammered(areas), //return object specifying isHammered <boolean>, isBilateral <boolean> and largest number of toes
            bunionInfo: getBunioned(areas), //return object specifying isBunion <boolean>, isBilateral <boolean> and type of bunion surgery on left and right
            tailorInfo: getTailors(areas), //return object specifying isTailors <boolean>, isBilateral <boolean>, left or right
            cheilectomyInfo: getCheilectomy(areas), //return object specifying isCheilectomy <boolean>, isBilateral <boolean>, left or right
            brachyInfo: getBrachymetatarsia(areas), //return object specifying isBrachy <boolean>, isBilateral <boolean>, left or right
            cornInfo: getCorns(areas), //return object specifying isCorn <boolean>, isBilateral <boolean> and largest number of toes
            nailInfo: getNailAvulsion(areas) //return object specifying isNailAvulsion <boolean>, isBilateral <boolean> and largest number of toes
        }

        if (pricing.length === 0) {
            $.post(
                process.env.REACT_APP_GENERAL_QUOTE,
                { 'data': JSON.stringify(data) },
                (res) => {
                    setPricing(JSON.parse(res))
                    setLoad(false)
                }
            )
        } else if (result.length === 0) {
            setResult(getDetails(pricing, issues, areas, data));
        }
    }, [setPricing, pricing, setLoad, setResult, result, areas, issues])

    return <div>
        {
            load ? <Loading color={color} /> :
                <div className={style.showGeneralQuoteContainer}>
                    <h1>Your Quote</h1>
                    {
                        pricing.map((surgery, i) => {
                            const item = result[i];
                            return <div key={'surgery' + i} className={style.surgery}>
                                <h2 style={{ paddingBottom: '0' }}>{Object.keys(surgery)[0][0].toUpperCase() + Object.keys(surgery)[0].slice(1).toLowerCase() /**Name of Surgery capitalised */} surgery</h2>

                                {//description of selection
                                    result && <div key={"item" + i} className={style.description}>
                                        You have selected
                                        {(item.issue === 'cheilectomy' || item.issue === 'nail avulsion') && ' a'}
                                        {` ${item.laterality}`}
                                        {` ${item.issue}`}
                                        {(item.numToes || item.numberOfToes) && ' for'}
                                        {(item.laterality === 'bilateral' && item.numToes > 1) && ' up to'}
                                        {item.numToes && ` ${item.numToes}`}
                                        {item.numberOfToes && ` ${item.numberOfToes}`}
                                        {
                                            (item.numToes > 1 || item.numberOfToes > 1) ? ' toes' :
                                                (item.numToes === 1 || item.numberOfToes === 1) ? ' toe' : ''
                                        }.
                                    </div>
                                }

                                <div className={style.quoteContainer}>
                                    {
                                        Object.keys(surgery)[0] === 'Partial Nail Avulsion' ?
                                            <>
                                                <div
                                                    className={style.quote}
                                                    style={{ backgroundColor: color }}
                                                >
                                                    <div><strong>Package Fee</strong></div>
                                                    <div>£{Math.round(surgery[Object.keys(surgery)][0])}</div>
                                                </div>
                                            </> :
                                            Object.keys(surgery)[0] === 'corn' ?
                                                <>
                                                    <div
                                                        className={style.quote}
                                                        style={{ backgroundColor: color }}
                                                    >
                                                        <div><strong>Surgery Fee Range</strong></div>
                                                        <div>{surgery[Object.keys(surgery)][0]}</div>
                                                    </div>
                                                </> :
                                                <>
                                                    <div
                                                        className={style.quote}
                                                        style={{ backgroundColor: color }}
                                                    >
                                                        <div><strong>Local Anesthetic</strong></div>
                                                        <div>£{Math.round(surgery[Object.keys(surgery)][0])}</div>
                                                    </div>
                                                    <div
                                                        className={style.quote}
                                                        style={{ backgroundColor: color }}
                                                    >
                                                        <div><strong>Sedation</strong></div>
                                                        <div>£{Math.round(surgery[Object.keys(surgery)][1])}</div>
                                                    </div>
                                                    <div
                                                        className={style.quote}
                                                        style={{ backgroundColor: color }}
                                                    >
                                                        <div><strong>General Anesthetic</strong></div>
                                                        <div>£{Math.round(surgery[Object.keys(surgery)][2])}</div>
                                                    </div>
                                                    <div className={style.explanation}>
                                                        <p>The cost of surgery will vary depending on the kind of anaethesia used during the procedure.</p>
                                                        <p>Your surgeon will discuss these options with you and prior to surgery.</p>
                                                    </div>
                                                </>
                                    }
                                </div>
                            </div>
                        })
                    }
                    <Disclaimer pricing={pricing} />
                </div>
        }
    </div>
}

export default ShowGeneralQuote