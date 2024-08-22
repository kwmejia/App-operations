export function concatenateLanguages(l1: Set<string>, l2: Set<string>): Set<string> {
    let result = new Set<string>();
    for (let str1 of l1) {
        for (let str2 of l2) {
            result.add(str1 + str2);
        }
    }
    return result;
}

export function powerOfLanguage(l: Set<string>, power: number): Set<string> {
    let result = new Set<string>(l);
    let temp = new Set<string>(l);
    for (let i = 2; i <= power; i++) {
        let newTemp = new Set<string>();
        for (let str1 of temp) {
            for (let str2 of l) {
                newTemp.add(str1 + str2);
            }
        }
        temp = newTemp;
        result = new Set([...result, ...temp]);
    }
    return result;
}
