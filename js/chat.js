function toggleText(event) {
    event.preventDefault();
    const icon = document.getElementById('whatsapp-icon');
    const text = document.getElementById('whatsapp-text');
    const input = document.getElementById('whatsapp-input');
    if (text.classList.contains('opacity-0')) {
      text.classList.remove('w-0', 'opacity-0');
      text.classList.add('w-auto', 'opacity-100');
      icon.classList.add('opacity-0');
      setTimeout(() => icon.classList.add('hidden'), 500);
      input.classList.remove('hidden');
    } else {
      text.classList.add('w-0', 'opacity-0');
      text.classList.remove('w-auto', 'opacity-100');
      icon.classList.remove('hidden');
      setTimeout(() => icon.classList.remove('opacity-0'), 50);
      input.classList.add('hidden');
    }
  }

  function sendMessage() {
    const message = document.getElementById('wa-message').value;
    const phone = '6282340987518';
    if (message) {
      const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&app_absent=0`;
      window.open(url, '_blank');
    }
  }

  function cancelMessage() {
    document.getElementById('wa-message').value = '';
    document.getElementById('whatsapp-input').classList.add('hidden');
    const icon = document.getElementById('whatsapp-icon');
    const text = document.getElementById('whatsapp-text');
    text.classList.add('w-0', 'opacity-0');
    text.classList.remove('w-auto', 'opacity-100');
    icon.classList.remove('hidden');
    setTimeout(() => icon.classList.remove('opacity-0'), 50);
  }