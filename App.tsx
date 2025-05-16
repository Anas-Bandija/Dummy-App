import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import MainTabs from './navigation/MainTabs';
import AuthScreen from './screens/AuthScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Auth"
            options={{ headerShown: false }}
          >
            {(props: any) => (
              <AuthScreen
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }} // ✅ Hide Stack header
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
