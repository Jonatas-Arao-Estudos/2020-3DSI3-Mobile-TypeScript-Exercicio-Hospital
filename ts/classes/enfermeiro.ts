namespace hospital{
    export class Enfermeiro extends Funcionario{
        //Atributo
        private coren : number | undefined;

        //Getter
        getCoren() : number | undefined {
            return this.coren;
        }

        //Setter
        setCoren( coren : number ) : void {
            this.coren = coren;
        }
    }
}