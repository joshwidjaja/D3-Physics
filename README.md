# D3-Physics
Physics demo by Josh Widjaja
Code requirements:
- **4+ scenes based on `AdventureScene`**: Desktop, Folder, Bridge, FourKings
- **2+ scenes *not* based on `AdventureScene`**: Intro, Error, Outro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Added a 'Folder' button to the interface - it will take the player to and from the 'Game Folder' scene at any point in the game. 
    - Enhancement 2: Added a global variable to keep track of the last scene visited before Folder (outerSceneKey).

Experience requirements:
- **4+ locations in the game world**: Desktop, Folder, Bridge, Castle 1F and 2F
- **2+ interactive objects in most scenes**: Brian, Soy Sauce, Samurai
- **Many objects have `pointerover` messages**: Most ingame objects
- **Many objects have `pointerdown` effects**: Most ingame objects, except for non-renameable files
- **Some objects are themselves animated**: Soy sauce object 'flees' on pointerover

Asset sources:
- [OpenClipart-Vectors](https://pixabay.com/vectors/asian-bottle-chinese-cuisine-food-1294266/)
- RPG Maker 2000 RTP

Code sources:
- Code demos from phaser.io:
    - [Bridge](https://labs.phaser.io/view.html?src=src/physics/matterjs/bridge.js)
    - [Container Collision](https://labs.phaser.io/view.html?src=src/physics/matterjs/container%20collision.js)
    - [Drag Filter With Pointer](https://labs.phaser.io/view.html?src=src/physics/matterjs/drag%20filter%20with%20pointer.js)
- [Data Flow in Phaser.io](https://anahit-gulian.medium.com/data-flow-in-phaser-io-6d00b76b713)