---
title: Tic-Tac-Toe You can never beat.
description: 
featured: false
image: https://jasonlonsinger.files.wordpress.com/2019/10/annotation-2019-10-31-1nkjkl65449.pngnkjlk.png?w=1024
categories: ['Programming', 'Game']
author:
    name: Jason Lonsinger
    bio: I am programmer!
    image: http://www.geeksandbeats.com/wp-content/uploads/2015/08/scared-batman.jpeg
createdAt: 2019-10-31T14:48:00.000Z
---

Using the mini-max algorithm, I was able to create a game of tic-tac-toe in java and swing that you can never beat.

<v-img src="https://jasonlonsinger.files.wordpress.com/2019/10/annotation-2019-10-31-165449.png?w=1024"></v-img>

<v-img src="https://jasonlonsinger.files.wordpress.com/2019/10/annotation-2019-10-31-165449.pngnkjlk.png?w=1024" caption="I make a move in the top right (old pro TTT trick) and the ai makes the most optimal move."></v-img>

<v-img src="https://jasonlonsinger.files.wordpress.com/2019/10/annotation-2019-10-31-1nkjkl65449.pngnkjlk.png?w=1024" caption="Following up with a move in the bottom-left (again TTT pro here) the ai forces the path towards a tied game."></v-img>

I used a pretty common OOP process that one of the best professors in the world, Prof. David North (O.C.) wanted everyone in my class to understand.

1. Ask how you can separate out concerns i.e. UI from actual functionality (keeps with the <a href="https://en.wikipedia.org/wiki/SOLID#:~:text=In%20object-oriented%20computer%20programming,more%20understandable%2C%20flexible%20and%20maintainable.&amp;text=The%20principles%20are%20a%20subset,Martin." rel="noopener noreferrer nofollow">SOLID model</a>).
2. Draw out a conception of the problem by thinking on the basic functionality at each step of the game, tasks, etc.
3. Pretend like you have already solved the problem.
    - This step was the hardest to understand. It is a rare way of working backwards, which helps you get out of your head / code. It really can make a difference.
    - This step also is quite literal for plotting the AI's next move as I had to generate a Tree of every win / tie which is the desired outcome / solved problem of the program.
4. Use <a href="https://en.wikipedia.org/wiki/How_to_Solve_It" rel="noopener noreferrer nofollow">George Pólya's</a> four principles.

Following these I worked on getting the Player, AI, Board, Tree, and Game Manager classes of the project planned out. I implemented each of them starting with the Board, moving backwards to Player, GM, and Move Tree. I then went to work on making the AI use the Move Tree and the Mini-Max algorithm to always beat / tie the player.

This was the hardest part. I had everything done within 30 minutes to an hour of starting the project, except Move Tree and Mini-Max. It took me a few days and supervised instructions to get the AI to pick the best move every turn it played. I was so frustrated that I started the UI just to stop working on this part of the problem as a 10 minute break. I should have asked for help to start with, it would have saved some time. I definitely do not want to make that mistake again.

Even keeping the frustration in mind, the project was fun and I am ecstatic that I have been dethroned as TTT master by my own pupil.