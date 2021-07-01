import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 100px;
  padding: 0 16px;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 20px;
  font-size: 34px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 25px;
  margin-left: 8px;
  width: 400px;
  height: 40px;
  padding-left: 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;

  border: 1px solid rgba(255, 255, 255, 0.4);
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 8px;
`;

export const LocationContainer = styled.View`
  margin-top: 25px;
  margin-left: 8px;
  height: 150px;
  width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;

`;

export const LocationHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 8px;
  height: 40px;
`;

export const LocationLabel = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const LocationLabelSub = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  color: #fff;
`;

export const LabelContainer = styled.View`
  margin-top: 8px;
  flex-direction: column;
`;

export const ImgContant = styled.View`
  background: #fff;
  margin-top: 10px;
  flex: 1;
`;

export const ServiceContainer = styled.View`
   margin-top: 25px;
   padding: 0 8px;
`;

export const ServiceTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const ServiceCardContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const ServiceCard = styled.TouchableOpacity`
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: 110px;
  height: 95px;
  border-radius: 8px;
  margin-right: 8px;
  padding: 8px;
  flex-direction: row;
`;

export const ServiceLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: flex-end;
`;
