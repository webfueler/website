const init = () => {
	const menuHandler = () => {
		const { pathname } = window.location;
		const menuItems = document.querySelectorAll(".navigation__item");
		for (let menuItem of menuItems) {
			const href = menuItem.getAttribute('href');
			if (!href) break;

			if (pathname.includes(href) && href !== "/") {
				menuItem.classList.add("is-active");
			}

			// homepage
			if (pathname === href && href === "/") {
				menuItem.classList.add("is-active");
			}
		}
	}

	const handleScroll = () => {
		const sticky = document.querySelector("header");
		if (!sticky) return;

		if (sticky.offsetTop > 0) {
			sticky.classList.add("is-sticky");
		} else {
			sticky.classList.remove("is-sticky");
		}
	}

	const scrollHandler = () => {
		document.addEventListener("scroll", handleScroll);
	}

	const init = () => {
		menuHandler();
		scrollHandler();
	}

	init();
}

export { init }
