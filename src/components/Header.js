import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${props => (props.bgColor? '#F7A072' : '#a1cdf1')};
    color: ${props => (props.color? '#a1cdf1' : '#F7A072')};
    height: ${props => (props.height? '40px': '60px')};

`
export const Header = ({bgColor, color, height, img, ...props}) => {
    return (
    <StyledHeader img={img} {...props}>
        {props.children}
    </StyledHeader>
    )
} 