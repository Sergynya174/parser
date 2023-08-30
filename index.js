const title = document.querySelectorAll(".title");
const button = document.querySelector(".next-page");

const arr = localStorage.getItem("arr");
const newArr = JSON.parse(arr) || [];

title.forEach((item) => {
  let domainPattern =
    /(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]+)/g;
  let res = item.innerText.match(domainPattern);
  if (res) {
    newArr.push(res[0]);
  }
  localStorage.setItem("arr", JSON.stringify(newArr));
});

window.location.href = button.href;
