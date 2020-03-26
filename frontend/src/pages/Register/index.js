import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// Services
import api from "../../services/api";

// Components
import { Container, Wrapper, Details, Form, InputGroup } from "./styles";

// Assets
import Logo from "../../assets/logo.svg";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const data = { name, email, whatsapp, city, uf };
      const res = await api.post("/ongs", data);

      alert(`Sucesso! Seu ID: ${res.data.id}`);

      history.push("/");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Details>
          <img src={Logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o login
          </Link>
        </Details>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <InputGroup>
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              className="sm"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </InputGroup>

          <button className="btn" type="submit">
            Cadastrar
          </button>
        </Form>
      </Wrapper>
    </Container>
  );
}
