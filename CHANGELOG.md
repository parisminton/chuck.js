chuck.js
========

Changelog
---------

**1/4/12**

1. Moved the `isPointInPath()` tests out of `EventDispatcher.makeDispatchers()` and into the handlers. Testing this now.



**1/2/12**

1. Renamed `Button.mouseoverHandler()` to `Button.mousemoveHandler()`. It's challenging to set a mouseover event handler on the Canvas, so I'm simulating a mouseover event by testing for mousemove within the button boundaries. Still working this out.



**1/1/12**

1. Fixed the scrubber boundary bug.

2. Updated `Timeline.frameBack()` and `Timeline.frameForward()` to cycle through to the other end of the timeline once they've reached its opposite.

3. Noted out the assignment of current_frame to 0 inside `Timeline.play()`. I'm toying with the idea of the play button not resetting the animation from the beginning, but simply picking up from the current frame, wherever that happens to be.

4. Got rid of `Animator.getAllCels()`, `Animator.resetAllCels()`, and `Animator.advanceAll()`. They're unused in the new system.

5. Updated the `Button` constructor to define `enabled`, `disabled`, `over`, `out` and `click` states. `enabled` is -- forgive the pun -- enabled and populated by default.



**12/31/11**

*In terms of functionality, I'm all caught up with last week when I decided to change the playthrough system. It was a challenge, but so far, it's made many of the `Animator`, `Timeline` and `EventDispatcher` methods much less complicated and the animation machinery seems more streamlined and sensible.*

*There are a lot of closures here, so I'll be keeping a close eye on memory and testing for leaks. But all the important math is done before runtime, which gives the browser an easier task of rapid-fire drawing.*

1. Adapted `Button.drawBoundary()` to the new playthrough system and made it self-defining. After initialization, it works with the event system right out of the box.

2. Updated `Slider.drawBoundary()` to the new playthrough system. This required a new storage step in `Slider.makeFrameInstructions()` that pushes the scrubber boundary instructions to `Scrubber.boundary.cels` on every frame. The movement of the scrubber boundary is now in sync with the movement of the scrubber itself. 

3. Updated `Slider.mousemoveHandler()` to the new playthrough system. It works! The whole reason I wanted to make a new playthrough system -- the engine that powers these animations -- was to enable this very important feature. Yes.

4. Scrapped `Timeline.controls`. The slowdown of having the browser loop through and draw from two arrays concurrently was unacceptable.

5. Also got rid of all the drawing methods inside `Character`. We don't need them in this new system.

6. Lost an unnecessary `else if` test from `Slider.drawBoundary()`.

7. Removed the assignments to `Slider` properties inside `Slider.scale()` and the scrubber mouse event handlers. Don't need 'em.

8. Added a `last_action` property to `EventDispatcher` that will hold a string: `scrubber`, `play`, `step`, `ff` or `rw`.

9. Got rid of `Timeline.jumpToFrame()`.

10. Activated `Timeline.frameForward()` and `Timeline.frameBack()`. These are called from the click event dispatchers on the forward and back buttons.



**12/30/11**

1. Modified `Animator.animate()` to define itself, setting `this` to the `Animator` constructor the first time it's called. The result: It retains its scope during repeated calls by `window.setTimeout()`. This makes `Animator.makeAnimate()` unnecessary -- it's gone.

2. Gave the `Slider` prototype a modified version of `makeFrameInstructions()` that always draws the track before drawing the scrubber on every frame. It defines a `track_operation` property and sets it to `true` right before drawing the track, and `false` right before drawing the scrubber.

3. Modified `Character.plotX()` and `Character.plotY()` to test whether `track_operation` is true. If it is, the distance is excluded from the calculation so the track stays put while the scrubber moves. 



**12/28/11**

1. Removed the `Character.span` test from `Timeline.store()`. Cels seem to be spread evenly across frames and early animation tests in this new system look good in Chrome, Firefox, Safari and Opera on OSX.

2. Started the animator from within `Timeline.init()` just for testing. I'll remove it once the EventDispatcher is working.

3. Renamed `Animator.drawFrame()` to `Animator.draw()`. This name change accompanies an abstraction to work with *any* collection of drawing instructions, not just those in the timeline... Drawing boundaries on demand for mouse event detection, for instance.

4. Modified `Character.parseDrawingObject()` to return an array of drawing instructions if an existing array isn't passed as the function's second argument.

5. Added a test to `Timeline.setFinalBreakpoint()` to fire only if the final frame is not already the final breakpoint.



**12/27/11**

1. Added a `controls` array to the `Timeline` object.



**12/26/11**

*The overhaul of the playthrough system continues. I read somewhere that it's bad to check in code that breaks the build, so I'm refraining from the atomic commits until everything works without errors.*

1. Got rid of `Animator.renderCharacter().` In this system, `Animator.drawFrame()` is all that's necessary.

2. Got rid of `Timeline.setInFrames()`.

3. Converted members of the `Character.sequence.cels` array from functions to arrays of objects. The key is the Canvas drawing instruction and the value is the argument. An example follows.

4. Made `Character.parseDrawingObject()`, which converts the object in the `Character.sequence.cels` array into a function that performs one drawing instruction when fired.

So, given the two updates immediately above:

*celhelper.sh* turns the Canvas drawing instruction into a JavaScript object ...

```javascript 
{ lineTo : [ 487.8, 45.2 ] }
```

... then, before runtime, math is done on the coordinates array in this object and it's made into a function by `Character.parseDrawingObject()` ...

```javascript
function () {
  context["lineTo"](497.8, 45.2);
}
```

... before it's pushed to the `Timeline.frames` array for the current frame. When the user hits the "play" button, the functions in this array are fired off in sequence, drawing the entire image on the canvas for a split second. Then it happens again for the next frame, and so on...



**12/23/11**

1. Revamping the timeline playthrough system. Instead of doing all the calculations right before each frame is drawn, I can calculate and save the drawing instructions for every frame before anything gets drawn to the screen. `Timeline.store()` is the first step in this effort.

2. Changed `back` and `forward` from instances of `Character` to instances of `Button`. Gave them boundaries and click handlers that fire `Timeline.play()`.



**12/21/11**

1. Added `xorigin` and `yorigin` members to each sequence in the `Character` prototype. These are added to a `Character`'s original coordinates on every draw to offset its position on the Canvas. They also free `xdistance` and `ydistance` to be cumulative, and to be reset to zero without affecting the `Character`'s current position.

2. Updated `Character.advance()` to add `xorigin` and `yorigin` to `xpos` and `ypos`.

3. Removed unnecessary JavaScript calls from *times_polevault.html*.

4. Added `setOrigins()`, `setOriginX()` and `setOriginY()` methods to `Character`.

5. Created `EventDispatcher`, a constructor for an object that manages events. An `EventDispatcher` instance is now expected as the second argument to the `Timeline` constructor.

6. Moved `makeDispatchers()` from `Timeline` to `EventDispatcher` and call it on `EventDispatcher.init()`.

7. `Timeline.load()` puts references to the `EventDispatcher` instance into every loaded `Character`.

8. Added `min_edge` and `max_edge` properties to the `Slider` prototype. The constructor now expects them as the second and third arguments.

9. Got rid of `Animator`'s running property and changed its `this.running` condition to test for `this.event_dispatch.timeline_live` instead.

10. Got rid of `Timeline.injectBreakpoint()` and `Timeline.extractBreakpoint()`. More or less replaced them with `Timeline.stop()` and `Timeline.ready()`, which are much simpler.

11. The scrubber is draggable. Oh, fraptious day! In that effort, `Slider` got `selectScrubber()` and `releaseScrubber()` methods.



**12/20/11**

