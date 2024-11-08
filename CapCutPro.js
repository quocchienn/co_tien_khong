// CapCutPro.js
let obj = JSON.parse($response.body);

if (obj && obj.data) {
    obj.data.isPro = true;
    obj.data.expireTime = "2099-12-31T23:59:59Z";
    obj.data.subscriptionStatus = "active";
}

$done({ body: JSON.stringify(obj) });