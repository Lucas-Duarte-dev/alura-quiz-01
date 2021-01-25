import styled from "styled-components";


export const BackgroundImage = styled.div`
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.textColor};
    height: 100vh;
    background-position: center;
    @media screen and (max-width: 500px) {
        background-image: none;
        &:after {
        content: "";
        background-size: cover;
        background-position: center;
        background-image:
            linear-gradient(transparent, ${({ theme }) => theme.colors.textColor}),
            url(${({ backgroundImage }) => backgroundImage});
        display: block;
        width: 100%;
        height: 210px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        }
        *:first-child {
        position: relative;
        z-index: 10;
        }
    }
`;

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 35rem;
    padding-top: 4.5rem;
    margin: auto 10%;
    @media screen and (max-width: 50rem) {
        margin: auto;
        padding: 1.5rem;
    }
`;


