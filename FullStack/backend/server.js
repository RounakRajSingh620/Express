import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: " A scarecrow joke",
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 2,
            title: "A bicycle joke",
            joke: "Why did the bicycle fall over? Because it was two tired."
        },
        {
            id: 3,
            title: "A belt joke",
            joke: "What do you call a belt made out of watches? A waist of time."
        },
        {
            id: 4,
            title: "A math book joke",
            joke: "Why did the math book look sad? Because it had too many problems."
        },
        {
            id: 5,
            title: "A fish joke",
            joke: "What do you call a fish wearing a crown? A king fish."
        },
        {
            id: 6,
            title: "A pizza joke",
            joke: "Why did the pizza go to the party? Because it was a little slice of heaven."
        },
    ];
    
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}); 