1. Got rid of the `cache` property and `store()`, `emptyCache()` and `emptyAllCaches()` methods for `Character`. They're not being used, and we can calculate positions on the Canvas with `x`- and `ydistance`.

2. Added MIT license language.

3. A `Character`'s `xdistance` carries over from one sequence to another. This allows a `Character` to move evenly across the screen while cycling through all its sequences.

4. Updated `Timeline.init()` to remember which dispatch handlers are listening for events.

5. Gave the `Slider` object a `selected` property that turns true on mousedown and false on mouseup.

6. Added `Timeline.injectBreakpoint()` and `Timeline.extractBreakpoint()` to pause and resume the animation. Made these mousedown and mouseup event handlers for `Slider`.



**12/19/11**

1. `Character`s now have a `userEvents` property -- an array of events they need to listen for -- and an event handler method named accordingly. So a `Character` that responds to a mouse click needs to define a method named `clickHandler`.

2. `Timeline.init()` now automatically adds event listeners for `Characters` that need them. 



**12/18/11**

1. **First set of changes in this new repo**, the library's new home. A `Copy` object collects all the behavior and details for any text that needs to respond to events.

2. Made a `Button` object with `Character` as its prototype. Sequences include`off`, `on`, `hover` and `click`.

3. Moved the `dispatch` methods into the `Timeline` object. `Timeline.init()` identifies touchable Characters -- the goal is to attach event listeners accordingly.

4. Moved the constructors into their own "core" file: *chuck.js*.

5. Working in a new example file named [times_polevault.html][1]. You can see it in progress [here][2]. 



**12/16/11**

1. Made an `Animator` object that collects all the machinery for drawing images to the screen. You can pass its constructor an optional number representing frames per second in milliseconds; the default is 75. The `Timeline` constructor now expects an `Animator` instance as its first argument.

2. Moved `playthrough_count` into `Timeline`.

3. Adapted `Timeline.storeInFrames()` to store the `xdistance` and `ydistance` of every cel.

4. Rounded all `xdistance` and `ydistance` calculations to two decimal places.



**12/15/11**

1. Added `xlimit` and `ylimit` members to the `scrubber` sequence in `Slider`. These represent the far extremes of the slider, the scrubber's position after it's traveled 100 percent of the track distance.

2. Created `Slider.drawBoundary()`, which helps click detection for the scrubber by drawing a path before running `isPointInPath()`. This was tricky, because it needs to follow the scrubber as it moves, and `Slider` calls two different sequences on each draw.



**12/14/11**

1. Finished making the `Slider` object and combined the previous `slider` and `scrubber` into a new instance of it. `Slider` inherits from `Character` -- it borrows its prototype.

2. Adapted `renderCharacter()` to sniff out `Slider` instances and make sure the track is drawn before the scrubber on each frame.



**12/13/11**

1. Fixed `Timeline.init()`. The timeline remembers the current cel, current sequence and current iteration for every `Character` instance on every frame in the animation. 

2. Moved `current_frame`, `current_bp` and `breakpoints` inside `Timeline`. Scrapped these and `fps` from `stage`'s scope. Everything works.



**12/12/11**

1. Added a constructor and prototype for a `Timeline` object. `Timeline` stores history and methods for every frame in the animation. `frame_total`, `current_frame`, the `breakpoints` array, `current_breakpoint` and `fps` are moving into this object.

2. `Timeline.init()` is now working, though I was wrong about how the `frames` array should store members. I'm revising this function. 

3. Added `Character.countSpan()` to store the total number of cels a `Character` puts on the timeline. Having this number handy makes it easier to do some of the math `Timeline.init()` needs.

4. Switched `pit` and `pitforeground` to the `Character` drawing methods.



**12/11/11**

1. Painstakingly removed all references to `Character.sequence`. I initially thought it would be a true collection, but it never got used that way. Leaving it seems like it costs an unnecessary lookup. So far, no ill effects. 

