function verificarSinal(a) {
    if (a > 0) {
        return "Positivo";
    }
    else if (a < 0) {
        return "Negativo";
    }
    else {
        return "Zero";
    }
}
console.log(verificarSinal(5));
console.log(verificarSinal(-2));
console.log(verificarSinal(0));
