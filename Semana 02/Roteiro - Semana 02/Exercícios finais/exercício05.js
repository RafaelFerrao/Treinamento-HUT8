// Através do array de usuários abaixo imprima no console todas a skills que cada usuario tem

const users = [
  {
    name: "Joao",
    skills: ["Javascript", "ReactJS", "Redux"],
  },
  {
    name: "Pedro",
    skills: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function showUserSkills(usr) {
  for (let usr of users) {
    // Busquei exibir as informações através de uma frase, ao invés de uma lista.
    // então a utilização dos recursos abaixo é para dar uma estilizada, adicionando vírgulas e pontos.
    let skillset = "";
    for (let [i, skill] of usr.skills.entries()) {
      if (i == usr.skills.length - 1) skillset += `e ${skill}.`;
      else skillset += `${skill}, `;
    }
    console.log(`O usuário ${usr.name} possui skills em ${skillset}`);
  }
}

showUserSkills(users);
