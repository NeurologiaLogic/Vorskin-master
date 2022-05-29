cleanser = [];
essence = [];
serum = [];
mask = [];
wash = [];
scrub = [];
butter = [];
lotion = [];
let products_container = querySelectorAll(".products_container");
const populate_product = (i, element) => {
  // console.log(`this is i: ${i}`);
  let outer_card = document.createElement("div");
  outer_card.className = "outer_card";
  outer_card.style.transition = "top 2.0s linear 0s";
  let args = document.createElement("div");
  args.className = "args";
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
  //addons
  let container = document.createElement("div");
  container.className = "container";
  let left = document.createElement("div");
  left.className = "left";
  let header = document.createElement("div");
  header.className = "header";
  // outer_card.append(best_seller);
  outer_card.append(args, card);
  card.append(card_image, card_description, button);
  card_description.append(h3, h2, p, price, initial_price);
  h3.innerText = i["Brand"];
  h2.innerText = i["Product Name"];
  p.innerHTML = i["Short Desc"];
  card_image.style.backgroundImage = `url(${i["Img"]})`;
  console.log(i["Img"]);
  price.innerHTML = i["Final Price"];
  args.innerHTML = i["Note (Pop -out circle)"] == "BS" ? "Best Seller" : "New";
  if (i["Initial Price"] != null) {
    console.log(i["Initial Price"]);
    initial_price.innerHTML = i["Initial Price"];
  }
  button.innerHTML = "Shop Now";
};

//generate the cards for best seller and new seller
window.onload = () => {
  let p = new productsClass();
  let cards_button = document.querySelectorAll(".products_container");
  cards_button.forEach((e) => {
    e.addEventListener("click", (elem) => {
      //get the the parent outer card and get the child title

      //title of the card
      let title = elem.target.parentElement.children[1].children[1];
      title.style.border = "none";
      localStorage.setItem("product_title", title.innerText);
      console.log(localStorage.getItem("product_title"));
      window.location.href = "../html/ViewProductPage.html";
    });
  });
};
