import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

// 🧩 Props personalizadas + PressableProps
interface Props extends PressableProps {
    children: string;

    // 🎨 Colores soportados
    color?: 'primary' | 'secondary' | 'tertiary';

    // 🎭 Variantes del botón
    variant?: 'contained' | 'text-only';

    className?: string;
}

// 🔁 forwardRef permite usar refs externas (útil para animaciones o focus)
const CustomButton = React.forwardRef(
(
    {
        children,
        color = 'primary',
        onPress,
        onLongPress,
        variant = 'contained',
        className,
    }: Props,
    ref: React.Ref<View>
) => {

    // 🎨 Clases dinámicas según el color
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color];

    // 📝 Variante tipo link (solo texto)
    if (variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text
                    className={`text-center ${textColor} font-work-medium`}
                >
                    {children}
                </Text>
            </Pressable>
        );
    }

    // 🔘 Variante normal (botón contenido)
    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
            ref={ref}
        >
            <Text className="text-white text-center font-work-medium">
                {children}
            </Text>
        </Pressable>
    );
});

export default CustomButton;
