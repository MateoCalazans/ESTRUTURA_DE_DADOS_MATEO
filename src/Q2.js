class PilhaDupla {
    constructor(size) {
        this.tamanho = size;
        this.dados = new Array(size);
        this.topoA = 0;
        this.topoB = size - 1;
    }
    pushA(elemento){
        if (this.isFull())throw new Error("Stack overflow");
        this.dados[this.topoA] = elemento;
        this.topoA++;
    }
    pushB(elemento){
        if (this.isFull())throw new Error("Stack overflow");
        this.dados[this.topoB] = elemento;
        this.topoB--;
    }
    popA(){
        if(this.isEmptyA())throw new Error("Stack underflow");
        this.topoA--;
        return this.dados[this.topoA];
    }
    popB(){
        if(this.isEmptyB())throw new Error("Stack underflow");
        this.topoB++;
        return this.dados[this.topoB];
    }
    isEmptyA(){
        return this.topoA === 0;

    }
    isEmptyB(){
        return this.topoB=== this.tamanho - 1;
    }
    isFull(){
        return this.topoA > this.topoB;
    }
}
export default PilhaDupla;