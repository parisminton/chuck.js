describe("Testing chuck.js", function () {
  var html,
      body,
      src,
      canv,
      para,
      character,
      act,
      play,
      c,
      t,
      a,
      e,
      s;

  beforeEach(function () {
    html = document.getElementsByTagName("html")[0];
    body = document.getElementsByTagName("body")[0];

    src = document.createElement("script");
    src.src = "../chuck.js";

    canv = document.createElement("canvas");
    canv.id = "main-stage";

    para = document.createElement("p");
    para.id = "pv-explainer";

    html.appendChild(src);
    body.appendChild(canv);
    body.appendChild(para);
  });

  beforeEach(function () {
    this.addMatchers({
      toBeInstanceOf : function (constructr) {
        return this.actual instanceof constructr;
      }
    });
  });



  describe("Within the Character Object", function () {
  
    describe("The constructor", function () {
      it("should create a new instance of Character", function () {
        character = new Character("vaulter", false);
        expect(character).toBeInstanceOf(Character);
      });
    });

    describe("character.triggers", function () {
      it("should be an empty object", function () {
        var i = 0;
        expect(typeof character.triggers).toBe("object");
        for (key in character.triggers) {
          i += 1;
        }
        expect(i).toBe(0);
      });
    });

    describe("character.checkTrigger", function () {
      it("should create an empty array", function () {
        character.checkTrigger(2);
        len = character.checkTrigger.length;
        expect(Array.isArray(character.triggers["2"])).toBe(true);
        expect(character.triggers["2"].length).toBe(0);
      });
    });

    describe("character.makeAction", function () {
      it("should return a function", function () {
        var maker;
        function thefunction () {
          return "This is a function.";
        }
        maker = character.makeAction(Action, thefunction);
        expect(typeof maker).toBe("function");
      });
    });

  });



  describe("Within the Action Object", function () {
  
    describe("The constructor", function () {
      it("should create a new instance of Action", function () {
        act = new Action(character);
        expect(act).toBeInstanceOf(Action);
      });
    });

  });
    
    
    
  describe("Within the Button object", function () {

    beforeEach(function () {
      spyOn(window, "Button").andCallThrough();
      play = new Button("play", false);
    });

    describe("play", function () {
      it("should be an instance of the Button object", function () {
        expect(play).toBeInstanceOf(Button);
      });
    });

    describe("play.name", function () {
      it("should be the first argument passed to the Button constructor", function () {
        // ... remove this, and the beforeEach above seems to not apply ...
        // play = new Button("play", false);
        expect(window.Button).toHaveBeenCalledWith("play", false);
      });
      it("should be 'play'", function () {
        expect(play.name).toBe("play");
      });
    });

  });

    
    
  describe("Within the Slider object", function () {

    describe("The constructor", function () {
      it("should create a new instance of Slider", function () {
        s = new Slider("slide", false);
        expect(s.name).toEqual("slide");
      });
    });

  });
    
    
    
  describe("Within the Copy object", function () {

    describe("The constructor", function () {
      it("should create a new instance of Copy", function () {
        c = new Copy(document.getElementById("pv-explainer").getElementsByTagName("p")[0]);
        expect(c).toBeInstanceOf(Copy);
      });
    });

  });
    
    
    
  describe("Within the Animator object", function () {

    beforeEach(function () {
      a = new Animator(75, c);
    });

    describe("The constructor", function () {
      it("should define a property named fps", function () {
        expect(a.fps).toBeDefined();
      });

      it("should define a property named copy", function () {
        expect(a.copy).toBeDefined();
      });

      it("should define a method named animate()", function () {
        expect(a.animate).toBeDefined();
      });

      it("should define a method named init()", function () {
        expect(a.init).toBeDefined();
      });
    });

    describe("a", function () {
      it("should be an instance of Animator", function () {
        expect(a).toBeInstanceOf(Animator);
      });
    });

    describe ("Within a", function () {
    
      describe("fps", function () {
        it("should be 75", function () {
          expect(a.fps).toBe(75);
        });
      });

      describe("init()", function () {
        it("should have been called", function () {
          spyOn(a, "init");
          a.init();
          expect(a.init).toHaveBeenCalled();
        });
      });

    });

  });

    
    
  describe("Within the EventDispatcher object", function () {

    beforeEach(function () {
      c = new Copy(para);
      e = new EventDispatcher();
      a = new Timeline(75, c);
      t = new Timeline(a, e);
      t.breakpoints = [1];
      play = new Button("play", false);
      play.boundary = [
        "save",
        "beginPath",
        { moveTo : [ 328.6, 446.9 ] },
        { lineTo : [ 274.6, 446.9 ] },
        { lineTo : [ 274.6, 425.9 ] },
        { lineTo : [ 328.6, 425.9 ] },
        { lineTo : [ 328.6, 446.9 ] },
        "closePath",
        { strokeStyle : "rgb(255, 0, 0)" },
        "stroke",
        "restore"
      ];
      play.userEvents = ["click", "mousemove"];
      t.load(play);
    });

    describe("The constructor", function () {
      it("should create a new instance of EventDispatcher", function () {
        expect(e).toBeInstanceOf(EventDispatcher);
      });
    });

    describe("getUserEvents()", function () {
      it("should return an array of userEvent strings", function () {
        expect(typeof e.getUserEvents).toBe("function");
      });
    });

  });

    
    
  describe("Within the Timeline object", function () {

    describe("The constructor", function () {
      it("should create a new instance of Timeline", function () {
        t = new Timeline(a, e);
        expect(t).toBeInstanceOf(Timeline);
      });
    });

  });
  
});
