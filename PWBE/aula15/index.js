class Componente {
    constructor(obj) {
        this.obj = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
    print() { }
}

// representa os objetos folha na árvore
class Folha extends Componente {
    constructor(obj) {
        super(obj);
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
    }
}

// representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.filhos = [];
    }
    add(componente) {
        this.filhos.push(componente);
    }
    remove(componente) {raiz
        const index = this.filhos.indexOf(componente);
        this.filhos.splice(index, 1);
    }
    getfilho(index) {
        return this.filhos[index];
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
        this.filhos.forEach(filho => {
            filho.print();
        });
    }
}

const clientes = [{ id: 1, nome: "Jair"}, {id: 2 ,nome :"Ana"}]
const pedidos = [{ id: 1, cliente: "1", data: "30/Abril"}, {id: 2, cliente: "2" ,data :"02/Maio"}]

const raiz = new Composite(clientes[0]);
raiz.add(new Folha(pedidos[0]));
raiz.add(new Folha(pedidos[1]));

const esposa = new Composite(clientes[1])
esposa.add(new Folha(pedidos[1]))

raiz.add(esposa)

raiz.print();

