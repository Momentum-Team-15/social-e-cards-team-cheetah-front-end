import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const CreateCard = ({token}) => {
    const [newCard, setNewCard] = useState([])
    const [title, setTitle] = useState('')
    const [background, setBackground] = useState('')
    const [borderStyle, setBorderStyle] = useState('')
    const [borderColor, setBorderColor] = useState('')
    const [fontFamily, setFontFamily] = useState('')
    const [fontColor, setFontColor] = useState('')
    const [textAlignment, setTextAlignment] = useState('')
    const [outerMsg, setOuterMsg] = useState('Be funny, brave and kind.')
    const [innerMsg, setInnerMsg] = useState('Write from the heart.')
    const [updated, setUpdated] = useState('')
    const [published, setPublished] = useState(false)

    const [error, setError] = useState(null)

    const handleCreate = (e) => {
        e.preventDefault()
        setError(null)
        axios
            .post('https://ecard-web-service.onrender.com/cards/user/',
                {
                title: title,
                border_style: borderStyle,
                border_color: borderColor,
                background_color: background,
                font_family: fontFamily,
                font_color: fontColor,
                text_alignment: textAlignment,
                outer_msg: outerMsg,
                inner_msg: innerMsg,
                },
                {headers: {
                    Authorization: `Token ${token}`
                },
                }
            )
            .then((res) => {
                setNewCard(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                setError(error.message)
            }, [token])
    }

    // const handleEdits = (token) => {}

    return (
        <div className="card-shelf">
            <div className='card-form'>
                <h3>Craft a card.</h3>
                {error && <div className="error">{error}</div>}
                <form id="card-form" onSubmit={handleCreate}>
                    <div className='field'>
                        <label htmlFor='title' className="label">Title</label>
                        <input
                            id='title'
                            onChange={(e) => setTitle(e.target.value)}
                            className='input'
                            type='text'
                            name='title'
                            placeholder='Title'
                        />
                    </div>
                    <div className='color-box'>
                        <label htmlFor='background' className="label">Background Color</label>
                        <input
                            id='background'
                            onChange={(e) => {setBackground(e.target.value)}}
                            className='input'
                            type='color'
                            name='background'
                            placeholder='Background Color'
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='outerMsg' className="label">Greeting</label>
                        <input
                            id='outerMsg'
                            onChange={(e) => setOuterMsg(e.target.value)}
                            className='input'
                            type='text'
                            name='outerMsg'
                            placeholder='Greeting'
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='innerMsg' className="label">Message</label>
                        <input
                            id='innerMsg'
                            onChange={(e) => setInnerMsg(e.target.value)}
                            className='input'
                            type='text'
                            name='innerMsg'
                            placeholder='Message'
                        />
                    </div>
                    <div className='field'>
                    </div>
                    <div className='control'>
                        <input 
                            to="/create" 
                            className='button-1'
                        >Create Card</button>
                    </div>
                </form>
            </div>
        </div>
    )
}