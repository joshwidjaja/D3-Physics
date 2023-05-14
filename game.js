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
    backgroundColor: "#000000",
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