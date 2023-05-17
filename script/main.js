'use strict';

const items = document.querySelectorAll('.content__accordion_item');

items.forEach((elem) => {
	elem.addEventListener('click', () => {
		const isActive = elem.classList.contains('active');

		items.forEach((item) => {
			item.classList.remove('active');
		});
		if (isActive) {
			elem.classList.remove('active');
		} else {
			elem.classList.add('active');
		}
	});
});
