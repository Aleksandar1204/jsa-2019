var First = (req, res) => {
    var data = {
        ime: 'Pero', 
        prezime:'Perovski',
        studenti: [
            {ime:'Pero', prezime:'Perovski'},
            {ime:'Pero', prezime:'Perovski'},
            {ime:'Pero', prezime:'Perovski'},
        ]
    };
    res.render('first', data);
}

module.exports = {
    First
}