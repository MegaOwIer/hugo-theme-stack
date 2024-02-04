/* Place your custom TS in HUGO_SITE_FOLDER/assets/ts/custom.ts */

import "ts/jquery/index.d";

var isHorizonal = null;

function choose_background() {
    if (isHorizonal == innerWidth >= innerHeight) {
        return;
    }
    isHorizonal = innerWidth >= innerHeight;

    var images_horizonal = ['pixiv-49383596', 'pixiv-57793944'];
    var images_vertical = ['pixiv-113819513', 'pixiv-114090839', 'pixiv-114204163'];

    var images = isHorizonal ? images_horizonal : images_vertical;

    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(/background/' + images[randomNumber] + '.jpg)';

    $('body').css({
        'background-image': bgImg,
        'background-attachment': 'fixed',
        'background-blend-mode': 'overlay',
        'background-size': 'cover',
        'background-position': 'center'
    });

    console.log("Background file name: " + images[randomNumber]);
}

$(choose_background);
window.addEventListener("resize", choose_background);
