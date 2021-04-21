interface Props {
    name: string,
    value: string,
    updateField: (name: string, value: string) => void,
    description?: string,
    id?: string
}

const TextInput: React.FC<Props> = (props) => {

    //if name is comprised of multiple words separated by underscores, label formatted for reading
    const splits = props.name.split('_').join(' ');

    return (
        <label className="tiLabel">
            <div style={{textAlign: 'left', width: '100%'}}>{splits[0].toUpperCase() + splits.slice(1).toLowerCase()}: </div>
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
            <p
                className="tiDescription"
                >{props.description}</p>
            <input
                id={props.id || ''}
                type="text"
                style={{
                    border: 'none',
                    width: '100%',
                    padding: '10px 5px',
                    marginBottom: '30px',
                    borderRadius: '0',
                    borderBottom: '1px solid #08303a',
                    outline: 'none'
                }}
                name={props.name} 
                value={props.value || ''}
                onChange={(e) => props.updateField(props.name, e.target.value)}
                required
                />
        </label>
    )
}

export default TextInput