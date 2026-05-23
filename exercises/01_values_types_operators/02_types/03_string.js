// Backtick quotes
import {benchmark} from "../../../src/common/timer.js";
benchmark ("Different way to initialize string in js", () => {

    // Backtick 
    console.log(`This allow new lines
                     This is new line`);

    // single quotes
    console.log('This is single quote and doesnt allow new line. We have to use backslash to add new line');
    
    // double quotes
    console.log("This is double quote and dosent allow to use new line directly. To add new line we have to use backlash");

});