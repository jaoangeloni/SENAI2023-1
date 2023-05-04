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
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                },
            },
            {
            nome: 'Arduíno',
            categoria: 'Presencial',
            detalhes: 
                {
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                }
            },
            {
            nome: 'Metrologia',
            categoria: 'Á distância' ,
            detalhes:
                {
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                }
            },
            {
            nome: 'Liderança',
            categoria: 'Presencial' ,
            detalhes:
                {
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                } 
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
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                }
            },
            {
            nome: 'Mecânico de bombas',
            categoria: 'Presencial',
            detalhes:
                {
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                }
            },
            {
            nome: 'Mecânico de usinagem',
            categoria: 'Presencial',
            detalhes:
                {
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                }
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
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"  
                }
            },
            {
            nome: 'Eletrônica',
            categoria: 'Presencial',
            detalhes:
                {
                    descricao:"aaaaaaaaaaaaaaaaaaaaaaaaa"
                }  
            },
        ]
    },
];

export default cursos;