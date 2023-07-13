const init = (): void => {
	const menuHandler = (): void => {
		const { pathname } = window.location;
		const menuItems = document.querySelectorAll(".navigation__item");
		for (const menuItem of menuItems) {
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

	const handleScroll = (): void => {
		const sticky = document.querySelector("header");
		if (!sticky) return;

		if (sticky.offsetTop > 0) {
			sticky.classList.add("is-sticky");
		} else {
			sticky.classList.remove("is-sticky");
		}
	}

	const scrollHandler = (): void => {
		document.addEventListener("scroll", handleScroll);
	}

	const init = (): void => {
		menuHandler();
		scrollHandler();
	}

	init();
}

export { init }
