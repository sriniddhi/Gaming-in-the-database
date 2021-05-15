class Game {
    constructor(){}

    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })

    }

    start(){
    if(gameState===0){
    
        player=new Player()
        player.getCount()

        form=new Form()
        form.display()

    }
    }

    play(){
        form.hide()
        textSize(37)
        text("Game Start",300,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var displayPosition=130
            console.log("I AM")
            for(var plr in allPlayers){
                
                if(plr==="player"+player.index)
                fill("red")
                else
                    fill("blue")
                displayPosition=displayPosition+20;
            text(allPlayers[plr].name+" : "+allPlayers[plr].distance,220,displayPosition)

            }

            
        }
        if(keyIsDown(UP_ARROW)){
            player.distance=player.distance+50;
            player.update()
        }
    }
}
//var construct needs to be executed when they play button is pressed:mousePressed{
//construct(34,56,100)that we need is a new collection of setPosition 
//}