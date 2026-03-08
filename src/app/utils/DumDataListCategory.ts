export interface CategoryNode {
  id: number | null | string
  name: string
  slug: string
  icon?: string
  children?: CategoryNode[]
}

export const dummyDataListCategory: CategoryNode[] = [
  {
    "id": null,
    "name": "Đồ Tươi Sống",
    "slug": "do-tuoi-song",
    "icon": "🥬",
    "children": [
      {
        "id": null,
        "name": "Thịt tươi",
        "slug": "thit-tuoi",
        "icon": "🍖",
        "children": [
          { "id": '162', "name": "Thịt heo tươi", "slug": "thit-heo-tuoi","icon": "🍖" },
          { "id": '159', "name": "Thịt bò tươi", "slug": "thit-bo-tuoi","icon": "🥩" },
          { "id": '161', "name": "Thịt gà tươi", "slug": "thit-ga-tuoi","icon": "🍗" },
          { "id": '165', "name": "Thịt vịt tươi", "slug": "thit-vit-tuoi","icon": "🍗" },
          { "id": '163', "name": "Thịt tươi khác", "slug": "thit-tuoi-khac","icon": "🥓" },
          { "id": '164', "name": "Thịt tươi sơ chế", "slug": "thit-tuoi-so-che","icon": "🍖" },
        ]
      },
      { "id": '173', "name": "Trứng tươi", "slug": "trung-tuoi", "icon": "🥚" },
      {
        "id": '134',
        "name": "Đồ tươi sống khác",
        "slug": "do-tuoi-song-khac",
        "icon": "🥩",
        "children": [
          { "id": '140', "name": "Giò chả", "slug": "cha-gio", "icon": "🥓"}
        ]
      },
      {
        "id": null,
        "name": "Thủy hải sản",
        "slug": "thuy-hai-san",
        "icon": "🐟",
        "children": [
          { "id": '125', "name": "Cá tươi", "slug": "ca-tuoi", "icon": "🐠" },
          { "id": '167', "name": "Tôm tươi", "slug": "tom-tuoi", "icon": "🦐" },
          { "id": '145', "name": "Mực tươi", "slug": "muc-tuoi", "icon": "🦑" },
          { "id": '133', "name": "Đồ sông, biển khác", "slug": "do-song-bien-khac", "icon": "🐚" }
        ]
      },
      {
        "id": null,
        "name": "Rau củ quả",
        "slug": "rau-cu-qua",
        "icon": "🥕",
        "children": [
          { "id": '149', "name": "Rau lá", "slug": "rau-la", "icon": "🥦" },
          { "id": '150', "name": "Rau thơm", "slug": "rau-thom", "icon": "🌽" },
          { "id": '127', "name": "Củ, quả tươi", "slug": "cu-qua-tuoi", "icon": "🍅" },
          { "id": '148', "name": "Rau củ chế biến", "slug": "rau-cu-che-bien", "icon": "🥒" },
        ]
      },
      { "id": '172', "name": "Trái cây nội", "slug": "trai-cay-noi", "icon": "🍉" },
      { "id": '171', "name": "Trái cây ngoại", "slug": "trai-cay-ngoai", "icon": "🍌" },
      {
        "id": null,
        "name": "Trái cây tổng hợp",
        "slug": "trai-cay-tong-hop",
        "icon": "🍎",
        "children": [
          { "id": '169', "name": "Trái cây chế biến", "slug": "trai-cay-che-bien", "icon": "🍓" }
        ]
      },
    ]
  },
  {
    "id": null,
    "name": "Đồ Đông Mát",
    "slug": "do-dong-mat",
    "icon": "❄️",
    "children": [
      {
        "id": '160',
        "name": "Thịt đông lạnh",
        "slug": "thit-dong-lanh",
        "icon": "🥩",
        "children": []
      },
      {
        "id": '130',
        "name": "Đồ đông khác",
        "slug": "do-dong-khac",
        "icon": "🧊",
        "children": []
      }
    ]
  },
  {
    "id": null,
    "name": "Thực Phẩm Công Nghệ",
    "slug": "thuc-pham-cong-nghe",
    "icon": "🍱",
    "children": [
      { "id": '123', "name": "Bánh kẹo", "slug": "banh-keo", "icon": "🍬" },
      { "id": '144', "name": "Kem", "slug": "kem", "icon": "🍦" },
      { "id": '138', "name": "Gạo", "slug": "gao", "icon": "🍚" },
      { "id": '128', "name": "Đồ ăn vặt", "slug": "do-an-vat", "icon": "🍿" },
      { "id": '139', "name": "Gia vị", "slug": "gia-vi", "icon": "🧂" },
      { "id": '168', "name": "Trà, cà phê", "slug": "tra-ca-phe", "icon": "☕" },
      { "id": '147', "name": "Noodle", "slug": "noodle", "icon": "🍜" },
      { "id": '143', "name": "Hột, hạt", "slug": "hot-hat", "icon": "🥜" },
      { "id": '132', "name": "Thực phẩm khô khác", "slug": "thuc-pham-kho-khac", "icon": "📦" },
    ]
  },
  {
    "id": null,
    "name": "Sữa",
    "slug": "sua",
    "icon": "🥛",
    "children": [
      { "id": '154', "name": "Sữa đặc", "slug": "sua-dac", "icon": "📦" },
      { "id": '156', "name": "Sữa tươi", "slug": "sua-tuoi", "icon": "🥛" },
      { "id": '155', "name": "Sữa thanh trùng", "slug": "sua-thanh-trung", "icon": "🍼" },
      { "id": '152', "name": "Sữa bột", "slug": "sua-bot", "icon": "🥣" },
      { "id": '153', "name": "Sữa chua", "slug": "sua-chua", "icon": "🧃" },
    ]
  },
  {
    "id": null,
    "name": "Đồ Uống",
    "slug": "do-uong",
    "icon": "🥤",
    "children": [
      { "id": '135', "name": "Đồ uống có gas", "slug": "do-uong-co-gas", "icon": "🥤" },
      { "id": '136', "name": "Đồ uống không gas", "slug": "do-uong-khong-gas","icon": "🧃"  },
      {
        "id": null,
        "name": "Đồ uống có cồn",
        "slug": "do-uong-co-con",
        "icon": "🍺",
        "children": [
          { "id": '124', "name": "Bia", "slug": "bia", "icon": "🍺" },
          { "id": '151', "name": "Rượu", "slug": "ruou", "icon": "🍷" },
          { "id": '166', "name": "Thuốc lá", "slug": "thuoc-la", "icon": "📦" },
        ]
      },
      {
        "id": null,
        "name": "Đồ uống không cồn",
        "slug": "do-uong-khong-con",
        "icon": "🥛",
        "children": [
          { "id": '170', "name": "Trái cây lên men", "slug": "trai-cay-len-men", "icon": "🍇" },
        ]
      },
    ]
  },
  {
    "id": null,
    "name": "Hóa Mỹ Phẩm",
    "slug": "hoa-my-pham",
    "icon": "🧴",
    "children": [
      { "id": '142', "name": "Hóa phẩm tẩy rửa", "slug": "hoa-pham-tay-rua", "icon": "🧴" },
      { "id": '126', "name": "Chăm sóc cá nhân", "slug": "cham-soc-ca-nhan", "icon": "✨" },
      { "id": '157', "name": "Tã, giấy", "slug": "ta-giay", "icon": "🧼" },
      { "id": '141', "name": "Hóa phẩm khác", "slug": "hoa-pham-khac", "icon": "💄" },
    ]
  },
  {
    "id": null,
    "name": "Gia Dụng",
    "slug": "gia-dung",
    "icon": "🏠",
    "children": [
      { "id": '137', "name": "Dụng cụ nhà bếp", "slug": "dung-cu-nha-bep", "icon": "🍳" },
      { "id": '175', "name": "Vật dụng dọn dẹp", "slug": "vat-dung-don-dep","icon": "🧹"  },
      { "id": '158', "name": "Thiết bị điện nhỏ", "slug": "thiet-bi-dien-nho","icon": "💡" },
      { "id": '174', "name": "Văn phòng phẩm", "slug": "van-phong-pham","icon": "🖊️" },
      { "id": '131', "name": "Đồ dùng khác", "slug": "do-dung-khac","icon": "🍽️" }
    ]
  },
  {
    "id": '129',
    "name": "Đồ Chơi Trẻ Em",
    "slug": "do-choi-tre-em",
    "icon": "🧸",
    "children": []
  },
  {
    "id": '146',
    "name": "Nhãn Hàng Riêng",
    "slug": "nhan-hang-rieng",
    "icon": "🏷️",
    "children": []
  },
  // {
  //   "id": '178',
  //   "name": "Công Cụ Dụng Cụ",
  //   "slug": "cong-cu-dung-cu",
  //   "icon": "🛠️",
  //   "children": []
  // },
]

