import { products } from '@/data/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {

  // Obtiene los parámetros de la ruta (ej: /products/2)
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  // Busca el producto por id
  const product = products.find((p) => p.id == id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Producto',
    });
  }, [product]);

  // Si no existe el producto, redirige al inicio
  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">

      {/* Título */}
      <Text className="font-work-black text-2xl">
        {product.title}
      </Text>

      {/* Descripción */}
      <Text>
        {product.description}
      </Text>

      {/* Precio */}
      <Text className="font-work-black">
        {product.price}
      </Text>

    </View>
  );
};

export default ProductScreen;

/*
==================================================
🧠 NOTAS IMPORTANTES

• [id].tsx define una ruta dinámica
• useLocalSearchParams funciona como useParams()
• Los params siempre llegan como string
• Redirect evita pantallas rotas o rutas inválidas
• Patrón muy usado para validaciones y guards
==================================================
*/
