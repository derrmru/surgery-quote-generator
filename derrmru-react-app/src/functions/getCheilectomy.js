export const getCheilectomy = (areas) => {
    const left = areas['Left']['Cheilectomy'] === 1;
    const right = areas['Right']['Cheilectomy'] === 1;

    const isBilateral = left && right;
    return { 
        isCheilectomy: left || right,
        isBilateral: isBilateral, 
        left: left, 
        right: right 
    }
}