import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body{
    background:#f0f0f5;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  button {
    cursor: pointer;
  }

  form input,
  form textarea{
    width: 100%;
    height: 60px;
    color: #333;
    border:1px solid #dcdce6;
    border-radius:8px;
    padding:18.5px 24px;
  }

  .btn{
    background:#E02041;
    width: 100%;
    height: 60px;
    color:#fff;
    font-weight: 700;
    border:1px solid #dcdce6;
    border-radius:8px;
    padding:18.5px 24px;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: filter .2s;
  }

  .btn:hover{
    filter: brightness(90%);
  }

  .link {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .link:hover {
    opacity: 0.8;
  }

  .link svg {
    margin-right: 8px;
  }
`;
