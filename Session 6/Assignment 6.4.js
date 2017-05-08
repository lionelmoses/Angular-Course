var Employees=[]
 Employees[0]={Name:"George", Age:32, Salary:50000, City:'Bangalore'}
 Employees[1]={Name:"Edward", Age:17, Salary:70000, City: 'Chennai'}
 Employees[2]={Name:"Christine", Age:58, Salary:85000, City: 'Pune'}
 Employees[3]={Name:"Sarah", Age:62, Salary:98000, City:'Kochi'}

 for (var i = 0 in Employees) {
  console.log(Employees[i]);
}