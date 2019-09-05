# Deployment

## Make Port Dynamic

### Set up Continuous Deployment on Heroku

- Continuous deployment => make changes > commit and push > gets deployed
- Create new app on Heroku
- Go to "deploy" tab
- Search for your repo on github and click connect
- Choose a branch to deploy master or your own and click enable automatic deploys
- Click deploy
- Go to the "overview" tab and you can see when it was built and deployed
- Once successful, click "open app" or "view"
- If app fails, add this: "start": "node index.js" into scripts in package.json * commit and push!
- npx heroku logs -a appname --tail in terminal 
- Go back to overview to see it reloading
