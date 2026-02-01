import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        screenOptions={{ 
          headerShown: true, // Mostra a barra superior com o ☰
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Início',
            title: 'Wildex',
          }}
        />
        <Drawer.Screen
          name="modal"
          options={{
            drawerLabel: 'Sobre',
            title: 'Informações',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}