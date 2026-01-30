import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'usuario',
          drawerIcon: ({ color, size }) => <Ionicons name="person-circle-outline" color={color} size={size} />

        }}
      />
      <Drawer.Screen
        name="admin/index"
        options={{
          drawerLabel: 'Admin',
          title: 'admin',
          drawerIcon: ({ color, size }) => <Ionicons name="add-circle" color={color} size={size} />
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout