function limparTexto(texto) {
    return texto
        .split("\n")
        .filter(linha => {
            const l = linha.toLowerCase();
            return !l.includes("ticket") && !l.includes("card");
        });
}

function imprimir() {
    const textoOriginal = document.getElementById("texto").value.trim();

    if (!textoOriginal) {
        alert("Cole os dados do comprovante.");
        return;
    }

    const linhas = limparTexto(textoOriginal);
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = "";

    linhas.forEach(linha => {
        if (linha.includes("R$")) {
            const div = document.createElement("div");
            div.className = "valor";
            div.innerText = linha;
            conteudo.appendChild(div);
        } else {
            const div = document.createElement("div");
            div.className = "normal";
            div.innerText = linha;
            conteudo.appendChild(div);
        }
    });

    window.print();
}