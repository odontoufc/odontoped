// app.js

const container = document.getElementById('app-container');

function renderizarRegras() {
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
}

function renderizarPerguntas() {
    container.innerHTML = "<h2 style='text-align: center; color: #fff; text-shadow: 2px 2px 0 #333;'>Banco de Cartões</h2>";
    
    dbPerguntas.forEach((item, index) => {
        const divCard = document.createElement('div');
        divCard.className = `card borda-${item.cor}`;
        divCard.style.animationDelay = `${index * 0.1}s`; 
        
        // A tag style="display: none;" oculta a resposta inicialmente
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

        // Captura as opções e a caixa de resposta geradas acima
        const opcoes = divCard.querySelectorAll(`#lista-${item.id} li`);
        const caixaResposta = divCard.querySelector(`#resposta-${item.id}`);
        let respondido = false;

        opcoes.forEach(opcao => {
            opcao.style.cursor = 'pointer';
            opcao.style.transition = 'transform 0.1s, background-color 0.2s';

            // Efeito visual ao passar o mouse
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

            // Validação ao clicar na alternativa
            opcao.addEventListener('click', () => {
                if (respondido) return; // Bloqueia cliques adicionais após a primeira escolha
                respondido = true;

                const letraSelecionada = opcao.getAttribute('data-letra');
                const letraCorreta = item.respostaCorreta;

                opcoes.forEach(opt => {
                    const letraAtual = opt.getAttribute('data-letra');
                    opt.style.cursor = 'default';
                    opt.style.transform = 'scale(1)';
                    
                    if (letraAtual === letraCorreta) {
                        // Pinta a resposta certa de verde
                        opt.style.backgroundColor = '#d4edda';
                        opt.style.borderColor = '#c3e6cb';
                        opt.style.color = '#155724';
                    } else if (letraAtual === letraSelecionada) {
                        // Pinta a resposta errada clicada de vermelho
                        opt.style.backgroundColor = '#f8d7da';
                        opt.style.borderColor = '#f5c6cb';
                        opt.style.color = '#721c24';
                    } else {
                        // Esmaece as alternativas não clicadas
                        opt.style.opacity = '0.5';
                    }
                });

                // Exibe o gabarito e a explicação
                caixaResposta.style.display = 'block';
                caixaResposta.style.animation = 'pular 0.4s ease-out forwards';
            });
        });
    });
}
