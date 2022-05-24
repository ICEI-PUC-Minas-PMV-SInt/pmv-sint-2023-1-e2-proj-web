function addVeic() {
    // Pegando os valores dos inputs 
    const placa = $('input[id=placa]').val();
    const ano = $('input[id=ano]').val();
    const marca = $('input[id=marca]').val();
    const cor = $('input[id=cor]').val();
    const quilometragem = $('input[id=quilometragem]').val();
    const cilindrada = $('input[id=cilindrada]').val();

    // Criando objeto com dados dos inputs
    const dataObj = { placa, ano, marca, cor, quilometragem, cilindrada };

    /* 
    Todo valor do localstorage é null no inicio (antes de adicionarmos algum valor nele),
    Por isso checamos se é null, ou seja, se será o primeiro item a ser adicionado.
    */
    if (localStorage.getItem('veiculos') === null) {
      // Adicionando um array com um objeto no localstorage
      localStorage.setItem('veiculos', JSON.stringify([dataObj]));
    } else {
      // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
      localStorage.setItem(
        'veiculos',
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([...JSON.parse(localStorage.getItem('veiculos')),dataObj]));
    }
    //createRow();
   // renderItem(dataObj);
    limpaInput();
    
  }
    //Funcão para limpar os inputs ao salvar/adicionar
    function limpaInput(){
    placa         = $('input[id=placa]').val("");
    ano           = $('input[id=ano]').val("");
    marca         = $('input[id=marca]').val("");
    cor           = $('input[id=cor]').val("");
    quilometragem = $('input[id=quilometragem]').val("");
    cilindrada    = $('input[id=cilindrada]').val("");
    }
    
  function renderItem(veiculo) {
    // Adicionando uma div 
    /*
    $('.veiculos').append(`
    <div class="list-group-item">
      <strong>Placa: </strong>          ${veiculo.placa}<br>
      <strong>Ano:   </strong>          ${veiculo.ano}<br>
      <strong>Marca:   </strong>        ${veiculo.marca}<br>
      <strong>Cor:  </strong>           ${veiculo.cor}<br>
      <strong>Quilometragem:   </strong>${veiculo.quilometragem}<br>
      <strong>Cilindrada:   </strong>   ${veiculo.cilindrada}
    </div>`);
  }
*/
  $('.veiculos').append(`
  <tr class="list-veiculos-item">
    <td>${veiculo.placa}</td>   
    <td>${veiculo.ano}</td>  
    <td>${veiculo.marca}</td>
    <td>${veiculo.cor}</td>
    <td>${veiculo.quilometragem}</td>
    <td>${veiculo.cilindrada}</td>
  </
  tr>`);

}

  function getItems() {
    // Pegando o array do localstorage
    const veiculos = JSON.parse(localStorage.getItem('veiculos'));

    // Para cada item do array, é renderizado no html
    veiculos.forEach(veiculo => renderItem(veiculo));
  }

  getItems();


  function listar() {
    getItems();
   // renderItem();
   //createRow();
  }
