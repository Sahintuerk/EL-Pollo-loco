class Coins extends MovableObjekt {

    y = 150;
    height = 100;
    width = 100;


IMAGES_COINS = [
'img/8_coin/coin_1.png'

];





constructor() {
    super().loadImage('img/8_coin/coin_1.png');
    this.loadImages(this.IMAGES_COINS);
    this.x = 200 + Math.random() * 1300;
    this.speed = 0.15 + Math.random() * 0.5;


}












}