const containerEl = document.querySelector(".container");
const iEl = document.querySelector("i")

containerEl.addEventListener("dblclick", (e) => {
    let x = e.pageX - e.target.offsetLeft - 15;
    let y = e.pageY - e.target.offsetTop - 15;
    iEl.style.left = `${x}px`;
    iEl.style.top = `${y}px`;

    iEl.classList.add("active");

    setTimeout(()=>{
        iEl.classList.remove("active");
    }, 1500);
})