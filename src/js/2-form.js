const formDate = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  if (event.target.name) {
    formDate[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
  }
});

const getFeedbackFormData = localStorage.getItem('feedback-form-state');

if (getFeedbackFormData) {
  const parsedData = JSON.parse(getFeedbackFormData);
  formDate.email = parsedData.email || '';
  formDate.message = parsedData.message || '';
  form.elements.email.value = formDate.email;
  form.elements.message.value = formDate.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = formDate;

  if (email === '' || message === '') {
    alert('Fill please all fields!');
  } else {
    console.log(formDate);
    formDate.email = '';
    formDate.message = '';
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});