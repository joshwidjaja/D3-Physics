class PhysicsMap extends Phaser.Scene {
    preload() {
        this.load.image('soysauce', 'syoyu.png');
    }

    create() {
        this.matter.world.setBounds();

        // wall
        this.matter.add.rectangle(200, 200, 150, 200, {
            isStatic: true,
            chamfer: { radius: 20}
        });

        // creates container
        const container = this.add.container(330, 200);
        container.setSize(100, 50);

        const physicsContainer = this.matter.add.gameObject(container);

        const canDrag = this.matter.world.nextGroup();

        const noDrag = this.matter.world.nextGroup();

        this.matter.add.image(100, 100, 'soysauce', null)
            .setScale(0.1)
            .setBounce(0.9)
            .setCollisionGroup(canDrag)

        // from filter demo
        this.matter.add.mouseSpring({
            length: 1,
            stiffness: 0.6,
            collisionFilter: {
                group: canDrag,
            } 
        });
    }
}