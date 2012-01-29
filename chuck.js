/*

Copyright (c) 2012 James Thomas (parisminton)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

var the_canvas = document.getElementById("main-stage"),
    context = the_canvas.getContext("2d"),
    gradient;

/* CONSTRUCTOR ... "doer" functions for the Characters. each has an onFrame() method ... */
function Action (obj, func_name) {
  this.obj = obj;
  this.constructor = Action;
  this.onFrame = function (frame) {
    obj.checkTrigger(frame);
    obj.triggers[frame].push(this);
    return obj;
  }
};



/* CONSTRUCTOR ... an entity on the screen with one or more cels ... */
function Character (obj_name, touchable) {
  this.name = obj_name;
  this.visible = false;
  this.touchable = touchable;
  this.triggers = {};
  this.checkTrigger = function(frame) {
    if (!this.triggers[frame]) {
      this.triggers[frame] = [];
    }
  };
  this.current_seq = 0; 
  this.sequence_order = ["main"];
  this.main = {
    xorigin : 0,
    yorigin : 0,
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    starting_frame : 0,
    iterations : 1,
    current_iteration : 0,
    current_cel : 0,
    cels : []
  };
  this.xpos;
  this.ypos;
  this.constructor = Character;
  this.show();
  this.hide();
};
Character.prototype = {
  
  makeAction : function(constructr, func) {
    return function () {
      constructr.apply(func, arguments);
      func.constructor = constructr;
      return func;
    }
  },

  travelTo : new Action(this, function () {
    this.visible = true; 
  }),

  show : function () {
    var obj = this,
        func,
        maker;

    func = function () {
      obj.initial_vis = obj.visible;
      obj.visible = true;
      return obj;
    };

    maker = this.makeAction(Action, func);
    this.show = maker(obj, "show"); 
  },

  hide : function () {
    var obj = this,
        func,
        maker;

    func = function () {
      obj.initial_vis = obj.visible;
      obj.visible = false;
      return obj;
    };
    
    maker = this.makeAction(Action, func);
    this.hide = maker(obj, "hide");
  },

  setSequenceOrder : function() {
    var i,
        len = arguments.length;
    this.sequence_order.length = 0;
    for (i = 0; i < len; i += 1) {
      if (this[arguments[i]].cels.length === 0) {
        console.log("ERROR from setSequenceOrder(): *" + arguments[i] + "* looks like it hasn't been created yet. If you want to add *" + arguments[i] + "* to the sequence, create it first, then run me.");
      }
        this.sequence_order.push(arguments[i]);
      /* ... for every sequence that follows the first, set the new starting_frame to the length of the previous member's sequence multiplied by its number of iterations. */ 
      if (i > 0) {
        this[arguments[i]].starting_frame = this[arguments[(i - 1)]].cels.length * this[arguments[(i - 1)]].iterations;
      }
    }
  },

  makeSequence : function (seq_name) {
    this[seq_name] = {
      xorigin : 0,
      yorigin : 0,
      xdistance : 0,
      ydistance : 0,
      xinc : 0,
      yinc : 0,
      starting_frame : 0,
      iterations : 1,
      current_iteration : 0,
      current_cel : 0,
      cels : []
    }
  },

  reset : function () {
    var i = 0,
        len = this.sequence_order.length;
    for (i = 0; i < len; i += 1) {
      this[this.sequence_order[i]].current_cel = 0;
      this[this.sequence_order[i]].current_iteration = 0;
      this[this.sequence_order[i]].xdistance = 0; 
    }
    this.current_seq = 0;
  },

  countSpan : function () {
    var i, cs;

    for (i = 0; i < this.sequence_order.length; i += 1) {
      cs = this.sequence_order[i];
      if (this.span) {
        this.span = (this.span > ((this[cs].cels.length * this[cs].iterations) + this[cs].starting_frame)) ? this.span : ((this[cs].cels.length * this[cs].iterations) + this[cs].starting_frame);
      }
      else {
        this.span = ((this[cs].cels.length * this[cs].iterations) + this[cs].starting_frame);
      }
    }
  },

  setOrigins : function (xvalue, yvalue) {
    var i,
        len = this.sequence_order.length;
    for (i = 0; i < len; i += 1) {
      this[this.sequence_order[i]].xorigin = xvalue;
      this[this.sequence_order[i]].yorigin = yvalue;
    }
  },

  setOriginX : function (xvalue) {
    var i,
        len = this.sequence_order.length;
    for (i = 0; i < len; i += 1) {
      this[this.sequence_order[i]].xorigin = xvalue;
    }
  },

  setOriginY : function (yvalue) {
    var i,
        len = this.sequence_order.length;
    for (i = 0; i < len; i += 1) {
      this[this.sequence_order[i]].yorigin = yvalue;
    }
  },

  plotX : function (xvalue) {
    var xo = this[this.sequence_order[this.current_seq]].xorigin,
        xd = this[this.sequence_order[this.current_seq]].xdistance;

    /* ... if we\'re drawing the track, exclude the xdistance ... */
    xvalue = (this.track_operation) ? (xvalue + xo) : (xvalue + xo + xd); 
    return xvalue;
  },

  plotY : function (yvalue) {
    var yo = this[this.sequence_order[this.current_seq]].yorigin,
        yd = this[this.sequence_order[this.current_seq]].ydistance;
        
    /* ... if we\'re drawing the track, exclude the ydistance ... */
    yvalue = (this.track_operation) ? (yvalue + yo) : (yvalue + yo + yd); 
    return yvalue;
  },

  advance : function () {
    var cs = this.current_seq,
        order = this.sequence_order,
        i;

    this[order[cs]].xdistance = Math.round((this[order[cs]].xdistance + this[order[cs]].xinc) * 100) / 100;
    this[order[cs]].ydistance = Math.round((this[order[cs]].ydistance + this[order[cs]].yinc) * 100) / 100;

    this[order[cs]].current_cel += 1;
    if (this[order[cs]].current_cel >= this[order[cs]].cels.length) {
      this[order[cs]].current_iteration += 1;
      if (this[order[cs]].current_iteration >= this[order[cs]].iterations) {
        this.current_seq += 1;
        if (this.current_seq >= order.length) {
          this.current_seq = (order.length - 1);
          this[order[this.current_seq]].current_cel = (this[order[this.current_seq]].cels.length - 1);
        }
        else {
          this[order[this.current_seq]].xdistance = this[order[cs]].xdistance;
          this[order[this.current_seq]].ydistance = this[order[cs]].ydistance;
        }
      }
      else {
        this[order[cs]].current_cel = 0;
      }
    }
  },

  parseDrawingObject : function (param, visible, instruction_array, obj) {
    var action,
        instructions = (instruction_array) ? instruction_array : [],
        xpos,
        ypos,
        xctrl_1,
        yctrl_1,
        xctrl_2,
        yctrl_2,
        stop,
        value,
        xstart,
        ystart,
        xend,
        yend,
        hover_color;

    if (typeof param === "string") {
      instructions.push(function () {
        context[param]();
      });
    }
    if (typeof param === "object") {
      for (action in param) {
        if (typeof param[action] === "object") {
          if (action === "gradient") {
            xstart = param[action][0];
            ystart = param[action][1];
            xend = param[action][2];
            yend = param[action][3];
            instructions.push(function () {
              gradient = context.createLinearGradient(xstart, ystart, xend, yend);
            });
          }
          if (action === "addColorStop") {
            stop = param[action][0];
            value = param[action][1];
            instructions.push(function () {
              gradient.addColorStop(stop, value);
            });
          }
          if (action === "moveTo" || action === "lineTo") {
            xpos = this.plotX(param[action][0]);
            ypos = this.plotY(param[action][1]);
            instructions.push(function () {
              context[action](xpos, ypos);
            });
          }
          if (action === "fillRect") {
            xpos = this.plotX(param[action][0]);
            ypos = this.plotY(param[action][1]);
            instructions.push(function () {
              context[action](xpos, ypos, param[action][2], param[action][3]);
            });
          }
          if (action === "bezierCurveTo") {
            xctrl_1 = this.plotX(param[action][0]);
            yctrl_1 = this.plotY(param[action][1]);
            xctrl_2 = this.plotX(param[action][2]);
            yctrl_2 = this.plotY(param[action][3]);
            xpos = this.plotX(param[action][4]);
            ypos = this.plotY(param[action][5]);
            instructions.push(function () {
              context[action](xctrl_1, yctrl_1, xctrl_2, yctrl_2, xpos, ypos);
            });
          }
        }
        if (typeof param[action] === "string" || typeof param[action] === "number") {
          if (action === "fillStyle") {
            if (param[action] == "hover_state") { /* ### need a way to map this ### */
              instructions.push(function () {
                context[action] = obj.colors.hover_state; 
              });
            }
            else {
              instructions.push(function () {
                context[action] = param[action];
              });
            }
          }
          if (action === "strokeStyle" || action === "miterLimit" || action === "lineWidth" ||
              action === "lineJoin" ) {
            instructions.push(function () {
              context[action] = param[action];
            });
          }
        }
      }
    }
    /* ... if an instructions array wasn\'t passed in by the caller, return this local one ... */ 
    if (!instruction_array) {
      return instructions;
    }
  },

  makeFrameInstructions : function (current_frame, obj) {
    var order = obj.sequence_order,
        cs = obj.current_seq,
        cc = obj[order[cs]].current_cel,
        i,
        j,
        len = obj[order[cs]].cels[cc].length,
        len_2,
        vis,
        frame_string = current_frame.toString(),
        instructions = [];

    for (j = 0; j < len; j += 1) {
      /* ... this immediate function creates a new context in which to pass these variables
             so they can be stored by value, not by reference ... */
      (function (cs, cc, vis) {
        obj.parseDrawingObject(obj[order[cs]].cels[cc][j], vis, instructions);
      })(cs, cc, vis);
    }

    obj.timeline.frames[current_frame].push(function () {
      var i,
          len = instructions.length;
      
      if(typeof vis != "undefined" && typeof vis === "function") {
        vis();
      }

      if (obj.visible) {
        for (i = 0; i < instructions.length; i += 1) {
          instructions[i]();
        }
      }
    });
    obj.advance();
  },

  initBoundary : function () {
    this.drawBoundary();
  },

  initHandlers : function () {
    var i = 0,
        len = this.userEvents.length;

    for (i = 0; i < len; i += 1) {
      this[this.userEvents[i] + "Handler"]();
    }
  },

  init : function () {
    if (this.userEvents && this.userEvents.length > 0) {
      this.initHandlers();
    }
    if (this.boundary) {
      this.drawBoundary();
    }
  }

};



