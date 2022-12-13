const { TermiiClient } =require('./dist');

const client = new TermiiClient({
    apiKey:'TLGqdMWDP6bRNuaMkFsr5r3ikNOvh2XqPgFt8WHDyjVGKO6oIbMmpUdRaCql84'
});
const otpClient = new client.TermiiOTP();
const smsClient=new client.TermiiSMS()
const gen = async () => {
    try {
        
        
        //const res = await otpClient.generate({
          //pin_type:"ALPHANUMERIC",phone_number:"2349153227072"  
        //});
        //console.log(JSON.stringify({ res }));
        const sm = await smsClient.send({
            to: "2349153227072", from:"LuckyJ Auto",sms:"Hello there",channel:"generic" 
        });
        console.log({ sm });
    }
    catch (err) {
        console.log(JSON.stringify({err}));
    }
    
}
gen()