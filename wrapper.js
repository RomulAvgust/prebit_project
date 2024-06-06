function manualRender() {
  var adUnitCode1 = "/19968336/header-bid-tag-0";
  var auctionResult1 = pbjs.getAdserverTargetingForAdUnitCode(adUnitCode1);

  if (auctionResult1 && auctionResult1["hb_adid"]) {
    pbjs.renderAd(document, auctionResult1["hb_adid"]);
  } else {
    console.log("No ad available for div-1");
  }

  var adUnitCode2 = "/19968336/header-bid-tag-1";
  var auctionResult2 = pbjs.getAdserverTargetingForAdUnitCode(adUnitCode2);

  if (auctionResult2 && auctionResult2["hb_adid"]) {
    pbjs.renderAd(document, auctionResult2["hb_adid"]);
  } else {
    console.log("No ad available for div-2");
  }
}
