class MovableObjekt extends DrawableObject { //bewegbare objekte 
    speed = 0.15;
    otherDiretion = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    bottelAmount = 100;
    coinsAmount = 0;
    lastHit = 0;
    endbossAmount = 0;
    endbossEnergy = 100;
    



    // verändert die postion von colliding
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0

    };



    offsetChicken = {
        topChicken: 0,
        leftChicken: 0,
        rightChicken: 0,
        bottomChicken: 0

    };



    offsetCoins = {
        topCoins: 120,
        leftCoins: 10,
        rightCoins: 5,
        bottomCoins: 0

    };



    offsetBottel = {
        topBottel: 100,
        leftBottel: 0,
        rightBottel: 0,
        bottomBottel: 0

    };



    offsetEndboss = {
        topEndboss: 0,
        leftEndboss: 0,
        rightEndboss: 0,
        bottomEndboss: 0

    };








    //  das pepe nach dem es gestorben ist fällt und auch das die flasche beim werfen runter fällt und nach dem springen auch wieder runter kommt
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            }
        }, 1000 / 25);


    }
    // das pepe in der luft ist und wenn er stirbt nach unten fällt
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else if (this.energy < 1) {
            return true;
        } else {
            return this.y < 140;

        }
    }


    // überprüft ob 2 gegenstände aufeinander kommen // Chicken
    isColliding(mo) {
        return this.x + this.width - this.offsetChicken.rightChicken > mo.x + mo.offsetChicken.leftChicken &&
            this.y + this.height - this.offsetChicken.bottomChicken > mo.y + mo.offsetChicken.topChicken &&
            this.x + this.offsetChicken.leftChicken < mo.x + mo.width - mo.offsetChicken.rightChicken &&
            this.y + this.offsetChicken.topChicken < mo.y + mo.height - mo.offsetChicken.bottomChicken;

    }


    isCollidingBottle(mo) {
        return this.x + this.width - this.offsetBottel.rightBottel > mo.x + mo.offsetBottel.leftBottel &&
            this.y + this.height - this.offsetBottel.bottomBottel > mo.y + mo.offsetBottel.topBottel &&
            this.x + this.offsetBottel.leftBottel < mo.x + mo.width - mo.offsetBottel.rightBottel &&
            this.y + this.offsetBottel.topBottel < mo.y + mo.height - mo.offsetBottel.bottomBottel;

    }



    isCollidingCoins(mo) {
        return this.x + this.width - this.offsetCoins.rightCoins > mo.x + mo.offsetCoins.leftCoins &&
            this.y + this.height - this.offsetCoins.bottomCoins > mo.y + mo.offsetCoins.topCoins &&
            this.x + this.offsetCoins.leftCoins < mo.x + mo.width - mo.offsetCoins.rightCoins &&
            this.y + this.offsetCoins.topCoins < mo.y + mo.height - mo.offsetCoins.bottomCoins;
    }



    isCollidingEndboss(mo) {
        return this.x + this.width - this.offsetEndboss.rightEndboss > mo.x + mo.offsetEndboss.leftEndboss &&
            this.y + this.height - this.offsetEndboss.bottomEndboss > mo.y + mo.offsetEndboss.topEndboss &&
            this.x + this.offsetEndboss.leftEndboss < mo.x + mo.width - mo.offsetEndboss.rightEndboss &&
            this.y + this.offsetEndboss.topEndboss < mo.y + mo.height - mo.offsetEndboss.bottomEndboss;
    }




//leben
    hit() {
        this.energy -= 2;
        if (this.energy < 0) {
            this.energy = 0; // wird auf 0 gesetzt damit es nicht -5 wird
        } else {
            this.lastHit = new Date().getTime();// der zeitpunkt wo er angeriffen wird 
        }    
    }



    //aufsammeln von den flaschen 
    hitBottle() {
        this.bottelAmount += 20;
        if (this.bottelAmount > 100) {
            this.bottelAmount = 100;

        }
    }



    //aufsammeln von den coins die dann in der coinsbar angezeigt werden
    hitCoins() {
        this.coinsAmount += 20;
        if (this.coinsAmount > 100) {
            this.coinsAmount = 100;

        }
    }



    hitEndboss() {
        this.endbossAmount += 20;
        if (this.endbossAmount > 100) {
            this.endbossAmount = 100;

        }
    }



    hitendbossbottel() {
        this.endbossEnergy -= 1;
        if (this.endbossEnergy < 0) {
            this.endbossEnergy = 0; // wird auf 0 gesetzt damit es nicht -5 wird
        }
    }




    hitendbossjump() {
        this.endbossEnergy -= 100;
        if (this.endbossEnergy < 0) {
            this.endbossEnergy = 0; // wird auf 0 gesetzt damit es nicht -5 wird
        }
    }









    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // differenz in sek
        return timepassed < 1; // pepe wurde getroffen verletzt sich 1 sek
    }



    // überprüfen ob ein pepe oder ein anders objekt tot ist
    isDead() {
        return this.energy == 0;
    }





    moveRight() {
        this.x += this.speed;

    }


    moveLeft() {

        this.x -= this.speed;

    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];//laden aus dem imagesCach ein bild, bild wird geändert
        this.currentImage++;
    }



}
