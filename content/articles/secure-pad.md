---
title: Secure Notepad (Not Really!)
description: A secure (Not Actually Secure) notepad.
featured: false
image: https://jasonlonsinger.files.wordpress.com/2019/10/kadfkjsd.png?w=288
categories: ['Software', 'Programming']
author:
    name: Jason Lonsinger
    bio: I am programmer!
    image: http://www.geeksandbeats.com/wp-content/uploads/2015/08/scared-batman.jpeg
createdAt: 2019-10-31T14:48:00.000Z
---

<p>One of my most recent projects is a fun one! The task was to create a clone of Window's notepad, but with a twist. The SecurePypad I created is able to use pycryptodome (AES blockcipher library) to encrypt data.</p><p>The Project uses python3, pycryptodome, and qt5.</p><p>There are security flaws built right into the project as python lacks low level control over memory and the source code is easy to read. Here is the repository: <a href="https://github.com/suptoasty/secure_pypad.git" rel="noopener noreferrer nofollow">https://github.com/suptoasty/secure_pypad.git</a></p><p data-text-align="center"><img src="https://jasonlonsinger.files.wordpress.com/2019/10/fhakjdfhjkasdhk.png?w=285" caption="The UI for the notepad." ref=""></p><p data-text-align="center"><img src="https://jasonlonsinger.files.wordpress.com/2019/10/kadfkjsd.png?w=288" caption="Password field and encryption modes." ref=""></p><p data-text-align="center"><img src="https://jasonlonsinger.files.wordpress.com/2019/10/uigjhgj.png?w=709" caption="The encrypted data as a json object for ease of reading / debugging." ref=""></p>