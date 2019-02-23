import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  border: 0.5px solid #dadada;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};
  opacity: 0.6;
  border-radius: 2px;
  outline: none;
  transition: width 2s;
  color: #404040;
  width: 400px;
  height: 50px;
  &:hover {
    color: #7b5ecd;
    background: #f2f2f2;
    cursor: pointer;
    transition: width 2s;
  }
`;

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`;

class ThemeSelect extends React.Component {
    render() {
        return (
            <div>
                <Select onChange={e => this.props.onChange(e)}>
                    <SelectOpt value="theme1">Theme 1</SelectOpt>
                    <SelectOpt value="theme2">Theme 2</SelectOpt>
                </Select>
            </div>
        )
    }
}

export default ThemeSelect;

ThemeSelect.propTypes = {
    onChange: PropTypes.func,
};

