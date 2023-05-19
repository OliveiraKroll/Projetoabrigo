let menu;
let abrigos = [];

while (menu !== 4) {
  menu = Number(
    prompt(`===== ABRIGOS TEMPORÁRIOS =====
        1. Cadastrar abrigo
        2. Listar abrigos
        3. Procurar abrigo
        4. Sair
        Escolha uma opção:
        `)
  );

  switch (menu) {
    case 1:
      cadastrar();
      break;
    case 2:
      listar();
      break;
    case 3:
      procurar();
      break;
    case 4:
      alert("Obrigado por acessar o sistema")
        break;
    default:
      
        alert("Não existe essa opção de menu!!");
      break;

  }
}

function cadastrar() {
    let id = 1;
  const nome = prompt("Digite o nome do abrigo");
  const endereço = (prompt("Digite o endereço do abrigo"));
  const telefone = Number(prompt("Digite o telefone do abrigo"));
  const capacidadeDeLotacao = Number(prompt("Digite a capacidade de lotação do abrigo"));
  const cidade = prompt("Digite a cidade que se localiza o abrigo").toLowerCase();

  const abrigo = {
    id:id++,
    nome,
    endereço,
    telefone,
    capacidadeDeLotacao,
    cidade,
    
  };

  abrigos.push(abrigo);

  alert("Abrigo cadastrado com sucesso");
}

function listar() {
  if (abrigos.length === 0) {
    alert("Não existe abrigos cadastrados");
  } else {
    let mensagem = `
        --------------------
        LISTAGEM DE ABRIGOS:
        --------------------
        CÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE
        `;

    for (let abrigo of abrigos) {
      mensagem += `\n    ${abrigo.id} ||     ${abrigo.nome} ||     ${abrigo.endereço} ||      ${abrigo.telefone} ||    ${abrigo.capacidadeDeLotacao} ||       ${abrigo.cidade}`;
    }
    alert(mensagem);
  }
}

function procurar() {
  if (abrigos.length === 0) {
    alert("Não existe abrigos cadastrados");
  } else {
    const cidadeProcurar = prompt("Digite a cidade que se localiza").toLowerCase();

    let mensagem = `
        ------------------------
        RESULTADO DA BUSCA:
        ------------------------
        CÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE
        `;

    for (let cidade of abrigos) { 
        console.log(cidade);
        if(cidade.cidade.includes(cidadeProcurar)){

            mensagem += `\n     ${cidade.id} ||     ${cidade.nome} ||     ${cidade.endereço} ||      ${cidade.telefone} ||    ${cidade.capacidadeDeLotacao} ||       ${cidade.cidade}`;
        }     
    }
    alert(mensagem);
    }

  }

