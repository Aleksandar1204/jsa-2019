var model = require('../models/students');

var GetStudents = (req, res) => {
   model.GetAll()
   .then(data => {
       return res.send(data);
       return res.render()
   })    
   .catch(err => {
       return res.send('ERROR!');
   })
   
};

module.exports = {
    GetStudents
}