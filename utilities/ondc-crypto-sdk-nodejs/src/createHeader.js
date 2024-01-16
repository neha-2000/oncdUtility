// import React from 'react';
// import  {createAuthorizationHeader,createSigningString,isSignatureValid,signMessage} from './utility/index'

// const createHeader = () => {
//     async function main() {
//             try {
//               const header = await createAuthorizationHead({
//                 body: { context: newContextBody, message: exportmessageheadervalid },
//                 privateKey: privateKey,
//                 subscriberId: "staging.smann.in",
//                 subscriberUniqueKeyId: "3dfa7108-a09e-4054-84a2-77c0361a9c9d",
//               });
          
//               console.log("header-->",header);
//             } catch (error) {
//               console.error("Error:", error);
//             }
//           }

//   return (
//     <div>createHeader</div>
//   )
// }

// export default createHeader
const { createAuthorizationHeader,createSigningString,isSignatureValid,signMessage } = require("./utility/index.ts");
const { exportmessage, newContextBody, exportmessageheadervalid, privateKey } = require("./context");

async function main() {
    try {
      const header = await createAuthorizationHeader({
        body: { context: newContextBody, message: exportmessageheadervalid },
        privateKey: privateKey,
        subscriberId: "staging.smann.in",
        subscriberUniqueKeyId: "3dfa7108-a09e-4054-84a2-77c0361a9c9d",
      });
  
      console.log("header-->",header);
    } catch (error) {
      console.error("Error:", error);
    }
  }


  main();


