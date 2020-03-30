import styled from 'styled-components';
const Logon = styled.div`
        width:100%;
        max-width:1120px;
        height:100vh;
        margin:0 auto;
        display:flex;
        align-items: center;
        justify-content: space-between;

    section.form{
        width:100%;
        max-width: 450px;
        margin-right:30px;
        margin-left:30px;
    }
    section.form form{
        margin-top: 100px;
    }
    section.form form h1{
        font-size: 32px;
        margin-bottom: 32px;
        color:${props => props.theme.colors.text};
    }
    section.form svg .beThe{
        fill: ${props => props.theme.colors.text};
    }
    section.form svg .hero{
        fill: ${props => props.theme.colors.secondary};
    }
`;
export default Logon; 