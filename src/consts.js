const BigNumber = require('bignumber.js');
const BigInteger = require('big-integer');

module.exports = {

    BLOCKCHAIN:{

        DIFFICULTY:{
            NO_BLOCKS : 10,
            TIME_PER_BLOCK : 40, //in s, timestamp in UNIX format
        },

        TIMESTAMP:{
            VALIDATION_NO_BLOCKS: 10,

            NETWORK_ADJUSTED_TIME_MAXIMUM_BLOCK_OFFSET_AFTER_POS: 30,

            NETWORK_ADJUSTED_TIME_MAXIMUM_BLOCK_OFFSET: 10*60,
            NETWORK_ADJUSTED_TIME_NODE_MAX_UTC_DIFFERENCE: 30,
        },

        POS: {
            MINIMUM_AMOUNT: 100,
            MINIMUM_POS_TRANSFERS: 30,
        },

        BLOCKS_POW_LENGTH: 32,
        BLOCKS_MAX_TARGET: new BigNumber("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
        BLOCKS_MAX_TARGET_BIG_INTEGER: new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16),
        BLOCKS_MAX_TARGET_BUFFER: Buffer.from("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "hex"),
        BLOCKS_NONCE : 4,

        FORKS:{

            //forks larger than this will not be accepted
            IMMUTABILITY_LENGTH: 60,

        },

        HARD_FORKS : {

            WALLET_RECOVERY: 153060,

            TRANSACTIONS_BUG_2_BYTES: 46950,
            TRANSACTIONS_OPTIMIZATION: 153065,

            DIFFICULTY_TIME_BIGGER: 153060,
            DIFFICULTY_REMOVED_CONDITION: 161990,

            TRANSACTIONS_INCLUDING_ONLY_HEADER: 567698, // SAME AS POS
            POS_ACTIVATION: 567810,

            POS90_ACTIVATION: 1500000, //it needs to be % 30 === 0, better it should be % 100 = 0 && % 30 === 0

        }

    },


}