import { map, euclidian } from "../Euclid/Algorithms/Math";
import { project } from "./Vector2";

export function arrive(force: Phaser.Math.Vector2, distance: number, threshold: number, velocity: number): Phaser.Math.Vector2 {
    if (distance < threshold) {
        return force.setLength(map(length, 0, distance, 0, velocity));
    }

    return force.setLength(velocity);
}

export function seek(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
    return target.subtract(source).setLength(velocity);
}

export function follow(source: Phaser.Math.Vector2, future: Phaser.Math.Vector2, begin: Phaser.Math.Vector2, end: Phaser.Math.Vector2, distance: number, velocity: number): Phaser.Math.Vector2 {
    if (future == source) {
        future = source.clone();
    }

    let target = project(end.subtract(begin), future.subtract(begin)).add(begin);
    let length = euclidian(future, target);

    if (length > distance) {
        return seek(source, target, velocity);
    } else {
        return target.set(0, 0);
    }
}

export function flee(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
    return seek(source, target, velocity).negate();
}