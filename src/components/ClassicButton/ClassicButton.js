import classnames from 'classnames';

import './ClassicButton.scss'

export const Button = ({ value, className, isInverted }) => (
    <button className={classnames('classic-btn', className, {'classic-btn_inverted': isInverted})}>
        <span>{value}</span>
    </button>
)