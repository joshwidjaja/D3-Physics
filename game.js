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
    /*init(data) {
        this.rect = data.rect;
        this.physicsContainer = data.physicsContainer;
        this.canDrag = data.canDrag;
        this.noDrag = data.noDrag;
        this.soysauce = data.soysauce;
    }*/

    constructor() {
        super("stage1");
    }

    onEnter() {
        /*const container = this.add.container(330, 250)
            .setSize(100, 50);

        this.physicsContainer = this.matter.add.gameObject(container)
            .setStatic(true)*/

        this.physicsContainer.setOnCollide(() => {
            console.log("collided");
            this.scene.start('page2');
        });
    }
}

class Stage2 extends PhysicsMap {
    constructor() {
        super("stage2");
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
    backgroundColor: "#1b1464",
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
    scene: [Stage1, Page1, Page2, Stage2, Page3, Stage3],
});