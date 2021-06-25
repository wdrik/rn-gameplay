import React, { ReactNode } from 'react';
import { Modal, ModalProps, View } from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
};

import { Background } from '../Background';

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
