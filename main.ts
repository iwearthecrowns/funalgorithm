controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite4 = sprites.create(img`
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 9 9 9 9 9 9 9 9 9 1 . . 
        . . . 1 9 9 9 9 9 9 9 9 9 1 . . 
        . . . 1 9 9 9 9 9 9 9 9 9 1 . . 
        . . . 1 9 9 9 9 9 9 9 9 9 1 . . 
        . . . 1 9 f f f f f f f f 1 . . 
        . . . 1 9 f 1 1 f f 1 1 f 1 . . 
        . . . 1 9 f f 1 f f 1 f f 1 . . 
        . . . 1 9 f f 1 f f 1 f f 1 . . 
        . . . 1 9 f f 1 f f 1 f f 1 . . 
        . . . 1 9 f f 1 1 1 1 f f 1 . . 
        . . . 1 9 f f f f f f f f 1 . . 
        . . . 1 9 9 9 9 9 9 9 9 9 1 . . 
        . . . 1 9 9 9 9 9 9 9 9 9 1 . . 
        . . . 1 9 9 9 9 9 9 9 9 9 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        `, SpriteKind.Player)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite2.say("Hi- I missed the bus", 2000)
    pause(3000)
    mySprite2.say("Can I ride home with you?", 2000)
    pause(3000)
    mySprite3.say("Sure!", 2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.magicWand.play()
    mySprite2.say("Hi Mom, can you pick me up?")
    pause(3000)
    mySprite2.say("I missed the bus", 2000)
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . . 5 . . 5 . 5 . 5 . 5 . 5 
    . . 5 5 5 . . 5 5 5 5 5 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . 5 5 5 f f 5 5 5 5 5 5 f f 5 
    . . . . . f f . . . . . . f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(111, 60)
for (let index = 0; index < 50; index++) {
    mySprite.x += -2
    pause(100)
}
mySprite2.say("oh no!", 2000)
pause(2000)
game.splash("what do you do?")
game.splash("A- Call mom")
game.splash("B- Find a friend")
game.splash("Up- Get an Uber")
