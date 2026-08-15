// 사진을 클릭하면 크게 볼 수 있도록 간단한 라이트박스를 추가할 수 있습니다.
// 현재는 기본 갤러리 형태로 구성되어 있습니다.

document.querySelectorAll(".gallery-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    const viewer = document.createElement("div");
    viewer.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,.9);
      display:grid; place-items:center; z-index:9999; padding:20px;
    `;
    const large = document.createElement("img");
    large.src = img.src;
    large.alt = img.alt;
    large.style.cssText = "max-width:100%;max-height:90vh;object-fit:contain;";
    viewer.appendChild(large);
    viewer.addEventListener("click", () => viewer.remove());
    document.body.appendChild(viewer);
  });
});
