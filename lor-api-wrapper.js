import https from 'node:https';

class Lor {
    constructor(auth_key) {
        this.auth_key = auth_key;
    }

    //Grab user by PUUID
    //ACCOUNT-V1
    ///riot/account/v1/accounts/by-puuid/{puuid}
    //Reference: https://developer.riotgames.com/apis#account-v1/GET_getByPuuid
    async getUserByPuuid(puuid, region) {
        try {
            //check parameters first
            if (puuid === '' || undefined) {
                throw "puuid is missing, pass a string type with a valid puuid"
            } else if (typeof puuid !== 'string' || puuid instanceof String) {
                //Not a string
                throw "puuid is not string type: puuid (string) = 'K-1NczBPzqHG1Ab...'."
            }

            //https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/HfYckhbhJnSBzZZmcIvAJHy4Zpg9rEBeuo...
            var request = ('/riot/account/v1/accounts/by-puuid/' + puuid);

            //HTTP
            var response = httpsGetRequest(request, region, this.auth_key).then((data) => {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
                return response;
            });

            return response;
        } catch (error) {
            // return full error
            throw error;
        };

    }
    //Grab user by userName and tagLine
    //ACCOUNT-V1
    /// riot / account / v1 / accounts / by - riot - id / { userName } / { tagLine }
    //Reference: https://developer.riotgames.com/apis#account-v1/GET_getByRiotId
    async getUserByName(userName, tagLine, region) {
        try {
            //check parameters first
            parameterChecks(userName, tagLine);

            //encode name
            var user = encodeURIComponent(userName)
            //https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/aikado/awoo
            var request = ('/riot/account/v1/accounts/by-riot-id/' + user + '/' + tagLine);

            //HTTP
            var response = httpsGetRequest(request, region, this.auth_key).then((data) => {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
                return response;
            });

            return response;
        } catch (error) {
            // return full error
            throw error;
        };

    }

    //Grab list of matches recently played by user
    //LOR-MATCH - V1
    /// lor / match / v1 / matches / by - puuid / { puuid } / ids
    //Reference: https://developer.riotgames.com/apis#lor-match-v1/GET_getMatchIdsByPUUID
    async getUserMatchHistory(puuid, region) {
        try {
            //check parameters first
            if (puuid === '' || undefined) {
                throw "puuid is missing, pass a string type with a valid puuid"
            } else if (typeof puuid !== 'string' || puuid instanceof String) {
                //Not a string
                throw "puuid is not string type: puuid (string) = 'K-1NczBPzqHG1Ab...'."
            }

            //https://americas.api.riotgames.com/lor/match/v1/matches/by-puuid/K-1NczBPzqHG1Ab2BZx_Km2AV9uxo4S-l2v7Azy68P3gowMrM7fmyoehbK...9zPRw/ids
            var request = ('/lor/match/v1/matches/by-puuid/' + puuid + '/ids');

            //HTTP
            var response = httpsGetRequest(request, region, this.auth_key).then((data) => {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
                return response;
            });

            return response;
        } catch (error) {
            // return full error
            throw error;
        };
    }

    //Grab info for each match played by matchId
    //LOR-MATCH - V1
    /// lor / match / v1 / matches / { matchId }
    //Reference: https://developer.riotgames.com/apis#lor-match-v1/GET_getMatch
    async getMatchDetails(matchId, region) {
        try {
            //check parameters first
            if (matchId === '' || undefined) {
                throw "matchId is missing, pass a string type with a valid matchId"
            } else if (typeof matchId !== 'string' || matchId instanceof String) {
                //Not a string
                throw "matchId is not string type: matchId (string) = 'eb8casdo-3151-asd3-...'."
            }

            //https://americas.api.riotgames.com/lor/match/v1/matches/eb7c4936-46c4-441...
            var request = ('/lor/match/v1/matches/' + matchId);

            //HTTP
            var response = httpsGetRequest(request, region, this.auth_key).then((data) => {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
                return response;
            });

            return response;
        } catch (error) {
            // return full error
            throw error;
        };
    }

    //Grab ranked leaderboard for that region
    //LOR-RANKED - V1
    ///lor/ranked/v1/leaderboards americas/europe/sea
    //Reference: https://developer.riotgames.com/apis#lor-ranked-v1/GET_getLeaderboards
    async getLeaderboard(region) {
        try {
            //check parameters first
            if (region === '' || undefined) {
                throw "region is missing, pass a string type with a valid matchId"
            } else if (typeof region !== 'string' || region instanceof String) {
                //Not a string
                throw "region is not string type: region (string) = 'americas'."
            }

            //https://americas.api.riotgames.com/lor/ranked/v1/leaderboards
            var request = ('/lor/ranked/v1/leaderboards');

            //HTTP
            var response = httpsGetRequest(request, region, this.auth_key).then((data) => {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
                return response;
            });

            return response;
        } catch (error) {
            // return full error
            throw error;
        };
    }


    //Grab Legends of Runeterra Server Status
    //LOR-STATUS - V1
    ///lor/status/v1/platform-data
    //Reference: https://developer.riotgames.com/apis#lor-status-v1/GET_getPlatformData
    async getLorStatus(region) {
        try {
            //check parameters first
            if (region === '' || undefined) {
                throw "region is missing, pass a string type with a valid matchId"
            } else if (typeof region !== 'string' || region instanceof String) {
                //Not a string
                throw "region is not string type: region (string) = 'americas'."
            }

            //https://americas.api.riotgames.com/lor/status/v1/platform-data
            var request = ('/lor/status/v1/platform-data');

            //HTTP
            var response = httpsGetRequest(request, region, this.auth_key).then((data) => {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
                return response;
            });

            return response;
        } catch (error) {
            // return full error
            throw error;
        };
    }

}


/*======================
===PRIVATE FUNCTIONS===
=======================*/

// HTTP GET function
function httpsGetRequest(request, region, auth_key) {
    return new Promise((resolve, reject) => {
        const options = {
            host: region + '.api.riotgames.com',
            path: request,
            port: 443,
            method: 'GET',
            headers: {
                'X-Riot-Token': auth_key
            }
        };
        const req = https.request(options, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            var body = [];
            res.on('data', function (chunk) {
                body.push(chunk);
            });
            res.on('end', function () {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch (e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        req.on('error', (e) => {
            reject(e.message);
        });
        // send the request
        req.end();
    });
};

function parameterChecks(userName = null, tagLine = null) {
    //make sure neither are empty or invalid
    if (userName === '' || undefined) {
        throw "userName is missing, pass a string type with users name ('CardShark32')"
    } else if (typeof userName !== 'string' || userName instanceof String) {
        //Not a string
        throw "userName is not string type: username (string) = 'MyUserName'."
    }
    //make sure neither are empty or invalid
    if (tagLine === '' || undefined) {
        throw "tagLine is missing, pass a string type with users tag ('NA')."
    } else if (typeof tagLine !== 'string' || tagLine instanceof String) {
        //Not a string
        throw "tagLine is not string type: tagLine (string) = 'UserTagNA'."
    }
}


export default Lor;
