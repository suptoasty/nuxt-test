---
title: Tweet Sentiment Analysis Tool
description: A simple tool using electron-vue, natural node, vuetify, and twitter-lite.
featured: false
image: 
categories: ['Twitter', 'Programming']
author:
    name: Jason Lonsinger
    bio: I am programmer!
    image: http://www.geeksandbeats.com/wp-content/uploads/2015/08/scared-batman.jpeg
createdAt: 2020-09-14T14:48:00.000Z
---

<p data-text-align="justify">I found <a href="https://www.freecodecamp.org/news/how-to-build-a-twitter-sentiment-analysis-tool/" rel="noopener noreferrer nofollow">this article</a> on how to build a twitter sentiment analysis tool. I followed the setup and thought…this is pretty cool. However; I was not satisfied with how simple the program was. I decided to expand on it by shifting to using vue, electron (using this electron-vue template), and <a href="https://github.com/NaturalNode/natural" rel="noopener noreferrer nofollow">natural node</a>. I added Bootstrap and started coding away. After a while I got the UI setup and running a simple GET using twitter-lite. I was not satisfied with the bulky html code, theme options, and non-native feel I was getting from Bootstrap, so I switched to Vuetify (small and fast material design framework)</p><p data-text-align="justify">The tool looks pretty right now, but is still simple. I still need to work on it a bit more, especially how the sentiment is evaluated, displayed, and how the twitter api keys are stored (P.S. they’re not. You have to input it every time you start the app). For right now you can find the <a href="https://github.com/suptoasty/Tweetment" rel="noopener noreferrer nofollow">Repo here</a>.</p><p data-text-align="center">

<img src="tweetment-1.png"></img>

</p><p data-text-align="center">

<img src="tweetment-2.png"></img>

</p>