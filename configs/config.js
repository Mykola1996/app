module.exports = {
    PORT: process.env.PORT || 5001,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/default-dataBase',

    ACCESS_SECRET_WORD: process.env.ACCESS_SECRET_WORD || 'ACCESS_WORD',
    REFRESH_SECRET_WORD: process.env.REFRESH_SECRET_WORD || 'REFRESH_WORD',
    ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME || '5m',
    REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME || '30d',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'example@email.com',
    NO_REPLY_PASSWORD: process.env.NO_REPLY_PASSWORD || 'email password',


    FRONTEND_URL: process.env.FRONTEND_URL || 'example.com',

    ACTION_TOKEN_SECRET: process.env.ACTION_TOKEN_SECRET || 'F_P_T_S',

};
