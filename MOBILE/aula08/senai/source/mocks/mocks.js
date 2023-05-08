import bg1 from '../../assets/tipos/fic.jpeg'
import bg2 from '../../assets/tipos/cai.jpg';
import bg3 from '../../assets/tipos/tecnico.jpg';

const cursos = [
    {
        nome: 'Formação Inicial e Continuada',
        sigla: 'FIC',
        background: bg1,
        cursos: [
            {
            nome: 'Alimentos Funcionais',
            categoria: 'Á distância',
            detalhes:
                {
                    area: "Alimentos e Bebidas",
                    carga: "20 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O curso de Aperfeiçoamento Profissional de Alimentos Funcionais tem por objetivo o desenvolvimento de capacidades relativas ao aperfeiçoamento de acadêmicos, docentes, pesquisadores, profissionais das indústrias da área de alimentos e o público no geral sobre alimentos funcionais, bem como sobre as substâncias bioativas contidas nestes alimentos, visando sua aplicação na indústria de alimentos, de acordo com os seus requisitos legais.",  
                },
            },
            {
            nome: 'Arduíno',
            categoria: 'Presencial',
            detalhes: 
                {
                    area: "Eletrônica",
                    carga: "40 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O curso de Aperfeiçoamento Profissional de ARDUINO tem por objetivo o desenvolvimento de competências relativas à programação, utilizando linguagem própria do ARDUINO, visando aplicações em sistemas de controle nos segmentos da indústria, residência, IoT e Maker, de acordo com procedimentos técnicos, de qualidade, segurança e saúde no trabalho.",  
                },
            },
            {
            nome: 'Metrologia',
            categoria: 'Á distância' ,
            detalhes:
                {
                    area: "Metalmecânica",
                    carga: "14 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"Adquirir conhecimento básico necessário à aplicação e interpretação das medidas na área da mecânica. O curso tem como objetivo explorar os principais temas relacionados à metrologia desde os instrumentos mais básicos como as réguas até instrumentos com um grau maior de precisão..",  
                },
            },
            {
            nome: 'Liderança',
            categoria: 'Presencial' ,
            detalhes:
                {
                    area: "Gestão de RH",
                    carga: "24 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O Curso de Aperfeiçoamento Profissional Liderança tem por objetivo o desenvolvimento de competências para aplicar as técnicas de liderança, produtividade e administração dos conflitos nas relações de trabalho.",  
                },
            },
        ]
    },
    {
        nome: 'Cursos de Aprendizagem Industrial',
        sigla: 'CAI',
        background: bg2,
        cursos: [
            {
            nome: 'Eletricista de Manutenção Eletroeletrônica',
            categoria: 'Presencial' ,
            detalhes:
                {
                    area: "Eletricidade",
                    carga: "1600 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O curso de Aprendizagem Industrial Eletricista de Manutenção Eletroeletrônica tem por objetivo proporcionar qualificação profissional na instalação e manutenção de sistemas eletroeletrônicos em baixa tensão, de acordo com normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente.",  
                },
            },
            {
            nome: 'Mecânico de bombas',
            categoria: 'Presencial',
            detalhes:
                {
                    area: "Metalmecânica",
                    carga: "800 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O curso de Aprendizagem Industrial Mecânico de Bombas, Motores, Compressores e Equipamentos de Transmissão tem por objetivo proporcionar qualificação profissional para a realização da manutenção corretiva e preventiva em conjuntos mecânicos de máquinas e equipamentos, em conformidade às normas e procedimentos de saúde e segurança no trabalho, de meio ambiente e de qualidade.",  
                },
            },
            {
            nome: 'Mecânico de usinagem',
            categoria: 'Presencial',
            detalhes:
                {
                    area: "Metalmecânica",
                    carga: "1600 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O Curso de Aprendizagem Industrial Mecânico de Usinagem tem por objetivo proporcionar qualificação profissional na execução de atividades relacionadas à usinagem de peças em materiais ferrosos e não ferrosos, seguindo normas e procedimentos técnicos, de manutenção, segurança, meio ambiente e qualidade.",  
                },
            },
        ]
    },
    {
        nome: 'Cursos técnicos',
        sigla: 'Técnico',
        background: bg3,
        cursos: [
            {
            nome: 'Analise e Desenvolvimento de sistemas',
            categoria: 'Presencial' ,
            detalhes: 
                {
                    area: "Tecnologia da Informação",
                    carga: "1200 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.",  
                },
            },
            {
            nome: 'Eletrônica',
            categoria: 'Presencial',
            detalhes:
                {
                    area: "Eletrônica",
                    carga: "1200 horas",
                    telefone: "19 3837-6300",
                    email: "senaijaguariuna@sp.senai.br",
                    descricao:"O Curso Técnico em Eletrônica tem por objetivo habilitar profissionais para desenvolver circuitos eletrônicos, integrar de sistemas eletrônicos e realizar a manutenção de circuitos e sistemas eletrônicos, seguindo normas técnicas, ambientais, de qualidade, de saúde e segurança no trabalho.",  
                },
            },
        ]
    },
];

export default cursos;