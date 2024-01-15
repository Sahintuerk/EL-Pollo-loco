class Endboss extends MovableObjekt {

    height = 330;
    width = 250;
    y = 120;

    endbossdead = false;



    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'

    ];


    IMAGES_ATTACK = [

        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'


    ];


    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'

    ];


    IMAGES_ENDBOSSDEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'

    ];






    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ENDBOSSDEAD);

        this.x = 800 + Math.random() * 1400;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
        this.animateEndbossDead();

    }


    isDeadEndboss() {
        return this.endbossEnergy == 0;
    }





    animateEndbossDead(){
        setInterval(() => {
            if (this.isDeadEndboss()) {
                this.playAnimation(this.IMAGES_ENDBOSSDEAD);
                console.log('tot');
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1400 / 60);



    }







}









