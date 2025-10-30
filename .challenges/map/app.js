const map = new Map();

// add a key value pair, keys must be unique
map.set("id", 102020);
map.set("name", "John Does");
map.set("age", 24);

console.log(map); // Map(3) { 'id' => 102020, 'name' => 'John Does', 'age' => 24 }

map.delete("age");

console.log(map); // Map(2) { 'id' => 102020, 'name' => 'John Does' }