// Dado o objeto à seguir, imprima no console: 
// O nome do dev.
// O segundo projeto.
// O nome do primeiro projeto.

user = {
    name: "Juca",
    projects: [
        { name: "Projeto 1", start: "01/02/2021" },
        { name: "Projeto 2", start: "03/03/2021" }
    ]
};

const getProjectName = (projectNum, user) => user.projects[projectNum - 1].name;

const getProject = (projectNum, user) => user.projects[projectNum - 1];

const getUserName = user => user.name;


console.log(user.name);
console.log(getProject(2, user));
console.log(getProjectName(1, user));