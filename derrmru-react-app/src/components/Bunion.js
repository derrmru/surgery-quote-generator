import { useState } from 'react'
import Radio from './form_components/Radio'
import style from './Bunion.module.css'

const Bunion = ({ 
    type, 
    setStage, 
    fields, 
    updateField, 
    color
 }) => {

    const [inc, setInc] = useState(0);
    const questions = [
        'first-question',
        'second-question'
    ]

    const incUp = () => {
        if (inc < questions.length - 1 && Object.keys(fields).length > 0) {
            setInc(inc + 1)
        } else if (inc === questions.length -1) {
            setStage()
        }
    }

    return (
        <div className={style.radioContainer + ' fade-in'}>
            {
                questions[inc] === 'first-question' ?
                    <Radio
                        color={color}
                        name="one_or_both_feet"
                        value={fields.one_or_both_feet}
                        fields={fields}
                        updateField={(name, value) => updateField(name, value)}
                        label={"Please specify which of your feet requires " + type[0].toUpperCase() + type.slice(1) + " surgery?"}
                        options={['Right Foot', 'Left Foot', 'Both Feet']}
                    /> :
                    questions[inc] === 'second-question' &&
                        <div>
                            <a 
                                href={window.location.href + '#surgery-types-box'}
                                target="_blank"
                                rel="noreferrer"
                                className={style.questionMark} style={{color: color, float: 'right'}}
                                >
                                    &#63;
                            </a>
                            <Radio
                                color={color}
                                name="type_of_bunion_surgery"
                                value={fields.type_of_bunion_surgery}
                                fields={fields}
                                updateField={(name, value) => updateField(name, value)}
                                label={"Please select the type of surgery you are interested in."}
                                options={['Scarf & Akin Osteotomy', 'Minimally Invasive Bunion Surgery']}
                            />
                        </div>
            }
            <div className={style.buttonsBox}>
                {
                    inc > 0 &&
                        <button
                            className={style.navButton + ' fade-in'}
                            style={color ? {backgroundColor: color} : {}}
                            onClick={() => setInc(inc - 1)}
                            >
                                Previous
                        </button>
                }
                <button
                    key='1'
                    className={style.navButton  + ' fade-in'}
                    style={color ? {backgroundColor: color} : {}}
                    onClick={() => incUp()}
                    >
                        Next
                </button>
            </div>
        </div>
    )
}

export default Bunion