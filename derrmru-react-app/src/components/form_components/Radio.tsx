import style from './Radio.module.css'

interface Props {
    color: string,
    name: string,
    value: any,
    updateField: (name: string, value: any) => void,
    description?: string,
    required: boolean,
    label: string,
    options: string[],
    fields: {[index: string]: string}
}

const Radio: React.FC<Props> = (props) => {
    return (
        <div className={style.radioContainer}>
            <label style={{fontSize: '14px', textAlign: 'left', margin: 'auto', color: props.color}}>
                <div className={style.radioLabel}>{props.label}</div>
                {
                    props.description && <div 
                        className={style.radioDescription}
                        style={props.color ? {color: props.color} : {}}
                        >{props.description}</div>
                }
            <div className={style.checkboxContainer}>
                {
                    props.options.map((option, i) => {
                        return <div 
                            key={'abdoment_questions' + i}
                            className={style.radioInput}
                            >
                            <input
                                type="radio"
                                name={props.name}
                                value={props.value}
                                onChange={e => props.updateField(props.name, option)}
                                checked={props.fields[props.name] === option ? true : false}
                                required={props.required}
                            />
                            <div className={style.checkboxAlignment}>{option}</div>
                        </div>
                    })
                }
                {
                    props.required &&
                        <div 
                            style={{
                                position: 'absolute', 
                                top: 0, 
                                right: '10px', 
                                color: 'red', 
                                fontSize: '10px'
                            }}
                            >
                                *required
                        </div>
                }
            </div>
            </label>
        </div>
    )
}

export default Radio