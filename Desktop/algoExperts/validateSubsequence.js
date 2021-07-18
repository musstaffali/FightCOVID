function isValidSubsequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    // < = greater than
    // the && operator only returns true when both of its operands are true (and false in all other cases), 
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}     
exports.isValidSubsequence = isValidSubsequence;