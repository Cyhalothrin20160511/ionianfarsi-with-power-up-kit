# IonianFarsi - آیونیان فارسی
[http://ionianfarsi.gr/](http://ionianfarsi.gr/)
[![ionianFarsi logo](frontend/public/IonianFarsiLogo.jpg)](http://ionianfarsi.gr/)


## Abstract  
IonianFarsi is a multimedia online extracurricular application designed for the learning and reinforcement of the Persian language, utilizing the [1st Step](https://books.saadifoundation.ir/books/en1ststep) book of [Bonyade saadi](https://saadifoundation.ir/en).

---

## Features  
- **Vocabulary**: Interactive Vocabulary following the 1stStep book structure.  
- **Exercises**: Infinite practice exercises for vocabulary reinforcement.

---

## Methodology  
- **Database Setup**: Create a MySQL database with course-related words from the 1stStep book in phpmyadmin.  
- **API Development**: Develop an API for the application's interaction with the database using Node/Express.js.  
- **Front-End Development**: Build the application's user interface using React.js.  
- **Prototyping Model**: Prototyping approach used during development.

---

## Deliverables  
1. Source code of the application (component-based), API, and Database with comments, hosted on [GitHub](https://github.com/Matin-Marzie/IonianFarsi).
2. [Public YouTube video demonstrating](https://youtu.be/ascpUVPeSLw):  
   - Application features  
   - User documentation  
3. Online hosted application:  
   - Hosting: [Netlify](https://www.netlify.com)  
   - Database: [FreeMySQLHosting](https://www.freemysqlhosting.net/)  
   - API: [Render](https://render.com/)
   - Domain name: [papaki.com](https://www.papaki.com/)

---

# IonianFarsi  - آیونیان فارسی (with Power-Up Kit)

## 01/02/2025 Changes:
- (Home.js, NavigationBar.js, home.css) Change the start page of vocabulary function from vocabulary of lesson 1 to the lesson navigator, so it's the same as the exercise function.
- (NavigationBar.js, LessonNavigator.js, exercise.js, app.css) Add io-text-centerer to center the text.
- (LessonNavigator.js, exercise.js) Adjust line breaks and center the text to beautify the page. For more complex pages and beautification, it is recommended to use css.
- (LoadingBar.js, LoadingBar.css, LessonNavigator.js, Vocabulary.js, Exercise.js, Practice.js, FakePortrait.jpg) Add fake loading progress bar with a fake portrait. :)
- Introduce .gitignore
![01/02/2025 Update Preview jpg](./preview/01022025.jpg)
![01/02/2025 Update Preview gif](./preview/01022025.gif)

## Update Plans:
- Beautify the loading page and the error log page.
- Beautify the choose-lesson button and word cards.
- Fix bug: "Failed to fetch ... data" or keep "Loading lessons, you may need to wait up to 50 seconds in first load" if page is inactive for a while; One simple refresh does not solve the problem, but restarting from the home page does. This can be solved by adding a redirect link to restart the app on the corresponding page.
- Add scroll bar or pagination in some pages.
- Add Latinized forms of Persian words and store them externally, with a toggle to determine whether to display them.
- Add another home page in the app or copy the original home page.
- Merge LessonNavigator.js and exercise.js.
- StillWorkingOn.js: Page layout can be optimized - but not right now.
- Add other language learning features besides the duolingo style exercise - maybe some traditional mini games - but this plan has lower priority.

## Suggestions:
- Introduce bootstrap to handle css.
- Introduce .env to handle passwords and similar parts.
- Complete the basic user system to store settings.
