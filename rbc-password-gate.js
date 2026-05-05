(function () {
    const gate = document.getElementById("password-gate");
    const input = document.getElementById("password-input");
    const submit = document.getElementById("password-submit");
    const homeButton = document.getElementById("password-home");
    const errorMessage = document.getElementById("password-error");
    const redirectUrl = "ux-design.html";
    const sessionKey = "rbc_unlocked";
    const validPassword = "Mark0412";

    function redirectOut() {
        window.location.replace(redirectUrl);
    }

    function isUnlocked() {
        return sessionStorage.getItem(sessionKey) === "true";
    }

    function hideGate() {
        gate.classList.add("hidden");
        gate.setAttribute("aria-hidden", "true");
    }

    function verifyPassword() {
        if (input.value === validPassword) {
            sessionStorage.setItem(sessionKey, "true");
            hideGate();
            return;
        }
        errorMessage.textContent = "Your password is incorrect, please try again.";
        errorMessage.classList.add("visible");
        input.value = "";
        input.focus();
    }

    if (!gate || !input || !submit || !homeButton || !errorMessage) {
        redirectOut();
        return;
    }

    if (isUnlocked()) {
        hideGate();
        return;
    }

    submit.addEventListener("click", verifyPassword);
    homeButton.addEventListener("click", redirectOut);
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            verifyPassword();
        }
    });

    // Basic tamper check: if gate disappears before unlock, redirect.
    const observer = new MutationObserver(function () {
        const gateStillExists = document.getElementById("password-gate");
        if (!isUnlocked() && (!gateStillExists || gateStillExists.classList.contains("hidden"))) {
            redirectOut();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style"]
    });

    input.focus();
})();
