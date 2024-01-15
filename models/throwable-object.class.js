class ThrowableObject extends MovableObjekt {
    splash = false;


    IMAGES_SPLASH = [

        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'

    ];






    trow() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;

        }, 25);
    }




    hitSplash() {
        return this.splash;

    }



    splashAnimate() {

        setInterval(() => {

            if (this.hitSplash()) {
                this.playAnimation(this.IMAGES_SPLASH);
                // console.log('klappt')
            }
        }

            , 50);


    }



    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 60;
        this.trow();
        this.splashAnimate();

    }

}










