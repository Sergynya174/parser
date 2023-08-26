const title = document.querySelectorAll(".title");
const button = document.querySelector(".next-page");

const arr = [];

title.forEach((item) => {
  const domainPattern =
    /(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]+)/g;
  if (item.innerText.match(domainPattern)) {
    arr.push(item.innerText.match(domainPattern));
  }

  localStorage.setItem("arr", JSON.stringify(arr));
  window.location.href = button.href;
  let newArr = localStorage.getItem("arr");
  JSON.parse(newArr).push(item.innerText.match(domainPattern));
});

console.log(arr);
