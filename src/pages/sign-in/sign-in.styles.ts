import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;

export const Container = styled.Pressable`
  flex: 1;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.pallette.text};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
