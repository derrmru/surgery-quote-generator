export const getNailAvulsion = (areas) => {
    console.log('areas:', areas)
    const left = areas['Left']['Partial Nail Avulsion'];
    const right = areas['Right']['Partial Nail Avulsion'];

    //determine greatest number
    let largest;
    if (left && right) largest = 2
    if (!left) largest = right
    if (!right) largest = left

    //determine if is bilateral
    const isBilateral = left > 0 && right > 0;

    return {
        isNailAvulsion: left > 0 || right > 0,
        isBilateral: isBilateral,
        largestNumber: largest
    }
}