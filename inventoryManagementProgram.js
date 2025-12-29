const inventory = [];

const findProductIndex = (productName) => {
  const lowerCased = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === lowerCased) {
      return i;
    }
  }
  return -1;
};

const addProduct = (productObject) => {
  for (let i = 0; i < inventory.length; i++) {}
};

const removeProduct = (productName, quantity) => {};
