$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });

    // Tooltips für Touchscreen unterstützen
    $('[data-toggle="tooltip"]').on('touchstart', function () {
        $(this).tooltip('show');
    }).on('touchend click', function () {
        $(this).tooltip('hide');
    });


    const elements = {
        participantsSlider: document.getElementById('participantsSlider'),
        salarySlider: document.getElementById('salarySlider'),
        participantsValue: document.getElementById('participantsValue'),
        salaryValue: document.getElementById('salaryValue'),
        costDisplay: document.getElementById('cost'),
        detailsDisplay: document.getElementById('details'),
        openModalButton: document.getElementById('openModal'),
        closeModalButton: document.getElementById('closeModal'),
        settingsModal: document.getElementById('settingsModal'),
        saveSettingsButton: document.getElementById('saveSettings'),
        pauseResumeButton: document.getElementById('pauseResumeButton'),
        resetButton: document.getElementById('resetButton'),
        elapsedTimeDisplay: document.getElementById('elapsed-time')
    };

    let totalSeconds = parseInt(localStorage.getItem('totalSeconds')) || 0;
    let isPaused = localStorage.getItem('isPaused') === 'true';
    let isStarted = false;
    let intervalId;

    // Berechnet die Kosten basierend auf Teilnehmern und Stundenlohn
    function calculateCost() {
        const participants = parseInt(elements.participantsSlider.value);
        const hourlySalary = parseFloat(elements.salarySlider.value);
        const salaryPerSecond = (hourlySalary / 3600) * participants;
        const totalCost = salaryPerSecond * totalSeconds;
        elements.costDisplay.textContent = `Kosten: ${totalCost.toFixed(2)} CHF`;
        elements.detailsDisplay.textContent = `Teilnehmende: ${participants}, Stundenlohn: ${hourlySalary} CHF`;
    }

    // Startet oder pausiert den Timer
    function toggleTimer() {
        if (!isStarted) {
            startTimer();
        } else {
            pauseResumeTimer();
        }
    }

    // Startet den Timer
    function startTimer() {
        isStarted = true;
        isPaused = false;
        intervalId = setInterval(() => {
            if (!isPaused) {
                totalSeconds++;
                localStorage.setItem('totalSeconds', totalSeconds);
                updateElapsedTime();
                calculateCost();
            }
        }, 1000);
        updatePauseResumeButton('pause');
    }

    // Pausiert oder setzt den Timer fort
    function pauseResumeTimer() {
        isPaused = !isPaused;
        localStorage.setItem('isPaused', isPaused);
        updatePauseResumeButton(isPaused ? 'play' : 'pause');
    }

    // Lädt die gespeicherten Einstellungen
    function loadSettings() {
        const savedParticipants = localStorage.getItem('participants');
        const savedSalary = localStorage.getItem('salary');
        if (savedParticipants) {
            elements.participantsSlider.value = savedParticipants;
            elements.participantsValue.textContent = savedParticipants;
        }
        if (savedSalary) {
            elements.salarySlider.value = savedSalary;
            elements.salaryValue.textContent = savedSalary;
        }
        updateElapsedTime();
        calculateCost();
    }

    // Setzt die Sitzung zurück
    function resetSession() {
        totalSeconds = 0;
        isPaused = false;
        isStarted = false;
        loadSettings();
        updatePauseResumeButton('play');
        clearInterval(intervalId);
    }

    // Aktualisiert die verstrichene Zeit im Format hh:mm:ss
    function updateElapsedTime() {
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        elements.elapsedTimeDisplay.textContent = `Verstrichene Zeit: ${hours}:${minutes}:${seconds}`;
    }

    // Aktualisiert den Pause/Fortsetzen Button
    function updatePauseResumeButton(state) {
        if (state === 'pause') {
            elements.pauseResumeButton.classList.remove('btn-success');
            elements.pauseResumeButton.classList.add('btn-primary');
            elements.pauseResumeButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            elements.pauseResumeButton.classList.add('btn-success');
            elements.pauseResumeButton.classList.remove('btn-primary');
            elements.pauseResumeButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    loadSettings();

    // Event-Listener für die Slider und Buttons
    elements.participantsSlider.addEventListener('input', () => {
        elements.participantsValue.textContent = elements.participantsSlider.value;
    });
    elements.salarySlider.addEventListener('input', () => {
        elements.salaryValue.textContent = elements.salarySlider.value;
    });

    elements.openModalButton.addEventListener('click', () => {
        elements.settingsModal.style.display = 'block';
    });

    elements.closeModalButton.addEventListener('click', () => {
        elements.settingsModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == elements.settingsModal) {
            elements.settingsModal.style.display = 'none';
        }
    });

    elements.saveSettingsButton.addEventListener('click', () => {
        localStorage.setItem('participants', elements.participantsSlider.value);
        localStorage.setItem('salary', elements.salarySlider.value);
        resetSession();
        elements.settingsModal.style.display = 'none';
    });

    elements.pauseResumeButton.addEventListener('click', toggleTimer);
    elements.resetButton.addEventListener('click', resetSession);
});