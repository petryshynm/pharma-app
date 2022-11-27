import classnames from 'classnames';

import './ClassicButton.scss'

export const Button = ({ form, handleClick, value, className, isInverted, type = 'button' }) => (
    <button 
        form={form} 
        type={type} 
        onClick={handleClick} 
        className={classnames('classic-btn', className, {'classic-btn_inverted': isInverted})}
        >
        <span>{value}</span>
    </button>
)