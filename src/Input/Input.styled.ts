import styled from "styled-components";

export const InputStyle = styled.div`
    display: flex;
    position: relative;
    margin: 30px 10%;

    input {
        width: 100%;
        height: 40px;
        padding: 5px 10px;
        border-radius: 10px;
        border: none;
        font-size: 15px;
        
        &:focus {
            outline: none;
        }
    }
    
    div {
        cursor: pointer;
        position: absolute;
        z-index: 1;
        right: 10px;
        top: 10px;
        border-radius: 50%;
        background-color: lightblue;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        &:active {
            transform: scale(0.98);
        }
    }
`