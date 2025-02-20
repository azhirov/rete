import { Component } from '../engine/component';
import { Control } from '../control';
import { ControlView } from './control';
import { Emitter } from '../core/emitter';
import { EventsTypes } from '../events';
import { IO } from '../io';
import { Node } from '../node';
import { SocketView } from './socket';
export declare class NodeView extends Emitter<EventsTypes> {
    node: Node;
    component: Component;
    sockets: Map<IO, SocketView>;
    controls: Map<Control, ControlView>;
    el: HTMLElement;
    private _startPosition;
    constructor(node: Node, component: Component, emitter: Emitter<EventsTypes>);
    clearSockets(): void;
    bindSocket(el: HTMLElement, type: string, io: IO): void;
    bindControl(el: HTMLElement, control: Control): void;
    getSocketPosition(io: IO): [number, number];
    onSelect(e: MouseEvent): void;
    onStart(): void;
    onTranslate(dx: number, dy: number): void;
    onDrag(dx: number, dy: number): void;
    translate(x: number, y: number): void;
    update(): void;
    remove(): void;
}
