import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    *{
        margin:0px;
        padding:0;
        outline: 0;
        box-sizing:border-box;
    }
    body{
        font: 400 14px Roboto, sans-serif;
        background-color: ${props => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }
    input, button, textarea{
    font: 400 18px Roboto, sans-serif;
    }
    button{
        cursor: pointer;
    }
    form input{
        width:100%;
        height:60px;
        color:  #282a36;
        border: 1px solid ${props => props.theme.colors.background};
        border-radius: 8px;
        padding: 0 24px;
    }
    form textarea{
        width:100%;
        resize:vertical;
        min-height: 140px;
        color: #282a36;
        border: 1px solid ${props => props.theme.colors.background};
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
        margin-top: 8px;
    }
    .button{
        width:100%;
        height:60px;
        background-color: ${props => props.theme.colors.secondary};
        border:0;
        border-radius:8px;
        color:${props => props.theme.colors.text};
        font-weight: bold;
        margin-top: 16px;
        display:inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition:filter 0.2s;
    }
    .button:hover{
        filter: brightness(80%);
    }
    .back-link{
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: ${props => props.theme.colors.text};
        font-size:18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
    }
    .back-link svg{
        margin-right:8px;
        color: ${props => props.theme.colors.secondary};
    }
    .back-link:hover{
        opacity: 0.8;
    }
    .switch{
        position:absolute;
        left:30px;
        top:30px;
    }
`;
