/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

name1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

position2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

alias3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profileBox = document.getElementsByClassName('profile');
profileBox[0].innerHTML = 'If you didn\'t come to party, don\'t bother knocking on my door';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var profileBox = document.getElementsByClassName('profile');
profileBox[1].innerHTML = 'Be formless, like water';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasBox = document.getElementsByClassName('alias');
aliasBox[2].innerHTML = 'Zeus';

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var nameBox = document.createElement('div');
nameBox.id = 'name7';
nameBox.innerHTML = 'David Ige';
nameParent.appendChild(nameBox);

/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var aliasBox = document.createElement('div');
aliasBox.id = 'alias8';
aliasBox.innerHTML = 'Stay Thirsty My Friends';
aliasParent.appendChild(aliasBox);

//Final Boss
/*9. Create your own profile.*/

