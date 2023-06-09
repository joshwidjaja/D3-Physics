class PhysicsMap extends Phaser.Scene {
    init(data) {
        this.rect = data.rect;
        this.physicsContainer = data.physicsContainer;
        this.canDrag = data.canDrag;
        this.noDrag = data.noDrag;
        this.player = data.player;
        this.object = data.object;
        this.soysauce = data.soysauce;
    }

    preload() {
        this.load.image('soysauce', 'syoyu.png');
        this.load.image('musha', 'Samurai.png');
        this.load.image('banana', 'noun-banana-101290.png');
    }

    create() {
        this.matter.world.setBounds();

        // creates container
        const container = this.add.container(330, 250)
            .setSize(100, 50);

        this.physicsContainer = this.matter.add.gameObject(container)
            .setStatic(true)

        this.canDrag = this.matter.world.nextGroup();
        this.noDrag = this.matter.world.nextGroup();

        this.player = this.matter.world.nextCategory();
        this.object = this.matter.world.nextCategory();

        // wall
        this.rect = this.matter.add.rectangle(200, 200, 150, 200, {
            isStatic: true,
            chamfer: { radius: 20}
        });

        this.soysauce = this.matter.add.image(50, 200, 'soysauce', null)
            .setScale(0.1)
            .setBounce(0.6)
            .setCollisionGroup(this.canDrag)
            .setCollisionCategory(this.player)

        // from filter demo
        this.matter.add.mouseSpring({
            length: 1,
            stiffness: 0.6,
            collisionFilter: {
                group: this.canDrag,
            } 
        });

        this.onEnter();
    }

    onEnter() {
        console.warn('This PhysicsMap did not implement onEnter():', this.constructor.name);
    }

    /*getPhysicsContainer() {
        return this.physicsContainer;
    }*/
}