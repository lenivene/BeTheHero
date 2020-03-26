import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

// Services
import api from "../../services/api";

// Components
import { Container, ContainerForm, Form } from "./styles";

// Assets
import Logo from "../../assets/logo.svg";
import HeroesIMG from "../../assets/heroes.png";

export default function Login() {
  const history = useHistory();

  const [id, setId] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Falha no login, tente novamente!");
    }
  };

  return (
    <>
      <Container>
        <ContainerForm>
          <img src={Logo} alt="Be The Hero" />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <input
              placeholder="Sua ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <button className="btn" type="submit">
              Entrar
            </button>

            <Link className="link" to="/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </Form>
        </ContainerForm>
        <img src={HeroesIMG} alt="Heroes" />
      </Container>
    </>
  );
}
