import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 64px;
  }

  span {
    font-size: 20px;
    margin-left: 20px;
  }

  a {
    width: 260px;
    margin-left: auto;
  }

  a,
  button.btn {
    margin-top: 0;
  }

  button.btn {
    border-color: #dcdce6;
    background: transparent;
    margin-left: 16px;
    display: block;
    width: auto;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;

const Item = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }

  p + strong {
    margin-top: 32px;
  }

  button {
    background: transparent;
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export { Container, Header, List, Item };
