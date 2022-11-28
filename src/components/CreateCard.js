import './App.css'
import { useState } from 'react'
import axios from 'axios'


export const CreateCard = ({ }) => {
    // TODO: title,bs,ff,ta,om,im currently required header request but should they all be there?
    const [title, setTitle] = useState('title', '')
    const [borderStyle, setBorderStyle] = useState('borderStyle', '')
    const [borderColor, setBorderColor] = useState('borderColor', '')
    const [fontFamily, setFontFamily] = useState('fontFamily', '')
    const [fontColor, setFontColor] = useState('fontColor', '')
    const [textAlignment, setTextAlignment] = useState('textAlignment', '')
    const [outerMsg, setOuterMsg] = useState('outerMsg', '')
    const [innerMsg, setInnerMsg] = useState('innerMsg', '')
    const [updated, setUpdated] = useState('updated', '')
    const [published, setPublished] = useState('published', false)

    const [error, setError] = useState(null)

    const handleSaveCard = () => {}
    const handleToggleSide = () => {}

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        axios
            .post('https://ecard-web-service.onrender.com//',
                {
                    title: title,
                    border_style: borderStyle,
                    border_color: borderColor,
                    font_family: fontFamily,
                    font_color: fontColor,
                    text_alignment: textAlignment,
                    outer_msg: outerMsg,
                    inner_msg: innerMsg,
                })
            .then((res) => {
                console.log(res.data)
                let cardId = res.data.id
                cardDetails []
                    // id: id,
                    // title: title,
                    // border_style: borderStyle,
                    // border_color: borderColor,
                    // font_family: fontFamily,
                    // font_color: fontColor,
                    // text_alignment: textAlignment,
                    // outer_msg: outerMsg,
                    // inner_msg: innerMsg,
                    // updated_at: updated,
                    // published: published,
            })
            .catch((error) => {
                setError(error.message)
            })
    }
// TODO: Finish card form, figure out which method to use for dropdown options/and populating them
    return (
        <div>
            <div className="card-frame"></div>
            <div className="card-content">This is where your card will be. Someday.</div>
            <div className='card-form'>
                <h3>Craft a card.</h3>
                {error && <div className="error">{error}</div>}
                <form id="card-form" onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor='title' className="label">Title</label>
                        <input
                            id='title'
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                            type='text'
                            name='title'
                            placeholder='Title' />
                    </div>
                    <div className='field'>
                        <label htmlFor='outerMsg' className="label">Greeting</label>
                        <input
                            id='outerMsg'
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                            type='text'
                            name='outerMsg'
                            placeholder='Greeting' />
                    </div>
                    <div className='field'>
                        <label htmlFor='innerMsg' className="label">Message</label>
                        <input
                            id='innerMsg'
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                            type='text'
                            name='innerMsg'
                            placeholder='Message' />
                    </div>
                    <div className='field'>
                    </div>
                    <div className='control'>
                        <button
                            className='button'
                        >Save Card</button>
                    </div>
                </form>
            </div>
        </div>
    )

}