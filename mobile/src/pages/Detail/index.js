import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

// Components
import {
  Container,
  Header,
  ButtonBack,
  Icon,
  Detail,
  DetailProperty,
  DetailPropertyValue,
  ContactContainer,
  ContactTitle,
  ContactDescription,
  Actions,
  ActionButton,
  ActionButtonText
} from "./styles";

// Assets
import logo from "../../assets/logo.png";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const incident_value = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value);

  const message = `Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${incident_value}`;

  const navigateBack = () => {
    // navigation.goBack();
    navigation.navigate("Incidents");
  };

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  };

  const sendWhatsapp = () => {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  };

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <ButtonBack onPress={() => navigateBack}>
          <Icon name="arrow-left" size={18} color="#E82041" />
        </ButtonBack>
      </Header>
      <Detail>
        <DetailProperty>ONG:</DetailProperty>
        <DetailPropertyValue>
          {incident.name} de {incident.city}/{incident.uf}
        </DetailPropertyValue>

        <DetailProperty>Caso:</DetailProperty>
        <DetailPropertyValue>{incident.description}</DetailPropertyValue>

        <DetailProperty>Valor:</DetailProperty>
        <DetailPropertyValue>{incident_value}</DetailPropertyValue>
      </Detail>
      <ContactContainer>
        <ContactTitle>Salve o dia!</ContactTitle>
        <ContactTitle>Seja o herói desse caso.</ContactTitle>
        <ContactDescription>Entre em contato:</ContactDescription>

        <Actions>
          <ActionButton onPress={sendWhatsapp}>
            <ActionButtonText>WhatsApp</ActionButtonText>
          </ActionButton>
          <ActionButton onPress={sendMail}>
            <ActionButtonText>E-mail</ActionButtonText>
          </ActionButton>
        </Actions>
      </ContactContainer>
    </Container>
  );
}
