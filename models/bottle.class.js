class Bottle extends MovableObjekt {

    y = 160;
    height = 70;
    width = 70;





IMAGES_BOTTLE = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'

];




constructor() {
    super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
    this.loadImages(this.IMAGES_BOTTLE);
    this.x = 200 + Math.random() * 1800;
  


    this.bottleAnimate();
}



bottleAnimate() {
    // die geschwindigkeit von der flasche wie sie sich bewegt 
    setInterval(() => {
        this.playAnimation(this.IMAGES_BOTTLE);
       
       }, 400);

}


















}
