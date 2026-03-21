const usuarios = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 22 },
  { nome: "Maria", idade: 19 },
  { nome: "João", idade: 16 }
];

const usuariosP = document.querySelector(".usuarios");

usuarios.find((usuario) => {

    if (usuario.idade >= 18) {

        console.log("Nome: " + usuario.nome + " idade: " + usuario.idade);
    }

});

/* -------------- */
console.log("-------------------------");

const notas = [7, 8, 5, 9, 4];

const verificarNotaMenorQue5 = notas.some((nota) => {

    return nota < 5;
});

console.log(verificarNotaMenorQue5);

/* ---------- */
console.log("-------------------------");

const idades = [22, 30, 18, 25];

const isIdadeMairOuIgual18 = idades.every((idade) => {

    return idade >= 18;
});

console.log(isIdadeMairOuIgual18);

/* ---------------------- */
console.log("-------------------------");

const produtos = [
  { nome: "Mouse", preco: 50, estoque: 10 },
  { nome: "Teclado", preco: 200, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 3 }
];

function estoque() {

    const produtoSemEstoque = produtos.find((produto) => {

        if (produto.estoque == 0) {
            return `{ nome: "${produto.nome}", preco: ${produto.preco}, estoque: ${produto.estoque} }`;
        }
    });

    console.log(produtoSemEstoque);
}

function preco() {

    const isPrecoMaiorQue800 = produtos.some((produto) => {

        return produto.preco > 800;
    });

    console.log(isPrecoMaiorQue800);
}

function estoqueMaiorQueZero() {

    const isTodosEstoquesMaioresQue0 = produtos.every((produto) => {

        return produto.estoque > 0;
    });

    console.log(isTodosEstoquesMaioresQue0);
}

estoque();
preco();
estoqueMaiorQueZero();

/* ------------------------- */
console.log("-------------------------");

const usuariosDesafio = [
  { nome: "Ana", ativo: true },
  { nome: "Carlos", ativo: true },
  { nome: "Maria", ativo: false }
];

function usuariosInativos() {

    const isUsuariosInativos = usuariosDesafio.some((usuario) => {

        return usuario.ativo == false;
    });

    console.log(isUsuariosInativos);
}

function usuariosAtivos() {

    const isTodosUsuariosAtivos = usuariosDesafio.every((usuario) => {

        return usuario.ativo == true;
    });

    console.log(isTodosUsuariosAtivos);
}

function encontarUsuarioInativo() {

    const encontarUsuario = usuariosDesafio.find((usuario) => {

        if (usuario.ativo === false) {

            return `{ nome: "${usuario.nome}", ativo: ${usuario.ativo} }`
        }
    });

    console.log(encontarUsuario);
}

usuariosInativos();
usuariosAtivos();
encontarUsuarioInativo();