2. Updated `Character.reset()` to cycle through all sequences within a `Character` and set `current_seq` to zero when it's finished.

3. Updated `Character.setSequenceOrder()` to automatically reset `starting_frame` for any sequence following the first one. This lets `setFrameTotal` keep an accurate count and saves the developer from having to set this value explicitly.

4. Found out the hard way that `Character.setSequenceOrder()` can't set the `starting_frame`s accurately if it's called on a sequence that hasn't yet been populated with cels. It fails silently. So I added an error message to catch this.

5. For testing, made `vaulter`'s run-up sequence loop for 4 iterations. It, and the functions above, seem to work.

6. Removed comments and the unused call to *pv_cels.js* from *polevault.html*.



**12/10/11**

1. Added a `sequenceOrder` property and a `setSequenceOrder()` method to the `Character` prototype. These store and alter the calling order of drawing instructions for a `Character`'s sequences.

2. Modified `setFrameTotal()` to work with these new values. 

3. Added a `runup` sequence to `vaulter`: a loopable series of strides to show the vaulter approaching the pit.

4. Moved `sequenceOrder` out of the `Character` prototype and into its constructor, fixing the mistake I just introduced.

5. `sequenceOrder` is now called `sequence_order` to stick with the naming convention for variables.

6. Updated `Character.advance()` to cycle through sequences.

7. Fixed a bad assignment in `Character.advance()` that incremented `current_seq` too early.



**12/9/11**

1. Added the pit, the shadow and the updated vaulter to the stage.



**12/5/11** 

1. The scrubber now moves in time with the action, thanks to the new drawing methods. `Character.cache` is almost obsolete. The methods do all the calculations before rendering.

2. Fixed the problems with the Play and Step Through button boundaries. The Play path never closed before the Step Through path was drawn. 

3. Moved the `record` methods into the `Character` prototype. This means the functions can accept fewer arguments to know to which objects they're applied -- almost all of them are back to the arguments they'd expect as regular `CRC` methods. This also means I removed the "record" part of the name. They live in the namespace of their parent and that's how you call them: `vaulter.lineTo(100.0, 200.0);`.

4. Started making a `Scrubber` object that inherits from `Character`.

4. Added `xdistance`, `ydistance`, `xinc` and `yinc` members to each sequence in `Character`. These are meant to remember x and y increments and total distances from the axes as a `Character` moves across the stage.



**12/3/11** 

1. Moved `emptyAllCaches()` to the top of `drawFrame()`. This is a better solution than calling it from `animate()`, ensuring it gets called once per drawing cycle -- even the first one.

2. Added `store()` to the `Character` prototype.

3. Added `recordBeginPath()`, `recordClosePath()`, `recordFillStyle()`, `recordLineWidth()`, `recordLineJoin()`, `recordMiterLimit()`, `recordLinearGradient()`, `recordAddColorStop()`, `recordStroke()`, `recordStrokeStyle()`, `recordSave()` and `recordRestore()`.

4. Renamed `advanceCels()` to `advance()` and `advanceAllCels()` to `advanceAll()`.  

5. Moved the scrubber to the far left of the track (by subtracting 155.8 from all the x-values). 



**11/30/11** 

1. Gave the new controls `record` methods.

2. Made the new controls a little bigger for easier use on touch screens. 



**11/28/11** 

1. Added new `Character` instances: `slider`, `scrubber`, `back` and `forward`. These draw controls on the stage, though they're not active yet.



**11/27/11** 

1. Made a `Character` instance called `track`, drawing a track on the canvas. 

2. Added a condition to `play()` and `stepThrough()` that prevents them from being fired before the previous animation is finished running. 

3. Gave `animate()` a `running` property.

4. Added `emptyCache()` to the `Character` prototype and the helper `emptyAllCaches()`. These clear the `cache` array of saved coordinates inside each `Character`'s sequence.

