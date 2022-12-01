import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const CreateCard = ({token}) => {
    const [newCard, setNewCard] = useState([])
    const [isFront, setIsFront] = useState(true)
    const [title, setTitle] = useState('Earn your title.')
    const [background, setBackground] = useState('white')
    const [borderStyle, setBorderStyle] = useState('solid')
    const [borderWidth, setBorderWidth] = useState('5px')
    const [borderColor, setBorderColor] = useState('grey')
    const [fontFamily, setFontFamily] = useState('serif')
    const [fontColor, setFontColor] = useState('darkblue')
    const [textAlignment, setTextAlignment] = useState('center')
    const [outerMsg, setOuterMsg] = useState('Be funny, brave and kind.')
    const [innerMsg, setInnerMsg] = useState('Write from the heart.')
    const [updated, setUpdated] = useState('')
    const [isPublished, setIsPublished] = useState(false)

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
        <>
        <h3>Craft a card.</h3>
        <div className="card-shelf">
            <div className='create-box'>
                {error && <div className="error">{error}</div>}
                <form id="card-form" onSubmit={handleCreate}>
            {/* onChange with a updateView? to show styling changes along with updates? */}
                    <fieldset><legend>Name that Card</legend>
                    <div className='field'>
                        <label htmlFor='title' className="label"></label>
                        <input
                            id='title'
                            onChange={(e) => setTitle(e.target.value)}
                            className='input'
                            type='text'
                            name='title'
                            placeholder='Card Name'
                        />
                    </div>
                    </fieldset>
                    <fieldset><legend>Style that card</legend>
                    <div className='color-field'>
                        <label htmlFor='background' className="label">Card Color</label>
                        <input
                            id='background'
                            onChange={(e) => {setBackground(e.target.value)}}
                            className='input'
                            type='color'
                            name='background'
                            placeholder=''/>
                    </div>
                    <div className='field-border'>
                        <label htmlFor='borderWidth' className="label">Border Width</label>
                        <input
                            id='borderWidth'
                            onChange={(e) => `${setBorderWidth} px`(e.target.value)}
                            className='slider'
                            type='number'
                            name='borderWidth'
                            placeholder='Title'
                            min="1"
                            max="10"
                        />
                    </div>
                    <div className='field-border'>
                        <label htmlFor='borderStyle' className="label">Border Style</label>
                        <input
                            id='borderStyle'
                            onChange={(e) => setBorderStyle(e.target.value)}
                            className='input'
                            type='radio'
                            name='title'
                            placeholder='Title'
                        />
                    </div>
                    <div className='color-field'>
                        <label htmlFor='borderColor' className="label">Border Color</label>
                        <input
                            id='borderColor'
                            onChange={(e) => {setBorderColor(e.target.value)}}
                            className='input'
                            type='color'
                            name='borderColor'
                            placeholder=''/>
                    </div>
                    </fieldset>
                    <fieldset><legend>Verbal Excursions</legend>
                    <div className='field'>
                        <label htmlFor='outerMsg' className="label">Initial Greetingse</label>
                        <input
                            id='outerMsg'
                            onChange={(e) => setOuterMsg(e.target.value)}
                            className='input'
                            type='text'
                            maxLength={200}
                            name='outerMsg'
                            placeholder='be nice here'
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='innerMsg' className="label">Flip-Side Message</label>
                        <input
                            id='innerMsg'
                            onChange={(e) => setInnerMsg(e.target.value)}
                            className='input'
                            type='text'
                            maxLength={200}
                            name='innerMsg'
                            placeholder='be funny here'
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='fontFamily' className="label">Font</label>
                        <input
                            id='fontFamily'
                            onChange={(e) => setFontFamily(e.target.value)}
                            className='input'
                            type='text'
                            name='innerMsg'
                            placeholder='Fetch a Font'
                            list="fontFamily"/>
                            <datalist id="fontFamily">
                                <option value="Arial">Arial</option>
                                <option value="Verdana">Verdana</option>
                                <option value="Times">Times</option>
                                <option value="Courier">Courier</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Trebuchet">Trebuchet</option>
                                <option value="Verdana">Verdana</option>
                            </datalist>
                    </div>
                    <div className='field'>
                        <label htmlFor='textAlignment' className="label">Position Text</label>
                        <input 
                            list="textAlignment" 
                            name="textAlignment"
                            placeholder="Where to put it?"></input>
                            <datalist id="textAlignment">
                                <option value="left"></option>
                                <option value="center"></option>
                                <option value="right"></option>
                            </datalist>
                    </div>    
                    <div className='color-field'>
                        <label htmlFor='fontColor' className="label">Font Color</label>
                        <input
                            id='borderColor'
                            onChange={(e) => {setFontColor(e.target.value)}}
                            className='input'
                            type='color'
                            name='fontColor'
                            placeholder=''/>
                    </div>
                    </fieldset>
                    <div className='control'>
                        <label htmlFor='submit' className='label'></label>
                        <input 
                            to="/create"
                            className='button-1 submit'
                            type='submit'
                            value='Create my card!'
                        />
                    </div>
                </form>
                <article className='lg-card-frame'>
                    <h4 className="card-title">{title}</h4>
                    <div
                        className='card-detail'
                        style={{
                            background: {background},
                            border: `${borderColor} ${borderStyle} ${borderWidth}`,
                            textAlignment: {textAlignment},
                            color: {fontColor},
                            fontFamily: {fontFamily},
                        }}
                    >
                    <div className='lg-card-front'>
                        <div className='outerMessage'>{outerMsg}</div>
                    </div>
                    <div className='lg-card-back'>
                        <div className='innerMessage' style={{ color: fontColor }}>{innerMsg}</div>
                    </div>
                    </div>
                    <div className="deets">
                        <div className="pub">
                            {isPublished ? (
                                <p>Published</p>
                            ) : (
                                <p>Unpublished</p>
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </>
    )
}