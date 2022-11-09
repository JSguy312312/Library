
    const body = document.getElementById("body");
    
    class GameObject{
        constructor(x, y, w, h, c, id){
             this.X = x;
            this.Y = y;
            this.Velocity = {x: 0, y: 0};
            this.Width = w;
            this.Height = h;
            this.Color = c;
            this.Colisions = false;
            this.Shape = "square";
            this.ID = id;
        }

        enable_collision(){
            Solid = true;
        }
    } 
    var GameObjects = [];
    var objects = [];
    const Display = {
        Height: screen.height,
        Width: screen.width, 
        MiddleY: screen.height/2,
        MiddleX: screen.width/2, 
        
    
    }
    var Settings = {UpdateRate: 10}



    

    var TextElm = "code";
    var CE = "document.getElementById(TextElm).value";
    eval(CE);


    var TextElm = "code";
    var elm = document.getElementById("run");
    var CE = "document.getElementById(TextElm).value";
    elm.addEventListener("click", function(event) {

            eval(CE);
    
    });







    setInterval(function(){
        
        Update();

        for (let index = 0; index < objects.length; index++) {
            var obj = objects[index];
            GameObjects[index].X += GameObjects[index].Velocity.x;
            GameObjects[index].Y += GameObjects[index].Velocity.y;
            //if(GameObjects[index].CanMove.x){GameObjects[index].X += GameObjects[index].Velocity.x;}
            //if(GameObjects[index].CanMove.y){GameObjects[index].Y += GameObjects[index].Velocity.y;}
            if(GameObjects[index].Shape == "square")
            {
                
            }



            obj.style.left = GameObjects[index].X-(GameObjects[index].Width/2) +"px";
            obj.style.top = GameObjects[index].Y-(GameObjects[index].Height/2)+"px";
            obj.style.width = GameObjects[index].Width+"px";
            obj.style.height = GameObjects[index].Height+"px";

            if(GameObjects[index].Colisions == true){
                var A = obj;
                var C = GameObjects[index];
                for (let index = 0; index < GameObjects.length; index++) {
                    var B =objects[index];
                    var D =GameObjects[index];
                    if(B != A){

                        //let d1 = A.getBoundingClientRect();
                        //let d2 = B.getBoundingClientRect();
                        if(isCollide(A, B)) {
                            
                            
                                

                            OnCollision(C, D);
                            
                            

                        }



                    }
                }
            }
        }

    }, Settings.UpdateRate);






   
    function isCollide(a, b) {
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();

        return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
        );
    }
    

    function Destroy(object){
        for (let index = 0; index < objects.length; index++) {
            if(GameObjects[index].ID == object.ID){
                objects[index].style.display = "none";
                objects.splice(index);
                GameObjects.splice(index);
            }
            
        }
    }










    function rectangle(x, y, width, height, color, ID){
        var rec = document.createElement("div");
        rec.style.position = "absolute";
        rec.style.left = x+"px";
        rec.style.top = y+"px";
        rec.style.width = width;
        rec.style.height = height;
        rec.style.backgroundColor = color;
        
        var Gobj =new GameObject(x, y, width, height, color, ID);
        GameObjects.push(Gobj);
        objects.push(rec);
        body.append(rec);
        
    }

    function FindObject(id){
        for (let index = 0; index < GameObjects.length; index++) {
            if(GameObjects[index].ID == id){
                return GameObjects[index];
            }
            
        }
    }
    var inputs = [];
    document.addEventListener("keydown", function(event) {
        
        inputs.push(event.code);
    });
    document.addEventListener("keyup", function(event) {
        for (let index = 0; index < inputs.length; index++) {
            if(inputs[index] == event.code){
                inputs.splice(inputs[index]);
            }
            
        }
        
    });

    function KeyDown(key){
        if(inputs.includes(key)){
            return true;
        }
    }

    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    

    
