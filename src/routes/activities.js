const express = require('express');
const router = express.Router();

const pool = require('../database');
const helper = require('../lib/helpers');

router.get('/add', (req, res) => {
    res.render('activities/add');
});

router.post('/add', async (req, res) => {
    const { name, salary } = req.body;
    const newActivity = {
        name,
        salary
       
    };
    await pool.query('INSERT INTO activities set ?', [newActivity]);
    req.flash('success', 'Activity Saved Successfully');
    res.redirect('/activities/index');
});

router.get('/index', async (req, res) => {
    const activities = await pool.query('SELECT * FROM activities');
    res.render('activities/list', { activities });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM activities WHERE ID = ?', [id]);
    req.flash('success', 'Activity Removed Successfully');
    res.redirect('/activities/index');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM activities WHERE id = ?', [id]);
    res.render('activities/edit', {link: links[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, salary} = req.body; 
    const newLink = {
        name,
        salary
    };
    await pool.query('UPDATE activities set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Activity Updated Successfully');
    res.redirect('/activities/index');
});

module.exports = router;