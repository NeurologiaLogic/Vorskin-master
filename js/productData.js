const skincare_face = {
  1: {
    name: "SKIN CARE",
    image: "images/skincare_face/skincare_face_1.jpg",
    price: 100,
  },
  2: {
    name: "SKIN CARE",
    image: "images/skincare_face/skincare_face_2.jpg",
    price: 100,
  },
};

for (const key in skincare_face) {
  console.log(skincare_face[key].name);
}
