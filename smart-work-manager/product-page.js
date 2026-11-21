(function(){
  var settings=window.productSettings||{},link=document.getElementById('play-store-link'),pending=document.getElementById('play-store-pending'),status=document.getElementById('play-store-status');
  if(!link||!pending||!status||!settings.playStorePublished)return;
  try{var url=new URL(settings.playStoreUrl);if(url.origin!=='https://play.google.com'||url.pathname!=='/store/apps/details'||!url.searchParams.get('id'))return;link.href=url.href;link.hidden=false;pending.hidden=true;status.textContent='View availability and install through the official Google Play listing.';}catch(error){/* Keep Coming soon when configuration is invalid. */}
})();
