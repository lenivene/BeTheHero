import styled from "styled-components";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBack = styled.TouchableOpacity``;

const Icon = styled(Feather)``;

const Detail = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 24px 0 24px;
  margin-top: 48px;
`;

const DetailProperty = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #41414d;
`;

const DetailPropertyValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

const ContactContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px;
`;

const ContactTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

const ContactDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const ActionButton = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

const ActionButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export {
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
};
