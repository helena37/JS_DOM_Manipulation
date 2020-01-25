function attachEventsListeners() {
    const convertTable = {
        "km": (km, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return km;
                case "m":
                    return km * 1000;
                case "cm":
                    return km * 100000;
                case "mm":
                    return km * 1000000;
                case "mi":
                    return km * 0.6214;
                case "yrd":
                    return km * 1093.61;
                case "ft":
                    return km * 3280.84;
                case "in":
                    return km * 39370.08;
            }
        },
        "m": (m, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return m / 1000;
                case "m":
                    return m;
                case "cm":
                    return m * 100;
                case "mm":
                    return m * 1000;
                case "mi":
                    return m / 1609.34;
                case "yrd":
                    return m * 1.0936;
                case "ft":
                    return m * 3.2808;
                case "in":
                    return m * 39.37;
            }
        },
        "cm": (cm, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return cm / 100000;
                case "m":
                    return cm / 100;
                case "cm":
                    return cm;
                case "mm":
                    return cm * 10;
                case "mi":
                    return cm / 160934.4;
                case "yrd":
                    return cm / 91.44;
                case "ft":
                    return cm / 30.48;
                case "in":
                    return cm / 2.54;
            }
        },
        "mm": (mm, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return mm / 1000000;
                case "m":
                    return mm / 1000;
                case "cm":
                    return mm / 10;
                case "mm":
                    return mm;
                case "mi":
                    return mm / 1609344;
                case "yrd":
                    return mm / 914.4;
                case "ft":
                    return mm / 304.8;
                case "in":
                    return mm / 25.4;
            }
        },
        "mi": (mi, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return mi * 1.61;
                case "m":
                    return mi * 1609.34;
                case "cm":
                    return mi * 160934.4;
                case "mm":
                    return mi * 1609344;
                case "mi":
                    return mi;
                case "yrd":
                    return mi * 1760;
                case "ft":
                    return mi * 5280;
                case "in":
                    return mi * 63360;
            }
        },
        "yrd": (yrd, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return yrd / 1093.61;
                case "m":
                    return yrd * 0.9144;
                case "cm":
                    return yrd * 91.44;
                case "mm":
                    return yrd * 914.4;
                case "mi":
                    return yrd / 1760;
                case "yrd":
                    return yrd;
                case "ft":
                    return yrd * 3;
                case "in":
                    return yrd * 36;
            }
        },
        "ft": (ft, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return ft / 3280.84;
                case "m":
                    return ft / 3.28;
                case "cm":
                    return ft * 30.48;
                case "mm":
                    return ft * 304.8;
                case "mi":
                    return ft / 5280;
                case "yrd":
                    return ft / 3;
                case "ft":
                    return ft;
                case "in":
                    return ft * 12;
            }
        },
        "in": (inch, outputUnit) => {
            switch (outputUnit) {
                case "km":
                    return inch / 39370.08;
                case "m":
                    return inch / 39.37;
                case "cm":
                    return inch * 2.54;
                case "mm":
                    return inch * 25.4;
                case "mi":
                    return inch / 63360;
                case "yrd":
                    return inch / 36;
                case "ft":
                    return inch / 12;
                case "in":
                    return inch;
            }
        }
    };

    let inputDistance = document.getElementById("inputDistance");
    let inputUnits = document
        .getElementById("inputUnits");

    let outputUnits = document
        .getElementById("outputUnits");

    const convertBtn = document.getElementById("convert");
    convertBtn.addEventListener("click", convertUnits);

    function convertUnits() {
        let result = 0;
        let outputU = outputUnits.value;

        switch (inputUnits.value) {
            case "km":
                result = convertTable.km(inputDistance.value, outputU);
                break;
            case "m":
                result = convertTable.m(inputDistance.value, outputU);
                break;
            case "cm":
                result = convertTable.cm(inputDistance.value, outputU);
                break;
            case "mm":
                result = convertTable.mm(inputDistance.value, outputU);
                break;
            case "mi":
                result = convertTable.mi(inputDistance.value, outputU);
                break
            case "yrd":
                result = convertTable.yrd(inputDistance.value, outputU);
                break;
            case "ft":
                result = convertTable.ft(inputDistance.value, outputU);
                break;
            case "in":
                result = convertTable.in(inputDistance.value, outputU);
                break;
        }

        return document.getElementById("outputDistance").value = result;
    }
}