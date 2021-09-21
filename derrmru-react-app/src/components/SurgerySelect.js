import { structure } from '../data/data'
import { useState } from 'react'
import style from './SurgerySelect.module.css'

const SurgerySelect = ({
    selection,
    issues,
    setIssues,
    color
}) => {

    //reduce checkboxes to issues state in parent
    const set = (area, name) => {
        let temp = { ...issues };
        temp[area] = { [name]: true };
        setIssues(temp)
        areas.indexOf(area) !== (areas.length - 1) ? setStage(areas[areas.indexOf(area) + 1]) : setStage('complete')
    }

    console.log('issues', issues)

    const areas = Object.keys(selection).filter((current) => selection[current] === true);
    const [stage, setStage] = useState(areas[0]);
    const [hover, setHover] = useState('');
    console.log('areas', areas)
    console.log('stage', stage)
    console.log('structure', structure)

    return (
        <div className={style.container + ' fade-in'}>
            <h3 style={{ textAlign: 'center' }}>Please Specify A Procedure For Each Area You Selected</h3>
            {
                areas.map((area, i) => {
                    return <div
                        key={'area' + i}
                        className={style.section}
                        onClick={() => setStage(area)}
                        onMouseOver={() => setHover(area)}
                        onMouseLeave={() => setHover('')}
                        style={stage === area ?
                            { backgroundColor: '#ebebeb' } :
                            hover === area ?
                                { backgroundColor: '#ebebeb', color: color } :
                                issues[area] ?
                                    { backgroundColor: color, color: 'white' } :
                                    {}
                        }
                    >
                        {
                            area.split('_').map((word, j) => {
                                return word[0].toUpperCase() + word.slice(1).toLowerCase()
                            }).join(' ')
                        }
                        {
                            issues[area] && <div className={style.tick + ' fade-in'}>&#10003;</div>
                        }
                    </div>
                })
            }
            {
                stage !== 'complete' && <div className={style.formOutline}>
                    <h3 style={{ textAlign: 'center' }}>
                        {
                            stage.split('_').map((word, j) => {
                                return word[0].toUpperCase() + word.slice(1).toLowerCase()
                            }).join(' ')
                        }
                    </h3>
                    <form key="form">
                        {
                            Object.keys(structure[stage]).map((part, i) => {
                                return <div
                                    key={'part' + i}
                                    className={style.part + ' fade-in'}
                                >
                                    <h3 style={{ paddingBottom: '0' }}>{part}</h3>
                                    {
                                        structure[stage][part].map((issue, j) => {
                                            return <label
                                                key={'issue' + j}
                                                className={style.issue}
                                                onChange={(e) => set(stage, e.target.value)}
                                                defaultChecked={false}
                                            >
                                                {issue}
                                                <input
                                                    type="radio"
                                                    key={'a' + issue}
                                                    name={areas}
                                                    value={issue}
                                                    checked={issues[stage] ? issues[stage][issue] : false}
                                                    onChange={() => undefined}
                                                />
                                            </label>
                                        })
                                    }
                                </div>
                            })
                        }
                    </form>
                </div>
            }
        </div>
    )
}

export default SurgerySelect