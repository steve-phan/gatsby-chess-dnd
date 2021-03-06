export const canKnightMove = (x, y, [knightX, knightY]) => {
  // console.log(
  //   knightX,
  //   knightY,
  //   '++++++=======++======',
  //   `X is ${x} , Y is ${y}`
  // )
  return (
    (Math.abs(knightX - x) === 2 && Math.abs(knightY - y) === 1) ||
    (Math.abs(knightX - x) === 1 && Math.abs(knightY - y) === 2)
  )
}
