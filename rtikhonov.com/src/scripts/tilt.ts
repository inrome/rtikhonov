const MAX_ROTATE = 6;
const LIFT_Y = -5;
const SCALE = 1.015;
const SHADOW_BLUR = 22;
const SHADOW_COLOR = "rgba(0,0,0,0.4)";

function canTilt(): boolean {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return false;
	}
	return (
		window.matchMedia("(hover: hover)").matches &&
		window.matchMedia("(pointer: fine)").matches
	);
}

function resetTilt(el: HTMLElement, withShadow: boolean) {
	el.style.transform = "";
	if (withShadow) {
		el.style.boxShadow = "";
	}
}

function onMove(el: HTMLElement, event: MouseEvent, withShadow: boolean) {
	const rect = el.getBoundingClientRect();
	const x = (event.clientX - rect.left) / rect.width;
	const y = (event.clientY - rect.top) / rect.height;
	const rotateY = (x - 0.5) * 2 * MAX_ROTATE;
	const rotateX = (0.5 - y) * 2 * MAX_ROTATE;

	el.style.transform = `translateY(${LIFT_Y}px) scale(${SCALE}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

	if (withShadow) {
		const offsetX = -rotateY * 0.6;
		const offsetY = rotateX * 0.6 + 8;
		el.style.boxShadow = `${offsetX.toFixed(1)}px ${offsetY.toFixed(1)}px ${SHADOW_BLUR}px ${SHADOW_COLOR}`;
	}
}

export function initTilt(root: ParentNode = document): void {
	if (!canTilt()) return;

	root.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
		if (el.dataset.tiltReady === "1") return;
		el.dataset.tiltReady = "1";

		const withShadow = el.hasAttribute("data-tilt-shadow");
		el.style.transformStyle = "preserve-3d";
		el.style.willChange = "transform";
		el.style.transition = "transform 180ms ease-out, box-shadow 180ms ease-out";

		el.addEventListener("mousemove", (event) => {
			el.style.transition = "transform 60ms ease-out, box-shadow 60ms ease-out";
			onMove(el, event, withShadow);
		});

		el.addEventListener("mouseleave", () => {
			el.style.transition = "transform 220ms ease-out, box-shadow 220ms ease-out";
			resetTilt(el, withShadow);
		});
	});
}

initTilt();
