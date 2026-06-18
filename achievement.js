function showAchievementPopup(scrollToId) {
    const achievementPopup = document.getElementById('achievementPopup');
    if (!achievementPopup) return;

    achievementPopup.classList.add('show');

    if (scrollToId) {
        const scrollTarget = document.getElementById(scrollToId);
        if (scrollTarget) {
            setTimeout(() => {
                scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 0);
        }
    }

    setTimeout(() => {
        achievementPopup.classList.remove('show');
        achievementPopup.classList.add('hide');

        setTimeout(() => {
            achievementPopup.classList.remove('hide');
        }, 500);
    }, 3000);
}

document.addEventListener('click', function(e) {
    const trigger = e.target.closest('[data-achievement-trigger]');
    if (trigger) {
        e.preventDefault();
        showAchievementPopup(trigger.getAttribute('data-achievement-scroll'));
    }
});
