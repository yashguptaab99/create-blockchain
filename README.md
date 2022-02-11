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
