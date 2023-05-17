class Page1 extends Phaser.Scene {
    constructor() {
        super("page1");
    }
}

class Page2 extends Phaser.Scene {
    constructor() {
        super("page2");
    }
}

class Page3 extends Phaser.Scene {
    constructor() {
        super("page3");
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

        this.musha = this.matter.add.image(50, 100, 'musha', null)
            .setScale(1)
            .setBounce(0.4)
            .setCollisionGroup(this.noDrag)
            .setCollisionCategory(this.object)

        this.physicsContainer.setCollidesWith(this.object);

        this.physicsContainer.setOnCollide(() => {
            this.scene.start('end');
        })
        
        this.wall = this.matter.add.gameObject(this.rect)
            .setStatic(true)
            .setCollidesWith([this.player, this.object])
            .setOnCollide(() => {
                //this.scene.start('scene3');
                this.soysauce.setX(50);
                this.soysauce.setY(200);

                this.musha.setX(50);
                this.musha.setY(100);
            })
            
    }
}

class End extends Phaser.Scene {
    constructor() {
        super("end")
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
    scene: [Stage3, Page1, Stage1, Page2, Stage2, Page3],
});