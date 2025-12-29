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
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === productObject.name.toLowerCase()) {
      inventory[i].quantity += productObject.quantity;
      console.log(`${productObject.name.toLowerCase()} quantity updated`);
      return;
    }
  }
  inventory.push({
    name: productObject.name.toLowerCase(),
    quantity: productObject.quantity,
  });
  console.log(`${productObject.name.toLowerCase()} added to inventory`);
};

const removeProduct = (productName, quantity) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === productName.toLowerCase()) {
      const subtraction = inventory[i].quantity - productQuantity;
      if (subtraction > 0) {
        inventory[i].quantity = subtraction;
        console.log(
          `Remaining ${productName.toLowerCase()} pieces: ${subtraction}`
        );
        return;
      } 
    }
  }
  console.log(`${productName.toLowerCase()} not found`);
};
