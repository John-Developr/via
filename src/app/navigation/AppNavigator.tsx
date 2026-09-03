import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {
  GetStartedScreen,
  LoginScreen,
  RegisterScreen
} from '../../features/auth';

import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

type GetStartedRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'GetStarted'
>;

function GetStartedRoute({
  navigation,
}: GetStartedRouteProps) {
  return (
    <GetStartedScreen
      onCreateAccount={() => navigation.navigate('Register')}
      onLogIn={() => navigation.navigate('Login')}
    />
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      >
        <Stack.Screen
          name="GetStarted"
          component={GetStartedRoute}
          options={{
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            presentation: 'formSheet',
            gestureEnabled: true,
            animation: 'slide_from_bottom',
            contentStyle: {
              backgroundColor: '#FFFFFF',
            },
            sheetGrabberVisible: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            contentStyle: {
              backgroundColor: '#FFFFFF',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
