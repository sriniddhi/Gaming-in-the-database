class Form{
    constructor(){
        this.input=createInput("Enter a name")
        this.button=createButton("play")
       this.greetings=createElement('h3')
    }

    hide(){
        this.greetings.hide()
        this.input.hide()
        this.button.hide()
    }
    display(){
        var title=createElement('h1')
        title.html("Car Racing Game")
        title.position(530,10)
        
        this.input.position(530,160)
        this.button.position(530,196)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()

           player.name=this.input.value()

            playerCount++;
            player.update() 
            player.updateCount(playerCount)
            this.greetings.html("WELCOME "+player.name)
            this.greetings.position(130,160)
        })

    }
}