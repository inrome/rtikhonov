const MAX_ROTATE = 4;
const LIFT_Y = -5;
const SCALE = 1.015;
const SHADOW_BLUR = 22;
const SHADOW_COLOR = "rgba(0,0,0,0.28)";
const RAMP_MS = 220;
const TRACK_MS = 60;

function canHover(): boolean {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return false;
	}
	return (
		window.matchMedia("(hover: hover)").matches &&
		window.matchMedia("(pointer: fine)").matches
	);
}

function pointerRatio(el: HTMLElement, event: MouseEvent): [number, number] {
	const rect = el.getBoundingClientRect();
	return [
		(event.clientX - rect.left) / rect.width,
		(event.clientY - rect.top) / rect.height,
	];
}

function resetTilt(el: HTMLElement, withShadow: boolean) {
	el.style.transform = "";
	if (withShadow) {
		el.style.boxShadow = "";
	}
}

function onTiltMove(el: HTMLElement, event: MouseEvent, withShadow: boolean) {
	const [x, y] = pointerRatio(el, event);
	const rotateY = (x - 0.5) * 2 * MAX_ROTATE;
	const rotateX = (0.5 - y) * 2 * MAX_ROTATE;

	el.style.transform = `translateY(${LIFT_Y}px) scale(${SCALE}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

	if (withShadow) {
		const offsetX = -rotateY * 0.6;
		const offsetY = rotateX * 0.6 + 8;
		el.style.boxShadow = `${offsetX.toFixed(1)}px ${offsetY.toFixed(1)}px ${SHADOW_BLUR}px ${SHADOW_COLOR}`;
	}
}

function wireTilt(el: HTMLElement) {
	const withShadow = el.hasAttribute("data-tilt-shadow");
	el.style.transformStyle = "preserve-3d";
	el.style.willChange = "transform";
	el.style.transition = `transform ${RAMP_MS}ms ease-out, box-shadow ${RAMP_MS}ms ease-out`;

	let rampTimer: number | undefined;

	el.addEventListener("mouseenter", (event) => {
		if (rampTimer !== undefined) window.clearTimeout(rampTimer);
		el.style.transition = `transform ${RAMP_MS}ms ease-out, box-shadow ${RAMP_MS}ms ease-out`;
		onTiltMove(el, event, withShadow);
		rampTimer = window.setTimeout(() => {
			el.style.transition = `transform ${TRACK_MS}ms ease-out, box-shadow ${TRACK_MS}ms ease-out`;
			rampTimer = undefined;
		}, RAMP_MS);
	});

	el.addEventListener("mousemove", (event) => {
		// Keep the target under the cursor during the ramp so the
		// handoff to fast tracking does not jump.
		onTiltMove(el, event, withShadow);
	});

	el.addEventListener("mouseleave", () => {
		if (rampTimer !== undefined) {
			window.clearTimeout(rampTimer);
			rampTimer = undefined;
		}
		el.style.transition = `transform ${RAMP_MS}ms ease-out, box-shadow ${RAMP_MS}ms ease-out`;
		resetTilt(el, withShadow);
	});
}

export function initTilt(root: ParentNode = document): void {
	if (!canHover()) return;

	root.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
		if (el.dataset.tiltReady === "1") return;
		el.dataset.tiltReady = "1";
		wireTilt(el);
	});
}

initTilt();
