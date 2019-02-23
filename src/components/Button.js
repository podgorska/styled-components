import React from 'react';
import PropTypes from 'prop-types';
import {ButtonStyled} from '../theme/globalStyle';

class Button extends React.Component {
    onButtonClick = () => {
        if (this.props.text) {
            alert(`You clicked ${this.props.text.toLowerCase()}!`);
        }
    };

    render() {
        const componentProps = {
            ...this.props,
            onClick: this.onButtonClick
        };

        return this.props.component ?
            <this.props.component {...componentProps}>
                {this.props.text}
            </this.props.component>
            :
            <ButtonStyled {...componentProps}>
                {this.props.text}
            </ButtonStyled>
    }
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    component: PropTypes.object
};
