
const loadedData = require('./data.json');

const getCards = () => {

  const card = loadedData.cards.map( card => {
    let userName = loadedData.usersById[card.ownerId].userName;
    card.userName = userName;
    return card;
  });

  return card;

}


export default getCards;
/*
export const data = `[
  "cards": [
    {
      "timeStamp" :{
        "ownerId": 'fej383fnk_01',
        "body": "sdbjk ndklnlkre kldsnlkre rgerk gnrlkerjre",
        "moodType": "SUN",
        "numberOfSupport": 7,
        "commentEnabled": "true",
        "numberOfComments": 4,
        "commentsTimeStamp": [
          "timeStamp_3",
          "timeStamp_2",
          "timeStamp_1",
          "timeStamp_0",
        ],
      },
    }
  ],
]`;


*/
/*




// Cards by timeStamp
"timeStamp" :{
  ownerId: 'fej383fnk',
  body: "sdbjk ndklnlkre kldsnlkre rgerk gnrlkerjre",
  moodType: 'SUN',
  numberOfSupport: 5,
  commentEnabled: true,
  numberOfComments: 10,
  commentsId: [
    'timeStamp_4',
    'timeStamp_3',
    'timeStamp_2',
    'timeStamp_1',
    'timeStamp_0',
  ],
}

// Messages by timeStamp
"timeStamp" :{
  ownerId: 'fej383fnk',
  body: "sdbjk ndklnlkre kldsnlkre rgerk gnrlkerjre",
}

// usersById
{
  'dnwedk45599': {
    userName: 'John',
    fullName: 'John Doe',
    email: 'john@example.com',
    createdAt: '9th Feb 2015',
    lastLogin: 'timeStamp',
  }
}

*/
