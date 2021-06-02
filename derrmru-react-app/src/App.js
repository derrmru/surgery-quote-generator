import { useState, useEffect } from 'react'
import ShowQuote from './components/ShowQuote'
import ShowBunionQuote from './components/ShowBunionQuote'
import ShowTailorsQuote from './components/ShowTailorsQuote'
import QuoteMaker from './components/QuoteMaker'
import './App.css';

function App() {
  const [type, setType] = useState('general')
  const [start, setStart] = useState(false)
  const [color, setColor] = useState('#248ec2')
  const [stage, setStage] = useState('');

  //if shortcode parameters are used move them to state
  useEffect(() => {
    if (window.app_props) {
      const gProps = window.app_props;
      setType(gProps.surgery_type.toLowerCase())
      setColor(gProps.color)
    }
  }, [])

  //update and store state of form fields
  const [fields, setFields] = useState({});
  const updateField = (name, value) => {
    const temp = { ...fields }
    temp[name] = value;
    setFields(temp)
  }

  //navigate between views based on stage state
  const navigate = (stage) => {
    setStage(stage)
  }

  const startIt = () => {
    setStart(true)
    setStage('')
  }

  const reset = () => {
    setStart(false);
    setStage('');
  }

  console.log(fields)

  return (
    <div className="App">
      {
        !start ? <div
          className='startButton'
        >
          <button
            onClick={() => startIt()}
            style={color ? { backgroundColor: color, color: 'white' } : { color: 'white' }}
          >
            Generate Surgery Quote
            </button>
        </div> :
          stage === 'showQuote' ?
            <>
              <div
                style={{
                  position: 'fixed',
                  zIndex: 100001,
                  top: '20px',
                  right: '20px',
                  cursor: 'pointer',
                  color: color
                }}
                onClick={() => reset()}
              >
                &#10005;
              </div>
              <ShowQuote
                type={type}
                fields={fields}
                navigate={(stage) => navigate(stage)}
                color={color}
              />
            </> :
            stage === 'showBunionQuote' ? 
              <>
              <div
                style={{
                  position: 'fixed',
                  zIndex: 100001,
                  top: '20px',
                  right: '20px',
                  cursor: 'pointer',
                  color: color
                }}
                onClick={() => reset()}
              >
                &#10005;
              </div>
              <ShowBunionQuote
                fields={fields}
                navigate={(stage) => navigate(stage)}
                color={color}
              />
            </> :
              stage === 'showTailorsQuote' ? 
              <>
                <div
                  style={{
                    position: 'fixed',
                    zIndex: 100001,
                    top: '20px',
                    right: '20px',
                    cursor: 'pointer',
                    color: color
                  }}
                  onClick={() => reset()}
                >
                  &#10005;
                </div>
                <ShowTailorsQuote
                  fields={fields}
                  navigate={(stage) => navigate(stage)}
                  color={color}
                />
              </> :
                (type !== 'undefined' && type !== '') ?
                  <>
                    <div
                      style={{
                        position: 'fixed',
                        zIndex: 100001,
                        top: '20px',
                        right: '20px',
                        cursor: 'pointer',
                        color: color
                      }}
                      onClick={() => reset()}
                    >
                      &#10005;
                    </div>
                    <QuoteMaker
                      type={type}
                      fields={fields}
                      updateField={(name, value) => updateField(name, value)}
                      setStage={(stage) => navigate(stage)}
                      color={color}
                    />
                  </> :
                  <div>Please specify your surgery type in the shortcode parameters</div>
      }
    </div>
  );
}

export default App;