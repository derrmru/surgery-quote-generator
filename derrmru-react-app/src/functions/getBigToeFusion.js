export const getBigToeFusion = (areas) => {
    let left;
    if (areas['Left']['First MTP Joint Fusion'] === 1) left = 'Big Toe Fusion'

    let right;
    if (areas['Right']['First MTP Joint Fusion'] === 1) right = 'Big Toe Fusion'

    return {
        isFusion: left !== undefined || right !== undefined,
        left: left,
        right: right
    }
}