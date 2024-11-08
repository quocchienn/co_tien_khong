let obj = JSON.parse($response.body);

if (obj && obj.status) {
    obj.status = 0;
    obj.environment = "Production";
}

$done({ body: JSON.stringify(obj) });
