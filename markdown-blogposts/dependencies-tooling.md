---
title: "Dependencies and Tooling in Game Development"
description: "How I reduced complexity in my game and allowed for more emergent gameplay."
date: "1/09/2023"
banner: "/blog-images/refactoring-tooling/banner-v2.jpg"
category: "GameDev, Coding"
status: "published"
---

At the beginning, game development is super exciting. Every day brings new features, significant progress, and an infectious enthusiasm that has you eagerly anticipating the next day's work.

However, as your project evolves, complexity creeps in, and your pace may start to decelerate. You find yourself dedicating more time to unraveling the intricate web of your project, understanding how different systems interact. It's a natural part of the journey.

In this post, rather than zeroing in on a single topic, like the Level Generation in Houdini, I'll delve into an array of smaller yet pivotal subjects that have been instrumental in keeping my project on course and well-organized.

##Auto organizing scenes:

Levels (or scenes in Unity) can become quite chaotic when you introduce a multitude of objects and prefabs. Initially, you might manage by selecting elements directly within the viewport. However, as your project evolves and you need to establish dependencies with other scripts, you'll likely find yourself drawn to the hierarchy view. Inevitably, as your scene becomes more cluttered, you'll spend more time scrolling up and down, searching for the right GameObject. This dilemma prompted me to develop a script that assigns object prefabs and object string names to distinct folders. I also designed a user-friendly interface, enabling the addition of new objects to these lists and adjusting the number of folders, all without delving into the code.

<CustomGist id="53f2ff7de8a3b6619b5f527d07bdb002" />

I assigned a hotkey to initiate this script, and upon activation, it creates empty objects that neatly organize all the game objects in the scene into their respective groups:

![Level Design](/blog-images/refactoring-tooling/scene-organizer.png)

First, we extract any objects that might already be within a folder. This is a handy precaution in case folder names or object assignments have changed, ensuring our objects are in their correct locations.

Next, we perform checks to determine if the folder already exists, preventing the creation of duplicate folders in subsequent script runs.

Then, we start the task of organizing our objects by assigning them to their corresponding folders, once for prefabs and once for named objects. To maintain a tidy workspace, we clear the console, leaving everything neat and organized.

Additionally, there are specific exceptions tailored to this game. For instance, certain objects must retain their parent-child relationships for functionality reasons. Currently, these exceptions have hard-coded names, which suffice for the limited number of cases. However, I plan to make this process more dynamic in the future.

Towards the end, you'll find a simple editor function that facilitates moving selected objects to the bottom of the hierarchy within the scene. I added this functionality because I often encountered situations where an object, such as a door, was buried in the middle of the hierarchy. When duplicating it, the duplicates automatically landed at the bottom of the scene hierarchy, causing objects to be scattered across the screen. This script resolves that issue.

##Auto assigning materials:

Similar to the previous script, I developed one that assigns the correct materials to various parts of the .fbx model imported from Houdini (for additional details, please refer to my other post linked here). Here is the script:

<CustomGist id="d6bfc248d56e524c0211c857ea3c343a"/>

In this script, I not only apply the appropriate materials to the model but also perform clean-up and organization tasks. For instance, I set the 'static' property for parts that remain stationary to optimize the game. Additionally, I add mesh colliders to the collision parts of the level and assign different layers for proper rendering.

##QuickNav:

One recurring challenge I faced was the time-consuming process of navigating through various folders in the asset browser to locate the right prefab once the level geometry was complete. As the project grew in size, this became increasingly tedious. While there are methods to streamline this process, such as using the 'search by name' functionality or storing all relevant prefabs in a single folder, these approaches didn't suit my preference for organizing prefabs by their respective categories.

I initially contemplated creating my own script to address this issue. However, I stumbled upon a valuable asset in the Unity Asset Store called QuickNav, which offered exactly what I needed. QuickNav not only features a 'most recent selected GameObjects' feature but also allows you to manually add prefabs, effectively creating a 'favorites' list:

![QuickNav](/blog-images/refactoring-tooling/quicknav.png)

