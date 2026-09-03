import { useEffect, useRef } from 'react';
import { Animated, Image } from 'react-native';

import { images } from '../../../assets';
import { styles } from './SplashScreen.styles';

const SPLASH_HOLD_DURATION_MS = 1_000;
const SPLASH_FADE_DURATION_MS = 300;

type SplashScreenProps = {
  onFinish: () => void;
};

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.timing(opacity, {
        duration: SPLASH_FADE_DURATION_MS,
        toValue: 0,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          onFinish();
        }
      });
    }, SPLASH_HOLD_DURATION_MS);

    return () => {
      clearTimeout(timeout);
      opacity.stopAnimation();
    };
  }, [onFinish, opacity]);

  return (
    <Animated.View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[styles.container, { opacity }]}
      testID="splash-screen"
    >
      {/* <Image
        accessibilityLabel="Tara Na"
        resizeMode="contain"
        source={images.taraNaTransparent}
        style={styles.logo}
      /> */}
    </Animated.View>
  );
}
