export {}

import {
    getMapKey
} from "../services/maps.services"

const handleGetMapKey = async(req: any, res: any) => {
    try {
        const url = await getMapKey(req, res);
        return res.json(url);
    } catch(error: any) {
        
        // console.log(res.status(400).json(error));
        // console.log("here controller");
        
    }


};
module.exports = {
    handleGetMapKey
};