let count = localStorage.getItem("page_view");
count = 1;
localStorage.setItem("page_view", 1);
count = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);

console.log(count)
