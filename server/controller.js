module.exports = {



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
        const { propertyname, address, city, homestate, zip, propertyimage, mortgage, rent } = req.body;

        dbInstance.add_house(propertyname, address, city, homestate, zip, propertyimage, mortgage, rent)
            .then(result => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Failed to add house"})
                console.log(err);
            })
    },

    removeHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params;

        dbInstance.remove_house(id)
            .then(result => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Failed to delete house"})
                console.log(err);
            })
    } 
}

   



