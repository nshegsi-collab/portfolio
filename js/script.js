const works = document.querySelectorAll(".vid img");
const closeBtn = document.querySelector("#modal span")
const modal = document.querySelector("#modal");


works.forEach(el => el.addEventListener("click", () => {
  const src = el.dataset.src;
  //console.log(src)
  const iframe = modal.querySelector("iframe");
  iframe.src = `${src}${src.includes("?") ? "&" : "?"}autoplay=1`;
  modal.style.display = "block";
}))

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  const iframe = modal.querySelector("iframe");
  if(iframe){
    iframe.src = "";
  }
  const img = modal.querySelector("img")
  if(img){
    img.src = "";
  }
})

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
    const iframe = modal.querySelector("iframe");
    if(iframe){
      iframe.src = "";
    }
    const img = modal.querySelector("img")
    if(img){
      img.src = "";
    }
  }
})


const image = document.querySelectorAll(".image img");
const cBtn = document.querySelector("#modal-pic span")
const modalPic = document.querySelector("#modal-pic");


image.forEach(el => el.addEventListener("click", () => {
  const src = el.dataset.img;
  //console.log(src)
  const pic = modalPic.querySelector("img");
  pic.src = src;
  modalPic.style.display = "block";
}))

cBtn.addEventListener("click", () => {
  modalPic.style.display = "none";
  const iframe = modalPic.querySelector("iframe");
  if(iframe){
    iframe.src = "";
  }
  const img = modalPic.querySelector("img")
  if(img){
    img.src = "";
  }
})

window.addEventListener("click", (e) => {
  if(e.target === modalPic){
    modalPic.style.display = "none";
    const iframe = modalPic.querySelector("iframe");
    if(iframe){
      iframe.src = "";
    }
    const img = modalPic.querySelector("img")
    if(img){
      img.src = "";
    }
  }
})

//tabs
const ports = document.querySelectorAll(".port > li");
const tabs = document.querySelectorAll(".tabs button");

const handleTabs = (tab) => {
  tabs.forEach(item => {
    item.classList.toggle("active", item === tab)
  })
  const selector = tab.target.dataset.tab;
  ports.forEach(port => port.style.display = "none")
  document.querySelectorAll(selector).forEach(el => el.style.display = "block")
}

tabs.forEach(tab => tab.addEventListener("click", handleTabs))