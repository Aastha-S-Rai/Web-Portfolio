function openSection(TabLink, navLink) {
  let activee = document.getElementsByClassName("activee");
  let activeLink = document.getElementsByClassName("active");
  val = activee[0]
  val.className = "sectionContent";
  
  for(let i=0; i<1;i++){
    activeLink[i].className="navText"
  }
  document.getElementById(navLink).className = "active";
  tab=document.getElementById(TabLink)
  tab.className = "activee";
}
