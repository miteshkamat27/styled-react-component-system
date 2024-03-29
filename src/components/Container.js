//import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => {
        if(props.full) return 'antiquewhite'
        else if(props.fullVertical) return 'burlywood'
        else if(props.small) return 'darkgrey'
        else return 'darkkhaki'
    }};
    padding-left: ${props => {
        if(props.full) return 0;
        return 'calc((100vw - 960px) / 2)'
    }};
    padding-right: ${props => {
        if(props.full) return 0;
        return 'calc((100vw - 960px) / 2)'
    }};
    padding-top: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};
    padding-bottom: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};
`;