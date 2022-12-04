import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CardDetail } from './CardDetail'


export const CreateCard = ({token}) => {
    const [newCard, setNewCard] = useState([])
    const [isFront, setIsFront] = useState(true)
    const [cardId, setCardId] = useState('')
    const [title, setTitle] = useState('a sample card for you')
    const [background, setBackground] = useState('#FBA85B')
    const [borderStyle, setBorderStyle] = useState('solid')
    // const [borderWidth, setBorderWidth] = useState('5px')
    const [borderColor, setBorderColor] = useState('#000000')
    const [fontFamily, setFontFamily] = useState('serif')
    const [fontColor, setFontColor] = useState('#2c3268')
    const [textAlign, setTextAlign] = useState('center')
    const [outerMsg, setOuterMsg] = useState('Be funny, brave and kind.')
    const [innerMsg, setInnerMsg] = useState('Make yourself laugh, like, a LOT.')
    const [updated, setUpdated] = useState('')
    const [isPublished, setIsPublished] = useState(false)

    const [error, setError] = useState(null)

    const handleCreate = (e) => {
        e.preventDefault()
        setError(null)
        axios
            .post('https://ecard-web-service.onrender.com/cards/user/',
                {
                id: cardId,
                title: title,
                border_style: borderStyle,
                border_color: borderColor,
                background_color: background,
                font_family: fontFamily,
                font_color: fontColor,
                text_align: textAlign,
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

    const handleCardFlip = (e) => {
        e.preventDefault()
        setIsFront(!isFront)
    }

    const handlePublish = (e) => {
        e.preventDefault()
        setIsPublished(!isPublished)
        return "Your card has been published."
    }


    // const handleEdits = (token) => {}

    return (
        <>
        <h1>Card Creation</h1>
        <div className="create-shelf">
            <div className='create-box'>
                {error && <div className="error">{error}</div>}
                <form id="card-form" onSubmit={handleCreate}>
                    <fieldset><legend>Name that Card</legend>
                    <div className='field'>
                        <label htmlFor='title' className="label"></label>
                        <input
                            id='title'
                            onChange={(e) => setTitle(e.target.value)}
                            className='input'
                            autoComplete='off'
                            autoFocus
                            type='text'
                            name='title'
                            placeholder="a sample card for you"
                        />
                        <p>Card will refresh as you edit your selections.</p>
                        <p>Creating your card will save it in a draft state and only visible to you.</p>

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
                            autoComplete='off'
                            name='background'
                            value='#FBA85B'
                            placeholder=''/>
                    </div>
                    {/* <div className='field-border'>
                        <label htmlFor='borderWidth' className="label">Border Width</label>
                        <input
                            id='borderWidth'
                            onChange={(e) => `${setBorderWidth}px`(e.target.value)}
                            className='slider'
                            type='number'
                            name='borderWidth'
                            placeholder={borderWidth}
                            min="1"
                            max="10"
                            />px
                    </div> */}
                    <div className='field-border'>
                        <label htmlFor='borderStyle' className="label">Border Style</label>
                        <select
                            id="borderStyle"
                            name='borderStyle'
                            onChange={(e) => setBorderStyle(e.target.value)}
                            className='select-box'
                            value='Solid'
                            >
                            <option value="Dashed">Dashed</option>
                            <option value="Dotted">Dotted</option>
                            <option value="Double">Double</option>
                            <option value="Groove">Groove</option>
                            <option value="Inset">Inset</option>
                            <option value="Outset">Outset</option>
                            <option value="Ridge">Ridge</option>
                            <option value="Solid">Solid</option>
                        </select>
                    </div>
                    <div className='color-field'>
                        <label htmlFor='borderColor' className="label">Border Color</label>
                        <input
                            id='borderColor'
                            onChange={(e) => {setBorderColor(e.target.value)}}
                            className='input'
                            type='color'
                            name='borderColor'
                            value='#000000'
                            placeholder=''/>
                    </div>
                    </fieldset>
                    <fieldset><legend>Verbal Excursions</legend>
                    <div className='field'>
                        <label htmlFor='outerMsg' className="label">Initial Greetings</label>
                        <textarea
                            id='outerMsg'
                            onChange={(e) => setOuterMsg(e.target.value)}
                            className='input'
                            type='text'
                            autoComplete='off'
                            maxLength={200}
                            name='outerMsg'
                            placeholder="Be funny, brave and kind."
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='innerMsg' className="label">Flip-Side Message</label>
                        <textarea
                            id='innerMsg'
                            onChange={(e) => setInnerMsg(e.target.value)}
                            className='input'
                            type='text'
                            autoComplete='off'
                            maxLength={200}
                            name='innerMsg'
                            placeholder='Make yourelf laugh, like, a LOT.'
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='fontFamily' className="label">Font</label>
                        <select
                            id='fontFamily'
                            onChange={(e) => setFontFamily(e.target.value)}
                            className='select-box'
                            name='fontFamily'
                            value='Times'
                            list="fontFamily">
                            <option value="Arial">Arial</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Times">Times</option>
                            <option value="Courier">Courier</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Trebuchet">Trebuchet</option>
                            <option value="Verdana">Verdana</option>
                        </select>
                    </div>
                    <div className='field'>
                        <label htmlFor='textAlign' className="label">Position Text</label>
                        <select 
                            id="textAlign"
                            onChange={(e) => setTextAlign(e.target.value)}
                            className="select-box"
                            name="textAlign">
                            <option value="left">left</option>
                            <option value="center">center</option>
                            <option value="right">right</option>
                        </select>
                    </div>    
                    <div className='color-field'>
                        <label htmlFor='fontColor' className="label">Font Color</label>
                        <input
                            id='fontColor'
                            onChange={(e) => {setFontColor(e.target.value)}}
                            className='input'
                            type='color'
                            name='fontColor'
                            value='#2c3268'
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
                        onClick={handleCardFlip}
                        style={{
                            background: background,
                            border: `5px ${borderColor} ${borderStyle}`,
                            textAlign: textAlign,
                            color: fontColor,
                            fontFamily: fontFamily,
                        }}
                    >
                        <>
                            { isFront ? (
                                <div className='lg-card-front'>
                                    <div className='outerMessage'>{outerMsg}</div>
                                </div>
                            ) : (
                                <div className='lg-card-back'>
                                    <div className='innerMessage'>{innerMsg}</div>
                                </div>
                            )}
                        </>
                    </div>
                    <div className='deets'>
                        <div className="ispub" onClick={handlePublish}>
                            { isPublished ? (
                                <p className='pub'>Published</p>
                            ) : (
                                <p className='unpub'>Unpublished</p>
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </>
    )
}