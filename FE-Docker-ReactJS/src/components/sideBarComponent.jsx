import Styled from "styled-components";

function SideBarComponent() {
    return (
        <SideBarContainer>
            <IconContainerActive>
                <Icon className="fa-solid fa-bars fa-xl"></Icon>
            </IconContainerActive>

            <IconContainerDisabled>
                <Icon className="fa-solid fa-chart-simple fa-xl"></Icon>
            </IconContainerDisabled>

            <IconContainerDisabled>
                <Icon className="fa-solid fa-envelope fa-xl"></Icon>
            </IconContainerDisabled>

            <IconContainerDisabled>
                <Icon className="fa-solid fa-coins fa-xl"></Icon>
            </IconContainerDisabled>

            <IconContainerDisabled>
                <Icon className="fa-solid fa-calendar fa-xl"></Icon>
            </IconContainerDisabled>
        </SideBarContainer >
    );
};

const SideBarContainer = Styled.div`
    width: 70px; 
    height: 90vh;
    margin-top: 50px;
    margin-left: 40px;
    margin-right: 50px;
    border-radius: 20px;
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: column;
    background-color: #252525;
`

const IconContainerDisabled = Styled.div`
    width: 40px; 
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const IconContainerActive = Styled.div`
    width: 40px; 
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #F45624;
`

const Icon = Styled.i`
    margin-top: 20px;
    color: white;    
`


export default SideBarComponent;