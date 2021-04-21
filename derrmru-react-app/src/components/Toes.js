import { useState } from 'react'
import Radio from './form_components/Radio'
import ToeSelector from './ToeSelector'
import style from './Toes.module.css'

const Toes = ({ type, setStage, fields, updateField, color}) => {
    const [inc, setInc] = useState(0);
    const stages = [
        'Toe Select',
        'One Or Both Feet'
    ]

    return (
        <div className={style.toeContain + " fade-in"} key={'toes' + inc}>
            {
                stages[inc] === 'Toe Select' ?
                <>
                <h2 style={color ? {color: color, textAlign: 'center'} : {textAlign: 'center'}}>Please Select The Toes That Require Surgery</h2>
                    <ToeSelector
                        fields={fields}
                        updateField={(name, value) => updateField(name, value)}
                        color={color}
                    />
                </> :
                    stages[inc] === 'One Or Both Feet' &&
                    <div className={style.radioContainer}>
                        <Radio
                            color={color}
                            name="one_or_both_feet"
                            value={fields.one_or_both_feet}
                            fields={fields}
                            updateField={(name, value) => updateField(name, value)}
                            label={"Please specify which of your feet requires " + type[0].toUpperCase() + type.slice(1) + " surgery?"}
                            options={['Right Foot', 'Left Foot', 'Both Feet']}
                        />
                    </div>
                    
            }
            <div className={style.buttonContainer}>
            {
                inc > 0 &&
                    <button
                        className={style.nextButton}
                        style={color ? {backgroundColor: color, color: 'white'} : {color: 'white'}}
                        onClick={() => setInc(inc - 1)}
                        >
                            Previous
                    </button>
            }
            {
                ((fields.toe_object && Object.keys(fields.toe_object).length > 0) && inc < stages.length) &&
                    <button
                        className={style.nextButton + ' fade-in'}
                        style={color ? {backgroundColor: color, color: 'white'} : {color: 'white'}}
                        onClick={() => (inc < stages.length - 1 && inc >= 0) ? 
                                setInc(inc + 1) : 
                                    fields.one_or_both_feet && setStage()}
                        >
                            Next
                    </button>
            }
            </div>
        </div>
    )
}

export default Toes