import { useCallback, useState } from 'react';
import { StatusBar, View } from 'react-native';

import { SplashScreen } from './components/SplashScreen';
import { AppNavigator } from './navigation';
import { AppProviders } from './providers/AppProviders';
import { styles } from './App.styles';

function AppContent() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const hideSplash = useCallback(() => {
    setIsSplashVisible(false);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isSplashVisible ? 'light-content' : 'dark-content'}
      />

      <AppNavigator />

      {isSplashVisible ? (
        <SplashScreen onFinish={hideSplash} />
      ) : null}
    </View>
  );
}

function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );
}

export default App;
