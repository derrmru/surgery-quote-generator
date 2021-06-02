import { useState } from 'react'
import BothFeet from './BothFeet'
import SelectSurgery from './SelectSurgery'
import style from './General.module.css'

const General = ({
    color
}) => {
    //handle stages of general
    const stages = [
        'select_areas',
        'select_issues',
    ]
    const [stage, setStage] = useState(0);

    //store foot area sections
    const [selection, setSelection] = useState({});

    //store selected issue to query surgery
    const [issues, setIssues] = useState({})

    return (
        <div style={{width: '100%', color: color}}>
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
                                    style={color ? {backgroundColor: color, color: 'white'} : {color: 'white'}}
                                    onClick={() => setStage(stage + 1)}
                                    >
                                    Next
                                </button>
                        }
                        </div>
                    </> :
                        stages[stage] === 'select_issues' ?
                            <>
                                <SelectSurgery 
                                    selection={selection}
                                    issues={issues}
                                    setIssues={(x) => setIssues(x)}
                                    color={color}
                                    />
                                <div className={style.buttonContain}>
                                {
                                    <button 
                                        className={style.nextButton + ' fade-in'}
                                        style={color ? {backgroundColor: color, color: 'white'} : {color: 'white'}}
                                        onClick={() => setStage(stage - 1)}
                                        >
                                            Previous
                                    </button>
                                }
                                {//if there are at least as many issue as there are selections, show next button
                                    Object.keys(issues).filter((issue) => Object.keys(issue).filter(issue => issues[issue])).length >= Object.keys(selection).length && <button
                                        className={style.nextButton + " fade-in"}
                                        style={color ? {backgroundColor: color, color: 'white'} : {color: 'white'}}
                                        onClick={() => setStage(stage + 1)}
                                        >
                                        Next
                                    </button>
                                }
                                </div>
                            </> :
                                <>
                                    <div>
                                        Blah
                                    </div>
                                </>
            }
        </div>
    )
}

export default General