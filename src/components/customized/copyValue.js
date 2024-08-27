export function copyValue(raw) {
    const templateNstyle = raw.split('</style>')[0].split('<style scoped>');
    const rawStyle = templateNstyle[1].trim();
    const rawHtml = templateNstyle[0].split('<!-- HTML')[1].split(' -->')[0].trim();
    
    const val = `<!-- html element-->\n${rawHtml}\n\n/** CSS */\n${rawStyle}`;
    
    navigator.clipboard.writeText(val).then(() => {
        console.log(val);
        console.log("finished val");
    }).catch((e) => {
        console.log('unsuccessful copy');
    });
}