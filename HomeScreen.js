import React, { useState } from 'react';
import { View, Text, Button, Picker, Image, TouchableOpacity } from 'react-native';
import { useMyContext } from './MyContext';
const products = [
    { id: 1, name: 'Produto 1', price: 10 },
    { id: 2, name: 'Produto 2', price: 15 },
    { id: 3, name: 'Produto 3', price: 20 },
    { id: 4, name: 'Produto 4', price: 25 },
    { id: 5, name: 'Produto 5', price: 50 },
];
const HomeScreen = ({ navigation }) => {
    const { addToCart, delToCart, cart } = useMyContext();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const getProductQuantity = (productId) => {
        const cartItem = cart.find((item) => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {products.map((product) => (
                <View key={product.id} style={{display:"flex" ,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginRight: 50, marginLeft:50 }}>
                    <View style={{ flex: 1 }}>
                        <Text>{product.name} - ${product.price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                addToCart({ ...product, quantity: selectedQuantity });
                            }}
                            style={{ padding: 10 }}
                        >
                            <Image
                                source={{ uri: 'https://www.clker.com/cliparts/s/7/R/k/j/Z/icon-add.svg.hi.png' }}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                delToCart({ ...product, quantity: selectedQuantity });
                            }}
                            style={{ padding: 10 }}
                        >
                            <Image
                                source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/subtract-circle-red-512.png' }}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 10 }}>Quantidade: {getProductQuantity(product.id)}</Text>
                    </View>
                </View>
            ))}
            <Button
                title="Visualizar Carrinho"
                onPress={() => {
                    navigation.navigate('Cart')
                }}
            />
        </View>
    );
};
export default HomeScreen;