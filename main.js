{
  const slider = document.querySelector('.slider');
  const slider_value = document.querySelector('.slider-value');
  const slider_filled = document.querySelector('.slider-filled');
  const selector = document.querySelector('.selector');
  const page_views = document.querySelector('.page-views');
  const billing_type = document.querySelector('.billing-type');

  const getPrice = () => {
    const price = billing_type.checked ? 
      slider.value * 0.75 :
      +slider.value;

    slider_value.innerHTML = price.toLocaleString('en-us', {
      style: 'currency',
      currency: 'USD',
    });
  };

  slider.addEventListener('input', () => {
    getPrice();

    const views = +slider.value === 0 ? 
      10000 :
      slider.value * 100000;

    page_views.innerHTML = views.toLocaleString();

    const max_value = slider.getAttribute('max');
    const porcentage = (slider.value / max_value) * 100;
    
    slider_filled.style.width = `${porcentage}%`;
    selector.style.left = `${porcentage}%`;
    selector.style.transform = `translateX(-${porcentage}%)`;
  });

  billing_type.addEventListener('change', () => {
    getPrice();
  });
}