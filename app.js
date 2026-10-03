// app.js
// ----- LÓGICA DE INSTALAÇÃO DO APLICATIVO (PWA) -----
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Impede o mini-aviso padrão do navegador
    e.preventDefault();
    // Guarda o evento para usarmos no botão
    deferredPrompt = e;
    // Torna o botão visível na tela inicial
    const btnInstall = document.getElementById('btn-install');
    if (btnInstall) btnInstall.style.display = 'inline-block';
});

function instalarApp() {
    if (deferredPrompt) {
        // Mostra a janela de instalação nativa do celular
        deferredPrompt.prompt();
        // Aguarda a resposta do usuário
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('App instalado com sucesso!');
            }
            deferredPrompt = null;
            // Esconde o botão após instalar
            const btnInstall = document.getElementById('btn-install');
            if (btnInstall) btnInstall.style.display = 'none';
        });
    }
}
// ---------------------------------------------------

// O resto do seu ficheiro app.js continua aqui em baixo:
const container = document.getElementById('app-container');
const estiloTitulo = "text-align: center; color: #004890; text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff, 0 6px 10px rgba(0,0,0,0.15); font-size: 2.5em; font-weight: 700; margin-bottom: 30px;";
const container = document.getElementById('app-container');
const estiloTitulo = "text-align: center; color: #004890; text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff, 0 6px 10px rgba(0,0,0,0.15); font-size: 2.5em; font-weight: 700; margin-bottom: 30px;";

let cartasDisponiveis = [...dbPerguntas];
let isMusicPlaying = false;

function ajustarLogo(tamanho) {
    const logo = document.querySelector('.logo-jogo');
    if (logo) {
        logo.style.transition = 'max-height 0.4s ease-in-out, margin-bottom 0.4s ease-in-out';
        if (tamanho === 'pequena') {
            logo.style.maxHeight = '120px'; 
            logo.style.marginBottom = '5px';
        } else {
            logo.style.maxHeight = '280px'; 
            logo.style.marginBottom = '10px';
        }
    }
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('btn-music-toggle');
    if (isMusicPlaying) {
        music.pause();
        isMusicPlaying = false;
        btn.innerHTML = '🔇';
    } else {
        music.volume = 1.0; // Garante que volta no volume máximo
        music.play().then(() => {
            isMusicPlaying = true;
            btn.innerHTML = '🔊';
        }).catch(err => console.log("Erro ao reproduzir o áudio:", err));
    }
}

function iniciarMusica() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('btn-music-toggle');
    if (!isMusicPlaying) {
        music.volume = 1.0; 
        music.play().then(() => {
            isMusicPlaying = true;
            btn.innerHTML = '🔊';
        }).catch(err => console.log("Erro no áudio", err));
    }
}

function toggleFullScreen() {
    const doc = window.document;
    const docEl = doc.documentElement;
    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        if (requestFullScreen) requestFullScreen.call(docEl);
    } else {
        if (cancelFullScreen) cancelFullScreen.call(doc);
    }
}

function verificarScroll() {
    const indicador = document.getElementById('indicador-scroll');
    if (indicador) {
        if (document.body.offsetHeight <= window.innerHeight) {
            indicador.style.display = 'none';
            return;
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            indicador.style.opacity = '0';
        } else {
            indicador.style.opacity = '1';
            indicador.style.display = 'block';
        }
    }
}

function removerIndicador() {
    const indicador = document.getElementById('indicador-scroll');
    if(indicador) indicador.remove();
    window.removeEventListener('scroll', verificarScroll);
}

