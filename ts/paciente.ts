namespace hospital{
    export class Paciente extends Pessoa{
        //Atributo
        private codPaciente : number | undefined;

        //Getter
        getCodPaciente() : number | undefined {
            return this.codPaciente;
        }

        //Setter
        setCodPaciente( codPaciente : number ) : void {
            this.codPaciente = codPaciente;
        }
    }
}