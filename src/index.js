import './sass/main.scss';

const refs = {
    days: document.querySelector('.value[data-value="days"]'),
    hours: document.querySelector('.value[data-value="hours"]'),
    mins: document.querySelector('.value[data-value="mins"]'),
    secs: document.querySelector('.value[data-value="secs"]'),
    timer: document.querySelector('#timer-1')
};
class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
  }
    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        this.getTimeComponents(deltaTime);
    }, 1000);

 getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
};

  pad(value) {
    return String(value).padStart(2, '0');
  }
};

refs.timer.setAttribute("style", "justify-content: center; text-align: center; padding-top: 150px; font-size: 60px");

// refs.timer.style.justifyContent = 'center';
// refs.timer.style.textAlign = 'center';
// refs.timer.style.paddingTop = '150px';
// refs.timer.style.fontSize = '60px';

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
});