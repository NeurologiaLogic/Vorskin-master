const bestSeller = document.querySelector(".best_seller .container");
const latestProduct = document.querySelector(".latest_product .container");

const populate_product = (i, element) => {
  // console.log(`this is i: ${i}`);
  let outer_card = document.createElement("div");
  outer_card.className = "outer_card";
  outer_card.style.transition = "top 2.0s linear 0s";
  let best_seller = document.createElement("div");
  best_seller.className = "best_seller";
  let card = document.createElement("div");
  card.className = "card";
  let card_image = document.createElement("div");
  card_image.className = "card_image";
  let card_description = document.createElement("div");
  card_description.className = "card_description";
  let h3 = document.createElement("h3");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let price = document.createElement("h2");
  let initial_price = document.createElement("h2");
  price.className = "price";
  initial_price.className = "initial_price";
  let button = document.createElement("button");
  // outer_card.append(best_seller);
  outer_card.append(card);
  card.append(card_image, card_description, button);
  card_description.append(h3, h2, p, price, initial_price);
  h3.innerText = i["Brand"];
  h2.innerText = i["Product Name"];
  p.innerHTML = i["Short Desc"];
  card_image.style.backgroundImage = `url(${i["Img"]})`;
  console.log(i["Img"]);
  price.innerHTML = i["Final Price"];
  if (i["Initial Price"] != null) {
    console.log(i["Initial Price"]);
    initial_price.innerHTML = i["Initial Price"];
  }
  button.innerHTML = "Shop Now";
  if (element == "BS") {
    bestSeller.append(outer_card);
  } else if (element == "N") {
    latestProduct.append(outer_card);
  }
};

window.onload = () => {
  let p = new productsClass();
  p.getBy("BS");
  p.getBy("N");
  for (let i in p.bestSellerProducts) {
    console.log(p.bestSellerProducts[i]);
    populate_product(p.bestSellerProducts[i], "BS");
  }
  for (let i in p.newProducts) {
    console.log(p.newProducts[i]);
    populate_product(p.newProducts[i], "N");
  }
};

// let products = document.querySelectorAll(".products_container div");
// let p = new productsClass();
// products.forEach((elem) => {
//   elem.addEventListener("mouseenter", (e) => {
//     console.log("Hit")
//     // skin
//     if (e.target.className == "cleanser") {
//       let temp = p.FilteredSkinCategory("Cleanser");
//       // console.log(p.FilteredSkinCategory("Cleanser"));
//       let i = 0;
//       for(let j in temp){
//         setTimeout(() => {
//           // console.log(temp[0]["ImgFull"]);
//           e.target.style.backgroundImage = `url(${temp[i++]["ImgFull"]})`;
//         }, 500);
//       }
//     } else if (e.target.className == "essence") {
//       console.log(p.FilteredSkinCategory("Essence"));
//       skin = 1;
//     } else if (e.target.className == "serum") {
//       console.log(p.FilteredSkinCategory("Serum"));
//       skin = 1;
//     } else if (e.target.className == "mask") {
//       console.log(p.FilteredSkinCategory("Mask"));
//       skin = 1;
//     }

//     // body
//     else if (e.target.className == "wash") {
//       console.log(p.FilteredBodyCategory("Wash"));
//       body = 1;
//     } else if (e.target.className == "scrub") {
//       console.log(p.FilteredBodyCategory("Scrub"));
//       body = 1;
//     } else if (e.target.className == "butter") {
//       console.log(p.FilteredBodyCategory("Butter"));
//       body = 1;
//     } else if (e.target.className == "lotion") {
//       console.log(p.FilteredBodyCategory("Lotion"));
//       body = 1;
//     }
    // for (i in p.FilteredSkinCategory("Cleanser")) {
    // }
//   });
// });
