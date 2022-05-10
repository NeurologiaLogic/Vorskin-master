all_brands = [];
product_database_list = {
  "true to skin": {
    1: {
      // id:1,
      name: "hi",
      price: 10,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "true to skin",
    },
    2: {
      // id:2,
      name: "gh",
      price: 9,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "true to skin",
    },
    3: {
      // id:3,
      name: "fg",
      price: 8,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "true to skin",
    },
    4: {
      // id:4,
      name: "ef",
      price: 7,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "true to skin",
    },
    5: {
      // id:5,
      name: "da",
      price: 6,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "true to skin",
    },
  },
  lacoco: {
    6: {
      // id:6,
      name: "cb",
      price: 5,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "lacoco",
    },
  },
  "sensatia botanicals": {
    7: {
      // id:7,
      name: "ba",
      price: 4,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "sensatia botanicals",
    },
  },
  luna: {
    8: {
      // id:8,
      name: "ab",
      price: 3,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "luna",
    },
    9: {
      // id:9,
      name: "aa",
      price: 2,
      img: "../assets/ProductPage/serum_card.svg",
      discount: "10%",
      args: "",
      brand: "luna",
    },
  },
};

// const add_and_sort = () => {
// for (k in product_database_list) {
//   for (v in product_database_list[k]) {
//     product_database_list[k][v].brand = k;
//     all_brands.push(product_database_list[k][v]);
//   }
// }
// console.log("from db");
// console.log(all_brands);
// console.log("sortedZToA");
const sortedZToA = () => {
  console.log(sortedZToA);
  // console.log(all_brands);
  // all_brands.sort((a, b) => {
  //   return a.name < b.name ? 1 : -1;
  // });
  for (let i = 0; i < all_brands.length; i++) {
    for (let j = 0; j < all_brands.length;j++){
      if (all_brands[i].name < all_brands[j].name) {
        let temp = all_brands[i];
        all_brands[i] = all_brands[j];
        all_brands[j] = temp;
      }
    }
  }
  console.log(all_brands);
};
// console.log(sortedZToA);

// console.log("sortedAToZ");
const sortedAToZ = () => {
  console.log("sortedAToZ");
  // console.log(all_brands);
  for (let i = 0; i < all_brands.length; i++) {
    for (let j = 0; j < all_brands.length;j++){
      if (all_brands[i].name > all_brands[j].name) {
        let temp = all_brands[i];
        all_brands[i] = all_brands[j];
        all_brands[j] = temp;
      }
    }
  }
  // all_brands
  //   .sort((a, b) => {
  //     return a.name < b.name ? 1 : -1;
  //   })
  //   .reverse();
  console.log(all_brands);
};

const sortedByPriceAscending = () => {
  // console.log(all_brands);
  console.log("sortedByPriceAscending");
  for (let i = 0; i < all_brands.length; i++) {
    for (let j = 0; j < all_brands.length;j++){
      if (all_brands[i].price < all_brands[j].price) {
        let temp = all_brands[i];
        all_brands[i] = all_brands[j];
        all_brands[j] = temp;
      }
    }
  }
  // all_brands.sort((a, b) => {
  //   return a.price - b.price;
  // });
  console.log(all_brands);
};

const sortedByPriceDescending = () => {
  // console.log(all_brands);
  console.log("sortedByPriceDescending");
  for (let i = 0; i < all_brands.length; i++) {
    for (let j = 0; j < all_brands.length;j++){
      if (all_brands[i].price > all_brands[j].price) {
        let temp = all_brands[i];
        all_brands[i] = all_brands[j];
        all_brands[j] = temp;
      }
    }
  }
  // all_brands.sort((a, b) => {
  //   return b.price - a.price;
  // });
  console.log(all_brands);
};
