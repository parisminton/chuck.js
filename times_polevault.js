function stage () {
  
  var t, 
      a,
      play,
      step,
      slider,
      back,
      forward,
      track,
      pit,
      pitforeground,
      shadow,
      vaulter;




  c = new Copy(document.getElementById("pv-explainer").getElementsByTagName("p")[0]);

  c.blocks = [

    "The pole vaulter combines the skills of a gymnast and a sprinter to lift himself over a crossbar between two uprights",

    "Beginning with a relaxed run-up, the vaulter sprints immediately before planting the pole.",

    "The pole plant is made on the third-to-last stride.",
    
    "On the takeoff, the vaulter hangs from the pole with the right arm and flexes the pole with his left. By flexing the legs and raising his hips, the vaulter rocks back on the pole into a handstand position.",
    
    "After clearing the bar, he extends his back, pushes the pole away and relaxes on the fall."
  
  ];


  a = new Animator(75, c);
  t = new Timeline(a);

  play = new Button("play", false);
  play.show();
  play.off.cels = [
    function () {
      if (play.visible) {

        // play/Group
        play.save();

        // play/Group/Path
        play.save();
        play.beginPath();
        play.moveTo(328.6, 444.9);
        play.bezierCurveTo(328.6, 446.0, 327.7, 446.9, 326.6, 446.9);
        play.lineTo(276.6, 446.9);
        play.bezierCurveTo(275.5, 446.9, 274.6, 446.0, 274.6, 444.9);
        play.lineTo(274.6, 427.9);
        play.bezierCurveTo(274.6, 426.8, 275.5, 425.9, 276.6, 425.9);
        play.lineTo(326.6, 425.9);
        play.bezierCurveTo(327.7, 425.9, 328.6, 426.8, 328.6, 427.9);
        play.lineTo(328.6, 444.9);
        play.closePath();
        play.fillStyle("rgb(38, 90, 137)");
        play.fill();

        // play/Group/Path
        play.beginPath();
        play.moveTo(280.6, 431.9);
        play.lineTo(280.6, 440.9);
        play.lineTo(288.1, 436.4);
        play.lineTo(280.6, 431.9);
        play.closePath();
        play.fillStyle("rgb(255, 255, 255)");
        play.fill();

        // play/Group/Group

        // play/Group/Group/Compound Path
        play.save();
        play.beginPath();

        // play/Group/Group/Compound Path/Path
        play.moveTo(297.8, 432.1);
        play.lineTo(301.3, 432.1);
        play.bezierCurveTo(302.0, 432.1, 302.6, 432.3, 303.0, 432.7);
        play.bezierCurveTo(303.5, 433.1, 303.7, 433.7, 303.7, 434.4);
        play.bezierCurveTo(303.7, 435.0, 303.5, 435.5, 303.1, 436.0);
        play.bezierCurveTo(302.7, 436.5, 302.1, 436.7, 301.3, 436.7);
        play.lineTo(298.9, 436.7);
        play.lineTo(298.9, 440.0);
        play.lineTo(297.8, 440.0);
        play.lineTo(297.8, 432.1);
        play.closePath();

        // play/Group/Group/Compound Path/Path
        play.moveTo(301.9, 433.2);
        play.bezierCurveTo(301.7, 433.1, 301.4, 433.0, 301.0, 433.0);
        play.lineTo(298.9, 433.0);
        play.lineTo(298.9, 435.8);
        play.lineTo(301.0, 435.8);
        play.bezierCurveTo(301.5, 435.8, 301.8, 435.7, 302.1, 435.5);
        play.bezierCurveTo(302.4, 435.3, 302.6, 434.9, 302.6, 434.4);
        play.bezierCurveTo(302.6, 433.8, 302.4, 433.4, 301.9, 433.2);
        play.closePath();
        play.fill();

        // play/Group/Group/Compound Path
        play.beginPath();

        // play/Group/Group/Compound Path/Path
        play.moveTo(304.9, 432.1);
        play.lineTo(305.9, 432.1);
        play.lineTo(305.9, 440.0);
        play.lineTo(304.9, 440.0);
        play.lineTo(304.9, 432.1);
        play.closePath();
        play.fill();

        // play/Group/Group/Compound Path
        play.beginPath();

        // play/Group/Group/Compound Path/Path
        play.moveTo(310.4, 436.5);
        play.bezierCurveTo(310.7, 436.5, 310.8, 436.4, 310.9, 436.3);
        play.bezierCurveTo(310.9, 436.2, 310.9, 436.0, 310.9, 435.9);
        play.bezierCurveTo(310.9, 435.6, 310.8, 435.3, 310.6, 435.2);
        play.bezierCurveTo(310.4, 435.0, 310.0, 434.9, 309.6, 434.9);
        play.bezierCurveTo(309.1, 434.9, 308.7, 435.1, 308.5, 435.4);
        play.bezierCurveTo(308.4, 435.5, 308.3, 435.7, 308.3, 436.0);
        play.lineTo(307.4, 436.0);
        play.bezierCurveTo(307.4, 435.3, 307.6, 434.8, 308.1, 434.5);
        play.bezierCurveTo(308.5, 434.3, 309.0, 434.1, 309.6, 434.1);
        play.bezierCurveTo(310.3, 434.1, 310.8, 434.3, 311.3, 434.5);
        play.bezierCurveTo(311.7, 434.8, 311.9, 435.2, 311.9, 435.7);
        play.lineTo(311.9, 439.0);
        play.bezierCurveTo(311.9, 439.1, 311.9, 439.2, 311.9, 439.3);
        play.bezierCurveTo(312.0, 439.3, 312.1, 439.4, 312.2, 439.4);
        play.bezierCurveTo(312.3, 439.4, 312.3, 439.4, 312.4, 439.4);
        play.bezierCurveTo(312.4, 439.4, 312.5, 439.3, 312.5, 439.3);
        play.lineTo(312.5, 440.0);
        play.bezierCurveTo(312.4, 440.1, 312.3, 440.1, 312.2, 440.1);
        play.bezierCurveTo(312.1, 440.1, 312.0, 440.1, 311.9, 440.1);
        play.bezierCurveTo(311.5, 440.1, 311.3, 440.0, 311.1, 439.8);
        play.bezierCurveTo(311.1, 439.7, 311.0, 439.5, 311.0, 439.3);
        play.bezierCurveTo(310.8, 439.5, 310.5, 439.7, 310.1, 439.9);
        play.bezierCurveTo(309.7, 440.1, 309.3, 440.2, 308.9, 440.2);
        play.bezierCurveTo(308.4, 440.2, 307.9, 440.1, 307.6, 439.7);
        play.bezierCurveTo(307.3, 439.4, 307.1, 439.0, 307.1, 438.5);
        play.bezierCurveTo(307.1, 438.0, 307.2, 437.6, 307.6, 437.3);
        play.bezierCurveTo(307.9, 437.0, 308.4, 436.8, 308.9, 436.7);
        play.lineTo(310.4, 436.5);
        play.closePath();

        // play/Group/Group/Compound Path/Path
        play.moveTo(308.4, 439.2);
        play.bezierCurveTo(308.6, 439.3, 308.8, 439.4, 309.1, 439.4);
        play.bezierCurveTo(309.5, 439.4, 309.8, 439.3, 310.1, 439.2);
        play.bezierCurveTo(310.6, 438.9, 310.9, 438.5, 310.9, 437.9);
        play.lineTo(310.9, 437.1);
        play.bezierCurveTo(310.8, 437.2, 310.6, 437.2, 310.5, 437.3);
        play.bezierCurveTo(310.3, 437.3, 310.1, 437.4, 309.9, 437.4);
        play.lineTo(309.3, 437.5);
        play.bezierCurveTo(309.0, 437.5, 308.7, 437.6, 308.5, 437.7);
        play.bezierCurveTo(308.2, 437.9, 308.1, 438.1, 308.1, 438.5);
        play.bezierCurveTo(308.1, 438.8, 308.2, 439.0, 308.4, 439.2);
        play.closePath();
        play.fill();

        // play/Group/Group/Compound Path
        play.beginPath();

        // play/Group/Group/Compound Path/Path
        play.moveTo(317.1, 434.3);
        play.lineTo(318.1, 434.3);
        play.bezierCurveTo(318.0, 434.6, 317.7, 435.5, 317.2, 436.8);
        play.bezierCurveTo(316.9, 437.8, 316.6, 438.6, 316.3, 439.2);
        play.bezierCurveTo(315.8, 440.7, 315.4, 441.6, 315.2, 441.9);
        play.bezierCurveTo(314.9, 442.2, 314.5, 442.4, 314.0, 442.4);
        play.bezierCurveTo(313.8, 442.4, 313.7, 442.4, 313.7, 442.4);
        play.bezierCurveTo(313.6, 442.4, 313.5, 442.3, 313.4, 442.3);
        play.lineTo(313.4, 441.4);
        play.bezierCurveTo(313.6, 441.5, 313.7, 441.5, 313.8, 441.5);
        play.bezierCurveTo(313.8, 441.5, 313.9, 441.5, 314.0, 441.5);
        play.bezierCurveTo(314.1, 441.5, 314.3, 441.5, 314.4, 441.4);
        play.bezierCurveTo(314.4, 441.4, 314.5, 441.3, 314.6, 441.2);
        play.bezierCurveTo(314.6, 441.2, 314.7, 441.0, 314.8, 440.8);
        play.bezierCurveTo(314.9, 440.5, 315.0, 440.3, 315.0, 440.2);
        play.lineTo(312.9, 434.3);
        play.lineTo(314.0, 434.3);
        play.lineTo(315.5, 439.0);
        play.lineTo(317.1, 434.3);
        play.closePath();
        play.fill();
        play.restore();
        play.restore();
        play.restore();
      }
    }
  ];
  play.boundary = function () {
    if (play.visible) {
      play.save();
      play.beginPath();
      play.moveTo(328.6, 446.9);
      play.lineTo(274.6, 446.9);
      play.lineTo(274.6, 425.9);
      play.lineTo(328.6, 425.9);
      play.lineTo(328.6, 446.9);
      play.closePath();
      play.restore();
    }
  };
  play.clickHandler = function () {
    this.timeline.play();
  };

  

  step = new Button("step", false);
  step.show();
  step.off.cels = [
    function () {
      if (step.visible) {

        // step/Group
        step.save();

        // step/Group/Path
        step.save();
        step.beginPath();
        step.moveTo(497.3, 444.9);
        step.bezierCurveTo(497.3, 446.0, 496.4, 446.9, 495.3, 446.9);
        step.lineTo(344.4, 446.9);
        step.bezierCurveTo(343.3, 446.9, 342.4, 446.0, 342.4, 444.9);
        step.lineTo(342.4, 427.9);
        step.bezierCurveTo(342.4, 426.8, 343.3, 425.9, 344.4, 425.9);
        step.lineTo(495.3, 425.9);
        step.bezierCurveTo(496.4, 425.9, 497.3, 426.8, 497.3, 427.9);
        step.lineTo(497.3, 444.9);
        step.closePath();
        step.fillStyle("rgb(38, 90, 137)");
        step.fill();

        // step/Group/Group/Compound Path
        step.save();
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(371.0, 437.0);
        step.bezierCurveTo(371.0, 437.5, 371.1, 437.8, 371.3, 438.1);
        step.bezierCurveTo(371.7, 438.6, 372.3, 438.9, 373.1, 438.9);
        step.bezierCurveTo(373.5, 438.9, 373.9, 438.8, 374.2, 438.7);
        step.bezierCurveTo(374.8, 438.5, 375.1, 438.1, 375.1, 437.5);
        step.bezierCurveTo(375.1, 437.1, 375.0, 436.8, 374.7, 436.6);
        step.bezierCurveTo(374.5, 436.4, 374.0, 436.3, 373.5, 436.1);
        step.lineTo(372.4, 435.9);
        step.bezierCurveTo(371.8, 435.7, 371.3, 435.6, 371.0, 435.4);
        step.bezierCurveTo(370.5, 435.0, 370.3, 434.6, 370.3, 433.9);
        step.bezierCurveTo(370.3, 433.2, 370.5, 432.6, 371.0, 432.2);
        step.bezierCurveTo(371.5, 431.7, 372.2, 431.5, 373.0, 431.5);
        step.bezierCurveTo(373.8, 431.5, 374.5, 431.7, 375.1, 432.1);
        step.bezierCurveTo(375.6, 432.5, 375.9, 433.1, 375.9, 434.0);
        step.lineTo(374.9, 434.0);
        step.bezierCurveTo(374.9, 433.6, 374.8, 433.2, 374.6, 433.0);
        step.bezierCurveTo(374.3, 432.6, 373.7, 432.4, 373.0, 432.4);
        step.bezierCurveTo(372.4, 432.4, 372.0, 432.5, 371.7, 432.8);
        step.bezierCurveTo(371.4, 433.1, 371.3, 433.4, 371.3, 433.7);
        step.bezierCurveTo(371.3, 434.1, 371.5, 434.4, 371.8, 434.6);
        step.bezierCurveTo(372.0, 434.7, 372.4, 434.8, 373.2, 435.0);
        step.lineTo(374.2, 435.2);
        step.bezierCurveTo(374.7, 435.4, 375.1, 435.5, 375.4, 435.7);
        step.bezierCurveTo(375.9, 436.1, 376.2, 436.7, 376.2, 437.4);
        step.bezierCurveTo(376.2, 438.2, 375.8, 438.9, 375.2, 439.2);
        step.bezierCurveTo(374.6, 439.6, 373.9, 439.8, 373.1, 439.8);
        step.bezierCurveTo(372.1, 439.8, 371.4, 439.5, 370.8, 439.0);
        step.bezierCurveTo(370.3, 438.5, 370.0, 437.9, 370.0, 437.0);
        step.lineTo(371.0, 437.0);
        step.closePath();
        step.fillStyle("rgb(255, 255, 255)");
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(377.7, 432.2);
        step.lineTo(378.7, 432.2);
        step.lineTo(378.7, 433.8);
        step.lineTo(379.6, 433.8);
        step.lineTo(379.6, 434.6);
        step.lineTo(378.7, 434.6);
        step.lineTo(378.7, 438.4);
        step.bezierCurveTo(378.7, 438.6, 378.8, 438.7, 378.9, 438.8);
        step.bezierCurveTo(379.0, 438.8, 379.1, 438.8, 379.3, 438.8);
        step.bezierCurveTo(379.3, 438.8, 379.4, 438.8, 379.4, 438.8);
        step.bezierCurveTo(379.5, 438.8, 379.5, 438.8, 379.6, 438.8);
        step.lineTo(379.6, 439.6);
        step.bezierCurveTo(379.5, 439.6, 379.4, 439.6, 379.3, 439.6);
        step.bezierCurveTo(379.2, 439.6, 379.0, 439.7, 378.9, 439.7);
        step.bezierCurveTo(378.4, 439.7, 378.1, 439.5, 378.0, 439.3);
        step.bezierCurveTo(377.8, 439.1, 377.7, 438.8, 377.7, 438.4);
        step.lineTo(377.7, 434.6);
        step.lineTo(376.9, 434.6);
        step.lineTo(376.9, 433.8);
        step.lineTo(377.7, 433.8);
        step.lineTo(377.7, 432.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(384.1, 434.0);
        step.bezierCurveTo(384.5, 434.2, 384.8, 434.4, 385.0, 434.7);
        step.bezierCurveTo(385.2, 435.0, 385.3, 435.3, 385.4, 435.7);
        step.bezierCurveTo(385.5, 436.0, 385.5, 436.4, 385.5, 437.0);
        step.lineTo(381.3, 437.0);
        step.bezierCurveTo(381.3, 437.6, 381.5, 438.0, 381.7, 438.4);
        step.bezierCurveTo(382.0, 438.8, 382.4, 438.9, 382.9, 438.9);
        step.bezierCurveTo(383.4, 438.9, 383.8, 438.8, 384.1, 438.4);
        step.bezierCurveTo(384.3, 438.2, 384.4, 438.0, 384.4, 437.8);
        step.lineTo(385.4, 437.8);
        step.bezierCurveTo(385.4, 438.0, 385.3, 438.2, 385.2, 438.5);
        step.bezierCurveTo(385.0, 438.7, 384.9, 438.9, 384.7, 439.1);
        step.bezierCurveTo(384.4, 439.4, 384.0, 439.6, 383.6, 439.7);
        step.bezierCurveTo(383.4, 439.7, 383.1, 439.8, 382.8, 439.8);
        step.bezierCurveTo(382.1, 439.8, 381.5, 439.5, 381.0, 439.0);
        step.bezierCurveTo(380.5, 438.5, 380.3, 437.7, 380.3, 436.8);
        step.bezierCurveTo(380.3, 435.9, 380.5, 435.1, 381.0, 434.5);
        step.bezierCurveTo(381.5, 434.0, 382.2, 433.7, 383.0, 433.7);
        step.bezierCurveTo(383.4, 433.7, 383.8, 433.8, 384.1, 434.0);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(384.5, 436.2);
        step.bezierCurveTo(384.4, 435.8, 384.4, 435.5, 384.2, 435.2);
        step.bezierCurveTo(384.0, 434.8, 383.5, 434.5, 382.9, 434.5);
        step.bezierCurveTo(382.5, 434.5, 382.1, 434.7, 381.8, 435.0);
        step.bezierCurveTo(381.5, 435.3, 381.3, 435.7, 381.3, 436.2);
        step.lineTo(384.5, 436.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(386.6, 433.8);
        step.lineTo(387.6, 433.8);
        step.lineTo(387.6, 434.6);
        step.bezierCurveTo(387.8, 434.3, 388.0, 434.1, 388.2, 434.0);
        step.bezierCurveTo(388.5, 433.8, 388.9, 433.7, 389.4, 433.7);
        step.bezierCurveTo(390.0, 433.7, 390.6, 433.9, 391.0, 434.4);
        step.bezierCurveTo(391.5, 434.9, 391.7, 435.6, 391.7, 436.6);
        step.bezierCurveTo(391.7, 437.8, 391.4, 438.7, 390.7, 439.2);
        step.bezierCurveTo(390.3, 439.6, 389.8, 439.8, 389.3, 439.8);
        step.bezierCurveTo(388.8, 439.8, 388.5, 439.7, 388.2, 439.5);
        step.bezierCurveTo(388.0, 439.4, 387.8, 439.2, 387.6, 438.9);
        step.lineTo(387.6, 441.9);
        step.lineTo(386.6, 441.9);
        step.lineTo(386.6, 433.8);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(390.3, 438.3);
        step.bezierCurveTo(390.6, 438.0, 390.7, 437.4, 390.7, 436.7);
        step.bezierCurveTo(390.7, 436.2, 390.6, 435.8, 390.5, 435.5);
        step.bezierCurveTo(390.3, 434.8, 389.8, 434.5, 389.1, 434.5);
        step.bezierCurveTo(388.5, 434.5, 388.0, 434.9, 387.8, 435.5);
        step.bezierCurveTo(387.6, 435.9, 387.6, 436.3, 387.6, 436.9);
        step.bezierCurveTo(387.6, 437.3, 387.6, 437.7, 387.8, 438.0);
        step.bezierCurveTo(388.0, 438.6, 388.5, 438.9, 389.1, 438.9);
        step.bezierCurveTo(389.6, 438.9, 390.0, 438.7, 390.3, 438.3);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(396.1, 432.2);
        step.lineTo(397.1, 432.2);
        step.lineTo(397.1, 433.8);
        step.lineTo(398.0, 433.8);
        step.lineTo(398.0, 434.6);
        step.lineTo(397.1, 434.6);
        step.lineTo(397.1, 438.4);
        step.bezierCurveTo(397.1, 438.6, 397.1, 438.7, 397.3, 438.8);
        step.bezierCurveTo(397.3, 438.8, 397.5, 438.8, 397.6, 438.8);
        step.bezierCurveTo(397.7, 438.8, 397.7, 438.8, 397.8, 438.8);
        step.bezierCurveTo(397.8, 438.8, 397.9, 438.8, 398.0, 438.8);
        step.lineTo(398.0, 439.6);
        step.bezierCurveTo(397.9, 439.6, 397.7, 439.6, 397.6, 439.6);
        step.bezierCurveTo(397.5, 439.6, 397.4, 439.7, 397.2, 439.7);
        step.bezierCurveTo(396.8, 439.7, 396.5, 439.5, 396.3, 439.3);
        step.bezierCurveTo(396.2, 439.1, 396.1, 438.8, 396.1, 438.4);
        step.lineTo(396.1, 434.6);
        step.lineTo(395.3, 434.6);
        step.lineTo(395.3, 433.8);
        step.lineTo(396.1, 433.8);
        step.lineTo(396.1, 432.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(398.9, 431.6);
        step.lineTo(399.9, 431.6);
        step.lineTo(399.9, 434.6);
        step.bezierCurveTo(400.1, 434.3, 400.3, 434.1, 400.5, 434.0);
        step.bezierCurveTo(400.8, 433.8, 401.2, 433.7, 401.7, 433.7);
        step.bezierCurveTo(402.5, 433.7, 403.1, 434.0, 403.4, 434.5);
        step.bezierCurveTo(403.5, 434.9, 403.6, 435.3, 403.6, 435.9);
        step.lineTo(403.6, 439.6);
        step.lineTo(402.6, 439.6);
        step.lineTo(402.6, 435.9);
        step.bezierCurveTo(402.6, 435.5, 402.6, 435.2, 402.5, 435.0);
        step.bezierCurveTo(402.3, 434.7, 402.0, 434.5, 401.5, 434.5);
        step.bezierCurveTo(401.1, 434.5, 400.7, 434.7, 400.4, 434.9);
        step.bezierCurveTo(400.1, 435.2, 399.9, 435.7, 399.9, 436.5);
        step.lineTo(399.9, 439.6);
        step.lineTo(398.9, 439.6);
        step.lineTo(398.9, 431.6);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(405.1, 433.8);
        step.lineTo(406.0, 433.8);
        step.lineTo(406.0, 434.8);
        step.bezierCurveTo(406.1, 434.6, 406.3, 434.4, 406.6, 434.1);
        step.bezierCurveTo(406.8, 433.8, 407.2, 433.7, 407.6, 433.7);
        step.bezierCurveTo(407.6, 433.7, 407.6, 433.7, 407.7, 433.7);
        step.bezierCurveTo(407.7, 433.7, 407.8, 433.7, 407.9, 433.7);
        step.lineTo(407.9, 434.7);
        step.bezierCurveTo(407.8, 434.7, 407.8, 434.7, 407.7, 434.7);
        step.bezierCurveTo(407.7, 434.7, 407.6, 434.7, 407.6, 434.7);
        step.bezierCurveTo(407.1, 434.7, 406.7, 434.9, 406.4, 435.2);
        step.bezierCurveTo(406.2, 435.5, 406.0, 435.8, 406.0, 436.3);
        step.lineTo(406.0, 439.6);
        step.lineTo(405.1, 439.6);
        step.lineTo(405.1, 433.8);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(412.9, 434.4);
        step.bezierCurveTo(413.4, 434.9, 413.6, 435.6, 413.6, 436.6);
        step.bezierCurveTo(413.6, 437.5, 413.4, 438.3, 413.0, 438.9);
        step.bezierCurveTo(412.5, 439.5, 411.8, 439.8, 410.9, 439.8);
        step.bezierCurveTo(410.1, 439.8, 409.5, 439.5, 409.0, 439.0);
        step.bezierCurveTo(408.6, 438.4, 408.3, 437.7, 408.3, 436.8);
        step.bezierCurveTo(408.3, 435.8, 408.6, 435.1, 409.1, 434.5);
        step.bezierCurveTo(409.5, 433.9, 410.2, 433.6, 411.0, 433.6);
        step.bezierCurveTo(411.8, 433.6, 412.4, 433.9, 412.9, 434.4);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(412.3, 438.2);
        step.bezierCurveTo(412.5, 437.7, 412.6, 437.2, 412.6, 436.6);
        step.bezierCurveTo(412.6, 436.1, 412.6, 435.6, 412.4, 435.3);
        step.bezierCurveTo(412.1, 434.8, 411.6, 434.5, 411.0, 434.5);
        step.bezierCurveTo(410.4, 434.5, 410.0, 434.7, 409.7, 435.2);
        step.bezierCurveTo(409.5, 435.6, 409.3, 436.2, 409.3, 436.8);
        step.bezierCurveTo(409.3, 437.4, 409.5, 437.9, 409.7, 438.3);
        step.bezierCurveTo(410.0, 438.7, 410.4, 438.9, 411.0, 438.9);
        step.bezierCurveTo(411.6, 438.9, 412.0, 438.7, 412.3, 438.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(415.8, 433.8);
        step.lineTo(415.8, 437.6);
        step.bezierCurveTo(415.8, 437.9, 415.8, 438.2, 415.9, 438.3);
        step.bezierCurveTo(416.1, 438.7, 416.4, 438.9, 416.9, 438.9);
        step.bezierCurveTo(417.5, 438.9, 418.0, 438.6, 418.2, 438.0);
        step.bezierCurveTo(418.3, 437.6, 418.4, 437.2, 418.4, 436.6);
        step.lineTo(418.4, 433.8);
        step.lineTo(419.4, 433.8);
        step.lineTo(419.4, 439.6);
        step.lineTo(418.5, 439.6);
        step.lineTo(418.5, 438.7);
        step.bezierCurveTo(418.3, 438.9, 418.2, 439.1, 418.0, 439.3);
        step.bezierCurveTo(417.6, 439.6, 417.2, 439.7, 416.7, 439.7);
        step.bezierCurveTo(415.9, 439.7, 415.3, 439.4, 415.1, 438.9);
        step.bezierCurveTo(414.9, 438.6, 414.8, 438.2, 414.8, 437.7);
        step.lineTo(414.8, 433.8);
        step.lineTo(415.8, 433.8);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(424.1, 434.0);
        step.bezierCurveTo(424.3, 434.2, 424.5, 434.3, 424.7, 434.6);
        step.lineTo(424.7, 433.9);
        step.lineTo(425.6, 433.9);
        step.lineTo(425.6, 439.1);
        step.bezierCurveTo(425.6, 439.8, 425.5, 440.4, 425.3, 440.8);
        step.bezierCurveTo(424.9, 441.6, 424.1, 442.0, 423.0, 442.0);
        step.bezierCurveTo(422.4, 442.0, 421.9, 441.9, 421.5, 441.6);
        step.bezierCurveTo(421.0, 441.3, 420.8, 440.9, 420.7, 440.3);
        step.lineTo(421.7, 440.3);
        step.bezierCurveTo(421.8, 440.5, 421.9, 440.7, 422.0, 440.9);
        step.bezierCurveTo(422.2, 441.1, 422.6, 441.2, 423.0, 441.2);
        step.bezierCurveTo(423.8, 441.2, 424.3, 440.9, 424.5, 440.4);
        step.bezierCurveTo(424.6, 440.1, 424.7, 439.6, 424.7, 438.8);
        step.bezierCurveTo(424.5, 439.1, 424.2, 439.3, 424.0, 439.4);
        step.bezierCurveTo(423.7, 439.6, 423.3, 439.6, 422.9, 439.6);
        step.bezierCurveTo(422.3, 439.6, 421.7, 439.4, 421.3, 439.0);
        step.bezierCurveTo(420.8, 438.5, 420.6, 437.8, 420.6, 436.8);
        step.bezierCurveTo(420.6, 435.8, 420.8, 435.1, 421.3, 434.5);
        step.bezierCurveTo(421.7, 434.0, 422.3, 433.7, 423.0, 433.7);
        step.bezierCurveTo(423.4, 433.7, 423.8, 433.8, 424.1, 434.0);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(424.3, 435.1);
        step.bezierCurveTo(424.0, 434.7, 423.6, 434.6, 423.2, 434.6);
        step.bezierCurveTo(422.5, 434.6, 422.0, 434.9, 421.8, 435.5);
        step.bezierCurveTo(421.6, 435.9, 421.6, 436.3, 421.6, 436.9);
        step.bezierCurveTo(421.6, 437.5, 421.7, 438.0, 422.0, 438.3);
        step.bezierCurveTo(422.2, 438.7, 422.6, 438.8, 423.0, 438.8);
        step.bezierCurveTo(423.7, 438.8, 424.2, 438.5, 424.5, 437.9);
        step.bezierCurveTo(424.6, 437.5, 424.7, 437.1, 424.7, 436.7);
        step.bezierCurveTo(424.7, 435.9, 424.6, 435.4, 424.3, 435.1);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(427.1, 431.6);
        step.lineTo(428.0, 431.6);
        step.lineTo(428.0, 434.6);
        step.bezierCurveTo(428.3, 434.3, 428.5, 434.1, 428.7, 434.0);
        step.bezierCurveTo(429.0, 433.8, 429.4, 433.7, 429.8, 433.7);
        step.bezierCurveTo(430.7, 433.7, 431.2, 434.0, 431.5, 434.5);
        step.bezierCurveTo(431.7, 434.9, 431.8, 435.3, 431.8, 435.9);
        step.lineTo(431.8, 439.6);
        step.lineTo(430.8, 439.6);
        step.lineTo(430.8, 435.9);
        step.bezierCurveTo(430.8, 435.5, 430.7, 435.2, 430.6, 435.0);
        step.bezierCurveTo(430.4, 434.7, 430.1, 434.5, 429.6, 434.5);
        step.bezierCurveTo(429.2, 434.5, 428.9, 434.7, 428.5, 434.9);
        step.bezierCurveTo(428.2, 435.2, 428.0, 435.7, 428.0, 436.5);
        step.lineTo(428.0, 439.6);
        step.lineTo(427.1, 439.6);
        step.lineTo(427.1, 431.6);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(436.4, 432.2);
        step.lineTo(437.4, 432.2);
        step.lineTo(437.4, 433.8);
        step.lineTo(438.3, 433.8);
        step.lineTo(438.3, 434.6);
        step.lineTo(437.4, 434.6);
        step.lineTo(437.4, 438.4);
        step.bezierCurveTo(437.4, 438.6, 437.5, 438.7, 437.6, 438.8);
        step.bezierCurveTo(437.7, 438.8, 437.8, 438.8, 438.0, 438.8);
        step.bezierCurveTo(438.0, 438.8, 438.1, 438.8, 438.1, 438.8);
        step.bezierCurveTo(438.2, 438.8, 438.3, 438.8, 438.3, 438.8);
        step.lineTo(438.3, 439.6);
        step.bezierCurveTo(438.2, 439.6, 438.1, 439.6, 438.0, 439.6);
        step.bezierCurveTo(437.9, 439.6, 437.7, 439.7, 437.6, 439.7);
        step.bezierCurveTo(437.1, 439.7, 436.8, 439.5, 436.7, 439.3);
        step.bezierCurveTo(436.5, 439.1, 436.4, 438.8, 436.4, 438.4);
        step.lineTo(436.4, 434.6);
        step.lineTo(435.7, 434.6);
        step.lineTo(435.7, 433.8);
        step.lineTo(436.4, 433.8);
        step.lineTo(436.4, 432.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(439.3, 431.6);
        step.lineTo(440.3, 431.6);
        step.lineTo(440.3, 434.6);
        step.bezierCurveTo(440.5, 434.3, 440.7, 434.1, 440.9, 434.0);
        step.bezierCurveTo(441.2, 433.8, 441.6, 433.7, 442.0, 433.7);
        step.bezierCurveTo(442.9, 433.7, 443.4, 434.0, 443.7, 434.5);
        step.bezierCurveTo(443.9, 434.9, 444.0, 435.3, 444.0, 435.9);
        step.lineTo(444.0, 439.6);
        step.lineTo(443.0, 439.6);
        step.lineTo(443.0, 435.9);
        step.bezierCurveTo(443.0, 435.5, 442.9, 435.2, 442.8, 435.0);
        step.bezierCurveTo(442.7, 434.7, 442.3, 434.5, 441.8, 434.5);
        step.bezierCurveTo(441.4, 434.5, 441.1, 434.7, 440.8, 434.9);
        step.bezierCurveTo(440.4, 435.2, 440.3, 435.7, 440.3, 436.5);
        step.lineTo(440.3, 439.6);
        step.lineTo(439.3, 439.6);
        step.lineTo(439.3, 431.6);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(449.0, 434.0);
        step.bezierCurveTo(449.4, 434.2, 449.6, 434.4, 449.8, 434.7);
        step.bezierCurveTo(450.0, 435.0, 450.2, 435.3, 450.2, 435.7);
        step.bezierCurveTo(450.3, 436.0, 450.3, 436.4, 450.3, 437.0);
        step.lineTo(446.1, 437.0);
        step.bezierCurveTo(446.1, 437.6, 446.3, 438.0, 446.5, 438.4);
        step.bezierCurveTo(446.8, 438.8, 447.2, 438.9, 447.7, 438.9);
        step.bezierCurveTo(448.2, 438.9, 448.6, 438.8, 448.9, 438.4);
        step.bezierCurveTo(449.1, 438.2, 449.2, 438.0, 449.3, 437.8);
        step.lineTo(450.2, 437.8);
        step.bezierCurveTo(450.2, 438.0, 450.1, 438.2, 450.0, 438.5);
        step.bezierCurveTo(449.8, 438.7, 449.7, 438.9, 449.5, 439.1);
        step.bezierCurveTo(449.2, 439.4, 448.9, 439.6, 448.4, 439.7);
        step.bezierCurveTo(448.2, 439.7, 447.9, 439.8, 447.6, 439.8);
        step.bezierCurveTo(446.9, 439.8, 446.3, 439.5, 445.8, 439.0);
        step.bezierCurveTo(445.3, 438.5, 445.1, 437.7, 445.1, 436.8);
        step.bezierCurveTo(445.1, 435.9, 445.3, 435.1, 445.8, 434.5);
        step.bezierCurveTo(446.3, 434.0, 447.0, 433.7, 447.8, 433.7);
        step.bezierCurveTo(448.2, 433.7, 448.6, 433.8, 449.0, 434.0);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(449.3, 436.2);
        step.bezierCurveTo(449.3, 435.8, 449.2, 435.5, 449.0, 435.2);
        step.bezierCurveTo(448.8, 434.8, 448.3, 434.5, 447.7, 434.5);
        step.bezierCurveTo(447.3, 434.5, 446.9, 434.7, 446.6, 435.0);
        step.bezierCurveTo(446.3, 435.3, 446.2, 435.7, 446.1, 436.2);
        step.lineTo(449.3, 436.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(457.7, 436.1);
        step.bezierCurveTo(457.9, 436.1, 458.0, 436.0, 458.1, 435.8);
        step.bezierCurveTo(458.2, 435.7, 458.2, 435.6, 458.2, 435.4);
        step.bezierCurveTo(458.2, 435.1, 458.1, 434.9, 457.8, 434.7);
        step.bezierCurveTo(457.6, 434.6, 457.3, 434.5, 456.8, 434.5);
        step.bezierCurveTo(456.3, 434.5, 456.0, 434.6, 455.8, 434.9);
        step.bezierCurveTo(455.6, 435.0, 455.6, 435.3, 455.5, 435.6);
        step.lineTo(454.6, 435.6);
        step.bezierCurveTo(454.6, 434.9, 454.9, 434.4, 455.3, 434.1);
        step.bezierCurveTo(455.8, 433.8, 456.3, 433.7, 456.9, 433.7);
        step.bezierCurveTo(457.5, 433.7, 458.1, 433.8, 458.5, 434.1);
        step.bezierCurveTo(458.9, 434.3, 459.1, 434.7, 459.1, 435.3);
        step.lineTo(459.1, 438.6);
        step.bezierCurveTo(459.1, 438.7, 459.1, 438.8, 459.2, 438.8);
        step.bezierCurveTo(459.2, 438.9, 459.3, 438.9, 459.4, 438.9);
        step.bezierCurveTo(459.5, 438.9, 459.5, 438.9, 459.6, 438.9);
        step.bezierCurveTo(459.6, 438.9, 459.7, 438.9, 459.8, 438.9);
        step.lineTo(459.8, 439.6);
        step.bezierCurveTo(459.6, 439.6, 459.5, 439.7, 459.4, 439.7);
        step.bezierCurveTo(459.3, 439.7, 459.2, 439.7, 459.1, 439.7);
        step.bezierCurveTo(458.8, 439.7, 458.5, 439.6, 458.4, 439.3);
        step.bezierCurveTo(458.3, 439.2, 458.2, 439.0, 458.2, 438.8);
        step.bezierCurveTo(458.0, 439.1, 457.7, 439.3, 457.4, 439.5);
        step.bezierCurveTo(457.0, 439.7, 456.6, 439.8, 456.1, 439.8);
        step.bezierCurveTo(455.6, 439.8, 455.2, 439.6, 454.8, 439.3);
        step.bezierCurveTo(454.5, 438.9, 454.3, 438.5, 454.3, 438.1);
        step.bezierCurveTo(454.3, 437.5, 454.5, 437.1, 454.8, 436.8);
        step.bezierCurveTo(455.2, 436.5, 455.6, 436.3, 456.1, 436.3);
        step.lineTo(457.7, 436.1);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(455.6, 438.7);
        step.bezierCurveTo(455.8, 438.9, 456.1, 438.9, 456.4, 438.9);
        step.bezierCurveTo(456.7, 438.9, 457.0, 438.9, 457.4, 438.7);
        step.bezierCurveTo(457.9, 438.4, 458.2, 438.0, 458.2, 437.4);
        step.lineTo(458.2, 436.6);
        step.bezierCurveTo(458.0, 436.7, 457.9, 436.8, 457.7, 436.8);
        step.bezierCurveTo(457.5, 436.9, 457.3, 436.9, 457.2, 436.9);
        step.lineTo(456.6, 437.0);
        step.bezierCurveTo(456.2, 437.1, 456.0, 437.1, 455.8, 437.2);
        step.bezierCurveTo(455.5, 437.4, 455.3, 437.7, 455.3, 438.0);
        step.bezierCurveTo(455.3, 438.3, 455.4, 438.5, 455.6, 438.7);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(464.5, 434.1);
        step.bezierCurveTo(464.9, 434.4, 465.2, 435.0, 465.2, 435.7);
        step.lineTo(464.3, 435.7);
        step.bezierCurveTo(464.2, 435.4, 464.1, 435.1, 463.9, 434.9);
        step.bezierCurveTo(463.7, 434.6, 463.4, 434.5, 462.9, 434.5);
        step.bezierCurveTo(462.3, 434.5, 461.9, 434.8, 461.6, 435.4);
        step.bezierCurveTo(461.4, 435.8, 461.3, 436.3, 461.3, 436.9);
        step.bezierCurveTo(461.3, 437.4, 461.5, 437.9, 461.7, 438.3);
        step.bezierCurveTo(462.0, 438.7, 462.3, 438.9, 462.9, 438.9);
        step.bezierCurveTo(463.3, 438.9, 463.6, 438.8, 463.8, 438.5);
        step.bezierCurveTo(464.1, 438.3, 464.2, 438.0, 464.3, 437.5);
        step.lineTo(465.2, 437.5);
        step.bezierCurveTo(465.1, 438.3, 464.9, 438.8, 464.4, 439.2);
        step.bezierCurveTo(464.0, 439.6, 463.5, 439.7, 462.8, 439.7);
        step.bezierCurveTo(462.0, 439.7, 461.4, 439.5, 461.0, 438.9);
        step.bezierCurveTo(460.5, 438.4, 460.3, 437.7, 460.3, 436.8);
        step.bezierCurveTo(460.3, 435.8, 460.6, 435.0, 461.1, 434.5);
        step.bezierCurveTo(461.5, 433.9, 462.2, 433.6, 462.9, 433.6);
        step.bezierCurveTo(463.6, 433.6, 464.1, 433.8, 464.5, 434.1);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(466.4, 432.2);
        step.lineTo(467.4, 432.2);
        step.lineTo(467.4, 433.8);
        step.lineTo(468.3, 433.8);
        step.lineTo(468.3, 434.6);
        step.lineTo(467.4, 434.6);
        step.lineTo(467.4, 438.4);
        step.bezierCurveTo(467.4, 438.6, 467.4, 438.7, 467.6, 438.8);
        step.bezierCurveTo(467.7, 438.8, 467.8, 438.8, 468.0, 438.8);
        step.bezierCurveTo(468.0, 438.8, 468.1, 438.8, 468.1, 438.8);
        step.bezierCurveTo(468.2, 438.8, 468.2, 438.8, 468.3, 438.8);
        step.lineTo(468.3, 439.6);
        step.bezierCurveTo(468.2, 439.6, 468.1, 439.6, 468.0, 439.6);
        step.bezierCurveTo(467.8, 439.6, 467.7, 439.7, 467.6, 439.7);
        step.bezierCurveTo(467.1, 439.7, 466.8, 439.5, 466.6, 439.3);
        step.bezierCurveTo(466.5, 439.1, 466.4, 438.8, 466.4, 438.4);
        step.lineTo(466.4, 434.6);
        step.lineTo(465.6, 434.6);
        step.lineTo(465.6, 433.8);
        step.lineTo(466.4, 433.8);
        step.lineTo(466.4, 432.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(469.3, 431.7);
        step.lineTo(470.2, 431.7);
        step.lineTo(470.2, 432.8);
        step.lineTo(469.3, 432.8);
        step.lineTo(469.3, 431.7);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(469.3, 433.8);
        step.lineTo(470.2, 433.8);
        step.lineTo(470.2, 439.6);
        step.lineTo(469.3, 439.6);
        step.lineTo(469.3, 433.8);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(475.9, 434.4);
        step.bezierCurveTo(476.4, 434.9, 476.6, 435.6, 476.6, 436.6);
        step.bezierCurveTo(476.6, 437.5, 476.4, 438.3, 476.0, 438.9);
        step.bezierCurveTo(475.5, 439.5, 474.8, 439.8, 473.9, 439.8);
        step.bezierCurveTo(473.1, 439.8, 472.5, 439.5, 472.0, 439.0);
        step.bezierCurveTo(471.5, 438.4, 471.3, 437.7, 471.3, 436.8);
        step.bezierCurveTo(471.3, 435.8, 471.6, 435.1, 472.0, 434.5);
        step.bezierCurveTo(472.5, 433.9, 473.2, 433.6, 474.0, 433.6);
        step.bezierCurveTo(474.7, 433.6, 475.4, 433.9, 475.9, 434.4);
        step.closePath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(475.3, 438.2);
        step.bezierCurveTo(475.5, 437.7, 475.6, 437.2, 475.6, 436.6);
        step.bezierCurveTo(475.6, 436.1, 475.5, 435.6, 475.4, 435.3);
        step.bezierCurveTo(475.1, 434.8, 474.6, 434.5, 474.0, 434.5);
        step.bezierCurveTo(473.4, 434.5, 473.0, 434.7, 472.7, 435.2);
        step.bezierCurveTo(472.4, 435.6, 472.3, 436.2, 472.3, 436.8);
        step.bezierCurveTo(472.3, 437.4, 472.4, 437.9, 472.7, 438.3);
        step.bezierCurveTo(473.0, 438.7, 473.4, 438.9, 474.0, 438.9);
        step.bezierCurveTo(474.6, 438.9, 475.0, 438.7, 475.3, 438.2);
        step.closePath();
        step.fill();

        // step/Group/Group/Compound Path
        step.beginPath();

        // step/Group/Group/Compound Path/Path
        step.moveTo(477.8, 433.8);
        step.lineTo(478.7, 433.8);
        step.lineTo(478.7, 434.6);
        step.bezierCurveTo(479.0, 434.3, 479.3, 434.0, 479.6, 433.9);
        step.bezierCurveTo(479.9, 433.8, 480.3, 433.7, 480.6, 433.7);
        step.bezierCurveTo(481.4, 433.7, 482.0, 434.0, 482.3, 434.5);
        step.bezierCurveTo(482.4, 434.8, 482.5, 435.3, 482.5, 435.9);
        step.lineTo(482.5, 439.6);
        step.lineTo(481.5, 439.6);
        step.lineTo(481.5, 435.9);
        step.bezierCurveTo(481.5, 435.6, 481.5, 435.3, 481.4, 435.1);
        step.bezierCurveTo(481.2, 434.7, 480.9, 434.5, 480.4, 434.5);
        step.bezierCurveTo(480.2, 434.5, 480.0, 434.6, 479.9, 434.6);
        step.bezierCurveTo(479.6, 434.7, 479.4, 434.9, 479.2, 435.1);
        step.bezierCurveTo(479.0, 435.3, 478.9, 435.5, 478.9, 435.7);
        step.bezierCurveTo(478.8, 435.9, 478.8, 436.2, 478.8, 436.5);
        step.lineTo(478.8, 439.6);
        step.lineTo(477.8, 439.6);
        step.lineTo(477.8, 433.8);
        step.closePath();
        step.fill();

        // step/Group/Path
        step.restore();
        step.beginPath();
        step.moveTo(351.1, 441.1);
        step.lineTo(351.1, 437.7);
        step.lineTo(354.5, 437.7);
        step.lineTo(354.5, 434.3);
        step.lineTo(357.9, 434.3);
        step.lineTo(357.9, 430.9);
        step.lineTo(361.3, 430.9);
        step.lineTo(361.3, 441.1);
        step.lineTo(351.1, 441.1);
        step.closePath();
        step.fillStyle("rgb(239, 239, 239)");
        step.fill();
        step.restore();
        step.restore();
      }
    }
  ];
  step.boundary = function () {
    if (step.visible) {
      step.save();
      step.beginPath();
      step.moveTo(497.3, 446.9);
      step.lineTo(342.4, 446.9);
      step.lineTo(342.4, 425.9);
      step.lineTo(497.3, 425.9);
      step.lineTo(497.3, 446.9);
      step.closePath();
      step.restore();
    }
  };
  step.clickHandler = function () {
    this.timeline.stepThrough();
  };

  

  slider = new Slider("slider", false);
  slider.show();
  slider.track.cels = [
    function () {
      if (slider.visible) {

        // slider/Path
        slider.save();
        slider.beginPath();
        slider.moveTo(299.8, 394.9);
        slider.lineTo(274.6, 394.9);
        slider.lineTo(274.6, 388.8);
        slider.lineTo(299.8, 388.8);
        slider.lineTo(299.8, 394.9);
        slider.closePath();
        slider.fillStyle("rgb(239, 239, 239)");
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(324.9, 394.9);
        slider.lineTo(299.8, 394.9);
        slider.lineTo(299.8, 388.8);
        slider.lineTo(324.9, 388.8);
        slider.lineTo(324.9, 394.9);
        slider.closePath();
        slider.fillStyle("rgb(239, 239, 239)");
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(350.0, 394.9);
        slider.lineTo(324.9, 394.9);
        slider.lineTo(324.9, 388.8);
        slider.lineTo(350.0, 388.8);
        slider.lineTo(350.0, 394.9);
        slider.closePath();
        slider.fillStyle("rgb(239, 239, 239)");
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(375.1, 394.9);
        slider.lineTo(350.0, 394.9);
        slider.lineTo(350.0, 388.8);
        slider.lineTo(375.1, 388.8);
        slider.lineTo(375.1, 394.9);
        slider.closePath();
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(400.3, 394.9);
        slider.lineTo(375.1, 394.9);
        slider.lineTo(375.1, 388.8);
        slider.lineTo(400.3, 388.8);
        slider.lineTo(400.3, 394.9);
        slider.closePath();
        slider.fill();

        // slider/Path
        slider.beginPath();
        slider.moveTo(425.4, 394.9);
        slider.lineTo(400.3, 394.9);
        slider.lineTo(400.3, 388.8);
        slider.lineTo(425.4, 388.8);
        slider.lineTo(425.4, 394.9);
        slider.closePath();
        slider.fill();

        // slider/track/Group

        // slider/track/Group/Path
        slider.save();
        slider.beginPath();
        slider.moveTo(274.6, 388.8);
        slider.lineTo(274.6, 394.9);
        slider.lineTo(425.4, 394.9);
        slider.lineTo(425.4, 388.8);
        slider.lineTo(274.6, 388.8);
        slider.closePath();
        slider.strokeStyle("rgb(186, 186, 186)");
        slider.stroke();

        // slider/track/Group/Path
        slider.beginPath();
        slider.moveTo(274.6, 394.9);
        slider.lineTo(274.6, 399.0);
        slider.stroke();

        // slider/track/Group/Path
        slider.beginPath();
        slider.moveTo(350.0, 394.9);
        slider.lineTo(350.0, 399.0);
        slider.stroke();

        // slider/track/Group/Path
        slider.beginPath();
        slider.moveTo(354.0, 394.9);
        slider.lineTo(354.0, 399.0);
        slider.stroke();

        // slider/track/Group/Path
        slider.beginPath();
        slider.moveTo(404.3, 394.9);
        slider.lineTo(404.3, 399.0);
        slider.stroke();

        // slider/track/Group/Path
        slider.beginPath();
        slider.moveTo(425.4, 394.9);
        slider.lineTo(425.4, 399.0);
        slider.stroke();
        slider.restore();
        slider.restore();
      }
    }
  ];
  slider.scrubber.cels = [
    function () {
      if (slider.visible) {

        // slider/scrubber/Path
        slider.save();
        slider.beginPath();
        slider.moveTo(280.6, 396.3);
        slider.lineTo(280.6, 388.8);
        slider.bezierCurveTo(280.6, 387.7, 279.7, 386.8, 278.6, 386.8);
        slider.lineTo(270.7, 386.8);
        slider.bezierCurveTo(269.6, 386.8, 268.7, 387.7, 268.7, 388.8);
        slider.lineTo(268.7, 396.3);
        slider.lineTo(274.6, 401.8);
        slider.lineTo(280.6, 396.3);
        slider.closePath();
        slider.fillStyle("rgb(255, 255, 255)");
        slider.fill();
        slider.strokeStyle("rgb(80, 80, 80)");
        slider.stroke();
        slider.restore();
      }
    }
  ];
  slider.scrubber.xinc = 1.63; 
  slider.makeSequence("boundary");
  slider.boundary = function () {
    if (slider.visible) {

      // slider/Path
      slider.save();
      slider.beginPath();
      slider.moveTo(280.6, 396.3);
      slider.lineTo(280.6, 388.8);
      slider.bezierCurveTo(280.6, 387.7, 279.7, 386.8, 278.6, 386.8);
      slider.lineTo(270.7, 386.8);
      slider.bezierCurveTo(269.6, 386.8, 268.7, 387.7, 268.7, 388.8);
      slider.lineTo(268.7, 396.3);
      slider.lineTo(274.6, 401.8);
      slider.lineTo(280.6, 396.3);
      slider.closePath();
      slider.restore();
    }
  };

  back = new Character("back", false);
  back.show();
  back.main.cels = [
    function () {
      if (back.visible) {

        // back/Path
        back.save();
        back.beginPath();
        back.moveTo(470.3, 404.8);
        back.bezierCurveTo(470.3, 405.9, 469.4, 406.8, 468.3, 406.8);
        back.lineTo(452.3, 406.8);
        back.bezierCurveTo(451.2, 406.8, 450.3, 405.9, 450.3, 404.8);
        back.lineTo(450.3, 388.8);
        back.bezierCurveTo(450.3, 387.7, 451.2, 386.8, 452.3, 386.8);
        back.lineTo(468.3, 386.8);
        back.bezierCurveTo(469.4, 386.8, 470.3, 387.7, 470.3, 388.8);
        back.lineTo(470.3, 404.8);
        back.closePath();
        back.fillStyle("rgb(255, 255, 255)");
        back.fill();
        back.strokeStyle("rgb(182, 182, 182)");
        back.stroke();

        // back/Path
        back.beginPath();
        back.moveTo(462.9, 396.8);
        back.lineTo(463.7, 401.7);
        back.lineTo(456.3, 396.8);
        back.lineTo(463.7, 391.9);
        back.lineTo(462.9, 396.8);
        back.closePath();
        back.fillStyle("rgb(119, 119, 119)");
        back.fill();
        back.restore();
      }
    }
  ];

  forward = new Character("forward", false);
  forward.show();
  forward.main.cels = [
    function () {
      if (forward.visible) {

        // forward/Path
        forward.save();
        forward.beginPath();
        forward.moveTo(477.3, 404.8);
        forward.bezierCurveTo(477.3, 405.9, 478.2, 406.8, 479.3, 406.8);
        forward.lineTo(495.3, 406.8);
        forward.bezierCurveTo(496.4, 406.8, 497.3, 405.9, 497.3, 404.8);
        forward.lineTo(497.3, 388.8);
        forward.bezierCurveTo(497.3, 387.7, 496.4, 386.8, 495.3, 386.8);
        forward.lineTo(479.3, 386.8);
        forward.bezierCurveTo(478.2, 386.8, 477.3, 387.7, 477.3, 388.8);
        forward.lineTo(477.3, 404.8);
        forward.closePath();
        forward.fillStyle("rgb(255, 255, 255)");
        forward.fill();
        forward.strokeStyle("rgb(182, 182, 182)");
        forward.stroke();

        // forward/Path
        forward.beginPath();
        forward.moveTo(484.7, 396.8);
        forward.lineTo(483.9, 401.7);
        forward.lineTo(491.3, 396.8);
        forward.lineTo(483.9, 391.9);
        forward.lineTo(484.7, 396.8);
        forward.closePath();
        forward.fillStyle("rgb(119, 119, 119)");
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
        track.fillRect(0.0, 336.0, 800, 18);
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
        pit.moveTo(581.1, 288.7);
        pit.lineTo(651.3, 316.4);
        pit.lineTo(499.4, 316.4);
        pit.lineTo(429.2, 288.7);
        pit.lineTo(581.1, 288.7);
        pit.closePath();
        pit.fillStyle("rgb(198, 213, 237)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(499.4, 316.4);
        pit.lineTo(499.4, 362.1);
        pit.lineTo(429.2, 334.4);
        pit.lineTo(429.2, 288.7);
        pit.lineTo(499.4, 316.4);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(435.0, 39.1);
        pit.lineTo(438.2, 39.1);
        pit.lineTo(438.2, 338.9);
        pit.lineTo(435.0, 338.9);
        pit.lineTo(435.0, 39.1);
        pit.closePath();
        gradient =   pit.createLinearGradient(434.7, 189.0, 438.5, 189.0);
        pit.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pit.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pit.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pit.fillStyle(gradient);
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(430.9, 58.2);
        pit.lineTo(487.8, 45.2);
        pit.lineTo(488.5, 48.3);
        pit.lineTo(431.5, 61.3);
        pit.lineTo(430.9, 58.2);
        pit.closePath();
        gradient =   pit.createLinearGradient(459.3, 51.4, 460.0, 54.8);
        pit.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pit.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pit.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pit.fillStyle(gradient);
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(317.9, 311.4);
        pit.lineTo(331.1, 316.5);
        pit.lineTo(331.1, 344.2);
        pit.lineTo(317.9, 339.1);
        pit.lineTo(317.9, 311.4);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(443.7, 344.2);
        pit.lineTo(443.7, 301.4);
        pit.lineTo(388.2, 316.5);
        pit.lineTo(331.1, 316.5);
        pit.lineTo(331.1, 344.2);
        pit.lineTo(443.7, 344.2);
        pit.closePath();
        pit.fillStyle("rgb(123, 162, 212)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(443.7, 301.4);
        pit.lineTo(453.8, 305.4);
        pit.lineTo(453.8, 348.2);
        pit.lineTo(443.7, 344.2);
        pit.lineTo(443.7, 301.4);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(441.1, 293.4);
        pit.lineTo(374.9, 311.4);
        pit.lineTo(317.9, 311.4);
        pit.lineTo(331.1, 316.5);
        pit.lineTo(388.2, 316.5);
        pit.lineTo(443.7, 301.4);
        pit.lineTo(453.8, 305.4);
        pit.lineTo(480.3, 308.9);
        pit.lineTo(441.1, 293.4);
        pit.closePath();
        pit.fillStyle("rgb(198, 213, 237)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(499.4, 316.4);
        pit.lineTo(499.4, 362.1);
        pit.lineTo(651.3, 362.2);
        pit.lineTo(651.3, 316.4);
        pit.lineTo(499.4, 316.4);
        pit.closePath();
        pit.fillStyle("rgb(123, 162, 212)");
        pit.fill();
        pit.restore();
      }
    }
  ];
  pit.makeSequence("land");
  pit.land.cels = [
    function () {
      if (pit.visible) {

      var gradient;

        // pit/Path
        pit.save();
        pit.beginPath();
        pit.moveTo(581.1, 288.7);
        pit.lineTo(651.3, 316.4);
        pit.bezierCurveTo(651.3, 316.4, 585.6, 325.5, 559.8, 324.8);
        pit.bezierCurveTo(534.1, 324.1, 499.4, 316.4, 499.4, 316.4);
        pit.lineTo(429.2, 288.7);
        pit.bezierCurveTo(429.2, 288.7, 463.9, 296.4, 489.6, 297.1);
        pit.bezierCurveTo(515.3, 297.8, 581.1, 288.7, 581.1, 288.7);
        pit.closePath();
        pit.fillStyle("rgb(198, 213, 237)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(499.4, 316.4);
        pit.lineTo(499.4, 362.1);
        pit.lineTo(429.2, 334.4);
        pit.lineTo(429.2, 288.7);
        pit.lineTo(499.4, 316.4);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(435.0, 39.1);
        pit.lineTo(438.2, 39.1);
        pit.lineTo(438.2, 338.9);
        pit.lineTo(435.0, 338.9);
        pit.lineTo(435.0, 39.1);
        pit.closePath();
        gradient =   pit.createLinearGradient(434.7, 189.0, 438.5, 189.0);
        pit.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pit.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pit.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pit.fillStyle(gradient);
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(430.9, 58.2);
        pit.lineTo(487.8, 45.2);
        pit.lineTo(488.5, 48.3);
        pit.lineTo(431.5, 61.3);
        pit.lineTo(430.9, 58.2);
        pit.closePath();
        gradient =   pit.createLinearGradient(459.3, 51.4, 460.0, 54.8);
        pit.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pit.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pit.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pit.fillStyle(gradient);
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(317.9, 311.4);
        pit.lineTo(331.1, 316.5);
        pit.lineTo(331.1, 344.2);
        pit.lineTo(317.9, 339.1);
        pit.lineTo(317.9, 311.4);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(443.7, 344.2);
        pit.lineTo(443.7, 301.4);
        pit.lineTo(388.2, 316.5);
        pit.lineTo(331.1, 316.5);
        pit.lineTo(331.1, 344.2);
        pit.lineTo(443.7, 344.2);
        pit.closePath();
        pit.fillStyle("rgb(123, 162, 212)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(443.7, 301.4);
        pit.lineTo(453.8, 305.4);
        pit.lineTo(453.8, 348.2);
        pit.lineTo(443.7, 344.2);
        pit.lineTo(443.7, 301.4);
        pit.closePath();
        pit.fillStyle("rgb(79, 134, 198)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(441.1, 293.4);
        pit.lineTo(374.9, 311.4);
        pit.lineTo(317.9, 311.4);
        pit.lineTo(331.1, 316.5);
        pit.lineTo(388.2, 316.5);
        pit.lineTo(443.7, 301.4);
        pit.lineTo(453.8, 305.4);
        pit.lineTo(480.3, 308.9);
        pit.lineTo(441.1, 293.4);
        pit.closePath();
        pit.fillStyle("rgb(198, 213, 237)");
        pit.fill();

        // pit/Path
        pit.beginPath();
        pit.moveTo(499.4, 316.4);
        pit.lineTo(499.4, 362.1);
        pit.lineTo(651.3, 362.2);
        pit.lineTo(651.3, 316.4);
        pit.bezierCurveTo(651.3, 316.4, 585.6, 325.5, 559.8, 324.8);
        pit.bezierCurveTo(534.1, 324.1, 499.4, 316.4, 499.4, 316.4);
        pit.closePath();
        pit.fillStyle("rgb(123, 162, 212)");
        pit.fill();
        pit.restore();
      }
    }
  ];
  pit.main.iterations = 91;
  pit.sequence_order = ["main", "land"];

  shadow = new Character("shadow", false);
  shadow.show();
  shadow.main.cels = [
    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(314.1, 341.5);
        shadow.lineTo(212.6, 340.2);
        shadow.bezierCurveTo(210.2, 338.5, 207.3, 338.5, 204.7, 338.3);
        shadow.bezierCurveTo(195.1, 337.5, 185.6, 339.6, 175.8, 338.3);
        shadow.bezierCurveTo(172.4, 337.9, 169.2, 338.1, 166.0, 338.9);
        shadow.bezierCurveTo(158.8, 340.4, 151.8, 338.5, 144.8, 339.8);
        shadow.lineTo(144.3, 340.4);
        shadow.bezierCurveTo(143.7, 342.3, 145.6, 343.0, 146.9, 343.0);
        shadow.bezierCurveTo(153.7, 343.4, 160.3, 343.2, 167.1, 343.2);
        shadow.bezierCurveTo(168.8, 345.1, 171.1, 346.4, 173.9, 346.6);
        shadow.bezierCurveTo(177.9, 347.0, 182.2, 347.7, 185.6, 346.0);
        shadow.bezierCurveTo(187.3, 345.1, 189.0, 344.0, 190.7, 344.0);
        shadow.bezierCurveTo(194.9, 343.8, 198.9, 343.2, 203.2, 342.6);
        shadow.bezierCurveTo(206.2, 342.0, 209.1, 342.6, 212.1, 342.3);
        shadow.lineTo(212.1, 342.3);
        shadow.lineTo(314.1, 341.5);
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
        shadow.moveTo(314.1, 342.5);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 185.6, 339.6, 175.8, 338.3);
        shadow.bezierCurveTo(172.4, 337.9, 169.2, 338.1, 166.0, 338.9);
        shadow.bezierCurveTo(163.2, 339.1, 161.7, 339.5, 160.6, 339.8);
        shadow.lineTo(160.1, 340.4);
        shadow.bezierCurveTo(159.5, 342.3, 161.4, 343.0, 162.7, 343.0);
        shadow.bezierCurveTo(163.9, 343.0, 165.7, 343.2, 167.1, 343.2);
        shadow.bezierCurveTo(168.8, 345.1, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 182.8, 344.3, 186.2, 342.6);
        shadow.bezierCurveTo(187.9, 341.7, 189.0, 344.0, 190.7, 344.0);
        shadow.bezierCurveTo(194.9, 343.8, 198.9, 343.2, 203.2, 342.6);
        shadow.bezierCurveTo(206.2, 342.0, 209.1, 342.6, 212.1, 342.3);
        shadow.lineTo(212.1, 342.3);
        shadow.lineTo(314.1, 342.5);
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
        shadow.moveTo(314.1, 341.2);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 185.6, 339.6, 175.8, 338.3);
        shadow.bezierCurveTo(172.4, 337.9, 169.2, 338.1, 166.0, 338.9);
        shadow.bezierCurveTo(158.8, 340.4, 163.0, 339.8, 156.0, 341.1);
        shadow.lineTo(155.5, 341.7);
        shadow.bezierCurveTo(154.9, 343.7, 156.8, 344.3, 158.1, 344.3);
        shadow.bezierCurveTo(164.9, 344.7, 160.3, 343.2, 167.1, 343.2);
        shadow.bezierCurveTo(168.8, 345.1, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 182.8, 344.3, 186.2, 342.6);
        shadow.bezierCurveTo(187.9, 341.7, 190.2, 341.2, 191.9, 341.2);
        shadow.bezierCurveTo(196.2, 341.0, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(206.2, 340.7, 217.5, 341.9, 217.5, 341.9);
        shadow.lineTo(314.1, 341.2);
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
        shadow.moveTo(336.3, 340.5);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 186.5, 340.4, 176.8, 339.1);
        shadow.bezierCurveTo(173.4, 338.7, 169.7, 339.4, 166.6, 340.3);
        shadow.bezierCurveTo(159.3, 341.8, 163.0, 339.8, 156.0, 341.1);
        shadow.lineTo(155.5, 341.7);
        shadow.bezierCurveTo(154.9, 343.7, 156.8, 344.3, 158.1, 344.3);
        shadow.bezierCurveTo(164.9, 344.7, 161.0, 343.7, 167.8, 343.7);
        shadow.bezierCurveTo(169.5, 345.6, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 192.2, 343.1, 193.9, 343.1);
        shadow.bezierCurveTo(198.2, 342.9, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(206.2, 340.7, 217.5, 341.9, 217.5, 341.9);
        shadow.lineTo(336.3, 340.5);
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
        shadow.moveTo(334.9, 341.8);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 186.5, 340.4, 176.8, 339.1);
        shadow.bezierCurveTo(173.4, 338.7, 169.7, 339.4, 166.6, 340.3);
        shadow.bezierCurveTo(155.7, 341.8, 154.6, 339.8, 147.6, 341.1);
        shadow.lineTo(147.2, 341.7);
        shadow.bezierCurveTo(146.6, 343.7, 148.5, 344.3, 149.7, 344.3);
        shadow.bezierCurveTo(156.5, 344.7, 161.0, 343.7, 167.8, 343.7);
        shadow.bezierCurveTo(169.5, 345.6, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 192.2, 343.1, 193.9, 343.1);
        shadow.bezierCurveTo(198.2, 342.9, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(206.2, 340.7, 215.4, 343.5, 220.8, 343.4);
        shadow.bezierCurveTo(226.2, 343.3, 228.9, 341.7, 228.9, 341.7);
        shadow.lineTo(334.9, 341.8);
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
        shadow.moveTo(344.9, 340.1);
        shadow.lineTo(209.4, 339.2);
        shadow.bezierCurveTo(209.4, 339.2, 198.2, 337.7, 196.9, 337.6);
        shadow.bezierCurveTo(187.3, 336.8, 189.4, 340.3, 179.7, 339.0);
        shadow.bezierCurveTo(173.5, 340.4, 169.6, 341.0, 166.6, 340.3);
        shadow.bezierCurveTo(161.3, 340.9, 159.7, 340.6, 158.7, 340.8);
        shadow.bezierCurveTo(157.6, 341.0, 156.7, 341.8, 156.7, 341.8);
        shadow.bezierCurveTo(156.1, 343.7, 160.0, 344.3, 161.3, 344.3);
        shadow.bezierCurveTo(162.8, 344.3, 163.2, 344.4, 165.3, 344.4);
        shadow.bezierCurveTo(167.0, 346.3, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 192.4, 341.3, 194.1, 341.3);
        shadow.bezierCurveTo(198.3, 341.1, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(207.6, 341.5, 228.9, 341.7, 228.9, 341.7);
        shadow.lineTo(344.9, 340.1);
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
        shadow.moveTo(367.3, 340.6);
        shadow.bezierCurveTo(367.3, 340.6, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 209.4, 339.0, 209.4, 339.0);
        shadow.bezierCurveTo(209.4, 339.0, 198.6, 338.5, 197.3, 338.5);
        shadow.bezierCurveTo(187.8, 337.7, 189.4, 340.3, 179.7, 339.0);
        shadow.bezierCurveTo(173.5, 340.4, 169.6, 341.0, 166.6, 340.3);
        shadow.bezierCurveTo(161.3, 340.9, 159.7, 340.6, 158.7, 340.8);
        shadow.bezierCurveTo(157.6, 341.0, 156.7, 341.8, 156.7, 341.8);
        shadow.bezierCurveTo(156.1, 343.7, 160.0, 344.3, 161.3, 344.3);
        shadow.bezierCurveTo(162.8, 344.3, 163.2, 344.4, 165.3, 344.4);
        shadow.bezierCurveTo(167.0, 346.3, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 193.3, 343.6, 195.0, 343.6);
        shadow.bezierCurveTo(199.2, 343.4, 205.8, 343.0, 210.1, 342.3);
        shadow.bezierCurveTo(214.6, 342.6, 216.9, 345.4, 223.4, 345.0);
        shadow.bezierCurveTo(229.9, 344.6, 230.9, 342.0, 230.9, 342.0);
        shadow.lineTo(363.8, 341.3);
        shadow.lineTo(367.3, 340.6);
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
        shadow.moveTo(367.3, 340.6);
        shadow.bezierCurveTo(367.3, 340.6, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 209.4, 339.0, 209.4, 339.0);
        shadow.bezierCurveTo(209.4, 339.0, 198.6, 338.5, 197.3, 338.5);
        shadow.bezierCurveTo(187.8, 337.7, 189.4, 340.3, 179.7, 339.0);
        shadow.bezierCurveTo(173.5, 340.4, 169.6, 341.0, 166.6, 340.3);
        shadow.bezierCurveTo(161.3, 340.9, 159.7, 340.6, 158.7, 340.8);
        shadow.bezierCurveTo(157.6, 341.0, 156.7, 341.8, 156.7, 341.8);
        shadow.bezierCurveTo(156.1, 343.7, 160.0, 344.3, 161.3, 344.3);
        shadow.bezierCurveTo(162.8, 344.3, 163.2, 344.4, 165.3, 344.4);
        shadow.bezierCurveTo(167.0, 346.3, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 193.3, 343.6, 195.0, 343.6);
        shadow.bezierCurveTo(199.2, 343.4, 200.3, 343.3, 204.6, 342.7);
        shadow.bezierCurveTo(205.9, 342.7, 207.0, 344.4, 208.5, 344.7);
        shadow.bezierCurveTo(212.1, 345.5, 212.2, 345.6, 216.7, 345.1);
        shadow.bezierCurveTo(218.3, 345.0, 220.4, 342.2, 220.4, 342.2);
        shadow.lineTo(363.8, 341.3);
        shadow.lineTo(367.3, 340.6);
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
        shadow.moveTo(384.3, 340.6);
        shadow.bezierCurveTo(384.3, 340.6, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 209.4, 339.0, 209.4, 339.0);
        shadow.bezierCurveTo(209.4, 339.0, 202.5, 337.5, 198.9, 337.8);
        shadow.bezierCurveTo(189.3, 336.9, 190.2, 337.0, 179.7, 336.7);
        shadow.bezierCurveTo(172.7, 337.3, 175.2, 341.0, 172.2, 340.3);
        shadow.bezierCurveTo(167.0, 340.9, 165.3, 340.6, 164.3, 340.8);
        shadow.bezierCurveTo(163.3, 341.0, 162.4, 341.8, 162.4, 341.8);
        shadow.bezierCurveTo(161.8, 343.7, 165.7, 344.3, 167.0, 344.3);
        shadow.bezierCurveTo(168.5, 344.3, 168.9, 344.4, 170.9, 344.4);
        shadow.bezierCurveTo(172.6, 346.3, 177.9, 342.2, 180.6, 342.5);
        shadow.bezierCurveTo(184.6, 342.9, 183.7, 344.6, 186.7, 345.0);
        shadow.bezierCurveTo(188.8, 345.3, 192.5, 346.0, 194.9, 344.7);
        shadow.bezierCurveTo(199.2, 344.5, 200.3, 343.3, 204.6, 342.7);
        shadow.bezierCurveTo(205.9, 342.7, 220.4, 342.2, 220.4, 342.2);
        shadow.lineTo(380.8, 341.3);
        shadow.lineTo(384.3, 340.6);
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
        shadow.moveTo(384.3, 340.6);
        shadow.bezierCurveTo(384.3, 340.6, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 208.6, 340.4, 208.6, 340.4);
        shadow.bezierCurveTo(208.6, 340.4, 199.5, 339.6, 196.0, 339.9);
        shadow.bezierCurveTo(186.4, 339.0, 190.4, 339.3, 180.0, 339.1);
        shadow.bezierCurveTo(173.0, 339.6, 175.2, 341.0, 172.2, 340.3);
        shadow.bezierCurveTo(167.0, 340.9, 165.3, 340.6, 164.3, 340.8);
        shadow.bezierCurveTo(163.3, 341.0, 162.4, 341.8, 162.4, 341.8);
        shadow.bezierCurveTo(161.8, 343.7, 164.4, 344.3, 165.7, 344.3);
        shadow.bezierCurveTo(167.2, 344.3, 167.1, 345.4, 169.1, 345.3);
        shadow.bezierCurveTo(170.8, 347.2, 177.2, 346.8, 180.0, 347.1);
        shadow.bezierCurveTo(184.0, 347.5, 181.5, 342.2, 184.6, 342.7);
        shadow.bezierCurveTo(186.6, 343.0, 190.2, 344.6, 192.6, 344.8);
        shadow.bezierCurveTo(195.0, 345.1, 200.3, 343.3, 204.6, 342.7);
        shadow.bezierCurveTo(205.9, 342.7, 220.4, 342.2, 220.4, 342.2);
        shadow.lineTo(380.8, 341.3);
        shadow.lineTo(384.3, 340.6);
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
        shadow.moveTo(416.1, 340.6);
        shadow.bezierCurveTo(416.1, 340.6, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 208.6, 340.4, 208.6, 340.4);
        shadow.bezierCurveTo(208.6, 340.4, 199.5, 339.6, 196.0, 339.9);
        shadow.bezierCurveTo(186.4, 339.0, 190.4, 339.3, 180.0, 339.1);
        shadow.bezierCurveTo(173.0, 339.6, 175.2, 341.0, 172.2, 340.3);
        shadow.bezierCurveTo(167.0, 340.9, 154.1, 338.9, 153.1, 339.1);
        shadow.bezierCurveTo(152.1, 339.3, 151.2, 340.1, 151.2, 340.1);
        shadow.bezierCurveTo(150.6, 342.0, 153.2, 342.6, 154.5, 342.6);
        shadow.bezierCurveTo(156.0, 342.6, 167.1, 345.4, 169.1, 345.3);
        shadow.bezierCurveTo(170.8, 347.2, 175.2, 347.3, 177.9, 347.6);
        shadow.bezierCurveTo(182.0, 348.0, 185.9, 347.7, 187.5, 346.1);
        shadow.bezierCurveTo(190.3, 345.2, 190.2, 344.6, 192.6, 344.8);
        shadow.bezierCurveTo(195.0, 345.1, 200.3, 343.3, 204.6, 342.7);
        shadow.bezierCurveTo(205.9, 342.7, 220.4, 342.2, 220.4, 342.2);
        shadow.lineTo(412.6, 341.3);
        shadow.lineTo(416.1, 340.6);
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
        shadow.moveTo(428.9, 340.7);
        shadow.bezierCurveTo(428.9, 340.7, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 208.6, 340.4, 208.6, 340.4);
        shadow.bezierCurveTo(208.6, 340.4, 199.5, 339.6, 196.0, 339.9);
        shadow.bezierCurveTo(186.4, 339.0, 193.8, 339.3, 183.3, 339.0);
        shadow.bezierCurveTo(176.3, 339.6, 174.4, 339.6, 174.4, 339.6);
        shadow.bezierCurveTo(174.4, 339.6, 167.7, 338.8, 166.7, 339.0);
        shadow.bezierCurveTo(165.7, 339.2, 164.8, 340.0, 164.8, 340.0);
        shadow.bezierCurveTo(164.1, 342.0, 166.8, 342.6, 168.1, 342.6);
        shadow.bezierCurveTo(169.6, 342.6, 170.4, 342.8, 172.4, 342.8);
        shadow.bezierCurveTo(175.4, 342.6, 176.4, 343.2, 179.2, 343.4);
        shadow.bezierCurveTo(183.2, 343.8, 185.5, 344.8, 187.5, 345.1);
        shadow.bezierCurveTo(190.5, 345.5, 190.2, 344.6, 192.6, 344.8);
        shadow.bezierCurveTo(195.0, 345.1, 200.3, 343.3, 204.6, 342.7);
        shadow.bezierCurveTo(205.9, 342.7, 220.4, 342.2, 220.4, 342.2);
        shadow.lineTo(425.4, 341.5);
        shadow.lineTo(428.9, 340.7);
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
        shadow.moveTo(438.4, 339.7);
        shadow.bezierCurveTo(438.4, 339.7, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 208.6, 340.4, 208.6, 340.4);
        shadow.bezierCurveTo(208.6, 340.4, 199.5, 339.6, 196.0, 339.9);
        shadow.bezierCurveTo(186.4, 339.0, 193.8, 339.3, 183.3, 339.0);
        shadow.bezierCurveTo(176.3, 339.6, 174.4, 339.6, 174.4, 339.6);
        shadow.bezierCurveTo(174.4, 339.6, 173.7, 338.8, 172.7, 339.0);
        shadow.bezierCurveTo(171.7, 339.2, 170.8, 340.0, 170.8, 340.0);
        shadow.bezierCurveTo(170.1, 342.0, 172.8, 342.6, 174.1, 342.6);
        shadow.bezierCurveTo(175.6, 342.6, 176.4, 342.8, 178.4, 342.8);
        shadow.bezierCurveTo(181.4, 342.6, 180.4, 343.2, 183.2, 343.4);
        shadow.bezierCurveTo(187.2, 343.8, 185.5, 343.8, 187.5, 344.1);
        shadow.bezierCurveTo(190.5, 344.5, 190.2, 344.6, 192.6, 344.8);
        shadow.bezierCurveTo(195.0, 345.1, 200.3, 343.3, 204.6, 342.7);
        shadow.bezierCurveTo(205.9, 342.7, 220.4, 342.2, 220.4, 342.2);
        shadow.lineTo(434.9, 340.5);
        shadow.lineTo(438.4, 339.7);
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
        shadow.moveTo(428.3, 339.7);
        shadow.bezierCurveTo(428.3, 339.7, 239.5, 339.7, 237.0, 339.7);
        shadow.bezierCurveTo(234.6, 339.6, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 209.8, 338.6, 209.8, 338.6);
        shadow.bezierCurveTo(209.8, 338.6, 200.6, 338.7, 197.1, 338.9);
        shadow.bezierCurveTo(187.5, 338.1, 193.8, 339.3, 183.3, 339.0);
        shadow.bezierCurveTo(179.1, 339.3, 167.4, 339.7, 163.7, 339.7);
        shadow.bezierCurveTo(161.0, 339.6, 156.2, 339.0, 156.2, 339.0);
        shadow.bezierCurveTo(156.2, 339.0, 153.9, 338.8, 152.8, 339.0);
        shadow.bezierCurveTo(151.8, 339.2, 150.9, 340.0, 150.9, 340.0);
        shadow.bezierCurveTo(150.3, 342.0, 153.2, 341.9, 154.4, 341.9);
        shadow.bezierCurveTo(155.0, 341.9, 159.4, 341.8, 162.9, 341.9);
        shadow.bezierCurveTo(169.5, 342.2, 177.1, 342.8, 178.4, 342.8);
        shadow.bezierCurveTo(181.4, 342.6, 180.4, 343.2, 183.2, 343.4);
        shadow.bezierCurveTo(187.2, 343.8, 185.5, 343.8, 187.5, 344.1);
        shadow.bezierCurveTo(190.5, 344.5, 190.2, 344.6, 192.6, 344.8);
        shadow.bezierCurveTo(195.0, 345.1, 200.3, 343.3, 204.6, 342.7);
        shadow.bezierCurveTo(205.5, 342.7, 210.9, 343.8, 215.3, 343.6);
        shadow.bezierCurveTo(217.1, 343.5, 218.3, 345.3, 218.3, 345.3);
        shadow.bezierCurveTo(218.3, 345.3, 230.6, 347.2, 234.2, 343.5);
        shadow.bezierCurveTo(237.7, 339.9, 427.8, 340.5, 427.8, 340.5);
        shadow.lineTo(428.3, 339.7);
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
        shadow.moveTo(425.7, 343.4);
        shadow.bezierCurveTo(425.7, 343.4, 237.2, 342.2, 234.7, 342.2);
        shadow.bezierCurveTo(232.2, 342.1, 229.8, 340.5, 223.2, 340.4);
        shadow.bezierCurveTo(216.5, 340.3, 209.8, 338.6, 209.8, 338.6);
        shadow.bezierCurveTo(209.8, 338.6, 200.6, 338.7, 197.1, 338.9);
        shadow.bezierCurveTo(187.5, 338.1, 193.8, 339.3, 183.3, 339.0);
        shadow.bezierCurveTo(179.1, 339.3, 169.8, 340.0, 169.8, 340.0);
        shadow.bezierCurveTo(169.8, 340.0, 167.5, 339.9, 166.5, 340.1);
        shadow.bezierCurveTo(165.5, 340.3, 164.6, 341.1, 164.6, 341.1);
        shadow.bezierCurveTo(163.9, 343.0, 166.8, 342.9, 168.1, 342.9);
        shadow.bezierCurveTo(168.6, 342.9, 177.1, 342.8, 178.4, 342.8);
        shadow.bezierCurveTo(181.4, 342.6, 180.4, 343.2, 183.2, 343.4);
        shadow.bezierCurveTo(187.2, 343.8, 185.5, 343.8, 187.5, 344.1);
        shadow.bezierCurveTo(190.5, 344.5, 190.2, 344.6, 192.6, 344.8);
        shadow.bezierCurveTo(195.0, 345.1, 200.4, 345.7, 204.7, 345.1);
        shadow.bezierCurveTo(205.6, 345.2, 210.9, 343.8, 215.3, 343.6);
        shadow.bezierCurveTo(217.1, 343.5, 218.3, 345.3, 218.3, 345.3);
        shadow.bezierCurveTo(218.3, 345.3, 230.1, 346.2, 235.2, 345.1);
        shadow.bezierCurveTo(239.8, 344.1, 424.8, 345.1, 424.8, 345.1);
        shadow.lineTo(425.7, 343.4);
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
        shadow.moveTo(425.7, 343.4);
        shadow.bezierCurveTo(425.7, 343.4, 237.2, 342.2, 234.7, 342.2);
        shadow.bezierCurveTo(232.2, 342.1, 229.1, 341.5, 222.5, 341.4);
        shadow.bezierCurveTo(215.9, 341.3, 209.2, 340.3, 209.2, 340.3);
        shadow.bezierCurveTo(209.2, 340.3, 200.6, 338.7, 197.1, 338.9);
        shadow.bezierCurveTo(193.9, 339.1, 198.3, 338.9, 187.8, 338.6);
        shadow.bezierCurveTo(183.6, 339.0, 182.8, 339.9, 183.1, 340.8);
        shadow.bezierCurveTo(183.4, 341.8, 185.0, 342.8, 187.7, 343.0);
        shadow.bezierCurveTo(191.7, 343.4, 190.9, 343.9, 193.3, 344.1);
        shadow.bezierCurveTo(195.7, 344.4, 204.3, 342.7, 206.6, 343.0);
        shadow.bezierCurveTo(208.9, 343.3, 210.9, 343.8, 215.3, 343.6);
        shadow.bezierCurveTo(217.1, 343.5, 223.9, 344.3, 229.4, 343.9);
        shadow.bezierCurveTo(234.1, 343.5, 424.8, 345.1, 424.8, 345.1);
        shadow.lineTo(425.7, 343.4);
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
        shadow.moveTo(286.5, 347.1);
        shadow.bezierCurveTo(286.5, 347.1, 276.3, 345.7, 272.7, 345.9);
        shadow.bezierCurveTo(269.6, 346.1, 268.4, 345.9, 257.9, 345.6);
        shadow.bezierCurveTo(253.7, 346.0, 252.9, 346.9, 253.2, 347.8);
        shadow.bezierCurveTo(253.5, 348.8, 255.1, 349.8, 257.8, 350.0);
        shadow.bezierCurveTo(261.8, 350.4, 266.6, 350.9, 269.0, 351.1);
        shadow.bezierCurveTo(271.4, 351.4, 281.6, 349.4, 283.9, 349.7);
        shadow.bezierCurveTo(286.2, 350.0, 288.3, 347.4, 286.5, 347.1);
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
        shadow.moveTo(304.9, 347.1);
        shadow.bezierCurveTo(304.9, 347.1, 294.7, 345.7, 291.1, 345.9);
        shadow.bezierCurveTo(288.0, 346.1, 286.7, 345.9, 276.3, 345.6);
        shadow.bezierCurveTo(272.1, 346.0, 271.2, 346.9, 271.6, 347.8);
        shadow.bezierCurveTo(271.9, 348.8, 273.4, 349.8, 276.2, 350.0);
        shadow.bezierCurveTo(280.2, 350.4, 284.9, 350.9, 287.3, 351.1);
        shadow.bezierCurveTo(289.8, 351.4, 300.0, 349.4, 302.3, 349.7);
        shadow.bezierCurveTo(304.6, 350.0, 306.7, 347.4, 304.9, 347.1);
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
        shadow.moveTo(321.9, 349.8);
        shadow.bezierCurveTo(321.9, 349.8, 311.7, 348.5, 308.1, 348.7);
        shadow.bezierCurveTo(305.0, 348.8, 303.8, 348.7, 293.3, 348.4);
        shadow.bezierCurveTo(289.1, 348.7, 288.3, 349.7, 288.6, 350.6);
        shadow.bezierCurveTo(288.9, 351.6, 290.4, 352.6, 293.2, 352.8);
        shadow.bezierCurveTo(297.2, 353.2, 301.9, 353.7, 304.4, 353.9);
        shadow.bezierCurveTo(306.8, 354.1, 317.0, 352.2, 319.3, 352.5);
        shadow.bezierCurveTo(321.6, 352.8, 323.7, 350.1, 321.9, 349.8);
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
        shadow.moveTo(347.2, 352.1);
        shadow.bezierCurveTo(347.2, 352.1, 341.1, 351.3, 339.0, 351.4);
        shadow.bezierCurveTo(337.1, 351.5, 336.4, 351.4, 330.1, 351.2);
        shadow.bezierCurveTo(327.6, 351.4, 327.1, 352.0, 327.3, 352.6);
        shadow.bezierCurveTo(327.5, 353.1, 328.4, 353.7, 330.0, 353.9);
        shadow.bezierCurveTo(332.4, 354.1, 335.3, 354.4, 336.7, 354.6);
        shadow.bezierCurveTo(338.2, 354.7, 344.3, 353.5, 345.7, 353.7);
        shadow.bezierCurveTo(347.1, 353.9, 348.3, 352.3, 347.2, 352.1);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    },
  ];
  shadow.makeSequence("runup");
  shadow.runup.cels = [
    function () {
      if (shadow.visible) {

        // shadow/Path
        shadow.save();
        shadow.beginPath();
        shadow.moveTo(314.1, 341.5);
        shadow.lineTo(212.7, 340.2);
        shadow.bezierCurveTo(210.2, 338.5, 207.3, 338.5, 204.7, 338.3);
        shadow.bezierCurveTo(195.1, 337.5, 185.6, 339.6, 175.8, 338.3);
        shadow.bezierCurveTo(172.4, 337.9, 169.2, 338.1, 166.0, 338.9);
        shadow.bezierCurveTo(158.8, 340.4, 151.8, 338.5, 144.8, 339.8);
        shadow.lineTo(144.4, 340.4);
        shadow.bezierCurveTo(143.7, 342.3, 145.6, 343.0, 146.9, 343.0);
        shadow.bezierCurveTo(153.7, 343.4, 160.3, 343.2, 167.1, 343.2);
        shadow.bezierCurveTo(168.8, 345.1, 171.1, 346.4, 173.9, 346.6);
        shadow.bezierCurveTo(177.9, 347.0, 182.2, 347.7, 185.6, 346.0);
        shadow.bezierCurveTo(187.3, 345.1, 189.0, 344.0, 190.7, 344.0);
        shadow.bezierCurveTo(194.9, 343.8, 199.0, 343.2, 203.2, 342.6);
        shadow.bezierCurveTo(206.2, 342.0, 209.1, 342.6, 212.1, 342.3);
        shadow.lineTo(212.1, 342.3);
        shadow.lineTo(314.1, 341.5);
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
        shadow.moveTo(314.1, 342.5);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 185.6, 339.6, 175.8, 338.3);
        shadow.bezierCurveTo(172.4, 337.9, 169.2, 338.1, 166.0, 338.9);
        shadow.bezierCurveTo(158.8, 340.4, 167.6, 338.5, 160.6, 339.8);
        shadow.lineTo(160.1, 340.4);
        shadow.bezierCurveTo(159.5, 342.3, 161.4, 343.0, 162.7, 343.0);
        shadow.bezierCurveTo(169.5, 343.4, 160.3, 343.2, 167.1, 343.2);
        shadow.bezierCurveTo(168.8, 345.1, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 182.8, 344.3, 186.2, 342.6);
        shadow.bezierCurveTo(187.9, 341.7, 189.0, 344.0, 190.7, 344.0);
        shadow.bezierCurveTo(194.9, 343.8, 198.9, 343.2, 203.2, 342.6);
        shadow.bezierCurveTo(206.2, 342.0, 209.1, 342.6, 212.1, 342.3);
        shadow.lineTo(212.1, 342.3);
        shadow.lineTo(314.1, 342.5);
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
        shadow.moveTo(314.1, 341.2);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 185.6, 339.6, 175.8, 338.3);
        shadow.bezierCurveTo(172.4, 337.9, 169.2, 338.1, 166.0, 338.9);
        shadow.bezierCurveTo(158.8, 340.4, 163.0, 339.8, 156.0, 341.1);
        shadow.lineTo(155.5, 341.7);
        shadow.bezierCurveTo(154.9, 343.7, 156.8, 344.3, 158.1, 344.3);
        shadow.bezierCurveTo(164.9, 344.7, 160.3, 343.2, 167.1, 343.2);
        shadow.bezierCurveTo(168.8, 345.1, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 182.8, 344.3, 186.2, 342.6);
        shadow.bezierCurveTo(187.9, 341.7, 190.2, 341.2, 191.9, 341.2);
        shadow.bezierCurveTo(196.2, 341.0, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(206.2, 340.7, 217.5, 341.9, 217.5, 341.9);
        shadow.lineTo(314.1, 341.2);
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
        shadow.moveTo(315.3, 339.0);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 186.5, 340.4, 176.8, 339.1);
        shadow.bezierCurveTo(173.4, 338.7, 169.7, 339.4, 166.6, 340.3);
        shadow.bezierCurveTo(159.3, 341.8, 163.0, 339.8, 156.0, 341.1);
        shadow.lineTo(155.5, 341.7);
        shadow.bezierCurveTo(154.9, 343.7, 156.8, 344.3, 158.1, 344.3);
        shadow.bezierCurveTo(164.9, 344.7, 161.0, 343.7, 167.8, 343.7);
        shadow.bezierCurveTo(169.5, 345.6, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 192.2, 343.1, 193.9, 343.1);
        shadow.bezierCurveTo(198.2, 342.9, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(206.2, 340.7, 217.5, 341.9, 217.5, 341.9);
        shadow.lineTo(315.3, 339.0);
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
        shadow.moveTo(317.9, 339.0);
        shadow.lineTo(200.9, 339.2);
        shadow.bezierCurveTo(200.9, 339.2, 198.0, 339.4, 196.7, 339.4);
        shadow.bezierCurveTo(187.1, 338.5, 186.5, 340.4, 176.8, 339.1);
        shadow.bezierCurveTo(173.4, 338.7, 169.7, 339.4, 166.6, 340.3);
        shadow.bezierCurveTo(155.7, 341.8, 154.6, 339.8, 147.6, 341.1);
        shadow.lineTo(147.2, 341.7);
        shadow.bezierCurveTo(146.6, 343.7, 148.5, 344.3, 149.7, 344.3);
        shadow.bezierCurveTo(156.5, 344.7, 161.0, 343.7, 167.8, 343.7);
        shadow.bezierCurveTo(169.5, 345.6, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 192.2, 343.1, 193.9, 343.1);
        shadow.bezierCurveTo(198.2, 342.9, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(206.2, 340.7, 215.4, 343.5, 220.8, 343.4);
        shadow.bezierCurveTo(226.2, 343.3, 228.9, 341.7, 228.9, 341.7);
        shadow.lineTo(317.9, 339.0);
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
        shadow.moveTo(317.9, 339.0);
        shadow.lineTo(209.4, 339.2);
        shadow.bezierCurveTo(209.4, 339.2, 198.2, 337.7, 196.9, 337.6);
        shadow.bezierCurveTo(187.3, 336.8, 189.4, 340.3, 179.7, 339.0);
        shadow.bezierCurveTo(173.5, 340.4, 169.6, 341.0, 166.6, 340.3);
        shadow.bezierCurveTo(161.3, 340.9, 159.7, 340.6, 158.7, 340.8);
        shadow.bezierCurveTo(157.6, 341.0, 156.7, 341.8, 156.7, 341.8);
        shadow.bezierCurveTo(156.1, 343.7, 160.0, 344.3, 161.3, 344.3);
        shadow.bezierCurveTo(162.8, 344.3, 163.2, 344.4, 165.3, 344.4);
        shadow.bezierCurveTo(167.0, 346.3, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 192.4, 341.3, 194.1, 341.3);
        shadow.bezierCurveTo(198.3, 341.1, 198.9, 341.9, 203.1, 341.2);
        shadow.bezierCurveTo(207.6, 341.5, 228.9, 341.7, 228.9, 341.7);
        shadow.lineTo(317.9, 339.0);
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
        shadow.moveTo(321.1, 339.7);
        shadow.lineTo(209.4, 339.2);
        shadow.bezierCurveTo(209.4, 339.2, 207.4, 337.9, 204.8, 337.5);
        shadow.bezierCurveTo(201.6, 337.1, 197.6, 337.7, 196.9, 337.6);
        shadow.bezierCurveTo(187.3, 336.8, 189.4, 340.3, 179.7, 339.0);
        shadow.bezierCurveTo(173.5, 340.4, 171.4, 338.9, 166.6, 338.5);
        shadow.bezierCurveTo(161.3, 339.1, 161.3, 338.8, 160.3, 339.0);
        shadow.bezierCurveTo(159.3, 339.2, 158.4, 340.0, 158.4, 340.0);
        shadow.bezierCurveTo(157.8, 341.9, 161.7, 342.5, 163.0, 342.5);
        shadow.bezierCurveTo(164.5, 342.5, 163.2, 342.6, 165.3, 342.6);
        shadow.bezierCurveTo(169.8, 343.7, 174.0, 343.4, 176.8, 343.6);
        shadow.bezierCurveTo(180.8, 344.1, 184.2, 345.2, 187.6, 343.5);
        shadow.bezierCurveTo(189.3, 342.7, 191.3, 343.5, 193.0, 343.5);
        shadow.bezierCurveTo(195.1, 343.4, 197.3, 343.5, 198.6, 343.6);
        shadow.bezierCurveTo(199.9, 343.7, 203.4, 345.0, 205.5, 344.7);
        shadow.bezierCurveTo(206.2, 344.8, 207.5, 342.6, 211.3, 342.6);
        shadow.bezierCurveTo(218.5, 342.6, 228.9, 341.7, 228.9, 341.7);
        shadow.lineTo(321.1, 339.7);
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
        shadow.moveTo(321.8, 341.4);
        shadow.lineTo(209.4, 339.2);
        shadow.bezierCurveTo(209.4, 339.2, 206.0, 338.7, 203.4, 338.4);
        shadow.bezierCurveTo(200.2, 338.0, 197.5, 338.9, 196.8, 338.9);
        shadow.bezierCurveTo(187.2, 338.0, 189.4, 340.3, 179.7, 339.0);
        shadow.bezierCurveTo(173.5, 340.4, 171.5, 340.1, 166.7, 339.6);
        shadow.bezierCurveTo(161.4, 340.2, 161.0, 339.8, 160.1, 339.8);
        shadow.bezierCurveTo(159.1, 339.8, 158.2, 340.0, 158.2, 340.7);
        shadow.bezierCurveTo(158.2, 341.1, 161.7, 342.5, 163.0, 342.5);
        shadow.bezierCurveTo(164.5, 342.5, 167.4, 342.6, 169.4, 342.6);
        shadow.bezierCurveTo(173.9, 343.7, 174.5, 344.7, 177.3, 345.0);
        shadow.bezierCurveTo(181.3, 345.4, 184.3, 346.9, 187.7, 345.2);
        shadow.bezierCurveTo(189.4, 344.3, 191.1, 344.4, 192.8, 344.4);
        shadow.bezierCurveTo(194.9, 344.3, 197.0, 344.3, 198.3, 344.4);
        shadow.bezierCurveTo(199.7, 344.5, 203.5, 343.7, 205.6, 343.4);
        shadow.bezierCurveTo(206.3, 343.4, 207.5, 342.6, 211.3, 342.6);
        shadow.bezierCurveTo(218.5, 342.6, 228.9, 341.7, 228.9, 341.7);
        shadow.lineTo(321.8, 341.4);
        shadow.closePath();
        shadow.fillStyle("rgb(189, 183, 164)");
        shadow.fill();
        shadow.restore();
      }
    }
  ];
  shadow.runup.iterations = 4;
  shadow.sequence_order = ["runup", "main"];

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
        vaulter.moveTo(191.2, 303.9);
        vaulter.bezierCurveTo(190.0, 307.5, 183.8, 318.0, 181.3, 318.7);
        vaulter.bezierCurveTo(178.8, 319.3, 168.2, 314.8, 168.2, 314.8);
        vaulter.bezierCurveTo(168.2, 314.8, 160.7, 312.7, 154.5, 313.5);
        vaulter.bezierCurveTo(148.2, 314.4, 146.8, 316.2, 145.7, 316.2);
        vaulter.bezierCurveTo(144.6, 316.2, 144.2, 314.9, 144.2, 314.9);
        vaulter.bezierCurveTo(145.0, 314.3, 153.6, 305.8, 155.1, 305.7);
        vaulter.bezierCurveTo(156.6, 305.5, 157.6, 307.3, 157.6, 307.3);
        vaulter.bezierCurveTo(157.6, 307.3, 160.2, 308.7, 163.7, 308.9);
        vaulter.bezierCurveTo(167.2, 309.2, 178.5, 310.3, 178.5, 310.3);
        vaulter.bezierCurveTo(178.6, 306.7, 181.3, 295.8, 181.3, 295.8);
        vaulter.lineTo(191.2, 303.9);
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
        vaulter.moveTo(189.5, 261.9);
        vaulter.bezierCurveTo(189.5, 261.9, 191.3, 261.2, 193.0, 261.4);
        vaulter.bezierCurveTo(194.7, 261.7, 197.8, 263.6, 197.6, 265.8);
        vaulter.bezierCurveTo(197.6, 265.8, 201.5, 270.0, 202.0, 270.7);
        vaulter.bezierCurveTo(202.5, 271.3, 206.8, 273.8, 206.7, 276.0);
        vaulter.bezierCurveTo(206.7, 278.2, 206.2, 279.5, 206.4, 280.7);
        vaulter.lineTo(203.3, 282.0);
        vaulter.bezierCurveTo(203.3, 282.0, 201.5, 280.8, 201.2, 279.2);
        vaulter.bezierCurveTo(200.9, 277.5, 201.3, 276.8, 200.6, 276.3);
        vaulter.bezierCurveTo(199.9, 275.8, 198.8, 274.8, 197.9, 273.8);
        vaulter.bezierCurveTo(196.9, 272.8, 196.3, 272.1, 195.8, 271.7);
        vaulter.bezierCurveTo(195.4, 271.3, 195.1, 271.4, 193.9, 272.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(181.2, 291.0);
        vaulter.bezierCurveTo(181.2, 291.0, 181.5, 280.6, 180.0, 276.5);
        vaulter.bezierCurveTo(178.6, 272.3, 180.7, 261.3, 182.9, 261.8);
        vaulter.bezierCurveTo(185.1, 262.3, 184.6, 259.9, 184.6, 259.9);
        vaulter.bezierCurveTo(184.6, 259.9, 182.2, 254.6, 182.1, 252.3);
        vaulter.bezierCurveTo(182.0, 250.1, 183.3, 244.7, 187.9, 244.5);
        vaulter.bezierCurveTo(192.4, 244.2, 194.1, 249.2, 194.1, 249.2);
        vaulter.bezierCurveTo(194.1, 249.2, 194.7, 253.5, 194.7, 254.6);
        vaulter.bezierCurveTo(194.7, 255.8, 192.3, 260.4, 192.3, 260.4);
        vaulter.bezierCurveTo(192.3, 260.4, 196.9, 266.9, 196.7, 270.1);
        vaulter.bezierCurveTo(196.7, 270.1, 196.7, 285.0, 195.6, 287.3);
        vaulter.bezierCurveTo(194.4, 289.7, 194.4, 294.4, 195.2, 296.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(180.5, 279.3);
        vaulter.bezierCurveTo(180.5, 279.3, 186.4, 280.1, 187.3, 272.6);
        vaulter.bezierCurveTo(188.3, 265.2, 185.4, 262.6, 183.4, 262.4);
        vaulter.bezierCurveTo(181.5, 262.2, 178.1, 265.7, 178.1, 270.8);
        vaulter.bezierCurveTo(178.1, 275.9, 178.3, 277.5, 180.5, 279.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(192.3, 292.1);
        vaulter.bezierCurveTo(199.4, 297.0, 208.2, 306.6, 208.6, 307.3);
        vaulter.bezierCurveTo(209.1, 308.1, 209.6, 312.6, 209.6, 312.6);
        vaulter.lineTo(213.9, 327.7);
        vaulter.bezierCurveTo(213.9, 327.7, 216.5, 332.0, 218.1, 332.8);
        vaulter.bezierCurveTo(219.8, 333.6, 223.4, 335.6, 224.0, 335.9);
        vaulter.bezierCurveTo(224.5, 336.2, 224.8, 337.5, 224.8, 337.5);
        vaulter.bezierCurveTo(224.8, 337.5, 225.6, 338.8, 224.2, 339.3);
        vaulter.bezierCurveTo(222.2, 339.9, 217.2, 337.7, 214.8, 337.2);
        vaulter.bezierCurveTo(212.5, 336.7, 212.9, 333.7, 212.9, 333.7);
        vaulter.lineTo(210.3, 328.0);
        vaulter.bezierCurveTo(203.7, 321.2, 202.8, 311.0, 202.8, 311.0);
        vaulter.bezierCurveTo(202.8, 311.0, 186.6, 303.5, 183.7, 302.2);
        vaulter.bezierCurveTo(178.9, 300.1, 181.2, 291.0, 181.2, 291.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(157.8, 307.2);
        vaulter.bezierCurveTo(157.8, 307.2, 157.1, 307.4, 156.7, 306.7);
        vaulter.bezierCurveTo(156.4, 306.0, 156.9, 305.5, 156.9, 305.5);
        vaulter.bezierCurveTo(157.4, 305.2, 207.7, 278.0, 262.0, 255.9);
        vaulter.lineTo(397.4, 200.8);
        vaulter.lineTo(398.2, 202.7);
        vaulter.lineTo(262.7, 257.8);
        vaulter.bezierCurveTo(208.5, 279.8, 158.3, 307.0, 157.8, 307.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(203.2, 283.4);
        vaulter.bezierCurveTo(203.2, 283.4, 204.2, 281.5, 204.9, 281.2);
        vaulter.bezierCurveTo(205.6, 280.9, 207.1, 281.0, 207.1, 281.0);
        vaulter.lineTo(207.7, 282.2);
        vaulter.lineTo(207.1, 284.0);
        vaulter.lineTo(205.1, 284.4);
        vaulter.bezierCurveTo(205.1, 284.4, 204.8, 284.9, 204.1, 284.7);
        vaulter.bezierCurveTo(203.5, 284.6, 203.2, 283.4, 203.2, 283.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(185.0, 264.0);
        vaulter.bezierCurveTo(185.0, 264.0, 183.1, 262.3, 180.9, 263.0);
        vaulter.bezierCurveTo(178.8, 263.6, 175.7, 266.6, 173.8, 268.6);
        vaulter.bezierCurveTo(171.9, 270.6, 169.3, 276.5, 168.6, 277.9);
        vaulter.bezierCurveTo(167.8, 279.4, 168.6, 280.5, 169.2, 284.6);
        vaulter.bezierCurveTo(169.8, 288.7, 171.7, 294.8, 171.7, 294.8);
        vaulter.bezierCurveTo(171.7, 294.8, 171.2, 295.9, 171.2, 296.4);
        vaulter.bezierCurveTo(171.2, 296.8, 170.9, 299.3, 172.1, 299.7);
        vaulter.bezierCurveTo(173.2, 300.0, 175.7, 299.2, 175.7, 299.2);
        vaulter.bezierCurveTo(175.7, 299.2, 177.1, 298.2, 176.8, 296.7);
        vaulter.bezierCurveTo(176.8, 296.7, 176.6, 294.5, 175.0, 294.4);
        vaulter.lineTo(174.0, 293.7);
        vaulter.bezierCurveTo(174.0, 293.7, 172.9, 290.2, 173.3, 286.5);
        vaulter.bezierCurveTo(173.7, 282.7, 173.3, 277.1, 173.3, 277.1);
        vaulter.lineTo(179.1, 273.0);
        vaulter.bezierCurveTo(182.6, 273.6, 185.0, 270.8, 185.0, 270.8);
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
        vaulter.moveTo(193.1, 267.1);
        vaulter.bezierCurveTo(193.1, 267.1, 197.2, 269.5, 198.1, 273.3);
        vaulter.bezierCurveTo(198.1, 273.3, 201.9, 278.3, 203.1, 280.2);
        vaulter.bezierCurveTo(204.2, 282.1, 204.7, 289.2, 204.7, 289.2);
        vaulter.lineTo(206.0, 292.2);
        vaulter.lineTo(202.3, 294.1);
        vaulter.lineTo(201.8, 291.5);
        vaulter.bezierCurveTo(201.8, 291.5, 201.2, 288.2, 201.1, 287.1);
        vaulter.bezierCurveTo(200.9, 286.0, 198.2, 281.1, 198.2, 281.1);
        vaulter.lineTo(193.1, 275.2);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(200.0, 309.5);
        vaulter.bezierCurveTo(197.0, 305.7, 195.3, 302.0, 195.3, 302.0);
        vaulter.bezierCurveTo(194.5, 300.1, 194.5, 295.4, 195.7, 293.0);
        vaulter.bezierCurveTo(196.9, 290.7, 196.9, 275.8, 196.9, 275.8);
        vaulter.bezierCurveTo(197.0, 272.7, 192.4, 266.1, 192.4, 266.1);
        vaulter.bezierCurveTo(192.4, 266.1, 194.8, 261.5, 194.8, 260.4);
        vaulter.bezierCurveTo(194.8, 259.2, 194.3, 254.9, 194.3, 254.9);
        vaulter.bezierCurveTo(194.3, 254.9, 192.6, 249.9, 188.0, 250.2);
        vaulter.bezierCurveTo(183.4, 250.4, 182.1, 255.8, 182.2, 258.1);
        vaulter.bezierCurveTo(182.4, 260.3, 184.7, 265.6, 184.7, 265.6);
        vaulter.bezierCurveTo(184.7, 265.6, 185.3, 268.1, 183.0, 267.5);
        vaulter.bezierCurveTo(180.8, 267.0, 178.7, 278.0, 180.2, 282.2);
        vaulter.bezierCurveTo(181.6, 286.4, 181.4, 296.8, 181.4, 296.8);
        vaulter.bezierCurveTo(179.9, 298.3, 181.2, 302.4, 181.2, 302.4);
        vaulter.bezierCurveTo(181.2, 302.4, 185.2, 309.7, 190.0, 313.4);
        vaulter.lineTo(179.0, 310.1);
        vaulter.bezierCurveTo(178.7, 309.6, 178.1, 308.7, 177.5, 308.4);
        vaulter.bezierCurveTo(176.6, 308.0, 175.7, 308.3, 175.7, 308.3);
        vaulter.bezierCurveTo(175.4, 308.5, 172.9, 309.7, 172.9, 309.7);
        vaulter.bezierCurveTo(172.9, 309.7, 168.9, 311.3, 168.5, 311.3);
        vaulter.bezierCurveTo(168.1, 311.3, 163.5, 312.8, 163.7, 314.1);
        vaulter.bezierCurveTo(163.8, 315.3, 165.3, 316.0, 166.0, 315.8);
        vaulter.bezierCurveTo(166.7, 315.7, 170.7, 314.7, 174.4, 314.2);
        vaulter.bezierCurveTo(178.2, 313.7, 187.0, 317.8, 190.8, 319.8);
        vaulter.bezierCurveTo(194.5, 321.8, 200.0, 322.0, 200.0, 322.0);
        vaulter.bezierCurveTo(200.0, 322.0, 203.3, 321.1, 203.5, 319.9);
        vaulter.bezierCurveTo(203.6, 318.8, 202.9, 313.3, 200.0, 309.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 285.0);
        vaulter.bezierCurveTo(180.6, 285.0, 186.5, 285.8, 187.5, 278.3);
        vaulter.bezierCurveTo(188.5, 270.9, 185.5, 268.3, 183.6, 268.1);
        vaulter.bezierCurveTo(181.6, 267.9, 178.3, 271.5, 178.3, 276.6);
        vaulter.bezierCurveTo(178.3, 281.7, 178.5, 283.2, 180.6, 285.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(181.4, 297.1);
        vaulter.bezierCurveTo(180.0, 299.3, 181.4, 303.0, 181.4, 303.0);
        vaulter.bezierCurveTo(181.4, 303.0, 186.7, 313.6, 191.2, 317.4);
        vaulter.lineTo(191.2, 319.0);
        vaulter.bezierCurveTo(191.2, 319.0, 187.5, 326.6, 187.3, 328.5);
        vaulter.bezierCurveTo(187.0, 330.4, 187.0, 334.7, 187.0, 335.3);
        vaulter.bezierCurveTo(187.0, 335.9, 186.9, 339.6, 187.0, 340.4);
        vaulter.bezierCurveTo(187.1, 341.3, 187.9, 342.0, 188.3, 343.2);
        vaulter.bezierCurveTo(188.4, 343.4, 191.8, 344.6, 191.8, 344.6);
        vaulter.bezierCurveTo(191.8, 344.6, 193.4, 344.8, 194.0, 344.7);
        vaulter.bezierCurveTo(195.5, 344.5, 196.7, 343.8, 196.7, 343.8);
        vaulter.bezierCurveTo(196.7, 343.8, 196.5, 341.5, 195.7, 341.3);
        vaulter.bezierCurveTo(195.0, 341.1, 192.8, 339.9, 192.1, 339.4);
        vaulter.bezierCurveTo(191.4, 338.9, 190.2, 337.1, 190.2, 337.1);
        vaulter.bezierCurveTo(190.2, 337.1, 190.6, 334.3, 192.3, 330.8);
        vaulter.bezierCurveTo(194.0, 327.3, 195.1, 324.0, 196.8, 322.4);
        vaulter.bezierCurveTo(198.1, 321.2, 197.7, 317.4, 197.7, 317.4);
        vaulter.bezierCurveTo(197.7, 317.4, 197.8, 314.2, 197.1, 311.3);
        vaulter.bezierCurveTo(196.5, 308.3, 193.8, 302.0, 193.6, 301.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(168.7, 312.9);
        vaulter.bezierCurveTo(168.7, 312.9, 168.0, 313.0, 167.6, 312.3);
        vaulter.bezierCurveTo(167.2, 311.6, 167.8, 311.1, 167.8, 311.1);
        vaulter.bezierCurveTo(168.3, 310.8, 218.5, 283.6, 272.8, 261.5);
        vaulter.lineTo(408.3, 206.5);
        vaulter.lineTo(409.0, 208.3);
        vaulter.lineTo(273.6, 263.4);
        vaulter.bezierCurveTo(219.4, 285.4, 169.2, 312.6, 168.7, 312.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(202.3, 295.2);
        vaulter.bezierCurveTo(202.3, 295.2, 203.3, 293.3, 204.0, 293.0);
        vaulter.bezierCurveTo(204.7, 292.7, 206.2, 292.8, 206.2, 292.8);
        vaulter.lineTo(206.8, 294.0);
        vaulter.lineTo(206.2, 295.8);
        vaulter.lineTo(204.2, 296.2);
        vaulter.bezierCurveTo(204.2, 296.2, 203.9, 296.7, 203.3, 296.5);
        vaulter.bezierCurveTo(202.6, 296.4, 202.3, 295.2, 202.3, 295.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(185.6, 275.5);
        vaulter.bezierCurveTo(185.6, 275.5, 183.1, 278.0, 181.8, 278.6);
        vaulter.bezierCurveTo(180.6, 279.2, 179.2, 284.7, 177.1, 287.6);
        vaulter.bezierCurveTo(177.1, 287.6, 178.7, 294.0, 179.0, 297.2);
        vaulter.bezierCurveTo(179.2, 300.5, 180.2, 303.6, 180.2, 303.6);
        vaulter.bezierCurveTo(180.4, 304.2, 181.7, 304.9, 182.3, 305.2);
        vaulter.bezierCurveTo(183.0, 305.6, 182.3, 307.6, 182.3, 308.0);
        vaulter.bezierCurveTo(182.3, 308.3, 182.2, 309.6, 181.2, 309.7);
        vaulter.bezierCurveTo(180.2, 309.8, 178.1, 310.7, 177.1, 309.7);
        vaulter.bezierCurveTo(176.1, 308.7, 176.5, 305.9, 176.5, 305.9);
        vaulter.bezierCurveTo(176.5, 305.9, 176.7, 304.2, 176.5, 302.6);
        vaulter.bezierCurveTo(176.4, 301.0, 174.1, 296.1, 172.3, 292.0);
        vaulter.bezierCurveTo(170.6, 287.8, 172.5, 285.4, 172.5, 285.4);
        vaulter.bezierCurveTo(172.5, 285.4, 176.6, 275.1, 177.1, 272.6);
        vaulter.bezierCurveTo(177.6, 270.1, 181.3, 268.5, 181.3, 268.5);
        vaulter.bezierCurveTo(181.3, 268.5, 182.6, 267.9, 183.6, 268.1);
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
        vaulter.moveTo(184.1, 307.1);
        vaulter.bezierCurveTo(184.1, 307.1, 191.1, 312.7, 198.6, 313.4);
        vaulter.bezierCurveTo(198.6, 313.4, 192.7, 315.7, 189.0, 317.4);
        vaulter.bezierCurveTo(185.4, 319.1, 184.5, 319.4, 183.0, 319.4);
        vaulter.bezierCurveTo(182.2, 319.4, 181.8, 319.5, 181.2, 319.9);
        vaulter.bezierCurveTo(180.7, 320.2, 180.7, 321.1, 180.8, 321.8);
        vaulter.bezierCurveTo(181.3, 323.3, 184.3, 326.9, 184.3, 326.9);
        vaulter.bezierCurveTo(184.3, 326.9, 187.3, 330.7, 187.9, 330.6);
        vaulter.bezierCurveTo(189.1, 330.2, 188.8, 328.6, 188.8, 328.6);
        vaulter.lineTo(186.6, 322.8);
        vaulter.lineTo(189.0, 321.9);
        vaulter.lineTo(199.5, 319.8);
        vaulter.bezierCurveTo(199.5, 319.8, 207.9, 317.1, 209.3, 316.2);
        vaulter.bezierCurveTo(210.7, 315.3, 209.6, 312.9, 209.3, 311.9);
        vaulter.bezierCurveTo(209.1, 310.9, 197.2, 301.6, 197.2, 301.6);
        vaulter.bezierCurveTo(194.9, 299.9, 190.5, 297.9, 190.5, 297.9);
        vaulter.lineTo(184.1, 307.1);
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
        vaulter.moveTo(192.8, 280.6);
        vaulter.lineTo(197.4, 285.4);
        vaulter.bezierCurveTo(197.4, 285.4, 199.4, 287.4, 200.4, 290.4);
        vaulter.bezierCurveTo(201.4, 293.4, 201.6, 296.8, 201.6, 296.8);
        vaulter.lineTo(202.5, 300.7);
        vaulter.lineTo(206.1, 299.1);
        vaulter.lineTo(205.0, 288.8);
        vaulter.lineTo(202.3, 283.6);
        vaulter.lineTo(196.4, 276.3);
        vaulter.bezierCurveTo(196.4, 276.3, 194.7, 272.9, 192.8, 272.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(192.8, 305.5);
        vaulter.bezierCurveTo(191.2, 311.6, 187.7, 323.4, 186.9, 325.2);
        vaulter.bezierCurveTo(185.9, 327.5, 184.3, 328.6, 184.3, 328.6);
        vaulter.bezierCurveTo(184.3, 328.6, 173.7, 333.4, 173.4, 334.3);
        vaulter.bezierCurveTo(173.1, 335.3, 172.5, 336.6, 172.5, 336.6);
        vaulter.bezierCurveTo(172.5, 336.6, 173.1, 338.2, 174.0, 339.5);
        vaulter.bezierCurveTo(175.1, 341.1, 174.7, 342.5, 174.5, 343.4);
        vaulter.bezierCurveTo(174.4, 343.8, 174.1, 345.0, 173.5, 345.1);
        vaulter.bezierCurveTo(173.1, 345.2, 172.5, 344.9, 171.8, 344.6);
        vaulter.bezierCurveTo(170.1, 343.7, 169.3, 340.6, 169.4, 339.6);
        vaulter.bezierCurveTo(169.6, 337.7, 167.7, 336.2, 167.7, 335.3);
        vaulter.bezierCurveTo(167.8, 334.2, 168.5, 332.7, 168.5, 332.7);
        vaulter.bezierCurveTo(168.5, 332.7, 168.7, 332.4, 170.1, 332.1);
        vaulter.bezierCurveTo(171.5, 331.7, 181.5, 322.5, 181.5, 321.9);
        vaulter.bezierCurveTo(181.5, 321.9, 181.1, 305.5, 181.4, 302.8);
        vaulter.bezierCurveTo(181.4, 302.8, 181.6, 292.4, 180.2, 288.2);
        vaulter.bezierCurveTo(178.7, 284.0, 180.8, 273.1, 183.0, 273.6);
        vaulter.bezierCurveTo(185.3, 274.1, 184.7, 271.6, 184.7, 271.6);
        vaulter.bezierCurveTo(184.7, 271.6, 182.4, 266.3, 182.2, 264.1);
        vaulter.bezierCurveTo(182.1, 261.9, 183.4, 256.5, 188.0, 256.2);
        vaulter.bezierCurveTo(192.6, 256.0, 194.3, 260.9, 194.3, 260.9);
        vaulter.bezierCurveTo(194.3, 260.9, 194.8, 265.2, 194.8, 266.4);
        vaulter.bezierCurveTo(194.8, 267.6, 192.4, 272.2, 192.4, 272.2);
        vaulter.bezierCurveTo(192.4, 272.2, 197.0, 278.7, 196.9, 281.8);
        vaulter.bezierCurveTo(196.9, 281.8, 196.9, 296.7, 195.7, 299.1);
        vaulter.bezierCurveTo(195.3, 299.8, 195.1, 300.8, 194.9, 301.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 291.0);
        vaulter.bezierCurveTo(180.6, 291.0, 186.5, 291.8, 187.5, 284.4);
        vaulter.bezierCurveTo(188.5, 276.9, 185.5, 274.4, 183.6, 274.2);
        vaulter.bezierCurveTo(181.6, 274.0, 178.3, 277.5, 178.3, 282.6);
        vaulter.bezierCurveTo(178.3, 287.7, 178.5, 289.3, 180.6, 291.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(168.5, 318.0);
        vaulter.bezierCurveTo(168.5, 318.0, 168.0, 318.1, 167.6, 317.4);
        vaulter.bezierCurveTo(167.3, 316.7, 167.7, 316.2, 167.7, 316.2);
        vaulter.bezierCurveTo(168.2, 315.9, 219.2, 292.0, 269.4, 270.9);
        vaulter.lineTo(408.7, 212.8);
        vaulter.lineTo(409.4, 214.7);
        vaulter.lineTo(270.1, 272.7);
        vaulter.bezierCurveTo(220.0, 293.8, 169.0, 317.8, 168.5, 318.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(202.4, 301.6);
        vaulter.bezierCurveTo(202.4, 301.6, 203.4, 299.8, 204.2, 299.5);
        vaulter.bezierCurveTo(204.9, 299.1, 206.4, 299.3, 206.4, 299.3);
        vaulter.lineTo(207.0, 300.4);
        vaulter.lineTo(206.4, 302.2);
        vaulter.lineTo(204.4, 302.6);
        vaulter.bezierCurveTo(204.4, 302.6, 204.1, 303.2, 203.4, 303.0);
        vaulter.bezierCurveTo(202.7, 302.8, 202.4, 301.6, 202.4, 301.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(182.8, 274.2);
        vaulter.bezierCurveTo(182.8, 274.2, 177.2, 276.7, 176.6, 279.9);
        vaulter.bezierCurveTo(176.1, 282.5, 175.8, 284.4, 175.8, 284.4);
        vaulter.lineTo(171.4, 292.4);
        vaulter.bezierCurveTo(171.4, 292.4, 170.6, 295.3, 171.4, 297.3);
        vaulter.bezierCurveTo(172.3, 299.3, 176.0, 303.4, 178.2, 308.6);
        vaulter.bezierCurveTo(178.2, 308.6, 178.3, 309.6, 178.2, 310.2);
        vaulter.bezierCurveTo(178.1, 310.8, 177.6, 311.7, 178.2, 312.4);
        vaulter.bezierCurveTo(178.9, 313.1, 179.9, 314.0, 179.9, 314.0);
        vaulter.bezierCurveTo(179.9, 314.0, 182.0, 313.5, 182.8, 312.8);
        vaulter.bezierCurveTo(183.5, 312.2, 184.2, 310.7, 184.2, 310.7);
        vaulter.bezierCurveTo(184.2, 310.7, 183.5, 307.7, 182.9, 307.8);
        vaulter.bezierCurveTo(182.4, 307.8, 181.1, 307.1, 180.9, 306.6);
        vaulter.lineTo(178.2, 300.1);
        vaulter.lineTo(176.9, 294.8);
        vaulter.lineTo(181.9, 285.6);
        vaulter.lineTo(185.4, 283.9);
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
        vaulter.moveTo(189.0, 308.5);
        vaulter.bezierCurveTo(195.3, 310.4, 203.6, 309.3, 203.6, 309.3);
        vaulter.bezierCurveTo(203.6, 309.3, 203.0, 315.1, 203.0, 317.1);
        vaulter.bezierCurveTo(203.0, 319.0, 201.3, 329.8, 201.3, 329.8);
        vaulter.bezierCurveTo(201.3, 329.8, 199.3, 331.6, 199.5, 332.1);
        vaulter.bezierCurveTo(199.6, 332.6, 199.7, 334.0, 201.5, 334.5);
        vaulter.bezierCurveTo(202.3, 334.8, 204.6, 335.7, 206.7, 336.7);
        vaulter.bezierCurveTo(208.8, 337.6, 210.7, 338.5, 210.7, 338.5);
        vaulter.bezierCurveTo(210.7, 338.5, 211.6, 338.1, 211.7, 337.3);
        vaulter.bezierCurveTo(211.8, 336.4, 208.6, 333.3, 207.6, 332.3);
        vaulter.bezierCurveTo(206.6, 331.3, 205.2, 331.0, 205.2, 331.0);
        vaulter.bezierCurveTo(205.2, 331.0, 209.5, 316.4, 209.7, 314.9);
        vaulter.bezierCurveTo(210.0, 313.4, 212.7, 309.2, 212.5, 307.7);
        vaulter.bezierCurveTo(212.4, 307.3, 212.7, 306.4, 211.8, 305.6);
        vaulter.bezierCurveTo(209.5, 303.4, 203.9, 301.1, 196.8, 298.4);
        vaulter.lineTo(190.2, 296.9);
        vaulter.bezierCurveTo(190.2, 296.9, 188.3, 298.9, 187.7, 302.4);
        vaulter.bezierCurveTo(187.1, 305.9, 189.0, 308.5, 189.0, 308.5);
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
        vaulter.moveTo(192.5, 273.3);
        vaulter.lineTo(200.0, 279.9);
        vaulter.bezierCurveTo(200.0, 279.9, 200.5, 283.1, 202.6, 285.0);
        vaulter.lineTo(205.2, 290.4);
        vaulter.lineTo(208.7, 289.0);
        vaulter.bezierCurveTo(208.7, 289.0, 205.7, 280.6, 204.4, 278.4);
        vaulter.bezierCurveTo(203.2, 276.2, 196.9, 269.1, 195.3, 268.3);
        vaulter.bezierCurveTo(195.3, 268.3, 193.0, 266.5, 190.6, 267.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 299.2);
        vaulter.bezierCurveTo(194.7, 297.1, 195.0, 294.8, 195.7, 293.4);
        vaulter.bezierCurveTo(196.9, 291.0, 196.9, 276.2, 196.9, 276.2);
        vaulter.bezierCurveTo(197.0, 273.0, 192.4, 266.5, 192.4, 266.5);
        vaulter.bezierCurveTo(192.4, 266.5, 194.8, 261.9, 194.8, 260.7);
        vaulter.bezierCurveTo(194.8, 259.5, 194.3, 255.2, 194.3, 255.2);
        vaulter.bezierCurveTo(194.3, 255.2, 192.6, 250.3, 188.0, 250.5);
        vaulter.bezierCurveTo(183.4, 250.8, 182.1, 256.2, 182.2, 258.4);
        vaulter.bezierCurveTo(182.4, 260.7, 184.7, 266.0, 184.7, 266.0);
        vaulter.bezierCurveTo(184.7, 266.0, 185.3, 268.4, 183.0, 267.9);
        vaulter.bezierCurveTo(180.8, 267.4, 178.7, 278.4, 180.2, 282.5);
        vaulter.bezierCurveTo(181.6, 286.7, 181.4, 297.1, 181.4, 297.1);
        vaulter.bezierCurveTo(181.4, 297.1, 180.5, 299.0, 180.7, 301.2);
        vaulter.lineTo(179.2, 303.8);
        vaulter.bezierCurveTo(175.0, 310.8, 173.8, 321.9, 173.8, 321.9);
        vaulter.bezierCurveTo(167.3, 325.1, 159.2, 333.0, 159.2, 333.0);
        vaulter.bezierCurveTo(159.2, 333.0, 158.1, 334.3, 157.5, 334.3);
        vaulter.bezierCurveTo(156.8, 334.3, 155.1, 333.9, 154.6, 334.3);
        vaulter.bezierCurveTo(154.1, 334.6, 153.3, 335.9, 153.3, 336.1);
        vaulter.bezierCurveTo(153.3, 336.3, 154.5, 342.1, 155.0, 343.4);
        vaulter.bezierCurveTo(155.5, 344.6, 158.1, 345.1, 158.1, 345.1);
        vaulter.lineTo(162.6, 345.1);
        vaulter.bezierCurveTo(162.6, 345.1, 163.0, 343.1, 162.2, 342.8);
        vaulter.bezierCurveTo(161.5, 342.4, 160.6, 342.3, 160.6, 342.3);
        vaulter.bezierCurveTo(160.6, 342.3, 159.1, 338.6, 159.2, 337.6);
        vaulter.bezierCurveTo(159.3, 336.6, 161.3, 336.1, 161.3, 336.1);
        vaulter.lineTo(173.3, 329.4);
        vaulter.bezierCurveTo(173.3, 329.4, 175.5, 328.6, 178.0, 326.8);
        vaulter.bezierCurveTo(180.5, 324.9, 192.5, 305.6, 192.5, 305.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(166.5, 307.1);
        vaulter.bezierCurveTo(166.5, 307.1, 166.0, 307.1, 165.7, 306.3);
        vaulter.bezierCurveTo(165.4, 305.6, 165.8, 305.2, 165.8, 305.2);
        vaulter.lineTo(409.8, 210.3);
        vaulter.lineTo(410.5, 212.2);
        vaulter.lineTo(166.5, 307.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 285.4);
        vaulter.bezierCurveTo(180.6, 285.4, 186.5, 286.1, 187.5, 278.7);
        vaulter.bezierCurveTo(188.5, 271.2, 185.5, 268.7, 183.6, 268.5);
        vaulter.bezierCurveTo(181.6, 268.3, 178.3, 271.8, 178.3, 276.9);
        vaulter.bezierCurveTo(178.3, 282.0, 178.5, 283.6, 180.6, 285.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(182.8, 268.5);
        vaulter.bezierCurveTo(182.8, 268.5, 178.3, 269.2, 177.1, 272.1);
        vaulter.bezierCurveTo(177.1, 272.1, 173.9, 275.2, 172.0, 278.1);
        vaulter.bezierCurveTo(170.1, 280.9, 168.8, 282.6, 168.8, 282.6);
        vaulter.bezierCurveTo(168.8, 282.6, 167.7, 284.4, 168.6, 286.4);
        vaulter.bezierCurveTo(169.5, 288.5, 173.5, 296.2, 176.2, 298.8);
        vaulter.lineTo(176.5, 300.5);
        vaulter.lineTo(175.6, 301.9);
        vaulter.bezierCurveTo(175.6, 301.9, 175.5, 304.7, 176.4, 304.9);
        vaulter.bezierCurveTo(177.3, 305.1, 180.1, 305.1, 180.8, 304.3);
        vaulter.bezierCurveTo(181.4, 303.4, 182.1, 301.6, 182.1, 301.6);
        vaulter.lineTo(180.8, 299.3);
        vaulter.bezierCurveTo(180.8, 299.3, 179.8, 299.3, 179.4, 299.3);
        vaulter.bezierCurveTo(179.0, 299.3, 173.7, 286.2, 173.7, 286.2);
        vaulter.lineTo(179.0, 278.1);
        vaulter.bezierCurveTo(179.0, 278.1, 181.9, 279.4, 182.8, 278.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(205.4, 291.8);
        vaulter.bezierCurveTo(205.4, 291.8, 206.4, 289.9, 207.1, 289.6);
        vaulter.bezierCurveTo(207.8, 289.3, 209.3, 289.4, 209.3, 289.4);
        vaulter.lineTo(209.9, 290.6);
        vaulter.lineTo(209.3, 292.4);
        vaulter.lineTo(207.4, 292.8);
        vaulter.bezierCurveTo(207.4, 292.8, 207.0, 293.3, 206.4, 293.1);
        vaulter.bezierCurveTo(205.7, 293.0, 205.4, 291.8, 205.4, 291.8);
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
        vaulter.moveTo(194.8, 294.2);
        vaulter.bezierCurveTo(201.8, 297.2, 210.2, 303.4, 212.0, 304.2);
        vaulter.bezierCurveTo(213.8, 305.0, 214.4, 305.7, 214.9, 307.3);
        vaulter.bezierCurveTo(215.4, 309.0, 216.1, 315.8, 217.4, 321.2);
        vaulter.bezierCurveTo(218.8, 326.5, 221.6, 329.7, 221.6, 329.7);
        vaulter.bezierCurveTo(221.6, 329.7, 223.1, 331.3, 225.6, 331.2);
        vaulter.bezierCurveTo(228.1, 331.0, 230.1, 330.3, 231.6, 331.5);
        vaulter.bezierCurveTo(233.1, 332.7, 228.6, 334.8, 226.9, 335.4);
        vaulter.bezierCurveTo(225.3, 335.9, 223.3, 335.3, 220.6, 336.2);
        vaulter.bezierCurveTo(217.9, 337.0, 217.4, 336.2, 217.1, 335.2);
        vaulter.bezierCurveTo(216.8, 334.2, 217.1, 332.5, 217.1, 332.5);
        vaulter.lineTo(214.4, 326.8);
        vaulter.bezierCurveTo(210.9, 320.2, 207.8, 310.7, 207.8, 310.7);
        vaulter.lineTo(191.3, 305.7);
        vaulter.lineTo(194.8, 294.2);
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
        vaulter.moveTo(194.4, 270.5);
        vaulter.bezierCurveTo(194.4, 270.5, 196.5, 274.2, 199.3, 275.5);
        vaulter.bezierCurveTo(199.3, 275.5, 200.5, 279.4, 201.2, 280.3);
        vaulter.bezierCurveTo(201.8, 281.1, 204.9, 286.5, 204.9, 286.5);
        vaulter.lineTo(207.8, 285.1);
        vaulter.bezierCurveTo(207.8, 285.1, 203.4, 276.0, 202.4, 274.1);
        vaulter.bezierCurveTo(201.4, 272.2, 196.9, 265.4, 195.9, 264.5);
        vaulter.bezierCurveTo(194.9, 263.6, 194.1, 262.9, 193.1, 263.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 295.5);
        vaulter.bezierCurveTo(194.7, 293.4, 194.9, 290.9, 195.7, 289.4);
        vaulter.bezierCurveTo(196.9, 287.0, 196.9, 272.2, 196.9, 272.2);
        vaulter.bezierCurveTo(197.0, 269.0, 192.4, 262.5, 192.4, 262.5);
        vaulter.bezierCurveTo(192.4, 262.5, 194.8, 257.9, 194.8, 256.7);
        vaulter.bezierCurveTo(194.8, 255.5, 194.3, 251.2, 194.3, 251.2);
        vaulter.bezierCurveTo(194.3, 251.2, 192.6, 246.3, 188.0, 246.5);
        vaulter.bezierCurveTo(183.4, 246.8, 182.1, 252.2, 182.2, 254.4);
        vaulter.bezierCurveTo(182.4, 256.7, 184.7, 262.0, 184.7, 262.0);
        vaulter.bezierCurveTo(184.7, 262.0, 185.3, 264.4, 183.0, 263.9);
        vaulter.bezierCurveTo(180.8, 263.4, 178.7, 274.4, 180.2, 278.5);
        vaulter.bezierCurveTo(181.6, 282.7, 181.4, 293.1, 181.4, 293.1);
        vaulter.bezierCurveTo(181.4, 293.1, 180.6, 294.9, 180.7, 297.0);
        vaulter.bezierCurveTo(177.0, 308.5, 174.9, 319.8, 174.9, 319.8);
        vaulter.bezierCurveTo(173.9, 319.4, 168.9, 319.9, 164.7, 320.7);
        vaulter.bezierCurveTo(160.0, 321.6, 155.4, 321.4, 155.4, 321.4);
        vaulter.bezierCurveTo(155.4, 321.4, 154.5, 320.7, 153.3, 320.6);
        vaulter.bezierCurveTo(152.0, 320.5, 151.4, 321.1, 150.1, 324.2);
        vaulter.bezierCurveTo(149.0, 326.8, 146.9, 329.0, 146.9, 329.0);
        vaulter.bezierCurveTo(146.9, 329.0, 145.6, 332.5, 146.9, 332.8);
        vaulter.bezierCurveTo(148.3, 333.2, 148.9, 331.0, 151.4, 328.8);
        vaulter.bezierCurveTo(153.9, 326.7, 158.6, 325.8, 158.6, 325.8);
        vaulter.bezierCurveTo(158.6, 325.8, 174.4, 326.0, 178.1, 324.7);
        vaulter.bezierCurveTo(181.8, 323.3, 192.8, 303.2, 192.8, 303.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 281.4);
        vaulter.bezierCurveTo(180.6, 281.4, 186.5, 282.1, 187.5, 274.7);
        vaulter.bezierCurveTo(188.5, 267.2, 185.5, 264.7, 183.6, 264.5);
        vaulter.bezierCurveTo(181.6, 264.3, 178.3, 267.8, 178.3, 272.9);
        vaulter.bezierCurveTo(178.3, 278.0, 178.5, 279.6, 180.6, 281.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(165.9, 303.4);
        vaulter.bezierCurveTo(165.9, 303.4, 165.2, 303.7, 164.8, 302.9);
        vaulter.bezierCurveTo(164.5, 302.0, 165.2, 301.6, 165.2, 301.6);
        vaulter.bezierCurveTo(165.9, 301.3, 236.1, 272.8, 258.6, 265.0);
        vaulter.lineTo(410.5, 212.4);
        vaulter.lineTo(411.2, 214.3);
        vaulter.lineTo(259.2, 266.9);
        vaulter.bezierCurveTo(236.8, 274.6, 166.7, 303.2, 165.9, 303.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(205.0, 287.8);
        vaulter.bezierCurveTo(205.0, 287.8, 206.1, 285.9, 206.8, 285.6);
        vaulter.bezierCurveTo(207.5, 285.3, 209.0, 285.4, 209.0, 285.4);
        vaulter.lineTo(209.6, 286.6);
        vaulter.lineTo(209.0, 288.3);
        vaulter.lineTo(207.0, 288.7);
        vaulter.bezierCurveTo(207.0, 288.7, 206.7, 289.3, 206.0, 289.1);
        vaulter.bezierCurveTo(205.4, 288.9, 205.0, 287.8, 205.0, 287.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(182.8, 264.5);
        vaulter.bezierCurveTo(182.8, 264.5, 178.2, 266.7, 177.6, 269.3);
        vaulter.lineTo(170.8, 275.3);
        vaulter.bezierCurveTo(170.8, 275.3, 167.9, 277.0, 168.1, 278.7);
        vaulter.bezierCurveTo(168.3, 280.4, 169.9, 286.4, 171.9, 289.2);
        vaulter.bezierCurveTo(173.2, 291.0, 174.8, 293.2, 175.8, 294.5);
        vaulter.bezierCurveTo(175.8, 294.5, 176.0, 295.2, 175.4, 295.8);
        vaulter.bezierCurveTo(175.4, 295.8, 175.2, 296.9, 175.4, 297.4);
        vaulter.bezierCurveTo(175.7, 297.9, 176.6, 299.9, 176.6, 299.9);
        vaulter.bezierCurveTo(176.6, 299.9, 178.8, 300.0, 180.4, 299.0);
        vaulter.bezierCurveTo(182.0, 298.0, 181.7, 297.2, 181.7, 297.2);
        vaulter.bezierCurveTo(181.7, 297.2, 181.2, 294.1, 180.3, 294.2);
        vaulter.bezierCurveTo(179.4, 294.3, 178.4, 293.3, 178.4, 293.3);
        vaulter.bezierCurveTo(177.6, 292.0, 176.5, 290.2, 176.2, 289.2);
        vaulter.bezierCurveTo(175.7, 287.5, 174.6, 280.1, 174.6, 280.1);
        vaulter.bezierCurveTo(174.6, 280.1, 177.6, 276.5, 180.6, 275.5);
        vaulter.bezierCurveTo(183.6, 274.5, 186.1, 273.0, 186.1, 273.0);
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
        vaulter.moveTo(194.1, 278.2);
        vaulter.bezierCurveTo(194.1, 278.2, 196.7, 282.3, 199.8, 284.0);
        vaulter.bezierCurveTo(199.8, 284.0, 202.2, 285.1, 203.9, 285.1);
        vaulter.bezierCurveTo(205.5, 285.1, 205.0, 284.2, 205.0, 284.2);
        vaulter.bezierCurveTo(204.8, 282.6, 201.1, 278.7, 198.7, 275.6);
        vaulter.bezierCurveTo(196.3, 272.5, 192.7, 271.0, 192.7, 271.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 302.2);
        vaulter.bezierCurveTo(194.8, 300.4, 195.1, 298.6, 195.7, 297.4);
        vaulter.bezierCurveTo(196.9, 295.0, 196.9, 280.1, 196.9, 280.1);
        vaulter.bezierCurveTo(197.0, 277.0, 192.4, 270.4, 192.4, 270.4);
        vaulter.bezierCurveTo(192.4, 270.4, 194.8, 265.9, 194.8, 264.7);
        vaulter.bezierCurveTo(194.8, 263.5, 194.3, 259.2, 194.3, 259.2);
        vaulter.bezierCurveTo(194.3, 259.2, 192.6, 254.2, 188.0, 254.5);
        vaulter.bezierCurveTo(183.4, 254.8, 182.1, 260.2, 182.2, 262.4);
        vaulter.bezierCurveTo(182.4, 264.6, 184.7, 269.9, 184.7, 269.9);
        vaulter.bezierCurveTo(184.7, 269.9, 185.3, 272.4, 183.0, 271.9);
        vaulter.bezierCurveTo(180.8, 271.3, 178.7, 282.3, 180.2, 286.5);
        vaulter.bezierCurveTo(181.6, 290.7, 181.4, 301.1, 181.4, 301.1);
        vaulter.bezierCurveTo(181.4, 301.1, 181.3, 312.8, 182.1, 319.8);
        vaulter.bezierCurveTo(182.1, 319.8, 178.8, 322.0, 176.3, 325.7);
        vaulter.bezierCurveTo(173.8, 329.3, 164.6, 334.5, 164.6, 334.5);
        vaulter.bezierCurveTo(164.6, 334.5, 163.3, 335.5, 162.6, 336.5);
        vaulter.bezierCurveTo(161.9, 337.5, 163.4, 339.2, 163.4, 339.2);
        vaulter.bezierCurveTo(163.4, 339.2, 166.0, 342.4, 166.8, 343.0);
        vaulter.bezierCurveTo(167.3, 343.4, 167.7, 344.5, 168.1, 344.8);
        vaulter.bezierCurveTo(168.4, 345.1, 170.1, 345.5, 170.6, 344.5);
        vaulter.bezierCurveTo(171.1, 343.5, 169.2, 343.4, 169.1, 342.2);
        vaulter.bezierCurveTo(168.9, 340.3, 167.4, 337.2, 167.4, 337.2);
        vaulter.bezierCurveTo(167.4, 337.2, 177.6, 332.5, 181.4, 328.9);
        vaulter.bezierCurveTo(181.4, 328.9, 187.4, 324.0, 188.9, 320.7);
        vaulter.bezierCurveTo(190.4, 317.4, 192.6, 305.1, 192.8, 304.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(205.0, 284.2);
        vaulter.bezierCurveTo(205.1, 285.8, 199.7, 291.6, 196.7, 294.6);
        vaulter.lineTo(191.5, 295.6);
        vaulter.bezierCurveTo(191.5, 295.6, 198.2, 288.1, 198.1, 287.6);
        vaulter.bezierCurveTo(198.0, 287.1, 199.8, 284.0, 199.8, 284.0);
        vaulter.bezierCurveTo(199.8, 284.0, 200.0, 283.7, 200.2, 283.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(152.8, 308.9);
        vaulter.bezierCurveTo(152.8, 308.9, 151.9, 309.2, 151.6, 308.3);
        vaulter.bezierCurveTo(151.3, 307.4, 152.2, 307.0, 152.2, 307.0);
        vaulter.bezierCurveTo(152.7, 306.8, 203.5, 289.9, 257.4, 275.5);
        vaulter.lineTo(405.1, 236.0);
        vaulter.lineTo(405.6, 238.0);
        vaulter.lineTo(257.9, 277.4);
        vaulter.bezierCurveTo(204.1, 291.8, 153.3, 308.7, 152.8, 308.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(192.4, 300.3);
        vaulter.bezierCurveTo(203.3, 302.1, 210.6, 307.8, 210.6, 307.8);
        vaulter.bezierCurveTo(210.6, 307.8, 212.6, 309.4, 212.6, 311.1);
        vaulter.bezierCurveTo(212.5, 313.7, 211.8, 314.1, 207.3, 317.6);
        vaulter.bezierCurveTo(202.8, 321.1, 194.2, 327.1, 194.2, 327.1);
        vaulter.bezierCurveTo(194.4, 327.4, 195.5, 329.3, 196.0, 330.2);
        vaulter.bezierCurveTo(197.0, 332.1, 198.3, 333.5, 198.0, 334.4);
        vaulter.bezierCurveTo(197.8, 334.9, 196.9, 334.5, 196.6, 334.4);
        vaulter.bezierCurveTo(196.1, 334.3, 194.1, 332.5, 192.9, 331.3);
        vaulter.bezierCurveTo(191.8, 330.1, 188.8, 326.9, 188.9, 326.1);
        vaulter.bezierCurveTo(189.0, 325.8, 189.3, 325.2, 189.7, 324.8);
        vaulter.bezierCurveTo(190.7, 324.1, 192.0, 323.8, 192.0, 323.8);
        vaulter.bezierCurveTo(192.0, 323.8, 195.4, 320.8, 197.3, 318.8);
        vaulter.bezierCurveTo(199.1, 316.8, 202.4, 312.4, 202.4, 312.4);
        vaulter.bezierCurveTo(202.4, 312.4, 197.6, 312.5, 189.1, 311.8);
        vaulter.bezierCurveTo(180.6, 311.2, 180.8, 303.0, 180.8, 303.0);
        vaulter.bezierCurveTo(180.8, 302.0, 181.0, 301.2, 181.4, 300.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 289.3);
        vaulter.bezierCurveTo(180.6, 289.3, 186.5, 290.1, 187.5, 282.7);
        vaulter.bezierCurveTo(188.5, 275.2, 185.5, 272.7, 183.6, 272.5);
        vaulter.bezierCurveTo(181.6, 272.3, 178.3, 275.8, 178.3, 280.9);
        vaulter.bezierCurveTo(178.3, 286.0, 178.5, 287.6, 180.6, 289.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(183.1, 272.4);
        vaulter.bezierCurveTo(183.1, 272.4, 178.7, 272.7, 176.7, 275.0);
        vaulter.bezierCurveTo(176.7, 275.0, 166.2, 281.8, 165.3, 282.8);
        vaulter.bezierCurveTo(164.5, 283.8, 163.8, 285.7, 164.0, 286.7);
        vaulter.bezierCurveTo(164.1, 287.7, 164.2, 294.3, 164.1, 297.6);
        vaulter.bezierCurveTo(164.0, 300.8, 163.6, 301.3, 163.1, 301.7);
        vaulter.bezierCurveTo(162.6, 302.1, 162.2, 303.8, 162.2, 304.5);
        vaulter.bezierCurveTo(162.2, 305.1, 163.8, 306.7, 164.5, 306.6);
        vaulter.bezierCurveTo(165.1, 306.5, 168.1, 306.5, 168.5, 305.2);
        vaulter.bezierCurveTo(168.8, 304.0, 168.7, 301.2, 168.0, 301.2);
        vaulter.bezierCurveTo(167.2, 301.2, 166.6, 301.2, 166.6, 301.2);
        vaulter.bezierCurveTo(166.8, 296.3, 168.4, 292.4, 169.1, 286.8);
        vaulter.lineTo(176.2, 281.8);
        vaulter.bezierCurveTo(176.2, 281.8, 180.0, 282.5, 182.5, 281.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(192.3, 296.7);
        vaulter.bezierCurveTo(192.3, 296.7, 193.6, 298.2, 194.1, 298.2);
        vaulter.bezierCurveTo(194.2, 298.2, 194.5, 297.9, 194.9, 297.9);
        vaulter.bezierCurveTo(195.8, 298.0, 197.0, 297.3, 197.0, 297.3);
        vaulter.bezierCurveTo(197.0, 297.3, 197.8, 294.9, 196.8, 294.5);
        vaulter.bezierCurveTo(195.8, 294.1, 194.2, 294.5, 194.2, 294.5);
        vaulter.lineTo(192.3, 296.7);
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
        vaulter.moveTo(192.2, 260.0);
        vaulter.bezierCurveTo(192.2, 260.0, 195.6, 260.7, 195.9, 263.8);
        vaulter.lineTo(196.7, 265.7);
        vaulter.bezierCurveTo(196.7, 265.7, 200.4, 269.8, 202.2, 272.4);
        vaulter.lineTo(210.1, 282.7);
        vaulter.lineTo(210.6, 284.9);
        vaulter.lineTo(207.2, 286.1);
        vaulter.lineTo(206.2, 284.2);
        vaulter.bezierCurveTo(206.2, 284.2, 201.8, 279.8, 200.0, 277.5);
        vaulter.bezierCurveTo(200.0, 277.5, 195.8, 274.6, 194.0, 268.9);
        vaulter.lineTo(192.2, 268.5);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(188.0, 303.0);
        vaulter.bezierCurveTo(188.0, 303.0, 195.2, 306.2, 204.5, 309.5);
        vaulter.bezierCurveTo(204.5, 309.5, 205.6, 317.1, 207.6, 319.1);
        vaulter.bezierCurveTo(209.5, 321.0, 213.3, 330.2, 213.3, 330.2);
        vaulter.bezierCurveTo(213.3, 330.2, 213.1, 333.4, 213.3, 334.2);
        vaulter.bezierCurveTo(213.6, 334.9, 215.8, 336.6, 218.1, 335.5);
        vaulter.bezierCurveTo(220.3, 334.3, 226.7, 333.2, 226.7, 333.2);
        vaulter.bezierCurveTo(226.7, 333.2, 231.1, 330.9, 229.4, 329.4);
        vaulter.bezierCurveTo(227.6, 328.0, 226.9, 329.2, 224.8, 329.6);
        vaulter.bezierCurveTo(222.7, 330.0, 217.4, 328.5, 217.4, 328.5);
        vaulter.bezierCurveTo(214.9, 323.1, 213.5, 315.5, 211.5, 309.7);
        vaulter.bezierCurveTo(209.5, 304.0, 204.5, 301.2, 204.5, 301.2);
        vaulter.lineTo(192.2, 291.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(195.1, 294.9);
        vaulter.bezierCurveTo(195.0, 292.6, 195.3, 289.8, 196.1, 288.2);
        vaulter.bezierCurveTo(197.3, 285.7, 197.3, 270.1, 197.3, 270.1);
        vaulter.bezierCurveTo(197.5, 266.8, 192.7, 259.9, 192.7, 259.9);
        vaulter.bezierCurveTo(192.7, 259.9, 195.1, 255.1, 195.1, 253.9);
        vaulter.bezierCurveTo(195.1, 252.6, 194.6, 248.1, 194.6, 248.1);
        vaulter.bezierCurveTo(194.6, 248.1, 192.8, 242.9, 188.0, 243.2);
        vaulter.bezierCurveTo(183.2, 243.5, 181.8, 249.1, 181.9, 251.5);
        vaulter.bezierCurveTo(182.1, 253.8, 184.6, 259.4, 184.6, 259.4);
        vaulter.bezierCurveTo(184.6, 259.4, 185.1, 262.0, 182.8, 261.4);
        vaulter.bezierCurveTo(180.5, 260.9, 178.3, 272.4, 179.8, 276.8);
        vaulter.bezierCurveTo(181.3, 281.2, 181.0, 292.1, 181.0, 292.1);
        vaulter.bezierCurveTo(181.0, 292.1, 179.7, 295.8, 180.1, 298.3);
        vaulter.bezierCurveTo(180.5, 300.8, 179.3, 311.8, 180.1, 317.4);
        vaulter.bezierCurveTo(170.8, 316.0, 169.4, 317.4, 162.5, 317.4);
        vaulter.bezierCurveTo(162.5, 317.4, 161.8, 316.8, 161.4, 316.0);
        vaulter.bezierCurveTo(161.0, 315.3, 161.0, 313.8, 159.8, 312.8);
        vaulter.bezierCurveTo(158.6, 311.7, 156.6, 313.3, 155.7, 314.1);
        vaulter.bezierCurveTo(154.8, 314.9, 151.9, 320.0, 149.6, 321.3);
        vaulter.bezierCurveTo(147.2, 322.6, 146.8, 324.2, 146.8, 324.7);
        vaulter.bezierCurveTo(146.8, 325.2, 149.3, 325.9, 150.7, 324.7);
        vaulter.bezierCurveTo(152.2, 323.5, 155.3, 321.3, 157.8, 321.2);
        vaulter.bezierCurveTo(160.3, 321.0, 170.9, 321.9, 174.1, 322.7);
        vaulter.bezierCurveTo(177.2, 323.5, 183.0, 324.0, 184.1, 323.0);
        vaulter.bezierCurveTo(185.1, 321.9, 190.0, 311.2, 192.2, 299.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(165.3, 295.7);
        vaulter.bezierCurveTo(165.3, 295.7, 164.4, 296.0, 164.1, 295.0);
        vaulter.bezierCurveTo(163.9, 294.0, 164.8, 293.8, 164.8, 293.8);
        vaulter.bezierCurveTo(165.3, 293.7, 222.6, 280.1, 272.4, 273.2);
        vaulter.lineTo(422.4, 251.9);
        vaulter.lineTo(422.7, 253.9);
        vaulter.lineTo(272.7, 275.1);
        vaulter.bezierCurveTo(223.0, 282.1, 165.8, 295.6, 165.3, 295.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.2, 279.7);
        vaulter.bezierCurveTo(180.2, 279.7, 186.4, 280.6, 187.4, 272.7);
        vaulter.bezierCurveTo(188.5, 264.9, 185.4, 262.3, 183.3, 262.0);
        vaulter.bezierCurveTo(181.3, 261.8, 177.8, 265.5, 177.8, 270.9);
        vaulter.bezierCurveTo(177.8, 276.2, 178.0, 277.9, 180.2, 279.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(206.8, 286.3);
        vaulter.bezierCurveTo(206.8, 286.3, 208.1, 287.9, 208.7, 287.9);
        vaulter.bezierCurveTo(208.8, 287.9, 209.1, 287.5, 209.5, 287.6);
        vaulter.bezierCurveTo(210.5, 287.6, 211.8, 286.9, 211.8, 286.9);
        vaulter.bezierCurveTo(211.8, 286.9, 212.6, 284.4, 211.5, 284.0);
        vaulter.bezierCurveTo(210.5, 283.6, 208.9, 284.0, 208.9, 284.0);
        vaulter.lineTo(206.8, 286.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(182.9, 262.0);
        vaulter.bezierCurveTo(182.9, 262.0, 179.9, 262.0, 178.5, 263.3);
        vaulter.bezierCurveTo(177.1, 264.6, 175.6, 267.3, 175.6, 267.3);
        vaulter.bezierCurveTo(175.6, 267.3, 169.4, 271.6, 167.7, 275.7);
        vaulter.bezierCurveTo(167.7, 275.7, 167.3, 277.5, 168.4, 278.7);
        vaulter.bezierCurveTo(169.5, 279.9, 171.3, 283.7, 174.9, 286.1);
        vaulter.bezierCurveTo(177.5, 287.9, 177.5, 290.1, 177.5, 290.1);
        vaulter.bezierCurveTo(177.5, 290.1, 177.3, 290.5, 176.8, 290.8);
        vaulter.bezierCurveTo(176.3, 291.0, 176.1, 292.7, 176.3, 293.1);
        vaulter.bezierCurveTo(176.6, 293.6, 177.8, 294.6, 178.3, 294.7);
        vaulter.bezierCurveTo(178.9, 294.8, 182.9, 293.6, 182.9, 293.6);
        vaulter.bezierCurveTo(182.9, 293.6, 183.5, 292.1, 182.9, 290.5);
        vaulter.bezierCurveTo(182.2, 288.9, 181.8, 288.9, 180.9, 288.4);
        vaulter.bezierCurveTo(179.9, 287.9, 175.9, 280.5, 175.9, 280.5);
        vaulter.bezierCurveTo(175.9, 280.5, 174.5, 276.0, 174.2, 275.2);
        vaulter.bezierCurveTo(173.8, 274.3, 179.8, 271.7, 179.8, 271.7);
        vaulter.bezierCurveTo(179.8, 271.7, 181.8, 271.8, 183.1, 271.0);
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
        vaulter.moveTo(186.0, 302.7);
        vaulter.lineTo(200.8, 312.0);
        vaulter.bezierCurveTo(200.8, 312.0, 199.2, 317.3, 199.5, 318.7);
        vaulter.bezierCurveTo(199.7, 320.0, 202.2, 328.3, 203.0, 334.1);
        vaulter.bezierCurveTo(203.9, 339.9, 200.8, 340.2, 203.0, 341.0);
        vaulter.bezierCurveTo(204.5, 341.5, 206.2, 341.8, 208.5, 342.8);
        vaulter.bezierCurveTo(209.6, 343.3, 211.3, 345.1, 212.4, 345.1);
        vaulter.bezierCurveTo(212.4, 345.1, 215.7, 345.1, 215.2, 343.7);
        vaulter.bezierCurveTo(215.0, 343.4, 214.2, 342.9, 213.7, 342.2);
        vaulter.bezierCurveTo(212.3, 340.3, 209.9, 338.0, 208.6, 337.4);
        vaulter.bezierCurveTo(206.5, 336.5, 206.9, 334.1, 206.9, 334.1);
        vaulter.lineTo(207.5, 311.5);
        vaulter.bezierCurveTo(207.5, 311.5, 206.6, 307.4, 204.7, 305.2);
        vaulter.bezierCurveTo(202.8, 302.9, 192.0, 291.5, 192.0, 291.5);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(193.5, 261.6);
        vaulter.bezierCurveTo(193.5, 261.6, 196.1, 262.1, 196.8, 265.8);
        vaulter.bezierCurveTo(198.6, 269.1, 200.0, 274.0, 200.0, 274.0);
        vaulter.bezierCurveTo(200.0, 274.0, 202.1, 278.1, 203.1, 278.4);
        vaulter.bezierCurveTo(204.2, 278.8, 213.4, 284.7, 213.4, 284.7);
        vaulter.lineTo(210.1, 285.8);
        vaulter.bezierCurveTo(210.1, 285.8, 205.3, 283.2, 204.0, 283.2);
        vaulter.bezierCurveTo(202.7, 283.2, 200.8, 281.8, 199.0, 281.0);
        vaulter.bezierCurveTo(197.3, 280.2, 193.5, 272.7, 193.5, 272.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(195.2, 295.1);
        vaulter.bezierCurveTo(195.0, 292.8, 195.2, 289.9, 196.1, 288.2);
        vaulter.bezierCurveTo(197.3, 285.7, 197.3, 270.1, 197.3, 270.1);
        vaulter.bezierCurveTo(197.5, 266.8, 192.7, 259.9, 192.7, 259.9);
        vaulter.bezierCurveTo(192.7, 259.9, 195.1, 255.1, 195.1, 253.9);
        vaulter.bezierCurveTo(195.1, 252.6, 194.6, 248.1, 194.6, 248.1);
        vaulter.bezierCurveTo(194.6, 248.1, 192.8, 242.9, 188.0, 243.2);
        vaulter.bezierCurveTo(183.2, 243.5, 181.8, 249.1, 181.9, 251.5);
        vaulter.bezierCurveTo(182.1, 253.8, 184.6, 259.4, 184.6, 259.4);
        vaulter.bezierCurveTo(184.6, 259.4, 185.1, 262.0, 182.8, 261.4);
        vaulter.bezierCurveTo(180.5, 260.9, 178.3, 272.4, 179.8, 276.8);
        vaulter.bezierCurveTo(181.3, 281.2, 181.0, 292.1, 181.0, 292.1);
        vaulter.bezierCurveTo(181.0, 292.1, 180.4, 294.0, 180.2, 295.8);
        vaulter.bezierCurveTo(180.1, 297.6, 180.3, 298.4, 180.4, 299.3);
        vaulter.bezierCurveTo(180.9, 302.2, 185.5, 313.8, 186.7, 315.8);
        vaulter.bezierCurveTo(183.1, 313.4, 178.1, 312.8, 174.7, 311.7);
        vaulter.bezierCurveTo(171.4, 310.6, 171.8, 309.2, 171.8, 309.2);
        vaulter.bezierCurveTo(171.8, 309.2, 171.5, 307.9, 170.8, 307.4);
        vaulter.bezierCurveTo(170.0, 306.9, 168.1, 306.6, 167.5, 307.4);
        vaulter.bezierCurveTo(166.9, 308.2, 164.3, 310.3, 163.5, 310.9);
        vaulter.bezierCurveTo(162.8, 311.5, 158.6, 313.2, 158.3, 313.5);
        vaulter.bezierCurveTo(158.0, 313.8, 157.9, 314.9, 159.1, 315.0);
        vaulter.bezierCurveTo(160.3, 315.2, 166.0, 315.2, 168.0, 314.5);
        vaulter.bezierCurveTo(170.0, 313.7, 174.0, 315.8, 174.0, 315.8);
        vaulter.bezierCurveTo(174.0, 315.8, 180.6, 320.3, 186.7, 322.6);
        vaulter.bezierCurveTo(192.8, 324.9, 193.8, 323.8, 194.4, 323.4);
        vaulter.bezierCurveTo(195.0, 322.9, 196.5, 319.2, 196.1, 316.3);
        vaulter.bezierCurveTo(195.6, 313.4, 193.3, 301.4, 193.3, 301.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(165.4, 295.0);
        vaulter.bezierCurveTo(165.4, 295.0, 164.1, 295.3, 163.9, 294.3);
        vaulter.bezierCurveTo(163.8, 293.2, 165.0, 293.0, 165.0, 293.0);
        vaulter.bezierCurveTo(165.6, 292.9, 231.6, 280.6, 269.6, 275.8);
        vaulter.lineTo(423.3, 256.6);
        vaulter.lineTo(423.6, 258.6);
        vaulter.lineTo(269.9, 277.8);
        vaulter.bezierCurveTo(232.0, 282.6, 165.9, 294.9, 165.4, 295.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.2, 279.7);
        vaulter.bezierCurveTo(180.2, 279.7, 186.4, 280.6, 187.4, 272.7);
        vaulter.bezierCurveTo(188.5, 264.9, 185.4, 262.3, 183.3, 262.0);
        vaulter.bezierCurveTo(181.3, 261.8, 177.8, 265.5, 177.8, 270.9);
        vaulter.bezierCurveTo(177.8, 276.2, 178.0, 277.9, 180.2, 279.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(183.3, 261.7);
        vaulter.bezierCurveTo(183.3, 261.7, 176.6, 264.4, 176.8, 266.7);
        vaulter.bezierCurveTo(176.8, 266.7, 170.0, 271.0, 168.4, 274.4);
        vaulter.bezierCurveTo(167.9, 275.3, 167.5, 275.8, 167.6, 276.6);
        vaulter.bezierCurveTo(167.7, 278.5, 169.1, 279.5, 169.1, 279.5);
        vaulter.bezierCurveTo(169.1, 279.5, 172.4, 282.3, 175.5, 286.0);
        vaulter.bezierCurveTo(176.8, 287.5, 177.6, 288.2, 177.6, 288.2);
        vaulter.bezierCurveTo(177.6, 288.2, 177.1, 289.1, 176.7, 289.3);
        vaulter.bezierCurveTo(176.3, 289.5, 175.9, 290.7, 175.9, 291.5);
        vaulter.bezierCurveTo(175.9, 292.3, 177.6, 293.3, 177.6, 293.3);
        vaulter.bezierCurveTo(177.6, 293.3, 181.0, 294.3, 182.5, 292.5);
        vaulter.bezierCurveTo(182.5, 292.5, 183.5, 289.3, 182.2, 288.2);
        vaulter.bezierCurveTo(182.1, 287.8, 181.2, 288.1, 180.3, 287.3);
        vaulter.bezierCurveTo(177.6, 282.6, 176.1, 278.9, 174.0, 275.3);
        vaulter.bezierCurveTo(174.6, 275.2, 177.8, 274.0, 180.1, 271.1);
        vaulter.bezierCurveTo(180.1, 271.1, 182.4, 271.5, 184.0, 271.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(209.9, 286.6);
        vaulter.lineTo(211.3, 288.0);
        vaulter.bezierCurveTo(211.3, 288.0, 212.5, 288.7, 212.8, 288.0);
        vaulter.lineTo(214.6, 288.0);
        vaulter.lineTo(215.8, 286.6);
        vaulter.bezierCurveTo(215.8, 286.6, 215.1, 285.2, 214.3, 285.0);
        vaulter.bezierCurveTo(213.4, 284.7, 211.3, 285.4, 211.0, 285.6);
        vaulter.bezierCurveTo(210.6, 285.7, 209.6, 286.2, 209.9, 286.6);
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
        vaulter.moveTo(181.2, 291.6);
        vaulter.bezierCurveTo(181.2, 291.6, 179.9, 296.0, 180.5, 298.8);
        vaulter.bezierCurveTo(181.0, 301.7, 185.0, 306.2, 185.0, 306.2);
        vaulter.lineTo(190.6, 319.3);
        vaulter.bezierCurveTo(190.6, 319.3, 188.8, 321.3, 188.4, 324.6);
        vaulter.bezierCurveTo(187.9, 327.8, 187.4, 334.8, 186.9, 336.7);
        vaulter.lineTo(186.2, 339.4);
        vaulter.bezierCurveTo(186.2, 339.4, 184.9, 340.4, 184.6, 341.0);
        vaulter.bezierCurveTo(184.3, 341.6, 184.7, 343.1, 186.2, 343.6);
        vaulter.bezierCurveTo(187.7, 344.0, 192.0, 345.1, 193.0, 345.1);
        vaulter.bezierCurveTo(194.0, 345.1, 195.2, 344.8, 195.1, 344.3);
        vaulter.bezierCurveTo(195.0, 343.7, 194.1, 342.7, 192.8, 342.7);
        vaulter.bezierCurveTo(191.5, 342.7, 190.3, 340.7, 189.2, 339.7);
        vaulter.bezierCurveTo(191.3, 333.3, 195.2, 326.1, 196.2, 324.5);
        vaulter.bezierCurveTo(197.8, 322.3, 199.4, 320.7, 198.8, 318.4);
        vaulter.bezierCurveTo(198.2, 316.0, 197.2, 306.5, 193.0, 297.4);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(193.0, 261.6);
        vaulter.bezierCurveTo(193.0, 261.6, 197.1, 264.5, 197.4, 267.2);
        vaulter.bezierCurveTo(197.6, 269.9, 198.5, 273.5, 198.5, 273.5);
        vaulter.bezierCurveTo(198.5, 273.5, 202.3, 276.4, 203.3, 278.5);
        vaulter.bezierCurveTo(204.3, 280.6, 211.0, 283.1, 211.0, 283.1);
        vaulter.bezierCurveTo(211.0, 283.1, 212.3, 285.2, 212.2, 285.9);
        vaulter.bezierCurveTo(212.2, 286.7, 208.2, 286.9, 208.2, 286.9);
        vaulter.bezierCurveTo(208.2, 286.9, 204.2, 284.4, 202.7, 283.7);
        vaulter.bezierCurveTo(201.2, 283.1, 196.9, 280.7, 195.5, 277.7);
        vaulter.lineTo(192.7, 271.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(195.7, 299.0);
        vaulter.bezierCurveTo(194.9, 296.9, 194.9, 292.0, 196.1, 289.5);
        vaulter.bezierCurveTo(197.3, 287.0, 197.3, 271.4, 197.3, 271.4);
        vaulter.bezierCurveTo(197.5, 268.1, 192.7, 261.2, 192.7, 261.2);
        vaulter.bezierCurveTo(192.7, 261.2, 195.1, 256.4, 195.1, 255.2);
        vaulter.bezierCurveTo(195.1, 254.0, 194.6, 249.4, 194.6, 249.4);
        vaulter.bezierCurveTo(194.6, 249.4, 192.8, 244.2, 188.0, 244.5);
        vaulter.bezierCurveTo(183.2, 244.8, 181.8, 250.5, 181.9, 252.8);
        vaulter.bezierCurveTo(182.1, 255.1, 184.6, 260.7, 184.6, 260.7);
        vaulter.bezierCurveTo(184.6, 260.7, 185.1, 263.3, 182.8, 262.7);
        vaulter.bezierCurveTo(180.4, 262.2, 178.3, 273.7, 179.8, 278.1);
        vaulter.bezierCurveTo(181.3, 282.5, 181.0, 293.4, 181.0, 293.4);
        vaulter.bezierCurveTo(181.0, 293.4, 180.2, 295.3, 180.3, 297.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(194.1, 295.9);
        vaulter.bezierCurveTo(194.3, 296.6, 194.7, 297.4, 195.4, 298.0);
        vaulter.bezierCurveTo(198.9, 301.6, 206.5, 314.5, 206.2, 315.6);
        vaulter.bezierCurveTo(205.9, 316.7, 204.2, 319.2, 202.8, 319.3);
        vaulter.bezierCurveTo(197.4, 319.7, 189.9, 316.1, 182.9, 314.5);
        vaulter.bezierCurveTo(181.5, 314.3, 177.9, 314.6, 177.4, 315.6);
        vaulter.bezierCurveTo(176.8, 316.6, 174.5, 318.7, 174.0, 320.1);
        vaulter.bezierCurveTo(173.4, 321.6, 173.1, 321.7, 172.5, 321.7);
        vaulter.bezierCurveTo(172.0, 321.7, 172.3, 320.7, 172.5, 319.7);
        vaulter.bezierCurveTo(172.8, 318.7, 174.2, 312.3, 174.4, 310.6);
        vaulter.bezierCurveTo(174.5, 308.9, 176.0, 308.9, 176.5, 308.9);
        vaulter.bezierCurveTo(177.1, 308.9, 177.9, 309.3, 178.4, 309.9);
        vaulter.bezierCurveTo(178.4, 309.9, 179.3, 309.9, 182.7, 310.8);
        vaulter.bezierCurveTo(186.2, 311.6, 191.9, 310.5, 196.0, 311.8);
        vaulter.bezierCurveTo(188.6, 307.2, 182.6, 304.7, 180.5, 298.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(165.2, 293.8);
        vaulter.bezierCurveTo(165.2, 293.8, 164.2, 294.0, 164.0, 293.0);
        vaulter.bezierCurveTo(163.9, 291.9, 164.9, 291.8, 164.9, 291.8);
        vaulter.lineTo(267.8, 277.2);
        vaulter.lineTo(423.6, 258.6);
        vaulter.lineTo(423.8, 260.6);
        vaulter.lineTo(268.0, 279.2);
        vaulter.lineTo(165.2, 293.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.2, 281.1);
        vaulter.bezierCurveTo(180.2, 281.1, 186.4, 281.9, 187.4, 274.1);
        vaulter.bezierCurveTo(188.5, 266.2, 185.4, 263.6, 183.3, 263.4);
        vaulter.bezierCurveTo(181.3, 263.2, 177.8, 266.9, 177.8, 272.2);
        vaulter.bezierCurveTo(177.8, 277.6, 178.0, 279.2, 180.2, 281.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(182.8, 262.7);
        vaulter.bezierCurveTo(182.8, 262.7, 177.1, 262.7, 174.3, 267.4);
        vaulter.bezierCurveTo(174.3, 267.4, 168.5, 271.3, 167.2, 272.0);
        vaulter.bezierCurveTo(167.2, 272.0, 164.0, 274.5, 164.0, 276.5);
        vaulter.bezierCurveTo(164.0, 278.6, 167.6, 281.2, 168.7, 281.8);
        vaulter.bezierCurveTo(169.8, 282.3, 175.0, 286.3, 176.1, 287.6);
        vaulter.bezierCurveTo(176.1, 287.6, 176.5, 289.3, 175.6, 289.8);
        vaulter.bezierCurveTo(174.6, 290.2, 175.5, 292.9, 175.9, 293.2);
        vaulter.bezierCurveTo(177.1, 293.9, 179.3, 293.6, 181.3, 292.8);
        vaulter.bezierCurveTo(182.1, 292.5, 181.8, 289.3, 181.2, 289.0);
        vaulter.bezierCurveTo(180.5, 288.8, 180.2, 288.3, 179.9, 287.5);
        vaulter.bezierCurveTo(179.6, 286.7, 178.2, 284.1, 178.2, 284.1);
        vaulter.lineTo(171.8, 276.2);
        vaulter.bezierCurveTo(171.8, 276.2, 178.0, 273.1, 179.7, 271.4);
        vaulter.bezierCurveTo(179.7, 271.4, 180.5, 272.0, 182.8, 271.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(209.0, 288.3);
        vaulter.bezierCurveTo(209.0, 288.3, 209.0, 286.4, 209.6, 286.0);
        vaulter.bezierCurveTo(210.1, 285.7, 211.8, 285.7, 212.7, 286.0);
        vaulter.bezierCurveTo(213.6, 286.3, 214.5, 287.3, 214.6, 287.9);
        vaulter.bezierCurveTo(214.7, 288.5, 213.5, 289.1, 212.9, 289.5);
        vaulter.bezierCurveTo(212.4, 289.8, 209.7, 289.5, 209.7, 289.5);
        vaulter.lineTo(209.0, 288.3);
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
        vaulter.moveTo(192.8, 267.1);
        vaulter.bezierCurveTo(192.8, 267.1, 195.3, 267.6, 195.7, 268.6);
        vaulter.bezierCurveTo(196.1, 269.6, 199.7, 275.2, 200.0, 277.4);
        vaulter.bezierCurveTo(200.3, 279.6, 202.7, 281.3, 203.3, 281.2);
        vaulter.bezierCurveTo(203.8, 281.2, 213.2, 286.4, 213.5, 287.2);
        vaulter.lineTo(207.8, 288.9);
        vaulter.bezierCurveTo(207.8, 288.9, 205.6, 288.3, 203.2, 286.7);
        vaulter.bezierCurveTo(203.2, 286.7, 200.5, 286.7, 199.8, 286.4);
        vaulter.bezierCurveTo(199.2, 286.1, 195.3, 282.1, 194.3, 276.6);
        vaulter.lineTo(192.8, 275.6);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(164.6, 294.9);
        vaulter.bezierCurveTo(164.6, 294.9, 163.5, 295.1, 163.4, 294.1);
        vaulter.bezierCurveTo(163.3, 293.0, 164.4, 292.9, 164.4, 292.9);
        vaulter.bezierCurveTo(165.0, 292.8, 238.0, 284.5, 274.5, 281.6);
        vaulter.bezierCurveTo(311.1, 278.7, 423.1, 268.6, 423.7, 268.5);
        vaulter.lineTo(423.9, 270.5);
        vaulter.bezierCurveTo(423.3, 270.6, 311.3, 280.7, 274.7, 283.6);
        vaulter.bezierCurveTo(238.2, 286.5, 165.2, 294.8, 164.6, 294.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(208.6, 290.1);
        vaulter.bezierCurveTo(208.6, 290.1, 208.6, 288.0, 209.2, 287.7);
        vaulter.bezierCurveTo(209.7, 287.3, 211.5, 287.4, 212.4, 287.7);
        vaulter.bezierCurveTo(213.4, 288.0, 214.3, 289.0, 214.4, 289.6);
        vaulter.bezierCurveTo(214.6, 290.3, 213.3, 290.9, 212.7, 291.3);
        vaulter.bezierCurveTo(212.1, 291.7, 209.3, 291.3, 209.3, 291.3);
        vaulter.lineTo(208.6, 290.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(195.3, 297.4);
        vaulter.bezierCurveTo(195.5, 296.3, 195.7, 295.4, 196.1, 294.7);
        vaulter.bezierCurveTo(197.3, 292.2, 197.3, 276.5, 197.3, 276.5);
        vaulter.bezierCurveTo(197.5, 273.3, 192.7, 266.4, 192.7, 266.4);
        vaulter.bezierCurveTo(192.7, 266.4, 195.1, 261.6, 195.1, 260.3);
        vaulter.bezierCurveTo(195.1, 259.1, 194.6, 254.6, 194.6, 254.6);
        vaulter.bezierCurveTo(194.6, 254.6, 192.8, 249.4, 188.0, 249.7);
        vaulter.bezierCurveTo(183.2, 249.9, 181.8, 255.6, 181.9, 257.9);
        vaulter.bezierCurveTo(182.1, 260.3, 184.6, 265.8, 184.6, 265.8);
        vaulter.bezierCurveTo(184.6, 265.8, 185.1, 268.4, 182.8, 267.9);
        vaulter.bezierCurveTo(180.5, 267.3, 178.3, 278.9, 179.8, 283.3);
        vaulter.bezierCurveTo(181.3, 287.7, 181.0, 298.5, 181.0, 298.5);
        vaulter.bezierCurveTo(181.0, 302.4, 181.0, 306.0, 181.2, 307.3);
        vaulter.bezierCurveTo(181.5, 310.3, 182.3, 315.8, 182.3, 315.8);
        vaulter.bezierCurveTo(182.3, 315.8, 177.5, 319.9, 176.5, 321.9);
        vaulter.bezierCurveTo(175.5, 323.9, 168.4, 331.6, 168.4, 331.6);
        vaulter.bezierCurveTo(168.4, 331.6, 165.8, 332.4, 165.2, 333.2);
        vaulter.bezierCurveTo(164.6, 334.0, 164.1, 336.4, 166.4, 337.0);
        vaulter.bezierCurveTo(168.6, 337.6, 171.0, 342.9, 171.0, 342.9);
        vaulter.bezierCurveTo(171.0, 342.9, 172.6, 345.3, 176.1, 345.1);
        vaulter.bezierCurveTo(179.5, 344.9, 177.7, 342.7, 177.1, 342.5);
        vaulter.bezierCurveTo(177.1, 342.5, 174.7, 341.6, 174.3, 340.6);
        vaulter.bezierCurveTo(173.9, 339.7, 172.7, 336.9, 171.6, 334.8);
        vaulter.bezierCurveTo(171.6, 334.8, 185.2, 322.6, 187.3, 320.8);
        vaulter.bezierCurveTo(189.4, 319.1, 192.2, 317.1, 192.6, 314.2);
        vaulter.bezierCurveTo(192.9, 311.8, 194.9, 304.4, 195.3, 297.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.2, 286.2);
        vaulter.bezierCurveTo(180.2, 286.2, 186.4, 287.0, 187.4, 279.2);
        vaulter.bezierCurveTo(188.5, 271.4, 185.4, 268.7, 183.3, 268.5);
        vaulter.bezierCurveTo(181.3, 268.3, 177.8, 272.0, 177.8, 277.4);
        vaulter.bezierCurveTo(177.8, 282.7, 178.0, 284.4, 180.2, 286.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(182.8, 267.9);
        vaulter.bezierCurveTo(182.8, 267.9, 177.6, 267.3, 175.4, 270.9);
        vaulter.bezierCurveTo(175.4, 270.9, 168.3, 276.9, 167.8, 278.2);
        vaulter.bezierCurveTo(167.8, 278.2, 165.6, 280.4, 165.6, 281.4);
        vaulter.bezierCurveTo(165.6, 282.4, 167.1, 284.8, 169.2, 285.4);
        vaulter.bezierCurveTo(171.3, 286.0, 174.6, 287.9, 176.2, 288.3);
        vaulter.bezierCurveTo(177.9, 288.7, 178.3, 291.3, 178.1, 291.9);
        vaulter.bezierCurveTo(178.0, 292.4, 177.3, 294.1, 177.9, 294.9);
        vaulter.bezierCurveTo(178.4, 295.7, 180.6, 296.2, 181.4, 296.2);
        vaulter.bezierCurveTo(182.1, 296.2, 184.1, 294.2, 184.1, 294.2);
        vaulter.bezierCurveTo(184.6, 293.4, 183.4, 290.8, 182.8, 290.6);
        vaulter.bezierCurveTo(182.1, 290.4, 181.9, 288.8, 181.4, 288.5);
        vaulter.bezierCurveTo(180.8, 288.2, 174.1, 281.1, 173.3, 280.8);
        vaulter.bezierCurveTo(173.3, 280.8, 177.5, 278.3, 178.8, 276.1);
        vaulter.bezierCurveTo(178.8, 276.1, 180.5, 276.7, 183.2, 276.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(181.0, 297.6);
        vaulter.bezierCurveTo(181.0, 297.6, 180.3, 299.2, 180.2, 300.4);
        vaulter.bezierCurveTo(180.0, 301.6, 179.6, 304.7, 180.7, 306.8);
        vaulter.bezierCurveTo(182.4, 310.0, 186.4, 310.5, 190.2, 311.5);
        vaulter.bezierCurveTo(194.1, 312.5, 200.5, 314.1, 200.5, 314.1);
        vaulter.bezierCurveTo(194.3, 316.6, 192.4, 319.8, 185.3, 320.7);
        vaulter.bezierCurveTo(185.3, 320.7, 184.5, 320.5, 183.6, 320.7);
        vaulter.bezierCurveTo(182.7, 321.0, 181.8, 322.1, 181.8, 323.1);
        vaulter.bezierCurveTo(181.9, 324.1, 184.7, 326.3, 185.6, 327.8);
        vaulter.bezierCurveTo(186.4, 329.3, 189.6, 334.0, 190.7, 334.7);
        vaulter.bezierCurveTo(191.8, 335.5, 192.6, 335.9, 192.8, 335.0);
        vaulter.bezierCurveTo(193.1, 334.0, 191.1, 332.5, 191.1, 331.2);
        vaulter.bezierCurveTo(191.0, 327.1, 189.5, 324.1, 189.5, 324.1);
        vaulter.bezierCurveTo(189.5, 324.1, 194.4, 322.5, 200.1, 321.5);
        vaulter.bezierCurveTo(202.8, 321.1, 209.5, 317.8, 209.5, 317.8);
        vaulter.bezierCurveTo(210.6, 317.2, 212.1, 314.7, 212.0, 313.5);
        vaulter.bezierCurveTo(212.0, 311.6, 211.4, 311.3, 210.3, 310.0);
        vaulter.bezierCurveTo(208.9, 308.2, 206.7, 307.5, 204.4, 305.9);
        vaulter.bezierCurveTo(200.4, 303.2, 195.4, 300.4, 194.4, 299.8);
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
        vaulter.moveTo(180.7, 295.4);
        vaulter.bezierCurveTo(180.7, 295.4, 179.5, 310.6, 180.7, 314.4);
        vaulter.bezierCurveTo(180.7, 314.4, 171.8, 313.2, 163.4, 312.4);
        vaulter.bezierCurveTo(163.4, 312.4, 162.5, 311.4, 161.7, 311.4);
        vaulter.bezierCurveTo(161.0, 311.4, 159.8, 311.5, 159.5, 312.0);
        vaulter.bezierCurveTo(159.2, 312.4, 155.2, 316.7, 154.3, 317.2);
        vaulter.bezierCurveTo(153.4, 317.8, 151.9, 318.5, 151.7, 319.3);
        vaulter.bezierCurveTo(151.6, 320.0, 152.9, 320.8, 154.6, 320.6);
        vaulter.bezierCurveTo(156.3, 320.5, 159.3, 318.4, 161.4, 318.2);
        vaulter.bezierCurveTo(161.4, 318.2, 165.3, 317.5, 170.5, 318.6);
        vaulter.bezierCurveTo(175.6, 319.7, 179.0, 322.9, 182.0, 322.7);
        vaulter.bezierCurveTo(185.1, 322.6, 186.7, 320.9, 188.3, 317.2);
        vaulter.bezierCurveTo(189.8, 313.6, 191.6, 301.1, 191.6, 301.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(194.0, 275.6);
        vaulter.lineTo(195.6, 275.6);
        vaulter.bezierCurveTo(195.6, 275.6, 200.3, 283.6, 201.1, 284.3);
        vaulter.bezierCurveTo(202.0, 285.0, 202.5, 285.1, 204.8, 284.6);
        vaulter.bezierCurveTo(206.7, 284.4, 209.8, 280.1, 217.2, 276.8);
        vaulter.bezierCurveTo(217.2, 276.8, 218.0, 276.2, 217.4, 275.4);
        vaulter.bezierCurveTo(216.8, 274.7, 215.9, 274.9, 215.9, 274.9);
        vaulter.bezierCurveTo(215.9, 274.9, 210.4, 276.7, 208.4, 277.2);
        vaulter.bezierCurveTo(206.6, 277.6, 203.7, 278.8, 203.7, 278.8);
        vaulter.lineTo(198.6, 271.0);
        vaulter.bezierCurveTo(196.6, 267.4, 192.7, 266.1, 192.7, 266.1);
        vaulter.bezierCurveTo(192.7, 266.1, 189.4, 270.7, 194.0, 275.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(195.4, 302.4);
        vaulter.bezierCurveTo(194.5, 300.4, 194.5, 295.5, 195.8, 293.1);
        vaulter.bezierCurveTo(197.0, 290.7, 197.0, 275.5, 197.0, 275.5);
        vaulter.bezierCurveTo(197.1, 272.3, 192.4, 265.6, 192.4, 265.6);
        vaulter.bezierCurveTo(192.4, 265.6, 194.8, 260.9, 194.8, 259.7);
        vaulter.bezierCurveTo(194.8, 258.4, 194.3, 254.0, 194.3, 254.0);
        vaulter.bezierCurveTo(194.3, 254.0, 192.5, 249.0, 187.9, 249.2);
        vaulter.bezierCurveTo(183.2, 249.5, 181.8, 255.0, 181.9, 257.3);
        vaulter.bezierCurveTo(182.1, 259.6, 184.5, 265.0, 184.5, 265.0);
        vaulter.bezierCurveTo(184.5, 265.0, 185.0, 267.6, 182.8, 267.0);
        vaulter.bezierCurveTo(180.5, 266.5, 178.4, 277.7, 179.8, 282.0);
        vaulter.bezierCurveTo(181.3, 286.3, 181.1, 297.0, 181.1, 297.0);
        vaulter.bezierCurveTo(181.1, 297.0, 180.2, 298.8, 180.4, 301.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.8, 294.3);
        vaulter.bezierCurveTo(180.8, 294.3, 179.8, 301.2, 182.0, 303.6);
        vaulter.bezierCurveTo(185.5, 307.6, 190.0, 309.3, 196.7, 312.6);
        vaulter.bezierCurveTo(199.1, 313.8, 199.8, 312.7, 201.6, 318.2);
        vaulter.bezierCurveTo(203.3, 323.7, 207.4, 327.8, 210.4, 335.4);
        vaulter.bezierCurveTo(210.4, 335.4, 210.0, 337.6, 210.4, 338.2);
        vaulter.bezierCurveTo(210.9, 338.7, 212.4, 340.4, 213.8, 340.1);
        vaulter.bezierCurveTo(215.1, 339.8, 220.3, 338.6, 222.7, 338.2);
        vaulter.bezierCurveTo(225.2, 337.7, 225.6, 335.9, 225.6, 335.9);
        vaulter.bezierCurveTo(225.6, 335.9, 224.4, 334.3, 222.7, 334.6);
        vaulter.bezierCurveTo(221.1, 334.9, 214.5, 333.7, 214.5, 333.7);
        vaulter.bezierCurveTo(213.6, 333.4, 209.0, 318.7, 208.7, 313.3);
        vaulter.bezierCurveTo(208.4, 307.8, 205.2, 307.4, 204.3, 306.1);
        vaulter.bezierCurveTo(203.4, 304.7, 195.7, 297.1, 191.7, 294.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(180.3, 284.9);
        vaulter.bezierCurveTo(180.3, 284.9, 186.3, 285.7, 187.3, 278.1);
        vaulter.bezierCurveTo(188.3, 270.4, 185.3, 267.8, 183.3, 267.6);
        vaulter.bezierCurveTo(181.3, 267.4, 177.9, 271.0, 177.9, 276.3);
        vaulter.bezierCurveTo(177.9, 281.5, 178.1, 283.1, 180.3, 284.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(182.2, 267.2);
        vaulter.bezierCurveTo(182.2, 267.2, 176.7, 271.0, 176.4, 273.9);
        vaulter.bezierCurveTo(176.0, 276.9, 176.2, 287.7, 177.6, 289.5);
        vaulter.bezierCurveTo(178.0, 289.9, 178.3, 290.3, 178.7, 290.4);
        vaulter.bezierCurveTo(179.9, 290.9, 181.8, 289.7, 182.2, 288.5);
        vaulter.bezierCurveTo(182.5, 287.4, 182.2, 284.7, 182.2, 284.7);
        vaulter.bezierCurveTo(182.2, 284.7, 183.0, 280.5, 182.2, 277.3);
        vaulter.lineTo(183.8, 277.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(436.8, 290.8);
        vaulter.lineTo(275.2, 279.0);
        vaulter.bezierCurveTo(232.4, 276.0, 175.0, 276.7, 174.5, 276.7);
        vaulter.bezierCurveTo(174.5, 276.7, 173.3, 276.8, 173.3, 275.7);
        vaulter.bezierCurveTo(173.3, 274.6, 174.4, 274.7, 174.4, 274.7);
        vaulter.bezierCurveTo(175.0, 274.7, 232.4, 273.9, 275.3, 277.0);
        vaulter.lineTo(436.9, 288.8);
        vaulter.lineTo(436.8, 290.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(221.7, 275.8);
        vaulter.bezierCurveTo(221.7, 275.8, 219.2, 276.2, 218.8, 276.2);
        vaulter.bezierCurveTo(218.4, 276.1, 217.3, 275.7, 217.3, 275.7);
        vaulter.bezierCurveTo(217.3, 275.7, 217.0, 274.5, 217.3, 273.9);
        vaulter.bezierCurveTo(217.6, 273.3, 219.0, 273.0, 219.0, 273.0);
        vaulter.bezierCurveTo(219.0, 273.0, 220.7, 273.6, 221.2, 273.9);
        vaulter.bezierCurveTo(221.6, 274.2, 222.2, 275.4, 221.7, 275.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(178.7, 290.4);
        vaulter.bezierCurveTo(180.0, 291.2, 181.4, 291.2, 182.2, 290.4);
        vaulter.bezierCurveTo(183.1, 289.5, 186.0, 285.6, 187.1, 282.9);
        vaulter.bezierCurveTo(188.3, 280.2, 190.8, 279.9, 191.4, 277.8);
        vaulter.bezierCurveTo(191.9, 275.7, 191.1, 274.9, 190.5, 274.5);
        vaulter.bezierCurveTo(190.5, 274.5, 189.9, 273.8, 189.1, 273.5);
        vaulter.bezierCurveTo(188.3, 273.2, 186.8, 273.5, 186.3, 273.8);
        vaulter.bezierCurveTo(185.8, 274.1, 185.6, 275.2, 185.7, 275.8);
        vaulter.bezierCurveTo(185.8, 276.3, 184.9, 277.8, 184.7, 279.1);
        vaulter.bezierCurveTo(184.4, 280.3, 182.6, 281.5, 181.4, 283.1);
        vaulter.bezierCurveTo(180.7, 284.0, 179.9, 285.1, 179.2, 286.3);
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
        vaulter.moveTo(194.4, 295.2);
        vaulter.bezierCurveTo(194.4, 295.2, 200.8, 307.6, 201.4, 309.8);
        vaulter.bezierCurveTo(202.0, 311.9, 203.4, 317.0, 201.4, 319.0);
        vaulter.bezierCurveTo(199.4, 321.0, 195.2, 321.2, 195.2, 321.2);
        vaulter.bezierCurveTo(195.2, 321.2, 189.8, 316.0, 181.5, 314.4);
        vaulter.bezierCurveTo(173.1, 312.8, 169.9, 313.9, 169.9, 313.9);
        vaulter.bezierCurveTo(169.9, 313.9, 167.3, 314.8, 166.6, 313.9);
        vaulter.bezierCurveTo(165.9, 313.1, 167.0, 310.9, 168.3, 310.5);
        vaulter.bezierCurveTo(169.6, 310.0, 174.5, 310.2, 175.3, 309.3);
        vaulter.bezierCurveTo(176.0, 308.5, 178.3, 308.1, 179.4, 308.2);
        vaulter.bezierCurveTo(180.6, 308.3, 182.7, 310.3, 184.4, 310.8);
        vaulter.bezierCurveTo(186.1, 311.2, 194.1, 311.6, 194.1, 311.6);
        vaulter.bezierCurveTo(194.1, 311.6, 182.6, 308.4, 180.9, 298.4);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(191.6, 264.7);
        vaulter.bezierCurveTo(191.6, 264.7, 194.3, 264.7, 196.5, 266.7);
        vaulter.bezierCurveTo(198.7, 268.8, 199.8, 271.4, 199.8, 271.4);
        vaulter.lineTo(204.9, 274.7);
        vaulter.bezierCurveTo(204.9, 274.7, 211.6, 273.3, 215.9, 271.6);
        vaulter.lineTo(222.5, 272.5);
        vaulter.bezierCurveTo(217.6, 273.2, 207.7, 279.8, 204.9, 280.1);
        vaulter.bezierCurveTo(202.1, 280.4, 197.0, 275.5, 197.0, 275.5);
        vaulter.lineTo(195.8, 274.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(195.7, 300.6);
        vaulter.bezierCurveTo(194.9, 298.6, 194.9, 293.6, 196.1, 291.2);
        vaulter.bezierCurveTo(197.3, 288.7, 197.3, 273.1, 197.3, 273.1);
        vaulter.bezierCurveTo(197.5, 269.8, 192.7, 262.9, 192.7, 262.9);
        vaulter.bezierCurveTo(192.7, 262.9, 195.1, 258.1, 195.1, 256.9);
        vaulter.bezierCurveTo(195.1, 255.6, 194.6, 251.1, 194.6, 251.1);
        vaulter.bezierCurveTo(194.6, 251.1, 192.8, 245.9, 188.0, 246.2);
        vaulter.bezierCurveTo(183.2, 246.5, 181.8, 252.1, 181.9, 254.5);
        vaulter.bezierCurveTo(182.1, 256.8, 184.6, 262.4, 184.6, 262.4);
        vaulter.bezierCurveTo(184.6, 262.4, 184.9, 263.5, 182.8, 264.7);
        vaulter.bezierCurveTo(180.0, 266.1, 178.3, 275.4, 179.8, 279.8);
        vaulter.bezierCurveTo(181.3, 284.2, 181.0, 295.1, 181.0, 295.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(181.0, 295.1);
        vaulter.bezierCurveTo(181.0, 295.1, 179.7, 300.4, 183.8, 304.8);
        vaulter.bezierCurveTo(187.9, 309.1, 197.1, 313.0, 197.1, 313.0);
        vaulter.bezierCurveTo(197.1, 313.0, 196.6, 318.8, 197.9, 323.2);
        vaulter.bezierCurveTo(199.1, 327.5, 200.0, 331.6, 200.3, 336.3);
        vaulter.bezierCurveTo(200.3, 336.3, 199.0, 338.4, 199.1, 339.3);
        vaulter.bezierCurveTo(199.2, 340.2, 200.0, 341.9, 201.6, 342.1);
        vaulter.bezierCurveTo(203.2, 342.4, 205.8, 343.6, 206.6, 344.2);
        vaulter.bezierCurveTo(207.4, 344.8, 210.1, 345.3, 211.1, 345.0);
        vaulter.bezierCurveTo(212.2, 344.7, 213.4, 343.4, 212.8, 342.9);
        vaulter.bezierCurveTo(212.3, 342.5, 211.2, 341.0, 209.8, 340.5);
        vaulter.bezierCurveTo(208.3, 340.1, 204.4, 337.8, 204.3, 336.2);
        vaulter.bezierCurveTo(204.2, 334.6, 203.5, 324.1, 204.4, 320.5);
        vaulter.bezierCurveTo(205.3, 317.0, 206.4, 311.6, 205.8, 309.5);
        vaulter.bezierCurveTo(205.1, 307.3, 202.8, 304.0, 202.8, 304.0);
        vaulter.lineTo(193.5, 294.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(183.2, 283.0);
        vaulter.bezierCurveTo(183.2, 283.0, 189.4, 282.8, 189.1, 274.9);
        vaulter.bezierCurveTo(188.8, 267.0, 185.3, 264.9, 183.2, 265.1);
        vaulter.bezierCurveTo(181.2, 265.2, 178.3, 269.5, 179.2, 274.7);
        vaulter.bezierCurveTo(180.2, 280.0, 180.6, 281.6, 183.2, 283.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(186.4, 274.4);
        vaulter.lineTo(184.9, 274.9);
        vaulter.bezierCurveTo(186.7, 277.7, 187.1, 281.9, 187.1, 281.9);
        vaulter.bezierCurveTo(187.1, 281.9, 188.3, 284.3, 188.3, 285.5);
        vaulter.bezierCurveTo(188.3, 286.7, 186.9, 288.5, 185.7, 288.4);
        vaulter.bezierCurveTo(185.2, 288.3, 184.8, 288.1, 184.3, 287.8);
        vaulter.bezierCurveTo(182.4, 286.6, 178.9, 276.4, 178.3, 273.5);
        vaulter.bezierCurveTo(177.8, 270.7, 181.7, 265.3, 181.7, 265.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(441.6, 293.8);
        vaulter.bezierCurveTo(441.2, 293.7, 338.5, 283.6, 285.0, 277.1);
        vaulter.bezierCurveTo(231.6, 270.6, 179.3, 273.0, 178.9, 273.0);
        vaulter.bezierCurveTo(178.9, 273.0, 177.8, 273.1, 177.8, 272.1);
        vaulter.bezierCurveTo(177.7, 271.0, 178.8, 271.0, 178.8, 271.0);
        vaulter.bezierCurveTo(179.2, 271.0, 231.7, 268.6, 285.3, 275.1);
        vaulter.bezierCurveTo(338.8, 281.6, 441.4, 291.7, 441.8, 291.8);
        vaulter.lineTo(441.6, 293.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(185.6, 288.0);
        vaulter.bezierCurveTo(187.0, 288.6, 188.4, 288.3, 189.0, 287.4);
        vaulter.bezierCurveTo(189.8, 286.3, 191.9, 282.1, 192.7, 279.3);
        vaulter.bezierCurveTo(193.4, 276.4, 195.7, 275.8, 196.0, 273.6);
        vaulter.bezierCurveTo(196.2, 271.4, 195.3, 270.8, 194.6, 270.5);
        vaulter.bezierCurveTo(194.6, 270.5, 193.9, 269.9, 193.1, 269.7);
        vaulter.bezierCurveTo(192.3, 269.6, 190.9, 270.1, 190.4, 270.5);
        vaulter.bezierCurveTo(190.0, 270.8, 189.9, 271.9, 190.1, 272.5);
        vaulter.bezierCurveTo(190.3, 273.1, 189.6, 274.6, 189.6, 275.9);
        vaulter.bezierCurveTo(189.6, 277.2, 188.0, 278.6, 187.1, 280.4);
        vaulter.bezierCurveTo(185.7, 282.8, 183.8, 286.7, 185.6, 288.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(221.9, 269.3);
        vaulter.bezierCurveTo(221.9, 269.3, 224.4, 268.9, 224.8, 269.0);
        vaulter.bezierCurveTo(225.3, 269.0, 226.3, 269.5, 226.3, 269.5);
        vaulter.bezierCurveTo(226.3, 269.5, 226.7, 270.7, 226.4, 271.3);
        vaulter.bezierCurveTo(226.1, 272.0, 224.6, 272.2, 224.6, 272.2);
        vaulter.bezierCurveTo(224.6, 272.2, 222.9, 271.6, 222.4, 271.3);
        vaulter.bezierCurveTo(221.9, 271.0, 221.4, 269.7, 221.9, 269.3);
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
        vaulter.moveTo(195.3, 292.3);
        vaulter.bezierCurveTo(195.3, 292.3, 208.5, 304.7, 208.0, 308.1);
        vaulter.bezierCurveTo(207.5, 311.4, 201.4, 314.8, 199.6, 314.9);
        vaulter.bezierCurveTo(197.8, 315.0, 181.4, 315.7, 179.9, 316.2);
        vaulter.bezierCurveTo(177.1, 316.9, 175.0, 319.2, 174.8, 320.1);
        vaulter.bezierCurveTo(174.7, 321.0, 173.6, 326.1, 173.2, 327.0);
        vaulter.bezierCurveTo(173.1, 327.4, 173.1, 328.2, 172.8, 328.7);
        vaulter.bezierCurveTo(172.5, 329.1, 171.9, 329.5, 171.4, 329.2);
        vaulter.bezierCurveTo(170.9, 328.8, 170.0, 322.5, 170.9, 319.9);
        vaulter.bezierCurveTo(171.7, 317.3, 171.1, 315.7, 171.1, 315.7);
        vaulter.bezierCurveTo(171.1, 315.7, 172.2, 313.7, 173.0, 314.0);
        vaulter.bezierCurveTo(173.8, 314.2, 175.3, 313.9, 175.9, 313.6);
        vaulter.bezierCurveTo(176.5, 313.3, 184.1, 307.2, 188.9, 307.5);
        vaulter.lineTo(193.1, 307.4);
        vaulter.bezierCurveTo(190.4, 305.9, 185.7, 302.7, 183.8, 297.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(192.7, 261.4);
        vaulter.bezierCurveTo(192.7, 261.4, 196.8, 261.1, 198.0, 262.6);
        vaulter.bezierCurveTo(199.2, 264.1, 199.9, 264.9, 199.9, 264.9);
        vaulter.bezierCurveTo(199.9, 264.9, 205.6, 267.3, 206.2, 268.5);
        vaulter.bezierCurveTo(211.1, 267.8, 217.2, 266.0, 220.1, 264.9);
        vaulter.bezierCurveTo(220.1, 264.9, 225.9, 265.2, 224.8, 266.9);
        vaulter.bezierCurveTo(218.4, 269.1, 212.9, 273.4, 206.6, 274.5);
        vaulter.bezierCurveTo(206.6, 274.5, 206.6, 274.5, 204.7, 274.0);
        vaulter.bezierCurveTo(202.8, 273.6, 197.0, 269.1, 197.0, 269.1);
        vaulter.lineTo(195.3, 268.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(195.1, 293.5);
        vaulter.bezierCurveTo(195.2, 291.9, 195.5, 290.3, 196.1, 289.3);
        vaulter.bezierCurveTo(197.3, 286.8, 197.3, 271.2, 197.3, 271.2);
        vaulter.bezierCurveTo(197.5, 267.9, 192.7, 261.0, 192.7, 261.0);
        vaulter.bezierCurveTo(192.7, 261.0, 195.1, 256.2, 195.1, 255.0);
        vaulter.bezierCurveTo(195.1, 253.7, 194.6, 249.2, 194.6, 249.2);
        vaulter.bezierCurveTo(194.6, 249.2, 192.8, 244.0, 188.0, 244.3);
        vaulter.bezierCurveTo(183.2, 244.5, 181.8, 250.2, 181.9, 252.6);
        vaulter.bezierCurveTo(182.1, 254.9, 184.6, 260.5, 184.6, 260.5);
        vaulter.bezierCurveTo(184.6, 260.5, 184.9, 261.9, 182.7, 262.9);
        vaulter.bezierCurveTo(180.7, 263.9, 178.3, 273.5, 179.8, 277.9);
        vaulter.bezierCurveTo(181.3, 282.3, 181.0, 293.2, 181.0, 293.2);
        vaulter.bezierCurveTo(181.0, 293.2, 180.0, 295.1, 180.2, 297.4);
        vaulter.bezierCurveTo(180.2, 298.2, 180.5, 299.3, 180.6, 300.1);
        vaulter.bezierCurveTo(181.1, 302.9, 185.7, 309.1, 189.5, 316.9);
        vaulter.bezierCurveTo(186.3, 325.8, 188.9, 328.7, 184.6, 337.8);
        vaulter.bezierCurveTo(184.6, 337.8, 183.3, 338.0, 182.9, 339.1);
        vaulter.bezierCurveTo(182.4, 340.2, 183.6, 341.3, 183.6, 341.3);
        vaulter.bezierCurveTo(183.6, 341.3, 190.2, 344.6, 193.1, 345.0);
        vaulter.bezierCurveTo(196.1, 345.4, 196.0, 344.5, 195.2, 343.3);
        vaulter.bezierCurveTo(194.8, 342.7, 193.8, 342.3, 192.6, 341.5);
        vaulter.bezierCurveTo(191.3, 340.7, 188.3, 338.0, 188.3, 338.0);
        vaulter.bezierCurveTo(190.8, 330.5, 195.0, 325.1, 197.3, 319.3);
        vaulter.bezierCurveTo(197.3, 319.3, 200.4, 314.9, 198.6, 310.7);
        vaulter.bezierCurveTo(196.8, 306.5, 194.5, 295.5, 194.5, 295.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(183.2, 281.1);
        vaulter.bezierCurveTo(183.2, 281.1, 189.4, 280.9, 189.1, 273.0);
        vaulter.bezierCurveTo(188.8, 265.1, 185.3, 263.0, 183.2, 263.2);
        vaulter.bezierCurveTo(181.2, 263.3, 178.3, 267.5, 179.2, 272.8);
        vaulter.bezierCurveTo(180.2, 278.1, 180.6, 279.7, 183.2, 281.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(185.6, 268.6);
        vaulter.bezierCurveTo(185.6, 268.6, 187.3, 269.2, 188.4, 270.4);
        vaulter.bezierCurveTo(190.1, 272.0, 190.8, 274.0, 190.8, 274.0);
        vaulter.bezierCurveTo(190.8, 274.0, 193.2, 276.0, 194.1, 277.1);
        vaulter.bezierCurveTo(194.9, 278.2, 196.2, 280.6, 194.7, 280.9);
        vaulter.bezierCurveTo(192.8, 281.5, 189.0, 279.5, 185.3, 277.3);
        vaulter.bezierCurveTo(181.5, 275.2, 178.3, 271.6, 178.3, 268.5);
        vaulter.bezierCurveTo(178.3, 265.3, 182.1, 263.9, 182.1, 263.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(439.9, 300.7);
        vaulter.lineTo(285.1, 275.0);
        vaulter.bezierCurveTo(229.2, 265.9, 179.4, 260.6, 179.0, 260.6);
        vaulter.bezierCurveTo(179.0, 260.6, 177.6, 260.4, 177.8, 259.4);
        vaulter.bezierCurveTo(177.9, 258.4, 179.2, 258.6, 179.2, 258.6);
        vaulter.bezierCurveTo(179.6, 258.6, 229.4, 263.9, 285.5, 273.0);
        vaulter.lineTo(440.3, 298.7);
        vaulter.lineTo(439.9, 300.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(193.2, 281.0);
        vaulter.bezierCurveTo(193.7, 281.2, 194.1, 281.2, 194.7, 280.9);
        vaulter.bezierCurveTo(197.5, 279.4, 195.2, 270.5, 194.7, 263.9);
        vaulter.bezierCurveTo(194.6, 262.9, 195.5, 262.4, 196.3, 261.7);
        vaulter.bezierCurveTo(197.2, 260.9, 196.3, 259.7, 196.3, 259.7);
        vaulter.lineTo(195.5, 259.7);
        vaulter.bezierCurveTo(195.5, 259.7, 194.1, 258.6, 193.6, 258.4);
        vaulter.bezierCurveTo(193.1, 258.2, 191.7, 258.4, 191.6, 258.6);
        vaulter.bezierCurveTo(191.5, 258.8, 190.6, 257.9, 190.1, 258.0);
        vaulter.bezierCurveTo(189.6, 258.0, 188.5, 260.6, 188.8, 261.4);
        vaulter.bezierCurveTo(189.1, 262.3, 190.8, 263.4, 190.8, 263.4);
        vaulter.bezierCurveTo(190.8, 263.4, 191.6, 268.7, 191.3, 270.7);
        vaulter.bezierCurveTo(191.0, 272.8, 190.6, 274.2, 190.8, 275.2);
        vaulter.bezierCurveTo(190.8, 275.6, 190.9, 276.3, 191.1, 277.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(224.5, 263.9);
        vaulter.bezierCurveTo(224.0, 264.2, 224.5, 264.9, 224.9, 265.1);
        vaulter.bezierCurveTo(225.4, 265.4, 226.7, 266.0, 227.4, 266.0);
        vaulter.bezierCurveTo(228.1, 266.0, 230.6, 265.5, 230.3, 264.9);
        vaulter.bezierCurveTo(230.1, 264.4, 227.5, 263.6, 226.7, 263.5);
        vaulter.bezierCurveTo(225.9, 263.5, 224.5, 263.9, 224.5, 263.9);
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
        vaulter.moveTo(426.8, 339.7);
        vaulter.lineTo(179.0, 241.1);
        vaulter.bezierCurveTo(179.0, 241.1, 177.7, 240.7, 178.1, 239.7);
        vaulter.bezierCurveTo(178.6, 238.7, 179.7, 239.2, 179.7, 239.2);
        vaulter.lineTo(427.6, 337.8);
        vaulter.lineTo(426.8, 339.7);
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
        vaulter.moveTo(190.5, 303.5);
        vaulter.bezierCurveTo(190.5, 303.5, 199.6, 313.9, 208.9, 316.0);
        vaulter.bezierCurveTo(210.2, 320.3, 210.1, 321.4, 210.9, 323.7);
        vaulter.bezierCurveTo(211.7, 326.0, 216.9, 330.0, 218.5, 336.1);
        vaulter.lineTo(219.2, 338.8);
        vaulter.bezierCurveTo(219.2, 338.8, 219.1, 340.3, 219.2, 341.4);
        vaulter.bezierCurveTo(219.4, 342.4, 220.7, 343.6, 222.1, 343.5);
        vaulter.bezierCurveTo(223.4, 343.3, 230.7, 343.0, 232.5, 343.5);
        vaulter.bezierCurveTo(234.3, 343.9, 235.8, 343.0, 236.0, 342.4);
        vaulter.bezierCurveTo(236.1, 341.8, 234.3, 339.7, 233.1, 339.7);
        vaulter.bezierCurveTo(231.9, 339.7, 226.8, 337.6, 225.1, 337.0);
        vaulter.bezierCurveTo(223.4, 336.4, 222.2, 334.0, 222.2, 334.0);
        vaulter.bezierCurveTo(222.2, 334.0, 220.0, 322.8, 218.2, 317.2);
        vaulter.bezierCurveTo(217.7, 315.7, 216.6, 314.3, 216.3, 313.9);
        vaulter.bezierCurveTo(216.1, 313.5, 214.4, 310.9, 213.7, 310.0);
        vaulter.bezierCurveTo(211.1, 306.0, 206.4, 299.6, 197.5, 294.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(191.7, 272.8);
        vaulter.bezierCurveTo(191.7, 272.8, 198.7, 272.4, 200.3, 271.9);
        vaulter.bezierCurveTo(201.9, 271.5, 207.9, 270.1, 210.5, 268.6);
        vaulter.bezierCurveTo(213.0, 267.1, 218.9, 261.2, 222.7, 259.8);
        vaulter.lineTo(225.9, 258.4);
        vaulter.lineTo(221.5, 257.0);
        vaulter.bezierCurveTo(221.5, 257.0, 215.0, 260.3, 213.3, 261.4);
        vaulter.bezierCurveTo(211.5, 262.4, 208.5, 264.9, 208.5, 264.9);
        vaulter.bezierCurveTo(208.5, 264.9, 198.2, 265.7, 197.1, 265.4);
        vaulter.bezierCurveTo(196.0, 265.2, 192.0, 264.9, 192.0, 264.9);
        vaulter.bezierCurveTo(192.0, 264.9, 188.4, 264.4, 187.0, 265.2);
        vaulter.bezierCurveTo(185.6, 266.1, 184.6, 269.6, 186.3, 271.6);
        vaulter.bezierCurveTo(188.0, 273.6, 191.7, 272.8, 191.7, 272.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(192.7, 265.3);
        vaulter.bezierCurveTo(192.7, 265.3, 195.1, 260.5, 195.1, 259.3);
        vaulter.bezierCurveTo(195.1, 258.0, 194.6, 253.5, 194.6, 253.5);
        vaulter.bezierCurveTo(194.6, 253.5, 192.8, 248.3, 188.0, 248.6);
        vaulter.bezierCurveTo(183.2, 248.9, 181.8, 254.5, 181.9, 256.9);
        vaulter.bezierCurveTo(182.1, 259.2, 184.6, 264.8, 184.6, 264.8);
        vaulter.bezierCurveTo(184.6, 264.8, 184.9, 266.4, 183.9, 266.8);
        vaulter.bezierCurveTo(183.1, 267.2, 182.9, 267.6, 182.9, 267.6);
        vaulter.bezierCurveTo(181.7, 271.3, 181.8, 273.2, 181.9, 276.3);
        vaulter.bezierCurveTo(182.0, 279.4, 185.2, 283.8, 185.2, 283.8);
        vaulter.bezierCurveTo(185.2, 283.8, 189.5, 291.1, 188.4, 294.8);
        vaulter.bezierCurveTo(186.9, 299.7, 187.7, 305.3, 187.7, 305.3);
        vaulter.lineTo(181.8, 321.4);
        vaulter.bezierCurveTo(179.4, 320.5, 170.5, 322.3, 167.9, 322.9);
        vaulter.bezierCurveTo(165.3, 323.5, 162.8, 321.4, 162.8, 321.4);
        vaulter.bezierCurveTo(162.8, 321.4, 160.2, 320.4, 159.3, 322.3);
        vaulter.bezierCurveTo(158.4, 324.3, 154.0, 328.7, 152.8, 329.9);
        vaulter.bezierCurveTo(151.6, 331.1, 150.2, 333.2, 150.2, 333.7);
        vaulter.bezierCurveTo(150.2, 334.1, 151.7, 334.1, 152.5, 333.7);
        vaulter.bezierCurveTo(153.2, 333.2, 154.8, 331.7, 157.0, 331.1);
        vaulter.bezierCurveTo(159.3, 330.5, 162.5, 328.2, 162.5, 328.2);
        vaulter.bezierCurveTo(169.7, 327.0, 183.4, 328.2, 185.2, 327.3);
        vaulter.bezierCurveTo(187.1, 326.4, 196.7, 314.6, 199.0, 306.3);
        vaulter.bezierCurveTo(201.2, 298.0, 199.9, 284.9, 199.9, 284.9);
        vaulter.bezierCurveTo(198.9, 274.0, 191.3, 266.9, 191.3, 266.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(187.9, 284.2);
        vaulter.bezierCurveTo(187.9, 284.2, 194.1, 283.1, 192.7, 275.3);
        vaulter.bezierCurveTo(191.2, 267.6, 187.5, 266.0, 185.5, 266.4);
        vaulter.bezierCurveTo(183.4, 266.8, 181.2, 271.4, 182.9, 276.5);
        vaulter.bezierCurveTo(184.5, 281.6, 185.2, 283.1, 187.9, 284.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(223.7, 255.7);
        vaulter.lineTo(222.9, 257.0);
        vaulter.bezierCurveTo(222.9, 257.0, 222.9, 258.3, 223.3, 258.4);
        vaulter.bezierCurveTo(223.7, 258.6, 226.3, 259.2, 226.3, 259.2);
        vaulter.lineTo(227.6, 257.5);
        vaulter.bezierCurveTo(227.6, 257.5, 225.7, 256.0, 225.2, 255.7);
        vaulter.bezierCurveTo(224.8, 255.4, 223.7, 255.7, 223.7, 255.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(181.9, 271.4);
        vaulter.bezierCurveTo(181.9, 271.4, 182.4, 269.2, 183.4, 268.1);
        vaulter.bezierCurveTo(184.4, 266.9, 186.0, 266.3, 187.0, 266.3);
        vaulter.lineTo(192.5, 261.3);
        vaulter.bezierCurveTo(192.5, 261.3, 192.8, 257.4, 193.3, 256.7);
        vaulter.bezierCurveTo(193.8, 256.0, 193.3, 251.4, 193.3, 251.4);
        vaulter.bezierCurveTo(193.3, 251.4, 191.1, 248.7, 191.0, 247.6);
        vaulter.bezierCurveTo(190.9, 246.5, 191.2, 243.7, 191.8, 243.2);
        vaulter.bezierCurveTo(192.4, 242.7, 194.2, 243.2, 194.2, 243.2);
        vaulter.bezierCurveTo(194.2, 243.2, 196.2, 245.6, 196.5, 247.0);
        vaulter.bezierCurveTo(196.8, 248.4, 196.5, 252.1, 196.5, 252.1);
        vaulter.lineTo(196.7, 259.6);
        vaulter.bezierCurveTo(196.7, 259.6, 197.6, 262.9, 196.7, 264.3);
        vaulter.bezierCurveTo(195.7, 265.7, 190.5, 270.9, 190.5, 270.9);
        vaulter.bezierCurveTo(190.5, 270.9, 190.4, 272.8, 189.0, 273.9);
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
        vaulter.moveTo(207.2, 290.8);
        vaulter.bezierCurveTo(208.3, 294.9, 214.4, 306.7, 216.5, 308.5);
        vaulter.bezierCurveTo(218.5, 310.3, 218.7, 314.3, 218.7, 314.3);
        vaulter.bezierCurveTo(218.5, 317.9, 221.9, 332.4, 222.1, 333.8);
        vaulter.bezierCurveTo(222.3, 335.2, 223.3, 338.9, 223.3, 338.9);
        vaulter.bezierCurveTo(224.9, 338.5, 229.0, 341.5, 231.7, 341.7);
        vaulter.bezierCurveTo(232.8, 341.7, 233.4, 343.9, 232.1, 344.1);
        vaulter.bezierCurveTo(232.1, 344.1, 223.3, 345.1, 222.1, 345.1);
        vaulter.bezierCurveTo(220.9, 345.1, 218.7, 344.1, 218.5, 342.9);
        vaulter.bezierCurveTo(218.3, 341.7, 219.3, 339.5, 219.3, 339.5);
        vaulter.bezierCurveTo(218.3, 336.1, 214.6, 327.8, 213.4, 325.8);
        vaulter.bezierCurveTo(212.2, 323.8, 212.2, 315.7, 212.2, 315.7);
        vaulter.bezierCurveTo(203.2, 309.3, 198.8, 300.2, 198.8, 300.2);
        vaulter.bezierCurveTo(197.7, 296.1, 200.1, 292.5, 201.1, 290.8);
        vaulter.bezierCurveTo(202.1, 289.1, 206.6, 288.7, 207.2, 290.8);
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
        vaulter.moveTo(202.0, 265.9);
        vaulter.lineTo(211.9, 263.9);
        vaulter.bezierCurveTo(211.9, 263.9, 213.9, 263.7, 215.1, 263.0);
        vaulter.bezierCurveTo(216.4, 262.3, 217.5, 261.0, 218.6, 259.9);
        vaulter.bezierCurveTo(221.2, 257.1, 223.1, 253.0, 224.7, 252.2);
        vaulter.bezierCurveTo(226.3, 251.5, 229.6, 250.0, 229.6, 250.0);
        vaulter.bezierCurveTo(229.6, 250.0, 229.6, 249.3, 228.1, 248.1);
        vaulter.bezierCurveTo(226.6, 246.9, 225.8, 246.8, 225.8, 246.8);
        vaulter.bezierCurveTo(225.8, 246.8, 223.3, 249.6, 222.5, 250.2);
        vaulter.bezierCurveTo(221.7, 250.9, 216.1, 255.1, 214.0, 258.1);
        vaulter.lineTo(200.6, 259.2);
        vaulter.bezierCurveTo(198.7, 259.5, 196.3, 261.1, 196.5, 262.9);
        vaulter.bezierCurveTo(196.6, 264.8, 198.4, 267.1, 202.0, 265.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(424.8, 345.1);
        vaulter.lineTo(187.8, 229.4);
        vaulter.bezierCurveTo(187.8, 229.4, 186.8, 228.8, 187.3, 228.0);
        vaulter.bezierCurveTo(187.7, 227.2, 188.7, 227.6, 188.7, 227.6);
        vaulter.lineTo(425.7, 343.3);
        vaulter.lineTo(424.8, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(201.2, 261.3);
        vaulter.bezierCurveTo(201.2, 261.3, 203.7, 256.5, 203.7, 255.3);
        vaulter.bezierCurveTo(203.7, 254.0, 203.2, 249.5, 203.2, 249.5);
        vaulter.bezierCurveTo(203.2, 249.5, 201.4, 244.3, 196.6, 244.6);
        vaulter.bezierCurveTo(191.8, 244.9, 190.4, 250.6, 190.5, 252.9);
        vaulter.bezierCurveTo(190.7, 255.2, 193.1, 260.8, 193.1, 260.8);
        vaulter.bezierCurveTo(193.1, 260.8, 193.4, 261.9, 192.9, 262.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(207.2, 290.8);
        vaulter.bezierCurveTo(206.6, 286.5, 205.0, 266.0, 205.0, 266.0);
        vaulter.bezierCurveTo(205.0, 266.0, 200.3, 258.6, 192.9, 262.2);
        vaulter.bezierCurveTo(191.8, 262.7, 190.1, 264.8, 190.5, 269.4);
        vaulter.bezierCurveTo(190.9, 274.1, 193.9, 277.3, 194.5, 280.1);
        vaulter.bezierCurveTo(195.1, 282.9, 194.9, 291.6, 194.9, 296.0);
        vaulter.bezierCurveTo(194.9, 296.0, 198.9, 301.3, 203.0, 300.7);
        vaulter.bezierCurveTo(207.0, 300.1, 207.2, 290.8, 207.2, 290.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(227.4, 245.6);
        vaulter.lineTo(227.4, 246.8);
        vaulter.bezierCurveTo(227.4, 246.8, 228.1, 248.5, 229.0, 248.9);
        vaulter.bezierCurveTo(229.8, 249.3, 230.7, 248.9, 231.0, 248.8);
        vaulter.bezierCurveTo(231.2, 248.7, 231.8, 247.2, 231.8, 247.2);
        vaulter.lineTo(230.6, 246.4);
        vaulter.lineTo(230.2, 245.3);
        vaulter.lineTo(228.8, 245.0);
        vaulter.lineTo(227.4, 245.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(207.2, 292.8);
        vaulter.bezierCurveTo(207.2, 292.8, 206.8, 319.5, 205.8, 322.0);
        vaulter.bezierCurveTo(204.8, 324.4, 200.7, 324.4, 198.5, 324.4);
        vaulter.bezierCurveTo(196.3, 324.4, 189.9, 320.4, 187.1, 319.5);
        vaulter.bezierCurveTo(184.2, 318.7, 179.2, 317.3, 178.0, 317.3);
        vaulter.bezierCurveTo(178.0, 317.3, 172.4, 316.7, 170.6, 316.7);
        vaulter.bezierCurveTo(168.7, 316.7, 165.5, 318.1, 164.7, 317.5);
        vaulter.bezierCurveTo(163.9, 316.9, 165.3, 315.1, 166.1, 314.7);
        vaulter.bezierCurveTo(166.9, 314.3, 175.0, 312.1, 175.4, 311.3);
        vaulter.bezierCurveTo(175.8, 310.5, 181.2, 307.9, 182.0, 308.6);
        vaulter.bezierCurveTo(182.8, 309.3, 184.0, 310.9, 183.8, 312.5);
        vaulter.bezierCurveTo(183.6, 314.1, 192.1, 315.7, 192.1, 315.7);
        vaulter.bezierCurveTo(192.1, 315.7, 197.5, 315.1, 198.5, 315.5);
        vaulter.bezierCurveTo(198.5, 315.5, 194.9, 300.4, 194.9, 296.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(196.5, 280.2);
        vaulter.bezierCurveTo(196.5, 280.2, 202.6, 279.1, 201.2, 271.3);
        vaulter.bezierCurveTo(199.8, 263.6, 196.1, 262.0, 194.1, 262.4);
        vaulter.bezierCurveTo(192.0, 262.8, 189.8, 267.4, 191.5, 272.5);
        vaulter.bezierCurveTo(193.1, 277.6, 193.8, 279.1, 196.5, 280.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(191.6, 270.1);
        vaulter.bezierCurveTo(191.6, 270.1, 190.2, 265.8, 193.4, 261.4);
        vaulter.bezierCurveTo(196.6, 257.0, 198.8, 253.1, 198.8, 253.1);
        vaulter.bezierCurveTo(198.8, 253.1, 199.5, 241.8, 198.8, 239.3);
        vaulter.bezierCurveTo(198.1, 236.9, 197.2, 233.2, 197.8, 232.0);
        vaulter.bezierCurveTo(198.4, 230.7, 199.0, 231.8, 199.7, 231.8);
        vaulter.bezierCurveTo(200.3, 231.8, 202.9, 233.0, 203.4, 234.1);
        vaulter.bezierCurveTo(203.8, 235.1, 204.1, 237.2, 203.4, 238.6);
        vaulter.bezierCurveTo(202.6, 240.0, 202.9, 245.2, 203.3, 246.8);
        vaulter.bezierCurveTo(203.6, 248.2, 205.0, 251.6, 204.5, 253.7);
        vaulter.bezierCurveTo(204.0, 255.5, 198.8, 268.1, 198.8, 268.1);
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
        vaulter.moveTo(206.6, 259.3);
        vaulter.lineTo(216.0, 255.7);
        vaulter.bezierCurveTo(216.0, 255.7, 217.9, 255.2, 219.0, 254.2);
        vaulter.bezierCurveTo(220.1, 253.3, 221.1, 251.9, 222.0, 250.6);
        vaulter.bezierCurveTo(224.0, 247.4, 225.1, 243.0, 226.6, 242.0);
        vaulter.bezierCurveTo(228.0, 241.0, 231.1, 239.0, 231.1, 239.0);
        vaulter.bezierCurveTo(231.1, 239.0, 230.9, 238.3, 229.3, 237.4);
        vaulter.bezierCurveTo(227.6, 236.4, 226.7, 236.5, 226.7, 236.5);
        vaulter.bezierCurveTo(226.7, 236.5, 224.8, 239.7, 224.1, 240.4);
        vaulter.bezierCurveTo(223.4, 241.2, 218.7, 246.3, 217.1, 249.6);
        vaulter.lineTo(204.1, 253.0);
        vaulter.bezierCurveTo(202.2, 253.6, 200.1, 255.6, 200.6, 257.4);
        vaulter.bezierCurveTo(201.1, 259.2, 203.2, 261.1, 206.6, 259.3);
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
        vaulter.moveTo(199.5, 288.2);
        vaulter.bezierCurveTo(199.5, 288.2, 198.9, 290.4, 199.5, 293.4);
        vaulter.bezierCurveTo(200.5, 297.8, 203.5, 303.9, 207.9, 309.0);
        vaulter.bezierCurveTo(207.9, 309.0, 206.0, 314.2, 206.0, 317.5);
        vaulter.bezierCurveTo(206.0, 320.7, 206.5, 330.7, 206.2, 332.1);
        vaulter.bezierCurveTo(206.2, 333.3, 205.6, 333.4, 205.4, 334.6);
        vaulter.bezierCurveTo(205.2, 335.6, 206.4, 336.6, 207.9, 336.6);
        vaulter.bezierCurveTo(209.4, 336.6, 213.9, 341.4, 213.9, 341.4);
        vaulter.bezierCurveTo(213.9, 341.4, 216.2, 342.8, 216.7, 341.8);
        vaulter.bezierCurveTo(217.4, 340.4, 215.1, 340.5, 214.3, 338.7);
        vaulter.bezierCurveTo(212.7, 335.4, 211.7, 334.0, 210.0, 332.5);
        vaulter.bezierCurveTo(210.0, 332.5, 214.9, 311.0, 214.7, 308.6);
        vaulter.bezierCurveTo(214.5, 306.2, 213.4, 292.5, 210.9, 287.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(425.1, 345.9);
        vaulter.lineTo(193.9, 219.2);
        vaulter.bezierCurveTo(193.9, 219.2, 192.9, 218.7, 193.4, 217.8);
        vaulter.bezierCurveTo(193.9, 217.0, 194.9, 217.5, 194.9, 217.5);
        vaulter.lineTo(426.1, 344.1);
        vaulter.lineTo(425.1, 345.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(207.3, 253.3);
        vaulter.bezierCurveTo(207.3, 253.3, 209.8, 248.5, 209.8, 247.3);
        vaulter.bezierCurveTo(209.8, 246.0, 209.2, 241.5, 209.2, 241.5);
        vaulter.bezierCurveTo(209.2, 241.5, 207.4, 236.3, 202.6, 236.6);
        vaulter.bezierCurveTo(197.8, 236.9, 196.4, 242.6, 196.6, 244.9);
        vaulter.bezierCurveTo(196.7, 247.2, 199.2, 252.8, 199.2, 252.8);
        vaulter.bezierCurveTo(199.2, 252.8, 199.8, 255.4, 197.4, 254.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(211.1, 284.7);
        vaulter.bezierCurveTo(210.5, 280.4, 208.9, 259.9, 208.9, 259.9);
        vaulter.bezierCurveTo(208.9, 259.9, 204.3, 252.5, 196.8, 256.1);
        vaulter.bezierCurveTo(195.7, 256.6, 194.0, 258.7, 194.4, 263.3);
        vaulter.bezierCurveTo(194.8, 267.9, 197.8, 271.2, 198.4, 274.0);
        vaulter.bezierCurveTo(199.0, 276.8, 198.8, 285.5, 198.8, 289.9);
        vaulter.bezierCurveTo(198.8, 289.9, 202.8, 295.2, 206.9, 294.6);
        vaulter.bezierCurveTo(210.9, 294.0, 211.1, 284.7, 211.1, 284.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(209.9, 285.2);
        vaulter.bezierCurveTo(209.9, 285.2, 218.7, 304.6, 218.8, 305.8);
        vaulter.bezierCurveTo(219.1, 307.2, 221.2, 311.7, 218.1, 314.3);
        vaulter.bezierCurveTo(215.4, 316.6, 209.3, 314.7, 207.8, 313.1);
        vaulter.bezierCurveTo(206.3, 311.4, 198.6, 306.7, 196.6, 306.2);
        vaulter.bezierCurveTo(194.5, 305.8, 186.3, 305.8, 184.6, 305.9);
        vaulter.bezierCurveTo(183.0, 306.1, 180.5, 306.2, 179.9, 305.3);
        vaulter.bezierCurveTo(179.3, 304.4, 182.3, 303.3, 183.2, 303.2);
        vaulter.bezierCurveTo(184.0, 303.0, 187.2, 301.7, 188.7, 300.3);
        vaulter.bezierCurveTo(190.2, 299.0, 193.1, 299.6, 193.5, 300.0);
        vaulter.bezierCurveTo(194.0, 300.5, 195.2, 302.0, 196.6, 302.3);
        vaulter.bezierCurveTo(197.7, 302.6, 205.3, 304.7, 209.2, 306.4);
        vaulter.bezierCurveTo(202.1, 299.7, 201.1, 298.1, 199.5, 293.4);
        vaulter.bezierCurveTo(198.0, 288.7, 199.5, 286.5, 199.5, 286.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(200.5, 272.2);
        vaulter.bezierCurveTo(200.5, 272.2, 206.6, 271.1, 205.2, 263.3);
        vaulter.bezierCurveTo(203.8, 255.6, 200.0, 254.0, 198.0, 254.4);
        vaulter.bezierCurveTo(196.0, 254.8, 193.8, 259.4, 195.4, 264.5);
        vaulter.bezierCurveTo(197.1, 269.6, 197.8, 271.1, 200.5, 272.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(196.0, 264.4);
        vaulter.bezierCurveTo(196.0, 264.4, 194.2, 260.2, 197.0, 255.5);
        vaulter.bezierCurveTo(199.7, 250.9, 202.0, 241.3, 202.0, 241.3);
        vaulter.bezierCurveTo(202.0, 241.3, 202.7, 230.0, 201.6, 227.7);
        vaulter.bezierCurveTo(200.6, 225.4, 199.2, 221.8, 199.6, 220.5);
        vaulter.bezierCurveTo(200.1, 219.2, 200.8, 220.2, 201.5, 220.1);
        vaulter.bezierCurveTo(202.1, 220.0, 204.9, 220.9, 205.4, 221.8);
        vaulter.bezierCurveTo(206.0, 222.8, 206.6, 224.9, 206.0, 226.3);
        vaulter.bezierCurveTo(205.5, 227.8, 206.5, 232.9, 207.0, 234.5);
        vaulter.bezierCurveTo(207.5, 235.8, 208.0, 239.0, 207.7, 241.2);
        vaulter.bezierCurveTo(207.5, 243.0, 203.3, 260.7, 203.3, 260.7);
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
        vaulter.moveTo(274.0, 241.6);
        vaulter.lineTo(274.0, 232.2);
        vaulter.lineTo(274.0, 222.6);
        vaulter.bezierCurveTo(274.0, 222.6, 273.1, 219.5, 274.0, 218.5);
        vaulter.bezierCurveTo(274.9, 217.4, 274.9, 215.3, 274.9, 215.3);
        vaulter.lineTo(271.1, 214.3);
        vaulter.lineTo(267.3, 214.3);
        vaulter.bezierCurveTo(267.3, 214.3, 266.8, 215.5, 266.9, 215.9);
        vaulter.bezierCurveTo(267.0, 216.4, 269.7, 217.6, 269.7, 217.6);
        vaulter.bezierCurveTo(269.7, 217.6, 270.6, 218.6, 269.7, 222.6);
        vaulter.lineTo(267.3, 233.0);
        vaulter.lineTo(266.9, 241.4);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(423.9, 345.1);
        vaulter.bezierCurveTo(419.5, 322.1, 415.8, 309.2, 405.2, 292.7);
        vaulter.bezierCurveTo(395.6, 277.6, 377.8, 256.2, 347.3, 240.0);
        vaulter.bezierCurveTo(316.9, 223.8, 285.4, 217.9, 264.3, 215.8);
        vaulter.bezierCurveTo(241.4, 213.5, 225.5, 215.1, 225.4, 215.1);
        vaulter.bezierCurveTo(225.4, 215.1, 224.5, 215.0, 224.4, 214.2);
        vaulter.bezierCurveTo(224.4, 213.4, 225.1, 213.1, 225.1, 213.1);
        vaulter.bezierCurveTo(225.3, 213.1, 241.3, 211.5, 264.5, 213.8);
        vaulter.bezierCurveTo(285.8, 215.9, 317.6, 221.9, 348.3, 238.2);
        vaulter.bezierCurveTo(379.1, 254.7, 397.2, 276.3, 406.9, 291.6);
        vaulter.bezierCurveTo(417.6, 308.4, 421.4, 321.4, 425.8, 344.7);
        vaulter.lineTo(423.9, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(267.5, 268.7);
        vaulter.bezierCurveTo(267.5, 266.8, 268.2, 264.1, 270.2, 262.0);
        vaulter.bezierCurveTo(270.2, 262.0, 269.6, 256.0, 268.3, 253.7);
        vaulter.bezierCurveTo(267.1, 251.4, 261.5, 244.3, 261.8, 241.5);
        vaulter.bezierCurveTo(262.0, 238.7, 264.3, 236.6, 265.4, 236.0);
        vaulter.bezierCurveTo(266.5, 235.4, 270.2, 235.5, 270.2, 235.5);
        vaulter.bezierCurveTo(270.2, 235.5, 282.7, 245.9, 280.4, 261.2);
        vaulter.bezierCurveTo(278.1, 276.6, 267.5, 289.6, 266.0, 291.7);
        vaulter.bezierCurveTo(264.6, 293.7, 255.6, 296.2, 252.9, 297.0);
        vaulter.bezierCurveTo(250.2, 297.9, 245.1, 302.6, 244.1, 303.7);
        vaulter.bezierCurveTo(243.1, 304.8, 241.6, 309.3, 241.1, 310.7);
        vaulter.bezierCurveTo(240.6, 312.0, 239.2, 314.8, 238.1, 314.8);
        vaulter.bezierCurveTo(237.0, 314.8, 236.4, 313.7, 236.4, 313.7);
        vaulter.lineTo(238.9, 298.9);
        vaulter.bezierCurveTo(238.9, 298.9, 240.0, 297.6, 240.9, 297.9);
        vaulter.bezierCurveTo(241.9, 298.1, 243.4, 298.1, 245.0, 297.0);
        vaulter.bezierCurveTo(246.5, 295.9, 255.1, 288.0, 258.0, 286.7);
        vaulter.bezierCurveTo(260.9, 285.3, 261.4, 286.1, 261.4, 286.1);
        vaulter.bezierCurveTo(261.4, 286.1, 266.0, 272.3, 267.5, 268.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(268.3, 253.7);
        vaulter.bezierCurveTo(268.6, 254.1, 268.8, 254.6, 268.9, 255.2);
        vaulter.bezierCurveTo(269.3, 255.3, 269.6, 255.4, 270.0, 255.4);
        vaulter.bezierCurveTo(270.0, 255.4, 276.8, 252.1, 273.4, 244.9);
        vaulter.bezierCurveTo(270.0, 237.8, 264.8, 238.0, 263.0, 238.9);
        vaulter.bezierCurveTo(262.7, 239.0, 262.5, 239.2, 262.3, 239.5);
        vaulter.bezierCurveTo(262.0, 240.1, 261.8, 240.8, 261.8, 241.5);
        vaulter.bezierCurveTo(261.5, 244.3, 267.1, 251.4, 268.3, 253.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(268.7, 269.9);
        vaulter.bezierCurveTo(268.7, 269.9, 269.3, 273.8, 273.8, 275.2);
        vaulter.bezierCurveTo(278.3, 276.6, 288.4, 276.5, 290.4, 277.2);
        vaulter.bezierCurveTo(290.4, 277.2, 288.7, 280.1, 288.4, 283.5);
        vaulter.bezierCurveTo(288.2, 286.9, 283.2, 295.0, 283.2, 295.0);
        vaulter.bezierCurveTo(283.2, 295.0, 281.7, 295.7, 281.5, 296.2);
        vaulter.bezierCurveTo(281.3, 296.7, 280.4, 299.1, 282.0, 299.8);
        vaulter.bezierCurveTo(283.6, 300.6, 288.7, 304.2, 289.5, 304.9);
        vaulter.bezierCurveTo(290.4, 305.6, 292.5, 306.8, 293.0, 306.3);
        vaulter.bezierCurveTo(293.6, 305.8, 291.9, 303.1, 290.9, 302.3);
        vaulter.bezierCurveTo(290.1, 301.6, 287.4, 297.3, 287.3, 297.0);
        vaulter.bezierCurveTo(287.1, 296.6, 289.3, 291.8, 291.1, 290.2);
        vaulter.bezierCurveTo(292.9, 288.6, 299.8, 278.4, 300.2, 277.4);
        vaulter.bezierCurveTo(300.6, 276.4, 300.2, 274.6, 298.6, 273.3);
        vaulter.bezierCurveTo(296.9, 272.1, 294.0, 269.9, 294.0, 269.9);
        vaulter.bezierCurveTo(294.0, 269.9, 282.4, 264.2, 280.7, 263.6);
        vaulter.bezierCurveTo(279.5, 263.2, 278.9, 262.1, 278.9, 262.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(273.1, 236.5);
        vaulter.bezierCurveTo(273.1, 236.5, 275.6, 231.7, 275.6, 230.5);
        vaulter.bezierCurveTo(275.6, 229.2, 275.0, 224.7, 275.0, 224.7);
        vaulter.bezierCurveTo(275.0, 224.7, 273.2, 219.5, 268.4, 219.8);
        vaulter.bezierCurveTo(263.6, 220.1, 262.2, 225.8, 262.4, 228.1);
        vaulter.bezierCurveTo(262.5, 230.4, 265.0, 236.0, 265.0, 236.0);
        vaulter.bezierCurveTo(265.0, 236.0, 265.5, 238.6, 263.2, 238.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(262.7, 243.5);
        vaulter.bezierCurveTo(262.7, 243.5, 259.3, 239.6, 256.6, 234.7);
        vaulter.bezierCurveTo(253.9, 229.8, 252.2, 229.0, 252.2, 229.0);
        vaulter.bezierCurveTo(248.8, 226.9, 238.6, 219.2, 238.6, 219.2);
        vaulter.lineTo(234.9, 214.0);
        vaulter.lineTo(240.2, 213.0);
        vaulter.lineTo(241.7, 217.6);
        vaulter.bezierCurveTo(241.7, 217.6, 248.8, 222.6, 252.0, 223.5);
        vaulter.bezierCurveTo(255.2, 224.4, 260.2, 230.8, 260.2, 230.8);
        vaulter.bezierCurveTo(260.2, 230.8, 266.8, 239.3, 268.0, 239.7);
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
        vaulter.moveTo(425.9, 345.1);
        vaulter.lineTo(423.9, 345.1);
        vaulter.bezierCurveTo(423.9, 335.5, 421.0, 316.0, 413.8, 295.9);
        vaulter.bezierCurveTo(405.3, 272.1, 387.9, 251.9, 359.1, 232.6);
        vaulter.bezierCurveTo(327.9, 211.7, 295.5, 207.1, 273.9, 206.8);
        vaulter.bezierCurveTo(250.6, 206.6, 234.2, 211.4, 234.0, 211.5);
        vaulter.bezierCurveTo(234.0, 211.5, 233.1, 211.5, 232.9, 210.7);
        vaulter.bezierCurveTo(232.6, 209.8, 233.5, 209.5, 233.5, 209.5);
        vaulter.bezierCurveTo(233.6, 209.5, 250.2, 204.6, 273.9, 204.8);
        vaulter.bezierCurveTo(295.8, 205.1, 328.6, 209.8, 360.2, 230.9);
        vaulter.bezierCurveTo(389.4, 250.5, 407.1, 271.0, 415.7, 295.2);
        vaulter.bezierCurveTo(422.9, 315.5, 425.9, 335.4, 425.9, 345.1);
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
        vaulter.moveTo(284.2, 231.1);
        vaulter.bezierCurveTo(284.2, 231.1, 285.5, 225.8, 285.1, 224.3);
        vaulter.lineTo(286.3, 217.2);
        vaulter.bezierCurveTo(286.3, 217.2, 284.6, 213.1, 284.2, 212.2);
        vaulter.bezierCurveTo(283.7, 211.3, 280.8, 208.6, 281.3, 207.8);
        vaulter.bezierCurveTo(281.8, 207.1, 282.0, 204.2, 281.3, 204.1);
        vaulter.bezierCurveTo(280.5, 203.9, 277.8, 203.5, 277.8, 203.5);
        vaulter.lineTo(275.3, 204.1);
        vaulter.bezierCurveTo(275.3, 204.1, 273.8, 206.2, 274.4, 206.6);
        vaulter.bezierCurveTo(275.0, 207.1, 276.2, 207.8, 276.2, 207.8);
        vaulter.bezierCurveTo(276.2, 207.8, 278.4, 208.4, 279.1, 209.3);
        vaulter.bezierCurveTo(279.9, 210.2, 280.4, 216.1, 281.3, 217.3);
        vaulter.bezierCurveTo(281.3, 217.3, 279.9, 223.8, 278.7, 224.7);
        vaulter.bezierCurveTo(277.5, 225.7, 275.7, 228.7, 276.0, 229.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(299.6, 255.7);
        vaulter.bezierCurveTo(299.6, 255.7, 298.6, 245.8, 294.7, 238.6);
        vaulter.bezierCurveTo(290.9, 231.3, 284.7, 227.9, 280.8, 227.5);
        vaulter.bezierCurveTo(277.0, 227.1, 274.6, 228.5, 273.6, 229.7);
        vaulter.bezierCurveTo(272.6, 230.9, 272.9, 233.4, 273.6, 234.4);
        vaulter.bezierCurveTo(276.8, 239.3, 282.7, 242.4, 286.6, 247.0);
        vaulter.bezierCurveTo(287.5, 248.1, 287.8, 250.8, 288.0, 252.9);
        vaulter.bezierCurveTo(287.0, 254.9, 283.1, 263.2, 282.7, 276.1);
        vaulter.bezierCurveTo(282.7, 276.1, 270.6, 277.7, 265.2, 282.7);
        vaulter.bezierCurveTo(265.2, 282.7, 263.3, 281.2, 262.7, 281.2);
        vaulter.bezierCurveTo(262.1, 281.2, 260.3, 282.7, 259.9, 283.9);
        vaulter.bezierCurveTo(259.4, 285.1, 256.2, 294.0, 255.6, 294.9);
        vaulter.bezierCurveTo(255.0, 295.8, 256.7, 296.6, 257.2, 296.6);
        vaulter.bezierCurveTo(257.6, 296.6, 262.7, 290.7, 264.1, 288.0);
        vaulter.bezierCurveTo(264.1, 288.0, 274.7, 282.9, 279.3, 283.5);
        vaulter.bezierCurveTo(284.0, 284.1, 287.3, 281.8, 287.3, 281.8);
        vaulter.bezierCurveTo(287.3, 281.8, 292.6, 275.5, 296.5, 262.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(283.7, 229.3);
        vaulter.bezierCurveTo(283.7, 229.3, 287.3, 222.2, 287.3, 221.0);
        vaulter.bezierCurveTo(287.3, 219.8, 286.8, 215.2, 286.8, 215.2);
        vaulter.bezierCurveTo(286.8, 215.2, 285.0, 210.0, 280.2, 210.3);
        vaulter.bezierCurveTo(275.4, 210.6, 274.0, 216.3, 274.1, 218.6);
        vaulter.bezierCurveTo(274.3, 220.9, 276.7, 226.5, 276.7, 226.5);
        vaulter.bezierCurveTo(276.7, 226.5, 277.3, 229.1, 275.0, 228.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(286.2, 244.9);
        vaulter.bezierCurveTo(286.2, 244.9, 291.2, 241.2, 286.6, 234.9);
        vaulter.bezierCurveTo(282.0, 228.5, 277.9, 228.6, 276.2, 229.9);
        vaulter.bezierCurveTo(274.9, 230.9, 274.7, 234.5, 276.6, 237.8);
        vaulter.bezierCurveTo(279.0, 240.3, 282.0, 242.4, 284.5, 244.8);
        vaulter.bezierCurveTo(285.0, 244.9, 285.6, 244.9, 286.2, 244.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(276.0, 236.1);
        vaulter.bezierCurveTo(276.0, 236.1, 271.9, 232.4, 269.5, 227.4);
        vaulter.bezierCurveTo(269.5, 227.4, 260.0, 221.6, 258.8, 220.7);
        vaulter.bezierCurveTo(257.6, 219.8, 249.8, 212.8, 247.5, 211.6);
        vaulter.bezierCurveTo(245.2, 210.4, 243.5, 208.4, 244.1, 207.3);
        vaulter.bezierCurveTo(244.8, 206.2, 247.5, 204.9, 247.5, 204.9);
        vaulter.bezierCurveTo(247.5, 204.9, 250.9, 205.3, 251.4, 206.2);
        vaulter.bezierCurveTo(252.0, 207.1, 251.0, 210.0, 251.0, 210.0);
        vaulter.bezierCurveTo(251.0, 210.0, 256.2, 213.2, 259.3, 214.4);
        vaulter.bezierCurveTo(262.3, 215.7, 263.3, 217.7, 263.3, 217.7);
        vaulter.lineTo(273.0, 224.0);
        vaulter.bezierCurveTo(273.0, 224.0, 280.7, 227.3, 282.7, 230.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(287.7, 253.5);
        vaulter.bezierCurveTo(287.7, 253.5, 286.3, 256.8, 286.6, 259.6);
        vaulter.bezierCurveTo(286.7, 261.0, 288.0, 262.6, 289.0, 263.3);
        vaulter.bezierCurveTo(292.0, 265.5, 295.7, 266.2, 299.6, 267.0);
        vaulter.bezierCurveTo(303.4, 267.8, 308.0, 271.0, 308.0, 271.0);
        vaulter.bezierCurveTo(308.0, 271.0, 306.4, 277.8, 306.6, 279.8);
        vaulter.bezierCurveTo(306.8, 281.9, 303.9, 291.7, 303.5, 293.1);
        vaulter.bezierCurveTo(303.3, 293.6, 302.8, 293.9, 302.7, 294.2);
        vaulter.bezierCurveTo(302.4, 294.8, 302.5, 295.3, 302.9, 295.7);
        vaulter.bezierCurveTo(303.5, 296.3, 308.3, 298.4, 311.7, 300.8);
        vaulter.bezierCurveTo(312.9, 301.6, 316.2, 301.8, 315.8, 300.8);
        vaulter.bezierCurveTo(315.4, 299.9, 313.6, 299.4, 312.8, 298.2);
        vaulter.bezierCurveTo(311.0, 295.5, 308.6, 292.7, 308.6, 292.7);
        vaulter.bezierCurveTo(308.6, 292.7, 314.7, 275.0, 315.1, 272.0);
        vaulter.bezierCurveTo(315.5, 269.0, 311.2, 262.1, 307.2, 259.3);
        vaulter.bezierCurveTo(304.2, 257.2, 300.8, 255.8, 298.7, 254.2);
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
        vaulter.moveTo(310.5, 250.4);
        vaulter.bezierCurveTo(310.6, 253.2, 308.6, 265.3, 308.8, 266.5);
        vaulter.bezierCurveTo(308.9, 267.7, 308.2, 270.4, 307.0, 272.2);
        vaulter.bezierCurveTo(305.8, 274.1, 297.5, 277.2, 294.3, 278.1);
        vaulter.bezierCurveTo(291.1, 279.0, 285.7, 282.8, 285.7, 282.8);
        vaulter.bezierCurveTo(285.5, 284.0, 283.0, 288.8, 283.0, 288.8);
        vaulter.bezierCurveTo(283.0, 288.8, 282.4, 292.0, 281.8, 292.0);
        vaulter.bezierCurveTo(281.2, 292.0, 280.6, 290.8, 280.6, 290.8);
        vaulter.bezierCurveTo(280.6, 290.8, 280.4, 287.5, 280.6, 286.6);
        vaulter.bezierCurveTo(280.7, 285.7, 280.6, 280.7, 280.6, 280.7);
        vaulter.bezierCurveTo(280.6, 280.7, 281.8, 278.3, 282.8, 278.6);
        vaulter.bezierCurveTo(283.9, 278.9, 284.6, 278.6, 284.6, 278.6);
        vaulter.bezierCurveTo(286.8, 278.1, 292.3, 273.9, 294.0, 272.1);
        vaulter.bezierCurveTo(295.7, 270.3, 302.0, 266.5, 302.0, 266.5);
        vaulter.bezierCurveTo(300.2, 256.4, 300.3, 246.7, 300.3, 246.7);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(286.3, 222.4);
        vaulter.bezierCurveTo(286.3, 220.2, 287.1, 218.3, 288.0, 217.7);
        vaulter.bezierCurveTo(287.9, 216.2, 288.5, 208.9, 288.5, 208.9);
        vaulter.bezierCurveTo(287.8, 208.0, 288.5, 205.8, 288.5, 204.8);
        vaulter.bezierCurveTo(288.5, 203.8, 286.9, 200.2, 286.9, 200.2);
        vaulter.bezierCurveTo(286.9, 200.2, 287.4, 199.5, 288.4, 199.2);
        vaulter.bezierCurveTo(289.4, 199.0, 290.2, 199.2, 290.2, 199.2);
        vaulter.bezierCurveTo(290.2, 199.2, 291.6, 204.0, 292.0, 205.8);
        vaulter.bezierCurveTo(292.4, 207.6, 293.6, 210.4, 293.1, 211.5);
        vaulter.lineTo(292.6, 217.5);
        vaulter.bezierCurveTo(292.6, 217.5, 294.8, 220.5, 295.1, 224.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(425.9, 345.1);
        vaulter.lineTo(423.9, 345.1);
        vaulter.bezierCurveTo(423.9, 315.2, 421.1, 296.8, 414.2, 280.8);
        vaulter.bezierCurveTo(406.7, 263.8, 391.9, 239.6, 363.0, 221.2);
        vaulter.bezierCurveTo(334.1, 202.8, 303.2, 200.2, 282.4, 201.2);
        vaulter.bezierCurveTo(260.1, 202.3, 244.4, 207.7, 243.7, 207.9);
        vaulter.bezierCurveTo(243.7, 207.9, 242.6, 208.2, 242.3, 207.3);
        vaulter.bezierCurveTo(242.0, 206.4, 243.1, 206.0, 243.1, 206.0);
        vaulter.bezierCurveTo(243.7, 205.8, 259.7, 200.3, 282.3, 199.2);
        vaulter.bezierCurveTo(303.4, 198.2, 334.8, 200.8, 364.1, 219.5);
        vaulter.bezierCurveTo(393.4, 238.2, 408.5, 262.7, 416.0, 280.0);
        vaulter.bezierCurveTo(423.1, 296.3, 425.9, 315.0, 425.9, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(300.1, 245.9);
        vaulter.bezierCurveTo(300.1, 245.9, 300.1, 244.4, 299.3, 243.1);
        vaulter.bezierCurveTo(298.4, 241.8, 290.8, 235.9, 288.0, 234.5);
        vaulter.bezierCurveTo(286.3, 233.6, 283.2, 230.5, 280.9, 227.8);
        vaulter.bezierCurveTo(278.9, 225.4, 281.7, 223.0, 283.6, 221.9);
        vaulter.bezierCurveTo(285.5, 220.8, 289.8, 220.9, 289.8, 220.9);
        vaulter.bezierCurveTo(294.1, 221.7, 301.5, 226.7, 306.3, 231.5);
        vaulter.bezierCurveTo(311.2, 236.4, 310.5, 245.9, 310.5, 245.9);
        vaulter.bezierCurveTo(310.5, 247.9, 307.4, 248.8, 305.5, 248.8);
        vaulter.bezierCurveTo(303.7, 248.8, 300.2, 247.2, 300.1, 245.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(291.0, 220.2);
        vaulter.bezierCurveTo(291.8, 218.1, 293.0, 214.6, 293.0, 213.8);
        vaulter.bezierCurveTo(292.9, 212.7, 292.0, 208.7, 292.0, 208.7);
        vaulter.bezierCurveTo(292.0, 208.7, 289.9, 204.2, 285.6, 204.9);
        vaulter.bezierCurveTo(281.4, 205.5, 280.6, 210.7, 280.9, 212.8);
        vaulter.bezierCurveTo(281.3, 214.9, 284.0, 219.6, 284.0, 219.6);
        vaulter.bezierCurveTo(284.0, 219.6, 284.3, 221.3, 284.0, 222.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(294.8, 237.8);
        vaulter.bezierCurveTo(294.8, 237.8, 299.4, 233.7, 294.2, 227.8);
        vaulter.bezierCurveTo(289.0, 221.8, 285.0, 222.4, 283.5, 223.8);
        vaulter.bezierCurveTo(282.2, 225.0, 282.3, 228.5, 284.5, 231.7);
        vaulter.bezierCurveTo(287.2, 233.9, 290.4, 235.7, 293.1, 237.9);
        vaulter.bezierCurveTo(293.6, 237.9, 294.2, 237.9, 294.8, 237.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(280.9, 227.8);
        vaulter.bezierCurveTo(279.3, 226.0, 278.1, 224.5, 277.6, 223.9);
        vaulter.bezierCurveTo(277.6, 223.9, 268.3, 216.3, 267.6, 215.7);
        vaulter.bezierCurveTo(266.9, 215.1, 259.5, 210.5, 257.6, 207.9);
        vaulter.bezierCurveTo(254.9, 206.7, 253.2, 205.6, 253.0, 204.8);
        vaulter.bezierCurveTo(252.8, 204.0, 253.7, 202.6, 254.5, 202.1);
        vaulter.bezierCurveTo(255.3, 201.6, 258.8, 202.1, 258.8, 202.1);
        vaulter.bezierCurveTo(258.8, 202.1, 260.0, 203.8, 259.8, 204.2);
        vaulter.bezierCurveTo(259.6, 204.6, 259.4, 206.8, 260.0, 207.1);
        vaulter.bezierCurveTo(260.6, 207.4, 268.8, 211.1, 269.9, 212.1);
        vaulter.bezierCurveTo(271.0, 213.1, 277.2, 215.8, 280.5, 218.9);
        vaulter.bezierCurveTo(280.5, 218.9, 287.1, 222.4, 289.4, 223.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(299.7, 245.1);
        vaulter.bezierCurveTo(299.7, 245.1, 298.1, 251.3, 300.9, 253.7);
        vaulter.bezierCurveTo(302.9, 255.3, 307.0, 257.3, 310.8, 258.5);
        vaulter.bezierCurveTo(314.5, 259.7, 318.8, 265.3, 318.8, 265.3);
        vaulter.bezierCurveTo(318.8, 265.3, 317.7, 273.3, 318.8, 274.8);
        vaulter.bezierCurveTo(319.8, 276.3, 320.7, 286.7, 320.3, 287.6);
        vaulter.bezierCurveTo(319.8, 288.5, 319.3, 289.5, 320.4, 289.9);
        vaulter.bezierCurveTo(321.5, 290.4, 325.4, 290.4, 326.3, 291.0);
        vaulter.bezierCurveTo(327.2, 291.6, 330.5, 291.1, 331.1, 291.0);
        vaulter.bezierCurveTo(331.7, 290.8, 329.9, 288.8, 329.0, 288.8);
        vaulter.bezierCurveTo(328.1, 288.8, 324.3, 286.6, 323.9, 286.0);
        vaulter.bezierCurveTo(323.4, 285.4, 324.6, 275.7, 325.2, 272.7);
        vaulter.bezierCurveTo(325.8, 269.7, 326.1, 263.8, 325.2, 261.5);
        vaulter.bezierCurveTo(324.3, 259.3, 310.0, 241.8, 310.0, 241.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(286.3, 200.1);
        vaulter.bezierCurveTo(286.3, 200.1, 289.0, 200.6, 289.8, 200.6);
        vaulter.bezierCurveTo(290.6, 200.6, 290.7, 199.8, 290.8, 199.1);
        vaulter.bezierCurveTo(290.9, 198.4, 290.5, 197.8, 289.8, 197.8);
        vaulter.bezierCurveTo(289.1, 197.8, 287.7, 197.8, 287.7, 197.8);
        vaulter.bezierCurveTo(287.7, 197.8, 285.8, 198.5, 285.3, 198.9);
        vaulter.bezierCurveTo(284.8, 199.3, 286.3, 200.1, 286.3, 200.1);
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
        vaulter.moveTo(322.7, 240.1);
        vaulter.bezierCurveTo(322.7, 240.1, 334.4, 251.2, 341.7, 255.0);
        vaulter.bezierCurveTo(341.7, 255.0, 344.1, 260.0, 347.4, 261.9);
        vaulter.bezierCurveTo(350.8, 263.8, 355.9, 271.4, 355.9, 271.4);
        vaulter.bezierCurveTo(355.9, 271.4, 356.7, 273.3, 357.5, 273.2);
        vaulter.bezierCurveTo(358.3, 273.0, 362.1, 272.0, 362.1, 272.0);
        vaulter.lineTo(367.8, 270.4);
        vaulter.bezierCurveTo(367.8, 270.4, 368.9, 269.2, 368.5, 268.8);
        vaulter.bezierCurveTo(367.5, 268.0, 364.7, 268.3, 364.7, 268.3);
        vaulter.bezierCurveTo(364.7, 268.3, 361.8, 267.4, 359.2, 267.9);
        vaulter.bezierCurveTo(359.2, 267.9, 346.5, 251.8, 346.3, 251.4);
        vaulter.bezierCurveTo(345.5, 249.6, 340.2, 241.0, 332.6, 232.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(312.6, 214.7);
        vaulter.bezierCurveTo(312.6, 214.7, 312.5, 208.9, 313.4, 206.5);
        vaulter.bezierCurveTo(313.4, 206.5, 315.9, 201.1, 316.1, 199.7);
        vaulter.bezierCurveTo(316.2, 198.3, 317.0, 194.7, 316.1, 192.8);
        vaulter.bezierCurveTo(315.2, 190.8, 313.8, 184.2, 313.8, 184.2);
        vaulter.lineTo(313.7, 182.0);
        vaulter.bezierCurveTo(313.7, 182.0, 310.0, 182.5, 309.1, 182.8);
        vaulter.bezierCurveTo(309.1, 182.8, 311.4, 189.9, 311.4, 192.0);
        vaulter.bezierCurveTo(311.4, 194.1, 311.1, 198.3, 311.1, 198.3);
        vaulter.bezierCurveTo(311.1, 198.3, 308.5, 201.8, 308.8, 205.0);
        vaulter.bezierCurveTo(307.5, 205.7, 304.0, 213.3, 304.0, 213.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(310.3, 184.2);
        vaulter.lineTo(308.8, 183.4);
        vaulter.bezierCurveTo(308.8, 183.4, 308.2, 180.8, 308.8, 180.4);
        vaulter.bezierCurveTo(309.5, 179.9, 313.2, 179.6, 313.2, 179.6);
        vaulter.bezierCurveTo(313.2, 179.6, 314.7, 180.5, 314.6, 181.0);
        vaulter.bezierCurveTo(314.4, 181.4, 313.8, 184.2, 313.8, 184.2);
        vaulter.lineTo(310.3, 184.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(425.9, 345.1);
        vaulter.lineTo(423.9, 345.1);
        vaulter.lineTo(423.9, 344.2);
        vaulter.bezierCurveTo(423.9, 307.4, 422.1, 282.0, 418.7, 269.0);
        vaulter.bezierCurveTo(413.7, 249.8, 402.7, 222.7, 378.8, 202.9);
        vaulter.bezierCurveTo(354.8, 183.0, 326.9, 181.3, 307.6, 183.3);
        vaulter.bezierCurveTo(286.7, 185.6, 271.4, 192.5, 271.2, 192.6);
        vaulter.bezierCurveTo(271.2, 192.6, 270.3, 192.8, 269.9, 192.0);
        vaulter.bezierCurveTo(269.5, 191.2, 270.4, 190.8, 270.4, 190.8);
        vaulter.bezierCurveTo(270.6, 190.7, 286.3, 183.6, 307.4, 181.4);
        vaulter.bezierCurveTo(327.0, 179.3, 355.6, 181.1, 380.0, 201.3);
        vaulter.bezierCurveTo(404.4, 221.5, 415.5, 249.0, 420.6, 268.5);
        vaulter.bezierCurveTo(424.0, 281.7, 425.9, 307.3, 425.9, 344.2);
        vaulter.lineTo(425.9, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(311.2, 212.8);
        vaulter.bezierCurveTo(311.2, 212.8, 309.7, 206.8, 308.9, 205.9);
        vaulter.bezierCurveTo(308.2, 205.1, 305.2, 202.3, 305.2, 202.3);
        vaulter.bezierCurveTo(305.2, 202.3, 300.9, 199.8, 297.8, 202.8);
        vaulter.bezierCurveTo(294.7, 205.8, 297.1, 210.5, 298.5, 212.0);
        vaulter.bezierCurveTo(300.0, 213.6, 305.0, 215.9, 305.0, 215.9);
        vaulter.bezierCurveTo(305.0, 215.9, 306.4, 216.9, 305.9, 220.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(313.9, 213.5);
        vaulter.bezierCurveTo(312.5, 212.8, 309.7, 213.7, 308.4, 214.7);
        vaulter.bezierCurveTo(307.1, 215.7, 305.0, 219.3, 305.6, 220.9);
        vaulter.bezierCurveTo(306.1, 222.5, 305.6, 223.8, 309.2, 225.8);
        vaulter.bezierCurveTo(312.8, 227.8, 320.2, 234.8, 321.5, 236.6);
        vaulter.bezierCurveTo(322.8, 238.4, 328.4, 234.9, 328.4, 234.9);
        vaulter.bezierCurveTo(328.4, 234.9, 330.6, 231.1, 330.4, 230.4);
        vaulter.bezierCurveTo(330.2, 229.7, 323.9, 221.3, 322.1, 219.7);
        vaulter.bezierCurveTo(318.5, 216.4, 313.9, 213.5, 313.9, 213.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(321.6, 236.6);
        vaulter.bezierCurveTo(321.6, 238.6, 322.5, 240.7, 324.7, 241.7);
        vaulter.bezierCurveTo(327.4, 242.9, 336.9, 242.1, 338.7, 241.7);
        vaulter.bezierCurveTo(340.5, 241.2, 347.3, 241.2, 347.3, 241.2);
        vaulter.bezierCurveTo(347.3, 241.2, 350.1, 246.6, 352.0, 248.8);
        vaulter.bezierCurveTo(354.0, 250.9, 355.5, 257.7, 355.5, 257.7);
        vaulter.bezierCurveTo(355.5, 257.7, 355.5, 260.4, 356.7, 260.7);
        vaulter.bezierCurveTo(357.9, 261.0, 359.7, 260.7, 362.1, 259.5);
        vaulter.bezierCurveTo(364.5, 258.3, 366.7, 257.8, 367.1, 257.5);
        vaulter.bezierCurveTo(368.4, 256.6, 367.7, 255.2, 366.4, 254.9);
        vaulter.bezierCurveTo(365.6, 254.6, 363.3, 255.0, 363.3, 255.0);
        vaulter.bezierCurveTo(363.3, 255.0, 360.2, 254.6, 358.7, 254.7);
        vaulter.bezierCurveTo(357.2, 254.9, 354.9, 239.3, 354.1, 238.0);
        vaulter.bezierCurveTo(352.5, 235.4, 349.7, 233.2, 348.0, 232.8);
        vaulter.bezierCurveTo(344.7, 232.1, 332.4, 230.5, 330.4, 230.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(315.3, 228.9);
        vaulter.bezierCurveTo(315.3, 228.9, 322.0, 225.8, 316.8, 219.9);
        vaulter.bezierCurveTo(311.6, 214.0, 308.1, 215.2, 306.6, 216.6);
        vaulter.bezierCurveTo(305.4, 217.8, 305.5, 221.3, 307.7, 224.5);
        vaulter.bezierCurveTo(310.4, 226.7, 310.9, 226.8, 313.7, 229.0);
        vaulter.bezierCurveTo(314.2, 229.0, 314.7, 229.0, 315.3, 228.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(308.2, 223.5);
        vaulter.bezierCurveTo(308.2, 223.5, 304.9, 220.8, 303.1, 218.3);
        vaulter.bezierCurveTo(301.3, 215.7, 299.2, 208.6, 299.2, 208.6);
        vaulter.bezierCurveTo(299.2, 208.6, 294.2, 204.4, 291.9, 200.0);
        vaulter.bezierCurveTo(291.9, 200.0, 289.2, 196.4, 288.3, 194.4);
        vaulter.bezierCurveTo(287.4, 192.5, 283.0, 189.4, 283.0, 189.4);
        vaulter.bezierCurveTo(283.0, 189.4, 280.9, 188.4, 280.5, 188.1);
        vaulter.bezierCurveTo(280.0, 187.8, 280.5, 185.4, 280.5, 185.4);
        vaulter.lineTo(282.7, 184.2);
        vaulter.lineTo(287.1, 184.2);
        vaulter.lineTo(288.6, 186.4);
        vaulter.bezierCurveTo(288.6, 186.4, 288.2, 187.3, 287.6, 187.9);
        vaulter.bezierCurveTo(287.0, 188.5, 294.4, 197.4, 295.7, 198.0);
        vaulter.lineTo(303.0, 205.4);
        vaulter.bezierCurveTo(303.0, 205.4, 307.0, 215.8, 309.8, 217.2);
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
        vaulter.moveTo(425.0, 345.1);
        vaulter.bezierCurveTo(425.0, 338.9, 424.4, 280.0, 420.1, 260.0);
        vaulter.bezierCurveTo(416.0, 240.7, 407.3, 213.8, 389.7, 195.5);
        vaulter.bezierCurveTo(369.6, 174.7, 341.4, 171.8, 321.3, 173.0);
        vaulter.bezierCurveTo(299.6, 174.3, 282.3, 180.7, 282.2, 180.7);
        vaulter.bezierCurveTo(282.2, 180.7, 281.1, 180.9, 280.8, 180.1);
        vaulter.bezierCurveTo(280.6, 179.3, 281.5, 178.8, 281.5, 178.8);
        vaulter.bezierCurveTo(281.6, 178.8, 299.0, 172.4, 321.2, 171.0);
        vaulter.bezierCurveTo(341.7, 169.8, 370.5, 172.8, 391.1, 194.1);
        vaulter.bezierCurveTo(409.1, 212.7, 417.9, 240.0, 422.1, 259.6);
        vaulter.bezierCurveTo(426.4, 279.8, 427.0, 339.0, 427.0, 345.1);
        vaulter.lineTo(425.0, 345.1);
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
        vaulter.moveTo(311.7, 205.6);
        vaulter.bezierCurveTo(311.7, 205.6, 314.2, 198.0, 315.4, 196.7);
        vaulter.bezierCurveTo(316.6, 195.4, 316.8, 185.8, 316.8, 185.8);
        vaulter.bezierCurveTo(316.8, 185.8, 318.6, 176.0, 318.5, 174.1);
        vaulter.bezierCurveTo(318.4, 172.3, 317.6, 172.4, 317.6, 172.4);
        vaulter.bezierCurveTo(317.6, 172.4, 320.2, 172.2, 321.3, 172.1);
        vaulter.bezierCurveTo(321.3, 172.1, 321.2, 175.0, 321.3, 176.3);
        vaulter.bezierCurveTo(321.4, 177.6, 321.8, 184.0, 321.3, 186.3);
        vaulter.bezierCurveTo(320.7, 188.7, 320.6, 196.4, 320.6, 196.4);
        vaulter.bezierCurveTo(320.6, 196.4, 317.4, 202.3, 317.6, 206.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(316.5, 172.1);
        vaulter.bezierCurveTo(316.5, 172.1, 317.5, 170.0, 318.3, 169.6);
        vaulter.bezierCurveTo(319.0, 169.2, 322.6, 170.6, 322.8, 170.9);
        vaulter.bezierCurveTo(323.0, 171.2, 322.7, 172.5, 321.7, 172.7);
        vaulter.bezierCurveTo(320.8, 172.9, 318.1, 172.7, 318.1, 172.7);
        vaulter.bezierCurveTo(318.1, 172.7, 316.8, 172.7, 316.5, 172.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(313.1, 203.7);
        vaulter.bezierCurveTo(313.1, 203.7, 311.9, 198.8, 311.2, 198.0);
        vaulter.bezierCurveTo(310.5, 197.1, 307.4, 194.3, 307.4, 194.3);
        vaulter.bezierCurveTo(307.4, 194.3, 303.0, 191.8, 299.8, 194.8);
        vaulter.bezierCurveTo(296.7, 197.9, 299.1, 202.7, 300.6, 204.2);
        vaulter.bezierCurveTo(302.1, 205.7, 307.1, 208.1, 307.1, 208.1);
        vaulter.bezierCurveTo(307.1, 208.1, 308.2, 208.9, 308.0, 209.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(316.1, 204.4);
        vaulter.bezierCurveTo(314.6, 203.7, 311.8, 204.6, 310.5, 205.6);
        vaulter.bezierCurveTo(309.2, 206.6, 306.0, 210.4, 306.5, 212.1);
        vaulter.bezierCurveTo(307.1, 213.8, 307.6, 215.0, 311.3, 217.0);
        vaulter.bezierCurveTo(314.9, 219.0, 322.5, 226.1, 323.8, 227.9);
        vaulter.bezierCurveTo(325.1, 229.8, 330.9, 226.3, 330.9, 226.3);
        vaulter.bezierCurveTo(330.9, 226.3, 333.1, 222.4, 332.9, 221.6);
        vaulter.bezierCurveTo(332.7, 220.9, 326.2, 212.4, 324.4, 210.7);
        vaulter.bezierCurveTo(320.7, 207.3, 316.1, 204.4, 316.1, 204.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(324.6, 228.5);
        vaulter.bezierCurveTo(324.6, 232.2, 327.7, 233.2, 331.4, 234.5);
        vaulter.bezierCurveTo(335.1, 235.8, 341.1, 233.0, 345.8, 231.0);
        vaulter.bezierCurveTo(349.8, 229.3, 353.6, 226.0, 353.6, 226.0);
        vaulter.bezierCurveTo(353.6, 226.0, 355.9, 229.7, 358.5, 231.7);
        vaulter.bezierCurveTo(361.4, 234.0, 363.4, 242.0, 363.4, 242.0);
        vaulter.bezierCurveTo(363.4, 242.0, 364.6, 243.7, 365.9, 243.6);
        vaulter.bezierCurveTo(367.1, 243.6, 375.7, 237.0, 375.7, 237.0);
        vaulter.bezierCurveTo(375.7, 237.0, 376.1, 235.6, 375.0, 235.4);
        vaulter.bezierCurveTo(374.0, 235.2, 372.8, 236.0, 372.3, 236.4);
        vaulter.bezierCurveTo(371.9, 236.7, 368.3, 236.9, 366.4, 237.5);
        vaulter.bezierCurveTo(366.4, 237.5, 364.8, 234.5, 363.1, 229.9);
        vaulter.bezierCurveTo(362.0, 227.0, 359.8, 221.6, 359.0, 219.7);
        vaulter.bezierCurveTo(357.7, 217.8, 352.5, 218.5, 352.5, 218.5);
        vaulter.bezierCurveTo(352.5, 218.5, 345.0, 219.5, 340.3, 221.5);
        vaulter.bezierCurveTo(335.9, 223.3, 332.9, 221.6, 332.9, 221.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(319.1, 221.8);
        vaulter.bezierCurveTo(319.1, 221.8, 323.8, 217.6, 318.5, 211.6);
        vaulter.bezierCurveTo(313.2, 205.6, 309.1, 206.2, 307.6, 207.6);
        vaulter.bezierCurveTo(306.3, 208.8, 306.4, 212.4, 308.7, 215.6);
        vaulter.bezierCurveTo(311.4, 217.8, 314.6, 219.7, 317.4, 221.9);
        vaulter.bezierCurveTo(317.9, 222.0, 318.5, 221.9, 319.1, 221.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(307.3, 212.3);
        vaulter.bezierCurveTo(307.3, 212.3, 306.7, 209.0, 306.5, 206.7);
        vaulter.bezierCurveTo(306.2, 204.3, 306.5, 199.2, 306.5, 199.2);
        vaulter.bezierCurveTo(306.5, 199.2, 302.0, 193.7, 300.4, 190.6);
        vaulter.bezierCurveTo(298.9, 187.4, 294.0, 180.0, 293.0, 179.4);
        vaulter.bezierCurveTo(291.9, 178.8, 290.7, 178.4, 290.7, 178.4);
        vaulter.bezierCurveTo(290.7, 178.4, 290.2, 176.8, 290.7, 175.7);
        vaulter.bezierCurveTo(291.2, 174.6, 293.3, 175.1, 293.3, 175.1);
        vaulter.lineTo(296.1, 175.0);
        vaulter.bezierCurveTo(296.1, 175.0, 297.5, 176.4, 297.0, 177.0);
        vaulter.bezierCurveTo(296.4, 177.6, 296.3, 178.5, 296.1, 179.0);
        vaulter.bezierCurveTo(296.1, 179.0, 302.6, 186.1, 303.5, 187.4);
        vaulter.bezierCurveTo(304.4, 188.6, 311.0, 194.7, 311.8, 195.8);
        vaulter.bezierCurveTo(312.6, 197.0, 313.2, 207.4, 313.9, 208.4);
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
        vaulter.moveTo(318.1, 198.3);
        vaulter.bezierCurveTo(318.1, 198.3, 321.6, 191.3, 323.5, 190.1);
        vaulter.bezierCurveTo(323.5, 190.1, 324.5, 180.4, 325.4, 178.3);
        vaulter.bezierCurveTo(326.2, 176.2, 327.6, 171.7, 327.8, 170.4);
        vaulter.bezierCurveTo(328.1, 169.2, 326.4, 167.1, 326.4, 167.1);
        vaulter.bezierCurveTo(326.4, 167.1, 326.2, 163.7, 327.8, 163.5);
        vaulter.bezierCurveTo(329.5, 163.2, 331.2, 163.5, 331.2, 163.5);
        vaulter.bezierCurveTo(331.2, 163.5, 332.0, 166.9, 331.2, 169.6);
        vaulter.bezierCurveTo(331.2, 169.6, 329.3, 178.3, 329.1, 179.5);
        vaulter.bezierCurveTo(328.9, 180.8, 328.9, 188.2, 327.8, 190.3);
        vaulter.bezierCurveTo(326.8, 192.4, 324.8, 200.9, 324.8, 200.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(334.8, 226.9);
        vaulter.bezierCurveTo(334.8, 226.9, 336.7, 230.3, 340.7, 230.4);
        vaulter.bezierCurveTo(344.8, 230.6, 347.7, 228.1, 349.0, 226.7);
        vaulter.bezierCurveTo(350.2, 225.3, 358.3, 218.2, 358.3, 218.2);
        vaulter.bezierCurveTo(358.3, 218.2, 362.8, 218.6, 365.9, 219.2);
        vaulter.bezierCurveTo(367.9, 219.7, 373.9, 221.3, 373.9, 221.3);
        vaulter.bezierCurveTo(374.7, 222.7, 376.0, 223.1, 376.0, 223.1);
        vaulter.bezierCurveTo(377.1, 223.1, 384.8, 220.0, 385.9, 218.2);
        vaulter.bezierCurveTo(387.0, 216.3, 385.4, 216.0, 384.8, 216.3);
        vaulter.bezierCurveTo(384.2, 216.6, 382.0, 217.5, 380.8, 217.4);
        vaulter.bezierCurveTo(379.6, 217.2, 376.0, 218.2, 376.0, 218.2);
        vaulter.lineTo(360.6, 211.0);
        vaulter.bezierCurveTo(360.6, 211.0, 358.4, 209.5, 356.6, 209.5);
        vaulter.bezierCurveTo(354.7, 209.5, 340.6, 218.6, 340.6, 218.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(321.3, 195.2);
        vaulter.bezierCurveTo(321.3, 195.2, 320.2, 190.4, 319.4, 189.5);
        vaulter.bezierCurveTo(318.7, 188.6, 315.6, 185.8, 315.6, 185.8);
        vaulter.bezierCurveTo(315.6, 185.8, 311.2, 183.2, 308.0, 186.3);
        vaulter.bezierCurveTo(304.8, 189.4, 307.2, 194.2, 308.7, 195.8);
        vaulter.bezierCurveTo(310.2, 197.3, 315.3, 199.7, 315.3, 199.7);
        vaulter.bezierCurveTo(315.3, 199.7, 316.4, 200.6, 316.2, 201.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.0, 345.1);
        vaulter.lineTo(425.0, 345.1);
        vaulter.bezierCurveTo(425.3, 334.0, 426.3, 275.5, 423.4, 255.6);
        vaulter.bezierCurveTo(420.7, 236.8, 413.2, 210.2, 392.8, 190.0);
        vaulter.bezierCurveTo(372.4, 169.8, 345.9, 166.7, 327.3, 167.7);
        vaulter.bezierCurveTo(307.2, 168.8, 291.6, 174.7, 291.5, 174.7);
        vaulter.bezierCurveTo(291.5, 174.7, 290.5, 175.0, 290.3, 174.1);
        vaulter.bezierCurveTo(290.0, 173.3, 290.8, 172.9, 290.8, 172.9);
        vaulter.bezierCurveTo(290.9, 172.8, 306.7, 166.8, 327.2, 165.7);
        vaulter.bezierCurveTo(346.2, 164.7, 373.3, 167.8, 394.2, 188.6);
        vaulter.bezierCurveTo(415.0, 209.2, 422.6, 236.2, 425.4, 255.3);
        vaulter.bezierCurveTo(428.7, 277.7, 427.0, 344.4, 427.0, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(334.7, 226.7);
        vaulter.bezierCurveTo(337.4, 227.2, 340.9, 219.2, 338.4, 216.2);
        vaulter.bezierCurveTo(335.9, 213.2, 332.8, 205.9, 329.7, 202.4);
        vaulter.bezierCurveTo(326.6, 198.9, 321.0, 195.9, 318.8, 197.6);
        vaulter.bezierCurveTo(316.7, 199.2, 315.7, 206.0, 317.0, 208.4);
        vaulter.bezierCurveTo(318.2, 210.7, 322.3, 212.4, 324.4, 216.2);
        vaulter.bezierCurveTo(326.6, 220.0, 329.4, 225.6, 334.7, 226.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(338.4, 216.2);
        vaulter.bezierCurveTo(338.4, 216.2, 340.1, 218.1, 341.9, 217.6);
        vaulter.bezierCurveTo(343.8, 217.2, 348.1, 209.8, 351.2, 207.1);
        vaulter.bezierCurveTo(354.3, 204.4, 356.4, 202.5, 358.3, 202.5);
        vaulter.bezierCurveTo(360.1, 202.5, 362.0, 205.0, 362.6, 207.1);
        vaulter.bezierCurveTo(363.2, 209.2, 371.3, 217.4, 372.1, 217.8);
        vaulter.bezierCurveTo(373.0, 218.3, 375.7, 218.8, 376.7, 217.8);
        vaulter.bezierCurveTo(377.7, 216.8, 379.6, 217.2, 379.6, 217.2);
        vaulter.bezierCurveTo(379.6, 217.2, 380.4, 218.3, 379.6, 219.5);
        vaulter.bezierCurveTo(378.8, 220.7, 376.7, 222.0, 376.7, 223.0);
        vaulter.bezierCurveTo(376.7, 224.1, 373.6, 225.3, 372.6, 224.9);
        vaulter.bezierCurveTo(371.5, 224.5, 369.9, 221.6, 369.9, 221.6);
        vaulter.bezierCurveTo(369.9, 221.6, 359.6, 213.6, 358.3, 210.7);
        vaulter.bezierCurveTo(358.3, 210.7, 354.1, 219.5, 351.0, 222.0);
        vaulter.bezierCurveTo(348.0, 224.5, 344.8, 227.3, 342.7, 227.7);
        vaulter.bezierCurveTo(339.3, 228.4, 336.2, 227.5, 333.2, 226.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(328.1, 213.9);
        vaulter.bezierCurveTo(328.1, 213.9, 333.0, 209.7, 327.6, 203.6);
        vaulter.bezierCurveTo(322.2, 197.5, 318.1, 198.1, 316.5, 199.5);
        vaulter.bezierCurveTo(315.3, 200.7, 315.4, 204.4, 317.6, 207.6);
        vaulter.bezierCurveTo(320.4, 209.9, 322.6, 212.5, 326.5, 214.0);
        vaulter.bezierCurveTo(326.5, 214.0, 327.5, 214.0, 328.1, 213.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(318.3, 207.1);
        vaulter.bezierCurveTo(318.3, 207.1, 315.4, 202.5, 315.4, 200.0);
        vaulter.bezierCurveTo(315.4, 197.6, 315.4, 193.4, 315.4, 193.4);
        vaulter.lineTo(310.2, 183.9);
        vaulter.bezierCurveTo(310.2, 183.9, 306.7, 174.2, 305.3, 173.8);
        vaulter.bezierCurveTo(303.8, 173.3, 301.0, 171.8, 301.5, 169.8);
        vaulter.bezierCurveTo(302.0, 167.8, 304.2, 167.1, 305.1, 167.1);
        vaulter.bezierCurveTo(305.9, 167.1, 309.2, 168.6, 308.6, 169.4);
        vaulter.bezierCurveTo(308.0, 170.2, 307.8, 171.3, 308.0, 172.1);
        vaulter.bezierCurveTo(308.2, 172.9, 312.5, 181.0, 312.5, 181.0);
        vaulter.bezierCurveTo(312.5, 181.0, 317.3, 186.2, 318.3, 190.1);
        vaulter.bezierCurveTo(318.3, 190.1, 323.1, 198.2, 323.5, 199.4);
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
        vaulter.moveTo(356.0, 205.6);
        vaulter.bezierCurveTo(356.0, 205.6, 357.5, 204.8, 358.1, 201.6);
        vaulter.bezierCurveTo(358.7, 198.5, 356.4, 189.1, 357.1, 187.6);
        vaulter.bezierCurveTo(357.7, 186.2, 361.4, 185.1, 364.2, 186.2);
        vaulter.bezierCurveTo(366.9, 187.2, 374.0, 188.4, 379.2, 188.6);
        vaulter.bezierCurveTo(379.2, 188.6, 379.8, 186.5, 381.1, 185.8);
        vaulter.bezierCurveTo(382.5, 185.0, 382.1, 182.6, 382.8, 182.2);
        vaulter.bezierCurveTo(383.6, 181.8, 384.2, 183.1, 384.2, 183.5);
        vaulter.bezierCurveTo(384.2, 183.8, 384.4, 184.9, 384.1, 186.2);
        vaulter.bezierCurveTo(383.9, 187.2, 383.3, 190.6, 383.4, 191.2);
        vaulter.bezierCurveTo(383.5, 191.8, 382.8, 193.3, 382.2, 193.3);
        vaulter.bezierCurveTo(381.5, 193.3, 379.7, 193.2, 379.4, 192.2);
        vaulter.bezierCurveTo(379.4, 192.2, 370.0, 193.3, 368.1, 193.2);
        vaulter.bezierCurveTo(366.1, 193.2, 366.5, 192.7, 365.3, 192.5);
        vaulter.bezierCurveTo(365.3, 192.5, 369.7, 201.1, 368.2, 208.5);
        vaulter.bezierCurveTo(366.7, 216.0, 360.1, 215.3, 360.1, 215.3);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(340.9, 193.3);
        vaulter.bezierCurveTo(340.9, 193.3, 343.5, 186.7, 342.7, 183.8);
        vaulter.bezierCurveTo(342.7, 183.8, 344.1, 174.1, 343.8, 173.1);
        vaulter.bezierCurveTo(343.8, 173.1, 344.9, 165.3, 345.2, 164.2);
        vaulter.bezierCurveTo(345.6, 163.1, 347.3, 160.7, 346.8, 159.5);
        vaulter.bezierCurveTo(346.3, 158.2, 344.1, 157.1, 343.9, 157.3);
        vaulter.bezierCurveTo(343.7, 157.4, 341.6, 160.3, 342.6, 161.2);
        vaulter.bezierCurveTo(343.5, 162.1, 343.4, 164.2, 343.2, 165.1);
        vaulter.bezierCurveTo(343.0, 166.1, 340.9, 173.7, 340.9, 173.7);
        vaulter.bezierCurveTo(340.9, 173.7, 338.7, 180.9, 338.8, 182.5);
        vaulter.bezierCurveTo(338.8, 182.5, 334.0, 190.2, 333.6, 192.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.0, 345.1);
        vaulter.lineTo(425.0, 345.1);
        vaulter.bezierCurveTo(425.0, 344.5, 426.0, 266.5, 423.7, 248.4);
        vaulter.bezierCurveTo(421.6, 231.5, 416.1, 206.9, 401.4, 185.7);
        vaulter.bezierCurveTo(389.8, 169.0, 370.3, 160.5, 345.1, 161.3);
        vaulter.bezierCurveTo(326.0, 161.9, 310.1, 167.5, 310.0, 167.6);
        vaulter.bezierCurveTo(310.0, 167.6, 309.1, 167.8, 308.8, 166.9);
        vaulter.bezierCurveTo(308.5, 166.0, 309.3, 165.7, 309.3, 165.7);
        vaulter.bezierCurveTo(309.5, 165.6, 325.5, 159.9, 345.0, 159.3);
        vaulter.bezierCurveTo(371.0, 158.5, 391.1, 167.3, 403.1, 184.6);
        vaulter.bezierCurveTo(418.0, 206.1, 423.6, 231.0, 425.7, 248.1);
        vaulter.bezierCurveTo(428.0, 266.9, 427.1, 344.6, 427.0, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(337.4, 189.6);
        vaulter.bezierCurveTo(337.4, 189.6, 335.9, 184.8, 335.0, 184.0);
        vaulter.bezierCurveTo(334.2, 183.2, 330.9, 180.5, 330.9, 180.5);
        vaulter.bezierCurveTo(330.9, 180.5, 326.3, 178.2, 323.3, 181.6);
        vaulter.bezierCurveTo(320.3, 184.9, 323.1, 189.6, 324.7, 191.1);
        vaulter.bezierCurveTo(326.3, 192.5, 331.6, 194.6, 331.6, 194.6);
        vaulter.bezierCurveTo(331.6, 194.6, 331.9, 194.8, 332.2, 195.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(356.7, 203.7);
        vaulter.bezierCurveTo(356.7, 203.7, 346.9, 197.0, 344.8, 193.9);
        vaulter.bezierCurveTo(342.7, 190.8, 336.9, 190.8, 335.8, 192.0);
        vaulter.bezierCurveTo(334.8, 193.3, 332.5, 197.9, 334.2, 201.6);
        vaulter.bezierCurveTo(335.8, 205.4, 341.1, 209.2, 346.3, 212.3);
        vaulter.bezierCurveTo(351.5, 215.4, 359.4, 216.3, 363.2, 214.0);
        vaulter.bezierCurveTo(367.0, 211.7, 365.1, 207.9, 363.2, 206.0);
        vaulter.bezierCurveTo(361.3, 204.1, 358.2, 204.7, 356.7, 203.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(354.4, 205.6);
        vaulter.bezierCurveTo(354.4, 205.6, 355.9, 204.8, 356.5, 201.6);
        vaulter.bezierCurveTo(357.1, 198.5, 354.8, 189.1, 355.5, 187.6);
        vaulter.bezierCurveTo(356.1, 186.2, 359.9, 185.1, 362.6, 186.2);
        vaulter.bezierCurveTo(365.3, 187.2, 370.5, 190.1, 375.7, 190.4);
        vaulter.bezierCurveTo(375.7, 190.4, 377.8, 188.5, 379.2, 187.8);
        vaulter.bezierCurveTo(380.5, 187.0, 380.3, 186.2, 381.1, 185.8);
        vaulter.bezierCurveTo(381.9, 185.3, 383.3, 185.8, 383.3, 186.2);
        vaulter.bezierCurveTo(383.3, 186.5, 383.3, 188.0, 382.7, 188.9);
        vaulter.bezierCurveTo(382.1, 189.7, 380.0, 193.2, 380.1, 193.9);
        vaulter.bezierCurveTo(380.2, 194.5, 379.5, 196.0, 378.8, 196.0);
        vaulter.bezierCurveTo(378.2, 196.0, 376.4, 195.8, 376.1, 194.9);
        vaulter.bezierCurveTo(376.1, 194.9, 369.8, 192.9, 367.9, 192.8);
        vaulter.bezierCurveTo(365.9, 192.7, 364.9, 192.7, 363.7, 192.5);
        vaulter.bezierCurveTo(363.7, 192.5, 368.1, 201.1, 366.6, 208.5);
        vaulter.bezierCurveTo(365.1, 216.0, 358.6, 215.3, 358.6, 215.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(346.1, 208.3);
        vaulter.bezierCurveTo(346.1, 208.3, 350.6, 203.7, 344.8, 197.9);
        vaulter.bezierCurveTo(339.0, 192.2, 334.9, 193.0, 333.4, 194.6);
        vaulter.bezierCurveTo(332.2, 195.9, 332.5, 199.5, 335.1, 202.7);
        vaulter.bezierCurveTo(338.0, 204.7, 340.4, 207.3, 344.4, 208.5);
        vaulter.bezierCurveTo(344.4, 208.5, 345.5, 208.4, 346.1, 208.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(334.1, 201.0);
        vaulter.bezierCurveTo(333.3, 198.9, 330.6, 190.6, 331.2, 188.4);
        vaulter.bezierCurveTo(331.2, 188.4, 328.2, 181.1, 328.2, 180.6);
        vaulter.bezierCurveTo(328.2, 180.2, 325.3, 175.5, 324.4, 172.2);
        vaulter.bezierCurveTo(323.5, 168.9, 321.0, 166.5, 321.0, 166.5);
        vaulter.bezierCurveTo(321.0, 166.5, 318.1, 165.3, 317.9, 164.3);
        vaulter.bezierCurveTo(317.6, 163.4, 319.4, 161.7, 320.0, 161.4);
        vaulter.bezierCurveTo(320.6, 161.0, 323.9, 161.4, 323.9, 161.4);
        vaulter.bezierCurveTo(323.9, 161.4, 325.3, 163.4, 324.6, 164.0);
        vaulter.bezierCurveTo(323.8, 164.7, 323.9, 165.3, 324.2, 165.8);
        vaulter.bezierCurveTo(324.6, 166.2, 327.7, 171.7, 327.7, 171.7);
        vaulter.bezierCurveTo(327.7, 171.7, 332.2, 177.5, 332.9, 178.9);
        vaulter.bezierCurveTo(333.5, 180.3, 335.7, 186.2, 335.7, 186.2);
        vaulter.bezierCurveTo(335.7, 186.2, 339.1, 193.4, 339.8, 195.1);
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
        vaulter.moveTo(349.6, 185.9);
        vaulter.bezierCurveTo(349.6, 185.9, 349.6, 178.1, 349.6, 171.6);
        vaulter.bezierCurveTo(349.6, 171.6, 351.1, 166.1, 351.9, 162.6);
        vaulter.bezierCurveTo(352.7, 159.0, 352.5, 155.2, 353.3, 153.5);
        vaulter.bezierCurveTo(353.3, 153.5, 355.2, 150.2, 354.9, 149.7);
        vaulter.bezierCurveTo(354.5, 149.3, 353.0, 148.0, 353.0, 148.0);
        vaulter.lineTo(350.2, 148.0);
        vaulter.bezierCurveTo(350.2, 148.0, 348.6, 150.8, 349.6, 151.6);
        vaulter.bezierCurveTo(350.5, 152.4, 350.5, 156.1, 350.4, 156.7);
        vaulter.bezierCurveTo(350.2, 157.3, 347.7, 162.5, 347.3, 164.8);
        vaulter.lineTo(344.5, 172.8);
        vaulter.lineTo(342.1, 181.3);
        vaulter.bezierCurveTo(342.1, 181.3, 341.2, 185.4, 342.1, 186.8);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.0, 345.1);
        vaulter.lineTo(425.0, 345.1);
        vaulter.bezierCurveTo(425.1, 344.3, 427.2, 255.7, 425.5, 238.4);
        vaulter.bezierCurveTo(423.9, 222.6, 418.7, 199.3, 402.7, 178.5);
        vaulter.bezierCurveTo(386.6, 157.5, 364.8, 152.8, 349.3, 152.5);
        vaulter.bezierCurveTo(332.6, 152.2, 319.9, 156.8, 319.3, 157.0);
        vaulter.bezierCurveTo(319.3, 157.0, 318.4, 157.4, 318.0, 156.5);
        vaulter.bezierCurveTo(317.6, 155.6, 318.6, 155.1, 318.6, 155.1);
        vaulter.bezierCurveTo(319.2, 154.9, 332.2, 150.2, 349.4, 150.5);
        vaulter.bezierCurveTo(365.3, 150.8, 387.7, 155.7, 404.3, 177.3);
        vaulter.bezierCurveTo(420.6, 198.5, 425.9, 222.1, 427.5, 238.2);
        vaulter.bezierCurveTo(429.2, 255.7, 427.1, 344.7, 427.0, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(369.3, 199.1);
        vaulter.bezierCurveTo(369.3, 199.1, 378.5, 197.1, 377.7, 188.5);
        vaulter.bezierCurveTo(377.1, 181.8, 368.4, 172.0, 368.4, 172.0);
        vaulter.bezierCurveTo(373.6, 171.9, 377.3, 166.6, 384.6, 166.8);
        vaulter.bezierCurveTo(384.6, 166.8, 385.8, 167.5, 386.5, 167.6);
        vaulter.bezierCurveTo(387.2, 167.6, 388.5, 166.6, 388.5, 166.0);
        vaulter.bezierCurveTo(388.5, 165.4, 387.4, 161.6, 387.8, 159.5);
        vaulter.bezierCurveTo(388.0, 158.3, 387.8, 157.0, 387.3, 156.1);
        vaulter.bezierCurveTo(386.6, 155.1, 386.3, 154.3, 385.4, 154.2);
        vaulter.bezierCurveTo(384.6, 154.2, 384.6, 156.7, 384.6, 156.7);
        vaulter.bezierCurveTo(384.6, 156.7, 383.4, 159.9, 383.4, 162.8);
        vaulter.bezierCurveTo(383.4, 164.3, 366.0, 166.0, 366.0, 166.0);
        vaulter.bezierCurveTo(366.0, 166.0, 361.8, 166.9, 360.8, 169.1);
        vaulter.bezierCurveTo(359.8, 171.3, 360.6, 174.3, 361.5, 175.3);
        vaulter.bezierCurveTo(362.3, 176.4, 366.8, 186.2, 366.8, 186.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(345.1, 179.8);
        vaulter.bezierCurveTo(345.1, 179.8, 342.5, 175.4, 341.6, 174.8);
        vaulter.bezierCurveTo(340.6, 174.2, 336.8, 172.4, 336.8, 172.4);
        vaulter.bezierCurveTo(336.8, 172.4, 331.9, 171.2, 329.7, 175.1);
        vaulter.bezierCurveTo(327.5, 179.0, 331.3, 182.9, 333.1, 183.9);
        vaulter.bezierCurveTo(335.0, 185.0, 340.6, 185.8, 340.6, 185.8);
        vaulter.bezierCurveTo(340.6, 185.8, 340.9, 185.9, 341.3, 186.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(341.1, 187.6);
        vaulter.bezierCurveTo(341.1, 187.6, 342.1, 193.8, 346.7, 194.8);
        vaulter.bezierCurveTo(351.2, 195.8, 354.8, 198.5, 356.8, 199.1);
        vaulter.bezierCurveTo(358.9, 199.8, 365.7, 200.2, 368.4, 199.1);
        vaulter.bezierCurveTo(371.1, 198.1, 370.1, 189.4, 365.7, 189.0);
        vaulter.bezierCurveTo(361.4, 188.6, 351.9, 181.6, 349.2, 181.3);
        vaulter.bezierCurveTo(346.5, 181.1, 340.9, 182.0, 341.1, 187.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(365.3, 199.8);
        vaulter.bezierCurveTo(365.3, 199.8, 374.7, 199.6, 375.0, 192.9);
        vaulter.bezierCurveTo(375.3, 186.1, 364.1, 176.6, 364.1, 176.6);
        vaulter.bezierCurveTo(369.2, 176.5, 372.8, 174.9, 380.0, 175.1);
        vaulter.bezierCurveTo(380.0, 175.1, 381.3, 175.8, 381.9, 175.9);
        vaulter.bezierCurveTo(382.6, 176.0, 383.9, 175.0, 383.9, 174.3);
        vaulter.bezierCurveTo(383.9, 173.7, 383.0, 170.1, 383.0, 169.1);
        vaulter.bezierCurveTo(383.0, 168.1, 382.4, 166.0, 382.3, 164.9);
        vaulter.bezierCurveTo(382.1, 163.6, 381.7, 162.6, 380.8, 162.6);
        vaulter.bezierCurveTo(380.0, 162.5, 379.7, 165.8, 379.7, 165.8);
        vaulter.bezierCurveTo(379.7, 165.8, 378.2, 168.3, 378.8, 171.2);
        vaulter.bezierCurveTo(379.2, 172.6, 361.7, 170.6, 361.7, 170.6);
        vaulter.bezierCurveTo(361.7, 170.6, 357.5, 171.5, 356.5, 173.7);
        vaulter.bezierCurveTo(355.5, 175.9, 356.3, 178.8, 357.1, 179.9);
        vaulter.bezierCurveTo(358.0, 181.0, 364.0, 190.5, 364.0, 190.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(353.7, 194.9);
        vaulter.bezierCurveTo(354.6, 193.5, 354.9, 188.0, 350.2, 185.2);
        vaulter.bezierCurveTo(346.2, 182.8, 343.1, 184.0, 342.1, 185.8);
        vaulter.bezierCurveTo(341.2, 187.3, 342.4, 190.8, 345.5, 193.2);
        vaulter.bezierCurveTo(348.8, 194.6, 348.0, 195.2, 352.1, 195.5);
        vaulter.bezierCurveTo(352.1, 195.5, 353.2, 195.4, 353.7, 194.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(343.1, 190.5);
        vaulter.bezierCurveTo(343.1, 190.5, 341.3, 187.3, 341.8, 184.3);
        vaulter.bezierCurveTo(341.8, 184.3, 338.7, 177.8, 338.7, 172.7);
        vaulter.bezierCurveTo(338.7, 172.7, 334.8, 168.4, 334.1, 164.6);
        vaulter.bezierCurveTo(333.3, 160.9, 329.9, 156.1, 329.9, 156.1);
        vaulter.bezierCurveTo(329.9, 156.1, 325.9, 155.3, 325.5, 153.3);
        vaulter.lineTo(326.4, 151.6);
        vaulter.bezierCurveTo(326.4, 151.6, 330.0, 150.4, 331.6, 150.6);
        vaulter.bezierCurveTo(333.1, 150.8, 333.7, 153.1, 333.3, 153.6);
        vaulter.bezierCurveTo(332.8, 154.1, 333.6, 155.8, 334.3, 156.9);
        vaulter.bezierCurveTo(335.0, 158.0, 338.2, 162.6, 338.7, 163.5);
        vaulter.bezierCurveTo(339.3, 164.6, 343.2, 169.0, 343.7, 170.6);
        vaulter.bezierCurveTo(344.1, 172.1, 347.6, 181.2, 347.6, 181.2);
        vaulter.bezierCurveTo(347.6, 181.2, 349.5, 183.7, 349.8, 185.4);
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
        vaulter.moveTo(356.4, 179.7);
        vaulter.bezierCurveTo(356.4, 179.7, 358.4, 174.8, 357.1, 170.8);
        vaulter.bezierCurveTo(357.1, 170.8, 359.3, 163.6, 359.3, 159.8);
        vaulter.bezierCurveTo(359.3, 159.8, 360.2, 155.6, 360.4, 153.3);
        vaulter.bezierCurveTo(360.6, 150.9, 360.4, 148.5, 360.4, 148.5);
        vaulter.bezierCurveTo(360.4, 148.5, 362.4, 146.0, 362.3, 144.6);
        vaulter.bezierCurveTo(362.1, 143.2, 359.3, 142.9, 359.3, 142.9);
        vaulter.lineTo(356.4, 143.6);
        vaulter.bezierCurveTo(356.4, 143.6, 355.6, 146.4, 356.4, 147.4);
        vaulter.bezierCurveTo(357.1, 148.3, 357.1, 148.3, 357.1, 148.3);
        vaulter.bezierCurveTo(357.6, 152.3, 355.7, 154.7, 356.0, 157.8);
        vaulter.bezierCurveTo(354.2, 161.2, 352.2, 169.5, 352.2, 169.5);
        vaulter.bezierCurveTo(352.2, 169.5, 349.5, 176.2, 350.0, 179.7);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(352.2, 173.6);
        vaulter.bezierCurveTo(352.2, 173.6, 349.2, 169.6, 348.2, 169.1);
        vaulter.bezierCurveTo(347.2, 168.6, 343.2, 167.2, 343.2, 167.2);
        vaulter.bezierCurveTo(343.2, 167.2, 338.1, 166.5, 336.4, 170.6);
        vaulter.bezierCurveTo(334.6, 174.7, 338.8, 178.2, 340.7, 179.0);
        vaulter.bezierCurveTo(342.7, 179.9, 348.4, 180.1, 348.4, 180.1);
        vaulter.bezierCurveTo(348.4, 180.1, 348.7, 180.2, 349.0, 180.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(361.7, 187.7);
        vaulter.bezierCurveTo(362.5, 186.2, 362.2, 180.7, 357.3, 178.3);
        vaulter.bezierCurveTo(353.1, 176.4, 350.1, 177.9, 349.3, 179.8);
        vaulter.bezierCurveTo(348.6, 181.4, 350.1, 184.7, 353.4, 186.9);
        vaulter.bezierCurveTo(356.8, 187.9, 356.1, 188.5, 360.2, 188.4);
        vaulter.bezierCurveTo(360.2, 188.4, 361.3, 188.3, 361.7, 187.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.0, 345.1);
        vaulter.lineTo(425.0, 345.1);
        vaulter.bezierCurveTo(425.0, 344.3, 426.6, 244.8, 424.8, 226.2);
        vaulter.bezierCurveTo(423.1, 208.9, 418.0, 184.7, 403.5, 167.6);
        vaulter.bezierCurveTo(388.9, 150.4, 369.5, 146.0, 355.8, 145.4);
        vaulter.bezierCurveTo(341.0, 144.7, 329.7, 147.9, 329.3, 148.1);
        vaulter.bezierCurveTo(329.3, 148.1, 328.4, 148.2, 328.1, 147.4);
        vaulter.bezierCurveTo(327.8, 146.6, 328.7, 146.2, 328.7, 146.2);
        vaulter.bezierCurveTo(329.2, 146.0, 340.7, 142.7, 355.9, 143.4);
        vaulter.bezierCurveTo(370.0, 144.1, 390.0, 148.6, 405.0, 166.3);
        vaulter.bezierCurveTo(419.9, 183.8, 425.1, 208.4, 426.8, 226.0);
        vaulter.bezierCurveTo(428.7, 244.9, 427.1, 344.6, 427.0, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(348.8, 181.4);
        vaulter.bezierCurveTo(348.8, 181.4, 348.9, 184.3, 350.9, 186.0);
        vaulter.bezierCurveTo(352.9, 187.7, 359.6, 189.3, 359.6, 189.3);
        vaulter.bezierCurveTo(359.6, 189.3, 362.6, 191.5, 366.9, 191.9);
        vaulter.bezierCurveTo(371.3, 192.4, 373.8, 190.4, 373.8, 190.4);
        vaulter.bezierCurveTo(373.8, 190.4, 375.3, 184.3, 371.9, 182.9);
        vaulter.bezierCurveTo(370.1, 181.7, 368.2, 180.6, 366.5, 179.7);
        vaulter.bezierCurveTo(364.8, 178.7, 358.9, 176.3, 355.6, 175.2);
        vaulter.bezierCurveTo(352.3, 174.1, 348.4, 179.6, 348.8, 181.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(373.2, 190.7);
        vaulter.bezierCurveTo(373.2, 190.7, 381.7, 188.4, 381.5, 182.9);
        vaulter.bezierCurveTo(381.4, 177.5, 373.6, 172.7, 371.3, 172.4);
        vaulter.bezierCurveTo(368.9, 172.1, 367.5, 171.6, 367.5, 171.6);
        vaulter.bezierCurveTo(367.5, 171.6, 371.3, 169.7, 372.2, 166.9);
        vaulter.bezierCurveTo(373.1, 164.1, 379.5, 159.5, 379.5, 159.5);
        vaulter.bezierCurveTo(379.5, 159.5, 381.5, 159.3, 382.3, 158.7);
        vaulter.bezierCurveTo(383.1, 158.1, 383.2, 157.1, 382.3, 156.0);
        vaulter.bezierCurveTo(381.4, 155.0, 379.5, 153.6, 377.5, 152.7);
        vaulter.bezierCurveTo(375.5, 151.8, 371.5, 148.4, 370.4, 149.2);
        vaulter.bezierCurveTo(369.8, 149.6, 371.5, 152.2, 372.4, 152.5);
        vaulter.bezierCurveTo(372.4, 152.5, 374.6, 156.0, 376.5, 157.6);
        vaulter.bezierCurveTo(376.5, 157.6, 371.7, 161.2, 367.5, 163.5);
        vaulter.bezierCurveTo(363.4, 165.8, 359.2, 168.2, 359.3, 170.8);
        vaulter.bezierCurveTo(359.5, 173.3, 361.2, 176.3, 363.9, 178.0);
        vaulter.lineTo(371.1, 182.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(351.9, 184.5);
        vaulter.bezierCurveTo(351.9, 184.5, 348.0, 182.2, 347.8, 173.3);
        vaulter.bezierCurveTo(347.8, 173.3, 344.7, 166.8, 344.1, 163.1);
        vaulter.bezierCurveTo(344.1, 163.1, 340.5, 153.6, 338.4, 150.8);
        vaulter.bezierCurveTo(338.4, 150.8, 336.5, 148.9, 335.7, 148.6);
        vaulter.bezierCurveTo(334.9, 148.3, 335.6, 144.9, 335.7, 144.6);
        vaulter.bezierCurveTo(335.9, 144.3, 338.5, 144.6, 338.5, 144.6);
        vaulter.bezierCurveTo(338.5, 144.6, 340.4, 143.6, 341.2, 143.6);
        vaulter.bezierCurveTo(341.9, 143.6, 343.5, 146.3, 342.9, 147.8);
        vaulter.bezierCurveTo(342.2, 149.4, 342.2, 150.6, 342.9, 152.0);
        vaulter.bezierCurveTo(343.5, 153.4, 348.2, 160.3, 348.7, 161.8);
        vaulter.bezierCurveTo(349.2, 163.4, 352.8, 170.8, 352.8, 170.8);
        vaulter.bezierCurveTo(352.8, 170.8, 355.0, 173.6, 356.4, 178.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(373.9, 190.5);
        vaulter.bezierCurveTo(379.1, 190.2, 384.2, 186.9, 384.1, 182.2);
        vaulter.bezierCurveTo(383.9, 177.5, 371.9, 167.6, 371.9, 167.6);
        vaulter.bezierCurveTo(376.2, 165.2, 380.5, 160.0, 384.1, 157.2);
        vaulter.bezierCurveTo(384.1, 157.2, 386.4, 157.6, 387.1, 157.2);
        vaulter.bezierCurveTo(387.7, 156.7, 388.5, 154.9, 387.2, 153.6);
        vaulter.bezierCurveTo(385.8, 152.4, 384.9, 150.7, 384.2, 149.4);
        vaulter.bezierCurveTo(383.4, 148.0, 382.4, 144.4, 382.4, 144.4);
        vaulter.bezierCurveTo(382.4, 144.4, 381.5, 143.5, 381.0, 143.9);
        vaulter.bezierCurveTo(380.5, 144.3, 380.7, 146.2, 380.8, 146.6);
        vaulter.bezierCurveTo(381.3, 148.4, 380.2, 150.7, 381.7, 154.2);
        vaulter.bezierCurveTo(374.0, 160.8, 367.3, 162.3, 363.5, 165.9);
        vaulter.bezierCurveTo(363.5, 165.9, 359.2, 169.8, 360.7, 172.7);
        vaulter.bezierCurveTo(362.1, 175.6, 373.5, 182.9, 373.5, 182.9);
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
        vaulter.moveTo(360.1, 169.0);
        vaulter.bezierCurveTo(360.1, 169.0, 361.8, 162.1, 363.2, 160.1);
        vaulter.bezierCurveTo(363.2, 160.1, 363.2, 155.1, 364.9, 150.0);
        vaulter.bezierCurveTo(364.9, 150.0, 364.8, 147.3, 365.9, 145.5);
        vaulter.bezierCurveTo(367.0, 143.6, 366.8, 140.3, 366.8, 140.3);
        vaulter.bezierCurveTo(366.8, 140.3, 365.4, 138.8, 366.0, 137.0);
        vaulter.bezierCurveTo(366.6, 135.3, 368.0, 136.2, 368.0, 136.2);
        vaulter.bezierCurveTo(368.0, 136.2, 370.3, 136.1, 371.3, 137.0);
        vaulter.bezierCurveTo(372.2, 137.9, 372.4, 140.4, 371.3, 140.9);
        vaulter.bezierCurveTo(370.2, 141.4, 369.4, 144.8, 369.4, 144.8);
        vaulter.bezierCurveTo(369.4, 144.8, 369.4, 150.0, 368.8, 150.5);
        vaulter.bezierCurveTo(368.8, 150.5, 368.2, 158.9, 367.5, 160.9);
        vaulter.bezierCurveTo(367.5, 160.9, 367.7, 168.7, 366.8, 170.5);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(358.6, 165.5);
        vaulter.bezierCurveTo(358.6, 165.5, 354.5, 162.6, 353.4, 162.5);
        vaulter.bezierCurveTo(352.2, 162.3, 348.0, 162.2, 348.0, 162.2);
        vaulter.bezierCurveTo(348.0, 162.2, 343.0, 163.2, 342.6, 167.6);
        vaulter.bezierCurveTo(342.3, 172.0, 347.3, 174.1, 349.4, 174.2);
        vaulter.bezierCurveTo(351.6, 174.4, 357.0, 172.9, 357.0, 172.9);
        vaulter.bezierCurveTo(357.0, 172.9, 357.4, 172.9, 357.8, 172.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(372.4, 175.7);
        vaulter.bezierCurveTo(372.6, 174.1, 370.6, 169.0, 365.2, 168.3);
        vaulter.bezierCurveTo(360.6, 167.8, 358.3, 170.1, 358.1, 172.2);
        vaulter.bezierCurveTo(357.9, 174.0, 360.3, 176.6, 364.2, 177.6);
        vaulter.bezierCurveTo(367.8, 177.5, 367.3, 178.3, 371.2, 176.9);
        vaulter.bezierCurveTo(371.2, 176.9, 372.2, 176.5, 372.4, 175.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.0, 345.1);
        vaulter.lineTo(425.0, 345.1);
        vaulter.bezierCurveTo(425.0, 344.9, 425.2, 243.9, 425.2, 234.3);
        vaulter.bezierCurveTo(425.3, 217.2, 422.8, 189.5, 409.0, 166.0);
        vaulter.bezierCurveTo(400.0, 150.7, 385.7, 141.6, 366.3, 138.9);
        vaulter.bezierCurveTo(351.8, 136.9, 339.8, 139.4, 339.7, 139.5);
        vaulter.bezierCurveTo(339.7, 139.5, 338.6, 139.6, 338.5, 138.6);
        vaulter.bezierCurveTo(338.3, 137.6, 339.2, 137.3, 339.2, 137.3);
        vaulter.bezierCurveTo(339.7, 137.2, 351.7, 134.7, 366.6, 136.8);
        vaulter.bezierCurveTo(380.4, 138.7, 399.3, 145.1, 410.9, 164.9);
        vaulter.bezierCurveTo(424.9, 188.8, 427.4, 217.0, 427.4, 234.3);
        vaulter.bezierCurveTo(427.4, 244.1, 427.0, 344.9, 427.0, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(361.9, 166.7);
        vaulter.bezierCurveTo(361.9, 166.7, 357.6, 167.9, 357.4, 170.8);
        vaulter.bezierCurveTo(357.1, 173.7, 358.8, 178.0, 364.2, 178.9);
        vaulter.bezierCurveTo(369.6, 179.7, 371.8, 179.3, 375.2, 179.9);
        vaulter.bezierCurveTo(378.5, 180.5, 383.0, 177.8, 382.9, 174.5);
        vaulter.bezierCurveTo(382.8, 171.2, 377.4, 169.4, 375.4, 169.1);
        vaulter.bezierCurveTo(373.3, 168.9, 367.1, 168.5, 365.8, 167.7);
        vaulter.bezierCurveTo(364.6, 166.9, 361.9, 166.7, 361.9, 166.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(364.9, 169.8);
        vaulter.bezierCurveTo(364.9, 169.8, 363.1, 162.7, 361.1, 159.3);
        vaulter.bezierCurveTo(361.1, 159.3, 358.8, 152.3, 357.3, 150.4);
        vaulter.bezierCurveTo(357.3, 150.4, 355.3, 146.2, 353.4, 144.0);
        vaulter.bezierCurveTo(351.6, 141.8, 351.6, 139.7, 351.6, 139.7);
        vaulter.bezierCurveTo(351.6, 139.7, 353.0, 138.9, 353.0, 138.0);
        vaulter.bezierCurveTo(353.0, 137.1, 351.6, 135.1, 351.6, 135.1);
        vaulter.bezierCurveTo(351.6, 135.1, 349.4, 135.5, 348.6, 135.7);
        vaulter.bezierCurveTo(347.7, 135.9, 346.9, 135.0, 346.4, 135.1);
        vaulter.bezierCurveTo(345.8, 135.3, 344.9, 137.8, 345.7, 138.9);
        vaulter.bezierCurveTo(346.4, 140.1, 348.1, 140.2, 348.6, 140.7);
        vaulter.bezierCurveTo(349.0, 141.2, 351.0, 147.7, 352.7, 150.9);
        vaulter.lineTo(356.3, 160.3);
        vaulter.bezierCurveTo(356.3, 160.3, 356.5, 167.8, 358.9, 173.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(381.2, 178.0);
        vaulter.bezierCurveTo(385.1, 177.6, 391.5, 172.7, 391.3, 169.6);
        vaulter.bezierCurveTo(391.1, 166.5, 386.5, 161.5, 382.0, 161.5);
        vaulter.bezierCurveTo(377.4, 161.5, 369.4, 161.5, 369.4, 161.5);
        vaulter.bezierCurveTo(369.4, 161.5, 371.8, 159.2, 372.9, 156.3);
        vaulter.bezierCurveTo(373.9, 153.4, 374.9, 145.5, 375.8, 143.9);
        vaulter.bezierCurveTo(376.6, 142.2, 378.4, 142.1, 378.3, 141.0);
        vaulter.bezierCurveTo(378.2, 139.8, 376.8, 138.2, 375.4, 138.4);
        vaulter.bezierCurveTo(373.9, 138.6, 368.7, 137.0, 368.7, 137.0);
        vaulter.bezierCurveTo(368.7, 137.0, 365.3, 136.0, 366.1, 137.8);
        vaulter.bezierCurveTo(366.9, 139.4, 367.9, 139.6, 367.9, 139.6);
        vaulter.bezierCurveTo(367.9, 139.6, 370.9, 142.1, 373.1, 142.6);
        vaulter.lineTo(366.8, 155.1);
        vaulter.bezierCurveTo(366.8, 155.1, 361.8, 160.6, 362.2, 161.6);
        vaulter.bezierCurveTo(362.6, 162.6, 363.5, 167.0, 365.8, 167.7);
        vaulter.bezierCurveTo(368.2, 168.4, 379.7, 170.6, 379.7, 170.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(391.3, 169.6);
        vaulter.bezierCurveTo(391.8, 165.6, 386.5, 159.6, 381.4, 158.9);
        vaulter.bezierCurveTo(376.2, 158.2, 373.4, 158.2, 373.4, 158.2);
        vaulter.bezierCurveTo(373.4, 158.2, 375.5, 155.8, 376.1, 153.3);
        vaulter.bezierCurveTo(376.7, 150.8, 380.0, 142.0, 381.5, 140.3);
        vaulter.bezierCurveTo(381.5, 140.3, 384.2, 140.0, 384.3, 138.4);
        vaulter.bezierCurveTo(384.5, 136.9, 383.1, 135.9, 382.4, 135.9);
        vaulter.bezierCurveTo(381.7, 135.9, 378.9, 134.7, 377.6, 134.1);
        vaulter.bezierCurveTo(376.4, 133.4, 373.0, 131.3, 372.5, 132.0);
        vaulter.bezierCurveTo(372.0, 132.8, 373.0, 133.9, 373.8, 134.4);
        vaulter.bezierCurveTo(373.8, 134.4, 376.2, 137.9, 378.1, 138.6);
        vaulter.bezierCurveTo(373.3, 148.2, 370.9, 148.8, 365.4, 158.2);
        vaulter.bezierCurveTo(365.4, 158.2, 363.4, 160.8, 365.4, 164.5);
        vaulter.bezierCurveTo(367.3, 168.2, 378.7, 169.6, 378.7, 169.6);
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
        vaulter.moveTo(370.7, 157.4);
        vaulter.bezierCurveTo(370.7, 157.4, 372.4, 149.8, 374.1, 147.5);
        vaulter.bezierCurveTo(374.1, 147.5, 374.4, 137.5, 375.3, 136.0);
        vaulter.bezierCurveTo(375.3, 136.0, 375.8, 131.1, 376.4, 128.6);
        vaulter.bezierCurveTo(377.1, 126.1, 376.4, 123.8, 376.4, 123.8);
        vaulter.bezierCurveTo(376.4, 123.8, 376.4, 121.0, 378.1, 121.2);
        vaulter.bezierCurveTo(379.8, 121.5, 381.9, 123.6, 382.7, 125.1);
        vaulter.bezierCurveTo(383.5, 126.5, 380.7, 127.6, 380.4, 128.4);
        vaulter.bezierCurveTo(379.9, 129.8, 380.1, 134.6, 379.2, 137.0);
        vaulter.bezierCurveTo(378.6, 138.7, 379.3, 144.9, 378.9, 147.8);
        vaulter.bezierCurveTo(378.9, 147.8, 378.9, 155.0, 377.9, 157.4);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(370.2, 151.8);
        vaulter.bezierCurveTo(370.2, 151.8, 365.2, 150.4, 364.0, 150.7);
        vaulter.bezierCurveTo(362.8, 150.9, 358.6, 152.4, 358.6, 152.4);
        vaulter.bezierCurveTo(358.6, 152.4, 354.1, 155.2, 355.3, 159.7);
        vaulter.bezierCurveTo(356.6, 164.2, 362.3, 164.3, 364.5, 163.7);
        vaulter.bezierCurveTo(366.7, 163.1, 371.4, 159.6, 371.4, 159.6);
        vaulter.bezierCurveTo(371.4, 159.6, 371.7, 159.4, 372.2, 159.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.globalAlpha = alpha * 0.50;
        vaulter.beginPath();
        vaulter.moveTo(387.5, 156.2);
        vaulter.bezierCurveTo(387.1, 154.5, 383.3, 150.1, 377.7, 151.5);
        vaulter.bezierCurveTo(373.0, 152.7, 371.6, 155.8, 372.2, 158.0);
        vaulter.bezierCurveTo(372.6, 159.8, 376.0, 161.5, 380.2, 161.0);
        vaulter.bezierCurveTo(383.6, 159.6, 383.5, 160.6, 386.8, 157.8);
        vaulter.bezierCurveTo(386.8, 157.8, 387.6, 157.0, 387.5, 156.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.globalAlpha = alpha * 1.00;
        vaulter.beginPath();
        vaulter.moveTo(427.0, 345.1);
        vaulter.bezierCurveTo(427.1, 325.4, 427.4, 239.6, 427.5, 234.4);
        vaulter.bezierCurveTo(427.6, 221.2, 426.1, 195.0, 415.0, 165.1);
        vaulter.bezierCurveTo(406.5, 142.4, 391.6, 129.9, 380.6, 123.4);
        vaulter.bezierCurveTo(368.6, 116.3, 358.7, 114.7, 358.3, 114.6);
        vaulter.bezierCurveTo(358.3, 114.6, 357.2, 114.5, 357.0, 115.5);
        vaulter.bezierCurveTo(356.8, 116.5, 358.0, 116.8, 358.0, 116.8);
        vaulter.bezierCurveTo(358.1, 116.8, 367.8, 118.5, 379.4, 125.3);
        vaulter.bezierCurveTo(390.1, 131.6, 404.7, 143.8, 412.8, 165.8);
        vaulter.bezierCurveTo(423.9, 195.6, 425.3, 221.5, 425.2, 234.5);
        vaulter.bezierCurveTo(425.2, 239.4, 425.1, 325.4, 425.0, 345.1);
        vaulter.lineTo(427.0, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(370.4, 155.9);
        vaulter.bezierCurveTo(370.9, 160.4, 371.6, 162.9, 374.4, 162.8);
        vaulter.bezierCurveTo(377.5, 162.7, 378.7, 161.4, 384.0, 161.9);
        vaulter.bezierCurveTo(391.4, 162.6, 395.4, 160.3, 394.7, 155.9);
        vaulter.bezierCurveTo(393.8, 149.6, 389.8, 151.0, 386.9, 150.7);
        vaulter.bezierCurveTo(384.0, 150.5, 380.0, 150.7, 380.0, 150.7);
        vaulter.bezierCurveTo(374.2, 150.7, 370.0, 151.8, 370.4, 155.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(393.0, 160.6);
        vaulter.bezierCurveTo(393.0, 160.6, 399.4, 157.4, 401.0, 152.5);
        vaulter.bezierCurveTo(402.5, 147.6, 399.5, 141.8, 395.0, 139.8);
        vaulter.bezierCurveTo(390.5, 137.8, 379.5, 139.8, 379.5, 139.8);
        vaulter.bezierCurveTo(379.5, 139.8, 379.0, 134.0, 378.4, 132.7);
        vaulter.bezierCurveTo(377.1, 129.5, 372.6, 116.1, 372.6, 115.7);
        vaulter.bezierCurveTo(372.6, 115.3, 374.2, 113.5, 373.5, 112.6);
        vaulter.bezierCurveTo(372.9, 111.7, 370.2, 109.7, 368.8, 110.1);
        vaulter.bezierCurveTo(367.5, 110.6, 359.0, 110.1, 359.0, 110.1);
        vaulter.bezierCurveTo(359.0, 110.1, 356.6, 110.1, 356.6, 111.0);
        vaulter.bezierCurveTo(356.6, 111.9, 358.4, 113.0, 359.7, 113.0);
        vaulter.bezierCurveTo(359.7, 113.0, 366.2, 116.9, 368.2, 116.8);
        vaulter.bezierCurveTo(370.2, 124.3, 371.6, 144.3, 372.9, 145.8);
        vaulter.bezierCurveTo(374.3, 147.4, 376.4, 147.7, 380.4, 149.2);
        vaulter.bezierCurveTo(384.4, 150.6, 392.2, 150.6, 392.2, 150.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(393.0, 160.6);
        vaulter.bezierCurveTo(393.0, 160.6, 399.4, 157.4, 401.0, 152.5);
        vaulter.bezierCurveTo(402.5, 147.6, 400.4, 141.3, 395.8, 139.3);
        vaulter.bezierCurveTo(391.3, 137.3, 381.1, 138.3, 381.1, 138.3);
        vaulter.bezierCurveTo(381.1, 138.3, 380.5, 132.5, 380.0, 131.2);
        vaulter.bezierCurveTo(378.7, 128.0, 374.2, 114.7, 374.2, 114.2);
        vaulter.bezierCurveTo(374.2, 113.8, 375.8, 112.0, 375.1, 111.1);
        vaulter.bezierCurveTo(374.4, 110.2, 371.7, 108.2, 370.4, 108.7);
        vaulter.bezierCurveTo(369.1, 109.1, 360.6, 108.6, 360.6, 108.6);
        vaulter.bezierCurveTo(360.6, 108.6, 358.1, 108.7, 358.1, 109.6);
        vaulter.bezierCurveTo(358.1, 110.4, 359.9, 111.6, 361.3, 111.6);
        vaulter.bezierCurveTo(361.3, 111.6, 367.8, 115.4, 369.7, 115.3);
        vaulter.bezierCurveTo(371.8, 122.8, 373.1, 142.8, 374.5, 144.3);
        vaulter.bezierCurveTo(375.8, 145.9, 378.0, 146.2, 382.0, 147.7);
        vaulter.bezierCurveTo(386.0, 149.2, 393.8, 147.9, 393.8, 147.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(370.4, 158.3);
        vaulter.bezierCurveTo(370.4, 158.3, 369.5, 148.3, 370.4, 144.1);
        vaulter.bezierCurveTo(370.4, 144.1, 368.2, 140.0, 367.7, 133.6);
        vaulter.bezierCurveTo(367.7, 133.6, 366.8, 128.7, 366.2, 126.4);
        vaulter.bezierCurveTo(365.5, 124.2, 363.7, 121.3, 363.7, 121.3);
        vaulter.bezierCurveTo(363.7, 121.3, 361.7, 116.8, 362.8, 115.7);
        vaulter.bezierCurveTo(363.9, 114.6, 368.2, 115.7, 368.2, 115.7);
        vaulter.bezierCurveTo(368.2, 115.7, 369.7, 118.4, 368.8, 121.3);
        vaulter.bezierCurveTo(368.8, 121.3, 370.2, 126.7, 371.5, 131.6);
        vaulter.lineTo(375.1, 143.2);
        vaulter.bezierCurveTo(375.1, 143.2, 378.9, 154.3, 378.9, 155.6);
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
        vaulter.moveTo(377.8, 148.7);
        vaulter.bezierCurveTo(377.8, 148.7, 380.6, 144.5, 384.5, 144.1);
        vaulter.bezierCurveTo(384.7, 140.3, 386.1, 136.5, 386.2, 132.9);
        vaulter.bezierCurveTo(386.2, 132.9, 385.4, 129.3, 386.2, 128.1);
        vaulter.bezierCurveTo(387.0, 126.9, 388.9, 128.8, 388.9, 128.8);
        vaulter.bezierCurveTo(388.9, 128.8, 390.6, 131.0, 390.6, 132.2);
        vaulter.bezierCurveTo(390.6, 133.4, 389.7, 134.2, 389.7, 134.2);
        vaulter.bezierCurveTo(389.7, 134.2, 388.8, 138.3, 389.1, 140.0);
        vaulter.bezierCurveTo(389.1, 140.0, 389.5, 146.1, 389.2, 147.8);
        vaulter.bezierCurveTo(389.2, 147.8, 388.6, 150.9, 384.9, 152.2);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(377.8, 145.1);
        vaulter.bezierCurveTo(377.8, 145.1, 372.7, 143.7, 371.6, 144.0);
        vaulter.bezierCurveTo(370.4, 144.3, 366.2, 145.7, 366.2, 145.7);
        vaulter.bezierCurveTo(366.2, 145.7, 361.6, 148.5, 362.9, 153.0);
        vaulter.bezierCurveTo(364.2, 157.5, 369.9, 157.7, 372.0, 157.0);
        vaulter.bezierCurveTo(374.2, 156.4, 379.0, 152.9, 379.0, 152.9);
        vaulter.bezierCurveTo(379.0, 152.9, 379.3, 152.7, 379.7, 152.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(394.6, 149.9);
        vaulter.bezierCurveTo(394.3, 148.3, 390.5, 143.9, 384.8, 145.3);
        vaulter.bezierCurveTo(380.2, 146.4, 378.7, 149.6, 379.3, 151.8);
        vaulter.bezierCurveTo(379.8, 153.5, 383.2, 155.2, 387.3, 154.8);
        vaulter.bezierCurveTo(390.8, 153.3, 390.6, 154.3, 393.9, 151.5);
        vaulter.bezierCurveTo(393.9, 151.5, 394.7, 150.7, 394.6, 149.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.0, 345.1);
        vaulter.lineTo(427.5, 237.2);
        vaulter.bezierCurveTo(427.4, 235.1, 426.1, 184.6, 417.6, 165.5);
        vaulter.bezierCurveTo(409.1, 146.3, 367.8, 109.7, 366.0, 108.1);
        vaulter.bezierCurveTo(366.0, 108.1, 365.1, 107.4, 364.4, 108.2);
        vaulter.bezierCurveTo(363.7, 109.0, 364.5, 109.8, 364.5, 109.8);
        vaulter.bezierCurveTo(364.9, 110.2, 407.2, 147.6, 415.5, 166.4);
        vaulter.bezierCurveTo(423.8, 185.1, 425.2, 236.8, 425.2, 237.3);
        vaulter.lineTo(425.0, 345.1);
        vaulter.lineTo(427.0, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(377.5, 149.0);
        vaulter.bezierCurveTo(377.4, 151.4, 379.7, 156.1, 382.6, 155.9);
        vaulter.bezierCurveTo(385.5, 155.7, 394.9, 153.9, 397.8, 152.4);
        vaulter.bezierCurveTo(400.7, 151.0, 403.8, 146.7, 403.2, 142.3);
        vaulter.bezierCurveTo(402.5, 137.8, 397.1, 139.1, 395.0, 140.5);
        vaulter.bezierCurveTo(392.9, 141.8, 385.8, 142.3, 383.8, 142.3);
        vaulter.bezierCurveTo(381.8, 142.3, 377.7, 144.7, 377.5, 149.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(385.5, 148.7);
        vaulter.bezierCurveTo(385.5, 148.7, 384.0, 140.5, 382.4, 137.8);
        vaulter.bezierCurveTo(382.4, 137.8, 382.2, 132.5, 379.7, 128.9);
        vaulter.bezierCurveTo(379.7, 128.9, 378.0, 121.5, 375.3, 116.4);
        vaulter.bezierCurveTo(375.3, 116.4, 376.0, 113.5, 375.2, 112.2);
        vaulter.bezierCurveTo(374.3, 111.0, 371.5, 111.3, 370.4, 111.9);
        vaulter.bezierCurveTo(369.8, 112.3, 369.9, 114.1, 370.6, 115.2);
        vaulter.bezierCurveTo(371.3, 116.3, 372.5, 116.6, 372.6, 117.2);
        vaulter.bezierCurveTo(373.4, 120.2, 374.2, 127.3, 375.3, 130.1);
        vaulter.bezierCurveTo(375.3, 130.1, 375.8, 135.5, 377.2, 138.8);
        vaulter.bezierCurveTo(377.2, 138.8, 377.0, 146.0, 378.2, 150.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(399.9, 150.9);
        vaulter.bezierCurveTo(399.9, 150.9, 405.4, 145.4, 406.7, 141.6);
        vaulter.bezierCurveTo(408.1, 137.8, 406.2, 133.3, 403.3, 131.0);
        vaulter.bezierCurveTo(400.3, 128.7, 387.3, 123.8, 387.3, 123.8);
        vaulter.bezierCurveTo(386.7, 120.2, 377.5, 112.6, 375.7, 106.6);
        vaulter.bezierCurveTo(375.7, 106.6, 378.1, 104.8, 377.5, 103.5);
        vaulter.bezierCurveTo(376.7, 102.1, 375.3, 101.5, 374.2, 101.9);
        vaulter.bezierCurveTo(373.1, 102.3, 368.7, 101.3, 367.8, 101.3);
        vaulter.bezierCurveTo(366.9, 101.3, 362.7, 100.8, 362.7, 101.7);
        vaulter.bezierCurveTo(362.7, 102.6, 363.9, 103.3, 364.9, 103.4);
        vaulter.bezierCurveTo(366.0, 103.5, 370.5, 107.3, 372.0, 107.3);
        vaulter.bezierCurveTo(372.0, 107.3, 381.8, 129.0, 382.9, 129.3);
        vaulter.bezierCurveTo(384.0, 129.6, 395.0, 139.8, 395.0, 139.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(399.4, 151.3);
        vaulter.bezierCurveTo(399.4, 151.3, 404.9, 146.1, 406.5, 142.5);
        vaulter.bezierCurveTo(408.2, 138.8, 406.8, 134.2, 404.1, 131.6);
        vaulter.bezierCurveTo(401.3, 129.0, 388.9, 122.9, 388.9, 122.9);
        vaulter.bezierCurveTo(388.6, 119.3, 380.2, 110.9, 378.9, 104.7);
        vaulter.bezierCurveTo(378.9, 104.7, 381.5, 103.2, 381.0, 101.8);
        vaulter.bezierCurveTo(380.4, 100.4, 379.0, 99.6, 377.8, 99.9);
        vaulter.bezierCurveTo(376.7, 100.3, 372.4, 98.8, 371.6, 98.7);
        vaulter.bezierCurveTo(370.7, 98.6, 366.5, 97.8, 366.4, 98.7);
        vaulter.bezierCurveTo(366.3, 99.5, 367.5, 100.4, 368.5, 100.6);
        vaulter.bezierCurveTo(369.6, 100.8, 373.6, 105.0, 375.2, 105.1);
        vaulter.bezierCurveTo(375.2, 105.1, 382.9, 127.6, 384.0, 128.0);
        vaulter.bezierCurveTo(385.1, 128.5, 395.0, 139.6, 395.0, 139.6);
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
        vaulter.moveTo(381.8, 140.2);
        vaulter.bezierCurveTo(381.8, 140.2, 383.3, 135.9, 389.1, 135.3);
        vaulter.bezierCurveTo(389.1, 135.3, 389.4, 129.7, 389.8, 126.1);
        vaulter.bezierCurveTo(390.3, 122.6, 389.3, 118.1, 389.3, 118.1);
        vaulter.lineTo(388.1, 115.9);
        vaulter.bezierCurveTo(388.1, 115.9, 388.6, 113.6, 389.9, 113.7);
        vaulter.bezierCurveTo(391.2, 113.8, 392.8, 116.2, 392.8, 116.2);
        vaulter.bezierCurveTo(392.8, 116.2, 394.0, 118.1, 393.4, 118.6);
        vaulter.bezierCurveTo(392.7, 119.0, 392.7, 119.8, 392.7, 119.8);
        vaulter.bezierCurveTo(392.7, 119.8, 393.1, 126.2, 393.6, 126.9);
        vaulter.bezierCurveTo(394.0, 127.7, 395.0, 136.4, 394.6, 138.4);
        vaulter.bezierCurveTo(394.2, 140.5, 389.8, 143.0, 389.8, 143.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(382.5, 137.3);
        vaulter.bezierCurveTo(382.5, 137.3, 377.3, 136.5, 376.1, 136.9);
        vaulter.bezierCurveTo(375.0, 137.3, 371.0, 139.2, 371.0, 139.2);
        vaulter.bezierCurveTo(371.0, 139.2, 366.8, 142.5, 368.5, 146.8);
        vaulter.bezierCurveTo(370.2, 151.1, 375.9, 150.7, 378.0, 149.8);
        vaulter.bezierCurveTo(380.1, 149.0, 384.5, 145.0, 384.5, 145.0);
        vaulter.bezierCurveTo(384.5, 145.0, 384.8, 144.8, 385.2, 144.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(425.1, 345.1);
        vaulter.bezierCurveTo(425.3, 318.8, 425.7, 248.7, 425.3, 237.5);
        vaulter.bezierCurveTo(424.4, 213.4, 421.2, 176.0, 410.3, 151.5);
        vaulter.bezierCurveTo(393.3, 113.2, 368.8, 98.3, 368.6, 98.2);
        vaulter.bezierCurveTo(368.6, 98.2, 367.3, 97.2, 367.9, 96.4);
        vaulter.bezierCurveTo(368.5, 95.7, 369.8, 96.2, 369.8, 96.2);
        vaulter.bezierCurveTo(370.0, 96.4, 395.0, 111.6, 412.4, 150.6);
        vaulter.bezierCurveTo(423.4, 175.4, 426.6, 213.1, 427.6, 237.4);
        vaulter.bezierCurveTo(428.0, 248.7, 427.4, 318.8, 427.1, 345.1);
        vaulter.lineTo(425.1, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(382.0, 140.8);
        vaulter.bezierCurveTo(383.0, 142.9, 386.5, 147.5, 390.0, 146.4);
        vaulter.bezierCurveTo(393.6, 145.3, 402.5, 142.6, 405.4, 139.1);
        vaulter.bezierCurveTo(408.3, 135.7, 407.9, 130.8, 405.4, 129.0);
        vaulter.bezierCurveTo(403.0, 127.2, 396.9, 129.5, 396.0, 131.2);
        vaulter.bezierCurveTo(395.2, 133.0, 388.0, 135.0, 385.6, 135.0);
        vaulter.bezierCurveTo(383.1, 135.0, 381.1, 138.9, 382.0, 140.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(405.4, 139.1);
        vaulter.bezierCurveTo(405.4, 139.1, 409.1, 134.9, 410.7, 128.3);
        vaulter.bezierCurveTo(412.2, 121.8, 405.5, 116.6, 400.4, 114.5);
        vaulter.bezierCurveTo(398.6, 113.7, 394.3, 110.7, 394.3, 110.7);
        vaulter.bezierCurveTo(393.7, 106.9, 382.8, 92.4, 382.8, 92.4);
        vaulter.bezierCurveTo(382.8, 92.4, 383.1, 90.0, 382.8, 89.2);
        vaulter.bezierCurveTo(382.6, 88.4, 381.7, 87.0, 380.4, 87.2);
        vaulter.bezierCurveTo(379.0, 87.4, 371.0, 87.2, 371.0, 87.2);
        vaulter.bezierCurveTo(371.0, 87.2, 369.3, 87.4, 369.2, 88.2);
        vaulter.bezierCurveTo(369.0, 89.0, 369.6, 90.1, 371.4, 90.0);
        vaulter.bezierCurveTo(371.4, 90.0, 377.3, 93.0, 380.0, 92.7);
        vaulter.lineTo(388.9, 115.2);
        vaulter.bezierCurveTo(388.9, 115.2, 394.3, 123.8, 399.4, 126.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(404.2, 140.0);
        vaulter.bezierCurveTo(404.2, 140.0, 407.9, 135.7, 409.4, 129.2);
        vaulter.bezierCurveTo(410.9, 122.6, 404.2, 117.5, 399.2, 115.3);
        vaulter.bezierCurveTo(397.4, 114.5, 393.0, 111.6, 393.0, 111.6);
        vaulter.bezierCurveTo(392.4, 107.7, 381.6, 93.2, 381.6, 93.2);
        vaulter.bezierCurveTo(381.6, 93.2, 381.8, 90.9, 381.6, 90.0);
        vaulter.bezierCurveTo(381.3, 89.2, 380.5, 87.9, 379.1, 88.0);
        vaulter.bezierCurveTo(377.8, 88.2, 369.8, 88.0, 369.8, 88.0);
        vaulter.bezierCurveTo(369.8, 88.0, 368.1, 88.2, 367.9, 89.0);
        vaulter.bezierCurveTo(367.7, 89.9, 368.4, 90.9, 370.1, 90.9);
        vaulter.bezierCurveTo(370.1, 90.9, 376.0, 93.9, 378.8, 93.5);
        vaulter.lineTo(387.7, 116.0);
        vaulter.bezierCurveTo(387.7, 116.0, 393.0, 124.6, 398.2, 127.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(398.9, 139.1);
        vaulter.bezierCurveTo(398.3, 137.5, 394.0, 133.5, 388.6, 135.5);
        vaulter.bezierCurveTo(384.1, 137.2, 383.0, 140.5, 383.8, 142.5);
        vaulter.bezierCurveTo(384.4, 144.2, 388.0, 145.6, 392.1, 144.7);
        vaulter.bezierCurveTo(395.4, 142.9, 395.3, 143.9, 398.3, 140.7);
        vaulter.bezierCurveTo(398.3, 140.7, 399.0, 139.9, 398.9, 139.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(383.7, 143.4);
        vaulter.bezierCurveTo(383.7, 143.4, 381.4, 139.3, 382.3, 132.6);
        vaulter.bezierCurveTo(382.3, 132.6, 380.2, 127.7, 379.5, 120.5);
        vaulter.bezierCurveTo(379.5, 120.5, 378.4, 117.3, 378.6, 112.8);
        vaulter.bezierCurveTo(378.8, 108.2, 377.4, 105.4, 377.4, 105.4);
        vaulter.bezierCurveTo(377.4, 105.4, 375.7, 104.2, 375.9, 102.2);
        vaulter.bezierCurveTo(376.0, 100.1, 377.4, 101.1, 377.4, 101.1);
        vaulter.bezierCurveTo(377.4, 101.1, 379.2, 101.8, 379.8, 101.5);
        vaulter.bezierCurveTo(380.4, 101.1, 381.8, 103.9, 381.8, 103.9);
        vaulter.bezierCurveTo(381.8, 103.9, 381.4, 105.7, 380.4, 106.2);
        vaulter.bezierCurveTo(380.4, 106.2, 381.7, 112.1, 382.1, 113.2);
        vaulter.bezierCurveTo(382.6, 114.4, 384.5, 118.7, 384.4, 120.1);
        vaulter.lineTo(387.7, 132.0);
        vaulter.bezierCurveTo(387.7, 132.0, 389.8, 135.9, 389.8, 138.5);
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
        vaulter.moveTo(386.5, 133.3);
        vaulter.bezierCurveTo(386.5, 133.3, 387.9, 130.3, 391.6, 130.1);
        vaulter.lineTo(396.1, 126.5);
        vaulter.bezierCurveTo(395.3, 125.6, 395.2, 118.2, 395.2, 118.2);
        vaulter.bezierCurveTo(395.2, 118.2, 393.7, 116.7, 393.3, 111.5);
        vaulter.bezierCurveTo(393.3, 111.5, 391.8, 109.7, 391.9, 108.5);
        vaulter.bezierCurveTo(392.0, 107.4, 393.3, 106.5, 393.3, 106.5);
        vaulter.bezierCurveTo(393.3, 106.5, 396.3, 107.0, 396.7, 107.6);
        vaulter.bezierCurveTo(397.0, 108.2, 396.8, 110.4, 396.7, 111.0);
        vaulter.bezierCurveTo(396.6, 111.6, 399.0, 118.2, 399.0, 118.2);
        vaulter.bezierCurveTo(399.0, 118.2, 401.9, 127.2, 401.8, 129.0);
        vaulter.bezierCurveTo(401.7, 130.8, 396.4, 133.9, 396.4, 133.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(387.6, 130.3);
        vaulter.bezierCurveTo(387.6, 130.3, 382.3, 129.8, 381.2, 130.3);
        vaulter.bezierCurveTo(380.0, 130.8, 376.1, 133.0, 376.1, 133.0);
        vaulter.bezierCurveTo(376.1, 133.0, 372.1, 136.6, 374.1, 140.9);
        vaulter.bezierCurveTo(376.2, 145.2, 381.9, 144.3, 384.0, 143.3);
        vaulter.bezierCurveTo(386.1, 142.3, 390.2, 137.9, 390.2, 137.9);
        vaulter.bezierCurveTo(390.2, 137.9, 390.5, 137.7, 390.9, 137.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(386.5, 133.3);
        vaulter.bezierCurveTo(386.5, 135.2, 387.7, 141.3, 393.5, 139.4);
        vaulter.bezierCurveTo(399.2, 137.5, 408.5, 133.8, 411.0, 125.5);
        vaulter.bezierCurveTo(413.5, 117.2, 407.6, 118.3, 407.6, 118.3);
        vaulter.bezierCurveTo(407.6, 118.3, 402.3, 118.5, 401.0, 121.0);
        vaulter.bezierCurveTo(399.8, 123.5, 393.9, 126.8, 391.4, 127.2);
        vaulter.bezierCurveTo(388.9, 127.6, 386.4, 130.8, 386.5, 133.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.7, 256.3);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(425.4, 256.3);
        vaulter.bezierCurveTo(425.4, 255.7, 426.3, 198.7, 414.5, 156.4);
        vaulter.bezierCurveTo(402.8, 114.3, 374.3, 89.4, 374.0, 89.2);
        vaulter.bezierCurveTo(374.0, 89.2, 373.1, 88.5, 373.8, 87.6);
        vaulter.bezierCurveTo(374.6, 86.8, 375.5, 87.4, 375.5, 87.4);
        vaulter.bezierCurveTo(375.8, 87.7, 404.9, 113.0, 416.7, 155.8);
        vaulter.bezierCurveTo(428.6, 198.4, 427.7, 255.7, 427.7, 256.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(411.0, 125.5);
        vaulter.bezierCurveTo(413.4, 118.8, 413.4, 114.4, 412.9, 112.2);
        vaulter.bezierCurveTo(412.4, 109.9, 402.9, 101.8, 399.0, 99.2);
        vaulter.bezierCurveTo(398.8, 94.9, 394.3, 90.2, 393.0, 83.4);
        vaulter.bezierCurveTo(393.0, 83.4, 394.6, 81.7, 394.1, 80.6);
        vaulter.bezierCurveTo(393.7, 79.6, 392.1, 78.8, 391.3, 79.3);
        vaulter.bezierCurveTo(390.4, 79.8, 386.0, 81.0, 385.0, 80.8);
        vaulter.bezierCurveTo(383.9, 80.6, 382.6, 80.5, 382.1, 80.6);
        vaulter.bezierCurveTo(381.6, 80.8, 380.4, 81.7, 380.7, 82.5);
        vaulter.bezierCurveTo(380.9, 83.4, 382.6, 83.7, 383.9, 83.2);
        vaulter.bezierCurveTo(383.9, 83.2, 386.5, 84.9, 388.7, 84.4);
        vaulter.bezierCurveTo(388.7, 84.4, 392.9, 100.0, 394.1, 102.3);
        vaulter.bezierCurveTo(395.4, 104.7, 397.1, 109.1, 402.2, 116.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(409.9, 126.5);
        vaulter.bezierCurveTo(412.4, 119.8, 412.4, 115.5, 411.9, 113.2);
        vaulter.bezierCurveTo(411.4, 110.9, 401.8, 102.8, 398.0, 100.2);
        vaulter.bezierCurveTo(397.7, 96.0, 393.3, 91.2, 391.9, 84.4);
        vaulter.bezierCurveTo(391.9, 84.4, 393.6, 82.7, 393.1, 81.7);
        vaulter.bezierCurveTo(392.6, 80.6, 391.1, 79.8, 390.2, 80.3);
        vaulter.bezierCurveTo(389.4, 80.8, 385.0, 82.0, 383.9, 81.8);
        vaulter.bezierCurveTo(382.9, 81.7, 381.5, 81.5, 381.0, 81.7);
        vaulter.bezierCurveTo(380.5, 81.8, 379.4, 82.7, 379.6, 83.5);
        vaulter.bezierCurveTo(379.8, 84.4, 381.5, 84.7, 382.9, 84.2);
        vaulter.bezierCurveTo(382.9, 84.2, 385.5, 85.9, 387.7, 85.4);
        vaulter.bezierCurveTo(387.7, 85.4, 391.9, 101.0, 393.1, 103.3);
        vaulter.bezierCurveTo(394.3, 105.7, 395.9, 113.5, 401.0, 121.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(404.0, 130.8);
        vaulter.bezierCurveTo(403.3, 129.2, 398.7, 125.5, 393.4, 127.9);
        vaulter.bezierCurveTo(388.9, 129.9, 386.4, 133.0, 387.6, 136.1);
        vaulter.bezierCurveTo(389.1, 139.8, 393.8, 138.4, 397.6, 136.9);
        vaulter.bezierCurveTo(401.0, 135.4, 402.2, 134.6, 403.6, 132.5);
        vaulter.bezierCurveTo(403.6, 132.5, 404.2, 131.5, 404.0, 130.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(387.4, 134.6);
        vaulter.bezierCurveTo(387.4, 134.6, 386.4, 130.9, 387.4, 124.2);
        vaulter.lineTo(385.5, 114.0);
        vaulter.bezierCurveTo(384.3, 112.9, 384.2, 105.3, 383.7, 102.5);
        vaulter.bezierCurveTo(383.2, 99.7, 382.1, 98.8, 382.1, 98.8);
        vaulter.bezierCurveTo(382.1, 98.8, 380.4, 96.7, 380.7, 94.3);
        vaulter.bezierCurveTo(381.1, 92.0, 382.5, 93.2, 382.5, 93.2);
        vaulter.bezierCurveTo(382.5, 93.2, 385.4, 94.7, 385.8, 95.5);
        vaulter.bezierCurveTo(386.2, 96.4, 386.7, 98.8, 386.5, 99.5);
        vaulter.bezierCurveTo(386.2, 100.3, 387.1, 104.7, 388.0, 105.8);
        vaulter.bezierCurveTo(389.0, 107.0, 389.9, 112.7, 389.9, 113.8);
        vaulter.lineTo(392.6, 123.1);
        vaulter.bezierCurveTo(392.6, 123.1, 394.3, 126.3, 394.4, 129.0);
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
        vaulter.moveTo(396.3, 126.1);
        vaulter.bezierCurveTo(396.3, 126.1, 398.2, 123.0, 401.5, 122.5);
        vaulter.lineTo(402.8, 117.6);
        vaulter.lineTo(402.8, 107.4);
        vaulter.bezierCurveTo(402.8, 107.4, 402.1, 105.5, 402.8, 103.9);
        vaulter.bezierCurveTo(403.4, 102.2, 405.1, 102.1, 405.5, 102.6);
        vaulter.bezierCurveTo(405.9, 103.2, 407.8, 107.0, 406.6, 108.1);
        vaulter.bezierCurveTo(405.3, 109.2, 405.5, 109.8, 405.5, 109.8);
        vaulter.bezierCurveTo(405.5, 109.8, 406.6, 116.8, 406.6, 121.2);
        vaulter.bezierCurveTo(406.6, 122.9, 407.2, 125.0, 406.6, 126.4);
        vaulter.bezierCurveTo(405.4, 128.7, 402.5, 129.9, 402.2, 130.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(396.5, 128.6);
        vaulter.bezierCurveTo(396.5, 128.6, 391.2, 128.2, 390.0, 128.6);
        vaulter.bezierCurveTo(388.9, 129.1, 385.0, 131.4, 385.0, 131.4);
        vaulter.bezierCurveTo(385.0, 131.4, 380.9, 135.0, 383.0, 139.3);
        vaulter.bezierCurveTo(385.1, 143.5, 390.8, 142.6, 392.9, 141.6);
        vaulter.bezierCurveTo(395.0, 140.6, 399.1, 136.2, 399.1, 136.2);
        vaulter.bezierCurveTo(399.1, 136.2, 399.4, 136.0, 399.8, 135.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(396.3, 128.2);
        vaulter.bezierCurveTo(396.3, 128.2, 396.3, 134.0, 398.7, 135.9);
        vaulter.bezierCurveTo(401.1, 137.8, 405.9, 134.7, 407.5, 132.7);
        vaulter.bezierCurveTo(408.3, 131.6, 409.1, 129.4, 410.7, 127.7);
        vaulter.bezierCurveTo(412.4, 125.8, 414.9, 124.4, 415.8, 122.5);
        vaulter.bezierCurveTo(417.5, 118.9, 416.8, 113.0, 416.4, 112.5);
        vaulter.bezierCurveTo(416.1, 112.0, 413.6, 108.7, 408.3, 113.2);
        vaulter.bezierCurveTo(402.9, 117.6, 400.3, 119.3, 399.0, 121.1);
        vaulter.bezierCurveTo(397.6, 122.9, 395.9, 124.3, 396.3, 128.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(415.8, 122.5);
        vaulter.bezierCurveTo(419.4, 117.5, 419.6, 110.5, 418.7, 106.8);
        vaulter.bezierCurveTo(417.8, 103.2, 415.1, 93.6, 409.2, 88.9);
        vaulter.lineTo(406.6, 64.8);
        vaulter.bezierCurveTo(406.6, 64.8, 408.2, 63.8, 408.2, 63.0);
        vaulter.bezierCurveTo(408.2, 62.1, 408.2, 60.1, 406.6, 60.1);
        vaulter.bezierCurveTo(404.9, 60.1, 401.3, 59.2, 400.0, 58.7);
        vaulter.bezierCurveTo(398.6, 58.2, 396.6, 56.2, 393.8, 56.3);
        vaulter.bezierCurveTo(391.1, 56.5, 392.0, 57.5, 392.0, 57.5);
        vaulter.bezierCurveTo(392.0, 57.5, 392.8, 59.1, 394.5, 59.4);
        vaulter.bezierCurveTo(394.5, 59.4, 399.1, 64.3, 401.3, 64.9);
        vaulter.lineTo(403.0, 90.9);
        vaulter.bezierCurveTo(403.0, 90.9, 405.5, 103.8, 407.6, 108.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(413.5, 123.7);
        vaulter.bezierCurveTo(417.1, 118.7, 417.3, 111.7, 416.4, 108.0);
        vaulter.bezierCurveTo(415.5, 104.4, 412.8, 94.8, 406.9, 90.1);
        vaulter.lineTo(404.3, 66.0);
        vaulter.bezierCurveTo(404.3, 66.0, 405.9, 65.0, 405.9, 64.2);
        vaulter.bezierCurveTo(405.9, 63.3, 405.9, 61.3, 404.3, 61.3);
        vaulter.bezierCurveTo(402.6, 61.3, 399.0, 60.4, 397.7, 59.9);
        vaulter.bezierCurveTo(396.3, 59.4, 394.3, 57.4, 391.5, 57.5);
        vaulter.bezierCurveTo(388.8, 57.7, 389.7, 58.7, 389.7, 58.7);
        vaulter.bezierCurveTo(389.7, 58.7, 390.5, 60.3, 392.2, 60.6);
        vaulter.bezierCurveTo(392.2, 60.6, 396.8, 65.5, 399.0, 66.1);
        vaulter.lineTo(400.7, 92.1);
        vaulter.bezierCurveTo(400.7, 92.1, 403.2, 105.0, 405.3, 109.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(427.7, 256.2);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(425.4, 256.2);
        vaulter.bezierCurveTo(425.4, 255.5, 425.7, 185.1, 418.1, 155.3);
        vaulter.bezierCurveTo(410.4, 125.3, 396.1, 84.2, 396.0, 83.8);
        vaulter.bezierCurveTo(396.0, 83.8, 395.6, 82.7, 396.8, 82.4);
        vaulter.bezierCurveTo(397.9, 82.0, 398.2, 83.0, 398.2, 83.0);
        vaulter.bezierCurveTo(398.3, 83.5, 412.6, 124.7, 420.3, 154.7);
        vaulter.bezierCurveTo(428.0, 184.8, 427.7, 255.5, 427.7, 256.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(407.6, 120.9);
        vaulter.bezierCurveTo(406.0, 120.2, 400.1, 120.8, 397.9, 126.2);
        vaulter.bezierCurveTo(396.0, 130.8, 397.8, 133.8, 399.9, 134.7);
        vaulter.bezierCurveTo(401.6, 135.3, 405.8, 132.0, 407.2, 129.9);
        vaulter.bezierCurveTo(408.0, 128.9, 408.8, 126.9, 408.4, 122.5);
        vaulter.bezierCurveTo(408.4, 122.5, 408.3, 121.4, 407.6, 120.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(397.4, 130.3);
        vaulter.bezierCurveTo(397.4, 130.3, 396.2, 126.2, 398.3, 120.1);
        vaulter.lineTo(399.5, 109.8);
        vaulter.bezierCurveTo(399.5, 109.8, 399.0, 104.2, 399.5, 101.7);
        vaulter.bezierCurveTo(400.0, 99.1, 399.5, 95.0, 399.5, 95.0);
        vaulter.bezierCurveTo(399.5, 95.0, 398.7, 92.7, 398.4, 92.4);
        vaulter.bezierCurveTo(398.1, 92.0, 399.4, 89.1, 399.7, 89.1);
        vaulter.bezierCurveTo(400.0, 89.1, 402.9, 89.8, 403.0, 90.7);
        vaulter.bezierCurveTo(403.0, 91.5, 403.6, 93.1, 403.0, 93.9);
        vaulter.bezierCurveTo(402.4, 94.7, 402.0, 95.3, 402.0, 95.3);
        vaulter.bezierCurveTo(402.0, 95.3, 403.5, 102.6, 403.6, 105.8);
        vaulter.bezierCurveTo(403.8, 109.1, 403.6, 109.7, 403.6, 109.7);
        vaulter.lineTo(403.7, 118.3);
        vaulter.bezierCurveTo(403.7, 118.3, 404.6, 123.0, 404.2, 125.1);
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
        vaulter.moveTo(399.2, 128.6);
        vaulter.bezierCurveTo(399.2, 128.6, 400.0, 124.3, 403.8, 123.0);
        vaulter.lineTo(405.4, 120.8);
        vaulter.bezierCurveTo(405.5, 117.7, 406.9, 117.2, 406.5, 112.1);
        vaulter.lineTo(405.2, 110.3);
        vaulter.bezierCurveTo(405.2, 110.3, 405.1, 107.6, 406.3, 106.4);
        vaulter.bezierCurveTo(407.4, 105.1, 409.5, 107.6, 409.5, 107.6);
        vaulter.bezierCurveTo(409.5, 107.6, 410.5, 112.3, 409.2, 112.8);
        vaulter.bezierCurveTo(409.0, 114.4, 410.2, 119.1, 409.5, 120.9);
        vaulter.bezierCurveTo(409.6, 123.2, 408.8, 125.3, 408.8, 125.3);
        vaulter.bezierCurveTo(408.8, 125.3, 409.4, 129.0, 408.4, 130.0);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(401.5, 128.1);
        vaulter.bezierCurveTo(401.5, 128.1, 396.1, 127.6, 395.0, 128.1);
        vaulter.bezierCurveTo(393.9, 128.6, 390.0, 130.8, 390.0, 130.8);
        vaulter.bezierCurveTo(390.0, 130.8, 385.9, 134.4, 388.0, 138.7);
        vaulter.bezierCurveTo(390.1, 143.0, 395.8, 142.1, 397.9, 141.1);
        vaulter.bezierCurveTo(399.9, 140.1, 404.1, 135.7, 404.1, 135.7);
        vaulter.bezierCurveTo(404.1, 135.7, 404.4, 135.5, 404.8, 135.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(399.8, 130.7);
        vaulter.bezierCurveTo(400.3, 133.4, 405.0, 136.5, 408.6, 135.5);
        vaulter.bezierCurveTo(412.2, 134.5, 413.0, 128.6, 414.1, 127.3);
        vaulter.bezierCurveTo(415.1, 126.0, 419.2, 122.5, 419.2, 115.4);
        vaulter.bezierCurveTo(419.2, 108.2, 413.5, 110.8, 413.5, 110.8);
        vaulter.bezierCurveTo(413.5, 110.8, 409.5, 113.2, 407.6, 116.2);
        vaulter.bezierCurveTo(405.7, 119.3, 403.0, 122.8, 401.4, 124.8);
        vaulter.bezierCurveTo(399.9, 126.8, 399.8, 130.7, 399.8, 130.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(425.3, 258.5);
        vaulter.bezierCurveTo(425.3, 257.8, 422.5, 180.9, 416.5, 150.4);
        vaulter.bezierCurveTo(410.4, 119.8, 398.8, 80.3, 398.7, 79.9);
        vaulter.bezierCurveTo(398.7, 79.9, 398.6, 79.0, 399.6, 78.7);
        vaulter.bezierCurveTo(400.5, 78.5, 400.9, 79.3, 400.9, 79.3);
        vaulter.bezierCurveTo(401.1, 79.7, 412.7, 119.2, 418.8, 149.9);
        vaulter.bezierCurveTo(424.8, 180.7, 427.6, 257.7, 427.6, 258.4);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(425.3, 258.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(411.2, 110.3);
        vaulter.bezierCurveTo(407.4, 102.3, 406.9, 94.7, 406.3, 91.1);
        vaulter.bezierCurveTo(406.1, 89.5, 404.5, 84.4, 406.0, 79.6);
        vaulter.bezierCurveTo(407.9, 73.8, 408.3, 66.7, 408.2, 59.8);
        vaulter.bezierCurveTo(405.0, 59.5, 400.6, 54.6, 400.6, 54.6);
        vaulter.bezierCurveTo(399.1, 54.5, 397.8, 52.7, 397.9, 52.0);
        vaulter.bezierCurveTo(398.3, 50.6, 401.4, 51.6, 403.0, 52.0);
        vaulter.bezierCurveTo(404.7, 52.5, 405.6, 53.3, 408.2, 53.9);
        vaulter.bezierCurveTo(410.7, 54.6, 412.1, 54.5, 413.2, 55.0);
        vaulter.bezierCurveTo(414.3, 55.4, 414.8, 57.2, 414.6, 58.0);
        vaulter.bezierCurveTo(414.3, 58.8, 413.2, 59.8, 413.2, 59.8);
        vaulter.bezierCurveTo(412.5, 67.3, 414.5, 73.6, 413.2, 87.3);
        vaulter.bezierCurveTo(413.2, 87.3, 421.0, 99.4, 421.4, 103.5);
        vaulter.bezierCurveTo(421.7, 107.5, 419.2, 115.4, 419.2, 115.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(409.8, 111.5);
        vaulter.bezierCurveTo(406.1, 103.4, 405.5, 95.9, 405.0, 92.3);
        vaulter.bezierCurveTo(404.8, 90.6, 403.2, 85.5, 404.7, 80.8);
        vaulter.bezierCurveTo(406.6, 75.0, 407.0, 67.9, 406.9, 61.0);
        vaulter.bezierCurveTo(403.7, 60.7, 399.3, 55.8, 399.3, 55.8);
        vaulter.bezierCurveTo(397.8, 55.7, 396.4, 53.9, 396.6, 53.2);
        vaulter.bezierCurveTo(397.0, 51.8, 400.1, 52.7, 401.7, 53.2);
        vaulter.bezierCurveTo(403.4, 53.6, 404.3, 54.4, 406.8, 55.1);
        vaulter.bezierCurveTo(409.4, 55.8, 410.8, 55.7, 411.9, 56.1);
        vaulter.bezierCurveTo(412.9, 56.6, 413.5, 58.4, 413.3, 59.2);
        vaulter.bezierCurveTo(413.0, 60.0, 411.9, 61.0, 411.9, 61.0);
        vaulter.bezierCurveTo(411.2, 68.5, 413.2, 74.8, 411.9, 88.4);
        vaulter.bezierCurveTo(411.9, 88.4, 419.7, 100.5, 420.1, 104.6);
        vaulter.bezierCurveTo(420.4, 108.7, 417.9, 116.6, 417.9, 116.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(410.3, 120.4);
        vaulter.bezierCurveTo(408.7, 119.7, 402.8, 120.3, 400.6, 125.7);
        vaulter.bezierCurveTo(398.8, 130.3, 400.5, 133.3, 402.6, 134.2);
        vaulter.bezierCurveTo(404.3, 134.8, 408.5, 131.5, 409.9, 129.4);
        vaulter.bezierCurveTo(410.7, 128.4, 411.5, 126.4, 411.2, 122.0);
        vaulter.bezierCurveTo(411.2, 122.0, 411.0, 120.9, 410.3, 120.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(399.8, 131.4);
        vaulter.bezierCurveTo(397.7, 129.5, 398.6, 128.0, 398.9, 124.8);
        vaulter.bezierCurveTo(399.1, 121.9, 400.2, 118.6, 401.0, 117.2);
        vaulter.bezierCurveTo(401.0, 117.2, 401.4, 108.7, 402.2, 106.0);
        vaulter.bezierCurveTo(403.1, 103.3, 402.2, 94.9, 402.2, 94.9);
        vaulter.bezierCurveTo(402.2, 94.9, 400.9, 93.3, 400.7, 92.8);
        vaulter.bezierCurveTo(400.5, 92.2, 401.2, 90.0, 402.6, 89.0);
        vaulter.bezierCurveTo(404.0, 88.0, 406.3, 90.7, 406.3, 90.7);
        vaulter.bezierCurveTo(406.3, 90.7, 406.8, 93.6, 406.3, 94.6);
        vaulter.bezierCurveTo(405.7, 95.6, 405.0, 95.5, 405.0, 96.1);
        vaulter.bezierCurveTo(405.0, 96.6, 406.7, 103.8, 406.5, 106.3);
        vaulter.bezierCurveTo(406.4, 108.8, 405.7, 117.1, 406.2, 118.3);
        vaulter.bezierCurveTo(406.6, 119.7, 407.8, 121.7, 405.9, 126.1);
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
        vaulter.moveTo(402.9, 124.1);
        vaulter.bezierCurveTo(402.9, 124.1, 404.8, 119.8, 408.3, 119.1);
        vaulter.lineTo(409.6, 114.0);
        vaulter.bezierCurveTo(409.6, 114.0, 409.0, 110.4, 409.6, 108.9);
        vaulter.bezierCurveTo(410.3, 107.4, 409.6, 103.0, 409.6, 103.0);
        vaulter.lineTo(408.7, 101.6);
        vaulter.bezierCurveTo(408.7, 101.6, 408.6, 99.0, 409.6, 97.8);
        vaulter.bezierCurveTo(410.7, 96.5, 412.6, 99.8, 412.6, 99.8);
        vaulter.bezierCurveTo(412.6, 99.8, 412.5, 102.2, 412.1, 103.0);
        vaulter.bezierCurveTo(411.6, 103.8, 413.4, 108.5, 413.1, 109.9);
        vaulter.bezierCurveTo(412.7, 111.3, 414.3, 114.1, 414.3, 114.1);
        vaulter.lineTo(415.1, 122.4);
        vaulter.lineTo(407.6, 129.4);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(405.0, 124.9);
        vaulter.bezierCurveTo(405.0, 124.9, 399.7, 124.5, 398.6, 125.0);
        vaulter.bezierCurveTo(397.5, 125.5, 393.5, 127.7, 393.5, 127.7);
        vaulter.bezierCurveTo(393.5, 127.7, 389.5, 131.3, 391.5, 135.6);
        vaulter.bezierCurveTo(393.6, 139.9, 399.4, 139.0, 401.4, 138.0);
        vaulter.bezierCurveTo(403.5, 136.9, 407.6, 132.5, 407.6, 132.5);
        vaulter.bezierCurveTo(407.6, 132.5, 407.9, 132.3, 408.3, 132.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(425.3, 258.7);
        vaulter.bezierCurveTo(425.3, 258.1, 423.9, 194.2, 420.3, 161.0);
        vaulter.bezierCurveTo(416.8, 127.9, 404.1, 80.6, 404.0, 80.1);
        vaulter.bezierCurveTo(404.0, 80.1, 403.7, 79.0, 404.8, 78.7);
        vaulter.bezierCurveTo(405.9, 78.5, 406.3, 79.5, 406.3, 79.5);
        vaulter.bezierCurveTo(406.4, 80.0, 419.0, 127.5, 422.6, 160.8);
        vaulter.bezierCurveTo(426.2, 194.1, 427.6, 258.0, 427.6, 258.7);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(425.3, 258.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(402.9, 124.1);
        vaulter.bezierCurveTo(402.9, 127.7, 403.8, 132.7, 410.4, 132.3);
        vaulter.bezierCurveTo(417.0, 131.9, 422.3, 124.1, 422.3, 117.5);
        vaulter.bezierCurveTo(422.3, 110.8, 422.3, 106.7, 422.3, 106.7);
        vaulter.bezierCurveTo(422.3, 106.7, 420.1, 103.0, 417.4, 103.0);
        vaulter.bezierCurveTo(414.7, 103.0, 412.6, 105.9, 412.6, 105.9);
        vaulter.bezierCurveTo(412.6, 105.9, 411.4, 113.9, 409.7, 115.6);
        vaulter.bezierCurveTo(408.0, 117.3, 406.3, 118.1, 405.1, 119.3);
        vaulter.bezierCurveTo(403.9, 120.5, 402.9, 124.1, 402.9, 124.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(421.5, 117.6);
        vaulter.bezierCurveTo(421.5, 117.6, 423.5, 106.8, 424.2, 104.9);
        vaulter.bezierCurveTo(424.2, 104.9, 425.2, 102.3, 425.1, 99.1);
        vaulter.bezierCurveTo(424.9, 95.8, 420.6, 85.3, 419.3, 82.7);
        vaulter.bezierCurveTo(419.9, 76.6, 418.5, 66.2, 419.4, 57.2);
        vaulter.bezierCurveTo(420.2, 55.8, 421.3, 56.7, 422.3, 55.1);
        vaulter.bezierCurveTo(422.7, 54.4, 421.3, 52.3, 419.8, 51.9);
        vaulter.bezierCurveTo(416.7, 51.0, 416.6, 49.5, 415.1, 48.5);
        vaulter.bezierCurveTo(413.6, 47.4, 410.7, 44.8, 409.2, 46.6);
        vaulter.bezierCurveTo(408.6, 47.4, 410.9, 49.0, 410.9, 49.0);
        vaulter.bezierCurveTo(410.9, 49.0, 413.6, 54.8, 415.8, 56.0);
        vaulter.lineTo(411.8, 88.2);
        vaulter.bezierCurveTo(411.8, 88.2, 411.8, 96.3, 413.7, 107.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(420.2, 118.1);
        vaulter.bezierCurveTo(420.2, 118.1, 422.3, 107.2, 422.9, 105.3);
        vaulter.bezierCurveTo(422.9, 105.3, 424.0, 102.7, 423.8, 99.5);
        vaulter.bezierCurveTo(423.6, 96.3, 419.3, 85.7, 418.0, 83.2);
        vaulter.bezierCurveTo(418.6, 77.1, 417.3, 66.6, 418.1, 57.7);
        vaulter.bezierCurveTo(418.9, 56.2, 420.0, 57.2, 421.1, 55.6);
        vaulter.bezierCurveTo(421.4, 54.9, 420.1, 52.8, 418.5, 52.3);
        vaulter.bezierCurveTo(415.4, 51.4, 415.3, 49.9, 413.8, 48.9);
        vaulter.bezierCurveTo(412.3, 47.9, 409.4, 45.2, 407.9, 47.0);
        vaulter.bezierCurveTo(407.3, 47.9, 409.7, 49.4, 409.7, 49.4);
        vaulter.bezierCurveTo(409.7, 49.4, 412.3, 55.2, 414.5, 56.4);
        vaulter.lineTo(410.5, 88.6);
        vaulter.bezierCurveTo(410.5, 88.6, 410.5, 96.8, 412.4, 107.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(417.0, 120.2);
        vaulter.bezierCurveTo(415.9, 118.8, 410.4, 116.7, 405.9, 120.5);
        vaulter.bezierCurveTo(402.2, 123.8, 402.4, 127.3, 403.9, 129.0);
        vaulter.bezierCurveTo(405.2, 130.4, 410.4, 129.2, 412.6, 128.0);
        vaulter.bezierCurveTo(413.8, 127.4, 415.4, 126.0, 417.1, 121.9);
        vaulter.bezierCurveTo(417.1, 121.9, 417.4, 120.8, 417.0, 120.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(410.9, 123.2);
        vaulter.lineTo(409.7, 115.6);
        vaulter.bezierCurveTo(409.4, 112.9, 409.6, 102.0, 409.6, 102.0);
        vaulter.bezierCurveTo(410.3, 100.8, 409.6, 90.2, 409.6, 90.2);
        vaulter.bezierCurveTo(409.6, 90.2, 411.1, 89.2, 410.9, 88.2);
        vaulter.bezierCurveTo(410.8, 87.1, 408.2, 84.7, 408.2, 84.7);
        vaulter.lineTo(406.9, 86.6);
        vaulter.lineTo(407.5, 89.1);
        vaulter.bezierCurveTo(407.5, 89.1, 406.8, 92.6, 406.0, 95.1);
        vaulter.bezierCurveTo(405.1, 97.7, 406.0, 101.1, 406.0, 101.1);
        vaulter.bezierCurveTo(406.0, 101.1, 405.0, 112.3, 403.8, 115.1);
        vaulter.bezierCurveTo(402.6, 117.9, 402.2, 125.0, 402.2, 125.0);
        vaulter.bezierCurveTo(402.1, 127.7, 404.8, 129.4, 404.8, 129.4);
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
        vaulter.moveTo(408.4, 130.4);
        vaulter.bezierCurveTo(408.4, 130.4, 411.8, 135.4, 418.0, 136.0);
        vaulter.bezierCurveTo(424.2, 136.6, 427.6, 134.0, 428.0, 132.7);
        vaulter.bezierCurveTo(428.3, 131.4, 426.4, 129.1, 423.4, 127.7);
        vaulter.lineTo(417.5, 123.5);
        vaulter.lineTo(416.5, 119.7);
        vaulter.bezierCurveTo(416.5, 119.7, 413.9, 118.0, 412.9, 119.0);
        vaulter.bezierCurveTo(412.3, 119.8, 413.7, 123.5, 413.7, 123.5);
        vaulter.lineTo(416.4, 125.3);
        vaulter.bezierCurveTo(416.4, 125.3, 420.1, 129.9, 421.9, 130.8);
        vaulter.lineTo(415.9, 128.7);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(409.2, 126.4);
        vaulter.bezierCurveTo(409.2, 126.4, 404.0, 124.4, 402.7, 124.5);
        vaulter.bezierCurveTo(401.4, 124.6, 396.8, 125.7, 396.8, 125.7);
        vaulter.bezierCurveTo(396.8, 125.7, 391.6, 128.0, 392.4, 133.0);
        vaulter.bezierCurveTo(393.1, 137.9, 399.2, 138.8, 401.6, 138.4);
        vaulter.bezierCurveTo(404.0, 138.0, 409.5, 134.8, 409.5, 134.8);
        vaulter.bezierCurveTo(409.5, 134.8, 409.8, 134.7, 410.3, 134.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(425.1, 345.1);
        vaulter.bezierCurveTo(425.1, 345.0, 425.5, 269.5, 425.3, 264.8);
        vaulter.bezierCurveTo(424.3, 244.8, 421.5, 190.7, 418.9, 159.8);
        vaulter.bezierCurveTo(415.7, 121.7, 408.6, 80.6, 408.5, 80.2);
        vaulter.bezierCurveTo(408.5, 80.2, 408.3, 78.9, 409.5, 78.8);
        vaulter.bezierCurveTo(410.6, 78.6, 410.9, 79.8, 410.9, 79.8);
        vaulter.bezierCurveTo(411.0, 80.2, 418.1, 121.4, 421.3, 159.6);
        vaulter.bezierCurveTo(423.9, 190.5, 426.7, 244.7, 427.7, 264.7);
        vaulter.bezierCurveTo(428.0, 269.4, 427.1, 345.0, 427.1, 345.1);
        vaulter.lineTo(425.1, 345.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(407.6, 129.9);
        vaulter.bezierCurveTo(407.6, 129.9, 409.4, 135.2, 412.1, 136.1);
        vaulter.bezierCurveTo(414.7, 137.0, 422.6, 135.1, 425.8, 124.9);
        vaulter.bezierCurveTo(429.0, 114.7, 426.9, 107.3, 426.9, 107.3);
        vaulter.bezierCurveTo(426.2, 104.3, 421.7, 103.2, 420.3, 103.0);
        vaulter.bezierCurveTo(418.9, 102.9, 416.3, 105.5, 416.2, 106.4);
        vaulter.bezierCurveTo(416.0, 107.3, 414.6, 116.3, 412.9, 117.5);
        vaulter.bezierCurveTo(411.3, 118.7, 409.6, 120.6, 408.7, 122.4);
        vaulter.bezierCurveTo(407.8, 124.1, 407.0, 128.4, 407.6, 129.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(418.9, 112.2);
        vaulter.bezierCurveTo(418.9, 112.2, 418.7, 101.8, 418.0, 98.6);
        vaulter.bezierCurveTo(417.4, 95.3, 420.6, 80.0, 420.6, 80.0);
        vaulter.bezierCurveTo(420.6, 80.0, 426.0, 69.2, 424.4, 57.4);
        vaulter.bezierCurveTo(424.4, 57.4, 418.5, 54.6, 418.3, 53.5);
        vaulter.bezierCurveTo(418.3, 53.5, 415.3, 52.6, 415.9, 51.5);
        vaulter.bezierCurveTo(416.5, 50.4, 417.2, 49.7, 418.3, 50.1);
        vaulter.bezierCurveTo(419.4, 50.4, 424.4, 51.0, 424.4, 51.0);
        vaulter.bezierCurveTo(424.4, 51.0, 427.2, 53.1, 428.0, 53.1);
        vaulter.bezierCurveTo(428.9, 53.1, 430.7, 52.4, 431.4, 54.2);
        vaulter.bezierCurveTo(432.1, 56.0, 428.9, 57.8, 428.9, 57.8);
        vaulter.lineTo(428.0, 85.0);
        vaulter.bezierCurveTo(428.0, 85.0, 431.2, 99.3, 430.8, 103.0);
        vaulter.bezierCurveTo(430.3, 106.8, 426.9, 117.0, 426.9, 117.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(417.4, 111.6);
        vaulter.bezierCurveTo(417.4, 111.6, 417.2, 101.2, 416.5, 98.0);
        vaulter.bezierCurveTo(415.9, 94.8, 419.1, 79.4, 419.1, 79.4);
        vaulter.bezierCurveTo(419.1, 79.4, 424.5, 68.6, 422.9, 56.8);
        vaulter.bezierCurveTo(422.9, 56.8, 417.0, 54.0, 416.8, 52.9);
        vaulter.bezierCurveTo(416.8, 52.9, 413.8, 52.0, 414.4, 50.9);
        vaulter.bezierCurveTo(415.0, 49.9, 415.7, 49.2, 416.8, 49.5);
        vaulter.bezierCurveTo(417.9, 49.9, 422.9, 50.4, 422.9, 50.4);
        vaulter.bezierCurveTo(422.9, 50.4, 425.6, 52.5, 426.5, 52.5);
        vaulter.bezierCurveTo(427.3, 52.5, 429.1, 51.8, 429.9, 53.6);
        vaulter.bezierCurveTo(430.6, 55.4, 427.3, 57.2, 427.3, 57.2);
        vaulter.lineTo(426.5, 84.4);
        vaulter.bezierCurveTo(426.5, 84.4, 429.7, 98.7, 429.2, 102.4);
        vaulter.bezierCurveTo(428.8, 106.2, 425.4, 116.4, 425.4, 116.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(423.2, 123.1);
        vaulter.bezierCurveTo(422.1, 121.7, 416.3, 119.3, 411.6, 123.2);
        vaulter.bezierCurveTo(407.6, 126.5, 407.7, 130.2, 409.3, 132.0);
        vaulter.bezierCurveTo(410.5, 133.5, 416.1, 132.5, 418.4, 131.2);
        vaulter.bezierCurveTo(419.6, 130.7, 421.4, 129.3, 423.2, 125.0);
        vaulter.bezierCurveTo(423.2, 125.0, 423.6, 123.9, 423.2, 123.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(413.2, 123.4);
        vaulter.bezierCurveTo(413.2, 123.4, 414.7, 114.2, 415.3, 113.2);
        vaulter.bezierCurveTo(416.6, 111.2, 415.3, 105.8, 415.3, 105.8);
        vaulter.bezierCurveTo(415.3, 105.8, 414.4, 100.8, 413.4, 98.2);
        vaulter.bezierCurveTo(412.9, 96.8, 412.2, 93.4, 412.1, 91.1);
        vaulter.bezierCurveTo(412.8, 90.1, 412.9, 89.1, 412.9, 89.1);
        vaulter.bezierCurveTo(412.9, 89.1, 412.2, 85.1, 410.6, 83.9);
        vaulter.bezierCurveTo(409.1, 82.7, 409.6, 82.5, 408.0, 83.9);
        vaulter.bezierCurveTo(406.3, 85.3, 408.0, 90.1, 408.0, 90.1);
        vaulter.lineTo(409.8, 91.6);
        vaulter.bezierCurveTo(409.8, 91.6, 411.0, 95.8, 410.3, 98.9);
        vaulter.bezierCurveTo(409.6, 102.0, 410.3, 108.5, 410.3, 108.5);
        vaulter.bezierCurveTo(410.3, 108.5, 407.7, 114.7, 406.0, 118.7);
        vaulter.bezierCurveTo(404.4, 122.8, 406.0, 126.6, 406.0, 126.6);
        vaulter.bezierCurveTo(407.4, 130.3, 408.9, 131.6, 408.9, 131.6);
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
        vaulter.moveTo(431.2, 122.0);
        vaulter.bezierCurveTo(430.9, 121.5, 430.6, 121.3, 430.3, 121.1);
        vaulter.bezierCurveTo(429.9, 120.8, 429.6, 120.7, 429.6, 120.7);
        vaulter.bezierCurveTo(428.6, 120.5, 424.9, 119.9, 423.7, 121.8);
        vaulter.lineTo(424.0, 122.4);
        vaulter.lineTo(428.6, 131.5);
        vaulter.bezierCurveTo(429.6, 133.6, 431.2, 137.9, 432.7, 137.8);
        vaulter.bezierCurveTo(434.2, 137.7, 435.4, 137.3, 435.5, 136.8);
        vaulter.bezierCurveTo(435.8, 135.7, 433.6, 124.9, 431.2, 122.0);
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
        vaulter.moveTo(430.0, 131.7);
        vaulter.bezierCurveTo(429.6, 131.5, 429.1, 131.4, 428.6, 131.5);
        vaulter.bezierCurveTo(426.8, 131.6, 422.3, 131.0, 421.3, 130.8);
        vaulter.bezierCurveTo(421.2, 130.8, 421.1, 130.8, 421.1, 130.8);
        vaulter.lineTo(419.5, 128.7);
        vaulter.bezierCurveTo(419.5, 128.7, 419.4, 128.6, 419.2, 128.5);
        vaulter.bezierCurveTo(418.8, 128.3, 418.0, 128.0, 417.5, 128.7);
        vaulter.bezierCurveTo(416.8, 129.6, 416.1, 132.3, 416.1, 132.3);
        vaulter.lineTo(418.0, 135.1);
        vaulter.bezierCurveTo(418.0, 135.1, 418.6, 135.2, 419.5, 135.1);
        vaulter.bezierCurveTo(420.1, 135.0, 420.8, 134.9, 421.5, 134.5);
        vaulter.bezierCurveTo(421.6, 134.5, 421.7, 134.4, 421.8, 134.4);
        vaulter.bezierCurveTo(421.8, 134.4, 425.6, 135.2, 428.2, 136.8);
        vaulter.bezierCurveTo(429.4, 137.6, 431.2, 137.9, 432.7, 137.8);
        vaulter.bezierCurveTo(434.2, 137.7, 435.4, 137.3, 435.5, 136.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.restore();
        vaulter.beginPath();
        vaulter.moveTo(419.2, 79.3);
        vaulter.bezierCurveTo(419.2, 79.3, 419.2, 78.2, 418.2, 78.3);
        vaulter.bezierCurveTo(417.2, 78.3, 417.2, 79.4, 417.2, 79.4);
        vaulter.lineTo(425.6, 283.9);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(427.6, 283.9);
        vaulter.lineTo(419.2, 79.3);
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
        vaulter.moveTo(430.3, 121.0);
        vaulter.bezierCurveTo(430.4, 120.9, 430.8, 120.7, 430.3, 121.0);
        vaulter.lineTo(430.3, 121.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(430.2, 121.1);
        vaulter.bezierCurveTo(430.2, 121.0, 430.3, 121.0, 430.3, 121.0);
        vaulter.bezierCurveTo(430.2, 121.0, 430.2, 121.1, 430.2, 121.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(437.6, 74.9);
        vaulter.bezierCurveTo(433.6, 73.8, 430.4, 74.9, 430.4, 74.9);
        vaulter.bezierCurveTo(429.6, 81.0, 426.1, 94.2, 425.8, 95.1);
        vaulter.bezierCurveTo(424.3, 98.3, 422.1, 101.1, 420.1, 103.8);
        vaulter.bezierCurveTo(417.2, 107.7, 414.3, 111.6, 416.5, 116.8);
        vaulter.bezierCurveTo(418.7, 122.4, 425.2, 123.5, 430.2, 121.1);
        vaulter.bezierCurveTo(434.4, 118.6, 437.4, 110.5, 438.5, 105.9);
        vaulter.bezierCurveTo(439.1, 103.5, 439.7, 101.2, 439.6, 99.1);
        vaulter.bezierCurveTo(440.7, 93.5, 441.5, 75.9, 437.6, 74.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.restore();
        vaulter.beginPath();
        vaulter.moveTo(432.7, 137.8);
        vaulter.bezierCurveTo(432.7, 137.8, 432.7, 137.8, 432.7, 137.8);
        vaulter.bezierCurveTo(434.2, 137.7, 435.4, 137.3, 435.5, 136.8);
        vaulter.bezierCurveTo(435.4, 137.3, 434.2, 137.7, 432.7, 137.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(416.2, 112.0);
        vaulter.bezierCurveTo(416.2, 112.0, 416.1, 112.0, 415.9, 112.0);
        vaulter.bezierCurveTo(414.7, 111.9, 409.9, 111.6, 407.2, 112.7);
        vaulter.bezierCurveTo(404.3, 114.0, 402.7, 118.1, 404.0, 121.9);
        vaulter.bezierCurveTo(405.2, 125.4, 411.9, 126.5, 414.7, 124.3);
        vaulter.bezierCurveTo(417.0, 122.5, 418.1, 120.5, 418.5, 119.7);
        vaulter.bezierCurveTo(418.6, 119.5, 418.6, 119.4, 418.6, 119.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(422.4, 101.1);
        vaulter.bezierCurveTo(421.9, 101.7, 421.3, 102.4, 420.6, 103.3);
        vaulter.bezierCurveTo(420.6, 103.3, 418.9, 105.5, 418.3, 106.4);
        vaulter.bezierCurveTo(418.3, 106.5, 418.2, 106.6, 418.1, 106.7);
        vaulter.bezierCurveTo(417.3, 107.9, 416.7, 108.9, 416.4, 109.6);
        vaulter.bezierCurveTo(416.3, 109.8, 416.2, 109.9, 416.2, 110.1);
        vaulter.bezierCurveTo(417.2, 110.5, 417.9, 110.6, 418.5, 110.5);
        vaulter.bezierCurveTo(419.2, 110.4, 419.8, 110.1, 420.5, 109.5);
        vaulter.bezierCurveTo(420.7, 109.3, 420.9, 109.0, 421.2, 108.8);
        vaulter.bezierCurveTo(423.1, 107.1, 423.4, 104.3, 422.4, 101.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(420.3, 104.1);
        vaulter.bezierCurveTo(420.3, 104.1, 420.5, 103.3, 420.7, 103.1);
        vaulter.bezierCurveTo(421.1, 102.1, 421.5, 101.0, 422.0, 99.9);
        vaulter.bezierCurveTo(422.6, 98.5, 423.6, 95.2, 423.6, 95.2);
        vaulter.bezierCurveTo(423.6, 95.2, 424.5, 91.5, 423.6, 90.1);
        vaulter.lineTo(421.1, 86.2);
        vaulter.bezierCurveTo(421.1, 86.2, 420.4, 84.5, 419.4, 83.8);
        vaulter.bezierCurveTo(419.4, 83.8, 419.4, 83.8, 419.4, 83.7);
        vaulter.bezierCurveTo(418.8, 83.4, 418.1, 83.5, 417.4, 83.7);
        vaulter.bezierCurveTo(416.7, 84.0, 416.1, 84.3, 416.1, 84.3);
        vaulter.lineTo(415.9, 87.4);
        vaulter.bezierCurveTo(417.2, 88.5, 416.8, 89.3, 417.6, 89.3);
        vaulter.bezierCurveTo(417.7, 89.3, 417.9, 89.3, 418.0, 89.3);
        vaulter.bezierCurveTo(419.0, 89.1, 419.4, 89.0, 419.6, 89.0);
        vaulter.bezierCurveTo(419.7, 89.0, 419.8, 89.0, 419.8, 89.0);
        vaulter.lineTo(421.0, 91.0);
        vaulter.bezierCurveTo(420.6, 91.4, 420.1, 91.9, 419.8, 92.4);
        vaulter.bezierCurveTo(419.3, 93.0, 418.9, 93.5, 418.9, 93.5);
        vaulter.bezierCurveTo(418.9, 93.5, 418.5, 94.2, 417.9, 95.2);
        vaulter.bezierCurveTo(416.2, 98.1, 412.9, 103.7, 413.2, 105.4);
        vaulter.bezierCurveTo(413.6, 107.8, 415.9, 109.7, 415.9, 109.7);
        vaulter.bezierCurveTo(415.9, 109.7, 416.5, 110.0, 416.5, 110.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(439.8, 73.5);
        vaulter.bezierCurveTo(439.9, 71.8, 441.2, 66.8, 441.2, 66.8);
        vaulter.lineTo(447.4, 46.2);
        vaulter.lineTo(450.6, 38.4);
        vaulter.lineTo(451.4, 36.5);
        vaulter.bezierCurveTo(452.6, 37.1, 453.3, 36.6, 454.1, 35.8);
        vaulter.bezierCurveTo(454.4, 35.5, 454.5, 34.7, 454.5, 33.8);
        vaulter.bezierCurveTo(454.6, 32.4, 454.4, 30.6, 454.4, 29.9);
        vaulter.bezierCurveTo(454.4, 28.9, 455.6, 26.1, 456.2, 24.3);
        vaulter.bezierCurveTo(456.6, 23.4, 456.5, 20.9, 455.8, 19.8);
        vaulter.bezierCurveTo(455.6, 19.5, 455.3, 19.3, 455.0, 19.2);
        vaulter.bezierCurveTo(454.7, 19.2, 454.3, 19.2, 453.9, 19.4);
        vaulter.bezierCurveTo(453.4, 19.5, 453.0, 19.8, 452.6, 20.0);
        vaulter.bezierCurveTo(451.7, 20.7, 450.8, 25.1, 450.8, 25.1);
        vaulter.lineTo(448.4, 34.2);
        vaulter.lineTo(434.6, 60.6);
        vaulter.bezierCurveTo(434.6, 60.6, 427.6, 71.4, 426.8, 77.9);
        vaulter.bezierCurveTo(426.1, 84.3, 426.1, 94.6, 426.1, 94.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(439.8, 97.7);
        vaulter.bezierCurveTo(439.8, 97.7, 441.5, 92.9, 444.5, 81.1);
        vaulter.bezierCurveTo(446.8, 71.6, 449.6, 47.6, 450.6, 38.4);
        vaulter.bezierCurveTo(450.9, 36.1, 451.0, 34.8, 451.0, 34.8);
        vaulter.bezierCurveTo(451.0, 34.8, 452.8, 36.2, 454.0, 34.8);
        vaulter.bezierCurveTo(454.3, 34.5, 454.4, 34.1, 454.5, 33.8);
        vaulter.bezierCurveTo(454.6, 32.4, 454.4, 30.6, 454.4, 29.9);
        vaulter.bezierCurveTo(454.4, 28.9, 455.6, 26.1, 456.2, 24.3);
        vaulter.bezierCurveTo(456.6, 23.4, 456.5, 20.9, 455.8, 19.8);
        vaulter.bezierCurveTo(455.6, 19.5, 455.3, 19.3, 455.0, 19.2);
        vaulter.bezierCurveTo(454.7, 19.2, 454.3, 19.2, 453.9, 19.4);
        vaulter.bezierCurveTo(452.3, 20.4, 448.6, 33.6, 448.6, 33.6);
        vaulter.lineTo(436.3, 73.9);
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
        vaulter.moveTo(437.3, 129.3);
        vaulter.bezierCurveTo(437.1, 128.4, 434.6, 117.0, 431.8, 111.9);
        vaulter.bezierCurveTo(431.1, 110.6, 430.5, 109.7, 429.8, 109.4);
        vaulter.bezierCurveTo(427.5, 108.4, 424.4, 111.0, 425.2, 113.4);
        vaulter.bezierCurveTo(425.2, 113.4, 425.3, 113.7, 425.4, 114.1);
        vaulter.bezierCurveTo(426.2, 116.3, 428.8, 123.6, 430.4, 127.2);
        vaulter.bezierCurveTo(429.8, 127.2, 429.2, 127.3, 428.7, 127.6);
        vaulter.bezierCurveTo(427.0, 128.6, 421.7, 130.3, 421.7, 130.3);
        vaulter.lineTo(421.3, 130.1);
        vaulter.lineTo(419.3, 129.2);
        vaulter.bezierCurveTo(419.3, 129.2, 419.3, 129.2, 419.2, 129.1);
        vaulter.bezierCurveTo(418.9, 129.1, 417.7, 129.1, 417.5, 130.1);
        vaulter.bezierCurveTo(417.3, 131.2, 417.9, 133.9, 417.9, 133.9);
        vaulter.lineTo(419.4, 134.7);
        vaulter.lineTo(420.9, 135.5);
        vaulter.bezierCurveTo(420.9, 135.5, 421.1, 135.5, 421.5, 135.3);
        vaulter.bezierCurveTo(422.1, 135.0, 423.1, 134.4, 423.9, 133.3);
        vaulter.bezierCurveTo(423.9, 133.3, 427.7, 132.2, 430.7, 132.5);
        vaulter.bezierCurveTo(432.2, 132.7, 433.9, 132.1, 435.2, 131.4);
        vaulter.bezierCurveTo(435.2, 131.4, 435.2, 131.4, 435.2, 131.4);
        vaulter.bezierCurveTo(435.4, 131.3, 435.5, 131.2, 435.7, 131.1);
        vaulter.bezierCurveTo(436.7, 130.5, 437.4, 129.7, 437.3, 129.3);
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
        vaulter.moveTo(419.2, 79.2);
        vaulter.bezierCurveTo(419.2, 79.2, 419.2, 78.2, 418.2, 78.3);
        vaulter.bezierCurveTo(417.2, 78.3, 417.2, 79.2, 417.2, 79.2);
        vaulter.bezierCurveTo(417.2, 79.2, 426.1, 265.8, 425.7, 292.1);
        vaulter.bezierCurveTo(425.4, 318.3, 425.1, 345.1, 425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.bezierCurveTo(427.1, 345.1, 427.6, 316.5, 427.7, 292.1);
        vaulter.bezierCurveTo(427.8, 267.6, 419.2, 79.2, 419.2, 79.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(439.9, 89.1);
        vaulter.lineTo(447.2, 57.9);
        vaulter.bezierCurveTo(447.2, 57.9, 445.8, 55.1, 442.6, 54.3);
        vaulter.bezierCurveTo(439.5, 53.6, 435.0, 56.3, 435.0, 56.3);
        vaulter.lineTo(425.4, 84.0);
        vaulter.bezierCurveTo(425.4, 84.0, 425.4, 84.0, 425.4, 84.0);
        vaulter.bezierCurveTo(423.1, 86.2, 422.4, 90.4, 421.3, 93.0);
        vaulter.bezierCurveTo(421.2, 93.0, 421.2, 93.0, 421.2, 92.9);
        vaulter.bezierCurveTo(419.6, 95.7, 417.6, 98.3, 416.2, 101.2);
        vaulter.bezierCurveTo(413.0, 108.0, 420.4, 115.3, 427.0, 113.9);
        vaulter.bezierCurveTo(432.4, 112.8, 434.0, 107.6, 436.4, 103.3);
        vaulter.bezierCurveTo(437.9, 100.5, 440.7, 93.2, 439.9, 89.1);
        vaulter.bezierCurveTo(439.9, 89.1, 439.9, 89.1, 439.9, 89.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(418.6, 103.9);
        vaulter.bezierCurveTo(418.6, 103.9, 418.4, 104.0, 418.2, 104.1);
        vaulter.bezierCurveTo(417.8, 104.2, 417.1, 104.5, 416.3, 104.8);
        vaulter.bezierCurveTo(414.4, 105.6, 412.0, 106.8, 410.7, 108.2);
        vaulter.bezierCurveTo(408.5, 110.6, 408.7, 115.0, 411.5, 118.0);
        vaulter.bezierCurveTo(413.1, 119.7, 416.2, 119.6, 418.8, 118.5);
        vaulter.bezierCurveTo(419.5, 118.2, 420.2, 117.9, 420.8, 117.4);
        vaulter.bezierCurveTo(421.4, 116.9, 421.9, 116.4, 422.3, 115.7);
        vaulter.bezierCurveTo(422.6, 115.1, 422.9, 114.4, 423.1, 113.8);
        vaulter.bezierCurveTo(423.2, 113.6, 423.2, 113.4, 423.3, 113.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(422.5, 86.3);
        vaulter.lineTo(422.1, 85.8);
        vaulter.lineTo(421.3, 84.9);
        vaulter.bezierCurveTo(421.3, 84.9, 420.4, 83.8, 419.4, 83.2);
        vaulter.bezierCurveTo(419.2, 83.1, 419.1, 83.1, 418.9, 83.0);
        vaulter.bezierCurveTo(418.4, 82.9, 417.9, 83.1, 417.4, 83.4);
        vaulter.bezierCurveTo(416.6, 83.8, 416.0, 84.4, 416.0, 84.4);
        vaulter.lineTo(416.6, 87.5);
        vaulter.bezierCurveTo(417.1, 87.7, 417.3, 87.9, 417.6, 88.1);
        vaulter.bezierCurveTo(417.8, 88.3, 418.0, 88.5, 418.1, 88.6);
        vaulter.bezierCurveTo(418.4, 88.9, 418.6, 89.0, 419.1, 88.7);
        vaulter.bezierCurveTo(419.3, 88.6, 419.5, 88.6, 419.6, 88.5);
        vaulter.bezierCurveTo(420.5, 88.1, 420.8, 87.9, 420.8, 87.9);
        vaulter.lineTo(421.6, 88.7);
        vaulter.bezierCurveTo(422.0, 89.1, 422.1, 88.9, 422.5, 88.5);
        vaulter.bezierCurveTo(423.0, 88.1, 423.1, 86.9, 422.5, 86.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(422.0, 93.5);
        vaulter.bezierCurveTo(422.0, 93.5, 421.7, 93.0, 421.6, 92.9);
        vaulter.bezierCurveTo(421.5, 93.1, 421.4, 93.3, 421.3, 93.5);
        vaulter.bezierCurveTo(421.3, 93.5, 421.3, 93.5, 421.3, 93.5);
        vaulter.bezierCurveTo(420.9, 94.2, 420.4, 95.0, 419.9, 95.8);
        vaulter.bezierCurveTo(419.2, 96.8, 418.6, 97.9, 418.0, 98.8);
        vaulter.bezierCurveTo(417.8, 99.1, 416.5, 101.6, 416.5, 101.7);
        vaulter.bezierCurveTo(417.2, 102.0, 417.7, 102.1, 418.1, 102.1);
        vaulter.bezierCurveTo(418.9, 102.1, 419.4, 101.9, 420.1, 101.3);
        vaulter.bezierCurveTo(420.4, 101.1, 420.6, 100.8, 421.0, 100.5);
        vaulter.bezierCurveTo(422.7, 99.0, 423.0, 96.4, 422.0, 93.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(443.3, 59.6);
        vaulter.bezierCurveTo(443.3, 59.6, 449.9, 42.5, 450.6, 40.9);
        vaulter.bezierCurveTo(451.2, 39.3, 455.5, 29.2, 455.5, 29.2);
        vaulter.lineTo(456.5, 28.0);
        vaulter.bezierCurveTo(456.5, 28.0, 457.2, 24.0, 458.0, 23.2);
        vaulter.bezierCurveTo(458.8, 22.4, 460.0, 16.3, 460.0, 16.3);
        vaulter.bezierCurveTo(460.0, 16.3, 460.1, 14.1, 458.9, 13.2);
        vaulter.bezierCurveTo(458.6, 13.0, 458.4, 12.9, 458.1, 12.8);
        vaulter.bezierCurveTo(456.1, 12.4, 454.6, 13.6, 454.5, 14.7);
        vaulter.bezierCurveTo(454.3, 15.7, 453.7, 20.2, 452.8, 21.4);
        vaulter.bezierCurveTo(452.0, 22.6, 452.8, 28.1, 452.8, 28.2);
        vaulter.lineTo(452.8, 28.2);
        vaulter.lineTo(452.8, 28.2);
        vaulter.bezierCurveTo(452.8, 28.2, 447.4, 33.9, 444.6, 37.8);
        vaulter.bezierCurveTo(441.8, 41.7, 431.0, 59.8, 428.8, 65.5);
        vaulter.bezierCurveTo(426.7, 71.1, 425.3, 84.2, 425.3, 84.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(439.7, 89.5);
        vaulter.bezierCurveTo(439.7, 89.5, 446.6, 76.2, 447.7, 71.7);
        vaulter.bezierCurveTo(448.7, 67.3, 449.7, 58.0, 449.7, 58.0);
        vaulter.bezierCurveTo(449.7, 58.0, 453.4, 51.7, 455.1, 45.4);
        vaulter.bezierCurveTo(456.9, 39.1, 457.4, 25.0, 457.4, 25.0);
        vaulter.bezierCurveTo(457.4, 25.0, 460.1, 24.0, 460.2, 22.7);
        vaulter.bezierCurveTo(460.4, 21.4, 460.6, 19.2, 463.0, 16.1);
        vaulter.bezierCurveTo(465.4, 13.1, 464.4, 11.1, 463.8, 10.8);
        vaulter.bezierCurveTo(462.8, 10.3, 460.1, 11.6, 458.9, 13.2);
        vaulter.bezierCurveTo(458.8, 13.3, 458.7, 13.4, 458.6, 13.5);
        vaulter.bezierCurveTo(457.6, 15.2, 455.5, 17.7, 455.1, 19.9);
        vaulter.bezierCurveTo(454.8, 22.2, 454.1, 24.7, 454.1, 24.7);
        vaulter.lineTo(452.8, 28.2);
        vaulter.lineTo(452.8, 28.2);
        vaulter.lineTo(452.8, 28.2);
        vaulter.lineTo(447.7, 42.3);
        vaulter.bezierCurveTo(447.7, 42.3, 445.9, 45.4, 446.1, 46.1);
        vaulter.bezierCurveTo(446.2, 46.7, 436.6, 63.7, 436.6, 63.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(420.4, 96.1);
        vaulter.bezierCurveTo(421.0, 94.8, 421.7, 93.0, 421.7, 93.0);
        vaulter.bezierCurveTo(421.7, 93.0, 422.2, 91.8, 422.3, 91.5);
        vaulter.bezierCurveTo(422.4, 91.2, 422.6, 90.9, 422.7, 90.6);
        vaulter.bezierCurveTo(422.8, 90.3, 422.8, 89.9, 423.0, 88.4);
        vaulter.bezierCurveTo(423.2, 86.7, 422.6, 86.0, 422.1, 85.8);
        vaulter.bezierCurveTo(422.1, 85.7, 422.0, 85.7, 422.0, 85.7);
        vaulter.bezierCurveTo(421.3, 85.4, 420.4, 86.1, 419.5, 87.0);
        vaulter.bezierCurveTo(418.9, 87.6, 418.3, 88.4, 418.1, 88.6);
        vaulter.bezierCurveTo(418.1, 88.7, 418.0, 88.8, 418.0, 88.8);
        vaulter.bezierCurveTo(418.0, 88.8, 417.9, 89.0, 417.6, 89.5);
        vaulter.bezierCurveTo(417.0, 90.8, 415.8, 93.4, 415.3, 95.7);
        vaulter.bezierCurveTo(414.8, 98.1, 416.2, 101.3, 416.2, 101.3);
        vaulter.bezierCurveTo(416.2, 101.3, 416.6, 101.7, 417.1, 101.8);
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
        vaulter.moveTo(432.9, 101.7);
        vaulter.bezierCurveTo(432.9, 101.7, 432.7, 102.8, 432.5, 104.6);
        vaulter.bezierCurveTo(432.1, 108.3, 431.5, 115.1, 432.3, 122.3);
        vaulter.bezierCurveTo(430.6, 123.0, 425.8, 128.6, 422.6, 130.7);
        vaulter.bezierCurveTo(422.1, 130.7, 421.6, 130.3, 421.3, 129.8);
        vaulter.bezierCurveTo(421.0, 129.5, 420.7, 129.1, 420.4, 129.0);
        vaulter.bezierCurveTo(420.2, 128.9, 419.8, 129.1, 419.3, 129.4);
        vaulter.bezierCurveTo(418.8, 129.7, 418.3, 130.1, 418.1, 130.3);
        vaulter.bezierCurveTo(417.7, 130.6, 417.3, 132.9, 417.3, 133.9);
        vaulter.bezierCurveTo(417.4, 134.7, 418.8, 135.6, 419.6, 136.1);
        vaulter.bezierCurveTo(419.9, 136.2, 420.1, 136.4, 420.2, 136.4);
        vaulter.bezierCurveTo(420.4, 136.6, 421.0, 136.3, 421.5, 136.0);
        vaulter.bezierCurveTo(422.0, 135.8, 422.5, 135.5, 422.6, 135.3);
        vaulter.bezierCurveTo(422.9, 134.9, 423.1, 134.3, 423.1, 134.3);
        vaulter.bezierCurveTo(424.8, 132.6, 435.8, 125.9, 436.3, 124.9);
        vaulter.bezierCurveTo(436.8, 123.9, 438.3, 106.7, 438.7, 102.0);
        vaulter.bezierCurveTo(438.8, 101.2, 438.8, 100.8, 438.8, 100.8);
        vaulter.lineTo(432.9, 101.7);
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
        vaulter.moveTo(445.7, 83.2);
        vaulter.bezierCurveTo(445.3, 81.9, 444.7, 80.6, 443.4, 79.7);
        vaulter.bezierCurveTo(441.5, 78.2, 437.3, 77.2, 434.7, 77.4);
        vaulter.bezierCurveTo(433.7, 77.4, 432.9, 77.7, 432.6, 78.1);
        vaulter.bezierCurveTo(432.5, 78.2, 432.4, 78.3, 432.3, 78.5);
        vaulter.bezierCurveTo(432.3, 78.5, 432.3, 78.5, 432.3, 78.5);
        vaulter.bezierCurveTo(431.9, 79.2, 431.3, 80.6, 430.5, 82.3);
        vaulter.bezierCurveTo(429.7, 83.7, 428.9, 85.4, 428.1, 87.0);
        vaulter.bezierCurveTo(427.4, 88.4, 426.6, 89.8, 426.0, 91.0);
        vaulter.bezierCurveTo(425.5, 91.8, 424.7, 93.0, 424.3, 93.6);
        vaulter.bezierCurveTo(423.4, 94.8, 422.8, 95.5, 422.5, 95.9);
        vaulter.bezierCurveTo(422.2, 96.3, 422.1, 96.5, 422.2, 96.8);
        vaulter.bezierCurveTo(422.3, 97.4, 422.6, 98.3, 423.1, 99.3);
        vaulter.bezierCurveTo(423.9, 100.8, 425.1, 102.6, 427.0, 103.6);
        vaulter.bezierCurveTo(427.6, 103.9, 428.3, 104.1, 429.1, 104.3);
        vaulter.bezierCurveTo(430.1, 104.6, 431.3, 104.7, 432.5, 104.6);
        vaulter.bezierCurveTo(435.0, 104.5, 437.5, 103.7, 438.7, 102.1);
        vaulter.bezierCurveTo(438.7, 102.1, 438.7, 102.0, 438.7, 102.0);
        vaulter.bezierCurveTo(439.4, 100.8, 445.9, 89.5, 446.0, 87.4);
        vaulter.bezierCurveTo(446.1, 86.2, 446.1, 84.6, 445.7, 83.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(419.2, 79.2);
        vaulter.bezierCurveTo(419.2, 79.2, 419.2, 78.2, 418.2, 78.3);
        vaulter.bezierCurveTo(417.2, 78.3, 417.2, 79.2, 417.2, 79.2);
        vaulter.bezierCurveTo(417.2, 79.2, 426.1, 265.8, 425.7, 292.1);
        vaulter.bezierCurveTo(425.4, 318.3, 425.1, 345.1, 425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.bezierCurveTo(427.1, 345.1, 427.6, 316.5, 427.7, 292.1);
        vaulter.bezierCurveTo(427.8, 267.6, 419.2, 79.2, 419.2, 79.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(424.3, 98.6);
        vaulter.bezierCurveTo(424.3, 98.6, 423.8, 98.9, 423.1, 99.3);
        vaulter.bezierCurveTo(422.3, 99.7, 421.2, 100.3, 420.1, 100.9);
        vaulter.bezierCurveTo(419.5, 101.3, 418.8, 101.8, 418.2, 102.2);
        vaulter.bezierCurveTo(417.4, 102.8, 416.6, 103.5, 416.2, 104.1);
        vaulter.bezierCurveTo(414.4, 106.7, 415.1, 110.9, 418.1, 113.4);
        vaulter.bezierCurveTo(418.3, 113.6, 418.5, 113.7, 418.7, 113.8);
        vaulter.bezierCurveTo(419.3, 114.1, 420.0, 114.3, 420.7, 114.3);
        vaulter.bezierCurveTo(423.6, 114.4, 427.2, 112.5, 428.2, 110.0);
        vaulter.bezierCurveTo(429.2, 107.4, 429.1, 105.1, 429.1, 104.3);
        vaulter.bezierCurveTo(429.0, 104.1, 429.0, 104.1, 429.0, 104.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Group

        // vaulter/Group/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(426.6, 91.5);
        vaulter.bezierCurveTo(427.5, 91.5, 430.2, 84.8, 430.5, 83.4);
        vaulter.bezierCurveTo(430.6, 83.0, 430.5, 82.7, 430.5, 82.3);
        vaulter.bezierCurveTo(430.3, 81.5, 430.0, 80.8, 429.7, 80.2);
        vaulter.bezierCurveTo(429.5, 79.8, 429.3, 79.5, 429.2, 79.5);
        vaulter.lineTo(428.6, 79.7);
        vaulter.bezierCurveTo(427.8, 80.1, 426.4, 81.0, 425.6, 82.2);
        vaulter.bezierCurveTo(425.1, 82.9, 424.6, 84.1, 424.1, 85.3);
        vaulter.bezierCurveTo(423.4, 86.8, 422.8, 88.4, 422.2, 88.8);
        vaulter.bezierCurveTo(421.2, 89.6, 420.9, 92.4, 420.9, 93.7);
        vaulter.bezierCurveTo(421.0, 94.5, 421.6, 95.5, 421.9, 96.2);
        vaulter.bezierCurveTo(422.2, 96.8, 422.3, 97.3, 422.3, 97.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(429.2, 79.5);
        vaulter.lineTo(428.6, 79.7);
        vaulter.lineTo(422.1, 81.7);
        vaulter.bezierCurveTo(422.1, 81.7, 421.4, 81.0, 420.6, 80.3);
        vaulter.bezierCurveTo(420.4, 80.1, 419.9, 80.1, 419.3, 80.2);
        vaulter.bezierCurveTo(418.7, 80.3, 418.0, 80.6, 417.4, 80.9);
        vaulter.bezierCurveTo(416.9, 81.1, 416.4, 81.4, 416.4, 81.6);
        vaulter.bezierCurveTo(416.1, 82.1, 415.5, 83.4, 415.3, 84.1);
        vaulter.bezierCurveTo(415.2, 84.9, 416.4, 86.9, 416.4, 86.9);
        vaulter.bezierCurveTo(416.6, 87.1, 417.1, 87.3, 417.6, 87.4);
        vaulter.bezierCurveTo(418.3, 87.6, 419.0, 87.7, 419.6, 87.7);
        vaulter.bezierCurveTo(420.0, 87.7, 420.4, 87.7, 420.6, 87.5);
        vaulter.bezierCurveTo(421.5, 87.0, 422.1, 85.7, 422.1, 85.7);
        vaulter.lineTo(424.1, 85.3);
        vaulter.lineTo(429.1, 84.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.restore();
        vaulter.beginPath();
        vaulter.moveTo(432.3, 78.5);
        vaulter.bezierCurveTo(432.3, 78.5, 435.2, 71.5, 440.0, 70.7);
        vaulter.bezierCurveTo(444.8, 70.0, 447.6, 72.5, 448.6, 75.5);
        vaulter.bezierCurveTo(449.6, 78.5, 445.3, 83.6, 445.3, 83.6);
        vaulter.bezierCurveTo(445.3, 83.6, 442.5, 85.8, 437.6, 83.6);
        vaulter.bezierCurveTo(432.7, 81.4, 432.3, 78.5, 432.3, 78.5);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(445.6, 83.2);
        vaulter.bezierCurveTo(446.2, 83.0, 446.5, 82.9, 446.5, 82.9);
        vaulter.bezierCurveTo(450.3, 81.8, 455.4, 68.1, 456.2, 66.2);
        vaulter.bezierCurveTo(456.9, 64.7, 457.1, 62.8, 456.9, 61.2);
        vaulter.bezierCurveTo(456.9, 61.2, 460.5, 50.8, 461.8, 49.1);
        vaulter.bezierCurveTo(463.1, 47.4, 466.5, 37.1, 466.5, 31.2);
        vaulter.lineTo(466.9, 28.2);
        vaulter.lineTo(467.5, 23.6);
        vaulter.bezierCurveTo(467.5, 23.6, 463.8, 25.7, 463.2, 28.0);
        vaulter.bezierCurveTo(462.6, 29.9, 455.1, 48.7, 452.2, 56.0);
        vaulter.bezierCurveTo(451.5, 57.7, 451.0, 58.8, 451.0, 58.8);
        vaulter.bezierCurveTo(449.6, 63.2, 448.2, 68.7, 445.1, 72.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(445.2, 72.4);
        vaulter.bezierCurveTo(449.1, 67.7, 449.4, 61.2, 452.2, 56.0);
        vaulter.lineTo(464.2, 32.1);
        vaulter.bezierCurveTo(465.2, 29.9, 466.2, 29.2, 466.9, 28.3);
        vaulter.bezierCurveTo(466.9, 28.3, 466.9, 28.3, 467.0, 28.2);
        vaulter.bezierCurveTo(467.9, 27.1, 472.5, 22.5, 473.2, 18.6);
        vaulter.bezierCurveTo(473.5, 17.2, 473.5, 15.8, 473.0, 15.5);
        vaulter.bezierCurveTo(472.4, 15.1, 470.5, 16.7, 470.5, 16.7);
        vaulter.bezierCurveTo(470.5, 16.7, 464.3, 24.8, 462.7, 25.9);
        vaulter.bezierCurveTo(461.0, 27.0, 461.1, 27.0, 460.6, 27.7);
        vaulter.bezierCurveTo(460.0, 28.4, 460.7, 30.4, 460.7, 30.4);
        vaulter.bezierCurveTo(453.3, 37.9, 444.3, 54.1, 444.3, 54.1);
        vaulter.bezierCurveTo(443.7, 54.1, 443.3, 54.2, 443.3, 54.2);
        vaulter.bezierCurveTo(433.3, 67.8, 432.3, 78.5, 432.3, 78.5);
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
        vaulter.moveTo(439.5, 100.9);
        vaulter.lineTo(434.3, 101.7);
        vaulter.bezierCurveTo(434.3, 101.7, 433.8, 102.8, 433.2, 104.8);
        vaulter.bezierCurveTo(432.2, 108.0, 431.1, 113.6, 431.8, 120.2);
        vaulter.bezierCurveTo(430.1, 120.9, 425.6, 128.9, 422.4, 130.9);
        vaulter.bezierCurveTo(422.0, 130.9, 421.7, 130.7, 421.5, 130.5);
        vaulter.bezierCurveTo(421.0, 130.0, 420.6, 129.4, 420.2, 129.2);
        vaulter.bezierCurveTo(420.0, 129.2, 419.8, 129.3, 419.5, 129.4);
        vaulter.bezierCurveTo(418.9, 129.7, 418.1, 130.3, 417.9, 130.6);
        vaulter.bezierCurveTo(417.5, 130.9, 417.1, 133.1, 417.1, 134.2);
        vaulter.bezierCurveTo(417.2, 135.1, 419.0, 136.1, 419.8, 136.5);
        vaulter.bezierCurveTo(419.9, 136.6, 420.0, 136.6, 420.0, 136.7);
        vaulter.bezierCurveTo(420.2, 136.9, 421.1, 136.5, 421.7, 136.1);
        vaulter.bezierCurveTo(422.0, 135.9, 422.3, 135.7, 422.4, 135.5);
        vaulter.bezierCurveTo(422.7, 135.2, 422.9, 134.6, 422.9, 134.6);
        vaulter.bezierCurveTo(424.6, 132.8, 435.3, 123.8, 435.8, 122.8);
        vaulter.bezierCurveTo(436.3, 121.7, 440.3, 100.8, 440.3, 100.8);
        vaulter.lineTo(439.5, 100.9);
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
        vaulter.moveTo(448.7, 79.5);
        vaulter.bezierCurveTo(447.8, 78.4, 446.7, 77.3, 445.6, 76.4);
        vaulter.bezierCurveTo(443.4, 74.8, 438.5, 73.8, 436.0, 74.2);
        vaulter.bezierCurveTo(435.4, 74.3, 435.0, 74.5, 434.7, 74.9);
        vaulter.bezierCurveTo(434.4, 75.3, 432.3, 79.1, 430.3, 82.8);
        vaulter.bezierCurveTo(429.4, 84.4, 428.5, 86.0, 427.9, 87.3);
        vaulter.bezierCurveTo(427.2, 88.7, 426.4, 90.0, 425.7, 91.2);
        vaulter.bezierCurveTo(425.3, 92.0, 424.5, 93.2, 424.1, 93.8);
        vaulter.bezierCurveTo(423.2, 95.1, 422.6, 95.7, 422.3, 96.2);
        vaulter.bezierCurveTo(422.0, 96.6, 421.9, 96.8, 422.0, 97.0);
        vaulter.bezierCurveTo(422.1, 97.6, 422.3, 98.3, 422.6, 99.0);
        vaulter.bezierCurveTo(423.4, 100.7, 424.7, 102.7, 426.8, 103.8);
        vaulter.bezierCurveTo(427.3, 104.1, 427.8, 104.3, 428.4, 104.5);
        vaulter.bezierCurveTo(429.8, 104.8, 431.6, 105.0, 433.2, 104.8);
        vaulter.bezierCurveTo(435.4, 104.5, 437.4, 103.8, 438.5, 102.3);
        vaulter.bezierCurveTo(438.5, 102.3, 438.8, 101.8, 439.5, 100.9);
        vaulter.bezierCurveTo(442.4, 96.9, 450.2, 85.7, 450.3, 83.9);
        vaulter.bezierCurveTo(450.4, 82.6, 449.7, 81.0, 448.7, 79.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(419.2, 79.2);
        vaulter.bezierCurveTo(419.2, 79.2, 419.2, 78.2, 418.2, 78.3);
        vaulter.bezierCurveTo(417.2, 78.3, 417.2, 79.2, 417.2, 79.2);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(419.2, 79.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(423.7, 98.5);
        vaulter.bezierCurveTo(423.7, 98.5, 423.3, 98.7, 422.6, 99.0);
        vaulter.bezierCurveTo(422.0, 99.3, 421.2, 99.8, 420.2, 100.3);
        vaulter.bezierCurveTo(419.6, 100.7, 419.0, 101.1, 418.3, 101.5);
        vaulter.bezierCurveTo(417.2, 102.3, 416.1, 103.2, 415.5, 104.0);
        vaulter.bezierCurveTo(413.7, 106.5, 414.4, 110.7, 417.5, 113.3);
        vaulter.bezierCurveTo(417.9, 113.6, 418.3, 113.8, 418.9, 114.0);
        vaulter.bezierCurveTo(419.5, 114.1, 420.1, 114.2, 420.8, 114.1);
        vaulter.bezierCurveTo(423.5, 113.9, 426.6, 112.1, 427.5, 109.9);
        vaulter.bezierCurveTo(428.4, 107.5, 428.5, 105.4, 428.4, 104.5);
        vaulter.bezierCurveTo(428.4, 104.1, 428.4, 103.9, 428.4, 103.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(426.3, 91.8);
        vaulter.bezierCurveTo(427.3, 91.7, 430.0, 85.0, 430.3, 83.6);
        vaulter.bezierCurveTo(430.3, 83.3, 430.3, 83.1, 430.3, 82.8);
        vaulter.bezierCurveTo(430.2, 82.0, 429.8, 81.1, 429.5, 80.5);
        vaulter.bezierCurveTo(429.3, 80.1, 429.1, 79.8, 429.0, 79.7);
        vaulter.lineTo(428.4, 79.9);
        vaulter.bezierCurveTo(427.6, 80.3, 426.2, 81.2, 425.4, 82.4);
        vaulter.bezierCurveTo(424.9, 83.2, 424.4, 84.3, 423.9, 85.5);
        vaulter.bezierCurveTo(423.2, 87.1, 422.6, 88.6, 422.0, 89.1);
        vaulter.bezierCurveTo(420.9, 89.8, 420.7, 93.1, 420.7, 94.4);
        vaulter.bezierCurveTo(420.7, 95.2, 421.6, 95.8, 422.3, 96.2);
        vaulter.bezierCurveTo(422.7, 96.4, 423.0, 96.6, 423.0, 96.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(429.0, 79.7);
        vaulter.lineTo(428.4, 79.9);
        vaulter.lineTo(421.9, 81.9);
        vaulter.bezierCurveTo(421.9, 81.9, 421.2, 81.3, 420.4, 80.6);
        vaulter.bezierCurveTo(420.2, 80.4, 419.9, 80.3, 419.4, 80.4);
        vaulter.bezierCurveTo(418.8, 80.5, 418.1, 80.7, 417.5, 81.0);
        vaulter.bezierCurveTo(416.8, 81.3, 416.3, 81.6, 416.2, 81.8);
        vaulter.bezierCurveTo(415.9, 82.3, 415.2, 83.6, 415.1, 84.4);
        vaulter.bezierCurveTo(415.0, 85.2, 416.2, 87.1, 416.2, 87.1);
        vaulter.bezierCurveTo(416.5, 87.4, 417.1, 87.6, 417.8, 87.8);
        vaulter.bezierCurveTo(418.5, 87.9, 419.2, 88.0, 419.7, 87.9);
        vaulter.bezierCurveTo(420.0, 87.9, 420.3, 87.9, 420.4, 87.8);
        vaulter.bezierCurveTo(421.3, 87.2, 421.9, 85.9, 421.9, 85.9);
        vaulter.lineTo(423.9, 85.5);
        vaulter.lineTo(428.4, 84.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(448.7, 79.5);
        vaulter.bezierCurveTo(448.8, 79.5, 448.9, 79.5, 448.9, 79.5);
        vaulter.bezierCurveTo(452.9, 78.8, 459.4, 65.8, 460.5, 64.0);
        vaulter.bezierCurveTo(461.3, 62.6, 461.7, 60.7, 461.7, 59.1);
        vaulter.bezierCurveTo(461.7, 59.1, 466.4, 49.2, 467.9, 47.6);
        vaulter.bezierCurveTo(469.4, 46.0, 473.9, 36.2, 474.6, 30.4);
        vaulter.lineTo(475.3, 27.4);
        vaulter.lineTo(476.4, 22.9);
        vaulter.bezierCurveTo(476.4, 22.9, 472.5, 24.6, 471.6, 26.8);
        vaulter.bezierCurveTo(470.9, 28.6, 461.3, 46.5, 457.6, 53.4);
        vaulter.bezierCurveTo(456.7, 55.0, 456.2, 56.0, 456.1, 56.0);
        vaulter.bezierCurveTo(455.7, 57.0, 454.8, 59.1, 453.6, 61.3);
        vaulter.bezierCurveTo(452.6, 63.9, 450.7, 66.9, 448.7, 68.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(448.7, 68.9);
        vaulter.bezierCurveTo(450.7, 66.9, 452.6, 63.9, 453.6, 61.3);
        vaulter.bezierCurveTo(454.8, 59.1, 455.7, 57.0, 456.1, 56.0);
        vaulter.bezierCurveTo(456.5, 55.1, 457.0, 54.2, 457.6, 53.4);
        vaulter.lineTo(472.1, 31.0);
        vaulter.bezierCurveTo(473.4, 28.9, 474.4, 28.3, 475.2, 27.5);
        vaulter.bezierCurveTo(475.2, 27.5, 475.3, 27.5, 475.3, 27.4);
        vaulter.bezierCurveTo(476.4, 26.5, 481.4, 22.4, 482.6, 18.6);
        vaulter.bezierCurveTo(483.0, 17.2, 483.2, 15.9, 482.7, 15.5);
        vaulter.bezierCurveTo(482.1, 15.0, 483.2, 15.9, 482.7, 15.5);
        vaulter.bezierCurveTo(482.1, 15.0, 483.2, 15.9, 482.7, 15.5);
        vaulter.bezierCurveTo(482.1, 15.0, 480.1, 16.4, 480.1, 16.4);
        vaulter.bezierCurveTo(480.1, 16.4, 473.1, 23.7, 471.3, 24.6);
        vaulter.bezierCurveTo(469.5, 25.5, 469.6, 25.5, 469.0, 26.2);
        vaulter.bezierCurveTo(468.4, 26.9, 468.9, 28.9, 468.9, 28.9);
        vaulter.bezierCurveTo(460.6, 35.6, 449.9, 50.6, 449.9, 50.6);
        vaulter.bezierCurveTo(449.3, 50.6, 448.9, 50.6, 448.9, 50.6);
        vaulter.bezierCurveTo(437.4, 63.0, 434.9, 74.7, 434.9, 74.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(434.4, 75.7);
        vaulter.lineTo(440.5, 63.6);
        vaulter.bezierCurveTo(440.5, 63.6, 444.9, 62.8, 450.0, 66.2);
        vaulter.bezierCurveTo(455.0, 69.5, 454.5, 72.6, 454.5, 72.6);
        vaulter.lineTo(447.9, 80.6);
        vaulter.bezierCurveTo(447.9, 80.6, 445.5, 82.1, 440.7, 80.6);
        vaulter.bezierCurveTo(435.8, 79.0, 434.4, 75.7, 434.4, 75.7);
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
        vaulter.moveTo(419.2, 79.2);
        vaulter.bezierCurveTo(419.2, 79.2, 419.2, 78.2, 418.2, 78.3);
        vaulter.bezierCurveTo(417.2, 78.3, 417.2, 79.2, 417.2, 79.2);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(419.2, 79.2);
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
        vaulter.moveTo(434.9, 71.4);
        vaulter.bezierCurveTo(434.7, 70.5, 431.5, 71.1, 429.7, 71.8);
        vaulter.bezierCurveTo(429.3, 72.0, 429.0, 72.0, 428.6, 72.1);
        vaulter.bezierCurveTo(427.9, 72.4, 427.3, 72.9, 426.8, 73.3);
        vaulter.bezierCurveTo(426.5, 73.6, 426.2, 73.9, 426.2, 74.0);
        vaulter.lineTo(425.7, 74.5);
        vaulter.lineTo(420.9, 79.2);
        vaulter.bezierCurveTo(420.9, 79.2, 420.0, 79.0, 419.0, 78.7);
        vaulter.bezierCurveTo(418.6, 78.6, 418.2, 78.9, 417.7, 79.2);
        vaulter.bezierCurveTo(417.2, 79.6, 416.7, 80.2, 416.3, 80.7);
        vaulter.bezierCurveTo(416.0, 81.2, 415.7, 81.6, 415.8, 81.8);
        vaulter.bezierCurveTo(415.8, 82.4, 415.8, 83.8, 416.0, 84.6);
        vaulter.bezierCurveTo(416.3, 85.3, 418.2, 86.5, 418.2, 86.5);
        vaulter.bezierCurveTo(418.5, 86.6, 419.1, 86.5, 419.6, 86.4);
        vaulter.bezierCurveTo(420.3, 86.3, 420.9, 86.0, 421.5, 85.8);
        vaulter.bezierCurveTo(421.8, 85.6, 422.2, 85.3, 422.3, 85.1);
        vaulter.bezierCurveTo(422.9, 84.2, 422.8, 82.8, 422.8, 82.8);
        vaulter.lineTo(424.3, 81.5);
        vaulter.lineTo(429.7, 76.9);
        vaulter.bezierCurveTo(430.5, 77.2, 431.8, 77.4, 433.0, 77.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(452.7, 56.5);
        vaulter.bezierCurveTo(451.6, 55.6, 450.0, 54.9, 448.2, 54.5);
        vaulter.lineTo(441.8, 53.7);
        vaulter.bezierCurveTo(441.6, 53.7, 441.3, 53.8, 441.1, 53.8);
        vaulter.bezierCurveTo(440.4, 54.0, 438.8, 59.7, 437.0, 63.3);
        vaulter.bezierCurveTo(435.2, 67.0, 430.6, 72.6, 430.1, 73.3);
        vaulter.bezierCurveTo(429.3, 74.4, 429.0, 75.1, 428.7, 75.8);
        vaulter.bezierCurveTo(428.3, 76.7, 428.1, 77.6, 428.1, 78.3);
        vaulter.bezierCurveTo(428.1, 79.2, 428.0, 80.7, 428.8, 82.1);
        vaulter.bezierCurveTo(429.2, 82.7, 429.6, 83.3, 430.1, 83.8);
        vaulter.bezierCurveTo(430.9, 84.9, 431.9, 85.8, 433.1, 86.5);
        vaulter.bezierCurveTo(434.0, 87.0, 435.1, 87.3, 436.1, 87.3);
        vaulter.lineTo(436.6, 87.3);
        vaulter.bezierCurveTo(439.3, 87.3, 442.2, 86.1, 444.1, 84.2);
        vaulter.bezierCurveTo(444.5, 83.8, 444.8, 83.5, 445.1, 83.1);
        vaulter.bezierCurveTo(445.1, 83.1, 447.9, 74.8, 450.3, 70.5);
        vaulter.bezierCurveTo(452.7, 66.2, 456.2, 64.0, 456.2, 63.6);
        vaulter.bezierCurveTo(456.2, 61.1, 455.6, 58.6, 452.7, 56.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(436.4, 86.9);
        vaulter.lineTo(436.6, 87.1);
        vaulter.bezierCurveTo(436.6, 87.1, 436.6, 87.2, 436.6, 87.3);
        vaulter.bezierCurveTo(436.5, 87.7, 436.3, 88.8, 435.9, 90.3);
        vaulter.bezierCurveTo(435.9, 92.5, 436.5, 93.3, 436.5, 93.3);
        vaulter.bezierCurveTo(436.5, 93.3, 435.0, 95.1, 434.6, 96.4);
        vaulter.bezierCurveTo(434.3, 97.8, 433.2, 101.0, 433.3, 102.8);
        vaulter.bezierCurveTo(431.3, 107.2, 431.2, 111.8, 427.7, 118.9);
        vaulter.bezierCurveTo(427.7, 118.9, 427.4, 119.9, 425.9, 120.2);
        vaulter.bezierCurveTo(424.5, 120.5, 420.5, 124.9, 420.5, 124.9);
        vaulter.bezierCurveTo(420.5, 124.9, 419.7, 126.1, 419.8, 126.7);
        vaulter.bezierCurveTo(420.0, 127.2, 421.2, 126.6, 421.5, 127.2);
        vaulter.bezierCurveTo(421.7, 127.7, 422.4, 126.8, 422.9, 127.1);
        vaulter.bezierCurveTo(423.4, 127.4, 423.8, 126.8, 424.2, 126.3);
        vaulter.bezierCurveTo(424.5, 125.7, 426.3, 123.5, 426.3, 123.5);
        vaulter.bezierCurveTo(426.3, 123.5, 427.4, 123.0, 428.3, 122.5);
        vaulter.bezierCurveTo(429.1, 122.0, 429.3, 120.7, 429.9, 119.9);
        vaulter.bezierCurveTo(433.6, 115.0, 438.1, 109.1, 439.7, 104.4);
        vaulter.bezierCurveTo(440.6, 101.5, 441.7, 94.3, 441.7, 94.3);
        vaulter.bezierCurveTo(441.7, 94.3, 444.1, 88.7, 444.3, 87.3);
        vaulter.bezierCurveTo(444.4, 86.3, 444.3, 85.2, 444.1, 84.2);
        vaulter.bezierCurveTo(443.7, 82.3, 442.8, 80.7, 441.7, 80.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(451.8, 54.9);
        vaulter.bezierCurveTo(453.2, 54.2, 454.7, 53.3, 456.2, 52.3);
        vaulter.bezierCurveTo(462.3, 48.0, 467.9, 41.5, 467.9, 41.5);
        vaulter.lineTo(471.6, 38.9);
        vaulter.bezierCurveTo(475.5, 36.1, 477.9, 32.5, 481.0, 29.1);
        vaulter.bezierCurveTo(483.5, 26.3, 486.4, 23.7, 490.9, 21.7);
        vaulter.bezierCurveTo(490.9, 21.7, 491.1, 22.2, 491.5, 22.8);
        vaulter.bezierCurveTo(492.1, 23.9, 493.0, 25.5, 493.7, 26.7);
        vaulter.bezierCurveTo(494.9, 28.5, 496.8, 29.7, 497.5, 28.3);
        vaulter.bezierCurveTo(498.2, 26.9, 496.3, 25.3, 496.1, 23.8);
        vaulter.bezierCurveTo(495.9, 23.0, 495.7, 21.7, 495.4, 20.4);
        vaulter.bezierCurveTo(495.2, 19.4, 495.0, 18.4, 494.7, 17.5);
        vaulter.bezierCurveTo(494.0, 15.4, 491.6, 15.4, 490.7, 15.6);
        vaulter.bezierCurveTo(489.7, 15.9, 488.8, 17.7, 488.8, 17.7);
        vaulter.bezierCurveTo(470.5, 25.3, 465.5, 34.2, 465.5, 34.2);
        vaulter.bezierCurveTo(462.7, 34.0, 455.4, 38.2, 450.2, 41.7);
        vaulter.bezierCurveTo(445.1, 45.2, 441.8, 53.7, 441.8, 53.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(431.0, 80.7);
        vaulter.bezierCurveTo(431.0, 80.7, 430.1, 81.2, 428.8, 82.1);
        vaulter.bezierCurveTo(426.8, 83.5, 423.9, 85.7, 422.6, 87.6);
        vaulter.bezierCurveTo(420.9, 89.9, 420.4, 93.4, 422.0, 95.9);
        vaulter.bezierCurveTo(422.5, 96.8, 423.3, 97.5, 424.3, 98.0);
        vaulter.bezierCurveTo(428.2, 100.2, 433.2, 97.7, 434.7, 93.8);
        vaulter.bezierCurveTo(435.2, 92.4, 435.6, 91.3, 435.9, 90.3);
        vaulter.bezierCurveTo(435.9, 89.5, 435.9, 88.5, 436.1, 87.3);
        vaulter.bezierCurveTo(436.1, 87.3, 436.1, 87.3, 436.1, 87.3);
        vaulter.bezierCurveTo(436.1, 87.3, 436.2, 87.1, 436.4, 86.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(442.3, 54.8);
        vaulter.bezierCurveTo(442.3, 54.8, 443.0, 52.3, 444.6, 49.7);
        vaulter.bezierCurveTo(446.1, 47.0, 449.0, 44.2, 450.6, 43.5);
        vaulter.bezierCurveTo(452.3, 42.8, 458.5, 42.6, 461.1, 44.1);
        vaulter.bezierCurveTo(463.6, 45.6, 466.5, 50.1, 464.7, 53.1);
        vaulter.bezierCurveTo(463.0, 56.2, 454.9, 63.5, 454.2, 64.0);
        vaulter.bezierCurveTo(453.4, 64.6, 449.6, 63.6, 447.1, 62.1);
        vaulter.bezierCurveTo(444.7, 60.6, 442.3, 56.3, 442.3, 54.8);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(456.2, 62.4);
        vaulter.bezierCurveTo(471.3, 55.2, 474.2, 46.4, 475.5, 45.5);
        vaulter.bezierCurveTo(476.7, 44.5, 478.0, 42.3, 478.0, 42.3);
        vaulter.bezierCurveTo(478.0, 42.3, 486.1, 32.5, 494.0, 28.2);
        vaulter.bezierCurveTo(494.0, 28.2, 494.2, 28.7, 494.7, 29.7);
        vaulter.bezierCurveTo(495.1, 30.6, 496.4, 31.2, 496.4, 31.2);
        vaulter.bezierCurveTo(496.4, 31.2, 498.6, 35.2, 499.2, 35.9);
        vaulter.bezierCurveTo(499.9, 36.6, 501.6, 37.4, 502.3, 36.2);
        vaulter.bezierCurveTo(503.0, 35.1, 500.1, 28.9, 499.7, 28.5);
        vaulter.bezierCurveTo(499.2, 28.2, 498.2, 24.4, 497.6, 22.7);
        vaulter.bezierCurveTo(497.3, 21.8, 496.4, 20.9, 495.4, 20.4);
        vaulter.bezierCurveTo(494.7, 20.0, 493.9, 19.8, 493.3, 20.0);
        vaulter.bezierCurveTo(492.4, 20.3, 491.7, 22.0, 491.5, 22.8);
        vaulter.bezierCurveTo(491.4, 23.0, 491.4, 23.2, 491.4, 23.2);
        vaulter.bezierCurveTo(488.2, 24.9, 484.4, 27.0, 481.0, 29.1);
        vaulter.bezierCurveTo(477.2, 31.4, 473.8, 33.7, 472.1, 35.3);
        vaulter.bezierCurveTo(464.5, 37.7, 456.2, 44.7, 456.2, 44.7);
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
        vaulter.moveTo(419.3, 79.2);
        vaulter.bezierCurveTo(419.3, 79.2, 419.3, 78.2, 418.3, 78.3);
        vaulter.bezierCurveTo(417.3, 78.3, 417.3, 79.2, 417.3, 79.2);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(419.3, 79.2);
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
        vaulter.moveTo(435.7, 71.4);
        vaulter.bezierCurveTo(435.4, 70.4, 431.5, 71.1, 429.7, 71.8);
        vaulter.bezierCurveTo(429.4, 72.0, 429.0, 72.0, 428.7, 72.1);
        vaulter.bezierCurveTo(428.0, 72.4, 427.3, 72.9, 426.9, 73.3);
        vaulter.bezierCurveTo(426.5, 73.6, 426.3, 73.9, 426.2, 74.0);
        vaulter.lineTo(425.8, 74.5);
        vaulter.lineTo(421.0, 79.2);
        vaulter.bezierCurveTo(421.0, 79.2, 420.0, 79.0, 419.0, 78.7);
        vaulter.bezierCurveTo(418.7, 78.6, 418.2, 78.9, 417.8, 79.2);
        vaulter.bezierCurveTo(417.3, 79.6, 416.8, 80.2, 416.4, 80.7);
        vaulter.bezierCurveTo(416.0, 81.2, 415.8, 81.6, 415.8, 81.8);
        vaulter.bezierCurveTo(415.8, 82.4, 415.8, 83.8, 416.1, 84.6);
        vaulter.bezierCurveTo(416.3, 85.3, 418.3, 86.5, 418.3, 86.5);
        vaulter.bezierCurveTo(418.6, 86.6, 419.1, 86.5, 419.7, 86.4);
        vaulter.bezierCurveTo(420.3, 86.3, 421.0, 86.0, 421.5, 85.8);
        vaulter.bezierCurveTo(421.9, 85.6, 422.2, 85.3, 422.4, 85.1);
        vaulter.bezierCurveTo(422.9, 84.2, 422.8, 82.8, 422.8, 82.8);
        vaulter.lineTo(424.4, 81.5);
        vaulter.lineTo(429.7, 76.9);
        vaulter.bezierCurveTo(430.6, 77.2, 431.8, 77.4, 433.1, 77.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(458.8, 51.7);
        vaulter.lineTo(458.9, 51.3);
        vaulter.bezierCurveTo(458.9, 51.1, 458.8, 50.9, 458.7, 50.7);
        vaulter.bezierCurveTo(458.4, 50.4, 458.1, 50.1, 457.8, 49.8);
        vaulter.bezierCurveTo(455.3, 47.8, 450.7, 46.7, 448.3, 47.2);
        vaulter.bezierCurveTo(447.7, 47.4, 447.2, 47.6, 447.0, 47.9);
        vaulter.bezierCurveTo(446.7, 48.4, 443.2, 57.4, 441.1, 61.2);
        vaulter.bezierCurveTo(439.7, 63.8, 435.6, 67.3, 435.1, 68.0);
        vaulter.bezierCurveTo(434.7, 68.7, 433.5, 70.5, 433.6, 72.3);
        vaulter.bezierCurveTo(433.6, 72.4, 433.6, 72.6, 433.7, 72.7);
        vaulter.bezierCurveTo(433.7, 73.1, 433.8, 73.6, 433.9, 74.2);
        vaulter.bezierCurveTo(434.2, 75.6, 434.8, 77.3, 435.7, 78.6);
        vaulter.bezierCurveTo(436.0, 78.9, 436.2, 79.3, 436.5, 79.5);
        vaulter.bezierCurveTo(437.2, 80.2, 438.0, 80.7, 439.1, 80.8);
        vaulter.bezierCurveTo(439.3, 80.8, 439.6, 80.8, 439.9, 80.9);
        vaulter.bezierCurveTo(440.9, 80.9, 441.9, 80.9, 442.8, 80.8);
        vaulter.bezierCurveTo(445.5, 80.4, 447.4, 79.0, 449.3, 76.4);
        vaulter.bezierCurveTo(449.3, 76.4, 456.9, 61.7, 457.1, 58.9);
        vaulter.bezierCurveTo(457.2, 56.6, 458.9, 53.5, 458.9, 51.7);
        vaulter.bezierCurveTo(458.9, 51.7, 458.8, 51.7, 458.8, 51.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(434.4, 73.9);
        vaulter.bezierCurveTo(434.4, 73.9, 434.2, 74.0, 433.9, 74.2);
        vaulter.bezierCurveTo(433.3, 74.6, 432.0, 75.5, 430.6, 76.5);
        vaulter.bezierCurveTo(428.8, 77.8, 426.9, 79.4, 425.9, 80.8);
        vaulter.bezierCurveTo(424.5, 82.8, 423.9, 85.7, 424.8, 88.1);
        vaulter.bezierCurveTo(425.3, 89.3, 426.2, 90.5, 427.7, 91.3);
        vaulter.bezierCurveTo(427.7, 91.3, 427.8, 91.3, 427.9, 91.4);
        vaulter.bezierCurveTo(429.4, 92.1, 431.1, 92.2, 432.6, 91.8);
        vaulter.bezierCurveTo(435.0, 91.1, 437.1, 89.3, 438.1, 87.0);
        vaulter.bezierCurveTo(439.2, 84.1, 439.7, 81.8, 439.9, 80.9);
        vaulter.bezierCurveTo(440.0, 80.5, 440.0, 80.4, 440.0, 80.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(435.7, 73.9);
        vaulter.bezierCurveTo(435.7, 73.9, 436.7, 69.5, 443.0, 68.1);
        vaulter.bezierCurveTo(449.3, 66.7, 448.1, 74.9, 446.9, 76.5);
        vaulter.bezierCurveTo(445.8, 78.1, 443.8, 79.9, 441.1, 80.7);
        vaulter.bezierCurveTo(438.4, 81.6, 434.1, 80.4, 435.7, 73.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(436.2, 76.5);
        vaulter.bezierCurveTo(435.7, 77.1, 434.8, 80.1, 434.8, 80.1);
        vaulter.bezierCurveTo(434.7, 80.5, 434.7, 80.9, 434.6, 81.2);
        vaulter.bezierCurveTo(434.3, 84.9, 435.2, 86.1, 435.2, 86.1);
        vaulter.bezierCurveTo(435.2, 86.1, 433.6, 87.9, 433.3, 89.2);
        vaulter.bezierCurveTo(433.2, 89.8, 432.9, 90.7, 432.6, 91.8);
        vaulter.bezierCurveTo(432.2, 93.1, 431.9, 94.6, 432.0, 95.5);
        vaulter.bezierCurveTo(429.9, 100.0, 429.8, 104.6, 426.3, 111.7);
        vaulter.bezierCurveTo(426.3, 111.7, 426.0, 112.6, 424.6, 112.9);
        vaulter.bezierCurveTo(423.2, 113.3, 419.2, 117.7, 419.2, 117.7);
        vaulter.bezierCurveTo(419.2, 117.7, 418.3, 118.9, 418.5, 119.5);
        vaulter.bezierCurveTo(418.6, 120.0, 419.9, 119.4, 420.1, 119.9);
        vaulter.bezierCurveTo(420.4, 120.5, 421.1, 119.5, 421.5, 119.8);
        vaulter.bezierCurveTo(422.0, 120.2, 422.5, 119.6, 422.8, 119.1);
        vaulter.bezierCurveTo(423.1, 118.5, 424.9, 116.3, 424.9, 116.3);
        vaulter.bezierCurveTo(424.9, 116.3, 426.1, 115.8, 426.9, 115.3);
        vaulter.bezierCurveTo(427.8, 114.8, 428.0, 113.5, 428.6, 112.7);
        vaulter.bezierCurveTo(432.3, 107.8, 436.7, 101.9, 438.3, 97.2);
        vaulter.bezierCurveTo(439.3, 94.3, 440.3, 87.1, 440.3, 87.1);
        vaulter.bezierCurveTo(440.3, 87.1, 442.2, 82.8, 442.8, 80.8);
        vaulter.bezierCurveTo(442.9, 80.5, 442.9, 80.3, 442.9, 80.1);
        vaulter.bezierCurveTo(443.1, 79.2, 443.0, 78.3, 442.9, 77.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(458.9, 51.7);
        vaulter.bezierCurveTo(474.8, 46.8, 479.0, 38.6, 480.4, 37.8);
        vaulter.bezierCurveTo(481.8, 37.1, 486.3, 33.4, 486.3, 33.4);
        vaulter.bezierCurveTo(486.3, 33.4, 494.2, 28.3, 502.4, 25.2);
        vaulter.bezierCurveTo(502.7, 25.0, 503.1, 24.9, 503.5, 24.7);
        vaulter.bezierCurveTo(503.5, 24.7, 503.8, 26.4, 504.1, 27.4);
        vaulter.bezierCurveTo(504.4, 28.4, 505.5, 29.2, 505.5, 29.2);
        vaulter.bezierCurveTo(505.5, 29.2, 506.1, 30.0, 506.6, 30.8);
        vaulter.bezierCurveTo(507.2, 31.5, 507.7, 32.3, 508.0, 32.7);
        vaulter.bezierCurveTo(508.6, 33.5, 509.3, 34.4, 510.1, 33.4);
        vaulter.bezierCurveTo(511.0, 32.3, 509.6, 27.4, 509.2, 27.0);
        vaulter.bezierCurveTo(508.8, 26.6, 508.3, 22.8, 508.0, 21.0);
        vaulter.bezierCurveTo(507.8, 19.6, 506.3, 18.1, 505.0, 17.7);
        vaulter.bezierCurveTo(504.7, 17.7, 504.4, 17.6, 504.2, 17.7);
        vaulter.bezierCurveTo(502.9, 17.9, 501.8, 20.5, 501.8, 20.5);
        vaulter.bezierCurveTo(495.3, 23.7, 484.8, 26.4, 480.9, 29.7);
        vaulter.bezierCurveTo(478.8, 30.0, 476.7, 30.6, 474.7, 31.3);
        vaulter.bezierCurveTo(474.6, 31.4, 474.6, 31.5, 474.6, 31.5);
        vaulter.bezierCurveTo(474.5, 31.4, 474.4, 31.4, 474.3, 31.4);
        vaulter.bezierCurveTo(468.6, 33.5, 463.7, 36.5, 463.7, 36.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(458.9, 51.7);
        vaulter.bezierCurveTo(474.8, 46.8, 479.0, 38.6, 480.4, 37.8);
        vaulter.bezierCurveTo(481.8, 37.1, 486.3, 33.4, 486.3, 33.4);
        vaulter.bezierCurveTo(486.3, 33.4, 494.2, 28.3, 502.4, 25.2);
        vaulter.bezierCurveTo(502.7, 26.2, 503.2, 27.3, 503.6, 28.2);
        vaulter.bezierCurveTo(504.3, 30.0, 505.7, 31.3, 506.6, 30.8);
        vaulter.bezierCurveTo(506.8, 30.7, 506.9, 30.6, 507.1, 30.4);
        vaulter.bezierCurveTo(508.0, 29.1, 506.3, 27.2, 506.3, 25.8);
        vaulter.bezierCurveTo(506.3, 24.4, 506.3, 21.5, 505.9, 19.3);
        vaulter.bezierCurveTo(505.8, 18.6, 505.4, 18.1, 505.0, 17.7);
        vaulter.bezierCurveTo(504.7, 17.7, 504.4, 17.6, 504.2, 17.7);
        vaulter.bezierCurveTo(502.9, 17.9, 501.8, 20.5, 501.8, 20.5);
        vaulter.bezierCurveTo(495.3, 23.7, 484.8, 26.4, 480.9, 29.7);
        vaulter.bezierCurveTo(478.8, 30.0, 476.7, 30.6, 474.7, 31.3);
        vaulter.lineTo(474.3, 31.4);
        vaulter.bezierCurveTo(471.4, 31.0, 463.8, 34.0, 458.3, 36.6);
        vaulter.bezierCurveTo(452.7, 39.3, 448.2, 47.2, 448.2, 47.2);
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
        vaulter.moveTo(419.2, 79.2);
        vaulter.bezierCurveTo(419.2, 79.2, 419.2, 78.2, 418.2, 78.3);
        vaulter.bezierCurveTo(417.2, 78.3, 417.2, 79.2, 417.2, 79.2);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(419.2, 79.2);
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
        vaulter.moveTo(429.1, 70.4);
        vaulter.bezierCurveTo(429.1, 70.4, 430.5, 71.0, 432.9, 69.5);
        vaulter.bezierCurveTo(435.3, 68.1, 435.6, 67.2, 435.6, 67.2);
        vaulter.bezierCurveTo(435.6, 67.2, 437.4, 68.9, 442.6, 66.7);
        vaulter.bezierCurveTo(445.7, 65.3, 445.2, 61.9, 444.7, 60.7);
        vaulter.bezierCurveTo(443.7, 58.2, 441.1, 57.8, 441.1, 57.8);
        vaulter.lineTo(434.5, 61.6);
        vaulter.bezierCurveTo(434.5, 61.6, 431.2, 62.7, 427.8, 66.2);
        vaulter.bezierCurveTo(427.5, 66.5, 425.8, 68.0, 425.6, 68.4);
        vaulter.bezierCurveTo(425.4, 68.7, 420.9, 79.2, 420.9, 79.2);
        vaulter.bezierCurveTo(420.9, 79.2, 420.0, 79.0, 419.0, 78.7);
        vaulter.bezierCurveTo(418.6, 78.6, 418.2, 78.9, 417.7, 79.2);
        vaulter.bezierCurveTo(417.2, 79.6, 416.7, 80.2, 416.3, 80.7);
        vaulter.bezierCurveTo(416.0, 81.2, 415.7, 81.6, 415.8, 81.8);
        vaulter.bezierCurveTo(415.8, 82.4, 415.8, 83.8, 416.0, 84.6);
        vaulter.bezierCurveTo(416.3, 85.3, 418.2, 86.5, 418.2, 86.5);
        vaulter.bezierCurveTo(418.5, 86.6, 419.1, 86.5, 419.6, 86.4);
        vaulter.bezierCurveTo(420.3, 86.3, 420.9, 86.0, 421.5, 85.8);
        vaulter.bezierCurveTo(421.8, 85.6, 422.2, 85.3, 422.3, 85.1);
        vaulter.bezierCurveTo(422.9, 84.2, 422.8, 82.8, 422.8, 82.8);
        vaulter.lineTo(424.3, 81.5);
        vaulter.lineTo(429.1, 70.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(450.3, 66.7);
        vaulter.bezierCurveTo(450.3, 66.7, 459.6, 55.0, 460.9, 52.5);
        vaulter.bezierCurveTo(462.4, 50.0, 466.7, 45.9, 465.9, 44.3);
        vaulter.bezierCurveTo(464.0, 40.8, 456.5, 38.1, 454.9, 39.7);
        vaulter.bezierCurveTo(454.4, 40.1, 448.6, 46.4, 445.9, 49.9);
        vaulter.bezierCurveTo(444.1, 52.2, 440.5, 57.0, 439.9, 57.6);
        vaulter.bezierCurveTo(439.4, 58.2, 437.9, 59.8, 437.7, 61.6);
        vaulter.bezierCurveTo(437.5, 63.7, 437.7, 70.2, 441.7, 70.8);
        vaulter.bezierCurveTo(444.4, 71.3, 447.2, 69.8, 450.3, 66.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(461.2, 33.7);
        vaulter.bezierCurveTo(466.4, 31.6, 476.8, 30.6, 490.1, 30.9);
        vaulter.bezierCurveTo(496.9, 27.3, 510.1, 25.2, 514.0, 23.3);
        vaulter.bezierCurveTo(514.0, 23.3, 515.7, 21.1, 517.0, 21.1);
        vaulter.bezierCurveTo(518.3, 21.2, 520.1, 23.5, 520.0, 25.3);
        vaulter.bezierCurveTo(519.8, 27.1, 519.4, 30.9, 519.7, 31.4);
        vaulter.bezierCurveTo(520.0, 31.9, 520.2, 38.8, 519.2, 39.5);
        vaulter.bezierCurveTo(518.1, 40.3, 516.8, 39.0, 516.4, 38.1);
        vaulter.bezierCurveTo(516.1, 37.2, 515.6, 32.7, 515.6, 32.7);
        vaulter.bezierCurveTo(515.6, 32.7, 514.7, 31.6, 514.6, 30.6);
        vaulter.bezierCurveTo(514.5, 29.5, 514.5, 28.9, 514.5, 28.9);
        vaulter.bezierCurveTo(505.5, 29.9, 494.4, 35.9, 494.4, 35.9);
        vaulter.bezierCurveTo(494.4, 35.9, 492.4, 37.5, 490.9, 37.9);
        vaulter.bezierCurveTo(489.3, 38.3, 481.3, 43.0, 466.0, 46.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(454.9, 40.6);
        vaulter.bezierCurveTo(454.9, 40.6, 455.2, 35.6, 459.0, 33.2);
        vaulter.bezierCurveTo(462.8, 30.9, 467.8, 31.0, 467.8, 31.0);
        vaulter.bezierCurveTo(468.2, 30.8, 468.7, 30.7, 469.1, 30.6);
        vaulter.bezierCurveTo(475.2, 29.3, 483.6, 28.1, 486.1, 29.4);
        vaulter.bezierCurveTo(486.1, 29.4, 494.1, 23.0, 513.9, 23.0);
        vaulter.bezierCurveTo(513.9, 23.0, 515.5, 21.6, 516.4, 21.7);
        vaulter.bezierCurveTo(517.4, 21.9, 519.6, 22.8, 519.4, 25.0);
        vaulter.bezierCurveTo(519.3, 27.2, 518.6, 30.0, 518.3, 31.4);
        vaulter.bezierCurveTo(518.0, 32.8, 519.1, 35.0, 517.9, 36.1);
        vaulter.bezierCurveTo(516.8, 37.1, 515.5, 35.3, 515.1, 33.1);
        vaulter.bezierCurveTo(514.7, 30.9, 514.3, 27.5, 514.3, 27.5);
        vaulter.bezierCurveTo(503.6, 27.7, 498.5, 34.0, 490.0, 36.1);
        vaulter.lineTo(485.5, 37.1);
        vaulter.bezierCurveTo(485.5, 37.1, 474.0, 43.0, 465.6, 43.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(444.4, 68.9);
        vaulter.bezierCurveTo(444.4, 68.9, 443.1, 71.4, 440.5, 74.6);
        vaulter.bezierCurveTo(437.9, 77.9, 432.4, 78.7, 429.3, 75.5);
        vaulter.bezierCurveTo(426.0, 72.1, 427.8, 67.3, 430.8, 65.0);
        vaulter.bezierCurveTo(433.9, 62.7, 441.0, 61.0, 441.0, 61.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(441.7, 61.4);
        vaulter.bezierCurveTo(441.7, 61.4, 442.7, 57.0, 449.0, 55.7);
        vaulter.bezierCurveTo(455.2, 54.3, 453.7, 62.3, 452.5, 63.9);
        vaulter.bezierCurveTo(451.4, 65.4, 449.7, 67.5, 447.1, 68.3);
        vaulter.bezierCurveTo(444.4, 69.1, 440.1, 67.9, 441.7, 61.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(447.6, 67.6);
        vaulter.bezierCurveTo(447.4, 69.0, 444.0, 75.4, 444.0, 75.4);
        vaulter.bezierCurveTo(444.0, 75.4, 443.1, 82.6, 442.1, 85.5);
        vaulter.bezierCurveTo(440.6, 90.2, 436.2, 96.2, 432.5, 101.2);
        vaulter.bezierCurveTo(431.9, 101.9, 431.7, 103.2, 430.9, 103.7);
        vaulter.bezierCurveTo(430.0, 104.2, 428.9, 104.8, 428.9, 104.8);
        vaulter.bezierCurveTo(428.9, 104.8, 427.1, 107.0, 426.8, 107.6);
        vaulter.bezierCurveTo(426.5, 108.1, 426.0, 108.7, 425.5, 108.4);
        vaulter.bezierCurveTo(425.1, 108.0, 424.4, 109.0, 424.1, 108.5);
        vaulter.bezierCurveTo(423.9, 107.9, 422.6, 108.5, 422.5, 108.0);
        vaulter.bezierCurveTo(422.3, 107.4, 423.2, 106.2, 423.2, 106.2);
        vaulter.bezierCurveTo(423.2, 106.2, 427.1, 101.8, 428.5, 101.4);
        vaulter.bezierCurveTo(429.9, 101.1, 430.2, 100.2, 430.2, 100.2);
        vaulter.bezierCurveTo(433.7, 93.0, 433.7, 88.4, 435.7, 84.0);
        vaulter.bezierCurveTo(435.6, 82.2, 436.7, 78.9, 437.0, 77.6);
        vaulter.bezierCurveTo(437.3, 76.3, 437.7, 74.3, 437.7, 74.3);
        vaulter.bezierCurveTo(437.7, 74.3, 436.6, 73.5, 437.4, 67.7);
        vaulter.bezierCurveTo(438.0, 63.6, 440.1, 62.4, 442.0, 62.0);
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
        vaulter.moveTo(420.3, 83.6);
        vaulter.bezierCurveTo(420.2, 83.8, 420.8, 80.9, 420.3, 79.4);
        vaulter.bezierCurveTo(420.3, 79.4, 428.1, 74.2, 431.5, 69.9);
        vaulter.bezierCurveTo(431.5, 69.9, 433.7, 68.9, 435.3, 66.6);
        vaulter.bezierCurveTo(437.0, 64.3, 438.0, 62.7, 438.0, 62.7);
        vaulter.bezierCurveTo(438.0, 62.7, 441.0, 62.2, 445.4, 58.6);
        vaulter.bezierCurveTo(447.9, 56.4, 446.5, 53.3, 445.7, 52.3);
        vaulter.bezierCurveTo(444.0, 50.2, 441.4, 50.5, 441.4, 50.5);
        vaulter.lineTo(435.3, 57.6);
        vaulter.bezierCurveTo(435.3, 57.6, 430.6, 62.2, 428.0, 65.6);
        vaulter.bezierCurveTo(428.0, 65.6, 421.7, 72.1, 418.7, 77.7);
        vaulter.bezierCurveTo(418.7, 77.7, 418.1, 78.5, 417.3, 80.1);
        vaulter.bezierCurveTo(417.0, 80.6, 416.3, 81.3, 416.1, 81.7);
        vaulter.bezierCurveTo(415.4, 82.9, 414.7, 83.7, 414.8, 85.9);
        vaulter.bezierCurveTo(414.8, 85.9, 415.6, 86.5, 416.1, 86.6);
        vaulter.bezierCurveTo(416.2, 86.7, 417.1, 87.1, 417.3, 87.1);
        vaulter.bezierCurveTo(417.8, 87.1, 417.9, 87.0, 418.3, 87.0);
        vaulter.bezierCurveTo(418.7, 87.0, 418.6, 87.0, 419.1, 86.6);
        vaulter.bezierCurveTo(419.4, 86.4, 419.5, 86.5, 419.8, 86.4);
        vaulter.bezierCurveTo(420.3, 86.2, 420.1, 85.6, 420.1, 85.6);
        vaulter.bezierCurveTo(420.1, 85.6, 420.4, 84.5, 420.3, 83.6);
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
        vaulter.moveTo(442.3, 63.3);
        vaulter.bezierCurveTo(442.3, 63.3, 441.6, 65.7, 439.7, 69.0);
        vaulter.bezierCurveTo(437.9, 72.3, 433.1, 73.9, 429.9, 71.5);
        vaulter.bezierCurveTo(426.5, 68.9, 427.4, 64.4, 429.7, 61.9);
        vaulter.bezierCurveTo(432.1, 59.5, 438.2, 56.8, 438.2, 56.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(451.4, 57.8);
        vaulter.bezierCurveTo(451.4, 57.8, 457.7, 51.2, 460.6, 45.4);
        vaulter.bezierCurveTo(461.7, 43.3, 462.5, 40.6, 462.8, 39.2);
        vaulter.bezierCurveTo(463.4, 37.1, 462.6, 35.5, 461.5, 34.8);
        vaulter.bezierCurveTo(459.9, 33.7, 457.7, 32.9, 456.0, 32.9);
        vaulter.bezierCurveTo(455.2, 32.9, 452.0, 36.1, 449.7, 39.5);
        vaulter.bezierCurveTo(448.2, 41.9, 446.9, 44.1, 445.4, 45.8);
        vaulter.bezierCurveTo(444.2, 47.3, 442.4, 48.9, 440.8, 50.2);
        vaulter.bezierCurveTo(439.3, 51.6, 438.6, 53.6, 438.4, 54.4);
        vaulter.bezierCurveTo(438.0, 56.5, 439.2, 61.2, 443.3, 61.3);
        vaulter.bezierCurveTo(447.9, 61.5, 449.0, 61.5, 451.4, 57.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(416.9, 79.2);
        vaulter.bezierCurveTo(416.9, 79.2, 417.0, 78.3, 415.9, 78.3);
        vaulter.bezierCurveTo(414.9, 78.4, 414.9, 79.3, 414.9, 79.3);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(416.9, 79.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(454.7, 33.8);
        vaulter.bezierCurveTo(454.7, 33.8, 456.9, 26.6, 462.2, 25.3);
        vaulter.bezierCurveTo(467.6, 24.1, 473.5, 25.3, 473.5, 25.3);
        vaulter.lineTo(479.5, 27.2);
        vaulter.bezierCurveTo(479.5, 27.2, 482.9, 28.8, 485.4, 27.8);
        vaulter.bezierCurveTo(487.9, 26.9, 494.8, 24.8, 507.4, 29.3);
        vaulter.bezierCurveTo(507.4, 29.3, 508.4, 27.2, 509.6, 27.4);
        vaulter.bezierCurveTo(510.9, 27.5, 513.5, 28.8, 513.1, 31.4);
        vaulter.bezierCurveTo(512.6, 33.9, 512.7, 39.6, 513.1, 40.8);
        vaulter.bezierCurveTo(513.5, 41.9, 513.9, 44.8, 513.1, 45.2);
        vaulter.bezierCurveTo(512.4, 45.7, 510.8, 43.9, 511.2, 42.5);
        vaulter.bezierCurveTo(511.2, 42.5, 507.6, 37.2, 507.3, 33.2);
        vaulter.bezierCurveTo(507.3, 33.2, 500.4, 33.1, 497.8, 33.4);
        vaulter.bezierCurveTo(495.2, 33.6, 487.4, 35.1, 485.8, 35.0);
        vaulter.bezierCurveTo(484.1, 35.0, 476.7, 37.5, 466.7, 35.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(460.5, 36.1);
        vaulter.bezierCurveTo(460.3, 34.9, 462.0, 33.9, 462.9, 34.1);
        vaulter.bezierCurveTo(463.9, 34.3, 465.5, 34.7, 465.5, 36.1);
        vaulter.bezierCurveTo(465.5, 37.4, 464.2, 38.1, 462.7, 38.1);
        vaulter.bezierCurveTo(461.1, 38.1, 460.5, 36.1, 460.5, 36.1);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(462.1, 37.9);
        vaulter.bezierCurveTo(462.1, 37.9, 472.8, 40.6, 475.9, 40.9);
        vaulter.bezierCurveTo(479.0, 41.1, 482.0, 42.3, 485.4, 41.4);
        vaulter.bezierCurveTo(485.4, 41.4, 498.6, 40.7, 504.2, 40.8);
        vaulter.bezierCurveTo(505.3, 44.9, 505.9, 47.5, 507.3, 50.1);
        vaulter.bezierCurveTo(507.3, 50.1, 507.8, 52.3, 508.8, 52.3);
        vaulter.bezierCurveTo(509.9, 52.3, 510.7, 47.6, 509.9, 44.2);
        vaulter.bezierCurveTo(509.0, 40.9, 509.6, 38.3, 509.7, 37.4);
        vaulter.bezierCurveTo(509.7, 36.5, 508.5, 34.3, 507.5, 34.5);
        vaulter.bezierCurveTo(506.4, 34.7, 504.7, 35.5, 504.4, 37.0);
        vaulter.bezierCurveTo(499.1, 37.4, 490.7, 33.9, 485.9, 34.2);
        vaulter.bezierCurveTo(482.8, 31.9, 479.0, 29.5, 469.0, 27.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(439.3, 55.5);
        vaulter.bezierCurveTo(439.3, 55.5, 440.3, 51.1, 446.6, 49.7);
        vaulter.bezierCurveTo(452.9, 48.4, 451.3, 56.3, 450.1, 57.9);
        vaulter.bezierCurveTo(449.0, 59.5, 447.4, 61.5, 444.7, 62.4);
        vaulter.bezierCurveTo(442.0, 63.2, 437.7, 62.0, 439.3, 55.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(449.0, 57.5);
        vaulter.bezierCurveTo(449.0, 58.9, 446.4, 65.7, 446.4, 65.7);
        vaulter.bezierCurveTo(446.4, 65.7, 446.3, 72.9, 445.7, 75.9);
        vaulter.bezierCurveTo(444.8, 80.8, 441.2, 87.3, 438.1, 92.6);
        vaulter.bezierCurveTo(437.6, 93.5, 437.6, 94.7, 436.8, 95.4);
        vaulter.bezierCurveTo(436.0, 96.0, 435.0, 96.7, 435.0, 96.7);
        vaulter.bezierCurveTo(435.0, 96.7, 433.5, 99.1, 433.2, 99.7);
        vaulter.bezierCurveTo(433.0, 100.3, 432.6, 100.9, 432.1, 100.6);
        vaulter.bezierCurveTo(431.6, 100.4, 431.0, 101.4, 430.7, 100.9);
        vaulter.bezierCurveTo(430.4, 100.4, 429.2, 101.2, 429.0, 100.6);
        vaulter.bezierCurveTo(428.8, 100.1, 429.5, 98.8, 429.5, 98.8);
        vaulter.bezierCurveTo(429.5, 98.8, 432.8, 93.9, 434.2, 93.4);
        vaulter.bezierCurveTo(435.6, 92.9, 435.7, 91.9, 435.7, 91.9);
        vaulter.bezierCurveTo(438.3, 84.4, 437.8, 79.9, 439.2, 75.2);
        vaulter.bezierCurveTo(438.9, 73.5, 439.5, 70.0, 439.7, 68.7);
        vaulter.bezierCurveTo(439.8, 67.3, 440.0, 65.4, 440.0, 65.4);
        vaulter.bezierCurveTo(440.0, 65.4, 438.8, 64.7, 438.9, 58.8);
        vaulter.bezierCurveTo(438.9, 56.9, 439.3, 55.6, 440.0, 54.6);
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
        vaulter.moveTo(414.5, 79.3);
        vaulter.bezierCurveTo(414.5, 79.3, 414.5, 78.4, 413.5, 78.4);
        vaulter.bezierCurveTo(412.5, 78.5, 412.5, 79.4, 412.5, 79.4);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(414.5, 79.3);
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
        vaulter.moveTo(437.4, 48.8);
        vaulter.lineTo(433.1, 57.0);
        vaulter.bezierCurveTo(433.1, 57.0, 429.5, 62.6, 427.7, 66.5);
        vaulter.bezierCurveTo(427.7, 66.5, 423.3, 74.3, 421.5, 80.4);
        vaulter.bezierCurveTo(421.5, 80.4, 416.2, 86.0, 417.7, 87.9);
        vaulter.bezierCurveTo(417.7, 87.9, 417.8, 89.2, 418.2, 89.0);
        vaulter.bezierCurveTo(418.6, 88.8, 419.5, 88.7, 419.5, 88.7);
        vaulter.bezierCurveTo(419.5, 88.7, 419.7, 88.8, 420.1, 89.1);
        vaulter.bezierCurveTo(420.6, 89.5, 420.7, 88.2, 420.7, 88.2);
        vaulter.bezierCurveTo(420.7, 88.2, 421.8, 84.2, 422.1, 83.8);
        vaulter.bezierCurveTo(422.3, 83.4, 422.6, 85.3, 422.5, 85.6);
        vaulter.bezierCurveTo(422.4, 85.8, 422.2, 86.7, 422.6, 86.7);
        vaulter.bezierCurveTo(423.0, 86.7, 423.5, 85.9, 423.6, 84.9);
        vaulter.bezierCurveTo(423.8, 84.0, 424.1, 83.1, 423.4, 81.7);
        vaulter.bezierCurveTo(423.4, 81.7, 429.9, 74.9, 432.1, 69.9);
        vaulter.bezierCurveTo(432.1, 69.9, 434.1, 68.4, 435.2, 65.8);
        vaulter.bezierCurveTo(436.3, 63.2, 436.8, 61.4, 436.8, 61.4);
        vaulter.bezierCurveTo(436.8, 61.4, 439.7, 60.3, 443.1, 55.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(441.0, 58.4);
        vaulter.bezierCurveTo(441.0, 58.4, 439.9, 60.6, 437.7, 63.6);
        vaulter.bezierCurveTo(435.4, 66.6, 430.5, 67.6, 427.6, 64.8);
        vaulter.bezierCurveTo(424.6, 61.8, 426.1, 57.4, 428.7, 55.3);
        vaulter.bezierCurveTo(431.3, 53.2, 437.7, 51.4, 437.7, 51.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(448.7, 54.9);
        vaulter.bezierCurveTo(448.7, 54.9, 455.8, 49.1, 459.5, 43.7);
        vaulter.bezierCurveTo(460.8, 41.8, 461.9, 39.3, 462.5, 37.9);
        vaulter.bezierCurveTo(463.3, 35.9, 462.7, 34.2, 461.8, 33.3);
        vaulter.bezierCurveTo(460.3, 32.0, 458.2, 31.0, 456.5, 30.7);
        vaulter.bezierCurveTo(455.7, 30.6, 452.1, 33.4, 449.5, 36.5);
        vaulter.bezierCurveTo(447.6, 38.6, 446.0, 40.6, 444.3, 42.2);
        vaulter.bezierCurveTo(442.9, 43.4, 440.9, 44.8, 439.2, 45.9);
        vaulter.bezierCurveTo(437.5, 47.0, 436.6, 48.9, 436.3, 49.8);
        vaulter.bezierCurveTo(435.6, 51.8, 436.5, 55.5, 440.2, 57.2);
        vaulter.bezierCurveTo(444.0, 59.0, 445.8, 58.2, 448.7, 54.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(453.4, 33.2);
        vaulter.bezierCurveTo(453.4, 33.2, 456.7, 26.5, 462.2, 26.0);
        vaulter.bezierCurveTo(467.6, 25.6, 473.3, 27.8, 473.3, 27.8);
        vaulter.lineTo(478.9, 30.5);
        vaulter.bezierCurveTo(478.9, 30.5, 482.1, 32.6, 484.7, 32.1);
        vaulter.bezierCurveTo(487.3, 31.5, 494.5, 30.5, 506.2, 36.9);
        vaulter.bezierCurveTo(506.2, 36.9, 507.5, 35.0, 508.7, 35.3);
        vaulter.bezierCurveTo(510.0, 35.6, 512.3, 37.3, 511.5, 39.8);
        vaulter.bezierCurveTo(510.6, 42.3, 509.9, 47.9, 510.1, 49.1);
        vaulter.bezierCurveTo(510.3, 50.3, 510.2, 53.2, 509.4, 53.5);
        vaulter.bezierCurveTo(508.6, 53.9, 507.3, 51.9, 507.9, 50.5);
        vaulter.bezierCurveTo(507.9, 50.5, 505.2, 44.8, 505.5, 40.8);
        vaulter.bezierCurveTo(505.5, 40.8, 498.7, 39.6, 496.1, 39.4);
        vaulter.bezierCurveTo(493.5, 39.3, 485.6, 39.5, 484.0, 39.2);
        vaulter.bezierCurveTo(482.3, 39.0, 474.6, 40.3, 465.0, 37.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(461.4, 39.1);
        vaulter.bezierCurveTo(459.0, 37.7, 456.3, 34.5, 459.3, 31.3);
        vaulter.bezierCurveTo(462.4, 28.0, 465.9, 31.3, 467.4, 32.6);
        vaulter.bezierCurveTo(468.9, 33.9, 471.3, 37.1, 469.2, 39.5);
        vaulter.bezierCurveTo(467.2, 41.9, 464.1, 40.7, 461.4, 39.1);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(461.4, 39.4);
        vaulter.bezierCurveTo(461.4, 39.4, 467.7, 44.3, 470.5, 45.6);
        vaulter.bezierCurveTo(473.3, 46.9, 475.7, 49.1, 479.2, 49.5);
        vaulter.bezierCurveTo(479.2, 49.5, 491.8, 53.5, 497.0, 55.6);
        vaulter.bezierCurveTo(496.5, 59.8, 496.3, 62.4, 496.6, 65.4);
        vaulter.bezierCurveTo(496.6, 65.4, 496.2, 67.5, 497.2, 67.9);
        vaulter.bezierCurveTo(498.2, 68.3, 500.7, 64.2, 501.1, 60.8);
        vaulter.bezierCurveTo(501.5, 57.3, 503.0, 55.1, 503.3, 54.3);
        vaulter.bezierCurveTo(503.7, 53.5, 503.3, 51.0, 502.3, 50.8);
        vaulter.bezierCurveTo(501.2, 50.6, 499.4, 50.7, 498.5, 52.1);
        vaulter.bezierCurveTo(493.5, 50.5, 486.8, 44.4, 482.2, 42.9);
        vaulter.bezierCurveTo(480.2, 39.6, 477.4, 36.0, 468.7, 30.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(438.5, 50.0);
        vaulter.bezierCurveTo(438.5, 50.0, 439.5, 45.6, 445.8, 44.2);
        vaulter.bezierCurveTo(452.0, 42.8, 450.5, 50.8, 449.3, 52.4);
        vaulter.bezierCurveTo(448.2, 54.0, 446.5, 56.0, 443.9, 56.8);
        vaulter.bezierCurveTo(441.2, 57.7, 436.9, 56.5, 438.5, 50.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(437.5, 53.7);
        vaulter.bezierCurveTo(436.3, 48.0, 440.1, 46.6, 441.6, 46.0);
        vaulter.bezierCurveTo(443.2, 45.5, 446.4, 47.3, 447.0, 50.2);
        vaulter.bezierCurveTo(447.3, 51.6, 446.3, 58.8, 446.3, 58.8);
        vaulter.bezierCurveTo(446.3, 58.8, 447.8, 65.9, 447.8, 69.0);
        vaulter.bezierCurveTo(448.0, 73.9, 445.8, 81.0, 444.0, 86.9);
        vaulter.bezierCurveTo(443.7, 87.8, 443.9, 89.1, 443.3, 89.8);
        vaulter.bezierCurveTo(442.7, 90.6, 441.8, 91.5, 441.8, 91.5);
        vaulter.bezierCurveTo(441.8, 91.5, 440.9, 94.2, 440.8, 94.8);
        vaulter.bezierCurveTo(440.7, 95.5, 440.4, 96.1, 439.9, 96.0);
        vaulter.bezierCurveTo(439.3, 95.9, 439.0, 97.0, 438.6, 96.6);
        vaulter.bezierCurveTo(438.1, 96.1, 437.2, 97.1, 436.8, 96.7);
        vaulter.bezierCurveTo(436.5, 96.2, 436.9, 94.7, 436.9, 94.7);
        vaulter.bezierCurveTo(436.9, 94.7, 439.1, 89.3, 440.4, 88.5);
        vaulter.bezierCurveTo(441.6, 87.7, 441.5, 86.7, 441.5, 86.7);
        vaulter.bezierCurveTo(442.4, 78.8, 440.9, 74.5, 441.3, 69.6);
        vaulter.bezierCurveTo(440.6, 68.0, 440.5, 64.5, 440.4, 63.2);
        vaulter.bezierCurveTo(440.2, 61.8, 439.9, 59.9, 439.9, 59.9);
        vaulter.bezierCurveTo(439.9, 59.9, 438.7, 59.4, 437.5, 53.7);
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
        vaulter.moveTo(441.5, 53.0);
        vaulter.bezierCurveTo(441.5, 53.0, 440.1, 55.4, 437.3, 58.5);
        vaulter.bezierCurveTo(434.5, 61.6, 429.0, 62.2, 426.1, 58.8);
        vaulter.bezierCurveTo(423.0, 55.2, 425.0, 50.5, 428.1, 48.4);
        vaulter.bezierCurveTo(431.3, 46.3, 438.5, 44.9, 438.5, 44.9);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(438.6, 49.2);
        vaulter.bezierCurveTo(436.8, 43.6, 440.4, 41.8, 441.9, 41.1);
        vaulter.bezierCurveTo(443.4, 40.4, 446.8, 41.9, 447.7, 44.7);
        vaulter.bezierCurveTo(448.2, 46.1, 447.9, 53.3, 447.9, 53.3);
        vaulter.bezierCurveTo(447.9, 53.3, 450.1, 60.2, 450.4, 63.3);
        vaulter.bezierCurveTo(451.1, 68.2, 449.7, 75.5, 448.5, 81.5);
        vaulter.bezierCurveTo(448.3, 82.5, 448.6, 83.7, 448.1, 84.5);
        vaulter.bezierCurveTo(447.6, 85.3, 446.8, 86.3, 446.8, 86.3);
        vaulter.bezierCurveTo(446.8, 86.3, 446.1, 89.1, 446.1, 89.7);
        vaulter.bezierCurveTo(446.0, 90.4, 445.8, 91.1, 445.3, 91.0);
        vaulter.bezierCurveTo(444.7, 90.9, 444.5, 92.1, 444.0, 91.7);
        vaulter.bezierCurveTo(443.6, 91.3, 442.7, 92.4, 442.3, 92.0);
        vaulter.bezierCurveTo(442.0, 91.5, 442.2, 90.0, 442.2, 90.0);
        vaulter.bezierCurveTo(442.2, 90.0, 443.9, 84.3, 445.0, 83.4);
        vaulter.bezierCurveTo(446.1, 82.5, 446.0, 81.6, 446.0, 81.6);
        vaulter.bezierCurveTo(446.1, 73.6, 444.1, 69.5, 444.0, 64.6);
        vaulter.bezierCurveTo(443.2, 63.1, 442.7, 59.6, 442.4, 58.3);
        vaulter.bezierCurveTo(442.1, 57.0, 441.7, 55.0, 441.7, 55.0);
        vaulter.bezierCurveTo(441.7, 55.0, 440.3, 54.7, 438.6, 49.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(449.0, 51.8);
        vaulter.bezierCurveTo(449.0, 51.8, 457.3, 47.9, 462.2, 43.6);
        vaulter.bezierCurveTo(463.9, 42.0, 465.6, 39.8, 466.5, 38.7);
        vaulter.bezierCurveTo(467.8, 36.9, 467.7, 35.2, 466.9, 34.1);
        vaulter.bezierCurveTo(465.8, 32.5, 464.1, 30.9, 462.5, 30.2);
        vaulter.bezierCurveTo(461.7, 29.9, 457.6, 31.8, 454.2, 34.1);
        vaulter.bezierCurveTo(451.9, 35.8, 449.9, 37.3, 447.8, 38.4);
        vaulter.bezierCurveTo(446.2, 39.3, 443.9, 40.1, 442.0, 40.8);
        vaulter.bezierCurveTo(440.1, 41.5, 438.7, 43.0, 438.2, 43.8);
        vaulter.bezierCurveTo(437.0, 45.6, 437.0, 49.4, 440.2, 52.0);
        vaulter.bezierCurveTo(443.4, 54.7, 445.4, 54.3, 449.0, 51.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(460.0, 32.2);
        vaulter.bezierCurveTo(460.0, 32.2, 463.9, 25.7, 469.3, 25.8);
        vaulter.bezierCurveTo(474.8, 25.8, 480.3, 28.4, 480.3, 28.4);
        vaulter.lineTo(485.6, 31.7);
        vaulter.bezierCurveTo(485.6, 31.7, 488.3, 34.1, 490.9, 33.6);
        vaulter.bezierCurveTo(493.6, 33.0, 500.7, 31.8, 512.5, 38.1);
        vaulter.bezierCurveTo(512.5, 38.1, 513.7, 36.2, 515.0, 36.5);
        vaulter.bezierCurveTo(516.2, 36.8, 518.6, 38.4, 517.8, 40.9);
        vaulter.bezierCurveTo(517.0, 43.4, 516.3, 49.0, 516.5, 50.2);
        vaulter.bezierCurveTo(516.8, 51.5, 516.7, 54.3, 515.9, 54.7);
        vaulter.bezierCurveTo(515.1, 55.0, 513.8, 53.1, 514.4, 51.7);
        vaulter.bezierCurveTo(514.4, 51.7, 511.6, 46.0, 511.8, 42.0);
        vaulter.bezierCurveTo(511.8, 42.0, 505.0, 40.9, 502.4, 40.8);
        vaulter.bezierCurveTo(499.8, 40.6, 491.9, 41.0, 490.3, 40.7);
        vaulter.bezierCurveTo(488.6, 40.5, 480.5, 41.0, 471.2, 37.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(466.5, 38.7);
        vaulter.bezierCurveTo(463.5, 36.4, 462.8, 33.3, 464.5, 31.5);
        vaulter.bezierCurveTo(466.2, 29.6, 469.6, 29.8, 472.5, 32.4);
        vaulter.bezierCurveTo(475.4, 34.9, 475.7, 37.2, 474.0, 39.3);
        vaulter.bezierCurveTo(472.3, 41.4, 470.4, 41.7, 466.5, 38.7);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(466.6, 38.9);
        vaulter.bezierCurveTo(466.6, 38.9, 471.7, 45.0, 474.1, 46.9);
        vaulter.bezierCurveTo(476.5, 48.9, 478.4, 51.5, 481.7, 52.7);
        vaulter.bezierCurveTo(481.7, 52.7, 493.1, 59.3, 497.7, 62.5);
        vaulter.bezierCurveTo(496.3, 66.5, 495.5, 69.0, 495.2, 72.0);
        vaulter.bezierCurveTo(495.2, 72.0, 494.3, 74.0, 495.2, 74.6);
        vaulter.bezierCurveTo(496.1, 75.2, 499.4, 71.8, 500.5, 68.5);
        vaulter.bezierCurveTo(501.7, 65.2, 503.6, 63.4, 504.2, 62.7);
        vaulter.bezierCurveTo(504.7, 62.0, 504.9, 59.5, 503.9, 59.1);
        vaulter.bezierCurveTo(502.9, 58.7, 501.1, 58.4, 500.0, 59.5);
        vaulter.bezierCurveTo(495.4, 56.9, 490.3, 49.3, 486.1, 46.9);
        vaulter.bezierCurveTo(484.8, 43.2, 482.9, 39.1, 475.7, 32.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(414.5, 79.3);
        vaulter.bezierCurveTo(414.5, 79.3, 414.5, 78.4, 413.5, 78.4);
        vaulter.bezierCurveTo(412.5, 78.5, 412.5, 79.4, 412.5, 79.4);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(414.5, 79.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(440.3, 41.9);
        vaulter.bezierCurveTo(440.3, 41.9, 443.2, 38.5, 449.4, 40.2);
        vaulter.bezierCurveTo(455.6, 41.8, 450.6, 48.2, 448.8, 49.1);
        vaulter.bezierCurveTo(447.1, 50.0, 444.7, 51.0, 441.9, 50.5);
        vaulter.bezierCurveTo(439.2, 50.0, 435.9, 47.0, 440.3, 41.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(439.4, 43.8);
        vaulter.lineTo(438.1, 53.1);
        vaulter.bezierCurveTo(438.1, 53.1, 436.7, 59.6, 436.4, 63.8);
        vaulter.bezierCurveTo(436.4, 63.8, 435.0, 72.7, 435.4, 79.0);
        vaulter.bezierCurveTo(435.4, 79.0, 432.4, 86.1, 434.5, 87.4);
        vaulter.bezierCurveTo(434.5, 87.4, 435.0, 88.6, 435.3, 88.2);
        vaulter.bezierCurveTo(435.6, 87.9, 436.4, 87.5, 436.4, 87.5);
        vaulter.bezierCurveTo(436.4, 87.5, 436.7, 87.5, 437.2, 87.7);
        vaulter.bezierCurveTo(437.8, 87.9, 437.4, 86.6, 437.4, 86.6);
        vaulter.bezierCurveTo(437.4, 86.6, 437.1, 82.5, 437.2, 82.0);
        vaulter.bezierCurveTo(437.3, 81.6, 438.2, 83.3, 438.2, 83.5);
        vaulter.bezierCurveTo(438.2, 83.8, 438.3, 84.7, 438.7, 84.5);
        vaulter.bezierCurveTo(439.0, 84.4, 439.2, 83.5, 439.0, 82.5);
        vaulter.bezierCurveTo(438.8, 81.6, 438.9, 80.6, 437.7, 79.6);
        vaulter.bezierCurveTo(437.7, 79.6, 441.3, 70.9, 441.8, 65.5);
        vaulter.bezierCurveTo(441.8, 65.5, 443.0, 63.4, 443.2, 60.6);
        vaulter.bezierCurveTo(443.3, 57.8, 443.2, 55.9, 443.2, 55.9);
        vaulter.bezierCurveTo(443.2, 55.9, 445.5, 53.8, 447.1, 48.4);
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
        vaulter.moveTo(442.0, 44.1);
        vaulter.lineTo(443.0, 53.4);
        vaulter.bezierCurveTo(443.0, 53.4, 443.1, 60.0, 443.9, 64.2);
        vaulter.bezierCurveTo(443.9, 64.2, 444.6, 73.1, 446.5, 79.2);
        vaulter.bezierCurveTo(446.5, 79.2, 445.2, 86.8, 447.5, 87.6);
        vaulter.bezierCurveTo(447.5, 87.6, 448.3, 88.6, 448.5, 88.2);
        vaulter.bezierCurveTo(448.8, 87.8, 449.4, 87.2, 449.4, 87.2);
        vaulter.bezierCurveTo(449.4, 87.2, 449.7, 87.1, 450.2, 87.2);
        vaulter.bezierCurveTo(450.8, 87.3, 450.2, 86.1, 450.2, 86.1);
        vaulter.bezierCurveTo(450.2, 86.1, 448.8, 82.2, 448.8, 81.7);
        vaulter.bezierCurveTo(448.9, 81.3, 450.1, 82.7, 450.2, 82.9);
        vaulter.bezierCurveTo(450.2, 83.2, 450.5, 84.0, 450.9, 83.8);
        vaulter.bezierCurveTo(451.2, 83.6, 451.2, 82.6, 450.8, 81.8);
        vaulter.bezierCurveTo(450.4, 80.9, 450.2, 79.9, 448.8, 79.2);
        vaulter.bezierCurveTo(448.8, 79.2, 450.3, 69.9, 449.4, 64.6);
        vaulter.bezierCurveTo(449.4, 64.6, 450.1, 62.2, 449.6, 59.5);
        vaulter.bezierCurveTo(449.1, 56.7, 448.5, 54.9, 448.5, 54.9);
        vaulter.bezierCurveTo(448.5, 54.9, 450.3, 52.3, 450.6, 46.6);
        vaulter.bezierCurveTo(450.7, 43.3, 447.4, 42.2, 446.2, 42.1);
        vaulter.bezierCurveTo(443.4, 41.9, 442.0, 44.1, 442.0, 44.1);
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
        vaulter.moveTo(453.5, 50.7);
        vaulter.bezierCurveTo(453.5, 50.7, 462.3, 48.1, 467.8, 44.6);
        vaulter.bezierCurveTo(469.8, 43.4, 471.8, 41.5, 472.8, 40.5);
        vaulter.bezierCurveTo(474.3, 38.9, 474.5, 37.2, 474.0, 36.0);
        vaulter.bezierCurveTo(473.1, 34.2, 471.6, 32.4, 470.2, 31.5);
        vaulter.bezierCurveTo(469.5, 31.1, 465.1, 32.3, 461.4, 34.1);
        vaulter.bezierCurveTo(458.8, 35.3, 456.6, 36.5, 454.4, 37.3);
        vaulter.bezierCurveTo(452.7, 37.9, 450.3, 38.4, 448.3, 38.8);
        vaulter.bezierCurveTo(446.3, 39.1, 444.7, 40.5, 444.1, 41.1);
        vaulter.bezierCurveTo(442.7, 42.7, 442.0, 46.5, 444.8, 49.6);
        vaulter.bezierCurveTo(447.6, 52.7, 449.6, 52.6, 453.5, 50.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(445.8, 50.6);
        vaulter.bezierCurveTo(445.8, 50.6, 444.3, 52.7, 441.5, 55.2);
        vaulter.bezierCurveTo(438.7, 57.7, 433.7, 57.7, 431.4, 54.4);
        vaulter.bezierCurveTo(429.0, 50.8, 431.3, 46.8, 434.3, 45.2);
        vaulter.bezierCurveTo(437.3, 43.7, 443.9, 43.1, 443.9, 43.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(467.4, 31.6);
        vaulter.bezierCurveTo(467.4, 31.6, 472.5, 26.0, 477.8, 27.2);
        vaulter.bezierCurveTo(483.2, 28.4, 488.0, 32.1, 488.0, 32.1);
        vaulter.lineTo(492.9, 35.5);
        vaulter.lineTo(496.0, 38.9);
        vaulter.bezierCurveTo(498.5, 38.0, 505.4, 35.8, 518.0, 40.3);
        vaulter.bezierCurveTo(518.0, 40.3, 518.9, 38.2, 520.2, 38.3);
        vaulter.bezierCurveTo(521.5, 38.5, 524.1, 39.7, 523.7, 42.3);
        vaulter.bezierCurveTo(523.2, 44.9, 523.4, 50.6, 523.8, 51.7);
        vaulter.bezierCurveTo(524.2, 52.9, 524.6, 55.7, 523.8, 56.2);
        vaulter.bezierCurveTo(523.0, 56.7, 521.5, 54.9, 521.8, 53.5);
        vaulter.bezierCurveTo(521.8, 53.5, 518.2, 48.2, 517.9, 44.2);
        vaulter.bezierCurveTo(517.9, 44.2, 511.0, 44.2, 508.4, 44.4);
        vaulter.bezierCurveTo(505.8, 44.7, 498.1, 46.2, 496.4, 46.1);
        vaulter.bezierCurveTo(494.8, 46.1, 485.7, 44.4, 477.3, 38.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(472.5, 40.7);
        vaulter.bezierCurveTo(470.9, 38.7, 470.4, 35.5, 473.0, 33.6);
        vaulter.bezierCurveTo(475.5, 31.7, 477.9, 33.5, 479.1, 35.1);
        vaulter.bezierCurveTo(480.3, 36.7, 481.0, 39.3, 478.5, 41.1);
        vaulter.bezierCurveTo(476.0, 43.0, 474.2, 42.8, 472.5, 40.7);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(472.5, 40.8);
        vaulter.bezierCurveTo(472.5, 40.8, 476.3, 48.1, 478.3, 50.4);
        vaulter.bezierCurveTo(480.2, 52.8, 481.6, 55.8, 484.6, 57.6);
        vaulter.bezierCurveTo(484.6, 57.6, 494.3, 66.5, 498.2, 70.6);
        vaulter.bezierCurveTo(496.0, 74.2, 494.7, 76.4, 493.8, 79.3);
        vaulter.bezierCurveTo(493.8, 79.3, 492.5, 81.1, 493.3, 81.9);
        vaulter.bezierCurveTo(494.0, 82.6, 497.9, 80.0, 499.7, 77.0);
        vaulter.bezierCurveTo(501.5, 74.0, 503.8, 72.6, 504.5, 72.0);
        vaulter.bezierCurveTo(505.1, 71.4, 505.9, 69.0, 505.0, 68.4);
        vaulter.bezierCurveTo(504.1, 67.8, 502.4, 67.2, 501.0, 68.1);
        vaulter.bezierCurveTo(497.1, 64.5, 493.6, 56.1, 490.1, 52.8);
        vaulter.bezierCurveTo(489.5, 49.0, 488.5, 44.6, 482.9, 36.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(412.5, 79.4);
        vaulter.bezierCurveTo(412.5, 79.4, 412.5, 78.5, 411.5, 78.5);
        vaulter.bezierCurveTo(410.5, 78.6, 410.5, 79.6, 410.5, 79.6);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(412.5, 79.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(446.1, 41.9);
        vaulter.bezierCurveTo(446.1, 41.9, 449.1, 38.5, 455.2, 40.2);
        vaulter.bezierCurveTo(461.4, 41.8, 456.4, 48.2, 454.6, 49.1);
        vaulter.bezierCurveTo(452.9, 50.0, 450.5, 51.0, 447.8, 50.5);
        vaulter.bezierCurveTo(445.0, 50.0, 441.8, 47.0, 446.1, 41.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(453.7, 43.4);
        vaulter.bezierCurveTo(454.4, 44.7, 455.5, 51.8, 455.5, 51.8);
        vaulter.bezierCurveTo(455.5, 51.8, 459.1, 58.1, 460.1, 61.1);
        vaulter.bezierCurveTo(461.6, 65.8, 461.7, 73.2, 461.7, 79.3);
        vaulter.bezierCurveTo(461.8, 80.3, 462.3, 81.4, 462.0, 82.4);
        vaulter.bezierCurveTo(461.6, 83.3, 461.0, 84.4, 461.0, 84.4);
        vaulter.bezierCurveTo(461.0, 84.4, 460.9, 87.2, 461.0, 87.9);
        vaulter.bezierCurveTo(461.1, 88.5, 461.0, 89.2, 460.5, 89.3);
        vaulter.bezierCurveTo(459.9, 89.3, 459.9, 90.5, 459.4, 90.2);
        vaulter.bezierCurveTo(458.9, 89.9, 458.3, 91.1, 457.8, 90.8);
        vaulter.bezierCurveTo(457.3, 90.5, 457.3, 88.9, 457.3, 88.9);
        vaulter.bezierCurveTo(457.3, 88.9, 457.8, 83.0, 458.7, 81.9);
        vaulter.bezierCurveTo(459.6, 80.8, 459.3, 79.9, 459.3, 79.9);
        vaulter.bezierCurveTo(457.8, 72.1, 455.1, 68.4, 454.0, 63.6);
        vaulter.bezierCurveTo(452.9, 62.3, 451.8, 59.0, 451.2, 57.8);
        vaulter.bezierCurveTo(450.7, 56.5, 449.8, 54.7, 449.8, 54.7);
        vaulter.bezierCurveTo(449.8, 54.7, 448.5, 54.7, 445.6, 49.6);
        vaulter.bezierCurveTo(443.8, 46.4, 444.4, 44.3, 445.4, 42.9);
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
        vaulter.moveTo(447.3, 41.5);
        vaulter.lineTo(447.1, 50.8);
        vaulter.bezierCurveTo(447.1, 50.8, 446.4, 57.4, 446.6, 61.7);
        vaulter.bezierCurveTo(446.6, 61.7, 446.2, 70.7, 447.3, 76.9);
        vaulter.bezierCurveTo(447.3, 76.9, 445.0, 84.3, 447.3, 85.3);
        vaulter.bezierCurveTo(447.3, 85.3, 447.9, 86.4, 448.2, 86.1);
        vaulter.bezierCurveTo(448.5, 85.7, 449.2, 85.2, 449.2, 85.2);
        vaulter.bezierCurveTo(449.2, 85.2, 449.4, 85.2, 450.0, 85.3);
        vaulter.bezierCurveTo(450.6, 85.5, 450.1, 84.3, 450.1, 84.3);
        vaulter.bezierCurveTo(450.1, 84.3, 449.3, 80.2, 449.3, 79.7);
        vaulter.bezierCurveTo(449.4, 79.3, 450.5, 80.8, 450.5, 81.1);
        vaulter.bezierCurveTo(450.5, 81.3, 450.7, 82.2, 451.1, 82.0);
        vaulter.bezierCurveTo(451.4, 81.9, 451.5, 80.9, 451.2, 80.0);
        vaulter.bezierCurveTo(450.9, 79.1, 450.9, 78.1, 449.5, 77.2);
        vaulter.bezierCurveTo(449.5, 77.2, 452.3, 68.2, 452.1, 62.8);
        vaulter.bezierCurveTo(452.1, 62.8, 453.1, 60.5, 452.9, 57.7);
        vaulter.bezierCurveTo(452.8, 54.9, 452.4, 53.1, 452.4, 53.1);
        vaulter.bezierCurveTo(452.4, 53.1, 454.5, 50.7, 455.5, 45.1);
        vaulter.bezierCurveTo(456.1, 41.9, 452.9, 40.4, 451.7, 40.1);
        vaulter.bezierCurveTo(449.0, 39.6, 447.3, 41.5, 447.3, 41.5);
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
        vaulter.moveTo(459.2, 51.6);
        vaulter.bezierCurveTo(459.2, 51.6, 467.9, 49.0, 473.8, 46.3);
        vaulter.bezierCurveTo(475.9, 45.3, 478.2, 43.6, 479.3, 42.8);
        vaulter.bezierCurveTo(481.0, 41.4, 481.4, 39.7, 481.0, 38.5);
        vaulter.bezierCurveTo(480.4, 36.6, 479.2, 34.6, 477.8, 33.5);
        vaulter.bezierCurveTo(477.2, 33.0, 472.7, 33.6, 468.8, 35.0);
        vaulter.bezierCurveTo(466.1, 35.9, 463.8, 36.8, 461.5, 37.3);
        vaulter.bezierCurveTo(459.7, 37.7, 457.1, 37.2, 455.1, 37.4);
        vaulter.bezierCurveTo(453.1, 37.5, 450.9, 38.6, 450.2, 39.2);
        vaulter.bezierCurveTo(448.6, 40.6, 448.5, 44.6, 450.4, 48.3);
        vaulter.bezierCurveTo(452.2, 52.0, 455.0, 53.0, 459.2, 51.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(451.6, 48.7);
        vaulter.bezierCurveTo(451.6, 48.7, 449.7, 50.8, 446.3, 53.1);
        vaulter.bezierCurveTo(442.8, 55.5, 437.3, 54.8, 435.3, 50.8);
        vaulter.bezierCurveTo(433.1, 46.6, 436.2, 42.5, 439.7, 41.2);
        vaulter.bezierCurveTo(443.3, 39.9, 450.6, 40.2, 450.6, 40.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(471.2, 34.9);
        vaulter.bezierCurveTo(471.2, 34.9, 477.8, 31.0, 482.9, 33.2);
        vaulter.bezierCurveTo(487.6, 35.3, 489.6, 37.8, 491.2, 40.2);
        vaulter.bezierCurveTo(492.9, 42.6, 496.5, 48.0, 496.5, 48.0);
        vaulter.bezierCurveTo(498.8, 46.6, 503.7, 45.3, 516.8, 47.4);
        vaulter.bezierCurveTo(516.8, 47.4, 517.4, 45.2, 518.7, 45.1);
        vaulter.bezierCurveTo(520.0, 45.0, 522.8, 45.7, 522.8, 48.4);
        vaulter.bezierCurveTo(522.8, 51.0, 524.0, 56.5, 524.6, 57.6);
        vaulter.bezierCurveTo(525.3, 58.7, 526.1, 61.4, 525.5, 62.0);
        vaulter.bezierCurveTo(524.8, 62.6, 523.0, 61.1, 523.1, 59.7);
        vaulter.bezierCurveTo(523.1, 59.7, 518.6, 55.2, 517.5, 51.3);
        vaulter.bezierCurveTo(517.5, 51.3, 510.7, 52.5, 508.2, 53.2);
        vaulter.bezierCurveTo(505.7, 53.9, 498.3, 56.8, 496.7, 57.1);
        vaulter.bezierCurveTo(495.1, 57.4, 485.0, 52.4, 478.7, 44.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(474.8, 45.7);
        vaulter.bezierCurveTo(473.9, 43.4, 475.8, 41.1, 477.9, 40.0);
        vaulter.bezierCurveTo(479.9, 39.0, 482.4, 40.3, 483.6, 43.3);
        vaulter.bezierCurveTo(484.7, 46.4, 483.8, 48.4, 481.2, 49.5);
        vaulter.bezierCurveTo(478.5, 50.6, 476.0, 48.9, 474.8, 45.7);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(474.8, 45.5);
        vaulter.bezierCurveTo(474.8, 45.5, 477.5, 53.0, 479.2, 55.6);
        vaulter.bezierCurveTo(480.8, 58.2, 481.8, 61.3, 484.5, 63.5);
        vaulter.bezierCurveTo(484.5, 63.5, 492.1, 76.0, 497.6, 77.1);
        vaulter.bezierCurveTo(498.0, 81.3, 498.1, 85.5, 499.0, 88.3);
        vaulter.bezierCurveTo(499.0, 88.3, 499.1, 90.6, 500.1, 90.7);
        vaulter.bezierCurveTo(501.2, 90.9, 502.8, 86.5, 502.5, 83.0);
        vaulter.bezierCurveTo(502.2, 79.5, 503.2, 77.0, 503.4, 76.2);
        vaulter.bezierCurveTo(503.6, 75.3, 502.8, 72.9, 501.7, 73.0);
        vaulter.bezierCurveTo(500.6, 73.0, 499.9, 72.4, 499.3, 73.9);
        vaulter.bezierCurveTo(494.4, 68.0, 493.7, 63.2, 490.6, 59.5);
        vaulter.bezierCurveTo(490.5, 55.7, 490.1, 51.2, 485.6, 42.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(409.9, 79.6);
        vaulter.bezierCurveTo(409.9, 79.6, 409.9, 78.6, 408.9, 78.7);
        vaulter.bezierCurveTo(407.9, 78.8, 407.9, 79.7, 407.9, 79.7);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(409.9, 79.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(453.4, 38.9);
        vaulter.bezierCurveTo(453.4, 38.9, 457.4, 36.8, 462.6, 40.6);
        vaulter.bezierCurveTo(467.7, 44.4, 460.7, 48.5, 458.8, 48.7);
        vaulter.bezierCurveTo(456.8, 48.9, 454.2, 49.0, 451.8, 47.5);
        vaulter.bezierCurveTo(449.5, 46.1, 447.5, 42.1, 453.4, 38.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(459.0, 42.3);
        vaulter.bezierCurveTo(459.6, 43.7, 459.8, 50.9, 459.8, 50.9);
        vaulter.bezierCurveTo(459.8, 50.9, 462.5, 57.6, 463.1, 60.7);
        vaulter.bezierCurveTo(464.0, 65.5, 463.2, 72.9, 462.4, 79.0);
        vaulter.bezierCurveTo(462.3, 80.0, 462.7, 81.2, 462.2, 82.0);
        vaulter.bezierCurveTo(461.8, 82.9, 461.0, 83.9, 461.0, 83.9);
        vaulter.bezierCurveTo(461.0, 83.9, 460.6, 86.7, 460.6, 87.4);
        vaulter.bezierCurveTo(460.6, 88.0, 460.4, 88.7, 459.9, 88.7);
        vaulter.bezierCurveTo(459.3, 88.6, 459.2, 89.8, 458.7, 89.5);
        vaulter.bezierCurveTo(458.2, 89.1, 457.4, 90.3, 457.0, 89.9);
        vaulter.bezierCurveTo(456.6, 89.5, 456.7, 88.0, 456.7, 88.0);
        vaulter.bezierCurveTo(456.7, 88.0, 458.0, 82.2, 459.1, 81.2);
        vaulter.bezierCurveTo(460.1, 80.2, 459.9, 79.2, 459.9, 79.2);
        vaulter.bezierCurveTo(459.4, 71.3, 457.2, 67.3, 456.8, 62.4);
        vaulter.bezierCurveTo(455.8, 61.0, 455.1, 57.6, 454.7, 56.3);
        vaulter.bezierCurveTo(454.3, 55.0, 453.7, 53.1, 453.7, 53.1);
        vaulter.bezierCurveTo(453.7, 53.1, 452.4, 52.9, 450.2, 47.4);
        vaulter.bezierCurveTo(448.9, 44.2, 449.7, 42.2, 450.8, 40.9);
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
        vaulter.moveTo(407.8, 79.7);
        vaulter.bezierCurveTo(407.8, 79.7, 407.8, 78.8, 406.8, 78.8);
        vaulter.bezierCurveTo(405.8, 78.9, 405.8, 79.9, 405.8, 79.9);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(407.8, 79.7);
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
        vaulter.moveTo(459.1, 36.6);
        vaulter.bezierCurveTo(457.8, 37.1, 451.9, 45.6, 451.9, 45.6);
        vaulter.bezierCurveTo(451.9, 45.6, 447.4, 48.9, 444.9, 52.5);
        vaulter.bezierCurveTo(444.9, 52.5, 438.3, 59.2, 434.8, 64.8);
        vaulter.bezierCurveTo(434.8, 64.8, 427.8, 69.0, 428.8, 71.4);
        vaulter.bezierCurveTo(428.8, 71.4, 428.6, 72.7, 429.0, 72.6);
        vaulter.bezierCurveTo(429.5, 72.5, 429.8, 72.8, 430.1, 72.9);
        vaulter.bezierCurveTo(430.3, 72.9, 430.5, 72.8, 430.9, 72.9);
        vaulter.bezierCurveTo(431.5, 72.9, 431.6, 72.3, 431.6, 72.3);
        vaulter.lineTo(433.2, 70.8);
        vaulter.bezierCurveTo(433.2, 70.8, 433.2, 70.9, 433.5, 71.0);
        vaulter.bezierCurveTo(433.9, 71.1, 434.8, 70.5, 435.4, 69.7);
        vaulter.bezierCurveTo(436.0, 68.9, 436.3, 67.8, 436.3, 66.7);
        vaulter.bezierCurveTo(436.3, 66.7, 444.0, 61.0, 447.7, 56.6);
        vaulter.bezierCurveTo(447.7, 56.6, 450.1, 55.6, 451.9, 53.3);
        vaulter.bezierCurveTo(453.8, 51.0, 454.8, 49.3, 454.8, 49.3);
        vaulter.bezierCurveTo(454.8, 49.3, 458.1, 48.9, 462.8, 45.3);
        vaulter.bezierCurveTo(465.5, 43.1, 464.2, 39.7, 463.4, 38.7);
        vaulter.bezierCurveTo(461.7, 36.4, 460.3, 36.1, 459.1, 36.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(462.1, 50.8);
        vaulter.bezierCurveTo(462.1, 50.8, 471.6, 51.9, 478.5, 51.5);
        vaulter.bezierCurveTo(480.9, 51.4, 483.8, 50.7, 485.2, 50.3);
        vaulter.bezierCurveTo(487.4, 49.7, 488.5, 48.2, 488.6, 46.8);
        vaulter.bezierCurveTo(488.8, 44.8, 488.3, 42.3, 487.5, 40.8);
        vaulter.bezierCurveTo(487.1, 40.0, 482.4, 38.8, 478.1, 38.5);
        vaulter.bezierCurveTo(475.1, 38.3, 472.5, 38.3, 470.1, 37.8);
        vaulter.bezierCurveTo(468.1, 37.5, 465.9, 36.0, 463.8, 35.3);
        vaulter.bezierCurveTo(461.8, 34.6, 459.2, 34.9, 458.3, 35.2);
        vaulter.bezierCurveTo(456.2, 35.9, 454.6, 39.7, 454.8, 44.0);
        vaulter.bezierCurveTo(455.1, 48.4, 457.4, 50.5, 462.1, 50.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(458.4, 45.0);
        vaulter.bezierCurveTo(458.4, 45.0, 457.0, 47.2, 454.2, 50.0);
        vaulter.bezierCurveTo(451.4, 52.9, 446.2, 53.2, 443.6, 49.9);
        vaulter.bezierCurveTo(440.8, 46.3, 442.9, 42.0, 446.0, 40.1);
        vaulter.bezierCurveTo(449.0, 38.3, 455.9, 37.2, 455.9, 37.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(480.0, 39.6);
        vaulter.bezierCurveTo(480.0, 39.6, 488.1, 38.7, 492.0, 42.9);
        vaulter.bezierCurveTo(495.8, 46.9, 496.5, 50.2, 497.2, 53.2);
        vaulter.bezierCurveTo(497.8, 56.2, 499.8, 59.3, 499.8, 59.3);
        vaulter.bezierCurveTo(501.1, 56.8, 502.7, 56.1, 513.4, 51.3);
        vaulter.bezierCurveTo(513.4, 51.3, 512.7, 49.0, 513.8, 48.2);
        vaulter.bezierCurveTo(514.9, 47.4, 517.9, 46.6, 519.3, 49.0);
        vaulter.bezierCurveTo(520.7, 51.4, 524.7, 55.7, 525.9, 56.4);
        vaulter.bezierCurveTo(527.0, 57.0, 529.2, 59.0, 529.0, 59.9);
        vaulter.bezierCurveTo(528.7, 60.8, 526.3, 60.5, 525.6, 59.1);
        vaulter.bezierCurveTo(525.6, 59.1, 519.1, 57.4, 516.0, 54.5);
        vaulter.bezierCurveTo(516.0, 54.5, 510.5, 59.2, 508.6, 61.2);
        vaulter.bezierCurveTo(506.7, 63.1, 503.6, 70.3, 500.3, 70.8);
        vaulter.bezierCurveTo(497.0, 71.4, 486.0, 62.4, 483.3, 52.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(479.9, 51.2);
        vaulter.bezierCurveTo(479.9, 51.2, 483.0, 61.2, 484.7, 64.0);
        vaulter.bezierCurveTo(486.3, 66.9, 487.1, 70.2, 489.9, 72.6);
        vaulter.bezierCurveTo(489.9, 72.6, 497.2, 86.1, 503.0, 87.5);
        vaulter.bezierCurveTo(503.2, 91.9, 503.1, 96.4, 503.9, 99.4);
        vaulter.bezierCurveTo(503.9, 99.4, 503.9, 101.7, 505.0, 102.0);
        vaulter.bezierCurveTo(506.1, 102.2, 508.0, 97.6, 507.9, 93.9);
        vaulter.bezierCurveTo(507.7, 90.3, 508.9, 87.7, 509.2, 86.8);
        vaulter.bezierCurveTo(509.4, 85.9, 508.7, 83.4, 507.5, 83.4);
        vaulter.bezierCurveTo(506.4, 83.4, 505.6, 82.6, 504.9, 84.2);
        vaulter.bezierCurveTo(500.0, 77.8, 499.5, 72.7, 496.4, 68.7);
        vaulter.bezierCurveTo(496.6, 64.6, 496.4, 59.9, 492.0, 50.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(458.5, 35.7);
        vaulter.bezierCurveTo(458.5, 35.7, 462.5, 33.6, 467.7, 37.3);
        vaulter.bezierCurveTo(472.9, 41.1, 465.9, 45.3, 463.9, 45.4);
        vaulter.bezierCurveTo(461.9, 45.6, 459.3, 45.7, 457.0, 44.3);
        vaulter.bezierCurveTo(454.6, 42.8, 453.9, 38.2, 458.5, 35.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(464.1, 43.5);
        vaulter.bezierCurveTo(463.5, 44.8, 458.0, 50.2, 458.0, 50.2);
        vaulter.bezierCurveTo(458.0, 50.2, 451.8, 56.0, 449.5, 58.3);
        vaulter.bezierCurveTo(445.9, 62.1, 443.0, 67.5, 438.8, 72.4);
        vaulter.bezierCurveTo(438.1, 73.2, 437.8, 74.5, 436.9, 75.0);
        vaulter.bezierCurveTo(436.0, 75.4, 434.7, 75.9, 434.7, 75.9);
        vaulter.bezierCurveTo(434.7, 75.9, 431.5, 76.8, 429.5, 79.4);
        vaulter.bezierCurveTo(429.1, 80.0, 427.9, 79.4, 427.8, 78.8);
        vaulter.bezierCurveTo(427.6, 78.2, 428.6, 77.0, 428.6, 77.0);
        vaulter.bezierCurveTo(428.6, 77.0, 433.1, 72.6, 434.6, 72.4);
        vaulter.bezierCurveTo(436.1, 72.1, 436.5, 71.2, 436.5, 71.2);
        vaulter.bezierCurveTo(440.7, 63.9, 441.2, 57.8, 445.2, 54.4);
        vaulter.bezierCurveTo(445.9, 52.7, 448.4, 50.1, 449.3, 49.0);
        vaulter.bezierCurveTo(450.2, 47.8, 451.4, 46.2, 451.4, 46.2);
        vaulter.bezierCurveTo(451.4, 46.2, 451.2, 46.0, 453.8, 40.4);
        vaulter.bezierCurveTo(454.7, 38.4, 455.8, 37.3, 456.9, 36.7);
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
        vaulter.moveTo(405.7, 79.9);
        vaulter.bezierCurveTo(405.7, 79.9, 405.7, 78.9, 404.7, 79.0);
        vaulter.bezierCurveTo(403.7, 79.1, 403.7, 80.0, 403.7, 80.0);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(405.7, 79.9);
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
        vaulter.moveTo(469.9, 34.4);
        vaulter.bezierCurveTo(468.2, 34.6, 464.8, 37.0, 462.1, 39.7);
        vaulter.bezierCurveTo(458.9, 40.8, 452.8, 42.4, 449.3, 45.1);
        vaulter.bezierCurveTo(449.3, 45.1, 441.1, 51.3, 435.9, 55.6);
        vaulter.bezierCurveTo(435.9, 55.6, 429.0, 60.6, 430.2, 63.0);
        vaulter.bezierCurveTo(430.2, 63.0, 430.0, 64.3, 430.5, 64.1);
        vaulter.bezierCurveTo(430.9, 64.0, 431.3, 64.3, 431.5, 64.3);
        vaulter.bezierCurveTo(431.8, 64.4, 431.9, 64.2, 432.3, 64.2);
        vaulter.bezierCurveTo(432.9, 64.2, 433.0, 63.6, 433.0, 63.6);
        vaulter.lineTo(434.5, 62.0);
        vaulter.bezierCurveTo(434.5, 62.0, 434.5, 62.1, 434.8, 62.1);
        vaulter.bezierCurveTo(435.2, 62.1, 436.0, 61.4, 436.3, 60.4);
        vaulter.bezierCurveTo(436.6, 59.4, 436.5, 58.9, 436.8, 57.8);
        vaulter.bezierCurveTo(436.8, 57.8, 446.8, 52.2, 451.6, 49.2);
        vaulter.bezierCurveTo(451.6, 49.2, 455.4, 48.0, 458.1, 46.8);
        vaulter.bezierCurveTo(460.7, 45.6, 463.2, 44.6, 463.2, 44.6);
        vaulter.bezierCurveTo(463.2, 44.6, 466.4, 45.3, 472.0, 43.3);
        vaulter.bezierCurveTo(475.3, 42.1, 475.0, 38.5, 474.6, 37.2);
        vaulter.bezierCurveTo(473.7, 34.5, 471.7, 34.1, 469.9, 34.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(471.1, 50.6);
        vaulter.bezierCurveTo(471.1, 50.6, 479.8, 54.6, 486.4, 56.5);
        vaulter.bezierCurveTo(488.7, 57.2, 491.6, 57.5, 493.1, 57.6);
        vaulter.bezierCurveTo(495.4, 57.7, 496.9, 56.6, 497.5, 55.3);
        vaulter.bezierCurveTo(498.3, 53.5, 498.7, 51.0, 498.4, 49.2);
        vaulter.bezierCurveTo(498.2, 48.4, 494.2, 45.7, 490.2, 44.1);
        vaulter.bezierCurveTo(487.4, 42.9, 485.0, 42.0, 482.8, 40.9);
        vaulter.bezierCurveTo(481.1, 39.9, 479.4, 37.8, 477.7, 36.5);
        vaulter.bezierCurveTo(476.0, 35.2, 473.5, 34.6, 472.6, 34.6);
        vaulter.bezierCurveTo(470.3, 34.5, 467.5, 37.6, 466.4, 41.8);
        vaulter.bezierCurveTo(465.3, 46.0, 466.8, 48.8, 471.1, 50.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(491.4, 44.6);
        vaulter.bezierCurveTo(491.4, 44.6, 492.6, 46.1, 493.8, 46.3);
        vaulter.bezierCurveTo(496.4, 46.9, 500.4, 47.8, 502.5, 50.7);
        vaulter.bezierCurveTo(505.8, 55.1, 506.2, 58.5, 506.4, 61.6);
        vaulter.bezierCurveTo(506.7, 64.6, 508.3, 67.9, 508.3, 67.9);
        vaulter.bezierCurveTo(509.9, 65.6, 511.6, 65.0, 522.8, 61.5);
        vaulter.bezierCurveTo(522.8, 61.5, 522.4, 59.2, 523.6, 58.5);
        vaulter.bezierCurveTo(524.8, 57.9, 527.8, 57.4, 528.9, 60.0);
        vaulter.bezierCurveTo(530.1, 62.5, 533.5, 67.3, 534.6, 68.1);
        vaulter.bezierCurveTo(535.6, 68.9, 537.6, 71.1, 537.2, 72.0);
        vaulter.bezierCurveTo(536.9, 72.8, 534.5, 72.2, 533.9, 70.8);
        vaulter.bezierCurveTo(533.9, 70.8, 527.7, 68.3, 525.0, 65.1);
        vaulter.bezierCurveTo(525.0, 65.1, 519.0, 69.1, 516.9, 70.8);
        vaulter.bezierCurveTo(514.8, 72.6, 510.8, 79.3, 507.5, 79.4);
        vaulter.bezierCurveTo(504.1, 79.6, 494.3, 69.3, 492.8, 58.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(470.3, 44.7);
        vaulter.bezierCurveTo(470.3, 44.7, 468.1, 46.6, 464.2, 48.7);
        vaulter.bezierCurveTo(460.3, 50.7, 454.6, 49.3, 453.0, 45.0);
        vaulter.bezierCurveTo(451.2, 40.3, 454.9, 36.4, 458.8, 35.4);
        vaulter.bezierCurveTo(462.6, 34.4, 470.3, 35.7, 470.3, 35.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(488.5, 57.0);
        vaulter.bezierCurveTo(488.6, 53.9, 491.5, 52.9, 493.7, 53.2);
        vaulter.bezierCurveTo(495.9, 53.5, 498.4, 55.4, 498.5, 58.9);
        vaulter.bezierCurveTo(498.5, 62.4, 495.8, 62.5, 493.5, 62.3);
        vaulter.bezierCurveTo(491.2, 62.2, 488.4, 61.1, 488.5, 57.0);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(488.2, 57.0);
        vaulter.bezierCurveTo(488.2, 57.0, 488.2, 67.2, 488.9, 70.4);
        vaulter.bezierCurveTo(489.6, 73.6, 489.4, 77.0, 491.3, 80.1);
        vaulter.bezierCurveTo(491.3, 80.1, 494.3, 95.2, 499.4, 98.2);
        vaulter.bezierCurveTo(498.2, 102.5, 496.8, 106.8, 496.7, 109.9);
        vaulter.bezierCurveTo(496.7, 109.9, 496.0, 112.1, 496.9, 112.7);
        vaulter.bezierCurveTo(497.9, 113.2, 501.1, 109.4, 502.1, 105.9);
        vaulter.bezierCurveTo(503.0, 102.3, 504.9, 100.3, 505.4, 99.5);
        vaulter.bezierCurveTo(505.9, 98.7, 506.0, 96.0, 504.9, 95.7);
        vaulter.bezierCurveTo(503.8, 95.3, 503.3, 94.4, 502.2, 95.7);
        vaulter.bezierCurveTo(499.4, 88.1, 500.5, 83.1, 498.7, 78.4);
        vaulter.bezierCurveTo(500.1, 74.5, 501.3, 69.9, 500.1, 59.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(473.5, 35.9);
        vaulter.bezierCurveTo(473.5, 35.9, 478.0, 35.8, 481.0, 41.5);
        vaulter.bezierCurveTo(483.9, 47.2, 475.8, 47.8, 474.0, 47.0);
        vaulter.bezierCurveTo(472.2, 46.3, 469.8, 45.3, 468.3, 42.9);
        vaulter.bezierCurveTo(466.8, 40.6, 466.8, 36.1, 473.5, 35.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(472.1, 36.3);
        vaulter.bezierCurveTo(470.8, 36.3, 469.2, 36.6, 467.0, 37.6);
        vaulter.bezierCurveTo(465.6, 38.2, 461.1, 39.9, 461.1, 39.9);
        vaulter.bezierCurveTo(461.1, 39.9, 459.2, 40.8, 457.9, 41.4);
        vaulter.bezierCurveTo(456.6, 42.0, 453.1, 43.2, 451.7, 44.4);
        vaulter.bezierCurveTo(446.7, 45.5, 444.3, 49.7, 437.6, 57.1);
        vaulter.bezierCurveTo(437.6, 57.1, 436.8, 58.2, 436.5, 60.7);
        vaulter.bezierCurveTo(436.3, 62.2, 436.2, 68.2, 436.2, 68.2);
        vaulter.bezierCurveTo(436.2, 68.2, 436.5, 69.8, 437.0, 70.1);
        vaulter.bezierCurveTo(437.6, 70.4, 439.4, 68.4, 439.3, 67.8);
        vaulter.bezierCurveTo(438.7, 65.0, 438.9, 63.8, 439.2, 63.1);
        vaulter.bezierCurveTo(439.4, 63.7, 439.7, 64.3, 439.6, 64.7);
        vaulter.bezierCurveTo(439.5, 65.3, 440.3, 66.3, 440.7, 66.0);
        vaulter.bezierCurveTo(441.1, 65.8, 441.1, 64.9, 440.9, 64.6);
        vaulter.bezierCurveTo(440.8, 64.3, 441.0, 63.1, 440.9, 62.2);
        vaulter.bezierCurveTo(440.9, 61.5, 440.1, 60.2, 439.8, 59.8);
        vaulter.bezierCurveTo(439.6, 59.4, 439.1, 59.2, 439.1, 59.2);
        vaulter.bezierCurveTo(445.5, 54.4, 448.9, 51.5, 453.8, 49.8);
        vaulter.bezierCurveTo(456.9, 48.7, 465.1, 46.5, 465.1, 46.5);
        vaulter.bezierCurveTo(465.1, 46.5, 473.6, 45.9, 474.8, 45.0);
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
        vaulter.moveTo(476.9, 40.6);
        vaulter.bezierCurveTo(475.2, 40.1, 471.1, 41.0, 467.6, 42.4);
        vaulter.bezierCurveTo(464.3, 42.1, 458.0, 41.2, 453.7, 42.3);
        vaulter.bezierCurveTo(453.7, 42.3, 443.7, 44.8, 437.3, 46.7);
        vaulter.bezierCurveTo(437.3, 46.7, 428.9, 48.6, 429.1, 51.2);
        vaulter.bezierCurveTo(429.1, 51.2, 428.4, 52.3, 428.9, 52.4);
        vaulter.bezierCurveTo(429.4, 52.4, 429.6, 52.8, 429.8, 53.0);
        vaulter.bezierCurveTo(430.0, 53.1, 430.2, 53.0, 430.6, 53.2);
        vaulter.bezierCurveTo(431.1, 53.5, 431.5, 52.9, 431.5, 52.9);
        vaulter.lineTo(433.4, 52.0);
        vaulter.bezierCurveTo(433.4, 52.0, 433.4, 52.1, 433.7, 52.2);
        vaulter.bezierCurveTo(434.0, 52.4, 435.1, 52.0, 435.7, 51.3);
        vaulter.bezierCurveTo(436.4, 50.5, 436.5, 49.9, 437.2, 49.1);
        vaulter.bezierCurveTo(437.2, 49.1, 448.6, 47.8, 454.2, 47.0);
        vaulter.bezierCurveTo(454.2, 47.0, 458.2, 47.4, 461.2, 47.3);
        vaulter.bezierCurveTo(464.0, 47.3, 466.6, 47.3, 466.6, 47.3);
        vaulter.bezierCurveTo(466.6, 47.3, 469.3, 49.2, 475.3, 49.6);
        vaulter.bezierCurveTo(478.7, 49.8, 480.0, 46.4, 480.1, 45.1);
        vaulter.bezierCurveTo(480.3, 42.2, 478.6, 41.1, 476.9, 40.6);
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
        vaulter.moveTo(473.0, 56.0);
        vaulter.bezierCurveTo(473.0, 56.0, 478.9, 63.6, 483.9, 68.3);
        vaulter.bezierCurveTo(485.7, 70.0, 488.2, 71.6, 489.5, 72.4);
        vaulter.bezierCurveTo(491.4, 73.5, 493.3, 73.2, 494.3, 72.4);
        vaulter.bezierCurveTo(495.9, 71.1, 497.4, 69.0, 497.9, 67.3);
        vaulter.bezierCurveTo(498.2, 66.5, 495.8, 62.3, 493.0, 59.1);
        vaulter.bezierCurveTo(491.1, 56.7, 489.3, 54.8, 487.9, 52.8);
        vaulter.bezierCurveTo(486.8, 51.1, 486.3, 48.5, 485.4, 46.6);
        vaulter.bezierCurveTo(484.5, 44.6, 482.5, 42.9, 481.7, 42.5);
        vaulter.bezierCurveTo(479.7, 41.4, 475.8, 42.9, 472.9, 46.1);
        vaulter.bezierCurveTo(470.0, 49.3, 470.0, 52.5, 473.0, 56.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(497.1, 65.0);
        vaulter.bezierCurveTo(497.1, 65.0, 499.6, 65.8, 500.6, 71.5);
        vaulter.bezierCurveTo(501.4, 76.4, 501.4, 78.1, 500.6, 81.1);
        vaulter.bezierCurveTo(499.9, 84.1, 502.0, 88.5, 502.0, 88.5);
        vaulter.bezierCurveTo(504.4, 87.0, 505.5, 86.1, 517.1, 87.3);
        vaulter.bezierCurveTo(517.1, 87.3, 517.7, 85.0, 519.1, 84.8);
        vaulter.bezierCurveTo(520.5, 84.7, 523.4, 85.5, 523.4, 88.3);
        vaulter.bezierCurveTo(523.5, 91.0, 524.8, 96.8, 525.4, 98.0);
        vaulter.bezierCurveTo(526.1, 99.1, 527.0, 101.9, 526.3, 102.6);
        vaulter.bezierCurveTo(525.7, 103.2, 523.7, 101.7, 523.8, 100.2);
        vaulter.bezierCurveTo(523.8, 100.2, 519.0, 95.4, 517.8, 91.4);
        vaulter.bezierCurveTo(517.8, 91.4, 510.7, 92.7, 508.1, 93.5);
        vaulter.bezierCurveTo(505.5, 94.2, 500.6, 97.4, 497.5, 96.2);
        vaulter.bezierCurveTo(494.3, 95.0, 487.4, 82.0, 490.1, 71.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(473.3, 50.2);
        vaulter.bezierCurveTo(473.3, 50.2, 470.5, 51.1, 466.1, 51.4);
        vaulter.bezierCurveTo(461.7, 51.8, 457.0, 48.3, 457.2, 43.6);
        vaulter.bezierCurveTo(457.5, 38.6, 462.4, 36.5, 466.3, 37.1);
        vaulter.bezierCurveTo(470.3, 37.7, 476.8, 41.9, 476.8, 41.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(488.2, 71.6);
        vaulter.bezierCurveTo(488.2, 71.6, 491.1, 82.3, 492.7, 85.1);
        vaulter.bezierCurveTo(494.1, 87.9, 495.3, 91.2, 498.1, 93.5);
        vaulter.bezierCurveTo(498.1, 93.5, 504.2, 102.1, 511.7, 108.0);
        vaulter.bezierCurveTo(512.0, 112.4, 512.0, 116.9, 513.0, 119.9);
        vaulter.bezierCurveTo(513.0, 119.9, 513.0, 122.2, 514.1, 122.4);
        vaulter.bezierCurveTo(515.2, 122.6, 517.0, 118.0, 516.7, 114.3);
        vaulter.bezierCurveTo(516.5, 110.7, 517.6, 108.1, 517.8, 107.2);
        vaulter.bezierCurveTo(518.0, 106.3, 517.2, 103.8, 516.1, 103.8);
        vaulter.bezierCurveTo(515.0, 103.8, 514.1, 103.1, 513.5, 104.7);
        vaulter.bezierCurveTo(508.4, 98.4, 507.6, 94.9, 503.0, 90.2);
        vaulter.bezierCurveTo(503.1, 86.2, 502.5, 77.0, 497.9, 67.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(400.9, 80.3);
        vaulter.bezierCurveTo(400.9, 80.3, 400.9, 79.3, 399.9, 79.4);
        vaulter.bezierCurveTo(398.9, 79.5, 398.9, 80.5, 398.9, 80.5);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.2, 345.1);
        vaulter.lineTo(400.9, 80.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(480.3, 44.8);
        vaulter.bezierCurveTo(480.3, 44.8, 484.6, 46.3, 485.4, 52.6);
        vaulter.bezierCurveTo(486.2, 59.0, 478.4, 56.7, 476.9, 55.4);
        vaulter.bezierCurveTo(475.5, 54.1, 473.6, 52.3, 473.0, 49.6);
        vaulter.bezierCurveTo(472.4, 46.8, 474.0, 42.7, 480.3, 44.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(480.4, 44.9);
        vaulter.bezierCurveTo(479.4, 43.6, 477.4, 42.4, 473.0, 42.4);
        vaulter.bezierCurveTo(471.4, 42.4, 466.6, 42.1, 466.6, 42.1);
        vaulter.bezierCurveTo(466.6, 42.1, 464.5, 42.2, 463.0, 42.3);
        vaulter.bezierCurveTo(461.6, 42.3, 458.0, 42.1, 456.2, 42.6);
        vaulter.bezierCurveTo(451.1, 41.7, 447.3, 44.6, 438.2, 48.7);
        vaulter.bezierCurveTo(438.2, 48.7, 437.0, 49.4, 435.8, 51.6);
        vaulter.bezierCurveTo(435.0, 52.9, 432.5, 58.4, 432.5, 58.4);
        vaulter.bezierCurveTo(432.5, 58.4, 432.2, 60.0, 432.6, 60.4);
        vaulter.bezierCurveTo(433.0, 60.9, 435.4, 59.9, 435.5, 59.2);
        vaulter.bezierCurveTo(436.1, 56.4, 436.8, 55.4, 437.3, 54.9);
        vaulter.bezierCurveTo(437.3, 55.5, 437.3, 56.1, 437.1, 56.5);
        vaulter.bezierCurveTo(436.7, 57.0, 437.1, 58.2, 437.5, 58.1);
        vaulter.bezierCurveTo(438.0, 58.1, 438.3, 57.2, 438.3, 56.9);
        vaulter.bezierCurveTo(438.3, 56.6, 438.9, 55.6, 439.2, 54.7);
        vaulter.bezierCurveTo(439.5, 54.0, 439.3, 52.6, 439.2, 52.1);
        vaulter.bezierCurveTo(439.1, 51.7, 438.8, 51.3, 438.8, 51.3);
        vaulter.bezierCurveTo(446.6, 49.4, 450.8, 48.0, 456.0, 48.4);
        vaulter.bezierCurveTo(459.2, 48.6, 467.7, 49.8, 467.7, 49.8);
        vaulter.bezierCurveTo(467.7, 49.8, 475.7, 52.7, 477.2, 52.3);
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
        vaulter.moveTo(482.5, 70.5);
        vaulter.bezierCurveTo(482.0, 68.8, 478.9, 65.9, 475.9, 63.8);
        vaulter.bezierCurveTo(474.2, 60.8, 471.5, 55.0, 468.2, 52.0);
        vaulter.bezierCurveTo(468.2, 52.0, 462.2, 44.2, 457.9, 39.1);
        vaulter.bezierCurveTo(457.9, 39.1, 452.9, 32.1, 450.5, 33.3);
        vaulter.bezierCurveTo(450.5, 33.3, 449.2, 33.2, 449.4, 33.6);
        vaulter.bezierCurveTo(449.5, 34.1, 449.2, 34.5, 449.2, 34.7);
        vaulter.bezierCurveTo(449.2, 34.9, 449.3, 35.1, 449.3, 35.5);
        vaulter.bezierCurveTo(449.3, 36.1, 450.0, 36.2, 450.0, 36.2);
        vaulter.lineTo(451.5, 37.7);
        vaulter.bezierCurveTo(451.5, 37.7, 451.5, 37.7, 451.4, 37.9);
        vaulter.bezierCurveTo(451.4, 38.4, 452.1, 39.2, 453.1, 39.5);
        vaulter.bezierCurveTo(454.1, 39.8, 454.6, 39.6, 455.7, 40.0);
        vaulter.bezierCurveTo(455.7, 40.0, 460.8, 50.8, 464.6, 55.1);
        vaulter.bezierCurveTo(464.6, 55.1, 466.4, 58.6, 468.1, 61.1);
        vaulter.bezierCurveTo(469.8, 63.4, 471.2, 65.6, 471.2, 65.6);
        vaulter.bezierCurveTo(471.2, 65.6, 471.1, 68.9, 474.0, 74.1);
        vaulter.bezierCurveTo(475.8, 77.1, 479.3, 76.2, 480.5, 75.6);
        vaulter.bezierCurveTo(483.0, 74.2, 483.0, 72.1, 482.5, 70.5);
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
        vaulter.moveTo(469.1, 75.8);
        vaulter.bezierCurveTo(469.1, 75.8, 469.3, 85.4, 470.5, 92.1);
        vaulter.bezierCurveTo(470.9, 94.5, 472.0, 97.3, 472.5, 98.7);
        vaulter.bezierCurveTo(473.4, 100.8, 475.1, 101.6, 476.4, 101.6);
        vaulter.bezierCurveTo(478.5, 101.5, 480.9, 100.7, 482.3, 99.7);
        vaulter.bezierCurveTo(483.0, 99.2, 483.6, 94.4, 483.4, 90.1);
        vaulter.bezierCurveTo(483.2, 87.1, 482.9, 84.5, 483.0, 82.1);
        vaulter.bezierCurveTo(483.1, 80.1, 484.2, 77.6, 484.7, 75.5);
        vaulter.bezierCurveTo(485.1, 73.4, 484.6, 70.9, 484.2, 70.1);
        vaulter.bezierCurveTo(483.2, 68.0, 479.2, 66.9, 474.9, 67.7);
        vaulter.bezierCurveTo(470.6, 68.6, 468.8, 71.1, 469.1, 75.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(483.2, 93.0);
        vaulter.bezierCurveTo(483.2, 93.0, 485.9, 94.2, 486.3, 99.1);
        vaulter.bezierCurveTo(486.3, 99.1, 487.7, 101.1, 488.6, 104.1);
        vaulter.bezierCurveTo(489.6, 107.0, 491.7, 110.5, 491.7, 110.5);
        vaulter.bezierCurveTo(493.7, 108.5, 500.0, 106.6, 505.4, 103.6);
        vaulter.bezierCurveTo(505.4, 103.6, 505.8, 101.6, 506.9, 100.9);
        vaulter.bezierCurveTo(508.1, 100.1, 510.1, 99.1, 511.4, 101.6);
        vaulter.bezierCurveTo(512.7, 104.0, 516.5, 108.6, 517.6, 109.3);
        vaulter.bezierCurveTo(518.7, 110.0, 520.9, 112.1, 520.6, 112.9);
        vaulter.bezierCurveTo(520.2, 113.8, 517.8, 113.4, 517.2, 112.0);
        vaulter.bezierCurveTo(517.2, 112.0, 510.8, 110.0, 507.9, 106.9);
        vaulter.bezierCurveTo(507.9, 106.9, 502.1, 111.4, 500.1, 113.2);
        vaulter.bezierCurveTo(498.2, 115.1, 493.5, 117.3, 490.1, 117.7);
        vaulter.bezierCurveTo(486.8, 118.1, 476.5, 111.3, 474.2, 100.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(472.2, 70.1);
        vaulter.bezierCurveTo(472.2, 70.1, 470.9, 69.0, 469.0, 67.1);
        vaulter.bezierCurveTo(468.4, 66.4, 467.7, 65.7, 467.0, 64.9);
        vaulter.bezierCurveTo(464.2, 61.5, 464.4, 55.6, 468.4, 53.1);
        vaulter.bezierCurveTo(472.6, 50.5, 477.2, 53.3, 478.9, 56.9);
        vaulter.bezierCurveTo(479.8, 58.6, 478.6, 61.8, 478.9, 64.2);
        vaulter.bezierCurveTo(479.2, 66.7, 481.0, 68.2, 481.0, 68.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(474.2, 100.9);
        vaulter.bezierCurveTo(474.2, 100.9, 476.8, 108.6, 478.6, 111.3);
        vaulter.bezierCurveTo(480.4, 113.9, 481.5, 116.6, 483.4, 117.6);
        vaulter.bezierCurveTo(484.0, 117.9, 485.2, 118.9, 487.3, 119.1);
        vaulter.bezierCurveTo(492.2, 119.6, 501.9, 119.3, 507.2, 117.0);
        vaulter.bezierCurveTo(511.1, 119.0, 515.0, 121.2, 518.1, 122.0);
        vaulter.bezierCurveTo(518.1, 122.0, 520.1, 123.1, 520.8, 122.3);
        vaulter.bezierCurveTo(521.5, 121.5, 518.5, 117.6, 515.2, 115.9);
        vaulter.bezierCurveTo(511.9, 114.2, 510.3, 111.9, 509.6, 111.3);
        vaulter.bezierCurveTo(508.9, 110.6, 506.4, 110.1, 505.8, 111.0);
        vaulter.bezierCurveTo(505.2, 112.0, 504.2, 112.4, 505.3, 113.7);
        vaulter.bezierCurveTo(497.3, 114.9, 495.0, 112.2, 490.0, 112.9);
        vaulter.bezierCurveTo(489.7, 108.8, 487.6, 104.7, 483.3, 95.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(396.0, 80.8);
        vaulter.bezierCurveTo(396.0, 80.8, 396.0, 79.8, 394.9, 80.0);
        vaulter.bezierCurveTo(393.9, 80.1, 394.0, 81.0, 394.0, 81.0);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.2, 345.1);
        vaulter.lineTo(396.0, 80.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(482.2, 71.2);
        vaulter.bezierCurveTo(482.2, 71.2, 484.4, 75.2, 480.8, 80.4);
        vaulter.bezierCurveTo(477.1, 85.7, 472.8, 78.8, 472.6, 76.8);
        vaulter.bezierCurveTo(472.4, 74.9, 472.2, 72.3, 473.6, 69.9);
        vaulter.bezierCurveTo(475.0, 67.4, 479.0, 65.4, 482.2, 71.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(481.9, 74.8);
        vaulter.bezierCurveTo(482.8, 73.4, 484.0, 70.8, 480.5, 65.7);
        vaulter.bezierCurveTo(479.6, 64.5, 477.1, 60.3, 477.1, 60.3);
        vaulter.bezierCurveTo(477.1, 60.3, 475.9, 58.7, 475.0, 57.5);
        vaulter.bezierCurveTo(474.2, 56.3, 472.3, 53.2, 470.9, 52.0);
        vaulter.bezierCurveTo(468.8, 47.3, 466.7, 44.9, 460.3, 37.3);
        vaulter.bezierCurveTo(460.3, 37.3, 459.5, 37.0, 457.9, 35.1);
        vaulter.bezierCurveTo(456.9, 34.0, 452.5, 29.8, 452.5, 29.8);
        vaulter.bezierCurveTo(452.5, 29.8, 451.1, 29.0, 450.5, 29.2);
        vaulter.bezierCurveTo(450.0, 29.5, 450.2, 32.1, 450.7, 32.4);
        vaulter.bezierCurveTo(453.2, 33.8, 453.7, 34.2, 454.0, 34.9);
        vaulter.bezierCurveTo(453.4, 34.6, 453.5, 34.7, 453.3, 34.4);
        vaulter.bezierCurveTo(452.9, 33.9, 451.8, 33.5, 451.7, 34.0);
        vaulter.bezierCurveTo(451.6, 34.4, 452.3, 35.0, 452.6, 35.1);
        vaulter.bezierCurveTo(452.9, 35.2, 453.7, 36.1, 454.4, 36.7);
        vaulter.bezierCurveTo(455.0, 37.1, 455.8, 38.1, 456.4, 38.2);
        vaulter.bezierCurveTo(456.8, 38.2, 458.0, 38.5, 458.0, 38.5);
        vaulter.bezierCurveTo(462.0, 45.5, 463.4, 50.6, 466.0, 55.1);
        vaulter.bezierCurveTo(467.6, 57.9, 471.4, 65.5, 471.4, 65.5);
        vaulter.bezierCurveTo(471.4, 65.5, 473.6, 73.8, 474.7, 74.8);
        vaulter.bezierCurveTo(477.1, 76.8, 481.0, 76.3, 481.9, 74.8);
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
        vaulter.moveTo(489.0, 90.4);
        vaulter.bezierCurveTo(488.8, 88.7, 486.4, 85.2, 483.9, 82.5);
        vaulter.bezierCurveTo(482.8, 79.3, 481.3, 73.1, 478.7, 69.5);
        vaulter.bezierCurveTo(478.7, 69.5, 474.4, 60.7, 471.2, 54.8);
        vaulter.bezierCurveTo(471.2, 54.8, 467.6, 47.0, 465.1, 47.7);
        vaulter.bezierCurveTo(465.1, 47.7, 463.8, 47.3, 463.9, 47.8);
        vaulter.bezierCurveTo(463.9, 48.2, 463.6, 48.5, 463.5, 48.8);
        vaulter.bezierCurveTo(463.4, 49.0, 463.5, 49.2, 463.4, 49.6);
        vaulter.bezierCurveTo(463.3, 50.2, 463.9, 50.4, 463.9, 50.4);
        vaulter.lineTo(465.2, 52.1);
        vaulter.bezierCurveTo(465.2, 52.1, 465.1, 52.1, 465.0, 52.4);
        vaulter.bezierCurveTo(464.9, 52.8, 465.5, 53.8, 466.3, 54.2);
        vaulter.bezierCurveTo(467.3, 54.7, 467.8, 54.7, 468.8, 55.2);
        vaulter.bezierCurveTo(468.8, 55.2, 471.6, 66.9, 474.5, 71.8);
        vaulter.bezierCurveTo(474.5, 71.8, 475.6, 75.7, 476.8, 78.4);
        vaulter.bezierCurveTo(478.0, 81.0, 478.9, 83.5, 478.9, 83.5);
        vaulter.bezierCurveTo(478.9, 83.5, 478.1, 86.6, 480.0, 92.3);
        vaulter.bezierCurveTo(481.1, 95.6, 484.8, 95.4, 486.0, 95.1);
        vaulter.bezierCurveTo(488.8, 94.2, 489.2, 92.2, 489.0, 90.4);
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
        vaulter.moveTo(487.7, 113.2);
        vaulter.bezierCurveTo(488.3, 113.9, 489.6, 114.4, 491.1, 116.2);
        vaulter.bezierCurveTo(494.2, 120.0, 492.9, 121.2, 494.7, 123.2);
        vaulter.bezierCurveTo(496.9, 125.4, 498.9, 129.5, 498.9, 129.5);
        vaulter.bezierCurveTo(501.0, 127.4, 507.2, 124.8, 512.4, 120.4);
        vaulter.bezierCurveTo(512.4, 120.4, 512.5, 118.4, 513.5, 117.5);
        vaulter.bezierCurveTo(514.5, 116.6, 516.3, 115.3, 518.0, 117.5);
        vaulter.bezierCurveTo(519.7, 119.7, 524.2, 123.6, 525.4, 124.1);
        vaulter.bezierCurveTo(526.6, 124.6, 529.0, 126.3, 528.9, 127.2);
        vaulter.bezierCurveTo(528.7, 128.2, 526.2, 128.1, 525.4, 126.8);
        vaulter.bezierCurveTo(525.4, 126.8, 518.7, 125.9, 515.4, 123.3);
        vaulter.bezierCurveTo(515.4, 123.3, 510.4, 128.6, 508.8, 130.8);
        vaulter.bezierCurveTo(507.1, 133.0, 502.5, 136.6, 499.2, 137.5);
        vaulter.bezierCurveTo(496.0, 138.5, 482.3, 130.7, 478.4, 120.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(479.4, 87.8);
        vaulter.bezierCurveTo(479.4, 87.8, 478.5, 86.4, 477.3, 84.0);
        vaulter.bezierCurveTo(477.0, 83.2, 476.6, 82.3, 476.2, 81.3);
        vaulter.bezierCurveTo(474.6, 77.2, 476.6, 71.7, 481.2, 70.6);
        vaulter.bezierCurveTo(486.0, 69.4, 489.5, 73.5, 490.0, 77.4);
        vaulter.bezierCurveTo(490.2, 79.4, 488.1, 82.0, 487.6, 84.4);
        vaulter.bezierCurveTo(487.1, 86.8, 488.4, 88.9, 488.4, 88.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(474.2, 96.2);
        vaulter.bezierCurveTo(474.4, 99.5, 476.3, 103.7, 476.2, 110.6);
        vaulter.bezierCurveTo(476.1, 115.7, 476.8, 116.8, 477.1, 118.4);
        vaulter.bezierCurveTo(477.7, 121.7, 478.4, 122.1, 482.6, 122.2);
        vaulter.bezierCurveTo(486.9, 122.3, 487.7, 120.8, 488.8, 118.6);
        vaulter.bezierCurveTo(489.4, 117.4, 488.2, 111.5, 489.4, 107.4);
        vaulter.bezierCurveTo(490.2, 104.5, 491.2, 96.6, 491.2, 94.2);
        vaulter.bezierCurveTo(491.3, 92.2, 489.5, 89.8, 489.0, 88.7);
        vaulter.bezierCurveTo(488.0, 86.7, 484.8, 86.5, 480.5, 87.3);
        vaulter.bezierCurveTo(476.9, 88.0, 474.0, 93.0, 474.2, 96.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(477.6, 119.7);
        vaulter.bezierCurveTo(477.6, 119.7, 482.0, 127.9, 484.2, 130.2);
        vaulter.bezierCurveTo(486.4, 132.5, 487.9, 135.0, 490.0, 135.7);
        vaulter.bezierCurveTo(490.6, 135.9, 491.9, 136.7, 494.1, 136.6);
        vaulter.bezierCurveTo(499.0, 136.3, 508.6, 131.5, 512.6, 127.4);
        vaulter.bezierCurveTo(517.1, 127.9, 521.5, 128.6, 524.6, 128.2);
        vaulter.bezierCurveTo(524.6, 128.2, 526.9, 128.5, 527.3, 127.5);
        vaulter.bezierCurveTo(527.7, 126.4, 523.4, 123.9, 519.7, 123.5);
        vaulter.bezierCurveTo(516.1, 123.1, 513.7, 121.6, 512.9, 121.3);
        vaulter.bezierCurveTo(512.0, 120.9, 509.5, 121.3, 509.2, 122.4);
        vaulter.bezierCurveTo(509.0, 123.2, 508.9, 123.7, 508.2, 124.2);
        vaulter.bezierCurveTo(501.2, 128.2, 500.5, 127.4, 495.8, 128.9);
        vaulter.bezierCurveTo(494.8, 125.0, 494.1, 122.8, 488.3, 114.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(489.9, 93.1);
        vaulter.bezierCurveTo(490.4, 96.6, 488.6, 101.1, 485.6, 101.5);
        vaulter.bezierCurveTo(482.4, 102.0, 479.3, 98.6, 478.9, 94.5);
        vaulter.bezierCurveTo(478.4, 90.1, 481.5, 87.2, 484.3, 86.9);
        vaulter.bezierCurveTo(486.8, 86.6, 489.3, 88.8, 489.9, 93.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(391.4, 81.3);
        vaulter.bezierCurveTo(391.4, 81.3, 391.3, 80.4, 390.3, 80.6);
        vaulter.bezierCurveTo(389.3, 80.7, 389.4, 81.6, 389.4, 81.6);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(391.4, 81.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(489.3, 90.8);
        vaulter.bezierCurveTo(489.3, 89.5, 489.0, 87.7, 488.0, 85.4);
        vaulter.bezierCurveTo(487.4, 84.0, 485.8, 79.4, 485.8, 79.4);
        vaulter.bezierCurveTo(485.8, 79.4, 484.9, 77.5, 484.3, 76.2);
        vaulter.bezierCurveTo(483.7, 74.9, 482.5, 71.5, 481.3, 70.1);
        vaulter.bezierCurveTo(480.2, 65.0, 478.7, 62.2, 473.8, 53.5);
        vaulter.bezierCurveTo(473.8, 53.5, 473.2, 53.0, 471.9, 50.9);
        vaulter.bezierCurveTo(471.2, 49.6, 467.7, 44.7, 467.7, 44.7);
        vaulter.bezierCurveTo(467.7, 44.7, 466.5, 43.6, 465.9, 43.7);
        vaulter.bezierCurveTo(465.3, 43.8, 465.0, 46.4, 465.4, 46.8);
        vaulter.bezierCurveTo(467.6, 48.7, 468.0, 49.2, 468.1, 49.9);
        vaulter.bezierCurveTo(467.6, 49.6, 467.7, 49.6, 467.5, 49.3);
        vaulter.bezierCurveTo(467.2, 48.7, 466.2, 48.1, 466.1, 48.5);
        vaulter.bezierCurveTo(465.9, 49.0, 466.4, 49.7, 466.7, 49.8);
        vaulter.bezierCurveTo(467.0, 50.0, 467.6, 51.1, 468.2, 51.8);
        vaulter.bezierCurveTo(468.6, 52.3, 469.3, 53.4, 469.8, 53.6);
        vaulter.bezierCurveTo(470.2, 53.7, 471.3, 54.3, 471.3, 54.3);
        vaulter.bezierCurveTo(473.8, 61.9, 474.2, 67.2, 475.9, 72.1);
        vaulter.bezierCurveTo(476.9, 75.2, 479.1, 83.4, 479.1, 83.4);
        vaulter.bezierCurveTo(479.1, 83.4, 479.6, 91.9, 480.5, 93.1);
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
        vaulter.moveTo(496.0, 105.1);
        vaulter.bezierCurveTo(496.2, 103.4, 494.4, 99.6, 492.4, 96.6);
        vaulter.bezierCurveTo(491.9, 93.3, 491.4, 87.1, 489.6, 83.2);
        vaulter.bezierCurveTo(489.6, 83.2, 486.8, 73.9, 484.7, 67.7);
        vaulter.bezierCurveTo(484.7, 67.7, 482.6, 59.6, 480.0, 59.9);
        vaulter.bezierCurveTo(480.0, 59.9, 478.9, 59.3, 478.8, 59.7);
        vaulter.bezierCurveTo(478.8, 60.2, 478.4, 60.4, 478.3, 60.6);
        vaulter.bezierCurveTo(478.2, 60.8, 478.3, 61.0, 478.1, 61.4);
        vaulter.bezierCurveTo(477.9, 61.9, 478.5, 62.3, 478.5, 62.3);
        vaulter.lineTo(479.4, 64.2);
        vaulter.bezierCurveTo(479.4, 64.2, 479.3, 64.1, 479.2, 64.4);
        vaulter.bezierCurveTo(479.0, 64.7, 479.4, 65.8, 480.2, 66.4);
        vaulter.bezierCurveTo(481.0, 67.0, 481.5, 67.0, 482.4, 67.7);
        vaulter.bezierCurveTo(482.4, 67.7, 483.2, 79.5, 485.1, 84.7);
        vaulter.bezierCurveTo(485.1, 84.7, 485.6, 88.6, 486.3, 91.4);
        vaulter.bezierCurveTo(486.9, 94.2, 487.4, 96.7, 487.4, 96.7);
        vaulter.bezierCurveTo(487.4, 96.7, 486.2, 99.6, 487.0, 105.4);
        vaulter.bezierCurveTo(487.6, 108.8, 491.1, 109.2, 492.4, 109.1);
        vaulter.bezierCurveTo(495.2, 108.7, 495.9, 106.8, 496.0, 105.1);
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
        vaulter.moveTo(490.6, 128.0);
        vaulter.bezierCurveTo(491.2, 128.7, 491.9, 129.8, 492.8, 131.3);
        vaulter.bezierCurveTo(494.4, 133.9, 494.7, 135.8, 495.4, 138.7);
        vaulter.bezierCurveTo(496.1, 141.7, 498.2, 145.1, 498.2, 145.1);
        vaulter.bezierCurveTo(501.1, 142.7, 507.9, 141.1, 513.6, 138.0);
        vaulter.bezierCurveTo(513.6, 138.0, 514.0, 136.0, 515.1, 135.3);
        vaulter.bezierCurveTo(516.3, 134.6, 518.3, 133.6, 519.5, 136.0);
        vaulter.bezierCurveTo(520.8, 138.4, 524.5, 143.0, 525.6, 143.7);
        vaulter.bezierCurveTo(526.6, 144.3, 528.7, 146.4, 528.4, 147.3);
        vaulter.bezierCurveTo(528.1, 148.1, 525.7, 147.7, 525.1, 146.3);
        vaulter.bezierCurveTo(525.1, 146.3, 518.8, 144.3, 516.0, 141.3);
        vaulter.bezierCurveTo(516.0, 141.3, 510.3, 145.5, 508.4, 147.4);
        vaulter.bezierCurveTo(506.4, 149.2, 499.7, 151.9, 496.4, 152.2);
        vaulter.bezierCurveTo(493.1, 152.6, 482.9, 142.9, 480.8, 132.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(487.4, 100.9);
        vaulter.bezierCurveTo(487.4, 100.9, 486.7, 99.4, 486.0, 96.9);
        vaulter.bezierCurveTo(485.8, 96.0, 485.6, 95.1, 485.4, 94.1);
        vaulter.bezierCurveTo(484.5, 89.8, 487.4, 84.9, 492.0, 84.5);
        vaulter.bezierCurveTo(496.9, 84.2, 499.5, 88.8, 499.4, 92.6);
        vaulter.bezierCurveTo(499.3, 94.5, 496.7, 96.8, 495.9, 98.9);
        vaulter.bezierCurveTo(495.0, 101.2, 495.9, 103.4, 495.9, 103.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(480.8, 108.3);
        vaulter.bezierCurveTo(480.4, 111.4, 481.5, 115.8, 480.3, 122.4);
        vaulter.bezierCurveTo(479.3, 127.4, 479.9, 128.5, 479.9, 130.2);
        vaulter.bezierCurveTo(479.9, 133.4, 480.5, 133.9, 484.6, 134.7);
        vaulter.bezierCurveTo(488.7, 135.5, 489.7, 134.2, 491.1, 132.3);
        vaulter.bezierCurveTo(491.9, 131.2, 491.7, 125.4, 493.6, 121.6);
        vaulter.bezierCurveTo(494.9, 118.9, 497.1, 111.4, 497.6, 109.1);
        vaulter.bezierCurveTo(497.9, 107.2, 496.6, 104.6, 496.3, 103.5);
        vaulter.bezierCurveTo(495.6, 101.4, 492.6, 100.6, 488.4, 100.7);
        vaulter.bezierCurveTo(484.7, 100.8, 481.1, 105.1, 480.8, 108.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(480.1, 131.5);
        vaulter.bezierCurveTo(480.1, 131.5, 483.0, 140.1, 484.8, 142.8);
        vaulter.bezierCurveTo(486.5, 145.3, 487.5, 148.0, 489.4, 149.0);
        vaulter.bezierCurveTo(490.0, 149.3, 491.2, 150.3, 493.2, 150.5);
        vaulter.bezierCurveTo(498.0, 151.0, 508.1, 148.0, 512.7, 144.8);
        vaulter.bezierCurveTo(516.9, 146.0, 521.0, 147.4, 524.1, 147.5);
        vaulter.bezierCurveTo(524.1, 147.5, 526.3, 148.2, 526.8, 147.2);
        vaulter.bezierCurveTo(527.4, 146.3, 523.6, 143.2, 520.2, 142.2);
        vaulter.bezierCurveTo(516.7, 141.2, 514.7, 139.3, 513.9, 138.8);
        vaulter.bezierCurveTo(513.2, 138.4, 510.6, 138.3, 510.2, 139.4);
        vaulter.bezierCurveTo(509.9, 140.1, 509.8, 140.5, 509.0, 140.9);
        vaulter.bezierCurveTo(501.5, 143.6, 501.0, 142.7, 496.2, 143.4);
        vaulter.bezierCurveTo(495.9, 139.4, 495.5, 137.2, 491.3, 128.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(496.4, 108.9);
        vaulter.bezierCurveTo(495.7, 112.2, 492.5, 115.9, 489.5, 115.3);
        vaulter.bezierCurveTo(486.2, 114.7, 484.6, 110.5, 485.5, 106.4);
        vaulter.bezierCurveTo(486.5, 102.2, 490.4, 100.5, 493.1, 101.1);
        vaulter.bezierCurveTo(495.6, 101.6, 497.3, 104.6, 496.4, 108.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(386.7, 82.0);
        vaulter.bezierCurveTo(386.7, 82.0, 386.6, 81.1, 385.6, 81.2);
        vaulter.bezierCurveTo(384.6, 81.4, 384.7, 82.3, 384.7, 82.3);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(386.7, 82.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(496.0, 106.2);
        vaulter.bezierCurveTo(496.5, 104.9, 496.6, 102.9, 495.9, 100.1);
        vaulter.bezierCurveTo(495.6, 98.6, 494.7, 93.9, 494.7, 93.9);
        vaulter.bezierCurveTo(494.7, 93.9, 494.2, 92.0, 493.8, 90.6);
        vaulter.bezierCurveTo(493.5, 89.2, 492.9, 85.7, 492.0, 84.2);
        vaulter.bezierCurveTo(491.8, 79.1, 490.7, 76.1, 487.5, 66.9);
        vaulter.bezierCurveTo(487.5, 66.9, 487.0, 66.4, 486.1, 64.1);
        vaulter.bezierCurveTo(485.6, 62.7, 483.1, 57.4, 483.1, 57.4);
        vaulter.bezierCurveTo(483.1, 57.4, 482.1, 56.1, 481.5, 56.1);
        vaulter.bezierCurveTo(480.9, 56.1, 480.1, 58.6, 480.5, 59.1);
        vaulter.bezierCurveTo(482.3, 61.3, 482.6, 61.8, 482.6, 62.5);
        vaulter.bezierCurveTo(482.2, 62.1, 482.2, 62.2, 482.1, 61.8);
        vaulter.bezierCurveTo(481.9, 61.2, 481.1, 60.4, 480.8, 60.8);
        vaulter.bezierCurveTo(480.6, 61.2, 481.0, 62.0, 481.3, 62.2);
        vaulter.bezierCurveTo(481.5, 62.4, 481.9, 63.5, 482.3, 64.3);
        vaulter.bezierCurveTo(482.7, 64.9, 483.2, 66.1, 483.6, 66.3);
        vaulter.bezierCurveTo(484.0, 66.6, 485.0, 67.2, 485.0, 67.2);
        vaulter.bezierCurveTo(486.1, 75.0, 485.6, 80.2, 486.4, 85.2);
        vaulter.bezierCurveTo(486.9, 88.4, 487.7, 96.7, 487.7, 96.7);
        vaulter.bezierCurveTo(487.7, 96.7, 486.7, 105.0, 487.4, 106.3);
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
        vaulter.moveTo(507.3, 140.8);
        vaulter.bezierCurveTo(507.8, 139.3, 507.0, 135.2, 505.7, 131.9);
        vaulter.bezierCurveTo(506.0, 128.7, 507.1, 122.6, 506.2, 118.5);
        vaulter.bezierCurveTo(506.2, 118.5, 505.5, 107.8, 505.0, 101.3);
        vaulter.bezierCurveTo(505.0, 101.3, 500.3, 95.2, 498.1, 96.3);
        vaulter.bezierCurveTo(498.1, 96.3, 496.8, 96.2, 496.9, 96.6);
        vaulter.bezierCurveTo(497.1, 97.0, 496.8, 97.4, 496.8, 97.6);
        vaulter.bezierCurveTo(496.7, 97.8, 496.9, 98.0, 496.9, 98.4);
        vaulter.bezierCurveTo(496.8, 99.0, 497.5, 99.1, 497.5, 99.1);
        vaulter.lineTo(499.0, 100.5);
        vaulter.bezierCurveTo(499.0, 100.5, 499.2, 100.5, 499.1, 100.8);
        vaulter.bezierCurveTo(499.1, 100.9, 497.9, 100.4, 498.0, 101.2);
        vaulter.bezierCurveTo(498.1, 101.6, 499.8, 102.1, 500.5, 102.2);
        vaulter.bezierCurveTo(501.4, 102.5, 502.3, 101.2, 502.9, 102.1);
        vaulter.bezierCurveTo(502.9, 102.1, 500.9, 113.5, 501.6, 118.9);
        vaulter.bezierCurveTo(501.6, 118.9, 501.1, 122.7, 501.1, 125.6);
        vaulter.bezierCurveTo(501.1, 128.3, 501.0, 130.8, 501.0, 130.8);
        vaulter.bezierCurveTo(501.0, 130.8, 499.1, 133.4, 498.6, 139.1);
        vaulter.bezierCurveTo(498.3, 142.4, 501.6, 143.7, 502.9, 143.8);
        vaulter.bezierCurveTo(505.6, 144.1, 506.8, 142.4, 507.3, 140.8);
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
        vaulter.moveTo(495.9, 162.7);
        vaulter.bezierCurveTo(494.5, 167.2, 494.2, 170.5, 492.3, 172.7);
        vaulter.bezierCurveTo(490.3, 175.0, 489.0, 177.8, 489.0, 177.8);
        vaulter.bezierCurveTo(491.7, 177.6, 492.7, 178.5, 502.1, 184.6);
        vaulter.bezierCurveTo(502.1, 184.6, 503.9, 183.8, 505.1, 184.3);
        vaulter.bezierCurveTo(506.3, 184.8, 508.2, 185.8, 507.1, 188.2);
        vaulter.bezierCurveTo(505.9, 190.6, 504.4, 196.1, 504.5, 197.4);
        vaulter.bezierCurveTo(504.6, 198.6, 504.2, 201.5, 503.3, 201.7);
        vaulter.bezierCurveTo(502.4, 202.0, 501.4, 199.8, 502.1, 198.6);
        vaulter.bezierCurveTo(502.1, 198.6, 500.1, 192.4, 500.9, 188.4);
        vaulter.bezierCurveTo(500.9, 188.4, 494.2, 186.4, 491.6, 185.9);
        vaulter.bezierCurveTo(489.1, 185.4, 483.5, 186.0, 481.4, 183.7);
        vaulter.bezierCurveTo(479.5, 181.6, 480.1, 167.9, 484.8, 159.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(500.0, 134.3);
        vaulter.bezierCurveTo(500.0, 134.3, 499.8, 132.5, 499.9, 129.6);
        vaulter.bezierCurveTo(499.9, 128.7, 500.0, 127.7, 500.2, 126.5);
        vaulter.bezierCurveTo(500.7, 121.8, 505.4, 117.7, 510.2, 118.9);
        vaulter.bezierCurveTo(515.4, 120.2, 516.6, 125.8, 515.1, 129.7);
        vaulter.bezierCurveTo(514.4, 131.7, 511.0, 133.1, 509.4, 135.1);
        vaulter.bezierCurveTo(507.8, 137.2, 507.9, 139.7, 507.9, 139.7);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(492.0, 139.5);
        vaulter.bezierCurveTo(490.7, 142.3, 490.4, 146.8, 487.3, 152.6);
        vaulter.bezierCurveTo(484.9, 156.9, 485.0, 158.1, 484.5, 159.6);
        vaulter.bezierCurveTo(483.6, 162.7, 484.0, 163.3, 487.6, 165.3);
        vaulter.bezierCurveTo(491.1, 167.3, 492.5, 166.4, 494.4, 165.0);
        vaulter.bezierCurveTo(495.5, 164.2, 497.1, 158.7, 499.9, 155.8);
        vaulter.bezierCurveTo(501.9, 153.6, 506.3, 147.4, 507.4, 145.4);
        vaulter.bezierCurveTo(508.3, 143.7, 507.9, 140.9, 507.9, 139.7);
        vaulter.bezierCurveTo(507.9, 137.5, 505.4, 135.9, 501.4, 134.7);
        vaulter.bezierCurveTo(497.9, 133.7, 493.2, 136.6, 492.0, 139.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(484.8, 158.8);
        vaulter.bezierCurveTo(484.8, 158.8, 481.7, 167.1, 481.4, 170.2);
        vaulter.bezierCurveTo(481.1, 173.2, 479.9, 178.9, 480.7, 180.8);
        vaulter.bezierCurveTo(480.9, 181.4, 481.5, 181.9, 482.9, 183.4);
        vaulter.bezierCurveTo(486.2, 186.7, 494.4, 188.6, 499.9, 189.0);
        vaulter.bezierCurveTo(502.3, 192.5, 501.0, 197.1, 502.2, 199.9);
        vaulter.bezierCurveTo(502.2, 199.9, 502.4, 202.1, 503.5, 202.2);
        vaulter.bezierCurveTo(504.5, 202.3, 505.8, 197.8, 505.3, 194.3);
        vaulter.bezierCurveTo(504.8, 190.8, 505.7, 188.2, 505.8, 187.3);
        vaulter.bezierCurveTo(506.0, 186.5, 504.9, 184.4, 503.9, 184.2);
        vaulter.bezierCurveTo(503.1, 184.1, 501.6, 184.1, 500.8, 183.9);
        vaulter.bezierCurveTo(493.5, 181.3, 493.7, 180.3, 489.6, 177.8);
        vaulter.bezierCurveTo(491.8, 174.6, 493.7, 171.5, 496.0, 162.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(506.4, 145.8);
        vaulter.bezierCurveTo(505.0, 149.0, 501.0, 151.9, 498.3, 150.7);
        vaulter.bezierCurveTo(495.2, 149.3, 494.5, 144.8, 496.3, 141.1);
        vaulter.bezierCurveTo(498.2, 137.1, 502.4, 136.4, 504.9, 137.5);
        vaulter.bezierCurveTo(507.3, 138.6, 508.2, 141.8, 506.4, 145.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(386.7, 82.0);
        vaulter.bezierCurveTo(386.7, 82.0, 386.6, 81.1, 385.6, 81.2);
        vaulter.bezierCurveTo(384.6, 81.4, 384.7, 82.3, 384.7, 82.3);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(386.7, 82.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(507.4, 141.4);
        vaulter.bezierCurveTo(508.0, 140.3, 508.5, 138.9, 508.8, 136.8);
        vaulter.bezierCurveTo(509.0, 135.3, 509.9, 130.8, 509.9, 130.8);
        vaulter.bezierCurveTo(509.9, 130.8, 510.1, 128.8, 510.2, 127.4);
        vaulter.bezierCurveTo(510.4, 126.0, 511.2, 122.6, 510.9, 120.9);
        vaulter.bezierCurveTo(512.4, 116.2, 512.6, 113.1, 512.9, 103.5);
        vaulter.bezierCurveTo(512.9, 103.5, 512.4, 102.5, 511.5, 100.3);
        vaulter.bezierCurveTo(510.9, 98.9, 508.1, 93.8, 508.1, 93.8);
        vaulter.bezierCurveTo(508.1, 93.8, 507.1, 92.7, 506.5, 92.7);
        vaulter.bezierCurveTo(505.9, 92.7, 505.3, 95.2, 505.7, 95.7);
        vaulter.bezierCurveTo(507.6, 97.7, 507.9, 98.2, 507.9, 98.9);
        vaulter.bezierCurveTo(507.5, 98.5, 507.6, 98.6, 507.4, 98.2);
        vaulter.bezierCurveTo(507.2, 97.7, 506.3, 97.0, 506.1, 97.4);
        vaulter.bezierCurveTo(505.9, 97.8, 506.3, 98.5, 506.6, 98.7);
        vaulter.bezierCurveTo(506.9, 98.8, 507.3, 99.9, 507.8, 100.7);
        vaulter.bezierCurveTo(508.1, 101.3, 508.7, 102.4, 509.1, 102.6);
        vaulter.bezierCurveTo(509.5, 102.8, 510.5, 102.9, 510.5, 102.9);
        vaulter.bezierCurveTo(508.8, 110.4, 506.5, 114.9, 505.4, 119.8);
        vaulter.bezierCurveTo(504.7, 122.9, 502.4, 130.7, 502.4, 130.7);
        vaulter.bezierCurveTo(502.4, 130.7, 498.6, 138.0, 498.8, 139.4);
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
        vaulter.moveTo(520.2, 144.7);
        vaulter.bezierCurveTo(520.0, 143.0, 517.5, 139.5, 514.9, 136.9);
        vaulter.bezierCurveTo(513.8, 133.7, 512.3, 127.5, 509.7, 123.9);
        vaulter.bezierCurveTo(509.7, 123.9, 504.5, 114.0, 501.2, 108.1);
        vaulter.bezierCurveTo(501.2, 108.1, 494.2, 104.2, 492.6, 106.3);
        vaulter.bezierCurveTo(492.6, 106.3, 491.3, 106.6, 491.6, 107.0);
        vaulter.bezierCurveTo(491.9, 107.4, 491.8, 107.8, 491.9, 108.0);
        vaulter.bezierCurveTo(491.9, 108.3, 492.1, 108.3, 492.3, 108.7);
        vaulter.bezierCurveTo(492.5, 109.3, 493.2, 109.1, 493.2, 109.1);
        vaulter.lineTo(495.2, 109.9);
        vaulter.bezierCurveTo(495.2, 109.9, 495.4, 109.8, 495.4, 110.1);
        vaulter.bezierCurveTo(495.5, 110.2, 494.1, 110.3, 494.6, 110.9);
        vaulter.bezierCurveTo(494.9, 111.3, 496.6, 111.0, 497.3, 110.9);
        vaulter.bezierCurveTo(498.3, 110.8, 498.6, 109.2, 499.6, 109.7);
        vaulter.bezierCurveTo(499.6, 109.7, 502.5, 121.4, 505.5, 126.3);
        vaulter.bezierCurveTo(505.5, 126.3, 506.6, 130.1, 507.9, 132.8);
        vaulter.bezierCurveTo(509.0, 135.4, 510.0, 137.9, 510.0, 137.9);
        vaulter.bezierCurveTo(510.0, 137.9, 509.3, 141.1, 511.2, 146.7);
        vaulter.bezierCurveTo(512.3, 150.0, 516.0, 149.8, 517.2, 149.4);
        vaulter.bezierCurveTo(520.0, 148.5, 520.4, 146.5, 520.2, 144.7);
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
        vaulter.moveTo(506.8, 171.9);
        vaulter.bezierCurveTo(503.3, 175.4, 501.5, 178.3, 498.6, 179.4);
        vaulter.bezierCurveTo(495.7, 180.6, 493.2, 182.6, 493.2, 182.6);
        vaulter.bezierCurveTo(495.8, 183.7, 496.2, 185.0, 502.0, 195.2);
        vaulter.bezierCurveTo(502.0, 195.2, 504.0, 195.3, 504.9, 196.3);
        vaulter.bezierCurveTo(505.8, 197.3, 507.1, 199.2, 504.9, 200.8);
        vaulter.bezierCurveTo(502.6, 202.5, 498.7, 206.9, 498.1, 208.1);
        vaulter.bezierCurveTo(497.6, 209.3, 495.8, 211.7, 494.9, 211.5);
        vaulter.bezierCurveTo(494.0, 211.3, 494.1, 208.9, 495.4, 208.1);
        vaulter.bezierCurveTo(495.4, 208.1, 496.5, 201.4, 499.1, 198.1);
        vaulter.bezierCurveTo(499.1, 198.1, 493.9, 193.0, 491.7, 191.4);
        vaulter.bezierCurveTo(489.5, 189.7, 484.2, 187.6, 483.3, 184.3);
        vaulter.bezierCurveTo(482.5, 181.6, 489.7, 169.2, 498.1, 163.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(512.6, 140.1);
        vaulter.bezierCurveTo(512.6, 140.1, 512.7, 138.5, 513.3, 135.8);
        vaulter.bezierCurveTo(513.4, 135.0, 513.7, 134.0, 513.9, 133.0);
        vaulter.bezierCurveTo(515.1, 128.7, 520.0, 125.6, 524.3, 127.4);
        vaulter.bezierCurveTo(529.0, 129.3, 529.3, 134.7, 527.3, 138.1);
        vaulter.bezierCurveTo(526.4, 139.8, 523.0, 140.7, 521.3, 142.3);
        vaulter.bezierCurveTo(519.4, 144.0, 519.2, 146.3, 519.2, 146.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(504.7, 145.4);
        vaulter.bezierCurveTo(503.4, 148.3, 503.1, 153.0, 499.8, 159.0);
        vaulter.bezierCurveTo(497.3, 163.5, 497.5, 164.8, 497.0, 166.4);
        vaulter.bezierCurveTo(496.0, 169.6, 495.7, 170.0, 499.5, 172.0);
        vaulter.bezierCurveTo(503.2, 174.1, 504.6, 173.1, 506.6, 171.8);
        vaulter.bezierCurveTo(507.7, 170.9, 512.2, 159.7, 515.2, 156.6);
        vaulter.bezierCurveTo(517.3, 154.4, 518.9, 153.4, 520.1, 151.3);
        vaulter.bezierCurveTo(521.1, 149.6, 520.6, 146.6, 520.7, 145.4);
        vaulter.bezierCurveTo(520.7, 143.1, 518.0, 141.4, 513.9, 140.2);
        vaulter.bezierCurveTo(510.3, 139.1, 506.0, 142.4, 504.7, 145.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(498.3, 163.0);
        vaulter.bezierCurveTo(498.3, 163.0, 491.5, 169.2, 489.7, 171.9);
        vaulter.bezierCurveTo(488.0, 174.6, 484.2, 179.2, 484.0, 181.4);
        vaulter.bezierCurveTo(483.9, 182.1, 484.2, 182.8, 484.9, 184.8);
        vaulter.bezierCurveTo(486.3, 189.5, 492.9, 195.1, 497.8, 198.2);
        vaulter.bezierCurveTo(498.4, 202.6, 495.1, 206.2, 494.8, 209.3);
        vaulter.bezierCurveTo(494.8, 209.3, 493.9, 211.5, 494.8, 212.1);
        vaulter.bezierCurveTo(495.8, 212.7, 499.2, 209.1, 500.4, 205.6);
        vaulter.bezierCurveTo(501.6, 202.1, 503.6, 200.2, 504.1, 199.5);
        vaulter.bezierCurveTo(504.7, 198.7, 504.7, 196.3, 503.9, 195.6);
        vaulter.bezierCurveTo(503.2, 195.1, 501.8, 194.5, 501.1, 193.9);
        vaulter.bezierCurveTo(495.6, 187.9, 496.2, 187.1, 493.7, 182.9);
        vaulter.bezierCurveTo(497.3, 181.0, 500.5, 179.0, 507.2, 171.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(519.6, 149.2);
        vaulter.bezierCurveTo(518.2, 152.3, 514.2, 155.2, 511.5, 154.0);
        vaulter.bezierCurveTo(508.4, 152.6, 507.7, 148.1, 509.5, 144.4);
        vaulter.bezierCurveTo(511.4, 140.4, 515.6, 139.7, 518.1, 140.9);
        vaulter.bezierCurveTo(520.5, 141.9, 521.4, 145.2, 519.6, 149.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(381.9, 82.8);
        vaulter.bezierCurveTo(381.9, 82.8, 381.8, 81.8, 380.8, 82.0);
        vaulter.bezierCurveTo(379.8, 82.2, 380.0, 83.1, 380.0, 83.1);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(381.9, 82.8);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(520.3, 146.2);
        vaulter.bezierCurveTo(520.7, 144.8, 520.6, 142.9, 519.9, 140.3);
        vaulter.bezierCurveTo(519.4, 138.8, 518.4, 134.0, 518.4, 134.0);
        vaulter.bezierCurveTo(518.4, 134.0, 517.7, 132.1, 517.3, 130.7);
        vaulter.bezierCurveTo(516.9, 129.3, 516.1, 125.7, 515.1, 124.2);
        vaulter.bezierCurveTo(514.6, 119.0, 513.5, 116.1, 509.7, 106.8);
        vaulter.bezierCurveTo(509.7, 106.8, 508.8, 106.1, 507.0, 104.4);
        vaulter.bezierCurveTo(505.8, 103.3, 501.1, 99.7, 501.1, 99.7);
        vaulter.bezierCurveTo(501.1, 99.7, 499.6, 99.0, 499.1, 99.3);
        vaulter.bezierCurveTo(498.5, 99.5, 499.0, 102.2, 499.6, 102.4);
        vaulter.bezierCurveTo(502.2, 103.6, 502.6, 103.9, 503.0, 104.5);
        vaulter.bezierCurveTo(502.4, 104.4, 502.5, 104.4, 502.3, 104.1);
        vaulter.bezierCurveTo(501.8, 103.7, 500.7, 103.4, 500.6, 103.9);
        vaulter.bezierCurveTo(500.6, 104.3, 501.3, 104.9, 501.7, 104.9);
        vaulter.bezierCurveTo(502.0, 104.9, 502.8, 105.8, 503.6, 106.3);
        vaulter.bezierCurveTo(504.2, 106.7, 505.2, 107.6, 505.7, 107.6);
        vaulter.bezierCurveTo(506.2, 107.6, 507.2, 107.3, 507.2, 107.3);
        vaulter.bezierCurveTo(508.7, 115.1, 508.4, 120.4, 509.5, 125.5);
        vaulter.bezierCurveTo(510.1, 128.7, 511.3, 137.2, 511.3, 137.2);
        vaulter.bezierCurveTo(511.3, 137.2, 510.9, 143.5, 511.2, 146.1);
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
        vaulter.moveTo(525.5, 162.3);
        vaulter.bezierCurveTo(524.2, 161.2, 520.0, 160.4, 516.3, 160.3);
        vaulter.bezierCurveTo(513.3, 158.7, 507.8, 155.4, 503.5, 154.7);
        vaulter.bezierCurveTo(485.9, 148.8, 496.7, 152.3, 486.5, 149.2);
        vaulter.bezierCurveTo(486.5, 149.2, 481.7, 144.7, 479.6, 146.2);
        vaulter.bezierCurveTo(479.6, 146.2, 478.8, 146.3, 478.7, 146.8);
        vaulter.bezierCurveTo(478.6, 147.2, 478.4, 147.5, 478.4, 147.7);
        vaulter.bezierCurveTo(478.4, 148.0, 478.6, 148.1, 478.7, 148.5);
        vaulter.bezierCurveTo(478.7, 149.1, 479.4, 149.1, 479.4, 149.1);
        vaulter.bezierCurveTo(479.4, 149.1, 480.7, 149.7, 481.1, 149.7);
        vaulter.bezierCurveTo(482.3, 149.7, 482.6, 150.6, 482.4, 150.6);
        vaulter.bezierCurveTo(482.2, 150.6, 481.4, 150.8, 481.3, 150.7);
        vaulter.bezierCurveTo(480.8, 150.6, 479.4, 150.2, 479.7, 151.0);
        vaulter.bezierCurveTo(479.9, 151.5, 482.3, 151.8, 483.0, 151.9);
        vaulter.bezierCurveTo(484.0, 152.0, 485.3, 151.8, 486.4, 151.5);
        vaulter.bezierCurveTo(486.4, 151.5, 496.6, 157.8, 502.2, 159.3);
        vaulter.bezierCurveTo(502.2, 159.3, 505.6, 161.2, 508.4, 162.3);
        vaulter.bezierCurveTo(511.0, 163.4, 513.4, 164.4, 513.4, 164.4);
        vaulter.bezierCurveTo(513.4, 164.4, 515.1, 167.2, 520.5, 170.0);
        vaulter.bezierCurveTo(523.6, 171.5, 526.0, 168.8, 526.7, 167.7);
        vaulter.bezierCurveTo(528.0, 165.1, 526.9, 163.4, 525.5, 162.3);
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
        vaulter.moveTo(511.7, 193.4);
        vaulter.bezierCurveTo(507.1, 195.1, 504.2, 197.0, 501.2, 196.8);
        vaulter.bezierCurveTo(498.1, 196.7, 494.9, 197.4, 494.9, 197.4);
        vaulter.bezierCurveTo(496.8, 199.5, 496.6, 200.9, 497.6, 212.5);
        vaulter.bezierCurveTo(497.6, 212.5, 499.4, 213.5, 499.8, 214.8);
        vaulter.bezierCurveTo(500.2, 216.1, 500.6, 218.4, 497.9, 218.9);
        vaulter.bezierCurveTo(495.2, 219.5, 489.7, 221.8, 488.7, 222.7);
        vaulter.bezierCurveTo(487.7, 223.6, 485.1, 225.0, 484.3, 224.4);
        vaulter.bezierCurveTo(483.6, 223.9, 484.7, 221.7, 486.2, 221.5);
        vaulter.bezierCurveTo(486.2, 221.5, 490.0, 215.9, 493.7, 214.0);
        vaulter.bezierCurveTo(493.7, 214.0, 491.1, 207.2, 489.9, 204.8);
        vaulter.bezierCurveTo(488.6, 202.4, 484.6, 198.2, 485.2, 194.9);
        vaulter.bezierCurveTo(485.7, 192.0, 497.4, 183.8, 507.4, 182.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(520.1, 161.0);
        vaulter.bezierCurveTo(520.1, 161.0, 520.1, 159.3, 520.7, 156.7);
        vaulter.bezierCurveTo(520.9, 155.8, 521.1, 154.9, 521.4, 153.8);
        vaulter.bezierCurveTo(522.6, 149.6, 527.5, 146.4, 531.8, 148.2);
        vaulter.bezierCurveTo(536.4, 150.2, 536.7, 155.6, 534.8, 159.0);
        vaulter.bezierCurveTo(533.8, 160.7, 530.5, 161.5, 528.7, 163.1);
        vaulter.bezierCurveTo(526.9, 164.8, 526.6, 167.2, 526.6, 167.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(511.7, 165.3);
        vaulter.bezierCurveTo(510.3, 168.2, 510.0, 172.9, 506.7, 178.9);
        vaulter.bezierCurveTo(504.2, 183.4, 504.4, 184.7, 503.9, 186.3);
        vaulter.bezierCurveTo(502.9, 189.4, 503.3, 190.1, 507.1, 192.1);
        vaulter.bezierCurveTo(510.8, 194.2, 512.2, 193.3, 514.1, 191.9);
        vaulter.bezierCurveTo(515.3, 191.0, 516.9, 185.3, 519.9, 182.2);
        vaulter.bezierCurveTo(522.0, 180.0, 526.5, 173.5, 527.7, 171.4);
        vaulter.bezierCurveTo(528.7, 169.7, 528.2, 166.7, 528.2, 165.5);
        vaulter.bezierCurveTo(528.3, 163.3, 525.6, 161.6, 521.4, 160.3);
        vaulter.bezierCurveTo(517.9, 159.3, 513.0, 162.3, 511.7, 165.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(507.8, 181.8);
        vaulter.bezierCurveTo(507.8, 181.8, 499.0, 184.6, 496.2, 186.3);
        vaulter.bezierCurveTo(493.6, 188.0, 488.1, 190.6, 487.0, 192.5);
        vaulter.bezierCurveTo(486.7, 193.1, 486.7, 193.9, 486.4, 196.0);
        vaulter.bezierCurveTo(485.8, 200.8, 489.4, 208.7, 492.6, 213.5);
        vaulter.bezierCurveTo(491.2, 217.8, 486.7, 219.7, 485.1, 222.4);
        vaulter.bezierCurveTo(485.1, 222.4, 483.4, 224.0, 484.0, 224.9);
        vaulter.bezierCurveTo(484.6, 225.9, 489.2, 224.0, 491.8, 221.4);
        vaulter.bezierCurveTo(494.3, 218.7, 497.0, 217.8, 497.8, 217.4);
        vaulter.bezierCurveTo(498.6, 216.9, 499.6, 214.8, 499.1, 213.8);
        vaulter.bezierCurveTo(498.8, 213.0, 497.8, 211.8, 497.4, 211.0);
        vaulter.bezierCurveTo(494.9, 203.3, 495.8, 202.8, 495.3, 197.9);
        vaulter.bezierCurveTo(499.3, 197.7, 503.0, 197.2, 512.3, 193.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(527.0, 170.4);
        vaulter.bezierCurveTo(525.6, 173.6, 521.7, 176.5, 518.9, 175.2);
        vaulter.bezierCurveTo(515.9, 173.9, 515.2, 169.4, 517.0, 165.7);
        vaulter.bezierCurveTo(518.9, 161.7, 523.0, 161.0, 525.6, 162.1);
        vaulter.bezierCurveTo(527.9, 163.2, 528.8, 166.4, 527.0, 170.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(378.5, 90.0);
        vaulter.bezierCurveTo(378.5, 90.0, 378.4, 89.0, 377.4, 89.2);
        vaulter.bezierCurveTo(376.4, 89.4, 376.6, 90.4, 376.6, 90.4);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(378.5, 90.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(528.0, 165.6);
        vaulter.bezierCurveTo(528.0, 164.0, 527.2, 162.0, 524.8, 159.3);
        vaulter.bezierCurveTo(523.7, 158.1, 520.7, 154.4, 520.7, 154.4);
        vaulter.bezierCurveTo(520.7, 154.4, 519.2, 152.9, 518.2, 151.8);
        vaulter.bezierCurveTo(517.2, 150.8, 515.0, 147.9, 513.4, 147.0);
        vaulter.bezierCurveTo(510.7, 142.6, 508.3, 140.4, 500.9, 133.8);
        vaulter.bezierCurveTo(500.9, 133.8, 497.7, 131.9, 495.3, 131.2);
        vaulter.bezierCurveTo(493.8, 130.8, 489.9, 131.2, 489.9, 131.2);
        vaulter.bezierCurveTo(489.9, 131.2, 488.3, 131.3, 488.0, 131.8);
        vaulter.bezierCurveTo(487.6, 132.2, 489.2, 132.4, 489.9, 132.4);
        vaulter.bezierCurveTo(491.0, 132.4, 492.7, 132.6, 493.5, 132.8);
        vaulter.bezierCurveTo(494.4, 133.1, 494.9, 133.0, 495.0, 133.3);
        vaulter.bezierCurveTo(495.0, 133.5, 495.1, 134.0, 494.7, 134.2);
        vaulter.bezierCurveTo(494.2, 134.4, 493.9, 134.9, 493.0, 134.7);
        vaulter.bezierCurveTo(492.4, 134.5, 491.3, 134.7, 491.4, 135.2);
        vaulter.bezierCurveTo(491.6, 135.6, 492.5, 135.8, 492.8, 135.6);
        vaulter.bezierCurveTo(493.1, 135.5, 494.3, 135.9, 495.2, 136.0);
        vaulter.bezierCurveTo(495.9, 136.1, 497.1, 136.5, 497.6, 136.3);
        vaulter.bezierCurveTo(498.0, 136.1, 498.8, 135.3, 498.8, 135.3);
        vaulter.bezierCurveTo(503.6, 141.7, 505.7, 146.6, 508.9, 150.7);
        vaulter.bezierCurveTo(510.9, 153.3, 515.7, 160.3, 515.7, 160.3);
        vaulter.bezierCurveTo(515.7, 160.3, 518.4, 166.7, 519.8, 168.6);
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
        vaulter.moveTo(534.3, 193.4);
        vaulter.bezierCurveTo(532.9, 192.3, 528.7, 191.6, 525.0, 191.5);
        vaulter.bezierCurveTo(522.0, 190.0, 516.5, 186.7, 512.1, 186.1);
        vaulter.bezierCurveTo(494.4, 180.4, 505.3, 183.8, 495.0, 180.8);
        vaulter.bezierCurveTo(495.0, 180.8, 490.2, 176.4, 488.1, 177.9);
        vaulter.bezierCurveTo(488.1, 177.9, 487.3, 178.0, 487.2, 178.5);
        vaulter.bezierCurveTo(487.1, 179.0, 487.0, 179.2, 487.0, 179.5);
        vaulter.bezierCurveTo(487.0, 179.7, 487.2, 179.8, 487.2, 180.3);
        vaulter.bezierCurveTo(487.3, 180.9, 488.0, 180.9, 488.0, 180.9);
        vaulter.bezierCurveTo(488.0, 180.9, 489.3, 181.4, 489.6, 181.4);
        vaulter.bezierCurveTo(490.9, 181.4, 491.2, 182.3, 491.0, 182.3);
        vaulter.bezierCurveTo(490.7, 182.3, 490.0, 182.5, 489.9, 182.4);
        vaulter.bezierCurveTo(489.4, 182.3, 487.9, 182.0, 488.3, 182.7);
        vaulter.bezierCurveTo(488.4, 183.2, 490.9, 183.5, 491.6, 183.6);
        vaulter.bezierCurveTo(492.6, 183.7, 493.9, 183.4, 495.0, 183.1);
        vaulter.bezierCurveTo(495.0, 183.1, 505.3, 189.3, 510.9, 190.7);
        vaulter.bezierCurveTo(510.9, 190.7, 514.3, 192.6, 517.1, 193.6);
        vaulter.bezierCurveTo(519.8, 194.6, 522.2, 195.7, 522.2, 195.7);
        vaulter.bezierCurveTo(522.2, 195.7, 523.9, 198.5, 529.3, 201.1);
        vaulter.bezierCurveTo(532.4, 202.6, 534.9, 199.9, 535.5, 198.7);
        vaulter.bezierCurveTo(536.8, 196.2, 535.6, 194.5, 534.3, 193.4);
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
        vaulter.moveTo(513.5, 221.2);
        vaulter.bezierCurveTo(508.5, 221.1, 505.2, 221.8, 502.4, 220.6);
        vaulter.bezierCurveTo(499.5, 219.4, 496.3, 218.9, 496.3, 218.9);
        vaulter.bezierCurveTo(497.4, 221.5, 496.7, 222.8, 493.5, 234.0);
        vaulter.bezierCurveTo(493.5, 234.0, 494.8, 235.6, 494.7, 236.9);
        vaulter.bezierCurveTo(494.7, 238.3, 494.2, 240.5, 491.5, 240.1);
        vaulter.bezierCurveTo(488.7, 239.6, 482.8, 239.9, 481.6, 240.3);
        vaulter.bezierCurveTo(480.3, 240.8, 477.4, 241.2, 476.9, 240.4);
        vaulter.bezierCurveTo(476.4, 239.6, 478.2, 238.0, 479.7, 238.3);
        vaulter.bezierCurveTo(479.7, 238.3, 485.2, 234.5, 489.4, 234.0);
        vaulter.bezierCurveTo(489.4, 234.0, 489.3, 226.7, 489.0, 224.0);
        vaulter.bezierCurveTo(488.7, 221.3, 486.5, 216.0, 488.2, 213.1);
        vaulter.bezierCurveTo(489.6, 210.6, 503.5, 207.1, 513.5, 209.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(530.1, 191.3);
        vaulter.bezierCurveTo(530.1, 191.3, 530.5, 189.7, 531.7, 187.3);
        vaulter.bezierCurveTo(532.0, 186.5, 532.5, 185.6, 533.0, 184.6);
        vaulter.bezierCurveTo(535.1, 180.8, 540.7, 178.9, 544.4, 181.6);
        vaulter.bezierCurveTo(548.5, 184.6, 547.4, 190.0, 544.5, 192.5);
        vaulter.bezierCurveTo(542.9, 193.9, 540.0, 194.3, 538.0, 195.4);
        vaulter.bezierCurveTo(535.8, 196.6, 535.0, 198.8, 535.0, 198.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(520.8, 193.7);
        vaulter.bezierCurveTo(518.8, 196.2, 517.5, 200.7, 512.9, 205.8);
        vaulter.bezierCurveTo(509.4, 209.6, 509.3, 210.8, 508.4, 212.3);
        vaulter.bezierCurveTo(506.7, 215.1, 506.9, 215.9, 510.1, 218.7);
        vaulter.bezierCurveTo(513.2, 221.6, 514.9, 221.0, 517.1, 220.1);
        vaulter.bezierCurveTo(518.4, 219.6, 521.3, 214.4, 524.9, 212.1);
        vaulter.bezierCurveTo(527.5, 210.4, 533.4, 205.1, 535.0, 203.4);
        vaulter.bezierCurveTo(536.3, 201.9, 536.6, 198.9, 536.9, 197.7);
        vaulter.bezierCurveTo(537.4, 195.6, 535.2, 193.3, 531.5, 191.1);
        vaulter.bezierCurveTo(528.2, 189.3, 522.8, 191.1, 520.8, 193.7);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(513.9, 208.9);
        vaulter.bezierCurveTo(513.9, 208.9, 504.7, 208.4, 501.5, 209.0);
        vaulter.bezierCurveTo(498.4, 209.6, 492.4, 210.2, 490.7, 211.5);
        vaulter.bezierCurveTo(490.2, 212.0, 489.9, 212.7, 488.9, 214.5);
        vaulter.bezierCurveTo(486.6, 218.9, 487.2, 227.5, 488.4, 233.2);
        vaulter.bezierCurveTo(485.7, 236.7, 480.8, 236.8, 478.3, 238.8);
        vaulter.bezierCurveTo(478.3, 238.8, 476.2, 239.7, 476.4, 240.8);
        vaulter.bezierCurveTo(476.6, 241.9, 481.6, 241.8, 484.9, 240.2);
        vaulter.bezierCurveTo(488.2, 238.6, 491.0, 238.7, 492.0, 238.6);
        vaulter.bezierCurveTo(492.9, 238.4, 494.6, 236.8, 494.5, 235.7);
        vaulter.bezierCurveTo(494.4, 234.9, 493.9, 233.4, 493.8, 232.5);
        vaulter.bezierCurveTo(494.2, 224.4, 495.2, 224.3, 496.5, 219.5);
        vaulter.bezierCurveTo(500.4, 220.7, 504.0, 221.6, 514.1, 221.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(534.7, 202.0);
        vaulter.bezierCurveTo(532.5, 204.7, 527.9, 206.5, 525.6, 204.6);
        vaulter.bezierCurveTo(523.0, 202.5, 523.5, 198.0, 526.2, 194.8);
        vaulter.bezierCurveTo(529.1, 191.5, 533.3, 191.9, 535.4, 193.7);
        vaulter.bezierCurveTo(537.4, 195.3, 537.5, 198.7, 534.7, 202.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(369.7, 93.0);
        vaulter.bezierCurveTo(369.7, 93.0, 369.5, 92.0, 368.5, 92.3);
        vaulter.bezierCurveTo(367.6, 92.5, 367.7, 93.4, 367.7, 93.4);
        vaulter.lineTo(425.2, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(369.7, 93.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(536.8, 197.6);
        vaulter.bezierCurveTo(537.0, 195.9, 536.6, 193.3, 532.0, 190.3);
        vaulter.bezierCurveTo(530.7, 189.5, 526.8, 186.6, 526.8, 186.6);
        vaulter.bezierCurveTo(526.8, 186.6, 525.0, 185.5, 523.8, 184.8);
        vaulter.bezierCurveTo(522.6, 184.0, 519.7, 181.8, 517.9, 181.2);
        vaulter.bezierCurveTo(514.2, 177.7, 511.3, 176.2, 502.5, 171.6);
        vaulter.bezierCurveTo(502.5, 171.6, 498.9, 170.6, 496.4, 170.5);
        vaulter.bezierCurveTo(494.9, 170.5, 491.2, 171.9, 491.2, 171.9);
        vaulter.bezierCurveTo(491.2, 171.9, 489.7, 172.3, 489.5, 172.9);
        vaulter.bezierCurveTo(489.2, 173.4, 490.9, 173.2, 491.5, 173.0);
        vaulter.bezierCurveTo(492.5, 172.7, 494.3, 172.5, 495.1, 172.5);
        vaulter.bezierCurveTo(496.0, 172.6, 496.5, 172.4, 496.7, 172.6);
        vaulter.bezierCurveTo(496.7, 172.8, 497.0, 173.2, 496.6, 173.5);
        vaulter.bezierCurveTo(496.2, 173.9, 496.0, 174.4, 495.1, 174.5);
        vaulter.bezierCurveTo(494.4, 174.5, 493.4, 174.9, 493.7, 175.3);
        vaulter.bezierCurveTo(494.0, 175.7, 494.8, 175.6, 495.1, 175.4);
        vaulter.bezierCurveTo(495.4, 175.2, 496.6, 175.4, 497.5, 175.2);
        vaulter.bezierCurveTo(498.2, 175.1, 499.5, 175.1, 499.9, 174.8);
        vaulter.bezierCurveTo(500.3, 174.5, 500.8, 173.6, 500.8, 173.6);
        vaulter.bezierCurveTo(507.1, 178.6, 510.4, 182.8, 514.5, 186.0);
        vaulter.bezierCurveTo(517.1, 188.0, 523.5, 193.6, 523.5, 193.6);
        vaulter.bezierCurveTo(523.5, 193.6, 528.6, 200.4, 530.0, 200.9);
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
        vaulter.moveTo(540.5, 222.5);
        vaulter.bezierCurveTo(539.2, 221.4, 534.9, 220.8, 531.2, 220.9);
        vaulter.bezierCurveTo(528.2, 219.5, 522.6, 216.4, 518.2, 215.8);
        vaulter.bezierCurveTo(500.4, 210.7, 511.3, 213.7, 501.0, 211.1);
        vaulter.bezierCurveTo(501.0, 211.1, 496.0, 206.8, 493.9, 208.4);
        vaulter.bezierCurveTo(493.9, 208.4, 493.2, 208.5, 493.1, 209.0);
        vaulter.bezierCurveTo(493.0, 209.4, 492.9, 209.7, 492.9, 210.0);
        vaulter.bezierCurveTo(492.9, 210.2, 493.1, 210.3, 493.1, 210.7);
        vaulter.bezierCurveTo(493.2, 211.3, 493.9, 211.3, 493.9, 211.3);
        vaulter.bezierCurveTo(493.9, 211.3, 495.2, 211.8, 495.6, 211.8);
        vaulter.bezierCurveTo(496.9, 211.7, 497.2, 212.6, 497.0, 212.6);
        vaulter.bezierCurveTo(496.7, 212.7, 496.0, 212.8, 495.8, 212.8);
        vaulter.bezierCurveTo(495.4, 212.7, 493.9, 212.4, 494.3, 213.2);
        vaulter.bezierCurveTo(494.5, 213.6, 496.9, 213.9, 497.6, 213.9);
        vaulter.bezierCurveTo(498.6, 214.0, 499.9, 213.7, 501.0, 213.3);
        vaulter.bezierCurveTo(501.0, 213.3, 511.5, 219.2, 517.1, 220.4);
        vaulter.bezierCurveTo(517.1, 220.4, 520.6, 222.2, 523.4, 223.2);
        vaulter.bezierCurveTo(526.1, 224.2, 528.5, 225.1, 528.5, 225.1);
        vaulter.bezierCurveTo(528.5, 225.1, 530.4, 227.9, 535.8, 230.4);
        vaulter.bezierCurveTo(539.0, 231.8, 541.3, 229.0, 541.9, 227.8);
        vaulter.bezierCurveTo(543.2, 225.2, 541.9, 223.5, 540.5, 222.5);
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
        vaulter.moveTo(520.2, 240.4);
        vaulter.bezierCurveTo(514.1, 232.3, 501.4, 225.8, 498.6, 226.7);
        vaulter.bezierCurveTo(495.4, 227.7, 493.6, 233.2, 492.0, 235.4);
        vaulter.bezierCurveTo(490.5, 237.6, 485.7, 243.1, 485.7, 243.1);
        vaulter.bezierCurveTo(482.2, 240.7, 475.5, 239.9, 475.5, 239.9);
        vaulter.bezierCurveTo(474.6, 238.7, 472.2, 238.7, 472.0, 239.6);
        vaulter.bezierCurveTo(471.9, 240.6, 474.4, 242.2, 475.6, 242.7);
        vaulter.bezierCurveTo(476.9, 243.1, 481.5, 246.9, 483.2, 249.0);
        vaulter.bezierCurveTo(485.0, 251.2, 486.8, 249.8, 487.8, 248.8);
        vaulter.bezierCurveTo(488.7, 247.9, 488.8, 245.9, 488.8, 245.9);
        vaulter.bezierCurveTo(498.6, 239.6, 499.9, 239.1, 500.9, 236.4);
        vaulter.bezierCurveTo(500.9, 236.4, 503.0, 238.9, 504.3, 241.7);
        vaulter.bezierCurveTo(505.6, 244.5, 508.5, 246.2, 512.2, 249.5);
        vaulter.bezierCurveTo(516.0, 252.8, 520.2, 252.1, 524.8, 245.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(537.5, 219.9);
        vaulter.bezierCurveTo(537.5, 219.9, 538.1, 218.4, 539.4, 216.0);
        vaulter.bezierCurveTo(539.8, 215.2, 540.3, 214.4, 540.9, 213.5);
        vaulter.bezierCurveTo(543.3, 209.8, 548.9, 208.2, 552.5, 211.2);
        vaulter.bezierCurveTo(556.3, 214.4, 555.0, 219.7, 552.1, 222.4);
        vaulter.bezierCurveTo(550.7, 223.7, 547.3, 223.5, 545.2, 224.5);
        vaulter.bezierCurveTo(542.9, 225.6, 542.0, 227.8, 542.0, 227.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(527.3, 222.1);
        vaulter.bezierCurveTo(525.2, 224.5, 523.6, 228.9, 518.6, 233.6);
        vaulter.bezierCurveTo(514.9, 237.2, 514.7, 238.5, 513.7, 239.8);
        vaulter.bezierCurveTo(511.9, 242.6, 512.0, 243.3, 515.0, 246.4);
        vaulter.bezierCurveTo(518.0, 249.5, 519.6, 249.0, 521.9, 248.2);
        vaulter.bezierCurveTo(523.2, 247.8, 526.5, 242.8, 530.2, 240.7);
        vaulter.bezierCurveTo(532.9, 239.2, 539.1, 234.3, 540.9, 232.7);
        vaulter.bezierCurveTo(542.3, 231.3, 542.7, 228.3, 543.1, 227.2);
        vaulter.bezierCurveTo(543.8, 225.1, 541.8, 222.7, 538.2, 220.3);
        vaulter.bezierCurveTo(535.0, 218.2, 529.5, 219.6, 527.3, 222.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(520.7, 240.6);
        vaulter.bezierCurveTo(520.7, 240.6, 514.1, 234.1, 511.3, 232.5);
        vaulter.bezierCurveTo(508.6, 230.9, 503.8, 227.3, 501.6, 227.2);
        vaulter.bezierCurveTo(500.9, 227.2, 500.2, 227.5, 498.2, 228.2);
        vaulter.bezierCurveTo(493.6, 229.9, 488.3, 236.8, 485.6, 241.8);
        vaulter.bezierCurveTo(481.2, 242.6, 477.4, 239.5, 474.2, 239.4);
        vaulter.bezierCurveTo(474.2, 239.4, 472.0, 238.6, 471.5, 239.6);
        vaulter.bezierCurveTo(470.9, 240.5, 474.7, 243.8, 478.2, 244.8);
        vaulter.bezierCurveTo(481.8, 245.8, 483.8, 247.7, 484.6, 248.2);
        vaulter.bezierCurveTo(485.4, 248.7, 487.7, 248.6, 488.4, 247.8);
        vaulter.bezierCurveTo(488.9, 247.1, 489.4, 245.7, 490.0, 244.9);
        vaulter.bezierCurveTo(495.7, 239.2, 496.5, 239.7, 500.6, 237.0);
        vaulter.bezierCurveTo(502.7, 240.5, 505.0, 243.4, 512.7, 249.9);
        vaulter.bezierCurveTo(517.6, 253.9, 522.5, 249.2, 524.8, 245.4);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(541.1, 231.0);
        vaulter.bezierCurveTo(538.9, 233.6, 534.4, 235.4, 532.0, 233.5);
        vaulter.bezierCurveTo(529.5, 231.4, 530.0, 226.9, 532.7, 223.8);
        vaulter.bezierCurveTo(535.5, 220.4, 539.7, 220.8, 541.9, 222.6);
        vaulter.bezierCurveTo(543.9, 224.2, 543.9, 227.6, 541.1, 231.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(361.5, 98.1);
        vaulter.bezierCurveTo(361.5, 98.1, 361.3, 97.2, 360.3, 97.4);
        vaulter.bezierCurveTo(359.3, 97.7, 359.6, 98.6, 359.6, 98.6);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.2, 345.1);
        vaulter.lineTo(361.5, 98.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(542.9, 224.3);
        vaulter.bezierCurveTo(542.3, 222.8, 540.8, 221.1, 536.8, 219.7);
        vaulter.bezierCurveTo(535.3, 219.2, 530.8, 217.4, 530.8, 217.4);
        vaulter.bezierCurveTo(530.8, 217.4, 528.8, 216.8, 527.4, 216.3);
        vaulter.bezierCurveTo(526.1, 215.9, 522.7, 214.5, 520.9, 214.4);
        vaulter.bezierCurveTo(516.4, 211.9, 513.3, 211.1, 503.6, 208.9);
        vaulter.bezierCurveTo(503.6, 208.9, 499.8, 208.8, 497.4, 209.3);
        vaulter.bezierCurveTo(495.9, 209.6, 492.7, 211.9, 492.7, 211.9);
        vaulter.bezierCurveTo(492.7, 211.9, 491.3, 212.7, 491.2, 213.3);
        vaulter.bezierCurveTo(491.2, 213.9, 492.7, 213.3, 493.2, 213.0);
        vaulter.bezierCurveTo(494.2, 212.4, 495.8, 211.8, 496.6, 211.6);
        vaulter.bezierCurveTo(497.5, 211.4, 498.0, 211.1, 498.2, 211.3);
        vaulter.bezierCurveTo(498.2, 211.4, 498.6, 211.8, 498.3, 212.2);
        vaulter.bezierCurveTo(498.0, 212.7, 497.9, 213.2, 497.1, 213.5);
        vaulter.bezierCurveTo(496.5, 213.6, 495.6, 214.3, 495.9, 214.6);
        vaulter.bezierCurveTo(496.3, 214.9, 497.1, 214.6, 497.3, 214.4);
        vaulter.bezierCurveTo(497.6, 214.2, 498.8, 214.0, 499.6, 213.6);
        vaulter.bezierCurveTo(500.3, 213.3, 501.6, 213.0, 501.9, 212.6);
        vaulter.bezierCurveTo(502.1, 212.3, 502.4, 211.3, 502.4, 211.3);
        vaulter.bezierCurveTo(509.8, 214.5, 514.0, 217.7, 518.7, 219.8);
        vaulter.bezierCurveTo(521.7, 221.1, 529.3, 225.0, 529.3, 225.0);
        vaulter.bezierCurveTo(529.3, 225.0, 534.9, 229.4, 537.0, 230.3);
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
        vaulter.moveTo(546.5, 256.9);
        vaulter.bezierCurveTo(546.1, 255.2, 544.9, 252.6, 538.8, 251.9);
        vaulter.bezierCurveTo(537.3, 251.7, 532.5, 250.9, 532.5, 250.9);
        vaulter.bezierCurveTo(532.5, 250.9, 530.4, 250.7, 529.0, 250.6);
        vaulter.bezierCurveTo(527.6, 250.4, 524.0, 249.7, 522.2, 250.0);
        vaulter.bezierCurveTo(517.2, 248.5, 514.0, 248.4, 504.1, 248.3);
        vaulter.bezierCurveTo(504.1, 248.3, 500.9, 247.8, 498.4, 247.9);
        vaulter.bezierCurveTo(496.9, 248.0, 494.1, 248.8, 494.1, 248.8);
        vaulter.bezierCurveTo(494.1, 248.8, 491.8, 250.2, 491.6, 250.8);
        vaulter.bezierCurveTo(491.5, 251.4, 493.6, 251.4, 494.2, 251.1);
        vaulter.bezierCurveTo(495.2, 250.7, 496.6, 249.7, 497.4, 249.7);
        vaulter.bezierCurveTo(498.3, 249.6, 498.7, 249.7, 498.8, 250.0);
        vaulter.bezierCurveTo(498.9, 250.1, 499.1, 250.6, 498.8, 250.9);
        vaulter.bezierCurveTo(498.4, 251.3, 498.2, 251.9, 497.3, 252.1);
        vaulter.bezierCurveTo(496.7, 252.3, 495.8, 253.0, 496.2, 253.3);
        vaulter.bezierCurveTo(496.5, 253.6, 497.4, 253.3, 497.6, 253.1);
        vaulter.bezierCurveTo(497.8, 252.8, 499.0, 252.8, 499.8, 252.4);
        vaulter.bezierCurveTo(500.5, 252.1, 500.8, 251.5, 500.8, 251.5);
        vaulter.lineTo(501.3, 250.8);
        vaulter.bezierCurveTo(509.2, 252.4, 516.1, 254.8, 521.2, 255.8);
        vaulter.bezierCurveTo(524.4, 256.4, 532.6, 258.6, 532.6, 258.6);
        vaulter.bezierCurveTo(532.6, 258.6, 540.3, 262.4, 541.8, 262.2);
        vaulter.bezierCurveTo(544.9, 261.8, 547.0, 258.5, 546.5, 256.9);
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
        vaulter.moveTo(522.4, 269.6);
        vaulter.bezierCurveTo(522.7, 259.5, 517.0, 246.4, 514.3, 245.4);
        vaulter.bezierCurveTo(511.1, 244.1, 504.8, 250.8, 503.1, 253.0);
        vaulter.bezierCurveTo(501.5, 255.2, 497.3, 260.8, 497.3, 260.8);
        vaulter.bezierCurveTo(493.9, 258.3, 487.3, 257.2, 487.3, 257.2);
        vaulter.bezierCurveTo(486.5, 256.0, 484.0, 255.9, 483.8, 256.8);
        vaulter.bezierCurveTo(483.6, 257.7, 486.1, 259.5, 487.3, 260.0);
        vaulter.bezierCurveTo(488.5, 260.5, 492.9, 264.5, 494.6, 266.7);
        vaulter.bezierCurveTo(496.3, 268.9, 498.1, 267.6, 499.1, 266.7);
        vaulter.bezierCurveTo(500.2, 265.8, 500.3, 263.8, 500.3, 263.8);
        vaulter.bezierCurveTo(510.4, 257.9, 507.1, 258.5, 509.5, 257.0);
        vaulter.bezierCurveTo(509.5, 257.0, 509.4, 257.5, 509.2, 260.6);
        vaulter.bezierCurveTo(509.0, 263.7, 509.6, 266.8, 510.5, 271.7);
        vaulter.bezierCurveTo(511.3, 276.6, 516.8, 277.4, 522.4, 274.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(542.9, 252.5);
        vaulter.bezierCurveTo(542.9, 252.5, 544.6, 250.5, 546.2, 248.7);
        vaulter.bezierCurveTo(546.8, 248.1, 547.4, 247.0, 548.1, 246.3);
        vaulter.bezierCurveTo(551.0, 243.6, 556.2, 243.5, 558.7, 246.8);
        vaulter.bezierCurveTo(561.4, 250.5, 559.1, 254.8, 556.0, 256.5);
        vaulter.bezierCurveTo(554.5, 257.4, 551.5, 256.5, 549.4, 256.9);
        vaulter.bezierCurveTo(547.2, 257.4, 546.0, 259.1, 546.0, 259.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(532.3, 252.6);
        vaulter.bezierCurveTo(529.6, 254.5, 526.8, 257.0, 520.8, 260.5);
        vaulter.bezierCurveTo(516.4, 263.1, 515.9, 264.3, 514.6, 265.4);
        vaulter.bezierCurveTo(512.1, 267.6, 512.1, 268.3, 514.3, 272.0);
        vaulter.bezierCurveTo(516.4, 275.7, 518.1, 275.7, 520.5, 275.4);
        vaulter.bezierCurveTo(521.9, 275.3, 526.3, 271.3, 530.4, 270.1);
        vaulter.bezierCurveTo(533.3, 269.3, 540.6, 266.1, 542.6, 264.9);
        vaulter.bezierCurveTo(544.4, 263.9, 545.5, 261.1, 546.2, 260.1);
        vaulter.bezierCurveTo(547.3, 258.2, 546.8, 254.3, 543.0, 252.2);
        vaulter.bezierCurveTo(539.9, 250.4, 534.9, 250.8, 532.3, 252.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(522.7, 269.8);
        vaulter.bezierCurveTo(522.7, 269.8, 521.6, 260.7, 520.4, 257.7);
        vaulter.bezierCurveTo(519.2, 254.7, 517.6, 248.9, 515.9, 247.5);
        vaulter.bezierCurveTo(515.4, 247.1, 514.7, 246.9, 512.6, 246.3);
        vaulter.bezierCurveTo(508.0, 244.7, 499.8, 252.9, 495.8, 257.1);
        vaulter.bezierCurveTo(491.4, 256.9, 487.7, 252.5, 484.6, 251.6);
        vaulter.bezierCurveTo(484.6, 251.6, 482.7, 250.4, 481.9, 251.2);
        vaulter.bezierCurveTo(481.1, 252.0, 484.0, 256.0, 487.2, 257.8);
        vaulter.bezierCurveTo(490.4, 259.7, 491.9, 262.0, 492.5, 262.7);
        vaulter.bezierCurveTo(493.2, 263.4, 495.5, 263.9, 496.3, 263.2);
        vaulter.bezierCurveTo(497.0, 262.6, 497.9, 261.4, 498.6, 260.8);
        vaulter.bezierCurveTo(504.2, 257.2, 505.3, 258.4, 509.7, 255.3);
        vaulter.bezierCurveTo(509.2, 259.4, 508.6, 262.4, 510.7, 272.2);
        vaulter.bezierCurveTo(512.0, 278.4, 519.1, 276.8, 523.0, 274.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(542.8, 263.1);
        vaulter.bezierCurveTo(540.2, 265.3, 535.4, 266.3, 533.4, 264.1);
        vaulter.bezierCurveTo(531.2, 261.6, 532.4, 257.2, 535.6, 254.5);
        vaulter.bezierCurveTo(539.0, 251.7, 543.1, 252.8, 544.9, 254.9);
        vaulter.bezierCurveTo(546.6, 256.8, 546.1, 260.2, 542.8, 263.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(353.8, 104.4);
        vaulter.bezierCurveTo(353.8, 104.4, 353.4, 103.7, 352.8, 103.8);
        vaulter.bezierCurveTo(352.2, 103.9, 352.3, 104.9, 352.3, 104.9);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.1, 345.1);
        vaulter.lineTo(353.8, 104.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(545.8, 258.5);
        vaulter.bezierCurveTo(546.2, 256.7, 545.2, 255.4, 544.2, 254.5);
        vaulter.bezierCurveTo(542.9, 253.4, 538.8, 252.5, 535.1, 252.3);
        vaulter.bezierCurveTo(532.1, 250.6, 526.8, 247.1, 522.4, 246.3);
        vaulter.bezierCurveTo(505.0, 239.9, 515.7, 243.7, 505.6, 240.3);
        vaulter.bezierCurveTo(505.6, 240.3, 502.6, 238.5, 500.0, 238.2);
        vaulter.bezierCurveTo(499.0, 238.2, 495.8, 239.1, 495.6, 239.2);
        vaulter.bezierCurveTo(495.4, 239.3, 495.1, 239.9, 495.1, 239.9);
        vaulter.bezierCurveTo(495.1, 239.9, 495.0, 240.1, 495.2, 240.5);
        vaulter.bezierCurveTo(495.4, 240.9, 496.2, 241.5, 496.7, 241.4);
        vaulter.bezierCurveTo(497.2, 241.3, 499.0, 240.1, 499.0, 240.1);
        vaulter.bezierCurveTo(499.0, 240.1, 500.1, 239.9, 500.4, 239.9);
        vaulter.bezierCurveTo(501.7, 240.0, 501.8, 241.1, 501.7, 241.3);
        vaulter.bezierCurveTo(501.7, 241.6, 500.0, 242.3, 499.8, 242.3);
        vaulter.bezierCurveTo(499.4, 242.1, 498.4, 242.4, 498.6, 243.1);
        vaulter.bezierCurveTo(498.7, 243.3, 499.4, 243.3, 499.8, 243.3);
        vaulter.bezierCurveTo(500.6, 243.2, 501.6, 242.8, 502.0, 242.9);
        vaulter.bezierCurveTo(503.0, 243.1, 504.3, 242.8, 505.4, 242.6);
        vaulter.bezierCurveTo(505.4, 242.6, 515.4, 249.2, 521.0, 250.8);
        vaulter.bezierCurveTo(521.0, 250.8, 524.4, 252.8, 527.1, 254.0);
        vaulter.bezierCurveTo(529.7, 255.2, 532.1, 256.3, 532.1, 256.3);
        vaulter.bezierCurveTo(532.1, 256.3, 533.0, 257.9, 535.6, 259.9);
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
        vaulter.moveTo(545.0, 289.7);
        vaulter.bezierCurveTo(543.7, 289.0, 539.8, 289.0, 536.6, 289.5);
        vaulter.bezierCurveTo(533.6, 288.7, 528.3, 286.6, 524.3, 286.7);
        vaulter.bezierCurveTo(507.7, 284.5, 517.9, 285.8, 508.3, 284.8);
        vaulter.bezierCurveTo(508.3, 284.8, 505.4, 283.8, 503.0, 284.1);
        vaulter.bezierCurveTo(502.2, 284.2, 499.5, 285.6, 499.3, 285.7);
        vaulter.bezierCurveTo(499.2, 285.9, 499.0, 286.5, 499.0, 286.5);
        vaulter.bezierCurveTo(499.0, 286.5, 499.0, 286.7, 499.2, 287.0);
        vaulter.bezierCurveTo(499.5, 287.3, 500.3, 287.7, 500.8, 287.5);
        vaulter.bezierCurveTo(501.2, 287.3, 502.5, 285.9, 502.5, 285.9);
        vaulter.bezierCurveTo(502.5, 285.9, 503.4, 285.5, 503.7, 285.5);
        vaulter.bezierCurveTo(504.9, 285.2, 505.1, 286.2, 505.1, 286.4);
        vaulter.bezierCurveTo(505.1, 286.7, 503.8, 287.6, 503.7, 287.6);
        vaulter.bezierCurveTo(503.2, 287.6, 502.4, 288.0, 502.8, 288.6);
        vaulter.bezierCurveTo(502.9, 288.8, 503.5, 288.7, 503.9, 288.5);
        vaulter.bezierCurveTo(504.5, 288.3, 505.3, 287.8, 505.7, 287.8);
        vaulter.bezierCurveTo(506.6, 287.7, 507.7, 287.2, 508.6, 286.8);
        vaulter.bezierCurveTo(508.6, 286.8, 518.7, 290.6, 523.9, 291.0);
        vaulter.bezierCurveTo(523.9, 291.0, 527.3, 292.1, 529.9, 292.6);
        vaulter.bezierCurveTo(532.4, 293.1, 534.7, 293.7, 534.7, 293.7);
        vaulter.bezierCurveTo(534.7, 293.7, 536.7, 295.9, 541.9, 297.4);
        vaulter.bezierCurveTo(544.9, 298.2, 546.6, 295.4, 547.0, 294.3);
        vaulter.bezierCurveTo(547.7, 291.8, 546.4, 290.5, 545.0, 289.7);
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
        vaulter.moveTo(523.6, 294.6);
        vaulter.bezierCurveTo(523.9, 285.4, 518.7, 273.7, 516.3, 272.7);
        vaulter.bezierCurveTo(513.5, 271.6, 509.2, 272.3, 506.7, 272.5);
        vaulter.bezierCurveTo(504.3, 272.8, 498.0, 273.6, 498.0, 273.6);
        vaulter.bezierCurveTo(493.4, 268.8, 488.0, 267.9, 488.0, 267.9);
        vaulter.bezierCurveTo(487.5, 266.6, 485.3, 266.1, 485.0, 266.9);
        vaulter.bezierCurveTo(484.7, 267.7, 486.5, 269.6, 487.5, 270.3);
        vaulter.bezierCurveTo(488.5, 271.0, 491.3, 274.4, 492.4, 276.6);
        vaulter.bezierCurveTo(492.4, 276.6, 494.1, 278.4, 495.4, 278.5);
        vaulter.bezierCurveTo(496.6, 278.6, 498.1, 276.9, 498.1, 276.9);
        vaulter.bezierCurveTo(508.2, 279.8, 510.4, 278.7, 512.6, 277.4);
        vaulter.bezierCurveTo(512.6, 277.4, 512.9, 284.0, 512.7, 286.8);
        vaulter.bezierCurveTo(512.5, 289.5, 512.1, 292.0, 512.9, 296.4);
        vaulter.bezierCurveTo(513.6, 300.8, 518.6, 301.6, 523.6, 299.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(546.3, 288.6);
        vaulter.bezierCurveTo(546.3, 288.6, 548.6, 287.3, 550.8, 286.2);
        vaulter.bezierCurveTo(551.5, 285.9, 552.5, 285.2, 553.4, 284.8);
        vaulter.bezierCurveTo(557.1, 283.3, 562.0, 285.1, 563.1, 289.2);
        vaulter.bezierCurveTo(564.2, 293.6, 560.5, 296.7, 557.0, 297.2);
        vaulter.bezierCurveTo(555.3, 297.4, 552.8, 295.5, 550.7, 295.1);
        vaulter.bezierCurveTo(548.5, 294.7, 546.7, 295.8, 546.7, 295.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(537.6, 284.6);
        vaulter.bezierCurveTo(534.8, 285.2, 531.3, 287.6, 525.2, 288.5);
        vaulter.bezierCurveTo(520.6, 289.1, 519.8, 289.9, 518.4, 290.5);
        vaulter.bezierCurveTo(515.6, 291.5, 515.3, 292.1, 515.9, 295.9);
        vaulter.bezierCurveTo(516.4, 299.7, 517.9, 300.2, 519.9, 300.8);
        vaulter.bezierCurveTo(521.2, 301.2, 526.1, 299.3, 530.0, 299.7);
        vaulter.bezierCurveTo(532.7, 300.0, 539.9, 299.7, 542.0, 299.4);
        vaulter.bezierCurveTo(543.7, 299.2, 545.6, 297.2, 546.5, 296.6);
        vaulter.bezierCurveTo(548.1, 295.4, 547.9, 292.6, 546.5, 288.9);
        vaulter.bezierCurveTo(545.3, 285.7, 540.5, 283.9, 537.6, 284.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(523.9, 294.8);
        vaulter.bezierCurveTo(523.9, 294.8, 522.9, 286.5, 521.8, 283.8);
        vaulter.bezierCurveTo(520.7, 281.2, 519.3, 276.0, 517.8, 274.7);
        vaulter.bezierCurveTo(517.4, 274.3, 516.7, 274.2, 514.8, 273.6);
        vaulter.bezierCurveTo(510.6, 272.2, 503.5, 275.2, 498.8, 277.4);
        vaulter.bezierCurveTo(495.2, 275.6, 490.5, 272.7, 487.7, 271.9);
        vaulter.bezierCurveTo(487.7, 271.9, 486.0, 270.8, 485.3, 271.5);
        vaulter.bezierCurveTo(484.6, 272.2, 487.2, 275.9, 490.1, 277.5);
        vaulter.bezierCurveTo(492.9, 279.2, 494.3, 281.3, 494.9, 281.9);
        vaulter.bezierCurveTo(495.4, 282.5, 496.2, 282.9, 497.2, 282.6);
        vaulter.bezierCurveTo(497.9, 282.3, 499.1, 281.6, 499.9, 281.4);
        vaulter.bezierCurveTo(505.7, 280.2, 509.1, 281.7, 513.1, 279.0);
        vaulter.bezierCurveTo(512.6, 282.6, 511.2, 288.0, 513.1, 296.9);
        vaulter.bezierCurveTo(514.3, 302.5, 520.6, 301.0, 524.1, 298.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(541.5, 298.6);
        vaulter.bezierCurveTo(538.1, 299.2, 533.5, 297.6, 533.0, 294.6);
        vaulter.bezierCurveTo(532.4, 291.4, 535.7, 288.3, 539.9, 287.6);
        vaulter.bezierCurveTo(544.2, 287.0, 547.1, 290.0, 547.6, 292.8);
        vaulter.bezierCurveTo(548.0, 295.3, 545.9, 297.9, 541.5, 298.6);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(344.2, 110.4);
        vaulter.bezierCurveTo(344.2, 110.4, 343.8, 109.7, 343.2, 109.8);
        vaulter.bezierCurveTo(342.6, 110.0, 342.8, 110.9, 342.8, 110.9);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.2, 345.1);
        vaulter.lineTo(344.2, 110.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Path
        vaulter.beginPath();
        vaulter.moveTo(547.7, 294.5);
        vaulter.bezierCurveTo(548.0, 294.0, 548.2, 293.4, 548.1, 292.9);
        vaulter.bezierCurveTo(547.8, 291.4, 547.0, 289.0, 541.6, 287.8);
        vaulter.bezierCurveTo(540.2, 287.5, 536.0, 286.3, 536.0, 286.3);
        vaulter.bezierCurveTo(536.0, 286.3, 534.2, 286.0, 532.9, 285.7);
        vaulter.bezierCurveTo(531.7, 285.4, 528.5, 284.5, 526.9, 284.6);
        vaulter.bezierCurveTo(522.6, 282.8, 519.7, 282.4, 510.8, 281.4);
        vaulter.bezierCurveTo(510.8, 281.4, 508.0, 280.7, 505.8, 280.6);
        vaulter.bezierCurveTo(504.4, 280.5, 501.9, 281.0, 501.9, 281.0);
        vaulter.bezierCurveTo(501.9, 281.0, 499.7, 282.1, 499.5, 282.5);
        vaulter.bezierCurveTo(499.2, 283.0, 501.2, 283.2, 501.7, 283.1);
        vaulter.bezierCurveTo(502.7, 282.8, 504.0, 282.0, 504.7, 282.0);
        vaulter.bezierCurveTo(505.5, 282.1, 505.8, 282.2, 505.9, 282.5);
        vaulter.bezierCurveTo(506.0, 282.6, 506.2, 283.0, 505.9, 283.3);
        vaulter.bezierCurveTo(505.5, 283.6, 505.2, 284.1, 504.4, 284.3);
        vaulter.bezierCurveTo(503.9, 284.4, 503.0, 284.9, 503.3, 285.2);
        vaulter.bezierCurveTo(503.6, 285.5, 504.4, 285.3, 504.6, 285.1);
        vaulter.bezierCurveTo(504.8, 284.9, 505.9, 285.0, 506.6, 284.7);
        vaulter.bezierCurveTo(507.2, 284.5, 507.6, 284.0, 507.6, 284.0);
        vaulter.lineTo(508.1, 283.4);
        vaulter.bezierCurveTo(515.0, 285.6, 521.0, 288.3, 525.5, 289.7);
        vaulter.bezierCurveTo(528.3, 290.5, 535.5, 293.2, 535.5, 293.2);
        vaulter.bezierCurveTo(535.5, 293.2, 537.8, 294.7, 539.9, 295.9);
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
        vaulter.moveTo(332.8, 119.6);
        vaulter.bezierCurveTo(332.8, 119.6, 332.6, 119.1, 332.1, 119.2);
        vaulter.bezierCurveTo(331.5, 119.4, 331.7, 120.1, 331.7, 120.1);
        vaulter.lineTo(425.1, 345.1);
        vaulter.lineTo(427.2, 345.1);
        vaulter.lineTo(332.8, 119.6);
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
        vaulter.moveTo(545.9, 302.8);
        vaulter.bezierCurveTo(545.9, 302.8, 547.0, 300.4, 548.1, 298.2);
        vaulter.bezierCurveTo(548.4, 297.5, 548.7, 296.3, 549.2, 295.5);
        vaulter.bezierCurveTo(551.3, 292.1, 556.3, 290.5, 559.6, 293.1);
        vaulter.bezierCurveTo(563.1, 295.9, 562.1, 300.6, 559.6, 303.1);
        vaulter.bezierCurveTo(558.4, 304.4, 555.3, 304.3, 553.4, 305.3);
        vaulter.bezierCurveTo(551.4, 306.3, 550.6, 308.3, 550.6, 308.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(487.1, 302.3);
        vaulter.bezierCurveTo(486.3, 297.6, 484.9, 295.1, 484.9, 295.1);
        vaulter.bezierCurveTo(484.8, 293.6, 484.0, 292.0, 483.2, 292.4);
        vaulter.bezierCurveTo(482.9, 292.6, 482.7, 293.4, 482.7, 294.2);
        vaulter.bezierCurveTo(483.6, 296.4, 484.1, 299.2, 485.2, 303.0);
        vaulter.bezierCurveTo(485.8, 302.8, 486.4, 302.5, 487.1, 302.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(504.8, 301.9);
        vaulter.bezierCurveTo(506.7, 302.3, 512.6, 303.7, 515.2, 304.6);
        vaulter.bezierCurveTo(516.0, 304.8, 517.1, 305.3, 518.2, 306.0);
        vaulter.bezierCurveTo(519.1, 306.1, 519.9, 306.2, 520.7, 306.4);
        vaulter.bezierCurveTo(514.1, 301.7, 505.4, 299.1, 503.3, 299.6);
        vaulter.bezierCurveTo(501.2, 300.1, 499.4, 300.3, 497.7, 300.7);
        vaulter.bezierCurveTo(499.3, 300.8, 500.8, 301.0, 502.0, 301.6);
        vaulter.bezierCurveTo(502.6, 301.9, 504.2, 301.7, 504.8, 301.9);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(532.7, 306.2);
        vaulter.bezierCurveTo(533.9, 305.7, 535.6, 305.0, 535.6, 305.0);
        vaulter.bezierCurveTo(535.6, 305.0, 539.8, 303.9, 541.2, 303.4);
        vaulter.bezierCurveTo(545.1, 302.1, 547.2, 302.7, 548.4, 303.6);
        vaulter.bezierCurveTo(548.2, 303.1, 548.1, 302.4, 547.6, 302.2);
        vaulter.bezierCurveTo(544.2, 300.3, 539.3, 300.1, 536.6, 301.2);
        vaulter.bezierCurveTo(534.0, 302.4, 532.4, 303.5, 526.6, 305.5);
        vaulter.bezierCurveTo(525.2, 306.0, 524.1, 306.4, 523.3, 306.8);
        vaulter.bezierCurveTo(525.1, 307.0, 526.9, 307.3, 528.7, 307.5);
        vaulter.bezierCurveTo(530.1, 306.9, 531.8, 306.5, 532.7, 306.2);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(515.2, 304.6);
        vaulter.bezierCurveTo(512.6, 303.7, 506.7, 302.3, 504.8, 301.9);
        vaulter.bezierCurveTo(504.2, 301.7, 502.6, 301.9, 502.0, 301.6);
        vaulter.bezierCurveTo(500.8, 301.0, 499.3, 300.8, 497.7, 300.7);
        vaulter.bezierCurveTo(494.3, 300.5, 490.3, 301.2, 487.1, 302.3);
        vaulter.bezierCurveTo(486.4, 302.5, 485.8, 302.8, 485.2, 303.0);
        vaulter.bezierCurveTo(484.1, 299.2, 483.6, 296.4, 482.7, 294.2);
        vaulter.bezierCurveTo(482.5, 293.7, 482.3, 293.2, 482.0, 292.8);
        vaulter.bezierCurveTo(482.0, 292.8, 481.5, 290.8, 480.5, 290.8);
        vaulter.bezierCurveTo(479.5, 290.9, 478.9, 295.3, 479.9, 298.5);
        vaulter.bezierCurveTo(480.8, 301.4, 480.4, 302.9, 480.4, 304.2);
        vaulter.bezierCurveTo(480.4, 305.0, 484.4, 304.7, 484.4, 304.7);
        vaulter.bezierCurveTo(487.5, 304.3, 493.3, 304.4, 495.4, 303.6);
        vaulter.bezierCurveTo(503.3, 303.6, 510.8, 304.8, 518.2, 306.0);
        vaulter.bezierCurveTo(517.1, 305.3, 516.0, 304.8, 515.2, 304.6);
        vaulter.closePath();
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(528.7, 307.5);
        vaulter.bezierCurveTo(530.4, 307.7, 532.1, 307.9, 533.8, 308.0);
        vaulter.bezierCurveTo(538.5, 308.3, 543.2, 308.3, 548.0, 307.6);
        vaulter.bezierCurveTo(548.6, 307.6, 550.0, 307.3, 550.0, 307.3);
        vaulter.lineTo(549.9, 306.0);
        vaulter.bezierCurveTo(549.8, 305.4, 549.7, 304.8, 549.4, 304.4);
        vaulter.bezierCurveTo(549.1, 304.2, 548.8, 303.8, 548.4, 303.6);
        vaulter.bezierCurveTo(547.2, 302.7, 545.1, 302.1, 541.2, 303.4);
        vaulter.bezierCurveTo(539.8, 303.9, 535.6, 305.0, 535.6, 305.0);
        vaulter.bezierCurveTo(535.6, 305.0, 533.9, 305.7, 532.7, 306.2);
        vaulter.bezierCurveTo(531.8, 306.5, 530.1, 306.9, 528.7, 307.5);
        vaulter.fill();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(528.7, 307.5);
        vaulter.bezierCurveTo(530.1, 306.9, 531.8, 306.5, 532.7, 306.2);
        vaulter.bezierCurveTo(533.9, 305.7, 535.6, 305.0, 535.6, 305.0);
        vaulter.bezierCurveTo(535.6, 305.0, 539.8, 303.9, 541.2, 303.4);
        vaulter.bezierCurveTo(545.1, 302.1, 547.2, 302.7, 548.4, 303.6);
        vaulter.bezierCurveTo(548.2, 303.1, 548.1, 302.4, 547.6, 302.2);
        vaulter.bezierCurveTo(544.2, 300.3, 539.3, 300.1, 536.6, 301.2);
        vaulter.bezierCurveTo(534.0, 302.4, 532.4, 303.5, 526.6, 305.5);
        vaulter.bezierCurveTo(525.2, 306.0, 524.1, 306.4, 523.3, 306.8);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(518.2, 306.0);
        vaulter.bezierCurveTo(517.1, 305.3, 516.0, 304.8, 515.2, 304.6);
        vaulter.bezierCurveTo(512.6, 303.7, 506.7, 302.3, 504.8, 301.9);
        vaulter.bezierCurveTo(504.2, 301.7, 502.6, 301.9, 502.0, 301.6);
        vaulter.bezierCurveTo(500.8, 301.0, 499.3, 300.8, 497.7, 300.7);
        vaulter.bezierCurveTo(494.3, 300.5, 490.3, 301.2, 487.1, 302.3);
        vaulter.bezierCurveTo(486.4, 302.5, 485.8, 302.8, 485.2, 303.0);
        vaulter.bezierCurveTo(484.1, 299.2, 483.6, 296.4, 482.7, 294.2);
        vaulter.bezierCurveTo(482.5, 293.7, 482.3, 293.2, 482.0, 292.8);
        vaulter.bezierCurveTo(482.0, 292.8, 481.5, 290.8, 480.5, 290.8);
        vaulter.bezierCurveTo(479.5, 290.9, 478.9, 295.3, 479.9, 298.5);
        vaulter.bezierCurveTo(480.6, 300.9, 480.5, 302.8, 480.5, 304.2);
        vaulter.stroke();

        // vaulter/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(550.0, 307.3);
        vaulter.lineTo(549.9, 306.0);
        vaulter.bezierCurveTo(549.8, 305.4, 549.7, 304.8, 549.4, 304.4);
        vaulter.bezierCurveTo(549.1, 304.2, 548.8, 303.8, 548.4, 303.6);
        vaulter.bezierCurveTo(547.2, 302.7, 545.1, 302.1, 541.2, 303.4);
        vaulter.bezierCurveTo(539.8, 303.9, 535.6, 305.0, 535.6, 305.0);
        vaulter.bezierCurveTo(535.6, 305.0, 533.9, 305.7, 532.7, 306.2);
        vaulter.bezierCurveTo(531.8, 306.5, 530.1, 306.9, 528.7, 307.5);
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

        // vaulter/runup/Group
        vaulter.save();

        // vaulter/runup/Group/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(191.2, 303.9);
        vaulter.bezierCurveTo(190.0, 307.5, 183.9, 318.0, 181.4, 318.7);
        vaulter.bezierCurveTo(178.9, 319.3, 168.2, 314.8, 168.2, 314.8);
        vaulter.bezierCurveTo(168.2, 314.8, 160.7, 312.7, 154.5, 313.5);
        vaulter.bezierCurveTo(148.2, 314.4, 146.9, 316.2, 145.7, 316.2);
        vaulter.bezierCurveTo(144.6, 316.2, 144.2, 314.9, 144.2, 314.9);
        vaulter.bezierCurveTo(145.0, 314.3, 153.6, 305.8, 155.1, 305.7);
        vaulter.bezierCurveTo(156.6, 305.5, 157.6, 307.3, 157.6, 307.3);
        vaulter.bezierCurveTo(157.6, 307.3, 160.2, 308.7, 163.7, 308.9);
        vaulter.bezierCurveTo(167.2, 309.2, 178.5, 310.3, 178.5, 310.3);
        vaulter.bezierCurveTo(178.6, 306.7, 181.4, 295.8, 181.4, 295.8);
        vaulter.lineTo(191.2, 303.9);
        vaulter.closePath();
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(189.6, 261.9);
        vaulter.bezierCurveTo(189.6, 261.9, 191.3, 261.2, 193.0, 261.4);
        vaulter.bezierCurveTo(194.7, 261.7, 197.8, 263.6, 197.6, 265.8);
        vaulter.bezierCurveTo(197.6, 265.8, 201.5, 270.0, 202.0, 270.7);
        vaulter.bezierCurveTo(202.5, 271.3, 206.8, 273.8, 206.7, 276.0);
        vaulter.bezierCurveTo(206.7, 278.2, 206.2, 279.5, 206.4, 280.7);
        vaulter.lineTo(203.3, 282.0);
        vaulter.bezierCurveTo(203.3, 282.0, 201.5, 280.8, 201.2, 279.2);
        vaulter.bezierCurveTo(200.9, 277.5, 201.3, 276.8, 200.6, 276.3);
        vaulter.bezierCurveTo(199.9, 275.8, 198.8, 274.8, 197.9, 273.8);
        vaulter.bezierCurveTo(196.9, 272.8, 196.3, 272.1, 195.9, 271.7);
        vaulter.bezierCurveTo(195.4, 271.3, 195.1, 271.4, 193.9, 272.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(181.2, 291.0);
        vaulter.bezierCurveTo(181.2, 291.0, 181.5, 280.6, 180.0, 276.5);
        vaulter.bezierCurveTo(178.6, 272.3, 180.7, 261.3, 182.9, 261.8);
        vaulter.bezierCurveTo(185.1, 262.3, 184.6, 259.9, 184.6, 259.9);
        vaulter.bezierCurveTo(184.6, 259.9, 182.2, 254.6, 182.1, 252.3);
        vaulter.bezierCurveTo(182.0, 250.1, 183.3, 244.7, 187.9, 244.5);
        vaulter.bezierCurveTo(192.4, 244.2, 194.1, 249.2, 194.1, 249.2);
        vaulter.bezierCurveTo(194.1, 249.2, 194.7, 253.5, 194.7, 254.6);
        vaulter.bezierCurveTo(194.7, 255.8, 192.3, 260.4, 192.3, 260.4);
        vaulter.bezierCurveTo(192.3, 260.4, 196.9, 266.9, 196.8, 270.1);
        vaulter.bezierCurveTo(196.8, 270.1, 196.8, 285.0, 195.6, 287.3);
        vaulter.bezierCurveTo(194.4, 289.7, 194.4, 294.4, 195.2, 296.3);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(180.5, 279.3);
        vaulter.bezierCurveTo(180.5, 279.3, 186.4, 280.1, 187.3, 272.6);
        vaulter.bezierCurveTo(188.3, 265.2, 185.4, 262.6, 183.4, 262.4);
        vaulter.bezierCurveTo(181.5, 262.2, 178.1, 265.7, 178.1, 270.8);
        vaulter.bezierCurveTo(178.1, 275.9, 178.3, 277.5, 180.5, 279.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(192.3, 292.1);
        vaulter.bezierCurveTo(199.4, 297.0, 208.2, 306.6, 208.6, 307.3);
        vaulter.bezierCurveTo(209.1, 308.1, 209.6, 312.6, 209.6, 312.6);
        vaulter.lineTo(213.9, 327.7);
        vaulter.bezierCurveTo(213.9, 327.7, 216.5, 332.0, 218.1, 332.8);
        vaulter.bezierCurveTo(219.8, 333.6, 223.4, 335.6, 224.0, 335.9);
        vaulter.bezierCurveTo(224.6, 336.2, 224.9, 337.5, 224.9, 337.5);
        vaulter.bezierCurveTo(224.9, 337.5, 225.6, 338.8, 224.3, 339.3);
        vaulter.bezierCurveTo(222.2, 339.9, 217.2, 337.7, 214.8, 337.2);
        vaulter.bezierCurveTo(212.5, 336.7, 212.9, 333.7, 212.9, 333.7);
        vaulter.lineTo(210.3, 328.0);
        vaulter.bezierCurveTo(203.7, 321.2, 202.9, 311.0, 202.9, 311.0);
        vaulter.bezierCurveTo(202.9, 311.0, 186.6, 303.5, 183.7, 302.2);
        vaulter.bezierCurveTo(178.9, 300.1, 181.2, 291.0, 181.2, 291.0);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(157.8, 307.2);
        vaulter.bezierCurveTo(157.8, 307.2, 157.1, 307.4, 156.8, 306.7);
        vaulter.bezierCurveTo(156.4, 306.0, 156.9, 305.5, 156.9, 305.5);
        vaulter.bezierCurveTo(157.4, 305.2, 207.7, 278.0, 262.0, 255.9);
        vaulter.lineTo(397.4, 200.8);
        vaulter.lineTo(398.2, 202.7);
        vaulter.lineTo(262.7, 257.8);
        vaulter.bezierCurveTo(208.5, 279.8, 158.3, 307.0, 157.8, 307.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(203.2, 283.4);
        vaulter.bezierCurveTo(203.2, 283.4, 204.2, 281.5, 204.9, 281.2);
        vaulter.bezierCurveTo(205.6, 280.9, 207.1, 281.0, 207.1, 281.0);
        vaulter.lineTo(207.7, 282.2);
        vaulter.lineTo(207.1, 284.0);
        vaulter.lineTo(205.1, 284.4);
        vaulter.bezierCurveTo(205.1, 284.4, 204.8, 284.9, 204.1, 284.7);
        vaulter.bezierCurveTo(203.5, 284.6, 203.2, 283.4, 203.2, 283.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Group/Path
        vaulter.beginPath();
        vaulter.moveTo(185.0, 264.0);
        vaulter.bezierCurveTo(185.0, 264.0, 183.1, 262.3, 180.9, 263.0);
        vaulter.bezierCurveTo(178.8, 263.6, 175.7, 266.6, 173.8, 268.6);
        vaulter.bezierCurveTo(171.9, 270.6, 169.3, 276.5, 168.6, 277.9);
        vaulter.bezierCurveTo(167.8, 279.4, 168.6, 280.5, 169.2, 284.6);
        vaulter.bezierCurveTo(169.8, 288.7, 171.8, 294.8, 171.8, 294.8);
        vaulter.bezierCurveTo(171.8, 294.8, 171.2, 295.9, 171.2, 296.4);
        vaulter.bezierCurveTo(171.2, 296.8, 170.9, 299.3, 172.1, 299.7);
        vaulter.bezierCurveTo(173.2, 300.0, 175.7, 299.2, 175.7, 299.2);
        vaulter.bezierCurveTo(175.7, 299.2, 177.1, 298.2, 176.9, 296.7);
        vaulter.bezierCurveTo(176.9, 296.7, 176.6, 294.5, 175.0, 294.4);
        vaulter.lineTo(174.1, 293.7);
        vaulter.bezierCurveTo(174.1, 293.7, 172.9, 290.2, 173.3, 286.5);
        vaulter.bezierCurveTo(173.7, 282.7, 173.3, 277.1, 173.3, 277.1);
        vaulter.lineTo(179.1, 273.0);
        vaulter.bezierCurveTo(182.6, 273.6, 185.0, 270.8, 185.0, 270.8);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/runup/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(189.7, 267.6);
        vaulter.bezierCurveTo(189.7, 267.6, 191.4, 266.9, 193.2, 267.1);
        vaulter.bezierCurveTo(194.9, 267.4, 197.9, 269.3, 197.7, 271.5);
        vaulter.bezierCurveTo(197.7, 271.5, 201.6, 275.7, 202.1, 276.4);
        vaulter.bezierCurveTo(202.6, 277.1, 206.9, 279.6, 206.9, 281.8);
        vaulter.bezierCurveTo(206.8, 283.9, 206.3, 285.2, 206.6, 286.4);
        vaulter.lineTo(203.4, 287.8);
        vaulter.bezierCurveTo(203.4, 287.8, 201.7, 286.5, 201.3, 284.9);
        vaulter.bezierCurveTo(201.0, 283.3, 201.4, 282.5, 200.7, 282.0);
        vaulter.bezierCurveTo(200.1, 281.5, 198.9, 280.6, 198.0, 279.6);
        vaulter.bezierCurveTo(197.1, 278.6, 196.4, 277.8, 196.0, 277.4);
        vaulter.bezierCurveTo(195.5, 277.0, 195.3, 277.2, 194.0, 277.8);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 285.0);
        vaulter.bezierCurveTo(180.6, 285.0, 186.5, 285.8, 187.5, 278.3);
        vaulter.bezierCurveTo(188.5, 270.9, 185.5, 268.3, 183.6, 268.1);
        vaulter.bezierCurveTo(181.6, 267.9, 178.3, 271.5, 178.3, 276.6);
        vaulter.bezierCurveTo(178.3, 281.7, 178.5, 283.2, 180.6, 285.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(200.0, 309.5);
        vaulter.bezierCurveTo(197.0, 305.7, 195.3, 302.0, 195.3, 302.0);
        vaulter.bezierCurveTo(194.5, 300.1, 194.5, 295.4, 195.7, 293.0);
        vaulter.bezierCurveTo(196.9, 290.7, 196.9, 275.8, 196.9, 275.8);
        vaulter.bezierCurveTo(197.0, 272.7, 192.4, 266.1, 192.4, 266.1);
        vaulter.bezierCurveTo(192.4, 266.1, 194.8, 261.5, 194.8, 260.4);
        vaulter.bezierCurveTo(194.8, 259.2, 194.3, 254.9, 194.3, 254.9);
        vaulter.bezierCurveTo(194.3, 254.9, 192.6, 249.9, 188.0, 250.2);
        vaulter.bezierCurveTo(183.4, 250.4, 182.1, 255.8, 182.2, 258.1);
        vaulter.bezierCurveTo(182.4, 260.3, 184.7, 265.6, 184.7, 265.6);
        vaulter.bezierCurveTo(184.7, 265.6, 185.3, 268.1, 183.0, 267.5);
        vaulter.bezierCurveTo(180.8, 267.0, 178.7, 278.0, 180.2, 282.2);
        vaulter.bezierCurveTo(181.6, 286.4, 181.4, 296.8, 181.4, 296.8);
        vaulter.bezierCurveTo(179.9, 298.3, 181.2, 302.4, 181.2, 302.4);
        vaulter.bezierCurveTo(181.2, 302.4, 185.2, 309.7, 190.0, 313.4);
        vaulter.lineTo(179.0, 310.1);
        vaulter.bezierCurveTo(178.7, 309.6, 178.1, 308.7, 177.5, 308.4);
        vaulter.bezierCurveTo(176.6, 308.0, 175.7, 308.3, 175.7, 308.3);
        vaulter.bezierCurveTo(175.4, 308.5, 172.9, 309.7, 172.9, 309.7);
        vaulter.bezierCurveTo(172.9, 309.7, 168.9, 311.3, 168.5, 311.3);
        vaulter.bezierCurveTo(168.1, 311.3, 163.5, 312.8, 163.7, 314.1);
        vaulter.bezierCurveTo(163.8, 315.3, 165.3, 316.0, 166.0, 315.8);
        vaulter.bezierCurveTo(166.7, 315.7, 170.7, 314.7, 174.4, 314.2);
        vaulter.bezierCurveTo(178.2, 313.7, 187.0, 317.8, 190.8, 319.8);
        vaulter.bezierCurveTo(194.5, 321.8, 200.0, 322.0, 200.0, 322.0);
        vaulter.bezierCurveTo(200.0, 322.0, 203.3, 321.1, 203.5, 319.9);
        vaulter.bezierCurveTo(203.6, 318.8, 202.9, 313.3, 200.0, 309.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 285.0);
        vaulter.bezierCurveTo(180.6, 285.0, 186.5, 285.8, 187.5, 278.3);
        vaulter.bezierCurveTo(188.5, 270.9, 185.5, 268.3, 183.6, 268.1);
        vaulter.bezierCurveTo(181.6, 267.9, 178.3, 271.5, 178.3, 276.6);
        vaulter.bezierCurveTo(178.3, 281.7, 178.5, 283.2, 180.6, 285.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(181.4, 297.1);
        vaulter.bezierCurveTo(180.0, 299.3, 181.4, 303.0, 181.4, 303.0);
        vaulter.bezierCurveTo(181.4, 303.0, 186.7, 313.6, 191.2, 317.4);
        vaulter.lineTo(191.2, 319.0);
        vaulter.bezierCurveTo(191.2, 319.0, 187.5, 326.6, 187.3, 328.5);
        vaulter.bezierCurveTo(187.0, 330.4, 187.0, 334.7, 187.0, 335.3);
        vaulter.bezierCurveTo(187.0, 335.9, 186.9, 339.6, 187.0, 340.4);
        vaulter.bezierCurveTo(187.1, 341.3, 187.9, 342.0, 188.3, 343.2);
        vaulter.bezierCurveTo(188.4, 343.4, 191.8, 344.6, 191.8, 344.6);
        vaulter.bezierCurveTo(191.8, 344.6, 193.4, 344.8, 194.0, 344.7);
        vaulter.bezierCurveTo(195.5, 344.5, 196.7, 343.8, 196.7, 343.8);
        vaulter.bezierCurveTo(196.7, 343.8, 196.5, 341.5, 195.7, 341.3);
        vaulter.bezierCurveTo(195.0, 341.1, 192.8, 339.9, 192.1, 339.4);
        vaulter.bezierCurveTo(191.4, 338.9, 190.2, 337.1, 190.2, 337.1);
        vaulter.bezierCurveTo(190.2, 337.1, 190.6, 334.3, 192.3, 330.8);
        vaulter.bezierCurveTo(194.0, 327.3, 195.1, 324.0, 196.8, 322.4);
        vaulter.bezierCurveTo(198.1, 321.2, 197.7, 317.4, 197.7, 317.4);
        vaulter.bezierCurveTo(197.7, 317.4, 197.8, 314.2, 197.1, 311.3);
        vaulter.bezierCurveTo(196.5, 308.3, 193.8, 302.0, 193.6, 301.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(157.9, 313.0);
        vaulter.bezierCurveTo(157.9, 313.0, 157.3, 313.1, 156.9, 312.4);
        vaulter.bezierCurveTo(156.5, 311.7, 157.0, 311.2, 157.0, 311.2);
        vaulter.bezierCurveTo(157.5, 310.9, 207.8, 283.7, 262.1, 261.6);
        vaulter.lineTo(397.6, 206.6);
        vaulter.lineTo(398.3, 208.4);
        vaulter.lineTo(262.9, 263.5);
        vaulter.bezierCurveTo(208.6, 285.5, 158.4, 312.7, 157.9, 313.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(203.3, 289.1);
        vaulter.bezierCurveTo(203.3, 289.1, 204.3, 287.2, 205.0, 286.9);
        vaulter.bezierCurveTo(205.7, 286.6, 207.2, 286.7, 207.2, 286.7);
        vaulter.lineTo(207.8, 287.9);
        vaulter.lineTo(207.2, 289.7);
        vaulter.lineTo(205.3, 290.1);
        vaulter.bezierCurveTo(205.3, 290.1, 204.9, 290.6, 204.3, 290.5);
        vaulter.bezierCurveTo(203.6, 290.3, 203.3, 289.1, 203.3, 289.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(185.1, 269.7);
        vaulter.bezierCurveTo(185.1, 269.7, 183.2, 268.1, 181.1, 268.7);
        vaulter.bezierCurveTo(178.9, 269.3, 175.8, 272.3, 173.9, 274.3);
        vaulter.bezierCurveTo(172.1, 276.3, 169.4, 282.2, 168.7, 283.7);
        vaulter.bezierCurveTo(167.9, 285.1, 168.7, 286.2, 169.3, 290.3);
        vaulter.bezierCurveTo(169.9, 294.4, 171.9, 300.5, 171.9, 300.5);
        vaulter.bezierCurveTo(171.9, 300.5, 171.3, 301.6, 171.3, 302.1);
        vaulter.bezierCurveTo(171.3, 302.6, 171.0, 305.1, 172.2, 305.4);
        vaulter.bezierCurveTo(173.4, 305.7, 175.8, 305.0, 175.8, 305.0);
        vaulter.bezierCurveTo(175.8, 305.0, 177.3, 304.0, 177.0, 302.4);
        vaulter.bezierCurveTo(177.0, 302.4, 176.8, 300.3, 175.1, 300.1);
        vaulter.lineTo(174.2, 299.4);
        vaulter.bezierCurveTo(174.2, 299.4, 173.1, 295.9, 173.4, 292.2);
        vaulter.bezierCurveTo(173.8, 288.4, 173.4, 282.8, 173.4, 282.8);
        vaulter.lineTo(179.3, 278.7);
        vaulter.bezierCurveTo(182.8, 279.3, 185.1, 276.6, 185.1, 276.6);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/runup/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(189.7, 273.7);
        vaulter.bezierCurveTo(189.7, 273.7, 191.4, 272.9, 193.2, 273.2);
        vaulter.bezierCurveTo(194.9, 273.4, 197.9, 275.4, 197.7, 277.5);
        vaulter.bezierCurveTo(197.7, 277.5, 201.6, 281.7, 202.1, 282.4);
        vaulter.bezierCurveTo(202.6, 283.1, 206.9, 285.6, 206.9, 287.8);
        vaulter.bezierCurveTo(206.8, 290.0, 206.3, 291.2, 206.6, 292.4);
        vaulter.lineTo(203.4, 293.8);
        vaulter.bezierCurveTo(203.4, 293.8, 201.7, 292.5, 201.3, 290.9);
        vaulter.bezierCurveTo(201.0, 289.3, 201.4, 288.5, 200.7, 288.0);
        vaulter.bezierCurveTo(200.1, 287.5, 198.9, 286.6, 198.0, 285.6);
        vaulter.bezierCurveTo(197.1, 284.6, 196.4, 283.9, 196.0, 283.5);
        vaulter.bezierCurveTo(195.5, 283.1, 195.3, 283.2, 194.0, 283.8);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(184.1, 307.1);
        vaulter.bezierCurveTo(184.1, 307.1, 191.1, 312.7, 198.6, 313.4);
        vaulter.bezierCurveTo(198.6, 313.4, 192.7, 315.7, 189.0, 317.4);
        vaulter.bezierCurveTo(185.4, 319.1, 184.5, 319.4, 183.0, 319.4);
        vaulter.bezierCurveTo(182.2, 319.4, 181.8, 319.5, 181.2, 319.9);
        vaulter.bezierCurveTo(180.7, 320.2, 180.7, 321.1, 180.8, 321.8);
        vaulter.bezierCurveTo(181.3, 323.4, 184.3, 326.9, 184.3, 326.9);
        vaulter.bezierCurveTo(184.3, 326.9, 187.3, 330.7, 187.9, 330.6);
        vaulter.bezierCurveTo(189.1, 330.2, 188.8, 328.6, 188.8, 328.6);
        vaulter.lineTo(186.6, 322.8);
        vaulter.lineTo(189.0, 321.9);
        vaulter.lineTo(199.5, 319.8);
        vaulter.bezierCurveTo(199.5, 319.8, 207.9, 317.1, 209.3, 316.2);
        vaulter.bezierCurveTo(210.7, 315.3, 209.6, 312.9, 209.3, 311.9);
        vaulter.bezierCurveTo(209.1, 310.9, 197.2, 301.6, 197.2, 301.6);
        vaulter.bezierCurveTo(194.9, 299.9, 190.5, 297.9, 190.5, 297.9);
        vaulter.lineTo(184.1, 307.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(192.8, 305.5);
        vaulter.bezierCurveTo(191.2, 311.6, 187.7, 323.4, 186.9, 325.2);
        vaulter.bezierCurveTo(185.9, 327.5, 184.3, 328.6, 184.3, 328.6);
        vaulter.bezierCurveTo(184.3, 328.6, 173.7, 333.4, 173.4, 334.3);
        vaulter.bezierCurveTo(173.1, 335.3, 172.5, 336.6, 172.5, 336.6);
        vaulter.bezierCurveTo(172.5, 336.6, 173.1, 338.2, 174.0, 339.5);
        vaulter.bezierCurveTo(175.1, 341.1, 174.7, 342.5, 174.5, 343.4);
        vaulter.bezierCurveTo(174.4, 343.8, 174.1, 345.0, 173.5, 345.1);
        vaulter.bezierCurveTo(173.1, 345.2, 172.5, 344.9, 171.8, 344.5);
        vaulter.bezierCurveTo(170.1, 343.7, 169.3, 340.6, 169.4, 339.6);
        vaulter.bezierCurveTo(169.6, 337.7, 167.7, 336.2, 167.7, 335.3);
        vaulter.bezierCurveTo(167.8, 334.2, 168.5, 332.7, 168.5, 332.7);
        vaulter.bezierCurveTo(168.5, 332.7, 168.7, 332.4, 170.1, 332.1);
        vaulter.bezierCurveTo(171.5, 331.7, 181.5, 322.5, 181.5, 321.9);
        vaulter.bezierCurveTo(181.5, 321.9, 181.1, 305.5, 181.4, 302.8);
        vaulter.bezierCurveTo(181.4, 302.8, 181.6, 292.4, 180.2, 288.2);
        vaulter.bezierCurveTo(178.7, 284.0, 180.8, 273.1, 183.0, 273.6);
        vaulter.bezierCurveTo(185.3, 274.1, 184.7, 271.6, 184.7, 271.6);
        vaulter.bezierCurveTo(184.7, 271.6, 182.4, 266.3, 182.2, 264.1);
        vaulter.bezierCurveTo(182.1, 261.9, 183.4, 256.5, 188.0, 256.2);
        vaulter.bezierCurveTo(192.6, 256.0, 194.3, 260.9, 194.3, 260.9);
        vaulter.bezierCurveTo(194.3, 260.9, 194.8, 265.2, 194.8, 266.4);
        vaulter.bezierCurveTo(194.8, 267.6, 192.4, 272.2, 192.4, 272.2);
        vaulter.bezierCurveTo(192.4, 272.2, 197.0, 278.7, 196.9, 281.8);
        vaulter.bezierCurveTo(196.9, 281.8, 196.9, 296.7, 195.7, 299.1);
        vaulter.bezierCurveTo(195.3, 299.8, 195.1, 300.8, 194.9, 301.9);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 291.0);
        vaulter.bezierCurveTo(180.6, 291.0, 186.5, 291.8, 187.5, 284.4);
        vaulter.bezierCurveTo(188.5, 276.9, 185.5, 274.4, 183.6, 274.2);
        vaulter.bezierCurveTo(181.6, 274.0, 178.3, 277.5, 178.3, 282.6);
        vaulter.bezierCurveTo(178.3, 287.7, 178.5, 289.3, 180.6, 291.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(157.9, 319.0);
        vaulter.bezierCurveTo(157.9, 319.0, 157.3, 319.1, 156.9, 318.4);
        vaulter.bezierCurveTo(156.5, 317.7, 157.0, 317.2, 157.0, 317.2);
        vaulter.bezierCurveTo(157.5, 317.0, 207.8, 289.7, 262.1, 267.7);
        vaulter.lineTo(397.6, 212.6);
        vaulter.lineTo(398.3, 214.5);
        vaulter.lineTo(262.9, 269.5);
        vaulter.bezierCurveTo(208.6, 291.6, 158.4, 318.7, 157.9, 319.0);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(203.3, 295.1);
        vaulter.bezierCurveTo(203.3, 295.1, 204.3, 293.3, 205.0, 293.0);
        vaulter.bezierCurveTo(205.7, 292.6, 207.2, 292.8, 207.2, 292.8);
        vaulter.lineTo(207.8, 293.9);
        vaulter.lineTo(207.2, 295.7);
        vaulter.lineTo(205.3, 296.1);
        vaulter.bezierCurveTo(205.3, 296.1, 204.9, 296.7, 204.3, 296.5);
        vaulter.bezierCurveTo(203.6, 296.3, 203.3, 295.1, 203.3, 295.1);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(185.1, 275.7);
        vaulter.bezierCurveTo(185.1, 275.7, 183.2, 274.1, 181.1, 274.7);
        vaulter.bezierCurveTo(178.9, 275.4, 175.8, 278.4, 173.9, 280.4);
        vaulter.bezierCurveTo(172.1, 282.4, 169.4, 288.2, 168.7, 289.7);
        vaulter.bezierCurveTo(167.9, 291.2, 168.7, 292.2, 169.3, 296.4);
        vaulter.bezierCurveTo(169.9, 300.5, 171.9, 306.6, 171.9, 306.6);
        vaulter.bezierCurveTo(171.9, 306.6, 171.3, 307.7, 171.3, 308.1);
        vaulter.bezierCurveTo(171.3, 308.6, 171.0, 311.1, 172.2, 311.4);
        vaulter.bezierCurveTo(173.4, 311.8, 175.8, 311.0, 175.8, 311.0);
        vaulter.bezierCurveTo(175.8, 311.0, 177.3, 310.0, 177.0, 308.4);
        vaulter.bezierCurveTo(177.0, 308.4, 176.8, 306.3, 175.1, 306.1);
        vaulter.lineTo(174.2, 305.5);
        vaulter.bezierCurveTo(174.2, 305.5, 173.1, 302.0, 173.4, 298.2);
        vaulter.bezierCurveTo(173.8, 294.5, 173.4, 288.9, 173.4, 288.9);
        vaulter.lineTo(179.3, 284.7);
        vaulter.bezierCurveTo(182.8, 285.4, 185.1, 282.6, 185.1, 282.6);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/runup/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(189.7, 268.0);
        vaulter.bezierCurveTo(189.7, 268.0, 191.4, 267.3, 193.2, 267.5);
        vaulter.bezierCurveTo(194.9, 267.8, 197.9, 269.7, 197.7, 271.9);
        vaulter.bezierCurveTo(197.7, 271.9, 201.6, 276.1, 202.1, 276.8);
        vaulter.bezierCurveTo(202.6, 277.4, 206.9, 279.9, 206.9, 282.1);
        vaulter.bezierCurveTo(206.8, 284.3, 206.3, 285.6, 206.6, 286.8);
        vaulter.lineTo(203.4, 288.1);
        vaulter.bezierCurveTo(203.4, 288.1, 201.7, 286.9, 201.3, 285.3);
        vaulter.bezierCurveTo(201.0, 283.6, 201.4, 282.9, 200.7, 282.4);
        vaulter.bezierCurveTo(200.1, 281.9, 198.9, 280.9, 198.0, 279.9);
        vaulter.bezierCurveTo(197.1, 278.9, 196.4, 278.2, 196.0, 277.8);
        vaulter.bezierCurveTo(195.5, 277.4, 195.3, 277.5, 194.0, 278.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(189.0, 308.5);
        vaulter.bezierCurveTo(195.3, 310.4, 203.6, 309.3, 203.6, 309.3);
        vaulter.bezierCurveTo(203.6, 309.3, 203.0, 315.1, 203.0, 317.1);
        vaulter.bezierCurveTo(203.0, 319.0, 201.3, 329.8, 201.3, 329.8);
        vaulter.bezierCurveTo(201.3, 329.8, 199.3, 331.6, 199.5, 332.1);
        vaulter.bezierCurveTo(199.6, 332.6, 199.7, 334.0, 201.5, 334.5);
        vaulter.bezierCurveTo(202.3, 334.8, 204.6, 335.7, 206.7, 336.7);
        vaulter.bezierCurveTo(208.8, 337.6, 210.7, 338.5, 210.7, 338.5);
        vaulter.bezierCurveTo(210.7, 338.5, 211.6, 338.1, 211.7, 337.3);
        vaulter.bezierCurveTo(211.8, 336.4, 208.6, 333.3, 207.6, 332.3);
        vaulter.bezierCurveTo(206.6, 331.3, 205.2, 331.0, 205.2, 331.0);
        vaulter.bezierCurveTo(205.2, 331.0, 209.5, 316.4, 209.7, 314.9);
        vaulter.bezierCurveTo(210.0, 313.4, 212.7, 309.2, 212.5, 307.7);
        vaulter.bezierCurveTo(212.4, 307.3, 212.7, 306.4, 211.8, 305.6);
        vaulter.bezierCurveTo(209.5, 303.4, 203.9, 301.1, 196.8, 298.4);
        vaulter.lineTo(190.2, 296.9);
        vaulter.bezierCurveTo(190.2, 296.9, 188.3, 298.9, 187.7, 302.4);
        vaulter.bezierCurveTo(187.1, 305.9, 189.0, 308.5, 189.0, 308.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 299.2);
        vaulter.bezierCurveTo(194.7, 297.1, 195.0, 294.8, 195.7, 293.4);
        vaulter.bezierCurveTo(196.9, 291.0, 196.9, 276.2, 196.9, 276.2);
        vaulter.bezierCurveTo(197.0, 273.0, 192.4, 266.5, 192.4, 266.5);
        vaulter.bezierCurveTo(192.4, 266.5, 194.8, 261.9, 194.8, 260.7);
        vaulter.bezierCurveTo(194.8, 259.5, 194.3, 255.2, 194.3, 255.2);
        vaulter.bezierCurveTo(194.3, 255.2, 192.6, 250.3, 188.0, 250.5);
        vaulter.bezierCurveTo(183.4, 250.8, 182.1, 256.2, 182.2, 258.4);
        vaulter.bezierCurveTo(182.4, 260.7, 184.7, 266.0, 184.7, 266.0);
        vaulter.bezierCurveTo(184.7, 266.0, 185.3, 268.4, 183.0, 267.9);
        vaulter.bezierCurveTo(180.8, 267.4, 178.7, 278.4, 180.2, 282.5);
        vaulter.bezierCurveTo(181.6, 286.7, 181.4, 297.1, 181.4, 297.1);
        vaulter.bezierCurveTo(181.4, 297.1, 180.5, 299.0, 180.7, 301.2);
        vaulter.lineTo(179.2, 303.8);
        vaulter.bezierCurveTo(175.0, 310.8, 173.8, 321.9, 173.8, 321.9);
        vaulter.bezierCurveTo(167.3, 325.1, 159.2, 333.0, 159.2, 333.0);
        vaulter.bezierCurveTo(159.2, 333.0, 158.1, 334.3, 157.5, 334.3);
        vaulter.bezierCurveTo(156.8, 334.3, 155.1, 333.9, 154.6, 334.3);
        vaulter.bezierCurveTo(154.1, 334.6, 153.3, 335.9, 153.3, 336.1);
        vaulter.bezierCurveTo(153.3, 336.3, 154.5, 342.1, 155.0, 343.4);
        vaulter.bezierCurveTo(155.5, 344.6, 158.1, 345.1, 158.1, 345.1);
        vaulter.lineTo(162.6, 345.1);
        vaulter.bezierCurveTo(162.6, 345.1, 163.0, 343.1, 162.2, 342.8);
        vaulter.bezierCurveTo(161.5, 342.4, 160.6, 342.3, 160.6, 342.3);
        vaulter.bezierCurveTo(160.6, 342.3, 159.1, 338.6, 159.2, 337.6);
        vaulter.bezierCurveTo(159.3, 336.6, 161.3, 336.1, 161.3, 336.1);
        vaulter.lineTo(173.3, 329.4);
        vaulter.bezierCurveTo(173.3, 329.4, 175.5, 328.6, 178.0, 326.8);
        vaulter.bezierCurveTo(180.5, 324.9, 192.5, 305.6, 192.5, 305.6);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 285.4);
        vaulter.bezierCurveTo(180.6, 285.4, 186.5, 286.1, 187.5, 278.7);
        vaulter.bezierCurveTo(188.5, 271.2, 185.5, 268.7, 183.6, 268.5);
        vaulter.bezierCurveTo(181.6, 268.3, 178.3, 271.8, 178.3, 276.9);
        vaulter.bezierCurveTo(178.3, 282.0, 178.5, 283.6, 180.6, 285.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(157.9, 313.3);
        vaulter.bezierCurveTo(157.9, 313.3, 157.3, 313.5, 156.9, 312.8);
        vaulter.bezierCurveTo(156.5, 312.1, 157.0, 311.6, 157.0, 311.6);
        vaulter.bezierCurveTo(157.5, 311.3, 207.8, 284.1, 262.1, 262.0);
        vaulter.lineTo(397.6, 206.9);
        vaulter.lineTo(398.3, 208.8);
        vaulter.lineTo(262.9, 263.9);
        vaulter.bezierCurveTo(208.6, 285.9, 158.4, 313.1, 157.9, 313.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(203.3, 289.5);
        vaulter.bezierCurveTo(203.3, 289.5, 204.3, 287.6, 205.0, 287.3);
        vaulter.bezierCurveTo(205.7, 287.0, 207.2, 287.1, 207.2, 287.1);
        vaulter.lineTo(207.8, 288.3);
        vaulter.lineTo(207.2, 290.1);
        vaulter.lineTo(205.3, 290.5);
        vaulter.bezierCurveTo(205.3, 290.5, 204.9, 291.0, 204.3, 290.8);
        vaulter.bezierCurveTo(203.6, 290.7, 203.3, 289.5, 203.3, 289.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(185.1, 270.1);
        vaulter.bezierCurveTo(185.1, 270.1, 183.2, 268.4, 181.1, 269.1);
        vaulter.bezierCurveTo(178.9, 269.7, 175.8, 272.7, 173.9, 274.7);
        vaulter.bezierCurveTo(172.1, 276.7, 169.4, 282.6, 168.7, 284.0);
        vaulter.bezierCurveTo(167.9, 285.5, 168.7, 286.6, 169.3, 290.7);
        vaulter.bezierCurveTo(169.9, 294.8, 171.9, 300.9, 171.9, 300.9);
        vaulter.bezierCurveTo(171.9, 300.9, 171.3, 302.0, 171.3, 302.5);
        vaulter.bezierCurveTo(171.3, 302.9, 171.0, 305.4, 172.2, 305.8);
        vaulter.bezierCurveTo(173.4, 306.1, 175.8, 305.3, 175.8, 305.3);
        vaulter.bezierCurveTo(175.8, 305.3, 177.3, 304.3, 177.0, 302.7);
        vaulter.bezierCurveTo(177.0, 302.7, 176.8, 300.6, 175.1, 300.5);
        vaulter.lineTo(174.2, 299.8);
        vaulter.bezierCurveTo(174.2, 299.8, 173.1, 296.3, 173.4, 292.6);
        vaulter.bezierCurveTo(173.8, 288.8, 173.4, 283.2, 173.4, 283.2);
        vaulter.lineTo(179.3, 279.1);
        vaulter.bezierCurveTo(182.8, 279.7, 185.1, 276.9, 185.1, 276.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/runup/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(189.7, 264.0);
        vaulter.bezierCurveTo(189.7, 264.0, 191.4, 263.3, 193.2, 263.5);
        vaulter.bezierCurveTo(194.9, 263.8, 197.9, 265.7, 197.7, 267.9);
        vaulter.bezierCurveTo(197.7, 267.9, 201.6, 272.1, 202.1, 272.8);
        vaulter.bezierCurveTo(202.6, 273.4, 206.9, 275.9, 206.9, 278.1);
        vaulter.bezierCurveTo(206.8, 280.3, 206.3, 281.6, 206.6, 282.8);
        vaulter.lineTo(203.4, 284.1);
        vaulter.bezierCurveTo(203.4, 284.1, 201.7, 282.9, 201.3, 281.3);
        vaulter.bezierCurveTo(201.0, 279.6, 201.4, 278.9, 200.7, 278.4);
        vaulter.bezierCurveTo(200.1, 277.9, 198.9, 276.9, 198.0, 275.9);
        vaulter.bezierCurveTo(197.1, 274.9, 196.4, 274.2, 196.0, 273.8);
        vaulter.bezierCurveTo(195.5, 273.4, 195.3, 273.5, 194.0, 274.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 294.2);
        vaulter.bezierCurveTo(201.8, 297.2, 210.2, 303.4, 212.0, 304.2);
        vaulter.bezierCurveTo(213.8, 305.0, 214.4, 305.7, 214.9, 307.3);
        vaulter.bezierCurveTo(215.4, 309.0, 216.1, 315.8, 217.4, 321.2);
        vaulter.bezierCurveTo(218.8, 326.5, 221.6, 329.7, 221.6, 329.7);
        vaulter.bezierCurveTo(221.6, 329.7, 223.1, 331.3, 225.6, 331.2);
        vaulter.bezierCurveTo(228.1, 331.0, 230.1, 330.3, 231.6, 331.5);
        vaulter.bezierCurveTo(233.1, 332.7, 228.6, 334.8, 226.9, 335.4);
        vaulter.bezierCurveTo(225.3, 335.9, 223.3, 335.3, 220.6, 336.2);
        vaulter.bezierCurveTo(217.9, 337.0, 217.4, 336.2, 217.1, 335.2);
        vaulter.bezierCurveTo(216.8, 334.2, 217.1, 332.5, 217.1, 332.5);
        vaulter.lineTo(214.4, 326.8);
        vaulter.bezierCurveTo(210.9, 320.2, 207.8, 310.7, 207.8, 310.7);
        vaulter.lineTo(191.3, 305.7);
        vaulter.lineTo(194.8, 294.2);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 295.5);
        vaulter.bezierCurveTo(194.7, 293.4, 194.9, 290.9, 195.7, 289.4);
        vaulter.bezierCurveTo(196.9, 287.0, 196.9, 272.2, 196.9, 272.2);
        vaulter.bezierCurveTo(197.0, 269.0, 192.4, 262.5, 192.4, 262.5);
        vaulter.bezierCurveTo(192.4, 262.5, 194.8, 257.9, 194.8, 256.7);
        vaulter.bezierCurveTo(194.8, 255.5, 194.3, 251.2, 194.3, 251.2);
        vaulter.bezierCurveTo(194.3, 251.2, 192.6, 246.3, 188.0, 246.5);
        vaulter.bezierCurveTo(183.4, 246.8, 182.1, 252.2, 182.2, 254.4);
        vaulter.bezierCurveTo(182.4, 256.7, 184.7, 262.0, 184.7, 262.0);
        vaulter.bezierCurveTo(184.7, 262.0, 185.3, 264.4, 183.0, 263.9);
        vaulter.bezierCurveTo(180.8, 263.4, 178.7, 274.4, 180.2, 278.5);
        vaulter.bezierCurveTo(181.6, 282.7, 181.4, 293.1, 181.4, 293.1);
        vaulter.bezierCurveTo(181.4, 293.1, 180.6, 294.9, 180.7, 297.0);
        vaulter.bezierCurveTo(177.0, 308.5, 174.9, 319.8, 174.9, 319.8);
        vaulter.bezierCurveTo(173.9, 319.4, 168.9, 319.9, 164.7, 320.7);
        vaulter.bezierCurveTo(160.0, 321.6, 155.4, 321.4, 155.4, 321.4);
        vaulter.bezierCurveTo(155.4, 321.4, 154.5, 320.7, 153.3, 320.6);
        vaulter.bezierCurveTo(152.0, 320.5, 151.4, 321.1, 150.1, 324.2);
        vaulter.bezierCurveTo(149.0, 326.8, 146.9, 329.0, 146.9, 329.0);
        vaulter.bezierCurveTo(146.9, 329.0, 145.6, 332.5, 146.9, 332.8);
        vaulter.bezierCurveTo(148.3, 333.2, 148.9, 331.0, 151.4, 328.8);
        vaulter.bezierCurveTo(153.9, 326.7, 158.6, 325.8, 158.6, 325.8);
        vaulter.bezierCurveTo(158.6, 325.8, 174.4, 326.0, 178.1, 324.7);
        vaulter.bezierCurveTo(181.8, 323.3, 192.8, 303.2, 192.8, 303.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 281.4);
        vaulter.bezierCurveTo(180.6, 281.4, 186.5, 282.1, 187.5, 274.7);
        vaulter.bezierCurveTo(188.5, 267.2, 185.5, 264.7, 183.6, 264.5);
        vaulter.bezierCurveTo(181.6, 264.3, 178.3, 267.8, 178.3, 272.9);
        vaulter.bezierCurveTo(178.3, 278.0, 178.5, 279.6, 180.6, 281.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(157.9, 309.3);
        vaulter.bezierCurveTo(157.9, 309.3, 157.3, 309.5, 156.9, 308.8);
        vaulter.bezierCurveTo(156.5, 308.1, 157.0, 307.6, 157.0, 307.6);
        vaulter.bezierCurveTo(157.5, 307.3, 207.8, 280.1, 262.1, 258.0);
        vaulter.lineTo(397.6, 202.9);
        vaulter.lineTo(398.3, 204.8);
        vaulter.lineTo(262.9, 259.9);
        vaulter.bezierCurveTo(208.6, 281.9, 158.4, 309.1, 157.9, 309.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(203.3, 285.5);
        vaulter.bezierCurveTo(203.3, 285.5, 204.3, 283.6, 205.0, 283.3);
        vaulter.bezierCurveTo(205.7, 283.0, 207.2, 283.1, 207.2, 283.1);
        vaulter.lineTo(207.8, 284.3);
        vaulter.lineTo(207.2, 286.1);
        vaulter.lineTo(205.3, 286.5);
        vaulter.bezierCurveTo(205.3, 286.5, 204.9, 287.0, 204.3, 286.8);
        vaulter.bezierCurveTo(203.6, 286.7, 203.3, 285.5, 203.3, 285.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(185.1, 266.1);
        vaulter.bezierCurveTo(185.1, 266.1, 183.2, 264.4, 181.1, 265.1);
        vaulter.bezierCurveTo(178.9, 265.7, 175.8, 268.7, 173.9, 270.7);
        vaulter.bezierCurveTo(172.1, 272.7, 169.4, 278.6, 168.7, 280.0);
        vaulter.bezierCurveTo(167.9, 281.5, 168.7, 282.6, 169.3, 286.7);
        vaulter.bezierCurveTo(169.9, 290.8, 171.9, 296.9, 171.9, 296.9);
        vaulter.bezierCurveTo(171.9, 296.9, 171.3, 298.0, 171.3, 298.5);
        vaulter.bezierCurveTo(171.3, 298.9, 171.0, 301.4, 172.2, 301.8);
        vaulter.bezierCurveTo(173.4, 302.1, 175.8, 301.3, 175.8, 301.3);
        vaulter.bezierCurveTo(175.8, 301.3, 177.3, 300.3, 177.0, 298.7);
        vaulter.bezierCurveTo(177.0, 298.7, 176.8, 296.6, 175.1, 296.5);
        vaulter.lineTo(174.2, 295.8);
        vaulter.bezierCurveTo(174.2, 295.8, 173.1, 292.3, 173.4, 288.6);
        vaulter.bezierCurveTo(173.8, 284.8, 173.4, 279.2, 173.4, 279.2);
        vaulter.lineTo(179.3, 275.1);
        vaulter.bezierCurveTo(182.8, 275.7, 185.1, 272.9, 185.1, 272.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/runup/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(189.7, 272.0);
        vaulter.bezierCurveTo(189.7, 272.0, 191.4, 271.2, 193.2, 271.5);
        vaulter.bezierCurveTo(194.9, 271.7, 197.9, 273.6, 197.7, 275.8);
        vaulter.bezierCurveTo(197.7, 275.8, 201.6, 280.0, 202.1, 280.7);
        vaulter.bezierCurveTo(202.6, 281.4, 206.9, 283.9, 206.9, 286.1);
        vaulter.bezierCurveTo(206.8, 288.3, 206.3, 289.5, 206.6, 290.7);
        vaulter.lineTo(203.4, 292.1);
        vaulter.bezierCurveTo(203.4, 292.1, 201.7, 290.8, 201.3, 289.2);
        vaulter.bezierCurveTo(201.0, 287.6, 201.4, 286.8, 200.7, 286.3);
        vaulter.bezierCurveTo(200.1, 285.8, 198.9, 284.9, 198.0, 283.9);
        vaulter.bezierCurveTo(197.1, 282.9, 196.4, 282.1, 196.0, 281.7);
        vaulter.bezierCurveTo(195.5, 281.4, 195.3, 281.5, 194.0, 282.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 302.2);
        vaulter.bezierCurveTo(194.8, 300.4, 195.1, 298.6, 195.7, 297.4);
        vaulter.bezierCurveTo(196.9, 295.0, 196.9, 280.1, 196.9, 280.1);
        vaulter.bezierCurveTo(197.0, 277.0, 192.4, 270.4, 192.4, 270.4);
        vaulter.bezierCurveTo(192.4, 270.4, 194.8, 265.9, 194.8, 264.7);
        vaulter.bezierCurveTo(194.8, 263.5, 194.3, 259.2, 194.3, 259.2);
        vaulter.bezierCurveTo(194.3, 259.2, 192.6, 254.2, 188.0, 254.5);
        vaulter.bezierCurveTo(183.4, 254.8, 182.1, 260.2, 182.2, 262.4);
        vaulter.bezierCurveTo(182.4, 264.6, 184.7, 269.9, 184.7, 269.9);
        vaulter.bezierCurveTo(184.7, 269.9, 185.3, 272.4, 183.0, 271.9);
        vaulter.bezierCurveTo(180.8, 271.3, 178.7, 282.3, 180.2, 286.5);
        vaulter.bezierCurveTo(181.6, 290.7, 181.4, 301.1, 181.4, 301.1);
        vaulter.bezierCurveTo(181.4, 301.1, 181.3, 312.8, 182.1, 319.8);
        vaulter.bezierCurveTo(182.1, 319.8, 178.8, 322.0, 176.3, 325.7);
        vaulter.bezierCurveTo(173.8, 329.3, 164.6, 334.5, 164.6, 334.5);
        vaulter.bezierCurveTo(164.6, 334.5, 163.3, 335.5, 162.6, 336.5);
        vaulter.bezierCurveTo(161.9, 337.5, 163.4, 339.2, 163.4, 339.2);
        vaulter.bezierCurveTo(163.4, 339.2, 166.0, 342.4, 166.8, 343.0);
        vaulter.bezierCurveTo(167.3, 343.4, 167.7, 344.5, 168.1, 344.8);
        vaulter.bezierCurveTo(168.4, 345.1, 170.1, 345.5, 170.6, 344.5);
        vaulter.bezierCurveTo(171.1, 343.5, 169.2, 343.4, 169.1, 342.2);
        vaulter.bezierCurveTo(168.9, 340.3, 167.4, 337.2, 167.4, 337.2);
        vaulter.bezierCurveTo(167.4, 337.2, 177.6, 332.5, 181.4, 328.9);
        vaulter.bezierCurveTo(181.4, 328.9, 187.4, 324.0, 188.9, 320.7);
        vaulter.bezierCurveTo(190.4, 317.4, 192.6, 305.1, 192.8, 304.1);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(192.4, 300.3);
        vaulter.bezierCurveTo(203.3, 302.1, 210.6, 307.8, 210.6, 307.8);
        vaulter.bezierCurveTo(210.6, 307.8, 212.6, 309.4, 212.6, 311.1);
        vaulter.bezierCurveTo(212.5, 313.7, 211.8, 314.1, 207.3, 317.6);
        vaulter.bezierCurveTo(202.8, 321.1, 194.2, 327.1, 194.2, 327.1);
        vaulter.bezierCurveTo(194.4, 327.4, 195.5, 329.3, 196.0, 330.2);
        vaulter.bezierCurveTo(197.0, 332.1, 198.3, 333.5, 198.0, 334.4);
        vaulter.bezierCurveTo(197.8, 334.9, 196.9, 334.5, 196.6, 334.4);
        vaulter.bezierCurveTo(196.1, 334.3, 194.1, 332.5, 192.9, 331.3);
        vaulter.bezierCurveTo(191.8, 330.1, 188.8, 326.9, 188.9, 326.1);
        vaulter.bezierCurveTo(189.0, 325.8, 189.3, 325.2, 189.7, 324.8);
        vaulter.bezierCurveTo(190.7, 324.1, 192.0, 323.8, 192.0, 323.8);
        vaulter.bezierCurveTo(192.0, 323.8, 195.4, 320.8, 197.3, 318.8);
        vaulter.bezierCurveTo(199.1, 316.8, 202.4, 312.4, 202.4, 312.4);
        vaulter.bezierCurveTo(202.4, 312.4, 197.6, 312.5, 189.1, 311.8);
        vaulter.bezierCurveTo(180.6, 311.2, 180.8, 303.0, 180.8, 303.0);
        vaulter.bezierCurveTo(180.8, 302.0, 181.0, 301.2, 181.4, 300.5);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.6, 289.3);
        vaulter.bezierCurveTo(180.6, 289.3, 186.5, 290.1, 187.5, 282.7);
        vaulter.bezierCurveTo(188.5, 275.2, 185.5, 272.7, 183.6, 272.5);
        vaulter.bezierCurveTo(181.6, 272.3, 178.3, 275.8, 178.3, 280.9);
        vaulter.bezierCurveTo(178.3, 286.0, 178.5, 287.6, 180.6, 289.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(157.9, 317.3);
        vaulter.bezierCurveTo(157.9, 317.3, 157.3, 317.4, 156.9, 316.7);
        vaulter.bezierCurveTo(156.5, 316.0, 157.0, 315.5, 157.0, 315.5);
        vaulter.bezierCurveTo(157.5, 315.2, 207.8, 288.0, 262.1, 266.0);
        vaulter.lineTo(397.6, 210.9);
        vaulter.lineTo(398.3, 212.7);
        vaulter.lineTo(262.9, 267.8);
        vaulter.bezierCurveTo(208.6, 289.8, 158.4, 317.0, 157.9, 317.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(203.3, 293.4);
        vaulter.bezierCurveTo(203.3, 293.4, 204.3, 291.6, 205.0, 291.2);
        vaulter.bezierCurveTo(205.7, 290.9, 207.2, 291.1, 207.2, 291.1);
        vaulter.lineTo(207.8, 292.2);
        vaulter.lineTo(207.2, 294.0);
        vaulter.lineTo(205.3, 294.4);
        vaulter.bezierCurveTo(205.3, 294.4, 204.9, 294.9, 204.3, 294.8);
        vaulter.bezierCurveTo(203.6, 294.6, 203.3, 293.4, 203.3, 293.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(185.1, 274.0);
        vaulter.bezierCurveTo(185.1, 274.0, 183.2, 272.4, 181.1, 273.0);
        vaulter.bezierCurveTo(178.9, 273.6, 175.8, 276.6, 173.9, 278.6);
        vaulter.bezierCurveTo(172.1, 280.6, 169.4, 286.5, 168.7, 288.0);
        vaulter.bezierCurveTo(167.9, 289.4, 168.7, 290.5, 169.3, 294.6);
        vaulter.bezierCurveTo(169.9, 298.8, 171.9, 304.9, 171.9, 304.9);
        vaulter.bezierCurveTo(171.9, 304.9, 171.3, 306.0, 171.3, 306.4);
        vaulter.bezierCurveTo(171.3, 306.9, 171.0, 309.4, 172.2, 309.7);
        vaulter.bezierCurveTo(173.4, 310.0, 175.8, 309.3, 175.8, 309.3);
        vaulter.bezierCurveTo(175.8, 309.3, 177.3, 308.3, 177.0, 306.7);
        vaulter.bezierCurveTo(177.0, 306.7, 176.8, 304.6, 175.1, 304.4);
        vaulter.lineTo(174.2, 303.7);
        vaulter.bezierCurveTo(174.2, 303.7, 173.1, 300.3, 173.4, 296.5);
        vaulter.bezierCurveTo(173.8, 292.8, 173.4, 287.1, 173.4, 287.1);
        vaulter.lineTo(179.3, 283.0);
        vaulter.bezierCurveTo(182.8, 283.6, 185.1, 280.9, 185.1, 280.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/runup/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(189.8, 266.0);
        vaulter.bezierCurveTo(189.8, 266.0, 191.5, 265.3, 193.2, 265.5);
        vaulter.bezierCurveTo(194.9, 265.8, 198.0, 267.7, 197.8, 269.9);
        vaulter.bezierCurveTo(197.8, 269.9, 201.7, 274.1, 202.2, 274.8);
        vaulter.bezierCurveTo(202.7, 275.4, 207.0, 277.9, 206.9, 280.1);
        vaulter.bezierCurveTo(206.9, 282.3, 206.4, 283.6, 206.6, 284.8);
        vaulter.lineTo(203.5, 286.1);
        vaulter.bezierCurveTo(203.5, 286.1, 201.7, 284.9, 201.4, 283.3);
        vaulter.bezierCurveTo(201.1, 281.6, 201.5, 280.9, 200.8, 280.4);
        vaulter.bezierCurveTo(200.1, 279.9, 199.0, 278.9, 198.1, 277.9);
        vaulter.bezierCurveTo(197.1, 276.9, 196.5, 276.2, 196.0, 275.8);
        vaulter.bezierCurveTo(195.6, 275.4, 195.3, 275.5, 194.1, 276.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(193.2, 290.3);
        vaulter.bezierCurveTo(196.7, 297.0, 199.2, 307.2, 200.1, 309.0);
        vaulter.bezierCurveTo(201.0, 310.8, 201.0, 311.7, 200.3, 313.3);
        vaulter.bezierCurveTo(199.7, 314.9, 198.6, 320.5, 197.9, 325.9);
        vaulter.bezierCurveTo(197.2, 331.4, 197.8, 335.6, 197.8, 335.6);
        vaulter.lineTo(203.0, 340.5);
        vaulter.bezierCurveTo(204.9, 342.2, 206.2, 342.0, 206.5, 343.9);
        vaulter.bezierCurveTo(206.8, 345.7, 202.1, 344.1, 200.4, 343.4);
        vaulter.bezierCurveTo(197.4, 342.1, 198.2, 341.2, 195.4, 341.0);
        vaulter.bezierCurveTo(192.6, 340.8, 192.4, 339.9, 192.5, 338.8);
        vaulter.bezierCurveTo(192.5, 337.8, 193.5, 336.3, 193.5, 336.3);
        vaulter.lineTo(193.0, 330.1);
        vaulter.bezierCurveTo(192.2, 322.6, 192.7, 311.2, 192.7, 311.2);
        vaulter.lineTo(183.2, 297.0);
        vaulter.lineTo(193.2, 290.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 297.5);
        vaulter.bezierCurveTo(194.7, 295.4, 195.0, 292.9, 195.8, 291.4);
        vaulter.bezierCurveTo(196.9, 289.0, 196.9, 274.2, 196.9, 274.2);
        vaulter.bezierCurveTo(197.1, 271.0, 192.5, 264.5, 192.5, 264.5);
        vaulter.bezierCurveTo(192.5, 264.5, 194.9, 259.9, 194.9, 258.7);
        vaulter.bezierCurveTo(194.9, 257.5, 194.3, 253.2, 194.3, 253.2);
        vaulter.bezierCurveTo(194.3, 253.2, 192.6, 248.3, 188.1, 248.5);
        vaulter.bezierCurveTo(183.5, 248.8, 182.2, 254.2, 182.3, 256.4);
        vaulter.bezierCurveTo(182.4, 258.7, 184.8, 264.0, 184.8, 264.0);
        vaulter.bezierCurveTo(184.8, 264.0, 185.3, 266.4, 183.1, 265.9);
        vaulter.bezierCurveTo(180.9, 265.4, 178.8, 276.4, 180.2, 280.5);
        vaulter.bezierCurveTo(181.7, 284.7, 181.4, 295.1, 181.4, 295.1);
        vaulter.bezierCurveTo(181.4, 298.3, 181.4, 299.8, 182.5, 302.3);
        vaulter.bezierCurveTo(185.1, 308.2, 191.8, 311.2, 191.8, 311.2);
        vaulter.bezierCurveTo(189.1, 310.3, 185.4, 312.6, 181.3, 311.6);
        vaulter.bezierCurveTo(176.6, 310.5, 171.8, 309.0, 171.8, 309.0);
        vaulter.bezierCurveTo(171.8, 309.0, 171.3, 308.0, 170.2, 307.4);
        vaulter.bezierCurveTo(169.1, 306.8, 168.3, 307.1, 165.8, 309.4);
        vaulter.bezierCurveTo(163.8, 311.3, 161.0, 312.5, 161.0, 312.5);
        vaulter.bezierCurveTo(161.0, 312.5, 158.3, 315.2, 159.4, 316.0);
        vaulter.bezierCurveTo(160.5, 316.8, 162.0, 315.1, 165.2, 314.2);
        vaulter.bezierCurveTo(168.3, 313.2, 172.9, 314.3, 172.9, 314.3);
        vaulter.bezierCurveTo(172.9, 314.3, 197.7, 321.4, 201.0, 319.4);
        vaulter.bezierCurveTo(205.5, 316.5, 201.9, 310.1, 200.5, 307.3);
        vaulter.bezierCurveTo(197.9, 302.0, 193.1, 297.2, 193.1, 297.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.7, 283.4);
        vaulter.bezierCurveTo(180.7, 283.4, 186.6, 284.1, 187.5, 276.7);
        vaulter.bezierCurveTo(188.5, 269.3, 185.6, 266.7, 183.6, 266.5);
        vaulter.bezierCurveTo(181.7, 266.3, 178.3, 269.8, 178.3, 274.9);
        vaulter.bezierCurveTo(178.3, 280.0, 178.5, 281.6, 180.7, 283.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(158.0, 311.3);
        vaulter.bezierCurveTo(158.0, 311.3, 157.3, 311.5, 156.9, 310.8);
        vaulter.bezierCurveTo(156.6, 310.1, 157.1, 309.6, 157.1, 309.6);
        vaulter.bezierCurveTo(157.6, 309.3, 207.9, 282.1, 262.2, 260.0);
        vaulter.lineTo(397.6, 204.9);
        vaulter.lineTo(398.4, 206.8);
        vaulter.lineTo(262.9, 261.9);
        vaulter.bezierCurveTo(208.7, 283.9, 158.5, 311.1, 158.0, 311.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(203.4, 287.5);
        vaulter.bezierCurveTo(203.4, 287.5, 204.4, 285.6, 205.1, 285.3);
        vaulter.bezierCurveTo(205.8, 285.0, 207.3, 285.1, 207.3, 285.1);
        vaulter.lineTo(207.9, 286.3);
        vaulter.lineTo(207.3, 288.1);
        vaulter.lineTo(205.3, 288.5);
        vaulter.bezierCurveTo(205.3, 288.5, 205.0, 289.0, 204.3, 288.8);
        vaulter.bezierCurveTo(203.7, 288.7, 203.4, 287.5, 203.4, 287.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(185.2, 268.1);
        vaulter.bezierCurveTo(185.2, 268.1, 183.3, 266.4, 181.1, 267.1);
        vaulter.bezierCurveTo(179.0, 267.7, 175.9, 270.7, 174.0, 272.7);
        vaulter.bezierCurveTo(172.1, 274.7, 169.5, 280.6, 168.8, 282.0);
        vaulter.bezierCurveTo(168.0, 283.5, 168.8, 284.6, 169.4, 288.7);
        vaulter.bezierCurveTo(170.0, 292.8, 171.9, 298.9, 171.9, 298.9);
        vaulter.bezierCurveTo(171.9, 298.9, 171.4, 300.0, 171.4, 300.5);
        vaulter.bezierCurveTo(171.4, 300.9, 171.1, 303.4, 172.3, 303.8);
        vaulter.bezierCurveTo(173.4, 304.1, 175.9, 303.3, 175.9, 303.3);
        vaulter.bezierCurveTo(175.9, 303.3, 177.3, 302.3, 177.0, 300.7);
        vaulter.bezierCurveTo(177.0, 300.7, 176.8, 298.6, 175.2, 298.5);
        vaulter.lineTo(174.2, 297.8);
        vaulter.bezierCurveTo(174.2, 297.8, 173.1, 294.3, 173.5, 290.6);
        vaulter.bezierCurveTo(173.9, 286.8, 173.5, 281.2, 173.5, 281.2);
        vaulter.lineTo(179.3, 277.1);
        vaulter.bezierCurveTo(182.8, 277.7, 185.2, 274.9, 185.2, 274.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    },

    function () {
      if (vaulter.visible) {

        // vaulter/runup/Path
        vaulter.save();
        vaulter.beginPath();
        vaulter.moveTo(189.8, 269.0);
        vaulter.bezierCurveTo(189.8, 269.0, 191.5, 268.3, 193.2, 268.5);
        vaulter.bezierCurveTo(194.9, 268.8, 198.0, 270.7, 197.8, 272.9);
        vaulter.bezierCurveTo(197.8, 272.9, 201.7, 277.1, 202.2, 277.8);
        vaulter.bezierCurveTo(202.7, 278.4, 207.0, 280.9, 206.9, 283.1);
        vaulter.bezierCurveTo(206.9, 285.3, 206.4, 286.6, 206.6, 287.8);
        vaulter.lineTo(203.5, 289.1);
        vaulter.bezierCurveTo(203.5, 289.1, 201.7, 287.9, 201.4, 286.3);
        vaulter.bezierCurveTo(201.1, 284.6, 201.5, 283.9, 200.8, 283.4);
        vaulter.bezierCurveTo(200.1, 282.9, 199.0, 281.9, 198.1, 280.9);
        vaulter.bezierCurveTo(197.1, 279.9, 196.5, 279.2, 196.0, 278.8);
        vaulter.bezierCurveTo(195.6, 278.4, 195.3, 278.5, 194.1, 279.1);
        vaulter.fillStyle("rgb(38, 90, 137)");
        vaulter.fill();
        vaulter.lineWidth(0.5);
        vaulter.strokeStyle("rgb(152, 203, 255)");
        vaulter.lineJoin("miter");
        vaulter.miterLimit(4.0);
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(194.9, 297.1);
        vaulter.bezierCurveTo(194.7, 304.7, 192.1, 314.8, 192.1, 316.8);
        vaulter.bezierCurveTo(192.0, 318.8, 191.6, 319.6, 190.3, 320.7);
        vaulter.bezierCurveTo(188.9, 321.8, 185.3, 323.1, 182.1, 327.6);
        vaulter.bezierCurveTo(178.9, 332.0, 177.4, 336.0, 177.4, 336.0);
        vaulter.lineTo(179.0, 341.6);
        vaulter.bezierCurveTo(181.3, 342.7, 182.6, 342.1, 183.3, 343.9);
        vaulter.bezierCurveTo(184.0, 345.6, 179.0, 345.2, 177.3, 345.0);
        vaulter.bezierCurveTo(174.1, 344.5, 175.1, 341.2, 172.8, 339.7);
        vaulter.bezierCurveTo(170.4, 338.2, 170.7, 337.3, 171.3, 336.4);
        vaulter.bezierCurveTo(171.8, 335.5, 173.3, 334.7, 173.3, 334.7);
        vaulter.lineTo(175.9, 329.0);
        vaulter.bezierCurveTo(178.7, 322.0, 184.5, 315.3, 184.5, 315.3);
        vaulter.bezierCurveTo(184.5, 315.3, 182.4, 309.5, 182.3, 301.2);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(194.8, 300.5);
        vaulter.bezierCurveTo(194.7, 298.4, 195.0, 295.9, 195.8, 294.4);
        vaulter.bezierCurveTo(196.9, 292.0, 196.9, 277.2, 196.9, 277.2);
        vaulter.bezierCurveTo(197.1, 274.0, 192.5, 267.5, 192.5, 267.5);
        vaulter.bezierCurveTo(192.5, 267.5, 194.9, 262.9, 194.9, 261.7);
        vaulter.bezierCurveTo(194.9, 260.5, 194.3, 256.2, 194.3, 256.2);
        vaulter.bezierCurveTo(194.3, 256.2, 192.6, 251.3, 188.1, 251.5);
        vaulter.bezierCurveTo(183.5, 251.8, 182.2, 257.2, 182.3, 259.4);
        vaulter.bezierCurveTo(182.4, 261.7, 184.8, 267.0, 184.8, 267.0);
        vaulter.bezierCurveTo(184.8, 267.0, 185.3, 269.4, 183.1, 268.9);
        vaulter.bezierCurveTo(180.9, 268.4, 178.8, 279.4, 180.2, 283.5);
        vaulter.bezierCurveTo(181.7, 287.7, 181.4, 298.1, 181.4, 298.1);
        vaulter.bezierCurveTo(181.4, 301.3, 181.4, 302.8, 182.5, 305.3);
        vaulter.bezierCurveTo(185.1, 311.2, 200.0, 313.5, 200.0, 313.5);
        vaulter.bezierCurveTo(197.1, 313.6, 194.4, 322.7, 191.4, 325.7);
        vaulter.bezierCurveTo(188.0, 329.1, 186.3, 330.6, 186.3, 330.6);
        vaulter.bezierCurveTo(186.3, 330.6, 185.1, 330.4, 184.1, 331.1);
        vaulter.bezierCurveTo(183.1, 331.7, 183.0, 334.1, 185.5, 336.4);
        vaulter.bezierCurveTo(187.6, 338.3, 189.0, 341.0, 189.0, 341.0);
        vaulter.bezierCurveTo(189.0, 341.0, 191.8, 343.4, 192.6, 342.3);
        vaulter.bezierCurveTo(193.3, 341.1, 191.7, 338.8, 190.5, 335.8);
        vaulter.bezierCurveTo(189.3, 332.7, 191.3, 331.7, 191.3, 331.7);
        vaulter.bezierCurveTo(191.3, 331.7, 204.9, 319.3, 207.2, 316.1);
        vaulter.bezierCurveTo(210.4, 311.9, 204.6, 307.2, 202.3, 305.1);
        vaulter.bezierCurveTo(197.9, 301.2, 193.6, 299.8, 193.6, 299.8);
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(180.7, 286.4);
        vaulter.bezierCurveTo(180.7, 286.4, 186.6, 287.1, 187.5, 279.7);
        vaulter.bezierCurveTo(188.5, 272.2, 185.6, 269.7, 183.6, 269.5);
        vaulter.bezierCurveTo(181.7, 269.3, 178.3, 272.8, 178.3, 277.9);
        vaulter.bezierCurveTo(178.3, 283.0, 178.5, 284.6, 180.7, 286.4);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(158.0, 314.3);
        vaulter.bezierCurveTo(158.0, 314.3, 157.3, 314.5, 156.9, 313.8);
        vaulter.bezierCurveTo(156.6, 313.1, 157.1, 312.6, 157.1, 312.6);
        vaulter.bezierCurveTo(157.6, 312.3, 207.9, 285.1, 262.2, 263.0);
        vaulter.lineTo(397.6, 207.9);
        vaulter.lineTo(398.4, 209.8);
        vaulter.lineTo(262.9, 264.9);
        vaulter.bezierCurveTo(208.7, 286.9, 158.5, 314.1, 158.0, 314.3);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(203.4, 290.5);
        vaulter.bezierCurveTo(203.4, 290.5, 204.4, 288.6, 205.1, 288.3);
        vaulter.bezierCurveTo(205.8, 288.0, 207.3, 288.1, 207.3, 288.1);
        vaulter.lineTo(207.9, 289.3);
        vaulter.lineTo(207.3, 291.1);
        vaulter.lineTo(205.3, 291.5);
        vaulter.bezierCurveTo(205.3, 291.5, 205.0, 292.0, 204.3, 291.8);
        vaulter.bezierCurveTo(203.7, 291.7, 203.4, 290.5, 203.4, 290.5);
        vaulter.closePath();
        vaulter.fill();
        vaulter.stroke();

        // vaulter/runup/Path
        vaulter.beginPath();
        vaulter.moveTo(185.2, 271.1);
        vaulter.bezierCurveTo(185.2, 271.1, 183.3, 269.4, 181.1, 270.1);
        vaulter.bezierCurveTo(179.0, 270.7, 175.9, 273.7, 174.0, 275.7);
        vaulter.bezierCurveTo(172.1, 277.7, 169.5, 283.6, 168.8, 285.0);
        vaulter.bezierCurveTo(168.0, 286.5, 168.8, 287.6, 169.4, 291.7);
        vaulter.bezierCurveTo(170.0, 295.8, 171.9, 301.9, 171.9, 301.9);
        vaulter.bezierCurveTo(171.9, 301.9, 171.4, 303.0, 171.4, 303.5);
        vaulter.bezierCurveTo(171.4, 303.9, 171.1, 306.4, 172.3, 306.8);
        vaulter.bezierCurveTo(173.4, 307.1, 175.9, 306.3, 175.9, 306.3);
        vaulter.bezierCurveTo(175.9, 306.3, 177.3, 305.3, 177.0, 303.7);
        vaulter.bezierCurveTo(177.0, 303.7, 176.8, 301.6, 175.2, 301.5);
        vaulter.lineTo(174.2, 300.8);
        vaulter.bezierCurveTo(174.2, 300.8, 173.1, 297.3, 173.5, 293.6);
        vaulter.bezierCurveTo(173.9, 289.8, 173.5, 284.2, 173.5, 284.2);
        vaulter.lineTo(179.3, 280.1);
        vaulter.bezierCurveTo(182.8, 280.7, 185.2, 277.9, 185.2, 277.9);
        vaulter.fill();
        vaulter.stroke();
        vaulter.restore();
      }
    }
  ];
  vaulter.runup.iterations = 4;
  vaulter.setSequenceOrder("runup", "main");

  
  pitshadow = new Character("pitshadow", false);
  pitshadow.show();
  pitshadow.main.cels = [
    function () {
      if (pitshadow.visible) {

        // pitshadow/Path
        pitshadow.save();
        pitshadow.beginPath();
        pitshadow.moveTo(524.3, 314.1);
        pitshadow.bezierCurveTo(521.4, 314.1, 512.3, 312.9, 512.2, 311.3);
        pitshadow.bezierCurveTo(512.0, 309.7, 516.3, 310.2, 518.5, 310.3);
        pitshadow.bezierCurveTo(521.6, 310.5, 525.0, 310.1, 528.0, 310.6);
        pitshadow.bezierCurveTo(529.8, 311.0, 533.6, 312.7, 530.8, 313.8);
        pitshadow.bezierCurveTo(529.3, 314.5, 526.2, 313.9, 524.3, 314.1);
        pitshadow.closePath();
        pitshadow.fillStyle("rgb(175, 195, 226)");
        pitshadow.fill();
        pitshadow.restore();
      }
    },

    function () {
      if (pitshadow.visible) {

        // pitshadow/Path
        pitshadow.save();
        pitshadow.beginPath();
        pitshadow.moveTo(525.5, 307.6);
        pitshadow.bezierCurveTo(521.4, 307.6, 508.7, 305.9, 508.4, 303.7);
        pitshadow.bezierCurveTo(508.2, 301.5, 514.2, 302.2, 517.3, 302.4);
        pitshadow.bezierCurveTo(521.6, 302.6, 526.4, 302.0, 530.6, 302.8);
        pitshadow.bezierCurveTo(533.1, 303.3, 538.4, 305.6, 534.6, 307.3);
        pitshadow.bezierCurveTo(532.4, 308.3, 528.1, 307.4, 525.5, 307.6);
        pitshadow.closePath();
        pitshadow.fillStyle("rgb(175, 195, 226)");
        pitshadow.fill();
        pitshadow.restore();
      }
    },

    function () {
      if (pitshadow.visible) {

        // pitshadow/Path
        pitshadow.save();
        pitshadow.beginPath();
        pitshadow.moveTo(528.9, 303.9);
        pitshadow.bezierCurveTo(523.2, 303.9, 491.6, 303.2, 491.2, 300.1);
        pitshadow.bezierCurveTo(490.9, 297.1, 513.7, 297.6, 518.0, 297.8);
        pitshadow.bezierCurveTo(524.0, 298.1, 540.3, 298.1, 546.2, 299.1);
        pitshadow.bezierCurveTo(549.7, 299.8, 547.3, 301.5, 541.9, 303.9);
        pitshadow.bezierCurveTo(538.8, 305.2, 532.7, 303.5, 528.9, 303.9);
        pitshadow.closePath();
        pitshadow.fillStyle("rgb(175, 195, 226)");
        pitshadow.fill();
        pitshadow.restore();
      }
    },

    function () {
      if (pitshadow.visible) {

        // pitshadow/Path
        pitshadow.save();
        pitshadow.beginPath();
        pitshadow.moveTo(528.9, 303.9);
        pitshadow.bezierCurveTo(511.4, 301.4, 484.8, 303.7, 484.4, 300.6);
        pitshadow.bezierCurveTo(484.1, 297.5, 513.7, 297.6, 518.0, 297.8);
        pitshadow.bezierCurveTo(524.0, 298.1, 548.8, 296.6, 554.7, 297.6);
        pitshadow.bezierCurveTo(558.2, 298.3, 555.8, 300.0, 550.4, 302.4);
        pitshadow.bezierCurveTo(547.3, 303.7, 532.7, 303.5, 528.9, 303.9);
        pitshadow.closePath();
        pitshadow.fillStyle("rgb(175, 195, 226)");
        pitshadow.fill();
        pitshadow.restore();
      }
    },

    function () {
      if (pitshadow.visible) {

        // pitshadow/Path
        pitshadow.save();
        pitshadow.beginPath();
        pitshadow.moveTo(528.9, 303.9);
        pitshadow.bezierCurveTo(521.0, 302.8, 512.3, 301.7, 504.7, 301.4);
        pitshadow.bezierCurveTo(495.3, 301.1, 487.8, 301.6, 487.6, 299.9);
        pitshadow.bezierCurveTo(487.3, 296.8, 513.8, 298.1, 518.1, 298.3);
        pitshadow.bezierCurveTo(521.9, 298.5, 536.3, 298.7, 547.9, 298.8);
        pitshadow.bezierCurveTo(549.5, 298.8, 550.8, 297.8, 552.2, 297.8);
        pitshadow.bezierCurveTo(557.0, 297.9, 560.0, 298.2, 561.0, 299.6);
        pitshadow.bezierCurveTo(563.0, 302.2, 557.2, 303.9, 550.8, 302.7);
        pitshadow.bezierCurveTo(550.1, 302.6, 548.8, 301.2, 547.6, 301.7);
        pitshadow.bezierCurveTo(540.9, 304.6, 532.0, 303.6, 528.9, 303.9);
        pitshadow.closePath();
        pitshadow.fillStyle("rgb(175, 195, 226)");
        pitshadow.fill();
        pitshadow.restore();
      }
    },

    function () {
      if (pitshadow.visible) {

        // pitshadow/Path
        pitshadow.save();
        pitshadow.beginPath();
        pitshadow.moveTo(493.3, 299.6);
        pitshadow.bezierCurveTo(495.3, 296.8, 497.3, 297.7, 500.5, 297.7);
        pitshadow.bezierCurveTo(503.9, 297.7, 502.5, 297.1, 508.6, 296.5);
        pitshadow.bezierCurveTo(514.1, 295.9, 518.4, 300.1, 524.0, 300.0);
        pitshadow.bezierCurveTo(526.8, 300.0, 525.8, 299.4, 528.1, 297.7);
        pitshadow.bezierCurveTo(529.3, 296.7, 532.1, 297.6, 533.0, 298.2);
        pitshadow.bezierCurveTo(534.9, 299.3, 536.6, 298.8, 539.3, 299.0);
        pitshadow.bezierCurveTo(542.0, 299.2, 543.8, 293.2, 546.6, 294.3);
        pitshadow.bezierCurveTo(548.3, 295.0, 550.1, 296.8, 552.0, 297.4);
        pitshadow.bezierCurveTo(553.7, 297.9, 555.2, 297.4, 556.8, 297.1);
        pitshadow.bezierCurveTo(560.9, 296.5, 565.0, 295.1, 569.0, 296.5);
        pitshadow.bezierCurveTo(570.5, 297.0, 581.4, 296.9, 581.6, 298.6);
        pitshadow.bezierCurveTo(581.9, 300.9, 567.5, 300.6, 565.8, 301.4);
        pitshadow.bezierCurveTo(561.3, 303.6, 562.7, 303.8, 557.5, 305.1);
        pitshadow.bezierCurveTo(555.2, 305.6, 551.2, 308.3, 549.0, 310.1);
        pitshadow.bezierCurveTo(546.9, 311.9, 541.7, 312.6, 539.3, 311.4);
        pitshadow.bezierCurveTo(534.3, 308.9, 530.5, 310.5, 525.9, 309.6);
        pitshadow.bezierCurveTo(522.6, 309.0, 521.2, 308.5, 517.8, 308.3);
        pitshadow.bezierCurveTo(514.1, 308.1, 509.9, 307.0, 506.4, 306.6);
        pitshadow.bezierCurveTo(504.7, 306.4, 505.3, 305.2, 503.7, 305.1);
        pitshadow.bezierCurveTo(501.7, 305.1, 499.5, 305.4, 497.7, 304.6);
        pitshadow.bezierCurveTo(495.1, 303.6, 490.0, 302.4, 493.3, 299.6);
        pitshadow.closePath();
        pitshadow.fillStyle("rgb(239, 239, 249)");
        pitshadow.fill();
        pitshadow.restore();
      }
    },
  ];
  pitshadow.main.starting_frame = 54;



  pitforeground = new Character("pitforeground", false);
  pitforeground.show();
  pitforeground.main.cels = [
    function () {
      if (pitforeground.visible) {

      var gradient;

        // pitforeground/Path
        pitforeground.save();
        pitforeground.beginPath();
        pitforeground.moveTo(481.2, 27.9);
        pitforeground.lineTo(484.4, 27.9);
        pitforeground.lineTo(484.4, 357.4);
        pitforeground.lineTo(481.2, 357.4);
        pitforeground.lineTo(481.2, 27.9);
        pitforeground.closePath();
        gradient =   pitforeground.createLinearGradient(480.9, 192.7, 484.7, 192.7);
        pitforeground.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pitforeground.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pitforeground.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pitforeground.fillStyle(gradient);
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(480.3, 308.9);
        pitforeground.lineTo(414.0, 326.9);
        pitforeground.lineTo(357.0, 326.9);
        pitforeground.lineTo(357.0, 354.6);
        pitforeground.lineTo(480.3, 354.6);
        pitforeground.lineTo(480.3, 308.9);
        pitforeground.fillStyle("rgb(123, 162, 212)");
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(341.0, 320.6);
        pitforeground.lineTo(357.0, 326.9);
        pitforeground.lineTo(357.0, 354.6);
        pitforeground.lineTo(341.0, 348.2);
        pitforeground.lineTo(341.0, 320.6);
        pitforeground.closePath();
        pitforeground.fillStyle("rgb(79, 134, 198)");
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(464.3, 302.5);
        pitforeground.lineTo(398.1, 320.6);
        pitforeground.lineTo(341.0, 320.6);
        pitforeground.lineTo(357.0, 326.9);
        pitforeground.lineTo(414.0, 326.9);
        pitforeground.lineTo(480.3, 308.9);
        pitforeground.lineTo(464.3, 302.5);
        pitforeground.closePath();
        pitforeground.fillStyle("rgb(198, 213, 237)");
        pitforeground.fill();

        // pitforeground/Path
        pitforeground.beginPath();
        pitforeground.moveTo(460.8, 51.3);
        pitforeground.lineTo(487.8, 45.2);
        pitforeground.lineTo(488.5, 48.3);
        pitforeground.lineTo(461.5, 54.5);
        pitforeground.lineTo(460.8, 51.3);
        pitforeground.closePath();
        gradient =   pitforeground.createLinearGradient(474.3, 48.1, 475.0, 51.3);
        pitforeground.addColorStop(gradient, 0.00, "rgb(198, 199, 201)");
        pitforeground.addColorStop(gradient, 0.35, "rgb(255, 255, 255)");
        pitforeground.addColorStop(gradient, 1.00, "rgb(146, 148, 151)");
        pitforeground.fillStyle(gradient);
        pitforeground.fill();
        pitforeground.restore();
      }
    }
  ];

  t.load(play, step, slider, back, forward, track, pit, shadow, pitshadow, vaulter, pitforeground);
  
};

stage();

console.log("I can take you there. Just follow me.");
