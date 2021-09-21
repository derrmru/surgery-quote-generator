export const getTailors = (areas) => {
    const left = areas['Left']['Fifth Metatarsal Osteotomy'] === 1;
    const right = areas['Right']['Fifth Metatarsal Osteotomy'] === 1;

    const isBilateral = left && right;
    return { 
        isTailors: left || right,
        isBilateral: isBilateral, 
        left: left, 
        right: right 
    }
}