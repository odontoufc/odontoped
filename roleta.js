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
        
        <!-- Roleta Aumentada (até 380px ou 90% da largura do telemóvel) -->
        <div style="position: relative; width: 90vw; max-width: 380px; height: 90vw; max-height: 380px; margin: 0 auto 40px auto;">
            
            <!-- Seta/Ponteiro maior -->
            <div style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-top: 50px solid #333; z-index: 10; filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.3));"></div>
            
            <!-- Roda animada -->
            <div id="roda-roleta" style="position: relative; width: 100%; height: 100%; border-radius: 50%; border: 10px solid #004890; box-shadow: 0 10px 20px rgba(0,0,0,0.2); background: conic-gradient(#39B54A 0 90deg, #0071BC 90deg 180deg, #FFCB05 180deg 270deg, #ED1C24 270deg 360deg); transition: transform 4s cubic-bezier(0.1, 0.7, 0.1, 1); transform: rotate(${rotacaoAtual}deg);">
                
                <!-- Linhas divisórias da roda mais grossas -->
                <div style="position: absolute; width: 6px; height: 100%; background: #004890; left: 50%; transform: translateX(-50%);"></div>
                <div style="position: absolute; width: 100%; height: 6px; background: #004890; top: 50%; transform: translateY(-50%);"></div>
                
                <!-- Círculo central maior -->
                <div style="position: absolute; width: 70px; height: 70px; background: white; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid #004890;"></div>
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

    const grausAleatorios = Math.floor(Math.random() * 360);
    const voltas = 1800 + Math.floor(Math.random() * 1080);
    
    rotacaoAtual += voltas + grausAleatorios;
    roda.style.transform = `rotate(${rotacaoAtual}deg)`;

    setTimeout(() => {
        const anguloFinal = 360 - (rotacaoAtual % 360);
        let corVencedora = '';
        
        if (anguloFinal >= 0 && anguloFinal < 90) {
            corVencedora = 'Verde';
        } else if (anguloFinal >= 90 && anguloFinal < 180) {
            corVencedora = 'Azul';
        } else if (anguloFinal >= 180 && anguloFinal < 270) {
            corVencedora = 'Amarelo';
        } else {
            corVencedora = 'Vermelho';
        }

        sortearCarta(corVencedora);

    }, 4100); 
}
