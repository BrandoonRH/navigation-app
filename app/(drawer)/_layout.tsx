// 📦 Drawer principal de la app usando Expo Router
// Aquí integramos Drawer + Tabs + Stack en una sola navegación

import CustomDrawer from '@/components/shared/CustomDrawer'; // 🎨 Drawer personalizado
import { Ionicons } from '@expo/vector-icons'; // 🧩 Iconos
import { Drawer } from 'expo-router/drawer'; // 🚪 Drawer de Expo Router
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer
      // 🧠 Contenido personalizado del Drawer (avatar, botones, etc.)
      drawerContent={CustomDrawer}

      // ⚙️ Configuración global del Drawer
      screenOptions={{
        /* headerShown: false, */ // ❌ Opcional: ocultar header si se desea
        overlayColor: 'rgba(0,0,0,0.4)', // 🌑 Fondo oscuro al abrir Drawer
        drawerActiveTintColor: 'indigo', // 🎯 Color del item activo
        headerShadowVisible: false,      // ❌ Quita sombra del header
        sceneStyle: {
          backgroundColor: 'white'       // 🎨 Fondo de las pantallas
        }
      }}
    >
      {/* 🧭 Tabs + Stack (navegación principal de la app) */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="rocket-outline"
              color={color}
              size={size}
            />
          )
        }}
      />

      {/* 👤 Pantalla de usuario */}
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'Usuario',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="person-circle-outline"
              color={color}
              size={size}
            />
          )
        }}
      />

      {/* 🛠️ Pantalla de administrador */}
      <Drawer.Screen
        name="admin/index"
        options={{
          drawerLabel: 'Admin',
          title: 'Admin',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="add-circle"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;

/* =====================================================
🧠 ¿QUÉ ES EL DRAWER EN EXPO ROUTER?
-------------------------------------------------------
El Drawer es un menú lateral (tipo hamburguesa 🍔)
que permite navegar entre secciones principales
de la aplicación.

En Expo Router:
- Se basa en el sistema de archivos 📁
- Cada Drawer.Screen apunta a una carpeta o archivo
- Puede convivir con Tabs y Stack sin problema
- Es ideal para:
  • Menús principales
  • Secciones grandes (Admin, User, Settings)
  • Navegación global de la app

Jerarquía típica:
Drawer
 └── Tabs
      └── Stack
           └── Screens

👉 Resultado: navegación clara, escalable y profesional
===================================================== */
