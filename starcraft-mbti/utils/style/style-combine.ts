export function styleCombine(styles: string[]) {
    let totalStyle = [];

    for (let style of styles) {
        for (let each of style.split(" ")) {
            totalStyle.push(each);
        }
    }

    return totalStyle.join(" ");
}
