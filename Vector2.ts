/**
 * @param projecting Vector2 must be equal to end minus begin
 * @param projected Vector must be equal to point minus begin
 */
export function projection(projecting: Phaser.Math.Vector2, projected: Phaser.Math.Vector2): Phaser.Math.Vector2 {
    projecting.normalize();
    let sp: number = projected.dot(projecting);
    return projecting.scale(sp);
}