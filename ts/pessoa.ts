namespace hospital{
    export class Pessoa{
        // Atributos
        private nome : string | undefined;
        private cpf : string | undefined;

        // Getters
        getNome() : string | undefined {
            return this.nome;
        }

        getCPF() : string | undefined {
            return this.cpf;
        }

        // Setters
        setNome( nome : string ) : void {
            this.nome = nome;
        }

        setCPF( cpf : string ) : void {
            if( cpf.length == 11 ){
                this.cpf = cpf;
            }
            else{
                console.error('CPF deve ter 11 caracteres');
            }
        }
    }
}