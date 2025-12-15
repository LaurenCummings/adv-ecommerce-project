export const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = req.user;

        const existingItem = user.cartItems.find(item => item.id === productId);
    } catch (error) {

    }
};

export const removeAllFromCart = async (req, res) => {};

export const updateQuantity = async (req, res) => {};

export const getCartProducts = async (req, res) => {};