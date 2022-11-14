var employees = [];

function Employee (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = ("Full time");
    };


var John = new Employee("John", "Mechanic", "$25/hour",);
employees.push(John);





var Mark = new Employee("Mark", "driver", "$80,000/year");
employees.push(Mark);


var Jim = new Employee("Jim", "manager", "$30/hour");
Jim.status = "Part Time"
employees.push(Jim);



console.log(employees)

