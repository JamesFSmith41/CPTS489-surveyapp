var SHA256 = require("crypto-js/sha256");

export async function hashSHA256(message)
{
    let hash = SHA256(message);
    return hash
}
