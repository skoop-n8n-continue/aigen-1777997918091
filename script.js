const secondHand = document.querySelector('.hand.second');
const minuteHand = document.querySelector('.hand.minute');
const hourHand = document.querySelector('.hand.hour');
const digitalTime = document.querySelector('.digital-time');

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate rotations for analog clock hands
    // 60 seconds = 360 degrees -> 1 second = 6 degrees
    const secondsDegrees = seconds * 6;
    // 60 minutes = 360 degrees -> 1 minute = 6 degrees
    // Add fractional minutes for smoother movement: (seconds / 60) * 6
    const minutesDegrees = (minutes * 6) + (seconds / 60) * 6;
    // 12 hours = 360 degrees -> 1 hour = 30 degrees
    // Adjust for 24-hour format by using modulo 12, and add fractional hours: (hours % 12) * 30 + (minutes / 60) * 30
    const hoursDegrees = (hours % 12) * 30 + (minutes / 60) * 30;

    // Apply transformations
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;

    // Format and display digital time
    const displayHours = hours < 10 ? '0' + hours : hours;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    digitalTime.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock when the page loads
updateClock();
