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
        this.physicsContainer.setOnCollide(() => {
            this.scene.start('page3');
        });

        this.physicsContainer.setCollidesWith(this.noDrag);

        this.musha = this.matter.add.image(200, 100, 'musha', null)
            .setScale(1)
            .setBounce(0.4)
            .setCollisionGroup(this.noDrag)
    }
}

class Stage3 extends PhysicsMap {
    constructor() {
        super("stage3");
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
    scene: [Stage2, Page1, Stage1, Page2, Page3, Stage3],
});