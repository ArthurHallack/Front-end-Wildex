import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { CustomDrawer } from '@/components/ui/CustomDrawer';

import { Colors } from '@/../constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  // Pega o tema atual ou assume light se for nulo
  const colorScheme = useColorScheme() ?? 'light';
  
  // Atalho para as cores do tema atual
  const theme = Colors[colorScheme];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{ 
          // Cor do texto/ícone do item selecionado no menu
          drawerActiveTintColor: theme.tint,
          
          // Cor do texto/ícone dos itens não selecionados
          drawerInactiveTintColor: theme.icon, 

          // Estilo da "gaveta" (o menu lateral em si)
          drawerStyle: {
            backgroundColor: theme.background,
            width: 250,
          },

          // Estilo da barra superior (Header)
          headerStyle: {
            backgroundColor: theme.background,
            // Adiciona uma borda sutil embaixo para não sumir no fundo
            borderBottomWidth: 1,
            borderBottomColor: colorScheme === 'dark' ? '#333' : '#eee',
          },
          
          // Cor do título e do ícone de menu (☰)
          headerTintColor: theme.text,
          
          headerShown: true,
          drawerType: 'front',
        }}
      >
          <Drawer.Screen
            name="(tabs)"
            options={{ 
              title: 'Wildex',
              drawerItemStyle: { display: 'none' } // 👈 esconde do menu
            }}
          />
          <Drawer.Screen
            name="Login"
            options={{ 
              drawerItemStyle: { display: 'none' } // 👈 esconde do menu
            }}
          />
      </Drawer>
    </GestureHandlerRootView>
  );
}