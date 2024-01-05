class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinsbar = new CoinsBar();
    bottlebar = new StatusBottle();
    bottle = new Bottle();
    coins = new Coins();
    throwBottel = false;
    throwableObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }

    setWorld() {
        this.character.world = this;

    }


    //übereinder trifft pepe mit chicken
    run() {
        // setInterval ist eine festgelegt js function  die function wird alle 20ms ausgeführt 
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsBottle();
            this.checkCollisionsCoins();

        }, 20);

        setInterval(() => {
            this.checkThrowableObject();

        }, 100);
    }

    //wirft man die flasche 
    checkThrowableObject() {

        if (this.keyboard.D && this.character.bottelAmount > 0 && !this.throwBottel) {
            this.throwBottel = true;
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObject.push(bottle);
            this.character.bottelAmount -= 20;
            this.bottlebar.bottlePercentage(this.character.bottelAmount);

            // die zeit bis er die nächste falsche wirft
            setTimeout(() => {

                this.throwBottel = false;

            }, 1000)
        }




        console.log('flasche werfen', this.character.bottelAmount)
    }




    //statusbar vom leben 
    checkCollisions() {
        this.level.enemies.forEach((enemy, index) => {

            if (this.character.isColliding(enemy) && this.character.isAboveGround() && this.character.speedY < 0) {
                console.log('fallen', this.character.speedY);


                console.log('Kollision mit chicken!');
                this.level.enemies.splice(index, 1); // wird mein chicken gelöscht 




            } else if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy); //damit mein leben abgezogen wird wenn pepe getroffen wird

            }


        });



    }

    //statusbar von den flaschen
    checkCollisionsBottle() {
        this.level.bottle.forEach((bottels, index) => {
            if (this.character.isCollidingBottle(bottels)) {
                this.character.hitBottle();
                console.log('Kollision mit Flasche!');
                this.bottlebar.bottlePercentage(this.character.bottelAmount);
                console.log('anzahl', this.character.bottelAmount)
                this.level.bottle.splice(index, 1);
            }


        })

    }



    //statusbar von den coins
    checkCollisionsCoins() {
        this.level.coins.forEach((coIns, index) => {
            if (this.character.isCollidingCoins(coIns)) {
                this.character.hitCoins();
                this.coinsbar.coinsSetPercentage(this.character.coinsAmount);
                console.log('anzahlCoins', this.character.coinsAmount)
                this.level.coins.splice(index, 1)


            }

        })



    }







// damit alles angezeigt wird 
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // verschieben wir die kamera 
        this.addObjectsToMap(this.level.backgroundObjects);


        this.ctx.translate(-this.camera_x, 0);
        //space for fixed objects
        this.addToMap(this.statusBar);

        this.addToMap(this.coinsbar);

        this.addToMap(this.bottlebar);

        this.ctx.translate(this.camera_x, 0);

        //damit wolke , chicken,coins und flasche angezeigt werden
        this.addToMap(this.character);
        console.log('mensch', this.character.y)

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);

        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.coins);


        this.ctx.translate(-this.camera_x, 0);



        // Draw() wird immer aufgerufen 
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {

        objects.forEach(o => {
            this.addToMap(o);

        });
    }


    addToMap(mo) {
        if (mo.otherDiretion) {
            this.flipImage(mo);
        }


        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawFrameChicken(this.ctx);
        mo.drawFrameBottle(this.ctx);
        mo.drawFrameCoins(this.ctx);


        // pepe rückwärts geht
        if (mo.otherDiretion) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {

        mo.x = mo.x * -1;
        this.ctx.restore();

    }








}