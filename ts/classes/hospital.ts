namespace hospital{
    export class Hospital{
        // Atributos
        private nome : string | undefined;
        private enfermeiros : Array<Enfermeiro> = [];
        private medicos : Array<Medico> = [];
        private pacientes : Array<Paciente> = [];

        // Getter
        getNome() : string | undefined {
            return this.nome;
        }

        getEnfermeiros() : Array<Enfermeiro> {
            return this.enfermeiros;
        }

        getMedicos() : Array<Medico> {
            return this.medicos;
        }

        getPacientes() : Array<Paciente>{
            return this.pacientes;
        }

        // Setter
        setNome( nome : string ) : void {
            this.nome = nome;
        }

        //Adds
        addEnfermeiro( enfermeiro : Enfermeiro ) : void {
            this.enfermeiros.push(enfermeiro);
        }

        addMedico( medico : Medico ) : void {
            this.medicos.push(medico);
        }

        addPaciente( paciente : Paciente  ) : void {
            this.pacientes.push(paciente);
        }

    }
}