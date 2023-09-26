function Pesquisar(){
    const texto = document.querySelector("h1");
    const paragrafo = document.querySelector("p");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
            
        if(valor=="aries" || valor=="áries"){
                texto.innerHTML = "Mu de Áries";
                paragrafo.innerHTML = "“Conhecedor da Essência da Armadura” Cavaleiro de Ouro do signo de Áries. Natural do Tibete. Elegante e tem personalidade pacífica. É o único capaz de restaurar armaduras. Tem admiração pelo Dohko, amigo do mestre Shion e o chama de Velho Mestre. É forte nas técnicas de Psicocinese, teletransporte e de defesa Muralha de Cristal que aplicam a supercapacidade."
                imagem.setAttribute("src","img/mudearies.png");
                imagem.setAttribute("width","300px");
        }

        else if(valor=="touro"){
                texto.innerHTML = "Aldebaran de Touro";
                paragrafo.innerHTML = "“Touro Dourado Indomável” Cavaleiro de Ouro do signo de touro. Natural do Brasil. Possui físico admirável que não sofre impacto nenhum dos oponentes. Assim como Aeolia, concentra os golpes com os punhos. De poucas palavras, estuda o oponente pela troca de socos. Desfere o golpe mortal Grande Chifre baseado na técnica Iainuki."
                imagem.setAttribute("src","img/aldebarantdetouro.png");
                imagem.setAttribute("width","300px");
        }
            
        else if(valor=="gemeos" || valor=="gêmeos"){
                texto.innerHTML = "Saga de Gêmeos";
                paragrafo.innerHTML = "“Encarnação de Deus” Cavaleiro de Ouro do signo de gêmeos. Natural da Grécia. Possui duas personalidades, do bem e do mal. Tem experiências de lutas contínuas com seu lado mal instalado em seu corpo. Nessa condição, ameaçou a vida da Deusa Atena mas foi impedido por Aiolos de Sagitário. Mesmo entre os Cavaleiros de Ouro, ele é o mais poderoso, utilizando o golpe Explosão Galáctica com elevada concentração de energia cósmica capaz de destruir algo comparado a uma galáxia inteira."
                imagem.setAttribute("src","img/sagadegemeos.png");
                imagem.setAttribute("width","300px");
        }
        else if(valor=="cancer" || valor=="câncer"){
                texto.innerHTML = "Máscara da Morte de Câncer";
                paragrafo.innerHTML = "“Homem que se diverte com batalhas e massacres” Cavaleiro de Ouro do signo de câncer. Natural da Itália. Manipula o buraco que liga ao submundo. Tem como valor a definição da justiça muda com o passar do tempo e já ajudou o Papa (Saga) que se converteu ao mal. Talvez o seu modo de viver possa ser descrito como humano dentre os Cavaleiros de Ouro. Desfere o golpe mortal Ondas dos Infernos que envia para o submundo a alma dos oponentes."
                imagem.setAttribute("src","img/mascaradamortedecancer.png");
                imagem.setAttribute("width","300px");
        }
            
        else if(valor=="leao" || valor=="leão"){
                texto.innerHTML = "Aiolia de Leão";
                paragrafo.innerHTML = "“Paradigma do Cavaleiro - Leão de Ouro adormecido” É o herói desta obra. Cavaleiro de Ouro do signo de Leão. Natural da Grécia. Tem a personalidade mais correta entre os Cavaleiros de Ouro e não gosta de trapaças. É um cavaleiro de honra que desfere abertamente golpes do tipo relâmpago na velocidade da luz. É o irmão mais novo de Aiolos de Sagitário que foi acusado de irmão traidor mas com a grande missão de salvar Atena descobre uma verdade bravamente guardada. Finalmente se reencontra com Aiolos que fora exterminado no Muro das Lamentações."
                imagem.setAttribute("src","img/aoliadeleao.png");
                imagem.setAttribute("width","300px");
        }
        else if(valor=="virgem"){
                texto.innerHTML = "Shaka de Virgem";
                paragrafo.innerHTML = "“Homem mais próximo de Deus” Cavaleiro de Ouro do signo de virgem. Natural da Índia. É o mais sensato entre os Cavaleiros de Ouro. Não se abala com qualquer coisa e avalia tudo com muita calma. Não é cego mas mantem os olhos fechados e se priva da visão para elevar seu cosmo ao extremo. No momento que os olhos se abrem, bloqueia os cinco sentidos do oponente, até mesmo o sexto sentido, e desfere o golpe de defesa e ataque Tesouro do Céu."
                imagem.setAttribute("src","img/shakadevirgem.png");
                imagem.setAttribute("width","300px");
        }
        
        else if(valor=="libra"){
                texto.innerHTML = "Dohko de Libra";
                paragrafo.innerHTML = "“Balança do bem e do mal” Cavaleiro de Ouro do signo de libra. Natural da China. Um dos únicos dois sobreviventes da última Guerra Santa, é chamado respeitosamente por todos de Velho Mestre. Originalmente é um Cavaleiro que luta com seus próprios punhos mas a armadura de libra é adaptada com equipamentos de espada e de lança. Essas armas tem poder suficiente para destruir estrelas e precisa de autorização de Atena para serem utilizadas. Tem força o bastante em seus punhos, incluindo o golpe mortal Cólera dos Cem Dragões."
                imagem.setAttribute("src","img/dohkodelibra.png");
                imagem.setAttribute("width","300px");
        }
        else if(valor=="escorpiao" || valor=="escorpião"){
                texto.innerHTML = "Milo de Escorpião";
                paragrafo.innerHTML = "“Impacto Vermelho” Cavaleiro de Ouro do signo de escorpião. Natural da Grécia. Como o Aiolia, é espontâneo e tem forte espírito de justiça. Tem muito orgulho por ser um Cavaleiro de Ouro. A técnica mortal Agulha Escarlate usa as pontas dos dedos para espetar violentamente quinze pontos do oponente, paralisando os seus cinco sentidos. Era muito amigo de Camus de Aquário."
                imagem.setAttribute("src","img/milodeescorpiao.png");
                imagem.setAttribute("width","300px");
        }
    
        else if(valor=="sagitario" || valor=="sagitário"){
                texto.innerHTML = "Aiolos de Sagitário";
                paragrafo.innerHTML = "“Criador - Paradigma do Cavaleiro” Cavaleiro de Ouro do signo de sagitário. Natural da Grécia. É o irmão mais velho de Aiolia e foi considerado traidor pela morte de Atena. Mas na verdade é um cavaleiro exemplar que dedicou sua vida na grande missão de proteger Atena mesmo desprezado pelos que o rodeavam. Tido como candidato ao próximo Papa, tem grande caráter e espírito de luta e disposto a sacrificar sua própria vida se for por uma causa justa. Finalmente, reencontra com seu irmão mais novo Aiolia no Muro das Lamentações."
                imagem.setAttribute("src","img/aiolosdesagitario.png");
                imagem.setAttribute("width","300px");
        }
        else if(valor=="capricornio" || valor=="capricórnio"){
                texto.innerHTML = "Shura de Capricórnio";
                paragrafo.innerHTML = "“Homem que esconde a técnica de corpo chamado Espada Sagrada” Cavaleiro de Ouro do signo de capricórnio. Natural da Espanha. No passado, recebeu a vida do Papa (Saga) e teve um confronto direto com Aiolos. Originalmente tinha grande lealdade à Deusa e no episódio de Hades, voltou à ativa lutando sob comando de Hades ao mesmo tempo em que, nas batalhas ao lados dos companheiros, deu a vida como Cavaleiro de Ouro de Atena."
                imagem.setAttribute("src","img/shuradecapricornio.png");
                imagem.setAttribute("width","300px");
        }
        else if(valor=="aquario" || valor=="aquário"){
                texto.innerHTML = "Camus de Aquário";
                paragrafo.innerHTML = "“Feiticeiro da Água e do Gelo” Cavaleiro de Ouro do signo de aquário. Natural da França. Por trás de sua aparente frieza, esconde uma alma quente. Em vez de julgar o bem e o mal, continua a lutar sem perder o foco. É o que ele busca como cavaleiro. Utiliza a técnica de luta do gelo, sendo assim chamado de Feificeiro da Água e do Gelo. Seu golpe mortal máximo, Execução Aurora, é uma poderosa rajada de ar frio, em zero absoluto, que pulveriza tudo aquilo que for atingido."
                imagem.setAttribute("src","img/camusdeaquario.png");
                imagem.setAttribute("width","300px");
        }
    
        else if(valor=="peixes"){
                texto.innerHTML = "Afrodite de Peixes";
                paragrafo.innerHTML = "“Cavaleiro da beleza que se orgulha do brilho existente entre o céu e a terra” Cavaleiro de Ouro do signo de peixes. Natural da Suécia. É o mais belo de todas as 88 constelações e acredita fielmente que a força é a justiça. Utiliza as características da rosa pelo Cosmo e aplica os golpes. As Rosas Diabólicas Reais são flores vermelhas com veneno para atacar os inimigos. Apesar do lema a força é a justiça, é o Cavaleiro que mais se preocupa com a paz na superfície."
                imagem.setAttribute("src","img/afroditedepeixes.png");
                imagem.setAttribute("width","300px");
        }
        
        else{
                texto.innerHTML = "Cavaleiro não encontrado... =(";
                imagem.setAttribute("src","img/x.webp");
                imagem.setAttribute("width","250px");
        }
    }