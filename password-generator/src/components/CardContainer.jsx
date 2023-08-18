import PropTypes from 'prop-types';

function CardContainer({ children }) {
    return (
        <div>{children}</div>
    )
}

CardContainer.propTypes = {
    children: PropTypes.node,
}

export default CardContainer;