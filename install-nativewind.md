```markdown
# 🚀 Instalación de NativeWind en Expo (React Native)

NativeWind es una implementación de **Tailwind CSS para React Native**, que permite usar clases utilitarias (`className`) para estilizar componentes de forma rápida, consistente y escalable.

Este instructivo está basado en la instalación oficial con **Expo**.

---

## 📦 1. Instalación de dependencias

Ejecuta los siguientes comandos en la raíz de tu proyecto Expo:

```bash
npx expo install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
```

Instalamos NativeWind junto con dependencias necesarias para animaciones y manejo de safe areas.

Luego instala Tailwind CSS y el plugin de Prettier (solo para desarrollo):

```bash
npx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

---

## 🎨 2. Configuración de Tailwind CSS

Inicializa el archivo de configuración de Tailwind:

```bash
npx tailwindcss init
```

Esto creará el archivo `tailwind.config.js`.

### ✏️ Edita `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Rutas donde NativeWind buscará clases
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#49129C",
        secondary: {
          DEFAULT: "#B40086",
          100: "#C51297",
          200: "#831266",
        },
        tertiary: "#EF2967",
      },
      fontFamily: {
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

Aquí puedes definir:

* Colores personalizados
* Fuentes personalizadas
* Temas globales reutilizables

---

## 🌍 3. Crear el archivo global de estilos

Crea un archivo llamado:

```txt
global.css
```

Agrega las directivas de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Este archivo será el punto de entrada de Tailwind en la aplicación.

---

## 🔧 4. Configuración de Babel

Edita el archivo `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

Esto permite que NativeWind procese correctamente el atributo `className` en React Native.

---

## 🚇 5. Configurar Metro Bundler

Crea (o edita) el archivo `metro.config.js` en la raíz del proyecto:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: "./global.css",
});
```

Esto conecta Tailwind con el bundler Metro de Expo.

---

## 📥 6. Importar el CSS global

Importa el archivo `global.css` **una sola vez** en el layout raíz o en `App.tsx`.

Ejemplo con Expo Router:

```ts
import "./global.css";
```

---

## ⚙️ 7. Modificar `app.json`

Asegúrate de usar **Metro** como bundler en web:

```json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

---

## 🧠 8. Configuración de TypeScript (opcional pero recomendada)

Si usas TypeScript, crea el archivo:

```txt
nativewind-env.d.ts
```

Agrega lo siguiente:

```ts
/// <reference types="nativewind/types" />
```

### ⚠️ Advertencias importantes

No nombres este archivo como:

* `nativewind.d.ts`
* `app.d.ts` si existe una carpeta `/app`
* `react.d.ts`

Esto puede provocar que TypeScript no cargue los tipos correctamente.

---

## ✅ 9. Probar la instalación

Ejemplo simple para verificar que NativeWind funciona:

```tsx
import "./global.css";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        ¡Bienvenido a NativeWind!
      </Text>
    </View>
  );
}
```

Si los estilos se aplican correctamente, 🎉 **NativeWind está configurado con éxito**.

---

## 🏁 Conclusión

NativeWind permite:

* Usar Tailwind CSS en React Native
* Centralizar colores, fuentes y temas
* Escribir estilos de forma rápida y legible
* Tener una experiencia muy similar a Next.js + Tailwind

Ideal para aplicaciones modernas y escalables 🚀

```
