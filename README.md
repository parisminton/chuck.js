chuck.js
========

**chuck.js** is a JavaScript library designed to do much of the heavy lifting of animating in HTML5's Canvas element. It focuses on features that are valuable to makers of infographics, like being able to pause at specific points on the timeline, working with explainer text, and easy setup of user controls like buttons and scrubbers. It works with [Mike Swanson's Ai->Canvas Export Plug-In for Adobe Illustrator][1].

It's inspired partly by a desire to help the advances in visualization tools at news organizations catch up to the advances in tools for data sharing and acquisition. And partly because I've always loved animation, and bringing my graphics to life is something I've wanted to do for a long time. 

Right now there's a small but powerful set of software for rendering two-dimensional motion on the Canvas that includes the plug-in mentioned above and 

* [processing.js][2] by John Resig, based on the original language by Ben Fry and Casey Reas | [source][3] 
* [EaselJS][4] by Grant Skinner | [source][5]
* [tween.js][6] by sole and Mr. Doob | [source][7]
* [gury][8] by Ryan Sandor Richards | [source][9]
* [KineticJS][10] by Eric Rowell | [source][11]

chuck is my contribution for the interaction developer who frequently has to present information sequentially alongside blocks of text that need to change in sync with the action. They've probably already got vectors, but need them to move. 

As advanced as some of these libraries' features are, we're all just in our infancy -- like the Canvas medium itself. That's exciting and encouraging.

This is just a collection of code, so it doesn't save you the hard work of making the art on the front end. Once you've exported your artwork as .html files using the plug-in, the included shell script converts the files into chuck object instances. Those instances are powered by logic that handles the mechanics of animating them and putting them in sequence on a timeline. 

You can see my progress in [this example][12].

Here's the [instruction manual][13].

And if [the changelog][14] interests you, knock yourself out.

I'm continually growing as a programmer, and I make -- and fix -- plenty of mistakes. This code will change as I learn from them.



[1]: http://visitmix.com/labs/ai2canvas "MIX Online: Ai to Canvas Plug-In"

[2]: http://processingjs.org "The processing.js Web site"

[3]: https://github.com/jeresig/processing-js "The Github repository for processing.js" 

[4]: http://easeljs.com "The EaselJS Web site" 

[5]: https://github.com/gskinner/EaselJS "The Github repository for EaselJS"

[6]: http://soledadpenades.com/projects/tween-js "Soledad Penades' article page for tween.js"

[7]: https://github.com/sole/tween.js "The GitHub repository for tween.js" 

[8]: http://guryjs.org "The Gury Web site"

[9]: https://github.com/rsandor/gury "The GitHub repository for gury" 

[10]: http://www.kineticjs.com "The KineticJS Web site"

[11]: http://www.kineticjs.com/download/kinetic-v3.6.3.js "The source code for KineticJS"

[12]: http://james.da.ydrea.ms/times_polevault.html "An animation powered by chuck.js"

[13]: https://github.com/parisminton/chuck.js/wiki "The chuck.js wiki"

[14]: https://github.com/parisminton/chuck.js/blob/master/CHANGELOG.md "The chuck.js changelog"
