## How to add games. the ultimate guide! (Made at 12:30AM by cattn Re-Made Later)

### Step 1
Upload your rom to emulatorjs/data/roms/

### Step 2
Fill in this sample code and add to index.html

```html
<p><a href="launchpad.html" onclick="gameType(x);">Your Game Name Here</a></p>
```
Replace the letter x in gameType(x) with a ID that corresponds with the game you are uploading. Here is a chart:
```
 1 - 1000 = GBA
 1001 - 2000 = NES
 2001 - 3500 = SNES
 3501 - 4500 = N64
 4501 - 6000 = Gameboy
 6001 - 7000 = Atari 5200
 7001 - 8000 = DS
 8001 - 9000 = PS1
 ```
Each game MUST have a unique ID. Please include 1 in gba, 1001 in nes, etc.
Also, please make sure to start from the beginning of the ranges and count up. Do not skip.
Then fill in your Game Name

### Step 3
Navigate to emulatorjs/data/js/loadgame folder, and find the one that corresponds with the game you are trying to add.

Next, navigate to line 8 on any of them, and then put in your game according to the example below.
```js
['data/roms/PokemonSaph.gba', // First ID
'../Binaries/007.gba', // place in order from first ID // Second ID
'../Binaries/0994.gba', // Third ID


]
```
Just use a linebreak, and add the path to the file 'Path/to/Filename', <--- Make sure to have the comma

File extension is needed, also do not start the path with a /, just start with data/roms/
## Then you are finished! Submit a pull request. Thanks for helping out!
