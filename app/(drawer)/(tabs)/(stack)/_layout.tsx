// Stack es el navegador tipo "baraja de cartas" 📚
// Cada pantalla se apila sobre la anterior
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';

/**
 * StackLayout
 * -----------
 * Layout del grupo (stack)
 * Define cómo se comporta la navegación entre pantallas
 * dentro de la carpeta (stack)
 */
const StackLayout = () => {


  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      //TODO DA ERROR  ERROR  The action 'POP' with payload {"count":1} was not handled by any navigator. Is there any screen to go back to? This is a development-only warning and won't be shown in production.

      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer)
  }
  return (
    <Stack
      /**
       * screenOptions
       * -------------
       * Opciones globales para TODAS las pantallas del stack
       */
      screenOptions={{
        // Si se descomenta, oculta el header en todas las pantallas
        /* headerShown: false, */

        // Animación por defecto al navegark
        animation: 'slide_from_bottom',

        // Elimina la sombra del header (estilo más limpio)
        headerShadowVisible: false,

        // Estilo del contenido de las pantallas
        contentStyle: {
          backgroundColor: 'white',
        },
        headerLeft: ({ tintColor, canGoBack }) => <Ionicons onPress={() => onHeaderLeftClick(canGoBack as boolean)} name={canGoBack ? 'chevron-back-circle-outline' : 'grid-outline'} className='mr-5' size={20} />
      }}
    >

      {/* =========================
          🏠 HOME
         ========================= */}
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Inicio', // Título del header
        }}
      />

      {/* =========================
          📦 PRODUCTS
         ========================= */}
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos',

          // Animación específica solo para esta pantalla
          animation: 'ios_from_right',
        }}
      />

      {/* =========================
          👤 PROFILE
         ========================= */}
      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
        }}
      />

      {/* =========================
          ⚙️ SETTINGS
         ========================= */}
      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Ajustes Pantalla',
        }}
      />
      {
      /* 📄 Stack.Screen vs File System
        Aunque el file system ya crea las rutas, <Stack.Screen /> sirve para:
        Cambiar títulos
        Cambiar animaciones
        Ocultar headers
        Ajustes específicos por pantalla 
      */}
    </Stack>
  );
};

export default StackLayout;


/**
 * ============================
 * 🧠 CONCEPTOS CLAVE
 * ============================
 *
 * ✅ Stack Navigation
 * - Navegación tipo "historial"
 * - Ideal para flujos: Home → Detalle → Perfil
 *
 * ✅ (stack) como grupo de rutas
 * - No aparece en la URL
 * - Solo organiza navegación y layouts
 *
 * ✅ screenOptions
 * - Configuración global del stack
 * - Evita repetir código
 *
 * ✅ Stack.Screen
 * - Cada pantalla corresponde a un archivo físico
 * - name="home/index" → app/(stack)/home/index.tsx
 *
 * ✅ Animaciones
 * - animation global y por pantalla
 * - UX nativa (iOS / Android)
 *
 * ✅ Header personalizable
 * - title
 * - shadow
 * - visibilidad
 *
 * 📱 Resultado:
 * - Navegación clara
 * - Código ordenado
 * - Experiencia nativa real
 *
 * 💡 Similar a:
 * - Next.js Layouts
 * - React Navigation Stack
 */
