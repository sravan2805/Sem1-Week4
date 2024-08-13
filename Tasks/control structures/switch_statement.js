// Function to print a message based on the day of the week
function printDayMessage(day) {
    switch(day.toLowerCase()) {
        case 'monday':
            console.log("It's Monday! Start of a new week.");
            break;
        case 'tuesday':
            console.log("It's Tuesday! Keep going strong.");
            break;
        case 'wednesday':
            console.log("It's Wednesday! Midweek already.");
            break;
        case 'thursday':
            console.log("It's Thursday! Almost the weekend.");
            break;
        case 'friday':
            console.log("It's Friday! The weekend is near.");
            break;
        case 'saturday':
            console.log("It's Saturday! Enjoy your weekend.");
            break;
        case 'sunday':
            console.log("It's Sunday! Rest up for the week ahead.");
            break;
        default:
            console.log("Invalid day! Please enter a valid day of the week.");
            break;
    }
}

// Example usage
let dayOfWeek = 'Monday'; // You can change this to test different cases
printDayMessage(dayOfWeek);
