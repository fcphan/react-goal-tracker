import React from 'react'
import PropTypes from 'prop-types'


const Button = ({text, onClick}) => {
    return (
    <div>
        <button className='btn' onClick={onClick}>
            {text}
        </button>
    </div>
    )
}

Button.defaultProps = {
    text: "Add"
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
