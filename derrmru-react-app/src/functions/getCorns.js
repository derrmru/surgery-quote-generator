export const getCorns = (areas) => {
    const left = areas['Left']['Surgical Excision'];
    const right = areas['Right']['Surgical Excision'];

    //determine greatest number
    let largest;
    if (left && right) largest = left >= right ? left : right
    if (!left) largest = right
    if (!right) largest = left

    //determine if is bilateral
    const isBilateral = left > 0 && right > 0;

    return {
        isCorn: left > 0 || right > 0,
        isBilateral: isBilateral,
        largestNumber: largest
    }
}