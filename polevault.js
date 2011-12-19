function stage () {
  
  var the_canvas = document.getElementById("main-stage"),
      context = the_canvas.getContext("2d"),
      t, 
      a,
      button_sprite = new Image(), 
      slider,
      back,
      forward,
      track,
      pit,
      pitforeground,
      shadow,
      vaulter;

      button_sprite.src = "a/jd_pv_buttons_24bit.png";


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
      };
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


  /* CONSTRUCTOR ... a control that lets the user slide through a range ... */
  function Slider (obj_name) {
    this.name = obj_name;
    this.visible = true;
    this.touchable = true;
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
  Slider.prototype.drawBoundary = function () {
    var old_cs = this.current_seq,
        cs = this.current_seq = 1,
        cs_string = this.sequence_order[cs];

    /* ... when the scrubber\'s all the way right ... */
    if (this.timeline.current_frame == 0 && this.timeline.playthrough_count > 0) {
      this[cs_string].xdistance = this[cs_string].xlimit; 
      this[cs_string].ydistance = this[cs_string].ylimit; 
      this.boundary();
      console.log(cs_string);
      this[cs_string].xdistance = 0;
      this[cs_string].ydistance = 0; 
    }
    /* ... when the scrubber\'s somewhere in between ... */
    else if (this.timeline.current_frame > 0 && this.timeline.current_frame < this.timeline.frame_total) {
      this[cs_string].xdistance -= this[cs_string].xinc; 
      this[cs_string].ydistance -= this[cs_string].yinc; 
      console.log(cs_string);
      this.boundary();
      this[cs_string].xdistance += this[cs_string].xinc;
      this[cs_string].ydistance += this[cs_string].yinc;
    }
    else { // ... when the scrubber\'s all the way left ...
      this.boundary();
    }
    this.current_seq = old_cs;
  };


  /* CONSTRUCTOR ... a collection that manages the history of all Characters in the animation ... */
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
      }
      this.init();
    },

    init : function () {
      var i, 
          len = this.queue.length;

      this.setFrameTotal();
      this.setFinalBreakpoint();
      this.declareFrames();
      for (i = 0; i < len; i += 1) {
        if (this.queue[i].constructor == Slider) {
          this.queue[i].setScrubberLimits();
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
    }
  };
  


  /* CONSTRUCTOR ... does the heavy lifting of drawing frames ... */
  function Animator (fps) {
    this.fps = (fps) ? fps : 75; // ### optionally, an array? [75]
    this.running = false;
    this.constructor = Animator;
    this.me = this; // ... need this self-reference for makeAnimate, explained below ...
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
      context.clearRect(0, 0, 566, 476);
      this.emptyAllCaches();
      context.drawImage(button_sprite, 0, 51, 104, 51, 42.8, 424.8, 104, 51);
      context.drawImage(button_sprite, 104, 51, 355, 51, 170.8, 424.8, 355, 51);
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

  a = new Animator(75);
  t = new Timeline(a);


  slider = new Slider("slider", false);
  slider.show();
  slider.track.cels = [
    function () {
      if (slider.visible) {

        // slider/Path
        slider.save();
        slider.beginPath();
        slider.moveTo(380.6, 393.7);
        slider.lineTo(85.6, 393.7);
        slider.lineTo(85.6, 388.7);
        slider.lineTo(380.6, 388.7);
        slider.lineTo(380.6, 393.7);
        slider.closePath();
        slider.fillStyle("rgb(255, 255, 255)");
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(381.6, 392.5);
        slider.lineTo(86.6, 392.5);
        slider.lineTo(86.6, 387.5);
        slider.lineTo(381.6, 387.5);
        slider.lineTo(381.6, 392.5);
        slider.closePath();
        slider.fillStyle("rgb(32, 85, 138)");
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(380.2, 388.7);
        slider.lineTo(86.6, 388.7);
        slider.lineTo(86.6, 392.5);
        slider.lineTo(380.2, 392.5);
        slider.lineTo(380.2, 388.7);
        slider.closePath();
        slider.fillStyle("rgb(115, 153, 206)");
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(381.6, 392.5);
        slider.lineTo(86.6, 392.5);
        slider.lineTo(86.6, 387.5);
        slider.lineTo(381.6, 387.5);
        slider.lineTo(381.6, 392.5);
        slider.closePath();
        slider.strokeStyle("rgb(159, 159, 159)");
        slider.stroke();
        slider.restore();
      }
    }
  ];
  slider.scrubber.cels = [
    function () {
      if (slider.visible) {

        var gradient;

        // slider/Group
        slider.save();

        // slider/Group/Path
        slider.save();
        slider.beginPath();
        slider.moveTo(72.4, 388.0);
        slider.lineTo(72.4, 381.1);
        slider.bezierCurveTo(72.4, 378.2, 74.7, 375.9, 77.6, 375.9);
        slider.lineTo(93.7, 375.9);
        slider.bezierCurveTo(96.6, 375.9, 98.9, 378.2, 98.9, 381.1);
        slider.lineTo(98.9, 388.0);
        slider.bezierCurveTo(98.9, 390.9, 98.2, 393.2, 96.2, 395.2);
        slider.lineTo(85.6, 405.5);
        slider.lineTo(75.1, 395.2);
        slider.bezierCurveTo(73.1, 393.2, 72.4, 390.9, 72.4, 388.0);
        slider.closePath();
        gradient = slider.createLinearGradient(95.9, 376.0, 73.6, 397.4)
        slider.addColorStop(gradient, 0.00, "rgb(234, 236, 236)");
        slider.addColorStop(gradient, 1.00, "rgb(203, 203, 203)");
        slider.fillStyle(gradient);
        slider.fill();
        slider.strokeStyle("rgb(153, 153, 153)");
        slider.stroke();

        // slider/Group/Path
        slider.beginPath();
        slider.moveTo(85.3, 406.1);
        slider.lineTo(74.7, 395.7);
        slider.bezierCurveTo(72.6, 393.7, 72.0, 391.4, 72.0, 388.5);
        slider.lineTo(72.0, 381.6);
        slider.bezierCurveTo(72.0, 380.6, 72.3, 379.7, 72.7, 378.9);
        slider.bezierCurveTo(71.9, 379.9, 71.3, 381.1, 71.3, 382.5);
        slider.lineTo(71.3, 389.4);
        slider.bezierCurveTo(71.3, 392.2, 72.0, 394.6, 74.0, 396.5);
        slider.lineTo(84.6, 406.9);
        slider.lineTo(85.3, 406.1);
        slider.closePath();
        slider.fillStyle("rgb(139, 149, 159)");
        slider.fill();
        slider.restore();
      }
    }
  ];
  slider.scrubber.xinc = 3.21; 
  slider.makeSequence("boundary");
  slider.boundary = function () {
    if (slider.visible) {

      var gradient;

      // slider/Group
      slider.save();

      // slider/Group/Path
      slider.save();
      slider.beginPath();
      slider.moveTo(72.4, 388.0);
      slider.lineTo(72.4, 381.1);
      slider.bezierCurveTo(72.4, 378.2, 74.7, 375.9, 77.6, 375.9);
      slider.lineTo(93.7, 375.9);
      slider.bezierCurveTo(96.6, 375.9, 98.9, 378.2, 98.9, 381.1);
      slider.lineTo(98.9, 388.0);
      slider.bezierCurveTo(98.9, 390.9, 98.2, 393.2, 96.2, 395.2);
      slider.lineTo(85.6, 405.5);
      slider.lineTo(75.1, 395.2);
      slider.bezierCurveTo(73.1, 393.2, 72.4, 390.9, 72.4, 388.0);
      slider.strokeStyle("rgb(255, 0, 0)");
      slider.stroke();
      slider.closePath();
      slider.restore();
    }
  };

  back = new Character("back", false);
  back.show();
  back.main.cels = [
    function () {
      if (back.visible) {

        var gradient;

        // back/Group
        back.save();

        // back/Group/Path
        back.save();
        back.beginPath();
        back.moveTo(440.3, 381.8);
        back.bezierCurveTo(440.3, 377.8, 437.0, 374.5, 433.0, 374.5);
        back.lineTo(411.0, 374.5);
        back.bezierCurveTo(408.5, 374.5, 406.3, 375.8, 405.0, 377.8);
        back.bezierCurveTo(404.7, 378.6, 404.5, 379.4, 404.5, 380.3);
        back.lineTo(404.5, 400.4);
        back.bezierCurveTo(404.5, 404.4, 407.8, 407.7, 411.7, 407.7);
        back.lineTo(433.8, 407.7);
        back.bezierCurveTo(436.3, 407.7, 438.5, 406.3, 439.8, 404.4);
        back.bezierCurveTo(440.1, 403.6, 440.3, 402.8, 440.3, 401.9);
        back.lineTo(440.3, 381.8);
        back.closePath();
        gradient = back.createLinearGradient(422.4, 373.1, 422.4, 407.7);
        back.addColorStop(gradient, 0.00, "rgb(234, 236, 236)");
        back.addColorStop(gradient, 1.00, "rgb(203, 203, 203)");
        back.fillStyle(gradient);
        back.fill();

        // back/Group/Path
        back.beginPath();
        back.moveTo(441.0, 400.4);
        back.bezierCurveTo(441.0, 404.4, 437.8, 407.7, 433.8, 407.7);
        back.lineTo(411.7, 407.7);
        back.bezierCurveTo(407.8, 407.7, 404.5, 404.4, 404.5, 400.4);
        back.lineTo(404.5, 380.3);
        back.bezierCurveTo(404.5, 376.3, 407.8, 373.1, 411.7, 373.1);
        back.lineTo(433.8, 373.1);
        back.bezierCurveTo(437.8, 373.1, 441.0, 376.3, 441.0, 380.3);
        back.lineTo(441.0, 400.4);
        back.closePath();
        gradient = back.createLinearGradient(422.8, 373.1, 422.8, 407.7);
        back.addColorStop(gradient, 0.00, "rgb(234, 236, 236)");
        back.addColorStop(gradient, 1.00, "rgb(203, 203, 203)");
        back.fillStyle(gradient);
        back.fill();

        // back/Group/Path
        back.beginPath();
        back.moveTo(406.1, 379.2);
        back.bezierCurveTo(406.6, 376.5, 409.0, 374.5, 411.7, 374.5);
        back.lineTo(433.8, 374.5);
        back.bezierCurveTo(434.9, 374.5, 435.9, 374.9, 436.8, 375.4);
        back.bezierCurveTo(437.2, 375.1, 437.5, 374.7, 437.6, 374.2);
        back.bezierCurveTo(436.5, 373.5, 435.2, 373.1, 433.8, 373.1);
        back.lineTo(411.7, 373.1);
        back.bezierCurveTo(408.3, 373.1, 405.4, 375.6, 404.7, 378.9);
        back.bezierCurveTo(405.1, 379.2, 405.5, 379.3, 406.1, 379.2);
        back.closePath();
        back.fillStyle("rgb(247, 247, 247)");
        back.fill();

        // back/Group/Path
        back.beginPath();
        back.moveTo(433.3, 408.2);
        back.lineTo(411.3, 408.2);
        back.bezierCurveTo(407.3, 408.2, 404.1, 404.9, 404.1, 401.0);
        back.lineTo(404.1, 380.8);
        back.bezierCurveTo(404.1, 380.0, 404.2, 379.1, 404.5, 378.3);
        back.bezierCurveTo(403.8, 379.5, 403.4, 380.8, 403.4, 382.3);
        back.lineTo(403.4, 402.4);
        back.bezierCurveTo(403.4, 406.4, 406.6, 409.6, 410.6, 409.6);
        back.lineTo(432.6, 409.6);
        back.bezierCurveTo(435.7, 409.6, 438.3, 407.7, 439.4, 404.9);
        back.bezierCurveTo(438.1, 406.9, 435.8, 408.2, 433.3, 408.2);
        back.closePath();
        back.fillStyle("rgb(139, 149, 159)");
        back.fill();

        // back/Group/Path
        back.beginPath();
        back.moveTo(441.0, 400.4);
        back.bezierCurveTo(441.0, 404.4, 437.8, 407.7, 433.8, 407.7);
        back.lineTo(411.7, 407.7);
        back.bezierCurveTo(407.8, 407.7, 404.5, 404.4, 404.5, 400.4);
        back.lineTo(404.5, 380.3);
        back.bezierCurveTo(404.5, 376.3, 407.8, 373.1, 411.7, 373.1);
        back.lineTo(433.8, 373.1);
        back.bezierCurveTo(437.8, 373.1, 441.0, 376.3, 441.0, 380.3);
        back.lineTo(441.0, 400.4);
        back.closePath();
        back.strokeStyle("rgb(159, 159, 159)");
        back.stroke();

        // back/Group/Path
        back.beginPath();
        back.moveTo(419.5, 402.1);
        back.lineTo(422.9, 398.7);
        back.lineTo(417.9, 393.7);
        back.lineTo(431.9, 393.7);
        back.lineTo(431.9, 388.9);
        back.lineTo(417.9, 388.9);
        back.lineTo(422.8, 384.0);
        back.lineTo(419.4, 380.7);
        back.lineTo(408.8, 391.3);
        back.lineTo(419.5, 402.1);
        back.closePath();
        back.fillStyle("rgb(255, 255, 255)");
        back.fill();

        // back/Group/Path
        back.beginPath();
        back.moveTo(421.5, 400.1);
        back.lineTo(424.9, 396.8);
        back.lineTo(419.9, 391.8);
        back.lineTo(433.8, 391.8);
        back.lineTo(433.8, 387.0);
        back.lineTo(419.9, 387.0);
        back.lineTo(424.8, 382.1);
        back.lineTo(421.4, 378.7);
        back.lineTo(410.7, 389.4);
        back.lineTo(421.5, 400.1);
        back.closePath();
        back.fillStyle("rgb(32, 85, 138)");
        back.fill();

        // back/Group/Path
        back.beginPath();
        back.moveTo(420.6, 401.1);
        back.lineTo(423.9, 397.7);
        back.lineTo(419.0, 392.7);
        back.lineTo(432.9, 392.7);
        back.lineTo(432.9, 387.9);
        back.lineTo(419.0, 387.9);
        back.lineTo(423.8, 383.0);
        back.lineTo(420.5, 379.6);
        back.lineTo(409.8, 390.3);
        back.lineTo(420.6, 401.1);
        back.closePath();
        back.fillStyle("rgb(115, 153, 206)");
        back.fill();
        back.restore();
        back.restore();

      }
    }
  ];

  forward = new Character("forward", false);
  forward.show();
  forward.main.cels = [
    function ddFrameForward() {
      if (forward.visible) {

        var gradient;

        // forward/Group/Path
        forward.save();
        forward.beginPath();
        forward.moveTo(487.4, 381.8);
        forward.bezierCurveTo(487.4, 377.8, 484.2, 374.5, 480.2, 374.5);
        forward.lineTo(458.2, 374.5);
        forward.bezierCurveTo(455.7, 374.5, 453.4, 375.8, 452.2, 377.8);
        forward.bezierCurveTo(451.9, 378.6, 451.7, 379.4, 451.7, 380.3);
        forward.lineTo(451.7, 400.4);
        forward.bezierCurveTo(451.7, 404.4, 454.9, 407.7, 458.9, 407.7);
        forward.lineTo(480.9, 407.7);
        forward.bezierCurveTo(483.5, 407.7, 485.7, 406.3, 487.0, 404.4);
        forward.bezierCurveTo(487.3, 403.6, 487.4, 402.8, 487.4, 401.9);
        forward.lineTo(487.4, 381.8);
        forward.closePath();
        gradient = forward.createLinearGradient(469.6, 373.1, 469.6, 407.7);
        forward.addColorStop(gradient, 0.00, "rgb(234, 236, 236)");
        forward.addColorStop(gradient, 1.00, "rgb(203, 203, 203)");
        forward.fillStyle(gradient);
        forward.fill();

        // forward/Group/Path
        forward.beginPath();
        forward.moveTo(488.2, 400.4);
        forward.bezierCurveTo(488.2, 404.4, 484.9, 407.7, 480.9, 407.7);
        forward.lineTo(458.9, 407.7);
        forward.bezierCurveTo(454.9, 407.7, 451.7, 404.4, 451.7, 400.4);
        forward.lineTo(451.7, 380.3);
        forward.bezierCurveTo(451.7, 376.3, 454.9, 373.1, 458.9, 373.1);
        forward.lineTo(480.9, 373.1);
        forward.bezierCurveTo(484.9, 373.1, 488.2, 376.3, 488.2, 380.3);
        forward.lineTo(488.2, 400.4);
        forward.closePath();
        gradient = forward.createLinearGradient(469.9, 373.1, 469.9, 407.7);
        forward.addColorStop(gradient, 0.00, "rgb(234, 236, 236)");
        forward.addColorStop(gradient, 1.00, "rgb(203, 203, 203)");
        forward.fillStyle(gradient);
        forward.fill();

        // forward/Group/Path
        forward.beginPath();
        forward.moveTo(453.3, 379.2);
        forward.bezierCurveTo(453.8, 376.5, 456.1, 374.5, 458.9, 374.5);
        forward.lineTo(480.9, 374.5);
        forward.bezierCurveTo(482.1, 374.5, 483.1, 374.9, 484.0, 375.4);
        forward.bezierCurveTo(484.4, 375.1, 484.6, 374.7, 484.8, 374.2);
        forward.bezierCurveTo(483.6, 373.5, 482.3, 373.1, 480.9, 373.1);
        forward.lineTo(458.9, 373.1);
        forward.bezierCurveTo(455.4, 373.1, 452.5, 375.6, 451.8, 378.9);
        forward.bezierCurveTo(452.3, 379.2, 452.7, 379.3, 453.3, 379.2);
        forward.closePath();
        forward.fillStyle("rgb(247, 247, 247)");
        forward.fill();

        // forward/Group/Path
        forward.beginPath();
        forward.moveTo(480.5, 408.2);
        forward.lineTo(458.5, 408.2);
        forward.bezierCurveTo(454.5, 408.2, 451.2, 404.9, 451.2, 401.0);
        forward.lineTo(451.2, 380.8);
        forward.bezierCurveTo(451.2, 380.0, 451.4, 379.1, 451.7, 378.3);
        forward.bezierCurveTo(451.0, 379.5, 450.5, 380.8, 450.5, 382.3);
        forward.lineTo(450.5, 402.4);
        forward.bezierCurveTo(450.5, 406.4, 453.8, 409.6, 457.7, 409.6);
        forward.lineTo(479.8, 409.6);
        forward.bezierCurveTo(482.9, 409.6, 485.5, 407.7, 486.5, 404.9);
        forward.bezierCurveTo(485.2, 406.9, 483.0, 408.2, 480.5, 408.2);
        forward.closePath();
        forward.fillStyle("rgb(139, 149, 159)");
        forward.fill();

        // forward/Group/Path
        forward.beginPath();
        forward.moveTo(488.2, 400.4);
        forward.bezierCurveTo(488.2, 404.4, 484.9, 407.7, 480.9, 407.7);
        forward.lineTo(458.9, 407.7);
        forward.bezierCurveTo(454.9, 407.7, 451.7, 404.4, 451.7, 400.4);
        forward.lineTo(451.7, 380.3);
        forward.bezierCurveTo(451.7, 376.3, 454.9, 373.1, 458.9, 373.1);
        forward.lineTo(480.9, 373.1);
        forward.bezierCurveTo(484.9, 373.1, 488.2, 376.3, 488.2, 380.3);
        forward.lineTo(488.2, 400.4);
        forward.closePath();
        forward.strokeStyle("rgb(159, 159, 159)");
        forward.stroke();

        // forward/Group/Path
        forward.beginPath();
        forward.moveTo(469.4, 380.7);
        forward.lineTo(466.0, 384.0);
        forward.lineTo(471.0, 389.1);
        forward.lineTo(457.0, 389.1);
        forward.lineTo(457.0, 393.8);
        forward.lineTo(471.0, 393.8);
        forward.lineTo(466.1, 398.7);
        forward.lineTo(469.5, 402.1);
        forward.lineTo(480.1, 391.4);
        forward.lineTo(469.4, 380.7);
        forward.closePath();
        forward.fillStyle("rgb(255, 255, 255)");
        forward.fill();

        // forward/Group/Path
        forward.beginPath();
        forward.moveTo(471.3, 378.7);
        forward.lineTo(468.0, 382.1);
        forward.lineTo(472.9, 387.1);
        forward.lineTo(459.0, 387.1);
        forward.lineTo(459.0, 391.9);
        forward.lineTo(472.9, 391.9);
        forward.lineTo(468.1, 396.8);
        forward.lineTo(471.4, 400.1);
        forward.lineTo(482.1, 389.5);
        forward.lineTo(471.3, 378.7);
        forward.closePath();
        forward.fillStyle("rgb(32, 85, 138)");
        forward.fill();

        // forward/Group/Path
        forward.beginPath();
        forward.moveTo(470.4, 379.6);
        forward.lineTo(467.0, 383.0);
        forward.lineTo(472.0, 388.0);
        forward.lineTo(458.1, 388.0);
        forward.lineTo(458.1, 392.8);
        forward.lineTo(472.0, 392.8);
        forward.lineTo(467.1, 397.7);
        forward.lineTo(470.5, 401.1);
        forward.lineTo(481.2, 390.4);
        forward.lineTo(470.4, 379.6);
        forward.closePath();
        forward.fillStyle("rgb(115, 153, 206)");
        forward.fill();
        forward.restore();
      }
    }
  ];

  track = new Character("track", false);
  track.show();
  track.main.cels = [
    function () {
      if (track.visible) {

        // track/Path
        track.save();
        track.fillStyle("rgb(227, 215, 196)");
        track.fillRect(0.0, 334.0, 564.4, 18);
        track.restore();
      }
    }
  ];

  pit = new Character("pit", false);
  pit.show()
  pit.main.cels = [
    function () {
      if (pit.visible) {

        var gradient;

        // pit/Path
        pit.save();
        pit.beginPath();
        pit.moveTo(367.3, 314.3);
        pit.lineTo(367.3, 360.0);
        pit.lineTo(519.2, 360.1);
        pit.lineTo(519.2, 314.3);
        pit.lineTo(367.3, 314.3);
        pit.closePath();
        pit.fillStyle("rgb(123, 162, 212)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(367.3, 314.3);
        pit.lineTo(367.3, 360.0);
        pit.lineTo(297.1, 332.3);
        pit.lineTo(297.1, 286.6);
        pit.lineTo(367.3, 314.3);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(519.2, 314.3);
        pit.lineTo(449.0, 286.6);
        pit.lineTo(297.1, 286.6);
        pit.lineTo(367.3, 314.3);
        pit.lineTo(519.2, 314.3);
        pit.closePath();
        pit.fillStyle("rgb(198, 213, 237)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(302.9, 37.0);
        pit.lineTo(306.1, 37.0);
        pit.lineTo(306.1, 336.7);
        pit.lineTo(302.9, 336.7);
        pit.lineTo(302.9, 37.0);
        pit.closePath();
        gradient = pit.createLinearGradient(302.6, 186.8, 306.4, 186.8);
        pit.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pit.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pit.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pit.fillStyle(gradient);
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(298.8, 56.0);
        pit.lineTo(355.7, 43.1);
        pit.lineTo(356.4, 46.2);
        pit.lineTo(299.4, 59.2);
        pit.lineTo(298.8, 56.0);
        pit.closePath();
        gradient = pit.createLinearGradient(327.2, 49.3, 327.9, 52.6);
        pit.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pit.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pit.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pit.fillStyle(gradient);
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(309.0, 291.3);
        pit.lineTo(242.8, 309.3);
        pit.lineTo(185.8, 309.3);
        pit.lineTo(185.8, 337.0);
        pit.lineTo(309.0, 337.0);
        pit.lineTo(309.0, 291.3);
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(185.8, 309.3);
        pit.lineTo(199.0, 314.4);
        pit.lineTo(199.0, 342.1);
        pit.lineTo(185.8, 337.0);
        pit.lineTo(185.8, 309.3);
        pit.closePath();
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(311.6, 342.1);
        pit.lineTo(311.6, 299.3);
        pit.lineTo(256.1, 314.4);
        pit.lineTo(199.0, 314.4);
        pit.lineTo(199.0, 342.1);
        pit.lineTo(311.6, 342.1);
        pit.closePath();
        pit.fillStyle("rgb(123, 162, 212)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(311.6, 299.3);
        pit.lineTo(321.7, 303.3);
        pit.lineTo(321.7, 346.1);
        pit.lineTo(311.6, 342.1);
        pit.lineTo(311.6, 299.3);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(309.0, 291.3);
        pit.lineTo(242.8, 309.3);
        pit.lineTo(185.8, 309.3);
        pit.lineTo(199.0, 314.4);
        pit.lineTo(256.1, 314.4);
        pit.lineTo(311.6, 299.3);
        pit.lineTo(321.7, 303.3);
        pit.lineTo(348.2, 306.8);
        pit.lineTo(309.0, 291.3);
        pit.closePath();
        pit.fillStyle("rgb(198, 213, 237)");
        pit.fill();
        pit.restore();
      }
    }
  ];

  shadow = new Character("shadow", false);
  shadow.show();
  shadow.main.cels = [
    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(182.0, 339.4);
        shadow.lineTo(80.5, 338.1);
        shadow.bezierCurveTo(78.1, 336.4, 75.2, 336.4, 72.6, 336.2);
        shadow.bezierCurveTo(63.0, 335.3, 53.5, 337.5, 43.7, 336.2);
        shadow.bezierCurveTo(40.3, 335.8, 37.1, 336.0, 33.9, 336.8);
        shadow.bezierCurveTo(26.7, 338.3, 19.7, 336.4, 12.7, 337.7);
        shadow.lineTo(12.2, 338.3);
        shadow.bezierCurveTo(11.6, 340.2, 13.5, 340.9, 14.8, 340.9);
        shadow.bezierCurveTo(21.6, 341.3, 28.2, 341.1, 35.0, 341.1);
        shadow.bezierCurveTo(36.7, 343.0, 39.0, 344.3, 41.8, 344.5);
        shadow.bezierCurveTo(45.8, 344.9, 50.1, 345.5, 53.5, 343.8);
        shadow.bezierCurveTo(55.2, 343.0, 56.9, 341.9, 58.5, 341.9);
        shadow.bezierCurveTo(62.8, 341.7, 66.8, 341.1, 71.1, 340.4);
        shadow.bezierCurveTo(74.1, 339.9, 77.0, 340.5, 80.0, 340.2);
        shadow.lineTo(80.0, 340.2);
        shadow.lineTo(182.0, 339.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(182.0, 340.4);
        shadow.lineTo(68.8, 337.1);
        shadow.bezierCurveTo(68.8, 337.1, 65.9, 337.3, 64.6, 337.3);
        shadow.bezierCurveTo(55.0, 336.4, 53.5, 337.5, 43.7, 336.2);
        shadow.bezierCurveTo(40.3, 335.8, 37.1, 336.0, 33.9, 336.8);
        shadow.bezierCurveTo(31.1, 336.9, 29.6, 337.4, 28.5, 337.7);
        shadow.lineTo(28.0, 338.3);
        shadow.bezierCurveTo(27.4, 340.2, 29.3, 340.9, 30.6, 340.9);
        shadow.bezierCurveTo(31.8, 340.9, 33.6, 341.1, 35.0, 341.1);
        shadow.bezierCurveTo(36.7, 343.0, 41.9, 341.3, 44.7, 341.5);
        shadow.bezierCurveTo(48.7, 341.9, 50.7, 342.2, 54.1, 340.5);
        shadow.bezierCurveTo(55.8, 339.6, 56.9, 341.9, 58.5, 341.9);
        shadow.bezierCurveTo(62.8, 341.7, 66.8, 341.1, 71.1, 340.4);
        shadow.bezierCurveTo(74.1, 339.9, 77.0, 340.5, 80.0, 340.2);
        shadow.lineTo(80.0, 340.2);
        shadow.lineTo(182.0, 340.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(182.0, 339.1);
        shadow.lineTo(68.8, 337.1);
        shadow.bezierCurveTo(68.8, 337.1, 65.9, 337.3, 64.6, 337.3);
        shadow.bezierCurveTo(55.0, 336.4, 53.5, 337.5, 43.7, 336.2);
        shadow.bezierCurveTo(40.3, 335.8, 37.1, 336.0, 33.9, 336.8);
        shadow.bezierCurveTo(26.7, 338.3, 30.9, 337.7, 23.9, 339.0);
        shadow.lineTo(23.4, 339.6);
        shadow.bezierCurveTo(22.8, 341.5, 24.7, 342.2, 26.0, 342.2);
        shadow.bezierCurveTo(32.8, 342.6, 28.2, 341.1, 35.0, 341.1);
        shadow.bezierCurveTo(36.7, 343.0, 41.9, 341.3, 44.7, 341.5);
        shadow.bezierCurveTo(48.7, 341.9, 50.7, 342.2, 54.1, 340.5);
        shadow.bezierCurveTo(55.8, 339.6, 58.1, 339.1, 59.8, 339.1);
        shadow.bezierCurveTo(64.1, 338.9, 66.8, 339.7, 71.0, 339.1);
        shadow.bezierCurveTo(74.1, 338.5, 85.4, 339.8, 85.4, 339.8);
        shadow.lineTo(182.0, 339.1);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(204.2, 338.4);
        shadow.lineTo(68.8, 337.1);
        shadow.bezierCurveTo(68.8, 337.1, 65.9, 337.3, 64.6, 337.3);
        shadow.bezierCurveTo(55.0, 336.4, 54.4, 338.3, 44.7, 337.0);
        shadow.bezierCurveTo(41.3, 336.6, 37.6, 337.3, 34.5, 338.2);
        shadow.bezierCurveTo(27.2, 339.6, 30.9, 337.7, 23.9, 339.0);
        shadow.lineTo(23.4, 339.6);
        shadow.bezierCurveTo(22.8, 341.5, 24.7, 342.2, 26.0, 342.2);
        shadow.bezierCurveTo(32.8, 342.6, 28.9, 341.6, 35.7, 341.6);
        shadow.bezierCurveTo(37.4, 343.5, 41.9, 341.3, 44.7, 341.5);
        shadow.bezierCurveTo(48.7, 341.9, 52.1, 343.1, 55.4, 341.4);
        shadow.bezierCurveTo(57.1, 340.6, 60.1, 341.0, 61.8, 341.0);
        shadow.bezierCurveTo(66.1, 340.8, 66.8, 339.7, 71.0, 339.1);
        shadow.bezierCurveTo(74.1, 338.5, 85.4, 339.8, 85.4, 339.8);
        shadow.lineTo(204.2, 338.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(202.8, 339.6);
        shadow.lineTo(68.8, 337.1);
        shadow.bezierCurveTo(68.8, 337.1, 65.9, 337.3, 64.6, 337.3);
        shadow.bezierCurveTo(55.0, 336.4, 54.4, 338.3, 44.7, 337.0);
        shadow.bezierCurveTo(41.3, 336.6, 37.6, 337.3, 34.5, 338.2);
        shadow.bezierCurveTo(23.6, 339.6, 22.5, 337.7, 15.5, 339.0);
        shadow.lineTo(15.1, 339.6);
        shadow.bezierCurveTo(14.5, 341.5, 16.4, 342.2, 17.6, 342.2);
        shadow.bezierCurveTo(24.4, 342.6, 28.9, 341.6, 35.7, 341.6);
        shadow.bezierCurveTo(37.4, 343.5, 41.9, 341.3, 44.7, 341.5);
        shadow.bezierCurveTo(48.7, 341.9, 52.1, 343.1, 55.4, 341.4);
        shadow.bezierCurveTo(57.1, 340.6, 60.1, 341.0, 61.8, 341.0);
        shadow.bezierCurveTo(66.1, 340.8, 66.8, 339.7, 71.0, 339.1);
        shadow.bezierCurveTo(74.1, 338.5, 83.3, 341.3, 88.7, 341.3);
        shadow.bezierCurveTo(94.1, 341.2, 96.8, 339.5, 96.8, 339.5);
        shadow.lineTo(202.8, 339.6);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(212.8, 338.0);
        shadow.lineTo(77.3, 337.0);
        shadow.bezierCurveTo(77.3, 337.0, 66.1, 335.5, 64.8, 335.5);
        shadow.bezierCurveTo(55.2, 334.7, 57.3, 338.2, 47.5, 336.9);
        shadow.bezierCurveTo(41.3, 338.3, 37.5, 338.9, 34.5, 338.2);
        shadow.bezierCurveTo(29.2, 338.7, 27.6, 338.4, 26.6, 338.7);
        shadow.bezierCurveTo(25.5, 338.9, 24.6, 339.6, 24.6, 339.6);
        shadow.bezierCurveTo(24.0, 341.6, 27.9, 342.2, 29.2, 342.2);
        shadow.bezierCurveTo(30.7, 342.2, 31.1, 342.3, 33.2, 342.3);
        shadow.bezierCurveTo(34.9, 344.2, 41.9, 341.3, 44.7, 341.5);
        shadow.bezierCurveTo(48.7, 341.9, 52.1, 343.1, 55.4, 341.4);
        shadow.bezierCurveTo(57.1, 340.6, 60.3, 339.2, 62.0, 339.2);
        shadow.bezierCurveTo(66.2, 338.9, 66.8, 339.7, 71.0, 339.1);
        shadow.bezierCurveTo(75.5, 339.4, 96.8, 339.5, 96.8, 339.5);
        shadow.lineTo(212.8, 338.0);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(235.2, 338.4);
        shadow.bezierCurveTo(235.2, 338.4, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 77.3, 336.9, 77.3, 336.9);
        shadow.bezierCurveTo(77.3, 336.9, 66.5, 336.4, 65.2, 336.4);
        shadow.bezierCurveTo(55.7, 335.6, 57.3, 338.2, 47.5, 336.9);
        shadow.bezierCurveTo(41.3, 338.3, 37.5, 338.9, 34.5, 338.2);
        shadow.bezierCurveTo(29.2, 338.7, 27.6, 338.4, 26.6, 338.7);
        shadow.bezierCurveTo(25.5, 338.9, 24.6, 339.6, 24.6, 339.6);
        shadow.bezierCurveTo(24.0, 341.6, 27.9, 342.2, 29.2, 342.2);
        shadow.bezierCurveTo(30.7, 342.2, 31.1, 342.3, 33.2, 342.3);
        shadow.bezierCurveTo(34.9, 344.2, 41.9, 341.3, 44.7, 341.5);
        shadow.bezierCurveTo(48.7, 341.9, 52.1, 343.1, 55.4, 341.4);
        shadow.bezierCurveTo(57.1, 340.6, 61.2, 341.5, 62.9, 341.5);
        shadow.bezierCurveTo(67.1, 341.3, 73.7, 340.8, 78.0, 340.2);
        shadow.bezierCurveTo(82.5, 340.5, 84.8, 343.3, 91.3, 342.9);
        shadow.bezierCurveTo(97.8, 342.5, 98.8, 339.9, 98.8, 339.9);
        shadow.lineTo(231.7, 339.2);
        shadow.lineTo(235.2, 338.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(235.2, 338.4);
        shadow.bezierCurveTo(235.2, 338.4, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 77.3, 336.9, 77.3, 336.9);
        shadow.bezierCurveTo(77.3, 336.9, 66.5, 336.4, 65.2, 336.4);
        shadow.bezierCurveTo(55.7, 335.6, 57.3, 338.2, 47.5, 336.9);
        shadow.bezierCurveTo(41.3, 338.3, 37.5, 338.9, 34.5, 338.2);
        shadow.bezierCurveTo(29.2, 338.7, 27.6, 338.4, 26.6, 338.7);
        shadow.bezierCurveTo(25.5, 338.9, 24.6, 339.6, 24.6, 339.6);
        shadow.bezierCurveTo(24.0, 341.6, 27.9, 342.2, 29.2, 342.2);
        shadow.bezierCurveTo(30.7, 342.2, 31.1, 342.3, 33.2, 342.3);
        shadow.bezierCurveTo(34.9, 344.2, 41.9, 341.3, 44.7, 341.5);
        shadow.bezierCurveTo(48.7, 341.9, 52.1, 343.1, 55.4, 341.4);
        shadow.bezierCurveTo(57.1, 340.6, 61.2, 341.5, 62.9, 341.5);
        shadow.bezierCurveTo(67.1, 341.3, 68.2, 341.2, 72.5, 340.5);
        shadow.bezierCurveTo(73.8, 340.6, 74.9, 342.3, 76.4, 342.6);
        shadow.bezierCurveTo(80.0, 343.4, 80.1, 343.5, 84.6, 343.0);
        shadow.bezierCurveTo(86.2, 342.8, 88.3, 340.1, 88.3, 340.1);
        shadow.lineTo(231.7, 339.2);
        shadow.lineTo(235.2, 338.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(252.2, 338.4);
        shadow.bezierCurveTo(252.2, 338.4, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 77.3, 336.9, 77.3, 336.9);
        shadow.bezierCurveTo(77.3, 336.9, 70.4, 335.4, 66.8, 335.7);
        shadow.bezierCurveTo(57.2, 334.8, 58.1, 334.9, 47.6, 334.6);
        shadow.bezierCurveTo(40.6, 335.1, 43.1, 338.9, 40.1, 338.2);
        shadow.bezierCurveTo(34.8, 338.7, 33.2, 338.4, 32.2, 338.7);
        shadow.bezierCurveTo(31.2, 338.9, 30.3, 339.6, 30.3, 339.6);
        shadow.bezierCurveTo(29.7, 341.6, 33.6, 342.2, 34.9, 342.2);
        shadow.bezierCurveTo(36.4, 342.2, 36.8, 342.3, 38.8, 342.3);
        shadow.bezierCurveTo(40.5, 344.2, 45.7, 340.1, 48.5, 340.3);
        shadow.bezierCurveTo(52.5, 340.8, 51.6, 342.4, 54.6, 342.9);
        shadow.bezierCurveTo(56.7, 343.2, 60.4, 343.9, 62.8, 342.6);
        shadow.bezierCurveTo(67.1, 342.3, 68.2, 341.2, 72.5, 340.5);
        shadow.bezierCurveTo(73.8, 340.6, 88.3, 340.1, 88.3, 340.1);
        shadow.lineTo(248.7, 339.2);
        shadow.lineTo(252.2, 338.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(252.2, 338.4);
        shadow.bezierCurveTo(252.2, 338.4, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 76.5, 338.3, 76.5, 338.3);
        shadow.bezierCurveTo(76.5, 338.3, 67.4, 337.5, 63.9, 337.8);
        shadow.bezierCurveTo(54.3, 336.9, 58.3, 337.2, 47.9, 336.9);
        shadow.bezierCurveTo(40.8, 337.5, 43.1, 338.9, 40.1, 338.2);
        shadow.bezierCurveTo(34.8, 338.7, 33.2, 338.4, 32.2, 338.7);
        shadow.bezierCurveTo(31.2, 338.9, 30.3, 339.6, 30.3, 339.6);
        shadow.bezierCurveTo(29.7, 341.6, 32.3, 342.2, 33.6, 342.2);
        shadow.bezierCurveTo(35.1, 342.2, 35.0, 343.3, 37.0, 343.2);
        shadow.bezierCurveTo(38.7, 345.1, 45.1, 344.7, 47.9, 344.9);
        shadow.bezierCurveTo(51.9, 345.4, 49.4, 340.1, 52.5, 340.5);
        shadow.bezierCurveTo(54.5, 340.9, 58.1, 342.5, 60.5, 342.7);
        shadow.bezierCurveTo(62.9, 342.9, 68.2, 341.2, 72.5, 340.5);
        shadow.bezierCurveTo(73.8, 340.6, 88.3, 340.1, 88.3, 340.1);
        shadow.lineTo(248.7, 339.2);
        shadow.lineTo(252.2, 338.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(284.0, 338.4);
        shadow.bezierCurveTo(284.0, 338.4, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 76.5, 338.3, 76.5, 338.3);
        shadow.bezierCurveTo(76.5, 338.3, 67.4, 337.5, 63.9, 337.8);
        shadow.bezierCurveTo(54.3, 336.9, 58.3, 337.2, 47.9, 336.9);
        shadow.bezierCurveTo(40.8, 337.5, 43.1, 338.9, 40.1, 338.2);
        shadow.bezierCurveTo(34.8, 338.7, 22.0, 336.7, 21.0, 336.9);
        shadow.bezierCurveTo(20.0, 337.1, 19.1, 337.9, 19.1, 337.9);
        shadow.bezierCurveTo(18.5, 339.9, 21.1, 340.5, 22.4, 340.5);
        shadow.bezierCurveTo(23.9, 340.5, 35.0, 343.3, 37.0, 343.2);
        shadow.bezierCurveTo(38.7, 345.1, 43.1, 345.2, 45.8, 345.4);
        shadow.bezierCurveTo(49.9, 345.9, 53.8, 345.6, 55.4, 344.0);
        shadow.bezierCurveTo(58.2, 343.1, 58.1, 342.5, 60.5, 342.7);
        shadow.bezierCurveTo(62.9, 342.9, 68.2, 341.2, 72.5, 340.5);
        shadow.bezierCurveTo(73.8, 340.6, 88.3, 340.1, 88.3, 340.1);
        shadow.lineTo(280.5, 339.2);
        shadow.lineTo(284.0, 338.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(296.8, 338.6);
        shadow.bezierCurveTo(296.8, 338.6, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 76.5, 338.3, 76.5, 338.3);
        shadow.bezierCurveTo(76.5, 338.3, 67.4, 337.5, 63.9, 337.8);
        shadow.bezierCurveTo(54.3, 336.9, 61.7, 337.2, 51.2, 336.9);
        shadow.bezierCurveTo(44.2, 337.4, 42.3, 337.4, 42.3, 337.4);
        shadow.bezierCurveTo(42.3, 337.4, 35.6, 336.7, 34.6, 336.9);
        shadow.bezierCurveTo(33.6, 337.1, 32.7, 337.9, 32.7, 337.9);
        shadow.bezierCurveTo(32.0, 339.8, 34.7, 340.5, 36.0, 340.5);
        shadow.bezierCurveTo(37.5, 340.5, 38.3, 340.7, 40.3, 340.6);
        shadow.bezierCurveTo(43.3, 340.5, 44.3, 341.0, 47.1, 341.3);
        shadow.bezierCurveTo(51.1, 341.7, 53.4, 342.7, 55.4, 343.0);
        shadow.bezierCurveTo(58.4, 343.4, 58.1, 342.5, 60.5, 342.7);
        shadow.bezierCurveTo(62.9, 342.9, 68.2, 341.2, 72.5, 340.5);
        shadow.bezierCurveTo(73.8, 340.6, 88.3, 340.1, 88.3, 340.1);
        shadow.lineTo(293.3, 339.4);
        shadow.lineTo(296.8, 338.6);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(306.3, 337.6);
        shadow.bezierCurveTo(306.3, 337.6, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 76.5, 338.3, 76.5, 338.3);
        shadow.bezierCurveTo(76.5, 338.3, 67.4, 337.5, 63.9, 337.8);
        shadow.bezierCurveTo(54.3, 336.9, 61.7, 337.2, 51.2, 336.9);
        shadow.bezierCurveTo(44.2, 337.4, 42.3, 337.4, 42.3, 337.4);
        shadow.bezierCurveTo(42.3, 337.4, 41.6, 336.7, 40.6, 336.9);
        shadow.bezierCurveTo(39.6, 337.1, 38.7, 337.9, 38.7, 337.9);
        shadow.bezierCurveTo(38.0, 339.8, 40.7, 340.5, 42.0, 340.5);
        shadow.bezierCurveTo(43.5, 340.5, 44.3, 340.7, 46.3, 340.6);
        shadow.bezierCurveTo(49.3, 340.5, 48.3, 341.0, 51.1, 341.3);
        shadow.bezierCurveTo(55.1, 341.7, 53.4, 341.7, 55.4, 342.0);
        shadow.bezierCurveTo(58.4, 342.4, 58.1, 342.5, 60.5, 342.7);
        shadow.bezierCurveTo(62.9, 342.9, 68.2, 341.2, 72.5, 340.5);
        shadow.bezierCurveTo(73.8, 340.6, 88.3, 340.1, 88.3, 340.1);
        shadow.lineTo(302.8, 338.4);
        shadow.lineTo(306.3, 337.6);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(296.2, 337.6);
        shadow.bezierCurveTo(296.2, 337.6, 107.4, 337.6, 104.9, 337.5);
        shadow.bezierCurveTo(102.5, 337.5, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 77.7, 336.5, 77.7, 336.5);
        shadow.bezierCurveTo(77.7, 336.5, 68.5, 336.6, 65.0, 336.8);
        shadow.bezierCurveTo(55.4, 336.0, 61.7, 337.2, 51.2, 336.9);
        shadow.bezierCurveTo(47.0, 337.2, 35.3, 337.6, 31.6, 337.6);
        shadow.bezierCurveTo(28.9, 337.5, 24.1, 336.9, 24.1, 336.9);
        shadow.bezierCurveTo(24.1, 336.9, 21.8, 336.7, 20.7, 336.9);
        shadow.bezierCurveTo(19.7, 337.1, 18.8, 337.9, 18.8, 337.9);
        shadow.bezierCurveTo(18.2, 339.8, 21.1, 339.8, 22.3, 339.8);
        shadow.bezierCurveTo(22.8, 339.8, 27.3, 339.6, 30.8, 339.8);
        shadow.bezierCurveTo(37.4, 340.0, 45.0, 340.7, 46.3, 340.6);
        shadow.bezierCurveTo(49.3, 340.5, 48.3, 341.0, 51.1, 341.3);
        shadow.bezierCurveTo(55.1, 341.7, 53.4, 341.7, 55.4, 342.0);
        shadow.bezierCurveTo(58.4, 342.4, 58.1, 342.5, 60.5, 342.7);
        shadow.bezierCurveTo(62.9, 342.9, 68.2, 341.2, 72.5, 340.5);
        shadow.bezierCurveTo(73.4, 340.6, 78.8, 341.6, 83.2, 341.5);
        shadow.bezierCurveTo(84.9, 341.4, 86.2, 343.2, 86.2, 343.2);
        shadow.bezierCurveTo(86.2, 343.2, 98.5, 345.1, 102.1, 341.4);
        shadow.bezierCurveTo(105.6, 337.8, 295.7, 338.4, 295.7, 338.4);
        shadow.lineTo(296.2, 337.6);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(293.6, 341.3);
        shadow.bezierCurveTo(293.6, 341.3, 105.1, 340.1, 102.6, 340.0);
        shadow.bezierCurveTo(100.1, 340.0, 97.7, 338.4, 91.1, 338.3);
        shadow.bezierCurveTo(84.4, 338.1, 77.7, 336.5, 77.7, 336.5);
        shadow.bezierCurveTo(77.7, 336.5, 68.5, 336.6, 65.0, 336.8);
        shadow.bezierCurveTo(55.4, 336.0, 61.7, 337.2, 51.2, 336.9);
        shadow.bezierCurveTo(47.0, 337.2, 37.7, 337.9, 37.7, 337.9);
        shadow.bezierCurveTo(37.7, 337.9, 35.4, 337.7, 34.4, 337.9);
        shadow.bezierCurveTo(33.4, 338.1, 32.5, 338.9, 32.5, 338.9);
        shadow.bezierCurveTo(31.8, 340.9, 34.7, 340.8, 36.0, 340.8);
        shadow.bezierCurveTo(36.5, 340.8, 45.0, 340.7, 46.3, 340.6);
        shadow.bezierCurveTo(49.3, 340.5, 48.3, 341.0, 51.1, 341.3);
        shadow.bezierCurveTo(55.1, 341.7, 53.4, 341.7, 55.4, 342.0);
        shadow.bezierCurveTo(58.4, 342.4, 58.1, 342.5, 60.5, 342.7);
        shadow.bezierCurveTo(62.9, 342.9, 68.3, 343.6, 72.6, 343.0);
        shadow.bezierCurveTo(73.5, 343.0, 78.8, 341.6, 83.2, 341.5);
        shadow.bezierCurveTo(84.9, 341.4, 86.2, 343.2, 86.2, 343.2);
        shadow.bezierCurveTo(86.2, 343.2, 98.0, 344.1, 103.1, 343.0);
        shadow.bezierCurveTo(107.7, 342.0, 292.7, 343.0, 292.7, 343.0);
        shadow.lineTo(293.6, 341.3);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(293.6, 341.3);
        shadow.bezierCurveTo(293.6, 341.3, 105.1, 340.1, 102.6, 340.0);
        shadow.bezierCurveTo(100.1, 340.0, 97.0, 339.4, 90.4, 339.3);
        shadow.bezierCurveTo(83.8, 339.1, 77.1, 338.2, 77.1, 338.2);
        shadow.bezierCurveTo(77.1, 338.2, 68.5, 336.6, 65.0, 336.8);
        shadow.bezierCurveTo(61.8, 336.9, 66.2, 336.8, 55.7, 336.5);
        shadow.bezierCurveTo(51.5, 336.8, 50.7, 337.8, 51.0, 338.7);
        shadow.bezierCurveTo(51.3, 339.7, 52.8, 340.7, 55.6, 340.9);
        shadow.bezierCurveTo(59.6, 341.3, 58.8, 341.8, 61.2, 342.0);
        shadow.bezierCurveTo(63.6, 342.3, 72.2, 340.6, 74.5, 340.9);
        shadow.bezierCurveTo(76.8, 341.2, 78.8, 341.6, 83.2, 341.5);
        shadow.bezierCurveTo(84.9, 341.4, 91.8, 342.2, 97.3, 341.8);
        shadow.bezierCurveTo(102.0, 341.4, 292.7, 343.0, 292.7, 343.0);
        shadow.lineTo(293.6, 341.3);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(154.4, 344.9);
        shadow.bezierCurveTo(154.4, 344.9, 144.2, 343.6, 140.6, 343.8);
        shadow.bezierCurveTo(137.5, 343.9, 136.3, 343.8, 125.8, 343.5);
        shadow.bezierCurveTo(121.6, 343.8, 120.8, 344.8, 121.1, 345.7);
        shadow.bezierCurveTo(121.4, 346.7, 122.9, 347.7, 125.7, 347.9);
        shadow.bezierCurveTo(129.7, 348.3, 134.4, 348.8, 136.9, 349.0);
        shadow.bezierCurveTo(139.3, 349.3, 149.5, 347.3, 151.8, 347.6);
        shadow.bezierCurveTo(154.1, 347.9, 156.2, 345.3, 154.4, 344.9);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(172.8, 344.9);
        shadow.bezierCurveTo(172.8, 344.9, 162.6, 343.6, 159.0, 343.8);
        shadow.bezierCurveTo(155.8, 343.9, 154.6, 343.8, 144.2, 343.5);
        shadow.bezierCurveTo(140.0, 343.8, 139.1, 344.8, 139.5, 345.7);
        shadow.bezierCurveTo(139.8, 346.7, 141.3, 347.7, 144.1, 347.9);
        shadow.bezierCurveTo(148.1, 348.3, 152.8, 348.8, 155.2, 349.0);
        shadow.bezierCurveTo(157.7, 349.3, 167.9, 347.3, 170.2, 347.6);
        shadow.bezierCurveTo(172.5, 347.9, 174.6, 345.3, 172.8, 344.9);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(189.8, 347.7);
        shadow.bezierCurveTo(189.8, 347.7, 179.6, 346.3, 176.0, 346.6);
        shadow.bezierCurveTo(172.9, 346.7, 171.7, 346.6, 161.2, 346.3);
        shadow.bezierCurveTo(157.0, 346.6, 156.2, 347.5, 156.5, 348.5);
        shadow.bezierCurveTo(156.8, 349.4, 158.3, 350.4, 161.1, 350.6);
        shadow.bezierCurveTo(165.1, 351.1, 169.8, 351.6, 172.3, 351.8);
        shadow.bezierCurveTo(174.7, 352.0, 184.9, 350.1, 187.2, 350.4);
        shadow.bezierCurveTo(189.5, 350.7, 191.6, 348.0, 189.8, 347.7);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },

    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(215.1, 350.0);
        shadow.bezierCurveTo(215.1, 350.0, 209.0, 349.2, 206.9, 349.3);
        shadow.bezierCurveTo(205.0, 349.4, 204.3, 349.3, 198.0, 349.1);
        shadow.bezierCurveTo(195.5, 349.3, 195.0, 349.9, 195.2, 350.5);
        shadow.bezierCurveTo(195.4, 351.0, 196.3, 351.6, 197.9, 351.7);
        shadow.bezierCurveTo(200.3, 352.0, 203.2, 352.3, 204.6, 352.4);
        shadow.bezierCurveTo(206.1, 352.6, 212.2, 351.4, 213.6, 351.6);
        shadow.bezierCurveTo(215.0, 351.8, 216.2, 350.2, 215.1, 350.0);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    }
  ];

  vaulter = new Character("vaulter", false);
  vaulter.show();
  vaulter.main.cels = [
    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(59.1, 301.8);
        vaulter.bezierCurveTo(57.9, 305.4, 51.7, 315.9, 49.2, 316.5);
        vaulter.bezierCurveTo(46.7, 317.2, 36.1, 312.7, 36.1, 312.7);
        vaulter.bezierCurveTo(36.1, 312.7, 28.6, 310.5, 22.4, 311.4);
        vaulter.bezierCurveTo(16.1, 312.3, 14.7, 314.0, 13.6, 314.0);
        vaulter.bezierCurveTo(12.5, 314.0, 12.1, 312.8, 12.1, 312.8);
        vaulter.bezierCurveTo(12.9, 312.2, 21.5, 303.7, 23.0, 303.5);
        vaulter.bezierCurveTo(24.5, 303.4, 25.5, 305.2, 25.5, 305.2);
        vaulter.bezierCurveTo(25.5, 305.2, 28.1, 306.5, 31.6, 306.8);
        vaulter.bezierCurveTo(35.1, 307.0, 46.4, 308.2, 46.4, 308.2);
        vaulter.bezierCurveTo(46.5, 304.5, 49.2, 293.7, 49.2, 293.7);
        vaulter.lineTo(59.1, 301.8);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(57.4, 259.8);
        vaulter.bezierCurveTo(57.4, 259.8, 59.2, 259.0, 60.9, 259.3);
        vaulter.bezierCurveTo(62.6, 259.5, 65.7, 261.5, 65.5, 263.7);
        vaulter.bezierCurveTo(65.5, 263.7, 69.4, 267.9, 69.9, 268.5);
        vaulter.bezierCurveTo(70.4, 269.2, 74.7, 271.7, 74.6, 273.9);
        vaulter.bezierCurveTo(74.6, 276.1, 74.1, 277.4, 74.3, 278.5);
        vaulter.lineTo(71.2, 279.9);
        vaulter.bezierCurveTo(71.2, 279.9, 69.4, 278.7, 69.1, 277.0);
        vaulter.bezierCurveTo(68.8, 275.4, 69.2, 274.7, 68.5, 274.2);
        vaulter.bezierCurveTo(67.8, 273.7, 66.7, 272.7, 65.8, 271.7);
        vaulter.bezierCurveTo(64.8, 270.7, 64.2, 270.0, 63.7, 269.6);
        vaulter.bezierCurveTo(63.3, 269.2, 63.0, 269.3, 61.8, 269.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(49.1, 288.9);
        vaulter.bezierCurveTo(49.1, 288.9, 49.4, 278.5, 47.9, 274.3);
        vaulter.bezierCurveTo(46.5, 270.2, 48.6, 259.2, 50.8, 259.7);
        vaulter.bezierCurveTo(53.0, 260.2, 52.5, 257.7, 52.5, 257.7);
        vaulter.bezierCurveTo(52.5, 257.7, 50.1, 252.4, 50.0, 250.2);
        vaulter.bezierCurveTo(49.9, 248.0, 51.2, 242.6, 55.8, 242.3);
        vaulter.bezierCurveTo(60.3, 242.1, 62.0, 247.0, 62.0, 247.0);
        vaulter.bezierCurveTo(62.0, 247.0, 62.6, 251.3, 62.6, 252.5);
        vaulter.bezierCurveTo(62.6, 253.7, 60.2, 258.3, 60.2, 258.3);
        vaulter.bezierCurveTo(60.2, 258.3, 64.8, 264.8, 64.6, 267.9);
        vaulter.bezierCurveTo(64.6, 267.9, 64.6, 282.8, 63.5, 285.2);
        vaulter.bezierCurveTo(62.3, 287.5, 62.3, 292.2, 63.1, 294.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(48.4, 277.2);
        vaulter.bezierCurveTo(48.4, 277.2, 54.2, 277.9, 55.2, 270.5);
        vaulter.bezierCurveTo(56.2, 263.0, 53.3, 260.5, 51.3, 260.3);
        vaulter.bezierCurveTo(49.4, 260.1, 46.0, 263.6, 46.0, 268.7);
        vaulter.bezierCurveTo(46.0, 273.8, 46.2, 275.4, 48.4, 277.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(60.1, 290.0);
        vaulter.bezierCurveTo(67.3, 294.9, 76.1, 304.5, 76.5, 305.2);
        vaulter.bezierCurveTo(77.0, 305.9, 77.5, 310.5, 77.5, 310.5);
        vaulter.lineTo(81.8, 325.5);
        vaulter.bezierCurveTo(81.8, 325.5, 84.4, 329.9, 86.0, 330.7);
        vaulter.bezierCurveTo(87.7, 331.5, 91.3, 333.5, 91.9, 333.8);
        vaulter.bezierCurveTo(92.4, 334.1, 92.7, 335.4, 92.7, 335.4);
        vaulter.bezierCurveTo(92.7, 335.4, 93.5, 336.7, 92.1, 337.1);
        vaulter.bezierCurveTo(90.1, 337.8, 85.1, 335.6, 82.7, 335.1);
        vaulter.bezierCurveTo(80.4, 334.5, 80.8, 331.6, 80.8, 331.6);
        vaulter.lineTo(78.2, 325.9);
        vaulter.bezierCurveTo(71.6, 319.1, 70.7, 308.9, 70.7, 308.9);
        vaulter.bezierCurveTo(70.7, 308.9, 54.5, 301.4, 51.5, 300.1);
        vaulter.bezierCurveTo(46.8, 298.0, 49.1, 288.9, 49.1, 288.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(25.7, 305.1);
        vaulter.bezierCurveTo(25.7, 305.1, 25.0, 305.3, 24.6, 304.6);
        vaulter.bezierCurveTo(24.3, 303.8, 24.8, 303.3, 24.8, 303.3);
        vaulter.bezierCurveTo(25.3, 303.1, 75.6, 275.8, 129.9, 253.8);
        vaulter.lineTo(265.3, 198.7);
        vaulter.lineTo(266.1, 200.6);
        vaulter.lineTo(130.6, 255.7);
        vaulter.bezierCurveTo(76.4, 277.7, 26.2, 304.9, 25.7, 305.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(71.1, 281.3);
        vaulter.bezierCurveTo(71.1, 281.3, 72.1, 279.4, 72.8, 279.1);
        vaulter.bezierCurveTo(73.5, 278.8, 75.0, 278.9, 75.0, 278.9);
        vaulter.lineTo(75.6, 280.1);
        vaulter.lineTo(75.0, 281.8);
        vaulter.lineTo(73.0, 282.2);
        vaulter.bezierCurveTo(73.0, 282.2, 72.7, 282.8, 72.0, 282.6);
        vaulter.bezierCurveTo(71.4, 282.4, 71.1, 281.3, 71.1, 281.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(52.9, 261.8);
        vaulter.bezierCurveTo(52.9, 261.8, 51.0, 260.2, 48.8, 260.8);
        vaulter.bezierCurveTo(46.7, 261.5, 43.6, 264.5, 41.7, 266.5);
        vaulter.bezierCurveTo(39.8, 268.5, 37.2, 274.3, 36.5, 275.8);
        vaulter.bezierCurveTo(35.7, 277.3, 36.5, 278.3, 37.1, 282.5);
        vaulter.bezierCurveTo(37.7, 286.6, 39.6, 292.7, 39.6, 292.7);
        vaulter.bezierCurveTo(39.6, 292.7, 39.1, 293.8, 39.1, 294.3);
        vaulter.bezierCurveTo(39.1, 294.7, 38.8, 297.2, 40.0, 297.6);
        vaulter.bezierCurveTo(41.1, 297.9, 43.6, 297.1, 43.6, 297.1);
        vaulter.bezierCurveTo(43.6, 297.1, 45.0, 296.1, 44.7, 294.5);
        vaulter.bezierCurveTo(44.7, 294.5, 44.5, 292.4, 42.9, 292.3);
        vaulter.lineTo(41.9, 291.6);
        vaulter.bezierCurveTo(41.9, 291.6, 40.8, 288.1, 41.2, 284.3);
        vaulter.bezierCurveTo(41.6, 280.6, 41.2, 275.0, 41.2, 275.0);
        vaulter.lineTo(47.0, 270.8);
        vaulter.bezierCurveTo(50.5, 271.5, 52.9, 268.7, 52.9, 268.7);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(61.0, 265.0);
        vaulter.bezierCurveTo(61.0, 265.0, 65.1, 267.3, 66.0, 271.2);
        vaulter.bezierCurveTo(66.0, 271.2, 69.8, 276.2, 71.0, 278.1);
        vaulter.bezierCurveTo(72.1, 280.0, 72.6, 287.1, 72.6, 287.1);
        vaulter.lineTo(73.9, 290.1);
        vaulter.lineTo(70.2, 291.9);
        vaulter.lineTo(69.7, 289.3);
        vaulter.bezierCurveTo(69.7, 289.3, 69.1, 286.1, 69.0, 285.0);
        vaulter.bezierCurveTo(68.8, 283.8, 66.1, 279.0, 66.1, 279.0);
        vaulter.lineTo(61.0, 273.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(67.9, 307.4);
        vaulter.bezierCurveTo(64.9, 303.6, 63.2, 299.9, 63.2, 299.9);
        vaulter.bezierCurveTo(62.4, 298.0, 62.4, 293.3, 63.6, 290.9);
        vaulter.bezierCurveTo(64.8, 288.6, 64.8, 273.7, 64.8, 273.7);
        vaulter.bezierCurveTo(64.9, 270.5, 60.3, 264.0, 60.3, 264.0);
        vaulter.bezierCurveTo(60.3, 264.0, 62.7, 259.4, 62.7, 258.2);
        vaulter.bezierCurveTo(62.7, 257.1, 62.2, 252.8, 62.2, 252.8);
        vaulter.bezierCurveTo(62.2, 252.8, 60.5, 247.8, 55.9, 248.1);
        vaulter.bezierCurveTo(51.3, 248.3, 50.0, 253.7, 50.1, 255.9);
        vaulter.bezierCurveTo(50.3, 258.2, 52.6, 263.5, 52.6, 263.5);
        vaulter.bezierCurveTo(52.6, 263.5, 53.1, 266.0, 50.9, 265.4);
        vaulter.bezierCurveTo(48.7, 264.9, 46.6, 275.9, 48.1, 280.1);
        vaulter.bezierCurveTo(49.5, 284.2, 49.3, 294.6, 49.3, 294.6);
        vaulter.bezierCurveTo(47.8, 296.1, 49.1, 300.3, 49.1, 300.3);
        vaulter.bezierCurveTo(49.1, 300.3, 53.1, 307.6, 57.9, 311.3);
        vaulter.lineTo(46.9, 308.0);
        vaulter.bezierCurveTo(46.6, 307.5, 46.0, 306.6, 45.4, 306.3);
        vaulter.bezierCurveTo(44.5, 305.9, 43.6, 306.2, 43.6, 306.2);
        vaulter.bezierCurveTo(43.3, 306.4, 40.8, 307.6, 40.8, 307.6);
        vaulter.bezierCurveTo(40.8, 307.6, 36.8, 309.1, 36.4, 309.1);
        vaulter.bezierCurveTo(36.0, 309.1, 31.4, 310.7, 31.6, 312.0);
        vaulter.bezierCurveTo(31.7, 313.2, 33.2, 313.9, 33.9, 313.7);
        vaulter.bezierCurveTo(34.6, 313.6, 38.6, 312.6, 42.3, 312.1);
        vaulter.bezierCurveTo(46.1, 311.6, 54.9, 315.6, 58.7, 317.6);
        vaulter.bezierCurveTo(62.4, 319.6, 67.9, 319.9, 67.9, 319.9);
        vaulter.bezierCurveTo(67.9, 319.9, 71.2, 319.0, 71.4, 317.8);
        vaulter.bezierCurveTo(71.5, 316.6, 70.8, 311.2, 67.9, 307.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 282.9);
        vaulter.bezierCurveTo(48.5, 282.9, 54.4, 283.7, 55.4, 276.2);
        vaulter.bezierCurveTo(56.3, 268.8, 53.4, 266.2, 51.4, 266.0);
        vaulter.bezierCurveTo(49.5, 265.8, 46.2, 269.4, 46.2, 274.4);
        vaulter.bezierCurveTo(46.2, 279.5, 46.4, 281.1, 48.5, 282.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(49.3, 295.0);
        vaulter.bezierCurveTo(47.9, 297.2, 49.3, 300.9, 49.3, 300.9);
        vaulter.bezierCurveTo(49.3, 300.9, 54.6, 311.5, 59.1, 315.2);
        vaulter.lineTo(59.1, 316.9);
        vaulter.bezierCurveTo(59.1, 316.9, 55.4, 324.5, 55.2, 326.4);
        vaulter.bezierCurveTo(54.9, 328.3, 54.9, 332.6, 54.9, 333.2);
        vaulter.bezierCurveTo(54.9, 333.8, 54.8, 337.4, 54.9, 338.3);
        vaulter.bezierCurveTo(55.0, 339.2, 55.8, 339.9, 56.2, 341.0);
        vaulter.bezierCurveTo(56.3, 341.3, 59.7, 342.5, 59.7, 342.5);
        vaulter.bezierCurveTo(59.7, 342.5, 61.2, 342.7, 61.9, 342.6);
        vaulter.bezierCurveTo(63.4, 342.3, 64.6, 341.6, 64.6, 341.6);
        vaulter.bezierCurveTo(64.6, 341.6, 64.4, 339.4, 63.6, 339.2);
        vaulter.bezierCurveTo(62.9, 339.0, 60.7, 337.8, 60.0, 337.3);
        vaulter.bezierCurveTo(59.3, 336.7, 58.1, 335.0, 58.1, 335.0);
        vaulter.bezierCurveTo(58.1, 335.0, 58.5, 332.2, 60.2, 328.7);
        vaulter.bezierCurveTo(61.9, 325.2, 63.0, 321.9, 64.7, 320.3);
        vaulter.bezierCurveTo(66.0, 319.1, 65.6, 315.3, 65.6, 315.3);
        vaulter.bezierCurveTo(65.6, 315.3, 65.7, 312.1, 65.0, 309.1);
        vaulter.bezierCurveTo(64.4, 306.2, 61.7, 299.9, 61.5, 299.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(36.6, 310.7);
        vaulter.bezierCurveTo(36.6, 310.7, 35.9, 310.9, 35.5, 310.2);
        vaulter.bezierCurveTo(35.1, 309.5, 35.6, 309.0, 35.6, 309.0);
        vaulter.bezierCurveTo(36.2, 308.7, 86.4, 281.5, 140.7, 259.4);
        vaulter.lineTo(276.2, 204.3);
        vaulter.lineTo(276.9, 206.2);
        vaulter.lineTo(141.5, 261.3);
        vaulter.bezierCurveTo(87.3, 283.3, 37.1, 310.5, 36.6, 310.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(70.2, 293.1);
        vaulter.bezierCurveTo(70.2, 293.1, 71.2, 291.2, 71.9, 290.9);
        vaulter.bezierCurveTo(72.6, 290.6, 74.1, 290.7, 74.1, 290.7);
        vaulter.lineTo(74.7, 291.9);
        vaulter.lineTo(74.1, 293.6);
        vaulter.lineTo(72.1, 294.1);
        vaulter.bezierCurveTo(72.1, 294.1, 71.8, 294.6, 71.2, 294.4);
        vaulter.bezierCurveTo(70.5, 294.3, 70.2, 293.1, 70.2, 293.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.5, 273.4);
        vaulter.bezierCurveTo(53.5, 273.4, 51.0, 275.9, 49.7, 276.5);
        vaulter.bezierCurveTo(48.5, 277.1, 47.1, 282.6, 45.0, 285.5);
        vaulter.bezierCurveTo(45.0, 285.5, 46.6, 291.9, 46.9, 295.1);
        vaulter.bezierCurveTo(47.1, 298.4, 48.1, 301.5, 48.1, 301.5);
        vaulter.bezierCurveTo(48.3, 302.1, 49.6, 302.7, 50.2, 303.1);
        vaulter.bezierCurveTo(50.9, 303.5, 50.2, 305.5, 50.2, 305.9);
        vaulter.bezierCurveTo(50.2, 306.2, 50.1, 307.5, 49.1, 307.6);
        vaulter.bezierCurveTo(48.1, 307.7, 46.0, 308.6, 45.0, 307.6);
        vaulter.bezierCurveTo(44.0, 306.6, 44.4, 303.8, 44.4, 303.8);
        vaulter.bezierCurveTo(44.4, 303.8, 44.6, 302.1, 44.4, 300.5);
        vaulter.bezierCurveTo(44.3, 298.9, 42.0, 294.0, 40.2, 289.9);
        vaulter.bezierCurveTo(38.5, 285.7, 40.4, 283.2, 40.4, 283.2);
        vaulter.bezierCurveTo(40.4, 283.2, 44.5, 273.0, 45.0, 270.5);
        vaulter.bezierCurveTo(45.5, 268.0, 49.2, 266.4, 49.2, 266.4);
        vaulter.bezierCurveTo(49.2, 266.4, 50.5, 265.7, 51.4, 266.0);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(52.0, 305.0);
        vaulter.bezierCurveTo(52.0, 305.0, 59.0, 310.6, 66.5, 311.2);
        vaulter.bezierCurveTo(66.5, 311.2, 60.6, 313.6, 56.9, 315.3);
        vaulter.bezierCurveTo(53.3, 317.0, 52.4, 317.3, 50.9, 317.3);
        vaulter.bezierCurveTo(50.1, 317.3, 49.7, 317.4, 49.1, 317.8);
        vaulter.bezierCurveTo(48.6, 318.1, 48.6, 319.0, 48.7, 319.6);
        vaulter.bezierCurveTo(49.2, 321.2, 52.2, 324.8, 52.2, 324.8);
        vaulter.bezierCurveTo(52.2, 324.8, 55.2, 328.6, 55.8, 328.5);
        vaulter.bezierCurveTo(57.0, 328.1, 56.7, 326.5, 56.7, 326.5);
        vaulter.lineTo(54.5, 320.6);
        vaulter.lineTo(56.9, 319.8);
        vaulter.lineTo(67.4, 317.6);
        vaulter.bezierCurveTo(67.4, 317.6, 75.8, 315.0, 77.2, 314.0);
        vaulter.bezierCurveTo(78.6, 313.1, 77.5, 310.8, 77.2, 309.8);
        vaulter.bezierCurveTo(77.0, 308.8, 65.1, 299.5, 65.1, 299.5);
        vaulter.bezierCurveTo(62.8, 297.7, 58.4, 295.8, 58.4, 295.8);
        vaulter.lineTo(52.0, 305.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.7, 278.5);
        vaulter.lineTo(65.3, 283.3);
        vaulter.bezierCurveTo(65.3, 283.3, 67.3, 285.3, 68.3, 288.3);
        vaulter.bezierCurveTo(69.3, 291.3, 69.5, 294.6, 69.5, 294.6);
        vaulter.lineTo(70.4, 298.6);
        vaulter.lineTo(74.0, 297.0);
        vaulter.lineTo(72.9, 286.6);
        vaulter.lineTo(70.2, 281.5);
        vaulter.lineTo(64.3, 274.2);
        vaulter.bezierCurveTo(64.3, 274.2, 62.6, 270.8, 60.7, 270.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.7, 303.4);
        vaulter.bezierCurveTo(59.1, 309.5, 55.5, 321.3, 54.8, 323.1);
        vaulter.bezierCurveTo(53.8, 325.4, 52.2, 326.5, 52.2, 326.5);
        vaulter.bezierCurveTo(52.2, 326.5, 41.6, 331.3, 41.3, 332.2);
        vaulter.bezierCurveTo(41.0, 333.1, 40.4, 334.5, 40.4, 334.5);
        vaulter.bezierCurveTo(40.4, 334.5, 41.0, 336.1, 41.9, 337.4);
        vaulter.bezierCurveTo(43.0, 339.0, 42.6, 340.4, 42.4, 341.3);
        vaulter.bezierCurveTo(42.3, 341.7, 42.0, 342.9, 41.4, 343.0);
        vaulter.bezierCurveTo(41.0, 343.1, 40.4, 342.8, 39.7, 342.4);
        vaulter.bezierCurveTo(38.0, 341.6, 37.2, 338.5, 37.3, 337.5);
        vaulter.bezierCurveTo(37.5, 335.6, 35.6, 334.1, 35.6, 333.2);
        vaulter.bezierCurveTo(35.7, 332.1, 36.4, 330.6, 36.4, 330.6);
        vaulter.bezierCurveTo(36.4, 330.6, 36.6, 330.3, 38.0, 330.0);
        vaulter.bezierCurveTo(39.4, 329.6, 49.4, 320.4, 49.4, 319.8);
        vaulter.bezierCurveTo(49.4, 319.8, 49.0, 303.4, 49.3, 300.7);
        vaulter.bezierCurveTo(49.3, 300.7, 49.5, 290.3, 48.1, 286.1);
        vaulter.bezierCurveTo(46.6, 281.9, 48.7, 270.9, 50.9, 271.5);
        vaulter.bezierCurveTo(53.1, 272.0, 52.6, 269.5, 52.6, 269.5);
        vaulter.bezierCurveTo(52.6, 269.5, 50.3, 264.2, 50.1, 262.0);
        vaulter.bezierCurveTo(50.0, 259.8, 51.3, 254.4, 55.9, 254.1);
        vaulter.bezierCurveTo(60.5, 253.8, 62.2, 258.8, 62.2, 258.8);
        vaulter.bezierCurveTo(62.2, 258.8, 62.7, 263.1, 62.7, 264.3);
        vaulter.bezierCurveTo(62.7, 265.4, 60.3, 270.0, 60.3, 270.0);
        vaulter.bezierCurveTo(60.3, 270.0, 64.9, 276.6, 64.8, 279.7);
        vaulter.bezierCurveTo(64.8, 279.7, 64.8, 294.6, 63.6, 296.9);
        vaulter.bezierCurveTo(63.2, 297.7, 63.0, 298.7, 62.8, 299.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 288.9);
        vaulter.bezierCurveTo(48.5, 288.9, 54.4, 289.7, 55.4, 282.2);
        vaulter.bezierCurveTo(56.3, 274.8, 53.4, 272.3, 51.4, 272.1);
        vaulter.bezierCurveTo(49.5, 271.9, 46.2, 275.4, 46.2, 280.5);
        vaulter.bezierCurveTo(46.2, 285.6, 46.4, 287.2, 48.5, 288.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(36.3, 315.9);
        vaulter.bezierCurveTo(36.3, 315.9, 35.9, 315.9, 35.5, 315.2);
        vaulter.bezierCurveTo(35.2, 314.5, 35.6, 314.1, 35.6, 314.1);
        vaulter.bezierCurveTo(36.1, 313.8, 87.1, 289.9, 137.3, 268.7);
        vaulter.lineTo(276.6, 210.7);
        vaulter.lineTo(277.3, 212.5);
        vaulter.lineTo(138.0, 270.6);
        vaulter.bezierCurveTo(87.9, 291.7, 36.9, 315.6, 36.3, 315.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(70.3, 299.5);
        vaulter.bezierCurveTo(70.3, 299.5, 71.3, 297.6, 72.1, 297.3);
        vaulter.bezierCurveTo(72.8, 297.0, 74.3, 297.1, 74.3, 297.1);
        vaulter.lineTo(74.9, 298.3);
        vaulter.lineTo(74.3, 300.1);
        vaulter.lineTo(72.3, 300.5);
        vaulter.bezierCurveTo(72.3, 300.5, 72.0, 301.0, 71.3, 300.9);
        vaulter.bezierCurveTo(70.6, 300.7, 70.3, 299.5, 70.3, 299.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(50.7, 272.1);
        vaulter.bezierCurveTo(50.7, 272.1, 45.1, 274.6, 44.5, 277.8);
        vaulter.bezierCurveTo(44.0, 280.4, 43.7, 282.3, 43.7, 282.3);
        vaulter.lineTo(39.3, 290.3);
        vaulter.bezierCurveTo(39.3, 290.3, 38.5, 293.1, 39.3, 295.1);
        vaulter.bezierCurveTo(40.2, 297.1, 43.9, 301.3, 46.1, 306.5);
        vaulter.bezierCurveTo(46.1, 306.5, 46.2, 307.5, 46.1, 308.0);
        vaulter.bezierCurveTo(46.0, 308.6, 45.5, 309.6, 46.1, 310.3);
        vaulter.bezierCurveTo(46.8, 311.0, 47.8, 311.9, 47.8, 311.9);
        vaulter.bezierCurveTo(47.8, 311.9, 49.9, 311.4, 50.7, 310.7);
        vaulter.bezierCurveTo(51.4, 310.0, 52.1, 308.6, 52.1, 308.6);
        vaulter.bezierCurveTo(52.1, 308.6, 51.4, 305.5, 50.8, 305.6);
        vaulter.bezierCurveTo(50.3, 305.7, 49.0, 305.0, 48.8, 304.5);
        vaulter.lineTo(46.1, 298.0);
        vaulter.lineTo(44.8, 292.6);
        vaulter.lineTo(49.8, 283.5);
        vaulter.lineTo(53.3, 281.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(56.9, 306.4);
        vaulter.bezierCurveTo(63.2, 308.3, 71.5, 307.1, 71.5, 307.1);
        vaulter.bezierCurveTo(71.5, 307.1, 70.9, 313.0, 70.9, 315.0);
        vaulter.bezierCurveTo(70.9, 316.9, 69.2, 327.6, 69.2, 327.6);
        vaulter.bezierCurveTo(69.2, 327.6, 67.2, 329.5, 67.4, 330.0);
        vaulter.bezierCurveTo(67.5, 330.5, 67.6, 331.9, 69.4, 332.4);
        vaulter.bezierCurveTo(70.2, 332.6, 72.5, 333.6, 74.6, 334.6);
        vaulter.bezierCurveTo(76.7, 335.5, 78.6, 336.4, 78.6, 336.4);
        vaulter.bezierCurveTo(78.6, 336.4, 79.5, 336.0, 79.6, 335.1);
        vaulter.bezierCurveTo(79.7, 334.3, 76.5, 331.1, 75.5, 330.2);
        vaulter.bezierCurveTo(74.4, 329.2, 73.1, 328.9, 73.1, 328.9);
        vaulter.bezierCurveTo(73.1, 328.9, 77.4, 314.3, 77.6, 312.8);
        vaulter.bezierCurveTo(77.9, 311.3, 80.6, 307.1, 80.4, 305.5);
        vaulter.bezierCurveTo(80.3, 305.1, 80.6, 304.3, 79.7, 303.5);
        vaulter.bezierCurveTo(77.4, 301.2, 71.8, 298.9, 64.7, 296.3);
        vaulter.lineTo(58.1, 294.8);
        vaulter.bezierCurveTo(58.1, 294.8, 56.1, 296.8, 55.6, 300.3);
        vaulter.bezierCurveTo(55.0, 303.8, 56.9, 306.4, 56.9, 306.4);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.4, 271.2);
        vaulter.lineTo(67.9, 277.7);
        vaulter.bezierCurveTo(67.9, 277.7, 68.4, 281.0, 70.5, 282.9);
        vaulter.lineTo(73.1, 288.3);
        vaulter.lineTo(76.6, 286.9);
        vaulter.bezierCurveTo(76.6, 286.9, 73.6, 278.5, 72.3, 276.3);
        vaulter.bezierCurveTo(71.1, 274.1, 64.8, 267.0, 63.2, 266.2);
        vaulter.bezierCurveTo(63.2, 266.2, 60.9, 264.4, 58.5, 265.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 297.0);
        vaulter.bezierCurveTo(62.6, 295.0, 62.9, 292.7, 63.6, 291.3);
        vaulter.bezierCurveTo(64.8, 288.9, 64.8, 274.0, 64.8, 274.0);
        vaulter.bezierCurveTo(64.9, 270.9, 60.3, 264.4, 60.3, 264.4);
        vaulter.bezierCurveTo(60.3, 264.4, 62.7, 259.8, 62.7, 258.6);
        vaulter.bezierCurveTo(62.7, 257.4, 62.2, 253.1, 62.2, 253.1);
        vaulter.bezierCurveTo(62.2, 253.1, 60.5, 248.2, 55.9, 248.4);
        vaulter.bezierCurveTo(51.3, 248.7, 50.0, 254.1, 50.1, 256.3);
        vaulter.bezierCurveTo(50.3, 258.5, 52.6, 263.8, 52.6, 263.8);
        vaulter.bezierCurveTo(52.6, 263.8, 53.1, 266.3, 50.9, 265.8);
        vaulter.bezierCurveTo(48.7, 265.3, 46.6, 276.2, 48.1, 280.4);
        vaulter.bezierCurveTo(49.5, 284.6, 49.3, 295.0, 49.3, 295.0);
        vaulter.bezierCurveTo(49.3, 295.0, 48.4, 296.8, 48.6, 299.0);
        vaulter.lineTo(47.1, 301.6);
        vaulter.bezierCurveTo(42.9, 308.6, 41.7, 319.8, 41.7, 319.8);
        vaulter.bezierCurveTo(35.2, 323.0, 27.1, 330.9, 27.1, 330.9);
        vaulter.bezierCurveTo(27.1, 330.9, 26.0, 332.1, 25.4, 332.1);
        vaulter.bezierCurveTo(24.7, 332.1, 23.0, 331.8, 22.5, 332.1);
        vaulter.bezierCurveTo(22.0, 332.5, 21.2, 333.8, 21.2, 334.0);
        vaulter.bezierCurveTo(21.2, 334.1, 22.4, 340.0, 22.9, 341.3);
        vaulter.bezierCurveTo(23.4, 342.5, 26.0, 343.0, 26.0, 343.0);
        vaulter.lineTo(30.5, 343.0);
        vaulter.bezierCurveTo(30.5, 343.0, 30.9, 341.0, 30.1, 340.6);
        vaulter.bezierCurveTo(29.4, 340.3, 28.5, 340.1, 28.5, 340.1);
        vaulter.bezierCurveTo(28.5, 340.1, 27.0, 336.5, 27.1, 335.5);
        vaulter.bezierCurveTo(27.2, 334.5, 29.2, 334.0, 29.2, 334.0);
        vaulter.lineTo(41.2, 327.3);
        vaulter.bezierCurveTo(41.2, 327.3, 43.4, 326.5, 45.9, 324.6);
        vaulter.bezierCurveTo(48.4, 322.8, 60.4, 303.5, 60.4, 303.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(34.4, 305.0);
        vaulter.bezierCurveTo(34.4, 305.0, 33.9, 305.0, 33.6, 304.2);
        vaulter.bezierCurveTo(33.3, 303.5, 33.7, 303.1, 33.7, 303.1);
        vaulter.lineTo(277.7, 208.2);
        vaulter.lineTo(278.4, 210.0);
        vaulter.lineTo(34.4, 305.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 283.2);
        vaulter.bezierCurveTo(48.5, 283.2, 54.4, 284.0, 55.4, 276.6);
        vaulter.bezierCurveTo(56.3, 269.1, 53.4, 266.6, 51.4, 266.4);
        vaulter.bezierCurveTo(49.5, 266.2, 46.2, 269.7, 46.2, 274.8);
        vaulter.bezierCurveTo(46.2, 279.9, 46.4, 281.5, 48.5, 283.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(50.7, 266.4);
        vaulter.bezierCurveTo(50.7, 266.4, 46.2, 267.1, 45.0, 270.0);
        vaulter.bezierCurveTo(45.0, 270.0, 41.8, 273.0, 39.9, 275.9);
        vaulter.bezierCurveTo(38.0, 278.8, 36.7, 280.5, 36.7, 280.5);
        vaulter.bezierCurveTo(36.7, 280.5, 35.6, 282.3, 36.5, 284.3);
        vaulter.bezierCurveTo(37.4, 286.3, 41.4, 294.1, 44.1, 296.7);
        vaulter.lineTo(44.4, 298.4);
        vaulter.lineTo(43.5, 299.7);
        vaulter.bezierCurveTo(43.5, 299.7, 43.4, 302.6, 44.3, 302.8);
        vaulter.bezierCurveTo(45.2, 303.0, 48.0, 303.0, 48.6, 302.1);
        vaulter.bezierCurveTo(49.3, 301.3, 50.0, 299.4, 50.0, 299.4);
        vaulter.lineTo(48.7, 297.1);
        vaulter.bezierCurveTo(48.7, 297.1, 47.7, 297.1, 47.3, 297.1);
        vaulter.bezierCurveTo(46.9, 297.1, 41.6, 284.1, 41.6, 284.1);
        vaulter.lineTo(46.9, 275.9);
        vaulter.bezierCurveTo(46.9, 275.9, 49.8, 277.3, 50.7, 276.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(73.3, 289.7);
        vaulter.bezierCurveTo(73.3, 289.7, 74.3, 287.8, 75.0, 287.5);
        vaulter.bezierCurveTo(75.7, 287.2, 77.2, 287.3, 77.2, 287.3);
        vaulter.lineTo(77.8, 288.5);
        vaulter.lineTo(77.2, 290.2);
        vaulter.lineTo(75.2, 290.6);
        vaulter.bezierCurveTo(75.2, 290.6, 74.9, 291.2, 74.3, 291.0);
        vaulter.bezierCurveTo(73.6, 290.8, 73.3, 289.7, 73.3, 289.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(62.7, 292.0);
        vaulter.bezierCurveTo(69.7, 295.0, 78.1, 301.3, 79.9, 302.1);
        vaulter.bezierCurveTo(81.7, 302.9, 82.3, 303.5, 82.8, 305.2);
        vaulter.bezierCurveTo(83.3, 306.9, 84.0, 313.7, 85.3, 319.0);
        vaulter.bezierCurveTo(86.7, 324.4, 89.5, 327.5, 89.5, 327.5);
        vaulter.bezierCurveTo(89.5, 327.5, 91.0, 329.2, 93.5, 329.0);
        vaulter.bezierCurveTo(96.0, 328.9, 98.0, 328.2, 99.5, 329.4);
        vaulter.bezierCurveTo(101.0, 330.5, 96.5, 332.7, 94.8, 333.3);
        vaulter.bezierCurveTo(93.2, 333.8, 91.2, 333.2, 88.5, 334.0);
        vaulter.bezierCurveTo(85.8, 334.9, 85.3, 334.0, 85.0, 333.0);
        vaulter.bezierCurveTo(84.7, 332.0, 85.0, 330.4, 85.0, 330.4);
        vaulter.lineTo(82.3, 324.7);
        vaulter.bezierCurveTo(78.8, 318.0, 75.7, 308.5, 75.7, 308.5);
        vaulter.lineTo(59.2, 303.6);
        vaulter.lineTo(62.7, 292.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.3, 268.4);
        vaulter.bezierCurveTo(62.3, 268.4, 64.4, 272.1, 67.2, 273.4);
        vaulter.bezierCurveTo(67.2, 273.4, 68.4, 277.3, 69.1, 278.2);
        vaulter.bezierCurveTo(69.7, 279.0, 72.8, 284.3, 72.8, 284.3);
        vaulter.lineTo(75.7, 283.0);
        vaulter.bezierCurveTo(75.7, 283.0, 71.3, 273.9, 70.3, 272.0);
        vaulter.bezierCurveTo(69.3, 270.1, 64.8, 263.3, 63.8, 262.4);
        vaulter.bezierCurveTo(62.8, 261.5, 62.0, 260.8, 61.0, 261.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 293.3);
        vaulter.bezierCurveTo(62.6, 291.2, 62.8, 288.8, 63.6, 287.3);
        vaulter.bezierCurveTo(64.8, 284.9, 64.8, 270.0, 64.8, 270.0);
        vaulter.bezierCurveTo(64.9, 266.9, 60.3, 260.4, 60.3, 260.4);
        vaulter.bezierCurveTo(60.3, 260.4, 62.7, 255.8, 62.7, 254.6);
        vaulter.bezierCurveTo(62.7, 253.4, 62.2, 249.1, 62.2, 249.1);
        vaulter.bezierCurveTo(62.2, 249.1, 60.5, 244.2, 55.9, 244.4);
        vaulter.bezierCurveTo(51.3, 244.7, 50.0, 250.1, 50.1, 252.3);
        vaulter.bezierCurveTo(50.3, 254.5, 52.6, 259.8, 52.6, 259.8);
        vaulter.bezierCurveTo(52.6, 259.8, 53.1, 262.3, 50.9, 261.8);
        vaulter.bezierCurveTo(48.7, 261.3, 46.6, 272.2, 48.1, 276.4);
        vaulter.bezierCurveTo(49.5, 280.6, 49.3, 291.0, 49.3, 291.0);
        vaulter.bezierCurveTo(49.3, 291.0, 48.5, 292.7, 48.6, 294.8);
        vaulter.bezierCurveTo(44.9, 306.4, 42.8, 317.7, 42.8, 317.7);
        vaulter.bezierCurveTo(41.8, 317.3, 36.8, 317.7, 32.6, 318.5);
        vaulter.bezierCurveTo(27.9, 319.5, 23.3, 319.3, 23.3, 319.3);
        vaulter.bezierCurveTo(23.3, 319.3, 22.4, 318.5, 21.2, 318.5);
        vaulter.bezierCurveTo(19.9, 318.4, 19.3, 319.0, 18.0, 322.0);
        vaulter.bezierCurveTo(16.9, 324.7, 14.8, 326.9, 14.8, 326.9);
        vaulter.bezierCurveTo(14.8, 326.9, 13.5, 330.4, 14.8, 330.7);
        vaulter.bezierCurveTo(16.2, 331.0, 16.8, 328.9, 19.3, 326.7);
        vaulter.bezierCurveTo(21.8, 324.5, 26.5, 323.7, 26.5, 323.7);
        vaulter.bezierCurveTo(26.5, 323.7, 42.3, 323.9, 46.0, 322.5);
        vaulter.bezierCurveTo(49.7, 321.2, 60.7, 301.0, 60.7, 301.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 279.2);
        vaulter.bezierCurveTo(48.5, 279.2, 54.4, 280.0, 55.4, 272.6);
        vaulter.bezierCurveTo(56.3, 265.1, 53.4, 262.6, 51.4, 262.4);
        vaulter.bezierCurveTo(49.5, 262.2, 46.2, 265.7, 46.2, 270.8);
        vaulter.bezierCurveTo(46.2, 275.9, 46.4, 277.5, 48.5, 279.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(33.8, 301.3);
        vaulter.bezierCurveTo(33.8, 301.3, 33.1, 301.6, 32.7, 300.7);
        vaulter.bezierCurveTo(32.4, 299.9, 33.1, 299.5, 33.1, 299.5);
        vaulter.bezierCurveTo(33.8, 299.2, 104.0, 270.7, 126.5, 262.9);
        vaulter.lineTo(278.4, 210.3);
        vaulter.lineTo(279.1, 212.2);
        vaulter.lineTo(127.1, 264.8);
        vaulter.bezierCurveTo(104.7, 272.5, 34.6, 301.0, 33.8, 301.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(72.9, 285.6);
        vaulter.bezierCurveTo(72.9, 285.6, 74.0, 283.8, 74.7, 283.5);
        vaulter.bezierCurveTo(75.4, 283.1, 76.9, 283.3, 76.9, 283.3);
        vaulter.lineTo(77.5, 284.4);
        vaulter.lineTo(76.9, 286.2);
        vaulter.lineTo(74.9, 286.6);
        vaulter.bezierCurveTo(74.9, 286.6, 74.6, 287.2, 73.9, 287.0);
        vaulter.bezierCurveTo(73.3, 286.8, 72.9, 285.6, 72.9, 285.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(50.7, 262.4);
        vaulter.bezierCurveTo(50.7, 262.4, 46.1, 264.6, 45.5, 267.1);
        vaulter.lineTo(38.7, 273.2);
        vaulter.bezierCurveTo(38.7, 273.2, 35.8, 274.8, 36.0, 276.5);
        vaulter.bezierCurveTo(36.2, 278.3, 37.8, 284.3, 39.8, 287.1);
        vaulter.bezierCurveTo(41.1, 288.9, 42.7, 291.0, 43.6, 292.4);
        vaulter.bezierCurveTo(43.6, 292.4, 43.9, 293.1, 43.3, 293.7);
        vaulter.bezierCurveTo(43.3, 293.7, 43.1, 294.8, 43.3, 295.3);
        vaulter.bezierCurveTo(43.6, 295.8, 44.5, 297.7, 44.5, 297.7);
        vaulter.bezierCurveTo(44.5, 297.7, 46.7, 297.9, 48.3, 296.9);
        vaulter.bezierCurveTo(49.9, 295.9, 49.6, 295.1, 49.6, 295.1);
        vaulter.bezierCurveTo(49.6, 295.1, 49.1, 292.0, 48.2, 292.1);
        vaulter.bezierCurveTo(47.3, 292.2, 46.2, 291.2, 46.2, 291.2);
        vaulter.bezierCurveTo(45.5, 289.9, 44.4, 288.1, 44.1, 287.1);
        vaulter.bezierCurveTo(43.6, 285.4, 42.5, 278.0, 42.5, 278.0);
        vaulter.bezierCurveTo(42.5, 278.0, 45.5, 274.4, 48.5, 273.4);
        vaulter.bezierCurveTo(51.5, 272.4, 54.0, 270.9, 54.0, 270.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(62.0, 276.1);
        vaulter.bezierCurveTo(62.0, 276.1, 64.6, 280.2, 67.7, 281.8);
        vaulter.bezierCurveTo(67.7, 281.8, 70.1, 283.0, 71.8, 283.0);
        vaulter.bezierCurveTo(73.4, 283.0, 72.9, 282.1, 72.9, 282.1);
        vaulter.bezierCurveTo(72.7, 280.5, 69.0, 276.6, 66.6, 273.5);
        vaulter.bezierCurveTo(64.2, 270.3, 60.6, 268.8, 60.6, 268.8);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 300.1);
        vaulter.bezierCurveTo(62.7, 298.3, 63.0, 296.4, 63.6, 295.2);
        vaulter.bezierCurveTo(64.8, 292.9, 64.8, 278.0, 64.8, 278.0);
        vaulter.bezierCurveTo(64.9, 274.9, 60.3, 268.3, 60.3, 268.3);
        vaulter.bezierCurveTo(60.3, 268.3, 62.7, 263.7, 62.7, 262.6);
        vaulter.bezierCurveTo(62.7, 261.4, 62.2, 257.1, 62.2, 257.1);
        vaulter.bezierCurveTo(62.2, 257.1, 60.5, 252.1, 55.9, 252.4);
        vaulter.bezierCurveTo(51.3, 252.6, 50.0, 258.0, 50.1, 260.3);
        vaulter.bezierCurveTo(50.3, 262.5, 52.6, 267.8, 52.6, 267.8);
        vaulter.bezierCurveTo(52.6, 267.8, 53.1, 270.3, 50.9, 269.8);
        vaulter.bezierCurveTo(48.7, 269.2, 46.6, 280.2, 48.1, 284.4);
        vaulter.bezierCurveTo(49.5, 288.6, 49.3, 299.0, 49.3, 299.0);
        vaulter.bezierCurveTo(49.3, 299.0, 49.2, 310.7, 50.0, 317.7);
        vaulter.bezierCurveTo(50.0, 317.7, 46.7, 319.9, 44.2, 323.6);
        vaulter.bezierCurveTo(41.7, 327.2, 32.5, 332.4, 32.5, 332.4);
        vaulter.bezierCurveTo(32.5, 332.4, 31.2, 333.4, 30.5, 334.4);
        vaulter.bezierCurveTo(29.8, 335.4, 31.3, 337.1, 31.3, 337.1);
        vaulter.bezierCurveTo(31.3, 337.1, 33.9, 340.2, 34.7, 340.9);
        vaulter.bezierCurveTo(35.2, 341.3, 35.6, 342.4, 36.0, 342.7);
        vaulter.bezierCurveTo(36.3, 343.0, 38.0, 343.3, 38.5, 342.3);
        vaulter.bezierCurveTo(39.0, 341.3, 37.1, 341.3, 37.0, 340.1);
        vaulter.bezierCurveTo(36.8, 338.1, 35.3, 335.1, 35.3, 335.1);
        vaulter.bezierCurveTo(35.3, 335.1, 45.5, 330.4, 49.3, 326.8);
        vaulter.bezierCurveTo(49.3, 326.8, 55.3, 321.9, 56.8, 318.6);
        vaulter.bezierCurveTo(58.3, 315.2, 60.5, 303.0, 60.7, 302.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(72.9, 282.1);
        vaulter.bezierCurveTo(73.0, 283.7, 67.6, 289.5, 64.6, 292.5);
        vaulter.lineTo(59.4, 293.5);
        vaulter.bezierCurveTo(59.4, 293.5, 66.1, 286.0, 66.0, 285.5);
        vaulter.bezierCurveTo(65.9, 285.0, 67.7, 281.8, 67.7, 281.8);
        vaulter.bezierCurveTo(67.7, 281.8, 67.9, 281.6, 68.1, 281.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(20.7, 306.8);
        vaulter.bezierCurveTo(20.7, 306.8, 19.8, 307.0, 19.5, 306.2);
        vaulter.bezierCurveTo(19.2, 305.3, 20.1, 304.9, 20.1, 304.9);
        vaulter.bezierCurveTo(20.6, 304.7, 71.4, 287.7, 125.3, 273.4);
        vaulter.lineTo(273.0, 233.9);
        vaulter.lineTo(273.5, 235.8);
        vaulter.lineTo(125.8, 275.3);
        vaulter.bezierCurveTo(72.0, 289.6, 21.2, 306.6, 20.7, 306.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.3, 298.2);
        vaulter.bezierCurveTo(71.2, 300.0, 78.5, 305.7, 78.5, 305.7);
        vaulter.bezierCurveTo(78.5, 305.7, 80.5, 307.3, 80.5, 309.0);
        vaulter.bezierCurveTo(80.4, 311.6, 79.7, 312.0, 75.2, 315.5);
        vaulter.bezierCurveTo(70.7, 319.0, 62.1, 325.0, 62.1, 325.0);
        vaulter.bezierCurveTo(62.3, 325.3, 63.4, 327.2, 63.9, 328.1);
        vaulter.bezierCurveTo(64.9, 329.9, 66.2, 331.4, 65.9, 332.3);
        vaulter.bezierCurveTo(65.7, 332.7, 64.8, 332.4, 64.5, 332.3);
        vaulter.bezierCurveTo(64.0, 332.1, 62.0, 330.3, 60.8, 329.2);
        vaulter.bezierCurveTo(59.7, 328.0, 56.7, 324.8, 56.8, 324.0);
        vaulter.bezierCurveTo(56.9, 323.7, 57.2, 323.0, 57.6, 322.7);
        vaulter.bezierCurveTo(58.6, 322.0, 59.9, 321.7, 59.9, 321.7);
        vaulter.bezierCurveTo(59.9, 321.7, 63.3, 318.7, 65.2, 316.7);
        vaulter.bezierCurveTo(67.0, 314.7, 70.3, 310.3, 70.3, 310.3);
        vaulter.bezierCurveTo(70.3, 310.3, 65.5, 310.4, 57.0, 309.7);
        vaulter.bezierCurveTo(48.5, 309.1, 48.7, 300.8, 48.7, 300.8);
        vaulter.bezierCurveTo(48.7, 299.9, 48.9, 299.1, 49.3, 298.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 287.2);
        vaulter.bezierCurveTo(48.5, 287.2, 54.4, 288.0, 55.4, 280.5);
        vaulter.bezierCurveTo(56.3, 273.1, 53.4, 270.5, 51.4, 270.3);
        vaulter.bezierCurveTo(49.5, 270.1, 46.2, 273.7, 46.2, 278.8);
        vaulter.bezierCurveTo(46.2, 283.9, 46.4, 285.4, 48.5, 287.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(51.0, 270.3);
        vaulter.bezierCurveTo(51.0, 270.3, 46.6, 270.6, 44.6, 272.8);
        vaulter.bezierCurveTo(44.6, 272.8, 34.1, 279.7, 33.2, 280.7);
        vaulter.bezierCurveTo(32.4, 281.7, 31.7, 283.6, 31.9, 284.6);
        vaulter.bezierCurveTo(32.0, 285.6, 32.1, 292.2, 32.0, 295.5);
        vaulter.bezierCurveTo(31.9, 298.7, 31.5, 299.2, 31.0, 299.6);
        vaulter.bezierCurveTo(30.5, 300.0, 30.1, 301.7, 30.1, 302.3);
        vaulter.bezierCurveTo(30.1, 303.0, 31.7, 304.6, 32.4, 304.5);
        vaulter.bezierCurveTo(33.0, 304.3, 36.0, 304.3, 36.4, 303.1);
        vaulter.bezierCurveTo(36.7, 301.8, 36.6, 299.1, 35.9, 299.1);
        vaulter.bezierCurveTo(35.1, 299.1, 34.5, 299.1, 34.5, 299.1);
        vaulter.bezierCurveTo(34.7, 294.2, 36.3, 290.3, 37.0, 284.7);
        vaulter.lineTo(44.1, 279.7);
        vaulter.bezierCurveTo(44.1, 279.7, 47.9, 280.3, 50.4, 279.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.2, 294.6);
        vaulter.bezierCurveTo(60.2, 294.6, 61.5, 296.1, 62.0, 296.1);
        vaulter.bezierCurveTo(62.1, 296.1, 62.4, 295.8, 62.8, 295.8);
        vaulter.bezierCurveTo(63.7, 295.9, 64.9, 295.2, 64.9, 295.2);
        vaulter.bezierCurveTo(64.9, 295.2, 65.7, 292.8, 64.7, 292.4);
        vaulter.bezierCurveTo(63.7, 292.0, 62.1, 292.4, 62.1, 292.4);
        vaulter.lineTo(60.2, 294.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(60.1, 257.9);
        vaulter.bezierCurveTo(60.1, 257.9, 63.5, 258.6, 63.8, 261.6);
        vaulter.lineTo(64.6, 263.5);
        vaulter.bezierCurveTo(64.6, 263.5, 68.3, 267.7, 70.1, 270.3);
        vaulter.lineTo(78.0, 280.6);
        vaulter.lineTo(78.5, 282.8);
        vaulter.lineTo(75.1, 284.0);
        vaulter.lineTo(74.1, 282.0);
        vaulter.bezierCurveTo(74.1, 282.0, 69.7, 277.7, 67.9, 275.3);
        vaulter.bezierCurveTo(67.9, 275.3, 63.7, 272.5, 61.9, 266.7);
        vaulter.lineTo(60.1, 266.4);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(55.9, 300.9);
        vaulter.bezierCurveTo(55.9, 300.9, 63.1, 304.1, 72.4, 307.4);
        vaulter.bezierCurveTo(72.4, 307.4, 73.5, 315.0, 75.5, 316.9);
        vaulter.bezierCurveTo(77.4, 318.9, 81.2, 328.1, 81.2, 328.1);
        vaulter.bezierCurveTo(81.2, 328.1, 81.0, 331.2, 81.2, 332.0);
        vaulter.bezierCurveTo(81.5, 332.8, 83.7, 334.5, 86.0, 333.3);
        vaulter.bezierCurveTo(88.2, 332.2, 94.6, 331.1, 94.6, 331.1);
        vaulter.bezierCurveTo(94.6, 331.1, 99.0, 328.8, 97.3, 327.3);
        vaulter.bezierCurveTo(95.5, 325.9, 94.8, 327.0, 92.7, 327.4);
        vaulter.bezierCurveTo(90.6, 327.8, 85.3, 326.4, 85.3, 326.4);
        vaulter.bezierCurveTo(82.8, 321.0, 81.4, 313.4, 79.4, 307.6);
        vaulter.bezierCurveTo(77.4, 301.8, 72.4, 299.1, 72.4, 299.1);
        vaulter.lineTo(60.1, 289.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.0, 292.8);
        vaulter.bezierCurveTo(62.9, 290.5, 63.2, 287.7, 64.0, 286.1);
        vaulter.bezierCurveTo(65.2, 283.6, 65.2, 268.0, 65.2, 268.0);
        vaulter.bezierCurveTo(65.4, 264.7, 60.6, 257.8, 60.6, 257.8);
        vaulter.bezierCurveTo(60.6, 257.8, 63.0, 253.0, 63.0, 251.8);
        vaulter.bezierCurveTo(63.0, 250.5, 62.5, 246.0, 62.5, 246.0);
        vaulter.bezierCurveTo(62.5, 246.0, 60.7, 240.8, 55.9, 241.1);
        vaulter.bezierCurveTo(51.1, 241.3, 49.7, 247.0, 49.8, 249.3);
        vaulter.bezierCurveTo(50.0, 251.7, 52.5, 257.2, 52.5, 257.2);
        vaulter.bezierCurveTo(52.5, 257.2, 53.0, 259.9, 50.7, 259.3);
        vaulter.bezierCurveTo(48.3, 258.8, 46.2, 270.3, 47.7, 274.7);
        vaulter.bezierCurveTo(49.2, 279.1, 48.9, 290.0, 48.9, 290.0);
        vaulter.bezierCurveTo(48.9, 290.0, 47.6, 293.7, 48.0, 296.2);
        vaulter.bezierCurveTo(48.4, 298.7, 47.2, 309.7, 48.0, 315.2);
        vaulter.bezierCurveTo(38.7, 313.9, 37.3, 315.2, 30.4, 315.2);
        vaulter.bezierCurveTo(30.4, 315.2, 29.7, 314.7, 29.3, 313.9);
        vaulter.bezierCurveTo(28.9, 313.1, 28.9, 311.7, 27.7, 310.6);
        vaulter.bezierCurveTo(26.5, 309.6, 24.5, 311.2, 23.6, 312.0);
        vaulter.bezierCurveTo(22.7, 312.7, 19.8, 317.9, 17.5, 319.2);
        vaulter.bezierCurveTo(15.1, 320.5, 14.7, 322.1, 14.7, 322.6);
        vaulter.bezierCurveTo(14.7, 323.1, 17.2, 323.8, 18.6, 322.6);
        vaulter.bezierCurveTo(20.1, 321.4, 23.2, 319.2, 25.7, 319.0);
        vaulter.bezierCurveTo(28.2, 318.9, 38.8, 319.8, 42.0, 320.6);
        vaulter.bezierCurveTo(45.1, 321.4, 50.9, 321.9, 52.0, 320.9);
        vaulter.bezierCurveTo(53.0, 319.8, 57.9, 309.1, 60.1, 297.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(33.2, 293.6);
        vaulter.bezierCurveTo(33.2, 293.6, 32.3, 293.9, 32.0, 292.9);
        vaulter.bezierCurveTo(31.8, 291.9, 32.7, 291.7, 32.7, 291.7);
        vaulter.bezierCurveTo(33.2, 291.5, 90.5, 278.0, 140.3, 271.0);
        vaulter.lineTo(290.3, 249.8);
        vaulter.lineTo(290.6, 251.8);
        vaulter.lineTo(140.6, 273.0);
        vaulter.bezierCurveTo(90.9, 280.0, 33.7, 293.5, 33.2, 293.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.1, 277.6);
        vaulter.bezierCurveTo(48.1, 277.6, 54.3, 278.4, 55.3, 270.6);
        vaulter.bezierCurveTo(56.4, 262.8, 53.3, 260.1, 51.2, 259.9);
        vaulter.bezierCurveTo(49.2, 259.7, 45.7, 263.4, 45.7, 268.8);
        vaulter.bezierCurveTo(45.7, 274.1, 45.9, 275.8, 48.1, 277.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(74.7, 284.2);
        vaulter.bezierCurveTo(74.7, 284.2, 76.0, 285.7, 76.6, 285.7);
        vaulter.bezierCurveTo(76.7, 285.7, 77.0, 285.4, 77.4, 285.4);
        vaulter.bezierCurveTo(78.4, 285.5, 79.7, 284.8, 79.7, 284.8);
        vaulter.bezierCurveTo(79.7, 284.8, 80.5, 282.3, 79.4, 281.9);
        vaulter.bezierCurveTo(78.4, 281.5, 76.7, 281.9, 76.7, 281.9);
        vaulter.lineTo(74.7, 284.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(50.8, 259.8);
        vaulter.bezierCurveTo(50.8, 259.8, 47.8, 259.8, 46.4, 261.2);
        vaulter.bezierCurveTo(45.0, 262.5, 43.5, 265.1, 43.5, 265.1);
        vaulter.bezierCurveTo(43.5, 265.1, 37.2, 269.5, 35.6, 273.5);
        vaulter.bezierCurveTo(35.6, 273.5, 35.2, 275.3, 36.3, 276.6);
        vaulter.bezierCurveTo(37.4, 277.8, 39.2, 281.6, 42.8, 284.0);
        vaulter.bezierCurveTo(45.4, 285.8, 45.4, 288.0, 45.4, 288.0);
        vaulter.bezierCurveTo(45.4, 288.0, 45.2, 288.4, 44.7, 288.6);
        vaulter.bezierCurveTo(44.2, 288.9, 44.0, 290.5, 44.2, 291.0);
        vaulter.bezierCurveTo(44.5, 291.5, 45.7, 292.5, 46.2, 292.6);
        vaulter.bezierCurveTo(46.8, 292.7, 50.8, 291.5, 50.8, 291.5);
        vaulter.bezierCurveTo(50.8, 291.5, 51.4, 290.0, 50.8, 288.4);
        vaulter.bezierCurveTo(50.1, 286.8, 49.7, 286.8, 48.8, 286.3);
        vaulter.bezierCurveTo(47.8, 285.8, 43.8, 278.4, 43.8, 278.4);
        vaulter.bezierCurveTo(43.8, 278.4, 42.4, 273.9, 42.1, 273.1);
        vaulter.bezierCurveTo(41.7, 272.2, 47.7, 269.6, 47.7, 269.6);
        vaulter.bezierCurveTo(47.7, 269.6, 49.7, 269.7, 51.0, 268.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(53.8, 300.6);
        vaulter.lineTo(68.7, 309.9);
        vaulter.bezierCurveTo(68.7, 309.9, 67.1, 315.2, 67.4, 316.5);
        vaulter.bezierCurveTo(67.6, 317.9, 70.1, 326.1, 70.9, 331.9);
        vaulter.bezierCurveTo(71.8, 337.8, 68.7, 338.0, 70.9, 338.9);
        vaulter.bezierCurveTo(72.4, 339.4, 74.1, 339.7, 76.4, 340.7);
        vaulter.bezierCurveTo(77.5, 341.2, 79.2, 343.0, 80.3, 343.0);
        vaulter.bezierCurveTo(80.3, 343.0, 83.6, 343.0, 83.1, 341.6);
        vaulter.bezierCurveTo(82.9, 341.3, 82.1, 340.8, 81.6, 340.1);
        vaulter.bezierCurveTo(80.2, 338.2, 77.8, 335.9, 76.5, 335.3);
        vaulter.bezierCurveTo(74.4, 334.4, 74.8, 331.9, 74.8, 331.9);
        vaulter.lineTo(75.3, 309.4);
        vaulter.bezierCurveTo(75.3, 309.4, 74.5, 305.2, 72.6, 303.0);
        vaulter.bezierCurveTo(70.7, 300.8, 59.9, 289.3, 59.9, 289.3);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(61.4, 259.4);
        vaulter.bezierCurveTo(61.4, 259.4, 64.0, 260.0, 64.7, 263.6);
        vaulter.bezierCurveTo(66.5, 267.0, 67.9, 271.9, 67.9, 271.9);
        vaulter.bezierCurveTo(67.9, 271.9, 70.0, 275.9, 71.0, 276.3);
        vaulter.bezierCurveTo(72.1, 276.6, 81.3, 282.6, 81.3, 282.6);
        vaulter.lineTo(78.0, 283.7);
        vaulter.bezierCurveTo(78.0, 283.7, 73.2, 281.1, 71.9, 281.1);
        vaulter.bezierCurveTo(70.6, 281.1, 68.6, 279.7, 66.9, 278.9);
        vaulter.bezierCurveTo(65.2, 278.1, 61.4, 270.6, 61.4, 270.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.1, 292.9);
        vaulter.bezierCurveTo(62.9, 290.6, 63.1, 287.8, 64.0, 286.1);
        vaulter.bezierCurveTo(65.2, 283.6, 65.2, 268.0, 65.2, 268.0);
        vaulter.bezierCurveTo(65.4, 264.7, 60.6, 257.8, 60.6, 257.8);
        vaulter.bezierCurveTo(60.6, 257.8, 63.0, 253.0, 63.0, 251.8);
        vaulter.bezierCurveTo(63.0, 250.5, 62.5, 246.0, 62.5, 246.0);
        vaulter.bezierCurveTo(62.5, 246.0, 60.7, 240.8, 55.9, 241.1);
        vaulter.bezierCurveTo(51.1, 241.3, 49.7, 247.0, 49.8, 249.3);
        vaulter.bezierCurveTo(50.0, 251.7, 52.5, 257.2, 52.5, 257.2);
        vaulter.bezierCurveTo(52.5, 257.2, 53.0, 259.9, 50.7, 259.3);
        vaulter.bezierCurveTo(48.3, 258.8, 46.2, 270.3, 47.7, 274.7);
        vaulter.bezierCurveTo(49.2, 279.1, 48.9, 290.0, 48.9, 290.0);
        vaulter.bezierCurveTo(48.9, 290.0, 48.3, 291.9, 48.1, 293.7);
        vaulter.bezierCurveTo(48.0, 295.5, 48.2, 296.3, 48.3, 297.2);
        vaulter.bezierCurveTo(48.8, 300.1, 53.4, 311.7, 54.6, 313.7);
        vaulter.bezierCurveTo(51.0, 311.2, 46.0, 310.7, 42.6, 309.6);
        vaulter.bezierCurveTo(39.3, 308.5, 39.7, 307.1, 39.7, 307.1);
        vaulter.bezierCurveTo(39.7, 307.1, 39.4, 305.7, 38.7, 305.3);
        vaulter.bezierCurveTo(37.9, 304.8, 36.0, 304.5, 35.4, 305.3);
        vaulter.bezierCurveTo(34.8, 306.1, 32.2, 308.2, 31.4, 308.8);
        vaulter.bezierCurveTo(30.7, 309.4, 26.5, 311.1, 26.2, 311.4);
        vaulter.bezierCurveTo(25.9, 311.7, 25.8, 312.8, 27.0, 312.9);
        vaulter.bezierCurveTo(28.2, 313.1, 33.9, 313.1, 35.9, 312.3);
        vaulter.bezierCurveTo(37.9, 311.6, 41.9, 313.7, 41.9, 313.7);
        vaulter.bezierCurveTo(41.9, 313.7, 48.5, 318.2, 54.6, 320.5);
        vaulter.bezierCurveTo(60.7, 322.8, 61.7, 321.7, 62.3, 321.2);
        vaulter.bezierCurveTo(62.9, 320.8, 64.4, 317.1, 64.0, 314.2);
        vaulter.bezierCurveTo(63.5, 311.3, 61.2, 299.3, 61.2, 299.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(33.3, 292.9);
        vaulter.bezierCurveTo(33.3, 292.9, 32.0, 293.2, 31.8, 292.2);
        vaulter.bezierCurveTo(31.7, 291.1, 32.9, 290.9, 32.9, 290.9);
        vaulter.bezierCurveTo(33.5, 290.8, 99.5, 278.5, 137.5, 273.7);
        vaulter.lineTo(291.2, 254.5);
        vaulter.lineTo(291.5, 256.4);
        vaulter.lineTo(137.8, 275.7);
        vaulter.bezierCurveTo(99.9, 280.4, 33.8, 292.8, 33.3, 292.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.1, 277.6);
        vaulter.bezierCurveTo(48.1, 277.6, 54.3, 278.4, 55.3, 270.6);
        vaulter.bezierCurveTo(56.4, 262.8, 53.3, 260.1, 51.2, 259.9);
        vaulter.bezierCurveTo(49.2, 259.7, 45.7, 263.4, 45.7, 268.8);
        vaulter.bezierCurveTo(45.7, 274.1, 45.9, 275.8, 48.1, 277.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(51.2, 259.6);
        vaulter.bezierCurveTo(51.2, 259.6, 44.5, 262.3, 44.7, 264.6);
        vaulter.bezierCurveTo(44.7, 264.6, 37.8, 268.9, 36.3, 272.2);
        vaulter.bezierCurveTo(35.8, 273.2, 35.4, 273.7, 35.5, 274.5);
        vaulter.bezierCurveTo(35.6, 276.4, 37.0, 277.4, 37.0, 277.4);
        vaulter.bezierCurveTo(37.0, 277.4, 40.3, 280.2, 43.4, 283.9);
        vaulter.bezierCurveTo(44.7, 285.4, 45.5, 286.1, 45.5, 286.1);
        vaulter.bezierCurveTo(45.5, 286.1, 45.0, 287.0, 44.6, 287.2);
        vaulter.bezierCurveTo(44.2, 287.4, 43.8, 288.6, 43.8, 289.4);
        vaulter.bezierCurveTo(43.8, 290.2, 45.5, 291.2, 45.5, 291.2);
        vaulter.bezierCurveTo(45.5, 291.2, 48.9, 292.2, 50.4, 290.4);
        vaulter.bezierCurveTo(50.4, 290.4, 51.4, 287.2, 50.1, 286.1);
        vaulter.bezierCurveTo(50.0, 285.7, 49.1, 286.0, 48.2, 285.2);
        vaulter.bezierCurveTo(45.5, 280.5, 44.0, 276.8, 41.9, 273.2);
        vaulter.bezierCurveTo(42.5, 273.1, 45.7, 271.9, 48.0, 269.0);
        vaulter.bezierCurveTo(48.0, 269.0, 50.3, 269.4, 51.9, 269.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(77.8, 284.5);
        vaulter.lineTo(79.2, 285.9);
        vaulter.bezierCurveTo(79.2, 285.9, 80.4, 286.6, 80.7, 285.9);
        vaulter.lineTo(82.5, 285.9);
        vaulter.lineTo(83.7, 284.5);
        vaulter.bezierCurveTo(83.7, 284.5, 83.0, 283.1, 82.2, 282.9);
        vaulter.bezierCurveTo(81.3, 282.6, 79.2, 283.3, 78.9, 283.4);
        vaulter.bezierCurveTo(78.5, 283.5, 77.5, 284.1, 77.8, 284.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(49.1, 289.5);
        vaulter.bezierCurveTo(49.1, 289.5, 47.8, 293.9, 48.4, 296.7);
        vaulter.bezierCurveTo(48.9, 299.6, 52.9, 304.1, 52.9, 304.1);
        vaulter.lineTo(58.5, 317.2);
        vaulter.bezierCurveTo(58.5, 317.2, 56.7, 319.2, 56.3, 322.4);
        vaulter.bezierCurveTo(55.8, 325.7, 55.3, 332.6, 54.8, 334.6);
        vaulter.lineTo(54.1, 337.3);
        vaulter.bezierCurveTo(54.1, 337.3, 52.8, 338.3, 52.5, 338.9);
        vaulter.bezierCurveTo(52.2, 339.5, 52.6, 341.0, 54.1, 341.4);
        vaulter.bezierCurveTo(55.6, 341.9, 59.9, 343.0, 60.9, 343.0);
        vaulter.bezierCurveTo(61.9, 343.0, 63.1, 342.7, 63.0, 342.1);
        vaulter.bezierCurveTo(62.9, 341.6, 62.0, 340.6, 60.7, 340.6);
        vaulter.bezierCurveTo(59.4, 340.6, 58.2, 338.6, 57.1, 337.6);
        vaulter.bezierCurveTo(59.2, 331.2, 63.1, 323.9, 64.1, 322.4);
        vaulter.bezierCurveTo(65.7, 320.1, 67.3, 318.6, 66.7, 316.2);
        vaulter.bezierCurveTo(66.1, 313.9, 65.1, 304.4, 60.9, 295.3);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.9, 259.5);
        vaulter.bezierCurveTo(60.9, 259.5, 65.0, 262.4, 65.3, 265.1);
        vaulter.bezierCurveTo(65.5, 267.7, 66.4, 271.4, 66.4, 271.4);
        vaulter.bezierCurveTo(66.4, 271.4, 70.2, 274.3, 71.2, 276.4);
        vaulter.bezierCurveTo(72.2, 278.5, 78.9, 281.0, 78.9, 281.0);
        vaulter.bezierCurveTo(78.9, 281.0, 80.2, 283.1, 80.1, 283.8);
        vaulter.bezierCurveTo(80.0, 284.6, 76.1, 284.7, 76.1, 284.7);
        vaulter.bezierCurveTo(76.1, 284.7, 72.1, 282.3, 70.6, 281.6);
        vaulter.bezierCurveTo(69.1, 281.0, 64.8, 278.6, 63.4, 275.6);
        vaulter.lineTo(60.6, 269.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.6, 296.8);
        vaulter.bezierCurveTo(62.7, 294.8, 62.7, 289.8, 64.0, 287.4);
        vaulter.bezierCurveTo(65.2, 284.9, 65.2, 269.3, 65.2, 269.3);
        vaulter.bezierCurveTo(65.4, 266.0, 60.6, 259.1, 60.6, 259.1);
        vaulter.bezierCurveTo(60.6, 259.1, 63.0, 254.3, 63.0, 253.1);
        vaulter.bezierCurveTo(63.0, 251.8, 62.5, 247.3, 62.5, 247.3);
        vaulter.bezierCurveTo(62.5, 247.3, 60.7, 242.1, 55.9, 242.4);
        vaulter.bezierCurveTo(51.1, 242.7, 49.7, 248.3, 49.8, 250.7);
        vaulter.bezierCurveTo(50.0, 253.0, 52.5, 258.6, 52.5, 258.6);
        vaulter.bezierCurveTo(52.5, 258.6, 53.0, 261.2, 50.7, 260.6);
        vaulter.bezierCurveTo(48.3, 260.1, 46.2, 271.6, 47.7, 276.0);
        vaulter.bezierCurveTo(49.2, 280.4, 48.9, 291.3, 48.9, 291.3);
        vaulter.bezierCurveTo(48.9, 291.3, 48.1, 293.2, 48.2, 295.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.0, 293.7);
        vaulter.bezierCurveTo(62.2, 294.5, 62.6, 295.3, 63.3, 295.9);
        vaulter.bezierCurveTo(66.8, 299.5, 74.3, 312.3, 74.1, 313.5);
        vaulter.bezierCurveTo(73.8, 314.6, 72.1, 317.1, 70.7, 317.2);
        vaulter.bezierCurveTo(65.3, 317.6, 57.8, 313.9, 50.8, 312.3);
        vaulter.bezierCurveTo(49.4, 312.2, 45.8, 312.5, 45.3, 313.5);
        vaulter.bezierCurveTo(44.7, 314.5, 42.4, 316.6, 41.9, 318.0);
        vaulter.bezierCurveTo(41.3, 319.4, 41.0, 319.6, 40.4, 319.6);
        vaulter.bezierCurveTo(39.9, 319.6, 40.2, 318.6, 40.4, 317.6);
        vaulter.bezierCurveTo(40.7, 316.6, 42.1, 310.2, 42.3, 308.5);
        vaulter.bezierCurveTo(42.4, 306.8, 43.8, 306.8, 44.4, 306.8);
        vaulter.bezierCurveTo(45.0, 306.8, 45.8, 307.2, 46.3, 307.8);
        vaulter.bezierCurveTo(46.3, 307.8, 47.2, 307.8, 50.6, 308.6);
        vaulter.bezierCurveTo(54.0, 309.5, 59.8, 308.4, 63.9, 309.6);
        vaulter.bezierCurveTo(56.5, 305.1, 50.5, 302.6, 48.4, 296.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(33.1, 291.7);
        vaulter.bezierCurveTo(33.1, 291.7, 32.1, 291.9, 31.9, 290.9);
        vaulter.bezierCurveTo(31.8, 289.8, 32.8, 289.7, 32.8, 289.7);
        vaulter.lineTo(135.7, 275.1);
        vaulter.lineTo(291.5, 256.4);
        vaulter.lineTo(291.7, 258.4);
        vaulter.lineTo(135.9, 277.1);
        vaulter.lineTo(33.1, 291.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.1, 278.9);
        vaulter.bezierCurveTo(48.1, 278.9, 54.3, 279.8, 55.3, 271.9);
        vaulter.bezierCurveTo(56.4, 264.1, 53.3, 261.5, 51.2, 261.2);
        vaulter.bezierCurveTo(49.2, 261.0, 45.7, 264.7, 45.7, 270.1);
        vaulter.bezierCurveTo(45.7, 275.4, 45.9, 277.1, 48.1, 278.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(50.7, 260.6);
        vaulter.bezierCurveTo(50.7, 260.6, 45.0, 260.6, 42.2, 265.2);
        vaulter.bezierCurveTo(42.2, 265.2, 36.4, 269.2, 35.1, 269.9);
        vaulter.bezierCurveTo(35.1, 269.9, 31.9, 272.3, 31.9, 274.4);
        vaulter.bezierCurveTo(31.9, 276.5, 35.5, 279.1, 36.6, 279.6);
        vaulter.bezierCurveTo(37.7, 280.2, 42.9, 284.2, 44.0, 285.4);
        vaulter.bezierCurveTo(44.0, 285.4, 44.4, 287.2, 43.5, 287.6);
        vaulter.bezierCurveTo(42.5, 288.0, 43.4, 290.8, 43.8, 291.0);
        vaulter.bezierCurveTo(45.0, 291.7, 47.2, 291.4, 49.2, 290.7);
        vaulter.bezierCurveTo(50.0, 290.4, 49.7, 287.2, 49.1, 286.8);
        vaulter.bezierCurveTo(48.4, 286.7, 48.1, 286.2, 47.8, 285.4);
        vaulter.bezierCurveTo(47.5, 284.6, 46.1, 282.0, 46.1, 282.0);
        vaulter.lineTo(39.7, 274.1);
        vaulter.bezierCurveTo(39.7, 274.1, 45.9, 271.0, 47.6, 269.3);
        vaulter.bezierCurveTo(47.6, 269.3, 48.4, 269.9, 50.7, 269.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(76.9, 286.2);
        vaulter.bezierCurveTo(76.9, 286.2, 76.9, 284.2, 77.5, 283.9);
        vaulter.bezierCurveTo(78.0, 283.6, 79.7, 283.6, 80.6, 283.9);
        vaulter.bezierCurveTo(81.5, 284.2, 82.4, 285.1, 82.5, 285.8);
        vaulter.bezierCurveTo(82.6, 286.4, 81.4, 287.0, 80.8, 287.4);
        vaulter.bezierCurveTo(80.3, 287.7, 77.6, 287.4, 77.6, 287.4);
        vaulter.lineTo(76.9, 286.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(60.7, 265.0);
        vaulter.bezierCurveTo(60.7, 265.0, 63.2, 265.5, 63.6, 266.5);
        vaulter.bezierCurveTo(64.0, 267.5, 67.6, 273.1, 67.9, 275.3);
        vaulter.bezierCurveTo(68.2, 277.5, 70.6, 279.1, 71.2, 279.1);
        vaulter.bezierCurveTo(71.7, 279.0, 81.1, 284.3, 81.4, 285.1);
        vaulter.lineTo(75.7, 286.8);
        vaulter.bezierCurveTo(75.7, 286.8, 73.5, 286.2, 71.1, 284.5);
        vaulter.bezierCurveTo(71.1, 284.5, 68.4, 284.5, 67.7, 284.3);
        vaulter.bezierCurveTo(67.1, 284.0, 63.2, 280.0, 62.2, 274.5);
        vaulter.lineTo(60.7, 273.5);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(32.5, 292.8);
        vaulter.bezierCurveTo(32.5, 292.8, 31.4, 293.0, 31.3, 291.9);
        vaulter.bezierCurveTo(31.2, 290.9, 32.3, 290.8, 32.3, 290.8);
        vaulter.bezierCurveTo(32.9, 290.7, 105.9, 282.4, 142.4, 279.5);
        vaulter.bezierCurveTo(179.0, 276.6, 291.0, 266.5, 291.6, 266.4);
        vaulter.lineTo(291.8, 268.4);
        vaulter.bezierCurveTo(291.2, 268.4, 179.2, 278.6, 142.6, 281.5);
        vaulter.bezierCurveTo(106.1, 284.4, 33.1, 292.7, 32.5, 292.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(76.5, 287.9);
        vaulter.bezierCurveTo(76.5, 287.9, 76.5, 285.9, 77.1, 285.6);
        vaulter.bezierCurveTo(77.6, 285.2, 79.4, 285.3, 80.3, 285.6);
        vaulter.bezierCurveTo(81.3, 285.8, 82.2, 286.9, 82.3, 287.5);
        vaulter.bezierCurveTo(82.5, 288.2, 81.2, 288.8, 80.6, 289.2);
        vaulter.bezierCurveTo(80.0, 289.5, 77.2, 289.2, 77.2, 289.2);
        vaulter.lineTo(76.5, 287.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.2, 295.3);
        vaulter.bezierCurveTo(63.4, 294.2, 63.6, 293.3, 64.0, 292.5);
        vaulter.bezierCurveTo(65.2, 290.1, 65.2, 274.4, 65.2, 274.4);
        vaulter.bezierCurveTo(65.4, 271.1, 60.6, 264.3, 60.6, 264.3);
        vaulter.bezierCurveTo(60.6, 264.3, 63.0, 259.5, 63.0, 258.2);
        vaulter.bezierCurveTo(63.0, 257.0, 62.5, 252.5, 62.5, 252.5);
        vaulter.bezierCurveTo(62.5, 252.5, 60.7, 247.3, 55.9, 247.5);
        vaulter.bezierCurveTo(51.1, 247.8, 49.7, 253.5, 49.8, 255.8);
        vaulter.bezierCurveTo(50.0, 258.2, 52.5, 263.7, 52.5, 263.7);
        vaulter.bezierCurveTo(52.5, 263.7, 53.0, 266.3, 50.7, 265.8);
        vaulter.bezierCurveTo(48.3, 265.2, 46.2, 276.8, 47.7, 281.1);
        vaulter.bezierCurveTo(49.2, 285.5, 48.9, 296.4, 48.9, 296.4);
        vaulter.bezierCurveTo(48.9, 300.2, 48.9, 303.9, 49.1, 305.1);
        vaulter.bezierCurveTo(49.4, 308.2, 50.2, 313.7, 50.2, 313.7);
        vaulter.bezierCurveTo(50.2, 313.7, 45.4, 317.7, 44.4, 319.8);
        vaulter.bezierCurveTo(43.4, 321.8, 36.3, 329.5, 36.3, 329.5);
        vaulter.bezierCurveTo(36.3, 329.5, 33.7, 330.3, 33.1, 331.1);
        vaulter.bezierCurveTo(32.4, 331.9, 32.0, 334.3, 34.3, 334.9);
        vaulter.bezierCurveTo(36.5, 335.5, 38.9, 340.8, 38.9, 340.8);
        vaulter.bezierCurveTo(38.9, 340.8, 40.5, 343.2, 44.0, 343.0);
        vaulter.bezierCurveTo(47.4, 342.8, 45.6, 340.6, 45.0, 340.4);
        vaulter.bezierCurveTo(45.0, 340.4, 42.6, 339.4, 42.2, 338.5);
        vaulter.bezierCurveTo(41.8, 337.6, 40.6, 334.8, 39.5, 332.7);
        vaulter.bezierCurveTo(39.5, 332.7, 53.1, 320.5, 55.2, 318.7);
        vaulter.bezierCurveTo(57.3, 317.0, 60.1, 315.0, 60.5, 312.1);
        vaulter.bezierCurveTo(60.8, 309.7, 62.8, 302.2, 63.2, 295.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.1, 284.1);
        vaulter.bezierCurveTo(48.1, 284.1, 54.3, 284.9, 55.3, 277.1);
        vaulter.bezierCurveTo(56.4, 269.3, 53.3, 266.6, 51.2, 266.4);
        vaulter.bezierCurveTo(49.2, 266.2, 45.7, 269.9, 45.7, 275.2);
        vaulter.bezierCurveTo(45.7, 280.6, 45.9, 282.2, 48.1, 284.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(50.7, 265.8);
        vaulter.bezierCurveTo(50.7, 265.8, 45.5, 265.2, 43.3, 268.8);
        vaulter.bezierCurveTo(43.3, 268.8, 36.2, 274.7, 35.7, 276.1);
        vaulter.bezierCurveTo(35.7, 276.1, 33.5, 278.3, 33.5, 279.3);
        vaulter.bezierCurveTo(33.5, 280.2, 35.0, 282.7, 37.1, 283.3);
        vaulter.bezierCurveTo(39.2, 283.8, 42.5, 285.8, 44.1, 286.2);
        vaulter.bezierCurveTo(45.8, 286.6, 46.2, 289.2, 46.0, 289.8);
        vaulter.bezierCurveTo(45.9, 290.3, 45.2, 292.0, 45.8, 292.8);
        vaulter.bezierCurveTo(46.3, 293.6, 48.5, 294.0, 49.3, 294.0);
        vaulter.bezierCurveTo(50.0, 294.0, 52.0, 292.1, 52.0, 292.1);
        vaulter.bezierCurveTo(52.4, 291.3, 51.3, 288.7, 50.7, 288.4);
        vaulter.bezierCurveTo(50.0, 288.2, 49.8, 286.7, 49.3, 286.4);
        vaulter.bezierCurveTo(48.7, 286.1, 42.0, 279.0, 41.1, 278.7);
        vaulter.bezierCurveTo(41.1, 278.7, 45.4, 276.2, 46.7, 274.0);
        vaulter.bezierCurveTo(46.7, 274.0, 48.4, 274.5, 51.1, 274.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.9, 295.5);
        vaulter.bezierCurveTo(48.9, 295.5, 48.2, 297.0, 48.1, 298.3);
        vaulter.bezierCurveTo(47.9, 299.5, 47.5, 302.5, 48.6, 304.7);
        vaulter.bezierCurveTo(50.3, 307.9, 54.3, 308.4, 58.1, 309.4);
        vaulter.bezierCurveTo(62.0, 310.4, 68.4, 312.0, 68.4, 312.0);
        vaulter.bezierCurveTo(62.2, 314.4, 60.3, 317.6, 53.2, 318.6);
        vaulter.bezierCurveTo(53.2, 318.6, 52.4, 318.4, 51.5, 318.6);
        vaulter.bezierCurveTo(50.6, 318.9, 49.7, 320.0, 49.7, 321.0);
        vaulter.bezierCurveTo(49.8, 321.9, 52.6, 324.2, 53.5, 325.7);
        vaulter.bezierCurveTo(54.3, 327.2, 57.5, 331.9, 58.6, 332.6);
        vaulter.bezierCurveTo(59.7, 333.3, 60.5, 333.8, 60.7, 332.9);
        vaulter.bezierCurveTo(61.0, 331.9, 59.0, 330.4, 59.0, 329.1);
        vaulter.bezierCurveTo(58.9, 325.0, 57.4, 322.0, 57.4, 322.0);
        vaulter.bezierCurveTo(57.4, 322.0, 62.3, 320.4, 68.0, 319.4);
        vaulter.bezierCurveTo(70.7, 318.9, 77.4, 315.7, 77.4, 315.7);
        vaulter.bezierCurveTo(78.5, 315.1, 79.9, 312.6, 79.9, 311.3);
        vaulter.bezierCurveTo(79.9, 309.5, 79.2, 309.2, 78.2, 307.9);
        vaulter.bezierCurveTo(76.8, 306.1, 74.6, 305.4, 72.3, 303.8);
        vaulter.bezierCurveTo(68.3, 301.1, 63.3, 298.3, 62.3, 297.6);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(48.6, 293.3);
        vaulter.bezierCurveTo(48.6, 293.3, 47.4, 308.5, 48.6, 312.3);
        vaulter.bezierCurveTo(48.6, 312.3, 39.7, 311.1, 31.3, 310.3);
        vaulter.bezierCurveTo(31.3, 310.3, 30.4, 309.3, 29.6, 309.3);
        vaulter.bezierCurveTo(28.9, 309.3, 27.7, 309.4, 27.4, 309.9);
        vaulter.bezierCurveTo(27.1, 310.3, 23.1, 314.6, 22.2, 315.1);
        vaulter.bezierCurveTo(21.3, 315.6, 19.8, 316.4, 19.6, 317.2);
        vaulter.bezierCurveTo(19.5, 317.9, 20.8, 318.7, 22.5, 318.5);
        vaulter.bezierCurveTo(24.2, 318.4, 27.2, 316.2, 29.3, 316.1);
        vaulter.bezierCurveTo(29.3, 316.1, 33.2, 315.4, 38.4, 316.5);
        vaulter.bezierCurveTo(43.5, 317.5, 46.9, 320.7, 49.9, 320.6);
        vaulter.bezierCurveTo(53.0, 320.4, 54.6, 318.8, 56.2, 315.1);
        vaulter.bezierCurveTo(57.7, 311.5, 59.5, 299.0, 59.5, 299.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(61.9, 273.5);
        vaulter.lineTo(63.5, 273.5);
        vaulter.bezierCurveTo(63.5, 273.5, 68.2, 281.5, 69.0, 282.2);
        vaulter.bezierCurveTo(69.9, 282.9, 70.4, 283.0, 72.7, 282.5);
        vaulter.bezierCurveTo(74.6, 282.2, 77.7, 278.0, 85.1, 274.7);
        vaulter.bezierCurveTo(85.1, 274.7, 85.9, 274.0, 85.3, 273.3);
        vaulter.bezierCurveTo(84.7, 272.6, 83.8, 272.7, 83.8, 272.7);
        vaulter.bezierCurveTo(83.8, 272.7, 78.3, 274.6, 76.3, 275.0);
        vaulter.bezierCurveTo(74.5, 275.4, 71.6, 276.7, 71.6, 276.7);
        vaulter.lineTo(66.5, 268.9);
        vaulter.bezierCurveTo(64.5, 265.3, 60.6, 264.0, 60.6, 264.0);
        vaulter.bezierCurveTo(60.6, 264.0, 57.3, 268.5, 61.9, 273.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.2, 300.3);
        vaulter.bezierCurveTo(62.4, 298.2, 62.4, 293.4, 63.6, 291.0);
        vaulter.bezierCurveTo(64.9, 288.6, 64.9, 273.3, 64.9, 273.3);
        vaulter.bezierCurveTo(65.0, 270.1, 60.3, 263.4, 60.3, 263.4);
        vaulter.bezierCurveTo(60.3, 263.4, 62.7, 258.7, 62.7, 257.5);
        vaulter.bezierCurveTo(62.7, 256.3, 62.2, 251.9, 62.2, 251.9);
        vaulter.bezierCurveTo(62.2, 251.9, 60.4, 246.8, 55.8, 247.1);
        vaulter.bezierCurveTo(51.1, 247.4, 49.7, 252.9, 49.8, 255.2);
        vaulter.bezierCurveTo(50.0, 257.5, 52.4, 262.9, 52.4, 262.9);
        vaulter.bezierCurveTo(52.4, 262.9, 52.9, 265.4, 50.7, 264.9);
        vaulter.bezierCurveTo(48.4, 264.4, 46.2, 275.6, 47.7, 279.9);
        vaulter.bezierCurveTo(49.2, 284.2, 49.0, 294.8, 49.0, 294.8);
        vaulter.bezierCurveTo(49.0, 294.8, 48.1, 296.7, 48.3, 299.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.7, 292.2);
        vaulter.bezierCurveTo(48.7, 292.2, 47.7, 299.1, 49.9, 301.5);
        vaulter.bezierCurveTo(53.4, 305.5, 57.9, 307.2, 64.6, 310.5);
        vaulter.bezierCurveTo(67.0, 311.6, 67.7, 310.6, 69.5, 316.1);
        vaulter.bezierCurveTo(71.2, 321.6, 75.3, 325.7, 78.3, 333.3);
        vaulter.bezierCurveTo(78.3, 333.3, 77.9, 335.4, 78.3, 336.0);
        vaulter.bezierCurveTo(78.8, 336.6, 80.3, 338.3, 81.7, 338.0);
        vaulter.bezierCurveTo(83.0, 337.7, 88.2, 336.5, 90.6, 336.0);
        vaulter.bezierCurveTo(93.1, 335.6, 93.5, 333.7, 93.5, 333.7);
        vaulter.bezierCurveTo(93.5, 333.7, 92.3, 332.2, 90.6, 332.5);
        vaulter.bezierCurveTo(89.0, 332.8, 82.4, 331.6, 82.4, 331.6);
        vaulter.bezierCurveTo(81.5, 331.3, 76.9, 316.6, 76.6, 311.2);
        vaulter.bezierCurveTo(76.3, 305.7, 73.1, 305.3, 72.2, 303.9);
        vaulter.bezierCurveTo(71.3, 302.6, 63.6, 295.0, 59.6, 292.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.2, 282.8);
        vaulter.bezierCurveTo(48.2, 282.8, 54.2, 283.6, 55.2, 276.0);
        vaulter.bezierCurveTo(56.2, 268.3, 53.2, 265.7, 51.2, 265.5);
        vaulter.bezierCurveTo(49.2, 265.3, 45.8, 268.9, 45.8, 274.1);
        vaulter.bezierCurveTo(45.8, 279.4, 46.0, 281.0, 48.2, 282.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(50.1, 265.0);
        vaulter.bezierCurveTo(50.1, 265.0, 44.6, 268.9, 44.2, 271.8);
        vaulter.bezierCurveTo(43.9, 274.7, 44.1, 285.6, 45.5, 287.3);
        vaulter.bezierCurveTo(45.9, 287.8, 46.2, 288.1, 46.6, 288.3);
        vaulter.bezierCurveTo(47.8, 288.8, 49.7, 287.6, 50.1, 286.4);
        vaulter.bezierCurveTo(50.4, 285.2, 50.1, 282.6, 50.1, 282.6);
        vaulter.bezierCurveTo(50.1, 282.6, 50.9, 278.4, 50.1, 275.2);
        vaulter.lineTo(51.7, 275.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(304.7, 288.7);
        vaulter.lineTo(143.1, 276.9);
        vaulter.bezierCurveTo(100.3, 273.8, 42.9, 274.6, 42.3, 274.6);
        vaulter.bezierCurveTo(42.3, 274.6, 41.1, 274.7, 41.1, 273.6);
        vaulter.bezierCurveTo(41.1, 272.5, 42.3, 272.6, 42.3, 272.6);
        vaulter.bezierCurveTo(42.9, 272.6, 100.3, 271.8, 143.2, 274.9);
        vaulter.lineTo(304.8, 286.7);
        vaulter.lineTo(304.7, 288.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(89.5, 273.7);
        vaulter.bezierCurveTo(89.5, 273.7, 87.1, 274.1, 86.7, 274.0);
        vaulter.bezierCurveTo(86.3, 274.0, 85.2, 273.6, 85.2, 273.6);
        vaulter.bezierCurveTo(85.2, 273.6, 84.9, 272.3, 85.2, 271.7);
        vaulter.bezierCurveTo(85.5, 271.1, 86.9, 270.9, 86.9, 270.9);
        vaulter.bezierCurveTo(86.9, 270.9, 88.6, 271.5, 89.1, 271.8);
        vaulter.bezierCurveTo(89.5, 272.1, 90.1, 273.3, 89.5, 273.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(46.6, 288.3);
        vaulter.bezierCurveTo(47.9, 289.1, 49.3, 289.0, 50.1, 288.3);
        vaulter.bezierCurveTo(51.0, 287.3, 53.9, 283.5, 55.0, 280.8);
        vaulter.bezierCurveTo(56.2, 278.1, 58.7, 277.8, 59.3, 275.7);
        vaulter.bezierCurveTo(59.8, 273.6, 59.0, 272.8, 58.4, 272.3);
        vaulter.bezierCurveTo(58.4, 272.3, 57.8, 271.7, 57.0, 271.4);
        vaulter.bezierCurveTo(56.2, 271.1, 54.7, 271.4, 54.2, 271.7);
        vaulter.bezierCurveTo(53.7, 272.0, 53.5, 273.1, 53.6, 273.6);
        vaulter.bezierCurveTo(53.7, 274.2, 52.8, 275.7, 52.6, 277.0);
        vaulter.bezierCurveTo(52.3, 278.2, 50.5, 279.4, 49.3, 281.0);
        vaulter.bezierCurveTo(48.6, 281.9, 47.8, 283.0, 47.1, 284.1);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(62.3, 293.1);
        vaulter.bezierCurveTo(62.3, 293.1, 68.7, 305.5, 69.3, 307.6);
        vaulter.bezierCurveTo(69.9, 309.8, 71.3, 314.9, 69.3, 316.9);
        vaulter.bezierCurveTo(67.3, 318.9, 63.1, 319.0, 63.1, 319.0);
        vaulter.bezierCurveTo(63.1, 319.0, 57.7, 313.8, 49.4, 312.3);
        vaulter.bezierCurveTo(41.0, 310.7, 37.8, 311.8, 37.8, 311.8);
        vaulter.bezierCurveTo(37.8, 311.8, 35.2, 312.7, 34.5, 311.8);
        vaulter.bezierCurveTo(33.8, 311.0, 34.9, 308.8, 36.2, 308.4);
        vaulter.bezierCurveTo(37.5, 307.9, 42.4, 308.1, 43.2, 307.2);
        vaulter.bezierCurveTo(43.9, 306.3, 46.2, 305.9, 47.3, 306.1);
        vaulter.bezierCurveTo(48.5, 306.2, 50.6, 308.2, 52.3, 308.6);
        vaulter.bezierCurveTo(54.0, 309.1, 61.9, 309.5, 61.9, 309.5);
        vaulter.bezierCurveTo(61.9, 309.5, 50.5, 306.2, 48.8, 296.3);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(59.5, 262.6);
        vaulter.bezierCurveTo(59.5, 262.6, 62.2, 262.6, 64.4, 264.6);
        vaulter.bezierCurveTo(66.6, 266.6, 67.7, 269.2, 67.7, 269.2);
        vaulter.lineTo(72.8, 272.6);
        vaulter.bezierCurveTo(72.8, 272.6, 79.5, 271.2, 83.8, 269.5);
        vaulter.lineTo(90.4, 270.3);
        vaulter.bezierCurveTo(85.5, 271.1, 75.6, 277.7, 72.8, 278.0);
        vaulter.bezierCurveTo(70.0, 278.3, 64.9, 273.4, 64.9, 273.4);
        vaulter.lineTo(63.7, 272.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.6, 298.5);
        vaulter.bezierCurveTo(62.7, 296.5, 62.7, 291.5, 64.0, 289.1);
        vaulter.bezierCurveTo(65.2, 286.6, 65.2, 270.9, 65.2, 270.9);
        vaulter.bezierCurveTo(65.4, 267.7, 60.6, 260.8, 60.6, 260.8);
        vaulter.bezierCurveTo(60.6, 260.8, 63.0, 256.0, 63.0, 254.7);
        vaulter.bezierCurveTo(63.0, 253.5, 62.5, 249.0, 62.5, 249.0);
        vaulter.bezierCurveTo(62.5, 249.0, 60.7, 243.8, 55.9, 244.1);
        vaulter.bezierCurveTo(51.1, 244.3, 49.7, 250.0, 49.8, 252.3);
        vaulter.bezierCurveTo(50.0, 254.7, 52.5, 260.2, 52.5, 260.2);
        vaulter.bezierCurveTo(52.5, 260.2, 52.8, 261.4, 50.7, 262.6);
        vaulter.bezierCurveTo(47.9, 264.0, 46.2, 273.3, 47.7, 277.7);
        vaulter.bezierCurveTo(49.2, 282.1, 48.9, 293.0, 48.9, 293.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.9, 293.0);
        vaulter.bezierCurveTo(48.9, 293.0, 47.6, 298.3, 51.7, 302.7);
        vaulter.bezierCurveTo(55.8, 307.0, 65.0, 310.9, 65.0, 310.9);
        vaulter.bezierCurveTo(65.0, 310.9, 64.5, 316.7, 65.8, 321.1);
        vaulter.bezierCurveTo(67.0, 325.4, 67.9, 329.5, 68.2, 334.2);
        vaulter.bezierCurveTo(68.2, 334.2, 66.9, 336.3, 67.0, 337.2);
        vaulter.bezierCurveTo(67.1, 338.1, 67.9, 339.8, 69.5, 340.0);
        vaulter.bezierCurveTo(71.1, 340.3, 73.7, 341.5, 74.5, 342.1);
        vaulter.bezierCurveTo(75.3, 342.7, 78.0, 343.2, 79.0, 342.9);
        vaulter.bezierCurveTo(80.1, 342.5, 81.3, 341.3, 80.7, 340.8);
        vaulter.bezierCurveTo(80.2, 340.4, 79.1, 338.9, 77.7, 338.4);
        vaulter.bezierCurveTo(76.2, 338.0, 72.3, 335.7, 72.2, 334.1);
        vaulter.bezierCurveTo(72.1, 332.5, 71.4, 322.0, 72.3, 318.4);
        vaulter.bezierCurveTo(73.2, 314.9, 74.3, 309.5, 73.7, 307.3);
        vaulter.bezierCurveTo(73.0, 305.2, 70.7, 301.9, 70.7, 301.9);
        vaulter.lineTo(61.4, 292.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(51.1, 280.9);
        vaulter.bezierCurveTo(51.1, 280.9, 57.3, 280.7, 57.0, 272.8);
        vaulter.bezierCurveTo(56.7, 264.9, 53.2, 262.8, 51.1, 262.9);
        vaulter.bezierCurveTo(49.0, 263.1, 46.2, 267.3, 47.1, 272.6);
        vaulter.bezierCurveTo(48.1, 277.9, 48.5, 279.5, 51.1, 280.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(54.3, 272.3);
        vaulter.lineTo(52.8, 272.8);
        vaulter.bezierCurveTo(54.6, 275.5, 55.0, 279.7, 55.0, 279.7);
        vaulter.bezierCurveTo(55.0, 279.7, 56.2, 282.2, 56.2, 283.4);
        vaulter.bezierCurveTo(56.2, 284.6, 54.8, 286.4, 53.6, 286.3);
        vaulter.bezierCurveTo(53.1, 286.2, 52.7, 286.0, 52.2, 285.7);
        vaulter.bezierCurveTo(50.3, 284.5, 46.8, 274.3, 46.2, 271.4);
        vaulter.bezierCurveTo(45.7, 268.6, 49.6, 263.2, 49.6, 263.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(309.5, 291.6);
        vaulter.bezierCurveTo(309.1, 291.6, 206.4, 281.5, 152.9, 275.0);
        vaulter.bezierCurveTo(99.5, 268.5, 47.2, 270.9, 46.8, 270.9);
        vaulter.bezierCurveTo(46.8, 270.9, 45.7, 271.0, 45.7, 270.0);
        vaulter.bezierCurveTo(45.6, 268.9, 46.7, 268.9, 46.7, 268.9);
        vaulter.bezierCurveTo(47.1, 268.9, 99.6, 266.5, 153.2, 273.0);
        vaulter.bezierCurveTo(206.7, 279.5, 309.3, 289.6, 309.7, 289.6);
        vaulter.lineTo(309.5, 291.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.5, 285.9);
        vaulter.bezierCurveTo(54.9, 286.4, 56.3, 286.2, 56.9, 285.3);
        vaulter.bezierCurveTo(57.7, 284.2, 59.8, 280.0, 60.6, 277.1);
        vaulter.bezierCurveTo(61.3, 274.3, 63.6, 273.6, 63.9, 271.5);
        vaulter.bezierCurveTo(64.1, 269.3, 63.2, 268.7, 62.5, 268.3);
        vaulter.bezierCurveTo(62.5, 268.3, 61.8, 267.8, 61.0, 267.6);
        vaulter.bezierCurveTo(60.2, 267.5, 58.8, 268.0, 58.3, 268.4);
        vaulter.bezierCurveTo(57.9, 268.7, 57.8, 269.8, 58.0, 270.4);
        vaulter.bezierCurveTo(58.2, 270.9, 57.5, 272.5, 57.5, 273.8);
        vaulter.bezierCurveTo(57.5, 275.1, 55.9, 276.5, 55.0, 278.3);
        vaulter.bezierCurveTo(53.6, 280.7, 51.7, 284.6, 53.5, 285.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(89.8, 267.2);
        vaulter.bezierCurveTo(89.8, 267.2, 92.3, 266.8, 92.7, 266.9);
        vaulter.bezierCurveTo(93.2, 266.9, 94.2, 267.3, 94.2, 267.3);
        vaulter.bezierCurveTo(94.2, 267.3, 94.6, 268.6, 94.3, 269.2);
        vaulter.bezierCurveTo(94.0, 269.8, 92.5, 270.1, 92.5, 270.1);
        vaulter.bezierCurveTo(92.5, 270.1, 90.8, 269.5, 90.3, 269.2);
        vaulter.bezierCurveTo(89.8, 268.9, 89.3, 267.6, 89.8, 267.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(63.2, 290.2);
        vaulter.bezierCurveTo(63.2, 290.2, 76.4, 302.6, 75.9, 306.0);
        vaulter.bezierCurveTo(75.4, 309.3, 69.3, 312.7, 67.5, 312.8);
        vaulter.bezierCurveTo(65.7, 312.9, 49.3, 313.6, 47.8, 314.0);
        vaulter.bezierCurveTo(45.0, 314.8, 42.9, 317.1, 42.7, 318.0);
        vaulter.bezierCurveTo(42.6, 318.9, 41.5, 324.0, 41.1, 324.9);
        vaulter.bezierCurveTo(41.0, 325.2, 41.0, 326.1, 40.7, 326.5);
        vaulter.bezierCurveTo(40.4, 327.0, 39.8, 327.4, 39.3, 327.0);
        vaulter.bezierCurveTo(38.8, 326.7, 37.9, 320.4, 38.8, 317.8);
        vaulter.bezierCurveTo(39.6, 315.2, 39.0, 313.6, 39.0, 313.6);
        vaulter.bezierCurveTo(39.0, 313.6, 40.1, 311.6, 40.9, 311.9);
        vaulter.bezierCurveTo(41.7, 312.1, 43.2, 311.8, 43.8, 311.4);
        vaulter.bezierCurveTo(44.4, 311.1, 52.0, 305.1, 56.8, 305.4);
        vaulter.lineTo(61.0, 305.3);
        vaulter.bezierCurveTo(58.3, 303.8, 53.6, 300.5, 51.6, 295.8);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.6, 259.3);
        vaulter.bezierCurveTo(60.6, 259.3, 64.7, 259.0, 65.9, 260.4);
        vaulter.bezierCurveTo(67.1, 261.9, 67.8, 262.8, 67.8, 262.8);
        vaulter.bezierCurveTo(67.8, 262.8, 73.5, 265.2, 74.1, 266.3);
        vaulter.bezierCurveTo(79.0, 265.7, 85.1, 263.9, 88.0, 262.8);
        vaulter.bezierCurveTo(88.0, 262.8, 93.8, 263.1, 92.7, 264.8);
        vaulter.bezierCurveTo(86.3, 267.0, 80.8, 271.3, 74.5, 272.3);
        vaulter.bezierCurveTo(74.5, 272.3, 74.5, 272.3, 72.6, 271.9);
        vaulter.bezierCurveTo(70.6, 271.5, 64.8, 267.0, 64.8, 267.0);
        vaulter.lineTo(63.2, 266.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.0, 291.4);
        vaulter.bezierCurveTo(63.1, 289.8, 63.4, 288.2, 64.0, 287.1);
        vaulter.bezierCurveTo(65.2, 284.7, 65.2, 269.0, 65.2, 269.0);
        vaulter.bezierCurveTo(65.4, 265.7, 60.6, 258.9, 60.6, 258.9);
        vaulter.bezierCurveTo(60.6, 258.9, 63.0, 254.1, 63.0, 252.8);
        vaulter.bezierCurveTo(63.0, 251.6, 62.5, 247.1, 62.5, 247.1);
        vaulter.bezierCurveTo(62.5, 247.1, 60.7, 241.9, 55.9, 242.1);
        vaulter.bezierCurveTo(51.1, 242.4, 49.7, 248.1, 49.8, 250.4);
        vaulter.bezierCurveTo(50.0, 252.8, 52.5, 258.3, 52.5, 258.3);
        vaulter.bezierCurveTo(52.5, 258.3, 52.8, 259.8, 50.6, 260.8);
        vaulter.bezierCurveTo(48.6, 261.7, 46.2, 271.4, 47.7, 275.8);
        vaulter.bezierCurveTo(49.2, 280.1, 48.9, 291.1, 48.9, 291.1);
        vaulter.bezierCurveTo(48.9, 291.1, 47.9, 293.0, 48.1, 295.3);
        vaulter.bezierCurveTo(48.1, 296.1, 48.4, 297.2, 48.5, 297.9);
        vaulter.bezierCurveTo(49.0, 300.8, 53.6, 306.9, 57.4, 314.8);
        vaulter.bezierCurveTo(54.2, 323.7, 56.8, 326.6, 52.5, 335.6);
        vaulter.bezierCurveTo(52.5, 335.6, 51.2, 335.9, 50.7, 337.0);
        vaulter.bezierCurveTo(50.3, 338.0, 51.5, 339.2, 51.5, 339.2);
        vaulter.bezierCurveTo(51.5, 339.2, 58.1, 342.5, 61.0, 342.9);
        vaulter.bezierCurveTo(64.0, 343.3, 63.9, 342.4, 63.1, 341.2);
        vaulter.bezierCurveTo(62.7, 340.6, 61.7, 340.2, 60.5, 339.4);
        vaulter.bezierCurveTo(59.2, 338.6, 56.2, 335.9, 56.2, 335.9);
        vaulter.bezierCurveTo(58.7, 328.4, 62.9, 323.0, 65.2, 317.1);
        vaulter.bezierCurveTo(65.2, 317.1, 68.3, 312.7, 66.5, 308.6);
        vaulter.bezierCurveTo(64.7, 304.4, 62.4, 293.4, 62.4, 293.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(51.1, 279.0);
        vaulter.bezierCurveTo(51.1, 279.0, 57.3, 278.8, 57.0, 270.9);
        vaulter.bezierCurveTo(56.7, 263.0, 53.2, 260.9, 51.1, 261.0);
        vaulter.bezierCurveTo(49.0, 261.2, 46.2, 265.4, 47.1, 270.7);
        vaulter.bezierCurveTo(48.1, 276.0, 48.5, 277.6, 51.1, 279.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.5, 266.5);
        vaulter.bezierCurveTo(53.5, 266.5, 55.1, 267.1, 56.3, 268.2);
        vaulter.bezierCurveTo(58.0, 269.9, 58.7, 271.9, 58.7, 271.9);
        vaulter.bezierCurveTo(58.7, 271.9, 61.1, 273.9, 62.0, 275.0);
        vaulter.bezierCurveTo(62.8, 276.1, 64.1, 278.4, 62.6, 278.8);
        vaulter.bezierCurveTo(60.7, 279.4, 56.9, 277.4, 53.2, 275.2);
        vaulter.bezierCurveTo(49.4, 273.0, 46.2, 269.5, 46.2, 266.3);
        vaulter.bezierCurveTo(46.2, 263.2, 50.0, 261.7, 50.0, 261.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(307.8, 298.6);
        vaulter.lineTo(153.0, 272.9);
        vaulter.bezierCurveTo(97.0, 263.7, 47.3, 258.5, 46.9, 258.4);
        vaulter.bezierCurveTo(46.9, 258.4, 45.5, 258.2, 45.7, 257.2);
        vaulter.bezierCurveTo(45.8, 256.3, 47.1, 256.5, 47.1, 256.5);
        vaulter.bezierCurveTo(47.5, 256.5, 97.3, 261.7, 153.4, 270.9);
        vaulter.lineTo(308.2, 296.6);
        vaulter.lineTo(307.8, 298.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(61.1, 278.9);
        vaulter.bezierCurveTo(61.6, 279.1, 62.0, 279.1, 62.6, 278.8);
        vaulter.bezierCurveTo(65.4, 277.3, 63.1, 268.4, 62.6, 261.7);
        vaulter.bezierCurveTo(62.5, 260.8, 63.4, 260.3, 64.2, 259.5);
        vaulter.bezierCurveTo(65.1, 258.8, 64.2, 257.5, 64.2, 257.5);
        vaulter.lineTo(63.4, 257.5);
        vaulter.bezierCurveTo(63.4, 257.5, 62.0, 256.4, 61.5, 256.3);
        vaulter.bezierCurveTo(61.0, 256.1, 59.6, 256.3, 59.5, 256.5);
        vaulter.bezierCurveTo(59.4, 256.7, 58.5, 255.8, 58.0, 255.8);
        vaulter.bezierCurveTo(57.5, 255.9, 56.4, 258.5, 56.7, 259.3);
        vaulter.bezierCurveTo(57.0, 260.2, 58.7, 261.3, 58.7, 261.3);
        vaulter.bezierCurveTo(58.7, 261.3, 59.5, 266.5, 59.2, 268.6);
        vaulter.bezierCurveTo(58.9, 270.7, 58.5, 272.1, 58.7, 273.1);
        vaulter.bezierCurveTo(58.7, 273.4, 58.8, 274.2, 59.0, 275.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(92.4, 261.7);
        vaulter.bezierCurveTo(91.9, 262.0, 92.4, 262.8, 92.8, 263.0);
        vaulter.bezierCurveTo(93.3, 263.3, 94.6, 263.9, 95.3, 263.9);
        vaulter.bezierCurveTo(96.0, 263.9, 98.5, 263.4, 98.2, 262.8);
        vaulter.bezierCurveTo(98.0, 262.2, 95.4, 261.4, 94.6, 261.4);
        vaulter.bezierCurveTo(93.8, 261.3, 92.4, 261.7, 92.4, 261.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(294.7, 337.6);
        vaulter.lineTo(46.9, 239.0);
        vaulter.bezierCurveTo(46.9, 239.0, 45.6, 238.5, 46.0, 237.6);
        vaulter.bezierCurveTo(46.5, 236.6, 47.6, 237.1, 47.6, 237.1);
        vaulter.lineTo(295.5, 335.7);
        vaulter.lineTo(294.7, 337.6);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(58.4, 301.3);
        vaulter.bezierCurveTo(58.4, 301.3, 67.5, 311.8, 76.8, 313.9);
        vaulter.bezierCurveTo(78.1, 318.2, 78.0, 319.3, 78.8, 321.6);
        vaulter.bezierCurveTo(79.6, 323.8, 84.8, 327.9, 86.4, 334.0);
        vaulter.lineTo(87.1, 336.7);
        vaulter.bezierCurveTo(87.1, 336.7, 87.0, 338.2, 87.1, 339.2);
        vaulter.bezierCurveTo(87.3, 340.3, 88.6, 341.5, 90.0, 341.3);
        vaulter.bezierCurveTo(91.3, 341.2, 98.6, 340.9, 100.4, 341.4);
        vaulter.bezierCurveTo(102.2, 341.8, 103.7, 340.9, 103.9, 340.3);
        vaulter.bezierCurveTo(104.0, 339.7, 102.2, 337.6, 101.0, 337.6);
        vaulter.bezierCurveTo(99.8, 337.6, 94.7, 335.5, 93.0, 334.9);
        vaulter.bezierCurveTo(91.3, 334.3, 90.1, 331.9, 90.1, 331.9);
        vaulter.bezierCurveTo(90.1, 331.9, 87.9, 320.7, 86.1, 315.0);
        vaulter.bezierCurveTo(85.6, 313.5, 84.5, 312.2, 84.2, 311.8);
        vaulter.bezierCurveTo(84.0, 311.4, 82.3, 308.8, 81.6, 307.8);
        vaulter.bezierCurveTo(79.0, 303.9, 74.2, 297.5, 65.4, 292.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(59.6, 270.7);
        vaulter.bezierCurveTo(59.6, 270.7, 66.6, 270.3, 68.2, 269.8);
        vaulter.bezierCurveTo(69.7, 269.4, 75.8, 267.9, 78.4, 266.5);
        vaulter.bezierCurveTo(80.9, 265.0, 86.8, 259.1, 90.6, 257.7);
        vaulter.lineTo(93.7, 256.3);
        vaulter.lineTo(89.4, 254.9);
        vaulter.bezierCurveTo(89.4, 254.9, 82.9, 258.2, 81.1, 259.2);
        vaulter.bezierCurveTo(79.4, 260.3, 76.4, 262.8, 76.4, 262.8);
        vaulter.bezierCurveTo(76.4, 262.8, 66.1, 263.6, 65.0, 263.3);
        vaulter.bezierCurveTo(63.9, 263.1, 59.9, 262.8, 59.9, 262.8);
        vaulter.bezierCurveTo(59.9, 262.8, 56.3, 262.2, 54.9, 263.1);
        vaulter.bezierCurveTo(53.5, 264.0, 52.5, 267.5, 54.2, 269.5);
        vaulter.bezierCurveTo(55.9, 271.4, 59.6, 270.7, 59.6, 270.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.6, 263.2);
        vaulter.bezierCurveTo(60.6, 263.2, 63.0, 258.4, 63.0, 257.1);
        vaulter.bezierCurveTo(63.0, 255.9, 62.5, 251.4, 62.5, 251.4);
        vaulter.bezierCurveTo(62.5, 251.4, 60.7, 246.2, 55.9, 246.5);
        vaulter.bezierCurveTo(51.1, 246.7, 49.7, 252.4, 49.8, 254.7);
        vaulter.bezierCurveTo(50.0, 257.1, 52.5, 262.6, 52.5, 262.6);
        vaulter.bezierCurveTo(52.5, 262.6, 52.8, 264.3, 51.8, 264.7);
        vaulter.bezierCurveTo(51.0, 265.1, 50.8, 265.5, 50.8, 265.5);
        vaulter.bezierCurveTo(49.6, 269.2, 49.7, 271.1, 49.8, 274.2);
        vaulter.bezierCurveTo(49.9, 277.3, 53.1, 281.7, 53.1, 281.7);
        vaulter.bezierCurveTo(53.1, 281.7, 57.4, 289.0, 56.3, 292.7);
        vaulter.bezierCurveTo(54.8, 297.6, 55.6, 303.2, 55.6, 303.2);
        vaulter.lineTo(49.7, 319.3);
        vaulter.bezierCurveTo(47.3, 318.4, 38.4, 320.2, 35.8, 320.8);
        vaulter.bezierCurveTo(33.2, 321.4, 30.7, 319.3, 30.7, 319.3);
        vaulter.bezierCurveTo(30.7, 319.3, 28.1, 318.3, 27.2, 320.2);
        vaulter.bezierCurveTo(26.3, 322.2, 21.9, 326.6, 20.7, 327.8);
        vaulter.bezierCurveTo(19.5, 329.0, 18.1, 331.1, 18.1, 331.5);
        vaulter.bezierCurveTo(18.1, 332.0, 19.6, 332.0, 20.4, 331.5);
        vaulter.bezierCurveTo(21.1, 331.1, 22.7, 329.6, 24.9, 329.0);
        vaulter.bezierCurveTo(27.2, 328.4, 30.4, 326.1, 30.4, 326.1);
        vaulter.bezierCurveTo(37.6, 324.9, 51.3, 326.1, 53.1, 325.2);
        vaulter.bezierCurveTo(55.0, 324.3, 64.6, 312.5, 66.9, 304.2);
        vaulter.bezierCurveTo(69.1, 295.9, 67.8, 282.8, 67.8, 282.8);
        vaulter.bezierCurveTo(66.8, 271.9, 59.2, 264.8, 59.2, 264.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(55.8, 282.1);
        vaulter.bezierCurveTo(55.8, 282.1, 62.0, 281.0, 60.5, 273.2);
        vaulter.bezierCurveTo(59.1, 265.5, 55.4, 263.8, 53.4, 264.3);
        vaulter.bezierCurveTo(51.3, 264.7, 49.1, 269.3, 50.8, 274.4);
        vaulter.bezierCurveTo(52.4, 279.5, 53.1, 281.0, 55.8, 282.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(91.6, 253.6);
        vaulter.lineTo(90.8, 254.9);
        vaulter.bezierCurveTo(90.8, 254.9, 90.8, 256.2, 91.2, 256.3);
        vaulter.bezierCurveTo(91.6, 256.4, 94.2, 257.1, 94.2, 257.1);
        vaulter.lineTo(95.5, 255.4);
        vaulter.bezierCurveTo(95.5, 255.4, 93.6, 253.9, 93.1, 253.6);
        vaulter.bezierCurveTo(92.7, 253.3, 91.6, 253.6, 91.6, 253.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(49.8, 269.3);
        vaulter.bezierCurveTo(49.8, 269.3, 50.3, 267.0, 51.3, 265.9);
        vaulter.bezierCurveTo(52.3, 264.8, 53.8, 264.2, 54.9, 264.2);
        vaulter.lineTo(60.4, 259.2);
        vaulter.bezierCurveTo(60.4, 259.2, 60.7, 255.3, 61.2, 254.6);
        vaulter.bezierCurveTo(61.7, 253.9, 61.2, 249.3, 61.2, 249.3);
        vaulter.bezierCurveTo(61.2, 249.3, 59.0, 246.6, 58.9, 245.5);
        vaulter.bezierCurveTo(58.8, 244.4, 59.1, 241.6, 59.7, 241.1);
        vaulter.bezierCurveTo(60.3, 240.6, 62.1, 241.1, 62.1, 241.1);
        vaulter.bezierCurveTo(62.1, 241.1, 64.1, 243.5, 64.4, 244.9);
        vaulter.bezierCurveTo(64.7, 246.3, 64.4, 249.9, 64.4, 249.9);
        vaulter.lineTo(64.5, 257.5);
        vaulter.bezierCurveTo(64.5, 257.5, 65.5, 260.8, 64.5, 262.2);
        vaulter.bezierCurveTo(63.6, 263.6, 58.4, 268.7, 58.4, 268.7);
        vaulter.bezierCurveTo(58.4, 268.7, 58.3, 270.7, 56.9, 271.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(75.1, 288.6);
        vaulter.bezierCurveTo(76.2, 292.8, 82.3, 304.5, 84.4, 306.4);
        vaulter.bezierCurveTo(86.4, 308.2, 86.6, 312.2, 86.6, 312.2);
        vaulter.bezierCurveTo(86.4, 315.8, 89.8, 330.3, 90.0, 331.7);
        vaulter.bezierCurveTo(90.2, 333.1, 91.2, 336.8, 91.2, 336.8);
        vaulter.bezierCurveTo(92.8, 336.4, 96.9, 339.4, 99.6, 339.6);
        vaulter.bezierCurveTo(100.7, 339.6, 101.3, 341.8, 100.0, 342.0);
        vaulter.bezierCurveTo(100.0, 342.0, 91.2, 343.0, 90.0, 343.0);
        vaulter.bezierCurveTo(88.8, 343.0, 86.6, 342.0, 86.4, 340.8);
        vaulter.bezierCurveTo(86.2, 339.6, 87.2, 337.4, 87.2, 337.4);
        vaulter.bezierCurveTo(86.2, 334.0, 82.5, 325.7, 81.3, 323.7);
        vaulter.bezierCurveTo(80.1, 321.7, 80.1, 313.6, 80.1, 313.6);
        vaulter.bezierCurveTo(71.1, 307.2, 66.7, 298.1, 66.7, 298.1);
        vaulter.bezierCurveTo(65.6, 294.0, 68.0, 290.4, 69.0, 288.6);
        vaulter.bezierCurveTo(70.0, 286.9, 74.5, 286.6, 75.1, 288.6);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(69.9, 263.8);
        vaulter.lineTo(79.8, 261.7);
        vaulter.bezierCurveTo(79.8, 261.7, 81.8, 261.6, 83.0, 260.9);
        vaulter.bezierCurveTo(84.3, 260.1, 85.4, 258.9, 86.5, 257.7);
        vaulter.bezierCurveTo(89.1, 255.0, 91.0, 250.8, 92.6, 250.1);
        vaulter.bezierCurveTo(94.2, 249.3, 97.5, 247.9, 97.5, 247.9);
        vaulter.bezierCurveTo(97.5, 247.9, 97.5, 247.2, 96.0, 246.0);
        vaulter.bezierCurveTo(94.5, 244.8, 93.7, 244.7, 93.7, 244.7);
        vaulter.bezierCurveTo(93.7, 244.7, 91.2, 247.5, 90.4, 248.1);
        vaulter.bezierCurveTo(89.6, 248.7, 84.0, 253.0, 81.9, 255.9);
        vaulter.lineTo(68.5, 257.1);
        vaulter.bezierCurveTo(66.6, 257.4, 64.2, 258.9, 64.4, 260.8);
        vaulter.bezierCurveTo(64.5, 262.7, 66.3, 265.0, 69.9, 263.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(292.7, 343.0);
        vaulter.lineTo(55.7, 227.3);
        vaulter.bezierCurveTo(55.7, 227.3, 54.7, 226.7, 55.1, 225.9);
        vaulter.bezierCurveTo(55.6, 225.1, 56.6, 225.5, 56.6, 225.5);
        vaulter.lineTo(293.6, 341.2);
        vaulter.lineTo(292.7, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(69.1, 259.2);
        vaulter.bezierCurveTo(69.1, 259.2, 71.6, 254.4, 71.6, 253.2);
        vaulter.bezierCurveTo(71.6, 251.9, 71.1, 247.4, 71.1, 247.4);
        vaulter.bezierCurveTo(71.1, 247.4, 69.3, 242.2, 64.5, 242.5);
        vaulter.bezierCurveTo(59.7, 242.8, 58.3, 248.4, 58.4, 250.8);
        vaulter.bezierCurveTo(58.6, 253.1, 61.0, 258.7, 61.0, 258.7);
        vaulter.bezierCurveTo(61.0, 258.7, 61.3, 259.8, 60.8, 260.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(75.1, 288.6);
        vaulter.bezierCurveTo(74.5, 284.4, 72.9, 263.9, 72.9, 263.9);
        vaulter.bezierCurveTo(72.9, 263.9, 68.2, 256.4, 60.8, 260.1);
        vaulter.bezierCurveTo(59.6, 260.6, 58.0, 262.7, 58.4, 267.3);
        vaulter.bezierCurveTo(58.8, 271.9, 61.8, 275.2, 62.4, 278.0);
        vaulter.bezierCurveTo(63.0, 280.8, 62.8, 289.5, 62.8, 293.9);
        vaulter.bezierCurveTo(62.8, 293.9, 66.8, 299.2, 70.9, 298.6);
        vaulter.bezierCurveTo(74.9, 298.0, 75.1, 288.6, 75.1, 288.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(95.3, 243.5);
        vaulter.lineTo(95.3, 244.7);
        vaulter.bezierCurveTo(95.3, 244.7, 96.0, 246.4, 96.9, 246.8);
        vaulter.bezierCurveTo(97.7, 247.2, 98.6, 246.8, 98.8, 246.7);
        vaulter.bezierCurveTo(99.1, 246.5, 99.7, 245.0, 99.7, 245.0);
        vaulter.lineTo(98.5, 244.3);
        vaulter.lineTo(98.1, 243.2);
        vaulter.lineTo(96.7, 242.9);
        vaulter.lineTo(95.3, 243.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(75.1, 290.7);
        vaulter.bezierCurveTo(75.1, 290.7, 74.7, 317.4, 73.7, 319.8);
        vaulter.bezierCurveTo(72.7, 322.3, 68.6, 322.3, 66.4, 322.3);
        vaulter.bezierCurveTo(64.2, 322.3, 57.8, 318.2, 55.0, 317.4);
        vaulter.bezierCurveTo(52.1, 316.6, 47.1, 315.2, 45.9, 315.2);
        vaulter.bezierCurveTo(45.9, 315.2, 40.3, 314.6, 38.5, 314.6);
        vaulter.bezierCurveTo(36.6, 314.6, 33.4, 316.0, 32.6, 315.4);
        vaulter.bezierCurveTo(31.8, 314.8, 33.2, 313.0, 34.0, 312.6);
        vaulter.bezierCurveTo(34.8, 312.2, 42.9, 310.0, 43.3, 309.2);
        vaulter.bezierCurveTo(43.7, 308.4, 49.1, 305.8, 49.9, 306.5);
        vaulter.bezierCurveTo(50.7, 307.2, 51.9, 308.8, 51.7, 310.4);
        vaulter.bezierCurveTo(51.5, 312.0, 60.0, 313.6, 60.0, 313.6);
        vaulter.bezierCurveTo(60.0, 313.6, 65.4, 313.0, 66.4, 313.4);
        vaulter.bezierCurveTo(66.4, 313.4, 62.8, 298.3, 62.8, 293.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(64.4, 278.1);
        vaulter.bezierCurveTo(64.4, 278.1, 70.5, 277.0, 69.1, 269.2);
        vaulter.bezierCurveTo(67.7, 261.5, 64.0, 259.9, 62.0, 260.3);
        vaulter.bezierCurveTo(59.9, 260.7, 57.7, 265.3, 59.4, 270.4);
        vaulter.bezierCurveTo(61.0, 275.5, 61.7, 277.0, 64.4, 278.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(59.5, 268.0);
        vaulter.bezierCurveTo(59.5, 268.0, 58.1, 263.6, 61.3, 259.3);
        vaulter.bezierCurveTo(64.5, 254.9, 66.7, 251.0, 66.7, 251.0);
        vaulter.bezierCurveTo(66.7, 251.0, 67.4, 239.6, 66.7, 237.2);
        vaulter.bezierCurveTo(66.0, 234.8, 65.1, 231.0, 65.7, 229.8);
        vaulter.bezierCurveTo(66.3, 228.6, 66.9, 229.7, 67.6, 229.7);
        vaulter.bezierCurveTo(68.2, 229.7, 70.8, 230.9, 71.3, 231.9);
        vaulter.bezierCurveTo(71.7, 233.0, 72.0, 235.1, 71.3, 236.5);
        vaulter.bezierCurveTo(70.5, 237.8, 70.8, 243.0, 71.2, 244.7);
        vaulter.bezierCurveTo(71.5, 246.1, 72.9, 249.4, 72.4, 251.6);
        vaulter.bezierCurveTo(71.9, 253.4, 66.7, 265.9, 66.7, 265.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(74.5, 257.2);
        vaulter.lineTo(83.9, 253.5);
        vaulter.bezierCurveTo(83.9, 253.5, 85.8, 253.0, 86.9, 252.1);
        vaulter.bezierCurveTo(88.0, 251.2, 89.0, 249.8, 89.8, 248.5);
        vaulter.bezierCurveTo(91.9, 245.3, 93.0, 240.9, 94.5, 239.9);
        vaulter.bezierCurveTo(95.9, 238.9, 99.0, 236.9, 99.0, 236.9);
        vaulter.bezierCurveTo(99.0, 236.9, 98.8, 236.2, 97.2, 235.2);
        vaulter.bezierCurveTo(95.5, 234.3, 94.6, 234.4, 94.6, 234.4);
        vaulter.bezierCurveTo(94.6, 234.4, 92.7, 237.5, 92.0, 238.3);
        vaulter.bezierCurveTo(91.3, 239.0, 86.6, 244.2, 85.0, 247.5);
        vaulter.lineTo(72.0, 250.9);
        vaulter.bezierCurveTo(70.1, 251.5, 68.0, 253.4, 68.5, 255.3);
        vaulter.bezierCurveTo(69.0, 257.1, 71.1, 259.0, 74.5, 257.2);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(67.4, 286.1);
        vaulter.bezierCurveTo(67.4, 286.1, 66.8, 288.3, 67.4, 291.3);
        vaulter.bezierCurveTo(68.4, 295.6, 71.4, 301.8, 75.8, 306.9);
        vaulter.bezierCurveTo(75.8, 306.9, 73.9, 312.1, 73.9, 315.3);
        vaulter.bezierCurveTo(73.9, 318.6, 74.4, 328.5, 74.1, 330.0);
        vaulter.bezierCurveTo(74.1, 331.2, 73.5, 331.2, 73.3, 332.5);
        vaulter.bezierCurveTo(73.1, 333.5, 74.3, 334.4, 75.8, 334.5);
        vaulter.bezierCurveTo(77.3, 334.5, 81.8, 339.3, 81.8, 339.3);
        vaulter.bezierCurveTo(81.8, 339.3, 84.1, 340.6, 84.6, 339.7);
        vaulter.bezierCurveTo(85.3, 338.3, 83.0, 338.4, 82.2, 336.5);
        vaulter.bezierCurveTo(80.6, 333.3, 79.6, 331.8, 77.9, 330.4);
        vaulter.bezierCurveTo(77.9, 330.4, 82.8, 308.9, 82.6, 306.5);
        vaulter.bezierCurveTo(82.4, 304.1, 81.3, 290.4, 78.8, 285.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(293.0, 343.8);
        vaulter.lineTo(61.8, 217.1);
        vaulter.bezierCurveTo(61.8, 217.1, 60.8, 216.5, 61.3, 215.7);
        vaulter.bezierCurveTo(61.8, 214.9, 62.8, 215.4, 62.8, 215.4);
        vaulter.lineTo(294.0, 342.0);
        vaulter.lineTo(293.0, 343.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(75.2, 251.2);
        vaulter.bezierCurveTo(75.2, 251.2, 77.7, 246.4, 77.7, 245.2);
        vaulter.bezierCurveTo(77.7, 243.9, 77.1, 239.4, 77.1, 239.4);
        vaulter.bezierCurveTo(77.1, 239.4, 75.3, 234.2, 70.5, 234.5);
        vaulter.bezierCurveTo(65.7, 234.8, 64.3, 240.4, 64.5, 242.8);
        vaulter.bezierCurveTo(64.6, 245.1, 67.1, 250.7, 67.1, 250.7);
        vaulter.bezierCurveTo(67.1, 250.7, 67.7, 253.3, 65.3, 252.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(79.0, 282.5);
        vaulter.bezierCurveTo(78.4, 278.3, 76.8, 257.8, 76.8, 257.8);
        vaulter.bezierCurveTo(76.8, 257.8, 72.2, 250.3, 64.7, 254.0);
        vaulter.bezierCurveTo(63.6, 254.5, 61.9, 256.6, 62.3, 261.2);
        vaulter.bezierCurveTo(62.7, 265.8, 65.7, 269.0, 66.3, 271.9);
        vaulter.bezierCurveTo(66.9, 274.7, 66.7, 283.3, 66.7, 287.8);
        vaulter.bezierCurveTo(66.7, 287.8, 70.7, 293.1, 74.8, 292.5);
        vaulter.bezierCurveTo(78.8, 291.9, 79.0, 282.5, 79.0, 282.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(77.8, 283.0);
        vaulter.bezierCurveTo(77.8, 283.0, 86.5, 302.5, 86.7, 303.7);
        vaulter.bezierCurveTo(87.0, 305.1, 89.1, 309.6, 86.0, 312.2);
        vaulter.bezierCurveTo(83.3, 314.4, 77.2, 312.6, 75.7, 311.0);
        vaulter.bezierCurveTo(74.2, 309.3, 66.5, 304.6, 64.5, 304.1);
        vaulter.bezierCurveTo(62.4, 303.7, 54.2, 303.6, 52.5, 303.8);
        vaulter.bezierCurveTo(50.9, 303.9, 48.4, 304.1, 47.8, 303.2);
        vaulter.bezierCurveTo(47.2, 302.3, 50.2, 301.2, 51.1, 301.1);
        vaulter.bezierCurveTo(51.9, 300.9, 55.1, 299.6, 56.6, 298.2);
        vaulter.bezierCurveTo(58.1, 296.8, 61.0, 297.4, 61.4, 297.9);
        vaulter.bezierCurveTo(61.9, 298.4, 63.1, 299.9, 64.5, 300.2);
        vaulter.bezierCurveTo(65.6, 300.5, 73.2, 302.5, 77.1, 304.2);
        vaulter.bezierCurveTo(70.0, 297.6, 69.0, 296.0, 67.4, 291.3);
        vaulter.bezierCurveTo(65.9, 286.6, 67.4, 284.4, 67.4, 284.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(68.4, 270.1);
        vaulter.bezierCurveTo(68.4, 270.1, 74.5, 269.0, 73.1, 261.2);
        vaulter.bezierCurveTo(71.7, 253.5, 67.9, 251.9, 65.9, 252.3);
        vaulter.bezierCurveTo(63.9, 252.7, 61.7, 257.3, 63.3, 262.4);
        vaulter.bezierCurveTo(64.9, 267.5, 65.6, 269.0, 68.4, 270.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(63.9, 262.3);
        vaulter.bezierCurveTo(63.9, 262.3, 62.1, 258.1, 64.9, 253.4);
        vaulter.bezierCurveTo(67.6, 248.7, 69.9, 239.2, 69.9, 239.2);
        vaulter.bezierCurveTo(69.9, 239.2, 70.6, 227.9, 69.5, 225.6);
        vaulter.bezierCurveTo(68.5, 223.3, 67.1, 219.7, 67.5, 218.4);
        vaulter.bezierCurveTo(68.0, 217.1, 68.7, 218.1, 69.4, 218.0);
        vaulter.bezierCurveTo(70.0, 217.9, 72.7, 218.7, 73.3, 219.7);
        vaulter.bezierCurveTo(73.9, 220.7, 74.5, 222.8, 73.9, 224.2);
        vaulter.bezierCurveTo(73.4, 225.7, 74.4, 230.8, 74.9, 232.3);
        vaulter.bezierCurveTo(75.4, 233.7, 75.9, 236.8, 75.6, 239.1);
        vaulter.bezierCurveTo(75.4, 240.9, 71.2, 258.6, 71.2, 258.6);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(141.9, 239.5);
        vaulter.lineTo(141.9, 230.1);
        vaulter.lineTo(141.9, 220.4);
        vaulter.bezierCurveTo(141.9, 220.4, 141.0, 217.4, 141.9, 216.4);
        vaulter.bezierCurveTo(142.8, 215.3, 142.8, 213.2, 142.8, 213.2);
        vaulter.lineTo(139.0, 212.1);
        vaulter.lineTo(135.2, 212.1);
        vaulter.bezierCurveTo(135.2, 212.1, 134.7, 213.3, 134.8, 213.8);
        vaulter.bezierCurveTo(134.9, 214.2, 137.6, 215.5, 137.6, 215.5);
        vaulter.bezierCurveTo(137.6, 215.5, 138.5, 216.5, 137.6, 220.4);
        vaulter.lineTo(135.2, 230.9);
        vaulter.lineTo(134.8, 239.3);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(291.8, 343.0);
        vaulter.bezierCurveTo(287.4, 319.9, 283.6, 307.1, 273.1, 290.6);
        vaulter.bezierCurveTo(263.5, 275.5, 245.7, 254.1, 215.2, 237.9);
        vaulter.bezierCurveTo(184.8, 221.7, 153.3, 215.7, 132.2, 213.6);
        vaulter.bezierCurveTo(109.3, 211.4, 93.4, 212.9, 93.3, 213.0);
        vaulter.bezierCurveTo(93.3, 213.0, 92.4, 212.9, 92.3, 212.0);
        vaulter.bezierCurveTo(92.3, 211.2, 93.0, 211.0, 93.0, 211.0);
        vaulter.bezierCurveTo(93.2, 211.0, 109.2, 209.3, 132.4, 211.7);
        vaulter.bezierCurveTo(153.7, 213.8, 185.5, 219.7, 216.2, 236.1);
        vaulter.bezierCurveTo(247.0, 252.5, 265.1, 274.2, 274.8, 289.5);
        vaulter.bezierCurveTo(285.5, 306.3, 289.3, 319.3, 293.7, 342.6);
        vaulter.lineTo(291.8, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(135.4, 266.5);
        vaulter.bezierCurveTo(135.4, 264.7, 136.1, 262.0, 138.1, 259.8);
        vaulter.bezierCurveTo(138.1, 259.8, 137.5, 253.9, 136.2, 251.6);
        vaulter.bezierCurveTo(135.0, 249.2, 129.4, 242.2, 129.7, 239.4);
        vaulter.bezierCurveTo(129.9, 236.6, 132.2, 234.5, 133.3, 233.9);
        vaulter.bezierCurveTo(134.4, 233.3, 138.1, 233.4, 138.1, 233.4);
        vaulter.bezierCurveTo(138.1, 233.4, 150.6, 243.8, 148.3, 259.1);
        vaulter.bezierCurveTo(146.0, 274.5, 135.4, 287.5, 133.9, 289.6);
        vaulter.bezierCurveTo(132.5, 291.6, 123.5, 294.1, 120.8, 294.9);
        vaulter.bezierCurveTo(118.1, 295.8, 113.0, 300.5, 112.0, 301.6);
        vaulter.bezierCurveTo(111.0, 302.7, 109.4, 307.2, 109.0, 308.6);
        vaulter.bezierCurveTo(108.5, 309.9, 107.1, 312.7, 106.0, 312.7);
        vaulter.bezierCurveTo(104.9, 312.7, 104.3, 311.6, 104.3, 311.6);
        vaulter.lineTo(106.8, 296.7);
        vaulter.bezierCurveTo(106.8, 296.7, 107.9, 295.5, 108.8, 295.8);
        vaulter.bezierCurveTo(109.8, 296.0, 111.3, 296.0, 112.9, 294.9);
        vaulter.bezierCurveTo(114.4, 293.8, 123.0, 285.9, 125.9, 284.6);
        vaulter.bezierCurveTo(128.8, 283.2, 129.3, 284.0, 129.3, 284.0);
        vaulter.bezierCurveTo(129.3, 284.0, 133.9, 270.2, 135.4, 266.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(136.2, 251.6);
        vaulter.bezierCurveTo(136.5, 252.0, 136.7, 252.5, 136.8, 253.1);
        vaulter.bezierCurveTo(137.2, 253.2, 137.5, 253.3, 137.9, 253.3);
        vaulter.bezierCurveTo(137.9, 253.3, 144.7, 249.9, 141.3, 242.8);
        vaulter.bezierCurveTo(137.9, 235.7, 132.7, 235.8, 130.9, 236.8);
        vaulter.bezierCurveTo(130.6, 236.9, 130.4, 237.1, 130.2, 237.4);
        vaulter.bezierCurveTo(129.9, 238.0, 129.7, 238.7, 129.7, 239.4);
        vaulter.bezierCurveTo(129.4, 242.2, 135.0, 249.2, 136.2, 251.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(136.6, 267.8);
        vaulter.bezierCurveTo(136.6, 267.8, 137.2, 271.6, 141.7, 273.1);
        vaulter.bezierCurveTo(146.2, 274.5, 156.3, 274.3, 158.3, 275.1);
        vaulter.bezierCurveTo(158.3, 275.1, 156.6, 278.0, 156.3, 281.4);
        vaulter.bezierCurveTo(156.1, 284.8, 151.1, 292.8, 151.1, 292.8);
        vaulter.bezierCurveTo(151.1, 292.8, 149.6, 293.6, 149.4, 294.1);
        vaulter.bezierCurveTo(149.1, 294.6, 148.3, 297.0, 149.9, 297.7);
        vaulter.bezierCurveTo(151.5, 298.4, 156.6, 302.1, 157.4, 302.8);
        vaulter.bezierCurveTo(158.3, 303.5, 160.4, 304.7, 160.9, 304.2);
        vaulter.bezierCurveTo(161.5, 303.7, 159.8, 301.0, 158.8, 300.1);
        vaulter.bezierCurveTo(158.0, 299.5, 155.3, 295.2, 155.2, 294.9);
        vaulter.bezierCurveTo(155.0, 294.5, 157.2, 289.7, 159.0, 288.1);
        vaulter.bezierCurveTo(160.8, 286.5, 167.7, 276.3, 168.1, 275.3);
        vaulter.bezierCurveTo(168.5, 274.3, 168.1, 272.5, 166.4, 271.2);
        vaulter.bezierCurveTo(164.8, 269.9, 161.9, 267.8, 161.9, 267.8);
        vaulter.bezierCurveTo(161.9, 267.8, 150.3, 262.1, 148.6, 261.5);
        vaulter.bezierCurveTo(147.4, 261.1, 146.8, 260.0, 146.8, 260.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(141.0, 234.4);
        vaulter.bezierCurveTo(141.0, 234.4, 143.5, 229.6, 143.5, 228.4);
        vaulter.bezierCurveTo(143.5, 227.1, 142.9, 222.6, 142.9, 222.6);
        vaulter.bezierCurveTo(142.9, 222.6, 141.1, 217.4, 136.3, 217.7);
        vaulter.bezierCurveTo(131.5, 218.0, 130.1, 223.6, 130.3, 226.0);
        vaulter.bezierCurveTo(130.4, 228.3, 132.9, 233.9, 132.9, 233.9);
        vaulter.bezierCurveTo(132.9, 233.9, 133.4, 236.5, 131.1, 235.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(130.6, 241.4);
        vaulter.bezierCurveTo(130.6, 241.4, 127.2, 237.4, 124.5, 232.5);
        vaulter.bezierCurveTo(121.8, 227.6, 120.1, 226.8, 120.1, 226.8);
        vaulter.bezierCurveTo(116.7, 224.7, 106.5, 217.0, 106.5, 217.0);
        vaulter.lineTo(102.8, 211.9);
        vaulter.lineTo(108.1, 210.8);
        vaulter.lineTo(109.6, 215.5);
        vaulter.bezierCurveTo(109.6, 215.5, 116.7, 220.5, 119.9, 221.4);
        vaulter.bezierCurveTo(123.1, 222.3, 128.1, 228.7, 128.1, 228.7);
        vaulter.bezierCurveTo(128.1, 228.7, 134.7, 237.1, 135.9, 237.6);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(293.8, 343.0);
        vaulter.lineTo(291.8, 343.0);
        vaulter.bezierCurveTo(291.8, 333.4, 288.9, 313.8, 281.7, 293.8);
        vaulter.bezierCurveTo(273.2, 269.9, 255.8, 249.8, 227.0, 230.5);
        vaulter.bezierCurveTo(195.8, 209.6, 163.4, 204.9, 141.8, 204.7);
        vaulter.bezierCurveTo(118.4, 204.5, 102.1, 209.3, 101.9, 209.3);
        vaulter.bezierCurveTo(101.9, 209.3, 101.0, 209.4, 100.8, 208.6);
        vaulter.bezierCurveTo(100.5, 207.7, 101.4, 207.4, 101.4, 207.4);
        vaulter.bezierCurveTo(101.5, 207.4, 118.1, 202.5, 141.8, 202.7);
        vaulter.bezierCurveTo(163.7, 202.9, 196.5, 207.6, 228.1, 228.8);
        vaulter.bezierCurveTo(257.3, 248.4, 275.0, 268.8, 283.6, 293.1);
        vaulter.bezierCurveTo(290.8, 313.4, 293.8, 333.3, 293.8, 343.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(152.1, 229.0);
        vaulter.bezierCurveTo(152.1, 229.0, 153.4, 223.7, 153.0, 222.2);
        vaulter.lineTo(154.2, 215.1);
        vaulter.bezierCurveTo(154.2, 215.1, 152.5, 211.0, 152.1, 210.1);
        vaulter.bezierCurveTo(151.6, 209.2, 148.7, 206.5, 149.2, 205.7);
        vaulter.bezierCurveTo(149.7, 205.0, 149.9, 202.1, 149.1, 201.9);
        vaulter.bezierCurveTo(148.4, 201.8, 145.7, 201.3, 145.7, 201.3);
        vaulter.lineTo(143.2, 201.9);
        vaulter.bezierCurveTo(143.2, 201.9, 141.7, 204.1, 142.3, 204.5);
        vaulter.bezierCurveTo(142.9, 205.0, 144.1, 205.7, 144.1, 205.7);
        vaulter.bezierCurveTo(144.1, 205.7, 146.3, 206.3, 147.0, 207.2);
        vaulter.bezierCurveTo(147.8, 208.1, 148.3, 214.0, 149.2, 215.2);
        vaulter.bezierCurveTo(149.2, 215.2, 147.8, 221.7, 146.6, 222.6);
        vaulter.bezierCurveTo(145.4, 223.6, 143.6, 226.6, 143.9, 227.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(167.5, 253.6);
        vaulter.bezierCurveTo(167.5, 253.6, 166.5, 243.7, 162.6, 236.5);
        vaulter.bezierCurveTo(158.8, 229.2, 152.6, 225.8, 148.7, 225.4);
        vaulter.bezierCurveTo(144.9, 225.0, 142.5, 226.4, 141.5, 227.6);
        vaulter.bezierCurveTo(140.5, 228.8, 140.8, 231.2, 141.5, 232.2);
        vaulter.bezierCurveTo(144.7, 237.1, 150.6, 240.3, 154.4, 244.9);
        vaulter.bezierCurveTo(155.4, 246.0, 155.7, 248.7, 155.9, 250.8);
        vaulter.bezierCurveTo(154.8, 252.8, 151.0, 261.1, 150.6, 274.0);
        vaulter.bezierCurveTo(150.6, 274.0, 138.5, 275.6, 133.0, 280.6);
        vaulter.bezierCurveTo(133.0, 280.6, 131.2, 279.1, 130.6, 279.1);
        vaulter.bezierCurveTo(130.0, 279.1, 128.2, 280.6, 127.8, 281.8);
        vaulter.bezierCurveTo(127.3, 283.0, 124.1, 291.9, 123.5, 292.8);
        vaulter.bezierCurveTo(122.9, 293.7, 124.6, 294.5, 125.0, 294.5);
        vaulter.bezierCurveTo(125.5, 294.5, 130.6, 288.6, 132.0, 285.9);
        vaulter.bezierCurveTo(132.0, 285.9, 142.6, 280.7, 147.2, 281.3);
        vaulter.bezierCurveTo(151.9, 281.9, 155.2, 279.7, 155.2, 279.7);
        vaulter.bezierCurveTo(155.2, 279.7, 160.5, 273.3, 164.4, 260.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(151.6, 227.2);
        vaulter.bezierCurveTo(151.6, 227.2, 155.2, 220.1, 155.2, 218.9);
        vaulter.bezierCurveTo(155.2, 217.6, 154.7, 213.1, 154.7, 213.1);
        vaulter.bezierCurveTo(154.7, 213.1, 152.9, 207.9, 148.1, 208.2);
        vaulter.bezierCurveTo(143.3, 208.5, 141.9, 214.1, 142.0, 216.5);
        vaulter.bezierCurveTo(142.2, 218.8, 144.6, 224.4, 144.6, 224.4);
        vaulter.bezierCurveTo(144.6, 224.4, 145.2, 227.0, 142.9, 226.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(154.0, 242.8);
        vaulter.bezierCurveTo(154.0, 242.8, 159.1, 239.1, 154.5, 232.7);
        vaulter.bezierCurveTo(149.9, 226.3, 145.8, 226.5, 144.1, 227.8);
        vaulter.bezierCurveTo(142.8, 228.8, 142.6, 232.3, 144.5, 235.7);
        vaulter.bezierCurveTo(146.9, 238.1, 149.9, 240.3, 152.4, 242.7);
        vaulter.bezierCurveTo(152.9, 242.8, 153.5, 242.8, 154.0, 242.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(143.9, 233.9);
        vaulter.bezierCurveTo(143.9, 233.9, 139.8, 230.3, 137.4, 225.3);
        vaulter.bezierCurveTo(137.4, 225.3, 127.9, 219.5, 126.7, 218.6);
        vaulter.bezierCurveTo(125.5, 217.6, 117.7, 210.7, 115.4, 209.5);
        vaulter.bezierCurveTo(113.1, 208.3, 111.4, 206.3, 112.0, 205.2);
        vaulter.bezierCurveTo(112.7, 204.1, 115.4, 202.8, 115.4, 202.8);
        vaulter.bezierCurveTo(115.4, 202.8, 118.7, 203.2, 119.3, 204.1);
        vaulter.bezierCurveTo(119.9, 205.0, 118.9, 207.8, 118.9, 207.8);
        vaulter.bezierCurveTo(118.9, 207.8, 124.1, 211.1, 127.2, 212.3);
        vaulter.bezierCurveTo(130.2, 213.6, 131.2, 215.5, 131.2, 215.5);
        vaulter.lineTo(140.9, 221.9);
        vaulter.bezierCurveTo(140.9, 221.9, 148.6, 225.2, 150.6, 228.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(155.6, 251.4);
        vaulter.bezierCurveTo(155.6, 251.4, 154.2, 254.7, 154.5, 257.5);
        vaulter.bezierCurveTo(154.6, 258.9, 155.9, 260.4, 156.9, 261.2);
        vaulter.bezierCurveTo(159.9, 263.4, 163.6, 264.0, 167.5, 264.8);
        vaulter.bezierCurveTo(171.3, 265.6, 175.9, 268.9, 175.9, 268.9);
        vaulter.bezierCurveTo(175.9, 268.9, 174.3, 275.7, 174.5, 277.7);
        vaulter.bezierCurveTo(174.7, 279.7, 171.8, 289.6, 171.4, 291.0);
        vaulter.bezierCurveTo(171.2, 291.5, 170.7, 291.7, 170.6, 292.1);
        vaulter.bezierCurveTo(170.3, 292.7, 170.4, 293.2, 170.8, 293.6);
        vaulter.bezierCurveTo(171.4, 294.2, 176.2, 296.3, 179.6, 298.6);
        vaulter.bezierCurveTo(180.8, 299.5, 184.1, 299.7, 183.7, 298.6);
        vaulter.bezierCurveTo(183.3, 297.7, 181.5, 297.3, 180.7, 296.1);
        vaulter.bezierCurveTo(178.9, 293.4, 176.5, 290.6, 176.5, 290.6);
        vaulter.bezierCurveTo(176.5, 290.6, 182.6, 272.9, 183.0, 269.9);
        vaulter.bezierCurveTo(183.4, 266.9, 179.1, 260.0, 175.1, 257.2);
        vaulter.bezierCurveTo(172.1, 255.1, 168.7, 253.7, 166.6, 252.1);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(178.3, 248.2);
        vaulter.bezierCurveTo(178.5, 251.1, 176.5, 263.2, 176.7, 264.4);
        vaulter.bezierCurveTo(176.8, 265.6, 176.1, 268.3, 174.9, 270.1);
        vaulter.bezierCurveTo(173.7, 271.9, 165.4, 275.1, 162.2, 276.0);
        vaulter.bezierCurveTo(159.0, 276.9, 153.6, 280.7, 153.6, 280.7);
        vaulter.bezierCurveTo(153.4, 281.9, 150.9, 286.7, 150.9, 286.7);
        vaulter.bezierCurveTo(150.9, 286.7, 150.3, 289.9, 149.7, 289.9);
        vaulter.bezierCurveTo(149.1, 289.9, 148.5, 288.7, 148.5, 288.7);
        vaulter.bezierCurveTo(148.5, 288.7, 148.3, 285.4, 148.5, 284.5);
        vaulter.bezierCurveTo(148.6, 283.6, 148.5, 278.6, 148.5, 278.6);
        vaulter.bezierCurveTo(148.5, 278.6, 149.7, 276.2, 150.7, 276.5);
        vaulter.bezierCurveTo(151.8, 276.8, 152.5, 276.5, 152.5, 276.5);
        vaulter.bezierCurveTo(154.7, 276.0, 160.2, 271.8, 161.9, 270.0);
        vaulter.bezierCurveTo(163.6, 268.2, 169.9, 264.4, 169.9, 264.4);
        vaulter.bezierCurveTo(168.1, 254.3, 168.2, 244.6, 168.2, 244.6);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(154.2, 220.3);
        vaulter.bezierCurveTo(154.2, 218.1, 155.0, 216.2, 155.9, 215.5);
        vaulter.bezierCurveTo(155.8, 214.1, 156.4, 206.8, 156.4, 206.8);
        vaulter.bezierCurveTo(155.7, 205.9, 156.4, 203.7, 156.4, 202.7);
        vaulter.bezierCurveTo(156.4, 201.6, 154.8, 198.0, 154.8, 198.0);
        vaulter.bezierCurveTo(154.8, 198.0, 155.3, 197.4, 156.3, 197.1);
        vaulter.bezierCurveTo(157.3, 196.9, 158.1, 197.1, 158.1, 197.1);
        vaulter.bezierCurveTo(158.1, 197.1, 159.5, 201.9, 159.9, 203.7);
        vaulter.bezierCurveTo(160.3, 205.5, 161.5, 208.3, 161.0, 209.4);
        vaulter.lineTo(160.5, 215.3);
        vaulter.bezierCurveTo(160.5, 215.3, 162.7, 218.4, 163.0, 221.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(293.8, 343.0);
        vaulter.lineTo(291.8, 343.0);
        vaulter.bezierCurveTo(291.8, 313.1, 289.0, 294.7, 282.1, 278.7);
        vaulter.bezierCurveTo(274.6, 261.7, 259.8, 237.5, 230.9, 219.1);
        vaulter.bezierCurveTo(202.0, 200.7, 171.1, 198.1, 150.3, 199.1);
        vaulter.bezierCurveTo(128.0, 200.2, 112.3, 205.6, 111.6, 205.8);
        vaulter.bezierCurveTo(111.6, 205.8, 110.5, 206.1, 110.2, 205.2);
        vaulter.bezierCurveTo(109.9, 204.3, 111.0, 203.9, 111.0, 203.9);
        vaulter.bezierCurveTo(111.6, 203.7, 127.6, 198.2, 150.2, 197.1);
        vaulter.bezierCurveTo(171.3, 196.0, 202.7, 198.7, 232.0, 217.4);
        vaulter.bezierCurveTo(261.3, 236.1, 276.4, 260.6, 283.9, 277.9);
        vaulter.bezierCurveTo(291.0, 294.1, 293.8, 312.8, 293.8, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(168.0, 243.8);
        vaulter.bezierCurveTo(168.0, 243.8, 168.0, 242.3, 167.2, 241.0);
        vaulter.bezierCurveTo(166.3, 239.7, 158.7, 233.7, 155.9, 232.3);
        vaulter.bezierCurveTo(154.2, 231.5, 151.1, 228.4, 148.8, 225.6);
        vaulter.bezierCurveTo(146.8, 223.3, 149.6, 220.9, 151.5, 219.8);
        vaulter.bezierCurveTo(153.4, 218.7, 157.7, 218.8, 157.7, 218.8);
        vaulter.bezierCurveTo(161.9, 219.6, 169.4, 224.6, 174.2, 229.4);
        vaulter.bezierCurveTo(179.1, 234.3, 178.4, 243.8, 178.4, 243.8);
        vaulter.bezierCurveTo(178.4, 245.7, 175.3, 246.7, 173.4, 246.7);
        vaulter.bezierCurveTo(171.6, 246.7, 168.1, 245.1, 168.0, 243.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(158.9, 218.1);
        vaulter.bezierCurveTo(159.7, 216.0, 160.9, 212.5, 160.9, 211.7);
        vaulter.bezierCurveTo(160.8, 210.6, 159.9, 206.6, 159.9, 206.6);
        vaulter.bezierCurveTo(159.9, 206.6, 157.8, 202.1, 153.5, 202.7);
        vaulter.bezierCurveTo(149.3, 203.4, 148.5, 208.6, 148.8, 210.7);
        vaulter.bezierCurveTo(149.2, 212.8, 151.9, 217.5, 151.9, 217.5);
        vaulter.bezierCurveTo(151.9, 217.5, 152.2, 219.2, 151.9, 220.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(162.7, 235.7);
        vaulter.bezierCurveTo(162.7, 235.7, 167.3, 231.6, 162.1, 225.6);
        vaulter.bezierCurveTo(156.9, 219.7, 152.9, 220.3, 151.4, 221.7);
        vaulter.bezierCurveTo(150.1, 222.8, 150.2, 226.4, 152.4, 229.5);
        vaulter.bezierCurveTo(155.1, 231.7, 158.3, 233.6, 161.0, 235.8);
        vaulter.bezierCurveTo(161.5, 235.8, 162.1, 235.8, 162.7, 235.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(148.8, 225.6);
        vaulter.bezierCurveTo(147.2, 223.9, 146.0, 222.4, 145.5, 221.8);
        vaulter.bezierCurveTo(145.5, 221.8, 136.2, 214.2, 135.5, 213.6);
        vaulter.bezierCurveTo(134.8, 213.0, 127.4, 208.4, 125.5, 205.8);
        vaulter.bezierCurveTo(122.8, 204.6, 121.1, 203.5, 120.9, 202.7);
        vaulter.bezierCurveTo(120.7, 201.9, 121.6, 200.4, 122.4, 199.9);
        vaulter.bezierCurveTo(123.2, 199.4, 126.7, 199.9, 126.7, 199.9);
        vaulter.bezierCurveTo(126.7, 199.9, 127.9, 201.6, 127.7, 202.1);
        vaulter.bezierCurveTo(127.5, 202.5, 127.3, 204.7, 127.9, 205.0);
        vaulter.bezierCurveTo(128.5, 205.3, 136.7, 209.0, 137.8, 210.0);
        vaulter.bezierCurveTo(138.9, 211.0, 145.1, 213.7, 148.4, 216.7);
        vaulter.bezierCurveTo(148.4, 216.7, 155.0, 220.2, 157.3, 221.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(167.6, 243.0);
        vaulter.bezierCurveTo(167.6, 243.0, 166.0, 249.1, 168.8, 251.6);
        vaulter.bezierCurveTo(170.8, 253.2, 174.9, 255.2, 178.7, 256.4);
        vaulter.bezierCurveTo(182.4, 257.6, 186.6, 263.2, 186.6, 263.2);
        vaulter.bezierCurveTo(186.6, 263.2, 185.6, 271.2, 186.6, 272.7);
        vaulter.bezierCurveTo(187.7, 274.2, 188.6, 284.6, 188.2, 285.5);
        vaulter.bezierCurveTo(187.7, 286.4, 187.2, 287.3, 188.3, 287.8);
        vaulter.bezierCurveTo(189.4, 288.2, 193.3, 288.2, 194.2, 288.8);
        vaulter.bezierCurveTo(195.1, 289.4, 198.4, 289.0, 199.0, 288.8);
        vaulter.bezierCurveTo(199.6, 288.7, 197.8, 286.7, 196.9, 286.7);
        vaulter.bezierCurveTo(196.0, 286.7, 192.2, 284.5, 191.8, 283.9);
        vaulter.bezierCurveTo(191.3, 283.3, 192.5, 273.6, 193.1, 270.6);
        vaulter.bezierCurveTo(193.7, 267.6, 194.0, 261.7, 193.1, 259.4);
        vaulter.bezierCurveTo(192.2, 257.1, 177.9, 239.6, 177.9, 239.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(154.2, 198.0);
        vaulter.bezierCurveTo(154.2, 198.0, 156.9, 198.5, 157.7, 198.5);
        vaulter.bezierCurveTo(158.5, 198.5, 158.6, 197.7, 158.7, 197.0);
        vaulter.bezierCurveTo(158.8, 196.3, 158.4, 195.7, 157.7, 195.7);
        vaulter.bezierCurveTo(157.0, 195.7, 155.6, 195.7, 155.6, 195.7);
        vaulter.bezierCurveTo(155.6, 195.7, 153.7, 196.4, 153.2, 196.8);
        vaulter.bezierCurveTo(152.7, 197.2, 154.2, 198.0, 154.2, 198.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(190.6, 238.0);
        vaulter.bezierCurveTo(190.6, 238.0, 202.3, 249.0, 209.6, 252.9);
        vaulter.bezierCurveTo(209.6, 252.9, 212.0, 257.9, 215.3, 259.8);
        vaulter.bezierCurveTo(218.7, 261.7, 223.8, 269.3, 223.8, 269.3);
        vaulter.bezierCurveTo(223.8, 269.3, 224.6, 271.2, 225.4, 271.0);
        vaulter.bezierCurveTo(226.2, 270.9, 230.0, 269.9, 230.0, 269.9);
        vaulter.lineTo(235.7, 268.3);
        vaulter.bezierCurveTo(235.7, 268.3, 236.8, 267.1, 236.4, 266.7);
        vaulter.bezierCurveTo(235.4, 265.9, 232.6, 266.2, 232.6, 266.2);
        vaulter.bezierCurveTo(232.6, 266.2, 229.7, 265.3, 227.1, 265.8);
        vaulter.bezierCurveTo(227.1, 265.8, 214.4, 249.7, 214.1, 249.3);
        vaulter.bezierCurveTo(213.4, 247.5, 208.1, 238.9, 200.5, 229.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.5, 212.6);
        vaulter.bezierCurveTo(180.5, 212.6, 180.4, 206.8, 181.3, 204.4);
        vaulter.bezierCurveTo(181.3, 204.4, 183.8, 198.9, 184.0, 197.6);
        vaulter.bezierCurveTo(184.1, 196.2, 184.9, 192.6, 184.0, 190.6);
        vaulter.bezierCurveTo(183.1, 188.7, 181.7, 182.0, 181.7, 182.0);
        vaulter.lineTo(181.6, 179.9);
        vaulter.bezierCurveTo(181.6, 179.9, 177.9, 180.4, 177.0, 180.7);
        vaulter.bezierCurveTo(177.0, 180.7, 179.3, 187.8, 179.3, 189.9);
        vaulter.bezierCurveTo(179.3, 192.0, 179.0, 196.2, 179.0, 196.2);
        vaulter.bezierCurveTo(179.0, 196.2, 176.4, 199.7, 176.7, 202.9);
        vaulter.bezierCurveTo(175.4, 203.6, 171.9, 211.2, 171.9, 211.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(178.2, 182.0);
        vaulter.lineTo(176.7, 181.3);
        vaulter.bezierCurveTo(176.7, 181.3, 176.1, 178.7, 176.7, 178.3);
        vaulter.bezierCurveTo(177.3, 177.8, 181.1, 177.5, 181.1, 177.5);
        vaulter.bezierCurveTo(181.1, 177.5, 182.6, 178.4, 182.5, 178.9);
        vaulter.bezierCurveTo(182.3, 179.3, 181.7, 182.0, 181.7, 182.0);
        vaulter.lineTo(178.2, 182.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(293.8, 343.0);
        vaulter.lineTo(291.8, 343.0);
        vaulter.lineTo(291.8, 342.1);
        vaulter.bezierCurveTo(291.8, 305.3, 290.0, 279.9, 286.6, 266.9);
        vaulter.bezierCurveTo(281.6, 247.7, 270.6, 220.6, 246.7, 200.7);
        vaulter.bezierCurveTo(222.7, 180.9, 194.8, 179.2, 175.5, 181.2);
        vaulter.bezierCurveTo(154.6, 183.4, 139.3, 190.4, 139.1, 190.5);
        vaulter.bezierCurveTo(139.1, 190.5, 138.2, 190.7, 137.8, 189.9);
        vaulter.bezierCurveTo(137.4, 189.1, 138.3, 188.7, 138.3, 188.7);
        vaulter.bezierCurveTo(138.5, 188.6, 154.2, 181.5, 175.3, 179.2);
        vaulter.bezierCurveTo(194.9, 177.2, 223.5, 178.9, 247.9, 199.2);
        vaulter.bezierCurveTo(272.3, 219.4, 283.4, 246.9, 288.5, 266.4);
        vaulter.bezierCurveTo(291.9, 279.6, 293.8, 305.1, 293.8, 342.1);
        vaulter.lineTo(293.8, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(179.1, 210.6);
        vaulter.bezierCurveTo(179.1, 210.6, 177.6, 204.6, 176.8, 203.8);
        vaulter.bezierCurveTo(176.1, 203.0, 173.1, 200.2, 173.1, 200.2);
        vaulter.bezierCurveTo(173.1, 200.2, 168.8, 197.7, 165.7, 200.7);
        vaulter.bezierCurveTo(162.6, 203.7, 165.0, 208.4, 166.4, 209.9);
        vaulter.bezierCurveTo(167.9, 211.4, 172.9, 213.8, 172.9, 213.8);
        vaulter.bezierCurveTo(172.9, 213.8, 174.3, 214.8, 173.8, 218.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(181.8, 211.4);
        vaulter.bezierCurveTo(180.4, 210.7, 177.6, 211.6, 176.3, 212.6);
        vaulter.bezierCurveTo(175.0, 213.5, 172.9, 217.2, 173.5, 218.8);
        vaulter.bezierCurveTo(174.0, 220.4, 173.5, 221.7, 177.1, 223.7);
        vaulter.bezierCurveTo(180.7, 225.7, 188.1, 232.6, 189.4, 234.5);
        vaulter.bezierCurveTo(190.7, 236.3, 196.3, 232.8, 196.3, 232.8);
        vaulter.bezierCurveTo(196.3, 232.8, 198.5, 229.0, 198.3, 228.3);
        vaulter.bezierCurveTo(198.1, 227.5, 191.8, 219.2, 190.0, 217.5);
        vaulter.bezierCurveTo(186.4, 214.3, 181.8, 211.4, 181.8, 211.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(189.5, 234.5);
        vaulter.bezierCurveTo(189.5, 236.5, 190.4, 238.6, 192.6, 239.5);
        vaulter.bezierCurveTo(195.3, 240.7, 204.8, 240.0, 206.6, 239.5);
        vaulter.bezierCurveTo(208.4, 239.1, 215.2, 239.1, 215.2, 239.1);
        vaulter.bezierCurveTo(215.2, 239.1, 218.0, 244.5, 219.9, 246.6);
        vaulter.bezierCurveTo(221.9, 248.7, 223.4, 255.5, 223.4, 255.5);
        vaulter.bezierCurveTo(223.4, 255.5, 223.4, 258.3, 224.6, 258.6);
        vaulter.bezierCurveTo(225.8, 258.9, 227.6, 258.6, 230.0, 257.3);
        vaulter.bezierCurveTo(232.4, 256.1, 234.6, 255.7, 235.0, 255.4);
        vaulter.bezierCurveTo(236.3, 254.5, 235.6, 253.1, 234.3, 252.7);
        vaulter.bezierCurveTo(233.5, 252.5, 231.2, 252.9, 231.2, 252.9);
        vaulter.bezierCurveTo(231.2, 252.9, 228.1, 252.4, 226.6, 252.6);
        vaulter.bezierCurveTo(225.1, 252.7, 222.8, 237.2, 222.0, 235.9);
        vaulter.bezierCurveTo(220.4, 233.3, 217.6, 231.0, 215.9, 230.7);
        vaulter.bezierCurveTo(212.6, 230.0, 200.3, 228.4, 198.3, 228.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(183.2, 226.8);
        vaulter.bezierCurveTo(183.2, 226.8, 189.9, 223.7, 184.7, 217.8);
        vaulter.bezierCurveTo(179.5, 211.9, 176.0, 213.1, 174.5, 214.5);
        vaulter.bezierCurveTo(173.3, 215.6, 173.4, 219.2, 175.6, 222.4);
        vaulter.bezierCurveTo(178.3, 224.5, 178.8, 224.7, 181.6, 226.9);
        vaulter.bezierCurveTo(182.1, 226.9, 182.6, 226.9, 183.2, 226.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(176.1, 221.4);
        vaulter.bezierCurveTo(176.1, 221.4, 172.8, 218.7, 171.0, 216.1);
        vaulter.bezierCurveTo(169.2, 213.6, 167.1, 206.5, 167.1, 206.5);
        vaulter.bezierCurveTo(167.1, 206.5, 162.1, 202.3, 159.8, 197.9);
        vaulter.bezierCurveTo(159.8, 197.9, 157.1, 194.3, 156.2, 192.3);
        vaulter.bezierCurveTo(155.3, 190.3, 150.9, 187.3, 150.9, 187.3);
        vaulter.bezierCurveTo(150.9, 187.3, 148.8, 186.3, 148.4, 186.0);
        vaulter.bezierCurveTo(147.9, 185.7, 148.4, 183.2, 148.4, 183.2);
        vaulter.lineTo(150.6, 182.0);
        vaulter.lineTo(155.0, 182.0);
        vaulter.lineTo(156.5, 184.3);
        vaulter.bezierCurveTo(156.5, 184.3, 156.1, 185.2, 155.5, 185.8);
        vaulter.bezierCurveTo(154.9, 186.4, 162.3, 195.3, 163.6, 195.9);
        vaulter.lineTo(170.9, 203.3);
        vaulter.bezierCurveTo(170.9, 203.3, 174.9, 213.7, 177.7, 215.1);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(292.9, 343.0);
        vaulter.bezierCurveTo(292.9, 336.8, 292.3, 277.9, 288.0, 257.9);
        vaulter.bezierCurveTo(283.9, 238.6, 275.2, 211.6, 257.6, 193.4);
        vaulter.bezierCurveTo(237.5, 172.6, 209.3, 169.7, 189.2, 170.9);
        vaulter.bezierCurveTo(167.5, 172.2, 150.2, 178.5, 150.1, 178.6);
        vaulter.bezierCurveTo(150.1, 178.6, 149.0, 178.8, 148.7, 178.0);
        vaulter.bezierCurveTo(148.5, 177.2, 149.4, 176.7, 149.4, 176.7);
        vaulter.bezierCurveTo(149.5, 176.7, 166.9, 170.3, 189.1, 168.9);
        vaulter.bezierCurveTo(209.6, 167.7, 238.4, 170.7, 259.0, 192.0);
        vaulter.bezierCurveTo(277.0, 210.6, 285.8, 237.9, 290.0, 257.5);
        vaulter.bezierCurveTo(294.3, 277.7, 294.9, 336.9, 294.9, 343.0);
        vaulter.lineTo(292.9, 343.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(179.6, 203.5);
        vaulter.bezierCurveTo(179.6, 203.5, 182.1, 195.9, 183.3, 194.6);
        vaulter.bezierCurveTo(184.5, 193.3, 184.7, 183.7, 184.7, 183.7);
        vaulter.bezierCurveTo(184.7, 183.7, 186.5, 173.9, 186.4, 172.0);
        vaulter.bezierCurveTo(186.3, 170.2, 185.5, 170.3, 185.5, 170.3);
        vaulter.bezierCurveTo(185.5, 170.3, 188.1, 170.0, 189.2, 170.0);
        vaulter.bezierCurveTo(189.2, 170.0, 189.1, 172.8, 189.2, 174.2);
        vaulter.bezierCurveTo(189.3, 175.5, 189.7, 181.9, 189.2, 184.2);
        vaulter.bezierCurveTo(188.6, 186.6, 188.5, 194.3, 188.5, 194.3);
        vaulter.bezierCurveTo(188.5, 194.3, 185.3, 200.2, 185.5, 204.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(184.4, 170.0);
        vaulter.bezierCurveTo(184.4, 170.0, 185.4, 167.9, 186.2, 167.5);
        vaulter.bezierCurveTo(186.9, 167.1, 190.5, 168.4, 190.7, 168.8);
        vaulter.bezierCurveTo(190.9, 169.1, 190.5, 170.4, 189.6, 170.6);
        vaulter.bezierCurveTo(188.7, 170.8, 186.0, 170.6, 186.0, 170.6);
        vaulter.bezierCurveTo(186.0, 170.6, 184.7, 170.6, 184.4, 170.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(181.0, 201.5);
        vaulter.bezierCurveTo(181.0, 201.5, 179.8, 196.7, 179.1, 195.8);
        vaulter.bezierCurveTo(178.3, 195.0, 175.3, 192.2, 175.3, 192.2);
        vaulter.bezierCurveTo(175.3, 192.2, 170.9, 189.6, 167.7, 192.7);
        vaulter.bezierCurveTo(164.6, 195.8, 167.0, 200.6, 168.5, 202.1);
        vaulter.bezierCurveTo(170.0, 203.6, 175.0, 206.0, 175.0, 206.0);
        vaulter.bezierCurveTo(175.0, 206.0, 176.1, 206.8, 175.9, 207.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(184.0, 202.3);
        vaulter.bezierCurveTo(182.5, 201.6, 179.7, 202.5, 178.4, 203.5);
        vaulter.bezierCurveTo(177.1, 204.5, 173.9, 208.3, 174.4, 210.0);
        vaulter.bezierCurveTo(175.0, 211.6, 175.5, 212.8, 179.2, 214.9);
        vaulter.bezierCurveTo(182.8, 216.9, 190.4, 224.0, 191.7, 225.8);
        vaulter.bezierCurveTo(193.0, 227.7, 198.8, 224.1, 198.8, 224.1);
        vaulter.bezierCurveTo(198.8, 224.1, 201.0, 220.2, 200.8, 219.5);
        vaulter.bezierCurveTo(200.6, 218.8, 194.1, 210.3, 192.3, 208.6);
        vaulter.bezierCurveTo(188.6, 205.2, 184.0, 202.3, 184.0, 202.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(192.5, 226.3);
        vaulter.bezierCurveTo(192.5, 230.1, 195.6, 231.1, 199.3, 232.4);
        vaulter.bezierCurveTo(203.0, 233.7, 209.0, 230.9, 213.7, 228.9);
        vaulter.bezierCurveTo(217.7, 227.2, 221.5, 223.9, 221.5, 223.9);
        vaulter.bezierCurveTo(221.5, 223.9, 223.8, 227.6, 226.4, 229.6);
        vaulter.bezierCurveTo(229.3, 231.9, 231.3, 239.9, 231.3, 239.9);
        vaulter.bezierCurveTo(231.3, 239.9, 232.5, 241.6, 233.8, 241.5);
        vaulter.bezierCurveTo(235.0, 241.5, 243.6, 234.9, 243.6, 234.9);
        vaulter.bezierCurveTo(243.6, 234.9, 244.0, 233.5, 242.9, 233.3);
        vaulter.bezierCurveTo(241.9, 233.0, 240.7, 233.9, 240.2, 234.3);
        vaulter.bezierCurveTo(239.8, 234.6, 236.2, 234.8, 234.3, 235.4);
        vaulter.bezierCurveTo(234.3, 235.4, 232.7, 232.4, 231.0, 227.8);
        vaulter.bezierCurveTo(229.9, 224.9, 227.7, 219.5, 226.9, 217.6);
        vaulter.bezierCurveTo(225.6, 215.7, 220.4, 216.3, 220.4, 216.3);
        vaulter.bezierCurveTo(220.4, 216.3, 212.9, 217.4, 208.2, 219.4);
        vaulter.bezierCurveTo(203.8, 221.2, 200.8, 219.5, 200.8, 219.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(187.0, 219.7);
        vaulter.bezierCurveTo(187.0, 219.7, 191.7, 215.5, 186.4, 209.5);
        vaulter.bezierCurveTo(181.1, 203.5, 177.0, 204.0, 175.5, 205.5);
        vaulter.bezierCurveTo(174.2, 206.6, 174.3, 210.2, 176.5, 213.5);
        vaulter.bezierCurveTo(179.3, 215.7, 182.5, 217.6, 185.3, 219.8);
        vaulter.bezierCurveTo(185.8, 219.8, 186.4, 219.8, 187.0, 219.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(175.2, 210.2);
        vaulter.bezierCurveTo(175.2, 210.2, 174.6, 206.9, 174.4, 204.5);
        vaulter.bezierCurveTo(174.1, 202.2, 174.4, 197.0, 174.4, 197.0);
        vaulter.bezierCurveTo(174.4, 197.0, 169.9, 191.6, 168.3, 188.4);
        vaulter.bezierCurveTo(166.8, 185.3, 161.9, 177.9, 160.9, 177.3);
        vaulter.bezierCurveTo(159.8, 176.6, 158.6, 176.2, 158.6, 176.2);
        vaulter.bezierCurveTo(158.6, 176.2, 158.1, 174.7, 158.6, 173.6);
        vaulter.bezierCurveTo(159.1, 172.4, 161.2, 173.0, 161.2, 173.0);
        vaulter.lineTo(164.0, 172.8);
        vaulter.bezierCurveTo(164.0, 172.8, 165.4, 174.3, 164.9, 174.9);
        vaulter.bezierCurveTo(164.3, 175.5, 164.2, 176.3, 164.0, 176.8);
        vaulter.bezierCurveTo(164.0, 176.8, 170.5, 184.0, 171.4, 185.3);
        vaulter.bezierCurveTo(172.3, 186.5, 178.9, 192.5, 179.7, 193.7);
        vaulter.bezierCurveTo(180.5, 194.9, 181.1, 205.3, 181.8, 206.3);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(186.0, 196.2);
        vaulter.bezierCurveTo(186.0, 196.2, 189.5, 189.2, 191.4, 188.0);
        vaulter.bezierCurveTo(191.4, 188.0, 192.4, 178.3, 193.3, 176.2);
        vaulter.bezierCurveTo(194.1, 174.1, 195.5, 169.6, 195.7, 168.3);
        vaulter.bezierCurveTo(195.9, 167.1, 194.3, 165.0, 194.3, 165.0);
        vaulter.bezierCurveTo(194.3, 165.0, 194.1, 161.6, 195.7, 161.4);
        vaulter.bezierCurveTo(197.4, 161.1, 199.1, 161.4, 199.1, 161.4);
        vaulter.bezierCurveTo(199.1, 161.4, 199.9, 164.8, 199.1, 167.5);
        vaulter.bezierCurveTo(199.1, 167.5, 197.2, 176.2, 197.0, 177.4);
        vaulter.bezierCurveTo(196.8, 178.7, 196.8, 186.1, 195.7, 188.2);
        vaulter.bezierCurveTo(194.7, 190.3, 192.7, 198.8, 192.7, 198.8);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(202.7, 224.7);
        vaulter.bezierCurveTo(202.7, 224.7, 204.6, 228.1, 208.6, 228.3);
        vaulter.bezierCurveTo(212.7, 228.5, 215.6, 226.0, 216.9, 224.6);
        vaulter.bezierCurveTo(218.1, 223.2, 226.2, 216.0, 226.2, 216.0);
        vaulter.bezierCurveTo(226.2, 216.0, 230.7, 216.5, 233.8, 217.1);
        vaulter.bezierCurveTo(235.8, 217.5, 241.8, 219.2, 241.8, 219.2);
        vaulter.bezierCurveTo(242.6, 220.6, 243.9, 221.0, 243.9, 221.0);
        vaulter.bezierCurveTo(245.0, 221.0, 252.7, 217.9, 253.8, 216.0);
        vaulter.bezierCurveTo(254.9, 214.2, 253.3, 213.9, 252.7, 214.2);
        vaulter.bezierCurveTo(252.1, 214.5, 249.9, 215.4, 248.7, 215.3);
        vaulter.bezierCurveTo(247.5, 215.1, 243.9, 216.0, 243.9, 216.0);
        vaulter.lineTo(228.5, 208.9);
        vaulter.bezierCurveTo(228.5, 208.9, 226.3, 207.3, 224.5, 207.3);
        vaulter.bezierCurveTo(222.6, 207.3, 208.5, 216.5, 208.5, 216.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(189.2, 193.1);
        vaulter.bezierCurveTo(189.2, 193.1, 188.1, 188.2, 187.3, 187.4);
        vaulter.bezierCurveTo(186.6, 186.5, 183.5, 183.7, 183.5, 183.7);
        vaulter.bezierCurveTo(183.5, 183.7, 179.1, 181.1, 175.9, 184.2);
        vaulter.bezierCurveTo(172.7, 187.3, 175.1, 192.1, 176.6, 193.7);
        vaulter.bezierCurveTo(178.1, 195.2, 183.2, 197.6, 183.2, 197.6);
        vaulter.bezierCurveTo(183.2, 197.6, 184.3, 198.4, 184.1, 199.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(294.9, 343.0);
        vaulter.lineTo(292.9, 343.0);
        vaulter.bezierCurveTo(293.2, 331.9, 294.2, 273.3, 291.3, 253.5);
        vaulter.bezierCurveTo(288.6, 234.7, 281.1, 208.1, 260.7, 187.9);
        vaulter.bezierCurveTo(240.3, 167.6, 213.8, 164.6, 195.2, 165.6);
        vaulter.bezierCurveTo(175.1, 166.6, 159.5, 172.6, 159.4, 172.6);
        vaulter.bezierCurveTo(159.4, 172.6, 158.4, 172.9, 158.1, 172.0);
        vaulter.bezierCurveTo(157.9, 171.2, 158.7, 170.8, 158.7, 170.8);
        vaulter.bezierCurveTo(158.8, 170.7, 174.6, 164.7, 195.1, 163.6);
        vaulter.bezierCurveTo(214.1, 162.5, 241.2, 165.7, 262.1, 186.4);
        vaulter.bezierCurveTo(282.9, 207.1, 290.5, 234.1, 293.3, 253.2);
        vaulter.bezierCurveTo(296.6, 275.6, 294.9, 342.3, 294.9, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(202.6, 224.6);
        vaulter.bezierCurveTo(205.3, 225.1, 208.8, 217.1, 206.3, 214.1);
        vaulter.bezierCurveTo(203.8, 211.1, 200.7, 203.8, 197.6, 200.3);
        vaulter.bezierCurveTo(194.5, 196.8, 188.9, 193.8, 186.7, 195.4);
        vaulter.bezierCurveTo(184.6, 197.1, 183.6, 203.9, 184.9, 206.2);
        vaulter.bezierCurveTo(186.1, 208.6, 190.2, 210.3, 192.3, 214.1);
        vaulter.bezierCurveTo(194.5, 217.9, 197.3, 223.5, 202.6, 224.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(206.3, 214.1);
        vaulter.bezierCurveTo(206.3, 214.1, 208.0, 215.9, 209.8, 215.5);
        vaulter.bezierCurveTo(211.7, 215.1, 216.0, 207.7, 219.1, 205.0);
        vaulter.bezierCurveTo(222.2, 202.3, 224.3, 200.4, 226.2, 200.4);
        vaulter.bezierCurveTo(228.0, 200.4, 229.9, 202.9, 230.5, 205.0);
        vaulter.bezierCurveTo(231.1, 207.0, 239.2, 215.3, 240.0, 215.7);
        vaulter.bezierCurveTo(240.9, 216.1, 243.6, 216.7, 244.6, 215.7);
        vaulter.bezierCurveTo(245.6, 214.7, 247.5, 215.1, 247.5, 215.1);
        vaulter.bezierCurveTo(247.5, 215.1, 248.3, 216.1, 247.5, 217.4);
        vaulter.bezierCurveTo(246.7, 218.6, 244.6, 219.9, 244.6, 220.9);
        vaulter.bezierCurveTo(244.6, 221.9, 241.5, 223.2, 240.5, 222.8);
        vaulter.bezierCurveTo(239.4, 222.3, 237.8, 219.5, 237.8, 219.5);
        vaulter.bezierCurveTo(237.8, 219.5, 227.5, 211.5, 226.2, 208.6);
        vaulter.bezierCurveTo(226.2, 208.6, 222.0, 217.4, 218.9, 219.9);
        vaulter.bezierCurveTo(215.8, 222.4, 212.7, 225.2, 210.6, 225.6);
        vaulter.bezierCurveTo(207.2, 226.3, 204.1, 225.3, 201.1, 224.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(196.0, 211.8);
        vaulter.bezierCurveTo(196.0, 211.8, 200.9, 207.6, 195.5, 201.5);
        vaulter.bezierCurveTo(190.1, 195.4, 186.0, 196.0, 184.4, 197.4);
        vaulter.bezierCurveTo(183.2, 198.6, 183.3, 202.2, 185.5, 205.5);
        vaulter.bezierCurveTo(188.3, 207.8, 190.5, 210.4, 194.4, 211.9);
        vaulter.bezierCurveTo(194.4, 211.9, 195.4, 211.9, 196.0, 211.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(186.2, 205.0);
        vaulter.bezierCurveTo(186.2, 205.0, 183.3, 200.4, 183.3, 197.9);
        vaulter.bezierCurveTo(183.3, 195.4, 183.3, 191.3, 183.3, 191.3);
        vaulter.lineTo(178.1, 181.8);
        vaulter.bezierCurveTo(178.1, 181.8, 174.6, 172.0, 173.2, 171.6);
        vaulter.bezierCurveTo(171.7, 171.2, 168.9, 169.7, 169.4, 167.7);
        vaulter.bezierCurveTo(169.9, 165.6, 172.1, 165.0, 173.0, 165.0);
        vaulter.bezierCurveTo(173.8, 165.0, 177.1, 166.5, 176.5, 167.3);
        vaulter.bezierCurveTo(175.9, 168.1, 175.7, 169.1, 175.9, 170.0);
        vaulter.bezierCurveTo(176.1, 170.8, 180.4, 178.9, 180.4, 178.9);
        vaulter.bezierCurveTo(180.4, 178.9, 185.2, 184.1, 186.2, 188.0);
        vaulter.bezierCurveTo(186.2, 188.0, 191.0, 196.1, 191.4, 197.3);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(223.9, 203.5);
        vaulter.bezierCurveTo(223.9, 203.5, 225.4, 202.6, 226.0, 199.5);
        vaulter.bezierCurveTo(226.6, 196.4, 224.3, 187.0, 225.0, 185.5);
        vaulter.bezierCurveTo(225.6, 184.1, 229.3, 183.0, 232.1, 184.1);
        vaulter.bezierCurveTo(234.8, 185.1, 241.9, 186.3, 247.1, 186.5);
        vaulter.bezierCurveTo(247.1, 186.5, 247.7, 184.4, 249.0, 183.6);
        vaulter.bezierCurveTo(250.3, 182.8, 250.0, 180.5, 250.7, 180.1);
        vaulter.bezierCurveTo(251.5, 179.7, 252.1, 181.0, 252.1, 181.3);
        vaulter.bezierCurveTo(252.1, 181.7, 252.3, 182.8, 252.0, 184.1);
        vaulter.bezierCurveTo(251.8, 185.1, 251.2, 188.5, 251.3, 189.1);
        vaulter.bezierCurveTo(251.4, 189.7, 250.7, 191.2, 250.1, 191.2);
        vaulter.bezierCurveTo(249.4, 191.2, 247.6, 191.1, 247.3, 190.1);
        vaulter.bezierCurveTo(247.3, 190.1, 237.9, 191.2, 235.9, 191.1);
        vaulter.bezierCurveTo(234.0, 191.1, 234.4, 190.6, 233.2, 190.3);
        vaulter.bezierCurveTo(233.2, 190.3, 237.6, 199.0, 236.1, 206.4);
        vaulter.bezierCurveTo(234.6, 213.8, 228.0, 213.1, 228.0, 213.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(208.7, 191.2);
        vaulter.bezierCurveTo(208.7, 191.2, 211.4, 184.6, 210.6, 181.7);
        vaulter.bezierCurveTo(210.6, 181.7, 212.0, 171.9, 211.7, 171.0);
        vaulter.bezierCurveTo(211.7, 171.0, 212.8, 163.2, 213.1, 162.1);
        vaulter.bezierCurveTo(213.4, 161.0, 215.2, 158.6, 214.7, 157.4);
        vaulter.bezierCurveTo(214.2, 156.1, 212.0, 155.0, 211.8, 155.2);
        vaulter.bezierCurveTo(211.6, 155.3, 209.5, 158.2, 210.5, 159.1);
        vaulter.bezierCurveTo(211.4, 160.0, 211.3, 162.1, 211.1, 163.0);
        vaulter.bezierCurveTo(210.9, 163.9, 208.7, 171.6, 208.7, 171.6);
        vaulter.bezierCurveTo(208.7, 171.6, 206.6, 178.8, 206.7, 180.4);
        vaulter.bezierCurveTo(206.7, 180.4, 201.9, 188.1, 201.5, 190.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(294.9, 343.0);
        vaulter.lineTo(292.9, 343.0);
        vaulter.bezierCurveTo(292.9, 342.3, 293.9, 264.4, 291.6, 246.3);
        vaulter.bezierCurveTo(289.5, 229.4, 284.0, 204.8, 269.3, 183.6);
        vaulter.bezierCurveTo(257.7, 166.9, 238.2, 158.4, 213.0, 159.2);
        vaulter.bezierCurveTo(193.9, 159.7, 178.0, 165.4, 177.9, 165.4);
        vaulter.bezierCurveTo(177.9, 165.4, 177.0, 165.7, 176.7, 164.8);
        vaulter.bezierCurveTo(176.4, 163.9, 177.2, 163.6, 177.2, 163.6);
        vaulter.bezierCurveTo(177.4, 163.5, 193.4, 157.8, 212.9, 157.2);
        vaulter.bezierCurveTo(238.9, 156.4, 259.0, 165.2, 271.0, 182.5);
        vaulter.bezierCurveTo(285.9, 204.0, 291.5, 228.9, 293.6, 246.0);
        vaulter.bezierCurveTo(295.9, 264.7, 294.9, 342.5, 294.9, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(205.3, 187.5);
        vaulter.bezierCurveTo(205.3, 187.5, 203.8, 182.7, 202.9, 181.9);
        vaulter.bezierCurveTo(202.1, 181.1, 198.8, 178.4, 198.8, 178.4);
        vaulter.bezierCurveTo(198.8, 178.4, 194.2, 176.1, 191.2, 179.5);
        vaulter.bezierCurveTo(188.2, 182.8, 191.0, 187.5, 192.6, 188.9);
        vaulter.bezierCurveTo(194.2, 190.4, 199.5, 192.5, 199.5, 192.5);
        vaulter.bezierCurveTo(199.5, 192.5, 199.8, 192.7, 200.1, 193.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(224.6, 201.6);
        vaulter.bezierCurveTo(224.6, 201.6, 214.8, 194.9, 212.7, 191.8);
        vaulter.bezierCurveTo(210.6, 188.7, 204.8, 188.7, 203.7, 189.9);
        vaulter.bezierCurveTo(202.7, 191.2, 200.4, 195.8, 202.1, 199.5);
        vaulter.bezierCurveTo(203.7, 203.3, 209.0, 207.0, 214.2, 210.2);
        vaulter.bezierCurveTo(219.4, 213.3, 227.3, 214.1, 231.1, 211.8);
        vaulter.bezierCurveTo(234.9, 209.5, 233.0, 205.8, 231.1, 203.9);
        vaulter.bezierCurveTo(229.2, 202.0, 226.1, 202.6, 224.6, 201.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(222.3, 203.5);
        vaulter.bezierCurveTo(222.3, 203.5, 223.8, 202.6, 224.4, 199.5);
        vaulter.bezierCurveTo(225.0, 196.4, 222.7, 187.0, 223.4, 185.5);
        vaulter.bezierCurveTo(224.0, 184.1, 227.8, 183.0, 230.5, 184.1);
        vaulter.bezierCurveTo(233.2, 185.1, 238.4, 188.0, 243.6, 188.2);
        vaulter.bezierCurveTo(243.6, 188.2, 245.7, 186.4, 247.1, 185.6);
        vaulter.bezierCurveTo(248.4, 184.9, 248.2, 184.0, 249.0, 183.6);
        vaulter.bezierCurveTo(249.8, 183.2, 251.2, 183.7, 251.2, 184.1);
        vaulter.bezierCurveTo(251.2, 184.4, 251.2, 185.9, 250.6, 186.7);
        vaulter.bezierCurveTo(250.0, 187.6, 247.9, 191.1, 248.0, 191.8);
        vaulter.bezierCurveTo(248.1, 192.4, 247.4, 193.9, 246.7, 193.9);
        vaulter.bezierCurveTo(246.1, 193.9, 244.3, 193.7, 244.0, 192.8);
        vaulter.bezierCurveTo(244.0, 192.8, 237.7, 190.7, 235.8, 190.7);
        vaulter.bezierCurveTo(233.8, 190.6, 232.8, 190.6, 231.6, 190.3);
        vaulter.bezierCurveTo(231.6, 190.3, 236.0, 199.0, 234.5, 206.4);
        vaulter.bezierCurveTo(233.0, 213.8, 226.5, 213.1, 226.5, 213.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(214.0, 206.1);
        vaulter.bezierCurveTo(214.0, 206.1, 218.5, 201.6, 212.7, 195.8);
        vaulter.bezierCurveTo(206.9, 190.0, 202.7, 190.9, 201.3, 192.5);
        vaulter.bezierCurveTo(200.1, 193.7, 200.4, 197.4, 203.0, 200.5);
        vaulter.bezierCurveTo(205.9, 202.6, 208.3, 205.1, 212.3, 206.4);
        vaulter.bezierCurveTo(212.3, 206.4, 213.4, 206.3, 214.0, 206.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(202.0, 198.8);
        vaulter.bezierCurveTo(201.2, 196.7, 198.5, 188.4, 199.1, 186.2);
        vaulter.bezierCurveTo(199.1, 186.2, 196.1, 179.0, 196.1, 178.5);
        vaulter.bezierCurveTo(196.1, 178.0, 193.2, 173.3, 192.3, 170.1);
        vaulter.bezierCurveTo(191.4, 166.8, 188.8, 164.4, 188.8, 164.4);
        vaulter.bezierCurveTo(188.8, 164.4, 186.0, 163.1, 185.7, 162.2);
        vaulter.bezierCurveTo(185.5, 161.3, 187.3, 159.6, 187.9, 159.2);
        vaulter.bezierCurveTo(188.5, 158.9, 191.8, 159.2, 191.8, 159.2);
        vaulter.bezierCurveTo(191.8, 159.2, 193.2, 161.3, 192.5, 161.9);
        vaulter.bezierCurveTo(191.7, 162.5, 191.8, 163.2, 192.1, 163.6);
        vaulter.bezierCurveTo(192.5, 164.1, 195.6, 169.6, 195.6, 169.6);
        vaulter.bezierCurveTo(195.6, 169.6, 200.1, 175.4, 200.8, 176.8);
        vaulter.bezierCurveTo(201.4, 178.2, 203.6, 184.1, 203.6, 184.1);
        vaulter.bezierCurveTo(203.6, 184.1, 207.0, 191.2, 207.7, 193.0);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(217.5, 183.8);
        vaulter.bezierCurveTo(217.5, 183.8, 217.5, 176.0, 217.5, 169.5);
        vaulter.bezierCurveTo(217.5, 169.5, 219.0, 164.0, 219.8, 160.5);
        vaulter.bezierCurveTo(220.6, 156.9, 220.4, 153.0, 221.2, 151.3);
        vaulter.bezierCurveTo(221.2, 151.3, 223.1, 148.1, 222.8, 147.6);
        vaulter.bezierCurveTo(222.4, 147.1, 220.9, 145.9, 220.9, 145.9);
        vaulter.lineTo(218.1, 145.9);
        vaulter.bezierCurveTo(218.1, 145.9, 216.5, 148.7, 217.5, 149.5);
        vaulter.bezierCurveTo(218.4, 150.2, 218.4, 154.0, 218.3, 154.6);
        vaulter.bezierCurveTo(218.1, 155.2, 215.6, 160.3, 215.1, 162.7);
        vaulter.lineTo(212.4, 170.7);
        vaulter.lineTo(210.0, 179.2);
        vaulter.bezierCurveTo(210.0, 179.2, 209.1, 183.3, 210.0, 184.7);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(294.9, 343.0);
        vaulter.lineTo(292.9, 343.0);
        vaulter.bezierCurveTo(293.0, 342.2, 295.1, 253.5, 293.4, 236.3);
        vaulter.bezierCurveTo(291.8, 220.4, 286.6, 197.2, 270.6, 176.4);
        vaulter.bezierCurveTo(254.5, 155.4, 232.7, 150.7, 217.2, 150.4);
        vaulter.bezierCurveTo(200.5, 150.1, 187.8, 154.7, 187.2, 154.9);
        vaulter.bezierCurveTo(187.2, 154.9, 186.3, 155.3, 185.9, 154.4);
        vaulter.bezierCurveTo(185.5, 153.5, 186.5, 153.0, 186.5, 153.0);
        vaulter.bezierCurveTo(187.1, 152.8, 200.1, 148.1, 217.3, 148.4);
        vaulter.bezierCurveTo(233.2, 148.7, 255.6, 153.6, 272.2, 175.2);
        vaulter.bezierCurveTo(288.5, 196.4, 293.8, 220.0, 295.4, 236.1);
        vaulter.bezierCurveTo(297.1, 253.6, 295.0, 342.6, 294.9, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(237.2, 197.0);
        vaulter.bezierCurveTo(237.2, 197.0, 246.4, 195.0, 245.6, 186.4);
        vaulter.bezierCurveTo(245.0, 179.7, 236.3, 169.9, 236.3, 169.9);
        vaulter.bezierCurveTo(241.5, 169.8, 245.2, 164.5, 252.5, 164.7);
        vaulter.bezierCurveTo(252.5, 164.7, 253.7, 165.4, 254.4, 165.4);
        vaulter.bezierCurveTo(255.1, 165.5, 256.4, 164.5, 256.4, 163.9);
        vaulter.bezierCurveTo(256.4, 163.2, 255.3, 159.5, 255.7, 157.4);
        vaulter.bezierCurveTo(255.9, 156.2, 255.7, 154.9, 255.2, 154.0);
        vaulter.bezierCurveTo(254.5, 152.9, 254.2, 152.2, 253.3, 152.1);
        vaulter.bezierCurveTo(252.5, 152.1, 252.5, 154.5, 252.5, 154.5);
        vaulter.bezierCurveTo(252.5, 154.5, 251.3, 157.8, 251.3, 160.7);
        vaulter.bezierCurveTo(251.3, 162.2, 233.9, 163.9, 233.9, 163.9);
        vaulter.bezierCurveTo(233.9, 163.9, 229.7, 164.8, 228.7, 167.0);
        vaulter.bezierCurveTo(227.7, 169.2, 228.5, 172.1, 229.4, 173.2);
        vaulter.bezierCurveTo(230.2, 174.3, 234.7, 184.1, 234.7, 184.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(213.0, 177.7);
        vaulter.bezierCurveTo(213.0, 177.7, 210.4, 173.3, 209.5, 172.7);
        vaulter.bezierCurveTo(208.5, 172.1, 204.7, 170.3, 204.7, 170.3);
        vaulter.bezierCurveTo(204.7, 170.3, 199.8, 169.1, 197.6, 173.0);
        vaulter.bezierCurveTo(195.4, 176.9, 199.2, 180.8, 201.0, 181.8);
        vaulter.bezierCurveTo(202.9, 182.9, 208.5, 183.7, 208.5, 183.7);
        vaulter.bezierCurveTo(208.5, 183.7, 208.8, 183.8, 209.2, 184.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(209.0, 185.4);
        vaulter.bezierCurveTo(209.0, 185.4, 210.0, 191.6, 214.6, 192.7);
        vaulter.bezierCurveTo(219.1, 193.7, 222.7, 196.4, 224.7, 197.0);
        vaulter.bezierCurveTo(226.8, 197.7, 233.6, 198.1, 236.3, 197.0);
        vaulter.bezierCurveTo(239.0, 196.0, 238.0, 187.3, 233.6, 186.9);
        vaulter.bezierCurveTo(229.3, 186.5, 219.8, 179.4, 217.1, 179.2);
        vaulter.bezierCurveTo(214.4, 179.0, 208.8, 179.8, 209.0, 185.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(233.2, 197.7);
        vaulter.bezierCurveTo(233.2, 197.7, 242.6, 197.5, 242.9, 190.8);
        vaulter.bezierCurveTo(243.2, 184.0, 232.0, 174.5, 232.0, 174.5);
        vaulter.bezierCurveTo(237.1, 174.4, 240.7, 172.8, 247.9, 173.0);
        vaulter.bezierCurveTo(247.9, 173.0, 249.1, 173.7, 249.8, 173.8);
        vaulter.bezierCurveTo(250.5, 173.8, 251.8, 172.9, 251.8, 172.2);
        vaulter.bezierCurveTo(251.8, 171.6, 250.9, 168.0, 250.9, 167.0);
        vaulter.bezierCurveTo(250.9, 166.0, 250.3, 163.9, 250.2, 162.7);
        vaulter.bezierCurveTo(250.0, 161.5, 249.6, 160.5, 248.7, 160.5);
        vaulter.bezierCurveTo(247.9, 160.4, 247.6, 163.7, 247.6, 163.7);
        vaulter.bezierCurveTo(247.6, 163.7, 246.1, 166.2, 246.7, 169.0);
        vaulter.bezierCurveTo(247.1, 170.5, 229.6, 168.5, 229.6, 168.5);
        vaulter.bezierCurveTo(229.6, 168.5, 225.4, 169.4, 224.4, 171.6);
        vaulter.bezierCurveTo(223.4, 173.8, 224.2, 176.7, 225.0, 177.8);
        vaulter.bezierCurveTo(225.9, 178.9, 231.9, 188.4, 231.9, 188.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(221.6, 192.7);
        vaulter.bezierCurveTo(222.5, 191.4, 222.8, 185.9, 218.1, 183.0);
        vaulter.bezierCurveTo(214.1, 180.7, 211.0, 181.9, 210.0, 183.7);
        vaulter.bezierCurveTo(209.1, 185.2, 210.3, 188.7, 213.4, 191.1);
        vaulter.bezierCurveTo(216.7, 192.5, 215.9, 193.0, 220.0, 193.3);
        vaulter.bezierCurveTo(220.0, 193.3, 221.1, 193.3, 221.6, 192.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(211.0, 188.4);
        vaulter.bezierCurveTo(211.0, 188.4, 209.1, 185.2, 209.7, 182.2);
        vaulter.bezierCurveTo(209.7, 182.2, 206.6, 175.7, 206.6, 170.6);
        vaulter.bezierCurveTo(206.6, 170.6, 202.7, 166.2, 202.0, 162.5);
        vaulter.bezierCurveTo(201.2, 158.8, 197.8, 154.0, 197.8, 154.0);
        vaulter.bezierCurveTo(197.8, 154.0, 193.8, 153.2, 193.4, 151.2);
        vaulter.lineTo(194.3, 149.5);
        vaulter.bezierCurveTo(194.3, 149.5, 197.9, 148.2, 199.5, 148.5);
        vaulter.bezierCurveTo(201.0, 148.7, 201.6, 151.0, 201.2, 151.5);
        vaulter.bezierCurveTo(200.7, 152.0, 201.5, 153.7, 202.2, 154.8);
        vaulter.bezierCurveTo(202.9, 155.8, 206.1, 160.5, 206.6, 161.4);
        vaulter.bezierCurveTo(207.2, 162.5, 211.1, 166.9, 211.6, 168.4);
        vaulter.bezierCurveTo(212.0, 170.0, 215.5, 179.1, 215.5, 179.1);
        vaulter.bezierCurveTo(215.5, 179.1, 217.4, 181.6, 217.7, 183.3);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(224.3, 177.5);
        vaulter.bezierCurveTo(224.3, 177.5, 226.3, 172.7, 225.0, 168.6);
        vaulter.bezierCurveTo(225.0, 168.6, 227.2, 161.5, 227.2, 157.7);
        vaulter.bezierCurveTo(227.2, 157.7, 228.1, 153.5, 228.3, 151.2);
        vaulter.bezierCurveTo(228.5, 148.8, 228.3, 146.3, 228.3, 146.3);
        vaulter.bezierCurveTo(228.3, 146.3, 230.3, 143.9, 230.2, 142.5);
        vaulter.bezierCurveTo(230.0, 141.1, 227.2, 140.8, 227.2, 140.8);
        vaulter.lineTo(224.3, 141.5);
        vaulter.bezierCurveTo(224.3, 141.5, 223.5, 144.3, 224.3, 145.3);
        vaulter.bezierCurveTo(225.0, 146.2, 225.0, 146.2, 225.0, 146.2);
        vaulter.bezierCurveTo(225.5, 150.2, 223.6, 152.6, 223.9, 155.7);
        vaulter.bezierCurveTo(222.1, 159.1, 220.1, 167.4, 220.1, 167.4);
        vaulter.bezierCurveTo(220.1, 167.4, 217.4, 174.1, 217.9, 177.5);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(220.1, 171.5);
        vaulter.bezierCurveTo(220.1, 171.5, 217.1, 167.5, 216.1, 167.0);
        vaulter.bezierCurveTo(215.1, 166.5, 211.1, 165.1, 211.1, 165.1);
        vaulter.bezierCurveTo(211.1, 165.1, 206.0, 164.4, 204.3, 168.5);
        vaulter.bezierCurveTo(202.5, 172.6, 206.6, 176.1, 208.6, 176.9);
        vaulter.bezierCurveTo(210.6, 177.8, 216.3, 178.0, 216.3, 178.0);
        vaulter.bezierCurveTo(216.3, 178.0, 216.6, 178.1, 216.9, 178.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(229.6, 185.5);
        vaulter.bezierCurveTo(230.4, 184.1, 230.1, 178.6, 225.1, 176.2);
        vaulter.bezierCurveTo(221.0, 174.3, 218.0, 175.8, 217.2, 177.7);
        vaulter.bezierCurveTo(216.5, 179.3, 218.0, 182.6, 221.3, 184.7);
        vaulter.bezierCurveTo(224.7, 185.7, 224.0, 186.4, 228.1, 186.3);
        vaulter.bezierCurveTo(228.1, 186.3, 229.2, 186.2, 229.6, 185.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(294.9, 343.0);
        vaulter.lineTo(292.9, 343.0);
        vaulter.bezierCurveTo(292.9, 342.2, 294.5, 242.7, 292.7, 224.1);
        vaulter.bezierCurveTo(291.0, 206.8, 285.9, 182.6, 271.4, 165.4);
        vaulter.bezierCurveTo(256.8, 148.3, 237.4, 143.9, 223.7, 143.3);
        vaulter.bezierCurveTo(208.9, 142.6, 197.6, 145.8, 197.2, 146.0);
        vaulter.bezierCurveTo(197.2, 146.0, 196.3, 146.1, 196.0, 145.3);
        vaulter.bezierCurveTo(195.7, 144.4, 196.6, 144.0, 196.6, 144.0);
        vaulter.bezierCurveTo(197.1, 143.9, 208.6, 140.5, 223.8, 141.3);
        vaulter.bezierCurveTo(237.9, 142.0, 257.9, 146.5, 272.9, 164.1);
        vaulter.bezierCurveTo(287.8, 181.7, 293.0, 206.3, 294.7, 223.9);
        vaulter.bezierCurveTo(296.6, 242.8, 295.0, 342.5, 294.9, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(216.7, 179.3);
        vaulter.bezierCurveTo(216.7, 179.3, 216.8, 182.2, 218.8, 183.9);
        vaulter.bezierCurveTo(220.8, 185.6, 227.5, 187.2, 227.5, 187.2);
        vaulter.bezierCurveTo(227.5, 187.2, 230.5, 189.3, 234.8, 189.8);
        vaulter.bezierCurveTo(239.2, 190.3, 241.7, 188.3, 241.7, 188.3);
        vaulter.bezierCurveTo(241.7, 188.3, 243.2, 182.2, 239.8, 180.8);
        vaulter.bezierCurveTo(238.0, 179.6, 236.1, 178.5, 234.4, 177.5);
        vaulter.bezierCurveTo(232.7, 176.6, 226.7, 174.1, 223.5, 173.0);
        vaulter.bezierCurveTo(220.2, 172.0, 216.3, 177.5, 216.7, 179.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(241.1, 188.6);
        vaulter.bezierCurveTo(241.1, 188.6, 249.6, 186.2, 249.4, 180.8);
        vaulter.bezierCurveTo(249.3, 175.4, 241.5, 170.6, 239.2, 170.2);
        vaulter.bezierCurveTo(236.8, 169.9, 235.4, 169.5, 235.4, 169.5);
        vaulter.bezierCurveTo(235.4, 169.5, 239.2, 167.6, 240.1, 164.8);
        vaulter.bezierCurveTo(241.0, 162.0, 247.4, 157.4, 247.4, 157.4);
        vaulter.bezierCurveTo(247.4, 157.4, 249.4, 157.2, 250.2, 156.6);
        vaulter.bezierCurveTo(251.0, 156.0, 251.1, 154.9, 250.2, 153.9);
        vaulter.bezierCurveTo(249.3, 152.9, 247.3, 151.5, 245.4, 150.6);
        vaulter.bezierCurveTo(243.4, 149.7, 239.4, 146.3, 238.3, 147.1);
        vaulter.bezierCurveTo(237.7, 147.5, 239.4, 150.0, 240.3, 150.4);
        vaulter.bezierCurveTo(240.3, 150.4, 242.5, 153.9, 244.4, 155.5);
        vaulter.bezierCurveTo(244.4, 155.5, 239.6, 159.1, 235.4, 161.4);
        vaulter.bezierCurveTo(231.2, 163.7, 227.1, 166.1, 227.2, 168.6);
        vaulter.bezierCurveTo(227.4, 171.2, 229.1, 174.1, 231.8, 175.8);
        vaulter.lineTo(239.0, 180.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(219.8, 182.4);
        vaulter.bezierCurveTo(219.8, 182.4, 215.9, 180.0, 215.7, 171.2);
        vaulter.bezierCurveTo(215.7, 171.2, 212.6, 164.7, 212.0, 160.9);
        vaulter.bezierCurveTo(212.0, 160.9, 208.4, 151.5, 206.3, 148.7);
        vaulter.bezierCurveTo(206.3, 148.7, 204.4, 146.8, 203.6, 146.5);
        vaulter.bezierCurveTo(202.8, 146.2, 203.5, 142.8, 203.6, 142.5);
        vaulter.bezierCurveTo(203.8, 142.2, 206.4, 142.5, 206.4, 142.5);
        vaulter.bezierCurveTo(206.4, 142.5, 208.3, 141.5, 209.0, 141.5);
        vaulter.bezierCurveTo(209.8, 141.5, 211.4, 144.2, 210.8, 145.7);
        vaulter.bezierCurveTo(210.1, 147.3, 210.1, 148.5, 210.8, 149.9);
        vaulter.bezierCurveTo(211.4, 151.3, 216.1, 158.1, 216.6, 159.7);
        vaulter.bezierCurveTo(217.1, 161.2, 220.7, 168.6, 220.7, 168.6);
        vaulter.bezierCurveTo(220.7, 168.6, 222.9, 171.5, 224.3, 175.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(241.8, 188.4);
        vaulter.bezierCurveTo(247.0, 188.1, 252.1, 184.7, 251.9, 180.1);
        vaulter.bezierCurveTo(251.8, 175.4, 239.8, 165.5, 239.8, 165.5);
        vaulter.bezierCurveTo(244.1, 163.1, 248.4, 157.8, 252.0, 155.0);
        vaulter.bezierCurveTo(252.0, 155.0, 254.3, 155.4, 255.0, 155.0);
        vaulter.bezierCurveTo(255.6, 154.6, 256.4, 152.8, 255.1, 151.5);
        vaulter.bezierCurveTo(253.7, 150.3, 252.8, 148.5, 252.1, 147.3);
        vaulter.bezierCurveTo(251.3, 145.9, 250.3, 142.3, 250.3, 142.3);
        vaulter.bezierCurveTo(250.3, 142.3, 249.4, 141.4, 248.9, 141.8);
        vaulter.bezierCurveTo(248.4, 142.2, 248.6, 144.1, 248.7, 144.5);
        vaulter.bezierCurveTo(249.2, 146.3, 248.1, 148.6, 249.6, 152.0);
        vaulter.bezierCurveTo(241.9, 158.7, 235.2, 160.2, 231.4, 163.8);
        vaulter.bezierCurveTo(231.4, 163.8, 227.1, 167.7, 228.6, 170.6);
        vaulter.bezierCurveTo(230.0, 173.5, 241.4, 180.8, 241.4, 180.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(228.0, 166.9);
        vaulter.bezierCurveTo(228.0, 166.9, 229.7, 160.0, 231.1, 158.0);
        vaulter.bezierCurveTo(231.1, 158.0, 231.1, 152.9, 232.8, 147.9);
        vaulter.bezierCurveTo(232.8, 147.9, 232.7, 145.2, 233.8, 143.3);
        vaulter.bezierCurveTo(234.9, 141.5, 234.7, 138.1, 234.7, 138.1);
        vaulter.bezierCurveTo(234.7, 138.1, 233.3, 136.7, 233.9, 134.9);
        vaulter.bezierCurveTo(234.5, 133.2, 235.9, 134.1, 235.9, 134.1);
        vaulter.bezierCurveTo(235.9, 134.1, 238.2, 134.0, 239.2, 134.9);
        vaulter.bezierCurveTo(240.1, 135.8, 240.3, 138.3, 239.2, 138.8);
        vaulter.bezierCurveTo(238.1, 139.2, 237.3, 142.7, 237.3, 142.7);
        vaulter.bezierCurveTo(237.3, 142.7, 237.3, 147.9, 236.7, 148.4);
        vaulter.bezierCurveTo(236.7, 148.4, 236.1, 156.8, 235.4, 158.8);
        vaulter.bezierCurveTo(235.4, 158.8, 235.6, 166.6, 234.7, 168.4);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(226.5, 163.4);
        vaulter.bezierCurveTo(226.5, 163.4, 222.4, 160.5, 221.3, 160.3);
        vaulter.bezierCurveTo(220.1, 160.2, 215.9, 160.1, 215.9, 160.1);
        vaulter.bezierCurveTo(215.9, 160.1, 210.9, 161.1, 210.5, 165.5);
        vaulter.bezierCurveTo(210.2, 169.9, 215.2, 171.9, 217.3, 172.1);
        vaulter.bezierCurveTo(219.5, 172.3, 224.9, 170.8, 224.9, 170.8);
        vaulter.bezierCurveTo(224.9, 170.8, 225.3, 170.7, 225.7, 170.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(240.3, 173.6);
        vaulter.bezierCurveTo(240.5, 172.0, 238.5, 166.9, 233.1, 166.2);
        vaulter.bezierCurveTo(228.5, 165.7, 226.2, 168.0, 226.0, 170.1);
        vaulter.bezierCurveTo(225.8, 171.8, 228.2, 174.5, 232.1, 175.5);
        vaulter.bezierCurveTo(235.7, 175.4, 235.2, 176.2, 239.1, 174.8);
        vaulter.bezierCurveTo(239.1, 174.8, 240.1, 174.4, 240.3, 173.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(294.9, 343.0);
        vaulter.lineTo(292.9, 343.0);
        vaulter.bezierCurveTo(292.9, 342.8, 293.1, 241.8, 293.1, 232.2);
        vaulter.bezierCurveTo(293.2, 215.1, 290.7, 187.4, 276.9, 163.8);
        vaulter.bezierCurveTo(267.9, 148.6, 253.6, 139.5, 234.2, 136.8);
        vaulter.bezierCurveTo(219.7, 134.8, 207.7, 137.3, 207.6, 137.3);
        vaulter.bezierCurveTo(207.6, 137.3, 206.5, 137.4, 206.4, 136.5);
        vaulter.bezierCurveTo(206.2, 135.5, 207.1, 135.2, 207.1, 135.2);
        vaulter.bezierCurveTo(207.6, 135.1, 219.6, 132.6, 234.5, 134.6);
        vaulter.bezierCurveTo(248.3, 136.5, 267.1, 143.0, 278.8, 162.8);
        vaulter.bezierCurveTo(292.8, 186.7, 295.3, 214.9, 295.3, 232.2);
        vaulter.bezierCurveTo(295.3, 242.0, 294.9, 342.8, 294.9, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(229.8, 164.5);
        vaulter.bezierCurveTo(229.8, 164.5, 225.5, 165.8, 225.2, 168.7);
        vaulter.bezierCurveTo(225.0, 171.6, 226.7, 175.9, 232.1, 176.8);
        vaulter.bezierCurveTo(237.5, 177.6, 239.7, 177.2, 243.0, 177.8);
        vaulter.bezierCurveTo(246.4, 178.4, 250.9, 175.7, 250.8, 172.4);
        vaulter.bezierCurveTo(250.7, 169.1, 245.3, 167.2, 243.3, 167.0);
        vaulter.bezierCurveTo(241.2, 166.8, 235.0, 166.4, 233.7, 165.6);
        vaulter.bezierCurveTo(232.5, 164.7, 229.8, 164.5, 229.8, 164.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(232.8, 167.6);
        vaulter.bezierCurveTo(232.8, 167.6, 231.0, 160.6, 229.0, 157.2);
        vaulter.bezierCurveTo(229.0, 157.2, 226.7, 150.2, 225.2, 148.3);
        vaulter.bezierCurveTo(225.2, 148.3, 223.2, 144.0, 221.3, 141.9);
        vaulter.bezierCurveTo(219.5, 139.7, 219.5, 137.6, 219.5, 137.6);
        vaulter.bezierCurveTo(219.5, 137.6, 220.9, 136.8, 220.9, 135.9);
        vaulter.bezierCurveTo(220.9, 134.9, 219.5, 133.0, 219.5, 133.0);
        vaulter.bezierCurveTo(219.5, 133.0, 217.3, 133.4, 216.4, 133.6);
        vaulter.bezierCurveTo(215.6, 133.8, 214.8, 132.9, 214.3, 133.0);
        vaulter.bezierCurveTo(213.7, 133.1, 212.8, 135.7, 213.6, 136.8);
        vaulter.bezierCurveTo(214.3, 137.9, 216.0, 138.0, 216.4, 138.6);
        vaulter.bezierCurveTo(216.9, 139.1, 218.9, 145.6, 220.6, 148.8);
        vaulter.lineTo(224.2, 158.2);
        vaulter.bezierCurveTo(224.2, 158.2, 224.4, 165.7, 226.8, 171.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(249.0, 175.9);
        vaulter.bezierCurveTo(253.0, 175.5, 259.4, 170.5, 259.2, 167.4);
        vaulter.bezierCurveTo(259.0, 164.3, 254.4, 159.4, 249.9, 159.4);
        vaulter.bezierCurveTo(245.3, 159.4, 237.3, 159.4, 237.3, 159.4);
        vaulter.bezierCurveTo(237.3, 159.4, 239.7, 157.1, 240.8, 154.2);
        vaulter.bezierCurveTo(241.8, 151.3, 242.8, 143.4, 243.7, 141.8);
        vaulter.bezierCurveTo(244.5, 140.1, 246.3, 140.0, 246.2, 138.8);
        vaulter.bezierCurveTo(246.1, 137.7, 244.7, 136.1, 243.3, 136.3);
        vaulter.bezierCurveTo(241.8, 136.5, 236.6, 134.9, 236.6, 134.9);
        vaulter.bezierCurveTo(236.6, 134.9, 233.2, 133.9, 234.0, 135.7);
        vaulter.bezierCurveTo(234.8, 137.3, 235.8, 137.5, 235.8, 137.5);
        vaulter.bezierCurveTo(235.8, 137.5, 238.8, 140.0, 241.0, 140.5);
        vaulter.lineTo(234.7, 152.9);
        vaulter.bezierCurveTo(234.7, 152.9, 229.7, 158.5, 230.1, 159.5);
        vaulter.bezierCurveTo(230.5, 160.5, 231.4, 164.9, 233.7, 165.6);
        vaulter.bezierCurveTo(236.1, 166.2, 247.6, 168.5, 247.6, 168.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(259.2, 167.4);
        vaulter.bezierCurveTo(259.7, 163.5, 254.4, 157.5, 249.3, 156.8);
        vaulter.bezierCurveTo(244.1, 156.1, 241.3, 156.1, 241.3, 156.1);
        vaulter.bezierCurveTo(241.3, 156.1, 243.4, 153.7, 244.0, 151.2);
        vaulter.bezierCurveTo(244.6, 148.7, 247.9, 139.9, 249.4, 138.1);
        vaulter.bezierCurveTo(249.4, 138.1, 252.1, 137.8, 252.2, 136.3);
        vaulter.bezierCurveTo(252.4, 134.7, 251.0, 133.8, 250.3, 133.8);
        vaulter.bezierCurveTo(249.6, 133.8, 246.8, 132.6, 245.5, 131.9);
        vaulter.bezierCurveTo(244.3, 131.3, 240.9, 129.1, 240.4, 129.9);
        vaulter.bezierCurveTo(239.9, 130.7, 240.9, 131.8, 241.7, 132.2);
        vaulter.bezierCurveTo(241.7, 132.2, 244.1, 135.8, 246.0, 136.4);
        vaulter.bezierCurveTo(241.2, 146.1, 238.8, 146.6, 233.3, 156.1);
        vaulter.bezierCurveTo(233.3, 156.1, 231.3, 158.7, 233.3, 162.4);
        vaulter.bezierCurveTo(235.2, 166.1, 246.6, 167.4, 246.6, 167.4);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

      var alpha =   vaulter.globalAlpha;

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(238.6, 155.3);
        vaulter.bezierCurveTo(238.6, 155.3, 240.3, 147.7, 242.0, 145.4);
        vaulter.bezierCurveTo(242.0, 145.4, 242.3, 135.3, 243.2, 133.8);
        vaulter.bezierCurveTo(243.2, 133.8, 243.7, 129.0, 244.3, 126.5);
        vaulter.bezierCurveTo(245.0, 124.0, 244.3, 121.6, 244.3, 121.6);
        vaulter.bezierCurveTo(244.3, 121.6, 244.3, 118.9, 246.0, 119.1);
        vaulter.bezierCurveTo(247.7, 119.3, 249.8, 121.5, 250.6, 123.0);
        vaulter.bezierCurveTo(251.4, 124.4, 248.6, 125.5, 248.3, 126.3);
        vaulter.bezierCurveTo(247.8, 127.7, 248.0, 132.5, 247.1, 134.8);
        vaulter.bezierCurveTo(246.5, 136.5, 247.2, 142.8, 246.8, 145.7);
        vaulter.bezierCurveTo(246.8, 145.7, 246.8, 152.9, 245.8, 155.3);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(238.1, 149.6);
        vaulter.bezierCurveTo(238.1, 149.6, 233.1, 148.3, 231.9, 148.6);
        vaulter.bezierCurveTo(230.7, 148.8, 226.5, 150.3, 226.5, 150.3);
        vaulter.bezierCurveTo(226.5, 150.3, 222.0, 153.1, 223.2, 157.6);
        vaulter.bezierCurveTo(224.5, 162.1, 230.2, 162.2, 232.4, 161.6);
        vaulter.bezierCurveTo(234.6, 161.0, 239.3, 157.4, 239.3, 157.4);
        vaulter.bezierCurveTo(239.3, 157.4, 239.6, 157.3, 240.1, 157.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.globalAlpha = alpha * 0.50;
        vaulter.beginPath();
        vaulter.moveTo(255.4, 154.0);
        vaulter.bezierCurveTo(255.0, 152.4, 251.2, 148.0, 245.6, 149.4);
        vaulter.bezierCurveTo(240.9, 150.6, 239.5, 153.7, 240.1, 155.9);
        vaulter.bezierCurveTo(240.5, 157.6, 243.9, 159.4, 248.1, 158.9);
        vaulter.bezierCurveTo(251.5, 157.5, 251.4, 158.5, 254.7, 155.6);
        vaulter.bezierCurveTo(254.7, 155.6, 255.5, 154.8, 255.4, 154.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.globalAlpha = alpha * 1.00;
        vaulter.beginPath();
        vaulter.moveTo(294.9, 343.0);
        vaulter.bezierCurveTo(295.0, 323.3, 295.3, 237.4, 295.4, 232.3);
        vaulter.bezierCurveTo(295.5, 219.1, 294.0, 192.9, 282.9, 162.9);
        vaulter.bezierCurveTo(274.4, 140.3, 259.5, 127.8, 248.5, 121.3);
        vaulter.bezierCurveTo(236.5, 114.2, 226.6, 112.5, 226.2, 112.5);
        vaulter.bezierCurveTo(226.2, 112.5, 225.1, 112.4, 224.9, 113.4);
        vaulter.bezierCurveTo(224.7, 114.4, 225.9, 114.7, 225.9, 114.7);
        vaulter.bezierCurveTo(226.0, 114.7, 235.7, 116.4, 247.3, 123.2);
        vaulter.bezierCurveTo(258.0, 129.5, 272.5, 141.7, 280.7, 163.7);
        vaulter.bezierCurveTo(291.8, 193.4, 293.2, 219.3, 293.1, 232.3);
        vaulter.bezierCurveTo(293.1, 237.3, 293.0, 323.3, 292.9, 343.0);
        vaulter.lineTo(294.9, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(238.3, 153.7);
        vaulter.bezierCurveTo(238.8, 158.3, 239.5, 160.7, 242.3, 160.7);
        vaulter.bezierCurveTo(245.4, 160.6, 246.6, 159.3, 251.9, 159.8);
        vaulter.bezierCurveTo(259.3, 160.4, 263.3, 158.2, 262.6, 153.7);
        vaulter.bezierCurveTo(261.7, 147.4, 257.7, 148.8, 254.8, 148.6);
        vaulter.bezierCurveTo(251.9, 148.4, 247.9, 148.6, 247.9, 148.6);
        vaulter.bezierCurveTo(242.1, 148.6, 237.9, 149.7, 238.3, 153.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(260.9, 158.4);
        vaulter.bezierCurveTo(260.9, 158.4, 267.3, 155.3, 268.9, 150.4);
        vaulter.bezierCurveTo(270.4, 145.5, 267.4, 139.7, 262.9, 137.7);
        vaulter.bezierCurveTo(258.4, 135.7, 247.4, 137.7, 247.4, 137.7);
        vaulter.bezierCurveTo(247.4, 137.7, 246.9, 131.9, 246.3, 130.6);
        vaulter.bezierCurveTo(245.0, 127.3, 240.5, 114.0, 240.5, 113.6);
        vaulter.bezierCurveTo(240.5, 113.2, 242.1, 111.4, 241.4, 110.5);
        vaulter.bezierCurveTo(240.8, 109.6, 238.1, 107.6, 236.7, 108.0);
        vaulter.bezierCurveTo(235.4, 108.5, 226.9, 108.0, 226.9, 108.0);
        vaulter.bezierCurveTo(226.9, 108.0, 224.5, 108.0, 224.5, 108.9);
        vaulter.bezierCurveTo(224.5, 109.8, 226.3, 110.9, 227.6, 110.9);
        vaulter.bezierCurveTo(227.6, 110.9, 234.1, 114.8, 236.1, 114.7);
        vaulter.bezierCurveTo(238.1, 122.1, 239.5, 142.2, 240.8, 143.7);
        vaulter.bezierCurveTo(242.1, 145.3, 244.3, 145.6, 248.3, 147.1);
        vaulter.bezierCurveTo(252.3, 148.5, 260.1, 148.5, 260.1, 148.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(260.9, 158.4);
        vaulter.bezierCurveTo(260.9, 158.4, 267.3, 155.3, 268.9, 150.4);
        vaulter.bezierCurveTo(270.4, 145.5, 268.3, 139.2, 263.7, 137.2);
        vaulter.bezierCurveTo(259.2, 135.2, 249.0, 136.2, 249.0, 136.2);
        vaulter.bezierCurveTo(249.0, 136.2, 248.4, 130.4, 247.9, 129.1);
        vaulter.bezierCurveTo(246.6, 125.9, 242.1, 112.5, 242.1, 112.1);
        vaulter.bezierCurveTo(242.1, 111.7, 243.7, 109.9, 243.0, 109.0);
        vaulter.bezierCurveTo(242.3, 108.1, 239.6, 106.1, 238.3, 106.5);
        vaulter.bezierCurveTo(237.0, 107.0, 228.5, 106.5, 228.5, 106.5);
        vaulter.bezierCurveTo(228.5, 106.5, 226.0, 106.5, 226.0, 107.4);
        vaulter.bezierCurveTo(226.0, 108.3, 227.8, 109.4, 229.2, 109.4);
        vaulter.bezierCurveTo(229.2, 109.4, 235.7, 113.3, 237.6, 113.2);
        vaulter.bezierCurveTo(239.7, 120.6, 241.0, 140.7, 242.4, 142.2);
        vaulter.bezierCurveTo(243.7, 143.8, 245.9, 144.1, 249.9, 145.6);
        vaulter.bezierCurveTo(253.9, 147.0, 261.7, 145.8, 261.7, 145.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(238.3, 156.2);
        vaulter.bezierCurveTo(238.3, 156.2, 237.3, 146.2, 238.3, 141.9);
        vaulter.bezierCurveTo(238.3, 141.9, 236.1, 137.9, 235.6, 131.4);
        vaulter.bezierCurveTo(235.6, 131.4, 234.7, 126.5, 234.1, 124.3);
        vaulter.bezierCurveTo(233.4, 122.1, 231.6, 119.2, 231.6, 119.2);
        vaulter.bezierCurveTo(231.6, 119.2, 229.6, 114.7, 230.7, 113.6);
        vaulter.bezierCurveTo(231.8, 112.5, 236.1, 113.6, 236.1, 113.6);
        vaulter.bezierCurveTo(236.1, 113.6, 237.6, 116.2, 236.7, 119.2);
        vaulter.bezierCurveTo(236.7, 119.2, 238.1, 124.5, 239.4, 129.4);
        vaulter.lineTo(243.0, 141.0);
        vaulter.bezierCurveTo(243.0, 141.0, 246.8, 152.2, 246.8, 153.5);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(245.7, 146.5);
        vaulter.bezierCurveTo(245.7, 146.5, 248.5, 142.4, 252.4, 142.0);
        vaulter.bezierCurveTo(252.6, 138.1, 254.0, 134.4, 254.1, 130.8);
        vaulter.bezierCurveTo(254.1, 130.8, 253.2, 127.2, 254.1, 126.0);
        vaulter.bezierCurveTo(254.9, 124.8, 256.8, 126.7, 256.8, 126.7);
        vaulter.bezierCurveTo(256.8, 126.7, 258.5, 128.9, 258.5, 130.1);
        vaulter.bezierCurveTo(258.5, 131.3, 257.6, 132.1, 257.6, 132.1);
        vaulter.bezierCurveTo(257.6, 132.1, 256.7, 136.2, 257.0, 137.9);
        vaulter.bezierCurveTo(257.0, 137.9, 257.4, 144.0, 257.1, 145.7);
        vaulter.bezierCurveTo(257.1, 145.7, 256.5, 148.8, 252.8, 150.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(245.7, 143.0);
        vaulter.bezierCurveTo(245.7, 143.0, 240.6, 141.6, 239.5, 141.9);
        vaulter.bezierCurveTo(238.3, 142.1, 234.1, 143.6, 234.1, 143.6);
        vaulter.bezierCurveTo(234.1, 143.6, 229.5, 146.4, 230.8, 150.9);
        vaulter.bezierCurveTo(232.1, 155.4, 237.8, 155.5, 239.9, 154.9);
        vaulter.bezierCurveTo(242.1, 154.3, 246.9, 150.8, 246.9, 150.8);
        vaulter.bezierCurveTo(246.9, 150.8, 247.2, 150.6, 247.6, 150.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(262.5, 147.8);
        vaulter.bezierCurveTo(262.2, 146.1, 258.4, 141.8, 252.7, 143.2);
        vaulter.bezierCurveTo(248.1, 144.3, 246.6, 147.5, 247.2, 149.6);
        vaulter.bezierCurveTo(247.7, 151.4, 251.1, 153.1, 255.2, 152.7);
        vaulter.bezierCurveTo(258.7, 151.2, 258.5, 152.2, 261.8, 149.4);
        vaulter.bezierCurveTo(261.8, 149.4, 262.6, 148.6, 262.5, 147.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(294.9, 343.0);
        vaulter.lineTo(295.4, 235.1);
        vaulter.bezierCurveTo(295.3, 233.0, 293.9, 182.5, 285.5, 163.3);
        vaulter.bezierCurveTo(277.0, 144.1, 235.7, 107.6, 233.9, 106.0);
        vaulter.bezierCurveTo(233.9, 106.0, 233.0, 105.3, 232.3, 106.1);
        vaulter.bezierCurveTo(231.6, 106.9, 232.4, 107.7, 232.4, 107.7);
        vaulter.bezierCurveTo(232.8, 108.1, 275.1, 145.5, 283.4, 164.2);
        vaulter.bezierCurveTo(291.7, 183.0, 293.1, 234.7, 293.1, 235.2);
        vaulter.lineTo(292.9, 343.0);
        vaulter.lineTo(294.9, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(245.4, 146.8);
        vaulter.bezierCurveTo(245.3, 149.3, 247.6, 154.0, 250.5, 153.8);
        vaulter.bezierCurveTo(253.4, 153.5, 262.8, 151.8, 265.7, 150.3);
        vaulter.bezierCurveTo(268.6, 148.8, 271.7, 144.6, 271.1, 140.2);
        vaulter.bezierCurveTo(270.4, 135.7, 265.0, 137.0, 262.9, 138.4);
        vaulter.bezierCurveTo(260.8, 139.7, 253.7, 140.2, 251.7, 140.2);
        vaulter.bezierCurveTo(249.7, 140.2, 245.6, 142.6, 245.4, 146.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(253.4, 146.6);
        vaulter.bezierCurveTo(253.4, 146.6, 251.9, 138.4, 250.3, 135.7);
        vaulter.bezierCurveTo(250.3, 135.7, 250.1, 130.3, 247.6, 126.8);
        vaulter.bezierCurveTo(247.6, 126.8, 245.9, 119.4, 243.2, 114.3);
        vaulter.bezierCurveTo(243.2, 114.3, 243.9, 111.3, 243.0, 110.1);
        vaulter.bezierCurveTo(242.2, 108.9, 239.4, 109.1, 238.3, 109.8);
        vaulter.bezierCurveTo(237.7, 110.2, 237.8, 112.0, 238.5, 113.1);
        vaulter.bezierCurveTo(239.2, 114.1, 240.4, 114.5, 240.5, 115.1);
        vaulter.bezierCurveTo(241.3, 118.0, 242.1, 125.2, 243.2, 127.9);
        vaulter.bezierCurveTo(243.2, 127.9, 243.7, 133.3, 245.1, 136.7);
        vaulter.bezierCurveTo(245.1, 136.7, 244.9, 143.9, 246.1, 148.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(267.8, 148.8);
        vaulter.bezierCurveTo(267.8, 148.8, 273.3, 143.3, 274.6, 139.5);
        vaulter.bezierCurveTo(276.0, 135.7, 274.1, 131.2, 271.2, 128.9);
        vaulter.bezierCurveTo(268.2, 126.5, 255.2, 121.6, 255.2, 121.6);
        vaulter.bezierCurveTo(254.6, 118.1, 245.4, 110.5, 243.6, 104.5);
        vaulter.bezierCurveTo(243.6, 104.5, 246.0, 102.7, 245.4, 101.4);
        vaulter.bezierCurveTo(244.6, 100.0, 243.2, 99.3, 242.1, 99.8);
        vaulter.bezierCurveTo(241.0, 100.2, 236.6, 99.1, 235.7, 99.1);
        vaulter.bezierCurveTo(234.8, 99.1, 230.6, 98.7, 230.6, 99.6);
        vaulter.bezierCurveTo(230.6, 100.5, 231.8, 101.2, 232.8, 101.3);
        vaulter.bezierCurveTo(233.9, 101.4, 238.4, 105.2, 239.9, 105.2);
        vaulter.bezierCurveTo(239.9, 105.2, 249.7, 126.9, 250.8, 127.2);
        vaulter.bezierCurveTo(251.9, 127.5, 262.9, 137.7, 262.9, 137.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(267.3, 149.2);
        vaulter.bezierCurveTo(267.3, 149.2, 272.8, 144.0, 274.4, 140.4);
        vaulter.bezierCurveTo(276.1, 136.7, 274.7, 132.1, 272.0, 129.5);
        vaulter.bezierCurveTo(269.2, 126.9, 256.8, 120.8, 256.8, 120.8);
        vaulter.bezierCurveTo(256.5, 117.2, 248.1, 108.8, 246.8, 102.6);
        vaulter.bezierCurveTo(246.8, 102.6, 249.4, 101.0, 248.9, 99.7);
        vaulter.bezierCurveTo(248.3, 98.3, 246.9, 97.5, 245.7, 97.8);
        vaulter.bezierCurveTo(244.6, 98.1, 240.3, 96.7, 239.5, 96.6);
        vaulter.bezierCurveTo(238.6, 96.5, 234.4, 95.7, 234.3, 96.5);
        vaulter.bezierCurveTo(234.2, 97.4, 235.4, 98.3, 236.4, 98.5);
        vaulter.bezierCurveTo(237.5, 98.6, 241.5, 102.8, 243.1, 103.0);
        vaulter.bezierCurveTo(243.1, 103.0, 250.8, 125.5, 251.9, 125.9);
        vaulter.bezierCurveTo(253.0, 126.3, 262.9, 137.5, 262.9, 137.5);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(249.7, 138.1);
        vaulter.bezierCurveTo(249.7, 138.1, 251.2, 133.8, 257.0, 133.2);
        vaulter.bezierCurveTo(257.0, 133.2, 257.3, 127.6, 257.7, 124.0);
        vaulter.bezierCurveTo(258.1, 120.5, 257.2, 116.0, 257.2, 116.0);
        vaulter.lineTo(256.0, 113.8);
        vaulter.bezierCurveTo(256.0, 113.8, 256.5, 111.5, 257.8, 111.5);
        vaulter.bezierCurveTo(259.1, 111.6, 260.7, 114.0, 260.7, 114.0);
        vaulter.bezierCurveTo(260.7, 114.0, 261.9, 116.0, 261.3, 116.4);
        vaulter.bezierCurveTo(260.6, 116.9, 260.6, 117.7, 260.6, 117.7);
        vaulter.bezierCurveTo(260.6, 117.7, 261.0, 124.1, 261.5, 124.8);
        vaulter.bezierCurveTo(261.9, 125.5, 262.9, 134.3, 262.5, 136.3);
        vaulter.bezierCurveTo(262.1, 138.4, 257.7, 140.9, 257.7, 140.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(250.4, 135.2);
        vaulter.bezierCurveTo(250.4, 135.2, 245.2, 134.4, 244.0, 134.8);
        vaulter.bezierCurveTo(242.9, 135.2, 238.9, 137.1, 238.9, 137.1);
        vaulter.bezierCurveTo(238.9, 137.1, 234.7, 140.4, 236.4, 144.7);
        vaulter.bezierCurveTo(238.1, 149.0, 243.8, 148.6, 245.9, 147.7);
        vaulter.bezierCurveTo(248.0, 146.9, 252.4, 142.8, 252.4, 142.8);
        vaulter.bezierCurveTo(252.4, 142.8, 252.7, 142.7, 253.1, 142.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(293.0, 343.0);
        vaulter.bezierCurveTo(293.2, 316.7, 293.6, 246.6, 293.2, 235.4);
        vaulter.bezierCurveTo(292.3, 211.2, 289.1, 173.9, 278.2, 149.4);
        vaulter.bezierCurveTo(261.2, 111.1, 236.7, 96.2, 236.5, 96.1);
        vaulter.bezierCurveTo(236.5, 96.1, 235.1, 95.1, 235.8, 94.3);
        vaulter.bezierCurveTo(236.4, 93.6, 237.6, 94.1, 237.6, 94.1);
        vaulter.bezierCurveTo(237.9, 94.3, 262.9, 109.5, 280.3, 148.5);
        vaulter.bezierCurveTo(291.3, 173.3, 294.5, 211.0, 295.5, 235.3);
        vaulter.bezierCurveTo(295.9, 246.6, 295.3, 316.7, 295.0, 343.0);
        vaulter.lineTo(293.0, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(249.9, 138.7);
        vaulter.bezierCurveTo(250.9, 140.8, 254.4, 145.4, 257.9, 144.3);
        vaulter.bezierCurveTo(261.5, 143.2, 270.4, 140.5, 273.3, 137.0);
        vaulter.bezierCurveTo(276.2, 133.6, 275.8, 128.7, 273.3, 126.9);
        vaulter.bezierCurveTo(270.9, 125.1, 264.8, 127.3, 263.9, 129.1);
        vaulter.bezierCurveTo(263.0, 130.9, 255.9, 132.9, 253.5, 132.9);
        vaulter.bezierCurveTo(251.0, 132.9, 249.0, 136.8, 249.9, 138.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(273.3, 137.0);
        vaulter.bezierCurveTo(273.3, 137.0, 277.0, 132.8, 278.5, 126.2);
        vaulter.bezierCurveTo(280.1, 119.7, 273.4, 114.5, 268.3, 112.3);
        vaulter.bezierCurveTo(266.5, 111.5, 262.2, 108.6, 262.2, 108.6);
        vaulter.bezierCurveTo(261.6, 104.8, 250.7, 90.3, 250.7, 90.3);
        vaulter.bezierCurveTo(250.7, 90.3, 251.0, 87.9, 250.7, 87.1);
        vaulter.bezierCurveTo(250.5, 86.2, 249.6, 84.9, 248.3, 85.1);
        vaulter.bezierCurveTo(246.9, 85.2, 238.9, 85.1, 238.9, 85.1);
        vaulter.bezierCurveTo(238.9, 85.1, 237.2, 85.3, 237.0, 86.1);
        vaulter.bezierCurveTo(236.9, 86.9, 237.5, 87.9, 239.3, 87.9);
        vaulter.bezierCurveTo(239.3, 87.9, 245.2, 90.9, 247.9, 90.6);
        vaulter.lineTo(256.8, 113.1);
        vaulter.bezierCurveTo(256.8, 113.1, 262.2, 121.6, 267.3, 124.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(272.1, 137.9);
        vaulter.bezierCurveTo(272.1, 137.9, 275.8, 133.6, 277.3, 127.1);
        vaulter.bezierCurveTo(278.8, 120.5, 272.1, 115.3, 267.1, 113.2);
        vaulter.bezierCurveTo(265.3, 112.4, 260.9, 109.5, 260.9, 109.5);
        vaulter.bezierCurveTo(260.3, 105.6, 249.5, 91.1, 249.5, 91.1);
        vaulter.bezierCurveTo(249.5, 91.1, 249.7, 88.7, 249.5, 87.9);
        vaulter.bezierCurveTo(249.2, 87.1, 248.4, 85.7, 247.0, 85.9);
        vaulter.bezierCurveTo(245.7, 86.1, 237.7, 85.9, 237.7, 85.9);
        vaulter.bezierCurveTo(237.7, 85.9, 236.0, 86.1, 235.8, 86.9);
        vaulter.bezierCurveTo(235.6, 87.8, 236.3, 88.8, 238.0, 88.7);
        vaulter.bezierCurveTo(238.0, 88.7, 243.9, 91.8, 246.7, 91.4);
        vaulter.lineTo(255.6, 113.9);
        vaulter.bezierCurveTo(255.6, 113.9, 260.9, 122.5, 266.1, 125.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(266.8, 137.0);
        vaulter.bezierCurveTo(266.2, 135.3, 261.9, 131.4, 256.5, 133.4);
        vaulter.bezierCurveTo(252.0, 135.0, 250.9, 138.3, 251.7, 140.4);
        vaulter.bezierCurveTo(252.3, 142.1, 255.9, 143.5, 260.0, 142.6);
        vaulter.bezierCurveTo(263.3, 140.8, 263.2, 141.8, 266.2, 138.6);
        vaulter.bezierCurveTo(266.2, 138.6, 266.9, 137.7, 266.8, 137.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(251.6, 141.3);
        vaulter.bezierCurveTo(251.6, 141.3, 249.3, 137.2, 250.2, 130.4);
        vaulter.bezierCurveTo(250.2, 130.4, 248.1, 125.6, 247.4, 118.4);
        vaulter.bezierCurveTo(247.4, 118.4, 246.3, 115.2, 246.5, 110.7);
        vaulter.bezierCurveTo(246.6, 106.1, 245.3, 103.3, 245.3, 103.3);
        vaulter.bezierCurveTo(245.3, 103.3, 243.6, 102.1, 243.7, 100.0);
        vaulter.bezierCurveTo(243.9, 98.0, 245.3, 99.0, 245.3, 99.0);
        vaulter.bezierCurveTo(245.3, 99.0, 247.1, 99.7, 247.7, 99.3);
        vaulter.bezierCurveTo(248.3, 99.0, 249.7, 101.7, 249.7, 101.7);
        vaulter.bezierCurveTo(249.7, 101.7, 249.2, 103.6, 248.3, 104.1);
        vaulter.bezierCurveTo(248.3, 104.1, 249.6, 109.9, 250.0, 111.1);
        vaulter.bezierCurveTo(250.5, 112.3, 252.4, 116.6, 252.3, 118.0);
        vaulter.lineTo(255.6, 129.9);
        vaulter.bezierCurveTo(255.6, 129.9, 257.7, 133.8, 257.7, 136.4);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(254.4, 131.2);
        vaulter.bezierCurveTo(254.4, 131.2, 255.8, 128.2, 259.5, 128.0);
        vaulter.lineTo(264.0, 124.3);
        vaulter.bezierCurveTo(263.2, 123.5, 263.1, 116.1, 263.1, 116.1);
        vaulter.bezierCurveTo(263.1, 116.1, 261.6, 114.6, 261.2, 109.4);
        vaulter.bezierCurveTo(261.2, 109.4, 259.7, 107.5, 259.8, 106.4);
        vaulter.bezierCurveTo(259.9, 105.3, 261.2, 104.4, 261.2, 104.4);
        vaulter.bezierCurveTo(261.2, 104.4, 264.2, 104.9, 264.6, 105.5);
        vaulter.bezierCurveTo(264.9, 106.1, 264.7, 108.3, 264.6, 108.9);
        vaulter.bezierCurveTo(264.5, 109.5, 266.9, 116.1, 266.9, 116.1);
        vaulter.bezierCurveTo(266.9, 116.1, 269.8, 125.1, 269.7, 126.9);
        vaulter.bezierCurveTo(269.6, 128.7, 264.3, 131.7, 264.3, 131.7);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(255.5, 128.2);
        vaulter.bezierCurveTo(255.5, 128.2, 250.2, 127.7, 249.1, 128.2);
        vaulter.bezierCurveTo(247.9, 128.7, 244.0, 130.9, 244.0, 130.9);
        vaulter.bezierCurveTo(244.0, 130.9, 240.0, 134.5, 242.0, 138.8);
        vaulter.bezierCurveTo(244.1, 143.1, 249.8, 142.2, 251.9, 141.2);
        vaulter.bezierCurveTo(254.0, 140.2, 258.1, 135.8, 258.1, 135.8);
        vaulter.bezierCurveTo(258.1, 135.8, 258.4, 135.5, 258.8, 135.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(254.4, 131.2);
        vaulter.bezierCurveTo(254.4, 133.1, 255.6, 139.2, 261.4, 137.3);
        vaulter.bezierCurveTo(267.1, 135.4, 276.4, 131.6, 278.9, 123.4);
        vaulter.bezierCurveTo(281.4, 115.1, 275.5, 116.2, 275.5, 116.2);
        vaulter.bezierCurveTo(275.5, 116.2, 270.2, 116.4, 268.9, 118.9);
        vaulter.bezierCurveTo(267.7, 121.4, 261.8, 124.6, 259.3, 125.1);
        vaulter.bezierCurveTo(256.7, 125.5, 254.3, 128.7, 254.4, 131.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(295.6, 254.2);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(293.3, 254.1);
        vaulter.bezierCurveTo(293.3, 253.6, 294.2, 196.6, 282.4, 154.3);
        vaulter.bezierCurveTo(270.7, 112.2, 242.2, 87.3, 241.9, 87.1);
        vaulter.bezierCurveTo(241.9, 87.1, 241.0, 86.3, 241.7, 85.5);
        vaulter.bezierCurveTo(242.5, 84.7, 243.4, 85.3, 243.4, 85.3);
        vaulter.bezierCurveTo(243.7, 85.6, 272.8, 110.9, 284.6, 153.7);
        vaulter.bezierCurveTo(296.5, 196.3, 295.6, 253.6, 295.6, 254.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(278.9, 123.4);
        vaulter.bezierCurveTo(281.3, 116.7, 281.3, 112.3, 280.8, 110.0);
        vaulter.bezierCurveTo(280.3, 107.8, 270.8, 99.6, 266.9, 97.1);
        vaulter.bezierCurveTo(266.7, 92.8, 262.2, 88.1, 260.9, 81.2);
        vaulter.bezierCurveTo(260.9, 81.2, 262.5, 79.5, 262.0, 78.5);
        vaulter.bezierCurveTo(261.6, 77.5, 260.0, 76.6, 259.2, 77.2);
        vaulter.bezierCurveTo(258.3, 77.7, 253.9, 78.9, 252.9, 78.7);
        vaulter.bezierCurveTo(251.8, 78.5, 250.5, 78.3, 250.0, 78.5);
        vaulter.bezierCurveTo(249.5, 78.7, 248.3, 79.5, 248.6, 80.4);
        vaulter.bezierCurveTo(248.8, 81.2, 250.5, 81.6, 251.8, 81.1);
        vaulter.bezierCurveTo(251.8, 81.1, 254.4, 82.8, 256.6, 82.3);
        vaulter.bezierCurveTo(256.6, 82.3, 260.8, 97.8, 262.0, 100.2);
        vaulter.bezierCurveTo(263.3, 102.5, 265.0, 107.0, 270.1, 114.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(277.8, 124.4);
        vaulter.bezierCurveTo(280.3, 117.7, 280.3, 113.3, 279.8, 111.1);
        vaulter.bezierCurveTo(279.3, 108.8, 269.7, 100.7, 265.9, 98.1);
        vaulter.bezierCurveTo(265.6, 93.9, 261.2, 89.1, 259.8, 82.3);
        vaulter.bezierCurveTo(259.8, 82.3, 261.5, 80.6, 261.0, 79.6);
        vaulter.bezierCurveTo(260.5, 78.5, 259.0, 77.7, 258.1, 78.2);
        vaulter.bezierCurveTo(257.3, 78.7, 252.9, 79.9, 251.8, 79.7);
        vaulter.bezierCurveTo(250.8, 79.6, 249.4, 79.4, 248.9, 79.6);
        vaulter.bezierCurveTo(248.4, 79.7, 247.3, 80.6, 247.5, 81.4);
        vaulter.bezierCurveTo(247.7, 82.3, 249.4, 82.6, 250.8, 82.1);
        vaulter.bezierCurveTo(250.8, 82.1, 253.4, 83.8, 255.6, 83.3);
        vaulter.bezierCurveTo(255.6, 83.3, 259.8, 98.9, 261.0, 101.2);
        vaulter.bezierCurveTo(262.2, 103.6, 263.8, 111.4, 268.9, 118.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(271.9, 128.6);
        vaulter.bezierCurveTo(271.2, 127.0, 266.6, 123.4, 261.3, 125.8);
        vaulter.bezierCurveTo(256.8, 127.8, 254.3, 130.9, 255.5, 134.0);
        vaulter.bezierCurveTo(257.0, 137.6, 261.7, 136.2, 265.5, 134.8);
        vaulter.bezierCurveTo(268.9, 133.3, 270.1, 132.5, 271.5, 130.4);
        vaulter.bezierCurveTo(271.5, 130.4, 272.1, 129.4, 271.9, 128.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(255.3, 132.5);
        vaulter.bezierCurveTo(255.3, 132.5, 254.3, 128.8, 255.3, 122.1);
        vaulter.lineTo(253.4, 111.9);
        vaulter.bezierCurveTo(252.2, 110.8, 252.1, 103.2, 251.6, 100.4);
        vaulter.bezierCurveTo(251.1, 97.6, 250.0, 96.7, 250.0, 96.7);
        vaulter.bezierCurveTo(250.0, 96.7, 248.3, 94.6, 248.6, 92.2);
        vaulter.bezierCurveTo(248.9, 89.8, 250.4, 91.1, 250.4, 91.1);
        vaulter.bezierCurveTo(250.4, 91.1, 253.3, 92.6, 253.7, 93.4);
        vaulter.bezierCurveTo(254.1, 94.3, 254.6, 96.7, 254.4, 97.4);
        vaulter.bezierCurveTo(254.1, 98.2, 255.0, 102.6, 255.9, 103.7);
        vaulter.bezierCurveTo(256.9, 104.8, 257.8, 110.6, 257.8, 111.6);
        vaulter.lineTo(260.4, 120.9);
        vaulter.bezierCurveTo(260.4, 120.9, 262.2, 124.1, 262.3, 126.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(264.2, 124.0);
        vaulter.bezierCurveTo(264.2, 124.0, 266.1, 120.8, 269.4, 120.4);
        vaulter.lineTo(270.7, 115.5);
        vaulter.lineTo(270.7, 105.3);
        vaulter.bezierCurveTo(270.7, 105.3, 270.0, 103.4, 270.7, 101.7);
        vaulter.bezierCurveTo(271.3, 100.1, 273.0, 99.9, 273.4, 100.5);
        vaulter.bezierCurveTo(273.8, 101.1, 275.7, 104.9, 274.5, 105.9);
        vaulter.bezierCurveTo(273.2, 107.0, 273.4, 107.7, 273.4, 107.7);
        vaulter.bezierCurveTo(273.4, 107.7, 274.5, 114.7, 274.5, 119.1);
        vaulter.bezierCurveTo(274.5, 120.7, 275.1, 122.9, 274.5, 124.2);
        vaulter.bezierCurveTo(273.3, 126.6, 270.4, 127.8, 270.1, 127.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(264.4, 126.5);
        vaulter.bezierCurveTo(264.4, 126.5, 259.1, 126.1, 257.9, 126.5);
        vaulter.bezierCurveTo(256.8, 127.0, 252.9, 129.2, 252.9, 129.2);
        vaulter.bezierCurveTo(252.9, 129.2, 248.8, 132.9, 250.9, 137.1);
        vaulter.bezierCurveTo(253.0, 141.4, 258.7, 140.5, 260.8, 139.5);
        vaulter.bezierCurveTo(262.9, 138.5, 267.0, 134.1, 267.0, 134.1);
        vaulter.bezierCurveTo(267.0, 134.1, 267.3, 133.9, 267.7, 133.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(264.2, 126.1);
        vaulter.bezierCurveTo(264.2, 126.1, 264.2, 131.8, 266.6, 133.8);
        vaulter.bezierCurveTo(269.0, 135.7, 273.8, 132.6, 275.4, 130.6);
        vaulter.bezierCurveTo(276.2, 129.5, 277.0, 127.3, 278.6, 125.6);
        vaulter.bezierCurveTo(280.3, 123.7, 282.8, 122.3, 283.7, 120.4);
        vaulter.bezierCurveTo(285.4, 116.7, 284.7, 110.8, 284.3, 110.4);
        vaulter.bezierCurveTo(284.0, 109.9, 281.5, 106.6, 276.2, 111.1);
        vaulter.bezierCurveTo(270.8, 115.5, 268.2, 117.2, 266.9, 119.0);
        vaulter.bezierCurveTo(265.5, 120.8, 263.8, 122.1, 264.2, 126.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(283.7, 120.4);
        vaulter.bezierCurveTo(287.3, 115.4, 287.5, 108.3, 286.6, 104.7);
        vaulter.bezierCurveTo(285.7, 101.1, 283.0, 91.5, 277.1, 86.8);
        vaulter.lineTo(274.5, 62.7);
        vaulter.bezierCurveTo(274.5, 62.7, 276.1, 61.7, 276.1, 60.9);
        vaulter.bezierCurveTo(276.1, 60.0, 276.1, 58.0, 274.5, 58.0);
        vaulter.bezierCurveTo(272.8, 58.0, 269.2, 57.1, 267.9, 56.6);
        vaulter.bezierCurveTo(266.5, 56.1, 264.5, 54.0, 261.7, 54.2);
        vaulter.bezierCurveTo(259.0, 54.4, 259.9, 55.4, 259.9, 55.4);
        vaulter.bezierCurveTo(259.9, 55.4, 260.7, 56.9, 262.4, 57.3);
        vaulter.bezierCurveTo(262.4, 57.3, 267.0, 62.2, 269.2, 62.7);
        vaulter.lineTo(270.9, 88.8);
        vaulter.bezierCurveTo(270.9, 88.8, 273.4, 101.7, 275.5, 105.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(281.4, 121.6);
        vaulter.bezierCurveTo(285.0, 116.6, 285.2, 109.5, 284.3, 105.9);
        vaulter.bezierCurveTo(283.4, 102.3, 280.7, 92.7, 274.8, 88.0);
        vaulter.lineTo(272.2, 63.9);
        vaulter.bezierCurveTo(272.2, 63.9, 273.8, 62.9, 273.8, 62.1);
        vaulter.bezierCurveTo(273.8, 61.2, 273.8, 59.2, 272.2, 59.2);
        vaulter.bezierCurveTo(270.5, 59.2, 266.9, 58.3, 265.6, 57.8);
        vaulter.bezierCurveTo(264.2, 57.3, 262.2, 55.2, 259.4, 55.4);
        vaulter.bezierCurveTo(256.7, 55.6, 257.6, 56.6, 257.6, 56.6);
        vaulter.bezierCurveTo(257.6, 56.6, 258.4, 58.1, 260.1, 58.5);
        vaulter.bezierCurveTo(260.1, 58.5, 264.7, 63.4, 266.9, 63.9);
        vaulter.lineTo(268.6, 90.0);
        vaulter.bezierCurveTo(268.6, 90.0, 271.1, 102.9, 273.2, 107.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(295.6, 254.1);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(293.3, 254.0);
        vaulter.bezierCurveTo(293.3, 253.3, 293.5, 183.0, 285.9, 153.1);
        vaulter.bezierCurveTo(278.3, 123.2, 264.0, 82.1, 263.9, 81.7);
        vaulter.bezierCurveTo(263.9, 81.7, 263.5, 80.6, 264.6, 80.2);
        vaulter.bezierCurveTo(265.8, 79.9, 266.1, 80.9, 266.1, 80.9);
        vaulter.bezierCurveTo(266.2, 81.3, 280.5, 122.5, 288.2, 152.6);
        vaulter.bezierCurveTo(295.9, 182.7, 295.6, 253.3, 295.6, 254.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(275.5, 118.8);
        vaulter.bezierCurveTo(273.9, 118.1, 268.0, 118.7, 265.8, 124.1);
        vaulter.bezierCurveTo(263.9, 128.7, 265.7, 131.7, 267.8, 132.6);
        vaulter.bezierCurveTo(269.5, 133.2, 273.7, 129.9, 275.1, 127.8);
        vaulter.bezierCurveTo(275.9, 126.8, 276.7, 124.8, 276.3, 120.4);
        vaulter.bezierCurveTo(276.3, 120.4, 276.2, 119.2, 275.5, 118.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(265.3, 128.2);
        vaulter.bezierCurveTo(265.3, 128.2, 264.1, 124.1, 266.2, 117.9);
        vaulter.lineTo(267.4, 107.7);
        vaulter.bezierCurveTo(267.4, 107.7, 266.9, 102.1, 267.4, 99.5);
        vaulter.bezierCurveTo(267.9, 97.0, 267.4, 92.9, 267.4, 92.9);
        vaulter.bezierCurveTo(267.4, 92.9, 266.6, 90.6, 266.3, 90.2);
        vaulter.bezierCurveTo(266.0, 89.9, 267.3, 87.0, 267.6, 87.0);
        vaulter.bezierCurveTo(267.9, 87.0, 270.8, 87.7, 270.9, 88.5);
        vaulter.bezierCurveTo(270.9, 89.4, 271.5, 91.0, 270.9, 91.8);
        vaulter.bezierCurveTo(270.3, 92.5, 269.9, 93.1, 269.9, 93.1);
        vaulter.bezierCurveTo(269.9, 93.1, 271.4, 100.5, 271.5, 103.7);
        vaulter.bezierCurveTo(271.7, 106.9, 271.5, 107.6, 271.5, 107.6);
        vaulter.lineTo(271.6, 116.2);
        vaulter.bezierCurveTo(271.6, 116.2, 272.5, 120.9, 272.0, 123.0);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(267.1, 126.5);
        vaulter.bezierCurveTo(267.1, 126.5, 267.9, 122.1, 271.7, 120.9);
        vaulter.lineTo(273.3, 118.7);
        vaulter.bezierCurveTo(273.4, 115.6, 274.8, 115.1, 274.4, 110.0);
        vaulter.lineTo(273.1, 108.2);
        vaulter.bezierCurveTo(273.1, 108.2, 273.0, 105.5, 274.2, 104.3);
        vaulter.bezierCurveTo(275.3, 103.0, 277.4, 105.5, 277.4, 105.5);
        vaulter.bezierCurveTo(277.4, 105.5, 278.4, 110.2, 277.1, 110.7);
        vaulter.bezierCurveTo(276.9, 112.3, 278.1, 116.9, 277.4, 118.8);
        vaulter.bezierCurveTo(277.5, 121.1, 276.7, 123.2, 276.7, 123.2);
        vaulter.bezierCurveTo(276.7, 123.2, 277.3, 126.9, 276.3, 127.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(269.4, 126.0);
        vaulter.bezierCurveTo(269.4, 126.0, 264.0, 125.5, 262.9, 126.0);
        vaulter.bezierCurveTo(261.8, 126.5, 257.9, 128.7, 257.9, 128.7);
        vaulter.bezierCurveTo(257.9, 128.7, 253.8, 132.3, 255.9, 136.6);
        vaulter.bezierCurveTo(258.0, 140.9, 263.7, 140.0, 265.8, 139.0);
        vaulter.bezierCurveTo(267.8, 138.0, 272.0, 133.6, 272.0, 133.6);
        vaulter.bezierCurveTo(272.0, 133.6, 272.3, 133.3, 272.7, 133.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(267.7, 128.6);
        vaulter.bezierCurveTo(268.2, 131.3, 272.9, 134.4, 276.5, 133.4);
        vaulter.bezierCurveTo(280.1, 132.4, 280.9, 126.5, 282.0, 125.2);
        vaulter.bezierCurveTo(283.0, 123.9, 287.1, 120.4, 287.1, 113.3);
        vaulter.bezierCurveTo(287.1, 106.1, 281.4, 108.7, 281.4, 108.7);
        vaulter.bezierCurveTo(281.4, 108.7, 277.4, 111.0, 275.5, 114.1);
        vaulter.bezierCurveTo(273.6, 117.2, 270.9, 120.7, 269.3, 122.7);
        vaulter.bezierCurveTo(267.8, 124.7, 267.7, 128.6, 267.7, 128.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(293.2, 256.4);
        vaulter.bezierCurveTo(293.2, 255.6, 290.4, 178.8, 284.4, 148.2);
        vaulter.bezierCurveTo(278.3, 117.6, 266.7, 78.2, 266.6, 77.8);
        vaulter.bezierCurveTo(266.6, 77.8, 266.5, 76.9, 267.5, 76.6);
        vaulter.bezierCurveTo(268.4, 76.3, 268.8, 77.2, 268.8, 77.2);
        vaulter.bezierCurveTo(269.0, 77.6, 280.6, 117.1, 286.7, 147.8);
        vaulter.bezierCurveTo(292.7, 178.5, 295.5, 255.6, 295.5, 256.3);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(293.2, 256.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(279.1, 108.2);
        vaulter.bezierCurveTo(275.3, 100.1, 274.8, 92.6, 274.2, 89.0);
        vaulter.bezierCurveTo(274.0, 87.3, 272.4, 82.3, 273.9, 77.5);
        vaulter.bezierCurveTo(275.8, 71.7, 276.2, 64.6, 276.1, 57.7);
        vaulter.bezierCurveTo(272.9, 57.4, 268.5, 52.5, 268.5, 52.5);
        vaulter.bezierCurveTo(267.0, 52.4, 265.6, 50.6, 265.8, 49.9);
        vaulter.bezierCurveTo(266.2, 48.5, 269.3, 49.4, 270.9, 49.9);
        vaulter.bezierCurveTo(272.6, 50.3, 273.5, 51.1, 276.0, 51.8);
        vaulter.bezierCurveTo(278.6, 52.5, 280.0, 52.4, 281.1, 52.8);
        vaulter.bezierCurveTo(282.1, 53.3, 282.7, 55.1, 282.5, 55.9);
        vaulter.bezierCurveTo(282.2, 56.7, 281.1, 57.7, 281.1, 57.7);
        vaulter.bezierCurveTo(280.4, 65.2, 282.4, 71.5, 281.1, 85.2);
        vaulter.bezierCurveTo(281.1, 85.2, 288.9, 97.2, 289.3, 101.3);
        vaulter.bezierCurveTo(289.6, 105.4, 287.1, 113.3, 287.1, 113.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(277.7, 109.4);
        vaulter.bezierCurveTo(274.0, 101.3, 273.4, 93.8, 272.9, 90.2);
        vaulter.bezierCurveTo(272.7, 88.5, 271.1, 83.4, 272.6, 78.7);
        vaulter.bezierCurveTo(274.5, 72.9, 274.9, 65.7, 274.8, 58.9);
        vaulter.bezierCurveTo(271.6, 58.6, 267.2, 53.7, 267.2, 53.7);
        vaulter.bezierCurveTo(265.7, 53.6, 264.3, 51.7, 264.5, 51.1);
        vaulter.bezierCurveTo(264.9, 49.7, 268.0, 50.6, 269.6, 51.1);
        vaulter.bezierCurveTo(271.3, 51.5, 272.2, 52.3, 274.7, 53.0);
        vaulter.bezierCurveTo(277.3, 53.7, 278.7, 53.6, 279.7, 54.0);
        vaulter.bezierCurveTo(280.8, 54.5, 281.4, 56.3, 281.2, 57.1);
        vaulter.bezierCurveTo(280.9, 57.9, 279.7, 58.9, 279.7, 58.9);
        vaulter.bezierCurveTo(279.1, 66.4, 281.1, 72.7, 279.7, 86.3);
        vaulter.bezierCurveTo(279.7, 86.3, 287.6, 98.4, 288.0, 102.5);
        vaulter.bezierCurveTo(288.3, 106.6, 285.8, 114.4, 285.8, 114.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(278.2, 118.3);
        vaulter.bezierCurveTo(276.6, 117.6, 270.7, 118.2, 268.5, 123.6);
        vaulter.bezierCurveTo(266.7, 128.1, 268.4, 131.2, 270.5, 132.1);
        vaulter.bezierCurveTo(272.2, 132.7, 276.4, 129.4, 277.8, 127.3);
        vaulter.bezierCurveTo(278.6, 126.3, 279.4, 124.3, 279.1, 119.9);
        vaulter.bezierCurveTo(279.1, 119.9, 278.9, 118.7, 278.2, 118.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(267.7, 129.3);
        vaulter.bezierCurveTo(265.6, 127.4, 266.5, 125.9, 266.8, 122.7);
        vaulter.bezierCurveTo(267.0, 119.8, 268.1, 116.5, 268.9, 115.1);
        vaulter.bezierCurveTo(268.9, 115.1, 269.3, 106.6, 270.1, 103.9);
        vaulter.bezierCurveTo(271.0, 101.2, 270.1, 92.8, 270.1, 92.8);
        vaulter.bezierCurveTo(270.1, 92.8, 268.8, 91.2, 268.6, 90.6);
        vaulter.bezierCurveTo(268.4, 90.1, 269.1, 87.9, 270.5, 86.9);
        vaulter.bezierCurveTo(271.9, 85.9, 274.2, 88.6, 274.2, 88.6);
        vaulter.bezierCurveTo(274.2, 88.6, 274.7, 91.4, 274.2, 92.5);
        vaulter.bezierCurveTo(273.6, 93.5, 272.9, 93.4, 272.9, 93.9);
        vaulter.bezierCurveTo(272.9, 94.5, 274.6, 101.7, 274.4, 104.2);
        vaulter.bezierCurveTo(274.3, 106.7, 273.6, 115.0, 274.1, 116.2);
        vaulter.bezierCurveTo(274.5, 117.6, 275.6, 119.6, 273.8, 123.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(270.8, 122.0);
        vaulter.bezierCurveTo(270.8, 122.0, 272.7, 117.7, 276.2, 117.0);
        vaulter.lineTo(277.5, 111.9);
        vaulter.bezierCurveTo(277.5, 111.9, 276.9, 108.2, 277.5, 106.8);
        vaulter.bezierCurveTo(278.1, 105.3, 277.5, 100.9, 277.5, 100.9);
        vaulter.lineTo(276.6, 99.5);
        vaulter.bezierCurveTo(276.6, 99.5, 276.5, 96.9, 277.5, 95.6);
        vaulter.bezierCurveTo(278.6, 94.4, 280.5, 97.7, 280.5, 97.7);
        vaulter.bezierCurveTo(280.5, 97.7, 280.4, 100.1, 280.0, 100.9);
        vaulter.bezierCurveTo(279.5, 101.7, 281.3, 106.4, 281.0, 107.8);
        vaulter.bezierCurveTo(280.6, 109.2, 282.2, 112.0, 282.2, 112.0);
        vaulter.lineTo(283.0, 120.3);
        vaulter.lineTo(275.5, 127.3);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(272.9, 122.8);
        vaulter.bezierCurveTo(272.9, 122.8, 267.6, 122.4, 266.5, 122.9);
        vaulter.bezierCurveTo(265.3, 123.3, 261.4, 125.6, 261.4, 125.6);
        vaulter.bezierCurveTo(261.4, 125.6, 257.4, 129.2, 259.4, 133.5);
        vaulter.bezierCurveTo(261.5, 137.8, 267.3, 136.9, 269.3, 135.8);
        vaulter.bezierCurveTo(271.4, 134.8, 275.5, 130.4, 275.5, 130.4);
        vaulter.bezierCurveTo(275.5, 130.4, 275.8, 130.2, 276.2, 130.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(293.2, 256.6);
        vaulter.bezierCurveTo(293.2, 256.0, 291.8, 192.1, 288.2, 158.9);
        vaulter.bezierCurveTo(284.7, 125.8, 272.0, 78.5, 271.9, 78.0);
        vaulter.bezierCurveTo(271.9, 78.0, 271.6, 76.9, 272.7, 76.6);
        vaulter.bezierCurveTo(273.8, 76.4, 274.2, 77.4, 274.2, 77.4);
        vaulter.bezierCurveTo(274.3, 77.9, 286.9, 125.3, 290.5, 158.7);
        vaulter.bezierCurveTo(294.1, 191.9, 295.5, 255.9, 295.5, 256.5);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(293.2, 256.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(270.8, 122.0);
        vaulter.bezierCurveTo(270.8, 125.6, 271.7, 130.6, 278.3, 130.2);
        vaulter.bezierCurveTo(284.9, 129.7, 290.2, 122.0, 290.2, 115.3);
        vaulter.bezierCurveTo(290.2, 108.7, 290.2, 104.6, 290.2, 104.6);
        vaulter.bezierCurveTo(290.2, 104.6, 288.0, 100.9, 285.3, 100.9);
        vaulter.bezierCurveTo(282.6, 100.9, 280.5, 103.8, 280.5, 103.8);
        vaulter.bezierCurveTo(280.5, 103.8, 279.3, 111.8, 277.6, 113.5);
        vaulter.bezierCurveTo(275.9, 115.2, 274.2, 116.0, 273.0, 117.2);
        vaulter.bezierCurveTo(271.8, 118.4, 270.8, 122.0, 270.8, 122.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(289.4, 115.5);
        vaulter.bezierCurveTo(289.4, 115.5, 291.4, 104.7, 292.1, 102.8);
        vaulter.bezierCurveTo(292.1, 102.8, 293.1, 100.2, 293.0, 96.9);
        vaulter.bezierCurveTo(292.8, 93.7, 288.5, 83.1, 287.2, 80.6);
        vaulter.bezierCurveTo(287.8, 74.5, 286.4, 64.1, 287.3, 55.1);
        vaulter.bezierCurveTo(288.1, 53.6, 289.2, 54.6, 290.2, 53.0);
        vaulter.bezierCurveTo(290.6, 52.3, 289.2, 50.2, 287.7, 49.7);
        vaulter.bezierCurveTo(284.6, 48.8, 284.5, 47.4, 283.0, 46.3);
        vaulter.bezierCurveTo(281.5, 45.3, 278.6, 42.7, 277.1, 44.5);
        vaulter.bezierCurveTo(276.4, 45.3, 278.8, 46.9, 278.8, 46.9);
        vaulter.bezierCurveTo(278.8, 46.9, 281.5, 52.6, 283.7, 53.8);
        vaulter.lineTo(279.7, 86.0);
        vaulter.bezierCurveTo(279.7, 86.0, 279.7, 94.2, 281.6, 104.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(288.1, 116.0);
        vaulter.bezierCurveTo(288.1, 116.0, 290.2, 105.1, 290.8, 103.2);
        vaulter.bezierCurveTo(290.8, 103.2, 291.9, 100.6, 291.7, 97.4);
        vaulter.bezierCurveTo(291.5, 94.2, 287.2, 83.6, 285.9, 81.0);
        vaulter.bezierCurveTo(286.5, 75.0, 285.2, 64.5, 286.0, 55.6);
        vaulter.bezierCurveTo(286.8, 54.1, 287.9, 55.1, 289.0, 53.4);
        vaulter.bezierCurveTo(289.3, 52.8, 288.0, 50.7, 286.4, 50.2);
        vaulter.bezierCurveTo(283.3, 49.3, 283.2, 47.8, 281.7, 46.8);
        vaulter.bezierCurveTo(280.2, 45.8, 277.3, 43.1, 275.8, 44.9);
        vaulter.bezierCurveTo(275.2, 45.8, 277.6, 47.3, 277.6, 47.3);
        vaulter.bezierCurveTo(277.6, 47.3, 280.2, 53.1, 282.4, 54.3);
        vaulter.lineTo(278.4, 86.5);
        vaulter.bezierCurveTo(278.4, 86.5, 278.4, 94.7, 280.3, 105.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(284.9, 118.0);
        vaulter.bezierCurveTo(283.8, 116.7, 278.3, 114.5, 273.8, 118.4);
        vaulter.bezierCurveTo(270.1, 121.6, 270.3, 125.2, 271.8, 126.9);
        vaulter.bezierCurveTo(273.1, 128.2, 278.3, 127.1, 280.5, 125.8);
        vaulter.bezierCurveTo(281.7, 125.3, 283.3, 123.9, 285.0, 119.8);
        vaulter.bezierCurveTo(285.0, 119.8, 285.3, 118.7, 284.9, 118.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(278.8, 121.1);
        vaulter.lineTo(277.6, 113.5);
        vaulter.bezierCurveTo(277.3, 110.7, 277.5, 99.8, 277.5, 99.8);
        vaulter.bezierCurveTo(278.1, 98.6, 277.5, 88.1, 277.5, 88.1);
        vaulter.bezierCurveTo(277.5, 88.1, 279.0, 87.1, 278.8, 86.0);
        vaulter.bezierCurveTo(278.7, 85.0, 276.1, 82.6, 276.1, 82.6);
        vaulter.lineTo(274.8, 84.4);
        vaulter.lineTo(275.4, 87.0);
        vaulter.bezierCurveTo(275.4, 87.0, 274.7, 90.5, 273.9, 93.0);
        vaulter.bezierCurveTo(273.0, 95.6, 273.9, 99.0, 273.9, 99.0);
        vaulter.bezierCurveTo(273.9, 99.0, 272.9, 110.2, 271.7, 113.0);
        vaulter.bezierCurveTo(270.5, 115.7, 270.1, 122.9, 270.1, 122.9);
        vaulter.bezierCurveTo(270.0, 125.6, 272.6, 127.3, 272.6, 127.3);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(276.3, 128.3);
        vaulter.bezierCurveTo(276.3, 128.3, 279.7, 133.3, 285.9, 133.9);
        vaulter.bezierCurveTo(292.1, 134.5, 295.5, 131.9, 295.9, 130.6);
        vaulter.bezierCurveTo(296.2, 129.2, 294.3, 127.0, 291.3, 125.5);
        vaulter.lineTo(285.4, 121.4);
        vaulter.lineTo(284.4, 117.6);
        vaulter.bezierCurveTo(284.4, 117.6, 281.8, 115.9, 280.8, 116.9);
        vaulter.bezierCurveTo(280.2, 117.7, 281.6, 121.4, 281.6, 121.4);
        vaulter.lineTo(284.3, 123.2);
        vaulter.bezierCurveTo(284.3, 123.2, 288.0, 127.8, 289.8, 128.6);
        vaulter.lineTo(283.8, 126.6);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(277.1, 124.3);
        vaulter.bezierCurveTo(277.1, 124.3, 271.8, 122.2, 270.6, 122.4);
        vaulter.bezierCurveTo(269.3, 122.5, 264.7, 123.5, 264.7, 123.5);
        vaulter.bezierCurveTo(264.7, 123.5, 259.5, 125.9, 260.3, 130.9);
        vaulter.bezierCurveTo(261.0, 135.8, 267.1, 136.6, 269.5, 136.3);
        vaulter.bezierCurveTo(271.9, 135.9, 277.3, 132.7, 277.3, 132.7);
        vaulter.bezierCurveTo(277.3, 132.7, 277.7, 132.6, 278.2, 132.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(293.0, 343.0);
        vaulter.bezierCurveTo(293.0, 342.9, 293.4, 267.4, 293.2, 262.7);
        vaulter.bezierCurveTo(292.2, 242.7, 289.4, 188.6, 286.8, 157.7);
        vaulter.bezierCurveTo(283.6, 119.6, 276.5, 78.5, 276.4, 78.1);
        vaulter.bezierCurveTo(276.4, 78.1, 276.2, 76.8, 277.4, 76.6);
        vaulter.bezierCurveTo(278.5, 76.4, 278.8, 77.6, 278.8, 77.6);
        vaulter.bezierCurveTo(278.9, 78.0, 286.0, 119.3, 289.2, 157.5);
        vaulter.bezierCurveTo(291.8, 188.4, 294.6, 242.6, 295.6, 262.6);
        vaulter.bezierCurveTo(295.9, 267.3, 295.0, 342.9, 295.0, 343.0);
        vaulter.lineTo(293.0, 343.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(275.5, 127.8);
        vaulter.bezierCurveTo(275.5, 127.8, 277.3, 133.1, 280.0, 134.0);
        vaulter.bezierCurveTo(282.6, 134.9, 290.5, 132.9, 293.7, 122.7);
        vaulter.bezierCurveTo(296.9, 112.5, 294.8, 105.2, 294.8, 105.2);
        vaulter.bezierCurveTo(294.1, 102.2, 289.6, 101.1, 288.2, 100.9);
        vaulter.bezierCurveTo(286.8, 100.7, 284.2, 103.4, 284.1, 104.3);
        vaulter.bezierCurveTo(283.9, 105.2, 282.5, 114.2, 280.8, 115.4);
        vaulter.bezierCurveTo(279.2, 116.6, 277.4, 118.4, 276.6, 120.2);
        vaulter.bezierCurveTo(275.7, 122.0, 274.9, 126.2, 275.5, 127.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(286.8, 110.0);
        vaulter.bezierCurveTo(286.8, 110.0, 286.6, 99.7, 285.9, 96.4);
        vaulter.bezierCurveTo(285.3, 93.2, 288.5, 77.8, 288.5, 77.8);
        vaulter.bezierCurveTo(288.5, 77.8, 293.9, 67.1, 292.3, 55.3);
        vaulter.bezierCurveTo(292.3, 55.3, 286.4, 52.4, 286.2, 51.4);
        vaulter.bezierCurveTo(286.2, 51.4, 283.2, 50.5, 283.8, 49.4);
        vaulter.bezierCurveTo(284.4, 48.3, 285.1, 47.6, 286.2, 48.0);
        vaulter.bezierCurveTo(287.3, 48.3, 292.3, 48.9, 292.3, 48.9);
        vaulter.bezierCurveTo(292.3, 48.9, 295.1, 51.0, 295.9, 51.0);
        vaulter.bezierCurveTo(296.8, 51.0, 298.6, 50.3, 299.3, 52.1);
        vaulter.bezierCurveTo(300.0, 53.9, 296.8, 55.7, 296.8, 55.7);
        vaulter.lineTo(295.9, 82.9);
        vaulter.bezierCurveTo(295.9, 82.9, 299.1, 97.1, 298.7, 100.9);
        vaulter.bezierCurveTo(298.2, 104.7, 294.8, 114.9, 294.8, 114.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(285.3, 109.5);
        vaulter.bezierCurveTo(285.3, 109.5, 285.1, 99.1, 284.4, 95.9);
        vaulter.bezierCurveTo(283.8, 92.6, 287.0, 77.3, 287.0, 77.3);
        vaulter.bezierCurveTo(287.0, 77.3, 292.4, 66.5, 290.8, 54.7);
        vaulter.bezierCurveTo(290.8, 54.7, 284.9, 51.9, 284.7, 50.8);
        vaulter.bezierCurveTo(284.7, 50.8, 281.7, 49.9, 282.3, 48.8);
        vaulter.bezierCurveTo(282.9, 47.7, 283.6, 47.0, 284.7, 47.4);
        vaulter.bezierCurveTo(285.8, 47.7, 290.8, 48.3, 290.8, 48.3);
        vaulter.bezierCurveTo(290.8, 48.3, 293.5, 50.4, 294.4, 50.4);
        vaulter.bezierCurveTo(295.2, 50.4, 297.0, 49.7, 297.7, 51.5);
        vaulter.bezierCurveTo(298.5, 53.3, 295.2, 55.1, 295.2, 55.1);
        vaulter.lineTo(294.4, 82.3);
        vaulter.bezierCurveTo(294.4, 82.3, 297.6, 96.6, 297.1, 100.3);
        vaulter.bezierCurveTo(296.7, 104.1, 293.3, 114.3, 293.3, 114.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(291.1, 121.0);
        vaulter.bezierCurveTo(289.9, 119.6, 284.2, 117.2, 279.5, 121.1);
        vaulter.bezierCurveTo(275.5, 124.4, 275.6, 128.1, 277.2, 129.9);
        vaulter.bezierCurveTo(278.4, 131.4, 284.0, 130.4, 286.3, 129.1);
        vaulter.bezierCurveTo(287.5, 128.6, 289.3, 127.1, 291.1, 122.9);
        vaulter.bezierCurveTo(291.1, 122.9, 291.5, 121.8, 291.1, 121.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(281.1, 121.3);
        vaulter.bezierCurveTo(281.1, 121.3, 282.6, 112.1, 283.2, 111.1);
        vaulter.bezierCurveTo(284.5, 109.1, 283.2, 103.7, 283.2, 103.7);
        vaulter.bezierCurveTo(283.2, 103.7, 282.3, 98.7, 281.3, 96.1);
        vaulter.bezierCurveTo(280.8, 94.7, 280.1, 91.2, 280.0, 89.0);
        vaulter.bezierCurveTo(280.7, 88.0, 280.8, 87.0, 280.8, 87.0);
        vaulter.bezierCurveTo(280.8, 87.0, 280.1, 83.0, 278.5, 81.8);
        vaulter.bezierCurveTo(276.9, 80.6, 277.5, 80.3, 275.9, 81.8);
        vaulter.bezierCurveTo(274.2, 83.2, 275.9, 88.0, 275.9, 88.0);
        vaulter.lineTo(277.7, 89.5);
        vaulter.bezierCurveTo(277.7, 89.5, 278.9, 93.7, 278.2, 96.8);
        vaulter.bezierCurveTo(277.5, 99.9, 278.2, 106.3, 278.2, 106.3);
        vaulter.bezierCurveTo(278.2, 106.3, 275.6, 112.5, 273.9, 116.6);
        vaulter.bezierCurveTo(272.3, 120.7, 273.9, 124.5, 273.9, 124.5);
        vaulter.bezierCurveTo(275.3, 128.1, 276.8, 129.5, 276.8, 129.5);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(299.1, 119.8);
        vaulter.bezierCurveTo(298.8, 119.4, 298.5, 119.1, 298.2, 119.0);
        vaulter.bezierCurveTo(297.8, 118.7, 297.5, 118.6, 297.5, 118.6);
        vaulter.bezierCurveTo(296.5, 118.4, 292.8, 117.8, 291.6, 119.7);
        vaulter.lineTo(291.9, 120.3);
        vaulter.lineTo(296.5, 129.3);
        vaulter.bezierCurveTo(297.5, 131.5, 299.1, 135.7, 300.6, 135.7);
        vaulter.bezierCurveTo(302.1, 135.6, 303.3, 135.2, 303.4, 134.7);
        vaulter.bezierCurveTo(303.7, 133.6, 301.5, 122.7, 299.1, 119.8);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(297.9, 129.6);
        vaulter.bezierCurveTo(297.4, 129.4, 297.0, 129.3, 296.5, 129.3);
        vaulter.bezierCurveTo(294.7, 129.5, 290.2, 128.8, 289.2, 128.7);
        vaulter.bezierCurveTo(289.1, 128.7, 289.0, 128.7, 289.0, 128.7);
        vaulter.lineTo(287.4, 126.6);
        vaulter.bezierCurveTo(287.4, 126.6, 287.3, 126.5, 287.1, 126.4);
        vaulter.bezierCurveTo(286.7, 126.2, 285.9, 125.9, 285.4, 126.6);
        vaulter.bezierCurveTo(284.7, 127.5, 284.0, 130.1, 284.0, 130.1);
        vaulter.lineTo(285.9, 132.9);
        vaulter.bezierCurveTo(285.9, 132.9, 286.5, 133.1, 287.4, 133.0);
        vaulter.bezierCurveTo(288.0, 132.9, 288.7, 132.8, 289.4, 132.4);
        vaulter.bezierCurveTo(289.5, 132.4, 289.6, 132.3, 289.7, 132.3);
        vaulter.bezierCurveTo(289.7, 132.3, 293.5, 133.1, 296.1, 134.7);
        vaulter.bezierCurveTo(297.3, 135.5, 299.1, 135.8, 300.6, 135.7);
        vaulter.bezierCurveTo(302.1, 135.6, 303.3, 135.2, 303.4, 134.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.restore();
        vaulter.beginPath();
        vaulter.moveTo(287.1, 77.1);
        vaulter.bezierCurveTo(287.1, 77.1, 287.1, 76.1, 286.1, 76.1);
        vaulter.bezierCurveTo(285.1, 76.2, 285.1, 77.2, 285.1, 77.2);
        vaulter.lineTo(293.5, 281.8);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(295.5, 281.8);
        vaulter.lineTo(287.1, 77.1);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(298.2, 118.9);
        vaulter.bezierCurveTo(298.3, 118.8, 298.7, 118.6, 298.2, 118.9);
        vaulter.lineTo(298.2, 118.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(298.1, 118.9);
        vaulter.bezierCurveTo(298.1, 118.9, 298.2, 118.9, 298.2, 118.9);
        vaulter.bezierCurveTo(298.1, 118.9, 298.1, 118.9, 298.1, 118.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(305.5, 72.7);
        vaulter.bezierCurveTo(301.5, 71.7, 298.3, 72.7, 298.3, 72.7);
        vaulter.bezierCurveTo(297.5, 78.9, 294.0, 92.1, 293.7, 93.0);
        vaulter.bezierCurveTo(292.2, 96.2, 290.0, 99.0, 288.0, 101.6);
        vaulter.bezierCurveTo(285.1, 105.6, 282.2, 109.5, 284.4, 114.7);
        vaulter.bezierCurveTo(286.6, 120.3, 293.1, 121.4, 298.1, 118.9);
        vaulter.bezierCurveTo(302.3, 116.5, 305.3, 108.4, 306.4, 103.8);
        vaulter.bezierCurveTo(307.0, 101.4, 307.6, 99.1, 307.5, 96.9);
        vaulter.bezierCurveTo(308.6, 91.3, 309.4, 73.8, 305.5, 72.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.restore();
        vaulter.beginPath();
        vaulter.moveTo(300.6, 135.7);
        vaulter.bezierCurveTo(300.6, 135.7, 300.6, 135.7, 300.6, 135.7);
        vaulter.bezierCurveTo(302.1, 135.6, 303.3, 135.2, 303.4, 134.7);
        vaulter.bezierCurveTo(303.3, 135.2, 302.1, 135.6, 300.6, 135.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(284.1, 109.9);
        vaulter.bezierCurveTo(284.1, 109.9, 284.0, 109.9, 283.8, 109.8);
        vaulter.bezierCurveTo(282.6, 109.8, 277.8, 109.4, 275.1, 110.6);
        vaulter.bezierCurveTo(272.2, 111.9, 270.6, 115.9, 271.9, 119.8);
        vaulter.bezierCurveTo(273.1, 123.3, 279.8, 124.4, 282.6, 122.1);
        vaulter.bezierCurveTo(284.9, 120.4, 286.0, 118.4, 286.4, 117.6);
        vaulter.bezierCurveTo(286.5, 117.4, 286.5, 117.3, 286.5, 117.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(290.3, 99.0);
        vaulter.bezierCurveTo(289.8, 99.5, 289.2, 100.3, 288.5, 101.1);
        vaulter.bezierCurveTo(288.5, 101.1, 286.8, 103.4, 286.2, 104.3);
        vaulter.bezierCurveTo(286.2, 104.4, 286.1, 104.5, 286.0, 104.6);
        vaulter.bezierCurveTo(285.2, 105.8, 284.6, 106.8, 284.3, 107.5);
        vaulter.bezierCurveTo(284.2, 107.6, 284.1, 107.8, 284.1, 107.9);
        vaulter.bezierCurveTo(285.1, 108.4, 285.8, 108.5, 286.4, 108.4);
        vaulter.bezierCurveTo(287.1, 108.3, 287.6, 108.0, 288.4, 107.3);
        vaulter.bezierCurveTo(288.6, 107.1, 288.8, 106.9, 289.1, 106.7);
        vaulter.bezierCurveTo(291.0, 105.0, 291.3, 102.2, 290.3, 99.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(288.1, 102.0);
        vaulter.bezierCurveTo(288.1, 102.0, 288.4, 101.2, 288.6, 101.0);
        vaulter.bezierCurveTo(289.0, 100.0, 289.4, 98.9, 289.9, 97.8);
        vaulter.bezierCurveTo(290.5, 96.4, 291.5, 93.1, 291.5, 93.1);
        vaulter.bezierCurveTo(291.5, 93.1, 292.4, 89.3, 291.5, 88.0);
        vaulter.lineTo(289.0, 84.1);
        vaulter.bezierCurveTo(289.0, 84.1, 288.3, 82.4, 287.3, 81.7);
        vaulter.bezierCurveTo(287.3, 81.7, 287.3, 81.6, 287.2, 81.6);
        vaulter.bezierCurveTo(286.7, 81.3, 286.0, 81.4, 285.3, 81.6);
        vaulter.bezierCurveTo(284.6, 81.8, 284.0, 82.2, 284.0, 82.2);
        vaulter.lineTo(283.8, 85.3);
        vaulter.bezierCurveTo(285.1, 86.3, 284.7, 87.1, 285.5, 87.2);
        vaulter.bezierCurveTo(285.6, 87.2, 285.8, 87.2, 285.9, 87.1);
        vaulter.bezierCurveTo(286.9, 87.0, 287.3, 86.9, 287.5, 86.9);
        vaulter.bezierCurveTo(287.6, 86.9, 287.7, 86.9, 287.7, 86.9);
        vaulter.lineTo(288.9, 88.9);
        vaulter.bezierCurveTo(288.5, 89.3, 288.0, 89.8, 287.7, 90.3);
        vaulter.bezierCurveTo(287.2, 90.9, 286.8, 91.4, 286.8, 91.4);
        vaulter.bezierCurveTo(286.8, 91.4, 286.4, 92.1, 285.8, 93.1);
        vaulter.bezierCurveTo(284.1, 95.9, 280.8, 101.5, 281.1, 103.3);
        vaulter.bezierCurveTo(281.5, 105.7, 283.8, 107.6, 283.8, 107.6);
        vaulter.bezierCurveTo(283.8, 107.6, 284.4, 107.9, 284.4, 107.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(307.7, 71.3);
        vaulter.bezierCurveTo(307.8, 69.7, 309.1, 64.7, 309.1, 64.7);
        vaulter.lineTo(315.3, 44.1);
        vaulter.lineTo(318.5, 36.3);
        vaulter.lineTo(319.3, 34.4);
        vaulter.bezierCurveTo(320.5, 35.0, 321.2, 34.5, 322.0, 33.7);
        vaulter.bezierCurveTo(322.3, 33.4, 322.4, 32.6, 322.4, 31.7);
        vaulter.bezierCurveTo(322.5, 30.2, 322.3, 28.5, 322.3, 27.8);
        vaulter.bezierCurveTo(322.3, 26.8, 323.5, 24.0, 324.1, 22.2);
        vaulter.bezierCurveTo(324.5, 21.3, 324.4, 18.8, 323.7, 17.6);
        vaulter.bezierCurveTo(323.5, 17.4, 323.2, 17.2, 322.9, 17.1);
        vaulter.bezierCurveTo(322.6, 17.0, 322.2, 17.1, 321.8, 17.3);
        vaulter.bezierCurveTo(321.3, 17.4, 320.9, 17.7, 320.5, 17.9);
        vaulter.bezierCurveTo(319.6, 18.6, 318.7, 23.0, 318.7, 23.0);
        vaulter.lineTo(316.3, 32.0);
        vaulter.lineTo(302.5, 58.5);
        vaulter.bezierCurveTo(302.5, 58.5, 295.5, 69.3, 294.7, 75.7);
        vaulter.bezierCurveTo(294.0, 82.2, 294.0, 92.5, 294.0, 92.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(307.7, 95.6);
        vaulter.bezierCurveTo(307.7, 95.6, 309.4, 90.8, 312.4, 79.0);
        vaulter.bezierCurveTo(314.7, 69.5, 317.5, 45.5, 318.5, 36.3);
        vaulter.bezierCurveTo(318.8, 34.0, 318.9, 32.6, 318.9, 32.6);
        vaulter.bezierCurveTo(318.9, 32.6, 320.7, 34.1, 321.9, 32.6);
        vaulter.bezierCurveTo(322.1, 32.4, 322.3, 32.0, 322.4, 31.7);
        vaulter.bezierCurveTo(322.5, 30.2, 322.3, 28.5, 322.3, 27.8);
        vaulter.bezierCurveTo(322.3, 26.8, 323.5, 24.0, 324.1, 22.2);
        vaulter.bezierCurveTo(324.5, 21.3, 324.4, 18.8, 323.7, 17.6);
        vaulter.bezierCurveTo(323.5, 17.4, 323.2, 17.2, 322.9, 17.1);
        vaulter.bezierCurveTo(322.6, 17.0, 322.2, 17.1, 321.8, 17.3);
        vaulter.bezierCurveTo(320.2, 18.3, 316.5, 31.5, 316.5, 31.5);
        vaulter.lineTo(304.2, 71.7);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(305.2, 127.1);
        vaulter.bezierCurveTo(305.0, 126.3, 302.5, 114.9, 299.7, 109.7);
        vaulter.bezierCurveTo(299.0, 108.5, 298.4, 107.6, 297.7, 107.3);
        vaulter.bezierCurveTo(295.4, 106.3, 292.3, 108.8, 293.1, 111.3);
        vaulter.bezierCurveTo(293.1, 111.3, 293.2, 111.6, 293.3, 112.0);
        vaulter.bezierCurveTo(294.1, 114.2, 296.7, 121.5, 298.3, 125.0);
        vaulter.bezierCurveTo(297.7, 125.1, 297.1, 125.2, 296.6, 125.5);
        vaulter.bezierCurveTo(294.9, 126.5, 289.6, 128.2, 289.6, 128.2);
        vaulter.lineTo(289.2, 128.0);
        vaulter.lineTo(287.2, 127.0);
        vaulter.bezierCurveTo(287.2, 127.0, 287.2, 127.0, 287.1, 127.0);
        vaulter.bezierCurveTo(286.8, 127.0, 285.6, 127.0, 285.4, 127.9);
        vaulter.bezierCurveTo(285.2, 129.1, 285.8, 131.7, 285.8, 131.7);
        vaulter.lineTo(287.3, 132.6);
        vaulter.lineTo(288.8, 133.4);
        vaulter.bezierCurveTo(288.8, 133.4, 289.0, 133.4, 289.4, 133.2);
        vaulter.bezierCurveTo(290.0, 132.9, 291.0, 132.3, 291.8, 131.1);
        vaulter.bezierCurveTo(291.8, 131.1, 295.6, 130.1, 298.6, 130.4);
        vaulter.bezierCurveTo(300.1, 130.6, 301.8, 130.0, 303.1, 129.3);
        vaulter.bezierCurveTo(303.1, 129.3, 303.1, 129.3, 303.1, 129.3);
        vaulter.bezierCurveTo(303.3, 129.2, 303.4, 129.1, 303.6, 129.0);
        vaulter.bezierCurveTo(304.6, 128.4, 305.3, 127.6, 305.2, 127.1);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(287.1, 77.0);
        vaulter.bezierCurveTo(287.1, 77.0, 287.1, 76.1, 286.1, 76.1);
        vaulter.bezierCurveTo(285.1, 76.2, 285.1, 77.1, 285.1, 77.1);
        vaulter.bezierCurveTo(285.1, 77.1, 294.0, 263.7, 293.6, 289.9);
        vaulter.bezierCurveTo(293.3, 316.2, 293.0, 343.0, 293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.bezierCurveTo(295.0, 343.0, 295.5, 314.4, 295.6, 289.9);
        vaulter.bezierCurveTo(295.7, 265.4, 287.1, 77.0, 287.1, 77.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(307.8, 87.0);
        vaulter.lineTo(315.1, 55.8);
        vaulter.bezierCurveTo(315.1, 55.8, 313.7, 53.0, 310.5, 52.2);
        vaulter.bezierCurveTo(307.4, 51.5, 302.9, 54.2, 302.9, 54.2);
        vaulter.lineTo(293.3, 81.9);
        vaulter.bezierCurveTo(293.3, 81.9, 293.3, 81.9, 293.3, 81.9);
        vaulter.bezierCurveTo(291.0, 84.1, 290.3, 88.2, 289.2, 90.9);
        vaulter.bezierCurveTo(289.1, 90.9, 289.1, 90.8, 289.1, 90.8);
        vaulter.bezierCurveTo(287.5, 93.6, 285.5, 96.2, 284.1, 99.1);
        vaulter.bezierCurveTo(280.9, 105.9, 288.3, 113.2, 294.9, 111.8);
        vaulter.bezierCurveTo(300.3, 110.7, 301.9, 105.5, 304.3, 101.1);
        vaulter.bezierCurveTo(305.8, 98.4, 308.6, 91.1, 307.8, 87.0);
        vaulter.bezierCurveTo(307.8, 87.0, 307.8, 87.0, 307.8, 87.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(286.5, 101.8);
        vaulter.bezierCurveTo(286.5, 101.8, 286.3, 101.9, 286.1, 101.9);
        vaulter.bezierCurveTo(285.7, 102.1, 285.0, 102.3, 284.2, 102.7);
        vaulter.bezierCurveTo(282.3, 103.5, 279.9, 104.7, 278.6, 106.1);
        vaulter.bezierCurveTo(276.4, 108.5, 276.6, 112.9, 279.4, 115.9);
        vaulter.bezierCurveTo(281.0, 117.5, 284.1, 117.5, 286.7, 116.4);
        vaulter.bezierCurveTo(287.4, 116.1, 288.1, 115.7, 288.6, 115.3);
        vaulter.bezierCurveTo(289.3, 114.8, 289.8, 114.2, 290.2, 113.6);
        vaulter.bezierCurveTo(290.5, 112.9, 290.8, 112.3, 291.0, 111.6);
        vaulter.bezierCurveTo(291.1, 111.5, 291.1, 111.3, 291.2, 111.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(290.4, 84.2);
        vaulter.lineTo(290.0, 83.6);
        vaulter.lineTo(289.2, 82.8);
        vaulter.bezierCurveTo(289.2, 82.8, 288.3, 81.6, 287.3, 81.1);
        vaulter.bezierCurveTo(287.1, 81.0, 287.0, 81.0, 286.8, 80.9);
        vaulter.bezierCurveTo(286.3, 80.8, 285.8, 81.0, 285.3, 81.2);
        vaulter.bezierCurveTo(284.5, 81.7, 283.9, 82.3, 283.9, 82.3);
        vaulter.lineTo(284.5, 85.4);
        vaulter.bezierCurveTo(284.9, 85.6, 285.2, 85.8, 285.5, 86.0);
        vaulter.bezierCurveTo(285.7, 86.2, 285.9, 86.4, 286.0, 86.5);
        vaulter.bezierCurveTo(286.3, 86.8, 286.5, 86.8, 287.0, 86.6);
        vaulter.bezierCurveTo(287.2, 86.5, 287.4, 86.5, 287.5, 86.4);
        vaulter.bezierCurveTo(288.4, 86.0, 288.7, 85.8, 288.7, 85.8);
        vaulter.lineTo(289.5, 86.6);
        vaulter.bezierCurveTo(289.9, 87.0, 290.0, 86.8, 290.4, 86.4);
        vaulter.bezierCurveTo(290.9, 86.0, 291.0, 84.7, 290.4, 84.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(289.9, 91.4);
        vaulter.bezierCurveTo(289.9, 91.4, 289.5, 90.8, 289.5, 90.8);
        vaulter.bezierCurveTo(289.4, 91.0, 289.3, 91.2, 289.2, 91.3);
        vaulter.bezierCurveTo(289.2, 91.4, 289.2, 91.4, 289.2, 91.4);
        vaulter.bezierCurveTo(288.8, 92.1, 288.3, 92.9, 287.8, 93.7);
        vaulter.bezierCurveTo(287.1, 94.7, 286.5, 95.8, 285.9, 96.7);
        vaulter.bezierCurveTo(285.7, 97.0, 284.4, 99.5, 284.4, 99.6);
        vaulter.bezierCurveTo(285.1, 99.8, 285.6, 100.0, 286.0, 100.0);
        vaulter.bezierCurveTo(286.8, 100.0, 287.3, 99.8, 288.0, 99.2);
        vaulter.bezierCurveTo(288.3, 99.0, 288.5, 98.7, 288.9, 98.4);
        vaulter.bezierCurveTo(290.6, 96.9, 290.9, 94.3, 289.9, 91.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(311.2, 57.5);
        vaulter.bezierCurveTo(311.2, 57.5, 317.8, 40.4, 318.5, 38.7);
        vaulter.bezierCurveTo(319.1, 37.1, 323.4, 27.1, 323.4, 27.1);
        vaulter.lineTo(324.4, 25.9);
        vaulter.bezierCurveTo(324.4, 25.9, 325.0, 21.9, 325.9, 21.1);
        vaulter.bezierCurveTo(326.7, 20.3, 327.9, 14.2, 327.9, 14.2);
        vaulter.bezierCurveTo(327.9, 14.2, 327.9, 12.0, 326.8, 11.0);
        vaulter.bezierCurveTo(326.5, 10.9, 326.3, 10.7, 326.0, 10.7);
        vaulter.bezierCurveTo(324.0, 10.3, 322.5, 11.5, 322.4, 12.6);
        vaulter.bezierCurveTo(322.2, 13.6, 321.6, 18.0, 320.7, 19.2);
        vaulter.bezierCurveTo(319.9, 20.4, 320.7, 26.0, 320.7, 26.0);
        vaulter.lineTo(320.7, 26.0);
        vaulter.lineTo(320.7, 26.0);
        vaulter.bezierCurveTo(320.7, 26.0, 315.3, 31.8, 312.5, 35.7);
        vaulter.bezierCurveTo(309.7, 39.6, 298.9, 57.7, 296.7, 63.3);
        vaulter.bezierCurveTo(294.6, 69.0, 293.2, 82.1, 293.2, 82.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(307.6, 87.3);
        vaulter.bezierCurveTo(307.6, 87.3, 314.5, 74.0, 315.6, 69.6);
        vaulter.bezierCurveTo(316.6, 65.2, 317.6, 55.9, 317.6, 55.9);
        vaulter.bezierCurveTo(317.6, 55.9, 321.3, 49.6, 323.0, 43.3);
        vaulter.bezierCurveTo(324.8, 37.0, 325.3, 22.8, 325.3, 22.8);
        vaulter.bezierCurveTo(325.3, 22.8, 328.0, 21.9, 328.1, 20.6);
        vaulter.bezierCurveTo(328.3, 19.2, 328.5, 17.1, 330.9, 14.0);
        vaulter.bezierCurveTo(333.3, 10.9, 332.3, 9.0, 331.7, 8.7);
        vaulter.bezierCurveTo(330.7, 8.1, 328.0, 9.4, 326.8, 11.0);
        vaulter.bezierCurveTo(326.7, 11.1, 326.6, 11.2, 326.5, 11.4);
        vaulter.bezierCurveTo(325.5, 13.1, 323.4, 15.6, 323.0, 17.8);
        vaulter.bezierCurveTo(322.7, 20.0, 322.0, 22.6, 322.0, 22.6);
        vaulter.lineTo(320.7, 26.0);
        vaulter.lineTo(320.7, 26.0);
        vaulter.lineTo(320.7, 26.0);
        vaulter.lineTo(315.6, 40.2);
        vaulter.bezierCurveTo(315.6, 40.2, 313.8, 43.3, 314.0, 44.0);
        vaulter.bezierCurveTo(314.1, 44.6, 304.5, 61.6, 304.5, 61.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(288.3, 94.0);
        vaulter.bezierCurveTo(288.9, 92.6, 289.6, 90.9, 289.6, 90.9);
        vaulter.bezierCurveTo(289.6, 90.9, 290.1, 89.7, 290.2, 89.4);
        vaulter.bezierCurveTo(290.3, 89.1, 290.5, 88.8, 290.6, 88.5);
        vaulter.bezierCurveTo(290.7, 88.2, 290.7, 87.8, 290.9, 86.3);
        vaulter.bezierCurveTo(291.1, 84.5, 290.5, 83.9, 290.0, 83.6);
        vaulter.bezierCurveTo(289.9, 83.6, 289.9, 83.6, 289.9, 83.6);
        vaulter.bezierCurveTo(289.2, 83.3, 288.2, 84.0, 287.4, 84.8);
        vaulter.bezierCurveTo(286.8, 85.5, 286.2, 86.2, 286.0, 86.5);
        vaulter.bezierCurveTo(286.0, 86.6, 285.9, 86.6, 285.9, 86.6);
        vaulter.bezierCurveTo(285.9, 86.6, 285.8, 86.9, 285.5, 87.4);
        vaulter.bezierCurveTo(284.9, 88.6, 283.7, 91.2, 283.2, 93.6);
        vaulter.bezierCurveTo(282.7, 96.0, 284.1, 99.2, 284.1, 99.2);
        vaulter.bezierCurveTo(284.1, 99.2, 284.5, 99.6, 285.0, 99.7);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(300.8, 99.6);
        vaulter.bezierCurveTo(300.8, 99.6, 300.6, 100.7, 300.4, 102.5);
        vaulter.bezierCurveTo(300.0, 106.2, 299.4, 113.0, 300.2, 120.1);
        vaulter.bezierCurveTo(298.5, 120.9, 293.7, 126.5, 290.5, 128.6);
        vaulter.bezierCurveTo(290.0, 128.6, 289.5, 128.1, 289.2, 127.7);
        vaulter.bezierCurveTo(288.9, 127.3, 288.6, 127.0, 288.3, 126.9);
        vaulter.bezierCurveTo(288.1, 126.8, 287.6, 127.0, 287.2, 127.2);
        vaulter.bezierCurveTo(286.7, 127.6, 286.2, 128.0, 286.0, 128.2);
        vaulter.bezierCurveTo(285.6, 128.5, 285.2, 130.7, 285.2, 131.8);
        vaulter.bezierCurveTo(285.3, 132.6, 286.7, 133.5, 287.5, 133.9);
        vaulter.bezierCurveTo(287.8, 134.1, 288.0, 134.2, 288.1, 134.3);
        vaulter.bezierCurveTo(288.3, 134.5, 288.9, 134.2, 289.4, 133.9);
        vaulter.bezierCurveTo(289.9, 133.7, 290.4, 133.3, 290.5, 133.2);
        vaulter.bezierCurveTo(290.8, 132.8, 291.0, 132.2, 291.0, 132.2);
        vaulter.bezierCurveTo(292.7, 130.5, 303.7, 123.8, 304.2, 122.7);
        vaulter.bezierCurveTo(304.7, 121.8, 306.2, 104.6, 306.6, 99.9);
        vaulter.bezierCurveTo(306.7, 99.1, 306.7, 98.7, 306.7, 98.7);
        vaulter.lineTo(300.8, 99.6);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(313.6, 81.0);
        vaulter.bezierCurveTo(313.2, 79.7, 312.6, 78.5, 311.3, 77.5);
        vaulter.bezierCurveTo(309.4, 76.1, 305.2, 75.1, 302.6, 75.3);
        vaulter.bezierCurveTo(301.6, 75.3, 300.8, 75.5, 300.5, 76.0);
        vaulter.bezierCurveTo(300.4, 76.0, 300.3, 76.2, 300.2, 76.4);
        vaulter.bezierCurveTo(300.2, 76.4, 300.2, 76.4, 300.2, 76.4);
        vaulter.bezierCurveTo(299.8, 77.1, 299.2, 78.5, 298.4, 80.2);
        vaulter.bezierCurveTo(297.6, 81.6, 296.8, 83.3, 296.0, 84.9);
        vaulter.bezierCurveTo(295.3, 86.3, 294.5, 87.7, 293.9, 88.9);
        vaulter.bezierCurveTo(293.4, 89.7, 292.6, 90.9, 292.2, 91.5);
        vaulter.bezierCurveTo(291.3, 92.7, 290.7, 93.4, 290.4, 93.8);
        vaulter.bezierCurveTo(290.1, 94.2, 290.0, 94.4, 290.1, 94.7);
        vaulter.bezierCurveTo(290.2, 95.3, 290.5, 96.2, 291.0, 97.1);
        vaulter.bezierCurveTo(291.8, 98.7, 293.0, 100.4, 294.9, 101.5);
        vaulter.bezierCurveTo(295.5, 101.8, 296.2, 102.0, 297.0, 102.2);
        vaulter.bezierCurveTo(298.0, 102.4, 299.2, 102.5, 300.4, 102.5);
        vaulter.bezierCurveTo(302.9, 102.4, 305.4, 101.6, 306.6, 100.0);
        vaulter.bezierCurveTo(306.6, 100.0, 306.6, 99.9, 306.6, 99.9);
        vaulter.bezierCurveTo(307.3, 98.7, 313.8, 87.4, 313.9, 85.3);
        vaulter.bezierCurveTo(314.0, 84.1, 314.0, 82.5, 313.6, 81.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(287.1, 77.0);
        vaulter.bezierCurveTo(287.1, 77.0, 287.1, 76.1, 286.1, 76.1);
        vaulter.bezierCurveTo(285.1, 76.2, 285.1, 77.1, 285.1, 77.1);
        vaulter.bezierCurveTo(285.1, 77.1, 294.0, 263.7, 293.6, 289.9);
        vaulter.bezierCurveTo(293.3, 316.2, 293.0, 343.0, 293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.bezierCurveTo(295.0, 343.0, 295.5, 314.4, 295.6, 289.9);
        vaulter.bezierCurveTo(295.7, 265.4, 287.1, 77.0, 287.1, 77.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(292.2, 96.5);
        vaulter.bezierCurveTo(292.2, 96.5, 291.7, 96.8, 291.0, 97.1);
        vaulter.bezierCurveTo(290.2, 97.6, 289.1, 98.1, 288.0, 98.8);
        vaulter.bezierCurveTo(287.4, 99.2, 286.7, 99.6, 286.1, 100.1);
        vaulter.bezierCurveTo(285.3, 100.7, 284.5, 101.4, 284.1, 102.0);
        vaulter.bezierCurveTo(282.3, 104.6, 283.0, 108.8, 286.0, 111.3);
        vaulter.bezierCurveTo(286.2, 111.5, 286.4, 111.6, 286.6, 111.7);
        vaulter.bezierCurveTo(287.2, 112.0, 287.9, 112.2, 288.6, 112.2);
        vaulter.bezierCurveTo(291.5, 112.3, 295.1, 110.4, 296.1, 107.9);
        vaulter.bezierCurveTo(297.1, 105.3, 297.0, 103.0, 297.0, 102.2);
        vaulter.bezierCurveTo(296.9, 102.0, 296.9, 101.9, 296.9, 101.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Group

        // vaulter/Group/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(294.5, 89.4);
        vaulter.bezierCurveTo(295.4, 89.4, 298.1, 82.7, 298.4, 81.2);
        vaulter.bezierCurveTo(298.4, 80.9, 298.4, 80.5, 298.4, 80.2);
        vaulter.bezierCurveTo(298.2, 79.4, 297.9, 78.7, 297.6, 78.1);
        vaulter.bezierCurveTo(297.4, 77.7, 297.2, 77.4, 297.1, 77.4);
        vaulter.lineTo(296.5, 77.6);
        vaulter.bezierCurveTo(295.7, 77.9, 294.3, 78.9, 293.5, 80.1);
        vaulter.bezierCurveTo(293.0, 80.8, 292.5, 82.0, 292.0, 83.1);
        vaulter.bezierCurveTo(291.3, 84.7, 290.7, 86.2, 290.1, 86.7);
        vaulter.bezierCurveTo(289.1, 87.5, 288.8, 90.2, 288.8, 91.5);
        vaulter.bezierCurveTo(288.9, 92.3, 289.5, 93.4, 289.8, 94.1);
        vaulter.bezierCurveTo(290.1, 94.7, 290.2, 95.2, 290.2, 95.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(297.1, 77.4);
        vaulter.lineTo(296.5, 77.6);
        vaulter.lineTo(290.0, 79.6);
        vaulter.bezierCurveTo(290.0, 79.6, 289.3, 78.9, 288.5, 78.2);
        vaulter.bezierCurveTo(288.3, 78.0, 287.8, 78.0, 287.2, 78.1);
        vaulter.bezierCurveTo(286.6, 78.2, 285.8, 78.5, 285.3, 78.7);
        vaulter.bezierCurveTo(284.7, 79.0, 284.3, 79.3, 284.3, 79.4);
        vaulter.bezierCurveTo(284.0, 80.0, 283.4, 81.2, 283.2, 82.0);
        vaulter.bezierCurveTo(283.1, 82.8, 284.3, 84.7, 284.3, 84.7);
        vaulter.bezierCurveTo(284.5, 85.0, 285.0, 85.2, 285.5, 85.3);
        vaulter.bezierCurveTo(286.2, 85.5, 286.9, 85.6, 287.5, 85.6);
        vaulter.bezierCurveTo(287.9, 85.6, 288.3, 85.5, 288.5, 85.4);
        vaulter.bezierCurveTo(289.4, 84.9, 290.0, 83.6, 290.0, 83.6);
        vaulter.lineTo(292.0, 83.1);
        vaulter.lineTo(297.0, 82.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.restore();
        vaulter.beginPath();
        vaulter.moveTo(300.2, 76.4);
        vaulter.bezierCurveTo(300.2, 76.4, 303.1, 69.4, 307.9, 68.6);
        vaulter.bezierCurveTo(312.7, 67.9, 315.5, 70.4, 316.5, 73.4);
        vaulter.bezierCurveTo(317.5, 76.4, 313.2, 81.5, 313.2, 81.5);
        vaulter.bezierCurveTo(313.2, 81.5, 310.4, 83.7, 305.5, 81.5);
        vaulter.bezierCurveTo(300.6, 79.3, 300.2, 76.4, 300.2, 76.4);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(313.5, 81.0);
        vaulter.bezierCurveTo(314.1, 80.9, 314.4, 80.7, 314.4, 80.7);
        vaulter.bezierCurveTo(318.2, 79.7, 323.3, 66.0, 324.1, 64.1);
        vaulter.bezierCurveTo(324.8, 62.6, 325.0, 60.7, 324.8, 59.1);
        vaulter.bezierCurveTo(324.8, 59.1, 328.4, 48.7, 329.7, 47.0);
        vaulter.bezierCurveTo(331.0, 45.3, 334.4, 35.0, 334.4, 29.1);
        vaulter.lineTo(334.8, 26.1);
        vaulter.lineTo(335.4, 21.5);
        vaulter.bezierCurveTo(335.4, 21.5, 331.7, 23.6, 331.1, 25.9);
        vaulter.bezierCurveTo(330.5, 27.8, 323.0, 46.6, 320.1, 53.8);
        vaulter.bezierCurveTo(319.4, 55.6, 318.9, 56.7, 318.9, 56.7);
        vaulter.bezierCurveTo(317.5, 61.1, 316.1, 66.6, 313.0, 70.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(313.1, 70.3);
        vaulter.bezierCurveTo(317.0, 65.6, 317.3, 59.1, 320.1, 53.8);
        vaulter.lineTo(332.1, 30.0);
        vaulter.bezierCurveTo(333.1, 27.8, 334.1, 27.1, 334.8, 26.2);
        vaulter.bezierCurveTo(334.8, 26.2, 334.8, 26.1, 334.9, 26.1);
        vaulter.bezierCurveTo(335.8, 25.0, 340.4, 20.4, 341.1, 16.5);
        vaulter.bezierCurveTo(341.4, 15.1, 341.4, 13.7, 340.8, 13.4);
        vaulter.bezierCurveTo(340.3, 13.0, 338.4, 14.5, 338.4, 14.5);
        vaulter.bezierCurveTo(338.4, 14.5, 332.2, 22.6, 330.5, 23.8);
        vaulter.bezierCurveTo(328.9, 24.9, 329.0, 24.9, 328.5, 25.6);
        vaulter.bezierCurveTo(327.9, 26.3, 328.6, 28.3, 328.6, 28.3);
        vaulter.bezierCurveTo(321.2, 35.8, 312.2, 51.9, 312.2, 51.9);
        vaulter.bezierCurveTo(311.6, 52.0, 311.2, 52.1, 311.2, 52.1);
        vaulter.bezierCurveTo(301.2, 65.7, 300.2, 76.4, 300.2, 76.4);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(307.4, 98.8);
        vaulter.lineTo(302.2, 99.6);
        vaulter.bezierCurveTo(302.2, 99.6, 301.7, 100.7, 301.1, 102.7);
        vaulter.bezierCurveTo(300.1, 105.9, 299.0, 111.5, 299.7, 118.1);
        vaulter.bezierCurveTo(298.0, 118.8, 293.5, 126.7, 290.3, 128.8);
        vaulter.bezierCurveTo(289.9, 128.8, 289.6, 128.6, 289.4, 128.4);
        vaulter.bezierCurveTo(288.9, 127.9, 288.5, 127.3, 288.1, 127.1);
        vaulter.bezierCurveTo(287.9, 127.1, 287.7, 127.2, 287.4, 127.3);
        vaulter.bezierCurveTo(286.8, 127.6, 286.0, 128.2, 285.8, 128.4);
        vaulter.bezierCurveTo(285.4, 128.8, 285.0, 131.0, 285.0, 132.1);
        vaulter.bezierCurveTo(285.1, 133.0, 286.9, 134.0, 287.7, 134.4);
        vaulter.bezierCurveTo(287.8, 134.5, 287.9, 134.5, 287.9, 134.6);
        vaulter.bezierCurveTo(288.1, 134.7, 289.0, 134.3, 289.6, 134.0);
        vaulter.bezierCurveTo(289.9, 133.8, 290.2, 133.6, 290.3, 133.4);
        vaulter.bezierCurveTo(290.6, 133.1, 290.8, 132.5, 290.8, 132.5);
        vaulter.bezierCurveTo(292.5, 130.7, 303.2, 121.7, 303.7, 120.7);
        vaulter.bezierCurveTo(304.2, 119.6, 308.2, 98.7, 308.2, 98.7);
        vaulter.lineTo(307.4, 98.8);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(316.6, 77.4);
        vaulter.bezierCurveTo(315.7, 76.3, 314.6, 75.2, 313.5, 74.3);
        vaulter.bezierCurveTo(311.3, 72.7, 306.4, 71.6, 303.9, 72.1);
        vaulter.bezierCurveTo(303.3, 72.2, 302.9, 72.4, 302.6, 72.7);
        vaulter.bezierCurveTo(302.3, 73.2, 300.2, 77.0, 298.2, 80.6);
        vaulter.bezierCurveTo(297.3, 82.3, 296.4, 83.9, 295.8, 85.2);
        vaulter.bezierCurveTo(295.1, 86.5, 294.3, 87.9, 293.6, 89.1);
        vaulter.bezierCurveTo(293.2, 89.9, 292.4, 91.1, 292.0, 91.7);
        vaulter.bezierCurveTo(291.1, 92.9, 290.5, 93.6, 290.2, 94.1);
        vaulter.bezierCurveTo(289.9, 94.4, 289.8, 94.7, 289.8, 94.9);
        vaulter.bezierCurveTo(290.0, 95.4, 290.2, 96.1, 290.5, 96.9);
        vaulter.bezierCurveTo(291.3, 98.6, 292.6, 100.6, 294.7, 101.7);
        vaulter.bezierCurveTo(295.2, 102.0, 295.7, 102.2, 296.3, 102.3);
        vaulter.bezierCurveTo(297.7, 102.7, 299.5, 102.8, 301.1, 102.7);
        vaulter.bezierCurveTo(303.3, 102.4, 305.3, 101.6, 306.3, 100.2);
        vaulter.bezierCurveTo(306.3, 100.2, 306.7, 99.7, 307.4, 98.8);
        vaulter.bezierCurveTo(310.2, 94.8, 318.1, 83.6, 318.2, 81.7);
        vaulter.bezierCurveTo(318.3, 80.4, 317.6, 78.9, 316.6, 77.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(287.1, 77.0);
        vaulter.bezierCurveTo(287.1, 77.0, 287.1, 76.1, 286.1, 76.1);
        vaulter.bezierCurveTo(285.1, 76.2, 285.1, 77.1, 285.1, 77.1);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(287.1, 77.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(291.6, 96.4);
        vaulter.bezierCurveTo(291.6, 96.4, 291.2, 96.6, 290.5, 96.9);
        vaulter.bezierCurveTo(289.9, 97.2, 289.1, 97.7, 288.1, 98.2);
        vaulter.bezierCurveTo(287.5, 98.6, 286.9, 99.0, 286.2, 99.4);
        vaulter.bezierCurveTo(285.1, 100.2, 284.0, 101.0, 283.4, 101.9);
        vaulter.bezierCurveTo(281.6, 104.4, 282.3, 108.6, 285.4, 111.2);
        vaulter.bezierCurveTo(285.8, 111.5, 286.2, 111.7, 286.7, 111.9);
        vaulter.bezierCurveTo(287.3, 112.0, 288.0, 112.1, 288.7, 112.0);
        vaulter.bezierCurveTo(291.4, 111.8, 294.5, 110.0, 295.4, 107.8);
        vaulter.bezierCurveTo(296.3, 105.4, 296.4, 103.3, 296.3, 102.3);
        vaulter.bezierCurveTo(296.3, 102.0, 296.3, 101.8, 296.3, 101.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(294.2, 89.7);
        vaulter.bezierCurveTo(295.2, 89.6, 297.9, 82.9, 298.2, 81.5);
        vaulter.bezierCurveTo(298.2, 81.2, 298.2, 80.9, 298.2, 80.6);
        vaulter.bezierCurveTo(298.1, 79.8, 297.7, 79.0, 297.4, 78.4);
        vaulter.bezierCurveTo(297.2, 78.0, 297.0, 77.7, 296.9, 77.6);
        vaulter.lineTo(296.3, 77.8);
        vaulter.bezierCurveTo(295.5, 78.2, 294.1, 79.1, 293.3, 80.3);
        vaulter.bezierCurveTo(292.8, 81.0, 292.3, 82.2, 291.8, 83.4);
        vaulter.bezierCurveTo(291.1, 84.9, 290.5, 86.5, 289.9, 86.9);
        vaulter.bezierCurveTo(288.8, 87.7, 288.6, 91.0, 288.6, 92.3);
        vaulter.bezierCurveTo(288.6, 93.0, 289.5, 93.7, 290.2, 94.1);
        vaulter.bezierCurveTo(290.6, 94.3, 290.9, 94.5, 290.9, 94.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(296.9, 77.6);
        vaulter.lineTo(296.3, 77.8);
        vaulter.lineTo(289.8, 79.8);
        vaulter.bezierCurveTo(289.8, 79.8, 289.1, 79.2, 288.3, 78.4);
        vaulter.bezierCurveTo(288.1, 78.3, 287.8, 78.2, 287.3, 78.3);
        vaulter.bezierCurveTo(286.7, 78.3, 286.0, 78.6, 285.4, 78.8);
        vaulter.bezierCurveTo(284.7, 79.1, 284.2, 79.5, 284.0, 79.7);
        vaulter.bezierCurveTo(283.8, 80.2, 283.1, 81.5, 283.0, 82.3);
        vaulter.bezierCurveTo(282.9, 83.1, 284.0, 85.0, 284.0, 85.0);
        vaulter.bezierCurveTo(284.4, 85.3, 285.0, 85.5, 285.7, 85.7);
        vaulter.bezierCurveTo(286.4, 85.8, 287.1, 85.9, 287.6, 85.8);
        vaulter.bezierCurveTo(287.9, 85.8, 288.2, 85.7, 288.3, 85.6);
        vaulter.bezierCurveTo(289.2, 85.1, 289.8, 83.8, 289.8, 83.8);
        vaulter.lineTo(291.8, 83.4);
        vaulter.lineTo(296.3, 82.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(316.6, 77.4);
        vaulter.bezierCurveTo(316.7, 77.4, 316.8, 77.3, 316.8, 77.3);
        vaulter.bezierCurveTo(320.8, 76.7, 327.3, 63.6, 328.4, 61.9);
        vaulter.bezierCurveTo(329.2, 60.5, 329.6, 58.6, 329.6, 57.0);
        vaulter.bezierCurveTo(329.6, 57.0, 334.3, 47.0, 335.8, 45.5);
        vaulter.bezierCurveTo(337.3, 43.9, 341.8, 34.1, 342.5, 28.3);
        vaulter.lineTo(343.2, 25.3);
        vaulter.lineTo(344.3, 20.8);
        vaulter.bezierCurveTo(344.3, 20.8, 340.4, 22.4, 339.5, 24.7);
        vaulter.bezierCurveTo(338.8, 26.5, 329.2, 44.4, 325.5, 51.2);
        vaulter.bezierCurveTo(324.6, 52.9, 324.0, 53.9, 324.0, 53.9);
        vaulter.bezierCurveTo(323.6, 54.9, 322.7, 57.0, 321.5, 59.2);
        vaulter.bezierCurveTo(320.5, 61.8, 318.6, 64.8, 316.6, 66.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(316.6, 66.8);
        vaulter.bezierCurveTo(318.6, 64.8, 320.5, 61.8, 321.5, 59.2);
        vaulter.bezierCurveTo(322.7, 57.0, 323.6, 54.9, 324.0, 53.9);
        vaulter.bezierCurveTo(324.4, 53.0, 324.9, 52.1, 325.5, 51.2);
        vaulter.lineTo(340.0, 28.9);
        vaulter.bezierCurveTo(341.3, 26.8, 342.3, 26.2, 343.1, 25.4);
        vaulter.bezierCurveTo(343.1, 25.4, 343.2, 25.4, 343.2, 25.3);
        vaulter.bezierCurveTo(344.3, 24.4, 349.3, 20.3, 350.5, 16.5);
        vaulter.bezierCurveTo(350.9, 15.1, 351.1, 13.7, 350.6, 13.3);
        vaulter.bezierCurveTo(350.0, 12.9, 351.1, 13.7, 350.6, 13.3);
        vaulter.bezierCurveTo(350.0, 12.9, 351.1, 13.7, 350.6, 13.3);
        vaulter.bezierCurveTo(350.0, 12.9, 348.0, 14.2, 348.0, 14.2);
        vaulter.bezierCurveTo(348.0, 14.2, 341.0, 21.6, 339.2, 22.5);
        vaulter.bezierCurveTo(337.4, 23.4, 337.5, 23.4, 336.9, 24.1);
        vaulter.bezierCurveTo(336.3, 24.8, 336.8, 26.8, 336.8, 26.8);
        vaulter.bezierCurveTo(328.5, 33.5, 317.8, 48.5, 317.8, 48.5);
        vaulter.bezierCurveTo(317.2, 48.5, 316.8, 48.5, 316.8, 48.5);
        vaulter.bezierCurveTo(305.3, 60.9, 302.8, 72.5, 302.8, 72.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(302.3, 73.6);
        vaulter.lineTo(308.4, 61.5);
        vaulter.bezierCurveTo(308.4, 61.5, 312.8, 60.7, 317.8, 64.0);
        vaulter.bezierCurveTo(322.9, 67.4, 322.4, 70.5, 322.4, 70.5);
        vaulter.lineTo(315.8, 78.4);
        vaulter.bezierCurveTo(315.8, 78.4, 313.4, 80.0, 308.6, 78.4);
        vaulter.bezierCurveTo(303.7, 76.9, 302.3, 73.6, 302.3, 73.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(287.1, 77.0);
        vaulter.bezierCurveTo(287.1, 77.0, 287.1, 76.1, 286.1, 76.1);
        vaulter.bezierCurveTo(285.1, 76.2, 285.1, 77.1, 285.1, 77.1);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(287.1, 77.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(302.8, 69.3);
        vaulter.bezierCurveTo(302.6, 68.4, 299.4, 69.0, 297.6, 69.7);
        vaulter.bezierCurveTo(297.2, 69.8, 296.9, 69.9, 296.5, 70.0);
        vaulter.bezierCurveTo(295.8, 70.3, 295.2, 70.8, 294.7, 71.2);
        vaulter.bezierCurveTo(294.4, 71.5, 294.1, 71.8, 294.1, 71.9);
        vaulter.lineTo(293.6, 72.3);
        vaulter.lineTo(288.8, 77.1);
        vaulter.bezierCurveTo(288.8, 77.1, 287.9, 76.9, 286.9, 76.6);
        vaulter.bezierCurveTo(286.5, 76.5, 286.1, 76.7, 285.6, 77.1);
        vaulter.bezierCurveTo(285.1, 77.5, 284.6, 78.1, 284.2, 78.6);
        vaulter.bezierCurveTo(283.9, 79.1, 283.6, 79.5, 283.6, 79.7);
        vaulter.bezierCurveTo(283.7, 80.2, 283.7, 81.7, 283.9, 82.4);
        vaulter.bezierCurveTo(284.2, 83.2, 286.1, 84.4, 286.1, 84.4);
        vaulter.bezierCurveTo(286.4, 84.4, 287.0, 84.4, 287.5, 84.3);
        vaulter.bezierCurveTo(288.2, 84.2, 288.8, 83.9, 289.4, 83.6);
        vaulter.bezierCurveTo(289.7, 83.4, 290.0, 83.2, 290.2, 83.0);
        vaulter.bezierCurveTo(290.8, 82.1, 290.7, 80.7, 290.7, 80.7);
        vaulter.lineTo(292.2, 79.4);
        vaulter.lineTo(297.6, 74.8);
        vaulter.bezierCurveTo(298.4, 75.1, 299.7, 75.3, 300.9, 75.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(320.6, 54.3);
        vaulter.bezierCurveTo(319.5, 53.5, 317.9, 52.8, 316.1, 52.3);
        vaulter.lineTo(309.7, 51.6);
        vaulter.bezierCurveTo(309.5, 51.6, 309.2, 51.6, 309.0, 51.7);
        vaulter.bezierCurveTo(308.3, 51.8, 306.7, 57.5, 304.9, 61.2);
        vaulter.bezierCurveTo(303.1, 64.9, 298.5, 70.5, 298.0, 71.2);
        vaulter.bezierCurveTo(297.2, 72.3, 296.9, 73.0, 296.6, 73.6);
        vaulter.bezierCurveTo(296.2, 74.6, 296.0, 75.5, 296.0, 76.1);
        vaulter.bezierCurveTo(296.0, 77.1, 295.9, 78.5, 296.7, 80.0);
        vaulter.bezierCurveTo(297.1, 80.6, 297.5, 81.2, 297.9, 81.7);
        vaulter.bezierCurveTo(298.8, 82.8, 299.8, 83.7, 301.0, 84.4);
        vaulter.bezierCurveTo(301.9, 84.9, 303.0, 85.1, 304.0, 85.2);
        vaulter.lineTo(304.5, 85.2);
        vaulter.bezierCurveTo(307.2, 85.2, 310.1, 84.0, 312.0, 82.1);
        vaulter.bezierCurveTo(312.4, 81.7, 312.7, 81.4, 313.0, 81.0);
        vaulter.bezierCurveTo(313.0, 81.0, 315.8, 72.7, 318.2, 68.4);
        vaulter.bezierCurveTo(320.5, 64.1, 324.0, 61.8, 324.0, 61.5);
        vaulter.bezierCurveTo(324.1, 59.0, 323.5, 56.4, 320.6, 54.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(304.3, 84.7);
        vaulter.lineTo(304.5, 85.0);
        vaulter.bezierCurveTo(304.5, 85.0, 304.5, 85.1, 304.5, 85.2);
        vaulter.bezierCurveTo(304.4, 85.6, 304.2, 86.6, 303.8, 88.1);
        vaulter.bezierCurveTo(303.8, 90.4, 304.4, 91.2, 304.4, 91.2);
        vaulter.bezierCurveTo(304.4, 91.2, 302.8, 93.0, 302.5, 94.3);
        vaulter.bezierCurveTo(302.2, 95.6, 301.1, 98.9, 301.2, 100.7);
        vaulter.bezierCurveTo(299.2, 105.1, 299.1, 109.7, 295.6, 116.8);
        vaulter.bezierCurveTo(295.6, 116.8, 295.2, 117.7, 293.8, 118.1);
        vaulter.bezierCurveTo(292.4, 118.4, 288.4, 122.8, 288.4, 122.8);
        vaulter.bezierCurveTo(288.4, 122.8, 287.6, 124.0, 287.7, 124.6);
        vaulter.bezierCurveTo(287.9, 125.1, 289.1, 124.5, 289.4, 125.0);
        vaulter.bezierCurveTo(289.6, 125.6, 290.3, 124.6, 290.8, 124.9);
        vaulter.bezierCurveTo(291.3, 125.3, 291.7, 124.7, 292.1, 124.2);
        vaulter.bezierCurveTo(292.4, 123.6, 294.2, 121.4, 294.2, 121.4);
        vaulter.bezierCurveTo(294.2, 121.4, 295.3, 120.9, 296.1, 120.4);
        vaulter.bezierCurveTo(297.0, 119.9, 297.2, 118.6, 297.8, 117.8);
        vaulter.bezierCurveTo(301.5, 112.9, 306.0, 107.0, 307.6, 102.3);
        vaulter.bezierCurveTo(308.5, 99.4, 309.6, 92.2, 309.6, 92.2);
        vaulter.bezierCurveTo(309.6, 92.2, 312.0, 86.6, 312.2, 85.2);
        vaulter.bezierCurveTo(312.3, 84.2, 312.2, 83.1, 312.0, 82.1);
        vaulter.bezierCurveTo(311.6, 80.2, 310.7, 78.6, 309.6, 78.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(319.7, 52.8);
        vaulter.bezierCurveTo(321.1, 52.1, 322.6, 51.2, 324.0, 50.2);
        vaulter.bezierCurveTo(330.2, 45.9, 335.8, 39.4, 335.8, 39.4);
        vaulter.lineTo(339.5, 36.8);
        vaulter.bezierCurveTo(343.4, 34.0, 345.8, 30.4, 348.9, 27.0);
        vaulter.bezierCurveTo(351.4, 24.2, 354.3, 21.5, 358.8, 19.6);
        vaulter.bezierCurveTo(358.8, 19.6, 359.0, 20.0, 359.4, 20.7);
        vaulter.bezierCurveTo(360.0, 21.8, 360.9, 23.4, 361.6, 24.5);
        vaulter.bezierCurveTo(362.8, 26.4, 364.7, 27.6, 365.4, 26.2);
        vaulter.bezierCurveTo(366.1, 24.8, 364.2, 23.1, 364.0, 21.7);
        vaulter.bezierCurveTo(363.8, 20.9, 363.6, 19.6, 363.3, 18.3);
        vaulter.bezierCurveTo(363.1, 17.3, 362.9, 16.3, 362.6, 15.4);
        vaulter.bezierCurveTo(361.9, 13.3, 359.5, 13.3, 358.6, 13.5);
        vaulter.bezierCurveTo(357.6, 13.7, 356.7, 15.6, 356.7, 15.6);
        vaulter.bezierCurveTo(338.4, 23.1, 333.4, 32.1, 333.4, 32.1);
        vaulter.bezierCurveTo(330.6, 31.8, 323.3, 36.1, 318.1, 39.6);
        vaulter.bezierCurveTo(313.0, 43.1, 309.7, 51.6, 309.7, 51.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(298.9, 78.5);
        vaulter.bezierCurveTo(298.9, 78.5, 298.0, 79.1, 296.7, 80.0);
        vaulter.bezierCurveTo(294.7, 81.4, 291.8, 83.6, 290.5, 85.5);
        vaulter.bezierCurveTo(288.8, 87.8, 288.3, 91.2, 289.9, 93.8);
        vaulter.bezierCurveTo(290.4, 94.6, 291.2, 95.4, 292.2, 95.9);
        vaulter.bezierCurveTo(296.1, 98.1, 301.1, 95.6, 302.6, 91.7);
        vaulter.bezierCurveTo(303.1, 90.3, 303.5, 89.1, 303.8, 88.1);
        vaulter.bezierCurveTo(303.8, 87.4, 303.8, 86.4, 304.0, 85.2);
        vaulter.bezierCurveTo(304.0, 85.2, 304.0, 85.2, 304.0, 85.2);
        vaulter.bezierCurveTo(304.0, 85.2, 304.1, 85.0, 304.3, 84.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(310.2, 52.6);
        vaulter.bezierCurveTo(310.2, 52.6, 310.9, 50.2, 312.5, 47.6);
        vaulter.bezierCurveTo(314.0, 44.9, 316.9, 42.0, 318.5, 41.3);
        vaulter.bezierCurveTo(320.2, 40.6, 326.4, 40.5, 329.0, 42.0);
        vaulter.bezierCurveTo(331.5, 43.5, 334.4, 48.0, 332.6, 51.0);
        vaulter.bezierCurveTo(330.9, 54.1, 322.8, 61.4, 322.1, 61.9);
        vaulter.bezierCurveTo(321.3, 62.5, 317.5, 61.5, 315.0, 60.0);
        vaulter.bezierCurveTo(312.6, 58.5, 310.2, 54.2, 310.2, 52.6);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(324.0, 60.3);
        vaulter.bezierCurveTo(339.2, 53.1, 342.1, 44.2, 343.4, 43.3);
        vaulter.bezierCurveTo(344.6, 42.4, 345.9, 40.2, 345.9, 40.2);
        vaulter.bezierCurveTo(345.9, 40.2, 354.0, 30.4, 361.9, 26.1);
        vaulter.bezierCurveTo(361.9, 26.1, 362.1, 26.6, 362.6, 27.5);
        vaulter.bezierCurveTo(363.0, 28.4, 364.3, 29.1, 364.3, 29.1);
        vaulter.bezierCurveTo(364.3, 29.1, 366.5, 33.1, 367.1, 33.8);
        vaulter.bezierCurveTo(367.8, 34.5, 369.5, 35.3, 370.2, 34.1);
        vaulter.bezierCurveTo(370.9, 33.0, 368.0, 26.7, 367.6, 26.4);
        vaulter.bezierCurveTo(367.1, 26.1, 366.1, 22.3, 365.5, 20.6);
        vaulter.bezierCurveTo(365.2, 19.7, 364.3, 18.8, 363.3, 18.3);
        vaulter.bezierCurveTo(362.6, 17.9, 361.8, 17.7, 361.2, 17.9);
        vaulter.bezierCurveTo(360.3, 18.2, 359.6, 19.9, 359.4, 20.7);
        vaulter.bezierCurveTo(359.3, 20.9, 359.3, 21.1, 359.3, 21.1);
        vaulter.bezierCurveTo(356.1, 22.8, 352.3, 24.9, 348.9, 27.0);
        vaulter.bezierCurveTo(345.1, 29.3, 341.7, 31.5, 340.0, 33.2);
        vaulter.bezierCurveTo(332.4, 35.6, 324.0, 42.5, 324.0, 42.5);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(287.2, 77.0);
        vaulter.bezierCurveTo(287.2, 77.0, 287.2, 76.1, 286.2, 76.1);
        vaulter.bezierCurveTo(285.2, 76.2, 285.2, 77.1, 285.2, 77.1);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(287.2, 77.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(303.6, 69.2);
        vaulter.bezierCurveTo(303.3, 68.3, 299.4, 69.0, 297.6, 69.7);
        vaulter.bezierCurveTo(297.3, 69.8, 296.9, 69.9, 296.6, 70.0);
        vaulter.bezierCurveTo(295.9, 70.3, 295.2, 70.8, 294.8, 71.2);
        vaulter.bezierCurveTo(294.4, 71.5, 294.2, 71.8, 294.1, 71.9);
        vaulter.lineTo(293.7, 72.3);
        vaulter.lineTo(288.9, 77.1);
        vaulter.bezierCurveTo(288.9, 77.1, 287.9, 76.9, 286.9, 76.6);
        vaulter.bezierCurveTo(286.6, 76.5, 286.1, 76.7, 285.7, 77.1);
        vaulter.bezierCurveTo(285.2, 77.5, 284.7, 78.1, 284.3, 78.6);
        vaulter.bezierCurveTo(283.9, 79.1, 283.7, 79.5, 283.7, 79.7);
        vaulter.bezierCurveTo(283.7, 80.2, 283.7, 81.7, 284.0, 82.4);
        vaulter.bezierCurveTo(284.2, 83.2, 286.2, 84.4, 286.2, 84.4);
        vaulter.bezierCurveTo(286.5, 84.4, 287.0, 84.4, 287.6, 84.3);
        vaulter.bezierCurveTo(288.2, 84.2, 288.9, 83.9, 289.4, 83.6);
        vaulter.bezierCurveTo(289.8, 83.4, 290.1, 83.2, 290.2, 83.0);
        vaulter.bezierCurveTo(290.8, 82.1, 290.7, 80.7, 290.7, 80.7);
        vaulter.lineTo(292.3, 79.4);
        vaulter.lineTo(297.6, 74.8);
        vaulter.bezierCurveTo(298.5, 75.1, 299.7, 75.3, 301.0, 75.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(326.7, 49.6);
        vaulter.lineTo(326.8, 49.2);
        vaulter.bezierCurveTo(326.7, 49.0, 326.7, 48.8, 326.5, 48.6);
        vaulter.bezierCurveTo(326.3, 48.3, 326.0, 48.0, 325.7, 47.7);
        vaulter.bezierCurveTo(323.2, 45.7, 318.6, 44.6, 316.2, 45.1);
        vaulter.bezierCurveTo(315.6, 45.3, 315.1, 45.5, 314.9, 45.8);
        vaulter.bezierCurveTo(314.5, 46.3, 311.1, 55.3, 309.0, 59.1);
        vaulter.bezierCurveTo(307.6, 61.6, 303.5, 65.2, 303.0, 65.9);
        vaulter.bezierCurveTo(302.6, 66.6, 301.4, 68.4, 301.5, 70.2);
        vaulter.bezierCurveTo(301.5, 70.3, 301.5, 70.5, 301.6, 70.6);
        vaulter.bezierCurveTo(301.6, 71.0, 301.7, 71.5, 301.8, 72.1);
        vaulter.bezierCurveTo(302.1, 73.5, 302.6, 75.2, 303.6, 76.5);
        vaulter.bezierCurveTo(303.9, 76.8, 304.1, 77.1, 304.4, 77.4);
        vaulter.bezierCurveTo(305.1, 78.1, 305.9, 78.5, 307.0, 78.7);
        vaulter.bezierCurveTo(307.2, 78.7, 307.5, 78.7, 307.8, 78.7);
        vaulter.bezierCurveTo(308.8, 78.8, 309.8, 78.8, 310.7, 78.7);
        vaulter.bezierCurveTo(313.4, 78.3, 315.3, 76.8, 317.2, 74.3);
        vaulter.bezierCurveTo(317.2, 74.3, 324.8, 59.6, 325.0, 56.8);
        vaulter.bezierCurveTo(325.1, 54.5, 326.8, 51.4, 326.8, 49.5);
        vaulter.bezierCurveTo(326.8, 49.6, 326.7, 49.6, 326.7, 49.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(302.3, 71.8);
        vaulter.bezierCurveTo(302.3, 71.8, 302.1, 71.9, 301.8, 72.1);
        vaulter.bezierCurveTo(301.2, 72.5, 299.9, 73.3, 298.4, 74.4);
        vaulter.bezierCurveTo(296.7, 75.7, 294.8, 77.3, 293.8, 78.7);
        vaulter.bezierCurveTo(292.4, 80.7, 291.8, 83.6, 292.7, 86.0);
        vaulter.bezierCurveTo(293.2, 87.2, 294.1, 88.4, 295.6, 89.2);
        vaulter.bezierCurveTo(295.6, 89.2, 295.7, 89.2, 295.7, 89.2);
        vaulter.bezierCurveTo(297.3, 90.0, 299.0, 90.1, 300.5, 89.7);
        vaulter.bezierCurveTo(302.9, 89.0, 305.0, 87.2, 305.9, 84.9);
        vaulter.bezierCurveTo(307.1, 82.0, 307.6, 79.7, 307.8, 78.7);
        vaulter.bezierCurveTo(307.9, 78.4, 307.9, 78.2, 307.9, 78.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(303.6, 71.8);
        vaulter.bezierCurveTo(303.6, 71.8, 304.6, 67.4, 310.9, 66.0);
        vaulter.bezierCurveTo(317.2, 64.6, 316.0, 72.8, 314.8, 74.4);
        vaulter.bezierCurveTo(313.7, 75.9, 311.7, 77.8, 309.0, 78.6);
        vaulter.bezierCurveTo(306.3, 79.4, 302.0, 78.2, 303.6, 71.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(304.1, 74.4);
        vaulter.bezierCurveTo(303.6, 75.0, 302.7, 78.0, 302.7, 78.0);
        vaulter.bezierCurveTo(302.6, 78.4, 302.6, 78.8, 302.5, 79.1);
        vaulter.bezierCurveTo(302.2, 82.8, 303.1, 83.9, 303.1, 83.9);
        vaulter.bezierCurveTo(303.1, 83.9, 301.5, 85.8, 301.2, 87.1);
        vaulter.bezierCurveTo(301.1, 87.7, 300.8, 88.6, 300.5, 89.7);
        vaulter.bezierCurveTo(300.1, 91.0, 299.8, 92.5, 299.9, 93.4);
        vaulter.bezierCurveTo(297.8, 97.9, 297.7, 102.4, 294.2, 109.6);
        vaulter.bezierCurveTo(294.2, 109.6, 293.9, 110.5, 292.5, 110.8);
        vaulter.bezierCurveTo(291.1, 111.1, 287.1, 115.5, 287.1, 115.5);
        vaulter.bezierCurveTo(287.1, 115.5, 286.2, 116.8, 286.4, 117.3);
        vaulter.bezierCurveTo(286.5, 117.9, 287.8, 117.3, 288.0, 117.8);
        vaulter.bezierCurveTo(288.3, 118.4, 289.0, 117.4, 289.4, 117.7);
        vaulter.bezierCurveTo(289.9, 118.0, 290.4, 117.5, 290.7, 116.9);
        vaulter.bezierCurveTo(291.0, 116.4, 292.8, 114.2, 292.8, 114.2);
        vaulter.bezierCurveTo(292.8, 114.2, 294.0, 113.7, 294.8, 113.1);
        vaulter.bezierCurveTo(295.6, 112.6, 295.9, 111.4, 296.5, 110.6);
        vaulter.bezierCurveTo(300.2, 105.7, 304.6, 99.8, 306.2, 95.1);
        vaulter.bezierCurveTo(307.2, 92.1, 308.2, 85.0, 308.2, 85.0);
        vaulter.bezierCurveTo(308.2, 85.0, 310.1, 80.7, 310.7, 78.7);
        vaulter.bezierCurveTo(310.8, 78.4, 310.8, 78.2, 310.8, 78.0);
        vaulter.bezierCurveTo(311.0, 77.1, 310.9, 76.1, 310.8, 75.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(326.8, 49.5);
        vaulter.bezierCurveTo(342.7, 44.7, 346.9, 36.4, 348.3, 35.7);
        vaulter.bezierCurveTo(349.7, 35.0, 354.2, 31.2, 354.2, 31.2);
        vaulter.bezierCurveTo(354.2, 31.2, 362.1, 26.2, 370.2, 23.0);
        vaulter.bezierCurveTo(370.6, 22.9, 371.0, 22.8, 371.4, 22.6);
        vaulter.bezierCurveTo(371.4, 22.6, 371.7, 24.3, 372.0, 25.3);
        vaulter.bezierCurveTo(372.3, 26.3, 373.4, 27.1, 373.4, 27.1);
        vaulter.bezierCurveTo(373.4, 27.1, 373.9, 27.9, 374.5, 28.7);
        vaulter.bezierCurveTo(375.1, 29.4, 375.6, 30.2, 375.9, 30.6);
        vaulter.bezierCurveTo(376.5, 31.3, 377.2, 32.3, 378.0, 31.2);
        vaulter.bezierCurveTo(378.9, 30.2, 377.5, 25.3, 377.1, 24.9);
        vaulter.bezierCurveTo(376.7, 24.5, 376.2, 20.6, 375.9, 18.9);
        vaulter.bezierCurveTo(375.7, 17.5, 374.2, 16.0, 372.9, 15.6);
        vaulter.bezierCurveTo(372.6, 15.5, 372.3, 15.5, 372.1, 15.5);
        vaulter.bezierCurveTo(370.8, 15.8, 369.7, 18.4, 369.7, 18.4);
        vaulter.bezierCurveTo(363.2, 21.5, 352.7, 24.3, 348.8, 27.5);
        vaulter.bezierCurveTo(346.7, 27.8, 344.6, 28.5, 342.6, 29.2);
        vaulter.bezierCurveTo(342.5, 29.3, 342.5, 29.3, 342.5, 29.3);
        vaulter.bezierCurveTo(342.4, 29.3, 342.3, 29.3, 342.2, 29.3);
        vaulter.bezierCurveTo(336.5, 31.4, 331.6, 34.4, 331.6, 34.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(326.8, 49.5);
        vaulter.bezierCurveTo(342.7, 44.7, 346.9, 36.4, 348.3, 35.7);
        vaulter.bezierCurveTo(349.7, 35.0, 354.2, 31.2, 354.2, 31.2);
        vaulter.bezierCurveTo(354.2, 31.2, 362.1, 26.2, 370.2, 23.0);
        vaulter.bezierCurveTo(370.6, 24.0, 371.1, 25.2, 371.5, 26.1);
        vaulter.bezierCurveTo(372.2, 27.9, 373.6, 29.2, 374.5, 28.7);
        vaulter.bezierCurveTo(374.7, 28.6, 374.8, 28.5, 374.9, 28.3);
        vaulter.bezierCurveTo(375.9, 27.0, 374.2, 25.1, 374.2, 23.7);
        vaulter.bezierCurveTo(374.2, 22.2, 374.2, 19.4, 373.8, 17.2);
        vaulter.bezierCurveTo(373.7, 16.5, 373.3, 16.0, 372.9, 15.6);
        vaulter.bezierCurveTo(372.6, 15.5, 372.3, 15.5, 372.1, 15.5);
        vaulter.bezierCurveTo(370.8, 15.8, 369.7, 18.4, 369.7, 18.4);
        vaulter.bezierCurveTo(363.2, 21.5, 352.7, 24.3, 348.8, 27.5);
        vaulter.bezierCurveTo(346.7, 27.8, 344.6, 28.5, 342.6, 29.2);
        vaulter.lineTo(342.2, 29.3);
        vaulter.bezierCurveTo(339.3, 28.8, 331.7, 31.8, 326.2, 34.5);
        vaulter.bezierCurveTo(320.6, 37.2, 316.1, 45.1, 316.1, 45.1);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(287.1, 77.0);
        vaulter.bezierCurveTo(287.1, 77.0, 287.1, 76.1, 286.1, 76.1);
        vaulter.bezierCurveTo(285.1, 76.2, 285.1, 77.1, 285.1, 77.1);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(287.1, 77.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(297.0, 68.3);
        vaulter.bezierCurveTo(297.0, 68.3, 298.4, 68.9, 300.8, 67.4);
        vaulter.bezierCurveTo(303.2, 66.0, 303.5, 65.1, 303.5, 65.1);
        vaulter.bezierCurveTo(303.5, 65.1, 305.3, 66.8, 310.5, 64.5);
        vaulter.bezierCurveTo(313.6, 63.2, 313.1, 59.8, 312.6, 58.6);
        vaulter.bezierCurveTo(311.6, 56.1, 309.0, 55.7, 309.0, 55.7);
        vaulter.lineTo(302.4, 59.5);
        vaulter.bezierCurveTo(302.4, 59.5, 299.1, 60.6, 295.7, 64.1);
        vaulter.bezierCurveTo(295.4, 64.4, 293.7, 65.9, 293.5, 66.2);
        vaulter.bezierCurveTo(293.3, 66.6, 288.8, 77.1, 288.8, 77.1);
        vaulter.bezierCurveTo(288.8, 77.1, 287.9, 76.9, 286.9, 76.6);
        vaulter.bezierCurveTo(286.5, 76.5, 286.1, 76.7, 285.6, 77.1);
        vaulter.bezierCurveTo(285.1, 77.5, 284.6, 78.1, 284.2, 78.6);
        vaulter.bezierCurveTo(283.9, 79.1, 283.6, 79.5, 283.6, 79.7);
        vaulter.bezierCurveTo(283.7, 80.2, 283.7, 81.7, 283.9, 82.4);
        vaulter.bezierCurveTo(284.2, 83.2, 286.1, 84.4, 286.1, 84.4);
        vaulter.bezierCurveTo(286.4, 84.4, 287.0, 84.4, 287.5, 84.3);
        vaulter.bezierCurveTo(288.2, 84.2, 288.8, 83.9, 289.4, 83.6);
        vaulter.bezierCurveTo(289.7, 83.4, 290.0, 83.2, 290.2, 83.0);
        vaulter.bezierCurveTo(290.8, 82.1, 290.7, 80.7, 290.7, 80.7);
        vaulter.lineTo(292.2, 79.4);
        vaulter.lineTo(297.0, 68.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(318.2, 64.5);
        vaulter.bezierCurveTo(318.2, 64.5, 327.5, 52.8, 328.8, 50.4);
        vaulter.bezierCurveTo(330.3, 47.8, 334.6, 43.8, 333.8, 42.2);
        vaulter.bezierCurveTo(331.9, 38.7, 324.4, 35.9, 322.8, 37.6);
        vaulter.bezierCurveTo(322.3, 38.0, 316.5, 44.3, 313.8, 47.8);
        vaulter.bezierCurveTo(312.0, 50.0, 308.4, 54.9, 307.8, 55.5);
        vaulter.bezierCurveTo(307.3, 56.1, 305.8, 57.7, 305.6, 59.5);
        vaulter.bezierCurveTo(305.4, 61.6, 305.6, 68.1, 309.6, 68.7);
        vaulter.bezierCurveTo(312.3, 69.1, 315.1, 67.7, 318.2, 64.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(329.1, 31.6);
        vaulter.bezierCurveTo(334.3, 29.5, 344.7, 28.5, 358.0, 28.8);
        vaulter.bezierCurveTo(364.8, 25.1, 378.0, 23.1, 381.9, 21.2);
        vaulter.bezierCurveTo(381.9, 21.2, 383.6, 18.9, 384.9, 19.0);
        vaulter.bezierCurveTo(386.2, 19.0, 388.0, 21.3, 387.9, 23.1);
        vaulter.bezierCurveTo(387.7, 24.9, 387.3, 28.8, 387.6, 29.3);
        vaulter.bezierCurveTo(387.9, 29.8, 388.1, 36.6, 387.1, 37.4);
        vaulter.bezierCurveTo(386.0, 38.2, 384.7, 36.8, 384.3, 35.9);
        vaulter.bezierCurveTo(384.0, 35.1, 383.5, 30.6, 383.5, 30.6);
        vaulter.bezierCurveTo(383.5, 30.6, 382.6, 29.5, 382.5, 28.4);
        vaulter.bezierCurveTo(382.4, 27.4, 382.4, 26.8, 382.4, 26.8);
        vaulter.bezierCurveTo(373.4, 27.8, 362.3, 33.8, 362.3, 33.8);
        vaulter.bezierCurveTo(362.3, 33.8, 360.2, 35.4, 358.7, 35.8);
        vaulter.bezierCurveTo(357.2, 36.2, 349.2, 40.9, 333.9, 44.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(322.8, 38.5);
        vaulter.bezierCurveTo(322.8, 38.5, 323.1, 33.5, 326.9, 31.1);
        vaulter.bezierCurveTo(330.7, 28.8, 335.7, 28.9, 335.7, 28.9);
        vaulter.bezierCurveTo(336.1, 28.7, 336.6, 28.6, 337.0, 28.5);
        vaulter.bezierCurveTo(343.1, 27.2, 351.5, 26.0, 354.0, 27.3);
        vaulter.bezierCurveTo(354.0, 27.3, 362.0, 20.9, 381.8, 20.9);
        vaulter.bezierCurveTo(381.8, 20.9, 383.4, 19.5, 384.3, 19.6);
        vaulter.bezierCurveTo(385.3, 19.8, 387.5, 20.7, 387.3, 22.9);
        vaulter.bezierCurveTo(387.2, 25.1, 386.5, 27.9, 386.2, 29.3);
        vaulter.bezierCurveTo(385.9, 30.7, 387.0, 32.9, 385.8, 34.0);
        vaulter.bezierCurveTo(384.6, 35.0, 383.4, 33.2, 383.0, 31.0);
        vaulter.bezierCurveTo(382.6, 28.8, 382.2, 25.4, 382.2, 25.4);
        vaulter.bezierCurveTo(371.5, 25.6, 366.4, 31.8, 357.9, 34.0);
        vaulter.lineTo(353.4, 34.9);
        vaulter.bezierCurveTo(353.4, 34.9, 341.9, 40.9, 333.5, 41.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(312.3, 66.7);
        vaulter.bezierCurveTo(312.3, 66.7, 311.0, 69.2, 308.4, 72.5);
        vaulter.bezierCurveTo(305.8, 75.8, 300.3, 76.6, 297.2, 73.4);
        vaulter.bezierCurveTo(293.9, 70.0, 295.7, 65.1, 298.7, 62.9);
        vaulter.bezierCurveTo(301.8, 60.6, 308.9, 58.9, 308.9, 58.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(309.6, 59.3);
        vaulter.bezierCurveTo(309.6, 59.3, 310.6, 54.9, 316.9, 53.5);
        vaulter.bezierCurveTo(323.1, 52.2, 321.6, 60.2, 320.4, 61.7);
        vaulter.bezierCurveTo(319.3, 63.3, 317.6, 65.3, 315.0, 66.2);
        vaulter.bezierCurveTo(312.3, 67.0, 308.0, 65.8, 309.6, 59.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(315.5, 65.5);
        vaulter.bezierCurveTo(315.3, 66.9, 311.9, 73.3, 311.9, 73.3);
        vaulter.bezierCurveTo(311.9, 73.3, 311.0, 80.5, 310.0, 83.4);
        vaulter.bezierCurveTo(308.5, 88.1, 304.1, 94.1, 300.4, 99.0);
        vaulter.bezierCurveTo(299.8, 99.8, 299.6, 101.1, 298.8, 101.6);
        vaulter.bezierCurveTo(297.9, 102.1, 296.8, 102.7, 296.8, 102.7);
        vaulter.bezierCurveTo(296.8, 102.7, 295.0, 104.9, 294.7, 105.4);
        vaulter.bezierCurveTo(294.4, 106.0, 293.9, 106.5, 293.4, 106.2);
        vaulter.bezierCurveTo(293.0, 105.9, 292.3, 106.9, 292.0, 106.3);
        vaulter.bezierCurveTo(291.8, 105.8, 290.5, 106.4, 290.4, 105.9);
        vaulter.bezierCurveTo(290.2, 105.3, 291.1, 104.1, 291.1, 104.1);
        vaulter.bezierCurveTo(291.1, 104.1, 295.0, 99.6, 296.4, 99.3);
        vaulter.bezierCurveTo(297.8, 99.0, 298.1, 98.0, 298.1, 98.0);
        vaulter.bezierCurveTo(301.6, 90.9, 301.6, 86.3, 303.6, 81.8);
        vaulter.bezierCurveTo(303.5, 80.1, 304.6, 76.8, 304.9, 75.5);
        vaulter.bezierCurveTo(305.2, 74.1, 305.6, 72.2, 305.6, 72.2);
        vaulter.bezierCurveTo(305.6, 72.2, 304.5, 71.4, 305.3, 65.6);
        vaulter.bezierCurveTo(305.9, 61.5, 308.0, 60.3, 309.9, 59.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(288.2, 81.4);
        vaulter.bezierCurveTo(288.1, 81.7, 288.7, 78.8, 288.2, 77.3);
        vaulter.bezierCurveTo(288.2, 77.3, 296.0, 72.1, 299.4, 67.8);
        vaulter.bezierCurveTo(299.4, 67.8, 301.6, 66.7, 303.2, 64.5);
        vaulter.bezierCurveTo(304.9, 62.2, 305.9, 60.6, 305.9, 60.6);
        vaulter.bezierCurveTo(305.9, 60.6, 308.9, 60.1, 313.3, 56.4);
        vaulter.bezierCurveTo(315.8, 54.3, 314.4, 51.1, 313.6, 50.2);
        vaulter.bezierCurveTo(311.9, 48.0, 309.3, 48.4, 309.3, 48.4);
        vaulter.lineTo(303.2, 55.5);
        vaulter.bezierCurveTo(303.2, 55.5, 298.5, 60.1, 295.9, 63.5);
        vaulter.bezierCurveTo(295.9, 63.5, 289.6, 70.0, 286.6, 75.6);
        vaulter.bezierCurveTo(286.6, 75.6, 286.0, 76.3, 285.2, 78.0);
        vaulter.bezierCurveTo(284.9, 78.5, 284.2, 79.1, 284.0, 79.6);
        vaulter.bezierCurveTo(283.3, 80.8, 282.6, 81.6, 282.7, 83.8);
        vaulter.bezierCurveTo(282.7, 83.8, 283.5, 84.4, 284.0, 84.5);
        vaulter.bezierCurveTo(284.1, 84.6, 285.0, 85.0, 285.2, 85.0);
        vaulter.bezierCurveTo(285.7, 85.0, 285.8, 84.9, 286.2, 84.9);
        vaulter.bezierCurveTo(286.6, 84.9, 286.5, 84.9, 287.0, 84.5);
        vaulter.bezierCurveTo(287.3, 84.3, 287.4, 84.4, 287.7, 84.3);
        vaulter.bezierCurveTo(288.2, 84.0, 288.0, 83.4, 288.0, 83.4);
        vaulter.bezierCurveTo(288.0, 83.4, 288.3, 82.4, 288.2, 81.4);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(310.2, 61.2);
        vaulter.bezierCurveTo(310.2, 61.2, 309.5, 63.6, 307.6, 66.9);
        vaulter.bezierCurveTo(305.8, 70.2, 301.0, 71.8, 297.8, 69.4);
        vaulter.bezierCurveTo(294.4, 66.8, 295.3, 62.2, 297.6, 59.8);
        vaulter.bezierCurveTo(300.0, 57.3, 306.1, 54.7, 306.1, 54.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(319.3, 55.7);
        vaulter.bezierCurveTo(319.3, 55.7, 325.6, 49.1, 328.5, 43.3);
        vaulter.bezierCurveTo(329.6, 41.2, 330.4, 38.5, 330.7, 37.1);
        vaulter.bezierCurveTo(331.3, 35.0, 330.5, 33.4, 329.4, 32.7);
        vaulter.bezierCurveTo(327.8, 31.6, 325.6, 30.8, 323.9, 30.8);
        vaulter.bezierCurveTo(323.1, 30.7, 319.9, 34.0, 317.6, 37.4);
        vaulter.bezierCurveTo(316.1, 39.8, 314.8, 42.0, 313.3, 43.7);
        vaulter.bezierCurveTo(312.1, 45.2, 310.3, 46.8, 308.7, 48.1);
        vaulter.bezierCurveTo(307.2, 49.5, 306.5, 51.5, 306.3, 52.3);
        vaulter.bezierCurveTo(305.9, 54.4, 307.1, 59.1, 311.2, 59.2);
        vaulter.bezierCurveTo(315.8, 59.4, 316.9, 59.4, 319.3, 55.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(284.8, 77.1);
        vaulter.bezierCurveTo(284.8, 77.1, 284.9, 76.2, 283.8, 76.2);
        vaulter.bezierCurveTo(282.8, 76.3, 282.8, 77.2, 282.8, 77.2);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(284.8, 77.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(322.6, 31.7);
        vaulter.bezierCurveTo(322.6, 31.7, 324.8, 24.5, 330.1, 23.2);
        vaulter.bezierCurveTo(335.5, 21.9, 341.4, 23.2, 341.4, 23.2);
        vaulter.lineTo(347.4, 25.1);
        vaulter.bezierCurveTo(347.4, 25.1, 350.8, 26.6, 353.3, 25.7);
        vaulter.bezierCurveTo(355.8, 24.8, 362.7, 22.6, 375.3, 27.2);
        vaulter.bezierCurveTo(375.3, 27.2, 376.3, 25.1, 377.5, 25.2);
        vaulter.bezierCurveTo(378.8, 25.4, 381.4, 26.6, 381.0, 29.2);
        vaulter.bezierCurveTo(380.5, 31.8, 380.6, 37.5, 381.0, 38.6);
        vaulter.bezierCurveTo(381.4, 39.8, 381.8, 42.6, 381.0, 43.1);
        vaulter.bezierCurveTo(380.2, 43.6, 378.7, 41.8, 379.1, 40.4);
        vaulter.bezierCurveTo(379.1, 40.4, 375.5, 35.1, 375.2, 31.1);
        vaulter.bezierCurveTo(375.2, 31.1, 368.3, 31.0, 365.7, 31.2);
        vaulter.bezierCurveTo(363.1, 31.5, 355.3, 32.9, 353.7, 32.9);
        vaulter.bezierCurveTo(352.0, 32.9, 344.6, 35.3, 334.6, 33.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(328.4, 33.9);
        vaulter.bezierCurveTo(328.2, 32.7, 329.9, 31.7, 330.8, 32.0);
        vaulter.bezierCurveTo(331.8, 32.2, 333.4, 32.6, 333.4, 33.9);
        vaulter.bezierCurveTo(333.4, 35.3, 332.1, 36.0, 330.6, 36.0);
        vaulter.bezierCurveTo(329.0, 36.0, 328.4, 33.9, 328.4, 33.9);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(330.0, 35.8);
        vaulter.bezierCurveTo(330.0, 35.8, 340.7, 38.5, 343.8, 38.8);
        vaulter.bezierCurveTo(346.9, 39.0, 349.9, 40.2, 353.3, 39.3);
        vaulter.bezierCurveTo(353.3, 39.3, 366.5, 38.6, 372.1, 38.7);
        vaulter.bezierCurveTo(373.2, 42.8, 373.8, 45.3, 375.2, 48.0);
        vaulter.bezierCurveTo(375.2, 48.0, 375.6, 50.2, 376.7, 50.2);
        vaulter.bezierCurveTo(377.8, 50.2, 378.6, 45.5, 377.8, 42.1);
        vaulter.bezierCurveTo(376.9, 38.7, 377.5, 36.1, 377.6, 35.3);
        vaulter.bezierCurveTo(377.6, 34.4, 376.4, 32.2, 375.4, 32.4);
        vaulter.bezierCurveTo(374.3, 32.6, 372.6, 33.3, 372.3, 34.9);
        vaulter.bezierCurveTo(367.0, 35.2, 358.6, 31.8, 353.8, 32.1);
        vaulter.bezierCurveTo(350.7, 29.7, 346.9, 27.4, 336.9, 25.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(307.2, 53.4);
        vaulter.bezierCurveTo(307.2, 53.4, 308.2, 49.0, 314.5, 47.6);
        vaulter.bezierCurveTo(320.7, 46.2, 319.2, 54.2, 318.0, 55.8);
        vaulter.bezierCurveTo(316.9, 57.4, 315.2, 59.4, 312.6, 60.2);
        vaulter.bezierCurveTo(309.9, 61.1, 305.6, 59.9, 307.2, 53.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(316.9, 55.3);
        vaulter.bezierCurveTo(316.9, 56.8, 314.3, 63.5, 314.3, 63.5);
        vaulter.bezierCurveTo(314.3, 63.5, 314.2, 70.8, 313.6, 73.8);
        vaulter.bezierCurveTo(312.7, 78.7, 309.1, 85.2, 306.0, 90.5);
        vaulter.bezierCurveTo(305.5, 91.4, 305.5, 92.6, 304.7, 93.2);
        vaulter.bezierCurveTo(303.9, 93.9, 302.9, 94.6, 302.9, 94.6);
        vaulter.bezierCurveTo(302.9, 94.6, 301.4, 97.0, 301.1, 97.6);
        vaulter.bezierCurveTo(300.9, 98.1, 300.5, 98.7, 300.0, 98.5);
        vaulter.bezierCurveTo(299.5, 98.2, 298.9, 99.3, 298.6, 98.8);
        vaulter.bezierCurveTo(298.3, 98.2, 297.1, 99.0, 296.9, 98.5);
        vaulter.bezierCurveTo(296.7, 98.0, 297.4, 96.6, 297.4, 96.6);
        vaulter.bezierCurveTo(297.4, 96.6, 300.7, 91.8, 302.1, 91.3);
        vaulter.bezierCurveTo(303.5, 90.8, 303.6, 89.8, 303.6, 89.8);
        vaulter.bezierCurveTo(306.2, 82.3, 305.7, 77.7, 307.1, 73.0);
        vaulter.bezierCurveTo(306.8, 71.3, 307.4, 67.9, 307.6, 66.6);
        vaulter.bezierCurveTo(307.7, 65.2, 307.9, 63.2, 307.9, 63.2);
        vaulter.bezierCurveTo(307.9, 63.2, 306.7, 62.5, 306.8, 56.7);
        vaulter.bezierCurveTo(306.8, 54.8, 307.2, 53.5, 307.9, 52.5);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(282.4, 77.2);
        vaulter.bezierCurveTo(282.4, 77.2, 282.4, 76.3, 281.4, 76.3);
        vaulter.bezierCurveTo(280.4, 76.4, 280.4, 77.3, 280.4, 77.3);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(282.4, 77.2);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(305.3, 46.7);
        vaulter.lineTo(301.0, 54.9);
        vaulter.bezierCurveTo(301.0, 54.9, 297.4, 60.5, 295.6, 64.4);
        vaulter.bezierCurveTo(295.6, 64.4, 291.2, 72.2, 289.4, 78.3);
        vaulter.bezierCurveTo(289.4, 78.3, 284.1, 83.8, 285.6, 85.8);
        vaulter.bezierCurveTo(285.6, 85.8, 285.7, 87.1, 286.1, 86.9);
        vaulter.bezierCurveTo(286.5, 86.7, 287.4, 86.6, 287.4, 86.6);
        vaulter.bezierCurveTo(287.4, 86.6, 287.6, 86.6, 288.0, 87.0);
        vaulter.bezierCurveTo(288.5, 87.4, 288.6, 86.1, 288.6, 86.1);
        vaulter.bezierCurveTo(288.6, 86.1, 289.7, 82.1, 290.0, 81.7);
        vaulter.bezierCurveTo(290.2, 81.3, 290.5, 83.2, 290.4, 83.5);
        vaulter.bezierCurveTo(290.3, 83.7, 290.1, 84.5, 290.5, 84.6);
        vaulter.bezierCurveTo(290.9, 84.6, 291.4, 83.8, 291.5, 82.8);
        vaulter.bezierCurveTo(291.7, 81.9, 292.0, 81.0, 291.3, 79.6);
        vaulter.bezierCurveTo(291.3, 79.6, 297.7, 72.8, 300.0, 67.8);
        vaulter.bezierCurveTo(300.0, 67.8, 302.0, 66.3, 303.1, 63.7);
        vaulter.bezierCurveTo(304.2, 61.1, 304.7, 59.3, 304.7, 59.3);
        vaulter.bezierCurveTo(304.7, 59.3, 307.6, 58.1, 311.0, 53.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(308.9, 56.2);
        vaulter.bezierCurveTo(308.9, 56.2, 307.8, 58.5, 305.6, 61.5);
        vaulter.bezierCurveTo(303.3, 64.5, 298.4, 65.5, 295.5, 62.7);
        vaulter.bezierCurveTo(292.5, 59.7, 294.0, 55.3, 296.6, 53.2);
        vaulter.bezierCurveTo(299.2, 51.0, 305.6, 49.3, 305.6, 49.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(316.6, 52.7);
        vaulter.bezierCurveTo(316.6, 52.7, 323.7, 47.0, 327.4, 41.6);
        vaulter.bezierCurveTo(328.7, 39.7, 329.8, 37.1, 330.4, 35.8);
        vaulter.bezierCurveTo(331.2, 33.8, 330.6, 32.1, 329.7, 31.2);
        vaulter.bezierCurveTo(328.2, 29.9, 326.1, 28.8, 324.4, 28.6);
        vaulter.bezierCurveTo(323.6, 28.5, 320.0, 31.3, 317.4, 34.3);
        vaulter.bezierCurveTo(315.5, 36.5, 313.9, 38.5, 312.2, 40.0);
        vaulter.bezierCurveTo(310.8, 41.3, 308.8, 42.7, 307.1, 43.8);
        vaulter.bezierCurveTo(305.4, 44.9, 304.5, 46.8, 304.2, 47.6);
        vaulter.bezierCurveTo(303.5, 49.7, 304.4, 53.4, 308.1, 55.1);
        vaulter.bezierCurveTo(311.9, 56.9, 313.7, 56.1, 316.6, 52.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(321.3, 31.1);
        vaulter.bezierCurveTo(321.3, 31.1, 324.6, 24.3, 330.1, 23.9);
        vaulter.bezierCurveTo(335.5, 23.5, 341.2, 25.6, 341.2, 25.6);
        vaulter.lineTo(346.8, 28.4);
        vaulter.bezierCurveTo(346.8, 28.4, 350.0, 30.5, 352.6, 30.0);
        vaulter.bezierCurveTo(355.2, 29.4, 362.4, 28.4, 374.1, 34.8);
        vaulter.bezierCurveTo(374.1, 34.8, 375.4, 32.9, 376.6, 33.2);
        vaulter.bezierCurveTo(377.9, 33.5, 380.2, 35.2, 379.4, 37.7);
        vaulter.bezierCurveTo(378.5, 40.2, 377.8, 45.8, 378.0, 47.0);
        vaulter.bezierCurveTo(378.2, 48.2, 378.1, 51.0, 377.3, 51.4);
        vaulter.bezierCurveTo(376.5, 51.7, 375.2, 49.8, 375.8, 48.4);
        vaulter.bezierCurveTo(375.8, 48.4, 373.1, 42.6, 373.3, 38.6);
        vaulter.bezierCurveTo(373.3, 38.6, 366.6, 37.5, 364.0, 37.3);
        vaulter.bezierCurveTo(361.4, 37.1, 353.5, 37.4, 351.9, 37.1);
        vaulter.bezierCurveTo(350.2, 36.8, 342.5, 38.1, 332.9, 35.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(329.3, 37.0);
        vaulter.bezierCurveTo(326.9, 35.6, 324.2, 32.4, 327.2, 29.1);
        vaulter.bezierCurveTo(330.3, 25.9, 333.8, 29.1, 335.3, 30.5);
        vaulter.bezierCurveTo(336.8, 31.8, 339.2, 34.9, 337.1, 37.4);
        vaulter.bezierCurveTo(335.1, 39.8, 331.9, 38.6, 329.3, 37.0);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(329.3, 37.3);
        vaulter.bezierCurveTo(329.3, 37.3, 335.6, 42.1, 338.4, 43.5);
        vaulter.bezierCurveTo(341.2, 44.8, 343.6, 47.0, 347.1, 47.4);
        vaulter.bezierCurveTo(347.1, 47.4, 359.7, 51.3, 364.9, 53.4);
        vaulter.bezierCurveTo(364.4, 57.6, 364.2, 60.3, 364.5, 63.2);
        vaulter.bezierCurveTo(364.5, 63.2, 364.1, 65.4, 365.1, 65.8);
        vaulter.bezierCurveTo(366.1, 66.2, 368.6, 62.1, 369.0, 58.7);
        vaulter.bezierCurveTo(369.4, 55.2, 370.9, 53.0, 371.2, 52.2);
        vaulter.bezierCurveTo(371.6, 51.4, 371.2, 48.9, 370.2, 48.7);
        vaulter.bezierCurveTo(369.1, 48.5, 367.3, 48.6, 366.4, 50.0);
        vaulter.bezierCurveTo(361.4, 48.4, 354.7, 42.2, 350.1, 40.7);
        vaulter.bezierCurveTo(348.1, 37.5, 345.3, 33.9, 336.6, 28.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(306.4, 47.9);
        vaulter.bezierCurveTo(306.4, 47.9, 307.4, 43.5, 313.7, 42.1);
        vaulter.bezierCurveTo(319.9, 40.7, 318.4, 48.7, 317.2, 50.3);
        vaulter.bezierCurveTo(316.1, 51.9, 314.4, 53.9, 311.8, 54.7);
        vaulter.bezierCurveTo(309.1, 55.6, 304.8, 54.4, 306.4, 47.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(305.4, 51.6);
        vaulter.bezierCurveTo(304.1, 45.9, 308.0, 44.5, 309.5, 43.9);
        vaulter.bezierCurveTo(311.1, 43.4, 314.3, 45.2, 314.9, 48.1);
        vaulter.bezierCurveTo(315.2, 49.5, 314.2, 56.7, 314.2, 56.7);
        vaulter.bezierCurveTo(314.2, 56.7, 315.7, 63.8, 315.7, 66.8);
        vaulter.bezierCurveTo(315.9, 71.8, 313.7, 78.9, 311.9, 84.8);
        vaulter.bezierCurveTo(311.6, 85.7, 311.8, 87.0, 311.2, 87.7);
        vaulter.bezierCurveTo(310.6, 88.5, 309.7, 89.4, 309.7, 89.4);
        vaulter.bezierCurveTo(309.7, 89.4, 308.8, 92.1, 308.7, 92.7);
        vaulter.bezierCurveTo(308.6, 93.3, 308.3, 94.0, 307.8, 93.9);
        vaulter.bezierCurveTo(307.2, 93.7, 306.9, 94.9, 306.5, 94.5);
        vaulter.bezierCurveTo(306.0, 94.0, 305.1, 95.0, 304.7, 94.6);
        vaulter.bezierCurveTo(304.4, 94.1, 304.8, 92.6, 304.8, 92.6);
        vaulter.bezierCurveTo(304.8, 92.6, 307.0, 87.1, 308.3, 86.4);
        vaulter.bezierCurveTo(309.5, 85.6, 309.4, 84.6, 309.4, 84.6);
        vaulter.bezierCurveTo(310.3, 76.7, 308.8, 72.4, 309.2, 67.5);
        vaulter.bezierCurveTo(308.5, 65.9, 308.4, 62.4, 308.3, 61.1);
        vaulter.bezierCurveTo(308.1, 59.7, 307.8, 57.8, 307.8, 57.8);
        vaulter.bezierCurveTo(307.8, 57.8, 306.6, 57.3, 305.4, 51.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(309.4, 50.8);
        vaulter.bezierCurveTo(309.4, 50.8, 308.0, 53.3, 305.2, 56.4);
        vaulter.bezierCurveTo(302.4, 59.5, 296.9, 60.1, 294.0, 56.7);
        vaulter.bezierCurveTo(290.9, 53.1, 292.9, 48.4, 296.0, 46.3);
        vaulter.bezierCurveTo(299.2, 44.2, 306.4, 42.8, 306.4, 42.8);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(306.5, 47.0);
        vaulter.bezierCurveTo(304.7, 41.5, 308.3, 39.7, 309.8, 39.0);
        vaulter.bezierCurveTo(311.3, 38.3, 314.7, 39.8, 315.6, 42.6);
        vaulter.bezierCurveTo(316.1, 43.9, 315.8, 51.2, 315.8, 51.2);
        vaulter.bezierCurveTo(315.8, 51.2, 318.0, 58.1, 318.3, 61.2);
        vaulter.bezierCurveTo(319.0, 66.1, 317.6, 73.4, 316.4, 79.4);
        vaulter.bezierCurveTo(316.2, 80.3, 316.5, 81.6, 316.0, 82.4);
        vaulter.bezierCurveTo(315.5, 83.2, 314.7, 84.2, 314.7, 84.2);
        vaulter.bezierCurveTo(314.7, 84.2, 314.0, 87.0, 314.0, 87.6);
        vaulter.bezierCurveTo(313.9, 88.2, 313.7, 88.9, 313.2, 88.9);
        vaulter.bezierCurveTo(312.6, 88.8, 312.4, 90.0, 311.9, 89.6);
        vaulter.bezierCurveTo(311.5, 89.2, 310.6, 90.3, 310.2, 89.9);
        vaulter.bezierCurveTo(309.9, 89.4, 310.1, 87.9, 310.1, 87.9);
        vaulter.bezierCurveTo(310.1, 87.9, 311.8, 82.2, 312.9, 81.3);
        vaulter.bezierCurveTo(314.0, 80.4, 313.9, 79.4, 313.9, 79.4);
        vaulter.bezierCurveTo(314.0, 71.5, 312.0, 67.4, 311.9, 62.5);
        vaulter.bezierCurveTo(311.1, 60.9, 310.6, 57.5, 310.3, 56.2);
        vaulter.bezierCurveTo(310.0, 54.8, 309.6, 52.9, 309.6, 52.9);
        vaulter.bezierCurveTo(309.6, 52.9, 308.2, 52.6, 306.5, 47.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(316.9, 49.6);
        vaulter.bezierCurveTo(316.9, 49.6, 325.2, 45.8, 330.1, 41.4);
        vaulter.bezierCurveTo(331.8, 39.9, 333.5, 37.7, 334.4, 36.6);
        vaulter.bezierCurveTo(335.7, 34.8, 335.6, 33.0, 334.8, 32.0);
        vaulter.bezierCurveTo(333.7, 30.3, 331.9, 28.8, 330.4, 28.1);
        vaulter.bezierCurveTo(329.6, 27.8, 325.5, 29.6, 322.1, 32.0);
        vaulter.bezierCurveTo(319.8, 33.6, 317.8, 35.2, 315.7, 36.3);
        vaulter.bezierCurveTo(314.1, 37.2, 311.8, 38.0, 309.9, 38.7);
        vaulter.bezierCurveTo(308.0, 39.3, 306.6, 40.9, 306.1, 41.7);
        vaulter.bezierCurveTo(304.9, 43.5, 304.9, 47.3, 308.1, 49.9);
        vaulter.bezierCurveTo(311.3, 52.6, 313.3, 52.2, 316.9, 49.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(327.9, 30.1);
        vaulter.bezierCurveTo(327.9, 30.1, 331.7, 23.6, 337.2, 23.6);
        vaulter.bezierCurveTo(342.7, 23.7, 348.2, 26.3, 348.2, 26.3);
        vaulter.lineTo(353.5, 29.6);
        vaulter.bezierCurveTo(353.5, 29.6, 356.2, 32.0, 358.8, 31.4);
        vaulter.bezierCurveTo(361.4, 30.9, 368.6, 29.7, 380.4, 36.0);
        vaulter.bezierCurveTo(380.4, 36.0, 381.6, 34.1, 382.9, 34.4);
        vaulter.bezierCurveTo(384.1, 34.7, 386.5, 36.3, 385.7, 38.8);
        vaulter.bezierCurveTo(384.9, 41.3, 384.2, 46.9, 384.4, 48.1);
        vaulter.bezierCurveTo(384.7, 49.4, 384.6, 52.2, 383.8, 52.6);
        vaulter.bezierCurveTo(383.0, 52.9, 381.7, 50.9, 382.3, 49.6);
        vaulter.bezierCurveTo(382.3, 49.6, 379.5, 43.9, 379.7, 39.9);
        vaulter.bezierCurveTo(379.7, 39.9, 372.9, 38.8, 370.3, 38.6);
        vaulter.bezierCurveTo(367.7, 38.5, 359.8, 38.9, 358.2, 38.6);
        vaulter.bezierCurveTo(356.5, 38.4, 348.4, 38.9, 339.1, 34.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(334.4, 36.6);
        vaulter.bezierCurveTo(331.4, 34.3, 330.7, 31.2, 332.4, 29.3);
        vaulter.bezierCurveTo(334.1, 27.5, 337.4, 27.7, 340.4, 30.3);
        vaulter.bezierCurveTo(343.3, 32.8, 343.6, 35.1, 341.9, 37.2);
        vaulter.bezierCurveTo(340.2, 39.3, 338.3, 39.5, 334.4, 36.6);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(334.5, 36.8);
        vaulter.bezierCurveTo(334.5, 36.8, 339.6, 42.9, 342.0, 44.8);
        vaulter.bezierCurveTo(344.4, 46.7, 346.3, 49.4, 349.6, 50.5);
        vaulter.bezierCurveTo(349.6, 50.5, 361.0, 57.2, 365.6, 60.4);
        vaulter.bezierCurveTo(364.2, 64.4, 363.4, 66.9, 363.1, 69.9);
        vaulter.bezierCurveTo(363.1, 69.9, 362.2, 71.9, 363.1, 72.5);
        vaulter.bezierCurveTo(364.0, 73.1, 367.3, 69.7, 368.4, 66.4);
        vaulter.bezierCurveTo(369.6, 63.1, 371.5, 61.3, 372.1, 60.6);
        vaulter.bezierCurveTo(372.6, 59.9, 372.8, 57.4, 371.8, 56.9);
        vaulter.bezierCurveTo(370.8, 56.5, 369.0, 56.2, 367.9, 57.4);
        vaulter.bezierCurveTo(363.3, 54.7, 358.2, 47.2, 354.0, 44.8);
        vaulter.bezierCurveTo(352.7, 41.1, 350.8, 37.0, 343.5, 29.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(282.4, 77.2);
        vaulter.bezierCurveTo(282.4, 77.2, 282.4, 76.3, 281.4, 76.3);
        vaulter.bezierCurveTo(280.4, 76.4, 280.4, 77.3, 280.4, 77.3);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(282.4, 77.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(308.2, 39.8);
        vaulter.bezierCurveTo(308.2, 39.8, 311.1, 36.4, 317.3, 38.1);
        vaulter.bezierCurveTo(323.5, 39.7, 318.5, 46.1, 316.7, 47.0);
        vaulter.bezierCurveTo(315.0, 47.8, 312.6, 48.9, 309.8, 48.4);
        vaulter.bezierCurveTo(307.1, 47.9, 303.8, 44.9, 308.2, 39.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(307.2, 41.7);
        vaulter.lineTo(306.0, 51.0);
        vaulter.bezierCurveTo(306.0, 51.0, 304.6, 57.4, 304.3, 61.7);
        vaulter.bezierCurveTo(304.3, 61.7, 302.9, 70.6, 303.3, 76.9);
        vaulter.bezierCurveTo(303.3, 76.9, 300.3, 84.0, 302.4, 85.3);
        vaulter.bezierCurveTo(302.4, 85.3, 302.9, 86.5, 303.2, 86.1);
        vaulter.bezierCurveTo(303.5, 85.8, 304.3, 85.4, 304.3, 85.4);
        vaulter.bezierCurveTo(304.3, 85.4, 304.6, 85.4, 305.1, 85.6);
        vaulter.bezierCurveTo(305.7, 85.8, 305.3, 84.5, 305.3, 84.5);
        vaulter.bezierCurveTo(305.3, 84.5, 304.9, 80.4, 305.1, 79.9);
        vaulter.bezierCurveTo(305.2, 79.5, 306.1, 81.2, 306.1, 81.4);
        vaulter.bezierCurveTo(306.1, 81.7, 306.2, 82.5, 306.5, 82.4);
        vaulter.bezierCurveTo(306.9, 82.3, 307.1, 81.3, 306.9, 80.4);
        vaulter.bezierCurveTo(306.7, 79.5, 306.8, 78.5, 305.6, 77.5);
        vaulter.bezierCurveTo(305.6, 77.5, 309.2, 68.8, 309.7, 63.4);
        vaulter.bezierCurveTo(309.7, 63.4, 310.9, 61.3, 311.1, 58.5);
        vaulter.bezierCurveTo(311.2, 55.6, 311.1, 53.8, 311.1, 53.8);
        vaulter.bezierCurveTo(311.1, 53.8, 313.4, 51.7, 315.0, 46.2);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(309.9, 42.0);
        vaulter.lineTo(310.9, 51.3);
        vaulter.bezierCurveTo(310.9, 51.3, 311.0, 57.8, 311.7, 62.1);
        vaulter.bezierCurveTo(311.7, 62.1, 312.4, 71.0, 314.4, 77.1);
        vaulter.bezierCurveTo(314.4, 77.1, 313.1, 84.7, 315.4, 85.4);
        vaulter.bezierCurveTo(315.4, 85.4, 316.2, 86.4, 316.4, 86.0);
        vaulter.bezierCurveTo(316.6, 85.6, 317.3, 85.1, 317.3, 85.1);
        vaulter.bezierCurveTo(317.3, 85.1, 317.5, 85.0, 318.1, 85.1);
        vaulter.bezierCurveTo(318.7, 85.2, 318.1, 84.0, 318.1, 84.0);
        vaulter.bezierCurveTo(318.1, 84.0, 316.7, 80.1, 316.7, 79.6);
        vaulter.bezierCurveTo(316.7, 79.1, 318.0, 80.6, 318.1, 80.8);
        vaulter.bezierCurveTo(318.1, 81.1, 318.4, 81.9, 318.8, 81.7);
        vaulter.bezierCurveTo(319.1, 81.5, 319.1, 80.5, 318.7, 79.6);
        vaulter.bezierCurveTo(318.3, 78.8, 318.1, 77.8, 316.6, 77.1);
        vaulter.bezierCurveTo(316.6, 77.1, 318.2, 67.8, 317.3, 62.4);
        vaulter.bezierCurveTo(317.3, 62.4, 318.0, 60.1, 317.5, 57.3);
        vaulter.bezierCurveTo(317.0, 54.6, 316.4, 52.8, 316.4, 52.8);
        vaulter.bezierCurveTo(316.4, 52.8, 318.2, 50.2, 318.5, 44.5);
        vaulter.bezierCurveTo(318.6, 41.2, 315.3, 40.1, 314.1, 40.0);
        vaulter.bezierCurveTo(311.3, 39.8, 309.9, 42.0, 309.9, 42.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(321.4, 48.6);
        vaulter.bezierCurveTo(321.4, 48.6, 330.2, 46.0, 335.7, 42.5);
        vaulter.bezierCurveTo(337.7, 41.3, 339.7, 39.4, 340.7, 38.4);
        vaulter.bezierCurveTo(342.2, 36.8, 342.4, 35.1, 341.9, 33.9);
        vaulter.bezierCurveTo(341.0, 32.1, 339.5, 30.3, 338.1, 29.4);
        vaulter.bezierCurveTo(337.4, 29.0, 333.0, 30.1, 329.3, 31.9);
        vaulter.bezierCurveTo(326.7, 33.2, 324.5, 34.4, 322.3, 35.2);
        vaulter.bezierCurveTo(320.6, 35.8, 318.2, 36.3, 316.2, 36.6);
        vaulter.bezierCurveTo(314.2, 37.0, 312.6, 38.4, 312.0, 39.0);
        vaulter.bezierCurveTo(310.6, 40.6, 309.9, 44.4, 312.7, 47.5);
        vaulter.bezierCurveTo(315.5, 50.6, 317.5, 50.5, 321.4, 48.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(313.7, 48.5);
        vaulter.bezierCurveTo(313.7, 48.5, 312.2, 50.5, 309.4, 53.0);
        vaulter.bezierCurveTo(306.6, 55.6, 301.6, 55.5, 299.3, 52.2);
        vaulter.bezierCurveTo(296.9, 48.7, 299.2, 44.7, 302.2, 43.1);
        vaulter.bezierCurveTo(305.2, 41.5, 311.8, 41.0, 311.8, 41.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(335.3, 29.5);
        vaulter.bezierCurveTo(335.3, 29.5, 340.4, 23.9, 345.7, 25.1);
        vaulter.bezierCurveTo(351.1, 26.3, 355.9, 30.0, 355.9, 30.0);
        vaulter.lineTo(360.8, 33.4);
        vaulter.lineTo(363.9, 36.8);
        vaulter.bezierCurveTo(366.4, 35.9, 373.3, 33.7, 385.9, 38.2);
        vaulter.bezierCurveTo(385.9, 38.2, 386.8, 36.1, 388.1, 36.2);
        vaulter.bezierCurveTo(389.4, 36.3, 392.0, 37.6, 391.6, 40.2);
        vaulter.bezierCurveTo(391.1, 42.8, 391.2, 48.4, 391.7, 49.6);
        vaulter.bezierCurveTo(392.1, 50.8, 392.5, 53.6, 391.7, 54.1);
        vaulter.bezierCurveTo(390.9, 54.5, 389.4, 52.8, 389.7, 51.4);
        vaulter.bezierCurveTo(389.7, 51.4, 386.1, 46.1, 385.8, 42.1);
        vaulter.bezierCurveTo(385.8, 42.1, 378.9, 42.0, 376.3, 42.3);
        vaulter.bezierCurveTo(373.7, 42.5, 366.0, 44.1, 364.3, 44.0);
        vaulter.bezierCurveTo(362.7, 44.0, 353.5, 42.3, 345.2, 36.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(340.4, 38.6);
        vaulter.bezierCurveTo(338.8, 36.6, 338.3, 33.4, 340.9, 31.5);
        vaulter.bezierCurveTo(343.4, 29.6, 345.8, 31.3, 347.0, 32.9);
        vaulter.bezierCurveTo(348.2, 34.5, 348.9, 37.2, 346.4, 39.0);
        vaulter.bezierCurveTo(343.9, 40.9, 342.1, 40.7, 340.4, 38.6);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(340.4, 38.7);
        vaulter.bezierCurveTo(340.4, 38.7, 344.2, 46.0, 346.2, 48.3);
        vaulter.bezierCurveTo(348.1, 50.7, 349.5, 53.7, 352.5, 55.5);
        vaulter.bezierCurveTo(352.5, 55.5, 362.2, 64.3, 366.1, 68.4);
        vaulter.bezierCurveTo(363.9, 72.1, 362.6, 74.3, 361.7, 77.2);
        vaulter.bezierCurveTo(361.7, 77.2, 360.4, 79.0, 361.2, 79.8);
        vaulter.bezierCurveTo(361.9, 80.5, 365.8, 77.8, 367.6, 74.9);
        vaulter.bezierCurveTo(369.4, 71.9, 371.7, 70.5, 372.4, 69.9);
        vaulter.bezierCurveTo(373.0, 69.3, 373.8, 66.9, 372.9, 66.3);
        vaulter.bezierCurveTo(372.0, 65.7, 370.3, 65.0, 368.9, 65.9);
        vaulter.bezierCurveTo(365.0, 62.4, 361.5, 54.0, 358.0, 50.7);
        vaulter.bezierCurveTo(357.4, 46.9, 356.4, 42.5, 350.7, 34.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(280.4, 77.3);
        vaulter.bezierCurveTo(280.4, 77.3, 280.4, 76.4, 279.4, 76.4);
        vaulter.bezierCurveTo(278.4, 76.5, 278.4, 77.4, 278.4, 77.4);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(280.4, 77.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(314.0, 39.8);
        vaulter.bezierCurveTo(314.0, 39.8, 317.0, 36.4, 323.1, 38.1);
        vaulter.bezierCurveTo(329.3, 39.7, 324.3, 46.1, 322.5, 47.0);
        vaulter.bezierCurveTo(320.8, 47.8, 318.4, 48.9, 315.6, 48.4);
        vaulter.bezierCurveTo(312.9, 47.9, 309.7, 44.9, 314.0, 39.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(321.6, 41.3);
        vaulter.bezierCurveTo(322.3, 42.5, 323.4, 49.7, 323.4, 49.7);
        vaulter.bezierCurveTo(323.4, 49.7, 327.0, 56.0, 328.0, 59.0);
        vaulter.bezierCurveTo(329.5, 63.6, 329.6, 71.1, 329.6, 77.2);
        vaulter.bezierCurveTo(329.6, 78.2, 330.2, 79.3, 329.9, 80.2);
        vaulter.bezierCurveTo(329.5, 81.2, 328.9, 82.3, 328.9, 82.3);
        vaulter.bezierCurveTo(328.9, 82.3, 328.8, 85.1, 328.9, 85.7);
        vaulter.bezierCurveTo(329.0, 86.4, 328.9, 87.1, 328.4, 87.1);
        vaulter.bezierCurveTo(327.8, 87.2, 327.8, 88.4, 327.3, 88.1);
        vaulter.bezierCurveTo(326.8, 87.8, 326.2, 89.0, 325.7, 88.7);
        vaulter.bezierCurveTo(325.2, 88.4, 325.2, 86.8, 325.2, 86.8);
        vaulter.bezierCurveTo(325.2, 86.8, 325.7, 80.9, 326.6, 79.8);
        vaulter.bezierCurveTo(327.5, 78.7, 327.2, 77.8, 327.2, 77.8);
        vaulter.bezierCurveTo(325.7, 70.0, 323.0, 66.3, 321.9, 61.5);
        vaulter.bezierCurveTo(320.8, 60.2, 319.7, 56.9, 319.1, 55.7);
        vaulter.bezierCurveTo(318.6, 54.4, 317.7, 52.6, 317.7, 52.6);
        vaulter.bezierCurveTo(317.7, 52.6, 316.4, 52.6, 313.5, 47.5);
        vaulter.bezierCurveTo(311.7, 44.3, 312.3, 42.2, 313.3, 40.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(315.2, 39.4);
        vaulter.lineTo(315.0, 48.7);
        vaulter.bezierCurveTo(315.0, 48.7, 314.3, 55.3, 314.5, 59.6);
        vaulter.bezierCurveTo(314.5, 59.6, 314.1, 68.5, 315.2, 74.8);
        vaulter.bezierCurveTo(315.2, 74.8, 312.9, 82.1, 315.2, 83.2);
        vaulter.bezierCurveTo(315.2, 83.2, 315.8, 84.3, 316.1, 83.9);
        vaulter.bezierCurveTo(316.3, 83.6, 317.1, 83.1, 317.1, 83.1);
        vaulter.bezierCurveTo(317.1, 83.1, 317.3, 83.1, 317.9, 83.2);
        vaulter.bezierCurveTo(318.5, 83.4, 318.0, 82.1, 318.0, 82.1);
        vaulter.bezierCurveTo(318.0, 82.1, 317.2, 78.0, 317.2, 77.6);
        vaulter.bezierCurveTo(317.3, 77.1, 318.4, 78.7, 318.4, 79.0);
        vaulter.bezierCurveTo(318.4, 79.2, 318.6, 80.1, 319.0, 79.9);
        vaulter.bezierCurveTo(319.3, 79.8, 319.4, 78.8, 319.1, 77.9);
        vaulter.bezierCurveTo(318.8, 77.0, 318.8, 76.0, 317.4, 75.1);
        vaulter.bezierCurveTo(317.4, 75.1, 320.2, 66.1, 320.0, 60.6);
        vaulter.bezierCurveTo(320.0, 60.6, 321.0, 58.4, 320.8, 55.6);
        vaulter.bezierCurveTo(320.6, 52.8, 320.3, 50.9, 320.3, 50.9);
        vaulter.bezierCurveTo(320.3, 50.9, 322.4, 48.6, 323.4, 43.0);
        vaulter.bezierCurveTo(324.0, 39.8, 320.8, 38.2, 319.6, 38.0);
        vaulter.bezierCurveTo(316.9, 37.5, 315.2, 39.4, 315.2, 39.4);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(327.1, 49.5);
        vaulter.bezierCurveTo(327.1, 49.5, 335.8, 46.9, 341.7, 44.1);
        vaulter.bezierCurveTo(343.8, 43.2, 346.1, 41.5, 347.2, 40.6);
        vaulter.bezierCurveTo(348.9, 39.3, 349.3, 37.6, 348.9, 36.3);
        vaulter.bezierCurveTo(348.3, 34.5, 347.1, 32.5, 345.7, 31.4);
        vaulter.bezierCurveTo(345.1, 30.9, 340.6, 31.5, 336.7, 32.8);
        vaulter.bezierCurveTo(334.0, 33.8, 331.7, 34.7, 329.4, 35.2);
        vaulter.bezierCurveTo(327.6, 35.6, 325.0, 35.1, 323.0, 35.3);
        vaulter.bezierCurveTo(321.0, 35.4, 318.8, 36.5, 318.1, 37.1);
        vaulter.bezierCurveTo(316.5, 38.5, 316.4, 42.4, 318.3, 46.1);
        vaulter.bezierCurveTo(320.1, 49.9, 322.9, 50.9, 327.1, 49.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(319.5, 46.6);
        vaulter.bezierCurveTo(319.5, 46.6, 317.6, 48.6, 314.2, 51.0);
        vaulter.bezierCurveTo(310.7, 53.4, 305.2, 52.6, 303.2, 48.7);
        vaulter.bezierCurveTo(301.0, 44.5, 304.1, 40.4, 307.6, 39.1);
        vaulter.bezierCurveTo(311.2, 37.7, 318.5, 38.1, 318.5, 38.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(339.1, 32.7);
        vaulter.bezierCurveTo(339.1, 32.7, 345.7, 28.9, 350.8, 31.1);
        vaulter.bezierCurveTo(355.5, 33.1, 357.5, 35.7, 359.1, 38.1);
        vaulter.bezierCurveTo(360.8, 40.5, 364.4, 45.8, 364.4, 45.8);
        vaulter.bezierCurveTo(366.7, 44.4, 371.6, 43.2, 384.7, 45.3);
        vaulter.bezierCurveTo(384.7, 45.3, 385.3, 43.1, 386.6, 43.0);
        vaulter.bezierCurveTo(387.9, 42.8, 390.7, 43.6, 390.7, 46.3);
        vaulter.bezierCurveTo(390.7, 48.9, 391.9, 54.4, 392.5, 55.5);
        vaulter.bezierCurveTo(393.2, 56.6, 394.0, 59.3, 393.4, 59.9);
        vaulter.bezierCurveTo(392.7, 60.5, 390.9, 59.0, 391.0, 57.6);
        vaulter.bezierCurveTo(391.0, 57.6, 386.5, 53.0, 385.4, 49.2);
        vaulter.bezierCurveTo(385.4, 49.2, 378.6, 50.4, 376.1, 51.1);
        vaulter.bezierCurveTo(373.6, 51.8, 366.2, 54.7, 364.6, 55.0);
        vaulter.bezierCurveTo(363.0, 55.3, 352.9, 50.3, 346.6, 42.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(342.7, 43.6);
        vaulter.bezierCurveTo(341.8, 41.3, 343.7, 38.9, 345.8, 37.9);
        vaulter.bezierCurveTo(347.8, 36.9, 350.3, 38.1, 351.5, 41.2);
        vaulter.bezierCurveTo(352.6, 44.3, 351.7, 46.2, 349.1, 47.4);
        vaulter.bezierCurveTo(346.4, 48.5, 343.9, 46.8, 342.7, 43.6);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(342.7, 43.4);
        vaulter.bezierCurveTo(342.7, 43.4, 345.4, 50.9, 347.1, 53.5);
        vaulter.bezierCurveTo(348.7, 56.1, 349.7, 59.2, 352.4, 61.4);
        vaulter.bezierCurveTo(352.4, 61.4, 360.0, 73.9, 365.5, 74.9);
        vaulter.bezierCurveTo(365.9, 79.2, 366.0, 83.4, 366.9, 86.2);
        vaulter.bezierCurveTo(366.9, 86.2, 367.0, 88.4, 368.0, 88.6);
        vaulter.bezierCurveTo(369.1, 88.8, 370.7, 84.3, 370.4, 80.9);
        vaulter.bezierCurveTo(370.1, 77.4, 371.1, 74.9, 371.3, 74.1);
        vaulter.bezierCurveTo(371.5, 73.2, 370.7, 70.8, 369.6, 70.9);
        vaulter.bezierCurveTo(368.5, 70.9, 367.8, 70.2, 367.2, 71.8);
        vaulter.bezierCurveTo(362.3, 65.9, 361.6, 61.1, 358.5, 57.4);
        vaulter.bezierCurveTo(358.4, 53.5, 358.0, 49.0, 353.4, 39.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(277.8, 77.4);
        vaulter.bezierCurveTo(277.8, 77.4, 277.8, 76.5, 276.8, 76.6);
        vaulter.bezierCurveTo(275.8, 76.6, 275.8, 77.6, 275.8, 77.6);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(277.8, 77.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(321.3, 36.8);
        vaulter.bezierCurveTo(321.3, 36.8, 325.3, 34.7, 330.5, 38.5);
        vaulter.bezierCurveTo(335.6, 42.3, 328.6, 46.4, 326.7, 46.6);
        vaulter.bezierCurveTo(324.7, 46.7, 322.1, 46.8, 319.7, 45.4);
        vaulter.bezierCurveTo(317.4, 44.0, 315.4, 39.9, 321.3, 36.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(326.9, 40.2);
        vaulter.bezierCurveTo(327.5, 41.5, 327.7, 48.8, 327.7, 48.8);
        vaulter.bezierCurveTo(327.7, 48.8, 330.4, 55.5, 331.0, 58.6);
        vaulter.bezierCurveTo(331.9, 63.4, 331.1, 70.8, 330.3, 76.9);
        vaulter.bezierCurveTo(330.2, 77.8, 330.6, 79.0, 330.1, 79.9);
        vaulter.bezierCurveTo(329.7, 80.8, 328.9, 81.8, 328.9, 81.8);
        vaulter.bezierCurveTo(328.9, 81.8, 328.5, 84.6, 328.5, 85.2);
        vaulter.bezierCurveTo(328.5, 85.9, 328.3, 86.6, 327.8, 86.6);
        vaulter.bezierCurveTo(327.2, 86.5, 327.1, 87.7, 326.6, 87.3);
        vaulter.bezierCurveTo(326.1, 87.0, 325.3, 88.1, 324.9, 87.8);
        vaulter.bezierCurveTo(324.5, 87.4, 324.6, 85.8, 324.6, 85.8);
        vaulter.bezierCurveTo(324.6, 85.8, 325.9, 80.0, 327.0, 79.1);
        vaulter.bezierCurveTo(328.0, 78.1, 327.8, 77.1, 327.8, 77.1);
        vaulter.bezierCurveTo(327.3, 69.2, 325.1, 65.2, 324.7, 60.3);
        vaulter.bezierCurveTo(323.7, 58.9, 323.0, 55.5, 322.6, 54.1);
        vaulter.bezierCurveTo(322.2, 52.8, 321.6, 51.0, 321.6, 51.0);
        vaulter.bezierCurveTo(321.6, 51.0, 320.3, 50.8, 318.1, 45.3);
        vaulter.bezierCurveTo(316.8, 42.1, 317.6, 40.0, 318.7, 38.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(275.7, 77.6);
        vaulter.bezierCurveTo(275.7, 77.6, 275.7, 76.6, 274.7, 76.7);
        vaulter.bezierCurveTo(273.7, 76.8, 273.7, 77.7, 273.7, 77.7);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(275.7, 77.6);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(327.0, 34.5);
        vaulter.bezierCurveTo(325.7, 35.0, 319.8, 43.5, 319.8, 43.5);
        vaulter.bezierCurveTo(319.8, 43.5, 315.3, 46.8, 312.8, 50.4);
        vaulter.bezierCurveTo(312.8, 50.4, 306.2, 57.0, 302.7, 62.7);
        vaulter.bezierCurveTo(302.7, 62.7, 295.7, 66.9, 296.7, 69.3);
        vaulter.bezierCurveTo(296.7, 69.3, 296.5, 70.6, 296.9, 70.5);
        vaulter.bezierCurveTo(297.4, 70.4, 297.7, 70.7, 298.0, 70.8);
        vaulter.bezierCurveTo(298.2, 70.8, 298.3, 70.7, 298.8, 70.7);
        vaulter.bezierCurveTo(299.4, 70.8, 299.5, 70.1, 299.5, 70.1);
        vaulter.lineTo(301.1, 68.7);
        vaulter.bezierCurveTo(301.1, 68.7, 301.1, 68.8, 301.4, 68.8);
        vaulter.bezierCurveTo(301.8, 68.9, 302.7, 68.4, 303.3, 67.6);
        vaulter.bezierCurveTo(303.9, 66.8, 304.2, 65.7, 304.2, 64.6);
        vaulter.bezierCurveTo(304.2, 64.6, 311.9, 58.9, 315.6, 54.5);
        vaulter.bezierCurveTo(315.6, 54.5, 318.0, 53.5, 319.8, 51.2);
        vaulter.bezierCurveTo(321.7, 48.8, 322.7, 47.2, 322.7, 47.2);
        vaulter.bezierCurveTo(322.7, 47.2, 326.0, 46.8, 330.7, 43.1);
        vaulter.bezierCurveTo(333.4, 41.0, 332.1, 37.6, 331.3, 36.6);
        vaulter.bezierCurveTo(329.6, 34.2, 328.2, 34.0, 327.0, 34.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(329.9, 48.7);
        vaulter.bezierCurveTo(329.9, 48.7, 339.5, 49.7, 346.4, 49.4);
        vaulter.bezierCurveTo(348.8, 49.3, 351.6, 48.6, 353.1, 48.2);
        vaulter.bezierCurveTo(355.3, 47.6, 356.4, 46.1, 356.5, 44.7);
        vaulter.bezierCurveTo(356.7, 42.7, 356.2, 40.2, 355.4, 38.7);
        vaulter.bezierCurveTo(355.0, 37.9, 350.3, 36.7, 346.0, 36.4);
        vaulter.bezierCurveTo(343.0, 36.2, 340.4, 36.2, 338.0, 35.7);
        vaulter.bezierCurveTo(336.0, 35.4, 333.7, 33.9, 331.7, 33.2);
        vaulter.bezierCurveTo(329.7, 32.5, 327.1, 32.7, 326.2, 33.0);
        vaulter.bezierCurveTo(324.1, 33.8, 322.5, 37.6, 322.7, 41.9);
        vaulter.bezierCurveTo(323.0, 46.3, 325.3, 48.4, 329.9, 48.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(326.3, 42.9);
        vaulter.bezierCurveTo(326.3, 42.9, 324.9, 45.1, 322.1, 47.9);
        vaulter.bezierCurveTo(319.3, 50.8, 314.1, 51.1, 311.5, 47.8);
        vaulter.bezierCurveTo(308.7, 44.2, 310.8, 39.8, 313.9, 38.0);
        vaulter.bezierCurveTo(316.9, 36.1, 323.8, 35.1, 323.8, 35.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(347.9, 37.5);
        vaulter.bezierCurveTo(347.9, 37.5, 356.0, 36.6, 359.9, 40.8);
        vaulter.bezierCurveTo(363.6, 44.8, 364.4, 48.1, 365.1, 51.1);
        vaulter.bezierCurveTo(365.7, 54.1, 367.7, 57.1, 367.7, 57.1);
        vaulter.bezierCurveTo(369.0, 54.7, 370.6, 53.9, 381.3, 49.2);
        vaulter.bezierCurveTo(381.3, 49.2, 380.6, 46.9, 381.7, 46.1);
        vaulter.bezierCurveTo(382.8, 45.3, 385.8, 44.5, 387.2, 46.9);
        vaulter.bezierCurveTo(388.6, 49.2, 392.6, 53.6, 393.8, 54.3);
        vaulter.bezierCurveTo(394.9, 54.9, 397.1, 56.9, 396.9, 57.8);
        vaulter.bezierCurveTo(396.6, 58.7, 394.2, 58.4, 393.5, 57.0);
        vaulter.bezierCurveTo(393.5, 57.0, 387.0, 55.3, 383.9, 52.4);
        vaulter.bezierCurveTo(383.9, 52.4, 378.4, 57.1, 376.5, 59.0);
        vaulter.bezierCurveTo(374.6, 61.0, 371.5, 68.1, 368.2, 68.7);
        vaulter.bezierCurveTo(364.9, 69.3, 353.9, 60.3, 351.2, 50.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(347.8, 49.1);
        vaulter.bezierCurveTo(347.8, 49.1, 350.9, 59.1, 352.6, 61.9);
        vaulter.bezierCurveTo(354.2, 64.7, 355.0, 68.1, 357.8, 70.5);
        vaulter.bezierCurveTo(357.8, 70.5, 365.1, 84.0, 370.9, 85.3);
        vaulter.bezierCurveTo(371.1, 89.8, 371.0, 94.3, 371.8, 97.3);
        vaulter.bezierCurveTo(371.8, 97.3, 371.8, 99.6, 372.9, 99.9);
        vaulter.bezierCurveTo(374.0, 100.1, 375.9, 95.5, 375.8, 91.8);
        vaulter.bezierCurveTo(375.6, 88.1, 376.8, 85.6, 377.1, 84.7);
        vaulter.bezierCurveTo(377.3, 83.8, 376.6, 81.3, 375.4, 81.3);
        vaulter.bezierCurveTo(374.3, 81.2, 373.5, 80.5, 372.8, 82.1);
        vaulter.bezierCurveTo(367.9, 75.6, 367.4, 70.6, 364.3, 66.6);
        vaulter.bezierCurveTo(364.5, 62.5, 364.3, 57.7, 359.9, 48.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(326.4, 33.6);
        vaulter.bezierCurveTo(326.4, 33.6, 330.4, 31.4, 335.6, 35.2);
        vaulter.bezierCurveTo(340.8, 39.0, 333.7, 43.1, 331.8, 43.3);
        vaulter.bezierCurveTo(329.8, 43.5, 327.2, 43.6, 324.9, 42.1);
        vaulter.bezierCurveTo(322.5, 40.7, 321.8, 36.0, 326.4, 33.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(332.0, 41.4);
        vaulter.bezierCurveTo(331.3, 42.7, 325.9, 48.1, 325.9, 48.1);
        vaulter.bezierCurveTo(325.9, 48.1, 319.7, 53.9, 317.4, 56.2);
        vaulter.bezierCurveTo(313.8, 60.0, 310.9, 65.4, 306.7, 70.3);
        vaulter.bezierCurveTo(306.0, 71.1, 305.7, 72.4, 304.8, 72.8);
        vaulter.bezierCurveTo(303.9, 73.3, 302.6, 73.8, 302.6, 73.8);
        vaulter.bezierCurveTo(302.6, 73.8, 299.4, 74.7, 297.4, 77.3);
        vaulter.bezierCurveTo(297.0, 77.8, 295.8, 77.3, 295.7, 76.7);
        vaulter.bezierCurveTo(295.5, 76.1, 296.5, 74.9, 296.5, 74.9);
        vaulter.bezierCurveTo(296.5, 74.9, 301.0, 70.5, 302.5, 70.3);
        vaulter.bezierCurveTo(304.0, 70.0, 304.4, 69.1, 304.4, 69.1);
        vaulter.bezierCurveTo(308.5, 61.8, 309.1, 55.6, 313.1, 52.3);
        vaulter.bezierCurveTo(313.8, 50.6, 316.3, 48.0, 317.2, 46.9);
        vaulter.bezierCurveTo(318.1, 45.7, 319.3, 44.1, 319.3, 44.1);
        vaulter.bezierCurveTo(319.3, 44.1, 319.1, 43.9, 321.7, 38.3);
        vaulter.bezierCurveTo(322.6, 36.3, 323.7, 35.2, 324.8, 34.6);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(273.6, 77.7);
        vaulter.bezierCurveTo(273.6, 77.7, 273.6, 76.8, 272.6, 76.9);
        vaulter.bezierCurveTo(271.6, 77.0, 271.6, 77.9, 271.6, 77.9);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(273.6, 77.7);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(337.8, 32.2);
        vaulter.bezierCurveTo(336.1, 32.4, 332.7, 34.9, 330.0, 37.6);
        vaulter.bezierCurveTo(326.8, 38.7, 320.7, 40.3, 317.2, 42.9);
        vaulter.bezierCurveTo(317.2, 42.9, 309.0, 49.2, 303.8, 53.5);
        vaulter.bezierCurveTo(303.8, 53.5, 296.9, 58.5, 298.1, 60.8);
        vaulter.bezierCurveTo(298.1, 60.8, 297.9, 62.2, 298.4, 62.0);
        vaulter.bezierCurveTo(298.8, 61.9, 299.2, 62.2, 299.4, 62.2);
        vaulter.bezierCurveTo(299.7, 62.2, 299.8, 62.1, 300.2, 62.1);
        vaulter.bezierCurveTo(300.8, 62.1, 300.9, 61.4, 300.9, 61.4);
        vaulter.lineTo(302.4, 59.9);
        vaulter.bezierCurveTo(302.4, 59.9, 302.4, 59.9, 302.7, 60.0);
        vaulter.bezierCurveTo(303.1, 60.0, 303.9, 59.3, 304.2, 58.3);
        vaulter.bezierCurveTo(304.5, 57.3, 304.4, 56.8, 304.7, 55.7);
        vaulter.bezierCurveTo(304.7, 55.7, 314.6, 50.1, 319.5, 47.1);
        vaulter.bezierCurveTo(319.5, 47.1, 323.3, 45.9, 326.0, 44.7);
        vaulter.bezierCurveTo(328.6, 43.5, 331.1, 42.5, 331.1, 42.5);
        vaulter.bezierCurveTo(331.1, 42.5, 334.3, 43.2, 339.9, 41.2);
        vaulter.bezierCurveTo(343.2, 40.0, 342.9, 36.3, 342.5, 35.1);
        vaulter.bezierCurveTo(341.6, 32.4, 339.6, 32.0, 337.8, 32.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(339.0, 48.5);
        vaulter.bezierCurveTo(339.0, 48.5, 347.7, 52.5, 354.3, 54.4);
        vaulter.bezierCurveTo(356.6, 55.1, 359.5, 55.4, 361.0, 55.4);
        vaulter.bezierCurveTo(363.3, 55.6, 364.8, 54.5, 365.4, 53.2);
        vaulter.bezierCurveTo(366.2, 51.3, 366.6, 48.9, 366.3, 47.1);
        vaulter.bezierCurveTo(366.1, 46.3, 362.1, 43.6, 358.1, 42.0);
        vaulter.bezierCurveTo(355.3, 40.8, 352.9, 39.9, 350.7, 38.7);
        vaulter.bezierCurveTo(349.0, 37.8, 347.3, 35.7, 345.6, 34.4);
        vaulter.bezierCurveTo(343.9, 33.1, 341.4, 32.4, 340.5, 32.4);
        vaulter.bezierCurveTo(338.2, 32.4, 335.4, 35.5, 334.3, 39.7);
        vaulter.bezierCurveTo(333.2, 43.9, 334.7, 46.7, 339.0, 48.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(359.3, 42.5);
        vaulter.bezierCurveTo(359.3, 42.5, 360.5, 43.9, 361.7, 44.2);
        vaulter.bezierCurveTo(364.3, 44.8, 368.3, 45.7, 370.4, 48.6);
        vaulter.bezierCurveTo(373.7, 53.0, 374.1, 56.4, 374.3, 59.4);
        vaulter.bezierCurveTo(374.6, 62.5, 376.2, 65.8, 376.2, 65.8);
        vaulter.bezierCurveTo(377.8, 63.4, 379.5, 62.9, 390.7, 59.4);
        vaulter.bezierCurveTo(390.7, 59.4, 390.3, 57.1, 391.5, 56.4);
        vaulter.bezierCurveTo(392.7, 55.7, 395.7, 55.3, 396.8, 57.8);
        vaulter.bezierCurveTo(398.0, 60.4, 401.4, 65.2, 402.5, 66.0);
        vaulter.bezierCurveTo(403.5, 66.7, 405.5, 69.0, 405.1, 69.9);
        vaulter.bezierCurveTo(404.8, 70.7, 402.4, 70.1, 401.8, 68.7);
        vaulter.bezierCurveTo(401.8, 68.7, 395.6, 66.2, 392.9, 62.9);
        vaulter.bezierCurveTo(392.9, 62.9, 386.9, 66.9, 384.8, 68.7);
        vaulter.bezierCurveTo(382.6, 70.4, 378.7, 77.1, 375.4, 77.3);
        vaulter.bezierCurveTo(372.0, 77.5, 362.2, 67.2, 360.7, 56.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(338.2, 42.6);
        vaulter.bezierCurveTo(338.2, 42.6, 336.0, 44.5, 332.1, 46.6);
        vaulter.bezierCurveTo(328.2, 48.6, 322.5, 47.2, 320.9, 42.9);
        vaulter.bezierCurveTo(319.1, 38.2, 322.8, 34.2, 326.7, 33.3);
        vaulter.bezierCurveTo(330.5, 32.3, 338.2, 33.6, 338.2, 33.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(356.4, 54.9);
        vaulter.bezierCurveTo(356.5, 51.8, 359.4, 50.8, 361.6, 51.1);
        vaulter.bezierCurveTo(363.8, 51.4, 366.3, 53.2, 366.4, 56.8);
        vaulter.bezierCurveTo(366.4, 60.3, 363.7, 60.4, 361.4, 60.2);
        vaulter.bezierCurveTo(359.1, 60.0, 356.3, 59.0, 356.4, 54.9);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(356.1, 54.9);
        vaulter.bezierCurveTo(356.1, 54.9, 356.1, 65.1, 356.8, 68.3);
        vaulter.bezierCurveTo(357.5, 71.5, 357.3, 74.9, 359.2, 78.0);
        vaulter.bezierCurveTo(359.2, 78.0, 362.2, 93.1, 367.3, 96.1);
        vaulter.bezierCurveTo(366.1, 100.4, 364.7, 104.7, 364.6, 107.8);
        vaulter.bezierCurveTo(364.6, 107.8, 363.9, 110.0, 364.8, 110.6);
        vaulter.bezierCurveTo(365.8, 111.1, 369.0, 107.3, 370.0, 103.7);
        vaulter.bezierCurveTo(370.9, 100.2, 372.8, 98.1, 373.3, 97.4);
        vaulter.bezierCurveTo(373.8, 96.6, 373.9, 93.9, 372.8, 93.6);
        vaulter.bezierCurveTo(371.7, 93.2, 371.2, 92.3, 370.1, 93.6);
        vaulter.bezierCurveTo(367.3, 86.0, 368.4, 81.0, 366.6, 76.2);
        vaulter.bezierCurveTo(368.0, 72.4, 369.2, 67.8, 368.0, 57.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(341.4, 33.8);
        vaulter.bezierCurveTo(341.4, 33.8, 345.9, 33.7, 348.9, 39.4);
        vaulter.bezierCurveTo(351.8, 45.0, 343.7, 45.6, 341.9, 44.9);
        vaulter.bezierCurveTo(340.0, 44.2, 337.7, 43.2, 336.2, 40.8);
        vaulter.bezierCurveTo(334.7, 38.5, 334.7, 34.0, 341.4, 33.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(340.0, 34.2);
        vaulter.bezierCurveTo(338.7, 34.2, 337.1, 34.5, 334.9, 35.5);
        vaulter.bezierCurveTo(333.5, 36.1, 328.9, 37.8, 328.9, 37.8);
        vaulter.bezierCurveTo(328.9, 37.8, 327.1, 38.7, 325.8, 39.3);
        vaulter.bezierCurveTo(324.5, 39.9, 321.0, 41.1, 319.6, 42.2);
        vaulter.bezierCurveTo(314.6, 43.4, 312.2, 47.6, 305.5, 55.0);
        vaulter.bezierCurveTo(305.5, 55.0, 304.7, 56.1, 304.4, 58.6);
        vaulter.bezierCurveTo(304.2, 60.1, 304.1, 66.1, 304.1, 66.1);
        vaulter.bezierCurveTo(304.1, 66.1, 304.4, 67.7, 304.9, 68.0);
        vaulter.bezierCurveTo(305.5, 68.2, 307.3, 66.3, 307.2, 65.7);
        vaulter.bezierCurveTo(306.6, 62.9, 306.8, 61.7, 307.1, 61.0);
        vaulter.bezierCurveTo(307.3, 61.5, 307.6, 62.2, 307.5, 62.6);
        vaulter.bezierCurveTo(307.4, 63.2, 308.2, 64.1, 308.6, 63.9);
        vaulter.bezierCurveTo(309.0, 63.7, 309.0, 62.8, 308.8, 62.5);
        vaulter.bezierCurveTo(308.7, 62.2, 308.9, 61.0, 308.8, 60.1);
        vaulter.bezierCurveTo(308.8, 59.3, 308.0, 58.1, 307.7, 57.7);
        vaulter.bezierCurveTo(307.5, 57.3, 307.0, 57.1, 307.0, 57.1);
        vaulter.bezierCurveTo(313.4, 52.3, 316.8, 49.4, 321.7, 47.7);
        vaulter.bezierCurveTo(324.8, 46.6, 333.0, 44.4, 333.0, 44.4);
        vaulter.bezierCurveTo(333.0, 44.4, 341.5, 43.8, 342.7, 42.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(344.8, 38.5);
        vaulter.bezierCurveTo(343.1, 38.0, 339.0, 38.9, 335.5, 40.3);
        vaulter.bezierCurveTo(332.2, 40.0, 325.9, 39.1, 321.6, 40.1);
        vaulter.bezierCurveTo(321.6, 40.1, 311.6, 42.6, 305.2, 44.6);
        vaulter.bezierCurveTo(305.2, 44.6, 296.8, 46.4, 297.0, 49.1);
        vaulter.bezierCurveTo(297.0, 49.1, 296.3, 50.2, 296.8, 50.3);
        vaulter.bezierCurveTo(297.3, 50.3, 297.5, 50.7, 297.7, 50.8);
        vaulter.bezierCurveTo(297.9, 51.0, 298.1, 50.9, 298.5, 51.1);
        vaulter.bezierCurveTo(299.0, 51.3, 299.4, 50.7, 299.4, 50.7);
        vaulter.lineTo(301.3, 49.9);
        vaulter.bezierCurveTo(301.3, 49.9, 301.3, 49.9, 301.6, 50.1);
        vaulter.bezierCurveTo(301.9, 50.3, 303.0, 49.9, 303.6, 49.2);
        vaulter.bezierCurveTo(304.3, 48.4, 304.4, 47.8, 305.1, 47.0);
        vaulter.bezierCurveTo(305.1, 47.0, 316.5, 45.7, 322.1, 44.9);
        vaulter.bezierCurveTo(322.1, 44.9, 326.1, 45.3, 329.1, 45.2);
        vaulter.bezierCurveTo(331.9, 45.2, 334.5, 45.2, 334.5, 45.2);
        vaulter.bezierCurveTo(334.5, 45.2, 337.2, 47.1, 343.2, 47.5);
        vaulter.bezierCurveTo(346.6, 47.7, 347.9, 44.2, 348.0, 43.0);
        vaulter.bezierCurveTo(348.2, 40.1, 346.5, 38.9, 344.8, 38.5);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(340.9, 53.9);
        vaulter.bezierCurveTo(340.9, 53.9, 346.8, 61.5, 351.8, 66.2);
        vaulter.bezierCurveTo(353.6, 67.9, 356.1, 69.5, 357.4, 70.2);
        vaulter.bezierCurveTo(359.3, 71.4, 361.2, 71.1, 362.2, 70.2);
        vaulter.bezierCurveTo(363.8, 69.0, 365.3, 66.9, 365.8, 65.2);
        vaulter.bezierCurveTo(366.1, 64.4, 363.7, 60.2, 360.9, 56.9);
        vaulter.bezierCurveTo(359.0, 54.6, 357.2, 52.7, 355.8, 50.7);
        vaulter.bezierCurveTo(354.7, 49.0, 354.2, 46.4, 353.3, 44.4);
        vaulter.bezierCurveTo(352.4, 42.5, 350.4, 40.8, 349.6, 40.4);
        vaulter.bezierCurveTo(347.6, 39.3, 343.7, 40.8, 340.8, 44.0);
        vaulter.bezierCurveTo(337.9, 47.2, 337.9, 50.4, 340.9, 53.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(365.0, 62.9);
        vaulter.bezierCurveTo(365.0, 62.9, 367.5, 63.7, 368.4, 69.4);
        vaulter.bezierCurveTo(369.3, 74.3, 369.3, 76.0, 368.5, 79.0);
        vaulter.bezierCurveTo(367.8, 82.0, 369.9, 86.3, 369.9, 86.3);
        vaulter.bezierCurveTo(372.3, 84.9, 373.4, 84.0, 385.0, 85.2);
        vaulter.bezierCurveTo(385.0, 85.2, 385.6, 82.9, 387.0, 82.7);
        vaulter.bezierCurveTo(388.4, 82.6, 391.3, 83.4, 391.3, 86.1);
        vaulter.bezierCurveTo(391.4, 88.9, 392.7, 94.7, 393.3, 95.8);
        vaulter.bezierCurveTo(394.0, 97.0, 394.9, 99.8, 394.2, 100.5);
        vaulter.bezierCurveTo(393.6, 101.1, 391.6, 99.6, 391.7, 98.1);
        vaulter.bezierCurveTo(391.7, 98.1, 386.9, 93.3, 385.7, 89.3);
        vaulter.bezierCurveTo(385.7, 89.3, 378.6, 90.6, 376.0, 91.3);
        vaulter.bezierCurveTo(373.3, 92.1, 368.5, 95.3, 365.4, 94.1);
        vaulter.bezierCurveTo(362.2, 92.9, 355.3, 79.9, 358.0, 69.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(341.2, 48.1);
        vaulter.bezierCurveTo(341.2, 48.1, 338.4, 48.9, 334.0, 49.3);
        vaulter.bezierCurveTo(329.6, 49.7, 324.9, 46.2, 325.1, 41.5);
        vaulter.bezierCurveTo(325.4, 36.5, 330.3, 34.4, 334.2, 35.0);
        vaulter.bezierCurveTo(338.2, 35.6, 344.7, 39.8, 344.7, 39.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(356.1, 69.5);
        vaulter.bezierCurveTo(356.1, 69.5, 359.0, 80.1, 360.6, 83.0);
        vaulter.bezierCurveTo(362.0, 85.8, 363.2, 89.1, 366.0, 91.4);
        vaulter.bezierCurveTo(366.0, 91.4, 372.1, 100.0, 379.6, 105.9);
        vaulter.bezierCurveTo(379.9, 110.3, 379.9, 114.8, 380.9, 117.8);
        vaulter.bezierCurveTo(380.9, 117.8, 380.9, 120.1, 382.0, 120.3);
        vaulter.bezierCurveTo(383.1, 120.5, 384.9, 115.9, 384.6, 112.2);
        vaulter.bezierCurveTo(384.4, 108.5, 385.5, 106.0, 385.7, 105.1);
        vaulter.bezierCurveTo(385.9, 104.2, 385.1, 101.6, 384.0, 101.7);
        vaulter.bezierCurveTo(382.8, 101.7, 382.0, 101.0, 381.4, 102.6);
        vaulter.bezierCurveTo(376.3, 96.3, 375.5, 92.8, 370.9, 88.1);
        vaulter.bezierCurveTo(371.0, 84.0, 370.4, 74.9, 365.8, 65.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(268.8, 78.2);
        vaulter.bezierCurveTo(268.8, 78.2, 268.8, 77.2, 267.8, 77.3);
        vaulter.bezierCurveTo(266.8, 77.4, 266.8, 78.4, 266.8, 78.4);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(268.8, 78.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(348.2, 42.7);
        vaulter.bezierCurveTo(348.2, 42.7, 352.5, 44.1, 353.3, 50.5);
        vaulter.bezierCurveTo(354.1, 56.9, 346.3, 54.6, 344.8, 53.3);
        vaulter.bezierCurveTo(343.3, 52.0, 341.5, 50.2, 340.9, 47.5);
        vaulter.bezierCurveTo(340.3, 44.7, 341.9, 40.6, 348.2, 42.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(348.3, 42.7);
        vaulter.bezierCurveTo(347.3, 41.5, 345.3, 40.2, 340.9, 40.3);
        vaulter.bezierCurveTo(339.3, 40.3, 334.5, 40.0, 334.5, 40.0);
        vaulter.bezierCurveTo(334.5, 40.0, 332.4, 40.1, 330.9, 40.2);
        vaulter.bezierCurveTo(329.5, 40.2, 325.9, 39.9, 324.1, 40.5);
        vaulter.bezierCurveTo(319.0, 39.6, 315.2, 42.5, 306.1, 46.6);
        vaulter.bezierCurveTo(306.1, 46.6, 304.9, 47.3, 303.7, 49.5);
        vaulter.bezierCurveTo(302.9, 50.8, 300.4, 56.3, 300.4, 56.3);
        vaulter.bezierCurveTo(300.4, 56.3, 300.1, 57.8, 300.5, 58.3);
        vaulter.bezierCurveTo(300.9, 58.8, 303.3, 57.7, 303.4, 57.1);
        vaulter.bezierCurveTo(304.0, 54.3, 304.7, 53.3, 305.2, 52.7);
        vaulter.bezierCurveTo(305.2, 53.4, 305.2, 54.0, 305.0, 54.4);
        vaulter.bezierCurveTo(304.6, 54.9, 304.9, 56.1, 305.4, 56.0);
        vaulter.bezierCurveTo(305.9, 55.9, 306.2, 55.1, 306.2, 54.8);
        vaulter.bezierCurveTo(306.2, 54.5, 306.8, 53.4, 307.1, 52.6);
        vaulter.bezierCurveTo(307.4, 51.9, 307.2, 50.5, 307.1, 50.0);
        vaulter.bezierCurveTo(307.0, 49.5, 306.7, 49.2, 306.7, 49.2);
        vaulter.bezierCurveTo(314.5, 47.3, 318.7, 45.9, 323.9, 46.3);
        vaulter.bezierCurveTo(327.1, 46.5, 335.6, 47.7, 335.6, 47.7);
        vaulter.bezierCurveTo(335.6, 47.7, 343.6, 50.5, 345.1, 50.1);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(350.4, 68.3);
        vaulter.bezierCurveTo(349.9, 66.7, 346.8, 63.7, 343.7, 61.6);
        vaulter.bezierCurveTo(342.1, 58.7, 339.4, 52.9, 336.1, 49.9);
        vaulter.bezierCurveTo(336.1, 49.9, 330.1, 42.1, 325.8, 36.9);
        vaulter.bezierCurveTo(325.8, 36.9, 320.8, 30.0, 318.4, 31.2);
        vaulter.bezierCurveTo(318.4, 31.2, 317.1, 31.1, 317.3, 31.5);
        vaulter.bezierCurveTo(317.4, 32.0, 317.1, 32.3, 317.1, 32.6);
        vaulter.bezierCurveTo(317.0, 32.8, 317.2, 33.0, 317.2, 33.4);
        vaulter.bezierCurveTo(317.2, 34.0, 317.9, 34.1, 317.9, 34.1);
        vaulter.lineTo(319.4, 35.5);
        vaulter.bezierCurveTo(319.4, 35.5, 319.4, 35.5, 319.3, 35.8);
        vaulter.bezierCurveTo(319.3, 36.2, 320.0, 37.1, 321.0, 37.4);
        vaulter.bezierCurveTo(322.0, 37.6, 322.5, 37.5, 323.6, 37.8);
        vaulter.bezierCurveTo(323.6, 37.8, 328.7, 48.7, 332.5, 53.0);
        vaulter.bezierCurveTo(332.5, 53.0, 334.3, 56.5, 336.0, 59.0);
        vaulter.bezierCurveTo(337.7, 61.3, 339.1, 63.5, 339.1, 63.5);
        vaulter.bezierCurveTo(339.1, 63.5, 339.0, 66.8, 341.9, 72.0);
        vaulter.bezierCurveTo(343.7, 75.0, 347.2, 74.1, 348.4, 73.5);
        vaulter.bezierCurveTo(350.9, 72.1, 350.9, 70.0, 350.4, 68.3);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(337.0, 73.6);
        vaulter.bezierCurveTo(337.0, 73.6, 337.2, 83.2, 338.4, 90.0);
        vaulter.bezierCurveTo(338.8, 92.4, 339.9, 95.2, 340.4, 96.5);
        vaulter.bezierCurveTo(341.3, 98.7, 343.0, 99.5, 344.3, 99.5);
        vaulter.bezierCurveTo(346.4, 99.4, 348.8, 98.6, 350.2, 97.6);
        vaulter.bezierCurveTo(350.9, 97.1, 351.5, 92.3, 351.2, 88.0);
        vaulter.bezierCurveTo(351.1, 85.0, 350.8, 82.4, 350.9, 79.9);
        vaulter.bezierCurveTo(351.0, 78.0, 352.1, 75.5, 352.6, 73.4);
        vaulter.bezierCurveTo(353.0, 71.3, 352.5, 68.8, 352.0, 67.9);
        vaulter.bezierCurveTo(351.1, 65.9, 347.1, 64.8, 342.8, 65.6);
        vaulter.bezierCurveTo(338.5, 66.4, 336.7, 69.0, 337.0, 73.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(351.1, 90.9);
        vaulter.bezierCurveTo(351.1, 90.9, 353.8, 92.1, 354.2, 97.0);
        vaulter.bezierCurveTo(354.2, 97.0, 355.6, 99.0, 356.5, 102.0);
        vaulter.bezierCurveTo(357.5, 104.9, 359.6, 108.4, 359.6, 108.4);
        vaulter.bezierCurveTo(361.6, 106.4, 367.9, 104.4, 373.3, 101.5);
        vaulter.bezierCurveTo(373.3, 101.5, 373.7, 99.5, 374.8, 98.8);
        vaulter.bezierCurveTo(376.0, 98.0, 378.0, 97.0, 379.3, 99.5);
        vaulter.bezierCurveTo(380.6, 101.9, 384.4, 106.5, 385.5, 107.2);
        vaulter.bezierCurveTo(386.6, 107.8, 388.8, 109.9, 388.5, 110.8);
        vaulter.bezierCurveTo(388.1, 111.7, 385.7, 111.3, 385.1, 109.9);
        vaulter.bezierCurveTo(385.1, 109.9, 378.7, 107.9, 375.8, 104.8);
        vaulter.bezierCurveTo(375.8, 104.8, 370.0, 109.2, 368.0, 111.1);
        vaulter.bezierCurveTo(366.1, 113.0, 361.4, 115.2, 358.0, 115.6);
        vaulter.bezierCurveTo(354.7, 116.0, 344.4, 109.2, 342.1, 98.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(340.1, 67.9);
        vaulter.bezierCurveTo(340.1, 67.9, 338.8, 66.9, 336.9, 65.0);
        vaulter.bezierCurveTo(336.3, 64.3, 335.6, 63.6, 334.9, 62.8);
        vaulter.bezierCurveTo(332.1, 59.4, 332.3, 53.5, 336.3, 51.0);
        vaulter.bezierCurveTo(340.5, 48.3, 345.1, 51.2, 346.8, 54.7);
        vaulter.bezierCurveTo(347.7, 56.5, 346.5, 59.7, 346.8, 62.0);
        vaulter.bezierCurveTo(347.1, 64.5, 348.9, 66.1, 348.9, 66.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(342.1, 98.8);
        vaulter.bezierCurveTo(342.1, 98.8, 344.7, 106.5, 346.5, 109.2);
        vaulter.bezierCurveTo(348.3, 111.8, 349.4, 114.5, 351.3, 115.5);
        vaulter.bezierCurveTo(351.9, 115.8, 353.1, 116.8, 355.2, 117.0);
        vaulter.bezierCurveTo(360.1, 117.5, 369.8, 117.1, 375.1, 114.9);
        vaulter.bezierCurveTo(379.0, 116.9, 382.9, 119.1, 386.0, 119.9);
        vaulter.bezierCurveTo(386.0, 119.9, 388.0, 121.0, 388.7, 120.2);
        vaulter.bezierCurveTo(389.4, 119.4, 386.3, 115.5, 383.1, 113.8);
        vaulter.bezierCurveTo(379.8, 112.1, 378.2, 109.8, 377.5, 109.2);
        vaulter.bezierCurveTo(376.8, 108.5, 374.3, 107.9, 373.7, 108.9);
        vaulter.bezierCurveTo(373.1, 109.9, 372.1, 110.2, 373.2, 111.6);
        vaulter.bezierCurveTo(365.1, 112.7, 362.9, 110.1, 357.9, 110.8);
        vaulter.bezierCurveTo(357.6, 106.7, 355.5, 102.6, 351.2, 93.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(263.9, 78.7);
        vaulter.bezierCurveTo(263.9, 78.7, 263.8, 77.7, 262.8, 77.9);
        vaulter.bezierCurveTo(261.8, 78.0, 261.9, 78.9, 261.9, 78.9);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(263.9, 78.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(350.1, 69.1);
        vaulter.bezierCurveTo(350.1, 69.1, 352.3, 73.1, 348.6, 78.3);
        vaulter.bezierCurveTo(345.0, 83.6, 340.7, 76.7, 340.5, 74.7);
        vaulter.bezierCurveTo(340.3, 72.7, 340.1, 70.2, 341.5, 67.7);
        vaulter.bezierCurveTo(342.9, 65.3, 346.9, 63.3, 350.1, 69.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(349.8, 72.7);
        vaulter.bezierCurveTo(350.7, 71.2, 351.9, 68.7, 348.4, 63.6);
        vaulter.bezierCurveTo(347.5, 62.3, 345.0, 58.2, 345.0, 58.2);
        vaulter.bezierCurveTo(345.0, 58.2, 343.8, 56.5, 342.9, 55.4);
        vaulter.bezierCurveTo(342.1, 54.2, 340.2, 51.0, 338.8, 49.9);
        vaulter.bezierCurveTo(336.7, 45.2, 334.6, 42.7, 328.2, 35.2);
        vaulter.bezierCurveTo(328.2, 35.2, 327.4, 34.8, 325.8, 33.0);
        vaulter.bezierCurveTo(324.8, 31.8, 320.4, 27.7, 320.4, 27.7);
        vaulter.bezierCurveTo(320.4, 27.7, 319.0, 26.9, 318.4, 27.1);
        vaulter.bezierCurveTo(317.9, 27.3, 318.1, 30.0, 318.6, 30.3);
        vaulter.bezierCurveTo(321.1, 31.7, 321.6, 32.1, 321.9, 32.7);
        vaulter.bezierCurveTo(321.3, 32.5, 321.4, 32.6, 321.2, 32.3);
        vaulter.bezierCurveTo(320.8, 31.8, 319.7, 31.4, 319.6, 31.8);
        vaulter.bezierCurveTo(319.5, 32.3, 320.2, 32.9, 320.5, 33.0);
        vaulter.bezierCurveTo(320.8, 33.0, 321.6, 34.0, 322.3, 34.6);
        vaulter.bezierCurveTo(322.9, 35.0, 323.7, 36.0, 324.3, 36.0);
        vaulter.bezierCurveTo(324.7, 36.1, 325.9, 36.4, 325.9, 36.4);
        vaulter.bezierCurveTo(329.8, 43.3, 331.3, 48.5, 333.9, 53.0);
        vaulter.bezierCurveTo(335.5, 55.8, 339.3, 63.4, 339.3, 63.4);
        vaulter.bezierCurveTo(339.3, 63.4, 341.5, 71.7, 342.6, 72.7);
        vaulter.bezierCurveTo(345.0, 74.7, 348.9, 74.2, 349.8, 72.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(356.9, 88.3);
        vaulter.bezierCurveTo(356.7, 86.6, 354.3, 83.1, 351.7, 80.4);
        vaulter.bezierCurveTo(350.7, 77.2, 349.2, 71.0, 346.6, 67.4);
        vaulter.bezierCurveTo(346.6, 67.4, 342.3, 58.5, 339.1, 52.7);
        vaulter.bezierCurveTo(339.1, 52.7, 335.5, 44.9, 333.0, 45.6);
        vaulter.bezierCurveTo(333.0, 45.6, 331.7, 45.2, 331.7, 45.6);
        vaulter.bezierCurveTo(331.8, 46.1, 331.5, 46.4, 331.4, 46.6);
        vaulter.bezierCurveTo(331.3, 46.9, 331.4, 47.1, 331.3, 47.4);
        vaulter.bezierCurveTo(331.2, 48.1, 331.8, 48.3, 331.8, 48.3);
        vaulter.lineTo(333.1, 50.0);
        vaulter.bezierCurveTo(333.1, 50.0, 333.0, 50.0, 332.9, 50.3);
        vaulter.bezierCurveTo(332.8, 50.7, 333.4, 51.6, 334.2, 52.1);
        vaulter.bezierCurveTo(335.1, 52.6, 335.7, 52.5, 336.7, 53.1);
        vaulter.bezierCurveTo(336.7, 53.1, 339.5, 64.8, 342.4, 69.7);
        vaulter.bezierCurveTo(342.4, 69.7, 343.5, 73.5, 344.7, 76.3);
        vaulter.bezierCurveTo(345.9, 78.9, 346.8, 81.3, 346.8, 81.3);
        vaulter.bezierCurveTo(346.8, 81.3, 346.0, 84.5, 347.9, 90.2);
        vaulter.bezierCurveTo(349.0, 93.5, 352.7, 93.3, 353.9, 92.9);
        vaulter.bezierCurveTo(356.7, 92.1, 357.1, 90.0, 356.9, 88.3);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(355.6, 111.1);
        vaulter.bezierCurveTo(356.2, 111.8, 357.5, 112.2, 359.0, 114.0);
        vaulter.bezierCurveTo(362.1, 117.9, 360.8, 119.1, 362.6, 121.0);
        vaulter.bezierCurveTo(364.8, 123.3, 366.8, 127.4, 366.8, 127.4);
        vaulter.bezierCurveTo(368.9, 125.3, 375.1, 122.7, 380.3, 118.3);
        vaulter.bezierCurveTo(380.3, 118.3, 380.3, 116.3, 381.4, 115.4);
        vaulter.bezierCurveTo(382.4, 114.5, 384.2, 113.2, 385.9, 115.3);
        vaulter.bezierCurveTo(387.6, 117.5, 392.1, 121.4, 393.3, 122.0);
        vaulter.bezierCurveTo(394.5, 122.5, 396.9, 124.2, 396.8, 125.1);
        vaulter.bezierCurveTo(396.6, 126.0, 394.1, 126.0, 393.3, 124.7);
        vaulter.bezierCurveTo(393.3, 124.7, 386.6, 123.8, 383.3, 121.2);
        vaulter.bezierCurveTo(383.3, 121.2, 378.3, 126.5, 376.6, 128.7);
        vaulter.bezierCurveTo(375.0, 130.9, 370.4, 134.5, 367.1, 135.4);
        vaulter.bezierCurveTo(363.9, 136.3, 350.2, 128.6, 346.3, 118.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(347.3, 85.7);
        vaulter.bezierCurveTo(347.3, 85.7, 346.4, 84.3, 345.2, 81.9);
        vaulter.bezierCurveTo(344.9, 81.1, 344.5, 80.2, 344.1, 79.2);
        vaulter.bezierCurveTo(342.5, 75.0, 344.5, 69.6, 349.1, 68.5);
        vaulter.bezierCurveTo(353.9, 67.3, 357.4, 71.4, 357.9, 75.3);
        vaulter.bezierCurveTo(358.1, 77.2, 356.0, 79.9, 355.5, 82.2);
        vaulter.bezierCurveTo(355.0, 84.7, 356.2, 86.7, 356.2, 86.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(342.1, 94.1);
        vaulter.bezierCurveTo(342.3, 97.4, 344.2, 101.6, 344.1, 108.5);
        vaulter.bezierCurveTo(344.0, 113.6, 344.7, 114.7, 345.0, 116.3);
        vaulter.bezierCurveTo(345.6, 119.6, 346.3, 120.0, 350.5, 120.0);
        vaulter.bezierCurveTo(354.8, 120.1, 355.6, 118.6, 356.7, 116.5);
        vaulter.bezierCurveTo(357.3, 115.2, 356.1, 109.4, 357.3, 105.3);
        vaulter.bezierCurveTo(358.1, 102.4, 359.1, 94.5, 359.1, 92.1);
        vaulter.bezierCurveTo(359.2, 90.1, 357.4, 87.7, 356.9, 86.6);
        vaulter.bezierCurveTo(355.9, 84.6, 352.7, 84.3, 348.4, 85.2);
        vaulter.bezierCurveTo(344.8, 85.9, 341.9, 90.9, 342.1, 94.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(345.5, 117.6);
        vaulter.bezierCurveTo(345.5, 117.6, 349.9, 125.8, 352.1, 128.1);
        vaulter.bezierCurveTo(354.3, 130.4, 355.8, 132.9, 357.9, 133.6);
        vaulter.bezierCurveTo(358.5, 133.8, 359.8, 134.6, 362.0, 134.5);
        vaulter.bezierCurveTo(366.9, 134.1, 376.5, 129.4, 380.5, 125.3);
        vaulter.bezierCurveTo(385.0, 125.8, 389.4, 126.5, 392.5, 126.0);
        vaulter.bezierCurveTo(392.5, 126.0, 394.8, 126.4, 395.2, 125.3);
        vaulter.bezierCurveTo(395.6, 124.3, 391.3, 121.8, 387.6, 121.4);
        vaulter.bezierCurveTo(384.0, 121.0, 381.6, 119.5, 380.7, 119.1);
        vaulter.bezierCurveTo(379.9, 118.8, 377.4, 119.2, 377.1, 120.3);
        vaulter.bezierCurveTo(376.9, 121.1, 376.8, 121.5, 376.1, 122.1);
        vaulter.bezierCurveTo(369.1, 126.1, 368.4, 125.3, 363.7, 126.8);
        vaulter.bezierCurveTo(362.7, 122.8, 362.0, 120.7, 356.2, 112.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(357.8, 91.0);
        vaulter.bezierCurveTo(358.3, 94.4, 356.5, 99.0, 353.5, 99.4);
        vaulter.bezierCurveTo(350.2, 99.9, 347.2, 96.5, 346.8, 92.3);
        vaulter.bezierCurveTo(346.3, 88.0, 349.4, 85.1, 352.2, 84.8);
        vaulter.bezierCurveTo(354.7, 84.4, 357.2, 86.7, 357.8, 91.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(259.3, 79.2);
        vaulter.bezierCurveTo(259.3, 79.2, 259.2, 78.3, 258.2, 78.4);
        vaulter.bezierCurveTo(257.2, 78.6, 257.3, 79.5, 257.3, 79.5);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(259.3, 79.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(357.2, 88.7);
        vaulter.bezierCurveTo(357.2, 87.4, 356.9, 85.6, 355.9, 83.3);
        vaulter.bezierCurveTo(355.3, 81.9, 353.7, 77.3, 353.7, 77.3);
        vaulter.bezierCurveTo(353.7, 77.3, 352.8, 75.4, 352.2, 74.1);
        vaulter.bezierCurveTo(351.6, 72.8, 350.4, 69.3, 349.2, 67.9);
        vaulter.bezierCurveTo(348.1, 62.9, 346.6, 60.1, 341.7, 51.4);
        vaulter.bezierCurveTo(341.7, 51.4, 341.1, 50.9, 339.8, 48.8);
        vaulter.bezierCurveTo(339.1, 47.5, 335.6, 42.5, 335.6, 42.5);
        vaulter.bezierCurveTo(335.6, 42.5, 334.4, 41.5, 333.8, 41.6);
        vaulter.bezierCurveTo(333.2, 41.7, 332.9, 44.3, 333.3, 44.7);
        vaulter.bezierCurveTo(335.5, 46.6, 335.9, 47.0, 336.0, 47.8);
        vaulter.bezierCurveTo(335.5, 47.4, 335.6, 47.5, 335.4, 47.2);
        vaulter.bezierCurveTo(335.1, 46.6, 334.1, 46.0, 334.0, 46.4);
        vaulter.bezierCurveTo(333.8, 46.9, 334.3, 47.6, 334.6, 47.7);
        vaulter.bezierCurveTo(334.9, 47.8, 335.5, 48.9, 336.1, 49.6);
        vaulter.bezierCurveTo(336.5, 50.2, 337.2, 51.3, 337.7, 51.5);
        vaulter.bezierCurveTo(338.1, 51.6, 339.2, 52.1, 339.2, 52.1);
        vaulter.bezierCurveTo(341.7, 59.7, 342.1, 65.0, 343.8, 70.0);
        vaulter.bezierCurveTo(344.8, 73.1, 347.0, 81.3, 347.0, 81.3);
        vaulter.bezierCurveTo(347.0, 81.3, 347.5, 89.8, 348.4, 91.0);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(363.9, 103.0);
        vaulter.bezierCurveTo(364.1, 101.3, 362.3, 97.5, 360.3, 94.5);
        vaulter.bezierCurveTo(359.8, 91.2, 359.3, 85.0, 357.5, 81.1);
        vaulter.bezierCurveTo(357.5, 81.1, 354.7, 71.8, 352.6, 65.6);
        vaulter.bezierCurveTo(352.6, 65.6, 350.5, 57.5, 347.9, 57.7);
        vaulter.bezierCurveTo(347.9, 57.7, 346.8, 57.1, 346.7, 57.6);
        vaulter.bezierCurveTo(346.7, 58.1, 346.3, 58.3, 346.2, 58.5);
        vaulter.bezierCurveTo(346.1, 58.7, 346.2, 58.9, 346.0, 59.3);
        vaulter.bezierCurveTo(345.8, 59.8, 346.4, 60.2, 346.4, 60.2);
        vaulter.lineTo(347.3, 62.0);
        vaulter.bezierCurveTo(347.3, 62.0, 347.2, 62.0, 347.1, 62.3);
        vaulter.bezierCurveTo(346.9, 62.6, 347.3, 63.7, 348.1, 64.3);
        vaulter.bezierCurveTo(348.9, 64.9, 349.4, 64.9, 350.3, 65.6);
        vaulter.bezierCurveTo(350.3, 65.6, 351.1, 77.4, 353.0, 82.6);
        vaulter.bezierCurveTo(353.0, 82.6, 353.5, 86.5, 354.2, 89.3);
        vaulter.bezierCurveTo(354.8, 92.1, 355.3, 94.6, 355.3, 94.6);
        vaulter.bezierCurveTo(355.3, 94.6, 354.1, 97.5, 354.9, 103.3);
        vaulter.bezierCurveTo(355.4, 106.7, 359.0, 107.1, 360.3, 107.0);
        vaulter.bezierCurveTo(363.1, 106.6, 363.8, 104.7, 363.9, 103.0);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(358.5, 125.9);
        vaulter.bezierCurveTo(359.1, 126.6, 359.8, 127.7, 360.7, 129.2);
        vaulter.bezierCurveTo(362.3, 131.8, 362.6, 133.7, 363.3, 136.6);
        vaulter.bezierCurveTo(364.0, 139.6, 366.1, 143.0, 366.1, 143.0);
        vaulter.bezierCurveTo(369.0, 140.6, 375.8, 139.0, 381.5, 135.8);
        vaulter.bezierCurveTo(381.5, 135.8, 381.9, 133.9, 383.0, 133.2);
        vaulter.bezierCurveTo(384.2, 132.5, 386.2, 131.5, 387.4, 133.9);
        vaulter.bezierCurveTo(388.7, 136.3, 392.4, 140.8, 393.5, 141.5);
        vaulter.bezierCurveTo(394.5, 142.2, 396.6, 144.3, 396.3, 145.2);
        vaulter.bezierCurveTo(396.0, 146.0, 393.6, 145.6, 393.0, 144.2);
        vaulter.bezierCurveTo(393.0, 144.2, 386.7, 142.2, 383.9, 139.1);
        vaulter.bezierCurveTo(383.9, 139.1, 378.2, 143.4, 376.3, 145.3);
        vaulter.bezierCurveTo(374.3, 147.1, 367.6, 149.7, 364.3, 150.1);
        vaulter.bezierCurveTo(361.0, 150.4, 350.8, 140.8, 348.7, 130.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(355.3, 98.8);
        vaulter.bezierCurveTo(355.3, 98.8, 354.6, 97.3, 353.9, 94.8);
        vaulter.bezierCurveTo(353.7, 93.9, 353.5, 93.0, 353.3, 91.9);
        vaulter.bezierCurveTo(352.4, 87.7, 355.3, 82.8, 359.9, 82.4);
        vaulter.bezierCurveTo(364.8, 82.1, 367.4, 86.7, 367.2, 90.5);
        vaulter.bezierCurveTo(367.2, 92.4, 364.6, 94.7, 363.8, 96.8);
        vaulter.bezierCurveTo(362.9, 99.1, 363.8, 101.3, 363.8, 101.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(348.6, 106.1);
        vaulter.bezierCurveTo(348.3, 109.3, 349.4, 113.7, 348.2, 120.3);
        vaulter.bezierCurveTo(347.2, 125.3, 347.7, 126.4, 347.8, 128.0);
        vaulter.bezierCurveTo(347.8, 131.3, 348.4, 131.8, 352.5, 132.6);
        vaulter.bezierCurveTo(356.6, 133.4, 357.6, 132.1, 359.0, 130.2);
        vaulter.bezierCurveTo(359.8, 129.1, 359.6, 123.2, 361.5, 119.4);
        vaulter.bezierCurveTo(362.8, 116.8, 365.0, 109.3, 365.5, 107.0);
        vaulter.bezierCurveTo(365.8, 105.1, 364.5, 102.5, 364.2, 101.3);
        vaulter.bezierCurveTo(363.5, 99.2, 360.5, 98.5, 356.3, 98.6);
        vaulter.bezierCurveTo(352.6, 98.7, 349.0, 103.0, 348.6, 106.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(348.0, 129.4);
        vaulter.bezierCurveTo(348.0, 129.4, 350.9, 138.0, 352.7, 140.6);
        vaulter.bezierCurveTo(354.4, 143.2, 355.4, 145.9, 357.3, 146.9);
        vaulter.bezierCurveTo(357.9, 147.2, 359.1, 148.2, 361.1, 148.4);
        vaulter.bezierCurveTo(365.9, 148.9, 376.0, 145.9, 380.6, 142.7);
        vaulter.bezierCurveTo(384.8, 143.8, 388.9, 145.2, 392.0, 145.3);
        vaulter.bezierCurveTo(392.0, 145.3, 394.2, 146.1, 394.7, 145.1);
        vaulter.bezierCurveTo(395.3, 144.2, 391.5, 141.0, 388.1, 140.1);
        vaulter.bezierCurveTo(384.6, 139.1, 382.6, 137.2, 381.8, 136.7);
        vaulter.bezierCurveTo(381.1, 136.2, 378.5, 136.2, 378.1, 137.2);
        vaulter.bezierCurveTo(377.8, 138.0, 377.7, 138.4, 376.9, 138.8);
        vaulter.bezierCurveTo(369.4, 141.5, 368.9, 140.6, 364.1, 141.3);
        vaulter.bezierCurveTo(363.7, 137.3, 363.4, 135.1, 359.2, 126.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(364.3, 106.8);
        vaulter.bezierCurveTo(363.6, 110.1, 360.4, 113.8, 357.4, 113.2);
        vaulter.bezierCurveTo(354.1, 112.6, 352.5, 108.3, 353.4, 104.3);
        vaulter.bezierCurveTo(354.4, 100.0, 358.3, 98.4, 361.0, 99.0);
        vaulter.bezierCurveTo(363.5, 99.5, 365.2, 102.5, 364.3, 106.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(254.6, 79.9);
        vaulter.bezierCurveTo(254.6, 79.9, 254.5, 79.0, 253.5, 79.1);
        vaulter.bezierCurveTo(252.5, 79.3, 252.6, 80.2, 252.6, 80.2);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(254.6, 79.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(363.9, 104.1);
        vaulter.bezierCurveTo(364.4, 102.7, 364.5, 100.8, 363.8, 98.0);
        vaulter.bezierCurveTo(363.4, 96.5, 362.6, 91.8, 362.6, 91.8);
        vaulter.bezierCurveTo(362.6, 91.8, 362.1, 89.9, 361.7, 88.5);
        vaulter.bezierCurveTo(361.4, 87.1, 360.8, 83.6, 359.9, 82.0);
        vaulter.bezierCurveTo(359.6, 77.0, 358.6, 74.0, 355.4, 64.8);
        vaulter.bezierCurveTo(355.4, 64.8, 354.9, 64.2, 354.0, 62.0);
        vaulter.bezierCurveTo(353.5, 60.6, 350.9, 55.2, 350.9, 55.2);
        vaulter.bezierCurveTo(350.9, 55.2, 350.0, 54.0, 349.4, 54.0);
        vaulter.bezierCurveTo(348.8, 54.0, 348.0, 56.5, 348.4, 57.0);
        vaulter.bezierCurveTo(350.2, 59.2, 350.5, 59.6, 350.5, 60.4);
        vaulter.bezierCurveTo(350.1, 60.0, 350.1, 60.0, 350.0, 59.7);
        vaulter.bezierCurveTo(349.8, 59.1, 349.0, 58.3, 348.7, 58.7);
        vaulter.bezierCurveTo(348.5, 59.1, 348.9, 59.9, 349.2, 60.1);
        vaulter.bezierCurveTo(349.4, 60.3, 349.8, 61.4, 350.2, 62.2);
        vaulter.bezierCurveTo(350.6, 62.8, 351.1, 64.0, 351.5, 64.2);
        vaulter.bezierCurveTo(351.9, 64.4, 352.9, 65.1, 352.9, 65.1);
        vaulter.bezierCurveTo(354.0, 72.9, 353.5, 78.1, 354.3, 83.1);
        vaulter.bezierCurveTo(354.8, 86.2, 355.6, 94.6, 355.6, 94.6);
        vaulter.bezierCurveTo(355.6, 94.6, 354.6, 102.9, 355.3, 104.2);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(375.2, 138.7);
        vaulter.bezierCurveTo(375.7, 137.1, 374.9, 133.1, 373.6, 129.8);
        vaulter.bezierCurveTo(373.9, 126.6, 375.0, 120.5, 374.1, 116.4);
        vaulter.bezierCurveTo(374.1, 116.4, 373.4, 105.6, 372.9, 99.2);
        vaulter.bezierCurveTo(372.9, 99.2, 368.2, 93.1, 366.0, 94.2);
        vaulter.bezierCurveTo(366.0, 94.2, 364.7, 94.0, 364.8, 94.5);
        vaulter.bezierCurveTo(365.0, 94.9, 364.7, 95.3, 364.7, 95.5);
        vaulter.bezierCurveTo(364.6, 95.7, 364.8, 95.9, 364.8, 96.2);
        vaulter.bezierCurveTo(364.7, 96.8, 365.4, 96.9, 365.4, 96.9);
        vaulter.lineTo(366.9, 98.4);
        vaulter.bezierCurveTo(366.9, 98.4, 367.0, 98.4, 367.0, 98.7);
        vaulter.bezierCurveTo(367.0, 98.8, 365.8, 98.3, 365.9, 99.1);
        vaulter.bezierCurveTo(366.0, 99.5, 367.7, 99.9, 368.3, 100.1);
        vaulter.bezierCurveTo(369.3, 100.4, 370.1, 99.1, 370.8, 100.0);
        vaulter.bezierCurveTo(370.8, 100.0, 368.8, 111.3, 369.5, 116.8);
        vaulter.bezierCurveTo(369.5, 116.8, 369.0, 120.6, 369.0, 123.5);
        vaulter.bezierCurveTo(369.0, 126.2, 368.9, 128.7, 368.9, 128.7);
        vaulter.bezierCurveTo(368.9, 128.7, 367.0, 131.2, 366.5, 137.0);
        vaulter.bezierCurveTo(366.2, 140.3, 369.5, 141.5, 370.8, 141.7);
        vaulter.bezierCurveTo(373.5, 142.0, 374.7, 140.3, 375.2, 138.7);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(363.8, 160.5);
        vaulter.bezierCurveTo(362.4, 165.1, 362.1, 168.3, 360.2, 170.6);
        vaulter.bezierCurveTo(358.2, 172.8, 356.9, 175.7, 356.9, 175.7);
        vaulter.bezierCurveTo(359.6, 175.4, 360.6, 176.4, 370.0, 182.5);
        vaulter.bezierCurveTo(370.0, 182.5, 371.8, 181.7, 373.0, 182.2);
        vaulter.bezierCurveTo(374.2, 182.7, 376.1, 183.7, 375.0, 186.1);
        vaulter.bezierCurveTo(373.8, 188.5, 372.3, 194.0, 372.4, 195.3);
        vaulter.bezierCurveTo(372.5, 196.5, 372.1, 199.3, 371.2, 199.6);
        vaulter.bezierCurveTo(370.3, 199.8, 369.3, 197.7, 370.0, 196.4);
        vaulter.bezierCurveTo(370.0, 196.4, 368.0, 190.3, 368.8, 186.3);
        vaulter.bezierCurveTo(368.8, 186.3, 362.1, 184.3, 359.5, 183.8);
        vaulter.bezierCurveTo(357.0, 183.3, 351.4, 183.9, 349.3, 181.5);
        vaulter.bezierCurveTo(347.4, 179.5, 348.0, 165.8, 352.7, 157.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(367.9, 132.2);
        vaulter.bezierCurveTo(367.9, 132.2, 367.7, 130.4, 367.8, 127.5);
        vaulter.bezierCurveTo(367.8, 126.6, 367.9, 125.5, 368.1, 124.4);
        vaulter.bezierCurveTo(368.6, 119.7, 373.3, 115.6, 378.1, 116.8);
        vaulter.bezierCurveTo(383.3, 118.0, 384.5, 123.7, 383.0, 127.6);
        vaulter.bezierCurveTo(382.3, 129.5, 378.9, 131.0, 377.3, 133.0);
        vaulter.bezierCurveTo(375.7, 135.1, 375.8, 137.6, 375.8, 137.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(359.9, 137.4);
        vaulter.bezierCurveTo(358.6, 140.2, 358.3, 144.7, 355.1, 150.4);
        vaulter.bezierCurveTo(352.8, 154.8, 352.9, 156.0, 352.4, 157.5);
        vaulter.bezierCurveTo(351.5, 160.6, 351.9, 161.2, 355.5, 163.2);
        vaulter.bezierCurveTo(359.0, 165.1, 360.4, 164.3, 362.3, 162.9);
        vaulter.bezierCurveTo(363.4, 162.1, 364.9, 156.6, 367.8, 153.6);
        vaulter.bezierCurveTo(369.8, 151.5, 374.2, 145.2, 375.3, 143.3);
        vaulter.bezierCurveTo(376.2, 141.6, 375.8, 138.7, 375.8, 137.6);
        vaulter.bezierCurveTo(375.8, 135.4, 373.3, 133.8, 369.3, 132.6);
        vaulter.bezierCurveTo(365.8, 131.6, 361.1, 134.5, 359.9, 137.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(352.7, 156.7);
        vaulter.bezierCurveTo(352.7, 156.7, 349.6, 165.0, 349.3, 168.1);
        vaulter.bezierCurveTo(349.0, 171.1, 347.8, 176.8, 348.5, 178.7);
        vaulter.bezierCurveTo(348.8, 179.3, 349.4, 179.8, 350.8, 181.2);
        vaulter.bezierCurveTo(354.1, 184.6, 362.3, 186.5, 367.8, 186.9);
        vaulter.bezierCurveTo(370.2, 190.4, 368.9, 195.0, 370.1, 197.8);
        vaulter.bezierCurveTo(370.1, 197.8, 370.3, 200.0, 371.4, 200.1);
        vaulter.bezierCurveTo(372.4, 200.2, 373.7, 195.6, 373.2, 192.1);
        vaulter.bezierCurveTo(372.7, 188.7, 373.6, 186.1, 373.7, 185.2);
        vaulter.bezierCurveTo(373.9, 184.3, 372.8, 182.3, 371.8, 182.1);
        vaulter.bezierCurveTo(371.0, 181.9, 369.5, 182.0, 368.7, 181.8);
        vaulter.bezierCurveTo(361.4, 179.1, 361.5, 178.2, 357.5, 175.7);
        vaulter.bezierCurveTo(359.7, 172.5, 361.6, 169.4, 363.9, 160.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(374.3, 143.7);
        vaulter.bezierCurveTo(372.9, 146.9, 368.9, 149.8, 366.2, 148.5);
        vaulter.bezierCurveTo(363.1, 147.2, 362.4, 142.7, 364.2, 139.0);
        vaulter.bezierCurveTo(366.1, 135.0, 370.3, 134.3, 372.8, 135.4);
        vaulter.bezierCurveTo(375.2, 136.5, 376.1, 139.7, 374.3, 143.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(254.6, 79.9);
        vaulter.bezierCurveTo(254.6, 79.9, 254.5, 79.0, 253.5, 79.1);
        vaulter.bezierCurveTo(252.5, 79.3, 252.6, 80.2, 252.6, 80.2);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(254.6, 79.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(375.3, 139.3);
        vaulter.bezierCurveTo(375.9, 138.2, 376.4, 136.8, 376.7, 134.7);
        vaulter.bezierCurveTo(376.9, 133.2, 377.8, 128.6, 377.8, 128.6);
        vaulter.bezierCurveTo(377.8, 128.6, 378.0, 126.6, 378.1, 125.3);
        vaulter.bezierCurveTo(378.3, 123.9, 379.1, 120.5, 378.8, 118.7);
        vaulter.bezierCurveTo(380.3, 114.0, 380.5, 111.0, 380.8, 101.4);
        vaulter.bezierCurveTo(380.8, 101.4, 380.3, 100.3, 379.3, 98.2);
        vaulter.bezierCurveTo(378.8, 96.8, 376.0, 91.7, 376.0, 91.7);
        vaulter.bezierCurveTo(376.0, 91.7, 375.0, 90.6, 374.4, 90.6);
        vaulter.bezierCurveTo(373.8, 90.6, 373.2, 93.1, 373.6, 93.6);
        vaulter.bezierCurveTo(375.5, 95.6, 375.7, 96.1, 375.8, 96.8);
        vaulter.bezierCurveTo(375.4, 96.4, 375.5, 96.5, 375.3, 96.1);
        vaulter.bezierCurveTo(375.1, 95.5, 374.2, 94.8, 374.0, 95.2);
        vaulter.bezierCurveTo(373.8, 95.6, 374.2, 96.4, 374.5, 96.5);
        vaulter.bezierCurveTo(374.8, 96.7, 375.2, 97.8, 375.7, 98.5);
        vaulter.bezierCurveTo(376.0, 99.1, 376.6, 100.3, 377.0, 100.5);
        vaulter.bezierCurveTo(377.4, 100.7, 378.4, 100.8, 378.4, 100.8);
        vaulter.bezierCurveTo(376.7, 108.3, 374.4, 112.8, 373.3, 117.7);
        vaulter.bezierCurveTo(372.6, 120.8, 370.3, 128.6, 370.3, 128.6);
        vaulter.bezierCurveTo(370.3, 128.6, 366.5, 135.9, 366.7, 137.3);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(388.1, 142.6);
        vaulter.bezierCurveTo(387.9, 140.9, 385.4, 137.4, 382.8, 134.8);
        vaulter.bezierCurveTo(381.7, 131.5, 380.2, 125.4, 377.6, 121.8);
        vaulter.bezierCurveTo(377.6, 121.8, 372.4, 111.9, 369.1, 106.0);
        vaulter.bezierCurveTo(369.1, 106.0, 362.1, 102.1, 360.5, 104.1);
        vaulter.bezierCurveTo(360.5, 104.1, 359.2, 104.5, 359.5, 104.9);
        vaulter.bezierCurveTo(359.8, 105.3, 359.7, 105.7, 359.8, 105.9);
        vaulter.bezierCurveTo(359.8, 106.1, 360.0, 106.2, 360.2, 106.6);
        vaulter.bezierCurveTo(360.4, 107.2, 361.1, 107.0, 361.1, 107.0);
        vaulter.lineTo(363.1, 107.7);
        vaulter.bezierCurveTo(363.1, 107.7, 363.3, 107.7, 363.3, 108.0);
        vaulter.bezierCurveTo(363.4, 108.1, 362.0, 108.1, 362.5, 108.8);
        vaulter.bezierCurveTo(362.8, 109.2, 364.5, 108.9, 365.2, 108.8);
        vaulter.bezierCurveTo(366.2, 108.7, 366.5, 107.1, 367.5, 107.6);
        vaulter.bezierCurveTo(367.5, 107.6, 370.4, 119.2, 373.4, 124.2);
        vaulter.bezierCurveTo(373.4, 124.2, 374.5, 128.0, 375.7, 130.7);
        vaulter.bezierCurveTo(376.9, 133.3, 377.9, 135.7, 377.9, 135.7);
        vaulter.bezierCurveTo(377.9, 135.7, 377.2, 138.9, 379.1, 144.6);
        vaulter.bezierCurveTo(380.2, 147.9, 383.9, 147.7, 385.1, 147.3);
        vaulter.bezierCurveTo(387.9, 146.4, 388.2, 144.3, 388.1, 142.6);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(374.7, 169.8);
        vaulter.bezierCurveTo(371.2, 173.3, 369.4, 176.2, 366.5, 177.3);
        vaulter.bezierCurveTo(363.6, 178.5, 361.1, 180.5, 361.1, 180.5);
        vaulter.bezierCurveTo(363.7, 181.5, 364.1, 182.9, 369.9, 193.0);
        vaulter.bezierCurveTo(369.9, 193.0, 371.9, 193.2, 372.8, 194.2);
        vaulter.bezierCurveTo(373.7, 195.2, 375.0, 197.1, 372.8, 198.7);
        vaulter.bezierCurveTo(370.5, 200.4, 366.6, 204.8, 366.0, 206.0);
        vaulter.bezierCurveTo(365.5, 207.2, 363.7, 209.6, 362.8, 209.4);
        vaulter.bezierCurveTo(361.9, 209.2, 362.0, 206.8, 363.3, 205.9);
        vaulter.bezierCurveTo(363.3, 205.9, 364.4, 199.3, 367.0, 196.0);
        vaulter.bezierCurveTo(367.0, 196.0, 361.7, 190.9, 359.6, 189.2);
        vaulter.bezierCurveTo(357.4, 187.6, 352.1, 185.5, 351.2, 182.2);
        vaulter.bezierCurveTo(350.4, 179.4, 357.6, 167.1, 366.0, 161.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(380.5, 138.0);
        vaulter.bezierCurveTo(380.5, 138.0, 380.6, 136.4, 381.1, 133.7);
        vaulter.bezierCurveTo(381.3, 132.9, 381.6, 131.9, 381.8, 130.8);
        vaulter.bezierCurveTo(383.0, 126.6, 387.9, 123.4, 392.2, 125.2);
        vaulter.bezierCurveTo(396.9, 127.2, 397.1, 132.6, 395.2, 136.0);
        vaulter.bezierCurveTo(394.3, 137.7, 390.9, 138.6, 389.2, 140.2);
        vaulter.bezierCurveTo(387.3, 141.8, 387.1, 144.2, 387.1, 144.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(372.6, 143.3);
        vaulter.bezierCurveTo(371.3, 146.2, 371.0, 150.9, 367.7, 156.9);
        vaulter.bezierCurveTo(365.2, 161.4, 365.4, 162.7, 364.9, 164.2);
        vaulter.bezierCurveTo(363.9, 167.4, 363.6, 167.9, 367.4, 169.9);
        vaulter.bezierCurveTo(371.1, 172.0, 372.5, 171.0, 374.5, 169.6);
        vaulter.bezierCurveTo(375.6, 168.8, 380.1, 157.6, 383.1, 154.5);
        vaulter.bezierCurveTo(385.2, 152.3, 386.8, 151.2, 388.0, 149.2);
        vaulter.bezierCurveTo(389.0, 147.4, 388.5, 144.5, 388.5, 143.3);
        vaulter.bezierCurveTo(388.6, 141.0, 385.9, 139.3, 381.8, 138.1);
        vaulter.bezierCurveTo(378.2, 137.0, 373.9, 140.3, 372.6, 143.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(366.2, 160.9);
        vaulter.bezierCurveTo(366.2, 160.9, 359.4, 167.1, 357.6, 169.8);
        vaulter.bezierCurveTo(355.9, 172.4, 352.1, 177.1, 351.9, 179.3);
        vaulter.bezierCurveTo(351.8, 179.9, 352.1, 180.7, 352.7, 182.7);
        vaulter.bezierCurveTo(354.2, 187.4, 360.8, 193.0, 365.7, 196.0);
        vaulter.bezierCurveTo(366.3, 200.5, 363.0, 204.1, 362.7, 207.2);
        vaulter.bezierCurveTo(362.7, 207.2, 361.8, 209.4, 362.7, 210.0);
        vaulter.bezierCurveTo(363.7, 210.6, 367.1, 207.0, 368.3, 203.5);
        vaulter.bezierCurveTo(369.5, 200.0, 371.5, 198.1, 372.0, 197.3);
        vaulter.bezierCurveTo(372.6, 196.6, 372.6, 194.2, 371.8, 193.5);
        vaulter.bezierCurveTo(371.1, 193.0, 369.7, 192.3, 369.0, 191.7);
        vaulter.bezierCurveTo(363.5, 185.8, 364.1, 185.0, 361.6, 180.7);
        vaulter.bezierCurveTo(365.2, 178.8, 368.4, 176.9, 375.1, 169.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(387.5, 147.0);
        vaulter.bezierCurveTo(386.1, 150.2, 382.1, 153.1, 379.4, 151.8);
        vaulter.bezierCurveTo(376.3, 150.5, 375.6, 146.0, 377.4, 142.3);
        vaulter.bezierCurveTo(379.3, 138.3, 383.5, 137.6, 386.0, 138.7);
        vaulter.bezierCurveTo(388.4, 139.8, 389.3, 143.0, 387.5, 147.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(249.8, 80.6);
        vaulter.bezierCurveTo(249.8, 80.6, 249.7, 79.7, 248.7, 79.9);
        vaulter.bezierCurveTo(247.7, 80.1, 247.9, 81.0, 247.9, 81.0);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(249.8, 80.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(388.2, 144.1);
        vaulter.bezierCurveTo(388.6, 142.7, 388.5, 140.8, 387.8, 138.1);
        vaulter.bezierCurveTo(387.3, 136.6, 386.3, 131.9, 386.3, 131.9);
        vaulter.bezierCurveTo(386.3, 131.9, 385.6, 129.9, 385.2, 128.6);
        vaulter.bezierCurveTo(384.8, 127.2, 384.0, 123.6, 383.0, 122.1);
        vaulter.bezierCurveTo(382.5, 116.9, 381.4, 113.9, 377.6, 104.7);
        vaulter.bezierCurveTo(377.6, 104.7, 376.7, 103.9, 374.9, 102.2);
        vaulter.bezierCurveTo(373.7, 101.2, 369.0, 97.5, 369.0, 97.5);
        vaulter.bezierCurveTo(369.0, 97.5, 367.5, 96.9, 367.0, 97.2);
        vaulter.bezierCurveTo(366.4, 97.4, 366.9, 100.0, 367.5, 100.3);
        vaulter.bezierCurveTo(370.1, 101.5, 370.5, 101.8, 370.9, 102.4);
        vaulter.bezierCurveTo(370.3, 102.2, 370.4, 102.3, 370.2, 102.0);
        vaulter.bezierCurveTo(369.7, 101.6, 368.6, 101.3, 368.5, 101.7);
        vaulter.bezierCurveTo(368.5, 102.2, 369.2, 102.7, 369.6, 102.8);
        vaulter.bezierCurveTo(369.9, 102.8, 370.7, 103.7, 371.5, 104.2);
        vaulter.bezierCurveTo(372.1, 104.6, 373.1, 105.4, 373.6, 105.5);
        vaulter.bezierCurveTo(374.0, 105.5, 375.0, 105.2, 375.0, 105.2);
        vaulter.bezierCurveTo(376.6, 113.0, 376.3, 118.3, 377.4, 123.4);
        vaulter.bezierCurveTo(378.0, 126.6, 379.2, 135.0, 379.2, 135.0);
        vaulter.bezierCurveTo(379.2, 135.0, 378.8, 141.4, 379.1, 144.0);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(393.4, 160.2);
        vaulter.bezierCurveTo(392.1, 159.1, 387.9, 158.3, 384.2, 158.2);
        vaulter.bezierCurveTo(381.2, 156.6, 375.7, 153.3, 371.4, 152.6);
        vaulter.bezierCurveTo(353.8, 146.7, 364.6, 150.2, 354.4, 147.1);
        vaulter.bezierCurveTo(354.4, 147.1, 349.6, 142.6, 347.5, 144.1);
        vaulter.bezierCurveTo(347.5, 144.1, 346.7, 144.1, 346.6, 144.6);
        vaulter.bezierCurveTo(346.5, 145.1, 346.3, 145.4, 346.3, 145.6);
        vaulter.bezierCurveTo(346.3, 145.9, 346.5, 146.0, 346.6, 146.4);
        vaulter.bezierCurveTo(346.6, 147.0, 347.3, 147.0, 347.3, 147.0);
        vaulter.bezierCurveTo(347.3, 147.0, 348.6, 147.6, 349.0, 147.6);
        vaulter.bezierCurveTo(350.2, 147.6, 350.5, 148.5, 350.3, 148.5);
        vaulter.bezierCurveTo(350.0, 148.5, 349.3, 148.6, 349.2, 148.6);
        vaulter.bezierCurveTo(348.7, 148.5, 347.3, 148.1, 347.6, 148.9);
        vaulter.bezierCurveTo(347.8, 149.3, 350.2, 149.7, 350.9, 149.8);
        vaulter.bezierCurveTo(351.9, 149.9, 353.2, 149.6, 354.3, 149.4);
        vaulter.bezierCurveTo(354.3, 149.4, 364.5, 155.7, 370.1, 157.1);
        vaulter.bezierCurveTo(370.1, 157.1, 373.5, 159.1, 376.3, 160.2);
        vaulter.bezierCurveTo(378.9, 161.2, 381.3, 162.3, 381.3, 162.3);
        vaulter.bezierCurveTo(381.3, 162.3, 383.0, 165.1, 388.4, 167.8);
        vaulter.bezierCurveTo(391.5, 169.4, 393.9, 166.7, 394.5, 165.6);
        vaulter.bezierCurveTo(395.9, 163.0, 394.7, 161.3, 393.4, 160.2);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(379.6, 191.3);
        vaulter.bezierCurveTo(375.0, 193.0, 372.1, 194.9, 369.0, 194.7);
        vaulter.bezierCurveTo(366.0, 194.6, 362.8, 195.3, 362.8, 195.3);
        vaulter.bezierCurveTo(364.7, 197.4, 364.5, 198.8, 365.5, 210.4);
        vaulter.bezierCurveTo(365.5, 210.4, 367.3, 211.4, 367.7, 212.7);
        vaulter.bezierCurveTo(368.1, 214.0, 368.5, 216.2, 365.8, 216.8);
        vaulter.bezierCurveTo(363.0, 217.4, 357.6, 219.7, 356.6, 220.6);
        vaulter.bezierCurveTo(355.6, 221.4, 353.0, 222.9, 352.2, 222.3);
        vaulter.bezierCurveTo(351.5, 221.8, 352.6, 219.6, 354.1, 219.4);
        vaulter.bezierCurveTo(354.1, 219.4, 357.9, 213.8, 361.6, 211.9);
        vaulter.bezierCurveTo(361.6, 211.9, 359.0, 205.1, 357.8, 202.7);
        vaulter.bezierCurveTo(356.5, 200.2, 352.5, 196.1, 353.1, 192.8);
        vaulter.bezierCurveTo(353.6, 189.9, 365.3, 181.7, 375.3, 180.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(388.0, 158.9);
        vaulter.bezierCurveTo(388.0, 158.9, 388.0, 157.2, 388.6, 154.6);
        vaulter.bezierCurveTo(388.8, 153.7, 389.0, 152.7, 389.3, 151.7);
        vaulter.bezierCurveTo(390.5, 147.4, 395.4, 144.3, 399.7, 146.1);
        vaulter.bezierCurveTo(404.3, 148.0, 404.6, 153.5, 402.7, 156.9);
        vaulter.bezierCurveTo(401.7, 158.5, 398.4, 159.4, 396.6, 161.0);
        vaulter.bezierCurveTo(394.8, 162.7, 394.5, 165.0, 394.5, 165.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(379.6, 163.2);
        vaulter.bezierCurveTo(378.2, 166.1, 377.9, 170.8, 374.6, 176.8);
        vaulter.bezierCurveTo(372.1, 181.3, 372.3, 182.5, 371.8, 184.1);
        vaulter.bezierCurveTo(370.8, 187.3, 371.2, 188.0, 375.0, 190.0);
        vaulter.bezierCurveTo(378.7, 192.1, 380.1, 191.1, 382.0, 189.7);
        vaulter.bezierCurveTo(383.2, 188.9, 384.8, 183.2, 387.8, 180.1);
        vaulter.bezierCurveTo(389.9, 177.9, 394.4, 171.4, 395.6, 169.3);
        vaulter.bezierCurveTo(396.6, 167.6, 396.1, 164.6, 396.1, 163.4);
        vaulter.bezierCurveTo(396.2, 161.1, 393.5, 159.4, 389.3, 158.2);
        vaulter.bezierCurveTo(385.7, 157.1, 380.9, 160.2, 379.6, 163.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(375.7, 179.7);
        vaulter.bezierCurveTo(375.7, 179.7, 366.9, 182.5, 364.1, 184.2);
        vaulter.bezierCurveTo(361.5, 185.9, 356.0, 188.5, 354.9, 190.4);
        vaulter.bezierCurveTo(354.6, 191.0, 354.6, 191.7, 354.3, 193.8);
        vaulter.bezierCurveTo(353.6, 198.7, 357.3, 206.6, 360.5, 211.4);
        vaulter.bezierCurveTo(359.1, 215.7, 354.6, 217.5, 353.0, 220.3);
        vaulter.bezierCurveTo(353.0, 220.3, 351.3, 221.9, 351.9, 222.8);
        vaulter.bezierCurveTo(352.5, 223.7, 357.1, 221.9, 359.7, 219.2);
        vaulter.bezierCurveTo(362.2, 216.6, 364.9, 215.7, 365.7, 215.2);
        vaulter.bezierCurveTo(366.5, 214.8, 367.5, 212.6, 367.0, 211.7);
        vaulter.bezierCurveTo(366.6, 210.9, 365.7, 209.7, 365.3, 208.9);
        vaulter.bezierCurveTo(362.8, 201.2, 363.7, 200.7, 363.2, 195.8);
        vaulter.bezierCurveTo(367.2, 195.6, 370.9, 195.1, 380.2, 191.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(394.9, 168.3);
        vaulter.bezierCurveTo(393.5, 171.5, 389.6, 174.3, 386.8, 173.1);
        vaulter.bezierCurveTo(383.8, 171.8, 383.1, 167.3, 384.9, 163.5);
        vaulter.bezierCurveTo(386.8, 159.6, 390.9, 158.8, 393.5, 160.0);
        vaulter.bezierCurveTo(395.8, 161.1, 396.7, 164.3, 394.9, 168.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(246.4, 87.8);
        vaulter.bezierCurveTo(246.4, 87.8, 246.3, 86.9, 245.3, 87.1);
        vaulter.bezierCurveTo(244.3, 87.3, 244.5, 88.2, 244.5, 88.2);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(246.4, 87.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(395.9, 163.5);
        vaulter.bezierCurveTo(395.9, 161.9, 395.1, 159.9, 392.7, 157.2);
        vaulter.bezierCurveTo(391.6, 156.0, 388.6, 152.2, 388.6, 152.2);
        vaulter.bezierCurveTo(388.6, 152.2, 387.1, 150.8, 386.1, 149.7);
        vaulter.bezierCurveTo(385.1, 148.7, 382.9, 145.8, 381.3, 144.9);
        vaulter.bezierCurveTo(378.6, 140.5, 376.2, 138.3, 368.8, 131.7);
        vaulter.bezierCurveTo(368.8, 131.7, 365.6, 129.8, 363.2, 129.1);
        vaulter.bezierCurveTo(361.7, 128.7, 357.8, 129.1, 357.8, 129.1);
        vaulter.bezierCurveTo(357.8, 129.1, 356.2, 129.2, 355.9, 129.6);
        vaulter.bezierCurveTo(355.5, 130.1, 357.1, 130.3, 357.8, 130.3);
        vaulter.bezierCurveTo(358.9, 130.2, 360.6, 130.5, 361.4, 130.7);
        vaulter.bezierCurveTo(362.3, 131.0, 362.8, 130.9, 362.9, 131.2);
        vaulter.bezierCurveTo(362.9, 131.3, 363.0, 131.9, 362.6, 132.1);
        vaulter.bezierCurveTo(362.1, 132.3, 361.8, 132.8, 360.9, 132.6);
        vaulter.bezierCurveTo(360.3, 132.4, 359.1, 132.6, 359.3, 133.0);
        vaulter.bezierCurveTo(359.5, 133.5, 360.4, 133.6, 360.7, 133.5);
        vaulter.bezierCurveTo(361.0, 133.4, 362.2, 133.8, 363.1, 133.9);
        vaulter.bezierCurveTo(363.8, 134.0, 365.0, 134.3, 365.5, 134.1);
        vaulter.bezierCurveTo(365.9, 134.0, 366.7, 133.2, 366.7, 133.2);
        vaulter.bezierCurveTo(371.5, 139.6, 373.6, 144.5, 376.8, 148.6);
        vaulter.bezierCurveTo(378.8, 151.1, 383.6, 158.2, 383.6, 158.2);
        vaulter.bezierCurveTo(383.6, 158.2, 386.3, 164.6, 387.7, 166.5);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(402.2, 191.3);
        vaulter.bezierCurveTo(400.8, 190.2, 396.6, 189.4, 392.9, 189.4);
        vaulter.bezierCurveTo(389.9, 187.9, 384.4, 184.6, 380.0, 183.9);
        vaulter.bezierCurveTo(362.3, 178.3, 373.2, 181.6, 362.9, 178.7);
        vaulter.bezierCurveTo(362.9, 178.7, 358.1, 174.2, 356.0, 175.8);
        vaulter.bezierCurveTo(356.0, 175.8, 355.2, 175.9, 355.1, 176.4);
        vaulter.bezierCurveTo(355.0, 176.8, 354.9, 177.1, 354.9, 177.4);
        vaulter.bezierCurveTo(354.9, 177.6, 355.1, 177.7, 355.1, 178.1);
        vaulter.bezierCurveTo(355.2, 178.8, 355.9, 178.7, 355.9, 178.7);
        vaulter.bezierCurveTo(355.9, 178.7, 357.2, 179.3, 357.5, 179.3);
        vaulter.bezierCurveTo(358.8, 179.3, 359.1, 180.1, 358.9, 180.2);
        vaulter.bezierCurveTo(358.6, 180.2, 357.9, 180.3, 357.8, 180.3);
        vaulter.bezierCurveTo(357.3, 180.2, 355.8, 179.9, 356.2, 180.6);
        vaulter.bezierCurveTo(356.3, 181.1, 358.8, 181.4, 359.5, 181.5);
        vaulter.bezierCurveTo(360.5, 181.6, 361.8, 181.3, 362.9, 181.0);
        vaulter.bezierCurveTo(362.9, 181.0, 373.2, 187.1, 378.8, 188.5);
        vaulter.bezierCurveTo(378.8, 188.5, 382.2, 190.4, 385.0, 191.5);
        vaulter.bezierCurveTo(387.7, 192.5, 390.1, 193.6, 390.1, 193.6);
        vaulter.bezierCurveTo(390.1, 193.6, 391.8, 196.3, 397.2, 199.0);
        vaulter.bezierCurveTo(400.3, 200.5, 402.8, 197.8, 403.4, 196.6);
        vaulter.bezierCurveTo(404.7, 194.1, 403.5, 192.3, 402.2, 191.3);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(381.4, 219.1);
        vaulter.bezierCurveTo(376.4, 219.0, 373.1, 219.7, 370.3, 218.5);
        vaulter.bezierCurveTo(367.4, 217.2, 364.2, 216.8, 364.2, 216.8);
        vaulter.bezierCurveTo(365.3, 219.4, 364.6, 220.7, 361.4, 231.9);
        vaulter.bezierCurveTo(361.4, 231.9, 362.7, 233.4, 362.6, 234.8);
        vaulter.bezierCurveTo(362.5, 236.2, 362.1, 238.4, 359.4, 238.0);
        vaulter.bezierCurveTo(356.6, 237.5, 350.7, 237.8, 349.5, 238.2);
        vaulter.bezierCurveTo(348.2, 238.7, 345.3, 239.1, 344.8, 238.3);
        vaulter.bezierCurveTo(344.3, 237.5, 346.1, 235.9, 347.6, 236.2);
        vaulter.bezierCurveTo(347.6, 236.2, 353.1, 232.4, 357.3, 231.9);
        vaulter.bezierCurveTo(357.3, 231.9, 357.2, 224.6, 356.9, 221.9);
        vaulter.bezierCurveTo(356.6, 219.2, 354.3, 213.9, 356.1, 211.0);
        vaulter.bezierCurveTo(357.5, 208.5, 371.4, 205.0, 381.3, 206.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(398.0, 189.2);
        vaulter.bezierCurveTo(398.0, 189.2, 398.4, 187.6, 399.6, 185.2);
        vaulter.bezierCurveTo(399.9, 184.4, 400.4, 183.5, 400.9, 182.5);
        vaulter.bezierCurveTo(403.0, 178.7, 408.6, 176.7, 412.3, 179.5);
        vaulter.bezierCurveTo(416.4, 182.5, 415.3, 187.8, 412.4, 190.4);
        vaulter.bezierCurveTo(410.8, 191.8, 407.9, 192.1, 405.9, 193.3);
        vaulter.bezierCurveTo(403.7, 194.5, 402.9, 196.7, 402.9, 196.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(388.7, 191.5);
        vaulter.bezierCurveTo(386.7, 194.1, 385.4, 198.6, 380.8, 203.6);
        vaulter.bezierCurveTo(377.3, 207.5, 377.1, 208.7, 376.3, 210.2);
        vaulter.bezierCurveTo(374.6, 213.0, 374.8, 213.7, 378.0, 216.6);
        vaulter.bezierCurveTo(381.1, 219.5, 382.8, 218.9, 385.0, 218.0);
        vaulter.bezierCurveTo(386.3, 217.4, 389.2, 212.3, 392.8, 209.9);
        vaulter.bezierCurveTo(395.4, 208.3, 401.3, 203.0, 402.9, 201.2);
        vaulter.bezierCurveTo(404.2, 199.8, 404.5, 196.8, 404.8, 195.6);
        vaulter.bezierCurveTo(405.3, 193.4, 403.1, 191.2, 399.4, 189.0);
        vaulter.bezierCurveTo(396.1, 187.1, 390.7, 189.0, 388.7, 191.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(381.8, 206.8);
        vaulter.bezierCurveTo(381.8, 206.8, 372.6, 206.3, 369.4, 206.9);
        vaulter.bezierCurveTo(366.3, 207.5, 360.3, 208.0, 358.6, 209.4);
        vaulter.bezierCurveTo(358.1, 209.8, 357.8, 210.6, 356.8, 212.4);
        vaulter.bezierCurveTo(354.5, 216.8, 355.1, 225.4, 356.3, 231.0);
        vaulter.bezierCurveTo(353.6, 234.5, 348.7, 234.7, 346.2, 236.7);
        vaulter.bezierCurveTo(346.2, 236.7, 344.1, 237.6, 344.3, 238.7);
        vaulter.bezierCurveTo(344.5, 239.7, 349.5, 239.7, 352.8, 238.1);
        vaulter.bezierCurveTo(356.1, 236.5, 358.9, 236.6, 359.9, 236.5);
        vaulter.bezierCurveTo(360.8, 236.3, 362.5, 234.7, 362.4, 233.6);
        vaulter.bezierCurveTo(362.3, 232.8, 361.8, 231.3, 361.7, 230.4);
        vaulter.bezierCurveTo(362.1, 222.3, 363.1, 222.2, 364.4, 217.4);
        vaulter.bezierCurveTo(368.3, 218.6, 371.9, 219.5, 382.0, 219.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(402.6, 199.9);
        vaulter.bezierCurveTo(400.4, 202.6, 395.8, 204.4, 393.5, 202.5);
        vaulter.bezierCurveTo(390.9, 200.4, 391.4, 195.9, 394.1, 192.7);
        vaulter.bezierCurveTo(396.9, 189.4, 401.2, 189.7, 403.3, 191.5);
        vaulter.bezierCurveTo(405.3, 193.2, 405.3, 196.5, 402.6, 199.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(237.6, 90.8);
        vaulter.bezierCurveTo(237.6, 90.8, 237.4, 89.9, 236.4, 90.2);
        vaulter.bezierCurveTo(235.5, 90.4, 235.6, 91.3, 235.6, 91.3);
        vaulter.lineTo(293.1, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(237.6, 90.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(404.7, 195.5);
        vaulter.bezierCurveTo(404.9, 193.8, 404.5, 191.2, 399.9, 188.2);
        vaulter.bezierCurveTo(398.6, 187.4, 394.7, 184.5, 394.7, 184.5);
        vaulter.bezierCurveTo(394.7, 184.5, 392.9, 183.4, 391.7, 182.6);
        vaulter.bezierCurveTo(390.5, 181.9, 387.6, 179.6, 385.8, 179.1);
        vaulter.bezierCurveTo(382.1, 175.6, 379.2, 174.1, 370.4, 169.5);
        vaulter.bezierCurveTo(370.4, 169.5, 366.8, 168.5, 364.3, 168.4);
        vaulter.bezierCurveTo(362.8, 168.3, 359.1, 169.7, 359.1, 169.7);
        vaulter.bezierCurveTo(359.1, 169.7, 357.6, 170.2, 357.4, 170.8);
        vaulter.bezierCurveTo(357.1, 171.3, 358.8, 171.1, 359.4, 170.9);
        vaulter.bezierCurveTo(360.4, 170.6, 362.2, 170.4, 363.0, 170.4);
        vaulter.bezierCurveTo(363.9, 170.4, 364.4, 170.2, 364.6, 170.5);
        vaulter.bezierCurveTo(364.6, 170.6, 364.9, 171.1, 364.5, 171.4);
        vaulter.bezierCurveTo(364.1, 171.8, 363.9, 172.3, 363.0, 172.3);
        vaulter.bezierCurveTo(362.3, 172.3, 361.3, 172.8, 361.6, 173.2);
        vaulter.bezierCurveTo(361.8, 173.6, 362.7, 173.5, 363.0, 173.3);
        vaulter.bezierCurveTo(363.3, 173.1, 364.5, 173.2, 365.4, 173.1);
        vaulter.bezierCurveTo(366.1, 173.0, 367.4, 173.0, 367.8, 172.7);
        vaulter.bezierCurveTo(368.2, 172.4, 368.7, 171.5, 368.7, 171.5);
        vaulter.bezierCurveTo(375.0, 176.4, 378.3, 180.7, 382.4, 183.8);
        vaulter.bezierCurveTo(385.0, 185.8, 391.4, 191.5, 391.4, 191.5);
        vaulter.bezierCurveTo(391.4, 191.5, 396.5, 198.3, 397.9, 198.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(408.4, 220.4);
        vaulter.bezierCurveTo(407.1, 219.3, 402.8, 218.7, 399.1, 218.8);
        vaulter.bezierCurveTo(396.1, 217.3, 390.5, 214.2, 386.1, 213.7);
        vaulter.bezierCurveTo(368.2, 208.6, 379.2, 211.6, 368.9, 208.9);
        vaulter.bezierCurveTo(368.9, 208.9, 363.9, 204.6, 361.8, 206.3);
        vaulter.bezierCurveTo(361.8, 206.3, 361.1, 206.3, 361.0, 206.8);
        vaulter.bezierCurveTo(360.9, 207.3, 360.8, 207.6, 360.8, 207.8);
        vaulter.bezierCurveTo(360.8, 208.1, 361.0, 208.2, 361.0, 208.6);
        vaulter.bezierCurveTo(361.1, 209.2, 361.8, 209.2, 361.8, 209.2);
        vaulter.bezierCurveTo(361.8, 209.2, 363.1, 209.7, 363.5, 209.7);
        vaulter.bezierCurveTo(364.8, 209.6, 365.1, 210.5, 364.9, 210.5);
        vaulter.bezierCurveTo(364.6, 210.5, 363.9, 210.7, 363.7, 210.7);
        vaulter.bezierCurveTo(363.3, 210.6, 361.8, 210.3, 362.2, 211.1);
        vaulter.bezierCurveTo(362.4, 211.5, 364.8, 211.7, 365.5, 211.8);
        vaulter.bezierCurveTo(366.5, 211.9, 367.8, 211.6, 368.9, 211.2);
        vaulter.bezierCurveTo(368.9, 211.2, 379.4, 217.1, 385.0, 218.3);
        vaulter.bezierCurveTo(385.0, 218.3, 388.5, 220.1, 391.3, 221.1);
        vaulter.bezierCurveTo(394.0, 222.0, 396.4, 223.0, 396.4, 223.0);
        vaulter.bezierCurveTo(396.4, 223.0, 398.3, 225.8, 403.7, 228.2);
        vaulter.bezierCurveTo(406.9, 229.7, 409.2, 226.9, 409.8, 225.7);
        vaulter.bezierCurveTo(411.1, 223.1, 409.8, 221.4, 408.4, 220.4);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(388.1, 238.3);
        vaulter.bezierCurveTo(382.0, 230.2, 369.3, 223.6, 366.5, 224.5);
        vaulter.bezierCurveTo(363.3, 225.6, 361.5, 231.1, 359.9, 233.3);
        vaulter.bezierCurveTo(358.4, 235.5, 353.6, 241.0, 353.6, 241.0);
        vaulter.bezierCurveTo(350.1, 238.5, 343.4, 237.8, 343.4, 237.8);
        vaulter.bezierCurveTo(342.5, 236.6, 340.1, 236.6, 339.9, 237.5);
        vaulter.bezierCurveTo(339.8, 238.4, 342.3, 240.1, 343.5, 240.5);
        vaulter.bezierCurveTo(344.8, 241.0, 349.4, 244.8, 351.1, 246.9);
        vaulter.bezierCurveTo(352.9, 249.0, 354.7, 247.7, 355.7, 246.7);
        vaulter.bezierCurveTo(356.6, 245.8, 356.7, 243.8, 356.7, 243.8);
        vaulter.bezierCurveTo(366.5, 237.5, 367.8, 237.0, 368.8, 234.3);
        vaulter.bezierCurveTo(368.8, 234.3, 370.9, 236.8, 372.2, 239.6);
        vaulter.bezierCurveTo(373.5, 242.4, 376.4, 244.1, 380.1, 247.4);
        vaulter.bezierCurveTo(383.9, 250.7, 388.1, 250.0, 392.7, 243.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(405.4, 217.8);
        vaulter.bezierCurveTo(405.4, 217.8, 406.0, 216.3, 407.3, 213.9);
        vaulter.bezierCurveTo(407.7, 213.1, 408.2, 212.3, 408.8, 211.4);
        vaulter.bezierCurveTo(411.2, 207.6, 416.8, 206.1, 420.4, 209.1);
        vaulter.bezierCurveTo(424.2, 212.3, 422.9, 217.6, 420.0, 220.3);
        vaulter.bezierCurveTo(418.6, 221.6, 415.2, 221.4, 413.1, 222.4);
        vaulter.bezierCurveTo(410.8, 223.5, 409.9, 225.7, 409.9, 225.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(395.2, 220.0);
        vaulter.bezierCurveTo(393.1, 222.4, 391.5, 226.7, 386.5, 231.5);
        vaulter.bezierCurveTo(382.8, 235.1, 382.6, 236.3, 381.6, 237.7);
        vaulter.bezierCurveTo(379.8, 240.5, 379.9, 241.2, 382.9, 244.3);
        vaulter.bezierCurveTo(385.9, 247.3, 387.5, 246.9, 389.8, 246.1);
        vaulter.bezierCurveTo(391.1, 245.6, 394.4, 240.7, 398.1, 238.6);
        vaulter.bezierCurveTo(400.8, 237.1, 407.0, 232.2, 408.7, 230.6);
        vaulter.bezierCurveTo(410.2, 229.2, 410.6, 226.2, 411.0, 225.1);
        vaulter.bezierCurveTo(411.7, 223.0, 409.7, 220.5, 406.1, 218.1);
        vaulter.bezierCurveTo(402.9, 216.1, 397.4, 217.5, 395.2, 220.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(388.6, 238.5);
        vaulter.bezierCurveTo(388.6, 238.5, 382.0, 232.0, 379.2, 230.3);
        vaulter.bezierCurveTo(376.5, 228.7, 371.7, 225.2, 369.5, 225.1);
        vaulter.bezierCurveTo(368.8, 225.0, 368.1, 225.4, 366.1, 226.1);
        vaulter.bezierCurveTo(361.5, 227.8, 356.2, 234.7, 353.4, 239.7);
        vaulter.bezierCurveTo(349.1, 240.5, 345.3, 237.4, 342.1, 237.2);
        vaulter.bezierCurveTo(342.1, 237.2, 339.9, 236.5, 339.4, 237.4);
        vaulter.bezierCurveTo(338.8, 238.4, 342.6, 241.6, 346.1, 242.7);
        vaulter.bezierCurveTo(349.7, 243.7, 351.7, 245.6, 352.5, 246.1);
        vaulter.bezierCurveTo(353.2, 246.6, 355.6, 246.5, 356.3, 245.6);
        vaulter.bezierCurveTo(356.8, 245.0, 357.3, 243.5, 357.9, 242.8);
        vaulter.bezierCurveTo(363.6, 237.0, 364.4, 237.6, 368.5, 234.9);
        vaulter.bezierCurveTo(370.6, 238.3, 372.9, 241.3, 380.6, 247.7);
        vaulter.bezierCurveTo(385.5, 251.8, 390.4, 247.1, 392.7, 243.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(409.0, 228.9);
        vaulter.bezierCurveTo(406.8, 231.5, 402.3, 233.3, 399.9, 231.4);
        vaulter.bezierCurveTo(397.4, 229.3, 397.8, 224.8, 400.6, 221.6);
        vaulter.bezierCurveTo(403.4, 218.3, 407.6, 218.7, 409.8, 220.5);
        vaulter.bezierCurveTo(411.8, 222.1, 411.8, 225.5, 409.0, 228.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(229.4, 96.0);
        vaulter.bezierCurveTo(229.4, 96.0, 229.2, 95.1, 228.2, 95.3);
        vaulter.bezierCurveTo(227.2, 95.6, 227.5, 96.5, 227.5, 96.5);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.1, 343.0);
        vaulter.lineTo(229.4, 96.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(410.8, 222.2);
        vaulter.bezierCurveTo(410.2, 220.7, 408.7, 219.0, 404.7, 217.6);
        vaulter.bezierCurveTo(403.2, 217.1, 398.7, 215.2, 398.7, 215.2);
        vaulter.bezierCurveTo(398.7, 215.2, 396.7, 214.7, 395.3, 214.2);
        vaulter.bezierCurveTo(394.0, 213.8, 390.6, 212.3, 388.8, 212.3);
        vaulter.bezierCurveTo(384.3, 209.7, 381.2, 209.0, 371.4, 206.8);
        vaulter.bezierCurveTo(371.4, 206.8, 367.7, 206.7, 365.3, 207.2);
        vaulter.bezierCurveTo(363.8, 207.5, 360.6, 209.8, 360.6, 209.8);
        vaulter.bezierCurveTo(360.6, 209.8, 359.2, 210.6, 359.1, 211.2);
        vaulter.bezierCurveTo(359.1, 211.8, 360.6, 211.2, 361.1, 210.8);
        vaulter.bezierCurveTo(362.1, 210.3, 363.7, 209.6, 364.5, 209.5);
        vaulter.bezierCurveTo(365.4, 209.3, 365.9, 208.9, 366.0, 209.2);
        vaulter.bezierCurveTo(366.1, 209.3, 366.5, 209.7, 366.2, 210.1);
        vaulter.bezierCurveTo(365.9, 210.5, 365.8, 211.1, 365.0, 211.3);
        vaulter.bezierCurveTo(364.4, 211.5, 363.5, 212.2, 363.8, 212.5);
        vaulter.bezierCurveTo(364.2, 212.8, 365.0, 212.5, 365.2, 212.3);
        vaulter.bezierCurveTo(365.5, 212.0, 366.7, 211.8, 367.5, 211.5);
        vaulter.bezierCurveTo(368.2, 211.2, 369.4, 210.9, 369.8, 210.5);
        vaulter.bezierCurveTo(370.0, 210.1, 370.3, 209.1, 370.3, 209.1);
        vaulter.bezierCurveTo(377.7, 212.3, 381.9, 215.6, 386.6, 217.7);
        vaulter.bezierCurveTo(389.6, 219.0, 397.2, 222.8, 397.2, 222.8);
        vaulter.bezierCurveTo(397.2, 222.8, 402.8, 227.3, 404.9, 228.2);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(414.4, 254.8);
        vaulter.bezierCurveTo(414.0, 253.1, 412.8, 250.5, 406.7, 249.8);
        vaulter.bezierCurveTo(405.2, 249.6, 400.4, 248.8, 400.4, 248.8);
        vaulter.bezierCurveTo(400.4, 248.8, 398.3, 248.6, 396.9, 248.5);
        vaulter.bezierCurveTo(395.5, 248.3, 391.9, 247.6, 390.1, 247.9);
        vaulter.bezierCurveTo(385.1, 246.4, 381.9, 246.3, 372.0, 246.2);
        vaulter.bezierCurveTo(372.0, 246.2, 368.8, 245.7, 366.3, 245.8);
        vaulter.bezierCurveTo(364.8, 245.8, 362.0, 246.7, 362.0, 246.7);
        vaulter.bezierCurveTo(362.0, 246.7, 359.7, 248.1, 359.5, 248.7);
        vaulter.bezierCurveTo(359.4, 249.2, 361.5, 249.2, 362.1, 249.0);
        vaulter.bezierCurveTo(363.1, 248.6, 364.5, 247.6, 365.3, 247.5);
        vaulter.bezierCurveTo(366.2, 247.5, 366.6, 247.6, 366.7, 247.9);
        vaulter.bezierCurveTo(366.7, 248.0, 367.0, 248.4, 366.7, 248.8);
        vaulter.bezierCurveTo(366.3, 249.2, 366.1, 249.8, 365.2, 250.0);
        vaulter.bezierCurveTo(364.6, 250.2, 363.7, 250.9, 364.1, 251.2);
        vaulter.bezierCurveTo(364.4, 251.5, 365.3, 251.2, 365.5, 251.0);
        vaulter.bezierCurveTo(365.7, 250.7, 366.9, 250.6, 367.7, 250.3);
        vaulter.bezierCurveTo(368.4, 250.0, 368.7, 249.3, 368.7, 249.3);
        vaulter.lineTo(369.2, 248.7);
        vaulter.bezierCurveTo(377.1, 250.3, 384.0, 252.6, 389.1, 253.7);
        vaulter.bezierCurveTo(392.3, 254.3, 400.5, 256.5, 400.5, 256.5);
        vaulter.bezierCurveTo(400.5, 256.5, 408.2, 260.3, 409.7, 260.1);
        vaulter.bezierCurveTo(412.8, 259.6, 414.9, 256.4, 414.4, 254.8);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(390.3, 267.5);
        vaulter.bezierCurveTo(390.6, 257.4, 384.9, 244.3, 382.2, 243.2);
        vaulter.bezierCurveTo(379.0, 242.0, 372.7, 248.7, 371.0, 250.9);
        vaulter.bezierCurveTo(369.4, 253.0, 365.2, 258.7, 365.2, 258.7);
        vaulter.bezierCurveTo(361.8, 256.1, 355.2, 255.1, 355.2, 255.1);
        vaulter.bezierCurveTo(354.4, 253.8, 351.9, 253.8, 351.7, 254.7);
        vaulter.bezierCurveTo(351.5, 255.6, 354.0, 257.4, 355.2, 257.9);
        vaulter.bezierCurveTo(356.4, 258.4, 360.8, 262.3, 362.5, 264.5);
        vaulter.bezierCurveTo(364.2, 266.8, 366.0, 265.5, 367.0, 264.6);
        vaulter.bezierCurveTo(368.1, 263.6, 368.2, 261.6, 368.2, 261.6);
        vaulter.bezierCurveTo(378.3, 255.8, 375.0, 256.4, 377.4, 254.9);
        vaulter.bezierCurveTo(377.4, 254.9, 377.3, 255.4, 377.1, 258.5);
        vaulter.bezierCurveTo(376.9, 261.6, 377.5, 264.7, 378.4, 269.5);
        vaulter.bezierCurveTo(379.2, 274.5, 384.7, 275.3, 390.3, 272.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(410.8, 250.4);
        vaulter.bezierCurveTo(410.8, 250.4, 412.5, 248.3, 414.1, 246.6);
        vaulter.bezierCurveTo(414.6, 246.0, 415.3, 244.9, 416.0, 244.2);
        vaulter.bezierCurveTo(418.9, 241.5, 424.1, 241.3, 426.6, 244.7);
        vaulter.bezierCurveTo(429.3, 248.4, 427.0, 252.7, 423.9, 254.4);
        vaulter.bezierCurveTo(422.4, 255.3, 419.4, 254.4, 417.3, 254.8);
        vaulter.bezierCurveTo(415.1, 255.3, 413.9, 257.0, 413.9, 257.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(400.2, 250.5);
        vaulter.bezierCurveTo(397.5, 252.4, 394.7, 254.9, 388.7, 258.4);
        vaulter.bezierCurveTo(384.3, 261.0, 383.8, 262.1, 382.5, 263.2);
        vaulter.bezierCurveTo(380.0, 265.5, 380.0, 266.2, 382.2, 269.9);
        vaulter.bezierCurveTo(384.3, 273.6, 386.0, 273.5, 388.4, 273.3);
        vaulter.bezierCurveTo(389.8, 273.2, 394.2, 269.1, 398.3, 268.0);
        vaulter.bezierCurveTo(401.2, 267.2, 408.5, 263.9, 410.5, 262.8);
        vaulter.bezierCurveTo(412.3, 261.8, 413.4, 259.0, 414.0, 258.0);
        vaulter.bezierCurveTo(415.2, 256.1, 414.7, 252.2, 410.9, 250.0);
        vaulter.bezierCurveTo(407.8, 248.3, 402.8, 248.6, 400.2, 250.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(390.6, 267.7);
        vaulter.bezierCurveTo(390.6, 267.7, 389.5, 258.6, 388.3, 255.5);
        vaulter.bezierCurveTo(387.1, 252.6, 385.5, 246.8, 383.8, 245.4);
        vaulter.bezierCurveTo(383.3, 245.0, 382.6, 244.8, 380.5, 244.2);
        vaulter.bezierCurveTo(375.9, 242.6, 367.7, 250.8, 363.7, 255.0);
        vaulter.bezierCurveTo(359.3, 254.7, 355.6, 250.4, 352.5, 249.5);
        vaulter.bezierCurveTo(352.5, 249.5, 350.6, 248.2, 349.8, 249.0);
        vaulter.bezierCurveTo(349.0, 249.8, 351.9, 253.9, 355.1, 255.7);
        vaulter.bezierCurveTo(358.3, 257.6, 359.8, 259.9, 360.4, 260.6);
        vaulter.bezierCurveTo(361.1, 261.3, 363.4, 261.7, 364.2, 261.0);
        vaulter.bezierCurveTo(364.9, 260.5, 365.8, 259.3, 366.5, 258.7);
        vaulter.bezierCurveTo(372.1, 255.1, 373.2, 256.3, 377.6, 253.2);
        vaulter.bezierCurveTo(377.1, 257.2, 376.5, 260.2, 378.6, 270.1);
        vaulter.bezierCurveTo(379.9, 276.3, 387.0, 274.6, 390.9, 272.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(410.7, 260.9);
        vaulter.bezierCurveTo(408.1, 263.2, 403.3, 264.2, 401.3, 261.9);
        vaulter.bezierCurveTo(399.1, 259.5, 400.3, 255.1, 403.5, 252.4);
        vaulter.bezierCurveTo(406.9, 249.6, 411.0, 250.7, 412.8, 252.8);
        vaulter.bezierCurveTo(414.5, 254.7, 414.0, 258.0, 410.7, 260.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(221.7, 102.3);
        vaulter.bezierCurveTo(221.7, 102.3, 221.3, 101.5, 220.7, 101.7);
        vaulter.bezierCurveTo(220.1, 101.8, 220.2, 102.8, 220.2, 102.8);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.0, 343.0);
        vaulter.lineTo(221.7, 102.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(413.7, 256.4);
        vaulter.bezierCurveTo(414.1, 254.6, 413.1, 253.3, 412.1, 252.4);
        vaulter.bezierCurveTo(410.8, 251.2, 406.6, 250.3, 403.0, 250.1);
        vaulter.bezierCurveTo(400.0, 248.5, 394.6, 245.0, 390.3, 244.1);
        vaulter.bezierCurveTo(372.9, 237.7, 383.6, 241.5, 373.5, 238.2);
        vaulter.bezierCurveTo(373.5, 238.2, 370.5, 236.4, 367.9, 236.1);
        vaulter.bezierCurveTo(366.9, 236.0, 363.7, 236.9, 363.5, 237.1);
        vaulter.bezierCurveTo(363.3, 237.2, 363.0, 237.8, 363.0, 237.8);
        vaulter.bezierCurveTo(363.0, 237.8, 362.9, 238.0, 363.1, 238.4);
        vaulter.bezierCurveTo(363.3, 238.7, 364.1, 239.4, 364.6, 239.3);
        vaulter.bezierCurveTo(365.1, 239.2, 366.9, 238.0, 366.9, 238.0);
        vaulter.bezierCurveTo(366.9, 238.0, 368.0, 237.8, 368.3, 237.8);
        vaulter.bezierCurveTo(369.6, 237.9, 369.7, 239.0, 369.6, 239.2);
        vaulter.bezierCurveTo(369.6, 239.5, 367.9, 240.2, 367.7, 240.1);
        vaulter.bezierCurveTo(367.3, 240.0, 366.3, 240.2, 366.5, 241.0);
        vaulter.bezierCurveTo(366.6, 241.2, 367.3, 241.2, 367.7, 241.2);
        vaulter.bezierCurveTo(368.5, 241.1, 369.5, 240.7, 369.9, 240.8);
        vaulter.bezierCurveTo(370.9, 240.9, 372.2, 240.7, 373.3, 240.4);
        vaulter.bezierCurveTo(373.3, 240.4, 383.3, 247.0, 388.8, 248.7);
        vaulter.bezierCurveTo(388.8, 248.7, 392.3, 250.7, 395.0, 251.9);
        vaulter.bezierCurveTo(397.6, 253.0, 400.0, 254.2, 400.0, 254.2);
        vaulter.bezierCurveTo(400.0, 254.2, 400.9, 255.8, 403.5, 257.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(396.8, 301.8);
        vaulter.bezierCurveTo(388.9, 300.7, 380.2, 299.6, 372.5, 299.3);
        vaulter.bezierCurveTo(363.2, 299.0, 355.7, 299.5, 355.5, 297.8);
        vaulter.bezierCurveTo(355.2, 294.7, 381.7, 296.0, 386.0, 296.2);
        vaulter.bezierCurveTo(389.8, 296.4, 404.2, 296.6, 415.8, 296.6);
        vaulter.bezierCurveTo(417.4, 296.6, 418.7, 295.7, 420.1, 295.7);
        vaulter.bezierCurveTo(424.9, 295.7, 427.9, 296.1, 428.9, 297.5);
        vaulter.bezierCurveTo(430.9, 300.1, 425.1, 301.8, 418.6, 300.6);
        vaulter.bezierCurveTo(418.0, 300.5, 416.7, 299.0, 415.5, 299.5);
        vaulter.bezierCurveTo(408.8, 302.5, 399.9, 301.5, 396.8, 301.8);
        vaulter.closePath();
        vaulter.fillStyle("rgb(175, 195, 226)");
        vaulter.fill();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(412.9, 287.6);
        vaulter.bezierCurveTo(411.6, 286.9, 407.7, 286.9, 404.5, 287.4);
        vaulter.bezierCurveTo(401.5, 286.5, 396.2, 284.5, 392.2, 284.6);
        vaulter.bezierCurveTo(375.6, 282.4, 385.8, 283.6, 376.2, 282.6);
        vaulter.bezierCurveTo(376.2, 282.6, 373.3, 281.7, 370.9, 282.0);
        vaulter.bezierCurveTo(370.1, 282.1, 367.4, 283.5, 367.2, 283.6);
        vaulter.bezierCurveTo(367.1, 283.8, 366.9, 284.4, 366.9, 284.4);
        vaulter.bezierCurveTo(366.9, 284.4, 366.9, 284.6, 367.1, 284.9);
        vaulter.bezierCurveTo(367.4, 285.1, 368.2, 285.6, 368.7, 285.4);
        vaulter.bezierCurveTo(369.1, 285.2, 370.4, 283.8, 370.4, 283.8);
        vaulter.bezierCurveTo(370.4, 283.8, 371.3, 283.4, 371.6, 283.3);
        vaulter.bezierCurveTo(372.8, 283.1, 373.0, 284.1, 373.0, 284.3);
        vaulter.bezierCurveTo(373.0, 284.6, 371.7, 285.5, 371.6, 285.5);
        vaulter.bezierCurveTo(371.1, 285.5, 370.3, 285.9, 370.7, 286.5);
        vaulter.bezierCurveTo(370.8, 286.6, 371.4, 286.5, 371.8, 286.4);
        vaulter.bezierCurveTo(372.4, 286.2, 373.2, 285.7, 373.6, 285.6);
        vaulter.bezierCurveTo(374.5, 285.6, 375.6, 285.1, 376.5, 284.7);
        vaulter.bezierCurveTo(376.5, 284.7, 386.6, 288.5, 391.8, 288.9);
        vaulter.bezierCurveTo(391.8, 288.9, 395.2, 290.0, 397.8, 290.5);
        vaulter.bezierCurveTo(400.3, 291.0, 402.6, 291.6, 402.6, 291.6);
        vaulter.bezierCurveTo(402.6, 291.6, 404.6, 293.7, 409.8, 295.2);
        vaulter.bezierCurveTo(412.8, 296.1, 414.5, 293.3, 414.9, 292.2);
        vaulter.bezierCurveTo(415.6, 289.7, 414.3, 288.4, 412.9, 287.6);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(391.5, 292.5);
        vaulter.bezierCurveTo(391.8, 283.3, 386.6, 271.6, 384.2, 270.6);
        vaulter.bezierCurveTo(381.4, 269.5, 377.1, 270.1, 374.6, 270.4);
        vaulter.bezierCurveTo(372.2, 270.7, 365.9, 271.5, 365.9, 271.5);
        vaulter.bezierCurveTo(361.3, 266.7, 355.9, 265.8, 355.9, 265.8);
        vaulter.bezierCurveTo(355.4, 264.5, 353.2, 264.0, 352.9, 264.8);
        vaulter.bezierCurveTo(352.6, 265.6, 354.4, 267.5, 355.4, 268.2);
        vaulter.bezierCurveTo(356.4, 268.9, 359.2, 272.3, 360.3, 274.5);
        vaulter.bezierCurveTo(360.3, 274.5, 362.0, 276.3, 363.3, 276.4);
        vaulter.bezierCurveTo(364.5, 276.4, 366.0, 274.7, 366.0, 274.7);
        vaulter.bezierCurveTo(376.1, 277.7, 378.3, 276.6, 380.5, 275.2);
        vaulter.bezierCurveTo(380.5, 275.2, 380.8, 281.9, 380.6, 284.6);
        vaulter.bezierCurveTo(380.4, 287.4, 380.0, 289.9, 380.8, 294.3);
        vaulter.bezierCurveTo(381.5, 298.7, 386.5, 299.4, 391.5, 296.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(414.2, 286.5);
        vaulter.bezierCurveTo(414.2, 286.5, 416.5, 285.2, 418.7, 284.1);
        vaulter.bezierCurveTo(419.4, 283.8, 420.4, 283.0, 421.3, 282.7);
        vaulter.bezierCurveTo(425.0, 281.2, 429.9, 283.0, 431.0, 287.1);
        vaulter.bezierCurveTo(432.1, 291.4, 428.4, 294.6, 424.9, 295.1);
        vaulter.bezierCurveTo(423.2, 295.3, 420.7, 293.4, 418.6, 293.0);
        vaulter.bezierCurveTo(416.4, 292.6, 414.6, 293.7, 414.6, 293.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(405.5, 282.5);
        vaulter.bezierCurveTo(402.7, 283.1, 399.2, 285.4, 393.1, 286.3);
        vaulter.bezierCurveTo(388.5, 287.0, 387.7, 287.8, 386.3, 288.3);
        vaulter.bezierCurveTo(383.5, 289.4, 383.2, 290.0, 383.8, 293.8);
        vaulter.bezierCurveTo(384.3, 297.6, 385.8, 298.1, 387.8, 298.7);
        vaulter.bezierCurveTo(389.1, 299.1, 394.0, 297.2, 397.9, 297.6);
        vaulter.bezierCurveTo(400.6, 297.9, 407.8, 297.6, 409.9, 297.3);
        vaulter.bezierCurveTo(411.6, 297.0, 413.5, 295.1, 414.4, 294.5);
        vaulter.bezierCurveTo(416.0, 293.3, 415.8, 290.4, 414.4, 286.8);
        vaulter.bezierCurveTo(413.2, 283.6, 408.4, 281.8, 405.5, 282.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(391.8, 292.7);
        vaulter.bezierCurveTo(391.8, 292.7, 390.8, 284.4, 389.7, 281.7);
        vaulter.bezierCurveTo(388.6, 279.1, 387.2, 273.8, 385.7, 272.6);
        vaulter.bezierCurveTo(385.2, 272.2, 384.6, 272.0, 382.7, 271.4);
        vaulter.bezierCurveTo(378.5, 270.1, 371.4, 273.1, 366.7, 275.2);
        vaulter.bezierCurveTo(363.1, 273.5, 358.4, 270.6, 355.6, 269.8);
        vaulter.bezierCurveTo(355.6, 269.8, 353.9, 268.7, 353.2, 269.4);
        vaulter.bezierCurveTo(352.5, 270.1, 355.1, 273.8, 358.0, 275.4);
        vaulter.bezierCurveTo(360.8, 277.1, 362.2, 279.2, 362.8, 279.8);
        vaulter.bezierCurveTo(363.3, 280.4, 364.1, 280.7, 365.1, 280.4);
        vaulter.bezierCurveTo(365.8, 280.2, 367.0, 279.5, 367.8, 279.2);
        vaulter.bezierCurveTo(373.6, 278.1, 377.0, 279.6, 381.0, 276.8);
        vaulter.bezierCurveTo(380.5, 280.5, 379.1, 285.9, 381.0, 294.8);
        vaulter.bezierCurveTo(382.2, 300.4, 388.5, 298.9, 392.0, 296.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(409.4, 296.5);
        vaulter.bezierCurveTo(406.0, 297.1, 401.4, 295.5, 400.9, 292.5);
        vaulter.bezierCurveTo(400.3, 289.2, 403.6, 286.1, 407.8, 285.5);
        vaulter.bezierCurveTo(412.1, 284.9, 415.0, 287.9, 415.5, 290.7);
        vaulter.bezierCurveTo(415.9, 293.2, 413.8, 295.8, 409.4, 296.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(212.1, 108.3);
        vaulter.bezierCurveTo(212.1, 108.3, 211.7, 107.5, 211.1, 107.7);
        vaulter.bezierCurveTo(210.5, 107.8, 210.7, 108.8, 210.7, 108.8);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.1, 343.0);
        vaulter.lineTo(212.1, 108.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(415.6, 292.4);
        vaulter.bezierCurveTo(415.9, 291.8, 416.1, 291.3, 416.0, 290.8);
        vaulter.bezierCurveTo(415.7, 289.3, 414.9, 286.9, 409.5, 285.7);
        vaulter.bezierCurveTo(408.1, 285.4, 403.9, 284.2, 403.9, 284.2);
        vaulter.bezierCurveTo(403.9, 284.2, 402.1, 283.8, 400.8, 283.6);
        vaulter.bezierCurveTo(399.6, 283.3, 396.4, 282.4, 394.8, 282.5);
        vaulter.bezierCurveTo(390.5, 280.7, 387.6, 280.3, 378.7, 279.3);
        vaulter.bezierCurveTo(378.7, 279.3, 375.9, 278.6, 373.7, 278.4);
        vaulter.bezierCurveTo(372.3, 278.4, 369.8, 278.9, 369.8, 278.9);
        vaulter.bezierCurveTo(369.8, 278.9, 367.6, 279.9, 367.4, 280.4);
        vaulter.bezierCurveTo(367.1, 280.9, 369.1, 281.1, 369.6, 281.0);
        vaulter.bezierCurveTo(370.6, 280.7, 371.9, 279.9, 372.6, 279.9);
        vaulter.bezierCurveTo(373.4, 280.0, 373.7, 280.1, 373.8, 280.4);
        vaulter.bezierCurveTo(373.9, 280.5, 374.1, 280.9, 373.8, 281.2);
        vaulter.bezierCurveTo(373.4, 281.5, 373.1, 282.0, 372.3, 282.1);
        vaulter.bezierCurveTo(371.8, 282.2, 370.9, 282.8, 371.2, 283.1);
        vaulter.bezierCurveTo(371.5, 283.4, 372.3, 283.2, 372.5, 283.0);
        vaulter.bezierCurveTo(372.7, 282.8, 373.8, 282.8, 374.5, 282.6);
        vaulter.bezierCurveTo(375.1, 282.4, 375.5, 281.9, 375.5, 281.9);
        vaulter.lineTo(376.0, 281.3);
        vaulter.bezierCurveTo(382.9, 283.5, 388.9, 286.2, 393.4, 287.5);
        vaulter.bezierCurveTo(396.2, 288.4, 403.4, 291.1, 403.4, 291.1);
        vaulter.bezierCurveTo(403.4, 291.1, 405.7, 292.6, 407.8, 293.7);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(200.7, 117.5);
        vaulter.bezierCurveTo(200.7, 117.5, 200.5, 116.9, 200.0, 117.1);
        vaulter.bezierCurveTo(199.4, 117.3, 199.6, 118.0, 199.6, 118.0);
        vaulter.lineTo(293.0, 343.0);
        vaulter.lineTo(295.1, 343.0);
        vaulter.lineTo(200.7, 117.5);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(361.2, 297.4);
        vaulter.bezierCurveTo(363.2, 294.7, 365.2, 295.6, 368.4, 295.6);
        vaulter.bezierCurveTo(371.8, 295.6, 370.4, 295.0, 376.5, 294.3);
        vaulter.bezierCurveTo(382.0, 293.7, 386.3, 298.0, 391.9, 297.9);
        vaulter.bezierCurveTo(394.6, 297.9, 393.7, 297.3, 395.9, 295.6);
        vaulter.bezierCurveTo(397.2, 294.6, 400.0, 295.5, 400.9, 296.0);
        vaulter.bezierCurveTo(402.8, 297.2, 404.5, 296.7, 407.2, 296.9);
        vaulter.bezierCurveTo(409.9, 297.1, 411.7, 291.0, 414.5, 292.2);
        vaulter.bezierCurveTo(416.2, 292.9, 418.0, 294.7, 419.9, 295.3);
        vaulter.bezierCurveTo(421.6, 295.7, 423.1, 295.2, 424.7, 295.0);
        vaulter.bezierCurveTo(428.8, 294.4, 432.9, 293.0, 436.9, 294.3);
        vaulter.bezierCurveTo(438.4, 294.8, 449.3, 294.8, 449.5, 296.4);
        vaulter.bezierCurveTo(449.8, 298.8, 435.4, 298.5, 433.7, 299.3);
        vaulter.bezierCurveTo(429.2, 301.4, 430.6, 301.7, 425.4, 303.0);
        vaulter.bezierCurveTo(423.1, 303.5, 419.1, 306.2, 416.9, 308.0);
        vaulter.bezierCurveTo(414.8, 309.8, 409.6, 310.4, 407.2, 309.3);
        vaulter.bezierCurveTo(402.2, 306.8, 398.4, 308.3, 393.7, 307.4);
        vaulter.bezierCurveTo(390.5, 306.8, 389.1, 306.3, 385.7, 306.2);
        vaulter.bezierCurveTo(382.0, 306.0, 377.8, 304.8, 374.2, 304.4);
        vaulter.bezierCurveTo(372.6, 304.3, 373.2, 303.0, 371.6, 303.0);
        vaulter.bezierCurveTo(369.6, 302.9, 367.4, 303.3, 365.6, 302.5);
        vaulter.bezierCurveTo(363.0, 301.5, 357.9, 300.3, 361.2, 297.4);
        vaulter.closePath();
        vaulter.fillStyle("rgb(239, 239, 249)");
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(413.8, 300.7);
        vaulter.bezierCurveTo(413.8, 300.7, 414.9, 298.3, 416.0, 296.1);
        vaulter.bezierCurveTo(416.3, 295.4, 416.6, 294.2, 417.1, 293.3);
        vaulter.bezierCurveTo(419.2, 289.9, 424.2, 288.4, 427.5, 291.0);
        vaulter.bezierCurveTo(431.0, 293.8, 430.0, 298.5, 427.5, 301.0);
        vaulter.bezierCurveTo(426.3, 302.3, 423.2, 302.2, 421.3, 303.2);
        vaulter.bezierCurveTo(419.3, 304.2, 418.5, 306.2, 418.5, 306.2);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(355.0, 300.2);
        vaulter.bezierCurveTo(354.2, 295.5, 352.8, 293.0, 352.8, 293.0);
        vaulter.bezierCurveTo(352.7, 291.5, 351.9, 289.9, 351.1, 290.3);
        vaulter.bezierCurveTo(350.8, 290.5, 350.6, 291.3, 350.6, 292.1);
        vaulter.bezierCurveTo(351.5, 294.3, 352.0, 297.1, 353.1, 300.9);
        vaulter.bezierCurveTo(353.7, 300.7, 354.3, 300.4, 355.0, 300.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(372.7, 299.8);
        vaulter.bezierCurveTo(374.6, 300.2, 380.5, 301.6, 383.1, 302.4);
        vaulter.bezierCurveTo(383.9, 302.7, 384.9, 303.2, 386.1, 303.9);
        vaulter.bezierCurveTo(387.0, 304.0, 387.8, 304.1, 388.6, 304.2);
        vaulter.bezierCurveTo(382.0, 299.6, 373.3, 297.0, 371.2, 297.5);
        vaulter.bezierCurveTo(369.1, 297.9, 367.3, 298.2, 365.6, 298.6);
        vaulter.bezierCurveTo(367.2, 298.6, 368.7, 298.9, 369.9, 299.4);
        vaulter.bezierCurveTo(370.5, 299.8, 372.1, 299.6, 372.7, 299.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(400.6, 304.0);
        vaulter.bezierCurveTo(401.8, 303.6, 403.5, 302.9, 403.5, 302.9);
        vaulter.bezierCurveTo(403.5, 302.9, 407.7, 301.8, 409.1, 301.3);
        vaulter.bezierCurveTo(413.0, 300.0, 415.1, 300.6, 416.3, 301.4);
        vaulter.bezierCurveTo(416.1, 301.0, 416.0, 300.3, 415.5, 300.0);
        vaulter.bezierCurveTo(412.1, 298.2, 407.2, 297.9, 404.5, 299.1);
        vaulter.bezierCurveTo(401.9, 300.3, 400.3, 301.4, 394.5, 303.4);
        vaulter.bezierCurveTo(393.1, 303.9, 392.0, 304.3, 391.2, 304.7);
        vaulter.bezierCurveTo(393.0, 304.9, 394.8, 305.2, 396.6, 305.4);
        vaulter.bezierCurveTo(398.0, 304.8, 399.7, 304.3, 400.6, 304.0);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(383.1, 302.4);
        vaulter.bezierCurveTo(380.5, 301.6, 374.6, 300.2, 372.7, 299.8);
        vaulter.bezierCurveTo(372.1, 299.6, 370.5, 299.8, 369.9, 299.4);
        vaulter.bezierCurveTo(368.7, 298.9, 367.2, 298.6, 365.6, 298.6);
        vaulter.bezierCurveTo(362.2, 298.4, 358.2, 299.1, 355.0, 300.2);
        vaulter.bezierCurveTo(354.3, 300.4, 353.7, 300.7, 353.1, 300.9);
        vaulter.bezierCurveTo(352.0, 297.1, 351.5, 294.3, 350.6, 292.1);
        vaulter.bezierCurveTo(350.4, 291.6, 350.2, 291.1, 349.9, 290.7);
        vaulter.bezierCurveTo(349.9, 290.7, 349.4, 288.6, 348.4, 288.7);
        vaulter.bezierCurveTo(347.4, 288.7, 346.8, 293.2, 347.8, 296.3);
        vaulter.bezierCurveTo(348.7, 299.2, 348.3, 300.7, 348.3, 302.1);
        vaulter.bezierCurveTo(348.3, 302.9, 352.3, 302.6, 352.3, 302.6);
        vaulter.bezierCurveTo(355.4, 302.2, 361.2, 302.2, 363.3, 301.4);
        vaulter.bezierCurveTo(371.2, 301.4, 378.7, 302.7, 386.1, 303.9);
        vaulter.bezierCurveTo(384.9, 303.2, 383.9, 302.7, 383.1, 302.4);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(396.6, 305.4);
        vaulter.bezierCurveTo(398.3, 305.6, 400.0, 305.8, 401.7, 305.9);
        vaulter.bezierCurveTo(406.4, 306.2, 411.1, 306.2, 415.9, 305.5);
        vaulter.bezierCurveTo(416.5, 305.4, 417.9, 305.2, 417.9, 305.2);
        vaulter.lineTo(417.8, 303.9);
        vaulter.bezierCurveTo(417.7, 303.2, 417.6, 302.7, 417.3, 302.3);
        vaulter.bezierCurveTo(417.0, 302.0, 416.7, 301.7, 416.3, 301.4);
        vaulter.bezierCurveTo(415.1, 300.6, 413.0, 300.0, 409.1, 301.3);
        vaulter.bezierCurveTo(407.7, 301.8, 403.5, 302.9, 403.5, 302.9);
        vaulter.bezierCurveTo(403.5, 302.9, 401.8, 303.6, 400.6, 304.0);
        vaulter.bezierCurveTo(399.7, 304.3, 398.0, 304.8, 396.6, 305.4);
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(396.6, 305.4);
        vaulter.bezierCurveTo(398.0, 304.8, 399.7, 304.3, 400.6, 304.0);
        vaulter.bezierCurveTo(401.8, 303.6, 403.5, 302.9, 403.5, 302.9);
        vaulter.bezierCurveTo(403.5, 302.9, 407.7, 301.8, 409.1, 301.3);
        vaulter.bezierCurveTo(413.0, 300.0, 415.1, 300.6, 416.3, 301.4);
        vaulter.bezierCurveTo(416.1, 301.0, 416.0, 300.3, 415.5, 300.0);
        vaulter.bezierCurveTo(412.1, 298.2, 407.2, 297.9, 404.5, 299.1);
        vaulter.bezierCurveTo(401.9, 300.3, 400.3, 301.4, 394.5, 303.4);
        vaulter.bezierCurveTo(393.1, 303.9, 392.0, 304.3, 391.2, 304.7);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(386.1, 303.9);
        vaulter.bezierCurveTo(384.9, 303.2, 383.9, 302.7, 383.1, 302.4);
        vaulter.bezierCurveTo(380.5, 301.6, 374.6, 300.2, 372.7, 299.8);
        vaulter.bezierCurveTo(372.1, 299.6, 370.5, 299.8, 369.9, 299.4);
        vaulter.bezierCurveTo(368.7, 298.9, 367.2, 298.6, 365.6, 298.6);
        vaulter.bezierCurveTo(362.2, 298.4, 358.2, 299.1, 355.0, 300.2);
        vaulter.bezierCurveTo(354.3, 300.4, 353.7, 300.7, 353.1, 300.9);
        vaulter.bezierCurveTo(352.0, 297.1, 351.5, 294.3, 350.6, 292.1);
        vaulter.bezierCurveTo(350.4, 291.6, 350.2, 291.1, 349.9, 290.7);
        vaulter.bezierCurveTo(349.9, 290.7, 349.4, 288.6, 348.4, 288.7);
        vaulter.bezierCurveTo(347.4, 288.7, 346.8, 293.2, 347.8, 296.3);
        vaulter.bezierCurveTo(348.5, 298.7, 348.4, 300.7, 348.4, 302.1);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(417.9, 305.2);
        vaulter.lineTo(417.8, 303.9);
        vaulter.bezierCurveTo(417.7, 303.2, 417.6, 302.7, 417.3, 302.3);
        vaulter.bezierCurveTo(417.0, 302.0, 416.7, 301.7, 416.3, 301.4);
        vaulter.bezierCurveTo(415.1, 300.6, 413.0, 300.0, 409.1, 301.3);
        vaulter.bezierCurveTo(407.7, 301.8, 403.5, 302.9, 403.5, 302.9);
        vaulter.bezierCurveTo(403.5, 302.9, 401.8, 303.6, 400.6, 304.0);
        vaulter.bezierCurveTo(399.7, 304.3, 398.0, 304.8, 396.6, 305.4);
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    }
  ];
  vaulter.makeSequence("runup");
  vaulter.runup.cels = [
    function () {
      if (vaulter.visible) {

        // vaulter/Group
        vaulter.save();

        // vaulter/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(59.1, 301.8);
        vaulter.bezierCurveTo(57.9, 305.4, 51.7, 315.9, 49.2, 316.5);
        vaulter.bezierCurveTo(46.7, 317.2, 36.1, 312.7, 36.1, 312.7);
        vaulter.bezierCurveTo(36.1, 312.7, 28.6, 310.5, 22.4, 311.4);
        vaulter.bezierCurveTo(16.1, 312.3, 14.7, 314.0, 13.6, 314.0);
        vaulter.bezierCurveTo(12.5, 314.0, 12.1, 312.8, 12.1, 312.8);
        vaulter.bezierCurveTo(12.9, 312.2, 21.5, 303.7, 23.0, 303.5);
        vaulter.bezierCurveTo(24.5, 303.4, 25.5, 305.2, 25.5, 305.2);
        vaulter.bezierCurveTo(25.5, 305.2, 28.1, 306.5, 31.6, 306.8);
        vaulter.bezierCurveTo(35.1, 307.0, 46.4, 308.2, 46.4, 308.2);
        vaulter.bezierCurveTo(46.5, 304.5, 49.2, 293.7, 49.2, 293.7);
        vaulter.lineTo(59.1, 301.8);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(57.4, 259.8);
        vaulter.bezierCurveTo(57.4, 259.8, 59.2, 259.0, 60.9, 259.3);
        vaulter.bezierCurveTo(62.6, 259.5, 65.7, 261.5, 65.5, 263.7);
        vaulter.bezierCurveTo(65.5, 263.7, 69.4, 267.9, 69.9, 268.5);
        vaulter.bezierCurveTo(70.4, 269.2, 74.7, 271.7, 74.6, 273.9);
        vaulter.bezierCurveTo(74.6, 276.1, 74.1, 277.4, 74.3, 278.5);
        vaulter.lineTo(71.2, 279.9);
        vaulter.bezierCurveTo(71.2, 279.9, 69.4, 278.7, 69.1, 277.0);
        vaulter.bezierCurveTo(68.8, 275.4, 69.2, 274.7, 68.5, 274.2);
        vaulter.bezierCurveTo(67.8, 273.7, 66.7, 272.7, 65.8, 271.7);
        vaulter.bezierCurveTo(64.8, 270.7, 64.2, 270.0, 63.7, 269.6);
        vaulter.bezierCurveTo(63.3, 269.2, 63.0, 269.3, 61.8, 269.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(49.1, 288.9);
        vaulter.bezierCurveTo(49.1, 288.9, 49.4, 278.5, 47.9, 274.3);
        vaulter.bezierCurveTo(46.5, 270.2, 48.6, 259.2, 50.8, 259.7);
        vaulter.bezierCurveTo(53.0, 260.2, 52.5, 257.7, 52.5, 257.7);
        vaulter.bezierCurveTo(52.5, 257.7, 50.1, 252.4, 50.0, 250.2);
        vaulter.bezierCurveTo(49.9, 248.0, 51.2, 242.6, 55.8, 242.3);
        vaulter.bezierCurveTo(60.3, 242.1, 62.0, 247.0, 62.0, 247.0);
        vaulter.bezierCurveTo(62.0, 247.0, 62.6, 251.3, 62.6, 252.5);
        vaulter.bezierCurveTo(62.6, 253.7, 60.2, 258.3, 60.2, 258.3);
        vaulter.bezierCurveTo(60.2, 258.3, 64.8, 264.8, 64.6, 267.9);
        vaulter.bezierCurveTo(64.6, 267.9, 64.6, 282.8, 63.5, 285.2);
        vaulter.bezierCurveTo(62.3, 287.5, 62.3, 292.2, 63.1, 294.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(48.4, 277.2);
        vaulter.bezierCurveTo(48.4, 277.2, 54.2, 277.9, 55.2, 270.5);
        vaulter.bezierCurveTo(56.2, 263.0, 53.3, 260.5, 51.3, 260.3);
        vaulter.bezierCurveTo(49.4, 260.1, 46.0, 263.6, 46.0, 268.7);
        vaulter.bezierCurveTo(46.0, 273.8, 46.2, 275.4, 48.4, 277.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(60.1, 290.0);
        vaulter.bezierCurveTo(67.3, 294.9, 76.1, 304.5, 76.5, 305.2);
        vaulter.bezierCurveTo(77.0, 305.9, 77.5, 310.5, 77.5, 310.5);
        vaulter.lineTo(81.8, 325.5);
        vaulter.bezierCurveTo(81.8, 325.5, 84.4, 329.9, 86.0, 330.7);
        vaulter.bezierCurveTo(87.7, 331.5, 91.3, 333.5, 91.9, 333.8);
        vaulter.bezierCurveTo(92.4, 334.1, 92.7, 335.4, 92.7, 335.4);
        vaulter.bezierCurveTo(92.7, 335.4, 93.5, 336.7, 92.1, 337.1);
        vaulter.bezierCurveTo(90.1, 337.8, 85.1, 335.6, 82.7, 335.1);
        vaulter.bezierCurveTo(80.4, 334.5, 80.8, 331.6, 80.8, 331.6);
        vaulter.lineTo(78.2, 325.9);
        vaulter.bezierCurveTo(71.6, 319.1, 70.7, 308.9, 70.7, 308.9);
        vaulter.bezierCurveTo(70.7, 308.9, 54.5, 301.4, 51.5, 300.1);
        vaulter.bezierCurveTo(46.8, 298.0, 49.1, 288.9, 49.1, 288.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(25.7, 305.1);
        vaulter.bezierCurveTo(25.7, 305.1, 25.0, 305.3, 24.6, 304.6);
        vaulter.bezierCurveTo(24.3, 303.8, 24.8, 303.3, 24.8, 303.3);
        vaulter.bezierCurveTo(25.3, 303.1, 75.6, 275.8, 129.9, 253.8);
        vaulter.lineTo(265.3, 198.7);
        vaulter.lineTo(266.1, 200.6);
        vaulter.lineTo(130.6, 255.7);
        vaulter.bezierCurveTo(76.4, 277.7, 26.2, 304.9, 25.7, 305.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(71.1, 281.3);
        vaulter.bezierCurveTo(71.1, 281.3, 72.1, 279.4, 72.8, 279.1);
        vaulter.bezierCurveTo(73.5, 278.8, 75.0, 278.9, 75.0, 278.9);
        vaulter.lineTo(75.6, 280.1);
        vaulter.lineTo(75.0, 281.8);
        vaulter.lineTo(73.0, 282.2);
        vaulter.bezierCurveTo(73.0, 282.2, 72.7, 282.8, 72.0, 282.6);
        vaulter.bezierCurveTo(71.4, 282.4, 71.1, 281.3, 71.1, 281.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(52.9, 261.8);
        vaulter.bezierCurveTo(52.9, 261.8, 51.0, 260.2, 48.8, 260.8);
        vaulter.bezierCurveTo(46.7, 261.5, 43.6, 264.5, 41.7, 266.5);
        vaulter.bezierCurveTo(39.8, 268.5, 37.2, 274.3, 36.5, 275.8);
        vaulter.bezierCurveTo(35.7, 277.3, 36.5, 278.3, 37.1, 282.5);
        vaulter.bezierCurveTo(37.7, 286.6, 39.6, 292.7, 39.6, 292.7);
        vaulter.bezierCurveTo(39.6, 292.7, 39.1, 293.8, 39.1, 294.3);
        vaulter.bezierCurveTo(39.1, 294.7, 38.8, 297.2, 40.0, 297.6);
        vaulter.bezierCurveTo(41.1, 297.9, 43.6, 297.1, 43.6, 297.1);
        vaulter.bezierCurveTo(43.6, 297.1, 45.0, 296.1, 44.7, 294.5);
        vaulter.bezierCurveTo(44.7, 294.5, 44.5, 292.4, 42.9, 292.3);
        vaulter.lineTo(41.9, 291.6);
        vaulter.bezierCurveTo(41.9, 291.6, 40.8, 288.1, 41.2, 284.3);
        vaulter.bezierCurveTo(41.6, 280.6, 41.2, 275.0, 41.2, 275.0);
        vaulter.lineTo(47.0, 270.8);
        vaulter.bezierCurveTo(50.5, 271.5, 52.9, 268.7, 52.9, 268.7);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(57.6, 265.5);
        vaulter.bezierCurveTo(57.6, 265.5, 59.3, 264.8, 61.1, 265.0);
        vaulter.bezierCurveTo(62.8, 265.3, 65.8, 267.2, 65.6, 269.4);
        vaulter.bezierCurveTo(65.6, 269.4, 69.5, 273.6, 70.0, 274.3);
        vaulter.bezierCurveTo(70.5, 275.0, 74.8, 277.5, 74.8, 279.6);
        vaulter.bezierCurveTo(74.7, 281.8, 74.2, 283.1, 74.5, 284.3);
        vaulter.lineTo(71.3, 285.6);
        vaulter.bezierCurveTo(71.3, 285.6, 69.6, 284.4, 69.2, 282.8);
        vaulter.bezierCurveTo(68.9, 281.1, 69.3, 280.4, 68.6, 279.9);
        vaulter.bezierCurveTo(68.0, 279.4, 66.8, 278.5, 65.9, 277.5);
        vaulter.bezierCurveTo(65.0, 276.5, 64.3, 275.7, 63.9, 275.3);
        vaulter.bezierCurveTo(63.4, 274.9, 63.2, 275.0, 61.9, 275.7);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 282.9);
        vaulter.bezierCurveTo(48.5, 282.9, 54.4, 283.7, 55.4, 276.2);
        vaulter.bezierCurveTo(56.3, 268.8, 53.4, 266.2, 51.4, 266.0);
        vaulter.bezierCurveTo(49.5, 265.8, 46.2, 269.4, 46.2, 274.4);
        vaulter.bezierCurveTo(46.2, 279.5, 46.4, 281.1, 48.5, 282.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(67.9, 307.4);
        vaulter.bezierCurveTo(64.9, 303.6, 63.2, 299.9, 63.2, 299.9);
        vaulter.bezierCurveTo(62.4, 298.0, 62.4, 293.3, 63.6, 290.9);
        vaulter.bezierCurveTo(64.8, 288.6, 64.8, 273.7, 64.8, 273.7);
        vaulter.bezierCurveTo(64.9, 270.5, 60.3, 264.0, 60.3, 264.0);
        vaulter.bezierCurveTo(60.3, 264.0, 62.7, 259.4, 62.7, 258.2);
        vaulter.bezierCurveTo(62.7, 257.1, 62.2, 252.8, 62.2, 252.8);
        vaulter.bezierCurveTo(62.2, 252.8, 60.5, 247.8, 55.9, 248.1);
        vaulter.bezierCurveTo(51.3, 248.3, 50.0, 253.7, 50.1, 255.9);
        vaulter.bezierCurveTo(50.3, 258.2, 52.6, 263.5, 52.6, 263.5);
        vaulter.bezierCurveTo(52.6, 263.5, 53.1, 266.0, 50.9, 265.4);
        vaulter.bezierCurveTo(48.7, 264.9, 46.6, 275.9, 48.1, 280.1);
        vaulter.bezierCurveTo(49.5, 284.2, 49.3, 294.6, 49.3, 294.6);
        vaulter.bezierCurveTo(47.8, 296.1, 49.1, 300.3, 49.1, 300.3);
        vaulter.bezierCurveTo(49.1, 300.3, 53.1, 307.6, 57.9, 311.3);
        vaulter.lineTo(46.9, 308.0);
        vaulter.bezierCurveTo(46.6, 307.5, 46.0, 306.6, 45.4, 306.3);
        vaulter.bezierCurveTo(44.5, 305.9, 43.6, 306.2, 43.6, 306.2);
        vaulter.bezierCurveTo(43.3, 306.4, 40.8, 307.6, 40.8, 307.6);
        vaulter.bezierCurveTo(40.8, 307.6, 36.8, 309.1, 36.4, 309.1);
        vaulter.bezierCurveTo(36.0, 309.1, 31.4, 310.7, 31.6, 312.0);
        vaulter.bezierCurveTo(31.7, 313.2, 33.2, 313.9, 33.9, 313.7);
        vaulter.bezierCurveTo(34.6, 313.6, 38.6, 312.6, 42.3, 312.1);
        vaulter.bezierCurveTo(46.1, 311.6, 54.9, 315.6, 58.7, 317.6);
        vaulter.bezierCurveTo(62.4, 319.6, 67.9, 319.9, 67.9, 319.9);
        vaulter.bezierCurveTo(67.9, 319.9, 71.2, 319.0, 71.4, 317.8);
        vaulter.bezierCurveTo(71.5, 316.6, 70.8, 311.2, 67.9, 307.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 282.9);
        vaulter.bezierCurveTo(48.5, 282.9, 54.4, 283.7, 55.4, 276.2);
        vaulter.bezierCurveTo(56.3, 268.8, 53.4, 266.2, 51.4, 266.0);
        vaulter.bezierCurveTo(49.5, 265.8, 46.2, 269.4, 46.2, 274.4);
        vaulter.bezierCurveTo(46.2, 279.5, 46.4, 281.1, 48.5, 282.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(49.3, 295.0);
        vaulter.bezierCurveTo(47.9, 297.2, 49.3, 300.9, 49.3, 300.9);
        vaulter.bezierCurveTo(49.3, 300.9, 54.6, 311.5, 59.1, 315.2);
        vaulter.lineTo(59.1, 316.9);
        vaulter.bezierCurveTo(59.1, 316.9, 55.4, 324.5, 55.2, 326.4);
        vaulter.bezierCurveTo(54.9, 328.3, 54.9, 332.6, 54.9, 333.2);
        vaulter.bezierCurveTo(54.9, 333.8, 54.8, 337.4, 54.9, 338.3);
        vaulter.bezierCurveTo(55.0, 339.2, 55.8, 339.9, 56.2, 341.0);
        vaulter.bezierCurveTo(56.3, 341.3, 59.7, 342.5, 59.7, 342.5);
        vaulter.bezierCurveTo(59.7, 342.5, 61.2, 342.7, 61.9, 342.6);
        vaulter.bezierCurveTo(63.4, 342.3, 64.6, 341.6, 64.6, 341.6);
        vaulter.bezierCurveTo(64.6, 341.6, 64.4, 339.4, 63.6, 339.2);
        vaulter.bezierCurveTo(62.9, 339.0, 60.7, 337.8, 60.0, 337.3);
        vaulter.bezierCurveTo(59.3, 336.7, 58.1, 335.0, 58.1, 335.0);
        vaulter.bezierCurveTo(58.1, 335.0, 58.5, 332.2, 60.2, 328.7);
        vaulter.bezierCurveTo(61.9, 325.2, 63.0, 321.9, 64.7, 320.3);
        vaulter.bezierCurveTo(66.0, 319.1, 65.6, 315.3, 65.6, 315.3);
        vaulter.bezierCurveTo(65.6, 315.3, 65.7, 312.1, 65.0, 309.1);
        vaulter.bezierCurveTo(64.4, 306.2, 61.7, 299.9, 61.5, 299.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(25.8, 310.8);
        vaulter.bezierCurveTo(25.8, 310.8, 25.2, 311.0, 24.8, 310.3);
        vaulter.bezierCurveTo(24.4, 309.6, 24.9, 309.1, 24.9, 309.1);
        vaulter.bezierCurveTo(25.4, 308.8, 75.7, 281.6, 130.0, 259.5);
        vaulter.lineTo(265.5, 204.4);
        vaulter.lineTo(266.2, 206.3);
        vaulter.lineTo(130.8, 261.4);
        vaulter.bezierCurveTo(76.5, 283.4, 26.3, 310.6, 25.8, 310.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(71.2, 287.0);
        vaulter.bezierCurveTo(71.2, 287.0, 72.2, 285.1, 72.9, 284.8);
        vaulter.bezierCurveTo(73.6, 284.5, 75.1, 284.6, 75.1, 284.6);
        vaulter.lineTo(75.7, 285.8);
        vaulter.lineTo(75.1, 287.6);
        vaulter.lineTo(73.2, 288.0);
        vaulter.bezierCurveTo(73.2, 288.0, 72.8, 288.5, 72.2, 288.3);
        vaulter.bezierCurveTo(71.5, 288.2, 71.2, 287.0, 71.2, 287.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.0, 267.6);
        vaulter.bezierCurveTo(53.0, 267.6, 51.1, 265.9, 49.0, 266.6);
        vaulter.bezierCurveTo(46.8, 267.2, 43.7, 270.2, 41.8, 272.2);
        vaulter.bezierCurveTo(40.0, 274.2, 37.3, 280.1, 36.6, 281.5);
        vaulter.bezierCurveTo(35.8, 283.0, 36.6, 284.1, 37.2, 288.2);
        vaulter.bezierCurveTo(37.8, 292.3, 39.8, 298.4, 39.8, 298.4);
        vaulter.bezierCurveTo(39.8, 298.4, 39.2, 299.5, 39.2, 300.0);
        vaulter.bezierCurveTo(39.2, 300.4, 38.9, 303.0, 40.1, 303.3);
        vaulter.bezierCurveTo(41.3, 303.6, 43.7, 302.8, 43.7, 302.8);
        vaulter.bezierCurveTo(43.7, 302.8, 45.2, 301.8, 44.9, 300.3);
        vaulter.bezierCurveTo(44.9, 300.3, 44.7, 298.1, 43.0, 298.0);
        vaulter.lineTo(42.1, 297.3);
        vaulter.bezierCurveTo(42.1, 297.3, 41.0, 293.8, 41.3, 290.1);
        vaulter.bezierCurveTo(41.7, 286.3, 41.3, 280.7, 41.3, 280.7);
        vaulter.lineTo(47.2, 276.6);
        vaulter.bezierCurveTo(50.7, 277.2, 53.0, 274.4, 53.0, 274.4);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(57.6, 271.6);
        vaulter.bezierCurveTo(57.6, 271.6, 59.3, 270.8, 61.1, 271.1);
        vaulter.bezierCurveTo(62.8, 271.3, 65.8, 273.2, 65.6, 275.4);
        vaulter.bezierCurveTo(65.6, 275.4, 69.5, 279.6, 70.0, 280.3);
        vaulter.bezierCurveTo(70.5, 281.0, 74.8, 283.5, 74.8, 285.7);
        vaulter.bezierCurveTo(74.7, 287.9, 74.2, 289.1, 74.5, 290.3);
        vaulter.lineTo(71.3, 291.7);
        vaulter.bezierCurveTo(71.3, 291.7, 69.6, 290.4, 69.2, 288.8);
        vaulter.bezierCurveTo(68.9, 287.2, 69.3, 286.4, 68.6, 285.9);
        vaulter.bezierCurveTo(68.0, 285.4, 66.8, 284.5, 65.9, 283.5);
        vaulter.bezierCurveTo(65.0, 282.5, 64.3, 281.7, 63.9, 281.3);
        vaulter.bezierCurveTo(63.4, 281.0, 63.2, 281.1, 61.9, 281.7);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(52.0, 305.0);
        vaulter.bezierCurveTo(52.0, 305.0, 59.0, 310.6, 66.5, 311.2);
        vaulter.bezierCurveTo(66.5, 311.2, 60.6, 313.6, 56.9, 315.3);
        vaulter.bezierCurveTo(53.3, 317.0, 52.4, 317.3, 50.9, 317.3);
        vaulter.bezierCurveTo(50.1, 317.3, 49.7, 317.4, 49.1, 317.8);
        vaulter.bezierCurveTo(48.6, 318.1, 48.6, 319.0, 48.7, 319.6);
        vaulter.bezierCurveTo(49.2, 321.2, 52.2, 324.8, 52.2, 324.8);
        vaulter.bezierCurveTo(52.2, 324.8, 55.2, 328.6, 55.8, 328.5);
        vaulter.bezierCurveTo(57.0, 328.1, 56.7, 326.5, 56.7, 326.5);
        vaulter.lineTo(54.5, 320.6);
        vaulter.lineTo(56.9, 319.8);
        vaulter.lineTo(67.4, 317.6);
        vaulter.bezierCurveTo(67.4, 317.6, 75.8, 315.0, 77.2, 314.0);
        vaulter.bezierCurveTo(78.6, 313.1, 77.5, 310.8, 77.2, 309.8);
        vaulter.bezierCurveTo(77.0, 308.8, 65.1, 299.5, 65.1, 299.5);
        vaulter.bezierCurveTo(62.8, 297.7, 58.4, 295.8, 58.4, 295.8);
        vaulter.lineTo(52.0, 305.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.7, 303.4);
        vaulter.bezierCurveTo(59.1, 309.5, 55.5, 321.3, 54.8, 323.0);
        vaulter.bezierCurveTo(53.8, 325.4, 52.2, 326.5, 52.2, 326.5);
        vaulter.bezierCurveTo(52.2, 326.5, 41.6, 331.3, 41.3, 332.2);
        vaulter.bezierCurveTo(41.0, 333.1, 40.4, 334.5, 40.4, 334.5);
        vaulter.bezierCurveTo(40.4, 334.5, 41.0, 336.1, 41.9, 337.4);
        vaulter.bezierCurveTo(43.0, 339.0, 42.6, 340.4, 42.4, 341.3);
        vaulter.bezierCurveTo(42.3, 341.7, 42.0, 342.9, 41.4, 343.0);
        vaulter.bezierCurveTo(41.0, 343.1, 40.4, 342.8, 39.7, 342.4);
        vaulter.bezierCurveTo(38.0, 341.6, 37.2, 338.5, 37.3, 337.5);
        vaulter.bezierCurveTo(37.5, 335.6, 35.6, 334.1, 35.6, 333.2);
        vaulter.bezierCurveTo(35.7, 332.1, 36.4, 330.6, 36.4, 330.6);
        vaulter.bezierCurveTo(36.4, 330.6, 36.6, 330.3, 38.0, 330.0);
        vaulter.bezierCurveTo(39.4, 329.6, 49.4, 320.4, 49.4, 319.8);
        vaulter.bezierCurveTo(49.4, 319.8, 49.0, 303.4, 49.3, 300.7);
        vaulter.bezierCurveTo(49.3, 300.7, 49.5, 290.3, 48.1, 286.1);
        vaulter.bezierCurveTo(46.6, 281.9, 48.7, 270.9, 50.9, 271.5);
        vaulter.bezierCurveTo(53.1, 272.0, 52.6, 269.5, 52.6, 269.5);
        vaulter.bezierCurveTo(52.6, 269.5, 50.3, 264.2, 50.1, 262.0);
        vaulter.bezierCurveTo(50.0, 259.8, 51.3, 254.4, 55.9, 254.1);
        vaulter.bezierCurveTo(60.5, 253.8, 62.2, 258.8, 62.2, 258.8);
        vaulter.bezierCurveTo(62.2, 258.8, 62.7, 263.1, 62.7, 264.3);
        vaulter.bezierCurveTo(62.7, 265.4, 60.3, 270.0, 60.3, 270.0);
        vaulter.bezierCurveTo(60.3, 270.0, 64.9, 276.6, 64.8, 279.7);
        vaulter.bezierCurveTo(64.8, 279.7, 64.8, 294.6, 63.6, 296.9);
        vaulter.bezierCurveTo(63.2, 297.7, 63.0, 298.7, 62.8, 299.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 288.9);
        vaulter.bezierCurveTo(48.5, 288.9, 54.4, 289.7, 55.4, 282.2);
        vaulter.bezierCurveTo(56.3, 274.8, 53.4, 272.3, 51.4, 272.1);
        vaulter.bezierCurveTo(49.5, 271.9, 46.2, 275.4, 46.2, 280.5);
        vaulter.bezierCurveTo(46.2, 285.6, 46.4, 287.2, 48.5, 288.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(25.8, 316.9);
        vaulter.bezierCurveTo(25.8, 316.9, 25.2, 317.0, 24.8, 316.3);
        vaulter.bezierCurveTo(24.4, 315.6, 24.9, 315.1, 24.9, 315.1);
        vaulter.bezierCurveTo(25.4, 314.8, 75.7, 287.6, 130.0, 265.6);
        vaulter.lineTo(265.5, 210.5);
        vaulter.lineTo(266.2, 212.3);
        vaulter.lineTo(130.8, 267.4);
        vaulter.bezierCurveTo(76.5, 289.4, 26.3, 316.6, 25.8, 316.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(71.2, 293.0);
        vaulter.bezierCurveTo(71.2, 293.0, 72.2, 291.2, 72.9, 290.8);
        vaulter.bezierCurveTo(73.6, 290.5, 75.1, 290.6, 75.1, 290.6);
        vaulter.lineTo(75.7, 291.8);
        vaulter.lineTo(75.1, 293.6);
        vaulter.lineTo(73.2, 294.0);
        vaulter.bezierCurveTo(73.2, 294.0, 72.8, 294.5, 72.2, 294.4);
        vaulter.bezierCurveTo(71.5, 294.2, 71.2, 293.0, 71.2, 293.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.0, 273.6);
        vaulter.bezierCurveTo(53.0, 273.6, 51.1, 272.0, 49.0, 272.6);
        vaulter.bezierCurveTo(46.8, 273.2, 43.7, 276.2, 41.8, 278.2);
        vaulter.bezierCurveTo(40.0, 280.2, 37.3, 286.1, 36.6, 287.6);
        vaulter.bezierCurveTo(35.8, 289.0, 36.6, 290.1, 37.2, 294.2);
        vaulter.bezierCurveTo(37.8, 298.4, 39.8, 304.5, 39.8, 304.5);
        vaulter.bezierCurveTo(39.8, 304.5, 39.2, 305.6, 39.2, 306.0);
        vaulter.bezierCurveTo(39.2, 306.5, 38.9, 309.0, 40.1, 309.3);
        vaulter.bezierCurveTo(41.3, 309.6, 43.7, 308.9, 43.7, 308.9);
        vaulter.bezierCurveTo(43.7, 308.9, 45.2, 307.9, 44.9, 306.3);
        vaulter.bezierCurveTo(44.9, 306.3, 44.7, 304.2, 43.0, 304.0);
        vaulter.lineTo(42.1, 303.3);
        vaulter.bezierCurveTo(42.1, 303.3, 41.0, 299.9, 41.3, 296.1);
        vaulter.bezierCurveTo(41.7, 292.4, 41.3, 286.7, 41.3, 286.7);
        vaulter.lineTo(47.2, 282.6);
        vaulter.bezierCurveTo(50.7, 283.2, 53.0, 280.5, 53.0, 280.5);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(57.6, 265.9);
        vaulter.bezierCurveTo(57.6, 265.9, 59.3, 265.1, 61.1, 265.4);
        vaulter.bezierCurveTo(62.8, 265.6, 65.8, 267.6, 65.6, 269.8);
        vaulter.bezierCurveTo(65.6, 269.8, 69.5, 273.9, 70.0, 274.6);
        vaulter.bezierCurveTo(70.5, 275.3, 74.8, 277.8, 74.8, 280.0);
        vaulter.bezierCurveTo(74.7, 282.2, 74.2, 283.5, 74.5, 284.6);
        vaulter.lineTo(71.3, 286.0);
        vaulter.bezierCurveTo(71.3, 286.0, 69.6, 284.8, 69.2, 283.1);
        vaulter.bezierCurveTo(68.9, 281.5, 69.3, 280.8, 68.6, 280.3);
        vaulter.bezierCurveTo(68.0, 279.8, 66.8, 278.8, 65.9, 277.8);
        vaulter.bezierCurveTo(65.0, 276.8, 64.3, 276.1, 63.9, 275.7);
        vaulter.bezierCurveTo(63.4, 275.3, 63.2, 275.4, 61.9, 276.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(56.9, 306.4);
        vaulter.bezierCurveTo(63.2, 308.3, 71.5, 307.1, 71.5, 307.1);
        vaulter.bezierCurveTo(71.5, 307.1, 70.9, 313.0, 70.9, 315.0);
        vaulter.bezierCurveTo(70.9, 316.9, 69.2, 327.6, 69.2, 327.6);
        vaulter.bezierCurveTo(69.2, 327.6, 67.2, 329.5, 67.4, 330.0);
        vaulter.bezierCurveTo(67.5, 330.5, 67.6, 331.9, 69.4, 332.4);
        vaulter.bezierCurveTo(70.2, 332.6, 72.5, 333.6, 74.6, 334.6);
        vaulter.bezierCurveTo(76.7, 335.5, 78.6, 336.4, 78.6, 336.4);
        vaulter.bezierCurveTo(78.6, 336.4, 79.5, 336.0, 79.6, 335.1);
        vaulter.bezierCurveTo(79.7, 334.3, 76.5, 331.1, 75.5, 330.2);
        vaulter.bezierCurveTo(74.4, 329.2, 73.1, 328.9, 73.1, 328.9);
        vaulter.bezierCurveTo(73.1, 328.9, 77.4, 314.3, 77.6, 312.8);
        vaulter.bezierCurveTo(77.9, 311.3, 80.6, 307.1, 80.4, 305.5);
        vaulter.bezierCurveTo(80.3, 305.1, 80.6, 304.3, 79.7, 303.5);
        vaulter.bezierCurveTo(77.4, 301.2, 71.8, 298.9, 64.7, 296.3);
        vaulter.lineTo(58.1, 294.8);
        vaulter.bezierCurveTo(58.1, 294.8, 56.1, 296.8, 55.6, 300.3);
        vaulter.bezierCurveTo(55.0, 303.8, 56.9, 306.4, 56.9, 306.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 297.0);
        vaulter.bezierCurveTo(62.6, 295.0, 62.9, 292.7, 63.6, 291.3);
        vaulter.bezierCurveTo(64.8, 288.9, 64.8, 274.0, 64.8, 274.0);
        vaulter.bezierCurveTo(64.9, 270.9, 60.3, 264.4, 60.3, 264.4);
        vaulter.bezierCurveTo(60.3, 264.4, 62.7, 259.8, 62.7, 258.6);
        vaulter.bezierCurveTo(62.7, 257.4, 62.2, 253.1, 62.2, 253.1);
        vaulter.bezierCurveTo(62.2, 253.1, 60.5, 248.2, 55.9, 248.4);
        vaulter.bezierCurveTo(51.3, 248.7, 50.0, 254.1, 50.1, 256.3);
        vaulter.bezierCurveTo(50.3, 258.5, 52.6, 263.8, 52.6, 263.8);
        vaulter.bezierCurveTo(52.6, 263.8, 53.1, 266.3, 50.9, 265.8);
        vaulter.bezierCurveTo(48.7, 265.3, 46.6, 276.2, 48.1, 280.4);
        vaulter.bezierCurveTo(49.5, 284.6, 49.3, 295.0, 49.3, 295.0);
        vaulter.bezierCurveTo(49.3, 295.0, 48.4, 296.8, 48.6, 299.0);
        vaulter.lineTo(47.1, 301.6);
        vaulter.bezierCurveTo(42.9, 308.6, 41.7, 319.8, 41.7, 319.8);
        vaulter.bezierCurveTo(35.2, 323.0, 27.1, 330.9, 27.1, 330.9);
        vaulter.bezierCurveTo(27.1, 330.9, 26.0, 332.1, 25.4, 332.1);
        vaulter.bezierCurveTo(24.7, 332.1, 23.0, 331.8, 22.5, 332.1);
        vaulter.bezierCurveTo(22.0, 332.5, 21.2, 333.8, 21.2, 334.0);
        vaulter.bezierCurveTo(21.2, 334.1, 22.4, 340.0, 22.9, 341.3);
        vaulter.bezierCurveTo(23.4, 342.5, 26.0, 343.0, 26.0, 343.0);
        vaulter.lineTo(30.5, 343.0);
        vaulter.bezierCurveTo(30.5, 343.0, 30.9, 341.0, 30.1, 340.6);
        vaulter.bezierCurveTo(29.4, 340.3, 28.5, 340.1, 28.5, 340.1);
        vaulter.bezierCurveTo(28.5, 340.1, 27.0, 336.5, 27.1, 335.5);
        vaulter.bezierCurveTo(27.2, 334.5, 29.2, 334.0, 29.2, 334.0);
        vaulter.lineTo(41.2, 327.3);
        vaulter.bezierCurveTo(41.2, 327.3, 43.4, 326.5, 45.9, 324.6);
        vaulter.bezierCurveTo(48.4, 322.8, 60.4, 303.5, 60.4, 303.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 283.2);
        vaulter.bezierCurveTo(48.5, 283.2, 54.4, 284.0, 55.4, 276.6);
        vaulter.bezierCurveTo(56.3, 269.1, 53.4, 266.6, 51.4, 266.4);
        vaulter.bezierCurveTo(49.5, 266.2, 46.2, 269.7, 46.2, 274.8);
        vaulter.bezierCurveTo(46.2, 279.9, 46.4, 281.5, 48.5, 283.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(25.8, 311.2);
        vaulter.bezierCurveTo(25.8, 311.2, 25.2, 311.4, 24.8, 310.6);
        vaulter.bezierCurveTo(24.4, 309.9, 24.9, 309.4, 24.9, 309.4);
        vaulter.bezierCurveTo(25.4, 309.2, 75.7, 281.9, 130.0, 259.9);
        vaulter.lineTo(265.5, 204.8);
        vaulter.lineTo(266.2, 206.7);
        vaulter.lineTo(130.8, 261.8);
        vaulter.bezierCurveTo(76.5, 283.8, 26.3, 311.0, 25.8, 311.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(71.2, 287.4);
        vaulter.bezierCurveTo(71.2, 287.4, 72.2, 285.5, 72.9, 285.2);
        vaulter.bezierCurveTo(73.6, 284.9, 75.1, 285.0, 75.1, 285.0);
        vaulter.lineTo(75.7, 286.2);
        vaulter.lineTo(75.1, 287.9);
        vaulter.lineTo(73.2, 288.3);
        vaulter.bezierCurveTo(73.2, 288.3, 72.8, 288.9, 72.2, 288.7);
        vaulter.bezierCurveTo(71.5, 288.5, 71.2, 287.4, 71.2, 287.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.0, 267.9);
        vaulter.bezierCurveTo(53.0, 267.9, 51.1, 266.3, 49.0, 266.9);
        vaulter.bezierCurveTo(46.8, 267.6, 43.7, 270.6, 41.8, 272.6);
        vaulter.bezierCurveTo(40.0, 274.6, 37.3, 280.4, 36.6, 281.9);
        vaulter.bezierCurveTo(35.8, 283.4, 36.6, 284.4, 37.2, 288.6);
        vaulter.bezierCurveTo(37.8, 292.7, 39.8, 298.8, 39.8, 298.8);
        vaulter.bezierCurveTo(39.8, 298.8, 39.2, 299.9, 39.2, 300.4);
        vaulter.bezierCurveTo(39.2, 300.8, 38.9, 303.3, 40.1, 303.6);
        vaulter.bezierCurveTo(41.3, 304.0, 43.7, 303.2, 43.7, 303.2);
        vaulter.bezierCurveTo(43.7, 303.2, 45.2, 302.2, 44.9, 300.6);
        vaulter.bezierCurveTo(44.9, 300.6, 44.7, 298.5, 43.0, 298.4);
        vaulter.lineTo(42.1, 297.7);
        vaulter.bezierCurveTo(42.1, 297.7, 41.0, 294.2, 41.3, 290.4);
        vaulter.bezierCurveTo(41.7, 286.7, 41.3, 281.1, 41.3, 281.1);
        vaulter.lineTo(47.2, 276.9);
        vaulter.bezierCurveTo(50.7, 277.6, 53.0, 274.8, 53.0, 274.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(57.6, 261.9);
        vaulter.bezierCurveTo(57.6, 261.9, 59.3, 261.1, 61.1, 261.4);
        vaulter.bezierCurveTo(62.8, 261.6, 65.8, 263.6, 65.6, 265.8);
        vaulter.bezierCurveTo(65.6, 265.8, 69.5, 269.9, 70.0, 270.6);
        vaulter.bezierCurveTo(70.5, 271.3, 74.8, 273.8, 74.8, 276.0);
        vaulter.bezierCurveTo(74.7, 278.2, 74.2, 279.5, 74.5, 280.6);
        vaulter.lineTo(71.3, 282.0);
        vaulter.bezierCurveTo(71.3, 282.0, 69.6, 280.8, 69.2, 279.1);
        vaulter.bezierCurveTo(68.9, 277.5, 69.3, 276.8, 68.6, 276.3);
        vaulter.bezierCurveTo(68.0, 275.8, 66.8, 274.8, 65.9, 273.8);
        vaulter.bezierCurveTo(65.0, 272.8, 64.3, 272.1, 63.9, 271.7);
        vaulter.bezierCurveTo(63.4, 271.3, 63.2, 271.4, 61.9, 272.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 292.0);
        vaulter.bezierCurveTo(69.7, 295.0, 78.1, 301.3, 79.9, 302.1);
        vaulter.bezierCurveTo(81.7, 302.9, 82.3, 303.5, 82.8, 305.2);
        vaulter.bezierCurveTo(83.3, 306.9, 84.0, 313.7, 85.3, 319.0);
        vaulter.bezierCurveTo(86.7, 324.4, 89.5, 327.5, 89.5, 327.5);
        vaulter.bezierCurveTo(89.5, 327.5, 91.0, 329.2, 93.5, 329.0);
        vaulter.bezierCurveTo(96.0, 328.9, 98.0, 328.2, 99.5, 329.4);
        vaulter.bezierCurveTo(101.0, 330.5, 96.5, 332.7, 94.8, 333.3);
        vaulter.bezierCurveTo(93.2, 333.8, 91.2, 333.2, 88.5, 334.0);
        vaulter.bezierCurveTo(85.8, 334.9, 85.3, 334.0, 85.0, 333.0);
        vaulter.bezierCurveTo(84.7, 332.0, 85.0, 330.4, 85.0, 330.4);
        vaulter.lineTo(82.3, 324.7);
        vaulter.bezierCurveTo(78.8, 318.0, 75.7, 308.5, 75.7, 308.5);
        vaulter.lineTo(59.2, 303.6);
        vaulter.lineTo(62.7, 292.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 293.3);
        vaulter.bezierCurveTo(62.6, 291.2, 62.8, 288.8, 63.6, 287.3);
        vaulter.bezierCurveTo(64.8, 284.9, 64.8, 270.0, 64.8, 270.0);
        vaulter.bezierCurveTo(64.9, 266.9, 60.3, 260.4, 60.3, 260.4);
        vaulter.bezierCurveTo(60.3, 260.4, 62.7, 255.8, 62.7, 254.6);
        vaulter.bezierCurveTo(62.7, 253.4, 62.2, 249.1, 62.2, 249.1);
        vaulter.bezierCurveTo(62.2, 249.1, 60.5, 244.2, 55.9, 244.4);
        vaulter.bezierCurveTo(51.3, 244.7, 50.0, 250.1, 50.1, 252.3);
        vaulter.bezierCurveTo(50.3, 254.5, 52.6, 259.8, 52.6, 259.8);
        vaulter.bezierCurveTo(52.6, 259.8, 53.1, 262.3, 50.9, 261.8);
        vaulter.bezierCurveTo(48.7, 261.3, 46.6, 272.2, 48.1, 276.4);
        vaulter.bezierCurveTo(49.5, 280.6, 49.3, 291.0, 49.3, 291.0);
        vaulter.bezierCurveTo(49.3, 291.0, 48.5, 292.7, 48.6, 294.8);
        vaulter.bezierCurveTo(44.9, 306.4, 42.8, 317.7, 42.8, 317.7);
        vaulter.bezierCurveTo(41.8, 317.3, 36.8, 317.7, 32.6, 318.5);
        vaulter.bezierCurveTo(27.9, 319.5, 23.3, 319.3, 23.3, 319.3);
        vaulter.bezierCurveTo(23.3, 319.3, 22.4, 318.5, 21.2, 318.5);
        vaulter.bezierCurveTo(19.9, 318.4, 19.3, 319.0, 18.0, 322.0);
        vaulter.bezierCurveTo(16.9, 324.7, 14.8, 326.9, 14.8, 326.9);
        vaulter.bezierCurveTo(14.8, 326.9, 13.5, 330.4, 14.8, 330.7);
        vaulter.bezierCurveTo(16.2, 331.0, 16.8, 328.9, 19.3, 326.7);
        vaulter.bezierCurveTo(21.8, 324.5, 26.5, 323.7, 26.5, 323.7);
        vaulter.bezierCurveTo(26.5, 323.7, 42.3, 323.9, 46.0, 322.5);
        vaulter.bezierCurveTo(49.7, 321.2, 60.7, 301.0, 60.7, 301.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 279.2);
        vaulter.bezierCurveTo(48.5, 279.2, 54.4, 280.0, 55.4, 272.6);
        vaulter.bezierCurveTo(56.3, 265.1, 53.4, 262.6, 51.4, 262.4);
        vaulter.bezierCurveTo(49.5, 262.2, 46.2, 265.7, 46.2, 270.8);
        vaulter.bezierCurveTo(46.2, 275.9, 46.4, 277.5, 48.5, 279.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(25.8, 307.2);
        vaulter.bezierCurveTo(25.8, 307.2, 25.2, 307.4, 24.8, 306.6);
        vaulter.bezierCurveTo(24.4, 305.9, 24.9, 305.4, 24.9, 305.4);
        vaulter.bezierCurveTo(25.4, 305.2, 75.7, 277.9, 130.0, 255.9);
        vaulter.lineTo(265.5, 200.8);
        vaulter.lineTo(266.2, 202.7);
        vaulter.lineTo(130.8, 257.8);
        vaulter.bezierCurveTo(76.5, 279.8, 26.3, 307.0, 25.8, 307.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(71.2, 283.4);
        vaulter.bezierCurveTo(71.2, 283.4, 72.2, 281.5, 72.9, 281.2);
        vaulter.bezierCurveTo(73.6, 280.9, 75.1, 281.0, 75.1, 281.0);
        vaulter.lineTo(75.7, 282.2);
        vaulter.lineTo(75.1, 283.9);
        vaulter.lineTo(73.2, 284.3);
        vaulter.bezierCurveTo(73.2, 284.3, 72.8, 284.9, 72.2, 284.7);
        vaulter.bezierCurveTo(71.5, 284.5, 71.2, 283.4, 71.2, 283.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.0, 263.9);
        vaulter.bezierCurveTo(53.0, 263.9, 51.1, 262.3, 49.0, 262.9);
        vaulter.bezierCurveTo(46.8, 263.6, 43.7, 266.6, 41.8, 268.6);
        vaulter.bezierCurveTo(40.0, 270.6, 37.3, 276.4, 36.6, 277.9);
        vaulter.bezierCurveTo(35.8, 279.4, 36.6, 280.4, 37.2, 284.6);
        vaulter.bezierCurveTo(37.8, 288.7, 39.8, 294.8, 39.8, 294.8);
        vaulter.bezierCurveTo(39.8, 294.8, 39.2, 295.9, 39.2, 296.4);
        vaulter.bezierCurveTo(39.2, 296.8, 38.9, 299.3, 40.1, 299.6);
        vaulter.bezierCurveTo(41.3, 300.0, 43.7, 299.2, 43.7, 299.2);
        vaulter.bezierCurveTo(43.7, 299.2, 45.2, 298.2, 44.9, 296.6);
        vaulter.bezierCurveTo(44.9, 296.6, 44.7, 294.5, 43.0, 294.4);
        vaulter.lineTo(42.1, 293.7);
        vaulter.bezierCurveTo(42.1, 293.7, 41.0, 290.2, 41.3, 286.4);
        vaulter.bezierCurveTo(41.7, 282.7, 41.3, 277.1, 41.3, 277.1);
        vaulter.lineTo(47.2, 272.9);
        vaulter.bezierCurveTo(50.7, 273.6, 53.0, 270.8, 53.0, 270.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(57.6, 269.8);
        vaulter.bezierCurveTo(57.6, 269.8, 59.3, 269.1, 61.1, 269.3);
        vaulter.bezierCurveTo(62.8, 269.6, 65.8, 271.5, 65.6, 273.7);
        vaulter.bezierCurveTo(65.6, 273.7, 69.5, 277.9, 70.0, 278.6);
        vaulter.bezierCurveTo(70.5, 279.3, 74.8, 281.8, 74.8, 284.0);
        vaulter.bezierCurveTo(74.7, 286.2, 74.2, 287.4, 74.5, 288.6);
        vaulter.lineTo(71.3, 290.0);
        vaulter.bezierCurveTo(71.3, 290.0, 69.6, 288.7, 69.2, 287.1);
        vaulter.bezierCurveTo(68.9, 285.5, 69.3, 284.7, 68.6, 284.2);
        vaulter.bezierCurveTo(68.0, 283.7, 66.8, 282.8, 65.9, 281.8);
        vaulter.bezierCurveTo(65.0, 280.8, 64.3, 280.0, 63.9, 279.6);
        vaulter.bezierCurveTo(63.4, 279.2, 63.2, 279.4, 61.9, 280.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 300.1);
        vaulter.bezierCurveTo(62.7, 298.3, 63.0, 296.4, 63.6, 295.2);
        vaulter.bezierCurveTo(64.8, 292.9, 64.8, 278.0, 64.8, 278.0);
        vaulter.bezierCurveTo(64.9, 274.9, 60.3, 268.3, 60.3, 268.3);
        vaulter.bezierCurveTo(60.3, 268.3, 62.7, 263.7, 62.7, 262.6);
        vaulter.bezierCurveTo(62.7, 261.4, 62.2, 257.1, 62.2, 257.1);
        vaulter.bezierCurveTo(62.2, 257.1, 60.5, 252.1, 55.9, 252.4);
        vaulter.bezierCurveTo(51.3, 252.6, 50.0, 258.1, 50.1, 260.3);
        vaulter.bezierCurveTo(50.3, 262.5, 52.6, 267.8, 52.6, 267.8);
        vaulter.bezierCurveTo(52.6, 267.8, 53.1, 270.3, 50.9, 269.8);
        vaulter.bezierCurveTo(48.7, 269.2, 46.6, 280.2, 48.1, 284.4);
        vaulter.bezierCurveTo(49.5, 288.6, 49.3, 299.0, 49.3, 299.0);
        vaulter.bezierCurveTo(49.3, 299.0, 49.2, 310.7, 50.0, 317.7);
        vaulter.bezierCurveTo(50.0, 317.7, 46.7, 319.9, 44.2, 323.6);
        vaulter.bezierCurveTo(41.7, 327.2, 32.5, 332.4, 32.5, 332.4);
        vaulter.bezierCurveTo(32.5, 332.4, 31.2, 333.4, 30.5, 334.4);
        vaulter.bezierCurveTo(29.8, 335.4, 31.3, 337.1, 31.3, 337.1);
        vaulter.bezierCurveTo(31.3, 337.1, 33.9, 340.2, 34.7, 340.9);
        vaulter.bezierCurveTo(35.2, 341.3, 35.6, 342.4, 36.0, 342.7);
        vaulter.bezierCurveTo(36.3, 343.0, 38.0, 343.3, 38.5, 342.3);
        vaulter.bezierCurveTo(39.0, 341.3, 37.1, 341.3, 37.0, 340.1);
        vaulter.bezierCurveTo(36.8, 338.1, 35.3, 335.1, 35.3, 335.1);
        vaulter.bezierCurveTo(35.3, 335.1, 45.5, 330.4, 49.3, 326.8);
        vaulter.bezierCurveTo(49.3, 326.8, 55.3, 321.9, 56.8, 318.6);
        vaulter.bezierCurveTo(58.3, 315.2, 60.5, 303.0, 60.7, 302.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(60.3, 298.2);
        vaulter.bezierCurveTo(71.2, 300.0, 78.5, 305.7, 78.5, 305.7);
        vaulter.bezierCurveTo(78.5, 305.7, 80.5, 307.3, 80.5, 309.0);
        vaulter.bezierCurveTo(80.4, 311.6, 79.7, 312.0, 75.2, 315.5);
        vaulter.bezierCurveTo(70.7, 319.0, 62.1, 325.0, 62.1, 325.0);
        vaulter.bezierCurveTo(62.3, 325.3, 63.4, 327.2, 63.9, 328.1);
        vaulter.bezierCurveTo(64.9, 329.9, 66.2, 331.4, 65.9, 332.3);
        vaulter.bezierCurveTo(65.7, 332.7, 64.8, 332.4, 64.5, 332.3);
        vaulter.bezierCurveTo(64.0, 332.1, 62.0, 330.3, 60.8, 329.2);
        vaulter.bezierCurveTo(59.7, 328.0, 56.7, 324.8, 56.8, 324.0);
        vaulter.bezierCurveTo(56.9, 323.7, 57.2, 323.0, 57.6, 322.7);
        vaulter.bezierCurveTo(58.6, 322.0, 59.9, 321.7, 59.9, 321.7);
        vaulter.bezierCurveTo(59.9, 321.7, 63.3, 318.7, 65.2, 316.7);
        vaulter.bezierCurveTo(67.0, 314.7, 70.3, 310.3, 70.3, 310.3);
        vaulter.bezierCurveTo(70.3, 310.3, 65.5, 310.4, 57.0, 309.7);
        vaulter.bezierCurveTo(48.5, 309.1, 48.7, 300.8, 48.7, 300.8);
        vaulter.bezierCurveTo(48.7, 299.9, 48.9, 299.1, 49.3, 298.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.5, 287.2);
        vaulter.bezierCurveTo(48.5, 287.2, 54.4, 288.0, 55.4, 280.5);
        vaulter.bezierCurveTo(56.3, 273.1, 53.4, 270.5, 51.4, 270.3);
        vaulter.bezierCurveTo(49.5, 270.1, 46.2, 273.7, 46.2, 278.8);
        vaulter.bezierCurveTo(46.2, 283.9, 46.4, 285.4, 48.5, 287.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(25.8, 315.2);
        vaulter.bezierCurveTo(25.8, 315.2, 25.2, 315.3, 24.8, 314.6);
        vaulter.bezierCurveTo(24.4, 313.9, 24.9, 313.4, 24.9, 313.4);
        vaulter.bezierCurveTo(25.4, 313.1, 75.7, 285.9, 130.0, 263.8);
        vaulter.lineTo(265.5, 208.8);
        vaulter.lineTo(266.2, 210.6);
        vaulter.lineTo(130.8, 265.7);
        vaulter.bezierCurveTo(76.5, 287.7, 26.3, 314.9, 25.8, 315.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(71.2, 291.3);
        vaulter.bezierCurveTo(71.2, 291.3, 72.2, 289.4, 72.9, 289.1);
        vaulter.bezierCurveTo(73.6, 288.8, 75.1, 288.9, 75.1, 288.9);
        vaulter.lineTo(75.7, 290.1);
        vaulter.lineTo(75.1, 291.9);
        vaulter.lineTo(73.2, 292.3);
        vaulter.bezierCurveTo(73.2, 292.3, 72.8, 292.8, 72.2, 292.7);
        vaulter.bezierCurveTo(71.5, 292.5, 71.2, 291.3, 71.2, 291.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.0, 271.9);
        vaulter.bezierCurveTo(53.0, 271.9, 51.1, 270.3, 49.0, 270.9);
        vaulter.bezierCurveTo(46.8, 271.5, 43.7, 274.5, 41.8, 276.5);
        vaulter.bezierCurveTo(40.0, 278.5, 37.3, 284.4, 36.6, 285.9);
        vaulter.bezierCurveTo(35.8, 287.3, 36.6, 288.4, 37.2, 292.5);
        vaulter.bezierCurveTo(37.8, 296.6, 39.8, 302.8, 39.8, 302.8);
        vaulter.bezierCurveTo(39.8, 302.8, 39.2, 303.8, 39.2, 304.3);
        vaulter.bezierCurveTo(39.2, 304.8, 38.9, 307.3, 40.1, 307.6);
        vaulter.bezierCurveTo(41.3, 307.9, 43.7, 307.2, 43.7, 307.2);
        vaulter.bezierCurveTo(43.7, 307.2, 45.2, 306.2, 44.9, 304.6);
        vaulter.bezierCurveTo(44.9, 304.6, 44.7, 302.5, 43.0, 302.3);
        vaulter.lineTo(42.1, 301.6);
        vaulter.bezierCurveTo(42.1, 301.6, 41.0, 298.1, 41.3, 294.4);
        vaulter.bezierCurveTo(41.7, 290.6, 41.3, 285.0, 41.3, 285.0);
        vaulter.lineTo(47.2, 280.9);
        vaulter.bezierCurveTo(50.7, 281.5, 53.0, 278.8, 53.0, 278.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(57.6, 263.9);
        vaulter.bezierCurveTo(57.6, 263.9, 59.4, 263.1, 61.1, 263.4);
        vaulter.bezierCurveTo(62.8, 263.6, 65.9, 265.6, 65.7, 267.8);
        vaulter.bezierCurveTo(65.7, 267.8, 69.6, 271.9, 70.1, 272.6);
        vaulter.bezierCurveTo(70.6, 273.3, 74.9, 275.8, 74.8, 278.0);
        vaulter.bezierCurveTo(74.8, 280.2, 74.3, 281.5, 74.5, 282.6);
        vaulter.lineTo(71.4, 284.0);
        vaulter.bezierCurveTo(71.4, 284.0, 69.6, 282.8, 69.3, 281.1);
        vaulter.bezierCurveTo(69.0, 279.5, 69.4, 278.8, 68.7, 278.3);
        vaulter.bezierCurveTo(68.0, 277.8, 66.9, 276.8, 66.0, 275.8);
        vaulter.bezierCurveTo(65.0, 274.8, 64.4, 274.1, 63.9, 273.7);
        vaulter.bezierCurveTo(63.5, 273.3, 63.2, 273.4, 62.0, 274.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(61.1, 288.1);
        vaulter.bezierCurveTo(64.6, 294.9, 67.1, 305.1, 68.0, 306.9);
        vaulter.bezierCurveTo(68.9, 308.7, 68.9, 309.5, 68.2, 311.1);
        vaulter.bezierCurveTo(67.6, 312.7, 66.5, 318.3, 65.8, 323.8);
        vaulter.bezierCurveTo(65.1, 329.2, 65.7, 333.5, 65.7, 333.5);
        vaulter.lineTo(70.9, 338.4);
        vaulter.bezierCurveTo(72.8, 340.0, 74.1, 339.9, 74.4, 341.7);
        vaulter.bezierCurveTo(74.7, 343.6, 70.0, 341.9, 68.3, 341.3);
        vaulter.bezierCurveTo(65.3, 340.0, 66.1, 339.1, 63.3, 338.9);
        vaulter.bezierCurveTo(60.5, 338.7, 60.3, 337.8, 60.4, 336.7);
        vaulter.bezierCurveTo(60.4, 335.7, 61.3, 334.2, 61.3, 334.2);
        vaulter.lineTo(60.9, 328.0);
        vaulter.bezierCurveTo(60.1, 320.5, 60.6, 309.1, 60.6, 309.1);
        vaulter.lineTo(51.1, 294.8);
        vaulter.lineTo(61.1, 288.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 295.3);
        vaulter.bezierCurveTo(62.6, 293.2, 62.9, 290.8, 63.7, 289.3);
        vaulter.bezierCurveTo(64.8, 286.9, 64.8, 272.0, 64.8, 272.0);
        vaulter.bezierCurveTo(65.0, 268.9, 60.4, 262.4, 60.4, 262.4);
        vaulter.bezierCurveTo(60.4, 262.4, 62.8, 257.8, 62.8, 256.6);
        vaulter.bezierCurveTo(62.8, 255.4, 62.2, 251.1, 62.2, 251.1);
        vaulter.bezierCurveTo(62.2, 251.1, 60.5, 246.2, 56.0, 246.4);
        vaulter.bezierCurveTo(51.4, 246.7, 50.1, 252.1, 50.2, 254.3);
        vaulter.bezierCurveTo(50.3, 256.5, 52.7, 261.8, 52.7, 261.8);
        vaulter.bezierCurveTo(52.7, 261.8, 53.2, 264.3, 51.0, 263.8);
        vaulter.bezierCurveTo(48.8, 263.3, 46.7, 274.2, 48.1, 278.4);
        vaulter.bezierCurveTo(49.6, 282.6, 49.3, 293.0, 49.3, 293.0);
        vaulter.bezierCurveTo(49.3, 296.2, 49.3, 297.7, 50.4, 300.1);
        vaulter.bezierCurveTo(53.0, 306.1, 59.7, 309.1, 59.7, 309.1);
        vaulter.bezierCurveTo(57.0, 308.2, 53.3, 310.5, 49.2, 309.5);
        vaulter.bezierCurveTo(44.5, 308.4, 39.7, 306.9, 39.7, 306.9);
        vaulter.bezierCurveTo(39.7, 306.9, 39.2, 305.8, 38.1, 305.3);
        vaulter.bezierCurveTo(37.0, 304.7, 36.2, 305.0, 33.7, 307.2);
        vaulter.bezierCurveTo(31.7, 309.2, 28.9, 310.4, 28.9, 310.4);
        vaulter.bezierCurveTo(28.9, 310.4, 26.2, 313.0, 27.3, 313.9);
        vaulter.bezierCurveTo(28.4, 314.7, 29.9, 313.0, 33.1, 312.1);
        vaulter.bezierCurveTo(36.2, 311.1, 40.8, 312.2, 40.8, 312.2);
        vaulter.bezierCurveTo(40.8, 312.2, 65.6, 319.3, 68.9, 317.2);
        vaulter.bezierCurveTo(73.4, 314.4, 69.8, 308.0, 68.4, 305.2);
        vaulter.bezierCurveTo(65.8, 299.9, 61.0, 295.1, 61.0, 295.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.6, 281.2);
        vaulter.bezierCurveTo(48.6, 281.2, 54.5, 282.0, 55.4, 274.6);
        vaulter.bezierCurveTo(56.4, 267.1, 53.5, 264.6, 51.5, 264.4);
        vaulter.bezierCurveTo(49.6, 264.2, 46.2, 267.7, 46.2, 272.8);
        vaulter.bezierCurveTo(46.2, 277.9, 46.4, 279.5, 48.6, 281.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(25.9, 309.2);
        vaulter.bezierCurveTo(25.9, 309.2, 25.2, 309.4, 24.8, 308.6);
        vaulter.bezierCurveTo(24.5, 307.9, 25.0, 307.4, 25.0, 307.4);
        vaulter.bezierCurveTo(25.5, 307.2, 75.8, 279.9, 130.1, 257.9);
        vaulter.lineTo(265.5, 202.8);
        vaulter.lineTo(266.3, 204.7);
        vaulter.lineTo(130.8, 259.7);
        vaulter.bezierCurveTo(76.6, 281.8, 26.4, 309.0, 25.9, 309.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(71.3, 285.4);
        vaulter.bezierCurveTo(71.3, 285.4, 72.3, 283.5, 73.0, 283.2);
        vaulter.bezierCurveTo(73.7, 282.9, 75.2, 283.0, 75.2, 283.0);
        vaulter.lineTo(75.8, 284.2);
        vaulter.lineTo(75.2, 285.9);
        vaulter.lineTo(73.2, 286.3);
        vaulter.bezierCurveTo(73.2, 286.3, 72.9, 286.9, 72.2, 286.7);
        vaulter.bezierCurveTo(71.6, 286.5, 71.3, 285.4, 71.3, 285.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.1, 265.9);
        vaulter.bezierCurveTo(53.1, 265.9, 51.2, 264.3, 49.0, 264.9);
        vaulter.bezierCurveTo(46.9, 265.6, 43.8, 268.6, 41.9, 270.6);
        vaulter.bezierCurveTo(40.0, 272.6, 37.4, 278.4, 36.7, 279.9);
        vaulter.bezierCurveTo(35.9, 281.4, 36.7, 282.4, 37.3, 286.6);
        vaulter.bezierCurveTo(37.9, 290.7, 39.8, 296.8, 39.8, 296.8);
        vaulter.bezierCurveTo(39.8, 296.8, 39.3, 297.9, 39.3, 298.4);
        vaulter.bezierCurveTo(39.3, 298.8, 39.0, 301.3, 40.2, 301.6);
        vaulter.bezierCurveTo(41.3, 302.0, 43.8, 301.2, 43.8, 301.2);
        vaulter.bezierCurveTo(43.8, 301.2, 45.2, 300.2, 44.9, 298.6);
        vaulter.bezierCurveTo(44.9, 298.6, 44.7, 296.5, 43.1, 296.4);
        vaulter.lineTo(42.1, 295.7);
        vaulter.bezierCurveTo(42.1, 295.7, 41.0, 292.2, 41.4, 288.4);
        vaulter.bezierCurveTo(41.8, 284.7, 41.4, 279.1, 41.4, 279.1);
        vaulter.lineTo(47.2, 274.9);
        vaulter.bezierCurveTo(50.7, 275.6, 53.1, 272.8, 53.1, 272.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(57.6, 266.9);
        vaulter.bezierCurveTo(57.6, 266.9, 59.4, 266.1, 61.1, 266.4);
        vaulter.bezierCurveTo(62.8, 266.6, 65.9, 268.6, 65.7, 270.8);
        vaulter.bezierCurveTo(65.7, 270.8, 69.6, 274.9, 70.1, 275.6);
        vaulter.bezierCurveTo(70.6, 276.3, 74.9, 278.8, 74.8, 281.0);
        vaulter.bezierCurveTo(74.8, 283.2, 74.3, 284.5, 74.5, 285.6);
        vaulter.lineTo(71.4, 287.0);
        vaulter.bezierCurveTo(71.4, 287.0, 69.6, 285.8, 69.3, 284.1);
        vaulter.bezierCurveTo(69.0, 282.5, 69.4, 281.8, 68.7, 281.3);
        vaulter.bezierCurveTo(68.0, 280.8, 66.9, 279.8, 66.0, 278.8);
        vaulter.bezierCurveTo(65.0, 277.8, 64.4, 277.1, 63.9, 276.7);
        vaulter.bezierCurveTo(63.5, 276.3, 63.2, 276.4, 62.0, 277.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.8, 294.9);
        vaulter.bezierCurveTo(62.6, 302.6, 60.0, 312.7, 60.0, 314.7);
        vaulter.bezierCurveTo(59.9, 316.7, 59.5, 317.5, 58.2, 318.6);
        vaulter.bezierCurveTo(56.8, 319.7, 53.2, 321.0, 50.0, 325.4);
        vaulter.bezierCurveTo(46.8, 329.9, 45.3, 333.9, 45.3, 333.9);
        vaulter.lineTo(46.9, 339.4);
        vaulter.bezierCurveTo(49.2, 340.5, 50.5, 340.0, 51.2, 341.8);
        vaulter.bezierCurveTo(51.9, 343.5, 46.9, 343.1, 45.2, 342.8);
        vaulter.bezierCurveTo(42.0, 342.4, 43.0, 339.1, 40.7, 337.6);
        vaulter.bezierCurveTo(38.3, 336.1, 38.6, 335.2, 39.2, 334.3);
        vaulter.bezierCurveTo(39.7, 333.4, 41.2, 332.5, 41.2, 332.5);
        vaulter.lineTo(43.8, 326.8);
        vaulter.bezierCurveTo(46.6, 319.8, 52.4, 313.2, 52.4, 313.2);
        vaulter.bezierCurveTo(52.4, 313.2, 50.3, 307.4, 50.2, 299.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(62.7, 298.3);
        vaulter.bezierCurveTo(62.6, 296.2, 62.9, 293.8, 63.7, 292.3);
        vaulter.bezierCurveTo(64.8, 289.9, 64.8, 275.0, 64.8, 275.0);
        vaulter.bezierCurveTo(65.0, 271.9, 60.4, 265.4, 60.4, 265.4);
        vaulter.bezierCurveTo(60.4, 265.4, 62.8, 260.8, 62.8, 259.6);
        vaulter.bezierCurveTo(62.8, 258.4, 62.2, 254.1, 62.2, 254.1);
        vaulter.bezierCurveTo(62.2, 254.1, 60.5, 249.2, 56.0, 249.4);
        vaulter.bezierCurveTo(51.4, 249.7, 50.1, 255.1, 50.2, 257.3);
        vaulter.bezierCurveTo(50.3, 259.5, 52.7, 264.8, 52.7, 264.8);
        vaulter.bezierCurveTo(52.7, 264.8, 53.2, 267.3, 51.0, 266.8);
        vaulter.bezierCurveTo(48.8, 266.3, 46.7, 277.2, 48.1, 281.4);
        vaulter.bezierCurveTo(49.6, 285.6, 49.3, 296.0, 49.3, 296.0);
        vaulter.bezierCurveTo(49.3, 299.2, 49.3, 300.7, 50.4, 303.1);
        vaulter.bezierCurveTo(53.0, 309.1, 67.9, 311.4, 67.9, 311.4);
        vaulter.bezierCurveTo(65.0, 311.5, 62.3, 320.6, 59.3, 323.6);
        vaulter.bezierCurveTo(55.9, 327.0, 54.2, 328.4, 54.2, 328.4);
        vaulter.bezierCurveTo(54.2, 328.4, 53.0, 328.3, 52.0, 328.9);
        vaulter.bezierCurveTo(50.9, 329.6, 50.9, 332.0, 53.4, 334.2);
        vaulter.bezierCurveTo(55.5, 336.2, 56.9, 338.8, 56.9, 338.8);
        vaulter.bezierCurveTo(56.9, 338.8, 59.7, 341.3, 60.5, 340.1);
        vaulter.bezierCurveTo(61.2, 339.0, 59.6, 336.7, 58.4, 333.6);
        vaulter.bezierCurveTo(57.2, 330.6, 59.2, 329.5, 59.2, 329.5);
        vaulter.bezierCurveTo(59.2, 329.5, 72.8, 317.2, 75.1, 314.0);
        vaulter.bezierCurveTo(78.3, 309.8, 72.5, 305.1, 70.2, 303.0);
        vaulter.bezierCurveTo(65.8, 299.0, 61.5, 297.6, 61.5, 297.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(48.6, 284.2);
        vaulter.bezierCurveTo(48.6, 284.2, 54.5, 285.0, 55.4, 277.6);
        vaulter.bezierCurveTo(56.4, 270.1, 53.5, 267.6, 51.5, 267.4);
        vaulter.bezierCurveTo(49.6, 267.2, 46.2, 270.7, 46.2, 275.8);
        vaulter.bezierCurveTo(46.2, 280.9, 46.4, 282.5, 48.6, 284.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(25.9, 312.2);
        vaulter.bezierCurveTo(25.9, 312.2, 25.2, 312.4, 24.8, 311.6);
        vaulter.bezierCurveTo(24.5, 310.9, 25.0, 310.4, 25.0, 310.4);
        vaulter.bezierCurveTo(25.5, 310.2, 75.8, 282.9, 130.1, 260.9);
        vaulter.lineTo(265.5, 205.8);
        vaulter.lineTo(266.3, 207.7);
        vaulter.lineTo(130.8, 262.8);
        vaulter.bezierCurveTo(76.6, 284.8, 26.4, 312.0, 25.9, 312.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(71.3, 288.4);
        vaulter.bezierCurveTo(71.3, 288.4, 72.3, 286.5, 73.0, 286.2);
        vaulter.bezierCurveTo(73.7, 285.9, 75.2, 286.0, 75.2, 286.0);
        vaulter.lineTo(75.8, 287.2);
        vaulter.lineTo(75.2, 288.9);
        vaulter.lineTo(73.2, 289.3);
        vaulter.bezierCurveTo(73.2, 289.3, 72.9, 289.9, 72.2, 289.7);
        vaulter.bezierCurveTo(71.6, 289.5, 71.3, 288.4, 71.3, 288.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(53.1, 268.9);
        vaulter.bezierCurveTo(53.1, 268.9, 51.2, 267.3, 49.0, 267.9);
        vaulter.bezierCurveTo(46.9, 268.6, 43.8, 271.6, 41.9, 273.6);
        vaulter.bezierCurveTo(40.0, 275.6, 37.4, 281.4, 36.7, 282.9);
        vaulter.bezierCurveTo(35.9, 284.4, 36.7, 285.4, 37.3, 289.6);
        vaulter.bezierCurveTo(37.9, 293.7, 39.8, 299.8, 39.8, 299.8);
        vaulter.bezierCurveTo(39.8, 299.8, 39.3, 300.9, 39.3, 301.4);
        vaulter.bezierCurveTo(39.3, 301.8, 39.0, 304.3, 40.2, 304.6);
        vaulter.bezierCurveTo(41.3, 305.0, 43.8, 304.2, 43.8, 304.2);
        vaulter.bezierCurveTo(43.8, 304.2, 45.2, 303.2, 44.9, 301.6);
        vaulter.bezierCurveTo(44.9, 301.6, 44.7, 299.5, 43.1, 299.4);
        vaulter.lineTo(42.1, 298.7);
        vaulter.bezierCurveTo(42.1, 298.7, 41.0, 295.2, 41.4, 291.4);
        vaulter.bezierCurveTo(41.8, 287.7, 41.4, 282.1, 41.4, 282.1);
        vaulter.lineTo(47.2, 277.9);
        vaulter.bezierCurveTo(50.7, 278.6, 53.1, 275.8, 53.1, 275.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    }
  ];
  vaulter.runup.iterations = 4;
  vaulter.setSequenceOrder("runup", "main");

  pitforeground = new Character("pitforeground", false);
  pitforeground.show();
  pitforeground.main.cels = [
    function () {
      if (pitforeground.visible) {

      var gradient;

        // pitforeground/Path
        pitforeground.save();
        pitforeground.beginPath();
        pitforeground.moveTo(349.1, 25.8);
        pitforeground.lineTo(352.3, 25.8);
        pitforeground.lineTo(352.3, 355.3);
        pitforeground.lineTo(349.1, 355.3);
        pitforeground.lineTo(349.1, 25.8);
        pitforeground.closePath();
        gradient = pitforeground.createLinearGradient(348.8, 190.5, 352.6, 190.5);
        pitforeground.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pitforeground.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pitforeground.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pitforeground.fillStyle(gradient);
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(348.2, 306.8);
        pitforeground.lineTo(281.9, 324.8);
        pitforeground.lineTo(224.9, 324.8);
        pitforeground.lineTo(224.9, 352.4);
        pitforeground.lineTo(348.2, 352.4);
        pitforeground.lineTo(348.2, 306.8);
        pitforeground.fillStyle("rgb(123, 162, 212)");
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(208.9, 318.4);
        pitforeground.lineTo(224.9, 324.8);
        pitforeground.lineTo(224.9, 352.4);
        pitforeground.lineTo(208.9, 346.1);
        pitforeground.lineTo(208.9, 318.4);
        pitforeground.closePath();
        pitforeground.fillStyle("rgb(79, 134, 198)");
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(332.2, 300.4);
        pitforeground.lineTo(266.0, 318.4);
        pitforeground.lineTo(208.9, 318.4);
        pitforeground.lineTo(224.9, 324.8);
        pitforeground.lineTo(281.9, 324.8);
        pitforeground.lineTo(348.2, 306.8);
        pitforeground.lineTo(332.2, 300.4);
        pitforeground.closePath();
        pitforeground.fillStyle("rgb(198, 213, 237)");
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(328.7, 49.2);
        pitforeground.lineTo(355.7, 43.1);
        pitforeground.lineTo(356.4, 46.2);
        pitforeground.lineTo(329.4, 52.3);
        pitforeground.lineTo(328.7, 49.2);
        pitforeground.closePath();
        gradient = pitforeground.createLinearGradient(342.2, 46.0, 342.9, 49.2);
        pitforeground.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pitforeground.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pitforeground.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pitforeground.fillStyle(gradient);
        pitforeground.fill();
        pitforeground.restore();
      }
    }
  ];


  


  the_canvas.addEventListener("mouseover", dela, false);
  the_canvas.addEventListener("click", dispatchClick, false);
  the_canvas.addEventListener("mousedown", dispatchMousedown, false);

  function playButton(ctx) {

    // playButton/Path
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(193.9, 460.8);
    ctx.bezierCurveTo(193.9, 461.9, 193.0, 462.8, 191.9, 462.8);
    ctx.lineTo(141.9, 462.8);
    ctx.bezierCurveTo(140.8, 462.8, 139.9, 461.9, 139.9, 460.8);
    ctx.lineTo(139.9, 443.8);
    ctx.bezierCurveTo(139.9, 442.7, 140.8, 441.8, 141.9, 441.8);
    ctx.lineTo(191.9, 441.8);
    ctx.bezierCurveTo(193.0, 441.8, 193.9, 442.7, 193.9, 443.8);
    ctx.lineTo(193.9, 460.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(17, 92, 137)";
    ctx.fill();

    // playButton/Path
    ctx.beginPath();
    ctx.moveTo(145.8, 447.8);
    ctx.lineTo(145.8, 456.8);
    ctx.lineTo(153.3, 452.3);
    ctx.lineTo(145.8, 447.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // playButton/Play
    ctx.font = "11.0px 'Helvetica'";
    ctx.fillStyle = "rgb(238, 238, 238)";
    ctx.fillText("Play", 162.1, 455.8);
    ctx.restore();
  }

  function dela () {
    console.log("This is how it is.");
  }
  
  /* ... click detection ... */
  function dispatchClick (evt) {
    var x = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
        y = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop);
        
    playButtonBoundary(context);
    if (context.isPointInPath(x, y)) {
      t.play();
      return "play";
    }
    stepButtonBoundary(context);
    if (context.isPointInPath(x, y)) {
      t.stepThrough();
      return "stepThrough";
    }
  };

  function dispatchHover (evt) {
    var x = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
        y = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop);

    playButtonBoundary(context);
  };

  function dispatchMousedown (evt) {
    var x = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
        y = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop);
 
    slider.drawBoundary();
    if (context.isPointInPath(x, y)) {
      console.log("Come Wit Me.");
      slider.scrubber.selected = true;
    }
  };
    
  function dispatchMouseup (evt) {
    var x = (evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - the_canvas.offsetLeft),
        y = (evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - the_canvas.offsetTop),
        temp_xdistance = (slider.scrubber.xdistance - slider.scrubber.xinc),
        temp_ydistance = (slider.scrubber.ydistance - slider.scrubber.yinc);
    
    slider.drawBoundary();
    if (context.isPointInPath(x, y)) {
      console.log("Blue Girl.");
    }
  };
    
  function playButtonBoundary (ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(42.8, 424.8, 104, 51);
    ctx.closePath();
    ctx.strokeStyle = "rgb(0, 255, 0)";
    // ctx.stroke();
    ctx.restore();
  };

  function stepButtonBoundary (ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(170.8, 424.8, 355, 51);
    ctx.closePath();
    ctx.strokeStyle = "rgb(0, 0, 255)";
    // ctx.stroke();
    ctx.restore();
  };

  t.load(slider, back, forward, track, pit, shadow, vaulter, pitforeground);
  
};

stage();

console.log("I can take you there. Just follow me.");
