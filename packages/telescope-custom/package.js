Package.describe({
  summary: 'Telescope custom package',
  version: '1.0.0',
  name: 'telescope-custom'
});

Package.onUse(function (api) {

  api.use([
    'telescope-base',
    'iron:router',
    'templating'
  ], ['client', 'server']);

  api.addFiles([
    'post_extra_fields.js'
  ], ['client', 'server']);

  api.addFiles('custom.css', 'client');


  // Images
  api.addFiles([
    'public/images/amazon.png',
    'public/images/apple.png',
    'public/images/facebook.png',
    'public/images/dropbox.png',
    'public/images/google.png',
    'public/images/megaphoneW.png',
  ], ['client']);


});


