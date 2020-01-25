function create(words) {
   const content = document.getElementById("content");

   for (let i = 0; i < words.length; i++) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      div.appendChild(p);
      p.textContent = words[i];
      p.style.display = "none";
      
      div.addEventListener("click", function () {
         p.style.display = "block";
      });
      content.appendChild(div);
   }
}