// Redirect nos permite redirigir automáticamente a otra ruta
import { Redirect } from 'expo-router'

/**
 * App
 * ---
 * Pantalla raíz de la app (/)
 * No muestra UI, solo redirige
 */
const App = () => {

  /**
   * Redirigimos automáticamente al stack principal
   * 👉 (stack)/home
   *
   * Esto es similar a:
   * - Next.js: redirect('/home')
   * - React Router: <Navigate />
   */
  return <Redirect href="./(stack)/home"/>
}

export default App


/**
 * ============================
 * 🧠 CONCEPTOS CLAVE
 * ============================
 *
 * ✅ index.tsx = ruta raíz (/)
 * - Se ejecuta al abrir la app
 *
 * ✅ Redirect (Expo Router)
 * - Navegación declarativa
 * - No hay flashes de pantalla
 *
 * ✅ Grupos de rutas (stack)
 * - (stack) NO aparece en la URL
 * - Solo organiza navegación y layouts
 *
 * ✅ Flujo limpio de arranque
 * - SplashScreen → Fonts → Redirect → Home
 *
 * 📱 Resultado:
 * - Inicio claro
 * - Código simple
 * - Arquitectura escalable
 */
