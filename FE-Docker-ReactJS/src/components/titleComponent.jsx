import Styled from "styled-components";

function TitleComponent(props) {
    return (
        <Title>{props.text}</Title>
    );
};

const Title = Styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #fff;
`

export default TitleComponent;