import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://ebac.art.br/upload/medialibrary/878/1.png';

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
