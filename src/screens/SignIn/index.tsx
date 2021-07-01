import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

function SignIn() {
  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent />

      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente {`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          com seus amigos
        </Text>

        <ButtonIcon 
          title='Entrar com discord'
          activeOpacity={.9}
        />
      </View>

    </View>
  );
};



export { SignIn };