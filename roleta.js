// roleta.js

let rotacaoAtual = 0;

function renderizarRoletaDigital() {
    // Garante que a logo fique pequena para dar espaço à roleta
    if (typeof ajustarLogo === 'function') ajustarLogo('pequena');
    
    const container = document.getElementById('app-container');
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <button class="btn-principal" style="background-color: #004890; color: white; box-shadow: 0 6px 0 #002855; font-size: 1.1em; padding: 12px 20px;" onclick="renderizarSelecaoCores()">⬅ Voltar ao Menu</button>
        </div>
        
        <h2 style='text-align: center; color: #004890; text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff, 0 6px 10px rgba(0,0,0,0.15); font-size: 2.5em; font-weight: 700; margin-bottom: 30px;'>Roleta Digital</h2>
        
        <div style="position: relative; width: 90vw; max-width: 380px; height: 90vw; max-height: 380px; margin: 0 auto 40px auto;">
            
            <!-- Seta/Ponteiro -->
            <div style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-top: 50px solid #333; z-index: 10; filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.3));"></div>
            
            <!-- Roda animada com 12 Fatias (CSS Conic Gradient) -->
            <div id="roda-roleta" style="position: relative; width: 100%; height: 100%; border-radius: 50%; border: 10px solid #004890; box-shadow: 0 10px 20px rgba(0,0,0,0.2); overflow: hidden;
                background: conic-gradient(
                    #39B54A 0 30deg, #0071BC 30deg 60deg, #FFCB05 60deg 90deg, #ED1C24 90deg 120deg,
                    #39B54A 120deg 150deg, #0071BC 150deg 180deg, #FFCB05 180deg 210deg, #ED1C24 210deg 240deg,
                    #39B54A 240deg 270deg, #0071BC 270deg 300deg, #FFCB05 300deg 330deg, #ED1C24 330deg 360deg
                ); transition: transform 5s cubic-bezier(0.1, 0.7, 0.1, 1); transform: rotate(${rotacaoAtual}deg);">
                
                <!-- 6 Linhas divisórias cruzando o centro a cada 30 graus -->
                <div style="position: absolute; width: 4px; height: 100%; background: #004890; left: 50%; top: 0; transform: translateX(-50%) rotate(0deg);"></div>
                <div style="position: absolute; width: 4px; height: 100%; background: #004890; left: 50%; top: 0; transform: translateX(-50%) rotate(30deg);"></div>
                <div style="position: absolute; width: 4px; height: 100%; background: #004890; left: 50%; top: 0; transform: translateX(-50%) rotate(60deg);"></div>
                <div style="position: absolute; width: 4px; height: 100%; background: #004890; left: 50%; top: 0; transform: translateX(-50%) rotate(90deg);"></div>
                <div style="position: absolute; width: 4px; height: 100%; background: #004890; left: 50%; top: 0; transform: translateX(-50%) rotate(120deg);"></div>
                <div style="position: absolute; width: 4px; height: 100%; background: #004890; left: 50%; top: 0; transform: translateX(-50%) rotate(150deg);"></div>
                
                <!-- Círculo central maior para cobrir o encontro das linhas -->
                <div style="position: absolute; width: 70px; height: 70px; background: white; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid #004890; z-index: 5;"></div>
            </div>
        </div>
        
        <div style="text-align: center;">
            <button id="btn-girar" class="btn-principal" style="font-size: 1.8em; padding: 15px 50px;" onclick="girarRoleta()">GIRAR! 🎡</button>
        </div>
    `;
}

function girarRoleta() {
    const roda = document.getElementById('roda-roleta');
    const btnGirar = document.getElementById('btn-girar');
    
    if (!roda || !btnGirar) return;
    
    btnGirar.disabled = true;
    btnGirar.style.opacity = '0.5';
    btnGirar.innerText = 'Girando...';

    // Lógica de áudio da roleta (Audio Ducking)
    const music = document.getElementById('bgMusic');
    const somRoleta = document.getElementById('som-roleta');
    
    if (typeof isMusicPlaying !== 'undefined' && isMusicPlaying && music) {
        music.volume = 0.2;
    }
    
    if (somRoleta) {
        somRoleta.currentTime = 0;
        somRoleta.play().catch(e => console.log("Erro ao tocar som da roleta:", e));
    }

    // Calcula de 5 a 8 voltas extras + um ângulo aleatório
    const grausAleatorios = Math.floor(Math.random() * 360);
    const voltas = 1800 + Math.floor(Math.random() * 1080);
    
    rotacaoAtual += voltas + grausAleatorios;
    roda.style.transform = `rotate(${rotacaoAtual}deg)`;

    // Aguarda os 5 segundos da animação
    setTimeout(() => {
        // Restaura o volume da música
        if (typeof isMusicPlaying !== 'undefined' && isMusicPlaying && music) {
            music.volume = 1.0;
        }

        // --- NOVA LÓGICA DE CÁLCULO DE COR (12 FATIAS) ---
        // Calcula a posição real (de 0 a 359 graus) que parou na seta superior
        const anguloFinal = (360 - (rotacaoAtual % 360)) % 360;
        
        // Cada fatia tem 30 graus. Dividindo o ângulo por 30 descobrimos o índice (0 a 11)
        const indiceFatia = Math.floor(anguloFinal / 30);
        
        // Como o padrão se repete a cada 4 fatias, usamos o "resto" da divisão por 4
        const ordemCores = ['Verde', 'Azul', 'Amarelo', 'Vermelho'];
        const corVencedora = ordemCores[indiceFatia % 4];

        sortearCarta(corVencedora);

    }, 5000); 
}
