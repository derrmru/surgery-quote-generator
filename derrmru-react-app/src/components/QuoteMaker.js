import Radio from './form_components/Radio'
import Toes from './Toes'
import style from './QuoteMaker.module.css'

const QuoteMaker = ({ type, fields, updateField, setStage, color }) => {

    return (
        <div style={{zIndex: 100000}} className={style.qmContainer}>
            {
                (
                    type === 'bunion' ||
                    type === 'minimally invasive bunion'
                ) ?
                    <div>
                        <Radio
                            name="one_or_both_feet"
                            value={fields.one_or_both_feet}
                            fields={fields}
                            updateField={(name, value) => updateField(name, value)}
                            label={"Please specify which of your feet requires " + type[0].toUpperCase() + type.slice(1) + " surgery?"}
                            options={['Right Foot', 'Left Foot', 'Both Feet']}
                        />
                        <Radio
                            name="type_of_bunion_surgery"
                            value={fields.type_of_bunion_surgery}
                            fields={fields}
                            updateField={(name, value) => updateField(name, value)}
                            label={"Please select the type of surgery you are interested in."}
                            options={['Scarf & Akin Osteotomy', 'Minimally Invasive Bunion Surgery']}
                        />
                    </div>
                    : type === 'toe' &&
                    <Toes 
                        type={type}
                        setStage={() => setStage('showQuote')}
                        fields={fields} 
                        updateField={(name, value) => updateField(name, value)} 
                        color={color} 
                    />
            }
        </div>
    )
}

export default QuoteMaker