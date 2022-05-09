let productList = document.querySelector(".product-list");
prod = {
  skin: ["cleanser", "serum", "essence", "oil", "mask"],
  body: ["butter", "wash", "scrub", "lotion"],
};
for (keys in prod) {
  console.log(keys);
  div = document.createElement("div");
  div.innerHTML = keys;
  div.style.color = "white";
  div.style.margin = "1rem 0px 1rem 0px";
  div.appendChild(document.createElement("br"));
  for (i in prod[keys]) {
    console.log(prod[keys][i]);
    a = document.createElement("a");
    a.innerHTML = prod[keys][i];
    a.href = "#";
    a.style.padding = "1rem 0 0 1rem";
    a.style.margin = "1rem 0px 1rem 0px";
    div.appendChild(a);
    div.appendChild(document.createElement("br"));
  }
  productList.appendChild(div);
}

let liCheckBox = document.querySelectorAll(".brand_select_section>ul>li");
let checkbox = document.querySelectorAll(
  ".brand_select_section>ul>li>label>input"
);

liCheckBox.forEach((elem) => {
  elem.addEventListener("click", (e) => {
   //  e.preventDefault();
    if (elem.children[0].children[0].checked) {
      elem.style.backgroundColor = "red";
   } else {
      elem.style.color = "#dff1e3";
      elem.style.backgroundColor = "#dff1e3";
    }
  });
});

// liCheckBox.addEventListener("click", function () {
//   if (checkbox.checked) {
//     liCheckBox.style.backgroundColor = "red";
//   } else {
//     liCheckBox.style.color = "#dff1e3";
//     liCheckBox.style.backgroundColor = "#dff1e3";
//   }
// });

// liCheckBox.forEach(elem=>{
//    elem.addEventListener("click", (e) => {
//       e.preventDefault();
//       for (i = 0; i < liCheckBox.length; i++) {
//          console.log(checkbox[i].checked==1);
//          if (checkbox[i].checked == 1) {
//             liCheckBox[i].style.color = "red";
//             liCheckBox[i].style.backgroundColor = "red";
//          } else {
//             liCheckBox[i].style.color = "#dff1e3";
//             liCheckBox[i].style.backgroundColor = "#dff1e3";
//          }
//       }
//       });
// })
