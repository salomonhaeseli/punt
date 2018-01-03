function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.getElementById('sideNav');
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
  
  window.addEventListener('scroll', resizeHeaderOnScroll);
  