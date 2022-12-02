
async function googleConversion() {
  await new Promise((resolve) => {
    let timer;
    var callback = function () {
      console.log('gtag_report_conversion callback');
      clearTimeout(timer);
      resolve();
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-11027390510/2dw9CKf4uoMYEK7Aooop',
        'event_callback': callback
    });
    timer = setTimeout(() => {
      console.log('gtag_report_conversion timeout');
      resolve();
    }, 1000);
  });
}

