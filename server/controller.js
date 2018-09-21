module.exports = {

    // create: ,


    getHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.status(500).send({ errorMessage: "Failed to retrieve houses" });
                console.log(err);
            })
    },

    addHouse: (req, res, next) => {
        const dbInstance= req.app.get('db');
        const { propertyName, address, city, state, zip } = req.body;

        dbInstance.add_house(propertyName, address, city, state, zip)
            .then(result => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Failed to add house"})
                console.log(err);
            })

    }
}

    // delete:



