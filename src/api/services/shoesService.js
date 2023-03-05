const Shoes = require("../models/shoe")

module.exports = {
    create: async (body) => {

        const name = body.name;
        const price = body.price;
        try {
            const newShoes = new Shoes({
                name,
                price
            });
            await newShoes.save();

            return {
                message: "create shoes successfully",
                data: null,
                statusCode: 200,
            }
        }
        catch (error) {
            if (error) {
                throw error;
            }
            return {
                message: "create shoes failed",
                data: null,
                statusCode: 500,
            }
        }
    },
};