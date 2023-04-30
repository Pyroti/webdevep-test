import React from 'react';
import * as Styles from './auth-button.styles';

interface AuthButton {
  title: string;
  onPress: () => void;
}

export const AuthButton: React.FC<AuthButton> = React.memo(
  ({title, onPress}) => (
    <Styles.DefaultContainer onPress={onPress}>
      <Styles.DefaultText>{title}</Styles.DefaultText>
    </Styles.DefaultContainer>
  ),
);
