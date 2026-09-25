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
        divCard.className = `card borda-${item.cor}`;
        
        divCard.innerHTML = `
            <h3>Setor ${item.cor}: ${item.categoria}</h3>
            <p><strong>Pergunta:</strong> ${item.pergunta}</p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 5px;"><strong>A)</strong> ${item.opcoes.A}</li>
                <li style="margin-bottom: 5px;"><strong>B)</strong> ${item.opcoes.B}</li>
                <li style="margin-bottom: 5px;"><strong>C)</strong> ${item.opcoes.C}</li>
            </ul>
            <div style="background-color: #f8f9fa; padding: 10px; border-radius: 4px; margin-top: 10px; border: 1px solid #dee2e6;">
                <p style="margin: 0 0 5px 0;"><strong>Resposta Correta:</strong> ${item.respostaCorreta}</p>
                <p style="margin: 0;"><strong>Explicação para o Mediador:</strong> ${item.explicacao}</p>
            </div>
        `;
        
        container.appendChild(divCard);
    });
}
