scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.splash("///YOU DIED///", "///\"CRABBY\" WALKED IN POISON GRASS///")
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.splash("///YOU DIED///", "///\"CRABBY\" WAS HIT BY LEAF///")
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.splash("///YOU DIED///", "///\"CRABBY\" WAS HIT BY LEAF///")
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.splash("///YOU DIED///", "///\"CRABBY\" WAS HIT BY LEAF///")
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.splash("///YOU DIED///", "///\"CRABBY\" STEPPED ON STICK///")
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.splash("///YOU DIED///", "///\"CRABBY\" WAS HIT BY LEAF///")
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.splash("///YOU DIED///", "///\"CRABBY\" STEPPED ON STICK///")
    game.over(false, effects.slash)
})
let MUSIC = 0
let DIE = 0
let CRABBY = sprites.create(assets.image`STEVENDACRAB`, SpriteKind.Player)
controller.moveSprite(CRABBY, 100, 100)
tiles.setTilemap(tilemap`POISONGRASSLEVEL`)
scene.cameraFollowSprite(CRABBY)
tiles.placeOnTile(CRABBY, tiles.getTileLocation(3, 15))
game.splash("EMOTIONAL DAMAGE", "press a to start")
game.onUpdateInterval(5000, function () {
    DIE = randint(0, 10)
})
game.onUpdateInterval(5000, function () {
    MUSIC = randint(1, 3)
})
game.onUpdateInterval(1000, function () {
    if (DIE == 7) {
        game.splash("///YOU DIED///", "///\"CRABBY\" WAS HIT BY SUN///")
        game.over(false, effects.smiles)
    }
})
game.onUpdateInterval(randint(5000, 50000), function () {
    if (MUSIC == 1) {
        music.playMelody("B C5 G A E F D C ", 130)
    } else if (MUSIC == 2) {
        music.playMelody("E B C5 A B G A F ", 130)
    } else {
        music.playMelody("A F D G C B F G ", 130)
    }
})