/* CONSTRUCTOR ... a control that fires an event ... */
function Button (obj_name) {
  this.name = obj_name;
  this.visible = true;
  this.touchable = true;
  this.triggers = {};
  this.over = false;
  this.current_seq = 0;
  this.sequence_order = ["enabled"];
  this.enabled = {
    xorigin : 0,
    yorigin : 0,
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    starting_frame : 0,
    iterations : 1,
    current_iteration : 0,
    current_cel : 0,
    cels : []
  };
  this.colors = {};
  this.me = this;
  this.constructor = Button;
};

Button.prototype = new Character();

Button.prototype.makeFrameInstructions = function (current_frame, obj) {
  var order = obj.sequence_order,
      cs = obj.current_seq,
      cc = obj[order[cs]].current_cel,
      i,
      len = obj[order[cs]].cels[cc].length,
      instructions = [];

  for (i = 0; i < len; i += 1) {
    /* ... this immediate function creates a new context in which to pass these variables
           so they can be stored by value, not by reference ... */
    (function (cs, cc) {
      obj.parseDrawingObject(obj[order[cs]].cels[cc][i], true, instructions, obj);
    })(cs, cc);
  }

  obj.timeline.frames[current_frame].push(function () {
    var i,
        len = instructions.length;

    if (obj.visible) {
      if (obj.over) {
        obj.colors.hover_state = obj.colors.over;
      }
      else {
        obj.colors.hover_state = obj.colors.out;
      }
      for (i = 0; i < instructions.length; i += 1) {
        instructions[i]();
      }
    }
  });
  obj.advance();
};

