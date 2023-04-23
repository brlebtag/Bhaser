export function projection(start: Phaser.Math.Vector2, projected: Phaser.Math.Vector2, end: Phaser.Math.Vector2): Phaser.Math.Vector2 {
    let v1 = projected.subtract(start);
    let v2 = end.subtract(start);
    v2.normalize();
    let sp: number = v1.dot(v2);
    v2.scale(sp).add(start);
    return v2;
}