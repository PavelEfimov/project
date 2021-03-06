import express from 'express';
import payload from 'request-payload';
import { getUserByToken } from '../database';
import cryptoJS from 'crypto-js';

const router = express.Router();

router.post('/', (req, res) => {
    payload(req,  body => {
        const { token } = body;
            getUserByToken(body)
            .then( result => {
                if(result.length !== 0) { 
                    const { login, password } = result[0];
                    const decrypted = cryptoJS.AES.decrypt(password, login).toString(cryptoJS.enc.Utf8);
                    res.send({ login, decrypted });
                }
            })
            .catch(err => console.error(err)); 
    });
});

export default router;