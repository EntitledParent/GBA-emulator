## How to add games. the ultimate guide! (Made at 12:30AM by cattn)

### Step 1
Upload your rom to data/roms/

### Step 2
Fill in this sample code and add to index.html

```html
<p><a href="launchpad.html" onclick="gameTypeID = x; gameType();">Your Game Name Here</a></p>
```
Replace the letter x in gameTypeID = x; with a ID that corresponds with the game you are uploading. Here is a chart:
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
Each game MUST have a unique ID.
Then fill in your Game Name

### Step 3
Navigate to data/js/loadtype.js. Scroll down to Line 17 to the function "setFindGameName()"

Fill in the sample code below

```js
if (gameTypeID == x) {
        gameName = 'data/roms/yourfile.extension';
    }
 ```
 
 Replace x with the ID you assigned your game earlier, then replace yourfile.extension with the file name+extension you uploaded to the roms folder

Then, paste this code right after ``}`` from the last ID statement.

Example:

```js
 if (gameTypeID == 1) {
        gameName = 'data/roms/PokemonSaph.gba';
    }
    if (gameTypeID == 2) {
        gameName = 'data/roms/PokemonEm.gba';
    }
```
(Two different games were added above)

## Then you are finished! Submit a pull request
