let obj = JSON.parse($response.body);

if (obj && obj.data) {
    obj.data.isPremium = true;
    obj.data.premiumExpireTime = "2099-12-31T23:59:59Z";
    obj.data.featuresUnlocked = true;
}

$done({ body: JSON.stringify(obj) });