/* ... defines itself on the first call to avoid losing local scope when it\'s called by 
       the window object. using *this* won't retain the instance\'s scope .. */
Button.prototype.drawBoundary = function () {
  var obj = this,
      i,
      len = obj.boundary.length,
      instructions = [];

  for (i = 0; i < len; i += 1) {
    obj.parseDrawingObject(obj.boundary[i], true, instructions);
  }

  obj.drawBoundary = function () {
    var i,
        len = instructions.length;

    if (obj.visible) {
      for (i = 0; i < instructions.length; i += 1) {
        instructions[i]();
      }
    }
  }
};

Button.prototype.userEvents = ["click", "mousemove"];

/* ... defines itself so it can retain scope after being called by the window object ... */
Button.prototype.mousemoveHandler = function () {
  var obj = this;

  /* ... we\'re simulating a mouseover by detecting whether the mouse moves into or out of this path.
         a true mouseover fires once for the whole canvas, not just the small path we\'ve defined.
         so once you mouse anywhere over the canvas, you have a fraction of a second to land inside
         the path. if you miss, you have to mouse out of the whole canvas element, then back in,
         to fire another mouseover.
         this method subverts that behavior for the behavior we want. ... */

  this.mousemoveHandler = function (mx, my) {
    if (context.isPointInPath(mx, my)) {
      obj.over = true;
      obj.event_dispatcher.mouseover = obj.name;
    }
    else {
      obj.over = false;
      obj.event_dispatcher.mouseover = null;
    }
    if (!obj.timeline.live) {
      obj.animator.redraw();
    }
  }
};

