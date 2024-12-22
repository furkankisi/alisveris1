// Ürünler listesi
const products = [
    { name: "Ürün A", price: 10, stock: 100 },
    { name: "Ürün B", price: 20, stock: 50 },
    { name: "Ürün C", price: 30, stock: 30 }
];

let cart = [];
let balance = 0;

// Ürünleri listeleme
function listProducts() {
    let productList = "Ürün Listesi:\n";
    products.forEach((product, index) => {
        productList += `${index + 1}. ${product.name} - Fiyat: ${product.price} TL, Stok: ${product.stock}\n`;
    });
    alert(productList);
}

// Sepeti gösterme
function showCart() {
    if (cart.length === 0) {
        alert("Sepetiniz boş.");
    } else {
        let cartList = "Sepetiniz:\n";
        cart.forEach(item => {
            cartList += `${item.name} - Fiyat: ${item.price} TL, Miktar: ${item.quantity}\n`;
        });
        alert(cartList);
    }
}

// Bakiye ekleme
function addBalance() {
    const amount = parseFloat(prompt("Eklemek istediğiniz bakiye:"));
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        alert(`Bakiyeniz güncellendi: ${balance} TL`);
    } else {
        alert("Geçersiz bakiye.");
    }
}

// Ürün satın alma
function purchaseProduct() {
    const productIndex = parseInt(prompt("Satın almak istediğiniz ürün numarasını girin:")) - 1;
    const quantity = parseInt(prompt("Kaç adet almak istiyorsunuz?"));

    if (productIndex >= 0 && productIndex < products.length && quantity > 0) {
        const product = products[productIndex];
        const totalCost = product.price * quantity;

        if (quantity > product.stock) {
            alert("Yeterli stok yok.");
        } else if (totalCost > balance) {
            alert("Bakiyeniz yetersiz.");
        } else {
            product.stock -= quantity;
            balance -= totalCost;
            cart.push({ name: product.name, price: product.price, quantity });
            alert(`${quantity} adet ${product.name} satın alındı.`);
        }
    } else {
        alert("Geçersiz ürün veya miktar.");
    }
}

// Ana Menü
function mainMenu() {
    let running = true;

    while (running) {
        const choice = prompt(
            "Ana Menü:\n1. Ürünleri listele\n2. Sepeti göster\n3. Ürün satın al\n4. Bakiye ekle\n5. Çıkış yap\nBir seçenek seçin:"
        );

        switch (choice) {
            case "1":
                listProducts();
                break;
            case "2":
                showCart();
                break;
            case "3":
                purchaseProduct();
                break;
            case "4":
                addBalance();
                break;
            case "5":
                alert("Çıkış yapılıyor...");
                running = false;
                break;
            default:
                alert("Geçersiz seçenek.");
        }
    }
}

mainMenu();
