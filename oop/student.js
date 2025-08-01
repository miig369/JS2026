class Students {

    studentsRegister;

    constructor(studentsRegister){
        this.studentsRegister = studentsRegister;
    }

    getByIndex(index){
        return this.studentsRegister[index];
    }

    getById(id){
       const result =  this.studentsRegister.find((student)=>{
            return student.id === id;
        })
        return result;
    }

    getAllStudents(){
        for(let i = 0; i < this.studentsRegister.length; i++){
            console.log(this.studentsRegister[i]);
        }   
    }

    addStudent(student){
        this.studentsRegister.push(student);
    }

    /**
     * find the index using findIndex method
     * then use the splice method to remove element
     * @param {*} student 
     */
    removeStudent(name){
        const index = this.studentsRegister.findIndex(student => student.name === name);
        return this.studentsRegister.splice(index, 1);
    }

    editStudentScore(name, value){
        const student = this.studentsRegister.find(student => student.name === name);
        if(student){
            student.score = value;
        }else{
            console.log(`Student ${name} could not be found`)
        }
    }

    editStudentScore2(name, value){
        const index = this.studentsRegister.findIndex(student => student.name === name);
        if(index !== -1){
            this.studentsRegister[index].score = value;
        }else{
            console.log(`Student ${name} could not be found`)
        }
    }

    highestScore(){
        if(this.studentsRegister.length === 0) return null;

        let highScore = this.studentsRegister[0].score;
        this.studentsRegister.forEach((student)=>{
            if(highScore < student.score){
                highScore = student.score;
            }
        })
        return highScore;
    }

    lowestScore(){
        if(this.studentsRegister.length === 0) return null;

        let lowScore = this.studentsRegister[0].score;
        for(let i = 1; i < this.studentsRegister.length; i++){
            if(lowScore > this.studentsRegister[i].score){
                lowScore = this.studentsRegister[i].score;
            }
        }
        return lowScore;
    }

    highestScoringStudent() {
        if (this.studentsRegister.length === 0) return null;
    
        let topStudent = this.studentsRegister[0];
    
        this.studentsRegister.forEach((student) => {
            if (student.score > topStudent.score) {
                topStudent = student;
            }
        });
    
        return topStudent;
    }

    commonScoreArray(){

        const obj = {};

        const common = [];

        return common;

    }

    commonScore(){

        const obj = {};

        const common = [];

        return common;

    }

    orderByName(){
        return this.studentsRegister.sort((a,b) => a.localeCompate(b))

    }

    orderByScoreHighestToLowest(){
        return this.studentsRegister.sort((a, b) => b - a);
    }

    orderByScoreLowestToHighest(){
        return this.studentsRegister.sort((a, b) => a - b);
    }

    removeDuplicate(){

        const unique = [];
        this.studentsRegister.forEach((student)=>{
            const exists  = unique.some((s) => s.name === student.name && s.score === student.score);
            if(!exists){
                unique.push(student);
            }
        })
        this.studentsRegister = unique;
    }
}