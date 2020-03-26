import styled from "styled-components";
import {
  Container,
  Wrapper,
  Details,
  Form as RegisterForm
} from "../../Register/styles";

const Form = styled(RegisterForm)`
  textarea {
    min-height: 140px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
  }
`;

export { Container, Wrapper, Details, Form };
