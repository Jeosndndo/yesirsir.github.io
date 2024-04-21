document.getElementById('click-me').addEventListener('click', function() {
    document.querySelector('.content').style.display = 'block';
    document.getElementById('click-me').style.opacity = '0'; 
    document.getElementById('music').play(); 
  });
  