function attachEventsListeners() {
    const convertForm = {
        "days": (days) => {
            const hours = days * 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;

            return [hours, minutes, seconds];
        },
        "hours": (hours) => {
            const days = hours / 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;

            return [days, minutes, seconds];
        },
        "minutes": (minutes) => {
            const seconds = minutes * 60;
            const hours = minutes / 60;
            const days = hours / 24;

            return [days, hours, seconds];
        },
        "seconds": (seconds) => {
            const minutes = seconds / 60;
            const hours = minutes / 60;
            const days = hours / 24;

            return [days, hours, minutes];
        }
    };

    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    function inputHandler(currentInput, unit, first, second, third) {
        const value = currentInput.value;

        let [firstInput, secondInput, thirdInput] = convertForm[unit](value);
        first.value = firstInput;
        second.value = secondInput;
        third.value = thirdInput;
    }

    document
        .getElementById("daysBtn")
        .addEventListener("click", () =>
            inputHandler(daysInput, "days", hoursInput, minutesInput, secondsInput));

    document
        .getElementById("hoursBtn")
        .addEventListener("click", () =>
            inputHandler(hoursInput, "hours", daysInput, minutesInput, secondsInput));

    document
        .getElementById("minutesBtn")
        .addEventListener("click", () =>
            inputHandler(minutesInput, "minutes", daysInput, hoursInput, secondsInput));

    document
        .getElementById("secondsBtn")
        .addEventListener("click", () =>
            inputHandler(secondsInput, "seconds", daysInput, hoursInput, minutesInput));
}