Button.prototype.init = function () {
  this.colors.hover_state = this.colors.out;
  this.drawBoundary();
  this.initHandlers(); 
};


/* CONSTRUCTOR ... a control that lets the user slide through a range ... */
function Slider (obj_name, min_edge, max_edge, touchable) {
  this.name = obj_name;
  this.min_edge = min_edge;
  this.max_edge = max_edge;
  this.touchable = (touchable) ? touchable : false;
  this.visible = true;
  this.triggers = {};
  this.current_seq = 0; 
  this.sequence_order = ["track", "scrubber"];
  this.track = {
    xorigin : 0,
    yorigin : 0,
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    starting_frame : 0,
    iterations : 1,
    current_iteration : 0,
    current_cel : 0,
    cels : []
  };
  this.scrubber = {
    selected : false,
    xorigin : 0,
    yorigin : 0,
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    starting_frame : 0,
    iterations : 1,
    current_iteration : 0,
    current_cel : 0,
    cels : []
  };
  this.me = this;
  this.constructor = Slider;
};
Slider.prototype = new Character(); 

Slider.prototype.makeFrameInstructions = function (current_frame, obj) {
  var cc = obj.scrubber.current_cel,
      i,
      t_len = obj.track.cels[0].length,
      s_len = obj.scrubber.cels[cc].length,
      orig_xdist,
      orig_ydist,
      instructions = [],
      boundary_instructions = [];

  this.track_operation = true;
  for (i = 0; i < t_len; i += 1) {
    obj.parseDrawingObject(obj.track.cels[0][i], true, instructions);
  }

  this.track_operation = false;
  for (i = 0; i < s_len; i += 1) {
    /* ... this immediate function creates a new context in which to pass these variables
           so they can be stored by value, not by reference ... */
    (function (cc) {
      obj.parseDrawingObject(obj.scrubber.cels[cc][i], true, instructions);
      obj.parseDrawingObject(obj.boundary[i], true, boundary_instructions);
    })(cc);
  }

  obj.timeline.frames[current_frame].push(function () {
    var i,
        len = instructions.length;

    if (obj.visible) {
      for (i = 0; i < len; i += 1) {
        instructions[i]();
      }
    }
  });

  obj.boundary.cels.push(function () {
    var i,
        len = boundary_instructions.length;

    for (i = 0; i < len; i += 1) {
      boundary_instructions[i]();
    }
  });
  
  obj.advance();
};

