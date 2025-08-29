music.play(music.stringPlayable("C5 B C5 B A B A B ", 120), music.PlaybackMode.LoopingInBackground)
let mySprite = sprites.create(assets.image`Dragomir`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`background forest`)
mySprite.setStayInScreen(true)
