let users = [
    {name: 'Marília', age: 26, job: 'Dev'},
    {name: 'Juca', age: 21, job: 'RH'},
    {name: 'Flávia', age: 30, job: 'Financeiro'},
    {name: 'Sérgio', age: 24, job: 'Dev'},
];

const isDev = user => user.job == 'Dev' ? true : false;

let devSituationOutput = '';

for(let user of users){
    if(isDev(user))
        devSituationOutput += `${user.name} é dev. `;
    else
        devSituationOutput += `${user.name} não é dev. `;
}

console.log(devSituationOutput);
