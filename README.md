
# lor-api-wrapper

Node.js Riot Legends of Runeterra API Wrapper



## Features

- HTTPS REST API 
- Easy access to API responses
- Supports all LoR API endpoints
- No additional dependences required


## Installation

Install lifx-api-wrapper with npm:

```bash
  npm install lor-api-wrapper
```

To run this project, you will need a RIOT API key.
Get your key here: https://developer.riotgames.com/


## Usage

#### Getting started

```javascript
import Lor from "lor-api-wrapper.js";

//create instance with our Riot API Token
var lor = new Lor(lorKey);

//Now lor will always use your key
```

#### Specify what region to pull from

There are three regions available to pull data from:
- Americas
- Europe
- SEA

Specify the region you want to pull from when calling your request.
```javascript
//GET USER PUUID BY NAME AND TAG
var puuid = await lor.getUserByName('Otzo', 'Otzo', 'Americas')
```

## API Reference
The wrapper is designed to use selectors that match RIOT API documentation to simply use.

For more information visit [api.riotgames.com](https://developer.riotgames.com/apis#).



### `lor.getUserByPuuid(puuid, region)`

| Parameter | Type     | Example | Description              |
| :-------- | :------- |:------- |:------------------------ |
| `puuid` | `string` | 'K-1NczBPzqHG1Ab...' | **Required**   |
| `region` | `string` | 'Americas' | **Required**            |


### `lor.getUserByName(userName, tagLine, region)`

| Parameter | Type     | Example | Description              |
| :-------- | :------- |:------- |:------------------------ |
| `userName` | `string` | 'Otzo' | **Required**   |
| `tagLine` | `string` | 'NA' | **Required**   |
| `region` | `string` | 'Americas' | **Required**            |

Note: This returns the same information as lor.getUserByPuuid(). The main difference is how you reference the user. Most likely you'll use their userName and tagLine in order to get their puuid for later use.

Example response:
```js
{puuid: 'HfYckhbhJnSBzZZmcIvAJHy4Zpg9rEBeuom5gAIe60boHI7Vtb6D7pFqjIfpMdafWKEhZ0oFNUZCzA', 
gameName: 'Otzo', 
tagLine: 'NA'}
```

### `lor.getUserMatchHistory(puuid, region)`

Returns matchId's for the last 20 games played by selected user.

| Parameter | Type     | Example | Description              |
| :-------- | :------- |:------- |:------------------------ |
| `puuid` | `string` | 'K-1NczBPzqHG1Ab...' | **Required**   |
| `region` | `string` | 'Americas' | **Required**            |


Example response:
```js
[
'bcdb95bc-beab-4e59-907d-2eff75aabd98', 
...
'7f10f485-3217-4a3b-bf22-4f63e19fb689', 
'cf36602d-215c-4a00-b0db-309f16695fed', 
'312174dd-2a52-4979-ae04-31aeed0ad7e4'
]
```
 ### `lor.getMatchDetails(matchId, region)`

 Returns match info, including: players, who won, decks played, and more.

| Parameter | Type     | Example | Description              |
| :-------- | :------- |:------- |:------------------------ |
| `matchId` | `string` | 'bcdb95bc-beab-4...' | **Required**   |
| `region` | `string` | 'Americas' | **Required**            |


 ### `lor.getLeaderboard(region)`

 Returns top players in that region, including: puuid, userName, and tagLine.

| Parameter | Type     | Example | Description              |
| :-------- | :------- |:------- |:------------------------ |
| `region` | `string` | 'Americas' | **Required**            |

 ### `lor.getLorStatus(region)`

 Returns current server status for that region.

| Parameter | Type     | Example | Description              |
| :-------- | :------- |:------- |:------------------------ |
| `region` | `string` | 'Americas' | **Required**            |






## Examples

#### Grab list of top players in the Americas

```javascript
var leaderboard = await lor.getLeaderboard('Americas')
    .then((data) => {
        var json = JSON.parse(data.body)

        return json
    }) //catch errors
    .catch((err) => console.log(err));

// do stuff with data
console.log(leaderboard['players'])
```

#### Find user's PUUID by userName and tagLine

```javascript
var puuid = await lor.getUserByName('Otzo', 'Otzo', 'Americas')
    .then((data) => {
        var json = JSON.parse(data.body)

        return json.puuid
    }) //catch errors
    .catch((err) => console.log(err));

//do stuff with data
console.log(puuid);

```

#### Grab list of most recently played games by user PUUID

```javascript
var matches = await lor.getUserMatchHistory(puuid, 'Americas')
    .then((data) => {
        var json = JSON.parse(data.body)

        return json
    }) //catch errors
    .catch((err) => console.log(err));

//do stuff with data
console.log(matches);
```




## Feedback


I wrote this wrapper to use in my personal project.
My goal was to not only to reduce outside dependencies in my own projects, but also make the API easier to use.

Writing this wrapper introduced me to javascript prototypes, classes, publishing NPM packages, and exporting/importing ES modules. 

Any and all feedback is appreciated.

### 🔗 Links
[![telegram](https://img.shields.io/badge/Telegram-%40OtzoLive-blue?style=flat-square&logo=telegram)](https://t.me/OtzoLive/) 
[![twitter](https://img.shields.io/badge/Twitter-%40OtzoLive-blue?style=flat-square&logo=twitter)](https://twitter.com/OtzoLive/)
[![wakatime](https://wakatime.com/badge/user/7a991802-ef44-4138-9f49-6e4ab5ccfd96/project/41eb493d-4511-4d10-b85b-3389d8983a58.svg?style=flat-square)](https://wakatime.com/badge/user/7a991802-ef44-4138-9f49-6e4ab5ccfd96/project/41eb493d-4511-4d10-b85b-3389d8983a58)