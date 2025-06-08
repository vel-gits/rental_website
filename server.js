const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log('Rental Request received:', req.body);

    res.send(`<h1>Thank you, ${name}! We will contact you soon.</h1>
              <p>Your rental request has been received.</p>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
