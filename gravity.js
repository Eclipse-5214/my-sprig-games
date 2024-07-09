/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const grass = "g"
const dirt = "d"
const sky = "s"
const skybutweird = "2"
const pillarbutwierd = "3"
const pipe = "l"
const pillar = "o"
const goal = "1"

var init = true;
var jump = false;
var jumping = false

setLegend(
  [ player, bitmap`
....CCCCCCCC....
....CCCCCCCC....
....CC9999CC....
....CC9999CC....
....99009900....
....99009900....
....99999999....
....99999999....
....22223322....
....22223322....
....22223322....
....22223322....
....22222222....
....22222222....
....00....00....
....00....00....`],
  [ grass, bitmap`
4444444444444444
4444444444444444
DDDDDDDDDDDDDDDD
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCLCCCCCCCCCCCLC
CCCCCCCLCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCLCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCLCC
CCCCCLCCCCCCCCCC
LCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [ dirt, bitmap`
CCLCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCLCC
CCCCCCLCCCCCCCCC
CCCCCCCCCCCCCCCC
CCLCCCCCCCCCCCLC
CCCCCCCLCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCLCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCLCC
CCCCCLCCCCCCCCCC
LCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCLCCCCCC`],
  [ pipe, bitmap`
1111111111111111
1111111111111111
LL11LLLLLLLLLLLL
LL11LLLLLLLLLLLL
..LL11..........
..LL11..........
....LL11........
....LL11........
......LL11......
......LL11......
........LL11....
........LL11....
1111111111111111
1111111111111111
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ pillar, bitmap`
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..`],
  [ goal, bitmap`
......0000......
...0000CC0000...
..00CCCCCCCC00..
.00CCCCCCCCCC00.
00CCCCCCCCCCCC00
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCC66CCC0
0CCCCCCCCC66CCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0
0CCCCCCCCCCCCCC0`],
  [ skybutweird, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`]
  [ pillarbutwierd, bitmap`
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..
....11111111LL..
....11111111LL..
....111LL111LL..
....111LL111LL..`],
  [ sky, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`]
)

setBackground("s")

setSolids([player,grass,dirt])

let level = 0
const levels = [
  map`
............
............
ggg.........
dd..........
dd..lll.....
dp...o......
d....o..lll.
d....o...o..
dg..lllllll.
ddgg.o...o..
ddddgggggggg
dddddddddddd`
]


if(init){
  setMap(levels[level])
  init = false;
}
setPushables({
  [ player ]: []
})

onInput("w"){
  if(jump){
  jump = false;
  }
}

if{    
afterInput(() => {
  if(!init){
    for(var x = 0; x < 12; x++){
      getFirst(player).y += 1;
    }
  }
  
  const targetNumber = tilesWith(goal).length;
  
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(goal, player).length;

  // if the number of goals is the same as the number of goals covered
  // all goals are covered and we can go to the next level
  if (numberCovered === targetNumber) {
    // increase the current level number
    level = level + 1;
  }
})
