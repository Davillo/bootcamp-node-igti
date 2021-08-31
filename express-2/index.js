import express from 'express';

const app = express();

app.use(express.json());

app.all('/all', function(req, res) {
    res.send(req.method);
});

app.get('/teste?', (req,res) => {
    res.send('/teste?')
});

app.get('/buzz+', (req,res) => {
    res.send('/buzz+')
});

app.get('/test(ing)+', (req,res) => {
    consogle.log(req.body);
    res.send('/test(ing)+');
});

app.get('/testParam/:id/:a?', (req,res) => {
    res.send(req.params.id);
});

//query
app.get('/query', (req,res) => {
    res.send(req.query);
});

//next
app.get('/multipleHandlers', (req,res, next) => {
    console.log('callback 1');
    next();
}, (req, res) => {
    console.log('callback 2');
    res.end();
});

//next with array
const callback1 = (req,res, next) => {
    console.log('callback 1');
    next();
};

const callback2 = (req,res, next) => {
    console.log('callback 2');
    next();
};

const callback3 = (req,res, next) => {
    console.log('callback 3');
    next();
    res.end();
};

app.get('/multipleHandlersArray', [callback1, callback2, callback3]);

app.route('teste')
    .get((req, res) => {

    })
    .post((req, res) => {

    })
    .put((req, res) => {
        
    });

app.listen(8081);