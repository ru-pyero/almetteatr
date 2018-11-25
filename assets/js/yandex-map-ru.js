window.onload = function () {
  var zoom = 17;
  var center = [54.90064692510344, 52.29805240248198];
  var marker_position = [54.90064692510344, 52.29805240248198];
  var drag = true;

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if (isMobile.any()) {
    zoom = 16;
    center = [54.90059128000957, 52.2981275043344];
    marker_position = [54.90059128000957, 52.2981275043344];
    drag = false;
  }

  initMap(zoom, center, marker_position, drag);
}

function initMap(zoom, center, marker_position, drag) {

  ymaps.ready(function () {
    var map = new ymaps.Map("map", {
      center: center,
      zoom: zoom
    })

    var place = new ymaps.Placemark(
      marker_position, {
        hintContent: 'Драматический театр',
        balloonContent: '<h4><span style="color:#684287;">Драматический театр</span></h4><strong>Адрес:</strong> Республика Татарстан, г. Альметьевск, ул.Ленина, д.37, индекс 423450<br><strong>График работы кассы:</strong> Пн-Пт: 11:30-19:30, Суб-Вск: 12:30-18:30 (Обед 15:00-16:00)<br><strong>Телефоны:</strong> приёмная - 8(8553) 45-46-99, зам. директора по общим вопросам – 8(8553) 45-46-07<br><strong>Е-mail:</strong> dramteatr-52@mail.ru'
      }, {
        iconImageHref: 'http://almetteatr.ru/template/images/locator.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -83],
        iconLayout: 'default#image',
        balloonShadow: true
      }
    );

    place.options.set('visible', true);
    map.geoObjects.add(place);
    map.behaviors.disable('scrollZoom');
    if (!drag) {
      map.behaviors.disable('drag');
    }

    place.events.add('click', function (e) {
      e.get('target').options.set({
        iconImageHref: 'http://almetteatr.ru/template/images/locator.png'
      });

    });
  });
}