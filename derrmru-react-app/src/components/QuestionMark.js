import style from './QuestionMark.module.css'

const QuestionMark = ({ color }) => {
    return (
        <>
            <a
                href='https://www.londonfootandanklesurgery.co.uk/surgeries/'
                target="_blank"
                rel="noreferrer"
                className={style.questionMark} style={{ color: color }}
            >
                &#63;
            </a>
        </>
    )
}

export default QuestionMark