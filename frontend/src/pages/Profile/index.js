import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

// Services
import api from "../../services/api";

// Components
import { Container, Header, List, Item } from "./styles";

// Aseets
import Logo from "../../assets/logo.svg";

export default function Profile() {
  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(res => {
        setIncidents(res.data);
      });
  }, []);

  const handleIncidentDelete = async id => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();

    history.push("/");
  };

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Be The Hero" />
        <span>Bem vindo(a), {ongName}</span>

        <Link className="btn" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} className="btn" type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <List>
        {incidents.map(incident => (
          <Item key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => {
                handleIncidentDelete(incident.id);
              }}
            >
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </Item>
        ))}
      </List>
    </Container>
  );
}
