import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80%;
    margin: 3rem 10%;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`

