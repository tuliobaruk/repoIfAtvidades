import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useMyContext } from './MyContext';

const CartScreen = () => {
    const { cart, removeFromCart, clearCart, getTotalValue, addToCart } = useMyContext();
    console.log(cart);

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <View style={styles.itemDetails}>
                <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
            </View>
            <View style={styles.actionContainer}>
                
                <Text style={styles.quantityText}>Quantidade: {item.quantity}</Text>
                <TouchableOpacity
                    onPress={() => removeFromCart(item.id)}
                    style={styles.removeButton}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' }}
                        style={styles.removeIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Carrinho de Compras</Text>
            {cart.length > 0 ? (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderCartItem}
                    />
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Valor Total: R${getTotalValue().toFixed(2)}</Text>
                    </View>
                    <Button
                        title="Finalizar Compra"
                        onPress={()=> console.log("Não fiz")}
                        color="green"
                    />
                    <Button
                        title="Limpar Carrinho"
                        onPress={() => clearCart()}
                        color="#d9534f"
                    />

                </>
            ) : (
                <Text style={styles.emptyCartText}>Não há items em seu carrinho de compras</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: 'black',
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    itemDetails: {
        flex: 1,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    removeButton: {
        padding: 5,
        backgroundColor: '#f8d7da',
        borderRadius: 50,
        marginLeft: 10
    },
    removeIcon: {
        width: 20,
        height: 20,
    },
    quantityText: {
        fontSize: 14,
        color: '#666',
    },
    emptyCartText: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
    },
    totalContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    }
});

export default CartScreen;
