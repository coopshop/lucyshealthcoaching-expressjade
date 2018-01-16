var navigation, wrapper, yPos;

function yScroll() {
  navigation = document.getElementById('navigation');
  wrapper = document.getElementById('wrapper');
  yPos = window.pageYOffset;

  if (yPos > 425) {
    navigation.style.position = 'fixed';
    navigation.style.top = '0px';
    navigation.style.padding = '5px';
    wrapper.style.paddingTop = '60px';
  } else {
    navigation.style.position = 'static';
    navigation.style.padding ='10px';
    wrapper.style.paddingTop = '10px';
  }
}

window.addEventListener('scroll', yScroll);
