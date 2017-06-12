class dateQuipu {

    constructor(){
        this.init();
    }

    init(){

    }

    stringToDate(dateStr, splitter='/') {
        //Convert string "20/10/2017" to Date
        const [day, month, year] = dateStr.split(splitter);
        return new Date(year, month - 1, day)
    }
    dateToString(date, splitter='/'){
        //Convert Date to String "20/10/2017"
        const [day, month, year] = [
            date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
            date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1),
            date.getFullYear()
        ];
        return ""+day+splitter+month+splitter+year;
    }
}

export default dateQuipu;