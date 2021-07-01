import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 8,
  },
}))`
  margin-top: 25px;
`;

export const Card = styled.TouchableOpacity`
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: 110px;
  height: 95px;
  border-radius: 8px;
  margin-right: 8px;
  padding: 8px;
  flex-direction: row;
`;

export const Label = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: bold;
  align-self: flex-end;
`;
