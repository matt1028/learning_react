import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    // return <button className="Button">{children}</button>;
    // return <button className={['Button', size].join(' ')}>{children}</button>;
    return(
        <button
            className={classNames('Button', size, color, { outline, fullWidth })}
            {...rest}
            // onClick={onClick}
            // onMouseMove={onMouseMove}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;