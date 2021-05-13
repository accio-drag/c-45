class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gamestate');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
    }
    form = new Form()
    form.display();
    naruto = createSprite(100,400,10,10)
    naruto.addImage(img1)
    sasuke = createSprite(1220,400,10,10)
    sasuke.addImage(img2)
  players = [naruto,sasuke]
    }
play(){
  form.hide()
Player.getPlayerInfo()
background(bg2)
text(mouseX+","+mouseY,500,500)

drawSprites();
}


}