import styled from "styled-components";
import Constants from "expo-constants";

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

const H1 = styled.Text`
  font-size: 15px;
  color: #737380;
`;

const Strong = styled.Text`
  font-weight: bold;
`;

const Welcome = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

const List = styled.FlatList`
  margin-top: 32px;
`;

const Item = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px;
`;

const ItemProperty = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #41414d;
`;

const ItemPropertyValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailsButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #e02041;
`;

export {
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
};
