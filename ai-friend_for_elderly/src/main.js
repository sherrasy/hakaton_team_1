import './styles/style.css'
import './styles/normalize.css'
import './styles/reminders.css'
import { DEFAULT_REMINDERS } from './utils/constant.js';

document.addEventListener('DOMContentLoaded', () => {
  const reminderButtons = document.querySelectorAll('[data-type]');
  const toastContainer = document.getElementById('toast-container');
  const toastTemplate = document
    .getElementById('toast-template')
    .content.cloneNode(true);

  if (reminderButtons) {
    reminderButtons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
  }

  function showToast(title, message, isPersistent) {
    const toastElement = toastTemplate.querySelector('.toast').cloneNode(true);
    const toastTitleElement = toastElement.querySelector('.toast-title');
    const toastMessageElement = toastElement.querySelector('.toast-message');
    const closeButton = toastElement.querySelector('.toast-close');

    toastTitleElement.textContent = title;
    toastMessageElement.textContent = message;

    closeButton.addEventListener('click', () => {
      toastElement.remove();
    });

    toastContainer.appendChild(toastElement);
    if (!isPersistent) {
      setTimeout(() => {
        toastElement.remove();
      }, 10000);
    }
  }

  function handleButtonClick(event) {
    const button = event.target.closest('[data-type]');

    if (button) {
      const reminderType = button.dataset.type;
      const reminderConfig = DEFAULT_REMINDERS[reminderType];

      if (reminderConfig) {
        const { title, description, interval, isPersistent } = reminderConfig;
        const intervalInMilliseconds = interval;

        setTimeout(() => {
          showToast(title, description, isPersistent);
        }, intervalInMilliseconds);
      }
    }
  }
});
