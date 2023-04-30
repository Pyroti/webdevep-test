import styled from 'styled-components/native';

export const LinkContainer = styled.Pressable`
  padding: 16px 0;
`;

export const LinkText = styled.Text`
  color: ${({theme}) => theme.pallette.primary};
`;
