import { View, Image, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from 'src/components/themed-text';
import { ThemedView } from 'src/components/themed-view';
import { Colors } from '@/../constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Link } from 'expo-router';

export function CustomDrawer (props: any) {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return(
        <View>
            {/* ===== TOPO: LOGO ===== */}
            <ThemedView style={styles.header}>
                <Image
                source={require('../../assets/images/wildexLogo.png')} // ajuste o path
                style={styles.logo}
                resizeMode="contain"
                />
            </ThemedView>

            {/* ===== ZONA LOGIN ===== */}
            <ThemedView style={[
                {backgroundColor: theme.background2}
            ]}>
                <Link href="/Login" asChild>
                    <Pressable style={styles.loginBox}>
                        <ThemedText style={styles.loginTitle}>Bem-vindo</ThemedText>
                        <ThemedText style={styles.loginSubtitle}>
                            Faça login para continuar
                        </ThemedText>
                    </Pressable>
                </Link>
            </ThemedView>

            {/* ===== OPÇÕES DO DRAWER ===== */}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.drawerScroll}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItemList {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    header: {
      flexDirection: 'row',
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
  
    logo: {
      width: 180,
      height: 100,
    },
  
    loginBox: {
      padding: 16,
    },
  
    loginTitle: {
      fontSize: 16,
      fontWeight: '600',
    },
  
    loginSubtitle: {
      fontSize: 13,
      opacity: 0.6,
      marginTop: 4,
    },
  
    drawerScroll: {
      paddingTop: 8,
    },
  });
  