import { map, euclidian } from "../Euclid/Algorithms/Math";
import { projection } from "./Vector";

export function arrive(force: Phaser.Math.Vector2, distance: number, velocity: number): Phaser.Math.Vector2 {
    let length = force.length();

    if (length < distance) return force.setLength(map(length, 0, distance, 0, velocity));

    return force.setLength(velocity);
}

export function seek(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
    return target.subtract(source).setLength(velocity);
}

export function follow(currentPosition: Phaser.Math.Vector2, futurePosition: Phaser.Math.Vector2, beginPath: Phaser.Math.Vector2, endPath: Phaser.Math.Vector2, distance: number, velocity: number): Phaser.Math.Vector2 {
    let target = projection(beginPath, futurePosition, endPath);
    let length = euclidian(futurePosition, target);

    if (length > distance) {
        return seek(currentPosition, target, velocity);
    } else {
        return target.set(0, 0);
    }
}

export function flee(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
    return seek(source, target, velocity).negate();
}