// Tricky and Fun

const company = {
  name: "TechCorp",
  address: {
    city: "Malmö",
    country: "Sweden", //forgot string assignment
  },
};
console.log(company.address.country.toUpperCase());

//

const products = [
  { id: 1, name: "Mouse", price: 25 },
  { id: 2, name: "Keyboard", price: 75 }, // not an number?
  { id: 3, name: "Laptop", price: 1200 },
];
const names = products.filter((p) => p.price > 50).map((p) => p.name);
for(let i = 0; i < names.length; i++){ // added nicer print
    console.log(names[i])
}
//console.log(names); //Something more?

//

const base = { role: "user", active: true };
const override = { role: "admin" };
const merged = {...base, ...override }; // wrong way around?
console.log(merged.role);