import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('GraphQL res');
});

app.listen(8080, () => console.log('Running server on Port 8080.'));