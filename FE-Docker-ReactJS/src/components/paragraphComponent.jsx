import Styled from "styled-components";

function ParagraphComponent(props) {
    return (
        <Paragraph>{props.text}</Paragraph>
    );
};

const Paragraph = Styled.p`
    font-size: 18px;
    color: #7e7e7e;
`

export default ParagraphComponent;