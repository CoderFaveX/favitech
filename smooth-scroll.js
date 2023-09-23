$(() => {
    $("a").click(e => {
        if ($(this).get(0).hash !== "") {
            e.preventDefault();
            let hash = e.target.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, () => {
                window.location.hash = hash;
            });
        }
    });
});