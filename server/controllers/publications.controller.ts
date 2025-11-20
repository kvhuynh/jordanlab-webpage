export {}

import {
    getAllPublications
} from "../services/publications.services"

const handleGetAllPublications = async(req: any, res: any) => {
    try {
        const publications = await getAllPublications(req.params.orcidId);
        return res.json(publications);
    } catch(error: any) {
        
        console.log(res.status(400).json(error));
        // console.log("here controller");
        
    }


};

module.exports = {
    handleGetAllPublications
};