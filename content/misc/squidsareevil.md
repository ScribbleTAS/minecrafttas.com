---
title: "Why are squids evil?"
#icon:
alt: ""
description: "Never trust them"
weight: 05020000
toc: false
---
You may have come across a text saying
{{<rawhtml>}}
<p style="color:red;">SQUIDS ARE EVIL</p>
{{</rawhtml>}}
If you still think these creatures are harmless and don't want to hurt you, here is some advice for you:

In Minecraft TASing, we have to deal a lot with the randomness of the game.
When playing back inputs, if you kill a mob (preferably a squid) and it drops a different item than it did when recording your inputs, then you are bound to run into some problems...

Just like you can enter a seed for a Minecraft world, you can theoretically enter a seed for every randomness happening in the game, making everything deterministic.

The game has lots of different random instances, all required to have a different seed and the early attempts at solving this, was throwing out every randomness and have everything depend on only one instance, that we can control.

So everything in the entire game had the same seed, making it theoretically deterministic.

But for some reason, the seed kept changing, even though it was not supposed to.  
After a long search we found the error in the files for the squid.  

Turns out, the squid actually *sets the seed* when it spawns... No other creature in the game does that.

Here is my theory on why Mojang added that:  

Squids usually spawn in clusters at the same time. Due to how RNG works, everything that spawns in the same millisecond has the same seed.  
This makes all squids in the newly spawned cluster swim into the same direction, making it look very weird.  
As a quick fix, Mojang decided to set the seed of the squid manually, so they would all swim in different directions.

And for the more technical readers:  
Squids in 1.12.2 set their entityseed in the constructor to 1 plus their entityid, which is counted up everytime an entity is created, essentially creating a seed for every squid. The rotation of the squid is set directly after that, which also leads me to my theory

Being mad at squids, Scribble declared them as evil, which is now an easter egg and the inspiration behind {{<newtablink "KillTheRNG" "https://github.com/MinecraftTAS/KillTheRNG">}} to fix exactly that problem and much much more.