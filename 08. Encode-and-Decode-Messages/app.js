function encodeAndDecodeMessages() {
    let [textArea1, textArea2] = document.getElementsByTagName("textarea");
    let [sendButton1, sendButton2] = document.getElementsByTagName("button");

    function encodeMessage(message) {
        let encodedMessage = "";

        for (let i = 0; i < message.length; i++) {
               let currentChar = message[i];
               let asciiNum = currentChar.charCodeAt(0);
               asciiNum++;

               encodedMessage += String.fromCharCode(asciiNum);
        }
        return encodedMessage;
    }

    function decodedMessage(message) {
        let decodedMessage = "";

        for (let i = 0; i < message.length; i++) {
            let currentChar = message[i];
            let asciiNum = currentChar.charCodeAt(0);
            asciiNum--;

            decodedMessage += String.fromCharCode(asciiNum);
        }
        return decodedMessage;
    }

    sendButton1.addEventListener("click", function () {
        textArea2.value = encodeMessage(textArea1.value);
        textArea1.value = "";
    });

    sendButton2.addEventListener("click", function () {
        textArea2.value = decodedMessage(textArea2.value);
    });
}
