Excelente cierre de sección 👏🔥
Se nota cañón que ya **hiciste el click mental tipo Next.js**.

Como lo hemos venido haciendo, te dejo **la explicación completa en Markdown**, con **comentarios claros dentro del código**, bien formateado y con uno que otro emoji 😄
Ideal para **apuntes, repo o repaso**.

---

# 📦 Products Stack – Rutas dinámicas con Expo Router + NativeWind

En esta parte implementamos:

* 📄 **Listado de productos**
* 🔗 **Navegación por ID**
* 🧭 **Rutas dinámicas tipo `[id].tsx`**
* 🎨 **Estilos con NativeWind**
* 🚨 **Manejo de rutas inválidas**

---

## 📁 Estructura de archivos

```txt
app/
 └─ (stack)/
    └─ products/
       ├─ index.tsx     // Lista de productos
       └─ [id].tsx      // Detalle del producto (ruta dinámica)
```

Esto funciona **igual que Next.js App Router**:

* `index.tsx` → `/products`
* `[id].tsx` → `/products/123`

---

## 🛒 `/products/index.tsx`

### Pantalla de listado de productos

```tsx
import { products } from '@/data/products.store';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      {/* FlatList es ideal para listas largas y optimizadas 🚀 */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
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

            {/* Precio + link a detalles */}
            <View className="flex flex-row justify-between mt-2">
              
              <Text className="font-work-black">
                {item.price}
              </Text>

              {/* 
                Link genera navegación declarativa 📎
                ./products/${item.id} → products/[id].tsx
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
```

### 🧠 Puntos clave

* `FlatList` = performance 🔥
* `Link` funciona como `<Link />` de Next.js
* El `href` se resuelve por **file system routing**
* NativeWind aplica estilos con `className`

---

## 📄 `/products/[id].tsx`

### Pantalla de detalle (ruta dinámica)

```tsx
import { products } from '@/data/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductScreen = () => {

  // 👇 Obtiene los params desde la URL (ej: /products/2)
  const { id } = useLocalSearchParams();

  // 🔍 Buscamos el producto según el id recibido
  const product = products.find((p) => p.id == id);

  // 🚨 Si no existe el producto, redirigimos
  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">

      <Text className="font-work-black text-2xl">
        {product.title}
      </Text>

      <Text>
        {product.description}
      </Text>

      <Text className="font-work-black">
        {product.price}
      </Text>

    </View>
  );
};

export default ProductScreen;
```

---

## 🧭 ¿Qué está pasando aquí?

### 🔹 `useLocalSearchParams()`

Funciona como:

```ts
// Next.js
useParams()

// React Router
useParams()
```

Recupera:

```ts
/products/123 → { id: '123' }
```

---

### 🔹 `Redirect`

Equivalente a:

```tsx
<Navigate to="/" replace />
```

Perfecto para:

* IDs inválidos
* Protección de rutas
* Fallbacks

---

## 🧠 Conclusión (nivel PRO 🚀)

✔ Routing por file system
✔ Rutas dinámicas `[id].tsx`
✔ Navegación declarativa con `Link`
✔ Navegación imperativa con `router.push`
✔ NativeWind como Tailwind real
✔ Flujo mental **idéntico a Next.js**
