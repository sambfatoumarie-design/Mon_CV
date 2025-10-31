/*function afficherDate(){
    const dateElement=document.getElementById('date');
    const options={year:'numeric',month:'long',day:'numeric'};
    const aujourdHui=new Date();
    dateElement.textContent="Derniere mise a jour: " +aujourdHui.toLocaleDateString('fr-FR',options);
}
afficherDate();
*/
function copierEmail(){
    const email=document.getElementById('email').textContent;
    navigator.clipboard.writeText(email).then(function(){
        alert('Adresse email copiée dans le presse-papiers : ' +email);
    });
      }
      const texte = "Fatou Marie Samb";
let i = 0;

function ecrireNom() {
    if (i < texte.length) {
        document.getElementById("nom").textContent += texte.charAt(i);
        i++;
        setTimeout(ecrireNom, 100);
    }
}

ecrireNom();
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".section-title");
  titles.forEach((title, index) => {
    setTimeout(() => {
      title.classList.add("visible");
    }, index * 800); // délai de 0.8s entre chaque titre
  });
});