function openSection(TabLink, navLink) {
  let activee = document.getElementsByClassName("activee");
  let activeLink = document.getElementsByClassName("active");
  for (let i = 0; i < 1; i++) {
    activee[i].className = "sectionContent";
  }
  for(let i=0; i<1;i++){
    activeLink[i].className="navText"
  }
  document.getElementById(navLink).className = "active";
  document.getElementById(TabLink).className = "activee";
}
