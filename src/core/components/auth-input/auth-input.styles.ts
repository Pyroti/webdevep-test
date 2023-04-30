import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
`;

export const InputLabel = styled.Text`
  color: ${({theme}) => theme.pallette.text};
  margin-bottom: 13px;
`;

export const CustomInput = styled.TextInput`
  border: 1px solid ${({theme}) => theme.pallette.primary};
  color: ${({theme}) => theme.pallette.text};
  font-size: 16px;
  padding: 10px 15px;
  width: 100%;
`;

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.pallette.error};
  margin-top: 10px;
`;
