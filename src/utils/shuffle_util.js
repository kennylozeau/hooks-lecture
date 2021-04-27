export const shuffleArray = (array) => {
    let dupedArr = [...array];
    let length = dupedArr.length;
    let shuffledArray = [];

    while (length--) {
        let randIdx = Math.floor(Math.random() * (length + 1));
        shuffledArray.push(dupedArr[randIdx]);
        dupedArr.splice(randIdx, 1);
    }

    return shuffledArray;
}