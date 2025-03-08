const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs=require('fs');
const PORT=8000;
const t = require('./allbrands.json');

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.post('/brand', (req, res) => {
  const {brandname} = req.body;
  const f=t.find(ob=>ob.brand===brandname);
  res.send(f.models.map(model=>model.name));
});

app.post(`/brand/model/year`, (req, res) => {
  const bname = req.body.brandname;
  const modelName = req.body.mname;
  const bob = t.find((b) => b.brand === bname);
  const m = bob.models.find((item) => item.name === modelName);
  res.send(m.years.map(item=>item.year));
});

app.post(`/brand/model/year/power`, (req, res) => {
  const bname = req.body.brandname;
  const modelName = req.body.selectedMod;
  const year = req.body.yvalue;
  const bob = t.find((item) => item.brand === bname);
  const m = bob.models.find((item) => item.name === modelName);
  const y = m.years.find((item) => item.year === year);
  res.send(y.powers);
});

app.post('/subscribd', (req, res) => {
    const { news } = req.body;

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'youremailaddress',
          pass: 'yourpassword'
        }
      });

      var mailOptions = {
        from: 'youremailaddress',
        to: news,
        subject: 'PSK Newsletter Greetings',
        html: '<h1>Thank You for subscribing to our Newsletter</h1>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});

app.post('/contacts', (req, res)=>{
    const inputs = req.body;
    const i=JSON.stringify(inputs);
    let ob=JSON.parse(i);
    fs.appendFile('queries.txt',`Name: ${ob.fname} ${ob.lname}\nEmail: ${ob.mail}\nPhone: ${ob.pnumber}\nMessage: ${ob.comment}\n\n\n`,function (err) {
    if (err) throw err;
      console.log('Saved!');
    });
    res.status(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
});