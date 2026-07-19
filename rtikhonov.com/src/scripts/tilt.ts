const MAX_ROTATE = 4;
const LIFT_Y = -5;
const SCALE = 1.015;
const SHADOW_BLUR = 22;
const SHADOW_COLOR_LIGHT = "rgba(0,0,0,0.28)";
const SHADOW_COLOR_DARK = "rgba(0,0,0,0.6)";
/** How quickly current values chase the target (higher = snappier). */
const LERP = 0.16;
/** Stop the frame loop once values are this close to rest/target. */
const SETTLE = 0.01;

type Vec = {
	rx: number;
	ry: number;
	lift: number;
	scale: number;
};

function canHover(): boolean {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return false;
	}
	return (
		window.matchMedia("(hover: hover)").matches &&
		window.matchMedia("(pointer: fine)").matches
	);
}

function shadowColor(): string {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? SHADOW_COLOR_DARK
		: SHADOW_COLOR_LIGHT;
}

function pointerRatio(
	el: HTMLElement,
	event: PointerEvent,
): [number, number] {
	const rect = el.getBoundingClientRect();
	return [
		(event.clientX - rect.left) / rect.width,
		(event.clientY - rect.top) / rect.height,
	];
}

function near(a: number, b: number): boolean {
	return Math.abs(a - b) < SETTLE;
}

function settled(current: Vec, target: Vec): boolean {
	return (
		near(current.rx, target.rx) &&
		near(current.ry, target.ry) &&
		near(current.lift, target.lift) &&
		near(current.scale, target.scale)
	);
}

function lerp(current: number, target: number): number {
	return current + (target - current) * LERP;
}

function applyTilt(el: HTMLElement, state: Vec, withShadow: boolean) {
	const atRest =
		near(state.rx, 0) &&
		near(state.ry, 0) &&
		near(state.lift, 0) &&
		near(state.scale, 1);

	if (atRest) {
		el.style.transform = "";
		if (withShadow) el.style.boxShadow = "";
		return;
	}

	el.style.transform = `translateY(${state.lift.toFixed(2)}px) scale(${state.scale.toFixed(4)}) rotateX(${state.rx.toFixed(2)}deg) rotateY(${state.ry.toFixed(2)}deg)`;

	if (withShadow) {
		const offsetX = -state.ry * 0.6;
		const offsetY = state.rx * 0.6 + 8;
		el.style.boxShadow = `${offsetX.toFixed(1)}px ${offsetY.toFixed(1)}px ${SHADOW_BLUR}px ${shadowColor()}`;
	}
}

function wireTilt(el: HTMLElement) {
	const withShadow = el.hasAttribute("data-tilt-shadow");
	el.style.transformStyle = "preserve-3d";

	const current: Vec = { rx: 0, ry: 0, lift: 0, scale: 1 };
	const target: Vec = { rx: 0, ry: 0, lift: 0, scale: 1 };
	let raf = 0;
	let active = false;

	const tick = () => {
		current.rx = lerp(current.rx, target.rx);
		current.ry = lerp(current.ry, target.ry);
		current.lift = lerp(current.lift, target.lift);
		current.scale = lerp(current.scale, target.scale);

		applyTilt(el, current, withShadow);

		if (settled(current, target)) {
			current.rx = target.rx;
			current.ry = target.ry;
			current.lift = target.lift;
			current.scale = target.scale;
			applyTilt(el, current, withShadow);
			raf = 0;
			if (!active) {
				el.style.willChange = "";
			}
			return;
		}

		raf = requestAnimationFrame(tick);
	};

	const startLoop = () => {
		if (raf) return;
		raf = requestAnimationFrame(tick);
	};

	const setTargetFromPointer = (event: PointerEvent) => {
		const [x, y] = pointerRatio(el, event);
		target.rx = (0.5 - y) * 2 * MAX_ROTATE;
		target.ry = (x - 0.5) * 2 * MAX_ROTATE;
		target.lift = LIFT_Y;
		target.scale = SCALE;
	};

	el.addEventListener("pointerenter", (event) => {
		if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
			return;
		}
		active = true;
		el.style.willChange = "transform";
		setTargetFromPointer(event);
		startLoop();
	});

	el.addEventListener("pointermove", (event) => {
		if (!active) return;
		if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
			return;
		}
		setTargetFromPointer(event);
		startLoop();
	});

	el.addEventListener("pointerleave", () => {
		active = false;
		target.rx = 0;
		target.ry = 0;
		target.lift = 0;
		target.scale = 1;
		startLoop();
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
