import VeriSign from "../api/VeriSign.js";

class SeasonsDataService {
    getEpisodes() {
        return VeriSign.get("/episodes");
    }
}

export default new SeasonsDataService();