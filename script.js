const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//1 - lister ut alle produkt under 200kr.
const under200 = products.filter((product) => product.price < 200);
console.log(under200);

//2 - Henter ut produktnavn på alle element
const produktnavn = products.map((value) => value.name);
console.log(produktnavn);

//3 - finner alle elementer under eletronics, lagrer kun navn
const electronics = products
  .filter((product) =>
    product.category === "electronics" ? product.name : null,
  )
  .map((value) => value.name);
console.log(electronics);

//4 - Finne om en eller flere varer over 1000 kr eksisterer
const overTusen = products.some((produkt) => produkt.price > 1000);
console.log(overTusen);

//5 - Samlet sum
const sum = products.reduce((acc, current) => acc + current.price, 0);
console.log(sum);
