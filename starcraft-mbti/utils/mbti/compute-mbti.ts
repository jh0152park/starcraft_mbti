export function ComputeMBTI(answer: string) {
    let mbti = "";
    let types: { [key: string]: number } = {};

    for (let type of answer) {
        if (!!!types[type]) {
            types[type] = 0;
        }
        types[type]++;
    }

    mbti += types["E"] > types["I"] ? "E" : "I";
    mbti += types["S"] > types["N"] ? "S" : "N";
    mbti += types["F"] > types["T"] ? "F" : "T";
    mbti += types["J"] > types["P"] ? "J" : "P";

    return mbti;
}
