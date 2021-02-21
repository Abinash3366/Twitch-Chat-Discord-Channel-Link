# Twitch-Chat-Discord-Channel-Link
### Disclaimer
**This Bot, while being cool, may run you the risk of users executing their GDPR rights suing you for fines, since they never permitted you to use their messages.**
**I Am Not liable If you do choose to deploy it.If someone does lawsuit you it is on YOU**
#### Note
I will not be updating this repo much, there will be bugs

---

## Getting Started 
##### 1st Download the latest release of the Code
1. Goto the [releases page](https://github.com/Abinash3366/Twitch-Chat-Discord-Channel-Link/releases) and download the ZIP of the source code
2. Unzip the documents into a folder (this will be where the bot's files will be put it in a place you will find it)
3. Open config.json.example, 
##### 2nd Getting a Twitch Application 
1. Go-to [Twitch Developers to register an application](https://dev.twitch.tv/console/apps/create)
2. Name Your Application (This will not be the name of the chat-bot, Your Chat-bot's name is the channel name), Set an OAuth Redirect URLs (This can be any site with an SSL certificate(HTTPS) as we will not be using it), The Category of application is chatbot
3. After Pressing "Create" Press manage, Now press "New Secret", A prompt should pop up saying "Are you sure you want to create a new secret" select yes
4. Now under "client secret" copy the secret (this will be a mix of numbers and letters), DO NOT share this with anyone as this is the way you will "sign into" the bot 
5. You may now paste the "client secret" into "twitch_token" area with the " and add "oauth:" in front of the client secret eg. `"twitch_token": "oauth:ABACE123nj123nkj12n3j",`
6. Put the twitch channel that you would like the bot get the sync too's username in all lowercase with a # infront of it without a space, into "twitch_channel_target" section eg: `"twitch_channel_target": "#abinash3366",`
7. Put the same channel's username normally into "channel1" with caps & no spaces eg. `  "channel1" : "E1iteSix", `
8. Put the bot's twitch channel's (the user that you signed in as when you signed into twitch dev) username into "twitch_account_username" section eg, `"twitch_account_username" : "abinash_bot",`
##### 3rd Discord bot Creation
1. You will need to login to [discord's developer portal](https://discord.com/developers/applications) then create an application
2. On the Left-hand bar click on bot
3. Then click on "add a bot", Then "Yes do it!"
4. Add a photo & Name the bot, Make your bot look cool :P
5. Now Copy the token either by revelling the token and copying it or by pressing copy, then paste it into "token" eg. `  "token": "BAHwjsdfvbhjasbfkljASBJKLDFBjklabASNfklanl",`
6. Last part for the bot, we need to add your bot to the server!, Do this by going to "OAuth2" on the left bar, then copying the Client ID, and pasting it into `"https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=67584&scope=bot"` the YOUR CLIENT ID section of the URL then going to that webpage and adding the bot into your server
7. Remember to make sure the bot has access to the channel it needs to be in
##### 4th Discord Channel ID
1. You now need the channel id of the channel you want the bot to talk into, 
2. To do this you need to in Discord go to Settings > Appearance > Check developer mode
3. Now Right-click channel name and copy the channel ID (Copy ID), 
4. Now paste it into "discord_channel_id" eg. `"discord_channel_id" : "899999876" ` 
##### 5th and final part 
1. Now The configuration of the Bot is done! 
2. Now we need to install Node 
3. To do this go to [this link](https://nodejs.org/en/) and download the recommend user's file, and open the .exe
##### Starting the bot
1. In the Windows Search Bar search "CMD" and an open command prompt window
2. Now Copy the file directory path the bot files are in (the top of file explorer)
3. type cd "Filepath", eg `cd C:\Users\a\bot\" then press enter
4. Download the bots needed files by typing `npm install`
5. Let's start the bot by typing `node bot.js` 
6. The bot should be started and now you should be able to link the chats
