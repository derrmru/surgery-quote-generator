import { useState, useEffect } from 'react'
import style from './ToeSelector.module.css'

const ToeSelector = ({ fields, updateField, color }) => {
    const [hoverItem, setHoverItem] = useState('')

    //reduce selected toes and update field object
    const updateToes = (selection) => {
        const temp = {...fields}
        if (temp['toe_object']) {
            temp['toe_object'][selection] = !temp['toe_object'][selection]
        } else {
            temp['toe_object'] = {selection: true}
        }
        updateField('toe_object', temp['toe_object'])
    }

    useEffect(() => {
        if (!fields['toe_object']) updateField('toe_object', {})
    })

    return (
        <div style={{width: '100%'}}>
            <svg
                className={style.toeSVG}
                height="100%"
                viewBox="0 0 250 250"
            ><clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath18"><path
                        d="M 0,200 H 200 V 0 H 0 Z"
                        id="path16" /></clipPath>
                <g
                    id="g10"
                    transform="matrix(1.3333333,0,0,-1.3333333,0,266.66667)"><g
                        id="g12"><g
                            id="g14"
                            clipPath="url(#clipPath18)"><g
                                id="g20"
                                transform="translate(124.8584,29.7656)"><path
                                    d="m 0,0 c 0,0 -1.937,9.431 0.314,17.137 0,0 6.234,8.1 5.396,16.57 0,0 -0.837,8.47 1.519,15.117 0,0 3.04,9.922 2.621,14.157 0,0 1.047,9.726 2.829,12.04 0,0 2.147,8.765 0.996,20.411 0,0 -1.413,24.449 -3.927,29.547 0,0 -1.31,3.077 -4.399,3.841"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path22" /></g><g
                                        id="g24"
                                        transform="translate(125.4912,124.9775)"><path
                                    d="m 0,0 c 0,0 -0.419,4.235 0.943,10.784 0,0 1.467,5.49 1.153,8.667 0,0 0.576,4.333 1.362,6.549 0,0 2.725,13.098 -2.461,14.724 0,0 -2.199,1.921 -5.08,0.567 0,0 -1.098,-0.386 -1.439,-1.351"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path26" /></g><g
                                        id="g28"
                                        transform="translate(115.5928,133.6201)"><path
                                    d="m 0,0 c 0,0 -0.628,6.353 1.152,8.667 0,0 1.048,9.725 0.735,12.901 0,0 0.471,5.392 2.147,8.765 0,0 4.033,10.021 -1.361,13.764 0,0 -3.404,3.94 -8.17,1.33"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path30" /></g><g
                                        id="g32"
                                        transform="translate(105.0127,138.9883)"><path
                                    d="m 0,0 c 0,0 -0.523,5.294 0.158,8.568 0,0 1.676,3.373 0.944,10.785 0,0 -0.734,7.411 1.728,13 0,0 4.819,12.236 -0.471,14.92 0,0 -6.285,2.586 -12.832,-2.338 0,0 -0.924,-0.811 -1.352,-1.562"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path34" /></g><g
                                        id="g36"
                                        transform="translate(69.0781,34.9404)"><path
                                    d="m 0,0 c 0,0 5.972,20.903 1.207,38.606 0,0 -0.629,6.353 -0.157,11.746 0,0 -2.146,31.859 -4.555,35.898 0,0 -4.609,5.958 -2.461,14.724 0.711,2.901 0.944,10.784 0.944,10.784 0,0 0.471,5.392 1.257,7.608 0.994,2.802 -0.366,13.862 -0.366,13.862 0,0 -1.676,16.939 15.137,19.671 0,0 14.928,1.476 14.194,-11.425 0,0 -4.82,-12.237 -4.401,-16.472 0,0 0.314,-3.176 -2.357,-6.648 0,0 -2.567,-4.53 0.523,-5.293 0,0 3.091,-0.764 4.662,3.668 0,0 -0.733,7.411 0.839,11.843 0,0 1.257,7.608 0.943,10.784 0,0 -0.105,1.059 -0.209,2.118"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path38" /></g><g
                                        id="g40"
                                        transform="translate(74.374,154.1328)"><path
                                    d="M 0,0 C 0,0 3.299,-2.881 10.161,-1.133"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path42" /></g><g
                                        id="g44"
                                        transform="translate(77.2544,155.4868)"><path
                                    d="M 0,0 C 0,0 3.195,-1.822 5.081,-0.566"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path46" /></g><g
                                        id="g48"
                                        transform="translate(99.2524,156.5933)"><path
                                    d="M 0,0 C 0,0 1.1,-0.96 3.09,-0.764"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path50" /></g><g
                                        id="g52"
                                        transform="translate(97.4717,154.2788)"><path
                                    d="M 0,0 C 0,0 1.1,-0.96 6.075,-0.468"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path54" /></g><g
                                        id="g56"
                                        transform="translate(111.8223,151.4219)"><path
                                    d="M 0,0 C 0,0 0.104,-1.059 2.095,-0.862"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path58" /></g><g
                                        id="g60"
                                        transform="translate(110.9316,150.2646)"><path
                                    d="M 0,0 C 0,0 1.205,-2.019 4.19,-1.724"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path62" /></g><g
                                        id="g64"
                                        transform="translate(122.6113,143.936)"><path
                                    d="M 0,0 C 0,0 1.1,-0.96 1.99,0.197"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path66" /></g><g
                                        id="g68"
                                        transform="translate(121.8262,141.7202)"><path
                                    d="M 0,0 C 0,0 2.095,-0.862 3.98,0.394"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path70" /></g><g
                                        id="g72"
                                        transform="translate(130.2061,138.2725)"><path
                                    d="M 0,0 C 0,0 3.09,-0.763 3.98,0.394"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path74" /></g><g
                                        id="g76"
                                        transform="translate(130.415,136.1553)"><path
                                    d="M 0,0 C 0,0 4.085,-0.665 3.98,0.394"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path78" /></g><g
                                        id="g80"
                                        transform="translate(75.7261,183.2041)"><path
                                    d="m 0,0 c 0,0 -3.039,-9.922 -0.734,-12.901 0,0 5.604,-5.861 12.047,0.122 0,0 3.666,3.57 3.143,8.863 0,0 -8.852,-1.944 -14.456,3.916"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path82" /></g><g
                                        id="g84"
                                        transform="translate(97.6304,183.1602)"><path
                                    d="m 0,0 c 0,0 -2.253,-7.707 3.823,-8.175 0,0 5.97,0.591 6.442,5.983 0,0 -8.065,0.271 -10.265,2.192 z"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path86" /></g><g
                                        id="g88"
                                        transform="translate(111.2998,177.0283)"><path
                                    d="m 0,0 c 0,0 -2.462,-5.589 0.733,-7.411 0,0 5.289,-2.684 5.448,5.884 C 6.181,-1.527 2.2,-1.921 0,0"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path90" /></g><g
                                        id="g92"
                                        transform="translate(121.6172,164.1504)"><path
                                    d="m 0,0 c 0,0 -1.467,-5.49 1.623,-6.254 0,0 3.981,0.394 3.563,4.629 0,0 -4.191,1.724 -5.186,1.625"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path94" /></g><g
                                        id="g96"
                                        transform="translate(133.7158,153.5869)"><path
                                    d="m 0,0 c 0,0 1.519,-5.195 -1.467,-5.491 0,0 -2.985,-0.295 -2.513,5.097"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path98" /></g><g
                                        id="g100"
                                        transform="translate(129.7354,153.1934)"><path
                                    d="M 0,0 C 0,0 4.085,-0.665 3.98,0.394"
                                    style={{
                                        fill: 'none',
                                        stroke: color,
                                        strokeWidth: '1',
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path102" /></g><g
                                        id="g104"
                                        transform="translate(93.5,151.5)"><path
                                    d="m 0,0 c 0,0 -1,6 0,11 0,0 2,10 1,14 -1,4 -1.334,6.607 1.333,8.304 0,0 10.257,3.908 13.462,-0.698 0,0 2.173,-4.707 -1.811,-13.657 0,0 -1.836,-4.229 -1.41,-11.589 0,0 0.467,-6.337 -0.553,-10.349 C 12.021,-2.989 11,-6 7,-6 7,-6 1,-6 0,0 Z"
                                    className={style.toe}
                                    onMouseOver={() => window.innerWidth > 1025 && setHoverItem('second')}
                                    onMouseLeave={() => setHoverItem('')}
                                    onClick={(e) => updateToes('second', e)}
                                    fill={
                                        hoverItem === 'second' ? 
                                                'rgba(255, 0, 0, 0.5)' : 
                                                    fields['toe_object'] && fields['toe_object']['second'] ?
                                                        'rgba(255, 0, 0, 0.6)' :
                                                            '#ffffff00'
                                        }
                                    style={{
                                        stroke: 'none',
                                        strokeWidth: 1,
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path106" /></g><g
                                        id="g108"
                                        transform="translate(116.5,142.5)"><path
                                    d="m 0,0 c 0,0 0.961,7.432 0.98,12.216 0,0 0.671,9.598 3.346,13.691 0,0 2.674,8.275 -4.326,10.684 C 0,36.591 -4,38 -6,36 -6,36 -7.853,34.547 -8.927,28.274 -8.927,28.274 -11,20 -10,15 c 0,0 1,-6 -1,-11 0,0 -2,-5 3,-7 0,0 7,-4 8,3 z"
                                    className={style.toe}
                                    onMouseOver={() => window.innerWidth > 1025 && setHoverItem('third')}
                                    onMouseLeave={() => setHoverItem('')}
                                    onClick={() => updateToes('third')}
                                    fill={
                                        hoverItem === 'third' ? 
                                                'rgba(255, 0, 0, 0.5)' : 
                                                    fields.toe_object && fields.toe_object['third'] ?
                                                        'rgba(255, 0, 0, 0.6)' :
                                                            '#ffffff00'
                                        }
                                    style={{
                                        stroke: 'none',
                                        strokeWidth: 1,
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path110" /></g><g
                                        id="g112"
                                        transform="translate(126.0918,133.9526)"><path
                                    d="m 0,0 c 0,0 2.408,7.547 1.408,10.547 0,0 -0.392,3.072 1.304,6.036 0,0 3.06,14.815 -2.621,15.39 0,0 -3.784,1.725 -6.734,-2.35 0,0 -1.949,-4.076 -1.949,-10.076 0,0 0,-8 -1,-12 0,0 -2,-6 3,-8 0,0 5.184,-3.094 6.592,0.453 z"
                                    className={style.toe}
                                    onMouseOver={() => window.innerWidth > 1025 && setHoverItem('fourth')}
                                    onMouseLeave={() => setHoverItem('')}
                                    onClick={() => updateToes('fourth')}
                                    fill={
                                        hoverItem === 'fourth' ? 
                                                'rgba(255, 0, 0, 0.5)' : 
                                                    fields.toe_object && fields.toe_object['fourth'] ?
                                                        'rgba(255, 0, 0, 0.6)' :
                                                            '#ffffff00'
                                        }
                                    style={{
                                        stroke: 'none',
                                        strokeWidth: 1,
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path114" /></g><g
                                        id="g116"
                                        transform="translate(138.5,128.5)"><path
                                    d="M 0,0 C 0,0 -0.17,30.052 -8.085,30.026 -8.085,30.026 -8,28 -9,25 c 0,0 -3,-7 -2,-10 0,0 0,-4 -1,-10 0,0 -3,-7 4,-8 0,0 8,-2 8,3 z"
                                    className={style.toe}
                                    onMouseOver={() => window.innerWidth > 1025 && setHoverItem('fifth')}
                                    onMouseLeave={() => setHoverItem('')}
                                    onClick={() => updateToes('fifth')}
                                    fill={
                                        hoverItem === 'fifth' ? 
                                                'rgba(255, 0, 0, 0.5)' : 
                                                    fields.toe_object && fields.toe_object['fifth'] ?
                                                        'rgba(255, 0, 0, 0.6)' :
                                                            '#ffffff00'
                                        }
                                    style={{
                                        stroke: 'none',
                                        strokeWidth: 1,
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    id="path118" /></g></g></g></g></svg>

        </div>
    )
}

export default ToeSelector