import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Card({ data, color, setRandomColor }) {
    const [quote, setQuote] = useState({});
    const arrQuotes = data.quotes;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        useEffect(() => {
        handleChangeColor();
    }, []);

    const handleChangeColor = () => {
        setRandomColor(randomColor);
        const randomQuote = Math.floor(Math.random() * arrQuotes.length);
        setQuote(arrQuotes[randomQuote]);
    }

    const cardStyle = {
        width: '450px',
        border: '0px solid grey',
        padding: '30px 20px',
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
        textAlign: ' center',
        backgroundColor: 'white',
    }

    const authorStyle = {
        textAlign: 'right',
        fontStyle: 'italic',
    }

    const styleBtn = {
        border: `1px solid`,
        padding: `8px 12px`,
        borderRadius: `6px`,
        outline: `none`,
        fontSize: `16px`,
        backgroundColor: `#${color}`,
        cursor: 'pointer',
    }

    return (
        <div className='card' style={cardStyle}>
            <div className='quote'>
                <p className="content">{quote.quote}</p>
                <p className='author' style={authorStyle}>{quote.author}</p>
            </div>
            <button
                style={styleBtn}
                onClick={handleChangeColor}>New Quote</button>
        </div>
    )
}

Card.propTypes = {
    color: PropTypes.string,
    handleChangeColor: PropTypes.func,
}

export default Card;