Slider.prototype.scale = function (xdist) {
  var near_xinc = Math.round((xdist / this.scrubber.original_xinc) * 100) / 100, // lower limit
      mod = Math.round((xdist % this.scrubber.original_xinc) * 100) / 100,
      nearest_frame = (mod < (this.scrubber.original_xinc - mod)) ? Math.floor(near_xinc) : Math.ceil(near_xinc);

  return nearest_frame;
};

/* ... defines itself on the first call to avoid losing local scope when it\'s called by 
       the window object. using *this* won't retain the instance\'s scope .. */
Slider.prototype.drawBoundary = function () {
  var obj = this;
      obj.boundary.cels = [];

  obj.drawBoundary = function () {
    if (obj.visible) {
      obj.boundary.cels[obj.timeline.current_frame]();
    }
  }

};

Slider.prototype.selectScrubber = function () {
  this.scrubber.selected = true;
};

Slider.prototype.releaseScrubber = function () {
  this.scrubber.selected = false;
};

Slider.prototype.init = function () {
  this.breadth = (this.max_edge - this.min_edge);
  this.scrubber.xinc = this.scrubber.original_xinc = Math.round(((this.breadth + 4 ) / this.timeline.frame_total) * 100) / 100;
  this.drawBoundary(); 
  this.initHandlers();
};

Slider.prototype.userEvents = ["mousedown", "mousemove", "mouseup"];

Slider.prototype.mousedownHandler = function () {
  var obj = this;

  this.mousedownHandler = function (mx, my) {
    if (context.isPointInPath(mx, my)) {
      obj.scrubber.play_status = obj.timeline.live;
      obj.timeline.stop();
      obj.selectScrubber();
    }
  }
};

Slider.prototype.mousemoveHandler = function () {
  var obj = this;

  this.mousemoveHandler = function (mx, my) {
    if (obj.scrubber.selected) {
      if (obj.event_dispatcher.mx < obj.min_edge) {
        obj.timeline.current_frame = 0;
      }
      else if (obj.event_dispatcher.mx > obj.max_edge) {
        obj.timeline.current_frame = (obj.timeline.frame_total - 1);
      }
      else {
        obj.timeline.current_frame = obj.scale((Math.round((obj.event_dispatcher.mx - obj.min_edge) * 100) / 100));
      }
      obj.animator.draw(obj.timeline.frames[obj.timeline.current_frame]);
    }
  }
};

Slider.prototype.mouseupHandler = function () {
  var obj = this;

  this.mouseupHandler = function () {
    if (obj.scrubber.selected) {
      obj.releaseScrubber();
      obj.event_dispatcher.last_action = "scrubber";
    }
    if (obj.scrubber.play_status) {
      obj.timeline.ready();
      obj.animator.animate();
      obj.event_dispatcher.last_action = "play";
    }
  }
};



