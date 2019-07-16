const wish = async function( listOfScripts ){

  // Create a container for the script tags
  var x = document.querySelector('body').insertAdjacentHTML('afterbegin','<div id="_wishywashy"></div>')
  const container = document.querySelector("#_wishywashy")

  listOfScripts.forEach( async function( item ){
    let scriptElement = document.createElement('script')
    if( typeof item == "string" )
      scriptElement.setAttribute('src', item)
    else if( typeof item == "object" )
      Object.keys(item).forEach( d => scriptElement.setAttribute(d, item[d]))
    container.appendChild(scriptElement)
  })
}
