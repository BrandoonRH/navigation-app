import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

// 🏠 Pantalla principal de la app
const HomeScreen = () => {
    return (
        // 🛟 SafeAreaView evita que el contenido choque
        // con notch, status bar o barras del sistema
            <View>
                {/* 📝 Título principal */}
                <Text className='text-center text-2xl b-2 text-primary'>
                    HomeScreen
                </Text>

                {/* 🔘 Navegación imperativa usando router.push */}
                <CustomButton
                    className="mb-2"
                    color="primary"
                    onPress={() => router.push('/products')}
                >
                    Productos
                </CustomButton>

                {/* 👉 Rutas relativas funcionan igual que en Next.js */}
                <CustomButton
                    onPress={() => router.push('./profile')}
                    className="mb-2"
                    color="secondary"
                >
                    Profile
                </CustomButton>

                <CustomButton
                    onPress={() => router.push('./settings')}
                    className="mb-2"
                    color="tertiary"
                >
                    Ajustes
                </CustomButton>

                {/* 🔗 Navegación declarativa usando <Link /> */}
                {/* asChild permite que el botón maneje el press */}
                <Link href="/products" asChild>
                    <CustomButton
                        variant="text-only"
                        className="mb-10"
                        color="primary"
                    >
                        Productos
                    </CustomButton>
                </Link>

                {/* 
                  Alternativa simple usando Link directo
                  (comentado porque ya usas CustomButton)
                */}
                {/*
                <Link className='mb-5' href="./products">Productos</Link>
                <Link className='mb-5' href="./profile">Profile</Link>
                <Link className='mb-5' href="./settings">Ajustes</Link>
                */}
            </View>
    )
}

export default HomeScreen

/* | Método          | Tipo        | Uso                                     |
| --------------- | ----------- | --------------------------------------- |
| `router.push()` | Imperativa  | Ideal para lógica, botones, condiciones |
| `<Link />`      | Declarativa | Más estilo web / Next.js                |
 */