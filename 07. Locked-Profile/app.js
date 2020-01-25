function lockedProfile() {
    Array.from(document.getElementsByTagName('button'))
        .forEach(b => {
            b.addEventListener('click', btnHandler);
        });

    function btnHandler(e) {
        const btn = e.target;
        const btnText = btn.textContent;
        const content = btn.previousSibling.previousSibling;
        const unlockInput = Array.from(btn.parentElement.children)
            .filter((e) => e.type === 'radio')[1];

        if (unlockInput.checked) {
            if (btnText === 'Show more') {
                btn.textContent = 'Hide it';
                content.style.display = 'block';
            } else {
                btn.textContent = 'Show more';
                content.style.display = 'none';
            }
        }
    }
}