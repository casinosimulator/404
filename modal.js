document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var jogarDinheiroRealButton = document.getElementById("jogar-dinheiro-real");
    var dinheiroVirtualButton = document.getElementById("dinheiro-virtual");

    // Exibir o modal assim que a página carregar
    modal.style.display = "block";

    // Lidar com o clique no botão "Jogar Dinheiro Real"
    jogarDinheiroRealButton.addEventListener("click", function() {
        window.location.href = "https://gml-grp.com/C.ashx?btag=a_34857b_1821c_&affid=11229&siteid=34857&adid=620&c=cassino", "_blank";

    // Lidar com o clique no botão "Dinheiro Virtual"
    dinheiroVirtualButton.addEventListener("click", function() {
        modal.style.display = "none"; // Fecha o modal
    });
});
