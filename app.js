// app.js

const container = document.getElementById('app-container');

function renderizarRegras() {
    // Substitui a tela inicial pelo título das regras
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

    // Adiciona o botão de avançar no final das regras
    const divBotao = document.createElement('div');
    divBotao.style.textAlign = "center";
    divBotao.style.marginTop = "30px";
    divBotao.innerHTML = `<button onclick="renderizarPerguntas()">Pegar Cartões 🎲</button>`;
    
    // Animação para o botão aparecer depois das cartas
    divBotao.style.opacity = "0";
    divBotao.style.animation = `pular 0.5s forwards`;
    divBotao.style.animationDelay = `${dbRegras.length * 0.1}s`;
    
    container.appendChild(divBotao);
}

function renderizarPerguntas() {
    // Substitui as regras pela área de perguntas
    container.innerHTML = "<h2 style='text-align: center; color: #fff; text-shadow: 2px 2px 0 #333;'>Banco de Cartões</h2>";
    
    dbPerguntas.forEach((item, index) => {
        const divCard = document.createElement('div');
        divCard.className = `card borda-${item.cor}`;
        divCard.style.animationDelay = `${index * 0.1}s`; 
        
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
    });
}
