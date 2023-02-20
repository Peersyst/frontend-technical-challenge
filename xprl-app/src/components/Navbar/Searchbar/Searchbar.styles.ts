/** @format */

import styled from "styled-components";

export const SearchbarContainer = styled.form`
    display: none;
    justify-content: center;
    margin: 24px 0;
    @media (min-width: 900px) {
        min-width: 220px;
        display: inline-block;
    }
    @media (min-width: 1200px) {
        min-width: 272px;
    }
`;
export const SearchbarInput = styled.input`
    color: #fff;
    background: #232325 url(https://livenet.xrpl.org/assets/search-f11e18ba.svg)
        no-repeat right center;
    background-size: 12px;
    border: none;
    border-radius: 100px;
    justify-content: center;
    font-size: 10px;
    width: 100%;

    @media (min-width: 900px) {
        padding: 8px 40px 8px 25px;
        background-position-x: 185px;
    }
    @media (min-width: 1200px) {
        padding: 8px 25px;
        background-position-x: 235px;
    }
    /* display: none;
    justify-content: center;   
    border: none;
    border-radius: 100px;
    background-color: #232325;
    color: #fff;
    font-size: 10px;
    line-height: 15px;
    text-align: left;
    text-overflow: ellipsis;
    font-weight: 400;
    transition: width .2s,background-position-x .2s;
    outline:none;
    
    //Icono busqueda
    background: #232325 url(https://livenet.xrpl.org/assets/search-f11e18ba.svg) no-repeat right center;
    background-size: 12px;

    @media (min-width: 900px){
        display: inline-block;
        padding: 8px 40px 8px 25px;
        background-position-x: 185px;
    }
    @media (min-width: 1200px){
        width: 272px;
        padding: 8px 25px;
        background-position-x: 235px;
    } */
`;
