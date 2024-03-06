function clickme() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}




// -----------------------------------scrubItems---
// const slider = document.querySelector(".scrubItems");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = x - startX;
//   slider.scrollLeft = scrollLeft - walk;
// });



// 인디게이터 없을때 유용













// let lip_lists = document.querySelector(".lip_lists");
// let lip_items = document.querySelectorAll(".lip_lists>li");
// let lip_list = 0;
// let lip_count = lip_items.length;

// let auto_lip = setInterval(function () {
//   // 요소 이동 애니메이션
//   lip_lists.style.transition = "margin-top 0.5s ease";
//   lip_lists.style.marginTop = "-380px";

//   // 첫 번째 요소를 맨 뒤로 이동
//   lip_lists.appendChild(lip_items[0].cloneNode(true));
//   lip_lists.removeChild(lip_items[0]);

//   // 애니메이션 완료 후 초기화
//   setTimeout(function () {
//     lip_lists.style.transition = "none";
//     lip_lists.style.marginTop = "0px";
//   }, 500);

//   // 요소 리스트 갱신
//   lip_items = document.querySelectorAll(".lip_lists>li");
// }, 3000);