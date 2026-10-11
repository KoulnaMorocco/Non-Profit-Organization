(() => {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const donationForm = document.getElementById('donationForm');
  const customAmount = document.getElementById('customAmount');
  const donationMessage = document.getElementById('donationMessage');
  if (customAmount) {
    customAmount.addEventListener('input', () => {
      document.querySelectorAll('input[name="amount"]').forEach(radio => { radio.checked = false; });
    });
    document.querySelectorAll('input[name="amount"]').forEach(radio => {
      radio.addEventListener('change', () => { customAmount.value = ''; });
    });
  }
  if (donationForm) {
    donationForm.addEventListener('submit', event => {
      event.preventDefault();
      const custom = customAmount && customAmount.value.trim() !== '' ? Number(customAmount.value) : null;
      const selected = document.querySelector('input[name="amount"]:checked');
      const amount = custom !== null ? custom : (selected ? Number(selected.value) : null);
      if (!Number.isFinite(amount) || amount < 1 || amount > 10000) {
        donationMessage.textContent = 'Please choose an amount between $1 and $10,000. No payment has been taken.';
        customAmount && customAmount.focus();
        return;
      }
      donationMessage.textContent = `You selected $${amount.toFixed(2)}. Secure checkout is not activated yet, so this website will not collect payment details or take a payment. Please contact Koulna Morocco to discuss support options.`;
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(`[Koulna Morocco] ${data.get('subject')}`);
      const body = encodeURIComponent(`Name: ${data.get('name')}\nReply email: ${data.get('email')}\n\n${data.get('message')}`);
      window.location.href = `mailto:koulnamorocco@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();