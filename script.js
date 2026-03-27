console.log("منصة شعاع المعرفة تعمل");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("تم فتح المقال");
  });
});
