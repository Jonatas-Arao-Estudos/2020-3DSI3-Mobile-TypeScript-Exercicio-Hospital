namespace hospital{
    let hospital = new Hospital;
    hospital.setNome('Seito University Hospital');

    let medicos = new Array<Medico>();
    for(let i = 0 ; i < 3 ; i++){
        medicos[i] = new Medico;
    }

    medicos[0].setNome('Emu Hojo');
    medicos[0].setCPF('20160100017');
    medicos[0].setCodFuncionario(0);
    medicos[0].setCrm(4513);
    medicos[0].setEspecialidade('Residente - Pediatra e CR');

    medicos[1].setNome('Hiiro Kagami');
    medicos[1].setCPF('20160200017');
    medicos[1].setCodFuncionario(2);
    medicos[1].setCrm(457);
    medicos[1].setEspecialidade('Cirurgião e CR');

    medicos[2].setNome('Taiga Hanaya');
    medicos[2].setCPF('20160200017');
    medicos[2].setCodFuncionario(3);
    medicos[2].setCrm(4510);
    medicos[2].setEspecialidade('Radiologista e CR');

    medicos.forEach( medico => {
        hospital.addMedico(medico);
    });
}