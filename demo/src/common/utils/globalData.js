const globalData =  {
  set: function(key, value){
    if(typeof window !== 'undefined'){
      if(typeof window.globalAppData === 'undefined'){
        window.globalAppData = {}
      }
      window['globalAppData'][key] = value
    } else {
      if(typeof global.globalAppData === 'undefined'){
        global.globalAppData = {}
      }
      global['globalAppData'][key] = value
    }
  },
  get: function(key){
    if(typeof window !== 'undefined'){
      if( typeof window.globalAppData !== 'undefined' && typeof window['globalAppData'][key] !== 'undefined' ){
        return window['globalAppData'][key]
      }
    } else {
      if( typeof global.globalAppData !== 'undefined' && typeof global['globalAppData'][key] !== 'undefined' ){
        return global['globalAppData'][key]
      }
    }
    return false
  }
}

export default globalData