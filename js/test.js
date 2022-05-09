prod = {
  skin: ["cleanser", "serum", "essence", "oil", "mask"],
  body: ["butter", "wash", "scrub", "lotion"],
};

prodSensation = {};
//alphabetically A-Z | Z-A
for (keys in prod) {
  const ascending = prod[keys].sort();
  console.log(ascending);
  console.log(ascending.reverse());
  console.log("\n\n");
}

index_active = -1;

arrs = [];

arrs.push("hello");
arrs.push("hi");
arrs.push("skin");

for (keys in arrs) {
  container = [];
  if (arrs[keys] in prod) {
    console.log(prod[arrs[keys]]);
  }
  console.log(keys);
}
