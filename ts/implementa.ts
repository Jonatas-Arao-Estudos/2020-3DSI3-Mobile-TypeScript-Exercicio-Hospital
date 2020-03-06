namespace hospital{
    //Instanciando Hospital
    let hospital = new Hospital;
    hospital.setNome('Seito University Hospital');

    //Instanciando Médicos
    let medicos = new Array<Medico>();
    for(let i = 0 ; i < 3 ; i++){
        medicos[i] = new Medico;
    }

    medicos[0].setNome('Emu Hojo');
    medicos[0].setCPF('20160100018');
    medicos[0].setCodFuncionario(0);
    medicos[0].setCrm(4513);
    medicos[0].setEspecialidade('Residente - Pediatra e CR');

    medicos[1].setNome('Hiiro Kagami');
    medicos[1].setCPF('20160200018');
    medicos[1].setCodFuncionario(2);
    medicos[1].setCrm(457);
    medicos[1].setEspecialidade('Cirurgião e CR');

    medicos[2].setNome('Taiga Hanaya');
    medicos[2].setCPF('20160200018');
    medicos[2].setCodFuncionario(3);
    medicos[2].setCrm(4510);
    medicos[2].setEspecialidade('Radiologista e CR');

    medicos.forEach( medico => {
        hospital.addMedico(medico);
    });

    //Instanciando Enfermeiros
    let enfermeiros = new Array<Enfermeiro>();
    for(let i = 0 ; i < 3 ; i++){
        enfermeiros[i] = new Enfermeiro;
    }

    enfermeiros[0].setNome('Asuna Karino');
    enfermeiros[0].setCPF('20160000118');
    enfermeiros[0].setCodFuncionario(1801);
    enfermeiros[0].setCoren(4510);

    enfermeiros[1].setNome('Mizuki Nishikikoji');
    enfermeiros[1].setCPF('20160000218');
    enfermeiros[1].setCodFuncionario(1802);
    enfermeiros[1].setCoren(4520);

    enfermeiros[2].setNome('Satsuki Ogimachi');
    enfermeiros[2].setCPF('20160000318');
    enfermeiros[2].setCodFuncionario(1803);
    enfermeiros[2].setCoren(4530);

    enfermeiros.forEach( enfermeiro => {
        hospital.addEnfermeiro(enfermeiro);
    });

    //Instanciando Pacientes
    let pacientes = new Array<Paciente>();
    for(let i = 0 ; i < 3 ; i++){
        pacientes[i] = new Paciente;
    }

    pacientes[0].setNome('Saki Momose');
    pacientes[0].setCPF('20160010018');
    pacientes[0].setCodPaciente(111);

    pacientes[1].setNome('Nico Saiba');
    pacientes[1].setCPF('20160800018');
    pacientes[1].setCodPaciente(3614);

    pacientes[2].setNome('Takeru Tenkuji');
    pacientes[2].setCPF('20150100017');
    pacientes[2].setCodPaciente(5013);

    pacientes.forEach( paciente => {
        hospital.addPaciente(paciente);
    });

    //Adicionando os objetos na classe Hospital
}