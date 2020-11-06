


This is a CRUD message board to act as a forum for my student-focused code editor. The entire suite of software will include access to a forum, tutorials, and a coding sandbox for learning to code. The message portion is full CRUD writing to a mongo database. It includes likes and the ability to interact with all content. As I develop this, I plan to limit delete access to only pinned messages and implement other features intended to promote healthy discourse. A link to my CodeNoodle editor (created during my time at GA as a side project) is available designated to pop open a new screen. I envision being able to save code directly to the CRUD application but have hesitated to try to implement this before fully researching all security concerns involved with allowing users to input code. 

You will see design for a live chat function that is commented out. I devoted a good portion of this Project Week to implementing this feature but ultimately using multiple ports complicated the heroku deployment. I will reintegrate this feature using socket-express.io library in the near future.


-full CRUD

Forum for CodeNoodle
https://deltamessager.herokuapp.com/

-somewhat responsive design, I plan on continuing to customize mobile views relative to a computer screen.

-I use JQUERY to .show() and .hide() Divs within the index page. This allows me to place a large amount of content in a single view and present nicely.
-Heroku deployment
-Mongo DataBase
-Full CRUD application

Upcoming:
User authentication
Live chat