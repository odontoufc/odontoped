// app.js

const container = document.getElementById('app-container');

function renderizarRegras() {
    // 1. Renderiza as regras
    container.innerHTML = "<h2 style='text-align: center; color: #fff; text-shadow: 2px 2px 0 #333;'>Instruções de Jogo</h2>";
    
    dbRegras.forEach((secao, index) => {
        const divCard = document.createElement('div');
        divCard.className = "card";
        divCard.style.animationDelay = `${index * 0.1}s`; 
        
        let htmlLista = `<h3>${secao.secao}</h3><ul style="font-size: 1.2em; line-height: 1.5;">`;
        secao.regras.forEach(regra => {
            htmlLista += `<li style="margin-bottom: 10px;">${regra}</li>`;
        });
        htmlLista += `</ul>`;
        
        divCard.innerHTML = htmlLista;
        container.appendChild(divCard);
    });

    // 2. Botão no final das regras direcionando para a Seleção de Cores
    const divBotao = document.createElement('div');
    divBotao.style.textAlign = "center";
    divBotao.style.margin = "40px 0 60px 0"; 
    divBotao.innerHTML = `<button onclick="renderizarSelecaoCores()">Ir para Roleta de Cartões 🎲</button>`;
    
    container.appendChild(divBotao);
}

function renderizarSelecaoCores() {
    // 3. Menu com os 4 botões de cores da roleta
    container.innerHTML = `
        <h2 style='text-align: center; color: #fff; text-shadow: 2px 2px 0 #333;'>Qual cor caiu na roleta?</h2>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; margin-top: 30px;">
            <button style="background-color: #92d050; width: 100%; max-width: 300px; height: 80px; font-size: 1.5em; box-shadow: 0 8px 0 #5e8a2f;" onclick="sortearCarta('Verde')">🟢 Verde</button>
            <button style="background-color: #00b0f0; width: 100%; max-width: 300px; height: 80px; font-size: 1.5em; box-shadow: 0 8px 0 #0076a3;" onclick="sortearCarta('Azul')">🔵 Azul</button>
            <button style="background-color: #ffc000; color: #333; width: 100%; max-width: 300px; height: 80px; font-size: 1.5em; box-shadow: 0 8px 0 #b38600;" onclick="sortearCarta('Amarelo')">🟡 Amarelo</button>
            <button style="background-color: #ff0000; width: 100%; max-width: 300px; height: 80px; font-size: 1.5em; box-shadow: 0 8px 0 #a60000;" onclick="sortearCarta('Vermelho')">🔴 Vermelho</button>
        </div>
    `;
}

function sortearCarta(cor) {
    // 4. Filtra apenas os cartões da cor escolhida e sorteia um
    const cartoesDaCor = dbPerguntas.filter(item => item.cor === cor);
    
    if (cartoesDaCor.length === 0) {
        alert("Ainda não há cartas cadastradas para esta cor.");
        return;
    }
    
    const item = cartoesDaCor[Math.floor(Math.random() * cartoesDaCor.length)];

    // 5. Limpa a tela e coloca os botões de voltar/sortear novamente
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <button style="background-color: #666; box-shadow: 0 6px 0 #444; font-size: 1.1em; padding: 12px 20px;" onclick="renderizarSelecaoCores()">⬅ Voltar para Roleta</button>
            <button style="background-color: #ff9000; box-shadow: 0 6px 0 #c26d00; font-size: 1.1em; padding: 12px 20px;" onclick="sortearCarta('${cor}')">Sortear outra ${cor} 🎲</button>
        </div>
    `;

    // 6. Constrói a carta sorteada na tela
    const divCard = document.createElement('div');
    divCard.className = `card borda-${item.cor}`;
    
    divCard.innerHTML = `
        <h3>Setor ${item.cor}: ${item.categoria}</h3>
        <p style="font-size: 1.3em; font-weight: 500;"><strong>Pergunta:</strong> ${item.pergunta}</p>
        
        <ul class="opcoes-lista" id="lista-${item.id}">
            <li data-letra="A"><strong>A)</strong> ${item.opcoes.A}</li>
            <li data-letra="B"><strong>B)</strong> ${item.opcoes.B}</li>
            <li data-letra="C"><strong>C)</strong> ${item.opcoes.C}</li>
        </ul>
        
        <div class="resposta-box" id="resposta-${item.id}" style="display: none;">
            <p style="margin: 0 0 10px 0; color: #d32f2f; font-size: 1.2em;"><strong>Resposta Correta: ${item.respostaCorreta}</strong></p>
            <p style="margin: 0; color: #555;"><strong>Para o Mediador:</strong> ${item.explicacao}</p>
        </div>
    `;
    
    container.appendChild(divCard);

    // 7. Lógica de clique nas alternativas e gabarito
    const opcoes = divCard.querySelectorAll(`#lista-${item.id} li`);
    const caixaResposta = divCard.querySelector(`#resposta-${item.id}`);
    let respondido = false;

    opcoes.forEach(opcao => {
        opcao.style.cursor = 'pointer';
        opcao.style.transition = 'transform 0.1s, background-color 0.2s';

        opcao.addEventListener('mouseenter', () => {
            if (!respondido) {
                opcao.style.backgroundColor = '#e6f2ff';
                opcao.style.transform = 'scale(1.02)';
            }
        });
        
        opcao.addEventListener('mouseleave', () => {
            if (!respondido) {
                opcao.style.backgroundColor = '#f0f8ff';
                opcao.style.transform = 'scale(1)';
            }
        });

        opcao.addEventListener('click', () => {
            if (respondido) return; 
            respondido = true;

            const letraSelecionada = opcao.getAttribute('data-letra');
            const letraCorreta = item.respostaCorreta;

            opcoes.forEach(opt => {
                const letraAtual = opt.getAttribute('data-letra');
                opt.style.cursor = 'default';
                opt.style.transform = 'scale(1)';
                
                if (letraAtual === letraCorreta) {
                    opt.style.backgroundColor = '#d4edda';
                    opt.style.borderColor = '#c3e6cb';
                    opt.style.color = '#155724';
                } else if (letraAtual === letraSelecionada) {
                    opt.style.backgroundColor = '#f8d7da';
                    opt.style.borderColor = '#f5c6cb';
                    opt.style.color = '#721c24';
                } else {
                    opt.style.opacity = '0.5';
                }
            });

            caixaResposta.style.display = 'block';
            caixaResposta.style.animation = 'pular 0.4s ease-out forwards';
        });
    });
}
