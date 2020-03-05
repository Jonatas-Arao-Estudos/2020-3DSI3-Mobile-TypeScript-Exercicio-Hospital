namespace hospital{
    export class Medico extends Funcionario{
        // Atributos
        private crm : number | undefined;
        private especialidade : string | undefined;

        // Getters
        getCrm() : number | undefined {
            return this.crm;
        }

        getEspecialidade() : string | undefined {
            return this.especialidade;
        }

        // Setters
        setCrm( crm : number ) : void {
            this.crm = crm;
        }

        setEspecialidade( especialidade : string ) : void {
            this.especialidade = especialidade;
        }
    }
}