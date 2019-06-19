var checkGrades = [
    {ime: "Pero", prezime:"Perovski", prosek: 6.2},
	{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
	{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
	{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
	{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
	{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
	{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
];

var max = checkGrades.reduce(function (prev, current) {
    return (prev.prosek > current.prosek) ? prev : current
 });

 var min = checkGrades.reduce(function (prev, current) {
    return (prev.prosek < current.prosek) ? prev : current
 });
 
 

 var avg = checkGrades.reduce(function (prev) {
    return ((prev + checkGrades.prosek) / checkGrades.length) ? prev : checkGrades.length
 });
 
 console.log(max);
 console.log(min);
 console.log(avg);
 