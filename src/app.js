const products = [
  {
    code: "051",
    name: "Kem dưỡng da Aloe Propolis Crème",
    sellPrice: "528.599",
    ccPoint: 0.092,
    salePrice: "406.615",
  },
  {
    code: "062",
    name: "Kem dưỡng da Aloe Lotion",
    sellPrice: "384.958",
    ccPoint: 0.067,
    salePrice: "296.121",
  },
  {
    code: "063",
    name: "Kem làm ẩm da Aloe Moisturizing Lotion",
    sellPrice: "384.958",
    ccPoint: 0.067,
    salePrice: "296.121",
  },
  {
    code: "069",
    name: "Kem dưỡng da R3 Factor",
    sellPrice: "942.284",
    ccPoint: 0.164,
    salePrice: "724.834",
  },
  {
    code: "187",
    name: "Dầu dưỡng da Forever Alpha E-Factor",
    sellPrice: "746.933",
    ccPoint: 0.13,
    salePrice: "574.563",
  },
  {
    code: "205",
    name: "Gel dưỡng da Aloe MSM Gel",
    sellPrice: "528.899",
    ccPoint: 0.092,
    salePrice: "406.615",
  },
  {
    code: "238",
    name: "Sữa rửa mặt Forever Aloe Scrub",
    sellPrice: "528.599",
    ccPoint: 0.092,
    salePrice: "406.615",
  },
  {
    code: "341",
    name: "Bột đắp mặt nạ Mask Powder",
    sellPrice: "752.678",
    ccPoint: 0.131,
    salePrice: "578.983",
  },
  {
    code: "559",
    name: "Tẩy tế bào chết Smoothing Exfoliator",
    sellPrice: "477.406",
    ccPoint: 0.083,
    salePrice: "367.236",
  },
  {
    code: "022",
    name: "Son dưỡng môi Forever Aloe Lips",
    sellPrice: "126.404",
    ccPoint: 0.022,
    salePrice: "97.233",
  },
  {
    code: "028",
    name: "Kem đánh răng Forever Bright Toothgel",
    sellPrice: "172.369",
    ccPoint: 0.03,
    salePrice: "132.592",
  },
  {
    code: "040",
    name: "Chất phun làm dịu da tự nhiên Aloe First",
    sellPrice: "632.020",
    ccPoint: 0.11,
    salePrice: "486.169",
  },
  {
    code: "061",
    name: "Gel dưỡng da Aloe Vera Gelly",
    sellPrice: "384.958",
    ccPoint: 0.067,
    salePrice: "296.121",
  },
  {
    code: "064",
    name: "Kem dưỡng da Aloe Heat Lotion",
    sellPrice: "384.958",
    ccPoint: 0.067,
    salePrice: "296.121",
  },
  {
    code: "067",
    name: "Sáp khử mùi Aloe Ever-Shield",
    sellPrice: "201.098",
    ccPoint: 0.035,
    salePrice: "154.691",
  },
  {
    code: "070",
    name: "kem dưỡng da sau khi cạo râu Gentlemen's Pride",
    sellPrice: "407.940",
    ccPoint: 0.071,
    salePrice: "313.800",
  },
  {
    code: "208",
    name: "Nước hoa dành cho nữ 25th Edition Perfume Spary for Women",
    sellPrice: "1.005.487",
    ccPoint: 0.175,
    salePrice: "773.451",
  },
  {
    code: "209",
    name: "Nước hoa dành cho nam 25th Edition Perfume Spary for Men",
    sellPrice: "1.005.487",
    ccPoint: 0.175,
    salePrice: "773.451",
  },
  {
    code: "284",
    name: "Xà phòng rửa mặt và cơ thể Aloe Avocado Face and Body Soap",
    sellPrice: "155.133",
    ccPoint: 0.027,
    salePrice: "119.334",
  },
  {
    code: "523",
    name: "Sữa rửa tay Aloe Hand Soap",
    sellPrice: "436.669",
    ccPoint: 0.076,
    salePrice: "335.898",
  },
  {
    code: "617",
    name: "Kem chống nắng Aloe Sunscreen",
    sellPrice: "626.274",
    ccPoint: 0.109,
    salePrice: "475.845",
  },
  {
    code: "633",
    name: "Xà phòng nước Aloe Liquid Soap",
    sellPrice: "603.291",
    ccPoint: 0.105,
    salePrice: "464.070",
  },
  {
    code: "640",
    name: "Dầu gội đầu Aloe Jojoba Shampoo",
    sellPrice: "551.581",
    ccPoint: 0.096,
    salePrice: "424.293",
  },
  {
    code: "641",
    name: "Dầu xả Aloe Jojoba Conditioner",
    sellPrice: "623.020",
    ccPoint: 0.11,
    salePrice: "486.169",
  },
  {
    code: "646",
    name: "Sữa tắm Aloe Body Wash",
    sellPrice: "563.073",
    ccPoint: 0.098,
    salePrice: "433.133",
  },
  {
    code: "560",
    name: "Dung dịch cân bằng da Balancing Toner",
    sellPrice: "514.676",
    ccPoint: 0.09,
    salePrice: "396.905",
  },
  {
    code: "561",
    name: "Kem dưỡng da vùng mắt Awakeing Eye Cream",
    sellPrice: "477.406",
    ccPoint: 0.083,
    salePrice: "367.236",
  },
  {
    code: "605",
    name: "Gel rửa mặt Sonya Refreshing Gel Cleanser",
    sellPrice: "585.666",
    ccPoint: 0.102,
    salePrice: "450.513",
  },
  {
    code: "606",
    name: "Gel dưỡng da Sonya Illuminating Gel",
    sellPrice: "557.270",
    ccPoint: 0.097,
    salePrice: "428.669",
  },
  {
    code: "607",
    name: "Mặt nạ gel Sonya Refining Gel Mask",
    sellPrice: "585.666",
    ccPoint: 0.102,
    salePrice: "450.513",
  },
  {
    code: "608",
    name: "Gel dưỡng ẩm Sonya Soothing Gel Moisturizer",
    sellPrice: "638.909",
    ccPoint: 0.111,
    salePrice: "491.469",
  },
  {
    code: "609",
    name: "Bộ chăm sóc da hằng ngày Sonya Daily Skinecare Kit",
    sellPrice: "2.032.085",
    ccPoint: 0.354,
    salePrice: "1.563.142",
  },
  {
    code: "612",
    name: "Dung dịch chăm sóc da Aloe Activator",
    sellPrice: "374.472",
    ccPoint: 0.065,
    salePrice: "288.055",
  },
  {
    code: "553",
    name: "Bộ sản phẩm chăm sóc da ngăn ngừa lão hóa Infinite by Forever",
    sellPrice: "3.711.681",
    ccPoint: 0.646,
    salePrice: "2.855.139",
  },
  {
    code: "554",
    name: "Sữa rửa mặt Infinite by Forever Hydrating Cleanser",
    sellPrice: "649.257",
    ccPoint: 0.113,
    salePrice: "499.429",
  },
  {
    code: "555",
    name: "Sữa dưỡng da và làm săn da Infinite by Forever Firming Serum",
    sellPrice: "1.034.214",
    ccPoint: 0.18,
    salePrice: "795.550",
  },
  {
    code: "558",
    name: "Kem dưỡng phục hồi tái tạo da Infinite by Forever Restoring Crème",
    sellPrice: "1.149.127",
    ccPoint: 0.2,
    salePrice: "883.945",
  },
  {
    code: "015",
    name: "Nước uống dinh dưỡng Forever Aloe Vera Gel",
    sellPrice: "706.713",
    ccPoint: 0.123,
    salePrice: "553.741",
  },
  {
    code: "034",
    name: "Nước uống ding dưỡng Forever Aloe Berry Nectar",
    sellPrice: "706.713",
    ccPoint: 0.123,
    salePrice: "553.741",
  },
  {
    code: "077",
    name: "Nước uống ding dưỡng Forever Aloe Bits N' Peaches",
    sellPrice: "706.713",
    ccPoint: 0.123,
    salePrice: "533.741",
  },
  {
    code: "196",
    name: "Nước uống ding dưỡng Forever Freedom",
    sellPrice: "827.372",
    ccPoint: 0.144,
    salePrice: "624.869",
  },

  {
    code: "037",
    name: "Thực phẩm bảo vệ sức khỏe Forever Nature - Min",
    sellPrice: "609.038",
    ccPoint: 0.106,
    salePrice: "459.972",
  },
  {
    code: "047",
    name: "Thực phẩm bảo vệ sức khỏe Forever Gin - Chia",
    sellPrice: "609.038",
    ccPoint: 0.106,
    salePrice: "459.972",
  },
  {
    code: "048",
    name: "Thực phẩm bảo vệ sức khỏe Forever Absorbent - C",
    sellPrice: "574.564",
    ccPoint: 0.1,
    salePrice: "433.936",
  },
  {
    code: "054",
    name: "Thực phẩm bảo vệ sức khỏe Forever A - Beta - Care",
    sellPrice: "677.985",
    ccPoint: 0.118,
    salePrice: "512.044",
  },
  {
    code: "065",
    name: "Thực phẩm bảo vệ sức khỏe Forever Garlic Thyme",
    sellPrice: "574.564",
    ccPoint: 0.1,
    salePrice: "433.936",
  },
  {
    code: "068",
    name: "Thực phẩm bảo vệ sức khỏe Forever Fields of Greens",
    sellPrice: "574.564",
    ccPoint: 0.1,
    salePrice: "433.936",
  },
  {
    code: "072",
    name: "Thực phẩm bảo vệ sức khỏe Forever Lycium Plus",
    sellPrice: "677.985",
    ccPoint: 0.118,
    salePrice: "512.044",
  },
  {
    code: "073",
    name: "Thực phẩm bảo vệ sức khỏe Forever Ginkgo Plus",
    sellPrice: "677.985",
    ccPoint: 0.118,
    salePrice: "512.044",
  },
  {
    code: "188",
    name: "Thực phẩm bảo vệ sức khỏe Forever B12 Plus",
    sellPrice: "350.484",
    ccPoint: 0.096,
    salePrice: "264.700",
  },
  {
    code: "206",
    name: "Thực phẩm bảo vệ sức khỏe Forever Calcium",
    sellPrice: "551.581",
    ccPoint: 0.104,
    salePrice: "451.294",
  },
  {
    code: "215",
    name: "Thực phẩm bảo vệ sức khỏe Forever Multi - Maca",
    sellPrice: "597.547",
    ccPoint: 0.103,
    salePrice: "451.294",
  },
  {
    code: "264",
    name: "Viên nang mềm Forever Active HA",
    sellPrice: "775.661",
    ccPoint: 0.135,
    salePrice: "585.815",
  },
  {
    code: "312",
    name: "Thực phẩm bảo vệ sức khỏe Forever CardioHealth",
    sellPrice: "764.169",
    ccPoint: 0.133,
    salePrice: "577.135",
  },
  {
    code: "354",
    name: "Thực phẩm bảo vệ sức khỏe Forever Kids",
    sellPrice: "407.940",
    ccPoint: 0.071,
    salePrice: "308.095",
  },
  {
    code: "355",
    name: "Thực phẩm bảo vệ sức khỏe Forever Immublend",
    sellPrice: "632.020",
    ccPoint: 0.11,
    salePrice: "477.330",
  },
  {
    code: "374",
    name: "Thực phẩm bảo vệ sức khỏe Vitolize Men's Vitality Supplement",
    sellPrice: "689.477",
    ccPoint: 0.12,
    salePrice: "520.723",
  },
  {
    code: "375",
    name: "Thực phẩm bảo vệ sức khỏe Vitolize Women's Vitality Supplement",
    sellPrice: "729.696",
    ccPoint: 0.127,
    salePrice: "551.098",
  },
  {
    code: "376",
    name: "Thực phẩm bảo vệ sức khỏe Forever Arctic Sea",
    sellPrice: "982.504",
    ccPoint: 0.171,
    salePrice: "742.030",
  },
  {
    code: "439",
    name: "Thực phẩm bảo vệ sức khỏe Forever Daily",
    sellPrice: "459.650",
    ccPoint: 0.08,
    salePrice: "347.150",
  },
  {
    code: "473",
    name: "Thực phẩm bảo vệ sức khỏe ARGI+ L- Arginine & Vitamin Complex",
    sellPrice: "1.886.572",
    ccPoint: 0.328,
    salePrice: "1.424.645",
  },
  {
    code: "551",
    name: "Thực phẩm bảo vệ sức khỏe Forever Move",
    sellPrice: "1.436.410",
    ccPoint: 0.25,
    salePrice: "1.084.841",
  },
  {
    code: "556",
    name: "Thực phẩm bảo vệ sức khỏe Infinite by Forever Fiming Complex",
    sellPrice: "1.028.469",
    ccPoint: 0.179,
    salePrice: "776.764",
  },
  {
    code: "624",
    name: "Thực phẩm bảo vệ sức khỏe Forever iVision",
    sellPrice: "806.059",
    ccPoint: 0.14,
    salePrice: "608.846",
  },
  {
    code: "071",
    name: "Thực phẩm bảo vệ sức khỏe Forever Garcinia Plus",
    sellPrice: "677.985",
    ccPoint: 0.118,
    salePrice: "512.044",
  },
  {
    code: "289",
    name: "Thực phẩm bảo vệ sức khỏe Forever Lean",
    sellPrice: "959.522",
    ccPoint: 0.167,
    salePrice: "724.674",
  },
  {
    code: "470",
    name: "Thực phẩm bảo vệ sức khỏe Forever Lite Ultra - Vanila",
    sellPrice: "700.968",
    ccPoint: 0.122,
    salePrice: "529.402",
  },
  {
    code: "471",
    name: "Thực phẩm bảo vệ sức khỏe Forever Lite Ultra - Chocolate",
    sellPrice: "700.968",
    ccPoint: 0.122,
    salePrice: "529.402",
  },
  {
    code: "026",
    name: "Thực phẩm bảo vệ sức khỏe Forever Bee Pollen",
    sellPrice: "568.818",
    ccPoint: 0.099,
    salePrice: "429.597",
  },
  {
    code: "027",
    name: "Thực phẩm bảo vệ sức khỏe Forever Bee Propolis",
    sellPrice: "907.811",
    ccPoint: 0.158,
    salePrice: "685.620",
  },
  {
    code: "036",
    name: "Thực phẩm bảo vệ sức khỏe Forever Royal Jelly",
    sellPrice: "907.811",
    ccPoint: 0.158,
    salePrice: "685.620",
  },
];

