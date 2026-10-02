// perguntas.js

const dbPerguntas = [
    // ---------------------------------------------------------
    // 🟢 SETOR VERDE: FUNÇÕES DOS DENTES (5 Perguntas)
    // ---------------------------------------------------------
    {
        id: 1,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Além de triturar os alimentos sólidos para a criança crescer saudável, como os dentes de leite ajudam na comunicação?",
        opcoes: {
            A: "Eles ajudam na posição correta da língua para articular palavras e sons.",
            B: "Eles não têm nenhuma influência na fala da criança.",
            C: "Eles servem apenas para melhorar a audição."
        },
        respostaCorreta: "A",
        explicacao: "A fala e a dicção dependem diretamente dos dentes (principalmente os da frente) para que a criança consiga pronunciar os sons corretamente."
    },
    {
        id: 2,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Por que cuidar dos dentes de leite afeta o bem-estar emocional da criança?",
        opcoes: {
            A: "Porque dentes saudáveis ajudam a criança a sorrir e a se relacionar sem vergonha (estética e autoestima).",
            B: "Porque não cuidar dos dentes deixa a criança mais inteligente.",
            C: "Porque os dentes de leite definem a cor do cabelo da criança."
        },
        respostaCorreta: "A",
        explicacao: "A estética e a autoestima estão ligadas à saúde bucal infantil. Uma boca saudável permite que a criança brinque, sorria e socialize sem medo ou sofrimento."
    },
    {
        id: 3,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Por que dizemos que o dente de leite atua como um 'guia' natural no arco dental?",
        opcoes: {
            A: "Porque ele determina a cor e o tamanho definitivo da gengiva da criança.",
            B: "Porque ele guarda o espaço exato e direciona o dente permanente para nascer no lugar certo.",
            C: "Porque ele empurra os outros dentes de leite para fora da boca."
        },
        respostaCorreta: "B",
        explicacao: "O dente de leite é um marcador de lugar. Perdê-lo antes da hora faz com que o espaço se feche, bloqueando o caminho do dente permanente."
    },
    {
        id: 4,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Como a mastigação correta utilizando todos os dentes de leite ajuda no desenvolvimento do rosto da criança?",
        opcoes: {
            A: "Ela estimula o crescimento e o fortalecimento dos ossos e músculos da face de forma equilibrada.",
            B: "Ela faz o rosto da criança diminuir de tamanho para os dentes caberem.",
            C: "Não tem influência, o rosto cresce da mesma forma sem a mastigação."
        },
        respostaCorreta: "A",
        explicacao: "O ato de mastigar alimentos sólidos exercita a musculatura e os maxilares. Sem isso, a arcada pode ficar estreita, faltando espaço para os dentes no futuro."
    },
    {
        id: 5,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Qual é o papel fundamental dos dentes de leite na saúde geral da criança?",
        opcoes: {
            A: "Eles servem apenas para a criança aprender a usar talheres e copos.",
            B: "Eles permitem triturar bem os alimentos sólidos, garantindo uma boa digestão e absorção de nutrientes essenciais.",
            C: "Eles apenas deixam a criança com vontade de comer doces."
        },
        respostaCorreta: "B",
        explicacao: "A mastigação é a primeira fase da digestão. Crianças com dor de dente ou cárie severa têm dificuldade em se alimentar e podem ter a nutrição prejudicada."
    },

    // ---------------------------------------------------------
    // 🔵 SETOR AZUL: FASES E TROCA DE DENTES (5 Perguntas)
    // ---------------------------------------------------------
    {
        id: 6,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "Quantos dentes compõem a dentição decídua (dentes de leite) completa?",
        opcoes: {
            A: "32 dentes.",
            B: "12 dentes.",
            C: "20 dentes."
        },
        respostaCorreta: "C",
        explicacao: "São 20 dentes temporários no total (10 em cima e 10 embaixo)."
    },
    {
        id: 7,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "O que caracteriza a fase da Dentição Permanente?",
        opcoes: {
            A: "São os dentes que duram apenas até a adolescência.",
            B: "São 32 dentes definitivos que nos acompanharão pelo resto da vida, exigindo cuidado dobrado.",
            C: "É a fase em que os dentes de leite e permanentes dividem espaço."
        },
        respostaCorreta: "B",
        explicacao: "Ao contrário dos dentes de leite, os dentes permanentes perdidos não são substituídos naturalmente pelo corpo."
    },
    {
        id: 8,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "Em qual faixa etária costuma ocorrer a chegada dos primeiros dentes de leite e quando essa fase se completa?",
        opcoes: {
            A: "Começa por volta dos 6 meses e se completa próximo aos 3 anos de idade.",
            B: "Começa aos 3 anos e se completa aos 10 anos.",
            C: "A criança já nasce com todos os dentes de leite visíveis."
        },
        respostaCorreta: "A",
        explicacao: "Geralmente, os primeiros a nascer são os incisivos centrais inferiores (embaixo) aos 6 meses, finalizando com os molares aos 3 aninhos."
    },
    {
        id: 9,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "Geralmente, quais são os primeiros dentes de leite a amolecer e cair na fase de troca?",
        opcoes: {
            A: "Os dentes de trás (molares).",
            B: "Os caninos (presas).",
            C: "Os incisivos centrais inferiores (os dois dentinhos da frente de baixo)."
        },
        respostaCorreta: "C",
        explicacao: "A dentição mista começa por volta dos 6 anos, marcada pela queda desses dois dentinhos da frente para dar lugar aos permanentes."
    },
    {
        id: 10,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "Qual é o dente permanente que costuma nascer lá no fundo da boca, por volta dos 6 anos, sem que nenhum dente de leite precise cair?",
        opcoes: {
            A: "O dente do siso (terceiro molar).",
            B: "O primeiro molar permanente.",
            C: "O incisivo lateral."
        },
        respostaCorreta: "B",
        explicacao: "Esse dente nasce atrás do último dente de leite. Muitos pais confundem achando que ele é temporário e descuidam da escovação."
    },

    // ---------------------------------------------------------
    // 🟡 SETOR AMARELO: SITUAÇÃO PRÁTICA / ACOMPANHAMENTO (5 Perguntas)
    // ---------------------------------------------------------
    {
        id: 11,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Seu filho tem 7 anos e possui dentes de leite e dentes maiores (permanentes) na boca ao mesmo tempo. O que isso significa?",
        opcoes: {
            A: "É um sinal de alerta e todos os dentes de leite devem ser extraídos imediatamente.",
            B: "É a Dentição Mista, uma transição absolutamente normal.",
            C: "Significa que ele não escovou os dentes direito na infância."
        },
        respostaCorreta: "B",
        explicacao: "Nesta fase de transição (dos 6 aos 12 anos em média), é comum a criança ter uma boca com dentes de diferentes tamanhos e cores."
    },
    {
        id: 12,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Para garantir que a troca dos dentes ocorra bem e prevenir cáries, qual atitude o responsável deve tomar?",
        opcoes: {
            A: "Esperar a criança sentir dor forte para procurar ajuda.",
            B: "Fazer o acompanhamento regular com o dentista para que ele monitore a troca e intervenha no momento certo.",
            C: "Apenas pedir para a criança escovar com mais força."
        },
        respostaCorreta: "B",
        explicacao: "O dentista (odontopediatra) previne a perda de espaço e alinhamento da mordida antes que o problema se torne complexo."
    },
    {
        id: 13,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Durante a 'dentição mista', a escovação exige supervisão redobrada dos pais. Qual o principal motivo?",
        opcoes: {
            A: "Porque os dentes têm tamanhos diferentes, com espaços vazios e gengiva sensível, o que dificulta muito a limpeza pela criança.",
            B: "Porque a criança já pode usar qualquer creme dental de adulto e em grande quantidade.",
            C: "Porque a gengiva nunca inflama nessa idade, não precisando do uso do fio dental."
        },
        respostaCorreta: "A",
        explicacao: "A desorganização natural da arcada durante as trocas cria 'esconderijos' perfeitos para restos de alimentos, aumentando muito o risco de cárie."
    },
    {
        id: 14,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "A criança bateu a boca no parquinho e perdeu um dente de leite inteiro muito antes da época de amolecer. O que fazer?",
        opcoes: {
            A: "Esperar em casa até o permanente nascer, afinal, era só um dente de leite.",
            B: "Procurar o dentista rapidamente para avaliar se o permanente foi machucado e se precisará de um mantenedor de espaço.",
            C: "Guardar o dente de leite na caixinha e esquecer o assunto."
        },
        respostaCorreta: "B",
        explicacao: "Traumas podem prejudicar a formação do dente permanente que está dentro do osso ou fazer os dentes vizinhos fecharem o espaço vago."
    },
    {
        id: 15,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Durante a Dentição Mista, além de tratar cáries, o que o Odontopediatra avalia principalmente nas consultas?",
        opcoes: {
            A: "Apenas a cor dos dentes da criança.",
            B: "O desenvolvimento ósseo, a sequência correta em que os dentes estão caindo/nascendo e a forma como a criança morde (oclusão).",
            C: "Ele apenas extrai dentes soltos."
        },
        respostaCorreta: "B",
        explicacao: "O acompanhamento preventivo permite detectar precocemente mordidas cruzadas ou falta de espaço no maxilar."
    },

    // ---------------------------------------------------------
    // 🔴 SETOR VERMELHO: CONSEQUÊNCIAS DA PERDA PRECOCE (5 Perguntas)
    // ---------------------------------------------------------
    {
        id: 16,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "Se os dentes vizinhos se inclinarem para o espaço de um dente de leite perdido muito cedo, qual é uma provável consequência no futuro?",
        opcoes: {
            A: "O dente permanente não será afetado.",
            B: "O paciente possivelmente precisará de tratamentos ortodônticos mais complexos.",
            C: "O espaço vazio se fechará naturalmente e um dente extra vai nascer."
        },
        respostaCorreta: "B",
        explicacao: "Com o caminho bloqueado pelos dentes que tombaram para o lado, o dente definitivo pode nascer torto ou ficar preso dentro do osso."
    },
    {
        id: 17,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "Muitos pensam: 'É só um dente de leite, vai cair mesmo, não precisa tratar a cárie'. Por que esse pensamento está errado?",
        opcoes: {
            A: "Porque a infecção da cárie pode atravessar a raiz e causar manchas ou defeitos irreparáveis no dente permanente que está nascendo logo abaixo.",
            B: "Porque o dente de leite com cárie nunca mais vai cair.",
            C: "O pensamento está correto, os dentes de leite não sentem dor."
        },
        respostaCorreta: "A",
        explicacao: "Os dentes de leite possuem raízes e nervos. Uma infecção neles causa dor aguda e compromete a saúde do dente adulto em formação."
    },
    {
        id: 18,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "Se a criança perder os dentes da frente muito antes da hora devido a uma cárie severa, qual problema ela pode enfrentar?",
        opcoes: {
            A: "Ela vai respirar melhor pelo nariz sem os dentes atrapalhando.",
            B: "Dificuldade grave na fala, não conseguindo pronunciar sons que precisam do apoio da língua nos dentes.",
            C: "Os dentes permanentes vão nascer mais rápido e perfeitos."
        },
        respostaCorreta: "B",
        explicacao: "Sons como 'T', 'D', 'S' e 'V' dependem dos dentes da frente. Além da fala, a perda afeta brutalmente a estética e o convívio escolar da criança."
    },
    {
        id: 19,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "O que acontece com a alimentação de uma criança que perde os dentes do fundo (molares de leite) precocemente por cárie?",
        opcoes: {
            A: "Ela passa a ter dificuldades em triturar alimentos duros, podendo rejeitar comidas saudáveis e sofrer com problemas digestivos.",
            B: "A digestão dela vai ficar mais rápida porque ela engolirá a comida inteira.",
            C: "Ela não sofrerá impacto algum na rotina alimentar."
        },
        respostaCorreta: "A",
        explicacao: "Sem os 'trituradores', a criança passa a ter preguiça de mastigar carnes, frutas e vegetais fibrosos, optando apenas por comidas pastosas."
    },
    {
        id: 20,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "O que significa dizer que os dentes permanentes nasceram 'apinhados' devido à perda precoce de um dente de leite?",
        opcoes: {
            A: "Significa que eles nasceram menores que o tamanho normal.",
            B: "Significa que eles nasceram encavalados e amontoados uns sobre os outros porque o espaço na arcada encolheu.",
            C: "Significa que eles nasceram totalmente brancos e saudáveis."
        },
        respostaCorreta: "B",
        explicacao: "Sem a presença de um dente de leite para segurar a 'vaga', a arcada perde espaço e os novos dentes disputam lugar, nascendo tortos e girados."
    }
];