/* CONSTRUCTOR ... event management ... */
function EventDispatcher () {
  this.dispatchers = {};
  this.triggers = {};
  this.mouseover = null;
  this.last_action = null;
  this.me = this;
  this.constructor = EventDispatcher;
};
EventDispatcher.prototype = {

  makeDispatchers : function (obj, event_string) {
    return function (evt) {
      var i,
          len = obj.timeline.queue.length,
          handler_string = event_string + "Handler";
          
      obj.mx = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
      obj.my = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop);
      for (i = 0; i < len; i += 1) {
        if (obj.timeline.queue[i].drawBoundary && typeof obj.timeline.queue[i].drawBoundary === "function") {
          /* ... if the user has selected the scrubber, we don't care if they're in the boundary ... */
          if (obj.timeline.queue[i].constructor === Slider && obj.timeline.queue[i].scrubber.selected) {
            if (obj.timeline.queue[i][handler_string]) {
              obj.timeline.queue[i][handler_string]();
            }
          }
          else {
            obj.timeline.queue[i].drawBoundary();
            if (obj.timeline.queue[i][handler_string]) {
              obj.timeline.queue[i][handler_string](obj.mx, obj.my);
            }
          }
        }
      }
    }
  },

  init : function () {
    var i, 
        j,
        len = this.timeline.queue.length,
        len2,
        event_string,
        dispatch_method_string,
        match = false;

    function typeTest (o) {
      return Object.prototype.toString.call(o);
    }

    function isNotEmpty (o) {
      var test = typeTest(o);

      if (test === "[object Object]") {
        for (prop in o) {
          if (o.hasOwnProperty(prop)) {
            return true;
          }
          return false;
        }
      }
      
      if (test === "[object Array]") {
        if (o.length > 0) {
          return true;
        }
        return false;
      }
    }
    
    /* ... recursive looping ... */
    function compare (value, collection) {
      var i = 0,
          test = typeTest(collection),
          props = [],
          key;

      if (test === "[object Object]") {
        for (prop in collection) {
          props.push(prop);
        }
        key = props[i];
      }
      else if (test === "[object Array]") {
        key = i;
      }

      /* ... without this function, the key stays frozen at i's initial value, 0 ... */
      function setKey () {
        key = (test === "[object Object]") ? props[i] : i;
      }

      (function recurse () {
        if (isNotEmpty(collection) && key) {
          if ((value) === key) {
            match = true;
            i = 0;
            return;
          }
          else {
            match = false;
            i += 1;
            setKey();
            recurse(value, collection);
          }
        }
        i = 0;
      })();
    }

    for (i = 0; i < len; i += 1) {
      if (this.timeline.queue[i].userEvents) {
        len2 = this.timeline.queue[i].userEvents.length;
        for (j = 0; j < len2; j += 1) {
          event_string = this.timeline.queue[i].userEvents[j];
          dispatch_method_string = "dispatch" + event_string.charAt(0).toUpperCase() + event_string.slice(1);

          compare(event_string, this.dispatchers);
          
          if (!match) {
            this.dispatchers[event_string] = this.makeDispatchers(this.me, event_string);
            the_canvas.addEventListener(event_string, this.dispatchers[event_string], false);
          }
        }
        match = false;
      }
      if (isNotEmpty(this.timeline.queue[i].triggers)) {
        for (key in this.timeline.queue[i].triggers) {
          if (!this.triggers[key]) {
            this.triggers[key] = {};
          }
          this.triggers[key][this.timeline.queue[i].name] = this.timeline.queue[i].triggers[key];
          console.log(this.timeline.frame_total);
        }
      }
    }
  }
};



