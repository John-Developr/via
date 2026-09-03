import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { styles } from '../styles/Login.styles';
import { FloatingInput } from '../../../components/FloatingInput';
import type { RootStackParamList } from '../../../app/navigation/index';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login:', email, password);
    // TODO: call your authentication API
  };

  const handleForgotPassword = () => {
    // Later:
    // navigation.navigate('ForgotPassword');
  };

  const handleCreateAccount = () => {
    // Later:
    // navigation.navigate('Register');
  };

  const handleGoogleContinue = () => {
    // TODO: Google authentication
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.grabber} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formHead}>
          <Text style={styles.title}>Sign in to your{'\n'}Account</Text>
          <Text style={styles.info}>Enter you email and password to sign in.</Text>
        </View>

        <View style={styles.field}>
          <FloatingInput
            label="Username, email or mobile number"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            autoComplete="email"
            returnKeyType="next"
          />
        </View>

        <View style={styles.field}>
          <FloatingInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="password"
            secureTextEntry={!showPassword}
            returnKeyType="done"
            onSubmitEditing={handleLogin}
            rightLabel={showPassword ? 'Hide' : 'Show'}
            onRightPress={() => setShowPassword((v) => !v)}
          />
        </View>

        <Pressable onPress={handleForgotPassword} hitSlop={8} style={styles.forgotWrap}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btnPrimary, pressed && styles.btnPressed]}
          onPress={handleLogin}
        >
          <Text style={styles.btnPrimaryText}>Sign In</Text>
        </Pressable>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <Pressable
          style={({ pressed }) => [styles.btnGhost, pressed && styles.btnPressed]}
          onPress={handleGoogleContinue}
        >
          <Text style={styles.btnGhostText}>Continue with Google</Text>
        </Pressable>

        <View style={styles.switchRow}>
          <Text style={styles.switchText}>New to Via? </Text>
          <Pressable onPress={handleCreateAccount} hitSlop={8}>
            <Text style={styles.switchLink}>Create an account</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}