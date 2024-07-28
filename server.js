const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Campuses } = require('./models/Campus'); // Asumsikan Anda telah mendefinisikan model di `models.js`
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

// Create
app.post('/campuses', async (req, res) => {
    try {
        const campus = await Campuses.create(req.body);
        res.status(201).json(campus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read (Get all campuses and render view)
app.get('/campuses', async (req, res) => {
    try {
        const campuses = await Campuses.findAll();
        res.render('index', { campuses });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update
app.put('/campuses/:id', async (req, res) => {
    try {
        const [updated] = await Campuses.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCampus = await Campuses.findByPk(req.params.id);
            res.status(200).json(updatedCampus);
        } else {
            res.status(404).json({ error: 'Campus not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete
app.delete('/campuses/:id', async (req, res) => {
    try {
        const deleted = await Campuses.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Campus not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
