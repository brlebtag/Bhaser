import { Vector2D } from '../Euclid/Common';

export function project(future: Phaser.Math.Vector2, begin: Phaser.Math.Vector2, end: Phaser.Math.Vector2): Phaser.Math.Vector2 {
    let v1 = future.clone().subtract(begin);
    let v2 = end.clone().subtract(future);
    v2.normalize();
    let sp: number = v1.dot(v2);
    return v2.setLength(sp);
}

export function vector2(vect: Vector2D): Phaser.Math.Vector2 {
    return new Phaser.Math.Vector2(vect.x, vect.y);
}