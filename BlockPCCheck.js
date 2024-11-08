let obj = JSON.parse($response.body);

if (obj && obj.device) {
    obj.device.isPC = false;
    obj.device.checkPassed = true;
}

$done({ body: JSON.stringify(obj) });