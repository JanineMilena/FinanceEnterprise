import SearchBarComponent from '../components/searchBarComponent';
import SideBarComponent from '../components/sideBarComponent';
import Styled from "styled-components";

function Dashboard() {
    return (
        <>
            <SideBarComponent />

            <ContentContainer >
                <TextsContainer>

                    <SearchBarComponent>

                    </SearchBarComponent>

                </TextsContainer>
            </ContentContainer >
        </>
    )
};

const ContentContainer = Styled.div`
    width: calc(100% - 140px);
    height: 100vh;
    display: flex;
    float: right;
    justify-content: center;
`
const TextsContainer = Styled.div`
    width: calc(100% - 150px);
    margin-top: 50px;
    float: right;
`

export default Dashboard; 