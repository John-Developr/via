import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TextInput,
  TextInputProps,
  Pressable,
} from 'react-native';
import { appColors, fontFamilies } from '../theme';

type FloatingInputProps = TextInputProps & {
  label: string;
  rightLabel?: string;
  onRightPress?: () => void;
};

const ANIMATION_DURATION = 160;
const EASING = Easing.out(Easing.cubic);

export function FloatingInput({
  label,
  rightLabel,
  onRightPress,
  value,
  onFocus,
  onBlur,
  style,
  ...textInputProps
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const hasValue = Boolean(value && value.length > 0);
  const isFloating = focused || hasValue;

  // Two separate drivers:
  // - floatAnim: label position/size/color (also true when there's a value,
  //   even unfocused — e.g. autofilled fields)
  // - focusAnim: border color/width (focus state only)
  const floatAnim = useRef(new Animated.Value(isFloating ? 1 : 0)).current;
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(floatAnim, {
      toValue: isFloating ? 1 : 0,
      duration: ANIMATION_DURATION,
      easing: EASING,
      // top/fontSize/color aren't supported by the native driver
      useNativeDriver: false,
    }).start();
  }, [isFloating, floatAnim]);

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: focused ? 1 : 0,
      duration: ANIMATION_DURATION,
      easing: EASING,
      useNativeDriver: false,
    }).start();
  }, [focused, focusAnim]);

  const handleFocus = (
    event: Parameters<NonNullable<TextInputProps['onFocus']>>[0],
  ) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (
    event: Parameters<NonNullable<TextInputProps['onBlur']>>[0],
  ) => {
    setFocused(false);
    onBlur?.(event);
  };

  const labelTop = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [17, 5] });
  const labelLeft = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [14, 12] });
  const labelFontSize = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [16, 12] });
  const labelLineHeight = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 16] });
  const labelPaddingHorizontal = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 4] });
  const labelColor = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#a8a8a8', '#6d6e71'],
  });

  const borderColor = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#e0e0e1', '#e9e9e9'],
  });
  const borderWidth = focusAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.5] });

  return (
    <Animated.View style={[styles.container, { borderColor, borderWidth }]}>
      <Animated.Text
        pointerEvents="none"
        style={[
          styles.label,
          {
            top: labelTop,
            left: labelLeft,
            fontSize: labelFontSize,
            lineHeight: labelLineHeight,
            paddingHorizontal: labelPaddingHorizontal,
            color: labelColor,
            fontFamily: fontFamilies.dmSans.regular
          },
        ]}
      >
        {label}
      </Animated.Text>

      <TextInput
        {...textInputProps}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={appColors.textSecondary}
        style={[styles.input, rightLabel ? styles.inputWithRightLabel : null, style]}
      />

      {rightLabel && onRightPress ? (
        <Pressable onPress={onRightPress} hitSlop={10} style={styles.rightButton}>
          <Animated.Text style={styles.rightButtonText}>{rightLabel}</Animated.Text>
        </Pressable>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    position: 'relative',
  },

  label: {
    position: 'absolute',
    fontFamily: fontFamilies.dmSans.regular
  },

  input: {
    height: '100%',
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 0,
    fontSize: 15,
    fontFamily: fontFamilies.dmSans.semiBold,
  },

  inputWithRightLabel: {
    paddingRight: 60,
  },

  rightButton: {
    position: 'absolute',
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },

  rightButtonText: {
    fontSize: 13,
    fontFamily: fontFamilies.dmSans.semiBold,
  },
});