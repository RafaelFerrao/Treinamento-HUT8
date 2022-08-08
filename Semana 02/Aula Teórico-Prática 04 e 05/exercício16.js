let user = {
    name: "Marília",
    age: 26,
    job: "Dev"
};

for(let [property_name, value] of Object.entries(user)){
    console.log(`O valor da propriedade ${property_name} é ${value}`);
}