5. Gave each `Character` a `queue_index` property that stores the `Character`'s index position within `a_queue`.



**11/25/11** 

1. Combined *new_polevault.js* and *polevault.js* into one file named *polevault.js*. Got rid of obsolete comments. Commented out the tests.

2. `vaulter` is an instance of `Character`.

3. Commented out the triggers in *polevault.html*



**11/22/11** 

1. Added `recordBezierCurveTo()`.



**11/21/11** 

1. Added a condition to `Character.advanceCels()` to reset `current_cel` and `current_iteration` to 0 when the `breakpoints` array rolls over.

2. Added another call to `Character.advanceCels()` from `animate()` 



**11/20/11** 

1. Created a `setFinalBreakpoint` function to programatically set the last breakpoint to the last frame in the animation. The user (the developer) doesn't have to do this manually.

2. Added a condition to `animate()` to exit when `current_frame` is equal to or greater than `total_frames`. 



**11/12/11** 

1. Moved `updateCels()` into the `Character` prototype.

2. Added an `advanceCels()` method to the `Character` prototype.

3. Changed `drawFrame()` to expect an argument: an array of `Character`s. All these measures are designed to replace the `anim_queue` object I was using before, which added an extra step to the animation looping.

4. Added a `setFrameTotal()` method.



**11/11/11** 

1. Put 5 new members in the `breakpoints` array to test it out.

2. Added `advanceBreakpoint()` to increment `currentBreakpoint`.

3. Made `play()` and `stepThrough()` functions that set different breakpoints before running `animate()`.



**11/10/11** 

1. Renamed `ftha()` to `updateCels()`. Renamed `CharACTer()` to `Character()`. The internal capitlization was designed to help avoid namespace collisions, but really, it was annoying. I'll keep it out of the global space or wrap it or something.

2. Modified the last `if` test in updateCels to compare `current_cel` to `cels.length`.

3. Added a condition to `renderCharacter()` to check whether it's been passed an function. If not, it renders the last cel in the sequence.

4. `CharACTer.create()` isn't necessary. I removed it.

5. `CharACTer`'s methods have been moved into a prototype. Don't see why each instance needs its own unique copy.

6. `animate()` once again increments `current_frame` on every draw. It's clear there needs to be a master count of which frame we're on.

7. `ftha` doesn't reset `current_cel` when a `CharACTer` leaves `anim_queue`. This leaves the `CharACTer` at its last position on the stage while others continue to move.



**11/9/11** 

1. `CharACTer` gets a `create()` method for instantiation.

2. The `sequence` object in every `CharACTer` now has a `starting_frame` member. This tells `ftha` the frame on which to start animating the `CharActer`.

3. `breakpoints` is now an array, using `current_bp` to identify the index of the current breakpoint.



**11/8/11** 

1. Made the `CharACTers` constructor, for creating objects that keep their own distinct drawing rules. A CharACTer represents an autonomous object on the stage and might be thought of as a cel in traditional animation.

2. Created `ftha` (function that handles advancement) which updates the drawing instructions for every CharACTer on every redraw. I'll come up with a better name.

3. The `CharACTer` methods `recordMoveTo`, `recordLineTo`, `recordStrokeRect`, and `recordFillRect` create paths and cache the results of the coordinates passed to them. This is designed to make it easier to do math on the coordinates between redraws. More of these recorder functions to come.



[1]: https://github.com/parisminton/chuck.js/blob/master/times_polevault.html "A new pole vault pencil test based on New York Times Web page templates."

[2]: http://james.da.ydrea.ms/times_polevault.html "A new pole vault pencil test based on New York Times Web page templates."

[3]: https://github.com/parisminton/bigwheel.js "parisminton's bigwheel.js repo on GitHub"

[4]: http://james.da.ydrea.ms/polevault.html "Pole vaulter animation pencil test at james.da.ydrea.ms."
