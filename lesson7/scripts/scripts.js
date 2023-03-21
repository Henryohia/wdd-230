let imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the intersectionalObserver
const imgOptions = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 1,
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// first check to see if intersection Observer is supported
if ("intersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);
  //loop thru each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  //just load All images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
