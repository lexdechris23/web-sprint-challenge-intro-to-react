// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCards = styled.div`
    background: cornsilk;
    border: 6px solid whitesmoke;
    border-radius: 20px;
    margin: 2.5%;
    padding: 2%;
    width: auto;
    height: auto;
    box-shadow: 5px 5px 7px 1px black;

`
const StyledDead = styled.p`
    color: red;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
`
const StyledImg = styled.img`
    border-radius: 20px;
    width: auto;
    height: auto;
    border: 3px solid whitesmoke;
    box-shadow: 5px 5px 7px 1px black;

    `
const Character = (props) => {
    

    return(
        <StyledCards>
            <StyledImg src={props.character.image} alt={props.character.name}></StyledImg>
            <h2>{props.character.name}</h2>
            <p>Race: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Origin: {props.character.origin.name}</p>
            <p>Location: {props.character.location.name}</p>
            {props.character.status === "Dead" ?
                <StyledDead>{props.character.status}</StyledDead>
                :
                <p>{props.character.status}</p>
            }
        </StyledCards>
    )
}

export default Character 