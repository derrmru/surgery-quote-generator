export const countIssues = (issues) => {
    let areas = {
        'Left': {},
        'Right': {}
    };
    let i = 0;
    const keys = Object.keys(issues)
    const l = keys.length;
    for (i; i < l; i++) {
        const issue = Object.keys(issues[keys[i]])[0];
        if (keys[i].indexOf('left') >= 0) {//collect left footed issues
            if (issue === 'Hammertoe Surgery' || issue === 'Claw Toe Surgery' || issue === 'Mallet Toe Surgery') {
                areas['Left']['Hammertoe Surgery'] ? areas['Left']['Hammertoe Surgery'] += 1 : areas['Left']['Hammertoe Surgery'] = 1
                areas['Left']['Surgery Type'] = issue
            } else {
                areas['Left'][issue] ? areas['Left'][issue] += 1 : areas['Left'][issue] = 1
            }
        }
        if (keys[i].indexOf('right') >= 0) {//collect right footed issues
            if (issue === 'Hammertoe Surgery' || issue === 'Claw Toe Surgery' || issue === 'Mallet Toe Surgery') {
                areas['Right']['Hammertoe Surgery'] ? areas['Right']['Hammertoe Surgery'] += 1 : areas['Right']['Hammertoe Surgery'] = 1
                areas['Right']['Surgery Type'] = issue
            } else {
                areas['Right'][issue] ? areas['Right'][issue] += 1 : areas['Right'][issue] = 1
            }
        }
    }
    return areas;
}