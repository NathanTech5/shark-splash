namespace SpriteKind {
    export const Fish = SpriteKind.create()
    export const enemyShark = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
info.onScore(10, function () {
    game.gameOver(true)
})
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    ....................................
    ....................................
    ....................................
    ...............ffffff...............
    ..............f99999f...............
    .......fffffff99999f................
    .....ff9999999999999ffff.......fffff
    ...ff9999999999999999999ff....f9999f
    ..f99999999999999999999999ffff9999f.
    .f9c9999999999999999999999999f999f..
    .f9999999999999999999999999999999f..
    .ff9999999999999999999999999ff999f..
    ..ff111111111111111111111111..f999f.
    ....fffffff11111111111ffff.....ff99f
    ........ffffff111111fff..........fff
    ...............ffffff...............
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c d d d d d c . . . 
    . . . . . . c c c c c d c . . . 
    . . . . . c 4 4 4 4 d c c . . . 
    . . . . c d 4 4 4 4 4 1 c . . . 
    . . . c 4 4 1 4 4 4 4 4 1 c . . 
    . . c 4 4 4 4 1 4 4 4 4 1 c c c 
    . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
    . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
    f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
    f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
    . f 4 4 4 4 1 4 4 4 4 c b c f f 
    . . f f f d 4 4 4 4 c d d c . . 
    . . . . . f f f f f c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Fish)
mySprite.setPosition(120, 60)
let mySprite3 = sprites.create(img`
    ....................................
    ....................................
    ....................................
    ...............ccffff...............
    ..............cddbbbf...............
    .......ffffffcddbbbf................
    .....ffbbbbbbbbbbbbbcfff.......ccccc
    ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
    ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
    .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
    .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
    .ffbb1111fffbbcbbbbcccccccbcffbccf..
    ..ff111111111bbbbccccccbbbcc..fbbcf.
    ....ccccccc111bdbbbfddbccc.....ffbbf
    ........ccccccfbdbbbfcc..........fff
    ...............ffffff...............
    `, SpriteKind.Enemy)
mySprite3.setVelocity(30, 0)
info.setLife(3)
