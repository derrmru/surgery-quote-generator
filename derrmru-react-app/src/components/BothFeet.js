import { useState } from 'react'
import style from './BothFeet.module.css'

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
            <h3 style={{ margin: '60px 40px 0 40px', color: color || '' }}>
                Please Select The Areas Of The Foot That Require Surgery
            </h3>
            <hr style={{width: '50%', margin: '10px auto', height: '1px', border: 'none', backgroundColor: color}} />
            <div className={style.labels}>
                <p>Left Foot</p><p>Right Foot</p>
            </div>
            <svg 
                className={style.footSVG}
                viewBox="0 0 800 500" 
                style={{enableBackground: 'new 0 0 800 500'}}
                >
                <g>
                    <path 
                        className={style.st0} 
                        d="M587.7,456.2c0,0-5-24.4,0.8-44.3c0,0,16.1-20.9,13.9-42.8c0,0-2.2-21.9,3.9-39c0,0,7.8-25.6,6.8-36.6
		c0,0,2.7-25.1,7.3-31.1c0,0,5.5-22.6,2.6-52.7c0,0-3.6-63.1-10.1-76.3c0,0-3.4-7.9-11.4-9.9"/>
                    <path 
                        className={style.st0} 
                        d="M589.4,210.3c0,0-1.1-10.9,2.4-27.9c0,0,3.8-14.2,3-22.4c0,0,1.5-11.2,3.5-16.9c0,0,7-33.8-6.4-38
		c0,0-5.7-5-13.1-1.5c0,0-2.8,1-3.7,3.5"/>
                    <path 
                        className={style.st0} 
                        d="M563.8,188c0,0-1.6-16.4,3-22.4c0,0,2.7-25.1,1.9-33.3c0,0,1.2-13.9,5.5-22.6c0,0,10.4-25.9-3.5-35.5
		c0,0-8.8-10.2-21.1-3.4"/>
                    <path 
                        className={style.st0} 
                        d="M536.5,174.1c0,0-1.4-13.7,0.4-22.1c0,0,4.3-8.7,2.4-27.9c0,0-1.9-19.1,4.5-33.6c0,0,12.4-31.6-1.2-38.5
		c0,0-16.2-6.7-33.1,6c0,0-2.4,2.1-3.5,4"/>
                    <path 
                        className={style.st0} 
                        d="M430.4,160.8c0.2-3.9,0.3-6.6,0.3-6.6s1.2-13.9,3.2-19.7c2.6-7.2-0.9-35.8-0.9-35.8S428.7,55,472.1,48
		c0,0,38.6-3.8,36.7,29.5c0,0-12.4,31.6-11.4,42.5c0,0,0.8,8.2-6.1,17.2c0,0-6.6,11.7,1.4,13.7c0,0,8,2,12-9.5
		c0,0-1.9-19.1,2.2-30.6c0,0,3.2-19.7,2.4-27.9c0,0-0.3-2.7-0.5-5.5"/>
                    <path 
                        className={style.st0} 
                        d="M430.4,160.8c-0.3,6.6-1,16.5-2.2,21.2c-5.5,22.6,6.4,38,6.4,38c6.2,10.4,11.8,92.7,11.8,92.7
		c-1.2,13.9,0.4,30.3,0.4,30.3c12.3,45.7-3.1,99.7-3.1,99.7"/>
                    <path 
                        className={style.st0} 
                        d="M457.4,135c0,0,8.5,7.4,26.2,2.9" />
                    <path 
                        className={style.st0} 
                        d="M464.8,131.5c0,0,8.3,4.7,13.1,1.5" />
                    <path
                        className={style.st0} 
                        d="M521.6,128.7c0,0,2.8,2.5,8,2" />
                    <path 
                        className={style.st0} 
                        d="M517,134.6c0,0,2.8,2.5,15.7,1.2" />
                    <path 
                        className={style.st0} 
                        d="M554.1,142c0,0,0.3,2.7,5.4,2.2" />
                    <path 
                        className={style.st0} 
                        d="M551.8,145c0,0,3.1,5.2,10.8,4.5" />
                    <path
                        className={style.st0} 
                        d="M581.9,161.4c0,0,2.8,2.5,5.1-0.5" />
                    <path 
                        className={style.st0} 
                        d="M579.9,167.1c0,0,5.4,2.2,10.3-1" />
                    <path 
                        className={style.st0} 
                        d="M601.6,176c0,0,8,2,10.3-1" />
                    <path 
                        className={style.st0} 
                        d="M602.1,181.4c0,0,10.6,1.7,10.3-1" />
                    <path 
                        className={style.st0} 
                        d="M460.8,59.9c0,0-7.8,25.6-1.9,33.3c0,0,14.5,15.1,31.1-0.3c0,0,9.5-9.2,8.1-22.9
		C498.2,70,475.3,75.1,460.8,59.9"/>
                    <path 
                        className={style.st0} 
                        d="M517.4,60c0,0-5.8,19.9,9.9,21.1c0,0,15.4-1.5,16.6-15.5C543.9,65.7,523.1,65,517.4,60z" />
                    <path 
                        className={style.st0} 
                        d="M552.7,75.9c0,0-6.4,14.4,1.9,19.1c0,0,13.7,6.9,14.1-15.2C568.7,79.8,558.4,80.8,552.7,75.9" />
                    <path 
                        className={style.st0} 
                        d="M579.4,109.1c0,0-3.8,14.2,4.2,16.2c0,0,10.3-1,9.2-12C592.8,113.3,581.9,108.9,579.4,109.1" />
                    <path 
                        className={style.st0} 
                        d="M610.6,136.4c0,0,3.9,13.4-3.8,14.2c0,0-7.7,0.8-6.5-13.2" />
                    <path 
                        className={style.st0} 
                        d="M600.3,137.4c0,0,10.6,1.7,10.3-1" />
                </g>
                <path 
                    className={style.st1}
                    style={selection['right_second_toe'] ? { fill: '#CE292999' } :
                        hover === 'right_second_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('right_second_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('right_second_toe')}
                    d="M506.8,141.8c0,0-2.6-15.5,0-28.4c0,0,5.2-25.8,2.6-36.2c-2.6-10.3-3.4-17.1,3.4-21.4c0,0,26.5-10.1,34.8,1.8
	c0,0,5.6,12.2-4.7,35.3c0,0-4.7,10.9-3.6,29.9c0,0,1.2,16.4-1.4,26.7c0,0-2.6,7.8-13,7.8C524.8,157.3,509.3,157.3,506.8,141.8z"/>
                <path 
                    className={style.st1}
                    style={selection['right_third_toe'] ? { fill: '#CE292999' } :
                        hover === 'right_third_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('right_third_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('right_third_toe')}
                    d="M566.2,165.1c0,0,2.5-19.2,2.5-31.6c0,0,1.7-24.8,8.6-35.4c0,0,6.9-21.4-11.2-27.6c0,0-10.3-3.6-15.5,1.5
	c0,0-4.8,3.8-7.6,20c0,0-5.4,21.4-2.8,34.3c0,0,2.6,15.5-2.6,28.4c0,0-5.2,12.9,7.7,18.1C545.5,172.8,563.6,183.1,566.2,165.1z"/>
                <path 
                    className={style.st1}
                    style={selection['right_fourth_toe'] ? { fill: '#CE292999' } :
                        hover === 'right_fourth_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('right_fourth_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('right_fourth_toe')}
                    d="M590.9,187.1c0,0,6.2-19.5,3.6-27.2c0,0-1-7.9,3.4-15.6c0,0,7.9-38.3-6.8-39.7c0,0-9.8-4.5-17.4,6.1
	c0,0-5,10.5-5,26c0,0,0,20.7-2.6,31c0,0-5.2,15.5,7.7,20.7C573.9,188.3,587.3,196.3,590.9,187.1z"/>
                <path 
                    className={style.st1}
                    style={selection['right_fifth_toe'] ? { fill: '#CE292999' } :
                        hover === 'right_fifth_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('right_fifth_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('right_fifth_toe')}
                    d="M623,201.2c0,0-0.4-77.6-20.9-77.6c0,0,0.2,5.2-2.4,13c0,0-7.7,18.1-5.2,25.8c0,0,0,10.3-2.6,25.8
	c0,0-7.7,18.1,10.3,20.7C602.3,209,623,214.1,623,201.2z"/>
                <path 
                    className={style.st1}
                    style={selection['right_big_toe_joint'] ? { fill: '#CE292999' } :
                        hover === 'right_big_toe_joint' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('right_big_toe_joint')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('right_big_toe_joint')}
                    d="M455.3,156.4c-0.7-1-1.5-2-2.2-2.9c0,0-18.7-9.1-18.7-19.4s-3.8,22.3-3.8,22.3s-1.1,6.5,0.1,11.5
	c1.2,5.3-2,12.4-4,20.5c0,0-2.6,18.1,7.7,31c0,0,3.4,2.1,3,10.1c0,0-0.4,23.5,22.9,18.3c0,0,28.4-7.7,7.7-67.2
	C468,180.6,461.7,165.5,455.3,156.4"/>
                <path 
                    className={style.st1}
                    style={selection['right_big_toe'] ? { fill: '#CE292999' } :
                        hover === 'right_big_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('right_big_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('right_big_toe')}
                    d="M490.2,139.4c0,0,8.8-6.9,7.5-25.5c0,0,2.4-14.5,5.7-21.7c0,0,15.9-32.3-8.5-40.4c0,0-41.3-20.9-60,28.1
	c0,0-3.4,5.3-0.7,32.3c0,0,3,11.6,0.3,19.3c0,0-0.1,15.5,25.7,18C460.3,149.6,486.6,149.9,490.2,139.4z"/>
                <path 
                    className={style.st1}
                    style={selection['right_fifth_toe_joint'] ? { fill: '#CE292999' } :
                        hover === 'right_fifth_toe_joint' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('right_fifth_toe_joint')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('right_fifth_toe_joint')}
                    d="M589.4,247.7c0,0,7.7,10.3,18.1,7.7c10.3-2.6,15.5-1.1,15.5-13.5s0.7-25.7,0.3-29.4c-0.3-3.7-0.6-8.9-0.6-8.9
	s-4.2,12.1-22.6,4.8c0,0-10.7-2.1-13.2,15.9C584.2,242.5,589.4,247.7,589.4,247.7z"/>
                <g>
                    <path 
                        className={style.st0}
                        d="M211.6,452.9c0,0,5-24.4-0.8-44.3c0,0-16.1-20.9-13.9-42.8c0,0,2.2-21.9-3.9-39c0,0-7.8-25.6-6.8-36.6
		c0,0-2.7-25.1-7.3-31.1c0,0-5.5-22.6-2.6-52.7c0,0,3.6-63.1,10.1-76.3c0,0,3.4-7.9,11.4-9.9"/>
                    <path 
                        className={style.st0}
                        d="M209.9,206.9c0,0,1.1-10.9-2.4-27.9c0,0-3.8-14.2-3-22.4c0,0-1.5-11.2-3.5-16.9c0,0-7-33.8,6.4-38
		c0,0,5.7-5,13.1-1.5c0,0,2.8,1,3.7,3.5"/>
                    <path 
                        className={style.st0}
                        d="M235.5,184.6c0,0,1.6-16.4-3-22.4c0,0-2.7-25.1-1.9-33.3c0,0-1.2-13.9-5.5-22.6c0,0-10.4-25.9,3.5-35.5
		c0,0,8.8-10.2,21.1-3.4"/>
                    <path 
                        className={style.st0}
                        d="M262.8,170.8c0,0,1.4-13.7-0.4-22.1c0,0-4.3-8.7-2.4-27.9c0,0,1.9-19.1-4.5-33.6c0,0-12.4-31.6,1.2-38.5
		c0,0,16.2-6.7,33.1,6c0,0,2.4,2.1,3.5,4"/>
                    <path 
                        className={style.st0} 
                        d="M368.9,157.5c-0.2-3.9-0.3-6.6-0.3-6.6s-1.2-13.9-3.2-19.7c-2.6-7.2,0.9-35.8,0.9-35.8s4.3-43.8-39.1-50.8
		c0,0-38.6-3.8-36.7,29.5c0,0,12.4,31.6,11.4,42.5c0,0-0.8,8.2,6.1,17.2c0,0,6.6,11.7-1.4,13.7c0,0-8,2-12-9.5
		c0,0,1.9-19.1-2.2-30.6c0,0-3.2-19.7-2.4-27.9c0,0,0.3-2.7,0.5-5.5"/>
                    <path 
                        className={style.st0} 
                        d="M368.9,157.5c0.3,6.6,1,16.5,2.2,21.2c5.5,22.6-6.4,38-6.4,38c-6.2,10.4-11.8,92.7-11.8,92.7
		c1.2,13.9-0.4,30.3-0.4,30.3c-12.3,45.7,3.1,99.7,3.1,99.7"/>
                    <path 
                        className={style.st0} 
                        d="M342,131.6c0,0-8.5,7.4-26.2,2.9" />
                    <path 
                        className={style.st0} 
                        d="M334.5,128.1c0,0-8.3,4.7-13.1,1.5" />
                    <path 
                        className={style.st0} 
                        d="M277.7,125.3c0,0-2.8,2.5-8,2" />
                    <path 
                        className={style.st0} 
                        d="M282.3,131.3c0,0-2.8,2.5-15.7,1.2" />
                    <path 
                        className={style.st0} 
                        d="M245.3,138.6c0,0-0.3,2.7-5.4,2.2" />
                    <path 
                        className={style.st0} 
                        d="M247.6,141.6c0,0-3.1,5.2-10.8,4.5" />
                    <path 
                        className={style.st0} 
                        d="M217.4,158c0,0-2.8,2.5-5.1-0.5" />
                    <path 
                        className={style.st0} 
                        d="M219.4,163.7c0,0-5.4,2.2-10.3-1" />
                    <path 
                        className={style.st0} 
                        d="M197.8,172.6c0,0-8,2-10.3-1" />
                    <path 
                        className={style.st0} 
                        d="M197.2,178.1c0,0-10.6,1.7-10.3-1" />
                    <path 
                        className={style.st0} 
                        d="M338.5,56.6c0,0,7.8,25.6,1.9,33.3c0,0-14.5,15.1-31.1-0.3c0,0-9.5-9.2-8.1-22.9
		C301.1,66.7,324,71.7,338.5,56.6"/>
                    <path 
                        className={style.st0} 
                        d="M281.9,56.7c0,0,5.8,19.9-9.9,21.1c0,0-15.4-1.5-16.6-15.5C255.4,62.3,276.2,61.6,281.9,56.7z" />
                    <path 
                        className={style.st0} 
                        d="M246.6,72.5c0,0,6.4,14.4-1.9,19.1c0,0-13.7,6.9-14.1-15.2C230.6,76.4,240.9,77.5,246.6,72.5" />
                    <path 
                        className={style.st0} 
                        d="M220,105.8c0,0,3.8,14.2-4.2,16.2c0,0-10.3-1-9.2-12C206.6,110,217.4,105.5,220,105.8" />
                    <path 
                        className={style.st0} 
                        d="M188.7,133c0,0-3.9,13.4,3.8,14.2c0,0,7.7,0.8,6.5-13.2" />
                    <path 
                        className={style.st0} 
                        d="M199,134.1c0,0-10.6,1.7-10.3-1" />
                </g>
                <path 
                    className={style.st1} 
                    style={selection['left_second_toe'] ? { fill: '#CE292999' } :
                        hover === 'left_second_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('left_second_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('left_second_toe')} 
                    d="M292.6,138.4c0,0,2.6-15.5,0-28.4c0,0-5.2-25.8-2.6-36.2s3.4-17.1-3.4-21.4c0,0-26.5-10.1-34.8,1.8
	c0,0-5.6,12.2,4.7,35.3c0,0,4.7,10.9,3.6,29.9c0,0-1.2,16.4,1.4,26.7c0,0,2.6,7.8,13,7.8C274.5,153.9,290,153.9,292.6,138.4z"/>
                <path 
                    className={style.st1} 
                    style={selection['left_third_toe'] ? { fill: '#CE292999' } :
                        hover === 'left_third_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('left_third_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('left_third_toe')} 
                    d="M233.2,161.7c0,0-2.5-19.2-2.5-31.6c0,0-1.7-24.8-8.6-35.4c0,0-6.9-21.4,11.2-27.6c0,0,10.3-3.6,15.5,1.5
	c0,0,4.8,3.8,7.6,20c0,0,5.4,21.4,2.8,34.3c0,0-2.6,15.5,2.6,28.4c0,0,5.2,12.9-7.7,18.1C253.8,169.4,235.8,179.8,233.2,161.7z"/>
                <path 
                    className={style.st1}
                    style={selection['left_fourth_toe'] ? { fill: '#CE292999' } :
                        hover === 'left_fourth_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('left_fourth_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('left_fourth_toe')} 
                    d="M208.4,183.8c0,0-6.2-19.5-3.6-27.2c0,0,1-7.9-3.4-15.6c0,0-7.9-38.3,6.8-39.7c0,0,9.8-4.5,17.4,6.1
	c0,0,5,10.5,5,26c0,0,0,20.7,2.6,31c0,0,5.2,15.5-7.7,20.7C225.4,184.9,212,192.9,208.4,183.8z"/>
                <path 
                    className={style.st1} 
                    style={selection['left_fifth_toe'] ? { fill: '#CE292999' } :
                        hover === 'left_fifth_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('left_fifth_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('left_fifth_toe')}
                    d="M176.4,197.8c0,0,0.4-77.6,20.9-77.6c0,0-0.2,5.2,2.4,13c0,0,7.7,18.1,5.2,25.8c0,0,0,10.3,2.6,25.8
	c0,0,7.7,18.1-10.3,20.7C197,205.6,176.4,210.8,176.4,197.8z"/>
                <path 
                    className={style.st1} 
                    style={selection['left_big_toe_joint'] ? { fill: '#CE292999' } :
                        hover === 'left_big_toe_joint' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('left_big_toe_joint')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('left_big_toe_joint')}
                    d="M344,153c0.7-1,1.5-2,2.2-2.9c0,0,18.7-9.1,18.7-19.4s3.8,22.3,3.8,22.3s1.1,6.5-0.1,11.5
	c-1.2,5.3,2,12.4,4,20.5c0,0,2.6,18.1-7.7,31c0,0-3.4,2.1-3,10.1c0,0,0.4,23.5-22.9,18.3c0,0-28.4-7.7-7.7-67.2
	C331.3,177.2,337.6,162.1,344,153"/>
                <path 
                    className={style.st1} 
                    style={selection['left_big_toe'] ? { fill: '#CE292999' } :
                        hover === 'left_big_toe' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('left_big_toe')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('left_big_toe')}
                    d="M309.1,136c0,0-8.8-6.9-7.5-25.5c0,0-2.4-14.5-5.7-21.7c0,0-15.9-32.3,8.5-40.4c0,0,41.3-20.9,60,28.1
	c0,0,3.4,5.3,0.7,32.3c0,0-3,11.6-0.3,19.3c0,0,0.1,15.5-25.7,18C339.1,146.2,312.7,146.5,309.1,136z"/>
                <path 
                    className={style.st1} 
                    style={selection['left_fifth_toe_joint'] ? { fill: '#CE292999' } :
                        hover === 'left_fifth_toe_joint' ? { fill: '#CE292970' } :
                            { fill: '#ffffff00' }}
                    onMouseOver={() => window.innerWidth > 1025 && setHover('left_fifth_toe_joint')}
                    onMouseLeave={() => window.innerWidth > 1025 && setHover('')}
                    onClick={() => select('left_fifth_toe_joint')}
                    d="M209.9,244.3c0,0-7.7,10.3-18.1,7.7c-10.3-2.6-15.5-1.1-15.5-13.5s-0.7-25.7-0.3-29.4s0.6-8.9,0.6-8.9
	s4.2,12.1,22.6,4.8c0,0,10.7-2.1,13.2,15.9C215.1,239.2,209.9,244.3,209.9,244.3z"/>
            </svg>
        </div>
    )
}

export default FullFoot