function sim() {
    alert("Te enganeiii, estamos noivos agora! hihihih ;)");
    
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}



window.addEventListener('load', function() {
    var popup = document.getElementById('meuPopup');
    var fecharPopup = document.getElementById('fecharPopup');
  
    fecharPopup.addEventListener('click', function() {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  
    document.body.style.overflow = 'hidden';
    popup.style.display = 'block';
  });
  
  