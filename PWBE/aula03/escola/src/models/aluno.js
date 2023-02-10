class Aluno{
    constructor(ra, nome, nascto){
        this.ra = ra;
        this.nome = nome;
        this.nascto = nascto;
    }
    calcIdade(){
        const hoje = new Date();
        const nascto = new Date(this.nascto);
        let idade = hoje.getFullYear() - nascto.getFullYear();
        const monthDiff = hoje.getMonth() - nascto.getMonth();
        if(monthDiff < 0 ||(monthDiff === 0 && hoje.getDate() < nascto.getDate())){
            idade--;
        }
        return idade;
    }
}

module.export = Aluno;