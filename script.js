const passwordPage = document.getElementById('passwordPage');
const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const passwordError = document.getElementById('passwordError');

const bookPages = document.getElementById('bookPages');
const pages = document.querySelectorAll('.page');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const correctPassword = 'X.VI.MMXXV'; // Roman numeral for October 6, 2025 = X.X.IV.MMXXV (can customize)

let currentPage = 1;

passwordBtn.addEventListener('click', () => {
  if (passwordInput.value.trim() === correctPassword) {
    passwordPage.style.display = 'none';
    bookPages.style.display = 'block';
    showPage(currentPage);
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';
  } else {
    passwordError.textContent = 'Incorrect password. Please try again.';
  }
});

function showPage(pageNum) {
  pages.forEach(page => {
    page.style.display = 'none';
  });
  const pageToShow = document.querySelector(`.page[data-page="${pageNum}"]`);
  if (pageToShow) pageToShow.style.display = 'block';

  prevBtn.disabled = pageNum === 1;
  nextBtn.disabled = pageNum === pages.length;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length) {
    currentPage++;
    showPage(currentPage);
  }
});
