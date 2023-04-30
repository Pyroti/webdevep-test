import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  justify-content: space-around;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.pallette.text};
`;
