class Page1 extends Phaser.Scene {

}

class Page2 extends Phaser.Scene {

}

class Page3 extends Phaser.Scene {

}

class Stage1 extends PhysicsMap {

}

class Stage2 extends PhysicsMap {

}

class Stage3 extends PhysicsMap {

}

const game = new Phaser.Game({
    width: 800,
    height: 600,
    physics: {
        default: 'matter',
    },
    scene: [Page1, Stage1, Page2, Stage2, Page3, Stage3],
});