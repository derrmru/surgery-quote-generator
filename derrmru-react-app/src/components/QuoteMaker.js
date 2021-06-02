import General from './General'
import Bunion from './Bunion'
import Toes from './Toes'
import Tailors from './Tailors'
import style from './QuoteMaker.module.css'

const QuoteMaker = ({ type, fields, updateField, setStage, color }) => {

    return (
        <div style={{zIndex: 100000}} className={style.qmContainer}>
            {
                type === 'general' ?
                    <General 
                        type={type}
                        setStage={() => setStage('showBunionQuote')}
                        fields={fields}
                        updateField={(name, value) => updateField(name, value)} 
                        color={color} 
                        /> :
                        (
                            type === 'bunion' ||
                            type === 'minimally invasive bunion'
                        ) ?
                            <Bunion 
                                type={type}
                                setStage={() => setStage('showBunionQuote')}
                                fields={fields}
                                updateField={(name, value) => updateField(name, value)} 
                                color={color} 
                                />
                            : type === 'toe' ?
                            <Toes 
                                type={type}
                                setStage={() => setStage('showQuote')}
                                fields={fields} 
                                updateField={(name, value) => updateField(name, value)} 
                                color={color} 
                            /> 
                                : type === 'tailors' &&
                                <Tailors 
                                    type={type}
                                    setStage={() => setStage('showTailorsQuote')}
                                    fields={fields} 
                                    updateField={(name, value) => updateField(name, value)} 
                                    color={color} 
                                    />

            }
        </div>
    )
}

export default QuoteMaker