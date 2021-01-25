import styled from "styled-components";

const Widget = styled.div`
    margin: 2.4rem 0;
    border: 1px solid ${({theme}) => theme.colors.secundary};
    background-color: ${({theme}) => theme.colors.textColor};
    border-radius: 0.4rem;
    overflow: hidden;    

    h1, h2, h3 {
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 1.5;
        margin-bottom: 0;
    }
    p {
        font-size: 1.4rem;
        font-weight: normal;
        line-height: 1.5;
    }
`;

Widget.Content = styled.div`
    padding: 2.4rem 3.2rem 3.2rem 3.2rem;

    & > *:first-child {
        margin-top: 0;
    }
    & > *:last-child {
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }

`;

Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.8rem 3.2rem;
    background: ${({theme}) => theme.colors.secundary};
    color: ${({theme}) => theme.colors.textColor};
    font-size: 1.6rem;
    font-weight: 600;
    * {
        margin: 0;
    }
`;


export default Widget;