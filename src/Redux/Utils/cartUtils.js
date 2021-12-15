export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === itemToAdd
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
export const setItemToCart = (cartItems, itemToAdd, quantity) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === itemToAdd
        ? { ...cartItem, quantity: quantity }
        : cartItem;
    });
  }

  return [...cartItems, { ...itemToAdd, quantity }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove);
  }

  return cartItems.map(cartItem => {
    return cartItem.id === itemToRemove
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

export const getTotals = cartItems => {
  let { total, quantity } = cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;

      const itemTotal = price * quantity;
      cartTotal.total += itemTotal;
      cartTotal.quantity += quantity;
      return cartTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );
  total = parseFloat(total.toFixed(2));
  return { total, quantity };
};