function renderizarRegras() {
    iniciarMusica(); 
    ajustarLogo('grande'); 

    container.innerHTML = `<h2 style='${estiloTitulo}'>Instruções de Jogo</h2>`;
    
    dbRegras.forEach((secao, index) => {
        const divCard = document.createElement('div');
        divCard.className = "card";
        divCard.style.animationDelay = `${index * 0.1}s`; 
        divCard.style.borderColor = "#004890"; 
        
        let htmlLista = `<h3 style="color: #004890;">${secao.secao}</h3><ul style="font-size: 1.2em; line-height: 1.5; color: #444;">`;
        secao.regras.forEach(regra => {
            htmlLista += `<li style="margin-bottom: 10px;">${regra}</li>`;
        });
        htmlLista += `</ul>`;
        
        divCard.innerHTML = htmlLista;
        container.appendChild(divCard);
    });

    const divBotao = document.createElement('div');
    divBotao.style.textAlign = "center";
    divBotao.style.margin = "40px 0 60px 0"; 
    divBotao.innerHTML = `<button class="btn-principal" onclick="renderizarSelecaoCores()">Ir para o Menu do Jogo 🎲</button>`;
    
    container.appendChild(divBotao);

    removerIndicador(); 
    const indicador = document.createElement('div');
    indicador.id = 'indicador-scroll';
    indicador.className = 'scroll-indicador';
    indicador.innerHTML = '👇 Role para baixo 👇';
    document.body.appendChild(indicador);
    
    window.addEventListener('scroll', verificarScroll);
    setTimeout(verificarScroll, 300); 
}

function renderizarSelecaoCores() {
    removerIndicador(); 
    ajustarLogo('pequena'); 
    
    container.innerHTML = `
        <h2 style='${estiloTitulo}'>Como vai sortear?</h2>
        
        <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 3px dashed #004890;">
            <button class="btn-principal" style="background-color: #0071BC; color: white; box-shadow: 0 8px 0 #004890; font-size: 1.6em; width: 100%; max-width: 350px;" onclick="renderizarRoletaDigital()">🎡 GIRAR ROLETA DIGITAL</button>
        </div>

        <p style="text-align: center; font-size: 1.3em; font-weight: 600; color: #444; margin-bottom: 20px;">Ou escolha a cor (se usar roleta física):</p>
        
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
            <button style="background-color: #39B54A; color: #ffffff; width: 100%; max-width: 300px; height: 70px; font-size: 1.4em; box-shadow: 0 8px 0 #207A2E; border: none; border-radius: 40px; font-family: 'Fredoka', sans-serif; font-weight: 700; cursor: pointer; transition: all 0.1s ease-in-out;" onmousedown="this.style.transform='translateY(6px)'; this.style.boxShadow='0 0px 0 #207A2E';" onmouseup="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 0 #207A2E';" onclick="sortearCarta('Verde')">VERDE</button>
            <button style="background-color: #0071BC; color: #ffffff; width: 100%; max-width: 300px; height: 70px; font-size: 1.4em; box-shadow: 0 8px 0 #004890; border: none; border-radius: 40px; font-family: 'Fredoka', sans-serif; font-weight: 700; cursor: pointer; transition: all 0.1s ease-in-out;" onmousedown="this.style.transform='translateY(6px)'; this.style.boxShadow='0 0px 0 #004890';" onmouseup="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 0 #004890';" onclick="sortearCarta('Azul')">AZUL</button>
            <button style="background-color: #FFCB05; color: #ffffff; width: 100%; max-width: 300px; height: 70px; font-size: 1.4em; box-shadow: 0 8px 0 #D99B00; border: none; border-radius: 40px; font-family: 'Fredoka', sans-serif; font-weight: 700; cursor: pointer; transition: all 0.1s ease-in-out;" onmousedown="this.style.transform='translateY(6px)'; this.style.boxShadow='0 0px 0 #D99B00';" onmouseup="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 0 #D99B00';" onclick="sortearCarta('Amarelo')">AMARELO</button>
            <button style="background-color: #ED1C24; color: #ffffff; width: 100%; max-width: 300px; height: 70px; font-size: 1.4em; box-shadow: 0 8px 0 #A80005; border: none; border-radius: 40px; font-family: 'Fredoka', sans-serif; font-weight: 700; cursor: pointer; transition: all 0.1s ease-in-out;" onmousedown="this.style.transform='translateY(6px)'; this.style.boxShadow='0 0px 0 #A80005';" onmouseup="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 0 #A80005';" onclick="sortearCarta('Vermelho')">VERMELHO</button>
        </div>
    `;
}

