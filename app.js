// app.js

const container = document.getElementById('app-container');

function renderizarRegras() {
    container.innerHTML = "<h2>Instruções de Como Jogar</h2>";
    
    dbRegras.forEach(secao => {
        const divCard = document.createElement('div');
        divCard.className = "card";
        
        let htmlLista = `<h3>${secao.secao}</h3><ul>`;
        secao.regras.forEach(regra => {
            htmlLista += `<li>${regra}</li>`;
        });
        htmlLista += `</ul>`;
        
        divCard.innerHTML = htmlLista;
        container.appendChild(divCard);
    });
}

function renderizarPerguntas() {
    container.innerHTML = "<h2>Banco de Cartões</h2>";
    
    dbPerguntas.forEach(item => {
        const divCard = document.createElement('div');
        // Adiciona a classe de borda correspondente à cor da roleta
        divCard.className = `card borda-${item.cor}`;
        
        divCard.innerHTML = `
            <h3>Categoria: ${item.categoria} (Roleta: ${item.cor})</h3>
            <p><strong>Pergunta:</strong> ${item.pergunta}</p>
            <p><strong>Resposta:</strong> ${item.resposta}</p>
        `;
        
        container.appendChild(divCard);
    });
}
