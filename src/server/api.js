// This file is just a "Fack API" to help developer our fron end


const loadedData = require('./data.json');

export const getCards = () => {

  return loadedData.cards;

};


export const getCurrentUserId = () => {
  return 'nance_01_hfkf';
};


export const getCardById = (id) => {

  let selectedCard = loadedData.cards.find( card => {
    return card.id === id
  });

//  let userName = loadedData.usersById[selectedCard.ownerId].userName;
//  selectedCard.userName = userName;

  return selectedCard;
};

export const getCommentsByCardId = (id) => {

  let selectedCard = loadedData.cards.find( card => {
    return card.id === id
  });

  let commentsById = selectedCard.commentsId.map( commentId => {
      return loadedData.commentsById[commentId];

    });
  //});

  //console.log('commentsById', commentsById)

//  let userName = loadedData.usersById[selectedCard.ownerId].userName;
//  selectedCard.userName = userName;

  return commentsById;
};


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
