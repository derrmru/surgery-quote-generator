import Radio from './form_components/Radio'
import style from './Tailors.module.css'

const Tailors = ({
    type, 
    setStage, 
    fields, 
    updateField, 
    color
}) => {

    return (
        <div className={style.radioContainer + ' fade-in'}>
                    <Radio
                        color={color}
                        name="one_or_both_feet"
                        value={fields.one_or_both_feet}
                        fields={fields}
                        updateField={(name, value) => updateField(name, value)}
                        label={"Please specify which of your feet requires " + type[0].toUpperCase() + type.slice(1) + " Bunion surgery?"}
                        options={['Right Foot', 'Left Foot', 'Both Feet']}
                    /> 
            <div className={style.buttonsBox}>
                <button
                    key='1'
                    className={style.navButton  + ' fade-in'}
                    style={color ? {backgroundColor: color} : {}}
                    onClick={() => setStage()}
                    >
                        Next
                </button>
            </div>
        </div>
    )
}

export default Tailors