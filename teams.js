const teams = {
  "ARI": {
    "id": "1",
    "abr": "ARI",
    "city": "Arizona",
    "color1": "#97233F",
    "color2": "#000000",
    "color3": "#FFB612",
    "color4": null,
    "color5": null,
    "team": "Cardinals",
    "inserted_at": "2022-01-30T21:20:58.000Z",
    "updated_at": "2022-01-30T21:20:58.000Z"
  },
  "ATL": {
    "id": "2",
    "abr": "ATL",
    "city": "Atlanta",
    "color1": "#A71930",
    "color2": "#000000",
    "color3": "#A5ACAF",
    "color4": null,
    "color5": null,
    "team": "Falcons",
    "inserted_at": "2022-01-30T21:20:58.000Z",
    "updated_at": "2022-01-30T21:20:58.000Z"
  },
  "BAL": {
    "id": "3",
    "abr": "BAL",
    "city": "Baltimore",
    "color1": "#241773",
    "color2": "#000000",
    "color3": "#9E7C0C",
    "color4": "#C60C30",
    "color5": null,
    "team": "Ravens",
    "inserted_at": "2022-01-30T21:20:58.000Z",
    "updated_at": "2022-01-30T21:20:58.000Z"
  },
  "BUF": {
    "id": "4",
    "abr": "BUF",
    "city": "Buffalo",
    "color1": "#00338D",
    "color2": "#C60C30",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Bills",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "CAR": {
    "id": "5",
    "abr": "CAR",
    "city": "Carolina",
    "color1": "#0085CA",
    "color2": "#101820",
    "color3": "#BFC0BF",
    "color4": null,
    "color5": null,
    "team": "Panthers",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "CHI": {
    "id": "6",
    "abr": "CHI",
    "city": "Chicago",
    "color1": "#0B162A",
    "color2": "#C83803",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Bears",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "CIN": {
    "id": "7",
    "abr": "CIN",
    "city": "Cincinnati",
    "color1": "#FB4F14",
    "color2": "#000000",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Bengals",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "CLE": {
    "id": "8",
    "abr": "CLE",
    "city": "Cleveland",
    "color1": "#311D00",
    "color2": "#FF3C00",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Browns",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "DAL": {
    "id": "9",
    "abr": "DAL",
    "city": "Dallas",
    "color1": "#003594",
    "color2": "#041E42",
    "color3": "#869397",
    "color4": "#7F9695",
    "color5": "#FFFFFF",
    "team": "Cowboys",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "DEN": {
    "id": "10",
    "abr": "DEN",
    "city": "Denver",
    "color1": "#FB4F14",
    "color2": "#002244",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Broncos",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "DET": {
    "id": "11",
    "abr": "DET",
    "city": "Detroit",
    "color1": "#0076B6",
    "color2": "#B0B7BC",
    "color3": "#000000",
    "color4": "#FFFFFF",
    "color5": null,
    "team": "Lions",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "GB": {
    "id": "12",
    "abr": "GB",
    "city": "Green Bay",
    "color1": "#203731",
    "color2": "#FFB612",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Packers",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "HOU": {
    "id": "13",
    "abr": "HOU",
    "city": "Houston",
    "color1": "#03202F",
    "color2": "#A71930",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Texans",
    "inserted_at": "2022-01-30T21:20:59.000Z",
    "updated_at": "2022-01-30T21:20:59.000Z"
  },
  "IND": {
    "id": "14",
    "abr": "IND",
    "city": "Indianapolis",
    "color1": "#002C5F",
    "color2": "#A2AAAD",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Colts",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "JAX": {
    "id": "15",
    "abr": "JAX",
    "city": "Jacksonville",
    "color1": "#101820",
    "color2": "#D7A22A",
    "color3": "#9F792C",
    "color4": "#006778",
    "color5": null,
    "team": "Jaguars",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "KC": {
    "id": "16",
    "abr": "KC",
    "city": "Kansas City",
    "color1": "#E31837",
    "color2": "#FFB81C",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Chiefs",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "LAC": {
    "id": "17",
    "abr": "LAC",
    "city": "Los Angeles",
    "color1": "#0080C6",
    "color2": "#FFC20E",
    "color3": "#FFFFFF",
    "color4": null,
    "color5": null,
    "team": "Chargers",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "LAR": {
    "id": "18",
    "abr": "LAR",
    "city": "Los Angeles",
    "color1": "#003594",
    "color2": "#FFA300",
    "color3": "#FF8200",
    "color4": "#FFD100",
    "color5": "#FFFFFF",
    "team": "Rams",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "LV": {
    "id": "19",
    "abr": "LV",
    "city": "Las Vegas",
    "color1": "#000000",
    "color2": "#A5ACAF",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Raiders",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "MIA": {
    "id": "20",
    "abr": "MIA",
    "city": "Miami",
    "color1": "#008E97",
    "color2": "#FC4C02",
    "color3": "#005778",
    "color4": null,
    "color5": null,
    "team": "Dolphins",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "MIN": {
    "id": "21",
    "abr": "MIN",
    "city": "Minnesota",
    "color1": "#4F2683",
    "color2": "#FFC62F",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Vikings",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "NE": {
    "id": "22",
    "abr": "NE",
    "city": "New England",
    "color1": "#002244",
    "color2": "#C60C30",
    "color3": "#B0B7BC",
    "color4": null,
    "color5": null,
    "team": "Patriots",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "NO": {
    "id": "23",
    "abr": "NO",
    "city": "New Orleans",
    "color1": "#D3BC8D",
    "color2": "#101820",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Saints",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "NYG": {
    "id": "24",
    "abr": "NYG",
    "city": "New York",
    "color1": "#0B2265",
    "color2": "#A71930",
    "color3": "#A5ACAF",
    "color4": null,
    "color5": null,
    "team": "Giants",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "NYJ": {
    "id": "25",
    "abr": "NYJ",
    "city": "New York",
    "color1": "#125740",
    "color2": "#000000",
    "color3": "#FFFFFF",
    "color4": null,
    "color5": null,
    "team": "Jets",
    "inserted_at": "2022-01-30T21:21:00.000Z",
    "updated_at": "2022-01-30T21:21:00.000Z"
  },
  "PHI": {
    "id": "26",
    "abr": "PHI",
    "city": "hiladelphia",
    "color1": "#004C54",
    "color2": "#A5ACAF",
    "color3": "#ACC0C6",
    "color4": "#000000",
    "color5": "#565A5C",
    "team": "Eagles",
    "inserted_at": "2022-01-30T21:21:01.000Z",
    "updated_at": "2022-01-30T21:21:01.000Z"
  },
  "PIT": {
    "id": "27",
    "abr": "PIT",
    "city": "Pittsburgh",
    "color1": "#FFB612",
    "color2": "#101820",
    "color3": "#003087",
    "color4": "#C60C30",
    "color5": "#A5ACAF",
    "team": "Steelers",
    "inserted_at": "2022-01-30T21:21:01.000Z",
    "updated_at": "2022-01-30T21:21:01.000Z"
  },
  "SEA": {
    "id": "28",
    "abr": "SEA",
    "city": "Seattle",
    "color1": "#002244",
    "color2": "#69BE28",
    "color3": "#A5ACAF",
    "color4": null,
    "color5": null,
    "team": "Seahawks",
    "inserted_at": "2022-01-30T21:21:01.000Z",
    "updated_at": "2022-01-30T21:21:01.000Z"
  },
  "SF": {
    "id": "29",
    "abr": "SF",
    "city": "San Francisco ",
    "color1": "#AA0000",
    "color2": "#B3995D",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "49ers",
    "inserted_at": "2022-01-30T21:21:01.000Z",
    "updated_at": "2022-01-30T21:21:01.000Z"
  },
  "TB": {
    "id": "30",
    "abr": "TB",
    "city": "Tampa Bay",
    "color1": "#D50A0A",
    "color2": "#FF7900",
    "color3": "#FF7900",
    "color4": "#B1BABF",
    "color5": "#34302B",
    "team": "Buccaneers",
    "inserted_at": "2022-01-30T21:21:01.000Z",
    "updated_at": "2022-01-30T21:21:01.000Z"
  },
  "TEN": {
    "id": "31",
    "abr": "TEN",
    "city": "Tennessee",
    "color1": "#0C2340",
    "color2": "#4B92DB",
    "color3": "#C8102E",
    "color4": "#8A8D8F",
    "color5": null,
    "team": "Titans",
    "inserted_at": "2022-01-30T21:21:01.000Z",
    "updated_at": "2022-01-30T21:21:01.000Z"
  },
  "WAS": {
    "id": "32",
    "abr": "WAS",
    "city": "Washington",
    "color1": "#5A1414",
    "color2": "#FFB612",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "Football Team",
    "inserted_at": "2022-01-30T21:21:01.000Z",
    "updated_at": "2022-01-30T21:21:01.000Z"
  },
  "na": {
    "id": "34",
    "abr": "na",
    "city": "na",
    "color1": "#990F00",
    "color2": "#FFFFFF",
    "color3": null,
    "color4": null,
    "color5": null,
    "team": "na",
    "inserted_at": "2022-02-12T19:09:30.000Z",
    "updated_at": "2022-02-12T19:09:30.000Z"
  }
}
