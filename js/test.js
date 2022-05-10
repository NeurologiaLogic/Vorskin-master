prod = {
  skin: ["cleanser", "serum", "essence", "oil", "mask"],
  body: ["butter", "wash", "scrub", "lotion"],
};
all_brands = [];
product_database_list = {
  "true to skin": {
    1: {
      name: "hi",
      price: 10,
      img: "../assets/ProductPage/serum_card.svg",
    },
    2: {
      name: "gh",
      price: 9,
      img: "../assets/ProductPage/serum_card.svg",
    },
    3: {
      name: "fg",
      price: 8,
      img: "../assets/ProductPage/serum_card.svg",
    },
    4: {
      name: "ef",
      price: 7,
      img: "../assets/ProductPage/serum_card.svg",
    },
    5: {
      name: "da",
      price: 6,
      img: "../assets/ProductPage/serum_card.svg",
    },
  },
  "lacoco": {
    6: {
      name: "cb",
      price: 5,
      img: "../assets/ProductPage/serum_card.svg",
    },
  },
  "sensatia botanicals": {
    7: {
      name: "ba",
      price: 4,
      img: "../assets/ProductPage/serum_card.svg",
    },
  },
  luna: {
    8: {
      name: "ab",
      price: 3,
      img: "../assets/ProductPage/serum_card.svg",
    },
    9: {
      name: "aa",
      price: 2,
      img: "../assets/ProductPage/serum_card.svg",
    },
  },
};

//alphabetically A-Z | Z-A
for (keys in prod) {
  const ascending = prod[keys].sort();
  console.log(ascending);
  console.log(ascending.reverse());
  console.log("\n\n");
}

const add_and_sort = () => {
  for (k in product_database_list) {
    for (v in product_database_list[k]) {
      all_brands.push(product_database_list[k][v]);
    }
  }
  // console.log(all_brands);
  // console.log("sortedZToA");
  const sortedZToA = all_brands.sort((a, b) => {
    a.name < b.name ? 1 : -1;
  });
  // console.log(sortedZToA);

  // console.log("sortedAToZ");
  const sortedAToZ = sortedZToA.reverse();
  console.log(sortedAToZ);

  const sortedByPriceAscending = sortedAtoZ.sort((a, b) => {
    return a.price - b.price;
  });
  // console.log(sortedByPriceAscending);

  const sortedByPriceDescending = sortedAtoZ.sort((a, b) => {
    return b.price - a.price;
  });
  // console.log(sortedByPriceDescending);
};
add_and_sort();
