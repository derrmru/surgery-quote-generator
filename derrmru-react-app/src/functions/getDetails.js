export const getDetails = (pricing, issues, areas, data) => {
    //console.log('pricing', pricing)
    //console.log('areas', areas)
    //console.log('data', data)
    //iterate through selected surgeries
    let res = [];
    const l = pricing.length;
    let i = 0;
    for (i; i < l; i++) {
        const issue = Object.keys(pricing[i])[0] //name of foot issue
        console.log('issue', issue)
        if (issue === 'toe') {
            res.push({
                issue: 'toe surgery',
                laterality: data.hammertoeInfo.isBilateral ? 'bilateral' :
                    areas['Left']['Hammertoe Surgery'] > 0 ? 'left foot' : 'right foot',
                numToes: data.hammertoeInfo.largestNumber
            })
        } else if (issue === 'bunion') {
            res.push({
                issue: 'bunion surgery',
                laterality: data.bunionInfo.isBilateral ? 'bilateral' :
                    areas['Left']['Bunion Surgery'] > 0 ? 'left foot' : 'right foot'
            })
        } else if (issue === 'tailors') {
            res.push({
                issue: 'tailors bunion surgery',
                laterality: data.tailorInfo.isBilateral ? 'bilateral' :
                    areas['Left']['Fifth Metatarsal Osteotomy'] === 1 ? 'left foot' : 'right foot'
            })
        } else if (issue === 'cheilectomy') {
            res.push({
                issue: data.cheilectomyInfo.isBilateral ? 'cheilectomies' : 'cheilectomy',
                laterality: data.cheilectomyInfo.isBilateral ? 'bilateral' :
                    areas['Left']['Cheilectomy'] === 1 ? 'left foot' : 'right foot'
            })
        } else if (issue === 'brachymetatarsia') {
            res.push({
                issue: data.brachyInfo.isBilateral ? 'external fixator lengthening' : 'external fixator lengthenings',
                laterality: data.brachyInfo.isBilateral ? 'bilateral' :
                    areas['Left']['External Fixator Lengthening'] === 1 ? 'left foot' : 'right foot'
            })
        } else if (issue === 'corn') {
            res.push({
                issue: data.cornInfo.largestNumber > 1 ? 'corn excisions' : 'corn excision',
                laterality: data.cornInfo.isBilateral ? 'bilateral' :
                    areas['Left']['Surgical Excision'] === 1 ? 'left foot' : 'right foot',
                numToes: data.cornInfo.largestNumber
            })
        } else if (issue === 'Partial Nail Avulsion') {
            res.push({
                issue: data.nailInfo.largestNumber > 1 ? 'nail avulsions' : 'nail avulsion',
                laterality: data.nailInfo.isBilateral ? 'bilateral' :
                    areas['Left']['Partial Nail Avulsion'] === 1 ? 'left foot' : 'right foot',
                numberOfToes: data.nailInfo.largestNumber
            })
        }
    }
    console.log('res', res)
    return res
}