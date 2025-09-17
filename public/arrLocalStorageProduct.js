export const getCartProductLS = () => {
    let cartProducts = localStorage.getItem("productCartLS");
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    return cartProducts;
}