function sortearCarta(cor) {
    ajustarLogo('pequena'); 

    const cartoesDaCor = cartasDisponiveis.filter(item => item.cor === cor);
    
    if (cartoesDaCor.length === 0) {
        alert(`Todas as cartas da cor ${cor} já foram sorteadas! Gire a roleta novamente.`);
        
        const btnGirar = document.getElementById('btn-girar');
        if (btnGirar) {
            btnGirar.disabled = false;
            btnGirar.style.opacity = '1';
            btnGirar.innerText = 'GIRAR NOVAMENTE! 🎡';
        }
        return;
    }
    
    const item = cartoesDaCor[Math.floor(Math.random() * cartoesDaCor.length)];
    cartasDisponiveis = cartasDisponiveis.filter(carta => carta.id !== item.id);

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <button class="btn-principal" style="background-color: #004890; color: white; box-shadow: 0 6px 0 #002855; font-size: 1.1em; padding: 12px 20px;" onclick="renderizarSelecaoCores()">⬅ Voltar ao Menu</button>
            <button class="btn-principal" style="background-color: #FFCB05; color: #004890; box-shadow: 0 6px 0 #D99B00; font-size: 1.1em; padding: 12px 20px;" onclick="renderizarRoletaDigital()">Girar Roleta Novamente 🎡</button>
        </div>
    `;

    const divCard = document.createElement('div');
    divCard.className = `card borda-${item.cor}`;
    
    divCard.innerHTML = `
        <h3>Setor ${item.cor}: ${item.categoria}</h3>
        <p style="font-size: 1.4em; font-weight: 600; color: #333;"><strong>Pergunta:</strong> ${item.pergunta}</p>
        <ul class="opcoes-lista" id="lista-${item.id}">
            <li data-letra="A"><strong>A)</strong> ${item.opcoes.A}</li>
            <li data-letra="B"><strong>B)</strong> ${item.opcoes.B}</li>
            <li data-letra="C"><strong>C)</strong> ${item.opcoes.C}</li>
        </ul>
        <div class="resposta-box" id="resposta-${item.id}" style="display: none;">
            <p style="margin: 0 0 10px 0; color: #004890; font-size: 1.3em;"><strong>Resposta Correta: ${item.respostaCorreta}</strong></p>
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
            if (!respondido) { opcao.style.backgroundColor = '#e6f2ff'; opcao.style.transform = 'scale(1.02)'; }
        });
        opcao.addEventListener('mouseleave', () => {
            if (!respondido) { opcao.style.backgroundColor = '#f5f9ff'; opcao.style.transform = 'scale(1)'; }
        });
        opcao.addEventListener('click', () => {
            if (respondido) return; 
            respondido = true;
            
            const letraSelecionada = opcao.getAttribute('data-letra');
            const letraCorreta = item.respostaCorreta;

            // ----- NOVA LÓGICA DE ÁUDIO (BAIXAR MÚSICA DE FUNDO) -----
            const music = document.getElementById('bgMusic');
            
            // Verifica se a música está tocando agora
            if (isMusicPlaying) {
                music.volume = 0.2; // Baixa o volume para 20%
            }

            let audioTocado = null;
            if (letraSelecionada === letraCorreta) {
                audioTocado = document.getElementById('som-correto');
            } else {
                audioTocado = document.getElementById('som-errado');
            }

            if (audioTocado) {
                audioTocado.currentTime = 0;
                audioTocado.play().catch(e => console.log("Erro ao tocar som:", e));
                
                // Quando o efeito sonoro terminar, volta a música ao normal
                audioTocado.onended = () => {
                    if (isMusicPlaying) music.volume = 1.0;
                };

                // Garantia (fallback): se o som falhar e o onended não disparar, o volume volta após 3 segundos
                setTimeout(() => {
                    if (isMusicPlaying) music.volume = 1.0;
                }, 3000);
            } else {
                // Se o arquivo de som não for encontrado, volta o volume na mesma hora
                if (isMusicPlaying) music.volume = 1.0;
            }
            // --------------------------------------------------------

            opcoes.forEach(opt => {
                const letraAtual = opt.getAttribute('data-letra');
                opt.style.cursor = 'default';
                opt.style.transform = 'scale(1)';
                if (letraAtual === letraCorreta) {
                    opt.style.backgroundColor = '#d4edda'; opt.style.borderColor = '#c3e6cb'; opt.style.color = '#155724';
                } else if (letraAtual === letraSelecionada) {
                    opt.style.backgroundColor = '#f8d7da'; opt.style.borderColor = '#f5c6cb'; opt.style.color = '#721c24';
                } else {
                    opt.style.opacity = '0.5';
                }
            });
            caixaResposta.style.display = 'block';
            caixaResposta.style.animation = 'pular 0.4s ease-out forwards';
        });
    });
}
