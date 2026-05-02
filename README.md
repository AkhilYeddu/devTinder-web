# DevTinder
- create a Vite + React application
- Remove unecessary code and create a hello World app
- Install tailwind CSS
- Install Daisy UI
- Add Navbar component to App.jsx
- Create a seperate NavBar.jsx seperate component file
- Install react router dom
- Create BrowserRouter -> Routes -> Route = /body -> RouteChildren
- Create an Outlet in Your Body Component
- Create a footer
- Create a login page
- Install axios
- CORS - install CORS in backend => add middlware to the app.js with configuartion (origin : localhost:5173, credentials : true)
- (Front-end) Whenever you are making an API call, make sure to pass in axios => {withCredentials : true}
- Install react-redux and @reduxjs/toolkit
- configureStore => Provider => createSlice => export Reducers => add reducer to the Store
- add redux DevTools in chrome
- Login and see if the data is coming properly into the store
- NavBar should update as soon as teh user logs in
- Refactor our code to add constants file + create a components folder
- You should not be able to access other routes without login
- if token is not present, redirect user to the login page
- Logout Feature
- Get the feed and add the feed in the redux store
- build the UserCard on feed
- edit profile feature
- show toast message on save of profile
- New Page - See all my connections
- New Page - see all my connection requests
- Feature = Accept/ Reject connection request
- Send ignore/interested to the usercard from the feed
- Signup new user
- E2E Testing








Body
    NavBar
    Route= / > feed
        Route= /login >login
        Route= /profile >profile
    Footer


# Deployment
- Signup in AWS
- Launch an instance
- chmod 400 <secret>.pem (in mac os)
- connect to the instance = ssh -i "devTinder-secret.pem" ubuntu@ec2-98-82-123-152.compute-1.amazonaws.com
- Git clone for devTinder and devTinder-web
- Front-end
    - npm install -> installing dependencies
    - npm run build (building our project using vite bundler)
    - sudo apt update (to update the system)
    - sudo apt install nginx (gives us a http server)
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - copy code from dist(built files) to /var/www/html (nginx https server)
    - sudo scp -r dist/* /var/www/html

- Back-end
    - allowed ec2 instance public IP on mongodb (whitelisting the ec2 IP on mongodb)
    - npm install pm2 -g
    - pm2 start npm -- start
    - pm2 logs
    - pm2 flush <name> (clears the logs)
    - pm2 list
    - pm2 stop <name>
    - pm2 delete <name>
    - pm2 start npm --name "devTinder-backend" -- start (to change the name of our process)
    - config nginx (edit the default config) = sudo nano /etc/nginx/sites-available/default
    - restart nginx (sudo systemctl restart nginx)
    - modify the BASE_URL in front-end project to /api

    front-end = http://98.82.123.152/
    back-end = http://98.82.123.152:3000/

    domain name = devtinder.com => http://98.82.123.152/

    front-end = devtinder.com
    back-end = devtinder.com:3000 => devtinder.com/api

    nginx config: 

    server_name 98.82.123.152;

     location /api/ {
        proxy_pass http://98.82.123.152:3000/;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

# Adding a custom domain name
    - purchased domain name from goDaddy
    - signup on cloudflare and add a new domain name
    - change the namesevers and point it to cloudflare
    - wait for sometime till your nameservers are updated ~ 15 minutes
    - DNS Record : "A" Record devtiner.online 98.82.123.152
    - Enable SSL for your website

# Sending emails through SES
    - create an IAM user
    - give access to AmazonSESFULLACCESS
    - Amazon SES : Create an identity
    - Verify your domain name
    - Verify your email address
    - Install AWS SDK -v3
    - Code example = https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
    - setup SES Client
    - Access crendentials, should be created in IAM under Security credentials Tab
    - Add the credentials to the env file
    - write code for SES client
    - write code for sending Email address
    - make the email dynamic by passing more params to the run function



