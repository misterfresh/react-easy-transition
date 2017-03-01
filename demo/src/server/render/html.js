'use strict'

import globalData from 'utils/globalData'
import Env from 'utils/Env'

let html = (head, data, initialState, __PROD__ = null) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="utf-8">
    <meta httpEquiv="X-UA-Compatible" content="IE=edge">
    ${head.title.toString()}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="icon" type="image/vnd.microsoft.icon" href="${Env().assets}assets/icons/favicon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="${Env().assets}assets/icons/favicon.ico" />
    ${head.meta.toString()}
    ${head.link.toString()} 
    
    <link href='${Env().assets}assets/css/bootstrap.min.css' rel='stylesheet' />
    <link href='${Env().assets}assets/css/font-awesome.min.css' rel='stylesheet' />
    <style data-aphrodite>${data.css.content}</style>
  </head>
  <body style="margin: 0; padding: 0; height: 100%;">
    <div id="root" style="position: relative; top: 0; bottom: 0; width: 100%;">${data.html}</div>
    <script src="${( (process.env.NODE_ENV === 'production') || (process.env.NODE_ENV === 'test') ) ? 
      (Env().assets + 'assets/js/vendors.min.js') : 'http://localhost:5000/assets/js/dll.vendor.js'}"></script>
    <script type="text/javascript" charset="utf-8">
      window.globalAppData = {}; 
      window.globalAppData.language = '${globalData.get('language')}';
      window.renderedClassNames = ${JSON.stringify(data.css.renderedClassNames)};
      window._INITIAL_STATE_ = ${JSON.stringify(initialState)};
      window._ENV_= "${process.env.NODE_ENV}";
    </script>
    <script src="${ ( (process.env.NODE_ENV === 'production') || (process.env.NODE_ENV === 'test') ) ? 
      (Env().assets + 'assets/js/app.min.js') : 'http://localhost:5000/app.js' }" ></script>
  </body>
</html>
        `
export default html