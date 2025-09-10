const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const id = entry.target.getAttribute('id');
	  const element = document.querySelector(`#TableOfContents a[href="#${id}"]`)
	  if (!element){
		  return
	  }
	  if (entry.intersectionRatio > 0) {
		  element.parentElement.classList.add('active');
	  } else {
		  element.parentElement.classList.remove('active');
	  }
	});
});

// Track all sections that have an `id` applied
document.querySelectorAll('h2[id], h3[id], h4[id]').forEach((section) => {
	observer.observe(section);
});
