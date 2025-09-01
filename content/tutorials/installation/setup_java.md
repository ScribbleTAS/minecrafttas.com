---
title: "Java Setup"
icon: "/icons/Java.png"
alt: "Java Icon"
description: "Installation guide for Java"
weight: 01040300
---
Some Minecraft versions require different Java versions to run and for applications like MultiMC, you need to install java yourself.  
By the time of writing this, Minecraft 1.18.2 is the latest version and the latest Java version is Java 18 (which is like a month old... I will still use 17 for now)
  
Some things to point out:
* The java requirements are:
  * Minecraft up to 1.12.2 requires Java 8.  
  * Minecraft 1.14.4-1.16.5 require at least Java 8.
  * Minecraft 1.17-1.17.1 require at least Java 16, but Java 17 still works.
  * Minecraft 1.18-1.20.5 require at least Java 17.
  * Minecraft 1.20.6 require Java 21
* You will sometimes see 2 Java versions that you can install:
  * The Java Runtime Environment (JRE), which is an obsolete "slim" version of java for basic java programs.
  * The Java Development Kit (JDK), which already includes the JRE
  * The JDK is used to write java programs and Minecraft mods
* We will use the java binaries of {{<newtablink "Adoptium.net" "https://adoptium.net/temurin">}}. If you think this is wrong and we should use something else, message us on discord.

**You should always choose the JDK rather than JRE, since it is required by some mods!**

## Installation
For this tutorial, we will install Java 8 and Java 17 JDK. Both are very similar to install.

1. Go to {{<newtablink "Adoptium.net" "https://adoptium.net/temurin/releases?version=17&os=any&arch=any">}}
2. Choose the version you want to install. We will go with 17 for now
{{<figure class="screenshot" src="chrome_Uyd20PVsWQ.png">}}
3. Scroll down to find the installer.
{{<figure class="screenshot" src="chrome_NjFy4z1BJf.png">}}
4. Download and install. The installer has a few extra options but they are only useful for programming.

{{% tip %}}
If you like using the terminal, you can use
```
winget install EclipseAdoptium.Temurin.17.JDK
```
to skip all above steps!
{{% /tip %}}
