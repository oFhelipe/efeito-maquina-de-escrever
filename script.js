document.addEventListener('DOMContentLoaded', function() {
  const element = document
    .getElementById('typed-text');
    const textContent = element.textContent
    element.textContent = ''

    function insertCharacter(j = 0) {
      element.innerHTML = textContent.substring(0, j)

        j++

      if(j <= textContent.length) {
        setTimeout(() => {
          insertCharacter(j)
        }, 80);
      }
    }
    insertCharacter()
  });

  document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('custom-mouse-cursor');
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });