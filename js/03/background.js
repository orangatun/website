const bodyEl = document.getElementsByTagName("body");

bodyEl[0].addEventListener("pointermove", (ev) => {
    const rect = bodyEl[0].getBoundingClientRect();
    
    bodyEl[0].style.setProperty("--x", `${ev.clientX}px`);// - rect.left}px`);
    bodyEl[0].style.setProperty("--y", `${ev.clientY-rect.top+96}px`);// - rect.top}px`);
});
