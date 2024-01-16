import { exportmessageheadervalid, newContextBody, privateKey } from "./content";
import {
    createAuthorizationHeader,
    createSigningString,
    isSignatureValid,
    signMessage,
  } from "./utility/index";
  
    
  
 const main= () =>  {
    try {
      const header =  createAuthorizationHeader({
        body: { 
            context: newContextBody, message: exportmessageheadervalid
         },
        privateKey: privateKey,
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
  