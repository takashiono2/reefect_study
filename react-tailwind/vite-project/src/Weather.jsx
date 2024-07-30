function Weather() {
  return (
    <div className="p-4">
      <div
        className="bg-gradient-to-r from-blue-500 to-blue-300
                    w-96 h-56 m-auto rounded-xl shadow-2xl
                    transform hover:scale-110 transition-transform
                    text-white relative"
      >
        <div className="w-full px-8 absolute top-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light">City Name</p>
              <p className="text-lg font-medium tracking-widest">Tokyo</p>
            </div>
            <div>画像</div>
          </div>
          <div className="pt-2">
            <p className="font-light">Weather Condition</p>
            <p className="text-lg font-medium tracking-widest">Cloudy</p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div>
                <p className="font-light text-xs">Date</p>
                <p className="font-bold tracking-more-wider text-sm">
                  2024-07-20
                </p>
              </div>
              <div>
                <p className="font-light text-xs">Temprature</p>
                <p className="font-bold tracking-more-wider text-sm">20°C</p>
              </div>
              <div>
                <p className="font-light text-xs">Humidity</p>
                <p className="font-bold tracking-more-wider text-sm">40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
