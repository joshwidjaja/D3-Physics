class Page1 extends Phaser.Scene {
    constructor() {
        super("page1");
    }

    create() {
        this.add.text(100, 100, "I.", {
            fontSize: 80,
            fontFamily: "Georgia",
            color: "#000000",
        });

        this.input.on('pointerdown', () => {
            this.scene.start('stage1');
        });
    }
}

class Page2 extends Phaser.Scene {
    constructor() {
        super("page2");
    }

    create() {
        this.add.text(100, 100, "II.", {
            fontSize: 80,
            fontFamily: "Georgia",
            color: "#000000",
        });

        this.input.on('pointerdown', () => {
            this.scene.start('stage2');
        });
    }
}

class Page3 extends Phaser.Scene {
    constructor() {
        super("page3");
    }

    create() {
        this.add.text(100, 100, "III.", {
            fontSize: 80,
            fontFamily: "Georgia",
            color: "#000000",
        });

        this.input.on('pointerdown', () => {
            this.scene.start('stage3');
        });
    }
}

class Stage1 extends PhysicsMap {
    constructor() {
        super("stage1");
    }

    onEnter() {
        this.physicsContainer.setOnCollide(() => {
            this.scene.start('page2');
        });
    }
}

class Stage2 extends PhysicsMap {
    constructor() {
        super("stage2");
    }

    onEnter() {
        this.musha = this.matter.add.image(200, 100, 'musha', null)
            .setScale(1)
            .setBounce(0.4)
            .setCollisionGroup(this.noDrag)
            .setCollisionCategory(this.object)

        this.physicsContainer.setCollidesWith(this.object);

        this.physicsContainer.setOnCollide(() => {
            this.scene.start('page3');
        });
    }
}

class Stage3 extends PhysicsMap {
    constructor() {
        super("stage3");
    }

    onEnter() {
        let banana = this.matter.add.image(200, 200, 'banana', null)
            .setScale(0.1)
            .setStatic(true)

        this.musha = this.matter.add.image(350, 100, 'musha', null)
            .setScale(1)
            .setBounce(0.4)
            .setCollisionGroup(this.noDrag)
            .setCollisionCategory(this.object)

        this.soysauce.setX(350);

        this.physicsContainer.setX(70);
        this.physicsContainer.setCollidesWith(this.object);

        this.physicsContainer.setOnCollide(() => {
            this.scene.start('end');
        })
        
        // couldn't get this to work lol
        /*this.wall = this.matter.add.gameObject(this.rect)
            .setStatic(true)
            .setBody({
                type: 'rectangle',
                width: 150,
                height: 200,
            })
            .setCollidesWith([this.player, this.object])
            .setOnCollide(() => {
                //this.scene.start('scene3');
                this.soysauce.setX(50);
                this.soysauce.setY(200);

                this.musha.setX(50);
                this.musha.setY(100);
            })*/
    }
}

class End extends Phaser.Scene {
    constructor() {
        super("end")
    }

    create() {
        this.add.text(100, 100, "click to\nrestart", {
            fontSize: 60,
            fontFamily: "Georgia",
            color: "#000000",
        });

        this.input.on('pointerdown', () => {
            this.scene.start('page1');
        });
    }
}

const game = new Phaser.Game({
    width: 400,
    height: 300,
    backgroundColor: "#d4dfe8",
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 0.8
            },
            debug: true,
            debugBodyColor: 0xffffff,
        },
    },
    scene: [Page1, Stage1, Page2, Stage2, Page3, Stage3, End],
});