That alone transformed the level design process into a seamless and enjoyable experience for me. It's important to note that I'm not exclusively endorsing the QuickNav plugin; there are numerous similar solutions available in the Unity ecosystem. Alternatives like [Favorites Tabs](https://assetstore.unity.com/packages/tools/utilities/favorites-tab-s-4237) or [Asset Finder PRO](https://unityassetcollection.com/asset-finder-pro-free-download/) offer comparable functionalities. Additionally, you can find free options on GitHub, such as:

* **[Smart Favorites for Unity3D](https://github.com/nicoplv/smart-favorites) by nicoplv** 

* **[Unity Favourites Panel](https://github.com/plyoung/Favourites) by plyoung** 

* **[Favorites List](https://github.com/BrokenVector/favorites-list) by BrokenVector** 

Feel free to explore these options if you're interested in incorporating a similar tool into your project.

##Dependencies:

Game projects revolve around dependencies. For instance, an enemy's fire rate depends on the bullet's damage, which in turn affects the player's health. The player's health is crucial for the health UI, and the gameplay manager relies on it to trigger the game over screen when the player's health reaches zero. This web of interdependencies illustrates the complexity of game development.

In reality, there are numerous ways to tackle these dependencies, and choosing the right approach for a given situation is important. It's essential to recognize that there are potential pitfalls, especially in the early stages of development. What may initially seem straightforward for a small project can quickly spiral into unmanageable complexity as the project scales.

**Searching for dependencies within a script**, whether through methods like *GetComponent*, *GetComponentInChildren*, or even using *FindObjectsOfType*, can be effective but requires caution. These operations can be computationally expensive, particularly when searching by type. To mitigate performance issues, it's crucial to cache these references, especially if you're accessing them frequently, such as within your Update function.

**Directly assigning dependencies in the inspector** is generally a solid approach. It's particularly useful when dealing with components within the same prefab, such as a move component and a speed component. This method reduces the need for additional code and allows for dynamic possibilities, especially if you're looking for an interface instead of a specific class, enabling you to switch them out for experimentation. However, there are some drawbacks to consider. It can involve manual work, which may become tedious over time. Additionally, if the dependencies involve objects across different entities, it becomes easy to accidentally break connections. Moreover, be mindful that checking for null references in the script can introduce some performance overhead.

**Utilizing singletons** is a powerful and convenient approach. Essentially, it involves having a single instance of a script that other scripts can access without needing a specific reference; they simply reference it by name. Singletons prove exceptionally useful for tasks like managing scripts and handling audio, and I often employ them in my projects.

However, they can become unwieldy if not managed carefully. Singleton scripts must always be attached to a game object in the hierarchy, which means you need to ensure these objects persist across levels or place them in each level individually. Moreover, maintaining that there's only one instance of the singleton script can be achieved using techniques like:

![Singleton-initialization](/blog-images/refactoring-tooling/singleton-initialization.png)

While there are various methods for managing dependencies, each with its own set of strengths and weaknesses, I highly recommend checking out the [YouTube channel Tarodev](https://www.youtube.com/@Tarodev/videos) for more in-depth insights into these approaches and Unity in general.

However, what if there were an alternative approach that combined the ease of use of singletons with the ability to remove specific dependencies between game objects? Imagine a scenario where systems could continue functioning even if the receiver of a particular message was deleted. This would simplify tasks such as saving and serializing data and empower designers to experiment more freely with game mechanics without delving into the code.

##Scriptable Objects:

Scriptable Objects made quite a splash in the Unity community when they were first introduced many years ago. Over time, their popularity seemed to wane, especially in beginner and intermediate level tutorials commonly found on YouTube. Often, they were relegated to serving as simple data containers for things like items or enemy stats. However, it's important to note that Scriptable Objects have far greater potential.

Much like many others, I was genuinely impressed when I first watched [Ryan Hipple's Unite talk](https://www.youtube.com/watch?v=raQ3iHhE_Kk). In this talk, Ryan, representing Schell Games, showcased the diverse ways in which they harness the power of Scriptable Objects. I highly recommend watching this talk if you haven't already; it offers valuable and insightful information.

At the end of the day, Scriptable Objects are scripts that reside in your asset folder. They don't require specific inclusion in your scene to function. What's remarkable is that they can encompass not only data but also functionality. While they do have certain limitations (like not being able to run an Update method for obvious reasons), they open up a multitude of possibilities. In fact, the two scripts I introduced at the beginning of this post were Scriptable Objects. They allowed me to modify their properties in the inspector while encapsulating their essential functionality, all without needing to add them to the scene.

Among the various applications of Scriptable Objects, one particularly intriguing concept is using them as variables. For instance, if playerHP were simply a float stored within a Scriptable Object, the player prefab could have it preassigned before spawning in the scene. Similarly, the UI and an audio system could access this information to trigger actions like playing a heartbeat sound when the player's HP falls below a certain threshold.

Another powerful aspect is their ability to facilitate events. You can have a script trigger an event (e.g., shooting a weapon) and have multiple objects subscribe to that event, reacting accordingly. If one or all of those subscribed objects disappear or get destroyed, the game continues running without errors. The weapon triggers an event, and if no one is listening, it gracefully carries on.

I also discovered a fantastic repository called [SmartData](https://github.com/sigtrapgames/SmartData) that not only implements this functionality but also takes care of some of the minor annoyances associated with Scriptable Objects. For instance, Scriptable Objects residing in your assets don't necessarily reset between scenes, which can be advantageous or disadvantageous depending on your needs. SmartData makes it easy to reset specific Scriptable Objects when required, among other things. I highly recommend checking it out.

There are numerous other tips and tricks that prove incredibly useful in maintaining well-organized projects, but this post is already quite extensive. I'll likely explore more in a future post.

For now, my next two posts will delve into the world of asset creation in the 3D realm. I hope you found this one informative and enjoyable. Feel free to send me a tweet (or a message on 𝕏 now?) if you have any feedback or suggestions for additional information.
