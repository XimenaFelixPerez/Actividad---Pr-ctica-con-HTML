const nombre= "Ximena";
const materias = ["Videojuegos", "Web", "BD"];

function saludar(persona){
    return "Hola" +persona;
}
console.log(saludar(nombre));
materias.forEach((m, i) => console.log(`Materia ${i+1}: ${m}`));