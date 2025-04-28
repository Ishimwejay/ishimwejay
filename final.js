const movies = document.querySelectorAll('.movie');
const title = document.getElementById('movie-title');
const release = document.getElementById('movie-release');

movies.forEach((movie, index) => {
  movie.addEventListener('mouseover', () => {
    movies.forEach((m, i) => {
      m.style.zIndex = (i === index) ? 3 : (i === 1 ? 2 : 1);
      m.style.transform = `translateX(${(i - index) * 100}px) scale(${i === index ? 1 : 0.8})`;
    });

    // Update left side content
    title.innerText = movie.getAttribute('data-title');
    release.innerText = movie.getAttribute('data-release');
  });

  movie.addEventListener('mouseleave', () => {
    // Reset carousel (optional, or you can keep the last hovered one)
    movies[0].style.transform = 'translateX(-150px) scale(0.8)';
    movies[0].style.zIndex = 1;
    movies[1].style.transform = 'translateX(0px) scale(1)';
    movies[1].style.zIndex = 2;
    movies[2].style.transform = 'translateX(150px) scale(0.8)';
    movies[2].style.zIndex = 1;
  });
});
