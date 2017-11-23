#Why
You want to enhance yourself as a person if you want to accomplish unhuman-like things

##Tasks to Automate
1. Sleep Tracking
2. Macro Logging - MFP
3. Grocery Shopping
4. Toggl Productivity Tracking
5. Calendar scheduling - Lifting, Meditation, Etc
6. The 5 hour rule - 5hour


#How
##MFP - Macro Logging
Currently on an ECS Cluster named Infrastructure, using a ECS CloudWatch (cron) scheduler,  
runs at 7AM (13UTC) every morning to call the Python script which then calls Node script  
that enters the information of the previous day into Google Sheets. Sends message upon completion.

ECS (cron) -> ECS Cluster -> Docker -> Python -> Node -> Google Sheets -> Slack

##Upload Lifting Videos to Drive
Trigger is set on Workflow on iPhone. Forces you to pick latest videos to upload to Box.
Once uploaded to Box, Zapier will watch for changes every x number of minutes and then upload those
videos correspondingly to Google Drive. Sends Slack message per video uploaded to Drive.

Workflow -> Box -> Zapier Box -> Drive -> Slack

##5 Hour Rule

Google Calendar -> Zapier Webhook (Post) -> AWS API Gateway -> Lambda -> Slack






