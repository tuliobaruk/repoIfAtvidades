import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useMyContext } from './MyContext';

const CartScreen = () => {
    const { cart, removeFromCart, clearCart, getTotalValue, addQuantity, minusQuantity } = useMyContext();
    console.log(cart);

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <View style={styles.itemDetails}>
                <Text style={styles.itemText}>{item.name} - R${item.price}</Text>
                <Text style={styles.quantityText}>Qtd: {item.quantity}</Text>
                <Text style={styles.quantityText}>Preço Total R$:{item.quantity * item.price}</Text>
            </View>
            <View style={styles.actionContainer}>
                
                <TouchableOpacity
                    onPress={() => addQuantity(item.id)}
                    style={styles.addButton}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4315/4315609.png' }}
                        style={styles.addIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => minusQuantity(item.id)}
                    style={styles.minusButton}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4436/4436695.png' }}
                        style={styles.removeIcon}
                    />
                </TouchableOpacity>
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
    minusButton: {
        padding: 5,
        backgroundColor: '#f8d7da',
        borderRadius: 50,
        marginLeft: 10,
    },
    removeButton: {
        padding: 5,
        borderRadius: 50,
        marginLeft: 25,
        marginTop: -50,
        marginRight: -10
    },
    addButton: {
        padding: 5,
        backgroundColor: '#d7f8da',
        borderRadius: 50,
        marginLeft: 10
    },
    removeIcon: {
        width: 20,
        height: 20,
    },
    addIcon: {
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
