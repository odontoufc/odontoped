// perguntas.js

const dbPerguntas = [
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
        explicacao: "O mediador deve reforçar que a fala e a dicção dependem diretamente dos dentes para que a criança consiga pronunciar os sons corretamente."
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
        explicacao: "É importante lembrar aos pais que a estética e a autoestima estão ligadas à saúde bucal infantil, permitindo que a criança socialize sem medo."
    },
    {
        id: 3,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "Quantos dentes compõem a dentição decídua (dentes de leite) completa?",
        opcoes: {
            A: "32 dentes.",
            B: "12 dentes.",
            C: "20 dentes."
        },
        respostaCorreta: "C",
        explicacao: "São 20 dentes temporários que aparecem entre os 6 meses e os 3 anos de idade."
    },
    {
        id: 4,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "O que caracteriza a fase da Dentição Permanente?",
        opcoes: {
            A: "São os dentes que duram apenas até a adolescência.",
            B: "São 32 dentes definitivos que nos acompanharão pelo resto da vida, exigindo cuidado dobrado.",
            C: "É a fase em que os dentes de leite e permanentes dividem espaço."
        },
        respostaCorreta: "B",
        explicacao: "O mediador deve reforçar que os dentes permanentes não são substituídos naturalmente, logo a higiene e os cuidados devem ser redobrados."
    },
    {
        id: 5,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Seu filho tem 7 anos e você percebeu que ele possui dentes de leite e dentes maiores (permanentes) na boca ao mesmo tempo. O que isso significa?",
        opcoes: {
            A: "É um sinal de alerta e todos os dentes de leite devem ser extraídos imediatamente.",
            B: "É a fase da Dentição Mista, uma transição normal onde convivem dentes de leite e permanentes.",
            C: "Significa que ele não escovou os dentes direito."
        },
        respostaCorreta: "B",
        explicacao: "Aproveite para explicar que essa fase começa por volta dos 6 anos e é marcada pela troca gradativa dos dentes."
    },
    {
        id: 6,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Para garantir que a troca dos dentes ocorra bem e prevenir cáries, qual atitude o responsável deve tomar?",
        opcoes: {
            A: "Esperar a criança sentir dor para procurar ajuda.",
            B: "Fazer o acompanhamento regular com o dentista para que ele monitore a troca dos dentes e intervenha no momento certo.",
            C: "Apenas pedir para a criança escovar com mais força."
        },
        respostaCorreta: "B",
        explicacao: "O dentista não apenas trata problemas, mas avalia a mordida e previne problemas de alinhamento e mastigação antes que se agravem."
    },
    {
        id: 7,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "Se os dentes vizinhos se inclinarem para o espaço de um dente de leite perdido muito cedo, qual é uma provável consequência no futuro?",
        opcoes: {
            A: "O dente permanente não será afetado.",
            B: "O paciente poderá precisar de tratamentos ortodônticos mais complexos no futuro.",
            C: "O espaço vazio se fechará naturalmente sem problemas."
        },
        respostaCorreta: "B",
        explicacao: "Ao bloquear a saída do dente permanente, surgem problemas de alinhamento e mastigação que exigirão o uso de aparelhos ortodônticos (tratamentos complexos)."
    }
];
