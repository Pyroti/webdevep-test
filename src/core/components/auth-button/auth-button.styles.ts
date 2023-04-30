import styled from 'styled-components/native';

export const DefaultContainer = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.pallette.primary};
  padding: 16px;
  border-radius: 5px;
  width: 100%;
`;

export const LinkContainer = styled.Pressable`
  color: ${({theme}) => theme.pallette.primary};
  padding: 16px;
`;

export const DefaultText = styled.Text``;

export const LinkText = styled.Text``;
