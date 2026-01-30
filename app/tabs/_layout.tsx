import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home/index.tsx"
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index.tsx"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-circle" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout