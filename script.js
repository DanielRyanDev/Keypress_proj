const keyPress = (event) => {
    const eCode = event.code;
    const eKey = event.key;
    const eWhich = event.which;

    document.getElementById("keyCode").innerHTML = "Keycode: " + eCode;
    document.getElementById("key").innerHTML = "Key: " + eKey;
    document.getElementById("which").innerHTML = "Which: " + eWhich;
}