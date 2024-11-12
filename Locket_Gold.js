// Locket Gold Unlock Script
// Bản quyền thuộc về Quốc Chiến ❤️‍🩹
// Nếu bạn bán hoặc chia sẻ mà không ghi nguồn thì bạn là chó.

const response = JSON.parse($response.body);

// Mở khóa tính năng Gold
if (response.subscriber) {
    response.subscriber.entitlements = {
        "premium": {
            "expires_date": "2099-12-31T23:59:59Z",
            "product_identifier": "locket_gold_vip",
            "purchase_date": "2024-11-12T00:00:00Z"
        }
    };
    response.subscriber.original_purchase_date = "2024-11-12T00:00:00Z";
    response.subscriber.management_url = null;
}

// Trả về kết quả đã chỉnh sửa
$done({ body: JSON.stringify(response) });