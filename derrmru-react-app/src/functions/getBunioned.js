export const getBunioned = (areas) => {
    let left;
    if (areas['Left']['Scarf & Akin Osteotomy'] === 1) left = 'Scarf & Akin Osteotomy'
    if (areas['Left']['Minimally Invasive Bunion Surgery'] === 1) left = 'Minimally Invasive Bunion Surgery'

    
    let right;
    if (areas['Right']['Scarf & Akin Osteotomy'] === 1) right = 'Scarf & Akin Osteotomy'
    if (areas['Right']['Minimally Invasive Bunion Surgery'] === 1) right = 'Minimally Invasive Bunion Surgery'
    
    const isBilateral = left !== undefined && (left === right)
    return {
            isBunion: left !== undefined || right !== undefined, 
            isBilateral: isBilateral, 
            left: left, 
            right: right 
        }
}