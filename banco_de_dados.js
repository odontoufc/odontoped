// banco_de_dados.js

// Tabela 1: Regras do Jogo
const dbRegras = [
    {
        secao: "1. Preparação",
        regras: [
            "Os participantes jogam individualmente ou em duplas.",
            "Todos posicionam seus peões na casa 'Início: Chegada dos Primeiros Dentes de Leite'.",
            "As cartas de perguntas e respostas devem ser embaralhadas e dispostas ao lado do tabuleiro."
        ]
    },
    {
        secao: "2. Dinâmica do Turno",
        regras: [
            "Na sua vez, o jogador gira a roleta temática.",
            "A cor indicada pela roleta determina a categoria da pergunta a ser respondida (Verde, Azul, Amarelo ou Vermelho).",
            "O mediador da partida pega a carta da cor correspondente e lê a pergunta para o jogador da vez."
        ]
    },
    {
        secao: "3. Avanço e Respostas",
        regras: [
            "Acerto: O jogador avança 2 casas. O mediador reforça a explicação com o modelo visual de apoio.",
            "Erro: O jogador avança 1 casa. O mediador explica a conduta correta."
        ]
    },
    {
        secao: "4. Regras das Casas Especiais",
        regras: [
            "Casa Espaço Garantido: O dente de leite caiu na hora certa. Efeito: Avance 1 casa.",
            "Casa Perda Precoce: O dente foi perdido antes do tempo por cárie ou trauma. Efeito: Fique 1 rodada sem jogar ou volte 2 casas.",
            "Casa Molar dos 6 Anos: Nasceu o primeiro dente permanente no fundo sem cair nenhum de leite antes. Efeito: Ganhe 1 rodada extra."
        ]
    },
    {
        secao: "5. Fim do Jogo e Vitória",
        regras: [
            "Vence quem chegar primeiro à casa 'Dentição Permanente Completa e Saudável'.",
            "Todos os participantes que completarem a trilha recebem um folheto explicativo."
        ]
    }
];

// Tabela 2: Cartões de Perguntas (Baseado nos dados do arquivo de referência)
const dbPerguntas = [
    {
        id: 1,
        cor: "Azul",
        categoria: "Fases da Dentição",
        pergunta: "Qual é a quantidade de dentes da dentição decídua e a faixa etária de aparecimento?[cite: 1]",
        resposta: "20 dentes. Aparecem dos 6 meses aos 3 anos de idade.[cite: 1]"
    },
    {
        id: 2,
        cor: "Azul",
        categoria: "Fases da Dentição",
        pergunta: "Como se define a dentição mista?[cite: 1]",
        resposta: "Fase que inicia aos 6 anos com a perda dos primeiros dentes de leite e o nascimento do primeiro molar permanente. Ocorrem simultaneamente dentes de leite e permanentes.[cite: 1]"
    },
    {
        id: 3,
        cor: "Azul",
        categoria: "Fases da Dentição",
        pergunta: "Quantos dentes compõem a dentição permanente completa?[cite: 1]",
        resposta: "32 dentes.[cite: 1]"
    },
    {
        id: 4,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Qual é a função do dente de leite na mastigação e na fala?[cite: 1]",
        resposta: "Triturar alimentos sólidos e posicionar a língua para a articulação de palavras e sons.[cite: 1]"
    },
    {
        id: 5,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "O que significa dizer que o dente de leite atua como 'Guia de Espaço'?[cite: 1]",
        resposta: "O dente de leite segura o lugar exato no arco dental para o nascimento do dente permanente correspondente.[cite: 1]"
    },
    {
        id: 6,
        cor: "Vermelho",
        categoria: "Consequências",
        pergunta: "O que ocorre no arco dental durante a perda precoce de um dente de leite?[cite: 1]",
        resposta: "Os dentes vizinhos inclinam-se para o espaço vazio. Isso bloqueia a saída do dente permanente.[cite: 1]"
    },
    {
        id: 7,
        cor: "Amarelo",
        categoria: "Situação Prática",
        pergunta: "Qual é a função do dentista no acompanhamento da troca de dentes?[cite: 1]",
        resposta: "Monitorar a troca, prevenir cáries, avaliar a mordida e intervir para evitar problemas de alinhamento.[cite: 1]"
    }
];
