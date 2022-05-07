let burger = document.querySelector(".burger-navbar");
let navigation = document.querySelector(".toggle-navbar");
let navbar_overlay = document.querySelector(".navbar-overlay");
let active = 0;
burger.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("inactive");
    navigation.style.display = "block";
    navigation.style.transition = "transition: width 2s, height 2s, background-color 2s, transform 2s";
    navigation.style.left = 0;
    navbar_overlay.style.display = "block";
    active ^=1;
    });
    
navbar_overlay.addEventListener("click",(e)=>{
      e.preventDefault();
      // alert("clicked");
      navigation.style.display="none";
      navbar_overlay.style.display="none";

      active ^=1;
      // navigation.style.display = "none";
})
