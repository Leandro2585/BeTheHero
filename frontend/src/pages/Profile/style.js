import styled from 'styled-components';
const Profile = styled.div`
    width:100%;
    max-width: 900px;
    padding: 0 30px;
    margin: 32px auto;
header{
    display: flex;
    align-items: center;
}
header span{
    font-size:20px;
    margin-left:24px;
    color: ${props => props.theme.colors.text};
}
header img{
    height:64px;
}
header a{
    width: 260px;
    margin-left:auto;
    margin-top: 0;
}
header button{
    height: 60px;
    width:60px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.secondary};
    background:transparent;
    margin-left: 16px;
    transition:0.2s;
}
header button:hover{
    border:3px solid ${props => props.theme.colors.text};
}
h1{
    margin-top: 80px;
    margin-bottom: 24px;
    color:${props => props.theme.colors.secondary};
}
ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
}
ul li{
    background-color: ${props => props.theme.colors.primary};
    padding: 24px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0px 0px 100px rgba(0,0,0,0.02);
    border:1px solid rgba(38,77,30,0.2);
}
ul li button{
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
}
ul li button:hover{
    opacity: 0.8;
}
ul li strong{
    display: block;
    margin-bottom: 16px;
    font-size: 18px;
    color: ${props => props.theme.colors.secondary};
}
ul li p + strong{
    margin-top:32px;
}
ul li p{
    color: ${props => props.theme.colors.text};
    line-height:21px;
    font-size: 16px;
}
header svg .beThe{
    fill: ${props => props.theme.colors.text};
}
header svg .hero{
    fill: ${props => props.theme.colors.secondary};
}
`;
export default Profile;