function imageSelect() {
  const dropdownName = document.getElementById("dropdown").value;
  const images = document.getElementById("images");
  images.src = "./Assest/" + dropdownName + ".jpg";
  images.alt = dropdownName;
}




