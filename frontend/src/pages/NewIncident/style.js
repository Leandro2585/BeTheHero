import styled from 'styled-components';
const Incident = styled.div`
    width:100%;
    max-width:1120px;
    height:100vh;
    margin:0 auto;
    display:flex;
    align-items: center;
    justify-content: center;

.content{
    width:100%;
    padding:96px;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 0px 100px rgba(0,0,0,0.12);
    border-radius: 8px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.content section{
    width:100%;
    max-width:380px;
}
.content section h1{
    margin: 64px 0 32px;
    font-size:32px;
    color: ${props => props.theme.colors.text};

}
.content section p{
    font-size: 18px;
    color: ${props => props.theme.colors.secondary};
    line-height:32px;
}
.content form{
    width: 100%;
    max-width: 450px;
}
.content form input,
.content form textarea{
    margin-top: 8px;
}
section svg .beThe{
    fill: ${props => props.theme.colors.text};
}
section svg .hero{
    fill: ${props => props.theme.colors.secondary};
}
`;
export default Incident;