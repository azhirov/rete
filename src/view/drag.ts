import { listenWindow } from './utils';

export class Drag {

    pointerStart: [number, number] | null;
    el: HTMLElement;
    destroy: () => void;

    constructor(
        el: HTMLElement,
        private onTranslate = (_x: number, _y: number, _e: PointerEvent) => {},
        private onStart = (_e: PointerEvent) => {},
        private onDrag = (_e: PointerEvent) => {}
    ) {
        this.pointerStart = null;
        this.el = el;

        this.destroy = this.initEvents();
    }

    initEvents() {
        this.el.style.touchAction = 'none';
        this.el.addEventListener('pointerdown', this.down.bind(this));

        const destroyMove = listenWindow('pointermove', this.move.bind(this));
        const destroyUp = listenWindow('pointerup', this.up.bind(this));

        return () => { destroyMove(); destroyUp(); }
    }

    down(e: PointerEvent) {
        e.stopPropagation();
        this.pointerStart = [e.pageX, e.pageY]

        this.onStart(e);
    }

    move(e: PointerEvent) {
        if (!this.pointerStart) return;
        e.preventDefault();

        let [x, y] = [e.pageX, e.pageY]

        let delta = [x - this.pointerStart[0], y - this.pointerStart[1]];

        let zoom = this.el.getBoundingClientRect().width / this.el.offsetWidth;

        this.onTranslate(delta[0] / zoom, delta[1] / zoom, e);
    }

    up(e: PointerEvent) {
        if (!this.pointerStart) return;
        
        this.pointerStart = null;
        this.onDrag(e);
    }
}