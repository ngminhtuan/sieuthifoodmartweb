export default function StoresPage() {
  const stores = [
    {
      name: 'FM02 Foodmart',
      address: 'A1 Eratown 01-06 Block A1, Era Town',
      phone: '028 2218 8999',
    },
    {
      name: 'FM06 Foodmart',
      address: 'Mizuki 01.05 Block MP3, Mizuki',
      phone: '028 2218 8999',
    },
    {
      name: 'FM08 Foodmart',
      address: '107 Nguyễn Văn Linh, Quận 7',
      phone: '028 2218 8999',
    },
    {
      name: 'FM09 Foodmart',
      address: 'E04 Block M8, Midtown',
      phone: '028 2218 8999',
    },
    {
      name: 'FM01 Foodmart',
      address: 'S203 Chung cư Vinhomes Grand Park, Q9',
      phone: '',
    },
    {
      name: 'FM05 Foodmart',
      address: 'EB1-01-02 Block B1, Chung cư The Era Town',
      phone: '',
    },
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

              {store.phone && (
                <p className="text-gray-600 mt-1">
                  📞 {store.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
