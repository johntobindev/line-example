/**
 * If you add any script tag to the head section, this either stops working
 * completely, or works very rarely
 */
const line1 = document.getElementById('line-1');
line1.classList.add('is-loaded');

/**
 * This should work every time. `offsetWidth` triggers a reflow
 */
const line2 = document.getElementById('line-2');
line1.offsetWidth;
line2.classList.add('is-loaded');

/**
 * This should work every time. `offsetWidth` triggers a reflow
 */
const line3 = document.getElementById('line-3');

setTimeout(() => {
  line3.classList.add('is-loaded');
}, 0);