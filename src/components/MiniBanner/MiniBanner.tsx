import React from 'react';
import { View, Image } from 'react-native';
import styles from './MiniBanner.styled';

const MiniBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.wine.com.br/revista-digital/cms/mais20_mini_banner_c2c70d5afa.webp',
        }}
        style={styles.image}
        resizeMode="cover"
        alt="minibanner"
      />
    </View>
  );
};

export default MiniBanner;