export default function StoresPage() {
  const stores = [
  {
    name: 'Foodmart Vinhomes Grand Park',
    address:
      'S203 chung cư Vinhomes Grand, đường Nguyễn Xiển, Long Thạnh Mỹ, Quận 9'
  },
  {
    name: 'Foodmart Era Town',
    address:
      'Tầng G Block A1 Chung cư The Era Town (Đức Khải), đường 15B, Phú Mỹ, Quận 7'
  },
  {
    name: 'Foodmart Đức Khải',
    address:
      'EB1-01-02 Block B1 Chung cư The Era Town (Đức Khải), hướng bờ sông, đường 15B, Phú Mỹ, Quận 7'
  },
  {
    name: 'Foodmart Mizuki',
    address:
      'MP3-001.05 chung cư Mizuki Flora, đường Nguyễn Văn Linh, xã Bình Hưng, Huyện Bình Chánh'
  },
  {
    name: 'Foodmart Eco Green Saigon',
    address:
      'Tầng trệt Block A-SH18, 107 Nguyễn Văn Linh, P. Tân Thuận Tây, Quận 7'
  },
  {
    name: 'Foodmart Phố Đông Village',
    address:
      '1145 Nguyễn Thị Định, Phường Cát Lái, Quận 2'
  },
  {
    name: 'Foodmart Midtown',
    address:
      'Shophouse E04 Block M8, Chung cư Midtown, Phường Tân Phú, Quận 7'
  },
  {
    name: 'Foodmart Vinhomes Grand Park – S2.01',
    address:
      'S201 Chung cư Vinhomes Grand, Đường Nguyễn Xiển, Long Thạnh Mỹ, Quận 9'
  },
  {
    name: 'Foodmart Vinhomes Grand Park – S7.02',
    address:
      'S702 Chung cư Vinhomes Grand, Đường Nguyễn Xiển, Long Thạnh Mỹ, Quận 9'
  },
  {
    name: 'Foodmart Q7 Boulevard',
    address:
      'Shophouse 27 Block B1, Chung cư Q7 Boulevard, Phường Phú Mỹ, Quận 7'
  },
  {
    name: 'Foodmart Saigon Intela',
    address:
      'Shop A06, Tầng 01, Chung cư Saigon Intela, KDC 13E, Ấp 5, Xã Phong Phú, Huyện Bình Chánh'
  },
  {
    name: 'Foodmart Vinhomes Grand Park – S3.05',
    address:
      'S.05 Chung cư Vinhomes Grand, Đường Nguyễn Xiển, Long Thạnh Mỹ, Quận 9'
  }
];

  return (
    <div className=" bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Danh sách cửa hàng Foodmart
        </h1>

        <div className="space-y-4">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-green-700">
                {store.name}
              </h2>

              <p className="text-gray-700 mt-1">
                📍 {store.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
