# JIRA_Cloud_Name_Extract
Copies the JIRA Tag and description and preformats the commit message, can also create standard pathname.

This tampermonkey script allows the user to autogenerate two things:

* branch name with \<ticket-number\>_\<ticket-name\>
* commit message

The latter looks like 
```
[<ticket-number>] <ticket-name>


{}
```
It works with the current JIRA Cloud system as of writing this.
If they change something, i will probably update this repo.

To use it yourself, follow these steps:
* Install [Tampermonkey](https://www.tampermonkey.net/).
* Create a new userscript
* Copy the code from the .js file into the userscript
* Substitute the hostname with your own
