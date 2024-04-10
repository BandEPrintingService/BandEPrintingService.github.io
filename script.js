document.getElementById('serviceInfoBtn').addEventListener('click', function() {
    var info = document.getElementById('serviceInfo');
    
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  });