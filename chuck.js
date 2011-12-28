/*

Copyright (c) 2011 James Thomas (parisminton)

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

/* CONSTRUCTOR ... an entity on the screen with one or more cels ... */
function Character (obj_name, touchable) {
  this.name = obj_name;
  this.visible = false;
  this.touchable = touchable;
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
};
Character.prototype = {

  show : function () {
    this.visible = true;
  },

  hide : function () {
    this.visible = false;
  },

  setSequenceOrder : function() {
    var i,
        len = arguments.length;
    this.sequence_order.length = 0;
    for (i = 0; i < len; i += 1) {
      if (this[arguments[i]].cels.length == 0) {
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
    xvalue = (xvalue + this[this.sequence_order[this.current_seq]].xorigin
                     + this[this.sequence_order[this.current_seq]].xdistance);
    return xvalue;
  },

  plotY : function (yvalue) {
    yvalue = (yvalue + this[this.sequence_order[this.current_seq]].yorigin
                     + this[this.sequence_order[this.current_seq]].ydistance);
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
    if (this.timeline.current_frame >= this.timeline.frame_total) {
      this.reset();
    }
  },

  /* ... drawing instructions that update their coordinates before processing ...
  beginPath : function () {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.beginPath();
    });
  },

  moveTo : function (xpos, ypos) {
    xpos = this.plotX(xpos);
    ypos = this.plotY(ypos);
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.moveTo(xpos, ypos);
    });
  },

  lineTo : function (xpos, ypos) {
    xpos = this.plotX(xpos);
    ypos = this.plotY(ypos);
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.lineTo(xpos, ypos);
    });
  },

  lineWidth : function (line_width) {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.lineWidth = line_width;
    });
  },

  lineJoin : function (line_join) {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.lineJoin = line_join;
    });
  },

  miterLimit : function (miter_limit) {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.miterLimit = miter_limit;
    });
  },

  bezierCurveTo : function (xctrl_1, yctrl_1, xctrl_2, yctrl_2, xpos, ypos) {
    xctrl_1 = this.plotX(xctrl_1);
    yctrl_1 = this.plotY(yctrl_1);
    xctrl_2 = this.plotX(xctrl_2);
    yctrl_2 = this.plotY(yctrl_2);
    xpos = this.plotX(xpos);
    ypos = this.plotY(ypos);
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.bezierCurveTo(xctrl_1, yctrl_1, xctrl_2, yctrl_2, xpos, ypos);
    });
  },

  strokeRect : function (xpos, ypos, width, height) {
    xpos = this.plotX(xpos);
    ypos = this.plotY(ypos);
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.strokeRect(xpos, ypos, width, height);
    });
  },

  fillRect : function (xpos, ypos, width, height) {
    xpos = this.plotX(xpos);
    ypos = this.plotY(ypos);
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.fillRect(xpos, ypos, width, height);
    });
  },

  closePath : function () {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.closePath();
    });
  },

  createLinearGradient : function (xstart, ystart, xend, yend) {
    this.timeline.frames3[this.timeline.frame_index].push(context.createLinearGradient(xstart, ystart, xend, yend));
  },

  addColorStop : function (gradient, offset, color_string) {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      gradient.addColorStop(offset, color_string);
    });
  },

  fill : function () {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.fill();
    });
  },

  fillStyle : function (style_string) {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.fillStyle = style_string;
    });
  },

  stroke : function () {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.stroke();
    });
  },

  strokeStyle : function (style_string) {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.strokeStyle = style_string;
    });
  },

  save : function () {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.save();
    });
  },

  restore : function () {
    this.timeline.frames3[this.timeline.frame_index].push(function () {
      context.restore();
    });
  },
  */
  
  parseDrawingObject : function (coord_obj, instruction_array) {
    var action,
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
        yend; /* ### all these values are inside a closure; their memory space needs to be reclaimed ### */

    for (action in coord_obj) {
      if (typeof coord_obj[action] == "object") {
        if (action == "gradient") {
          xstart = coord_obj[action][0];
          ystart = coord_obj[action][1];
          xend = coord_obj[action][2];
          yend = coord_obj[action][3];
          instruction_array.push(function () {
            gradient = context.createLinearGradient(xstart, ystart, xend, yend);
          });
        }
        if (action == "addColorStop") {
          stop = coord_obj[action][0];
          value = coord_obj[action][1];
          instruction_array.push(function () {
            gradient.addColorStop(stop, value);
          });
        }
        if (action == "moveTo" || action == "lineTo") {
          xpos = this.plotX(coord_obj[action][0]);
          ypos = this.plotY(coord_obj[action][1]);
          instruction_array.push(function () {
            context[action](xpos, ypos);
          });
        }
        if (action == "fillRect") {
          xpos = this.plotX(coord_obj[action][0]);
          ypos = this.plotY(coord_obj[action][1]);
          instruction_array.push(function () {
            context[action](xpos, ypos, coord_obj[action][2], coord_obj[action][3]);
          });
        }
        if (action == "bezierCurveTo") {
          xctrl_1 = this.plotX(coord_obj[action][0]);
          yctrl_1 = this.plotY(coord_obj[action][1]);
          xctrl_2 = this.plotX(coord_obj[action][2]);
          yctrl_2 = this.plotY(coord_obj[action][3]);
          xpos = this.plotX(coord_obj[action][4]);
          ypos = this.plotY(coord_obj[action][5]);
          instruction_array.push(function () {
            context[action](xctrl_1, yctrl_1, xctrl_2, yctrl_2, xpos, ypos);
          });
        }
      }
      if (typeof coord_obj[action] == "string" || typeof coord_obj[action] == "number") {
        if (action == "fillStyle" || action == "strokeStyle" || action == "miterLimit" ||
            action == "lineWidth" || action == "lineJoin" ) {
          instruction_array.push(function () {
            context[action] = coord_obj[action];
          });
        }
      }
    }
  },

  makeFrameInstructions : function (current_frame, obj) {
    var order = obj.sequence_order,
        cs = obj.current_seq,
        cc = obj[order[cs]].current_cel,
        i,
        len = obj[order[cs]].cels[cc].length,
        instructions = [];

    for (i = 0; i < len; i += 1) {
      /* ... this immediate function creates a new context in which to pass these variables
             so they can be stored by value, not by reference ... */
      (function (i, len, cs, cc) {
        if (typeof obj[order[cs]].cels[cc][i] == "string") {
          instructions.push(function () {
            context[obj[order[cs]].cels[cc][i]]();
          });
        }
        if (typeof obj[order[cs]].cels[cc][i] == "object") {
          obj.parseDrawingObject(obj[order[cs]].cels[cc][i], instructions);
        }
      })(i, len, cs, cc);
    }

    obj.timeline.frames[current_frame].push(function () {
      var i,
          len = instructions.length;

      if (obj.visible) {
        for (i = 0; i < instructions.length; i += 1) {
          instructions[i]();
        }
      }
    });
    obj.advance();
  }

};



function Button (obj_name) {
  this.name = obj_name;
  this.visible = true;
  this.touchable = true;
  this.current_seq = 0;
  this.sequence_order = ["off"];
  this.off = {
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
  this.constructor = Button;
};
Button.prototype = new Character();
Button.prototype.drawBoundary = function () {
  this.boundary();
};
Button.prototype.userEvents = ["click", "mouseover", "mouseout"];
Button.prototype.mouseoverHandler = function () {

};
Button.prototype.mouseoutHandler = function () {

};



/* CONSTRUCTOR ... a control that lets the user slide through a range ... */
function Slider (obj_name, min_edge, max_edge, touchable) {
  this.name = obj_name;
  this.min_edge = min_edge;
  this.max_edge = max_edge;
  this.touchable = (touchable) ? touchable : false;
  this.visible = true;
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
    xlimit : 0, 
    ylimit : 0, 
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

Slider.prototype.scale = function () {
  var near_xinc = Math.round((this.scrubber.xdistance / this.scrubber.original_xinc) * 100) / 100, // lower limit
      mod = Math.round((this.scrubber.xdistance % this.scrubber.original_xinc) * 100) / 100,
      nearest_frame = (mod < (this.scrubber.original_xinc - mod)) ? Math.floor(near_xinc) : Math.ceil(near_xinc);

  this.scrubber.xdistance = Math.round((nearest_frame * this.scrubber.original_xinc) * 100) / 100;
  return nearest_frame;
};

Slider.prototype.setScrubberLimits = function () {
  var i,
      len = this.sequence_order.length,
      cs_string; 

  for (i = 0; i < len; i += 1) {
    cs_string = this.sequence_order[i];

    if (cs_string == "scrubber") {
      this[cs_string].xlimit = ((this.timeline.frame_total * this[cs_string].xinc) - this[cs_string].xinc);
      this[cs_string].ylimit = ((this.timeline.frame_total * this[cs_string].yinc) - this[cs_string].yinc);
    }
  }
};
/* ... created in this tricky way to avoid the scope problems with repeated calls to 
       setTimeout. using *this* won't retain the instance\'s scope .. */
Slider.prototype.makeDrawBoundary = function (obj) {
  return function () {
    var old_cs = obj.current_seq,
        cs = obj.current_seq = 1,
        cs_string = obj.sequence_order[cs];

    /* ... when the scrubber\'s all the way right ... */
    if (obj.timeline.current_frame == 0 && obj.timeline.playthrough_count > 0) {
      obj[cs_string].xdistance = obj[cs_string].xlimit; 
      obj[cs_string].ydistance = obj[cs_string].ylimit; 
      obj.boundary();
      // console.log(cs_string);
      obj[cs_string].xdistance = 0;
      obj[cs_string].ydistance = 0; 
    }
    /* ... when the scrubber\'s somewhere in between ... */
    else if (obj.timeline.current_frame > 0 && obj.timeline.current_frame < obj.timeline.frame_total) {
      obj[cs_string].xdistance -= obj[cs_string].xinc; 
      obj[cs_string].ydistance -= obj[cs_string].yinc; 
      // console.log(cs_string);
      obj.boundary();
      obj[cs_string].xdistance += obj[cs_string].xinc;
      obj[cs_string].ydistance += obj[cs_string].yinc;
    }
    else { // ... when the scrubber\'s all the way left ...
      obj.boundary();
    }
    obj.current_seq = old_cs;
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
  this.scrubber.xinc = this.scrubber.original_xinc = Math.round((this.breadth / this.timeline.frame_total) * 100) / 100;
  this.drawBoundary = this.makeDrawBoundary(this.me);
};
Slider.prototype.userEvents = ["mousedown", "mousemove", "mouseup"];
Slider.prototype.reset = function () {
  /* ### round to nearest xinc ### */
};
Slider.prototype.mousedownHandler = function () {
  this.original_mouse_x = this.event_dispatcher.mouse_x;
  this.timeline.stop();
  this.selectScrubber();
};
Slider.prototype.mousemoveHandler = function () {
  var nearest_frame;

  if (this.scrubber.selected) {
    this.scrubber.xinc = 0;
    if (this.event_dispatcher.mouse_x > this.min_edge &&
        this.event_dispatcher.mouse_x < this.max_edge) {
      this.scrubber.xdistance = Math.round((this.event_dispatcher.mouse_x - this.min_edge) * 100) / 100;
    }
    nearest_frame = this.scale();
    this.timeline.jumpToFrame(nearest_frame);
    this.animator.drawFrame(this.timeline.queue);
    // console.log(nearest_frame);
  }
};
Slider.prototype.mouseupHandler = function () {
  if (this.scrubber.selected) {
    this.releaseScrubber();
    // this.scrubber.reset();
    this.scrubber.xinc = this.scrubber.original_xinc;
  }
};



/* CONSTRUCTOR ... event management ... */
function EventDispatcher () {
  this.listeners = [];
  this.me = this;
  this.constructor = EventDispatcher;
};
EventDispatcher.prototype = {

  makeDispatchers : function (obj, event_string) {
    return function (evt) {
      var i,
          len = obj.timeline.queue.length,
          handler_string = event_string + "Handler";
          
      obj.mouse_x = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
      obj.mouse_y = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop);
      for (i = 0; i < len; i += 1) {
        if (obj.timeline.queue[i].drawBoundary && typeof obj.timeline.queue[i].drawBoundary == "function") {
          /* ... if the user has selected the scrubber, we don't care whether they're in the boundary ... */
          if (obj.timeline.queue[i].constructor == Slider && obj.timeline.queue[i].scrubber.selected) {
            if (obj.timeline.queue[i][handler_string]) {
              obj.timeline.queue[i][handler_string]();
            }
          }
          else {
            obj.timeline.queue[i].drawBoundary();
            if (context.isPointInPath(obj.mouse_x, obj.mouse_y)) {
              if (obj.timeline.queue[i][handler_string]) {
                obj.timeline.queue[i][handler_string]();
              }
            }
          }
        }
      }
    }
  },

  init : function () {
    var i, 
        j,
        k,
        len = this.timeline.queue.length,
        len2,
        len3,
        event_string,
        dispatch_method_string,
        match = false;

    for (i = 0; i < len; i += 1) {
      if (this.timeline.queue[i].userEvents) {
        len2 = this.timeline.queue[i].userEvents.length;
        for (j = 0; j < len2; j += 1) {
          event_string = this.timeline.queue[i].userEvents[j];
          dispatch_method_string = "dispatch" + event_string.charAt(0).toUpperCase() + event_string.slice(1);
          // this[dispatch_method_string] = this.makeDispatchers(this.me, event_string);
          len3 = this.listeners.length;
          if (len3 > 0) {
            for (k = 0; k < len3; k += 1) {
              if (this.listeners[k] == dispatch_method_string) {
                match = true;
                break;
              }
            }
          }
          /*
          if (!match) {
            the_canvas.addEventListener(event_string, this[dispatch_method_string], false);
            this.listeners.push(dispatch_method_string);
          }
          */
        }
        match = false;
      }
    }
  }

};



/* CONSTRUCTOR ... a collection that manages state for all Characters in the animation ... */
function Timeline (anim, events) {
  this.animator = anim;
  this.event_dispatcher = events;
  this.queue = [];
  this.controls = [];
  this.frame_total = 0;
  this.frames = [];
  this.frame_index = 0;
  this.current_frame = 0;
  this.breakpoints = [46, 49, 81];
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
        len = this.queue.length,
        obj,
        order,
        cs,
        cc;

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
    this.store();
    this.animator.timeline = this;
    this.animator.init();
    this.event_dispatcher.timeline = this;
    this.event_dispatcher.init();
    this.animator.event_dispatcher = this.event_dispatcher;
    this.live = true;
    this.animator.animate();
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
    if (this.setFinalBreakpoint.alreadySet) {
      this.setFinalBreakpoint.lastRemovedValue = this.breakpoints.pop();
    }
    this.breakpoints.push(this.frame_total);
    this.setFinalBreakpoint.alreadySet = true;
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
      this.current_frame = 0;
      this.animator.resetAllCels();
      this.animator.animate();
    }
  },

  stepThrough : function () {
    if (!this.live) {
      this.ready();
      this.animator.animate();
      this.animator.copy.swapText();
      this.animator.copy.insertText();
    }
  },

  jumpToFrame : function (frame_index) {
    var i,
        len = this.frames[frame_index].length,
        character;

    // console.log("James is " + frame_index + ".");
    for (i = 0; i < len; i += 1) {
      for (character in this.frames[frame_index][i]) {
        this.queue[i].visible = this.frames[frame_index][i][character].vis;

        this.queue[i].current_seq = this.frames[frame_index][i][character].cs; 

        this.queue[i].sequence_order[this.queue[i].current_seq].current_cel =
        this.frames[frame_index][i][character].cc;
        
        this.queue[i].sequence_order[this.queue[i].current_seq].xdistance = this.frames[frame_index][i][character].xd; 
        
        this.queue[i].sequence_order[this.queue[i].current_seq].ydistance = this.frames[frame_index][i][character].yd; 
      }
    }
  },

  frameBack : function () {
    if (!this.live) {
      this.ready();
      // retreatAll();
      this.animator.drawFrame();
      this.stop();
    }
  },

  frameForward : function () {
    if (!this.live) {
      this.ready();
      this.animator.advanceAll();
      this.animator.drawFrame();
      this.stop();
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

  /* ... only thinks about repeating calls to drawFrame() ... */ 
  /* ... created in this tricky way to avoid the scope problems with repeated calls to 
         setTimeout. using *this* won't retain the instance\'s scope .. */
  makeAnimate : function (obj) {
    
    return function () {

      /* ... timeline advancement ... */
      if (obj.timeline.live) {
        if (obj.timeline.current_frame >= obj.timeline.frame_total) {
          // console.log("First condition: animate() exited on frame " + obj.timeline.current_frame + ".");
          // obj.advanceAll();
          obj.timeline.current_frame = 0;
          obj.timeline.current_bp = 0;
          obj.timeline.stop();
          obj.timeline.playthrough_count += 1;
          if (obj.copy) {
            obj.copy.resetText();
          }
          return "done";
        }
        if (obj.timeline.current_frame >= obj.timeline.breakpoints[obj.timeline.current_bp]) {
          // console.log("Second condition: animate() exited on frame " + obj.timeline.current_frame + ".");
          obj.timeline.advanceBreakpoint(); 
          obj.timeline.stop();
          return "paused";
        }
        obj.drawFrame(obj.timeline.current_frame); 
        // console.log(obj.timeline.current_frame);
        // obj.advanceAll();
        obj.timeline.current_frame += 1;
        setTimeout(obj.animate, obj.fps);
      }

    }
  },

  init : function () {
    this.animate = this.makeAnimate(this.me);
    this.drawFrame(this.timeline.current_frame);
  },

  /* ...only thinks about drawing... */
  drawFrame : function (requested_frame) {
    var i,
        len;
        
    context.clearRect(0, 0, 800, 476);
    len = this.timeline.frames[requested_frame].length;
    for (i = 0; i < len; i += 1) {
      if (this.timeline.frames[requested_frame][i]) {
        this.timeline.frames[requested_frame][i]();
      }
    }
  },

  getAllCels : function (method_string) {
    var i,
        len = this.timeline.queue.length;
    for (i = 0; i < len; i += 1) {
      this.timeline.queue[i][method_string]();
    }
  },

  advanceAll : function () {
    this.getAllCels("advance");
  },

  resetAllCels : function () {
    this.getAllCels("reset");
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