export const dummyDataListCategoryHome: CategoryNode[] = [
  {
    "id": null,
    "name": "Đồ Tươi Sống",
    "slug": "do-tuoi-song",
    "icon": "🥬",
    "children": [
      {
        "id": null,
        "name": "Thịt tươi",
        "slug": "thit-tuoi",
        "icon": "🍖",
        "children": [
          { "id": '162', "name": "Thịt heo tươi", "slug": "thit-heo-tuoi","icon": "🍖" },
          { "id": '159', "name": "Thịt bò tươi", "slug": "thit-bo-tuoi","icon": "🥩" },
          { "id": '161', "name": "Thịt gà tươi", "slug": "thit-ga-tuoi","icon": "🍗" },
          { "id": '165', "name": "Thịt vịt tươi", "slug": "thit-vit-tuoi","icon": "🍗" },
          { "id": '163', "name": "Thịt tươi khác", "slug": "thit-tuoi-khac","icon": "🥓" },
          { "id": '164', "name": "Thịt tươi sơ chế", "slug": "thit-tuoi-so-che","icon": "🍖" },
        ]
      },
      { "id": '173', "name": "Trứng tươi", "slug": "trung-tuoi", "icon": "🥚" },
      {
        "id": '134',
        "name": "Đồ tươi sống khác",
        "slug": "do-tuoi-song-khac",
        "icon": "🥩",
        "children": [
          { "id": '140', "name": "Giò chả", "slug": "cha-gio", "icon": "🥓"}
        ]
      },
      {
        "id": null,
        "name": "Thủy hải sản",
        "slug": "thuy-hai-san",
        "icon": "🐟",
        "children": [
          { "id": '125', "name": "Cá tươi", "slug": "ca-tuoi", "icon": "🐠" },
          { "id": '167', "name": "Tôm tươi", "slug": "tom-tuoi", "icon": "🦐" },
          { "id": '145', "name": "Mực tươi", "slug": "muc-tuoi", "icon": "🦑" },
          { "id": '133', "name": "Đồ sông, biển khác", "slug": "do-song-bien-khac", "icon": "🐚" }
        ]
      },
      {
        "id": null,
        "name": "Rau củ quả",
        "slug": "rau-cu-qua",
        "icon": "🥕",
        "children": [
          { "id": '149', "name": "Rau lá", "slug": "rau-la", "icon": "🥦" },
          { "id": '150', "name": "Rau thơm", "slug": "rau-thom", "icon": "🌽" },
          { "id": '127', "name": "Củ, quả tươi", "slug": "cu-qua-tuoi", "icon": "🍅" },
          { "id": '148', "name": "Rau củ chế biến", "slug": "rau-cu-che-bien", "icon": "🥒" },
        ]
      },
      { "id": '172', "name": "Trái cây nội", "slug": "trai-cay-noi", "icon": "🍉" },
      { "id": '171', "name": "Trái cây ngoại", "slug": "trai-cay-ngoai", "icon": "🍌" },
      {
        "id": null,
        "name": "Trái cây tổng hợp",
        "slug": "trai-cay-tong-hop",
        "icon": "🍎",
        "children": [
          { "id": '169', "name": "Trái cây chế biến", "slug": "trai-cay-che-bien", "icon": "🍓" }
        ]
      },
    ]
  },
  {
    "id": null,
    "name": "Đồ Đông Mát",
    "slug": "do-dong-mat",
    "icon": "❄️",
    "children": [
      {
        "id": '160',
        "name": "Thịt đông lạnh",
        "slug": "thit-dong-lanh",
        "icon": "🥩",
        "children": []
      },
      {
        "id": '130',
        "name": "Đồ đông khác",
        "slug": "do-dong-khac",
        "icon": "🧊",
        "children": []
      }
    ]
  },
  {
    "id": null,
    "name": "Thực Phẩm Công Nghệ",
    "slug": "thuc-pham-cong-nghe",
    "icon": "🍱",
    "children": [
      { "id": '123', "name": "Bánh kẹo", "slug": "banh-keo", "icon": "🍬" },
      { "id": '144', "name": "Kem", "slug": "kem", "icon": "🍦" },
      { "id": '138', "name": "Gạo", "slug": "gao", "icon": "🍚" },
      { "id": '128', "name": "Đồ ăn vặt", "slug": "do-an-vat", "icon": "🍿" },
      { "id": '139', "name": "Gia vị", "slug": "gia-vi", "icon": "🧂" },
      { "id": '168', "name": "Trà, cà phê", "slug": "tra-ca-phe", "icon": "☕" },
      { "id": '147', "name": "Noodle", "slug": "noodle", "icon": "🍜" },
      { "id": '143', "name": "Hột, hạt", "slug": "hot-hat", "icon": "🥜" },
      { "id": '132', "name": "Thực phẩm khô khác", "slug": "thuc-pham-kho-khac", "icon": "📦" },
    ]
  },
  {
    "id": null,
    "name": "Sữa",
    "slug": "sua",
    "icon": "🥛",
    "children": [
      { "id": '154', "name": "Sữa đặc", "slug": "sua-dac", "icon": "📦" },
      { "id": '156', "name": "Sữa tươi", "slug": "sua-tuoi", "icon": "🥛" },
      { "id": '155', "name": "Sữa thanh trùng", "slug": "sua-thanh-trung", "icon": "🍼" },
      { "id": '152', "name": "Sữa bột", "slug": "sua-bot", "icon": "🥣" },
      { "id": '153', "name": "Sữa chua", "slug": "sua-chua", "icon": "🧃" },
    ]
  },
  {
    "id": null,
    "name": "Đồ Uống",
    "slug": "do-uong",
    "icon": "🥤",
    "children": [
      { "id": '135', "name": "Đồ uống có gas", "slug": "do-uong-co-gas", "icon": "🥤" },
      { "id": '136', "name": "Đồ uống không gas", "slug": "do-uong-khong-gas","icon": "🧃"  },
      {
        "id": null,
        "name": "Đồ uống có cồn",
        "slug": "do-uong-co-con",
        "icon": "🍺",
        "children": [
          { "id": '124', "name": "Bia", "slug": "bia", "icon": "🍺" },
          { "id": '151', "name": "Rượu", "slug": "ruou", "icon": "🍷" },
          { "id": '166', "name": "Thuốc lá", "slug": "thuoc-la", "icon": "📦" },
        ]
      },
      {
        "id": null,
        "name": "Đồ uống không cồn",
        "slug": "do-uong-khong-con",
        "icon": "🥛",
        "children": [
          { "id": '170', "name": "Trái cây lên men", "slug": "trai-cay-len-men", "icon": "🍇" },
        ]
      },
    ]
  },
  {
    "id": null,
    "name": "Hóa Mỹ Phẩm",
    "slug": "hoa-my-pham",
    "icon": "🧴",
    "children": [
      { "id": '142', "name": "Hóa phẩm tẩy rửa", "slug": "hoa-pham-tay-rua", "icon": "🧴" },
      { "id": '126', "name": "Chăm sóc cá nhân", "slug": "cham-soc-ca-nhan", "icon": "✨" },
      { "id": '157', "name": "Tã, giấy", "slug": "ta-giay", "icon": "🧼" },
      { "id": '141', "name": "Hóa phẩm khác", "slug": "hoa-pham-khac", "icon": "💄" },
    ]
  },
  {
    "id": null,
    "name": "Gia Dụng",
    "slug": "gia-dung",
    "icon": "🏠",
    "children": [
      { "id": '137', "name": "Dụng cụ nhà bếp", "slug": "dung-cu-nha-bep", "icon": "🍳" },
      { "id": '175', "name": "Vật dụng dọn dẹp", "slug": "vat-dung-don-dep","icon": "🧹"  },
      { "id": '158', "name": "Thiết bị điện nhỏ", "slug": "thiet-bi-dien-nho","icon": "💡" },
      { "id": '174', "name": "Văn phòng phẩm", "slug": "van-phong-pham","icon": "🖊️" },
      { "id": '131', "name": "Đồ dùng khác", "slug": "do-dung-khac","icon": "🍽️" }
    ]
  },
  {
    "id": '129',
    "name": "Đồ Chơi Trẻ Em",
    "slug": "do-choi-tre-em",
    "icon": "🧸",
    "children": []
  }
  // {
  //   "id": '178',
  //   "name": "Công Cụ Dụng Cụ",
  //   "slug": "cong-cu-dung-cu",
  //   "icon": "🛠️",
  //   "children": []
  // },
]