# Task 3: Creating Blockchain-->  mining new block, and display the whole blockchain:

The data will be stored in DB and retrieve using REST APIs. The data is stored in a block and the block contains multiple data. Each and every minute multiple blocks are added and to differentiate one from another we will use fingerprinting.
The fingerprinting is done by using hash and to be particular we will use a standard algorithm. Every block will contain its own hash and also the hash of the previous function so that it cannot get tampered.
This fingerprinting will be used to chain the blocks together. Every block will be attached to the previous block having its hash and to the next block by giving its hash.
The mining of the new block is done by successfully finding the answer to the proof of work. To make mining hard the proof of work must be hard enough to get exploited.
After mining the block successfully the block will then be added to the chain.
After mining several blocks the validity of the chain must be checked in order to prevent any kind of tampering with the blockchain.

Example Output:

```
(mine_block):
{
"index":2,
"message":"A block is MINED",
"previous_hash":"2d83a826f87415edb31b7e12b35949b9dbf702aee7e383cbab119456847b957c",
"proof":533,
"timestamp":"2020-06-01 22:47:59.309000"
}
```

```
(get_chain):
{
"chain":[{"index":1,
"previous_hash":"0",
"proof":1,
"timestamp":"2020-06-01 22:47:05.915000"},{"index":2,
"previous_hash":"2d83a826f87415edb31b7e12b35949b9dbf702aee7e383cbab119456847b957c",
"proof":533,
"timestamp":"2020-06-01 22:47:59.309000"}],
"length":2
}
```

```
(valid):
{"message":"The Blockchain is valid."}
```
## Result
### Get Chain data
```
curl --location --request GET 'http://localhost:4100/api/v1/chain/get-chain'
```
```
{
    "data": {
        "chain": [
            {
                "index": 0,
                "previousHash": "0",
                "timestamp": 1644537600000,
                "transactions": "Initial Block in the Chain",
                "proof": 0,
                "hash": "0b3ce6dec5a0be4c1c49b63decc7fb3abd52a3e2a30a9109d3e000535b4a61c7"
            }
        ],
        "difficulty": 3
    },
    "processingTimeMillis": 0,
    "message": "All Chain Data",
    "statusCode": 200,
    "success": true
}
```
### Validate Chain 
```
curl --location --request GET 'http://localhost:4100/api/v1/chain/validate-chain'
```
```
{
    "data": true,
    "processingTimeMillis": 0,
    "message": "The Blockchain is valid.",
    "statusCode": 200,
    "success": true
}
```
### Mine Block
```
curl --location --request POST 'http://localhost:4100/api/v1/chain/mine-block' \
--header 'Content-Type: application/json' \
--data-raw '{
    "to": "0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f",
    "from": "0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14",
    "amount": 4
}'
```
```
{
    "data": {
        "index": 1,
        "previousHash": "0b3ce6dec5a0be4c1c49b63decc7fb3abd52a3e2a30a9109d3e000535b4a61c7",
        "timestamp": 1644600014943,
        "transactions": {
            "to": "0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f",
            "from": "0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14",
            "amount": 4
        },
        "proof": 2591,
        "hash": "000dd6021748cbc1681d06c0e50f772564f73f180e1ea0dbcc0d8b689241d9a9"
    },
    "processingTimeMillis": 23,
    "message": "A block is MINED",
    "statusCode": 200,
    "success": true
}
```
### After mining chain 
```
curl --location --request GET 'http://localhost:4100/api/v1/chain/get-chain'
```
```
{
    "data": {
        "chain": [
            {
                "index": 0,
                "previousHash": "0",
                "timestamp": 1644537600000,
                "transactions": "Initial Block in the Chain",
                "proof": 0,
                "hash": "0b3ce6dec5a0be4c1c49b63decc7fb3abd52a3e2a30a9109d3e000535b4a61c7"
            },
            {
                "index": 1,
                "previousHash": "0b3ce6dec5a0be4c1c49b63decc7fb3abd52a3e2a30a9109d3e000535b4a61c7",
                "timestamp": 1644600014943,
                "transactions": {
                    "to": "0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f",
                    "from": "0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14",
                    "amount": 4
                },
                "proof": 2591,
                "hash": "000dd6021748cbc1681d06c0e50f772564f73f180e1ea0dbcc0d8b689241d9a9"
            }
        ],
        "difficulty": 3
    },
    "processingTimeMillis": 0,
    "message": "All Chain Data",
    "statusCode": 200,
    "success": true
}
```
