# Rainbow Simulator

## Brainstorming

Simulating a raindrop and a white beam of light that follows your mouse's x coordinate.
Beam enters droplet and is (accularely) split into different colors of light via refraction.
Internal beams undergo interal reflection and refraction as they exit the drop. 

Functionality:
- Ability to increase the width of beam of light
- Ability to add multiple raindrops
- Ability for all light beams to 'add' together, like real light
- Ability to toggle 'draw' mode where generated beams will stay drawn, and new
  beams will additively combine with them

How to tackle:

Will need a way to represent the beams of light, their color, intensity, as well as their 
starting and end point (if bounded)

