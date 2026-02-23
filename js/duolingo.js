let obj = JSON.parse($response.body);
if(obj.users && obj.users.length > 0) {
  obj.users[0].hasPlus = true;
  obj.users[0].isSuperDuolingo = true;
  obj.users[0].superTrialAvailable = false;
  obj.users[0].plusStatus = "SUPER";
  obj.users[0].premiumFeatures = ["SUPER_DUOLINGO"];
  obj.users[0].healthEnabled = false;
  obj.users[0].superFreeTrialEligible = false;
  obj.users[0].superEligible = false;
}
$done({body: JSON.stringify(obj)});
