import { useState } from 'react'
import style from './FullFoot.module.css'

const FullFoot = ({
    selection,
    setSelection,
    color
}) => {

    //set hover location
    const [hover, setHover] = useState('');

    //set selection
    const select = (selected) => {
        let temp = { ...selection };
        temp[selected] = !temp[selected]
        setSelection(temp)
    }

    return (
        <div style={{ width: '100vw' }} className="fade-in">
            <h3 style={{ margin: '60px 40px 0 40px', color: color || '', paddingBottom: 0 }}>
                Please Select The Areas Of The Foot That Require Surgery
            </h3>
            <svg
                className={style.footSVG}
                width="100%"
                height="100%"
                viewBox="0 0 200 174"
            >
                <g>
                    <path
                        className={style.st0}
                        d="M124.9,170.2c0,0-1.9-9.4,0.3-17.1c0,0,6.2-8.1,5.4-16.6c0,0-0.8-8.5,1.5-15.1c0,0,3-9.9,2.6-14.2
c0,0,1-9.7,2.8-12c0,0,2.1-8.8,1-20.4c0,0-1.4-24.4-3.9-29.5c0,0-1.3-3.1-4.4-3.8"
                    />
                    <path
                        className={style.st0}
                        d="M125.5,75c0,0-0.4-4.2,0.9-10.8c0,0,1.5-5.5,1.2-8.7c0,0,0.6-4.3,1.4-6.5c0,0,2.7-13.1-2.5-14.7
c0,0-2.2-1.9-5.1-0.6c0,0-1.1,0.4-1.4,1.3"
                    />
                    <path
                        className={style.st0}
                        d="M115.6,66.4c0,0-0.6-6.4,1.2-8.7c0,0,1-9.7,0.7-12.9c0,0,0.5-5.4,2.1-8.8c0,0,4-10-1.4-13.8
c0,0-3.4-3.9-8.2-1.3"
                    />
                    <path
                        className={style.st0}
                        d="M105,61c0,0-0.5-5.3,0.2-8.6c0,0,1.7-3.4,0.9-10.8c0,0-0.7-7.4,1.7-13c0,0,4.8-12.2-0.5-14.9
c0,0-6.3-2.6-12.8,2.3c0,0-0.9,0.8-1.4,1.6"
                    />
                    <path
                        className={style.st0}
                        d="M63.9,55.9c0.1-1.5,0.1-2.6,0.1-2.6s0.5-5.4,1.3-7.6c1-2.8-0.4-13.9-0.4-13.9s-1.7-16.9,15.1-19.7
c0,0,14.9-1.5,14.2,11.4c0,0-4.8,12.2-4.4,16.5c0,0,0.3,3.2-2.4,6.6c0,0-2.6,4.5,0.5,5.3c0,0,3.1,0.8,4.7-3.7c0,0-0.7-7.4,0.8-11.8
c0,0,1.3-7.6,0.9-10.8c0,0-0.1-1.1-0.2-2.1"
                    />
                    <path
                        className={style.st0}
                        d="M63.9,55.9c-0.1,2.6-0.4,6.4-0.8,8.2c-2.1,8.8,2.5,14.7,2.5,14.7c2.4,4,4.6,35.9,4.6,35.9
c-0.5,5.4,0.2,11.7,0.2,11.7c4.8,17.7-1.2,38.6-1.2,38.6"
                    />
                    <path
                        className={style.st0}
                        d="M74.4,45.9c0,0,3.3,2.9,10.2,1.1"
                    />
                    <path
                        className={style.st0}
                        d="M77.3,44.5c0,0,3.2,1.8,5.1,0.6"
                    />
                    <path
                        className={style.st0}
                        d="M99.3,43.4c0,0,1.1,1,3.1,0.8"
                    />
                    <path
                        className={style.st0}
                        d="M97.5,45.7c0,0,1.1,1,6.1,0.5"
                    />
                    <path
                        className={style.st0}
                        d="M111.8,48.6c0,0,0.1,1.1,2.1,0.9"
                    />
                    <path
                        className={style.st0}
                        d="M110.9,49.7c0,0,1.2,2,4.2,1.7"
                    />
                    <path
                        className={style.st0}
                        d="M122.6,56.1c0,0,1.1,1,2-0.2"
                    />
                    <path
                        className={style.st0}
                        d="M121.8,58.3c0,0,2.1,0.9,4-0.4"
                    />
                    <path
                        className={style.st0}
                        d="M130.2,61.7c0,0,3.1,0.8,4-0.4"
                    />
                    <path
                        className={style.st0}
                        d="M130.4,63.8c0,0,4.1,0.7,4-0.4"
                    />
                    <path
                        className={style.st0}
                        d="M75.7,16.8c0,0-3,9.9-0.7,12.9c0,0,5.6,5.9,12-0.1c0,0,3.7-3.6,3.1-8.9C90.2,20.7,81.3,22.7,75.7,16.8"
                    />
                    <path
                        className={style.st0}
                        d="M97.6,16.8c0,0-2.3,7.7,3.8,8.2c0,0,6-0.6,6.4-6C107.9,19,99.8,18.8,97.6,16.8z"
                    />
                    <path
                        className={style.st0}
                        d="M111.3,23c0,0-2.5,5.6,0.7,7.4c0,0,5.3,2.7,5.4-5.9C117.5,24.5,113.5,24.9,111.3,23"
                    />
                    <path
                        className={style.st0}
                        d="M121.6,35.8c0,0-1.5,5.5,1.6,6.3c0,0,4-0.4,3.6-4.6C126.8,37.5,122.6,35.8,121.6,35.8"
                    />
                    <path
                        className={style.st0}
                        d="M133.7,46.4c0,0,1.5,5.2-1.5,5.5c0,0-3,0.3-2.5-5.1"
                    />
                    <path
                        className={style.st0}
                        d="M129.7,46.8c0,0,4.1,0.7,4-0.4"
                    />
                </g>
                <path
                    className={style.st1}
                    style={selection['second_toe'] ? { fill: '#CE292999' } :
                        hover === 'second_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('second_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('second_toe')}
                    d="M93.5,48.5c0,0-1-6,0-11c0,0,2-10,1-14s-1.3-6.6,1.3-8.3c0,0,10.3-3.9,13.5,0.7c0,0,2.2,4.7-1.8,13.7
c0,0-1.8,4.2-1.4,11.6c0,0,0.5,6.3-0.6,10.3c0,0-1,3-5,3C100.5,54.5,94.5,54.5,93.5,48.5z"
                />
                <path
                    className={style.st1}
                    style={selection['third_toe'] ? { fill: '#CE292999' } :
                        hover === 'third_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('third_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('third_toe')}
                    d="M116.5,57.5c0,0,1-7.4,1-12.2c0,0,0.7-9.6,3.3-13.7c0,0,2.7-8.3-4.3-10.7c0,0-4-1.4-6,0.6c0,0-1.9,1.5-2.9,7.7
c0,0-2.1,8.3-1.1,13.3c0,0,1,6-1,11c0,0-2,5,3,7C108.5,60.5,115.5,64.5,116.5,57.5z"/>
                <path
                    className={style.st1}
                    style={selection['fourth_toe'] ? { fill: '#CE292999' } :
                        hover === 'fourth_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('fourth_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('fourth_toe')}
                    d="M126.1,66c0,0,2.4-7.5,1.4-10.5c0,0-0.4-3.1,1.3-6c0,0,3.1-14.8-2.6-15.4c0,0-3.8-1.7-6.7,2.4
c0,0-1.9,4.1-1.9,10.1c0,0,0,8-1,12c0,0-2,6,3,8C119.5,66.5,124.7,69.6,126.1,66z"/>
                <path
                    className={style.st1}
                    style={selection['fifth_toe'] ? { fill: '#CE292999' } :
                        hover === 'fifth_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('fifth_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('fifth_toe')}
                    d="M138.5,71.5c0,0-0.2-30.1-8.1-30c0,0,0.1,2-0.9,5c0,0-3,7-2,10c0,0,0,4-1,10c0,0-3,7,4,8
C130.5,74.5,138.5,76.5,138.5,71.5z"/>
                <path
                    className={style.st1}
                    style={selection['big_toe_joint'] ? { fill: '#CE292999' } :
                        hover === 'big_toe_joint' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('big_toe_joint')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('big_toe_joint')}
                    d="M73.6,54.1c-0.3-0.4-0.6-0.8-0.9-1.1c0,0-7.2-3.5-7.2-7.5S64,54.1,64,54.1s-0.4,2.5,0,4.4
c0.5,2.1-0.8,4.8-1.6,7.9c0,0-1,7,3,12c0,0,1.3,0.8,1.2,3.9c0,0-0.2,9.1,8.8,7.1c0,0,11-3,3-26C78.5,63.5,76.1,57.7,73.6,54.1"/>
                <path
                    className={style.st1}
                    style={selection['big_toe'] ? { fill: '#CE292999' } :
                        hover === 'big_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('big_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('big_toe')}
                    d="M87.1,47.6c0,0,3.4-2.7,2.9-9.9c0,0,0.9-5.6,2.2-8.4c0,0,6.2-12.5-3.3-15.6c0,0-16-8.1-23.2,10.9
c0,0-1.3,2-0.3,12.5c0,0,1.2,4.5,0.1,7.5c0,0-0.1,6,9.9,7C75.5,51.5,85.7,51.6,87.1,47.6z"/>
                <path
                    className={style.st1}
                    style={selection['fifth_toe_joint'] ? { fill: '#CE292999' } :
                        hover === 'fifth_toe_joint' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('fifth_toe_joint')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('fifth_toe_joint')}
                    d="M125.5,89.5c0,0,3,4,7,3s6-0.4,6-5.2s0.3-9.9,0.1-11.4s-0.2-3.5-0.2-3.5s-1.6,4.7-8.8,1.9c0,0-4.1-0.8-5.1,6.2
S125.5,89.5,125.5,89.5z"/>
            </svg>
        </div>
    )
}

export default FullFoot