import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { styles } from '../styles/Register.styles';

import type { RootStackParamList } from '../../../app/navigation/index';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export function RegisterScreen({ navigation }: Props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

const onCreateAccount = () => {
    console.log('Create Account:', fullName, email, password, showPassword);

    // TODO: call your authentication API
  };

  const onBack = () => {
    // Later:
    // navigation.navigate('ForgotPassword');
  };

  const onLogIn = () => {
    // Later:
    // navigation.navigate('Register');
  };

  const onGoogleContinue = () => {
    // TODO: Google authentication
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
       <StatusBar barStyle="light-content" />

      <Pressable
        style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}
        onPress={onBack}
        hitSlop={10}
      >
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formHead}>
          <Text style={styles.eyebrow}>Step 1 of 1</Text>
          <Text style={styles.title}>Create your account</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Alex Chen"
            placeholderTextColor={styles.placeholderColor.color}
            autoCapitalize="words"
            autoCorrect={false}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="alex@email.com"
            placeholderTextColor={styles.placeholderColor.color}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="••••••••"
              placeholderTextColor={styles.placeholderColor.color}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable
              style={styles.passwordToggle}
              onPress={() => setShowPassword((v) => !v)}
              hitSlop={10}
            >
              <Text style={styles.passwordToggleText}>
                {showPassword ? 'Hide' : 'Show'}
              </Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [styles.btnPrimary, pressed && styles.btnPressed]}
          onPress={onCreateAccount}
        >
          <Text style={styles.btnPrimaryText}>Create account</Text>
        </Pressable>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        <Pressable
          style={({ pressed }) => [styles.btnGhost, pressed && styles.btnPressed]}
          onPress={onGoogleContinue}
        >
          <Text style={styles.btnGhostText}>Continue with Google</Text>
        </Pressable>

        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Already have an account? </Text>
          <Pressable onPress={onLogIn} hitSlop={8}>
            <Text style={styles.switchLink}>Log in</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}