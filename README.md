chuck.js
========

**chuck.js** is a JavaScript library designed to do much of the heavy lifting of animating in HTML5's Canvas element. It focuses on features that are valuable to makers of infographics, like being able to pause at specific points on the timeline, working with explainer text, and setting up user controls like buttons and scrubbers. It works with [Mike Swanson's Ai->Canvas Export Plug-In for Adobe Illustrator][1].

It's inspired partly by a desire to see the advances in visualization tools at news organizations catch up to the advances in tools for data sharing and acquisition. Right now there aren't many tools, anywhere, for rendering motion on the Canvas. And this project bridges two things I love to do: draw and code.

This is just a library, so it doesn't save you the hard work of making the art on the front end. Once you've exported your artwork using the Illustrator plug in, the included shell script converts the files into *chuck.js* object instances. And those instances are powered by code that will handle the mechanics animating them and creating a timeline. 

You can see my progress in [this example][2].

[See the changelog here.][3]


[1]: http://visitmix.com/labs/ai2canvas "MIX Online: Ai to Canvas Plug-In"

[2]: http://james.da.ydrea.ms/times_polevault.html "An animation powered by chuck.js."

[3]: https://github.com/parisminton/chuck.js/blob/master/CHANGELOG.md "See the changelog for chuck.js"
