(function() {
  YMaps.jQuery(function () {
      // Создает экземпляр карты и привязывает его к созданному контейнеру
      var map = new YMaps.Map(YMaps.jQuery('#contacts-map')[0]);
      var markerStyle = new YMaps.Style();
      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.323055,59.938631), {style: markerStyle});

      // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
      map.setCenter(new YMaps.GeoPoint(30.323055,59.938631), 17);
      map.enableScrollZoom();
      markerStyle.iconStyle = new YMaps.IconStyle();

      markerStyle.iconStyle.href = '../img/map-marker.svg';
      markerStyle.iconStyle.size = new YMaps.Point(97, 67);
      markerStyle.iconStyle.offset = new YMaps.Point(-48, -67);

      // Добавляет метку на карту
      map.addOverlay(placemark);
  })
})();
