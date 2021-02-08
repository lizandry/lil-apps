#Hades Tracker


This is going to be a small app that tracks boons in the video game Hades.

##Intentions
-tracking and displaying a player's collected boons, by god, per-run
-if a boon is collected, compatible boons and their associated gods will be suggested

##Completed:
-initial data to generate a pantheon upon app refresh

##Next Steps:
-make a ui that displays these boons, allows them to be selected persistently for a run, and has a reset button
-add data (relavent prequesites) for duo boons and individual boons with prerequisites
-create a currently-held boon array in local storage, that automatically checks boons that have been pushed onto it against duo boon data
-create a display for suggested gods and their associated boons, that will allow duo boons to be unlocked in the future
-add data on fated boons
-hard-code an array of fated boons that i've unlocked
-duplicate the suggested god/boons display, but to prioritize boons that haven't been unlocked

##Possible Additions after MVP is met:
-weapon/other unlocks added
-make the ui nice, make sure accessibility is prioritized
-get rid of hard coding of unlocked boons, add a database, expand to a (very basic!!) web app that stores fated boons that have been unlocked, per player
