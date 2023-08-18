import PropTypes from 'prop-types';


function QuoteContainer({ color, children }) {
    const styleQuoteContainer = {
        backgroundColor: `#${color}`,
        color: `#${color}`,
        width: `80%`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '30px',
        gap: `20px`,
        alignItems: 'center',
        margin: `0 auto`,
    }

    return (
        <div className='quote-container' style={styleQuoteContainer}>
            {children}
        </div>
    )
}

QuoteContainer.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
}

export default QuoteContainer;