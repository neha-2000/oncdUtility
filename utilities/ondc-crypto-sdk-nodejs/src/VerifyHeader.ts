import { exportmessageheadervalid, newContextBody, publicKey2 } from "./content";
import {
    createAuthorizationHeader,
    createSigningString,
    isSignatureValid,
    signMessage,
  } from "./utility/index";
  
    
//  const main= () =>  {
//     try {
//       const header =  isSignatureValid({
//         header:'Signature keyId="staging.smann.in|3dfa7108-a09e-4054-84a2-77c0361a9c9d|ed25519",algorithm="ed25519",created="1705389927",expires="1705393527",headers="(created) (expires) digest",signature="/tFKMM1pqcxW2ILl9VuJlY0dC/e+qaGrN11S13HyixKy8Q6psp2uoNme0XhPTe1fkDNifE7LCNVXZMjE7rhIAQ=="',
//         body: { 
//             context: newContextBody, message: exportmessageheadervalid
//          },
//          publicKey: publicKey2,

//       })
//       .then((response)=>{
//         console.log("response isSignatureValid",response)
//       })
//       .catch((error)=>{
//         console.log(error)
//       })
  
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

  const main= () =>  {
    try {
      const header =  createAuthorizationHeader({
        body: { 
            context: newContextBody, message: exportmessageheadervalid
         },
        privateKey: publicKey2,
        subscriberId: "staging.smann.in",
        subscriberUniqueKeyId: "3dfa7108-a09e-4054-84a2-77c0361a9c9d",
        bapId:"ref-app-buyer-staging-v2.ondc.org",
        bapUniqueKeyId:"3b7ff621-0f32-46b6-8b51-df1f36602d6b",
      })
      .then((response)=>{
        console.log("response",response)
      })
      .catch((error)=>{
        console.log(error)
      })
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  main();
  