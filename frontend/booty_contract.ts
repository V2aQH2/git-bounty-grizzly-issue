export type BootyContract = {
  "version": "0.1.0",
  "name": "booty_contract",
  "instructions": [
    {
      "name": "startIssue",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bounty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "StartIssueParams"
          }
        }
      ]
    },
    {
      "name": "payountBooty",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sheriff",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bounty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PayoutBootyParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bounty",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sheriff",
            "type": "publicKey"
          },
          {
            "name": "timeCreated",
            "type": "u32"
          },
          {
            "name": "validUntil",
            "type": "u32"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "PayoutBootyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "branchName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "StartIssueParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bountyPrice",
            "type": "u64"
          },
          {
            "name": "validUntil",
            "type": "u32"
          },
          {
            "name": "branchName",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotEnoughFunds",
      "msg": "Sorry, you do not have enough funds to create this bounty!"
    },
    {
      "code": 6001,
      "name": "InvalidPayer",
      "msg": "Sorry, you do not have the correct permmissions to payout this bounty!"
    },
    {
      "code": 6002,
      "name": "BountyNotGreaterThanZero",
      "msg": "Please make sure your bounty reward is greater than 0"
    },
    {
      "code": 6003,
      "name": "ExpiraryError",
      "msg": "Please wait for the withdraw period to end"
    },
    {
      "code": 6004,
      "name": "BountyClaimedError",
      "msg": "Sorry, this bounty has already been claimed"
    }
  ]
};

export const IDL: BootyContract = {
  "version": "0.1.0",
  "name": "booty_contract",
  "instructions": [
    {
      "name": "startIssue",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bounty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "StartIssueParams"
          }
        }
      ]
    },
    {
      "name": "payountBooty",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sheriff",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bounty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PayoutBootyParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bounty",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sheriff",
            "type": "publicKey"
          },
          {
            "name": "timeCreated",
            "type": "u32"
          },
          {
            "name": "validUntil",
            "type": "u32"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "isClaimed",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "PayoutBootyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "branchName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "StartIssueParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bountyPrice",
            "type": "u64"
          },
          {
            "name": "validUntil",
            "type": "u32"
          },
          {
            "name": "branchName",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotEnoughFunds",
      "msg": "Sorry, you do not have enough funds to create this bounty!"
    },
    {
      "code": 6001,
      "name": "InvalidPayer",
      "msg": "Sorry, you do not have the correct permmissions to payout this bounty!"
    },
    {
      "code": 6002,
      "name": "BountyNotGreaterThanZero",
      "msg": "Please make sure your bounty reward is greater than 0"
    },
    {
      "code": 6003,
      "name": "ExpiraryError",
      "msg": "Please wait for the withdraw period to end"
    },
    {
      "code": 6004,
      "name": "BountyClaimedError",
      "msg": "Sorry, this bounty has already been claimed"
    }
  ]
};
