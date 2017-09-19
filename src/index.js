const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});

//DATABASE_URL = postgres://gcqflsiiasdvjq:96b4ee61372ca759c40af62e560d3fa9c380e297670b028a93bcbd0de0e7df14@ec2-54-75-226-177.eu-west-1.compute.amazonaws.com:5432/d7kq5bqqs7nnl2