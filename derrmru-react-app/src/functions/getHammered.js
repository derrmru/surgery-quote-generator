export const getHammered = (areas) => {
    const left = areas['Left']['Hammertoe Surgery'];
    const right = areas['Right']['Hammertoe Surgery'];

    //determine greatest number
    let largest;
    if (left && right) largest = left >= right ? left : right
    if (!left) largest = right
    if (!right) largest = left

    //determine if is bilateral
    const isBilateral = left > 0 && right > 0;

    return {
        isHammered: left > 0 || right > 0,
        isBilateral: isBilateral, 
        largestNumber: largest
    }
}