const generatePassword = (lengthOfParameter) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < lengthOfParameter; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
};

const password = generatePassword(8);
console.log(`Generated password: ${password}`);
