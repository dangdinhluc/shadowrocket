// ========= Swiftgram Premium + Delete Header ========= //
// Handles both http-request (delete ETag) and http-response (fake VIP)
if (typeof $response !== 'undefined') {
  // === HTTP-RESPONSE: Fake Swiftgram Premium === //
  var obj = JSON.parse($response.body);
  
  var premiumData = {
      auto_resume_date: null,
      display_name: "Swiftgram Premium",
      is_sandbox: false,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      management_url: "https://apps.apple.com/account/subscriptions",
      period_type: "normal",
      price: {
          "amount": 499000.0,
          "currency": "VND"
      },
      expires_date: "9999-01-09T10:10:14Z",
      grace_period_expires_date: null,
      refunded_at: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2023-01-01T10:10:15Z",
      purchase_date: "2023-01-01T10:10:14Z",
      store: "app_store",
      store_transaction_id: "2000001108724194",
  };
  
  var premiumEntitlement = {
      grace_period_expires_date: null,
      purchase_date: "2023-01-01T10:10:14Z",
      product_identifier: "swiftgram_premium_lifetime",
      expires_date: "9999-01-09T10:10:14Z"
  };

  // Swiftgram specific entitlement name is usually "premium" or "pro"
  obj.subscriber.subscriptions["swiftgram_premium_lifetime"] = premiumData;
  obj.subscriber.entitlements["premium"] = premiumEntitlement;
  obj.subscriber.entitlements["pro"] = premiumEntitlement;
  obj.subscriber.entitlements["vip"] = premiumEntitlement;
  
  $done({
    body: JSON.stringify(obj)
  });
} else {
  // === HTTP-REQUEST: Delete ETag Header === //
  var headers = $request.headers;
  var key = "X-RevenueCat-ETag";
  var lower = key.toLowerCase();
  if (lower in headers) headers[lower] = "";
  else headers[key] = "";
  $done({ headers: headers });
}
