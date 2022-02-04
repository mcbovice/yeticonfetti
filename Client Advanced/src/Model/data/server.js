const ServerTypes = require("../../types/ServerTypes");
const ChatTypes = require('../../types/ChatTypes');

const defaultMessage = {
    message: '',
    player_name: '',
    type: ChatTypes.TYPE.BUGLE
}
const welcomeMessage = {
    message: 'Welcome to the FrostBite!! State of the art Play-To-Earn 2D Shooter!',
    player_name: '',
    type: ChatTypes.TYPE.BUGLE
}

module.exports = {
    version: 86,
    time: 0, // ?? 
    time_lapsed: 0, // ??
    servers: [
        {
            id              : 1,
            name            : "The Arctic",
            type            : ServerTypes.SERVER_NORMAL,
            port            : 9001,
            playerOnline    : 0,
            playerLimit     : 1000,
            isRestricted    : true,
            minRank         : 9,
            maxRank         : 24,
            chat            : [{...welcomeMessage}]
            
        },
        {
            id              : 2,
            name            : "Ice Bar",
            type            : ServerTypes.SERVER_NORMAL,
            port            : 9002,
            playerOnline    : 0,
            playerLimit     : 1000,
            isRestricted    : true,
            minRank         : 7,
            maxRank         : 17,
            chat            : [{...welcomeMessage}]
        },
        {
            id              : 3,
            name            : "Igloo",
            type            : ServerTypes.SERVER_NORMAL,
            port            : 9003,
            playerOnline    : 0,
            playerLimit     : 1000,
            isRestricted    : true,
            minRank         : 0,
            maxRank         : 6,
            chat            : [
                {...welcomeMessage},
                { ...defaultMessage },
                {
                    message: 'Hello all, as a reminder cheating is prohibited. Anyone caught cheating will be banned.',
                    player_name: 'Xueren',
                    type: ChatTypes.TYPE.GM
                }
            ]
        },
    ]
};
