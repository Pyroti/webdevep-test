import React from 'react';
import * as Styles from './auth-button-link.styles';

interface AuthButton {
  title: string;
  onPress: () => void;
}

export const AuthLinkButton: React.FC<AuthButton> = React.memo(
  ({title, onPress}) => {
    return (
      <Styles.LinkContainer onPress={onPress}>
        <Styles.LinkText>{title}</Styles.LinkText>
      </Styles.LinkContainer>
    );
  },
);
