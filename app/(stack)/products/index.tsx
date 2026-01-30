import { products } from '@/data/products.store';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

const ProductsScreen = () => {
  return (
    // Contenedor principal con padding horizontal
    <View className="flex flex-1 px-4">

      {/* FlatList renderiza listas grandes de forma eficiente */}
      <FlatList
        data={products} // Fuente de datos
        keyExtractor={(item) => item.id} // Key única por elemento

        renderItem={({ item }) => (
          <View className="mt-10">

            {/* Título del producto */}
            <Text className="text-2xl font-work-black">
              {item.title}
            </Text>

            {/* Descripción */}
            <Text>
              {item.description}
            </Text>

            {/* Precio y navegación */}
            <View className="flex flex-row justify-between mt-2">

              <Text className="font-work-black">
                {item.price}
              </Text>

              {/* 
                Navegación declarativa
                Redirige a /products/[id]
              */}
              <Link
                href={`./products/${item.id}`}
                className="text-primary"
              >
                Ver detalles
              </Link>

            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

/*
==================================================
🧠 NOTAS IMPORTANTES

• FlatList es preferible a map() para listas largas
• Link funciona igual que <Link /> en Next.js
• El path se resuelve por el file system:
  ./products/1 → products/[id].tsx
• NativeWind permite usar clases tipo Tailwind
==================================================
*/
