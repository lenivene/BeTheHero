import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

// Services
import api from "../../services/api";

// Components
import {
  Container,
  Header,
  H1,
  Strong,
  Welcome,
  Description,
  List,
  Item,
  ItemProperty,
  ItemPropertyValue,
  DetailsButton,
  DetailsButtonText
} from "./styles";

// Assets
import logo from "../../assets/logo.png";

export default function Incidents() {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState([]);
  const [totalIcidents, setTotalIcidents] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigateToDetail = incident => {
    navigation.navigate("Detail", { incident });
  };

  const loadIncidents = async () => {
    if (loading) {
      return;
    }

    if (totalIcidents > 0 && incidents.length === totalIcidents) {
      return;
    }

    setLoading(true);

    const response = await api.get(`/incidents?page=${page}`);

    setIncidents([...incidents, ...response.data]);
    setTotalIcidents(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <H1>
          Total de <Strong>{totalIcidents} casos</Strong>.
        </H1>
      </Header>
      <Welcome>Bem-vindo(a)!</Welcome>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <List
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Item>
            <ItemProperty>ONG:</ItemProperty>
            <ItemPropertyValue>{incident.name}</ItemPropertyValue>

            <ItemProperty>Caso:</ItemProperty>
            <ItemPropertyValue>{incident.description}</ItemPropertyValue>

            <ItemProperty>Valor:</ItemProperty>
            <ItemPropertyValue>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </ItemPropertyValue>
            <DetailsButton onPress={() => navigateToDetail(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </Item>
        )}
      />
    </Container>
  );
}
