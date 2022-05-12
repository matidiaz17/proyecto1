const itemList = [
    { id: 1, categoria: "zapatillas", name: "", price: 25000, foto: "" },
    { id: 2, categoria: "remeras", name: "", price:   5000, foto: "" },
    { id: 3, categoria: "buzos", name: "", price: 20000, foto: "" },
  ];
  
  const getItem = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(itemList);
      }, 3000);
    } else {
      reject("400 - not found");
    }
  });
  
  export default getItem;