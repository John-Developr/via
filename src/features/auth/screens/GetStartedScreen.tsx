import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { images } from '../../../assets';
import { styles } from '../styles/GetStarted.styles';


type Props = {
  onCreateAccount: () => void;
  onLogIn: () => void;
};

export function GetStartedScreen({
  onCreateAccount,
  onLogIn,
}: Props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      {/* Background image */}
      <Image
        source={images.getStartedBackground}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Gradient overlay */}
      <LinearGradient
        colors={[
          'rgba(11,20,32,0)',
          'rgba(11,20,32,0.15)',
          'rgba(11,20,32,0.88)',
          '#132030',
        ]}
        locations={[0, 0.4, 0.72, 1]}
        style={styles.gradient}
      >
        <View style={styles.heroBlock}>
          <Text style={styles.eyebrow}>
            Plan trips together
          </Text>

          <Text style={styles.headline}>
            Every trip has a route.{'\n'}
            Via keeps everyone on it.
          </Text>

          <Text style={styles.subtext}>
            Build the itinerary, split the costs, and chat with your group —
            all in one place.
          </Text>

          <Pressable
            onPress={onCreateAccount}
            style={({ pressed }) => [
              styles.btnPrimary,
              pressed && styles.btnPressed,
            ]}
          >
            <Text style={styles.btnPrimaryText}>
              Create an account
            </Text>
          </Pressable>

          <Pressable
            onPress={onLogIn}
            style={({ pressed }) => [
              styles.btnGhost,
              pressed && styles.btnPressed,
            ]}
          >
            <Text style={styles.btnGhostText}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}
