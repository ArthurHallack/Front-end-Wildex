import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/../constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        screenOptions={{ 
          drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: true, // Isso faz o botão ☰ aparecer no topo
          drawerType: 'front', // Garante que ele deslize por cima
        }}
      >
        {/* O name "(tabs)" precisa ser exatamente o nome da sua pasta de abas */}
        <Drawer.Screen
          name="(tabs)" 
          options={{
            drawerLabel: 'Início',
            title: 'Wildex Home',
          }}
        />
        {/* Se você tiver o arquivo modal.tsx na mesma pasta raiz */}
        <Drawer.Screen
          name="modal" 
          options={{
            drawerLabel: 'Configurações',
            title: 'Ajustes',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}