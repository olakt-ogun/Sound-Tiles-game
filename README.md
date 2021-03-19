# Pre-work - *Sound Tiles*

**Sound Tiles** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Olakitan Oguntuase**

Time spent: **7** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

*  Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
*  "Start" button toggles between "Start" and "Stop" when clicked. 
*  Game buttons each light up and play a sound when clicked. 
*  Computer plays back sequence of clues including sound and visual cue for each button
*  Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
*  User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

*  Any HTML page elements (including game buttons) has been styled differently than in the tutorial
*  Buttons use a pitch (frequency) other than the ones in the tutorial
*  More than 4 functional game buttons
*  Playback speeds up on each turn
*  Computer picks a different pattern each time the game is played
*  Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![https://github.com/olakt-ogun/Sound-Tiles-game/blob/main/Video%20walkthrough.mp4](https://github.com/olakt-ogun/Sound-Tiles-game/blob/main/Video%20walkthrough.mp4)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com/, https://developer.mozilla.org/]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[[While creating this project, I couldn't test run the code every couple of lines  because some of  the steps required the next, so I had to wait to finish with the mandatory parts of the project before I could run it. I changed some parts of the code like the variables, the name of some other stuffs like the buttons, and some other things so when I ran the code, there were bugs caused by inconsistent variable names, other bugs I encountered were syntax errors caused my little mistakes like not putting a coma, or not closing a curly bracket. To fix these bugs, I had to open the console to see what lines of the code were causing errors like I always do in python. Also, I had to crosscheck my code with the available one on the prework webpage. Another challenge I had was adding the additional feature where the user gets 3 strikes instead of just losing the game. I had to create a new variable and increase it as the user makes a mistake at any time during when they repeated the sound they heard. I didn't know where in the else statements under the guess function to put the mistake as I didn't know which else statements matched which if statement, but with the help of a friend I was able to figure that out. After testing the code, I was able to determine that I needed one more if statement to end the game just right after my mistake increment line and I was finally able to get that to work. The only challenge I wasn’t able to overcome was coding the part of the guess function that allows the program to move on to the next pattern after the user gets the previous one right by myself because I haven’t used JavaScript before though, I knew what nested If statements and what If and else statement were]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had additional hours, I would spend them researching how I can properly Implement the last two additional features as these features would make the game a little more complex. Also, If I had more time or If I had experience in any of these languages, I would add different levels to the game where each level adds a new feature in addition to the previous ones in the lower level. For example, level one has no additional features, level two has the first additional feature, level three has the first two and so on.]



## License

    Copyright [Olakitan Oguntuase]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
