var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0ce36dfa-e355-4dec-9962-f1c123c1f851","36929ce4-28b4-4d80-8b78-7d3525564c5f","4c1e9a06-7cfa-485d-82ae-65c7089ae2db","eac09b31-97c9-4011-b204-293ac769c42b"],"propsByKey":{"0ce36dfa-e355-4dec-9962-f1c123c1f851":{"name":"ship05_1","sourceUrl":null,"frameSize":{"x":291,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"uQcAN0d5Xz94J4yq3uiGVKktKdcWDRi1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":291,"y":399},"rootRelativePath":"assets/0ce36dfa-e355-4dec-9962-f1c123c1f851.png"},"36929ce4-28b4-4d80-8b78-7d3525564c5f":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"4c1e9a06-7cfa-485d-82ae-65c7089ae2db":{"name":"alien_03_2","sourceUrl":null,"frameSize":{"x":389,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"spkcR8RkbPjLaMFBt2sEPo0OyjOqeyzc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":400},"rootRelativePath":"assets/4c1e9a06-7cfa-485d-82ae-65c7089ae2db.png"},"eac09b31-97c9-4011-b204-293ac769c42b":{"name":"background_landscape09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,230,10,10);
b.setAnimation("background_landscape09_1");
b.scale=1;
var hero = createSprite(200,200,20,20);
hero.setAnimation("ship05_1");
hero.scale=0.23;
var alien1 = createSprite(30,30,10,10);
alien1.setAnimation("alien_03_2");
alien1.scale=0.16;
var alien2 = createSprite(360,30,10,10);
alien2.setAnimation("alien_03_2");
alien2.scale=0.16;
var alien3 = createSprite(360,360,10,10);
alien3.setAnimation("alien_03_2");
alien3.scale=0.16;
var alien4 = createSprite(30,360,10,10);
alien4.setAnimation("alien_03_2");
alien4.scale=0.16;
var alien5 = createSprite(50,200,10,10);
alien5.setAnimation("alien_03_2");
alien5.scale = 0.16;
var alien6 = createSprite(350,200,10,10);
alien6.setAnimation("alien_03_2");
alien6.scale = 0.16;

var gameState="serve";
var tiempo=300;
var lives=1;







function draw() {
background("darkblue");
textSize(30);
fill("white");
text(Math.round(tiempo),330,30);
tiempo = tiempo-0.03;

textSize(20);
fill("white");
text("lives: "+lives,100,30);


if (keyDown("up")) {
    hero.y=hero.y-4;
}
if (keyDown("down")) {
    hero.y=hero.y+4;
  }
if (keyDown("left")) {
    hero.x=hero.x-4;  
    }
if (keyDown("right")) {
    hero.x=hero.x+4;  
    }
if (hero.isTouching(alien1)||
    hero.isTouching(alien2)||
    hero.isTouching(alien3)||
    hero.isTouching(alien4)||
    hero.isTouching(alien5)||
    hero.isTouching(alien6)){
    hero.destroy();
    lives = lives-1
    playSound("assets/category_bell/vibrant_game_correct_answer_1.mp3",false)
    textSize(30);
    stroke("blue");
    text("Game Over",150,20);
    alien1.velocityX="0";
  alien1.velocityY="-0";
  alien2.velocityX="0";
  alien2.velocityY="-0"; 
  alien3.velocityX="0";
  alien3.velocityY="-0";
  alien4.velocityX="0";
  alien4.velocityY="-0"; 
  alien5.velocityX="0";
  alien5.velocityY="-0";
  alien6.velocityX="0";
  alien6.velocityY="-0";
    }
    
if (gameState=="serve") {
    if (keyDown("space")) {
  alien1.velocityX="2";
  alien1.velocityY="-2";
  alien2.velocityX="2";
  alien2.velocityY="-2"; 
  alien3.velocityX="2";
  alien3.velocityY="-2";
  alien4.velocityX="2";
  alien4.velocityY="-2"; 
  alien5.velocityX="2";
  alien5.velocityY="-2";
  alien6.velocityX="2";
  alien6.velocityY="-2";
  gameState="play";
    }
    }

    if (tiempo==240) {
  alien1.velocityX="4";
  alien1.velocityY="-4";
  alien2.velocityX="4";
  alien2.velocityY="-4"; 
  alien3.velocityX="4";
  alien3.velocityY="-4";
  alien4.velocityX="4";
  alien4.velocityY="-4"; 
  alien5.velocityX="4";
  alien5.velocityY="-4";
  alien6.velocityX="4";
  alien6.velocityY="-4"; 
    }     
           

if (tiempo==120) {
  alien1.velocityX="6";
  alien1.velocityY="-6";
  alien2.velocityX="6";
  alien2.velocityY="-6"; 
  alien3.velocityX="6";
  alien3.velocityY="-6";
  alien4.velocityX="6";
  alien4.velocityY="-6"; 
  alien5.velocityX="6";
  alien5.velocityY="-6";
  alien6.velocityX="6";
  alien6.velocityY="-6"; 
    }


  createEdgeSprites();
  alien1.bounceOff(edges);
  alien2.bounceOff(edges);
  alien3.bounceOff(edges);
  alien4.bounceOff(edges);
  alien5.bounceOff(edges);
  alien6.bounceOff(edges);
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
