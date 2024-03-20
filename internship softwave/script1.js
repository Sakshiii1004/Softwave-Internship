document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const contactError = document.getElementById('contactError');

  if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
    contactError.textContent = 'All fields are required';
    return;
  }

  if (!isValidEmail(email)) {
    contactError.textContent = 'Please enter a valid email address';
    return;
  }

  if (!isValidPhone(phone)) {
    contactError.textContent = 'Please enter a valid phone number';
    return;
  }

  // Display form data
  displayFormData(name, email, phone, subject, message);

  contactError.textContent = ''; // Clear any previous error messages
  alert('Form submitted successfully!');
});

document.getElementById('clearDataBtn').addEventListener('click', function() {
  clearFormData();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  
  const phoneRegex = /^\d{10}$/; 
  return phoneRegex.test(phone);
}

function displayFormData(name, email, phone, subject, message) {
  const formDataContent = document.getElementById('formDataContent');
  formDataContent.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
}

function clearFormData() {
  const formDataContent = document.getElementById('formDataContent');
  formDataContent.innerHTML = ''; 
}
