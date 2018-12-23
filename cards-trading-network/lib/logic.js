import { emit } from "cluster";

/**
 * Buy card transaction
 * @param {org.acme.tradenet} trade
 * @transaction
 */

 async function {
     if(trade.card.forTrade){
         trade.card.owner = trade.newOwner;
         return getAssetRegistry("org.acme.tradenet")
            .then(assetRegistry ==> {
                return assetRegistry.update(trade.card);
            })
            .then(()=>{
                let event = getFactory.newEvent(
                    "org.acme.tradenet"
                    "TradeNotification"
                );
                event.card = trade.card;
                emit(event);
            })
     }
 }