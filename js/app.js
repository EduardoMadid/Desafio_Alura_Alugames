let jogosAlugados = 0;
function contarExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        Swal.fire({
            title: `Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`,
            showDenyButton: true,
            confirmButtonText: "Sim",
            denyButtonText: `Não`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Devolvido!", "", "success");
                imagem.classList.remove('dashboard__item__img--rented');
                botao.classList.remove('dashboard__item__button--return');
                botao.textContent = 'Alugar';
                jogosAlugados--;
                contarExibirJogosAlugados();
            } else if (result.isDenied) {
                Swal.fire("Tome mais cuidado!", "", "info");
                
                
            }
        });
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        swal.fire("Alugado com sucesso!", "Confirmando", "success")
        jogosAlugados++;
        contarExibirJogosAlugados();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarExibirJogosAlugados();
});
