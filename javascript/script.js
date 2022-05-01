var botaoCript = document.querySelector(".botao-cript");
var botaoDescript = document.querySelector(".botao-descript");
var campoTexto = document.querySelector(".caixa-texto").value;
botaoCript.innerHTML = campoTexto;


var esconde = document.querySelector(".second-box-section-result");
esconde = document.querySelector(".second-box-section-result").style.visibility = "hidden";

botaoCript.addEventListener("click", function () {
    var campoTexto = document.querySelector(".caixa-texto").value;
    var campoResultado = document.querySelector("#resultado");

    var esconde = document.querySelector(".second-box-section");
    esconde = document.querySelector(".second-box-section").style.display = "none";

    var esconde = document.querySelector(".second-box-section-result");
    esconde = document.querySelector(".second-box-section-result").style.visibility = "visible";

    var resultadoCriptografia = campoTexto.replace(/[a]/gi, "ai").replace(/[e]/gi, 'enter').replace(/[i]/gi, 'imes').replace(/[o]/gi, 'ober').replace(/[u]/gi, 'ufat');
    campoResultado.value = resultadoCriptografia;
});

botaoDescript.addEventListener("click", function () {
    var campoTexto = document.querySelector(".caixa-texto").value;
    var campoResultado = document.querySelector("#resultado");

    var esconde = document.querySelector(".second-box-section");
    esconde = document.querySelector(".second-box-section").style.display = "none";

    var esconde = document.querySelector(".second-box-section-result")
    esconde = document.querySelector(".second-box-section-result").style.visibility = "visible";

    var resultadoDescriptografia = campoTexto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    campoResultado.value = resultadoDescriptografia;
})

var copiarTexto = document.querySelector("#alinhamento-botao");
copiarTexto.addEventListener("click", function (e) {
    var textArea = document.querySelector("#resultado");
    textArea.select();
    document.execCommand("Copy");

    copiarTexto = false
    if (copiarTexto = true) {
        alert("Texto Copiado com Sucesso!!");
    }
});
