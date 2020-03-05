namespace hospital{
    export class Funcionario extends Pessoa{
        //Atributo
        private codFuncionario : number | undefined;

        //Getter
        getCodFuncionario() : number | undefined {
            return this.codFuncionario;
        }

        //Setter
        setCodFuncionario( codFuncionario : number ) : void {
            this.codFuncionario = codFuncionario;
        }
    }
}