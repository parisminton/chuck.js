var the_canvas = document.getElementById("main-stage"),
    context = the_canvas.getContext("2d");

/* CONSTRUCTOR ... an entity on the screen with one or more cels ... */
function Character (obj_name, touchable) {
  this.name = obj_name;
  this.visible = false;
  this.touchable = touchable;
  this.current_seq = 0; 
  this.sequence_order = ["main"];
  this.main = {
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    starting_frame : 0,
    cache : [],
    iterations : 1,
    current_iteration : 0,
    current_cel : 0,
    cels : []
  };
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
      xdistance : 0,
      ydistance : 0,
      xinc : 0,
      yinc : 0,
      starting_frame : 0,
      cache : [],
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
    current_copy = 0;
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

  advance : function () {
    var cs = this.current_seq,
        order = this.sequence_order,
        i,
        c_len;

    this[order[cs]].xdistance = Math.round((this[order[cs]].xdistance + this[order[cs]].xinc) * 100) / 100;
    this[order[cs]].ydistance = Math.round((this[order[cs]].ydistance + this[order[cs]].yinc) * 100) / 100;
    
    this[order[cs]].current_cel += 1;
    if (this[order[cs]].current_cel >= this[order[cs]].cels.length) {
      this[order[cs]].current_iteration += 1;
      if (this[order[cs]].current_iteration >= this[order[cs]].iterations) {
        this.current_seq += 1;
        if (this.current_seq >= order.length) {
          this.current_seq = (order.length - 1);
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

  store : function (member) {
    this[this.sequence_order[this.current_seq]].cache.push(member);
  },

  emptyCache : function () {
    if (this[this.sequence_order[this.current_seq]] && this[this.sequence_order[this.current_seq]].cache) {
      this[this.sequence_order[this.current_seq]].cache.length = 0;
    }
  },

  /* ... drawing instructions that update their coordinates before processing ... */
  beginPath : function () {
    this.store("beginPath");
    context.beginPath();
  },

  moveTo : function (xpos, ypos) {
    this.store( {moveTo : [xpos, ypos]} );
    xpos = (xpos + this[this.sequence_order[this.current_seq]].xdistance);
    ypos = (ypos + this[this.sequence_order[this.current_seq]].ydistance);
    context.moveTo(xpos, ypos);
  },

  lineTo : function (xpos, ypos) {
    this.store( {lineTo : [xpos, ypos]} );
    xpos = (xpos + this[this.sequence_order[this.current_seq]].xdistance);
    ypos = (ypos + this[this.sequence_order[this.current_seq]].ydistance);
    context.lineTo(xpos, ypos);
  },

  lineWidth : function (line_width) {
    this.store( {lineWidth : line_width} );
    context.lineWidth = line_width;
  },

  lineJoin : function (line_join) {
    this.store( {lineJoin : line_join} );
    context.lineJoin = line_join;
  },

  miterLimit : function (miter_limit) {
    this.store( {miterLimit : miter_limit} );
    context.miterLimit = miter_limit;
  },

  bezierCurveTo : function (xctrl_1, yctrl_1, xctrl_2, yctrl_2, xpos, ypos) {
    this.store( {bezierCurveTo : [xctrl_1, yctrl_1, xctrl_2, yctrl_2, xpos, ypos]} );
    xctrl_1 = (xctrl_1 + this[this.sequence_order[this.current_seq]].xdistance);
    yctrl_1 = (yctrl_1 + this[this.sequence_order[this.current_seq]].ydistance);
    xctrl_2 = (xctrl_2 + this[this.sequence_order[this.current_seq]].xdistance);
    yctrl_2 = (yctrl_2 + this[this.sequence_order[this.current_seq]].ydistance);
    xpos = (xpos + this[this.sequence_order[this.current_seq]].xdistance);
    ypos = (ypos + this[this.sequence_order[this.current_seq]].ydistance);
    context.bezierCurveTo(xctrl_1, yctrl_1, xctrl_2, yctrl_2, xpos, ypos);
  },

  strokeRect : function (xpos, ypos, width, height) {
    this.store( {strokeRect : [xpos, ypos, width, height]} );
    xpos = (xpos + this[this.sequence_order[this.current_seq]].xdistance);
    ypos = (ypos + this[this.sequence_order[this.current_seq]].ydistance);
    context.strokeRect(xpos, ypos, width, height);
  },

  fillRect : function (xpos, ypos, width, height) {
    this.store( {fillRect : [xpos, ypos, width, height]} );
    xpos = (xpos + this[this.sequence_order[this.current_seq]].xdistance);
    ypos = (ypos + this[this.sequence_order[this.current_seq]].ydistance);
    context.fillRect(xpos, ypos, width, height);
  },

  closePath : function () {
    this.store("closePath");
    context.closePath();
  },

  createLinearGradient : function (xstart, ystart, xend, yend) {
    this.store( {gradient : context.createLinearGradient(xstart, ystart, xend, yend) } );
    return context.createLinearGradient(xstart, ystart, xend, yend);
  },

  addColorStop : function (gradient, offset, color_string) {
    this.store( {addColorStop : [offset, color_string]} );
    gradient.addColorStop(offset, color_string);
  },

  fill : function () {
    this.store("fill");
    context.fill();
  },

  fillStyle : function (style_string) {
    this.store( {fillStyle : style_string} );
    context.fillStyle = style_string;
  },

  stroke : function () {
    this.store("stroke");
    context.stroke();
  },

  strokeStyle : function (style_string) {
    this.store( {strokeStyle : style_string} );
    context.strokeStyle = style_string;
  },

  save : function () {
    this.store("save");
    context.save();
  },

  restore : function () {
    this.store("restore");
    context.restore();
  },

  getMousedown : function (evt) {
    var x = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
        y = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop);
    
    this.boundary();
    if (context.isPointInPath(x, y)) {
      alert("Come Wit Me.");
    }
  }
};



function Button (obj_name) {
  this.name = obj_name;
  this.visible = true;
  this.touchable = true;
  this.current_seq = 0;
  this.sequence_order = ["off"];
  this.off = {
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    starting_frame : 0,
    cache : [],
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
function Slider (obj_name) {
  this.name = obj_name;
  this.visible = true;
  this.touchable = true;
  this.selected = false;
  this.current_seq = 0; 
  this.sequence_order = ["track", "scrubber"];
  this.track = {
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    starting_frame : 0,
    cache : [],
    iterations : 1,
    current_iteration : 0,
    current_cel : 0,
    cels : []
  };
  this.scrubber = {
    selected : false,
    xdistance : 0,
    ydistance : 0,
    xinc : 0,
    yinc : 0,
    xlimit : 0, 
    ylimit : 0, 
    starting_frame : 0,
    cache : [],
    iterations : 1,
    current_iteration : 0,
    current_cel : 0,
    cels : []
  };
  this.me = this;
  this.constructor = Slider;
};
Slider.prototype = new Character(); 
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
Slider.prototype.init = function () {
  this.drawBoundary = this.makeDrawBoundary(this.me);
}
Slider.prototype.userEvents = ["mousedown", "mousemove", "mouseup"];
Slider.prototype.mousedownHandler = function () {
  this.selected = true;
  this.timeline.injectBreakpoint();
}
Slider.prototype.mouseupHandler = function () {
  this.timeline.extractBreakpoint();
  this.selected = false;
}
Slider.prototype.mousemoveHandler = function () {
  if (this.selected) {
  }
}


/* CONSTRUCTOR ... a collection that manages state for all Characters in the animation ... */
function Timeline (anim, copy) {
  this.animator = anim;
  this.copy = (copy) ? copy : null;
  this.queue = [];
  this.frame_total = 0;
  this.frames = [];
  this.current_frame = 0;
  this.breakpoints = [46, 49, 81];
  this.current_bp = 0; // by default, the first breakpoint
  this.playthrough_count = 0;
  this.listeners = [];
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
      arguments[i].timeline = this;
      arguments[i].reset();
      arguments[i].queue_index = (this.queue.length) ? this.queue.length : 0;
      this.queue.push(arguments[i]);
      if (arguments[i].constructor == Slider) {
        arguments[i].init();
      }
    }
    this.init();
  },

  makeDispatchers : function (obj, event_string) {
    return function (evt) {
      var i,
          len = obj.queue.length,
          handler_string = event_string + "Handler";
          
      obj.mousex = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
      obj.mousey = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop);
      for (i = 0; i < len; i += 1) {
        if (obj.queue[i].drawBoundary) {
          if (typeof obj.queue[i].drawBoundary == "function") {
            obj.queue[i].drawBoundary();
            if (context.isPointInPath(obj.mousex, obj.mousey)) {
              if (obj.queue[i][handler_string]) {
                obj.queue[i][handler_string]();
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
        len = this.queue.length,
        len2,
        len3,
        event_string,
        dispatch_method_string,
        match = false;

    this.setFrameTotal();
    this.setFinalBreakpoint();
    this.declareFrames();
    for (i = 0; i < len; i += 1) {
      if (this.queue[i].userEvents) {
        len2 = this.queue[i].userEvents.length;
        for (j = 0; j < len2; j += 1) {
          event_string = this.queue[i].userEvents[j];
          dispatch_method_string = "dispatch" + event_string.charAt(0).toUpperCase() + event_string.slice(1);
          this[dispatch_method_string] = this.makeDispatchers(this.me, event_string);
          len3 = this.listeners.length;
          if (len3 > 0) {
            for (k = 0; k < len3; k += 1) {
              if (this.listeners[k] == dispatch_method_string) {
                match = true;
                break;
              }
            }
          }
          if (!match) {
            the_canvas.addEventListener(event_string, this[dispatch_method_string], false);
            this.listeners.push(dispatch_method_string);
          }
        }
        match = false;
      }
      this.storeInFrames(this.queue[i]);
    }
    this.animator.timeline = this;
    this.animator.init();
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

  storeInFrames : function (character) {
    var i, 
        frame_count = 0,
        cs = (character.constructor == Slider) ? 1 : 0,
        cc = 0,
        it = 0,
        xd = 0,
        yd = 0,
        visible = true;

    /* ... variables won't work as keys in an object literal. this helper gets around that ... */
    function objKeyMaker (name, current_seq, current_cel, visible, xdist, ydist) {
      var obj = {};

      obj[name] = {
        cs : current_seq,
        cc : current_cel,
        vis : visible, 
        xd : xdist,
        yd : ydist
      };
      
      /* ### how will we check for visibility on a specified frame? ### */
      return obj;
    };

    for (i = 0; i < this.frame_total; i += 1) {

      this.frames[frame_count].push(
        objKeyMaker(character.name, character.sequence_order[cs], cc, visible, xd, yd)
      );
      frame_count += 1;

      /* ... if this Character has cels that haven't been drawn ... */
      if (frame_count < character.span) {
        cc += 1;

        /* ... if frame_count reaches the end of a sequence before it's done iterating ... */
        if (character[character.sequence_order[cs]].iterations > 1 && 
            frame_count % character[character.sequence_order[cs]].cels.length == 0) {
          it += 1;
          cc = 0;
        }
        /* ... if frame_count reaches the end of a sequence that's done iterating
        and there's another sequence on deck ... */
        if (character.sequence_order[(cs + 1)]) {
          if (it == character[character.sequence_order[cs]].iterations &&
              frame_count == character[character.sequence_order[(cs + 1)]].starting_frame) {
            cs += 1;
            it = 0;
            cc = 0;
          }
        }
        /* ... if there are x- or y-increments set... */
        if (character[character.sequence_order[cs]].xinc != 0) {
          xd = Math.round((character[character.sequence_order[cs]].xinc * frame_count) * 100) / 100;
        }
        if (character[character.sequence_order[cs]].yinc != 0) {
          yd = Math.round((character[character.sequence_order[cs]].yinc * frame_count) * 100) / 100;
        }
      }
      /* ... if we\'ve run out of Character cels before running out of frames ... */
      else {
        if (character[character.sequence_order[cs]].xinc != 0) {
          xd = Math.round((character[character.sequence_order[cs]].xinc * frame_count) * 100) / 100;
        }
        if (character[character.sequence_order[cs]].yinc != 0) {
          yd = Math.round((character[character.sequence_order[cs]].yinc * frame_count) * 100) / 100;
        }
      }
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

  play : function () {
    if (!this.animator.running) {
      this.current_bp = (this.breakpoints.length - 1);  // ### a chance current_bp becomes a negative number ###
      this.current_frame = 0;
      this.animator.resetAllCels();
      this.animator.animate();
    }
  },

  stepThrough : function () {
    if (!this.animator.running) {
      this.animator.animate();
      this.animator.copy.swapText();
      this.animator.copy.insertText();
    }
  },

  frameBack : function () {
    if (!this.animator.running) {
      // retreatAll();
      this.animator.drawFrame();
    }
  },

  frameForward : function () {
    if (!this.animator.running) {
      this.animator.advanceAll();
      this.animator.drawFrame();
    }
  },
  
  injectBreakpoint : function () {
    this.injected_bp = this.current_bp;
    this.breakpoints.splice(this.current_bp, 0, (this.current_frame + 1));
    console.log("Yeah, babeee!");
    console.log(this.breakpoints);
  },

  extractBreakpoint : function () {
    if (this.injected_bp) {
      this.breakpoints.splice(this.injected_bp, 1);
      this.injected_bp = null;
      console.log("Hm. Hm.");
      // this.animate();
      console.log(this.breakpoints);
    }
  }

};



/* CONSTRUCTOR ... does the heavy lifting of drawing frames ... */
function Animator (fps, copy) {
  this.fps = (fps) ? fps : 75; // ### optionally, an array? [75]
  this.copy = (copy) ? copy : null;
  this.running = false;
  this.me = this; // ... need this self-reference for makeAnimate, explained below ...
  this.constructor = Animator;
};
Animator.prototype = {

  /* ... only thinks about repeating calls to drawFrame() ... */ 
  /* ... created in this tricky way to avoid the scope problems with repeated calls to 
         setTimeout. using *this* won't retain the instance\'s scope .. */
  makeAnimate : function (obj) {
    
    return function () {

      if (obj.timeline.current_frame >= obj.timeline.frame_total) {
        // console.log("First condition: animate() exited on frame " + obj.timeline.current_frame + ".");
        obj.advanceAll();
        obj.timeline.current_frame = 0;
        obj.timeline.current_bp = 0;
        obj.running = false;
        obj.timeline.playthrough_count += 1;
        if (obj.copy) {
          obj.copy.resetText();
        }
        return "done";
      }
      if (obj.timeline.current_frame >= obj.timeline.breakpoints[obj.timeline.current_bp]) {
        // console.log("Second condition: animate() exited on frame " + obj.timeline.current_frame + ".");
        obj.timeline.advanceBreakpoint(); 
        obj.running = false;
        return "done";
      }
      obj.running = true;
      obj.drawFrame(obj.timeline.queue); 
      // console.log(obj.timeline.current_frame);
      obj.advanceAll();
      obj.timeline.current_frame += 1;
      setTimeout(obj.animate, obj.fps);

    }
  },

  init : function () {
    this.animate = this.makeAnimate(this.me);
    this.drawFrame();
  },

  renderCharacter : function (obj, ctx) {
    var cs = obj.sequence_order[obj.current_seq],
        cc = obj[obj.sequence_order[obj.current_seq]].current_cel;

    ctx = (ctx) ? ctx : context;
    
    /* ... if this is a slider, always draw the track before drawing the scrubber
    on the same frame ... */
    if (obj.constructor == Slider) {
      if (typeof obj[cs].cels[cc] == "function") {
        obj.current_seq = 0;
        obj.track.cels[cc](ctx);
        obj.current_seq = 1;
        obj.scrubber.cels[cc](ctx);
      }
      else {
        obj.current_seq = 0;
        obj.track.cels[(obj.track.cels.length - 1)](ctx);
        obj.current_seq = 1;
        obj.scrubber.cels[(obj.scrubber.cels.length - 1)](ctx);
      }
    }
    else {
      if (typeof obj[cs].cels[cc] == "function") {
        obj[cs].cels[cc](ctx);
      }
      else {
        obj[cs].cels[(obj[cs].cels.length - 1)](ctx);
      }
    }
  },
  
  /* ...only thinks about drawing... */
  drawFrame : function () {
    var i, len;
    context.clearRect(0, 0, 800, 476);
    this.emptyAllCaches();
    len = this.timeline.queue.length;
    for (i = 0; i < len; i += 1) {
      this.renderCharacter(this.timeline.queue[i], context);
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
  },

  emptyAllCaches : function () {
    this.getAllCels("emptyCache");
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
