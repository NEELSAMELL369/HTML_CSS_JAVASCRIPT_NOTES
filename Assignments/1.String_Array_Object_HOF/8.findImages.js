const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg"
];

const findImages = (arr) => {
    return arr.filter(file => file.endsWith('.png') || file.endsWith('.jpg'));
};

console.log(findImages(filePaths));
// Output: [
//   "/images/pic1.jpg",
//   "/images/pic2.png",
//   "/assets/img/background.jpg",
//   "/assets/img/logo.png",
//   "/downloads/image.png",
//   "/downloads/image.jpg"
// ]
 