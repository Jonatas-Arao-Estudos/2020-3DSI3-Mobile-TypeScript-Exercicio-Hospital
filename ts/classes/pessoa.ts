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
                this.cpf = cpf.substring(0,3) + '.' + cpf.substring(3,6) + '.' + cpf.substring(6,9) + '-' + cpf.substring(9,11);
            }
            else{
                console.error('CPF deve ter 11 caracteres');
            }
        }
    }
}