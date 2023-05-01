import { map, euclidian } from "../Euclid/Algorithms/Math";
import { project } from "./Vector2";


export namespace InPlace {
    export function seek(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
        return target.subtract(source).setLength(velocity);
    }

    export function flee(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
        return seek(source, target, velocity).negate();
    }

    export function arrive(force: Phaser.Math.Vector2, distance: number, threshold: number, velocity: number): Phaser.Math.Vector2 {
        if (distance < threshold) {
            return force.setLength(map(distance, 0, threshold, 0, velocity));
        }
        return force.setLength(velocity);
    }
}

export namespace OutOfPlace {
    export function arrive(force: Phaser.Math.Vector2, distance: number, threshold: number, velocity: number): Phaser.Math.Vector2 {
        if (distance < threshold) {
            return force.clone().setLength(map(distance, 0, threshold, 0, velocity));
        }
        return force.clone().setLength(velocity);
    }
    
    export function seek(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
        return target.clone().subtract(source).setLength(velocity);
    }
    
    export function flee(source: Phaser.Math.Vector2, target: Phaser.Math.Vector2, velocity: number): Phaser.Math.Vector2 {
        return seek(source, target, velocity).negate();
    }
}

export function follow(source: Phaser.Math.Vector2, future: Phaser.Math.Vector2, begin: Phaser.Math.Vector2, end: Phaser.Math.Vector2, distance: number, velocity: number): Phaser.Math.Vector2 {
    let target = project(future, begin, end).add(begin);
    let length = euclidian(future, target);

    if (length > distance) {
        return InPlace.seek(source, target, velocity);
    } else {
        return target.set(0, 0);
    }
}
