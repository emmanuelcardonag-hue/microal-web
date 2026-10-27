
  function mostrarDato(){
    const fact = document.getElementById("fact");
    fact.style.display = fact.style.display === "block" ? "none" : "block";
  }

  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let actual = "";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 160) actual = section.id;
    });
    links.forEach(link => {
      link.style.background = link.getAttribute("href") === "#" + actual ? "#e8f7f0" : "";
      link.style.color = link.getAttribute("href") === "#" + actual ? "#1b7f5c" : "";
    });
  });