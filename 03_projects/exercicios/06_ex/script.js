function verificar(dados) {

  if(typeof dados === 'string') {

    console.log("Este dado e uma string!");

  } else if(typeof dados === 'boolean') {

    console.log("Este dado e um boolean!")

  } else if(typeof dados === 'number') {

    console.log("Este dado e um number!")

  }

}

verificar("Ola Mundo!");
verificar(true);
verificar(10);