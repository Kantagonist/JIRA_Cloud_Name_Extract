// ==UserScript==
// @name         Auto Commit Message Or Branch Name
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  copies the JIRA Tag and description and preformats the commit message, can also create standard pathname
// @author       https://github.com/Kantagonist
// @match        https://<your-hostname-here>/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// ==/UserScript==
document.addEventListener("keypress", onKeydown);

function onKeydown(event) {

     let hasPressed1 = event.keyCode == 49
     let hasPressed2 = event.keyCode == 50

    // runs script if "1" or "2" key is pressed
    if (hasPressed1 || hasPressed2) {

        // gets content of title tag
        let title = document.getElementsByTagName("TITLE")[0].text

        // trims title to message
        const jiraSuffixInTitleRegexPattern = /-\s*J[I|i][R|r][A|a]\s*$/g
        var trimmedTitle = title.replaceAll(jiraSuffixInTitleRegexPattern, '').trim()

        // create output string
        let result = ''
        if (hasPressed1) {
            result += trimmedTitle + '\n\n\n\{\}'
        } else {
            const jiraNumberTagRegexPattern = /^.*\]/g
            trimmedTitle = trimmedTitle.replaceAll(jiraNumberTagRegexPattern, '').trim()
            trimmedTitle = '_' + trimmedTitle.replaceAll(' ', '-')
            const jiraTicketNumberPattern = /(?<=\[).*(?=])/g
            let ticketNumber = title.match(jiraTicketNumberPattern)
            result = ticketNumber + trimmedTitle
        }
        // write to clipboard
        navigator.clipboard.writeText(result);

        // debug
        console.log('copied to clipboard:\n' + result)
    }
}