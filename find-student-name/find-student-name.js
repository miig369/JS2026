/**
 * The time complexity of this algorith is O(n) given that the
 * function perfoms a linear search through the array 
 * 
 * @param {*} students 
 * @param {*} name 
 * @returns student name or null
 */

const findStudentName = (arr, name) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            return arr[i];
        }
    }
    return null;
};


const findStudentName2 = (students, name) => {
    const lowerStudent = name.toLowerCase();

    for(let i = 0; i < students.length; i++){
        if(students[i].toLowerCase() === lowerStudent){
            return students[i];
        }
    }
    return null;
}

module.exports = { findStudentName }