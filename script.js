document.addEventListener('DOMContentLoaded', () => {
  console.log('Bayu Pratama - Personal Website');
  
  // Add hover effects to social links
  const socialLinks = document.querySelectorAll('.social-links a');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.querySelector('i').style.transform = 'scale(1.2)';
      link.querySelector('i').style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', () => {
      link.querySelector('i').style.transform = 'scale(1)';
    });
  });
}); 