/* CONSTRUCTOR ... a collection that manages state for all Characters in the animation ... */
function Timeline (anim, events) {
  this.animator = anim;
  this.event_dispatcher = events;
  this.queue = [];
  this.frame_total = 0;
  this.frames = [];
  this.frame_index = 0;
  this.current_frame = 0;
  this.breakpoints = [];
  this.current_bp = 0; // by default, the first breakpoint
  this.live = false;
  this.playthrough_count = 0;
  this.me = this; // ... this self-reference helps us define the scope in our 'dispatch' calls below ...
  this.constructor = Timeline;
};
Timeline.prototype = {

  load : function () {
    var i,
        len = arguments.length;

    for (i = 0; i < len; i += 1) {
      arguments[i].countSpan();
      arguments[i].animator = this.animator;
      arguments[i].event_dispatcher = this.event_dispatcher;
      arguments[i].timeline = this;
      arguments[i].reset();
      arguments[i].queue_index = (this.queue.length) ? this.queue.length : 0;
      this.queue.push(arguments[i]);
    }
    this.init();
  },

  store : function () {
    var i,
        j,
        len = this.queue.length;

    for (i = 0; i < this.frame_total; i += 1) {
      for (j = 0; j < len; j += 1) {
        this.queue[j].makeFrameInstructions(i, this.queue[j]);
      }
    }
  },

  init : function () {
    this.setFrameTotal();
    this.setFinalBreakpoint();
    this.declareFrames();
    for (var i = 0; i < this.queue.length; i += 1) {
      this.queue[i].init();
    }
    this.store();
    this.animator.timeline = this;
    this.animator.init();
    this.event_dispatcher.timeline = this;
    this.event_dispatcher.init();
    this.animator.event_dispatcher = this.event_dispatcher;
  },

  setFrameTotal : function () {
    var i, j,
        len = this.queue.length,
        len2,
        seq;

    for (i = 0; i < len; i += 1) {
      len2 = this.queue[i].sequence_order.length;

      for (j = 0; j < len2; j += 1) {
        seq = this.queue[i].sequence_order[j];

        this.frame_total = (this.frame_total > (this.queue[i][seq].starting_frame + (this.queue[i][seq].cels.length * this.queue[i][seq].iterations))) ? this.frame_total : (this.queue[i][seq].starting_frame + (this.queue[i][seq].cels.length * this.queue[i][seq].iterations));
      }
    }
    return this.frame_total;
  },

  declareFrames : function () {
    var i;

    for (i = 0; i < this.frame_total; i += 1) {
      this.frames[i] = [];
    }
  },

  setFinalBreakpoint : function () {
    if (this.breakpoints[(this.breakpoints.length - 1)] !== this.frame_total) {
      if (this.setFinalBreakpoint.alreadySet) {
        this.setFinalBreakpoint.lastRemovedValue = this.breakpoints.pop();
      }
      this.breakpoints.push(this.frame_total);
      this.setFinalBreakpoint.alreadySet = true;
    }
  },

  advanceBreakpoint : function () {
    this.current_bp += 1;
    if (this.current_bp >= this.breakpoints.length) {
      this.current_bp = 0;
    }
  },

  ready : function () {
    this.live = true;
  },

  stop : function () {
    this.live = false;
  },

  play : function () {
    if (!this.live) {
      this.ready();
      this.current_bp = (this.breakpoints.length - 1);  // ### a chance current_bp becomes a negative number ###
      // this.current_frame = 0;
      this.animator.animate();
      this.event_dispatcher.last_action = "play";
    }
  },

  stepThrough : function () {
    if (!this.live) {
      this.ready();
      this.animator.animate();
      this.animator.copy.swapText();
      this.animator.copy.insertText();
      this.event_dispatcher.last_action = "step";
    }
  },

  frameBack : function () {
    if (!this.live) {
      if (this.current_frame <= 0) {
        this.current_frame = (this.frame_total - 1);
      }
      else {
        this.current_frame -= 1;
      }
      this.animator.draw(this.frames[this.current_frame]);
      this.event_dispatcher.last_action == "back"
    }
  },

  frameForward : function () {
    if (!this.live) {
      if (this.current_frame >= (this.frame_total - 1)) {
        this.current_frame = 0;
      }
      else {
        this.current_frame += 1;
      }
      this.animator.draw(this.frames[this.current_frame]);
      this.event_dispatcher.last_action == "forward"
    }
  }
  
};



