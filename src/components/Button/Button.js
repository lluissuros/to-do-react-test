import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ className, label}) => {
    let styles = 'Button';

    styles += className? ` ${className}` : '';

    return (
        <input
          className={styles}
          type="submit"
          value={label}
        />
    );
};

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired
};

export default Button;