const container = document.querySelector(".list-products");

let tableHTML = `
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên sản phẩm</th>
        <th>Mã SP</th>
        <th>Giá NPP Bán sỉ (đ)</th>
        <th>Giá bán lẻ (đ)</th>
        <th>Điểm CC</th>
      </tr>
    </thead>
    <tbody>
`;

products.forEach((product, index) => {
  tableHTML += `
    <tr>
      <td>${index + 1}</td>
      <td class='product-name'>${product.name}</td>
      <td>${product.code}</td>
      <td class='product-price'>${product.salePrice.toLocaleString()}</td>
      <td class='product-price'>${product.sellPrice.toLocaleString()}</td>
      <td>${product.ccPoint}</td>
    </tr>
  `;
});

tableHTML += `
    </tbody>
  </table>
`;

container.innerHTML = tableHTML;

const resultRender = document.querySelector(".result");
let resultData = ``;
const btn = document.querySelector("#btn-filter");
const dataInput = document.querySelector("#code-product");
resultRender.innerHTML = `
<div>
<h2>Kết quả: </h2>
    <p>Tên sản phẩm:  </br>
    Mã sản phẩm:  </br>
    Giá sỉ:  </br>
    Giá lẻ:  </br>
    Điểm thưởng:  </br>
    </p>
</div>
`;
btn.addEventListener("click", () => {
  resultData = "";
  const result = products.find((item) => item.code === dataInput.value);
  console.log(result);
  if (result) {
    resultData += `
<div>
<h2>Kết quả: </h2>
    <p>Tên sản phẩm: <b>${result.name}</b> </br>
    Mã sản phẩm: <b>${result.code}</b> </br>
    Giá sỉ: <b>${result.salePrice} đ</b> </br>
    Giá lẻ: <b>${result.sellPrice} đ</b> </br>
    Điểm thưởng: <b>${result.ccPoint} cc</b> </br>
    </p>
</div>

    `;
    resultRender.innerHTML = resultData;
  } else {
    resultRender.innerHTML = `<h3 style="color: red;">Không tìm thấy kết quả</h3>`;
  }
});
