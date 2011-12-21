chuck.js
========

**chuck.js** is a JavaScript library designed to do much of the heavy lifting of animating in HTML5's Canvas element. It focuses on features that are valuable to makers of infographics, like being able to pause at specific points on the timeline, working with explainer text, and easy setup of user controls like buttons and scrubbers. It works with [Mike Swanson's Ai->Canvas Export Plug-In for Adobe Illustrator][1].

It's inspired partly by a desire to help the advances in visualization tools at news organizations catch up to the advances in tools for data sharing and acquisition. Right now there's a small, growing set of software for rendering two-dimensional motion on the Canvas, including the plug-in mentioned above and:

+ [processing.js][2] by John Resig, based on the original language by Ben Fry and Casey Reas | [source][3] 
+ [EaselJS][4] by Grant Skinner | [source][5]
+ [Tween.js][6] by sole and Mr. Doob | [source][7]
+ [Gury][8] by Ryan Sandor Richards | [source][9]

chuck is my contribution for the interaction developer who frequently has to present information sequentially alongside blocks of text that need to move in sync with the action. They've probably already got vectors, but they need them to move. It's a project that bridges two things I love to do: draw and code.

This is just a library, so it doesn't save you the hard work of making the art on the front end. Once you've exported your artwork as .html files using the plug-in, the included shell script converts the files into chuck object instances. Those instances are powered by code that handles the mechanics of animating them and putting them in sequence on a timeline. 

You can see my progress in [this example][10]. [See the changelog here.][11]

I'm continually growing as a programmer, and I make -- and fix -- plenty of mistakes. This code will change as I learn from them.



[1]: http://visitmix.com/labs/ai2canvas "MIX Online: Ai to Canvas Plug-In"

[2]: http://processingjs.org "The processing.js Web site."

[3]: https://github.com/jeresig/processing-js "The Github repository for processing.js." 

[4]: http://easeljs.com "The EaselJS Web site." 

[5]: https://github.com/gskinner/EaselJS "The Github repository for EaselJS."

[6]: http://soledadpenades.com/projects/tween-js "Soledad Penades' article page for tween.js."

[7]: https://github.com/sole/tween.js "The GitHub repository for tween.js." 

[8]: http://guryjs.org "The Gury Web site."

[9]: https://github.com/rsandor/gury "The GitHub repository for gury." 

[10]: http://james.da.ydrea.ms/times_polevault.html "An animation powered by chuck.js."

[11]: https://github.com/parisminton/chuck.js/blob/master/CHANGELOG.md "See the changelog for chuck.js"
