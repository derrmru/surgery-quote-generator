export const getBrachymetatarsia = (areas) => {
    const left = areas['Left']['External Fixator Lengthening'] === 1;
    const right = areas['Right']['External Fixator Lengthening'] === 1;

    const isBilateral = left && right;

    return { 
        isBrachy: left || right,
        isBilateral: isBilateral, 
        left: left, 
        right: right
    }
}