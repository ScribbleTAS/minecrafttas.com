---
title: "Tools"
icon: "/icons/Wrench.png"
alt: "Wrench Icon"
description: "Descriptions for the most common tools in TASing"
weight: 01030000
toc: true
---
Here is a list of commonly used tools in Minecraft TASing... While you may recognise some of these tools from emulator TASing, the implementation in Minecraft is most likely completely different.
## Tickratechanger
This is the name of the module used to slow down or speed up the game speed. As many games, Minecraft runs on a tick based system, which is different to for example SM64, which runs on a frame based system...  
  
In SM64 the framerate is constant and when the game lags, the game logic will slow down as well.  
  
In Minecraft the framerate can vary, meaning Minecraft can have 1000 frames per second or 10 frames per second, but the game speed will still be the same.  
  
And the tickrate in a vanilla Minecraft instance is 20 ticks/second (tps), and therefore one tick being 50 milliseconds.  
  
With a tickratechanger we can modify the tickrate, slowing down the game speed, while still keeping the framerate unchanged.

This has a few consequences:
- Looking around with the mouse is not tick based, it's *frame based*, which means the camera movement will not be slowed down.
- Processing keybindings is also slowed down, meaning you have to wait in low tickrates, until the key press is recognized by the game.
- In 1.14+ User Interfaces like the inventory and crafting tables are *frame based*, meaning you can move items really fast

### Tickadvance
A subtool of the Tickratechanger is "Tickadvance", which you may better know from other games as "Frameadvance". As the name suggests, with a press of a button, you can advance one tick at a time, which allows for very precise movement. Additionally, since the camera is not slowed down, you can still look around and e.g. aim at a block.

## Savestates
A really common tool for TASing in general. The idea is to save the game state with a press of a button. This state can be loaded at any time as a "mini backup". This allows you to retry a section of a game over and over until you are satisfied.  
Savestates in Minecraft are done using Minecraft's world system.  
  
The "ancient" way of doing savestates, is to save and quit to the main menu, then copying the world files to a different folder before resuming the run. Same with loading the savestate. This was quite tedious since a TASer may load savestates hundreds of times.  
  
In modern TASing we use {{<newtablink "mods" "/downloads/non-playback/lotas/">}}, which automatically copy the folders to the correct location.

## Item Duplication
This very common speedrunning glitch involves saving and quitting the game, reentering and hard quitting the game with `Alt+F4` or Task Manager. One effect is that you can duplicate items.

**The order is different for versions up to 1.12.2 and 1.14+ versions, since Minecraft changed it's systems starting with 1.14.4**

Also note that this duplication method does **NOT** work on servers, you can't use it on 2b2t, stop asking please...
### 1.3 - 1.12.2 {#1.12.2}
**Minecraft Forge patched this duplication glitch, it will not work with forge modloader installed.**
1. Throw the item(s) you want to duplicate on the ground
2. Save and quit to the menu
3. Re enter the world and pick up the item(s)
4. Press `Alt+F4` to quit to hard quit the game
5. Open the game and enter the world. There should be an item in your inventory as well as an item lying on the ground

### 1.14.4+ {#1.14.4}
*Setup: Open task manager*
1. Save and quit with your item(s) in your inventory
2. Re enter throw the items on the ground
3. `Alt+F4` and kill the program with Task Manager, while the screen is black
5. Open the game and enter the world. There should be an item in your inventory as well as an item lying on the ground

## LoTAS duping
Duping in vanilla is quite tedious and highly inconsistent when doing it multiple times in a row, so we wrote a mod that emulates duping.
  
The idea is to emulate the *save and quit* and *hard quit* part, so you don't need to leave the Minecraft world.  
  
To make it easier the mod labels *save and quit* as **Save Items** and *hard quit* as **Load items**  
Other than that, the steps are alsmost the same as vanilla duping:

### LoTAS duping 1.8.9 - 1.12.2 {#LoTAS-1.12.2}
(*This method is now forge proof* 👍)
1. Throw the item(s) you want to duplicate on the ground
2. Open the pause menu and click in the top left **Save Items**
3. Pick up the item(s)
4. Open the pause menu and click in the top left **LoadItems**
5. An item should spawn *on the ground*

### LoTAS duping 1.14.4-1.20.1 {#LoTAS-1.14.4}
1. Open the pause menu and click in the top left **Save Items**
2. Throw item(s) on the ground
3. Open the pause menu and click in the top left **Load Items**
4. An item should spawn *in your inventory*

### (New!) LoTAS-Light duping 1.20.5+ {#LoTAS-Light-1.20.5}
{{% note %}}
If you use LoTAS-Light, you are using the newest iteration of the duplication function.
Over time, we found a few issues that make LoTAS Duping not entirely vanilla. 
{{% /note %}}

1. Open the pause menu (which triggers an auto-save)
2. Throw item(s) on the ground
3. Press <kbd>O</kbd> (Which will quit the world to the main menu)
4. Rejoin the world

As you can see, this method is similar to the [vanilla](#1.14.4) method without the need to kill the game with task manager, which makes it faster than vanilla and more accurate than LoTAS.

## Dragon Manipulation
Enderdragon RNG is very annoying to deal with when creating TASes. Getting the perfect RNG is very unlikely and you would need to reset savestates a lot.  
  
Therefore LoTAS has a tool to "queue up" the next dragon phase. This works different from commands such as `/data merge entity @e[type=ender_dragon,limit=1] {DragonPhase:3}`, so that the current dragon phase is not interrupted, which is normally impossible

On versions prior to the phase system, manipulate dragon makes the dragon charge you.

## Invulnerability
*Note: In official speedrunning rules, this is considered as a glitch, so doing this in glitchless TASes will invalidate your run*  
  
When respawning or entering the world, the player is invulnerable for 60 ticks or 3 seconds. To prevent damage, it is possible to save and quit before the hit and rejoin to cancel the damage.  
Since we only count ingame ticks in non-playback TASing, the saving and quitting is invisible in the video.  
To make this less annoying, LoTAS automatically saves and quits for you, in that it gives you the effects for saving and quitting while *not actually* saving and quitting.
The effects are:
* 60 ticks of invulnerability
* Movement speed is set to 0

These effects will not occur if you get hit again when you still have the invulnerability ticks.  
  
You may notice that invulnerability will not work during the enderdragon fight. This is because the enderdragon health resets everytime you save and quit the game. Therefore LoTAS disables the invulnerability if an enderdragon is loaded.