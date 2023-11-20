Your Solution Documentation
===========================

The solution uses the same docker-compose.yml as the boilerplate.
To start just run (`docker-compose up`)
To run the tests you will need to run (`docker-compose -f docker-compose-test.yml up`)
Note that the containers for redis and mysql dont shut themselves after the tests are done you will
need to run (`docker-compose -f docker-compose-test.yml down`) afterwords



### Notes
==========
Server - Nodejs/Express/Kysely + Redis
UI - React 18 + TailwindCSS + react-infinite-scroll-component library
DB - Mysql
#### Server

For the server I used the Express to create the REST api. Express was chosen mainly because it was something I was familiar with so I could get going pretty quickly with it. 

There were several options I considered for accessing the database from the server. I could use raw sql, a query builder or use an ORM. 
I opted for kysely since it is a relatively new library thats gaining popularity with type safe query building. It's also something I wanted to test out for myself

Redis was added to be used as a key store for the rate limiter. I was also thinking of using it for caching the API endpoints

#### UI

The UI was created with React using TailwindCSS as a CSS framework. For a small project like this and MVPS Tailwind is a pretty good solution to 
getting a responsive UI done quickly and easily. I can see as the project gets larger that it could get pretty unmaintainable. Im not 100% sure on this point though
I used the react-infinite-scroll-component library as i wanted something to demonstrate the pagination on the server but it would of probably taken
me too much time to write one myself.

#### Database

For the database I decided to just stay with what was provided in the boilerplate. For relatively simple applications that only require simple queries MySQL works just fine. For applications that require more consistency/features/robust datatypes etc.. I would generally lean towards using PostgreSQL

### Thoughts

Things i considered / would of added given more time - 
Auth        - Having auth would make sense in an system like this. I would be more inclined to have auth as a seperate service 
                or use a service like AWS Cognito or Firebase for security reasons
           
Caching             -  Adding caching to the endpoints would be nice to improve latency
Validation          - If there were routes that required custom user inputs I would of added validation in. 
            Since there were only two routes I skipped it


Hardcoded Values - In normal situations i would probably have the database and redis values in the .env file or a 
                   stored in a secrets manager of some sort.

More tests - I would have spent more time on tests given more time. For now I just kept it to a minimum having different kinds of tests 
            as a demonstration

Rate-Limiting -  The rate limiting algorithm i used was pretty simple. In real world cases I would probably use a library that uses
                something like the token bucket algorithm. Or just leave rate limiting to a reverse proxy server or the load balacner