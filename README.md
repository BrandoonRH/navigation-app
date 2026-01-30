# 📱 Mini App de Navegación con Expo Router y NativeWind

Este proyecto corresponde al **3er proyecto del curso _React Native con Expo_ de Fernando Herrera**.

En esta sección se construyó una mini aplicación enfocada en **navegación por rutas**, **estilos modernos con NativeWind** y una **estructura escalable**, muy similar a la experiencia de desarrollo con **Next.js + Tailwind CSS**, pero aplicada al mundo de **apps nativas**.

---

## 🎯 Objetivo del proyecto

El objetivo principal de este proyecto es dominar los fundamentos esenciales para cualquier aplicación móvil moderna:

- Navegación entre pantallas
- Uso de layouts
- Paso de parámetros entre rutas
- Estilos globales y reutilizables
- Temas y fuentes personalizadas
- Organización del proyecto basada en el file system

---

## 🧭 Tecnologías utilizadas

- **React Native**
- **Expo**
- **Expo Router**
- **NativeWind (Tailwind CSS para React Native)**
- **TypeScript**
- **React Native Safe Area Context**
- **Fuentes personalizadas (Work Sans)**

---

## 🗂️ Estructura del proyecto

```txt
app/
├── layout.tsx                # Layout raíz (fuentes, splash, global.css)
├── index.tsx                 # Redirección inicial
├── (stack)/
│   ├── _layout.tsx           # Stack Navigation
│   ├── home/
│   │   └── index.tsx         # Pantalla Home
│   ├── products/
│   │   ├── index.tsx         # Listado de productos
│   │   └── [id].tsx          # Detalle dinámico de producto
│   ├── profile/
│   │   └── index.tsx         # Perfil
│   └── settings/
│       └── index.tsx         # Ajustes
│
components/
├── shared/
│   └── CustomButton.tsx      # Botón reutilizable con NativeWind
│
constants/
├── theme.ts                  # Colores y tema
│
data/
├── products.store.ts         # Datos mock de productos
│
styles/
├── global.styles.ts          # Estilos globales (no NativeWind)
│
assets/
├── fonts/
│   └── WorkSans-*.ttf        # Fuentes personalizadas
│
global.css                    # Tailwind / NativeWind
tailwind.config.js
metro.config.js
babel.config.js


# 🧩 Funcionalidades principales

## 🧭 Navegación con Expo Router
- Navegación basada en file system
- Stack Navigation tipo “baraja de cartas”
- Rutas dinámicas (`[id].tsx`)
- Redirecciones automáticas
- Paso de parámetros entre pantallas

## 🎨 Estilos con NativeWind
- Uso de `className` como en Tailwind CSS
- Temas personalizados (primary, secondary, tertiary)
- Fuentes personalizadas integradas en Tailwind
- Botones reutilizables y variantes (contained, text-only)

## 🧱 Layouts
- Layout raíz para:
  - Splash Screen
  - Carga de fuentes
  - Estilos globales
- Layout específico para Stack Navigation

# 📦 Instalación y ejecución

## Instalar dependencias:
```bash
npm install
```

## Ejecutar la app

```bash
npx expo start
```

## Ejecutar en Android

- Emulador de Android Studio
- Dispositivo físico con Expo Go

## 🧠 Aprendizajes clave

- Expo Router funciona de forma muy similar a Next.js
- NativeWind ofrece una experiencia casi idéntica a Tailwind en web
- Separar layouts mejora la escalabilidad
- La navegación es uno de los pilares más importantes en apps móviles
- Una buena estructura de carpetas facilita el mantenimiento del proyecto

## 🚀 Conclusión

Este proyecto marca un punto clave en el curso, ya que sienta las bases para:

- Aplicaciones nativas reales
- Proyectos escalables
- Uso profesional de navegación y estilos
- Mayor confianza para desarrollar apps móviles en entornos laborales

---

**👨‍💻 Curso:** React Native con Expo  
**🎓 Instructor:** Fernando Herrera  
**📌 Proyecto:** 3 / Curso