/* CONSTRUCTOR ... does the heavy lifting of drawing frames ... */
function Animator (fps, copy) {
  this.fps = (fps) ? fps : 75; // ### optionally, an array? [75]
  this.copy = (copy) ? copy : null;
  this.me = this; // ... need this self-reference for makeAnimate, explained below ...
  this.constructor = Animator;
};
Animator.prototype = {

  /* ... only thinks about repeating calls to draw() ... */ 
  /* ... created in this tricky, self-defining way to avoid the scope problems with repeated calls 
         to setTimeout. using *this* won't retain the instance\'s scope .. */
  animate : function () { 
    var obj = this; /* ... closure ... */

    this.animate = function () {
      var i,
          len;

      /* ... timeline advancement ... */
      if (obj.timeline.live) {
        /* ... draw the last frame, exit and don\'t roll current_frame over to zero ... */
        if (obj.timeline.current_frame === (obj.timeline.frame_total - 2)) {
          obj.timeline.current_frame = (obj.timeline.frame_total - 1);
          // console.log("First condition: animate() exited on frame " + obj.timeline.current_frame + ".");
          obj.draw(obj.timeline.frames[obj.timeline.current_frame]); 
          obj.timeline.current_bp = 0;
          obj.timeline.stop();
          obj.timeline.playthrough_count += 1;
          if (obj.copy) {
            obj.copy.resetText();
          }
          return "done";
        }
        if (obj.timeline.current_frame >= obj.timeline.breakpoints[obj.timeline.current_bp] &&
            obj.timeline.current_frame != (obj.timeline.frame_total - 1)) {
          // console.log("Second condition: animate() exited on frame " + obj.timeline.current_frame + ".");
          obj.timeline.advanceBreakpoint(); 
          obj.timeline.stop();
          return "paused";
        }
        obj.timeline.current_frame = (obj.timeline.current_frame >= (obj.timeline.frame_total - 1)) ? 0 : obj.timeline.current_frame += 1;

        /* ... if this frame has triggers, fire them before drawing ... */
        if (obj.timeline.event_dispatcher.triggers[obj.timeline.current_frame]) {
          for (key in obj.timeline.event_dispatcher.triggers[obj.timeline.current_frame]) {
            len = obj.timeline.event_dispatcher.triggers[obj.timeline.current_frame][key].length;
            for (i = 0; i < len; i += 1) {
              obj.timeline.event_dispatcher.triggers[obj.timeline.current_frame][key][i]();
            }
          }
        }

        obj.draw(obj.timeline.frames[obj.timeline.current_frame]); 
        // console.log(obj.timeline.current_frame);
        setTimeout(obj.animate, obj.fps);
      }

    }
  },

  init : function () {
    this.animate(); /* ... this call redefines it with \'this\' set to Animator ... */  
    this.draw(this.timeline.frames[this.timeline.current_frame]);
  },

  /* ...only thinks about drawing... */
  draw : function (requested_frame) {
    var i,
        len = requested_frame.length;
        
    context.clearRect(0, 0, 800, 476);
    for (i = 0; i < len; i += 1) {
      if (typeof requested_frame[i] === "function") {
        requested_frame[i]();
      }
    }
  },

  redraw : function () {
    this.draw(this.timeline.frames[this.timeline.current_frame]);
  }

};



/* CONSTRUCTOR ... stored text ... */
function Copy (container) {
  this.blocks = []; 
  this.current_copy = 0;
  this.container = (container) ? container : null;
  this.constructor = Copy;
};
Copy.prototype = {

  swapText : function () {
    this.current_copy += 1;
    if (this.current_copy >= this.blocks.length) {
      this.current_copy = 0;
    }
  },

  insertText : function () {
    this.container.innerHTML = "";
    this.container.innerHTML = this.blocks[this.current_copy];
  },

  resetText : function () {
    this.current_copy = 0;
    this.container.innerHTML = "";
    this.container.innerHTML = this.blocks[0];
  }

};
