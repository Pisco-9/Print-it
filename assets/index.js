const formulaire = document.getElementsByTagName("form")[0];
console.log(formulaire);

const nom = document.querySelector('input[id="nom"]');
console.log(nom);

let nomValue = nom.value;
console.log(nomValue);

const btn = document.createElement("button");
let btnTexte = "Envoi";
btn.innerText = btnTexte;

/**En-dessous, nous avons inséré btn avant la fin du parent du formulaire (formulaire.parentNode.insertBefore),
 * après l’enfant formulaire (formulaire.nextSibling) - Si je voulais avant l'enfant formulaire c'est (.previousSibling) */
formulaire.parentNode.insertBefore(btn, formulaire.nextSibling);
