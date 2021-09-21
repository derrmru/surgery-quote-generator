import { useState, useEffect } from 'react'
import BothFeet from './BothFeet'
//import SelectSurgery from './SelectSurgery'
import SurgerySelect from './SurgerySelect'
import ShowGeneralQuote from './ShowGeneralQuote'
import style from './General.module.css'

const General = ({
    color
}) => {
    //stages of progress
    const stages = [
        'select_areas',
        'select_issues',
        'show_quote'
    ]
    const [stage, setStage] = useState(0);

    //store foot area sections
    const [selection, setSelection] = useState({});

    //store selected issue to query surgery
    const [issues, setIssues] = useState({});

    //if return to select_areas, then reset issues
    useEffect(() => {
        stage === 0 && setIssues({});
    }, [stage])

    //Validate selection if input controls are required - (Partial Nail Avulsion)
    const [warning, setWarning] = useState('');
    useEffect(() => {
        /**
         * Partial Nail Avulsion pricing is only available up to 2 nails
         * Show warning and prevent progress if selection is greater than 2
         */
        let count = 0;
        for (const issue in issues) {
            if (issues[issue]['Partial Nail Avulsion']) {
                count += 1
            }
        }
        if (count > 2) {
            setWarning(
                <>
                    <p>This quote builder will only provide a quote for up to two Partial Nail Avulsions.</p>
                    <p>If you require more, please contact the clinic directly.</p>
                </>
            )
        } else {
            setWarning('')
        }
    }, [issues])

    const upStage = () => {
        document.getElementById('cont').scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setStage(stage + 1)
    }

    return (
        <div id="cont" className={style.general} style={{ width: '100%', color: color }}>
            {
                stages[stage] === 'select_areas' ?
                    <>
                        <BothFeet
                            selection={selection}
                            setSelection={(x) => setSelection(x)}
                            color={color}
                        />
                        <div className={style.buttonContain}>
                            {//if there are selections, next button becomes available
                                Object.keys(selection).filter((cur) => selection[cur] === true).length > 0 &&
                                <button
                                    className={style.nextButton + " fade-in"}
                                    style={color ? { backgroundColor: color, color: 'white' } : { color: 'white' }}
                                    onClick={() => setStage(stage + 1)}
                                >
                                    Next
                                </button>
                            }
                        </div>
                    </> :
                    stages[stage] === 'select_issues' ?
                        <>
                            <SurgerySelect
                                selection={selection}
                                issues={issues}
                                setIssues={(x) => setIssues(x)}
                                color={color}
                            />
                            {
                                warning && <div className={style.warning + ' fade-in'}>{warning}</div>
                            }
                            <div className={style.buttonContain}>
                                {/*
                                    <button
                                        className={style.nextButton + ' fade-in'}
                                        style={color ? { backgroundColor: color, color: 'white' } : { color: 'white' }}
                                        onClick={() => setStage(stage - 1)}
                                    >
                                        Previous
                                    </button>
                                */}
                                {//if there are at least as many true issues as there are true selections, show next button
                                    (Object.keys(issues)
                                        .filter((issue) => Object.keys(issue)
                                            .filter(issue => issues[issue])).length
                                        >=
                                        Object.keys(selection)
                                            .filter((selected) => selection[selected] === true).length && warning === '') &&
                                    <button
                                        className={style.nextButton + " fade-in"}
                                        style={color ? { backgroundColor: color, color: 'white' } : { color: 'white' }}
                                        onClick={() => upStage()}
                                    >
                                        Next
                                    </button>
                                }
                            </div>
                        </> :
                        stages[stage] === 'show_quote' &&
                        <ShowGeneralQuote
                            color={color}
                            issues={issues}
                        />
            }
        </div>
    )
}

export default General