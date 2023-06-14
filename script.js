let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Agency FB",
    "Algerian",
    "Arial",
    "Arial Black",
    "Arial Narrow",
    "Arial Rounded MT Bold",
    "Baskerville Old Face",
    "Bell MT",
    "Berlin Sans FB",
    "Berlin Sans FB Demi",
    "Blackadder ITC",
    "Bodoni MT",
    "Bodoni MT Black",
    "Bodoni MT Condensed",
    "Bodoni MT Poster Compressed",
    "Book Antiqua",
    "Bookman Old Style",
    "Bookshelf Symbol 7",
    "Bradley Hand ITC",
    "Britannic Bold",
    "Broadway",
    "Brush Script MT",
    "Calibri",
    "Californian FB",
    "Calisto MT",
    "Cambria",
    "Cambria Math",
    "Candara",
    "Castellar",
    "Centaur",
    "Century",
    "Century Gothic",
    "Century Schoolbook",
    "Chiller",
    "Colonna MT",
    "Comic Sans MS",
    "Consolas",
    "Constatia",
    "Cooper Black",
    "Copperplate Gothic Bold",
    "Copperplate Gothic Light",
    "Corbel",
    "Courier",
    "Courier New",
    "Curlz MT",
    "Edwardian Script ITC",
    "Elephant",
    "Engravers MT",
    "Eras Bold ITC",
    "Eras Demi ITC",
    "Eras Light ITC",
    "Eras Medium ITC",
    "Felix Titling",
    "Fixedsys",
    "Footlight MT Light",
    "Forte",
    "Franklin Gothic Book",
    "Franklin Gothic Demi",
    "Franklin Gothic Demi Cond",
    "Franklin Gothic Heavy",
    "Franklin Gothic Medium",
    "Franklin Gothic Medium Cond",
    "Freestyle Script",
    "French Script MT",
    "Gabriola",
    "Garamond",
    "Georgia",
    "Gigi",
    "Gill Sans MT",
    "Gill Sans MT Condensed",
    "Gill Sans MT Ext Condensed Bold",
    "Gill Sans Ultra Bold",
    "Gill Sans Ultra Bold Condensed",
    "Gloucester MT Extra Condensed",
    "Goudy Old Style",
    "Goudy Stout",
    "Haettenschweiler",
    "Harlow Solid Italic",
    "Harrington",
    "High Tower Text",
    "Impact",
    "Imprint MT Shadow",
    "Informal Roman",
    "Jokerman",
    "Juice ITC",
    "Kristen ITC",
    "Kunstler Script",
    "Lucida Bright",
    "Lucida Calligraphy",
    "Lucida Console",
    "Lucida Fax",
    "Lucida Handwriting",
    "Lucida Sans",
    "Lucida Sans Typewriter",
    "Lucida Typewriter",
    "Lucida Sans Unicode",
    "Magneto",
    "Maiandra GD",
    "Matura MT Script Capitals",
    "Microsoft Sans Serif",
    "Mistral",
    "Modern",
    "Modern No. 20",
    "Monotype Corsiva",
    "MS Outlook",
    "MS Reference Sans Serif",
    "MS Reference Specialty",
    "MS Sans Serif",
    "MS Serif",
    "MT Extra",
    "Niagara Engraved",
    "Niagara Solid",
    "OCR A Extended",
    "Old English Text MT",
    "Onyx",
    "Palace Script MT",
    "Palatino Linotype",
    "Papyrus",
    "Parchment",
    "Perpetua",
    "Perpetua Titling MT",
    "Playbill",
    "Poor Richard",
    "Pristina",
    "Rage Italic",
    "Ravie",
    "Rockwell",
    "Rockwell Condensed",
    "Rockwell Extra Bold",
    "Roman",
    "Script",
    "Script MT Bold",
    "Segoe Print",
    "Segoe Script",
    "Segoe UI",
    "Segoe UI Light",
    "Segoe UI Semibold",
    "Segoe UI Symbol",
    "Showcard Gothic",
    "Small Fonts",
    "Snap ITC",
    "Stencil",
    "Symbol",
    "System",
    "Tahoma",
    "Tempus Sans ITC",
    "Terminal",
    "Times New Roman",
    "Trebuchet MS",
    "Tw Cen MT",
    "Tw Cen MT Condensed",
    "Tw Cen MT Condensed Extra Bold",
    "Verdana",
    "Viner Hand ITC",
    "Vivaldi",
    "Vladimir Script",
    "Webdings",
    "Wide Latin",
    "Wingdings",
    "Wingdings 2",
    "Wingdings 3",
];

const intializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for (let i = 1; i <= 200; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 4;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL to insert :");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = intializer();