import { structure } from '../data/data'
import { useState } from 'react'
import QuestionMark from './QuestionMark'
import style from './SelectSurgery.module.css'

const SelectSurgery = ({
    selection,
    issues,
    setIssues,
    color
}) => {

    //reduce checkboxes to issues state in parent
    const set = (area, name) => {
        let temp = { ...issues };
        if (temp[area]) temp[area][name] = !temp[area][name];
        if (!temp[area]) temp[area] = {[name]: true};
        setIssues(temp)
    }

    //select each area one after the other to offer related surgeries
    const areas = Object.keys(selection).filter((current) => selection[current] === true);
    const [stage, setStage] = useState(0)

    console.log(issues)

    return (
        <div className={style.selectionContainer + ' fade-in'}>
            <p style={{width: '100%', marginTop: '40px'}}>Please specify the type of surgery for each area of the foot you have selected.</p>
            <h2 style={{width: '100%'}}>Area {stage + 1} of {areas.length}</h2>
            <button
                className={style.button}
                style={color && { backgroundColor: color }}
                onClick={() => stage > 0 && setStage(stage - 1)}
            >
                &#8678;
            </button>
            <form
                key="1"
                className={style.theForm}
                style={color ? { borderColor: color } : { borderColor: 'black' }}
            >
                <div className={style.overallSection}>
                    <h2 style={{ textAlign: 'left', marginTop: 0 }}>{areas[stage].split('_').map(word => word[0].toUpperCase() + word.toLowerCase().slice(1)).join(' ')}</h2>
                    <QuestionMark color={color} />
                    <hr />
                    {
                        Object.keys(structure[areas[stage]]).map((area, i) => {
                            return <div
                                key={'area' + i}
                                className={style.section}
                            >
                                <h3>{area}</h3>
                                {
                                    structure[areas[stage]][area].map((issue, j) => {
                                        return <label
                                            key={'issue' + j}
                                            className={style.issue}
                                        >
                                            {issue}
                                            <input
                                                type="checkbox"
                                                checked={issues[areas[stage]] ? 
                                                            issues[areas[stage]][issue] : 
                                                                false}
                                                onChange={(e) => set(areas[stage], issue)}
                                            />
                                        </label>
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </form>
            <button
                className={style.button + " fade-in"}
                style={color && { backgroundColor: color }}
                onClick={() => stage < areas.length - 1 && setStage(stage + 1)}
            >
                &#8680;
                    </button>
        </div>
    )
}

export default SelectSurgery