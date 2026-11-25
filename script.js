document.querySelectorAll(".botao").forEach(botao => {
    botao.addEventListener("click", function(event) {
        event.preventDefault();
        let link = this.href;
        setTimeout(() => {
            window.location.href = link;
        }, 200);
    });
});