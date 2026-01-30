// Slot nos permite renderizar la ruta hija activa (como <Outlet /> en web)
// SplashScreen controla manualmente la pantalla de carga inicial
import { Slot, SplashScreen } from 'expo-router';

// Importamos los estilos globales (NativeWind / CSS global)
import "./global.css";

// Evitamos que Expo oculte automáticamente el splash screen
// 👉 Lo controlaremos manualmente cuando las fuentes estén listas
SplashScreen.preventAutoHideAsync();

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * RootLayout
 * ----------
 * Layout raíz de TODA la aplicación.
 * Se renderiza antes que cualquier pantalla.
 */
const RooLayout = () => {

  /**
   * Carga de fuentes personalizadas
   * -------------------------------
   * useFonts devuelve:
   * - fontsLoaded → true cuando ya están listas
   * - error → error si alguna fuente falla
   */
  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  });

  /**
   * useEffect para controlar el SplashScreen
   */
  useEffect(() => {
    // Si hubo error cargando fuentes, lo lanzamos
    if (error) throw error;

    // Cuando las fuentes ya están cargadas
    // ocultamos manualmente el splash screen
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  /**
   * Mientras las fuentes NO estén listas
   * no renderizamos nada
   * 👉 Evita parpadeos y cambios de tipografía
   */
  if (!fontsLoaded && !error) return null;

  /**
   * Slot renderiza la ruta activa
   * Ej: home, profile, products, etc.
   */
  return (
     <SafeAreaProvider>

       <Slot />
     </SafeAreaProvider>
    )

  // Alternativa (comentada):
  // return <Stack />
}

export default RooLayout


/**
 * ============================
 * 🧠 CONCEPTOS CLAVE
 * ============================
 *
 * ✅ Layout raíz (app/_layout.tsx)
 * - Es el punto de entrada visual de la app
 * - Se ejecuta antes que cualquier pantalla
 *
 * ✅ Slot (Expo Router)
 * - Similar a <Outlet /> en React Router / Next.js
 * - Renderiza la ruta hija activa
 *
 * ✅ SplashScreen manual
 * - preventAutoHideAsync() evita que se oculte solo
 * - hideAsync() se ejecuta cuando TODO está listo
 *
 * ✅ Fuentes personalizadas
 * - Cargarlas antes evita layout shift
 * - UX mucho más profesional
 *
 * ✅ Control de errores
 * - Si una fuente falla, se lanza el error
 *
 * 📱 Resultado:
 * - App consistente desde el primer frame
 * - Tipografías correctas
 * - Experiencia nativa pulida
 */
