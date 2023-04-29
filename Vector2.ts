/**
 * @param yVector Vector2 must be equal to point minus begin
 * @param xVector Vector2 must be equal to end minus begin
 */
export function project(yVector: Phaser.Math.Vector2, xVector: Phaser.Math.Vector2): Phaser.Math.Vector2 {
    xVector.normalize();
    let sp: number = yVector.dot(xVector);
    return xVector.scale(sp);
}