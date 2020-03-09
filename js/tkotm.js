
$(document).ready(function() {
    
    //Characters: animation globals
    let open = "";
    let characterIndex = 0;
    
    const charactersNormal = [
        "<img class='img-fluid portraits' src='img/characters/portrait_annaPNG.png' alt='anna'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_emperorPNG.png' alt='emperor'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_fiallPNG.png' alt='fiall'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_palendilPNG.png' alt='palendil'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_simeona.png' alt='simeona'>"
    ];
    
    const characterIds = [
        "#anna",
        "#emperor",
        "#fiall",
        "#palendil",
        "#simeona"
    ];
    
    const charactersMovement = [
        "<img class='img-fluid portraits' src='img/characters/portrait_annaPNG2.png' alt='anna'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_emperorPNG2.png' alt='emperor'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_fiallPNG2.png' alt='fiall'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_palendilPNG2.png' alt='palendil'>",
        "<img class='img-fluid portraits' src='img/characters/portrait_simeona2.png' alt='simeona'>"
    ];

    setInterval(animation, 35000);
    
    
    function animation() {
        characterIndex = getRndInteger(0, 4);
        
        $(characterIds[characterIndex]).html(charactersMovement[characterIndex]);
        setTimeout(changeBack, 10000);
    }
    
    function changeBack() {
        $(characterIds[characterIndex]).html(charactersNormal[characterIndex]);
    }
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    //Character info closer when another is opened
    $("body").on("click", "#characters .back-collapsing", function() {
        let character = $(event.target).attr("alt");

        if (open === "") {
            open = character;
            return;
        }

        if (character === open) {
            open = "";
            return;
        }

        let openCharacterClass = "." + open;

        $(openCharacterClass).collapse("hide");
        open = character;
    });
    
    //Music player. 
    //TODO: make player universal
    //TODO: make the music stop.
    $(".horror").click(function() {
       $("#musica").trigger("play"); 
    });

});

